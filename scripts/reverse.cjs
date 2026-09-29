// Reverse-scroll check for the hero: down into the zoom, then back to the top.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
;(async () => {
  const W = +(process.env.W || 1440), H = +(process.env.H || 900)
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  await p.setViewport({ width: W, height: H, isMobile: W < 700, hasTouch: W < 700 })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:3641/", { waitUntil: "networkidle2" })
  await new Promise((r) => setTimeout(r, 2000))
  const shots = []
  for (const f of [0, 0.3, 0.6, 1.0, 1.4, 1.0, 0.6, 0.3, 0.12, 0]) {
    await p.evaluate((y) => window.scrollTo(0, y * innerHeight), f)
    await new Promise((r) => setTimeout(r, 700))
    shots.push(await p.screenshot({ type: "jpeg", quality: 60 }))
  }
  const sharp = require("sharp")
  const tw = 360, th = Math.round((tw * H) / W)
  const tiles = await Promise.all(shots.map(async (s, i) => ({ input: await sharp(s).resize(tw, th).toBuffer(), left: (i % 5) * (tw + 4), top: Math.floor(i / 5) * (th + 4) })))
  await sharp({ create: { width: 5 * (tw + 4), height: 2 * (th + 4), channels: 3, background: "#f0f" } }).composite(tiles).jpeg().toFile(`shots/reverse-${W}.jpg`)
  await b.close()
  console.log("ok")
})()
