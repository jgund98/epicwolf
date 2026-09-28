"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"

/**
 * The orange band. Three rows of the three disciplines, set enormous in ink,
 * each chased by a small white word that says what it's for. Rows travel in
 * opposite directions as you scroll, so the page itself seems to move.
 */
const ROWS: { big: string; small: string; dir: 1 | -1 }[] = [
  { big: "Branding", small: "unmistakable", dir: -1 },
  { big: "Digital marketing", small: "found first", dir: 1 },
  { big: "Business development", small: "closed", dir: -1 },
]

export function Kinetic() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  return (
    <section ref={ref} data-tone="light" className="relative overflow-hidden bg-flare py-16 text-ink md:py-24" aria-label="What we do">
      <p className="shell mb-6 text-center text-sm font-semibold text-paper md:mb-10">This is the whole job</p>
      <div className="flex flex-col gap-1 md:gap-3">
        {ROWS.map((r, i) => (
          <Row key={r.big} row={r} p={scrollYProgress} still={!!reduce} index={i} />
        ))}
      </div>
    </section>
  )
}

function Row({ row, p, still, index }: { row: (typeof ROWS)[number]; p: MotionValue<number>; still: boolean; index: number }) {
  const from = row.dir === -1 ? "-4%" : "-46%"
  const to = row.dir === -1 ? "-46%" : "-4%"
  const x = useTransform(p, [0, 1], [from, to])
  const items = Array.from({ length: 6 })
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div className="flex w-max items-center" style={{ x: still ? `-${10 + index * 8}%` : x }} aria-hidden={index > 0}>
        {items.map((_, k) => (
          <span key={k} className="flex items-center">
            <span className="t-kinetic px-[0.18em]">{row.big}</span>
            <span className="px-[0.6em] text-[clamp(1rem,2.4vw,2.2rem)] font-semibold text-paper" style={{ fontVariationSettings: '"wdth" 100' }}>
              {row.small}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
