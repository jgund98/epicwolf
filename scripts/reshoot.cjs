const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sites = [["gusrenny", "https://www.gusrenny.com", 11000], ["carol", "https://carol.epicdevsolutions.com", 6000]]
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  for (const [k, url, wait] of sites) for (const [tag, w, h, m] of [["d", 1440, 900, false], ["m", 390, 844, true]]) {
    const p = await b.newPage()
    await p.setViewport({ width: w, height: h, deviceScaleFactor: m ? 2 : 1.5, isMobile: m, hasTouch: m })
    await p.goto(url, { waitUntil: "networkidle2", timeout: 45000 })
    await new Promise((r) => setTimeout(r, wait))
    await p.evaluate(() => {
      document.querySelectorAll('[role="dialog"], [aria-modal="true"]').forEach((e) => e.remove())
      for (const el of document.querySelectorAll("body *")) {
        const s = getComputedStyle(el)
        if (s.position === "fixed" && +s.zIndex >= 40 && el.tagName !== "HEADER" && !el.closest("header") && el.getBoundingClientRect().height > 200) el.remove()
      }
    })
    await new Promise((r) => setTimeout(r, 800))
    await p.screenshot({ path: `raw/sites/${k}-${tag}.jpg`, type: "jpeg", quality: 88 })
    console.log("ok", k, tag)
    await p.close()
  }
  await b.close()
})()
