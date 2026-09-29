// Logo and cover files sized for directories, Google Business Profile and social profiles.
import sharp from "sharp"
import { WM_W, WM_H, WM_LETTERS, WM_DOT, MARK_D, MARK_SIZE } from "../components/brand/wordmark.ts"
const FLARE = "#ff4a1c", INK = "#0a0a0b", PAPER = "#fbf9f4"
const wm = (x, y, w, ink, dot) => { const s = w / WM_W; return `<g transform="translate(${x} ${y}) scale(${s})">${WM_LETTERS.map((l) => `<path d="${l.d}" fill="${ink}"/>`).join("")}<path d="${WM_DOT}" fill="${dot}"/></g>` }
const mark = (cx, cy, size, fill) => { const s = size / MARK_SIZE; return `<g transform="translate(${cx - size / 2} ${cy - size / 2}) scale(${s})"><path d="${MARK_D}" fill="${fill}"/></g>` }
const out = async (name, W, H, body, bg) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${bg ? `<rect width="${W}" height="${H}" fill="${bg}"/>` : ""}${body}</svg>`
  await sharp(Buffer.from(svg)).png().toFile(`listing-kit/${name}.png`)
}
// Square profile logos (Google Business Profile, Clutch, LinkedIn, Instagram): the w mark.
await out("logo-square-orange-1024", 1024, 1024, mark(512, 512, 700, INK), FLARE)
await out("logo-square-ink-1024", 1024, 1024, mark(512, 512, 700, PAPER), INK)
// Wordmark files, transparent.
await out("wordmark-ink-2400", 2400, Math.round((2400 * WM_H) / WM_W) + 40, wm(0, 20, 2400, INK, FLARE))
await out("wordmark-white-2400", 2400, Math.round((2400 * WM_H) / WM_W) + 40, wm(0, 20, 2400, PAPER, FLARE))
// Covers: LinkedIn banner 1584x396, Google/Facebook cover 1640x856.
const cover = (W, H, frac) => { const w = W * frac, h = (w * WM_H) / WM_W; return wm((W - w) / 2, (H - h) / 2 + h * 0.02, w, INK, PAPER) }
await out("cover-linkedin-1584x396", 1584, 396, cover(1584, 396, 0.46), FLARE)
await out("cover-1640x856", 1640, 856, cover(1640, 856, 0.62), FLARE)
console.log("kit ok")
