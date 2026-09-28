"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { W, WOLF_BAR, WOLF_HEAD } from "@/components/brand/glyphs"

/**
 * Chapter five. How an engagement runs, told with the logo's own idea: a
 * giant E turns a little with every phase and lands as the W on the last one,
 * where its orange arm becomes the wolf's head. The brand is built as you read.
 *
 * Drawn as the W turned back a quarter (which is exactly the E), then turned
 * home to 0deg; the accent morphs between two six-point shapes.
 */
const PHASES = [
  {
    t: "We listen.",
    b: "Owners, customers, the numbers and the market. Most of the answers are already inside the company. Our first job is to hear them.",
  },
  {
    t: "We decide.",
    b: "One sentence on why you win, the audience that matters and the few moves worth making. Good strategy is mostly saying no.",
  },
  {
    t: "We build.",
    b: "Identity, story, site, campaigns and the pipeline behind them, made by one team to one standard.",
  },
  {
    t: "We go live.",
    b: "Search, press, social and the sign out front, all at once. The market meets one brand, not five versions of it.",
  },
  {
    t: "We keep score.",
    b: "Recognition, inquiries, pipeline and revenue, reported plainly. Then we do more of what works.",
  },
]

function Glyph({ className, style, wolf = false }: { className?: string; style?: React.CSSProperties; wolf?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <path d={W.body} fill="currentColor" />
      <motion.path
        initial={false}
        animate={{ d: wolf ? WOLF_HEAD : WOLF_BAR }}
        transition={{ duration: 0.8, ease: [0.34, 1.4, 0.64, 1] }}
        fill="var(--color-flare)"
      />
    </svg>
  )
}

export function Engagement() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] })
  useMotionValueEvent(p, "change", (v) => setActive(Math.min(PHASES.length - 1, Math.max(0, Math.floor(v * PHASES.length * 0.999)))))
  const turn = useSpring(useTransform(p, [0.06, 0.94], [90, 0]), { stiffness: 90, damping: 22 })

  return (
    <section ref={ref} data-tone="dark" className={`on-dark relative ${reduce ? "" : "lg:h-[380vh]"}`} aria-labelledby="engagement-title">
      {/* Desktop: pinned stage */}
      <div className={reduce ? "hidden" : "sticky top-0 hidden h-[100svh] overflow-hidden lg:block"}>
        <div className="shell grid h-full grid-cols-12 items-center gap-10 pt-[var(--header-h)]">
          <div className="col-span-5 flex flex-col justify-center">
            <p className="label">Chapter five · The engagement</p>
            <h2 id="engagement-title" className="t-h2 mt-4 max-w-[12ch]">
              <span className="font-[300]">How a brand</span> gets built here
            </h2>
            <motion.div className="mt-12 w-[min(22vw,19rem)] text-paper" style={{ rotate: turn }}>
              <Glyph className="block h-auto w-full" wolf={active === PHASES.length - 1} />
            </motion.div>
          </div>
          <div className="col-span-6 col-start-7">
            <ol className="space-y-1">
              {PHASES.map((ph, i) => (
                <li key={ph.t}>
                  <p
                    className="t-display !normal-case transition-[color,opacity] duration-500"
                    style={{ fontVariationSettings: '"wdth" 112', fontSize: "clamp(2rem, 4.4vw, 4.6rem)", opacity: i === active ? 1 : 0.16, color: i === active ? "var(--color-paper)" : undefined }}
                  >
                    {ph.t}
                  </p>
                </li>
              ))}
            </ol>
            <div className="relative mt-10 min-h-[7.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="t-lead max-w-[40ch] text-paper/80"
                >
                  {PHASES[active].b}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex gap-2" aria-hidden>
              {PHASES.map((_, i) => (
                <span key={i} className="h-[4px] flex-1 origin-left bg-white/15">
                  <span className="block h-full bg-flare transition-transform duration-500" style={{ transform: `scaleX(${i <= active ? 1 : 0})`, transformOrigin: "left" }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phones, tablets and reduced motion: the same story, stacked */}
      <div className={reduce ? "py-24" : "py-24 lg:hidden"}>
        <div className="shell">
          <p className="label">Chapter five · The engagement</p>
          <h2 className="t-h2 mt-4 max-w-[12ch]">
            <span className="font-[300]">How a brand</span> gets built here
          </h2>
          <ol className="mt-12 border-t border-white/12">
            {PHASES.map((ph, i) => (
              <li key={ph.t} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/12 py-8">
                <Glyph className="mt-1 h-10 w-10 text-paper" style={{ transform: `rotate(${90 - (90 * i) / (PHASES.length - 1)}deg)` }} wolf={i === PHASES.length - 1} />
                <div>
                  <p className="t-h3">{ph.t}</p>
                  <p className="t-body muted-dark mt-2">{ph.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
