// Favicons + OG image drawn from the same glyph geometry as the site logo.
import sharp from "sharp"
import fs from "fs"
import { FLARE, WM_W, WM_H, MARK_SIZE, wordmark, mark } from "./brand-shared.mjs"

// Icon: the wolf-ear w on ink.
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="-140 -140 1380 1380"><rect x="-140" y="-140" width="1380" height="1380" rx="${size > 64 ? 0 : 250}" fill="#0a0a0b"/>${mark("#fff")}</svg>`
fs.writeFileSync("public/favicon.svg", icon(64))
for (const [f, s] of [["icon-32.png", 32], ["icon-192.png", 192], ["icon-512.png", 512], ["apple-icon.png", 180]]) await sharp(Buffer.from(icon(s))).png().toFile(`public/${f}`)

// OG / link-preview card: bold and nearly wordless. The hero's coastline
// full bleed, the wordmark huge in paper, the orange period. Nothing else.
{
  const Wd = 1200, H = 630
  const { WM_LETTERS, WM_DOT } = await import("../components/brand/wordmark.ts")
  const w = 1080, s = w / WM_W, x0 = (Wd - w) / 2, y0 = (H - WM_H * s) / 2 + 8
  const g = (body) => `<g transform="translate(${x0} ${y0}) scale(${s})">${body}</g>`
  const art = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}">
    <rect width="${Wd}" height="${H}" fill="#000" fill-opacity=".28"/>
    ${g(WM_LETTERS.map((l) => `<path d="${l.d}" fill="#fbf9f4"/>`).join("") + `<path d="${WM_DOT}" fill="${FLARE}"/>`)}
  </svg>`)
  const coast = await sharp("public/video/coast.jpg").resize(Wd, H, { fit: "cover" }).modulate({ saturation: 1.35, brightness: 1.05 }).toBuffer()
  await sharp(coast).composite([{ input: art }]).jpeg({ quality: 90, mozjpeg: true }).toFile("public/og.jpg")
}
console.log("brand assets ok")
