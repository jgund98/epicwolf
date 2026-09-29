// Render "epicwolf." from Archivo 900 outlines for study. fontkit, because
// opentype.js emits NaN coordinates for some glyphs in these instances.
import { createRequire } from "module"
import sharp from "sharp"
const require = createRequire("C:/Users/Lucky/find-tool-plan-nextJS/package.json")
const fontkit = require("fontkit")

export function load(name) {
  return fontkit.openSync(`raw/font/${name}.ttf`)
}

/** Glyph path in a y-down space: baseline at 0, `size` px per em, left edge at x. */
export function glyphPath(font, ch, size, x) {
  const g = font.glyphForCodePoint(ch.codePointAt(0))
  const s = size / font.unitsPerEm
  const d = g.path
    .scale(s, -s)
    .translate(x, 0)
    .toSVG()
  return { d, adv: g.advanceWidth * s, g, s }
}

export function layoutText(font, text, size, tracking) {
  let x = 0
  const out = []
  for (const ch of text) {
    const r = glyphPath(font, ch, size, x)
    out.push({ ch, x, ...r })
    x += r.adv + tracking * size
  }
  return { glyphs: out, width: x - tracking * size }
}

if (process.argv[1].endsWith("wordmark-study.mjs")) {
  const rows = []
  for (const [f, t] of [["archivo-900-100", -0.04], ["archivo-900-112", -0.04], ["archivo-900-112", -0.07]]) {
    const { glyphs } = layoutText(load(f), "epicwolf.", 220, t)
    rows.push(glyphs.map((g) => g.d).join(" "))
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="820"><rect width="1500" height="820" fill="#fbf7ee"/>${rows
    .map((d, i) => `<g transform="translate(30 ${200 + i * 260})"><path d="${d}" fill="#f04e1a"/></g>`)
    .join("")}</svg>`
  await sharp(Buffer.from(svg)).jpeg().toFile("shots/wm-study.jpg")
  console.log("ok")
}
