// Website mockups for the digital and web pages, shot from the live site so
// they always carry the current wordmark. Composed at 16:9 with the screens
// centered, so the 21:9 desktop frame and the 16:10 phone frame both show
// whole screens, never a headline cut in half.
//   node scripts/local-mockups.cjs [origin]
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const sharp = require("sharp")
const fs = require("fs")
const origin = process.argv[2] || "https://www.epicwolf.agency"
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const shots = [
  ["mock-home-d", "/", 1440, 860, false],
  ["mock-web-d", "/web-design", 1440, 860, false],
  ["mock-digital-d", "/digital-marketing", 1440, 860, false],
  ["mock-home-m", "/", 390, 800, true],
  ["mock-web-m", "/web-design", 390, 640, true],
]

const round = async (src, w, r) => {
  const img = await sharp(src).resize(w).toBuffer()
  const { height } = await sharp(img).metadata()
  const mask = Buffer.from(`<svg width="${w}" height="${height}"><rect width="${w}" height="${height}" rx="${r}" ry="${r}"/></svg>`)
  return { buf: await sharp(img).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer(), h: height }
}
const shadow = (w, h, r) =>
  sharp(Buffer.from(`<svg width="${w + 200}" height="${h + 200}"><defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="34"/></filter></defs><rect x="100" y="126" width="${w}" height="${h}" rx="${r}" fill="#000" opacity=".42" filter="url(#b)"/></svg>`)).png().toBuffer()

/** One browser window and one phone on warm white. */
async function compose(out, desktop, phone) {
  const W = 2400, H = 1350
  const d = await round(`raw/${desktop}.jpg`, 1500, 24)
  const m = await round(`raw/${phone}.jpg`, 340, 44)
  const fw = 364, fh = m.h + 24
  const frame = Buffer.from(`<svg width="${fw}" height="${fh}"><rect width="${fw}" height="${fh}" rx="54" fill="#16161a"/></svg>`)
  const dx = 300, dy = Math.round((H - d.h) / 2) - 20
  const px = 1660, py = dy + d.h - fh + 70
  await sharp({ create: { width: W, height: H, channels: 3, background: "#ecebe7" } })
    .composite([
      { input: await shadow(1500, d.h, 24), left: dx - 100, top: dy - 126 },
      { input: d.buf, left: dx, top: dy },
      { input: await shadow(fw, fh, 54), left: px - 100, top: py - 126 },
      { input: frame, left: px, top: py },
      { input: m.buf, left: px + 12, top: py + 12 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`public/img/stock/${out}.jpg`)
  console.log(out, "desktop", `${dx}-${dx + 1500}`, "phone", `${px}-${px + fw}`, "y", dy, dy + d.h, py, py + fh)
}

;(async () => {
  fs.mkdirSync("raw", { recursive: true })
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  for (const [name, path, w, h, mob] of shots) {
    const p = await b.newPage()
    await p.setViewport({ width: w, height: h, deviceScaleFactor: 2, isMobile: mob, hasTouch: mob })
    await p.evaluateOnNewDocument(() => {
      try {
        sessionStorage.setItem("ew:intro", "1")
      } catch {}
    })
    await p.goto(origin + path, { waitUntil: "networkidle2" })
    await sleep(2600)
    await p.screenshot({ path: `raw/${name}.jpg`, type: "jpeg", quality: 92 })
    await p.close()
  }
  await b.close()
  // Same file names the site already uses, so every page picks up the current wordmark.
  await compose("ew-web", "mock-home-d", "mock-web-m")
  await compose("ew-digital", "mock-digital-d", "mock-home-m")
})()
