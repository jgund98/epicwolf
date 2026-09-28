"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, type MotionValue } from "motion/react"
import { useRange } from "@/lib/motion"

/**
 * Chapter two. One statement, read at the speed you scroll: each word inks in
 * from a pale gray as it passes. The flare phrase is the thesis.
 */
const TEXT: { w: string; hot?: boolean }[] = [
  ..."Attention is rented.".split(" ").map((w) => ({ w })),
  ..."Reputation is owned.".split(" ").map((w) => ({ w, hot: true })),
  ..."We build the kind that compounds: a brand people remember, a story people repeat and a pipeline that turns both into revenue."
    .split(" ")
    .map((w) => ({ w })),
]

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.45"] })

  return (
    <section data-tone="light" className="on-light relative py-28 md:py-44" aria-label="What we believe">
      <div className="shell">
        <p className="label">Chapter two · The belief</p>
        <div ref={ref} className="mt-8">
          <p className="t-display !normal-case !tracking-[-0.035em] max-w-[22ch] !leading-[1]" style={{ fontVariationSettings: '"wdth" 112' }}>
            {TEXT.map((t, i) => (
              <Word key={i} p={scrollYProgress} i={i} n={TEXT.length} hot={t.hot} still={!!reduce}>
                {t.w}
              </Word>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

function Word({
  children,
  p,
  i,
  n,
  hot,
  still,
}: {
  children: string
  p: MotionValue<number>
  i: number
  n: number
  hot?: boolean
  still: boolean
}) {
  const start = (i / n) * 0.9
  const o = useRange(p, [start, start + 0.12], [0.16, 1])
  return (
    <>
      <motion.span style={{ opacity: still ? 1 : o }} className={hot ? "text-flare-deep" : undefined}>
        {children}
      </motion.span>{" "}
    </>
  )
}
