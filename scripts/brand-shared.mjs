// The lowercase wordmark and the w mark as SVG markup, for the raster brand scripts.
import { WM_W, WM_H, WM_LETTERS, WM_DOT, MARK_D, MARK_SIZE } from "../components/brand/wordmark.ts"
export { WM_W, WM_H, MARK_SIZE }
export const FLARE = "#ff4a1c"
/** Wordmark inside 0 0 WM_W WM_H. */
export const wordmark = (color, accent = FLARE) => WM_LETTERS.map((l) => `<path d="${l.d}" fill="${color}"/>`).join("") + `<path d="${WM_DOT}" fill="${accent}"/>`
/** The w inside 0 0 MARK_SIZE MARK_SIZE. */
export const mark = (color) => `<path d="${MARK_D}" fill="${color}"/>`
