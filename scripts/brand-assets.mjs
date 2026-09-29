// Favicons + OG image drawn from the same glyph geometry as the site logo.
import sharp from "sharp"
import fs from "fs"
import { FLARE, WM_W, WM_H, MARK_SIZE, wordmark, mark } from "./brand-shared.mjs"

// Icon: the wolf-ear w on ink.
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="-140 -140 1380 1380"><rect x="-140" y="-140" width="1380" height="1380" rx="${size > 64 ? 0 : 250}" fill="#0a0a0b"/>${mark("#fff")}</svg>`
fs.writeFileSync("public/favicon.svg", icon(64))
for (const [f, s] of [["icon-32.png", 32], ["icon-192.png", 192], ["icon-512.png", 512], ["apple-icon.png", 180]]) await sharp(Buffer.from(icon(s))).png().toFile(`public/${f}`)

// OG: ink field with the wordmark and the coastline on the right.
{
  const Wd = 1200, H = 630
  const scale = 620 / WM_W
  const coast = await sharp("public/video/coast.jpg").resize(400, H, { fit: "cover" }).toBuffer()
  const art = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}"><rect width="${Wd}" height="${H}" fill="#0a0a0b"/><g transform="translate(80 ${H / 2 - (WM_H / 2) * scale}) scale(${scale})">${wordmark("#fff")}</g></svg>`)
  await sharp(art).composite([{ input: coast, left: Wd - 400, top: 0 }]).jpeg({ quality: 88 }).toFile("public/og.jpg")
}
console.log("brand assets ok")
