"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"

/**
 * The orange band from the home page, made reusable for inner pages: real
 * words from the page (search terms, corridors, towns) set enormous in ink,
 * each followed by the wordmark's small W.
 *
 * Desktop with a fine pointer: rows travel against each other with the scroll.
 * Phones and tablets: rows glide on their own as CSS marquees on the GPU,
 * because giant type tied to momentum scrolling stutters.
 *
 * The moving rows are decorative (aria-hidden); the same words are given to
 * assistive tech once, as a plain list.
 */
type Row = { items: string[]; dir: 1 | -1; dur?: number }

export function KineticBand({ label, rows, size = "md" }: { label: string; rows: Row[]; size?: "md" | "lg" }) {
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

  const all = rows.flatMap((r) => r.items)
  const type =
    size === "lg"
      ? "text-[clamp(3rem,13vw,10.5rem)]"
      : "text-[clamp(2.4rem,10vw,7.5rem)]"

  return (
    <section ref={ref} data-tone="light" className="relative overflow-hidden bg-flare py-12 text-ink md:py-20">
      <p className="shell mb-5 text-sm font-semibold text-paper md:mb-8">{label}</p>
      <ul className="sr-only">
        {all.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-1 md:gap-3">
        {rows.map((r, i) => (
          <BandRow key={i} row={r} p={scrollYProgress} type={type} index={i} mode={reduce ? "still" : scrollDriven ? "scroll" : "glide"} />
        ))}
      </div>
    </section>
  )
}

function Mark() {
  return (
    <svg viewBox="0 0 100 100" className="mx-[0.28em] h-[0.3em] w-[0.3em] shrink-0" aria-hidden>
      <path d="M0 0H22V78H78V0H100V100H0Z" fill="currentColor" />
      <path d="M39 34H61V78H39Z" fill="var(--color-paper)" />
    </svg>
  )
}

function Words({ items, type }: { items: string[]; type: string }) {
  return (
    <>
      {items.map((w, k) => (
        <span key={k} className="flex shrink-0 items-center">
          <span
            className={`${type} whitespace-nowrap px-[0.12em] font-[900] uppercase leading-[0.95] tracking-[-0.035em]`}
            style={{ fontVariationSettings: '"wdth" 86' }}
          >
            {w}
          </span>
          <Mark />
        </span>
      ))}
    </>
  )
}

function BandRow({ row, p, type, index, mode }: { row: Row; p: MotionValue<number>; type: string; index: number; mode: "scroll" | "glide" | "still" }) {
  /* Short lists get repeated so a row is always wider than the screen. */
  const reps = Math.max(2, Math.ceil(8 / row.items.length))
  const items = Array.from({ length: reps }, () => row.items).flat()
  const from = row.dir === -1 ? "-6%" : "-26%"
  const to = row.dir === -1 ? "-26%" : "-6%"
  const x = useTransform(p, [0, 1], [from, to])

  if (mode === "glide") {
    return (
      <div className="overflow-hidden" aria-hidden>
        <div
          className="marquee"
          style={{
            ["--marquee-dur" as string]: `${row.dur ?? 50 + index * 10}s`,
            animationDirection: row.dir === 1 ? "reverse" : "normal",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <span className="flex">
            <Words items={items} type={type} />
          </span>
          <span className="flex">
            <Words items={items} type={type} />
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden" aria-hidden>
      <motion.div className="flex w-max items-center" style={{ x: mode === "still" ? `-${8 + index * 8}%` : x, willChange: "transform" }}>
        <Words items={items} type={type} />
        <Words items={items} type={type} />
      </motion.div>
    </div>
  )
}
