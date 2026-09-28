import sharp from "sharp"
const S = "C:/Users/Lucky/AppData/Local/Temp/claude/C--Users-Lucky-Pegasus/b2aea33b-a1e3-4c2d-a249-b17f5206a14c/scratchpad/stock/"
const O = "public/img/stock/"
const map = {
  "van.jpg": "A-van-side-seawall.jpg",
  "billboard.jpg": "B-billboard-blank-palm-sky.jpg",
  "tee.jpg": "D-tee-black-hanger-shadow.jpg",
  "tote.jpg": "G-tote-white-held-faceless.jpg",
  "cards.jpg": "G-business-cards-blank-stacks-cool.jpg",
  "press.jpg": "F-wpb-skyline-royal-park-bridge-bougainvillea.jpg",
  "deal.jpg": "F-wpb-flagler-drive-sailboats.jpg",
  "sketch.jpg": "E-sketch-logo-concepts-pencil.jpg",
  "wrap-install.jpg": "E-wrap-hands-white-vinyl-hood.jpg",
  "swatches.jpg": "E-hands-color-swatch-fan-desk.jpg",
  "worth-ave.jpg": "F-palm-beach-worth-avenue-palms.jpg",
  "flagler-night.jpg": "F-wpb-skyline-night-flagler.jpg",
  "intracoastal-sunrise.jpg": "F-palm-beach-sunrise-intracoastal-flagler-bridge.jpg",
  "waterfront-dusk.jpg": "F-wpb-waterfront-sunset-skyline.jpg",
  "loupe.jpg": "E-loupe-color-proof.jpg",
}
for (const [o, i] of Object.entries(map)) {
  const img = sharp(S + i).rotate().resize(2000, 2000, { fit: "inside", withoutEnlargement: true })
  const info = await img.jpeg({ quality: 80, mozjpeg: true }).toFile(O + o)
  console.log(o, info.width + "x" + info.height, (info.size / 1024) | 0, "KB")
}
