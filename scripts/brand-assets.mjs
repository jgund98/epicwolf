// Favicons + OG image drawn from the same glyph geometry as the site logo.
import sharp from "sharp"
import fs from "fs"
import { FLARE, WM_W, WM_H, MARK_SIZE, wordmark, mark } from "./brand-shared.mjs"

// Icon: the wolf-ear w on ink.
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="-140 -140 1380 1380"><rect x="-140" y="-140" width="1380" height="1380" rx="${size > 64 ? 0 : 250}" fill="#0a0a0b"/>${mark("#fff")}</svg>`
fs.writeFileSync("public/favicon.svg", icon(64))
for (const [f, s] of [["icon-32.png", 32], ["icon-192.png", 192], ["icon-512.png", 512], ["apple-icon.png", 180]]) await sharp(Buffer.from(icon(s))).png().toFile(`public/${f}`)

// OG / link-preview card: the wordmark on ink with the hero's coastline
// playing through the letters, the orange period, and the line in Archivo.
{
  const Wd = 1200, H = 630
  const { WM_LETTERS, WM_DOT } = await import("../components/brand/wordmark.ts")
  const { createRequire } = await import("module")
  const fontkit = createRequire("C:/Users/Lucky/find-tool-plan-nextJS/package.json")("fontkit")
  const text = (file, str, size, x, y, fill, track = 0, opacity = 1) => {
    const f = fontkit.openSync(`raw/font/${file}.ttf`)
    const run = f.layout(str)
    const k = size / f.unitsPerEm
    let pen = 0
    const d = run.glyphs.map((g, i) => {
      const out = g.path.scale(k, -k).translate(x + pen, y).toSVG()
      pen += run.positions[i].xAdvance * k + track * size
      return out
    }).join("")
    return `<path d="${d}" fill="${fill}" fill-opacity="${opacity}"/>`
  }
  const w = 1000
  const s = w / WM_W
  const x0 = (Wd - w) / 2
  const y0 = 150
  const letters = `<g transform="translate(${x0} ${y0}) scale(${s})">${WM_LETTERS.map((l) => `<path d="${l.d}" fill="#fff"/>`).join("")}</g>`
  const mask = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}">${letters}</svg>`)).png().toBuffer()
  const coast = await sharp("public/video/coast.jpg").resize(Wd, H, { fit: "cover", position: "centre" }).modulate({ saturation: 1.15 }).toBuffer()
  const filled = await sharp(coast).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer()
  const over = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}">
    <g transform="translate(${x0} ${y0}) scale(${s})"><path d="${WM_DOT}" fill="${FLARE}"/></g>
    <circle cx="${x0 + 6}" cy="96" r="6" fill="${FLARE}"/>
    ${text("archivo-900-112", "West Palm Beach branding and marketing agency", 21, x0 + 22, 103, "#f4f2ec", -0.005, 0.75)}
    ${text("archivo-900-125", "IMPOSSIBLE TO IGNORE.", 50, x0, 470, "#f4f2ec", -0.04)}
    <rect x="${x0}" y="520" width="${w}" height="2" fill="#ffffff" fill-opacity="0.14"/>
    ${text("archivo-900-112", "Branding  /  Digital marketing  /  Business development", 19, x0, 562, "#f4f2ec", 0, 0.55)}
  </svg>`)
  await sharp({ create: { width: Wd, height: H, channels: 3, background: "#0a0a0b" } })
    .composite([{ input: filled }, { input: over }])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile("public/og.jpg")
}
console.log("brand assets ok")
