/**
 * The Epic Wolf logotype, drawn from primitives on a 100-unit cap height.
 *
 * The idea: the W of WOLF is the E of EPIC turned a quarter turn. The E's
 * short middle arm becomes the W's low middle stroke, and that one stroke is
 * the only colored part of the mark. Story and street, same letter, different
 * angle.
 *
 * Stroke is 22 units. Square letters (E W I L F) keep hard corners; round
 * letters (P C O) take a 38 radius outside and 16 inside, the way an extended
 * grotesk would.
 *
 * The wolf: in the W, that orange stroke is a geometric wolf's head, ears
 * pricked, muzzle resting on the bar. In the E it is still a plain arm, so the
 * wolf only appears once the E has turned into the W.
 *
 * (A monoline tracked alternative was tried on 2026-09-28 and rejected by
 * Jordan in favor of this one.)
 */

export type Glyph = { w: number; body: string; accent?: string }

/* E: stem, top and bottom arms in the body; the short middle arm is the accent. */
export const E: Glyph = {
  w: 100,
  body: "M0 0H100V22H22V78H100V100H0Z",
  accent: "M22 39H66V61H22Z",
}

/* The wolf's head (W coordinates): ear tips, the dip between them, cheeks,
   muzzle point. WOLF_BAR is the same six points laid out as the plain bar the
   E's arm becomes when turned, so the two can morph into each other. */
export const WOLF_HEAD = "M39 18L50 31L61 18L61 50L50 78L39 50Z"
export const WOLF_BAR = "M39 34L50 34L61 34L61 78L50 78L39 78Z"

/* W: the E rotated -90deg about its center. (x, y) -> (y, 100 - x). */
export const W: Glyph = {
  w: 100,
  body: "M0 0H22V78H78V0H100V100H0Z",
  accent: WOLF_HEAD,
}

export const P: Glyph = {
  w: 96,
  body: "M0 0H66A30 30 0 0 1 96 30V34A30 30 0 0 1 66 64H22V100H0Z M22 22V42H66A8 8 0 0 0 74 34V30A8 8 0 0 0 66 22Z",
}

export const I: Glyph = { w: 22, body: "M0 0H22V100H0Z" }

export const C: Glyph = {
  w: 100,
  body: "M100 0V22H38A16 16 0 0 0 22 38V62A16 16 0 0 0 38 78H100V100H38A38 38 0 0 1 0 62V38A38 38 0 0 1 38 0Z",
}

export const O: Glyph = {
  w: 100,
  body:
    "M38 0H62A38 38 0 0 1 100 38V62A38 38 0 0 1 62 100H38A38 38 0 0 1 0 62V38A38 38 0 0 1 38 0Z " +
    "M38 22A16 16 0 0 0 22 38V62A16 16 0 0 0 38 78H62A16 16 0 0 0 78 62V38A16 16 0 0 0 62 22Z",
}

export const L: Glyph = { w: 82, body: "M0 0H22V78H82V100H0Z" }

export const F: Glyph = { w: 90, body: "M0 0H90V22H22V39H72V61H22V100H0Z" }

export const GAP = 16
export const WORD_GAP = 46

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

export const EPIC_W = wordWidth(EPIC) // 366
export const WOLF_W = wordWidth(WOLF) // 420
export const LINE_W = EPIC_W + WORD_GAP + WOLF_W
