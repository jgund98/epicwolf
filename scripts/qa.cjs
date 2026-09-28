// Scroll each page like a visitor and capture a viewport frame every ~0.85 screens,
// then tile the frames into one sheet per page+size for review.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sharp = require("sharp")
const BASE = process.env.BASE || "http://localhost:3641"
const pages = (process.env.PAGES || "/").split(",")
const sizes = (process.env.SIZES || "m,d").split(",").map((s) => (s === "m" ? ["m", 390, 844, true] : s === "t" ? ["t", 768, 1024, true] : ["d", 1440, 900, false]))
const maxFrames = +(process.env.MAX || 40)
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars", "--autoplay-policy=no-user-gesture-required"] })
  for (const path of pages) {
    for (const [tag, w, h, mob] of sizes) {
      const p = await b.newPage()
      await p.setViewport({ width: w, height: h, deviceScaleFactor: 1, isMobile: mob, hasTouch: mob })
      await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
      await p.goto(BASE + path, { waitUntil: "networkidle2", timeout: 60000 })
      await new Promise((r) => setTimeout(r, 1800))
      const total = await p.evaluate(() => document.documentElement.scrollHeight)
      const frames = []
      let y = 0
      while (y < total && frames.length < maxFrames) {
        await p.evaluate((yy) => window.scrollTo(0, yy), y)
        await new Promise((r) => setTimeout(r, 900))
        frames.push(await p.screenshot({ type: "jpeg", quality: 70 }))
        y += Math.round(h * 0.85)
      }
      const cols = tag === "m" ? 6 : 3
      const tw = tag === "m" ? 300 : 640
      const th = Math.round((tw * h) / w)
      const rows = Math.ceil(frames.length / cols)
      const tiles = await Promise.all(frames.map(async (f, i) => ({ input: await sharp(f).resize(tw, th).toBuffer(), left: (i % cols) * (tw + 6), top: Math.floor(i / cols) * (th + 6) })))
      const name = `shots/${(path === "/" ? "home" : path.slice(1).replace(/\//g, "_"))}-${tag}.jpg`
      await sharp({ create: { width: cols * (tw + 6), height: rows * (th + 6), channels: 3, background: "#ff00ff" } }).composite(tiles).jpeg({ quality: 78 }).toFile(name)
      console.log(name, frames.length, "frames")
      await p.close()
    }
  }
  await b.close()
})()
