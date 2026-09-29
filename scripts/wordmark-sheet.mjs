// Presentation sheet for the lowercase wolf-ear wordmark.
import sharp from "sharp"
import { wolfW, wordmark } from "./wordmark-lab.mjs"

const V = {
  J: wolfW({ J: 400, T: 600, tip: 352, N: 400, r: 46 }),
  K: wolfW({ J: 350, T: 528, tip: 348, N: 360, r: 40 }),
}
const OR = "#f04e1a", CREAM = "#fbf7ee", INK = "#0b0b0c"
const W = 1600
let b = ""
// 1. hero on cream
const big = wordmark(300, -0.05, V.J)
b += `<rect width="${W}" height="560" fill="${CREAM}"/><g transform="translate(${(W - big.width) / 2} 380)"><path d="${big.d}" fill="${OR}"/></g>`
b += `<text x="60" y="520" font-family="Arial" font-weight="700" font-size="16" letter-spacing="2" fill="#b9b2a4">J · EARS FLARED ABOVE THE X-HEIGHT</text>`
// 2. on ink
const mid = wordmark(210, -0.05, V.J)
b += `<rect y="560" width="${W}" height="420" fill="${INK}"/><g transform="translate(${(W - mid.width) / 2} 830)"><path d="${mid.d}" fill="${CREAM}"/></g>`
// 3. K on orange
const k = wordmark(210, -0.05, V.K)
b += `<rect y="980" width="${W}" height="420" fill="${OR}"/><g transform="translate(${(W - k.width) / 2} 1250)"><path d="${k.d}" fill="${INK}"/></g>`
b += `<text x="60" y="1370" font-family="Arial" font-weight="700" font-size="16" letter-spacing="2" fill="#0b0b0c" opacity=".5">K · SUBTLER, EARS INSIDE THE X-HEIGHT</text>`
// 4. small sizes + app icon
b += `<rect y="1400" width="${W}" height="260" fill="${CREAM}"/>`
let x = 60
for (const px of [104, 54, 30, 18]) {
  const m = wordmark(px, -0.05, V.J)
  b += `<g transform="translate(${x} 1560)"><path d="${m.d}" fill="${OR}"/></g>`
  x += m.width + 50
}
const ic = wordmark(260, -0.05, V.J) // crop the w for an icon
b += `<svg x="${W - 230}" y="1440" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" rx="38" fill="${OR}"/></svg>`
const s = 150 / 1056
const wd = V.J.segs.map((g) => g[0] === "Q" ? `Q${g[1] * s} ${-g[2] * s} ${g[3] * s} ${-g[4] * s}` : `${g[0]}${g[1] * s} ${-g[2] * s}`).join("") + "Z"
b += `<g transform="translate(${W - 230 + 15} ${1440 + 90 + 600 * s / 2})"><path d="${wd}" fill="${CREAM}"/></g>`
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="1660">${b}</svg>`
await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile("shots/wm-sheet.jpg")
console.log("ok")
