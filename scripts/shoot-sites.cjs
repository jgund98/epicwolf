// Screenshot the partners' live website builds for the Work section.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sites = [
  ["gusrenny", "https://www.gusrenny.com"],
  ["gdr", "https://gdr.epicdevsolutions.com"],
  ["offthemuscle", "https://www.offthemuscle.net"],
  ["coverageco", "https://www.coverageco.com"],
  ["carol", "https://carol.epicdevsolutions.com"],
  ["hairrocks", "https://hairrocks.vercel.app"],
  ["jasons", "https://jasonsaquarium.epicdevsolutions.com"],
]
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--autoplay-policy=no-user-gesture-required", "--hide-scrollbars"] })
  for (const [k, url] of sites) {
    for (const [tag, w, h, m] of [["d", 1440, 900, false], ["m", 390, 844, true]]) {
      const p = await b.newPage()
      await p.setViewport({ width: w, height: h, deviceScaleFactor: m ? 2 : 1.5, isMobile: m, hasTouch: m })
      try {
        await p.goto(url, { waitUntil: "networkidle2", timeout: 45000 })
        await new Promise((r) => setTimeout(r, 5500))
        await p.screenshot({ path: `raw/sites/${k}-${tag}.jpg`, type: "jpeg", quality: 88 })
        console.log("ok", k, tag)
      } catch (e) {
        console.log("fail", k, tag, e.message)
      }
      await p.close()
    }
  }
  await b.close()
})()
