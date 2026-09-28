// Overlay a labelled coordinate grid on an image (in source pixel units) to measure quads.
import sharp from "sharp"
const [,, src, out, stepArg, cropArg] = process.argv
const step = +stepArg || 100
let img = sharp(src)
let { width: W, height: H } = await img.metadata()
let ox = 0, oy = 0
if (cropArg) { const [x, y, w, h] = cropArg.split(",").map(Number); img = img.extract({ left: x, top: y, width: w, height: h }); ox = x; oy = y; W = w; H = h }
let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
for (let x = Math.ceil(ox / step) * step; x < ox + W; x += step) s += `<line x1="${x - ox}" y1="0" x2="${x - ox}" y2="${H}" stroke="red" stroke-width="${x % (step * 5) ? 1 : 3}" opacity=".7"/><text x="${x - ox + 3}" y="${Math.max(24, step * 0.4)}" fill="yellow" font-size="${Math.max(18, W / 60)}" font-family="Arial" stroke="black" stroke-width="1">${x}</text>`
for (let y = Math.ceil(oy / step) * step; y < oy + H; y += step) s += `<line x1="0" y1="${y - oy}" x2="${W}" y2="${y - oy}" stroke="red" stroke-width="${y % (step * 5) ? 1 : 3}" opacity=".7"/><text x="3" y="${y - oy - 3}" fill="yellow" font-size="${Math.max(18, W / 60)}" font-family="Arial" stroke="black" stroke-width="1">${y}</text>`
s += "</svg>"
const buf = await img.composite([{ input: Buffer.from(s) }]).png().toBuffer()
await sharp(buf).resize(1600, 1600, { fit: "inside" }).jpeg({ quality: 80 }).toFile(out)
console.log("ok")
