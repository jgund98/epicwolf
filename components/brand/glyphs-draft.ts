// DRAFT recreation of the new block logo, parked until the original art file is traced. Not imported anywhere.
/**
 * The Epic Wolf logotype.
 *
 * Heavy block capitals on a 100-unit cap height, every stem 22 units. The P
 * and C are cut on the diagonal; the O is a slab with a slot counter.
 *
 * The wolf lives in the W: its first counter is carved as a wolf's head in
 * profile (ear up, brow, muzzle pointing forward, jaw, throat) and the ear
 * carries the only orange in the mark. Read as a word it is EPIC WOLF; look
 * at the W and the wolf looks back.
 *
 * W_PLAIN is the same outline with the head flattened into an ordinary V
 * counter, point for point, so the two can morph (chapter five carves it).
 */

export type Glyph = { w: number; body: string; accent?: string }

const poly = (pts: [number, number][]) => "M" + pts.map(([x, y]) => `${x} ${y}`).join("L") + "Z"

export const E: Glyph = { w: 50, body: "M0 0H50V19H22V40H44V58H22V81H50V100H0Z" }

export const P: Glyph = {
  w: 56,
  body: "M0 0H50A6 6 0 0 1 56 6V46L22 80V100H0Z M22 19V47H36V19Z",
}

export const I: Glyph = { w: 22, body: "M0 0H22V100H0Z" }

export const C: Glyph = {
  w: 52,
  body:
    "M10 0H52V20L31 38V64H52V100H10A10 10 0 0 1 0 90V10A10 10 0 0 1 10 0Z " +
    "M22 17V83H31V17Z",
}

export const O: Glyph = {
  w: 50,
  body:
    "M12 0H38A12 12 0 0 1 50 12V88A12 12 0 0 1 38 100H12A12 12 0 0 1 0 88V12A12 12 0 0 1 12 0Z " +
    "M20 16V84H30V16Z",
}

export const L: Glyph = { w: 48, body: "M0 0H22V81H48V100H0Z" }

export const F: Glyph = { w: 47, body: "M0 0H47V19H22V40H42V58H22V100H0Z" }

/* The W, point by point. Indices 2 to 10 trace the first counter: in the
   wolf they draw the head, in the plain W they sit on a straight V edge. */
const W_WOLF_PTS: [number, number][] = [
  [0, 0],
  [24, 0],
  [28, 30], // nape
  [31, 72], // bottom of the counter
  [36, 64], // throat
  [40, 57], // back of the jaw
  [49, 54], // chin
  [56, 50.5], // lower lip
  [57.5, 46.5], // nose tip
  [54, 42], // top of the nose
  [47, 40.5], // muzzle bridge
  [42, 34.5], // stop
  [39.5, 28], // forehead
  [33, 0], // front of the ear, up to the tip at the top
  [61, 0],
  [64, 70],
  [68, 0],
  [92, 0],
  [76, 100],
  [57, 100],
  [47, 66],
  [37, 100],
  [18, 100],
]
const onV = (y: number): [number, number] => [31 + ((72 - y) * 5.5) / 72, y]
const W_PLAIN_PTS: [number, number][] = W_WOLF_PTS.map((p, i) => (i >= 4 && i <= 13 ? onV(p[1]) : p))

export const WOLF_EAR = "M28.6 26L31.6 9L35.4 26Z"
export const W_WOLF = poly(W_WOLF_PTS)
export const W_PLAIN = poly(W_PLAIN_PTS)

/** The W partway between plain (0) and wolf (1): the head carved in by degrees. */
export const wCarve = (t: number) => poly(W_WOLF_PTS.map(([x, y], i) => [W_PLAIN_PTS[i][0] + (x - W_PLAIN_PTS[i][0]) * t, W_PLAIN_PTS[i][1] + (y - W_PLAIN_PTS[i][1]) * t] as [number, number]))

export const W: Glyph = { w: 92, body: W_WOLF, accent: WOLF_EAR }

export const GAP = 7
export const WORD_GAP = 20

export const EPIC = [E, P, I, C]
export const WOLF = [W, O, L, F]

export function layout(glyphs: Glyph[], start = 0) {
  let x = start
  return glyphs.map((g) => {
    const at = x
    x += g.w + GAP
    return { g, x: at }
  })
}

export const wordWidth = (glyphs: Glyph[]) => glyphs.reduce((s, g) => s + g.w, 0) + GAP * (glyphs.length - 1)

export const EPIC_W = wordWidth(EPIC)
export const WOLF_W = wordWidth(WOLF)
export const LINE_W = EPIC_W + WORD_GAP + WOLF_W
