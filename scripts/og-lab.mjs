// Link-preview directions: pure vector, signal orange.
import sharp from "sharp"
import { WM_W, WM_H, WM_LETTERS, WM_DOT } from "../components/brand/wordmark.ts"
const Wd = 1200, H = 630
const w = 1000, s = w / WM_W, x0 = (Wd - w) / 2, y0 = (H - WM_H * s) / 2 + 10
const card = (bg, ink, dot) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${Wd}" height="${H}"><rect width="${Wd}" height="${H}" fill="${bg}"/><g transform="translate(${x0} ${y0}) scale(${s})">${WM_LETTERS.map((l) => `<path d="${l.d}" fill="${ink}"/>`).join("")}<path d="${WM_DOT}" fill="${dot}"/></g></svg>`)
await sharp(card("#ff4a1c", "#0a0a0b", "#fbf9f4")).jpeg({ quality: 92 }).toFile("shots/og-c.jpg")
await sharp(card("#ff4a1c", "#fbf9f4", "#0a0a0b")).jpeg({ quality: 92 }).toFile("shots/og-d.jpg")
const c = await sharp("shots/og-c.jpg").resize(600).toBuffer(), d = await sharp("shots/og-d.jpg").resize(600).toBuffer()
await sharp({ create: { width: 1208, height: 315, channels: 3, background: "#fff" } }).composite([{ input: c, left: 0, top: 0 }, { input: d, left: 608, top: 0 }]).jpeg().toFile("shots/og-cd.jpg")
console.log("ok")
