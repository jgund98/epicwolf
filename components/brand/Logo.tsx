import type { CSSProperties } from "react"
import { MARK_D, MARK_SIZE, WM_DOT, WM_H, WM_LETTERS, WM_W } from "./wordmark"

type Props = {
  className?: string
  /** Color of the period. Defaults to the signal orange; pass "currentColor" for one-color. */
  accent?: string
  title?: string
  /** Arrival animation: each letter rises in on its own beat, then the period lands (see .wm-rise). */
  draw?: boolean
}

/** The wordmark: epicwolf. with the wolf-ear w. Letters take currentColor. */
export function Logo({ className, accent = "var(--color-flare)", title = "Epic Wolf", draw }: Props) {
  return (
    <svg viewBox={`0 0 ${WM_W} ${WM_H}`} className={className} role="img" aria-label={title} overflow="visible">
      {WM_LETTERS.map((l, i) => (
        <path
          key={i}
          d={l.d}
          fill="currentColor"
          className={draw ? "wm-rise" : undefined}
          style={draw ? ({ "--i": i } as CSSProperties) : undefined}
        />
      ))}
      <path d={WM_DOT} fill={accent} className={draw ? "wm-dot" : undefined} />
    </svg>
  )
}

/** The mark alone: the w, ears up. */
export function Mark({ className, title = "Epic Wolf" }: Props) {
  return (
    <svg viewBox={`0 0 ${MARK_SIZE} ${MARK_SIZE}`} className={className} role="img" aria-label={title}>
      <path d={MARK_D} fill="currentColor" />
    </svg>
  )
}
