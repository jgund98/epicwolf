// Fine-step capture across the hero zoom on a phone, to catch any flash at ladder handoffs.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sharp = require("sharp")
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:" + (process.env.PORT || 3640) + "/", { waitUntil: "networkidle2" })
  await new Promise((r) => setTimeout(r, 2500))
  const tiles = []
  const N = 24
  const stats = []
  for (let i = 0; i < N; i++) {
    const f = 0.1 + (1.6 * i) / (N - 1) // viewport heights: covers 6%..56% of the 300vh hero's travel
    await p.evaluate((y) => window.scrollTo(0, y * innerHeight), f)
    await new Promise((r) => setTimeout(r, 350))
    const shot = await p.screenshot({ type: "png" })
    // mean luminance of the top band under the header (black unless a letter is there)
    const { channels } = await sharp(shot).extract({ left: 0, top: 90, width: 390, height: 60 }).stats()
    stats.push(`${f.toFixed(2)}vh L${Math.round(channels[0].mean)}`)
    tiles.push({ input: await sharp(shot).resize(130).toBuffer(), left: (i % 12) * 132, top: Math.floor(i / 12) * 285 })
  }
  await sharp({ create: { width: 12 * 132, height: 2 * 285, channels: 3, background: "#f0f" } }).composite(tiles).jpeg({ quality: 70 }).toFile("shots/handoff.jpg")
  console.log(stats.join("  "))
  await b.close()
})()
