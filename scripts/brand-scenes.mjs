// Put the Epic Wolf brand onto real photographed surfaces for service imagery.
import sharp from "sharp"
import { FLARE, WM_W, WM_H, MARK_SIZE, wordmark, mark } from "./brand-shared.mjs"

// Van: an American Ram ProMaster in side profile. The cargo side is flat and
// square to camera, so a graphic multiplied onto it reads as film, with the
// door seam, track and handle showing through.
{
  const x = 338, y = 532, w = 808, h = 346
  const s = (w * 0.44) / WM_W
  const wrap = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="#1a1a1d"/>
    <polygon points="${w * 0.64},0 ${w},0 ${w},${h} ${w * 0.5},${h}" fill="${FLARE}"/>
    <g transform="translate(${w * 0.07} ${h * 0.3}) scale(${s})">${wordmark("#ffffff", FLARE)}</g>
    <rect x="${w * 0.07}" y="${h * 0.3 + WM_H * s + 14}" width="${w * 0.16}" height="6" fill="#ffffff" opacity=".85"/>
  </svg>`
  await sharp("public/img/stock/usvan.jpg").composite([{ input: Buffer.from(wrap), left: x, top: y, blend: "multiply" }]).jpeg({ quality: 84, mozjpeg: true }).toFile("public/img/brand/ew-van-us.jpg")
}
// Storefront: white letters on the dark fascia band, the mark on the glass.
{
  const bandY = 62, bandH = 108, W0 = 1700
  const s = 84 / WM_H
  const lw = WM_W * s
  const band = `<svg xmlns="http://www.w3.org/2000/svg" width="${W0}" height="${bandH}"><g transform="translate(${(W0 - lw) / 2} ${(bandH - 84) / 2}) scale(${s})">${wordmark("#f4f4f2", FLARE)}</g></svg>`
  const markS = 1.7
  const glass = `<svg xmlns="http://www.w3.org/2000/svg" width="${100 * markS}" height="${100 * markS}"><g transform="scale(${(100 * markS) / MARK_SIZE})">${mark("#0a0a0b")}</g></svg>`
  await sharp("public/img/stock/storefront.jpg")
    .composite([
      { input: Buffer.from(band), left: 0, top: bandY },
      { input: Buffer.from(glass), left: 1215 - 85, top: 610, blend: "multiply" },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/img/brand/ew-storefront-3.jpg")
}
// Tote: the w, screen printed.
{
  const S = 1.9
  const tote = `<svg xmlns="http://www.w3.org/2000/svg" width="${100 * S}" height="${100 * S}"><g transform="scale(${(100 * S) / MARK_SIZE})">${mark("#141416")}</g></svg>`
  await sharp("public/img/stock/tote.jpg").composite([{ input: Buffer.from(tote), left: 1000 - 95, top: 700, blend: "multiply" }]).jpeg({ quality: 82, mozjpeg: true }).toFile("public/img/brand/ew-tote-3.jpg")
}
console.log("scenes ok")
