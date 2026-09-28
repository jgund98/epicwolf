// Contact sheet: node scripts/sheet.mjs <dir|files...> -o out.jpg  (labels = index)
import sharp from "sharp"; import fs from "fs"; import path from "path";
const args = process.argv.slice(2); const oi = args.indexOf("-o"); const out = args[oi + 1]; const ins = args.slice(0, oi);
let files = []; for (const a of ins) { if (fs.statSync(a).isDirectory()) files.push(...fs.readdirSync(a).filter(f => /\.(jpe?g|png|webp)$/i.test(f)).map(f => path.join(a, f))); else files.push(a); }
const W = 320, H = 240, C = 6, R = Math.ceil(files.length / C);
const tiles = await Promise.all(files.map(async (f, i) => ({ input: await sharp(f).resize(W, H, { fit: "cover" }).composite([{ input: Buffer.from(`<svg width="${W}" height="${H}"><rect width="46" height="30" fill="black"/><text x="6" y="22" font-size="20" font-family="Arial" fill="white">${i}</text></svg>`) }]).jpeg().toBuffer(), left: (i % C) * W, top: Math.floor(i / C) * H })));
await sharp({ create: { width: C * W, height: R * H, channels: 3, background: "#222" } }).composite(tiles).jpeg({ quality: 80 }).toFile(out);
files.forEach((f, i) => console.log(i, path.basename(f)));
