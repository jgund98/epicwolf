// Scroll an external site like a visitor and tile viewport frames for review.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sharp = require("sharp")
const [,, url, out, w = "1440", h = "900", step = "0.8", max = "24"] = process.argv
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars", "--autoplay-policy=no-user-gesture-required"] })
  const p = await b.newPage()
  const W = +w, H = +h
  await p.setViewport({ width: W, height: H, deviceScaleFactor: 1, isMobile: W < 700, hasTouch: W < 700 })
  await p.goto(url, { waitUntil: "networkidle2", timeout: 90000 })
  await new Promise((r) => setTimeout(r, 4000))
  const total = await p.evaluate(() => document.documentElement.scrollHeight)
  const frames = []
  for (let y = 0; y < total && frames.length < +max; y += Math.round(H * +step)) {
    await p.evaluate((yy) => window.scrollTo(0, yy), y)
    await new Promise((r) => setTimeout(r, 1300))
    frames.push(await p.screenshot({ type: "jpeg", quality: 70 }))
  }
  const cols = W < 700 ? 6 : 3, tw = W < 700 ? 300 : 620, th = Math.round((tw * H) / W)
  const rows = Math.ceil(frames.length / cols)
  const tiles = await Promise.all(frames.map(async (f, i) => ({ input: await sharp(f).resize(tw, th).toBuffer(), left: (i % cols) * (tw + 6), top: Math.floor(i / cols) * (th + 6) })))
  await sharp({ create: { width: cols * (tw + 6), height: rows * (th + 6), channels: 3, background: "#ff00ff" } }).composite(tiles).jpeg({ quality: 80 }).toFile(out)
  console.log(out, frames.length, "frames of", total)
  await b.close()
})()
