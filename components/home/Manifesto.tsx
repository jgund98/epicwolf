"use client"

import { useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, type MotionValue } from "motion/react"
import { useRange } from "@/lib/motion"
import { Marker } from "@/components/ui/Marker"

/**
 * Chapter two. One statement, read at the speed you scroll: each word inks in
 * from a pale gray as it passes. The one word that matters gets circled by
 * hand in flare.
 */
const TEXT: { w: string; hot?: boolean; mark?: boolean }[] = [
  ..."Nobody remembers the second billboard on I-95.".split(" ").map((w) => ({ w })),
  ..."We build the first one.".split(" ").map((w) => ({ w, mark: w === "first" })),
  ..."A brand people know at seventy miles an hour, a story they repeat at dinner and a pipeline that turns both into revenue."
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
                {t.mark ? <Marker>{t.w}</Marker> : t.w}
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
  children: ReactNode
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
