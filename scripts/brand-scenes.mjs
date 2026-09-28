// Put the Epic Wolf brand onto real photographed surfaces for service imagery.
import sharp from "sharp"
import { EPIC, WOLF, W, layout, EPIC_W, WORD_GAP, LINE_W } from "../components/brand/glyphs.ts"
const FLARE = "#ff4a1c"
const glyphs = (items, color, accent = FLARE) =>
  items.map(({ g, x }) => `<g transform="translate(${x} 0)"><path d="${g.body}" fill-rule="evenodd" fill="${color}"/>${g.accent ? `<path d="${g.accent}" fill="${accent}"/>` : ""}</g>`).join("")
const wordmark = (color, accent) => glyphs(layout(EPIC), color, accent) + glyphs(layout(WOLF, EPIC_W + WORD_GAP), color, accent)

// Van: the cargo side is nearly orthographic, so a flat graphic multiplied onto it reads as film.
{
  const x = 836, y = 466, w = 690, h = 392
  const s = (w * 0.62) / LINE_W
  const wrap = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="#1a1a1d"/>
    <polygon points="${w * 0.66},0 ${w},0 ${w},${h} ${w * 0.5},${h}" fill="${FLARE}"/>
    <g transform="translate(${w * 0.07} ${h * 0.4}) scale(${s})">${wordmark("#ffffff", FLARE)}</g>
    <rect x="${w * 0.07}" y="${h * 0.4 + 100 * s + 22}" width="${w * 0.18}" height="6" fill="#ffffff" opacity=".85"/>
  </svg>`
  await sharp("public/img/stock/van.jpg").composite([{ input: Buffer.from(wrap), left: x, top: y, blend: "multiply" }]).jpeg({ quality: 82, mozjpeg: true }).toFile("public/img/brand/ew-van.jpg")
}
// Storefront: white letters on the dark fascia band, the mark on the glass.
{
  const bandY = 62, bandH = 108, W0 = 1700
  const s = 64 / 100
  const lw = LINE_W * s
  const band = `<svg xmlns="http://www.w3.org/2000/svg" width="${W0}" height="${bandH}"><g transform="translate(${(W0 - lw) / 2} ${(bandH - 64) / 2}) scale(${s})">${wordmark("#f4f4f2", FLARE)}</g></svg>`
  const markS = 1.7
  const glass = `<svg xmlns="http://www.w3.org/2000/svg" width="${100 * markS}" height="${100 * markS}"><g transform="scale(${markS})"><path d="${W.body}" fill="#0a0a0b"/><path d="${W.accent}" fill="${FLARE}"/></g></svg>`
  await sharp("public/img/stock/storefront.jpg")
    .composite([
      { input: Buffer.from(band), left: 0, top: bandY },
      { input: Buffer.from(glass), left: 1215 - 85, top: 610, blend: "multiply" },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/img/brand/ew-storefront.jpg")
}
// Tote: the mark, screen printed.
{
  const S = 1.9
  const mark = `<svg xmlns="http://www.w3.org/2000/svg" width="${100 * S}" height="${100 * S}"><g transform="scale(${S})"><path d="${W.body}" fill="#141416"/><path d="${W.accent}" fill="${FLARE}"/></g></svg>`
  await sharp("public/img/stock/tote.jpg").composite([{ input: Buffer.from(mark), left: 1000 - 95, top: 700, blend: "multiply" }]).jpeg({ quality: 82, mozjpeg: true }).toFile("public/img/brand/ew-tote.jpg")
}
console.log("scenes ok")
