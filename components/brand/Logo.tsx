import type { CSSProperties } from "react"
import { EPIC, EPIC_W, LINE_W, W, WOLF, WOLF_W, WORD_GAP, layout, type Glyph } from "./glyphs"

type Props = {
  className?: string
  /** Accent color for the shared middle stroke. Defaults to the signal orange. */
  accent?: string
  title?: string
  /** Arrival animation: each letter rises in on its own beat (CSS, see .ew-rise). */
  draw?: boolean
}

function Glyphs({ items, y = 0, accent, draw, offset = 0 }: { items: { g: Glyph; x: number }[]; y?: number; accent: string; draw?: boolean; offset?: number }) {
  return (
    <>
      {items.map(({ g, x }, i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <g className={draw ? "ew-rise" : undefined} style={draw ? ({ "--i": offset + i } as CSSProperties) : undefined}>
            <path d={g.body} fillRule="evenodd" fill="currentColor" />
            {g.accent && <path d={g.accent} fill={accent} className={g === W ? "ew-ears" + (draw ? " ew-ears-in" : "") : draw ? "ew-accent" : undefined} />}
          </g>
        </g>
      ))}
    </>
  )
}

/** Single-line lockup: EPIC WOLF. 834 x 100. */
export function Logo({ className, accent = "var(--color-flare)", title = "Epic Wolf", draw }: Props) {
  return (
    <svg viewBox={`0 0 ${LINE_W} 100`} className={className} role="img" aria-label={title} overflow="visible">
      <Glyphs items={layout(EPIC)} accent={accent} draw={draw} />
      <Glyphs items={layout(WOLF, EPIC_W + WORD_GAP)} accent={accent} draw={draw} offset={4} />
    </svg>
  )
}

/** Stacked lockup: EPIC over WOLF, both words optically centered. */
export function LogoStack({ className, accent = "var(--color-flare)", title = "Epic Wolf" }: Props) {
  const w = Math.max(EPIC_W, WOLF_W)
  return (
    <svg viewBox={`0 0 ${w} 222`} className={className} role="img" aria-label={title}>
      <Glyphs items={layout(EPIC, (w - EPIC_W) / 2)} accent={accent} />
      <Glyphs items={layout(WOLF, (w - WOLF_W) / 2)} y={122} accent={accent} />
    </svg>
  )
}

/** The mark alone: the W, which is the E turned a quarter turn. */
export function Mark({ className, accent = "var(--color-flare)", title = "Epic Wolf" }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <path d={W.body} fill="currentColor" />
      <path d={W.accent} fill={accent} />
    </svg>
  )
}
