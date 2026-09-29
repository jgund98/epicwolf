"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { W, WOLF_BAR } from "@/components/brand/glyphs"

/**
 * Chapter five. How an engagement runs, told with the logo's own idea: a
 * giant E turns a little with every phase and lands as the W on the last one.
 * The brand is built as you read.
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
        animate={{ d: WOLF_BAR }}
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
    <section ref={ref} data-tone="dark" className={`on-dark relative ${reduce ? "" : "h-[420vh] lg:h-[380vh]"}`} aria-labelledby="engagement-title">
      {/* Pinned stage, every screen size */}
      <div className={reduce ? "hidden" : "sticky top-0 h-[100svh] overflow-hidden"}>
        <div className="shell flex h-full flex-col justify-center gap-6 pt-[var(--header-h)] lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="label">Chapter five · The engagement</p>
            <h2 id="engagement-title" className="t-h2 mt-3 max-w-[12ch] lg:mt-4">
              How a brand gets built here
            </h2>
            <motion.div className="mt-8 w-[34vw] max-w-[10rem] text-paper lg:mt-12 lg:w-[min(22vw,19rem)] lg:max-w-none" style={{ rotate: turn }}>
              <Glyph className="block h-auto w-full" wolf={active === PHASES.length - 1} />
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {/* Desktop: the whole list, the active line lit */}
            <ol className="hidden space-y-1 lg:block">
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
            {/* Phones: only the active line, set large */}
            <div className="relative h-[3.2rem] overflow-hidden lg:hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={active}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-0 top-0 whitespace-nowrap text-[clamp(2.1rem,10vw,3rem)] font-[850] leading-none tracking-[-0.035em] text-paper"
                  style={{ fontVariationSettings: '"wdth" 112' }}
                >
                  {PHASES[active].t}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="relative mt-4 min-h-[6.5rem] lg:mt-10 lg:min-h-[7.5rem]">
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
            <div className="mt-4 flex gap-2 lg:mt-8" aria-hidden>
              {PHASES.map((_, i) => (
                <span key={i} className="h-[4px] flex-1 origin-left bg-white/15">
                  <span className="block h-full bg-flare transition-transform duration-500" style={{ transform: `scaleX(${i <= active ? 1 : 0})`, transformOrigin: "left" }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion: the same story, stacked */}
      {reduce && (
        <div className="py-24">
          <div className="shell">
            <p className="label">Chapter five · The engagement</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">
              How a brand gets built here
            </h2>
            <ol className="mt-12 border-t border-white/12">
              {PHASES.map((ph, i) => (
                <li key={ph.t} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/12 py-8">
                  <Glyph className="mt-1 h-10 w-10 text-paper" style={{ transform: `rotate(${90 - (90 * i) / (PHASES.length - 1)}deg)` }} wolf={false} />
                  <div>
                    <p className="t-h3">{ph.t}</p>
                    <p className="t-body muted-dark mt-2">{ph.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </section>
  )
}
