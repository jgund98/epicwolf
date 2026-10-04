// Crawls a running build and checks every content page: status, one h1, title
// and description lengths, canonical, schema, broken internal links, word
// count and how much of each page's copy appears on no other page.
//   node scripts/content-check.cjs [origin]     (default http://localhost:3641)
const origin = process.argv[2] || "http://localhost:3641"

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<(header|footer|nav)[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')

;(async () => {
  const sm = await (await fetch(origin + "/sitemap.xml")).text()
  const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname || "/")
  const known = new Set(urls.map((u) => u.replace(/\/$/, "") || "/"))
  const pages = []
  for (const u of urls) {
    const r = await fetch(origin + u)
    const html = await r.text()
    const g = (re) => (html.match(re) || [])[1] || ""
    const title = g(/<title[^>]*>(.*?)<\/title>/s).replace(/&#x27;/g, "'").replace(/&amp;/g, "&")
    const text = strip(html)
    const sentences = text
      .split(/(?<=[.?])\s+|\n+/)
      .map((x) => x.trim())
      .filter((x) => x.split(" ").length >= 8)
    const links = [...new Set([...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/\/$/, "") || "/"))].filter(
      (l) => !l.startsWith("/_next") && !l.startsWith("/img") && !/\.(png|jpg|svg|ico|webp|xml|txt|webmanifest)$/.test(l)
    )
    pages.push({
      u,
      status: r.status,
      title,
      desc: g(/<meta name="description" content="([^"]*)"/).length,
      h1: (html.match(/<h1[\s>]/g) || []).length,
      canon: g(/<link rel="canonical" href="([^"]*)"/),
      faq: html.includes('"FAQPage"'),
      form: html.includes('id="start"'),
      words: text.split(/\s+/).filter(Boolean).length,
      sentences,
      links,
    })
  }
  const count = new Map()
  for (const p of pages) for (const s of new Set(p.sentences)) count.set(s, (count.get(s) || 0) + 1)

  let issues = 0
  const flag = (m) => {
    issues++
    console.log("  ! " + m)
  }
  const broken = new Map()
  for (const p of pages) {
    if (p.status !== 200) flag(`${p.u} status ${p.status}`)
    if (p.h1 !== 1) flag(`${p.u} has ${p.h1} h1`)
    if (p.title.length > 62) flag(`${p.u} title ${p.title.length}: ${p.title}`)
    if (p.u !== "/privacy" && (p.desc < 100 || p.desc > 162)) flag(`${p.u} description ${p.desc}`)
    for (const l of p.links) if (!known.has(l) && l !== "/lab") broken.set(l, (broken.get(l) || []).concat(p.u))
    p.unique = p.sentences.length ? Math.round((p.sentences.filter((s) => count.get(s) === 1).length / p.sentences.length) * 100) : 100
  }
  // Links to pages that are not in the sitemap: verify they at least respond.
  for (const [l, from] of broken) {
    const r = await fetch(origin + l, { redirect: "manual" })
    if (r.status >= 400) flag(`broken link ${l} (${r.status}) from ${from.slice(0, 3).join(", ")}`)
  }
  const deep = pages.filter((p) => p.u.split("/").length > 2 && !p.u.startsWith("/about"))
  const low = deep.filter((p) => p.unique < 60).sort((a, b) => a.unique - b.unique)
  console.log(`${pages.length} pages, ${pages.reduce((a, p) => a + p.words, 0)} words`)
  console.log(`unique copy on deep pages: min ${Math.min(...deep.map((p) => p.unique))}%, median ${deep.map((p) => p.unique).sort((a, b) => a - b)[Math.floor(deep.length / 2)]}%`)
  for (const p of low) console.log(`  low unique ${p.unique}% ${p.u} (${p.words} words)`)
  const thin = deep.filter((p) => p.words < 700)
  for (const p of thin) console.log(`  thin ${p.words} words ${p.u}`)
  // The most repeated sentences across deep pages: boilerplate to watch.
  const rep = [...count.entries()].filter(([s, n]) => n >= 6 && s.length > 60).sort((a, b) => b[1] - a[1]).slice(0, 8)
  for (const [s, n] of rep) console.log(`  repeated x${n}: ${s.slice(0, 110)}`)
  console.log(issues ? `${issues} issues` : "no issues")
})()
