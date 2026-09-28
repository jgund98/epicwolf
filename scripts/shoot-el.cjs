// Screenshot specific sections: SEL="css1|css2" W=1440 H=900 PATH=/ node scripts/shoot-el.cjs
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  const W = +(process.env.W || 1440), H = +(process.env.H || 900)
  await p.setViewport({ width: W, height: H, deviceScaleFactor: 1, isMobile: W < 700, hasTouch: W < 700 })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:3641" + (process.env.PAGE || "/"), { waitUntil: "networkidle2" })
  await new Promise((r) => setTimeout(r, 1500))
  const sels = (process.env.SEL || "section").split("|")
  let i = 0
  for (const sel of sels) {
    const [css, offStr] = sel.split("@")
    const off = +(offStr || 0)
    await p.evaluate((css, off) => { const el = document.querySelector(css); window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + off * window.innerHeight) }, css, off)
    await new Promise((r) => setTimeout(r, 1600))
    await p.screenshot({ path: `shots/el-${i++}.jpg`, type: "jpeg", quality: 80 })
  }
  await b.close()
  console.log("ok", i)
})()
