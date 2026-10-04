// Audits the town pages: word count, FAQ count, outbound sources, and how much
// of each page's sentence set is unique to it. Also screenshots the ground section.
// Usage: node scripts/town-audit.cjs [origin] [--shots]
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const origin = (process.argv[2] && !process.argv[2].startsWith("--") && process.argv[2]) || "http://localhost:3640"
const slugs = ["west-palm-beach","palm-beach","palm-beach-gardens","jupiter","boca-raton","delray-beach","boynton-beach","wellington","lake-worth-beach","royal-palm-beach","riviera-beach","juno-beach"]
;(async () => {
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  const pages = {}
  for (const s of slugs) {
    const r = await page.goto(`${origin}/palm-beach-county/${s}`, { waitUntil: "networkidle2" })
    pages[s] = await page.evaluate(() => {
      const main = document.querySelector("main") || document.body
      const text = main.innerText
      return {
        words: text.split(/\s+/).length,
        sentences: text.split(/(?<=[.?])\s+|\n+/).map((x) => x.trim()).filter((x) => x.split(" ").length >= 6),
        faqs: JSON.parse([...document.querySelectorAll('script[type="application/ld+json"]')].map((x) => x.textContent).find((t) => t.includes("FAQPage")) || "{}"),
        ext: [...main.querySelectorAll('a[target="_blank"]')].map((a) => a.href),
        h2: [...document.querySelectorAll("h2")].map((h) => h.innerText.replace(/\s+/g, " ")),
        overflow: document.documentElement.scrollWidth > innerWidth,
      }
    })
    pages[s].status = r.status()
  }
  const count = {}
  for (const s of slugs) for (const x of new Set(pages[s].sentences)) count[x] = (count[x] || 0) + 1
  for (const s of slugs) {
    const p = pages[s], set = [...new Set(p.sentences)]
    const uniq = set.filter((x) => count[x] === 1).length
    const fq = JSON.stringify(p.faqs).match(/"Question"/g)?.length || 0
    console.log(`${s} [${p.status}] words:${p.words} unique-sentences:${Math.round((uniq / set.length) * 100)}% faqSchema:${fq} sources:${p.ext.length} overflow:${p.overflow}`)
  }
  console.log("h2:", pages["jupiter"].h2.join(" | "))
  console.log("shared sentences:", Object.entries(count).filter(([, n]) => n > 1).map(([x, n]) => `${n}x ${x.slice(0, 70)}`).join("\n  "))
  if (process.argv.includes("--shots")) {
    for (const [w, h, m] of [[1440, 900, false], [390, 844, true]]) {
      await page.setViewport({ width: w, height: h, isMobile: m, hasTouch: m, deviceScaleFactor: m ? 2 : 1 })
      await page.goto(`${origin}/palm-beach-county/lake-worth-beach`, { waitUntil: "networkidle2" })
      const y = await page.evaluate(() => { const el = [...document.querySelectorAll("p.label")].find((p) => p.innerText.includes("On the ground")); el.scrollIntoView({ block: "start" }); window.scrollBy(0, -120); return window.scrollY })
      for (let i = 0; i < 3; i++) { await new Promise((r) => setTimeout(r, 900)); await page.screenshot({ path: `${process.env.TEMP}/town-${w}-${i}.png` }); await page.evaluate((hh) => window.scrollBy(0, hh * 0.85), h); }
      console.log("overflow", w, await page.evaluate(() => document.documentElement.scrollWidth > innerWidth))
    }
  }
  await browser.close()
})()
