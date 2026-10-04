// Tight crops of the signage work for the town x discipline pages and the
// market guides. The originals are phone photos that include parking lots,
// cars, a lamp post and a traffic cone; these crops keep only the sign and
// the wall it lives on. Heroes sit in a 21:9 frame with parallax, which shows
// roughly a 2:1 slice, so hero crops are cut at 2:1.
//   node scripts/local-photos.mjs          write the crops
//   node scripts/local-photos.mjs --sheet  also write shots/local/photo-sheet.jpg
import sharp from "sharp"
import fs from "node:fs"

const SM = "C:/Users/Lucky/smwolf/public/work/"
const RAW = "raw/sm-picks/"
const OUT = "public/img/work/"

/** [output, source, {left, top, width, height}] in the source's upright pixels. */
const crops = [
  ["anzo-letters", SM + "anzo-exterior-sign.jpg", { left: 140, top: 250, width: 1170, height: 585 }],
  ["au-band", SM + "anderson-urban-window-graphics.jpg", { left: 0, top: 470, width: 1650, height: 800 }],
  ["motivo-letters", SM + "motivo-home-wall-sign.jpg", { left: 0, top: 440, width: 1651, height: 760 }],
  ["heirlooms-wall", RAW + "exterior-wall-sign-navy.jpg", { left: 0, top: 560, width: 2168, height: 1084 }],
  ["heirlooms-night", RAW + "illuminated-sign-night.jpg", { left: 0, top: 800, width: 3024, height: 1512 }],
  ["whitehorse-mural", RAW + "wall-graphics-palm-mural.jpg", { left: 0, top: 880, width: 3024, height: 2000 }],
  ["heirlooms-window", RAW + "window-graphics-rug-gallery.jpg", { left: 420, top: 880, width: 2300, height: 1700 }],
]

for (const [name, src, box] of crops) {
  // rotate() first so the crop box is in upright pixels, not sensor pixels.
  const upright = await sharp(src).rotate().toBuffer()
  const info = await sharp(upright)
    .extract(box)
    .resize({ width: Math.min(box.width, 2000) })
    .modulate({ saturation: 1.04 })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`${OUT}${name}.jpg`)
  console.log(name, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`)
}

if (process.argv.includes("--sheet")) {
  fs.mkdirSync("shots/local", { recursive: true })
  const tiles = await Promise.all(crops.map(([n]) => sharp(`${OUT}${n}.jpg`).resize(960, 480, { fit: "cover" }).toBuffer()))
  const rows = Math.ceil(tiles.length / 2)
  await sharp({ create: { width: 1920, height: rows * 480, channels: 3, background: "#222" } })
    .composite(tiles.map((b, i) => ({ input: b, left: (i % 2) * 960, top: Math.floor(i / 2) * 480 })))
    .jpeg({ quality: 78 })
    .toFile("shots/local/photo-sheet.jpg")
}
