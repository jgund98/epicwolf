// Crawls every sitemap URL on the live site and reports on-page SEO problems.
const ORIGIN = process.env.SITE_ORIGIN || "https://www.epicwolf.agency"
const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text()
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const titles = new Map(), descs = new Map(), links = new Set(), issues = []
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').trim()
for (const u of urls) {
  const res = await fetch(u)
  const html = await res.text()
  if (res.status !== 200) issues.push(`${u} status ${res.status}`)
  const title = strip((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "")
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || ""
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || ""
  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (!title) issues.push(`${u} no title`); else if (title.length > 65) issues.push(`${u} title ${title.length} chars: ${title}`)
  if (!desc) issues.push(`${u} no meta description`); else if (desc.length > 160) issues.push(`${u} description ${desc.length} chars`)
  if (canon.replace(/\/$/, "") !== u.replace(/\/$/, "")) issues.push(`${u} canonical mismatch: ${canon}`)
  if (h1 !== 1) issues.push(`${u} has ${h1} h1`)
  titles.set(title, [...(titles.get(title) || []), u]); descs.set(desc, [...(descs.get(desc) || []), u])
  for (const m of html.matchAll(/<img\b[^>]*>/g)) { const t = m[0]; if (!/\balt=/.test(t)) issues.push(`${u} img without alt: ${t.slice(0, 90)}`) }
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]) } catch (e) { issues.push(`${u} invalid JSON-LD: ${e.message}`) } }
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) if (!m[1].startsWith("/_next")) links.add(m[1])
}
for (const [t, us] of titles) if (us.length > 1) issues.push(`duplicate title "${t}" on ${us.length} pages`)
for (const [d, us] of descs) if (us.length > 1 && d) issues.push(`duplicate description on ${us.join(", ")}`)
for (const l of links) { const r = await fetch(ORIGIN + l, { redirect: "manual" }); if (r.status >= 400) issues.push(`broken internal link ${l} -> ${r.status}`) }
console.log(`${urls.length} pages, ${links.size} internal links checked`)
console.log(issues.length ? issues.join("\n") : "no issues")
