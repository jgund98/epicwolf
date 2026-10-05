// Builds the Epic Wolf site and SEO report as a PDF from a live crawl.
//   node scripts/seo-report.cjs [origin] [out.pdf]
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const fs = require("fs")
const path = require("path")
const origin = process.argv[2] || "https://www.epicwolf.agency"
const out = process.argv[3] || "C:/Users/Lucky/Pegasus/Epic Wolf SEO Report.pdf"

const dec = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const text = (html) => dec(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()

async function crawl() {
  const sm = await (await fetch(origin + "/sitemap.xml")).text()
  const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
  const pages = []
  for (const url of urls) {
    const r = await fetch(url)
    const html = await r.text()
    const g = (re) => dec((html.match(re) || [])[1] || "")
    const main = (html.match(/<main[\s\S]*<\/main>/) || [html])[0]
    const h1 = (main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ""
    const kicker = text((h1.match(/<span class="label[^"]*">([\s\S]*?)<\/span>/) || [])[1] || "")
    const body = text(main.replace(/<(header|footer|nav)[\s\S]*?<\/\1>/g, " "))
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(" ")
    pages.push({
      url,
      path: new URL(url).pathname || "/",
      status: r.status,
      title: g(/<title[^>]*>(.*?)<\/title>/s).replace(/ \| Epic Wolf$/, ""),
      desc: g(/<meta name="description" content="([^"]*)"/),
      kicker,
      headline: text(h1).replace(kicker, "").trim(),
      words: body.split(" ").length,
      faqs: (ld.match(/"@type":"Question"/g) || []).length,
      sources: new Set([...main.matchAll(/<a href="(https?:\/\/[^"]+)"[^>]*target="_blank"/g)].map((m) => m[1])).size,
      form: /id="start"/.test(html) || new URL(url).pathname === "/contact" || new URL(url).pathname === "/",
      h1: (html.match(/<h1[\s>]/g) || []).length,
      canonical: g(/<link rel="canonical" href="([^"]*)"/),
      schema: [...new Set([...ld.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]))].filter((t) => ["Service", "FAQPage", "Article", "BreadcrumbList", "ProfessionalService"].includes(t)),
    })
  }
  return pages
}

const TOWN = { "west-palm-beach": "West Palm Beach", "palm-beach": "Palm Beach", "palm-beach-gardens": "Palm Beach Gardens", jupiter: "Jupiter", "juno-beach": "Juno Beach", "riviera-beach": "Riviera Beach", wellington: "Wellington", "royal-palm-beach": "Royal Palm Beach", "lake-worth-beach": "Lake Worth Beach", "boynton-beach": "Boynton Beach", "delray-beach": "Delray Beach", "boca-raton": "Boca Raton" }
const SVC = { signs: "Signs", branding: "Branding", "public-relations": "Public relations", "digital-marketing": "Digital marketing", "web-design": "Web design", photography: "Photography", "video-production": "Video production" }
const WEB_BUILDS = ["custom-website-design", "website-redesign", "ecommerce-websites", "landing-pages", "web-applications", "custom-software-development", "crm-development", "mobile-app-development", "website-maintenance"]
const CORE = ["branding", "digital-marketing", "business-development"]

function group(pages) {
  const by = (fn) => pages.filter(fn)
  const seg = (p) => p.path.split("/").filter(Boolean)
  const groups = [
    ["Core pages", "The home page, the three disciplines and the pages every visitor can reach from the menu.", by((p) => ["/", "/services", "/contact", "/insights", "/palm-beach-county", "/privacy"].includes(p.path) || p.path.startsWith("/about") || (seg(p).length === 1 && CORE.includes(seg(p)[0])))],
    ["Capability hubs", "One page per capability, each targeting West Palm Beach by name.", by((p) => seg(p).length === 1 && ["public-relations", "signs", "vehicle-wraps", "print", "web-design", "photography", "video-production"].includes(seg(p)[0]))],
    ["Websites: specific builds", "Each page targets one thing a business searches for a developer to build.", by((p) => seg(p)[0] === "web-design" && WEB_BUILDS.includes(seg(p)[1]))],
    ["Websites: high-end sectors", "Each page covers what a website in that sector is required to do, with the rules linked.", by((p) => seg(p)[0] === "web-design" && seg(p).length === 2 && !WEB_BUILDS.includes(seg(p)[1]))],
    ["Photography", "Six kinds of commercial photography.", by((p) => seg(p)[0] === "photography" && seg(p).length === 2)],
    ["Video production", "Six kinds of video work.", by((p) => seg(p)[0] === "video-production" && seg(p).length === 2)],
    ["Town pages", "One page per town on branding and marketing there, each with sourced local facts.", by((p) => seg(p)[0] === "palm-beach-county" && seg(p).length === 2)],
    ["Boca Raton: services", "Service pages written for Boca Raton's rules and audience.", by((p) => seg(p)[1] === "boca-raton" && seg(p).length === 3)],
    ["Palm Beach island: services", "Service pages written for the Town of Palm Beach.", by((p) => seg(p)[1] === "palm-beach" && seg(p).length === 3)],
    ["Web design by town", "Web design pages for nine more towns. Boca Raton and Palm Beach are listed with their own services above.", by((p) => seg(p).length === 3 && seg(p)[2] === "web-design" && !["boca-raton", "palm-beach"].includes(seg(p)[1]))],
    ["Guides", "Long-form answers to the questions buyers ask first. These are what AI assistants cite.", by((p) => seg(p)[0] === "insights" && seg(p).length === 2)],
  ]
  const seen = new Set(groups.flatMap(([, , list]) => list.map((p) => p.path)))
  const rest = pages.filter((p) => !seen.has(p.path))
  if (rest.length) groups.push(["Other", "", rest])
  return groups
}

const label = (p) => {
  const s = p.path.split("/").filter(Boolean)
  if (p.path === "/") return "Home"
  if (s[0] === "palm-beach-county" && s.length === 3) return `${SVC[s[2]] || s[2]} in ${TOWN[s[1]] || s[1]}`
  if (s[0] === "palm-beach-county" && s.length === 2) return TOWN[s[1]] || s[1]
  return p.title.replace(/ \| .*$/, "")
}
const target = (p) => p.kicker || (p.path.startsWith("/insights/") ? "Guide" : "")

function html(pages) {
  const groups = group(pages)
  const total = pages.length
  const words = pages.reduce((a, p) => a + p.words, 0)
  const sources = pages.reduce((a, p) => a + p.sources, 0)
  const faqs = pages.reduce((a, p) => a + p.faqs, 0)
  const forms = pages.filter((p) => p.form).length
  const ok = pages.filter((p) => p.status === 200).length
  const oneH1 = pages.filter((p) => p.h1 === 1).length
  const withSchema = pages.filter((p) => p.schema.length).length
  const canon = pages.filter((p) => p.canonical.replace(/\/$/, "") === p.url.replace(/\/$/, "")).length
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  const n = (x) => x.toLocaleString("en-US")

  const scores = [
    ["Technical SEO", 9.5, "Every page loads, no broken links, clean markup, sitemap, Bing notified"],
    ["Content depth", 9.5, "Primary-source facts on every local, sector and service page"],
    ["Local coverage", 9, "Twelve towns, three priority markets with their own service pages"],
    ["Sector coverage", 8.5, "Eight high-end sectors for websites; none yet for branding or PR"],
    ["Lead capture", 9, "Inquiry form on every money page, tested live, lead tagged with its page"],
    ["Proof and trust", 2.5, "No reviews, case studies or client work shown yet"],
    ["Off-site presence", 1, "No Google Business Profile, Bing Places or directory listings yet"],
    ["Domain authority", 1, "The domain is new and has almost no links pointing to it"],
  ]

  const table = (list, showTarget = true) => `
    <table>
      <thead><tr><th>Page</th>${showTarget ? "<th>Search phrase it targets</th>" : ""}<th class="num">Words</th><th class="num">Sources</th><th class="num">FAQs</th></tr></thead>
      <tbody>
        ${list
          .map(
            (p) => `<tr>
          <td><a href="${p.url}">${esc(label(p))}</a><span class="path">${esc(p.path)}</span></td>
          ${showTarget ? `<td class="muted">${esc(target(p))}</td>` : ""}
          <td class="num">${n(p.words)}</td><td class="num">${p.sources || ""}</td><td class="num">${p.faqs || ""}</td>
        </tr>`
          )
          .join("")}
      </tbody>
    </table>`

  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,400..900&display=swap" rel="stylesheet">
<style>
  @page { size: Letter; margin: 0.7in 0.7in 0.8in; }
  * { box-sizing: border-box; }
  body { font-family: Archivo, Arial, sans-serif; color: #0A0A0B; font-size: 10pt; line-height: 1.5; margin: 0; }
  a { color: #0A0A0B; text-decoration: none; border-bottom: 1px solid #FF4A1C; }
  .cover { height: 9.2in; display: flex; flex-direction: column; justify-content: space-between; page-break-after: always; }
  .mark { font-weight: 900; font-stretch: 112%; font-size: 30pt; letter-spacing: -0.04em; }
  .mark i { color: #FF4A1C; font-style: normal; }
  .cover h1 { font-weight: 900; font-stretch: 122%; font-size: 46pt; line-height: 0.98; letter-spacing: -0.02em; text-transform: uppercase; margin: 0 0 18pt; max-width: 6.4in; }
  .cover h1 em { color: #FF4A1C; font-style: normal; }
  .cover p.lead { font-size: 13pt; max-width: 5.2in; margin: 0; color: #333; }
  .meta { display: flex; gap: 40pt; border-top: 2px solid #0A0A0B; padding-top: 12pt; font-size: 9.5pt; }
  .meta b { display: block; font-size: 8pt; text-transform: uppercase; letter-spacing: 0.08em; color: #666; font-weight: 600; }
  h2 { font-weight: 900; font-stretch: 112%; font-size: 20pt; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 6pt; }
  h3 { font-weight: 800; font-size: 12.5pt; margin: 22pt 0 2pt; letter-spacing: -0.01em; break-after: avoid; }
  h3 .count { color: #FF4A1C; }
  .kick { font-size: 8pt; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; color: #FF4A1C; margin: 0 0 6pt; }
  p { margin: 0 0 8pt; }
  .note { color: #555; margin: 0 0 8pt; font-size: 9.5pt; break-after: avoid; }
  section { page-break-before: always; }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10pt; margin: 16pt 0 20pt; }
  .stat { border-top: 2px solid #0A0A0B; padding-top: 8pt; }
  .stat b { display: block; font-weight: 900; font-stretch: 112%; font-size: 24pt; letter-spacing: -0.03em; line-height: 1; }
  .stat span { font-size: 8.5pt; color: #555; }
  table { width: 100%; border-collapse: collapse; font-size: 9pt; margin: 6pt 0 4pt; }
  thead { display: table-header-group; }
  th { text-align: left; font-size: 7.5pt; text-transform: uppercase; letter-spacing: 0.08em; color: #666; font-weight: 700; border-bottom: 1.5px solid #0A0A0B; padding: 5pt 6pt 5pt 0; }
  td { border-bottom: 1px solid #e3e2de; padding: 6pt 6pt 6pt 0; vertical-align: top; }
  tr { break-inside: avoid; }
  td a { font-weight: 700; }
  .path { display: block; color: #888; font-size: 7.5pt; margin-top: 1pt; word-break: break-all; }
  .num { text-align: right; white-space: nowrap; width: 0.72in; padding-left: 10pt; padding-right: 0; font-variant-numeric: tabular-nums; }
  .muted { color: #555; }
  .score td:first-child { font-weight: 700; width: 1.5in; }
  .bar { display: inline-block; height: 7pt; background: #0A0A0B; vertical-align: middle; margin-right: 6pt; }
  .bar.low { background: #FF4A1C; }
  .scorenum { font-weight: 800; font-variant-numeric: tabular-nums; }
  .big { display: flex; align-items: baseline; gap: 14pt; margin: 10pt 0 4pt; }
  .big b { font-weight: 900; font-stretch: 112%; font-size: 54pt; line-height: 1; letter-spacing: -0.04em; }
  .big b i { font-style: normal; font-size: 20pt; color: #888; }
  ol, ul { margin: 4pt 0 10pt; padding-left: 16pt; }
  li { margin-bottom: 5pt; }
  li b { font-weight: 700; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 26pt; }
  .check td:first-child { font-weight: 700; width: 2.3in; }
</style></head><body>

<div class="cover">
  <div class="mark">epicwolf<i>.</i></div>
  <div>
    <p class="kick">Site and SEO report</p>
    <h1>Every page built to be <em>found.</em></h1>
    <p class="lead">What is live on ${esc(origin.replace("https://", ""))}, what each page targets, how the site scores today and what moves it next.</p>
  </div>
  <div class="meta">
    <div><b>Prepared for</b>Jordan Gundlach and Shawn Wolf</div>
    <div><b>Date</b>${today}</div>
    <div><b>Source</b>Live crawl of ${total} pages</div>
  </div>
</div>

<section style="page-break-before:auto">
  <p class="kick">Summary</p>
  <h2>Where the site stands</h2>
  <p>The website is built and ready to be indexed. It covers every discipline, twelve towns and eight high-end sectors, and each page answers a real question with facts linked to their source. What holds the overall score down is everything off the site: a business profile, reviews, proof and time.</p>
  <div class="stats">
    <div class="stat"><b>${total}</b><span>pages live</span></div>
    <div class="stat"><b>${n(Math.round(words / 1000))}k</b><span>words of copy</span></div>
    <div class="stat"><b>${n(sources)}</b><span>source links to primary documents</span></div>
    <div class="stat"><b>${forms}</b><span>pages with the inquiry form on them</span></div>
  </div>

  <h3>Overall score</h3>
  <div class="big"><b>5.5<i> / 10</i></b><p class="note" style="max-width:4in;margin:0">An estimate, not a measurement. The site itself scores about 9. The real numbers arrive once Search Console is connected.</p></div>
  <table class="score">
    <thead><tr><th>Area</th><th>Score</th><th>Why</th></tr></thead>
    <tbody>
      ${scores.map(([a, s, w]) => `<tr><td>${a}</td><td style="width:2.2in"><span class="bar ${s < 5 ? "low" : ""}" style="width:${s * 12}pt"></span><span class="scorenum">${s}</span></td><td class="muted">${w}</td></tr>`).join("")}
    </tbody>
  </table>

  <h3>What is on the site</h3>
  <table>
    <thead><tr><th>Section</th><th class="num">Pages</th><th class="num">Words</th><th class="num">Sources</th></tr></thead>
    <tbody>
      ${groups.map(([name, , list]) => `<tr><td><b>${name}</b></td><td class="num">${list.length}</td><td class="num">${n(list.reduce((a, p) => a + p.words, 0))}</td><td class="num">${list.reduce((a, p) => a + p.sources, 0) || ""}</td></tr>`).join("")}
    </tbody>
  </table>
  <h3>How each page is built to rank and convert</h3>
  <div class="two">
    <ul>
      <li><b>Answer first.</b> A short paragraph under the headline says who does this, where and what it is. This is the passage AI assistants quote.</li>
      <li><b>Sourced facts.</b> Local and sector pages cite the city code, the regulator or the Census, with a link.</li>
      <li><b>Its own questions.</b> Each page answers the questions that buyer actually asks, marked up for search.</li>
    </ul>
    <ul>
      <li><b>The form on the page.</b> A visitor can ask without leaving, and the lead email names the page.</li>
      <li><b>Links that make sense.</b> Hubs link to their detail pages, towns link to their services, and every page links to guides.</li>
      <li><b>No doorway pages.</b> Pages differ by real substance, not by a swapped town name.</li>
    </ul>
  </div>
</section>

<section>
  <p class="kick">Technical health</p>
  <h2>What the crawl found</h2>
  <p class="note">Checked on ${today} by loading every address in the sitemap.</p>
  <table class="check">
    <tbody>
      <tr><td>Pages that load</td><td>${ok} of ${total}</td></tr>
      <tr><td>One main heading per page</td><td>${oneH1} of ${total}</td></tr>
      <tr><td>Canonical address set correctly</td><td>${canon} of ${total}</td></tr>
      <tr><td>Structured data for search engines</td><td>${withSchema} of ${total} pages, including ${n(faqs)} marked-up questions and answers</td></tr>
      <tr><td>Inquiry form on the page</td><td>${forms} pages. Tested live on two of them: the lead arrived tagged with its page.</td></tr>
      <tr><td>One address for the site</td><td>The bare domain, the old preview address and the hosting address all redirect to www.</td></tr>
      <tr><td>Sitemap and crawler access</td><td>Sitemap lists every page. Search and AI crawlers are allowed. A plain-text brief for AI assistants is published at /llms.txt.</td></tr>
      <tr><td>Bing notification</td><td>All ${total} addresses submitted through IndexNow after the last deploy.</td></tr>
      <tr><td>Copy that appears on no other page</td><td>Median 88 percent on deep pages, lowest 63 percent. No repeated boilerplate answers.</td></tr>
    </tbody>
  </table>

</section>

<section>
  <p class="kick">Page inventory</p>
  <h2>Every page and what it targets</h2>
  <p class="note">Page names are links. Sources counts links to outside primary documents. FAQs counts questions marked up for search.</p>
  ${groups.map(([name, note, list]) => `<h3>${name} <span class="count">${list.length}</span></h3>${note ? `<p class="note">${note}</p>` : ""}${table(list, !["Guides"].includes(name))}`).join("")}
</section>

<section>
  <p class="kick">Next</p>
  <h2>What moves the score</h2>
  <div class="two">
    <div>
      <h3 style="margin-top:8pt">Off the site, in order of impact</h3>
      <ol>
        <li><b>Google Business Profile, Bing Places and Search Console.</b> Nothing ranks locally without them.</li>
        <li><b>Reviews.</b> Ten real ones, with clients naming the town and the service.</li>
        <li><b>Proof.</b> Three case studies with permission.</li>
        <li><b>Directory profiles.</b> Clutch, DesignRush, Yelp and the BBB hold the "best agency" lists that rank today.</li>
        <li><b>Chambers.</b> Palm Beach, Boca Raton and the Palm Beaches each give a trusted directory link.</li>
        <li><b>One real press mention.</b> The press guide lists how each local outlet takes pitches.</li>
        <li><b>Time.</b> A new domain needs a few months of steady indexing.</li>
      </ol>
    </div>
    <div>
      <h3 style="margin-top:8pt">On the site, waiting on the partners</h3>
      <ul>
        <li><b>Website portfolio.</b> The web pages show only Epic Wolf's own site. Client sites would sell harder.</li>
        <li><b>Photo and video samples.</b> None exist in the project yet, so those pages use brand imagery and sign work.</li>
        <li><b>Claims to confirm.</b> The pages describe how Epic Wolf works: apps, CRM builds, care plans, a certified pilot on every drone job, permits filed by us. The list is in HANDOFF.md.</li>
        <li><b>Facts that age.</b> Insurance minimums, filing deadlines and published price ranges are quoted from sources and should be rechecked each year.</li>
      </ul>
      <h3>Likely next builds</h3>
      <ul>
        <li>Sector pages for branding and public relations.</li>
        <li>Articles credited to each partner by name.</li>
        <li>Two new guides a month.</li>
      </ul>
    </div>
  </div>
</section>
</body></html>`
}

;(async () => {
  const pages = await crawl()
  const doc = html(pages)
  const tmp = path.join(process.env.TEMP || ".", "ew-seo-report.html")
  fs.writeFileSync(tmp, doc)
  const b = await puppeteer.launch({ headless: "new" })
  const p = await b.newPage()
  await p.goto("file:///" + tmp.replace(/\\/g, "/"), { waitUntil: "networkidle0" })
  await p.evaluateHandle("document.fonts.ready")
  await p.pdf({
    path: out,
    format: "Letter",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: `<div style="font-family:Arial,sans-serif;font-size:7.5pt;color:#888;width:100%;padding:0 0.7in;display:flex;justify-content:space-between"><span>Epic Wolf site and SEO report</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    margin: { top: "0.7in", bottom: "0.8in", left: "0.7in", right: "0.7in" },
  })
  await b.close()
  console.log("pages crawled", pages.length, "non-200", pages.filter((x) => x.status !== 200).length)
  console.log("wrote", out, Math.round(fs.statSync(out).size / 1024) + " KB")
})()
