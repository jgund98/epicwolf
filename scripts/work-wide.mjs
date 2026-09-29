// Wide (16:9) frames of SM Wolf work for the service page heroes.
import sharp from "sharp"
const SRC = "C:/Users/Lucky/smwolf/public/work/"
const JOBS = [
  ["anderson-urban-window-graphics.jpg", "au-storefront-wide", 0.27],
  ["anzo-exterior-sign.jpg", "anzo-sign-wide", 0.04],
  ["the-factory-window-graphics.jpg", "factory-windows-wide", 0.3],
]
for (const [file, out, y] of JOBS) {
  const m = await sharp(SRC + file).metadata()
  const h = Math.round((m.width * 9) / 16)
  const info = await sharp(SRC + file).extract({ left: 0, top: Math.round(y * m.height), width: m.width, height: h }).jpeg({ quality: 82, mozjpeg: true }).toFile(`public/img/work/${out}.jpg`)
  console.log(out, info.width, info.height)
}
// The pickup: portrait original, truck in the lower middle.
{
  const f = "C:/Users/Lucky/epic-wolf/raw/sm-picks/vehicle-graphics-pickup.jpg"
  const m = await sharp(f).metadata()
  const h = Math.round((m.width * 9) / 16)
  const cw = Math.round(m.width * 0.92)
  const info = await sharp(f).extract({ left: m.width - cw, top: Math.round(m.height * 0.28), width: cw, height: Math.round((cw * 9) / 16) }).jpeg({ quality: 82, mozjpeg: true }).toFile("public/img/work/pickup-graphics-wide.jpg")
  console.log("pickup-graphics-wide", info.width, info.height)
}
