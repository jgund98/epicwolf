"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { EPIC, EPIC_W, WOLF, WOLF_W, layout, type Glyph } from "@/components/brand/glyphs"
import { useRange } from "@/lib/motion"

/**
 * Chapter six. The two partners, each standing in front of half of the
 * wordmark on signal orange. As you scroll, the halves slide together until the page
 * reads EPIC WOLF with the two of them shoulder to shoulder.
 *
 * The portraits are cut from their backgrounds and normalized in
 * scripts/partners.mjs so heads, eye lines and waistlines match exactly.
 */
function Word({ glyphs, w }: { glyphs: Glyph[]; w: number }) {
  return (
    <svg viewBox={`0 0 ${w} 100`} className="block h-auto w-full" aria-hidden>
      {layout(glyphs).map(({ g, x }, i) => (
        <g key={i} transform={`translate(${x} 0)`}>
          <path d={g.body} fillRule="evenodd" fill="#0a0a0b" />
          {g.accent && <path d={g.accent} fill="#ffffff" />}
        </g>
      ))}
    </svg>
  )
}

export function Names({ label = "Chapter six · The names", cta = true }: { label?: string; cta?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "center center"] })
  const left = useTransform(p, [0, 1], ["-9vw", "0vw"])
  const right = useTransform(p, [0, 1], ["9vw", "0vw"])
  const lift = useTransform(p, [0, 1], [60, 0])
  const glow = useRange(p, [0.55, 1], [0, 1])

  const halves = [
    {
      word: <Word glyphs={EPIC} w={EPIC_W} />,
      img: "/img/team/jordan-cut.webp",
      name: "Jordan Gundlach",
      role: "Partner. Digital and growth.",
      x: left,
    },
    {
      word: <Word glyphs={WOLF} w={WOLF_W} />,
      img: "/img/team/shawn-cut.webp",
      name: "Shawn Wolf",
      role: "Partner. Brand and street.",
      x: right,
    },
  ]

  return (
    <section ref={ref} data-tone="light" className="relative overflow-hidden bg-flare text-ink" aria-labelledby="names-title">
      <div className="shell grid gap-6 pt-24 md:grid-cols-12 md:items-end md:pt-32">
        <div className="md:col-span-7">
          <p className="label label-paper">{label}</p>
          <h2 id="names-title" className="t-h2 mt-4 max-w-[16ch]">
            <span className="font-[300]">Two partners.</span> One agency.
          </h2>
        </div>
        <div className="md:col-span-5">
        <p className="t-body">
          Epic Wolf is led by its partners. One lives in strategy, digital and growth. The other lives in brand and
          everything people can see and touch. Every client gets both, at the same table, from the first conversation.
        </p>
        {cta && (
          <Link href="/about" className="link-draw mt-5 inline-block font-bold">
            About Epic Wolf
          </Link>
        )}
        </div>
      </div>

      <div className="relative mt-10 grid grid-cols-2 md:mt-4">
        {halves.map((h, i) => (
          <motion.figure key={h.name} className="relative" style={{ x: reduce ? 0 : h.x }}>
            <div className={`relative ${i === 0 ? "ml-auto pl-[4vw]" : "mr-auto pr-[4vw]"} w-full max-w-[46rem]`}>
              <div className={`absolute inset-x-0 top-[14%] ${i === 0 ? "pl-[4vw] pr-[1.2vw]" : "pl-[1.2vw] pr-[4vw]"}`}>{h.word}</div>
              <motion.div className="relative mx-auto aspect-[1000/1120] w-[92%]" style={{ y: reduce ? 0 : lift }}>
                <Image src={h.img} alt={`${h.name}, ${h.role.replace(/.$/, "")} at Epic Wolf`} fill sizes="(min-width: 768px) 42vw, 48vw" className="object-contain object-bottom" />
              </motion.div>
            </div>
          </motion.figure>
        ))}
      </div>

      {/* The ledge they stand on, with their names */}
      <div className="relative z-10 bg-ink text-paper">
        <div className="grid grid-cols-2">
          {halves.map((h, i) => (
            <motion.div key={h.name} style={{ opacity: reduce ? 1 : glow }} className={`py-5 md:py-7 ${i === 0 ? "pl-[var(--gutter)] pr-4 text-left md:text-right md:pr-[9vw]" : "pl-4 pr-[var(--gutter)] md:pl-[9vw]"}`}>
              <p className="text-[clamp(0.95rem,1.7vw,1.4rem)] font-bold tracking-[-0.01em]">{h.name}</p>
              <p className="mt-0.5 text-[clamp(0.78rem,1.1vw,0.95rem)] text-white/60">{h.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
