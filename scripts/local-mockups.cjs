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

/** [file, path, width, height, mobile, selector to scroll to (optional)] */
const shots = [
  ["mock-home-d", "/", 1440, 860, false],
  ["mock-digital-d", "/digital-marketing", 1440, 860, false],
  ["mock-article-d", "/insights/get-found-in-ai-search-local-business", 1440, 860, false],
  ["mock-local-d", "/palm-beach-county/boca-raton/signs", 1440, 860, false],
  ["mock-form-d", "/palm-beach-county/palm-beach/branding", 1440, 860, false, "#start"],
  ["mock-county-d", "/palm-beach-county", 1440, 860, false],
  ["mock-home-m", "/", 390, 800, true],
  ["mock-web-m", "/web-design", 390, 640, true],
  ["mock-local-m", "/palm-beach-county/palm-beach/signs", 390, 800, true],
  ["mock-form-m", "/contact", 390, 800, true],
  ["mock-article-m", "/insights/palm-beach-sign-approval", 390, 705, true],
  ["mock-county-m", "/palm-beach-county", 390, 800, true],
]

const round = async (src, w, r) => {
  const img = await sharp(src).resize(w).toBuffer()
  const { height } = await sharp(img).metadata()
  const mask = Buffer.from(`<svg width="${w}" height="${height}"><rect width="${w}" height="${height}" rx="${r}" ry="${r}"/></svg>`)
  return { buf: await sharp(img).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer(), h: height }
}
const shadow = (w, h, r, o = 0.42) =>
  sharp(Buffer.from(`<svg width="${w + 200}" height="${h + 200}"><defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="34"/></filter></defs><rect x="100" y="126" width="${w}" height="${h}" rx="${r}" fill="#000" opacity="${o}" filter="url(#b)"/></svg>`)).png().toBuffer()

const W = 2400, H = 1350
const save = (layers, out, background) =>
  sharp({ create: { width: W, height: H, channels: 3, background } })
    .composite(layers)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`public/img/stock/${out}.jpg`)
    .then(() => console.log("wrote", out))

async function phone(src, w, left, top) {
  const m = await round(`raw/${src}.jpg`, w, Math.round(w * 0.13))
  const fw = w + 24, fh = m.h + 24, r = Math.round(w * 0.16)
  const frame = Buffer.from(`<svg width="${fw}" height="${fh}"><rect width="${fw}" height="${fh}" rx="${r}" fill="#16161a"/></svg>`)
  return {
    h: fh,
    layers: async (y = top) => [
      { input: await shadow(fw, fh, r), left: left - 100, top: y - 126 },
      { input: frame, left, top: y },
      { input: m.buf, left: left + 12, top: y + 12 },
    ],
  }
}

/** One browser window and one phone on warm white. */
async function pair(out, desktop, mobile) {
  // The frame shows a sliding band of the image (parallax), so every screen
  // stays inside the middle 860px of height.
  const d = await round(`raw/${desktop}.jpg`, 1340, 22)
  const dx = 420, dy = Math.round((H - d.h) / 2)
  const p = await phone(mobile, 300, 1620, 0)
  const py = dy + d.h - p.h + 30
  await save(
    [{ input: await shadow(1340, d.h, 22), left: dx - 100, top: dy - 126 }, { input: d.buf, left: dx, top: dy }, ...(await p.layers(py))],
    out,
    "#ecebe7"
  )
}

/** Five phones in a row on ink, alternately raised; the outer two run off the edges. */
async function row(out, list) {
  const w = 350
  const xs = list.map((_, i) => 1200 - w / 2 - 12 + (i - (list.length - 1) / 2) * 430)
  const layers = []
  for (const [i, src] of list.entries()) {
    const p = await phone(src, w, xs[i], 0)
    const y = Math.round((H - p.h) / 2) + (i % 2 === 0 ? 30 : -30)
    layers.push(...(await p.layers(y)))
  }
  await save(layers, out, "#141416")
}

;(async () => {
  fs.mkdirSync("raw", { recursive: true })
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  for (const [name, path, w, h, mob, target] of shots) {
    const p = await b.newPage()
    await p.setViewport({ width: w, height: h, deviceScaleFactor: 2, isMobile: mob, hasTouch: mob })
    await p.evaluateOnNewDocument(() => {
      try {
        sessionStorage.setItem("ew:intro", "1")
      } catch {}
    })
    await p.goto(origin + path, { waitUntil: "networkidle2" })
    await sleep(2600)
    if (target) {
      await p.evaluate((sel) => {
        const el = document.querySelector(sel)
        window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 40)
      }, target)
      await sleep(2000)
    }
    await p.screenshot({ path: `raw/${name}.jpg`, type: "jpeg", quality: 92 })
    await p.close()
  }
  await b.close()
  // ew-web and ew-digital are the file names the site already uses.
  await pair("ew-web", "mock-home-d", "mock-web-m")
  await pair("ew-digital", "mock-digital-d", "mock-home-m")
  await pair("ew-site-article", "mock-article-d", "mock-form-m")
  await pair("ew-site-local", "mock-local-d", "mock-home-m")
  await pair("ew-site-form", "mock-form-d", "mock-local-m")
  await pair("ew-site-county", "mock-county-d", "mock-article-m")
  await row("ew-site-phones", ["mock-county-m", "mock-local-m", "mock-home-m", "mock-form-m", "mock-article-m"])
})()
