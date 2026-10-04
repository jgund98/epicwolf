// Lints the town x discipline pages and the three-market guides against
// VOICE.md, and checks that every cited source URL still answers.
//   node scripts/local-audit.mjs          copy laws only
//   node scripts/local-audit.mjs --links  also fetch every source link
import fs from "node:fs"

const files = ["lib/local-boca.ts", "lib/local-palm-beach.ts", "lib/guides-local.ts"]
const BANNED = [
  "cut through", "break through", "stand out from the crowd", "amplify", "make some noise", "go viral", "buzz",
  "elevate", "unlock", "seamless", "leverage", "tailored solutions", "game-changer", "passionate", "unleash",
  "synergy", "cutting-edge", "look no further", "next level", "SunFest", "Rosemary Square", "one person",
  "award-winning", "guarantee", "#1", "best in", "in-house print", "licensed and insured",
]
let problems = 0
const flag = (f, msg) => {
  problems++
  console.log(`  ${f}: ${msg}`)
}
const words = (s) => s.trim().split(/\s+/).length
const links = new Set()

for (const f of files) {
  const s = fs.readFileSync(f, "utf8").replace(/\r/g, "")
  if (/[—–]/.test(s)) flag(f, "em or en dash")
  if (/\.\.\.|…/.test(s)) flag(f, "ellipsis")
  if (/!"/.test(s) || /![ \n]/.test(s.replace(/!==?/g, ""))) flag(f, "exclamation point")

  // No commas in headline, h2, title, metaTitle, cta line or plan/ground titles.
  for (const m of s.matchAll(/\b(headline|h2|title|metaTitle|line|kicker): "([^"]*)"/g)) {
    const [, key, val] = m
    if (key !== "kicker" && val.includes(",")) flag(f, `comma in ${key}: ${val}`)
    if (key === "metaTitle" && val.length > 62) flag(f, `metaTitle ${val.length} chars: ${val}`)
  }
  for (const m of s.matchAll(/(metaDescription|description):\s*\n?\s*"([^"]*)"/g)) {
    if (m[2].length > 165) flag(f, `${m[1]} ${m[2].length} chars: ${m[2].slice(0, 50)}`)
    if (m[2].length < 110) flag(f, `${m[1]} only ${m[2].length} chars: ${m[2].slice(0, 50)}`)
  }
  // Answer capsules: 40 to 80 words.
  for (const m of s.matchAll(/\banswer:\s*\n?\s*"([^"]*)"/g)) {
    const n = words(m[1])
    if (n < 35 || n > 85) flag(f, `answer ${n} words: ${m[1].slice(0, 50)}`)
  }
  // FAQ answers: 40 to 90 words, answer first.
  for (const m of s.matchAll(/q: "([^"]*)",\s*\n\s*a: "([^"]*)"/g)) {
    const n = words(m[2])
    if (n < 40 || n > 92) flag(f, `faq ${n} words: ${m[1]}`)
  }
  for (const b of BANNED) {
    const re = new RegExp(b.replace(/[.*+?^${}()|[\]\\#]/g, "\\$&"), "i")
    const hit = s.split("\n").find((l) => re.test(l) && !l.trim().startsWith("//") && !l.trim().startsWith("*"))
    if (hit) flag(f, `banned "${b}": ${hit.trim().slice(0, 90)}`)
  }
  for (const m of s.matchAll(/href: (?:"([^"]+)"|`([^`]+)`)/g)) {
    let u = m[1] ?? m[2]
    u = u
      .replace("${CODE}", f.includes("boca") ? "https://library.municode.com/fl/boca_raton/codes/code_of_ordinances?nodeId=" : "https://library.municode.com/fl/palm_beach/codes/code_of_ordinances?nodeId=")
      .replace("${BOCA}", "https://library.municode.com/fl/boca_raton/codes/code_of_ordinances?nodeId=")
      .replace("${PB}", "https://library.municode.com/fl/palm_beach/codes/code_of_ordinances?nodeId=")
    if (!u.includes("${")) links.add(u)
  }
  for (const m of s.matchAll(/const (CENSUS|GBP|TOWN_REPORT) = "([^"]+)"/g)) links.add(m[2])
}
console.log(problems ? `${problems} copy problems` : "copy laws: clean")

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
  const out = await Promise.all(list.map(check))
  const bad = list.map((u, i) => [out[i], u]).filter(([st]) => st !== 200)
  console.log(`${list.length - bad.length} of ${list.length} returned 200`)
  for (const [st, u] of bad) console.log(`  ${st}  ${u}`)
}
