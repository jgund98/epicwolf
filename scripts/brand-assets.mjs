// Favicons + OG image drawn from the same glyph geometry as the site logo.
import sharp from "sharp"
import fs from "fs"
import { EPIC, WOLF, W, layout, EPIC_W, WORD_GAP, LINE_W } from "../components/brand/glyphs.ts"

const FLARE = "#ff4a1c"
const glyphs = (items, color) =>
  items.map(({ g, x }) => `<g transform="translate(${x} 0)"><path d="${g.body}" fill-rule="evenodd" fill="${color}"/>${g.accent ? `<path d="${g.accent}" fill="${FLARE}"/>` : ""}</g>`).join("")
const wordmark = (color) => glyphs(layout(EPIC), color) + glyphs(layout(WOLF, EPIC_W + WORD_GAP), color)

// Icon: the W (the E turned a quarter turn) on ink.
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="-26 -26 152 152"><rect x="-26" y="-26" width="152" height="152" rx="${size > 64 ? 0 : 28}" fill="#0a0a0b"/><path d="${W.body}" fill="#fff"/><path d="${W.accent}" fill="${FLARE}"/></svg>`
fs.writeFileSync("public/favicon.svg", icon(64))
for (const [f, s] of [["icon-32.png", 32], ["icon-192.png", 192], ["icon-512.png", 512], ["apple-icon.png", 180]]) await sharp(Buffer.from(icon(s))).png().toFile(`public/${f}`)

// OG: ink field with the wordmark and the coastline on the right.
{
  const Wd = 1200, H = 630
  const scale = 600 / LINE_W
  const coast = await sharp("public/video/coast.jpg").resize(400, H, { fit: "cover" }).toBuffer()
  const art = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}"><rect width="${Wd}" height="${H}" fill="#0a0a0b"/><g transform="translate(90 ${H / 2 - 50 * scale}) scale(${scale})">${wordmark("#fff")}</g></svg>`)
  await sharp(art).composite([{ input: coast, left: Wd - 400, top: 0 }]).jpeg({ quality: 88 }).toFile("public/og.jpg")
}
console.log("brand assets ok")
