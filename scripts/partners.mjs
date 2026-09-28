// Normalize the two partner cutouts so heads and bodies read at the same scale:
// measure crown -> neck from the alpha mask, scale to a shared head height,
// align on one neck line, center on the head, convert to matched black and white.
import sharp from "sharp"

const HEAD = 330 // target crown-to-neck height in px
const CANVAS_W = 1000
const CANVAS_H = 1120
const NECK_Y = 520 // where every neck lands on the canvas

async function measure(file) {
  const { data, info } = await sharp(file).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h } = info
  const rowSpan = (y) => {
    let a = -1
    let b = -1
    for (let x = 0; x < w; x++) {
      if (data[y * w + x] > 128) {
        if (a < 0) a = x
        b = x
      }
    }
    return a < 0 ? null : [a, b]
  }
  let top = 0
  while (top < h && !rowSpan(top)) top++
  // Widest point of the head in the first stretch below the crown.
  let headMax = 0
  let headMaxY = top
  for (let y = top; y < top + h * 0.35 && y < h; y++) {
    const s = rowSpan(y)
    if (s && s[1] - s[0] > headMax) {
      headMax = s[1] - s[0]
      headMaxY = y
    }
  }
  // Neck: narrowest row after the widest head row, before the shoulders flare.
  let neck = headMaxY
  let neckW = Infinity
  for (let y = headMaxY; y < top + h * 0.6 && y < h; y++) {
    const s = rowSpan(y)
    if (!s) continue
    const wd = s[1] - s[0]
    if (wd < neckW) {
      neckW = wd
      neck = y
    }
    if (wd > headMax * 1.9) break
  }
  const s = rowSpan(headMaxY)
  const cx = s ? (s[0] + s[1]) / 2 : w / 2
  return { w, h, top, neck, cx, headMax }
}

for (const [src, out] of [
  ["raw/jordan-cut.png", "public/img/team/jordan-cut.png"],
  ["raw/shawn-suit-cut.png", "public/img/team/shawn-cut.png"],
]) {
  const m = await measure(src)
  const scale = HEAD / (m.neck - m.top)
  const rw = Math.round(m.w * scale)
  const rh = Math.round(m.h * scale)
  const left = Math.round(CANVAS_W / 2 - m.cx * scale)
  const top = Math.round(NECK_Y - m.neck * scale)
  const person = await sharp(src)
    .resize(rw, rh)
    .grayscale()
    .normalise({ lower: 1, upper: 99 })
    .linear(1.12, -10)
    .png()
    .toBuffer()
  // Composite onto a transparent canvas, cropping anything that falls outside.
  const cropL = Math.max(0, -left)
  const cropT = Math.max(0, -top)
  const vis = await sharp(person)
    .extract({ left: cropL, top: cropT, width: Math.min(rw - cropL, CANVAS_W - Math.max(0, left)), height: Math.min(rh - cropT, CANVAS_H - Math.max(0, top)) })
    .toBuffer()
  await sharp({ create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: vis, left: Math.max(0, left), top: Math.max(0, top) }])
    .png({ compressionLevel: 9 })
    .toFile(out)
  // A lighter webp for the page.
  await sharp(out).resize(760).webp({ quality: 86, alphaQuality: 90 }).toFile(out.replace(".png", ".webp"))
  console.log(out, { top: m.top, neck: m.neck, headW: m.headMax, scale: scale.toFixed(3) })
}
