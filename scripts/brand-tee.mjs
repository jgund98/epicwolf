// The Epic Wolf wordmark screen printed on the black tee (chest is nearly flat, so a straight composite reads true).
import sharp from "sharp"
import { WM_W, WM_H, wordmark } from "./brand-shared.mjs"

const W = 330
const s = W / WM_W
const H = Math.ceil(WM_H * s)
const print = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><g transform="scale(${s})" opacity=".93">${wordmark("#f2f2ee")}</g></svg>`
await sharp("public/img/stock/tee.jpg")
  .composite([{ input: Buffer.from(print), left: 1010 - W / 2, top: 560 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile("public/img/brand/ew-tee-3.jpg")
console.log("tee ok")
