// "epicwolf." lab: Archivo 900 (wdth 112) outlines, a custom wolf-ear w, round period.
import sharp from "sharp"
import { load, glyphPath } from "./wordmark-study.mjs"

const font = load("archivo-900-112")
const UPM = font.unitsPerEm

/**
 * The w, redrawn in font units (y up, x-height 528). The outer arms are Archivo's.
 * The middle apex is replaced by two pointed ears with a V between them:
 * T = ear-tip height, N = notch depth.
 */
export function wolfW({ J, T, tip, N, r = 40 }) {
  // Ears sit on the middle apex and flare outward over the counters, like alert
  // wolf ears. J = where the ear leaves the stroke, tip = ear-tip x (left ear),
  // T = tip height, N = crown depth between the ears, r = crown radius.
  const lx = (y) => 368 + (58 / 193) * (y - 335)
  const M = (x) => 1077 - x
  const mid = 538.5
  const L = [[lx(J), J], [tip, T]]
  // Straight inner edges into a small rounded crown.
  const k = (x) => [x, N + (T - N) * ((x - mid) / (tip - mid))]
  const a = k(mid - r)
  const segs = [
    ['M', 220, 0], ['L', 0, 528], ['L', 229, 528], ['L', 326, 211], ['L', 334, 211], ['L', 368, 335],
    ['L', ...L[0]], ['L', ...L[1]],
    ['L', ...a],
    ['Q', mid, N, M(a[0]), a[1]],
    ['L', M(tip), T],
    ['L', M(L[0][0]), J],
    ['L', 708, 334], ['L', 740, 211], ['L', 747, 211], ['L', 846, 528], ['L', 1056, 528], ['L', 836, 0], ['L', 625, 0],
    ['L', 532, 313], ['L', 526, 313], ['L', 434, 0],
  ]
  return { segs, adv: 1056 }
}

function polyToSvg(segs, s, x0) {
  const P = (x, y) => (x0 + x * s).toFixed(2) + ' ' + (-y * s).toFixed(2)
  return segs.map((g) => g[0] === 'Q' ? 'Q' + P(g[1], g[2]) + ' ' + P(g[3], g[4]) : g[0] + P(g[1], g[2])).join('') + 'Z'
}

/** Full wordmark path at `size` px per em. Returns { d, width }. */
export function wordmark(size, tracking, w) {
  const s = size / UPM
  let x = 0
  const parts = []
  for (const ch of "epicwolf") {
    if (ch === "w" && w) {
      parts.push(polyToSvg(w.segs, s, x))
      x += w.adv * s + tracking * size
    } else {
      const g = glyphPath(font, ch, size, x)
      parts.push(g.d)
      x += g.adv + tracking * size
    }
  }
  // Round period: sits on the baseline, a touch wider than a stem.
  const r = 118 * s
  const cx = x + 40 * s + r
  parts.push(`M${cx - r} ${-r}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`)
  return { d: parts.join(" "), width: cx + r }
}

if (process.argv[1].endsWith("wordmark-lab.mjs")) {
  const variants = [
    ['J · flared ears', wolfW({ J: 400, T: 600, tip: 352, N: 400, r: 46 })],
    ['K · inside x-height', wolfW({ J: 350, T: 528, tip: 348, N: 360, r: 40 })],
    ['L · proud, narrower flare', wolfW({ J: 410, T: 620, tip: 372, N: 420, r: 44 })],
  ]
  const size = 190
  const W = 1500
  const rowH = 250
  let body = ""
  variants.forEach(([label, w], i) => {
    const y = 60 + i * rowH
    const { d } = wordmark(size, -0.05, w)
    body += `<text x="30" y="${y}" font-family="Arial" font-size="18" fill="#999">${label}</text>`
    body += `<g transform="translate(30 ${y + 170})"><path d="${d}" fill="#f04e1a"/></g>`
    const sm = wordmark(64, -0.05, w)
    body += `<rect x="1020" y="${y + 40}" width="450" height="150" fill="#111"/>`
    body += `<g transform="translate(1045 ${y + 140})"><path d="${sm.d}" fill="#f04e1a"/></g>`
    const xs = wordmark(22, -0.05, w)
    body += `<g transform="translate(1045 ${y + 178})"><path d="${xs.d}" fill="#fbf7ee"/></g>`
  })
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${60 + variants.length * rowH}"><rect width="100%" height="100%" fill="#fbf7ee"/>${body}</svg>`
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile("shots/wm-lab.jpg")
  console.log("ok")
}
