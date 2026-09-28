// The Epic Wolf wordmark screen printed on the black tee (chest is nearly flat, so a straight composite reads true).
import sharp from "sharp"
import { EPIC, WOLF, layout, EPIC_W, WORD_GAP, LINE_W } from "../components/brand/glyphs.ts"

const FLARE = "#ff4a1c"
const glyphs = (items, color) =>
  items.map(({ g, x }) => `<g transform="translate(${x} 0)"><path d="${g.body}" fill-rule="evenodd" fill="${color}"/>${g.accent ? `<path d="${g.accent}" fill="${FLARE}"/>` : ""}</g>`).join("")
const W = 330
const s = W / LINE_W
const H = Math.ceil(100 * s)
const print = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><g transform="scale(${s})" opacity=".93">${glyphs(layout(EPIC), "#f2f2ee")}${glyphs(layout(WOLF, EPIC_W + WORD_GAP), "#f2f2ee")}</g></svg>`
await sharp("public/img/stock/tee.jpg")
  .composite([{ input: Buffer.from(print), left: 1010 - W / 2, top: 560 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile("public/img/brand/ew-tee-3.jpg")
console.log("tee ok")
