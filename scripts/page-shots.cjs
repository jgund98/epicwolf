// Full-page screenshots of any paths, desktop and phone, after walking the
// page so scroll reveals finish. Also reports horizontal overflow.
//   node scripts/page-shots.cjs http://localhost:3641 shots/pages /web-design/law-firm-websites /photography
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const fs = require("fs")
const [origin, out, ...paths] = process.argv.slice(2)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
;(async () => {
  fs.mkdirSync(out, { recursive: true })
  const b = await puppeteer.launch({ headless: "new" })
  for (const vp of [{ name: "d", width: 1440, height: 900 }, { name: "m", width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }]) {
    const p = await b.newPage()
    await p.setViewport(vp)
    for (const path of paths) {
      const r = await p.goto(origin + path, { waitUntil: "networkidle2" })
      const h = await p.evaluate(() => document.documentElement.scrollHeight)
      for (let y = 0; y < h; y += vp.height * 0.8) {
        await p.evaluate((y) => window.scrollTo(0, y), y)
        await sleep(150)
      }
      await p.evaluate(() => window.scrollTo(0, 0))
      await sleep(500)
      const overflow = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)
      const name = (path.replace(/^\//, "").replace(/\//g, "_") || "home") + "-" + vp.name
      await p.screenshot({ path: `${out}/${name}.jpg`, fullPage: true, type: "jpeg", quality: 62 })
      console.log(r.status(), path, vp.name, "height", h, overflow ? "OVERFLOW" : "")
    }
    await p.close()
  }
  await b.close()
})()
