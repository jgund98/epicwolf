import sharp from "sharp"; import fs from "fs";
const W = "raw/sm-work/", O = "public/img/";
const work = {
  "anzo-sign": "anzo-exterior-sign.jpg", "anzo-windows": "anzo-window-graphics.jpg", "advisory-windows": "anderson-urban-window-graphics.jpg",
  "heirlooms-sign": "heir-looms-illuminated-sign.jpg", "heirlooms-windows": "heir-looms-window-graphics.jpg", "inch-ounce-storefront": "inch-and-ounce-storefront.jpg",
  "inch-ounce-menu": "inch-and-ounce-menu-boards.jpg", "lola-chiq": "lola-chiq-storefront.jpg", "motivo-sign": "motivo-home-wall-sign.jpg",
  "segway-trailer": "palm-beach-segway-trailer.jpg", "sushi-yama": "sushi-yama-blade-sign.jpg", "factory-windows": "the-factory-window-graphics.jpg",
  "bennys-cups": "bennys-on-the-beach-drinkware.jpg", "bennys-display": "bennys-on-the-beach-event-display.jpg", "moptop-tees": "mop-top-crew-shirts.jpg",
  "gvi-aprons": "gvi-wellness-aprons.jpg", "margate-fans": "city-of-margate-handheld-fans.jpg", "cerebro-sign": "cerebro-room-sign.jpg",
  "heirlooms-tees": "heir-looms-tees.jpg", "phillips-hoodies": "phillips-construction-hoodies.jpg",
};
for (const [k, f] of Object.entries(work)) await sharp(W + f).rotate().resize(1600, 1600, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(`${O}work/${k}.jpg`);
await sharp("raw/jordan.webp").resize(1100).jpeg({ quality: 82, mozjpeg: true }).toFile(O + "team/jordan.jpg");
await sharp("raw/shawn.jpg").resize(1000).jpeg({ quality: 82, mozjpeg: true }).toFile(O + "team/shawn.jpg");
await sharp("raw/shawn-duo.jpg").resize(1000).jpeg({ quality: 82, mozjpeg: true }).toFile(O + "team/shawn-bw.jpg");
await sharp("raw/fascia-storefront.jpg").resize(2000).jpeg({ quality: 80, mozjpeg: true }).toFile(O + "brand/storefront.jpg");
for (const f of fs.readdirSync(O + "work")) { const m = await sharp(O + "work/" + f).metadata(); console.log(f, m.width + "x" + m.height, (fs.statSync(O + "work/" + f).size / 1024 | 0) + "KB"); }
