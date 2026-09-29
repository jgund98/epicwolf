// Records every painted frame of a refresh (CDP screencast) to catch flashes on load.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sharp = require("sharp")
;(async () => {
  const W = +(process.env.W || 1440), H = +(process.env.H || 900)
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  await p.setViewport({ width: W, height: H, isMobile: W < 700, hasTouch: W < 700 })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  const url = "http://localhost:" + (process.env.PORT || 3640) + "/"
  await p.goto(url, { waitUntil: "networkidle2" }) // warm caches, like a refresh
  const cdp = await p.target().createCDPSession()
  const frames = []
  let t0 = 0
  cdp.on("Page.screencastFrame", async (f) => {
    frames.push({ t: f.metadata.timestamp, data: f.data })
    try { await cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }) } catch {}
  })
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 50, everyNthFrame: 1 })
  await new Promise((r) => setTimeout(r, 300))
  t0 = Date.now() / 1000
  await p.reload({ waitUntil: "load" })
  await new Promise((r) => setTimeout(r, 2500))
  await cdp.send("Page.stopScreencast")
  const after = frames.filter((f) => f.t >= t0 - 0.05)
  const pick = after.length <= 18 ? after : after.filter((_, i) => i % Math.ceil(after.length / 18) === 0)
  const tw = 260, th = Math.round((tw * H) / W)
  const tiles = await Promise.all(pick.map(async (f, i) => ({
    input: await sharp(Buffer.from(f.data, "base64")).resize(tw, th).composite([{ input: Buffer.from(`<svg width="${tw}" height="20"><rect width="70" height="20" fill="#f0f"/><text x="4" y="15" font-size="13" fill="#fff" font-family="Arial">${Math.round((f.t - t0) * 1000)}ms</text></svg>`), left: 0, top: 0 }]).toBuffer(),
    left: (i % 6) * (tw + 4), top: Math.floor(i / 6) * (th + 4),
  })))
  const rows = Math.ceil(pick.length / 6)
  await sharp({ create: { width: 6 * (tw + 4), height: rows * (th + 4), channels: 3, background: "#f0f" } }).composite(tiles).jpeg({ quality: 75 }).toFile(`shots/load-${W}.jpg`)
  console.log("frames after reload", after.length)
  await b.close()
})()
