// Frames the SM Wolf work photos for the brand-world grid: explicit crops, web sizes.
import sharp from "sharp"
const SRC = "raw/sm-picks/"
// [file, out, crop as fractions {x, y, w, h} of the original]
const JOBS = [
  ["vehicle-graphics-pickup.jpg", "pickup-graphics", { x: 0.06, y: 0.07, w: 0.94, h: 0.85 }],
  ["window-graphics-rug-gallery.jpg", "window-graphics", { x: 0, y: 0, w: 1, h: 1 }],
  ["screenprint-crew-tee-orange.jpg", "screenprint-tee", { x: 0, y: 0.06, w: 1, h: 0.9375 }],
  ["embroidery-work-shirt-pocket.jpg", "embroidered-shirt", { x: 0, y: 0.03, w: 1, h: 0.9375 }],
  ["wall-graphics-palm-mural.jpg", "palm-wall", { x: 0, y: 0.08, w: 1, h: 0.75 }],
  ["illuminated-sign-night.jpg", "lit-sign", { x: 0, y: 0.02, w: 1, h: 0.9375 }],
  ["exterior-wall-sign-navy.jpg", "wall-sign", { x: 0, y: 0.06, w: 1, h: 0.75 }],
  ["printed-aframe-signs.jpg", "aframes", { x: 0, y: 0.03, w: 1, h: 0.9375 }],
  ["vehicle-graphics-sedan.jpg", "sedan-graphics", { x: 0, y: 0, w: 1, h: 1 }],
  ["embroidery-cap-puff-logo.jpg", "puff-cap", { x: 0.2, y: 0.1, w: 0.6, h: 0.45 }],
  ["door-vinyl-lettering.jpg", "door-lettering", { x: 0, y: 0.06, w: 1, h: 0.5625 }],
  ["printed-koozies-box.jpg", "koozies", { x: 0, y: 0.03, w: 1, h: 0.9375 }],
]
for (const [file, out, c] of JOBS) {
  const img = sharp(SRC + file).rotate()
  const m = await img.metadata()
  const W = m.orientation >= 5 ? m.height : m.width
  const H = m.orientation >= 5 ? m.width : m.height
  const box = { left: Math.round(c.x * W), top: Math.round(c.y * H), width: Math.round(c.w * W), height: Math.round(c.h * H) }
  box.width = Math.min(box.width, W - box.left)
  box.height = Math.min(box.height, H - box.top)
  const info = await sharp(SRC + file).rotate().extract(box).resize({ width: 1100, height: 1100, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(`public/img/work/${out}.jpg`)
  console.log(out, info.width, info.height, (info.width / info.height).toFixed(3), Math.round(info.size / 1024) + "KB")
}
