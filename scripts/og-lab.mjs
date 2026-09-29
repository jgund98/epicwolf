// Two bolder link-preview directions, wordmark only.
import sharp from "sharp"
import { WM_W, WM_H, WM_LETTERS, WM_DOT } from "../components/brand/wordmark.ts"
const Wd = 1200, H = 630, FLARE = "#ff4a1c"
const w = 1080, s = w / WM_W, x0 = (Wd - w) / 2, y0 = (H - WM_H * s) / 2 + 8
const letters = (fill) => `<g transform="translate(${x0} ${y0}) scale(${s})">${WM_LETTERS.map((l) => `<path d="${l.d}" fill="${fill}"/>`).join("")}</g>`
const dot = (fill) => `<g transform="translate(${x0} ${y0}) scale(${s})"><path d="${WM_DOT}" fill="${fill}"/></g>`
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}">${body}</svg>`)
const coast = await sharp("public/video/coast.jpg").resize(Wd, H, { fit: "cover" }).modulate({ saturation: 1.35, brightness: 1.05 }).toBuffer()

// A: signal orange field, coastline inside the letters, ink period.
{
  const mask = await sharp(svg(letters("#fff"))).png().toBuffer()
  const filled = await sharp(coast).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer()
  await sharp({ create: { width: Wd, height: H, channels: 3, background: FLARE } })
    .composite([{ input: filled }, { input: svg(dot("#0a0a0b")) }])
    .jpeg({ quality: 90, mozjpeg: true }).toFile("shots/og-a.jpg")
}
// B: full-bleed coastline, paper wordmark, orange period, a soft shade for contrast.
{
  const shade = svg(`<rect width="${Wd}" height="${H}" fill="#000" fill-opacity=".28"/>`)
  await sharp(coast).composite([{ input: shade }, { input: svg(letters("#fbf9f4") + dot(FLARE)) }])
    .jpeg({ quality: 90, mozjpeg: true }).toFile("shots/og-b.jpg")
}
const a = await sharp("shots/og-a.jpg").resize(600).toBuffer(), b = await sharp("shots/og-b.jpg").resize(600).toBuffer()
await sharp({ create: { width: 1208, height: 315, channels: 3, background: "#fff" } }).composite([{ input: a, left: 0, top: 0 }, { input: b, left: 608, top: 0 }]).jpeg().toFile("shots/og-ab.jpg")
console.log("ok")
