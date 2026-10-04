// Audits and screenshots the town x discipline pages on desktop and phone.
// Usage: node scripts/local-shots.cjs [origin] [outDir]
// Checks: one h1, horizontal overflow, word count, how much of the copy is
// unique to each page, schema types, CTA count and that the form is on the page.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const fs = require("fs")
const origin = process.argv[2] || "http://localhost:3641"
const out = process.argv[3] || "shots/local"
const pages = [
  "boca-raton/signs", "boca-raton/branding", "boca-raton/public-relations", "boca-raton/digital-marketing", "boca-raton/web-design",
  "palm-beach/signs", "palm-beach/branding", "palm-beach/public-relations", "palm-beach/digital-marketing",
]
const shoot = (process.env.SHOTS || "boca-raton/signs,palm-beach/public-relations").split(",")
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

;(async () => {
  fs.mkdirSync(out, { recursive: true })
  const browser = await puppeteer.launch({ headless: "new" })
  const data = {}
  for (const vp of [{ name: "desktop", width: 1440, height: 900 }, { name: "phone", width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }]) {
    const page = await browser.newPage()
    await page.setViewport(vp)
    for (const p of pages) {
      const r = await page.goto(`${origin}/palm-beach-county/${p}`, { waitUntil: "networkidle2" })
      // Walk the page so scroll-revealed sections finish animating.
      const h = await page.evaluate(() => document.documentElement.scrollHeight)
      for (let y = 0; y < h; y += vp.height * 0.8) {
        await page.evaluate((y) => window.scrollTo(0, y), y)
        await sleep(160)
      }
      await sleep(400)
      const info = await page.evaluate(() => {
        const main = document.querySelector("main") || document.body
        const text = main.innerText
        const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => {
          try {
            const j = JSON.parse(s.textContent)
            return (j["@graph"] || [].concat(j)).map((x) => [].concat(x["@type"]).join("+"))
          } catch {
            return ["BAD"]
          }
        })
        return {
          h1: document.querySelectorAll("h1").length,
          title: document.title,
          desc: document.querySelector('meta[name="description"]')?.content.length,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          words: text.split(/\s+/).length,
          sentences: text.split(/(?<=[.?])\s+|\n+/).map((x) => x.trim()).filter((x) => x.split(" ").length >= 7),
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          form: !!document.querySelector("#start form"),
          ctas: [...document.querySelectorAll('a[href="#start"], a[href^="tel:"]')].length,
          sources: main.querySelectorAll('a[target="_blank"]').length,
          internal: new Set([...main.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute("href"))).size,
          ld: ld.join(","),
        }
      })
      info.status = r.status()
      data[`${vp.name}:${p}`] = info
      if (shoot.includes(p)) {
        await page.evaluate(() => window.scrollTo(0, 0))
        await sleep(300)
        await page.screenshot({ path: `${out}/${p.replace("/", "-")}-${vp.name}.jpg`, fullPage: true, type: "jpeg", quality: 60 })
      }
    }
    await page.close()
  }
  await browser.close()

  const count = {}
  for (const p of pages) for (const x of new Set(data[`desktop:${p}`].sentences)) count[x] = (count[x] || 0) + 1
  for (const p of pages) {
    const d = data[`desktop:${p}`]
    const m = data[`phone:${p}`]
    const uniq = d.sentences.filter((x) => count[x] === 1).length
    console.log(
      `${d.status} ${p.padEnd(30)} h1:${d.h1} words:${d.words} unique:${Math.round((uniq / d.sentences.length) * 100)}% sources:${d.sources} links:${d.internal} ctas:${d.ctas} form:${d.form} overflow:${d.overflow}/${m.overflow} title:${d.title.length} desc:${d.desc}`
    )
    if (p === pages[0]) console.log("   schema:", d.ld, "| canonical:", d.canonical)
  }
})()
