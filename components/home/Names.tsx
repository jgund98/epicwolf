"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { WM_EPIC, WM_H, WM_WOLF } from "@/components/brand/wordmark"
import { useRange } from "@/lib/motion"

/**
 * Chapter six. The two partners, each standing in front of half of the
 * wordmark on signal orange. As you scroll, the halves slide together until the page
 * reads epic wolf with the two of them shoulder to shoulder.
 *
 * The portraits are cut from their backgrounds and normalized in
 * scripts/partners.mjs so heads, eye lines and waistlines match exactly.
 */
/* Both halves share one letter height: wolf fills its column, epic takes the
   same scale (its true width ratio) and sits against the center line. */
function Word({ word, align }: { word: typeof WM_EPIC; align: "end" | "start" }) {
  return (
    <svg
      viewBox={`0 0 ${word.w} ${WM_H}`}
      className={`block h-auto ${align === "end" ? "ml-auto" : ""}`}
      style={{ width: `${(word.w / WM_WOLF.w) * 100}%` }}
      aria-hidden
    >
      {word.letters.map((l, i) => (
        <path key={i} d={l.d} fill="#0a0a0b" />
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
      word: <Word word={WM_EPIC} align="end" />,
      img: "/img/team/jordan-cut.webp",
      name: "Jordan Gundlach",
      href: "/about/jordan-gundlach",
      role: "Partner. Digital and growth.",
      x: left,
    },
    {
      word: <Word word={WM_WOLF} align="start" />,
      img: "/img/team/shawn-cut.webp",
      name: "Shawn Wolf",
      href: "/about/shawn-wolf",
      role: "Partner. Brand and street.",
      x: right,
    },
  ]

  return (
    <section ref={ref} data-tone="light" className="relative overflow-x-clip bg-flare text-ink" aria-labelledby="names-title">
      <div className="shell grid gap-6 pt-24 md:grid-cols-12 md:items-end md:pt-32">
        <div className="md:col-span-7">
          <p className="label label-paper">{label}</p>
          <h2 id="names-title" className="t-h2 mt-4 max-w-[16ch]">
            <span className="font-[300]">Two partners.</span> One agency.
          </h2>
        </div>
        <div className="md:col-span-5">
        <p className="t-body">
          Epic Wolf is led by its partners, who have been building South Florida brands since 2001. One lives in strategy, digital and growth. The other lives in brand and
          everything people can see and touch. Every client gets both, at the same table, from the first conversation.
        </p>
        {cta && (
          <Link href="/about" className="link-draw mt-5 inline-block font-bold">
            About Epic Wolf
          </Link>
        )}
        </div>
      </div>

      {/* Phones: a pinned scene of its own (below). Desktop: the halves slide together. */}
      <MobileStage halves={halves} />

      <div className="relative mt-4 hidden grid-cols-2 md:grid">
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
      <div className="relative z-10 hidden bg-ink text-paper md:block">
        <div className="grid grid-cols-2">
          {halves.map((h, i) => (
            <motion.div key={h.name} style={{ opacity: reduce ? 1 : glow }} className={`py-5 md:py-7 ${i === 0 ? "pl-[var(--gutter)] pr-4 text-left md:text-right md:pr-[9vw]" : "pl-4 pr-[var(--gutter)] md:pl-[9vw]"}`}>
              <Link href={h.href} className="link-draw text-[clamp(0.95rem,1.7vw,1.4rem)] font-bold tracking-[-0.01em]">{h.name}</Link>
              <p className="mt-0.5 text-[clamp(0.78rem,1.1vw,0.95rem)] text-white/60">{h.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

type Half = { word: React.ReactNode; img: string; name: string; role: string; href: string }

/**
 * Phones. A pinned scene staged for a tall screen: epic, then wolf, huge and
 * stacked, rise out of their masks like set type; the partners rise into place
 * in front of the words one after the other (never cropped, never scaled, so
 * the cutouts stay sharp); the ledge with their names lands last.
 *
 * A timed sequence that plays once when the scene comes into view, on GPU
 * transitions (.pm-* in globals.css), then holds. Not scroll-scrubbed: iOS
 * Safari's scroll timelines lose their place on reverse scroll and blanked the
 * scene. No-JS and reduced motion get the finished scene.
 */
function MobileStage({ halves }: { halves: Half[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect() // plays once, then holds: reverse scrolling can never blank it
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`pm-stage relative md:hidden ${inView ? "is-in" : ""}`}>
      <div className="h-[100svh] overflow-hidden">
        <div className="absolute inset-x-0 top-[25%] flex flex-col items-center gap-[1vw]" aria-hidden>
          {/* Each word rises out of its own mask, like type being set */}
          <div className="w-[89.7vw] overflow-clip">
            <div className="pm-epic">
              <StackWord word={WM_EPIC} />
            </div>
          </div>
          <div className="w-[94vw] overflow-clip">
            <div className="pm-wolf">
              <StackWord word={WM_WOLF} />
            </div>
          </div>
        </div>

        {halves.map((h, i) => (
          <figure key={h.name} className={`${i === 0 ? "pm-j left-[-14vw]" : "pm-s right-[-14vw]"} absolute bottom-[84px] w-[84vw]`}>
            <div className="relative aspect-[1000/1120] w-full">
              <Image src={h.img} alt={`${h.name}, ${h.role.replace(/.$/, "")} at Epic Wolf`} fill sizes="84vw" className="object-contain object-bottom" />
            </div>
          </figure>
        ))}

        <div className="pm-ledge absolute inset-x-0 bottom-0 z-10 grid h-[84px] grid-cols-2 bg-ink text-paper">
          {halves.map((h, i) => (
            <div key={h.name} className={`flex flex-col justify-center ${i === 0 ? "pl-[var(--gutter)] pr-3" : "items-end pl-3 pr-[var(--gutter)] text-right"}`}>
              <Link href={h.href} className="text-[1rem] font-bold tracking-[-0.01em] underline decoration-white/30 underline-offset-4">{h.name}</Link>
              <p className="mt-0.5 text-[0.78rem] text-white/60">{h.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StackWord({ word }: { word: typeof WM_EPIC }) {
  return (
    <svg viewBox={`0 0 ${word.w} ${WM_H}`} className="block h-auto w-full">
      {word.letters.map((l, i) => (
        <path key={i} d={l.d} fill="#0a0a0b" />
      ))}
    </svg>
  )
}
