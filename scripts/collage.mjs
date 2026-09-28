// Service imagery for Digital and Web, built from screenshots of Epic Wolf's own site.
import sharp from "sharp"
const round = async (src, w, r, crop) => {
  let s = sharp(src)
  if (crop) s = s.extract(crop)
  const img = await s.resize(w).toBuffer()
  const { height } = await sharp(img).metadata()
  const mask = Buffer.from(`<svg width="${w}" height="${height}"><rect width="${w}" height="${height}" rx="${r}" ry="${r}"/></svg>`)
  return { buf: await sharp(img).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer(), h: height }
}
const shadow = async (w, h, r) =>
  sharp(Buffer.from(`<svg width="${w + 160}" height="${h + 160}"><defs><filter id="b"><feGaussianBlur stdDeviation="30"/></filter></defs><rect x="80" y="110" width="${w}" height="${h}" rx="${r}" fill="#000" opacity=".55" filter="url(#b)"/></svg>`)).png().toBuffer()

// Digital: the site's orange band and hero, staggered on warm white.
{
  const W = 2400, H = 1350
  const a = await round("raw/own-kinetic-d.jpg", 1500, 26)
  const b = await round("raw/own-home-d.jpg", 1300, 26)
  await sharp({ create: { width: W, height: H, channels: 3, background: "#ecebe7" } })
    .composite([
      { input: await shadow(1500, a.h, 26), left: 120 - 80, top: 120 - 110 },
      { input: a.buf, left: 120, top: 120 },
      { input: await shadow(1300, b.h, 26), left: 980 - 80, top: 560 - 110 },
      { input: b.buf, left: 980, top: 560 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile("public/img/stock/ew-digital.jpg")
}
// Web: desktop hero with the phone view overlapping it, on ink.
{
  const W = 2400, H = 1350
  const d = await round("raw/own-home-d.jpg", 1700, 26)
  const m = await round("raw/own-home-m.jpg", 470, 54, { left: 0, top: 0, width: 780, height: 1600 })
  const frame = Buffer.from(`<svg width="494" height="${m.h + 24}"><rect width="494" height="${m.h + 24}" rx="64" fill="#1e1e21"/></svg>`)
  await sharp({ create: { width: W, height: H, channels: 3, background: "#141416" } })
    .composite([
      { input: d.buf, left: 140, top: 150 },
      { input: await shadow(494, m.h + 24, 64), left: 1760 - 80, top: 300 - 110 },
      { input: frame, left: 1760, top: 300 },
      { input: m.buf, left: 1772, top: 312 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile("public/img/stock/ew-web.jpg")
}
console.log("ok")
