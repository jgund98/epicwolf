const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sharp = require("sharp")
;(async () => {
  const b = await puppeteer.launch({ headless: "new" }); const p = await b.newPage()
  await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:3640/", { waitUntil: "networkidle2" })
  await new Promise((r) => setTimeout(r, 1500))
  const shots = []
  shots.push(await p.screenshot({ type: "jpeg", quality: 70 })) // hero: hidden
  await p.evaluate(() => scrollTo(0, innerHeight * 3.5))
  for (const t of [250, 700, 1300, 2300]) { await new Promise((r) => setTimeout(r, t === 250 ? 250 : t - [250, 700, 1300, 2300][[250, 700, 1300, 2300].indexOf(t) - 1])); shots.push(await p.screenshot({ type: "jpeg", quality: 70 })) }
  const href = await p.evaluate(() => document.querySelector("a.tu")?.getAttribute("href"))
  await p.evaluate(() => document.querySelector("footer").scrollIntoView())
  await new Promise((r) => setTimeout(r, 900))
  shots.push(await p.screenshot({ type: "jpeg", quality: 70 }))
  const tiles = await Promise.all(shots.map(async (s, i) => ({ input: await sharp(s).extract({ left: 150, top: 640, width: 240, height: 204 }).resize(240).toBuffer(), left: i * 244, top: 0 })))
  await sharp({ create: { width: shots.length * 244, height: 204, channels: 3, background: "#f0f" } }).composite(tiles).jpeg().toFile("shots/tu.jpg")
  console.log("href", href)
  await b.close()
})()
