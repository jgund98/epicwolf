// Screenshot our own site for the Digital + Web service imagery (no client work anywhere).
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const shots = [
  ["own-home-d", "/", 1440, 900, false, 0],
  ["own-services-d", "/services", 1440, 900, false, 0],
  ["own-kinetic-d", "/", 1440, 900, false, "section[aria-label='What we do']"],
  ["own-home-m", "/", 390, 844, true, 0],
  ["own-names-m", "/", 390, 844, true, "#names-title"],
  ["own-561-m", "/", 390, 844, true, "#local-title"],
  ["own-about-m", "/about", 390, 844, true, 0],
  ["own-contact-m", "/contact", 390, 844, true, 0],
]
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  for (const [name, path, w, h, mob, target] of shots) {
    const p = await b.newPage()
    await p.setViewport({ width: w, height: h, deviceScaleFactor: mob ? 2 : 1.5, isMobile: mob, hasTouch: mob })
    await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
    await p.goto("http://localhost:3641" + path, { waitUntil: "networkidle2" })
    await new Promise((r) => setTimeout(r, 2200))
    if (target) {
      await p.evaluate((sel) => { const el = document.querySelector(sel); window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 140) }, target)
      await new Promise((r) => setTimeout(r, 1800))
    }
    await p.screenshot({ path: `raw/${name}.jpg`, type: "jpeg", quality: 90 })
    await p.close()
    console.log("ok", name)
  }
  await b.close()
})()
