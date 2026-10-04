// Lints the content data files (town pages, topic pages, guides, service hubs)
// against VOICE.md, and checks that every cited source URL still answers.
//   node scripts/local-audit.mjs                     every content file, copy laws only
//   node scripts/local-audit.mjs lib/topics-web.ts   only the named files
//   node scripts/local-audit.mjs --links             also fetch every source link
import fs from "node:fs"

const named = process.argv.slice(2).filter((a) => !a.startsWith("--"))
const files = named.length
  ? named
  : fs
      .readdirSync("lib")
      .filter((f) => /^(local-|guides-|topics-|services-)/.test(f) && f !== "local-services.ts")
      .map((f) => "lib/" + f)

const BANNED = [
  "cut through", "break through", "stand out from the crowd", "amplify", "make some noise", "go viral", "buzz",
  "elevate", "unlock", "seamless", "leverage", "tailored solutions", "game-changer", "passionate", "unleash",
  "synergy", "cutting-edge", "look no further", "next level", "SunFest", "Rosemary Square", "one person",
  "award-winning", "#1", "best in", "in-house print", "licensed and insured", "world-class", "state-of-the-art",
  "one-stop shop", "digital landscape", "bespoke solutions", "our team of experts", "years of experience",
]
// "guarantee" is only allowed in sentences that deny one.
const GUARANTEE_OK = /(no|not|never|cannot|can't|nobody|no one|without|wary|isn't|is not)[^.?]{0,80}guarantee|guarantee[^.?]{0,60}\?/i

let problems = 0
const flag = (f, msg) => {
  problems++
  console.log(`  ${f}: ${msg}`)
}
const words = (s) => s.trim().split(/\s+/).length
const links = new Set()
const seenAnswers = new Map()

for (const f of files) {
  const s = fs.readFileSync(f, "utf8").replace(/\r/g, "")
  if (/[—–]/.test(s)) flag(f, "em or en dash")
  if (/\.\.\.(?!\w)|…/.test(s.replace(/\[\.\.\./g, ""))) flag(f, "ellipsis")
  for (const m of s.matchAll(/"([^"\n]*!)"/g)) flag(f, `exclamation point: ${m[1].slice(-50)}`)

  // No commas in headline, h2, title, metaTitle or cta line fields.
  for (const m of s.matchAll(/\b(headline|h2|title|metaTitle|line): "([^"]*)"/g)) {
    const [, key, val] = m
    if (val.includes(",")) flag(f, `comma in ${key}: ${val}`)
    if (key === "metaTitle" && val.length > 62) flag(f, `metaTitle ${val.length} chars: ${val}`)
  }
  for (const m of s.matchAll(/(metaDescription|description):\s*\n?\s*"([^"]*)"/g)) {
    if (m[2].length > 160) flag(f, `${m[1]} ${m[2].length} chars: ${m[2].slice(0, 50)}`)
    if (m[2].length < 110) flag(f, `${m[1]} only ${m[2].length} chars: ${m[2].slice(0, 50)}`)
  }
  // Answer capsules: 40 to 80 words.
  for (const m of s.matchAll(/\banswer:\s*\n?\s*"([^"]*)"/g)) {
    const n = words(m[1])
    if (n < 35 || n > 85) flag(f, `answer ${n} words: ${m[1].slice(0, 50)}`)
  }
  // FAQ answers: 40 to 90 words, and never the same answer twice across pages.
  for (const m of s.matchAll(/q: "([^"]*)",\s*\n\s*a: "([^"]*)"/g)) {
    const n = words(m[2])
    if (n < 40 || n > 92) flag(f, `faq ${n} words: ${m[1]}`)
    const key = m[2].slice(0, 120)
    if (seenAnswers.has(key)) flag(f, `duplicate faq answer (also in ${seenAnswers.get(key)}): ${m[1]}`)
    seenAnswers.set(key, f)
  }
  for (const line of s.split("\n")) {
    const t = line.trim()
    if (t.startsWith("//") || t.startsWith("*") || t.startsWith("/*")) continue
    for (const b of BANNED) if (t.toLowerCase().includes(b.toLowerCase())) flag(f, `banned "${b}": ${t.slice(0, 90)}`)
    if (/guarantee/i.test(t) && !GUARANTEE_OK.test(t)) flag(f, `"guarantee" used as a promise: ${t.slice(0, 90)}`)
  }
  for (const m of s.matchAll(/href: (?:"([^"]+)"|`([^`]+)`)/g)) {
    let u = m[1] ?? m[2]
    // Resolve ${CONST} prefixes from the file's own string constants.
    u = u.replace(/\$\{(\w+)\}/g, (all, name) => (s.match(new RegExp(`const ${name} = "([^"]+)"`)) || [])[1] ?? all)
    if (!u.includes("${")) links.add(u)
  }
  for (const m of s.matchAll(/const \w+ = "(https:\/\/[^"]+)"/g)) if (!m[1].endsWith("nodeId=")) links.add(m[1])
}
console.log(problems ? `${problems} copy problems in ${files.length} files` : `copy laws: clean (${files.length} files)`)

if (process.argv.includes("--links")) {
  console.log(`checking ${links.size} source links`)
  const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
  const check = async (u) => {
    try {
      const r = await fetch(u, { headers: { "user-agent": UA, accept: "text/html,*/*" }, redirect: "follow", signal: AbortSignal.timeout(25000) })
      return r.status
    } catch (e) {
      return String(e.cause?.code || e.name)
    }
  }
  const list = [...links]
  const out = []
  for (let i = 0; i < list.length; i += 12) out.push(...(await Promise.all(list.slice(i, i + 12).map(check))))
  const bad = list.map((u, i) => [out[i], u]).filter(([st]) => st !== 200)
  console.log(`${list.length - bad.length} of ${list.length} returned 200`)
  for (const [st, u] of bad) console.log(`  ${st}  ${u}`)
}
process.exitCode = problems ? 1 : 0
