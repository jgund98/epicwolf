// Full-res frames of an external site at chosen scroll offsets (in viewport heights),
// with the consent banner declined. Usage: node audit-hi.cjs <url> <prefix> w h "0,0.25,0.5"
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const [,, url, prefix, w = "1440", h = "900", list = "0,0.5,1"] = process.argv
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars", "--autoplay-policy=no-user-gesture-required"] })
  const p = await b.newPage()
  const W = +w, H = +h
  await p.setViewport({ width: W, height: H, isMobile: W < 700, hasTouch: W < 700 })
  await p.goto(url, { waitUntil: "networkidle2", timeout: 90000 })
  await new Promise((r) => setTimeout(r, 2500))
  await p.evaluate(() => {
    const btn = [...document.querySelectorAll("button, a")].find((e) => /^\s*deny\s*$/i.test(e.textContent || ""))
    btn?.click()
  })
  await new Promise((r) => setTimeout(r, 1500))
  const offs = list.split(",").map(Number)
  let i = 0
  for (const f of offs) {
    // Step gradually so scroll-linked effects see intermediate positions.
    const target = Math.round(f * H)
    const cur = await p.evaluate(() => scrollY)
    const n = 8
    for (let k = 1; k <= n; k++) {
      await p.evaluate((y) => window.scrollTo(0, y), Math.round(cur + ((target - cur) * k) / n))
      await new Promise((r) => setTimeout(r, 60))
    }
    await new Promise((r) => setTimeout(r, 1200))
    await p.screenshot({ path: `${prefix}-${String(i++).padStart(2, "0")}.jpg`, type: "jpeg", quality: 72 })
  }
  const total = await p.evaluate(() => document.documentElement.scrollHeight)
  console.log("done", i, "total", total)
  await b.close()
})()
