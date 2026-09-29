"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"

/**
 * The orange band. Three rows of the three disciplines, set enormous in ink,
 * each chased by a small white word that says what it's for.
 *
 * Desktop: rows travel in opposite directions with the scroll.
 * Phones: rows glide on their own as pure CSS marquees on the GPU. Tying
 * giant type to a finger's momentum scroll stutters; a steady glide never does.
 */
const ROWS: { big: string; small: string; dir: 1 | -1; dur: number }[] = [
  { big: "Branding", small: "unmistakable", dir: -1, dur: 46 },
  { big: "Digital marketing", small: "found first", dir: 1, dur: 58 },
  { big: "Business development", small: "closed", dir: -1, dur: 68 },
]

export function Kinetic() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [scrollDriven, setScrollDriven] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)")
    const read = () => setScrollDriven(mq.matches)
    read()
    mq.addEventListener("change", read)
    return () => mq.removeEventListener("change", read)
  }, [])

  return (
    <section ref={ref} data-tone="light" className="relative overflow-hidden bg-flare py-14 text-ink md:py-24" aria-label="What we do">
      <p className="shell mb-5 text-center text-sm font-semibold text-paper md:mb-10">This is the whole job</p>
      <h2 className="sr-only">Branding, digital marketing and business development</h2>
      <div className="flex flex-col gap-0.5 md:gap-3">
        {ROWS.map((r, i) => (
          <Row key={r.big} row={r} p={scrollYProgress} mode={reduce ? "still" : scrollDriven ? "scroll" : "glide"} index={i} />
        ))}
      </div>
    </section>
  )
}

function Words({ row }: { row: (typeof ROWS)[number] }) {
  return (
    <>
      {Array.from({ length: 4 }).map((_, k) => (
        <span key={k} className="flex shrink-0 items-center">
          <span className="t-kinetic px-[0.16em]">{row.big}</span>
          <span className="px-[0.55em] text-[clamp(0.95rem,2.4vw,2.2rem)] font-semibold text-paper" style={{ fontVariationSettings: '"wdth" 100' }}>
            {row.small}
          </span>
        </span>
      ))}
    </>
  )
}

function Row({ row, p, mode, index }: { row: (typeof ROWS)[number]; p: MotionValue<number>; mode: "scroll" | "glide" | "still"; index: number }) {
  /* A gentle travel: enough to feel alive, never enough to make you dizzy. */
  const from = row.dir === -1 ? "-8%" : "-28%"
  const to = row.dir === -1 ? "-28%" : "-8%"
  const x = useTransform(p, [0, 1], [from, to])

  if (mode === "glide") {
    /* Two identical halves; the track slides exactly one half, so the loop is seamless. */
    return (
      <div className="overflow-hidden whitespace-nowrap" aria-hidden>
        <div
          className="marquee"
          style={{
            ["--marquee-dur" as string]: `${row.dur}s`,
            animationDirection: row.dir === 1 ? "reverse" : "normal",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <span className="flex">
            <Words row={row} />
          </span>
          <span className="flex">
            <Words row={row} />
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden whitespace-nowrap" aria-hidden>
      <motion.div
        className="flex w-max items-center"
        style={{ x: mode === "still" ? `-${10 + index * 8}%` : x, willChange: "transform" }}
      >
        <Words row={row} />
        <Words row={row} />
      </motion.div>
    </div>
  )
}
