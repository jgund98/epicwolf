// Second batch: SM Wolf signage and window vinyl, straight from the smwolf site's originals.
import sharp from "sharp"
const SRC = "C:/Users/Lucky/smwolf/public/work/"
const JOBS = [
  ["anderson-urban-window-graphics.jpg", "au-storefront", { x: 0, y: 0, w: 1, h: 1 }, 1100],
  ["anzo-exterior-sign.jpg", "anzo-sign", { x: 0, y: 0, w: 1, h: 1 }, 1100],
  ["anzo-window-graphics.jpg", "anzo-windows", { x: 0, y: 0, w: 1, h: 1 }, 1100],
  ["little-greek-market-storefront.jpg", "greek-market", { x: 0, y: 0, w: 1, h: 1 }, 1100],
  ["sushi-yama-blade-sign.jpg", "blade-sign", { x: 0, y: 0, w: 1, h: 1 }, 1100],
  ["the-factory-window-graphics.jpg", "factory-windows", { x: 0, y: 0.05, w: 1, h: 0.75 }, 1100],
  ["inch-and-ounce-storefront.jpg", "inch-ounce-storefront", { x: 0, y: 0, w: 1, h: 1 }, 1600],
  ["motivo-home-wall-sign.jpg", "motivo-wall", { x: 0, y: 0.05, w: 1, h: 0.5625 }, 1100],
  ["heir-looms-illuminated-sign.jpg", "heir-looms-night", { x: 0, y: 0, w: 1, h: 1 }, 1100],
  ["bennys-on-the-beach-event-display.jpg", "event-display", { x: 0, y: 0, w: 1, h: 1 }, 1400],
  ["inch-and-ounce-menu-boards.jpg", "menu-boards", { x: 0, y: 0.05, w: 1, h: 0.6 }, 1100],
]
for (const [file, out, c, max] of JOBS) {
  const m = await sharp(SRC + file).metadata()
  const box = { left: Math.round(c.x * m.width), top: Math.round(c.y * m.height), width: Math.round(c.w * m.width), height: Math.round(c.h * m.height) }
  box.height = Math.min(box.height, m.height - box.top)
  const info = await sharp(SRC + file).extract(box).resize({ width: max, height: max, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(`public/img/work/${out}.jpg`)
  console.log(out, info.width, info.height, (info.width / info.height).toFixed(3), Math.round(info.size / 1024) + "KB")
}
