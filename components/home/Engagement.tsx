"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { WM_BASE, WM_EPIC, WM_DOT_C, WM_H, WM_LETTERS, WM_W, WM_WX } from "@/components/brand/wordmark"
import { useRange } from "@/lib/motion"

/**
 * Chapter five. How an engagement runs, told by building the Epic Wolf
 * wordmark in front of you, one phase at a time, like a page from a brand
 * standards book:
 *
 *   We listen.     the measuring guides draw in
 *   We decide.     every letter is drafted in outline
 *   We build.      the letters fill, one after another
 *   We go live.    the wolf's ears rise out of the w, the period lands
 *   We keep score. the scaffolding clears and the finished mark stands alone
 *
 * Everything is tied straight to scroll through motion values, so nothing
 * re-renders per frame and it runs the same in both directions.
 */
const PHASES = [
  {
    t: "We listen.",
    b: "Owners, customers, the numbers and the market. The clearest signal is usually already inside the company. Our first job is to hear it.",
  },
  {
    t: "We decide.",
    b: "One sentence on why you win, the audience that matters and the few moves worth making. Good strategy is mostly saying no.",
  },
  {
    t: "We build.",
    b: "Identity, story, site, campaigns and the pipeline behind them, made by one team so every piece says the same thing.",
  },
  {
    t: "We go live.",
    b: "Search, press, social and the front door go live together. The market meets one brand, not five versions of it.",
  },
  {
    t: "We keep score.",
    b: "Recognition, inquiries, pipeline and revenue, reported plainly. Then we do more of what works.",
  },
]

/* The w, rebuilt live so its ears can rise out of a flat Archivo apex.
   Same geometry as scripts/wordmark-lab.mjs; at e=0 it is the plain w. */
const FLAT = { J: 528, T: 528, tip: 426, N: 528, r: 46 }
const EARS = { J: 400, T: 600, tip: 352, N: 400, r: 46 }
function wPath(e: number) {
  const m = (a: number, b: number) => a + (b - a) * e
  const J = m(FLAT.J, EARS.J), T = m(FLAT.T, EARS.T), tip = m(FLAT.tip, EARS.tip), N = m(FLAT.N, EARS.N), r = EARS.r
  const lx = (y: number) => 368 + (58 / 193) * (y - 335)
  const M = (x: number) => 1077 - x
  const mid = 538.5
  const k = (x: number) => (tip === mid ? T : N + (T - N) * ((x - mid) / (tip - mid)))
  const ax = mid - r
  const ay = k(ax)
  const P = (x: number, y: number) => `${(WM_WX + x).toFixed(1)} ${(WM_BASE - y).toFixed(1)}`
  return [
    `M${P(220, 0)}`, `L${P(0, 528)}`, `L${P(229, 528)}`, `L${P(326, 211)}`, `L${P(334, 211)}`, `L${P(368, 335)}`,
    `L${P(lx(J), J)}`, `L${P(tip, T)}`, `L${P(ax, ay)}`, `Q${P(mid, N)} ${P(M(ax), ay)}`, `L${P(M(tip), T)}`, `L${P(M(lx(J)), J)}`,
    `L${P(708, 334)}`, `L${P(740, 211)}`, `L${P(747, 211)}`, `L${P(846, 528)}`, `L${P(1056, 528)}`, `L${P(836, 0)}`, `L${P(625, 0)}`,
    `L${P(532, 313)}`, `L${P(526, 313)}`, `L${P(434, 0)}`, "Z",
  ].join("")
}

/* The metric lines of the face, in wordmark units (y down). */
const PAD = 240
const GUIDES = [
  { y: 0, name: "Ascender" },
  { y: WM_BASE - 528, name: "x-height" },
  { y: WM_BASE, name: "Baseline" },
  { y: WM_H, name: "Descender" },
]

function Letter({ p, i, d, ch }: { p: MotionValue<number>; i: number; d?: string; ch: string }) {
  const draw = useRange(p, [0.2 + i * 0.022, 0.34 + i * 0.022], [0, 1])
  const fill = useRange(p, [0.42 + i * 0.02, 0.5 + i * 0.02], [0, 1])
  const earsT = useRange(p, [0.62, 0.72], [0, 1])
  const wd = useTransform(earsT, (e) => wPath(1 - Math.pow(1 - e, 3)))
  const isW = ch === "w"
  return (
    <motion.path
      d={isW ? wd : d}
      style={{ pathLength: draw, fillOpacity: fill }}
      fill="var(--color-paper)"
      stroke="var(--color-paper)"
      strokeOpacity={0.55}
      strokeWidth={1.25}
      vectorEffect="non-scaling-stroke"
    />
  )
}

/* Phones stack the lockup (epic over wolf) so the letters build at twice the size. */
const LINE2 = WM_H - 40
const STACK_W = Math.max(WM_EPIC.w, WM_W - WM_WX)

function Construction({ p, stacked = false }: { p: MotionValue<number>; stacked?: boolean }) {
  const guide = useRange(p, [0.03, 0.15], [0, 1])
  const guideFade = useRange(p, [0.82, 0.95], [1, 0.0])
  const guideOpacity = useTransform(() => 0.22 * guideFade.get())
  const labels = useTransform(() => Math.min(clamp01(p.get(), 0.08, 0.15), 1 - clamp01(p.get(), 0.62, 0.7)))
  /* The period lands with a small overshoot. */
  const dot = useTransform(p, (v) => {
    const t = Math.min(Math.max((v - 0.7) / 0.08, 0), 1)
    const c = 1.9
    return t === 0 ? 0 : 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2)
  })
  /* The ears callout: in when they rise, out when the scaffolding clears. */
  const call = useTransform(() => Math.min(clamp01(p.get(), 0.64, 0.7), 1 - clamp01(p.get(), 0.8, 0.88)))
  const tipX = WM_WX + EARS.tip
  const tipY = WM_BASE - EARS.T

  const W = stacked ? STACK_W : WM_W
  const pad = stacked ? PAD / 2 : PAD
  const lines = stacked ? [0, LINE2] : [0]
  const wolf = stacked ? `translate(${-WM_WX} ${LINE2})` : undefined
  const viewBox = stacked ? `${-pad} -120 ${W + pad * 2} ${WM_H + LINE2 + 240}` : `${-PAD} -120 ${WM_W + PAD * 2} ${WM_H + 240}`

  return (
    <svg viewBox={viewBox} className="block h-auto w-full overflow-visible" aria-hidden>
      {/* Guides */}
      <motion.g style={{ opacity: guideOpacity }}>
        {lines.flatMap((dy) => GUIDES.map((g) => ({ ...g, y: g.y + dy, key: g.name + dy }))).map((g) => (
          <motion.line
            key={g.key}
            x1={-pad}
            x2={W + pad}
            y1={g.y}
            y2={g.y}
            stroke="var(--color-paper)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: guide }}
          />
        ))}
        {[0, W].map((x) => (
          <motion.line key={x} x1={x} x2={x} y1={-120} y2={WM_H + (stacked ? LINE2 : 0) + 120} stroke="var(--color-paper)" strokeWidth={1} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" style={{ opacity: guide }} />
        ))}
      </motion.g>
      <motion.g style={{ opacity: labels }} className="max-lg:hidden" fill="var(--color-paper)" fillOpacity={0.5} fontSize={74} fontWeight={600} letterSpacing={2}>
        {GUIDES.map((g) => (
          <text key={g.name} x={WM_W + PAD} y={g.y - 22} textAnchor="end">
            {g.name}
          </text>
        ))}
      </motion.g>

      {/* The letters */}
      {WM_LETTERS.map((l, i) => (
        <g key={i} transform={i >= 4 ? wolf : undefined}>
          <Letter p={p} i={i} d={l.d} ch={l.ch} />
        </g>
      ))}

      {/* The period */}
      <g transform={wolf}>
        <motion.circle
          cx={WM_DOT_C.cx}
          cy={WM_DOT_C.cy}
          r={WM_DOT_C.r}
          fill="var(--color-flare)"
          style={{ scale: dot, transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
      </g>

      {/* Callout on the ears */}
      <motion.g style={{ opacity: call }} className="max-lg:hidden">
        <line x1={tipX} y1={tipY} x2={tipX - 260} y2={-60} stroke="var(--color-flare)" strokeWidth={1.25} vectorEffect="non-scaling-stroke" />
        <circle cx={tipX} cy={tipY} r={16} fill="var(--color-flare)" />
        <text x={tipX - 280} y={-80} textAnchor="end" fill="var(--color-flare)" fontSize={78} fontWeight={700}>
          The wolf
        </text>
      </motion.g>
    </svg>
  )
}

/* Plain 0..1 clamp for use inside derived motion values. */
function clamp01(v: number, a: number, b: number) {
  return Math.min(Math.max((v - a) / (b - a), 0), 1)
}

export function Engagement() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] })
  useMotionValueEvent(p, "change", (v) => {
    const next = Math.min(PHASES.length - 1, Math.max(0, Math.floor(v * PHASES.length * 0.999)))
    if (next !== active) setActive(next)
  })

  return (
    <section ref={ref} data-tone="dark" className={`on-dark relative ${reduce ? "" : "h-[420vh] lg:h-[400vh]"}`} aria-labelledby="engagement-title">
      {/* Pinned stage, every screen size */}
      <div className={reduce ? "hidden" : "sticky top-0 h-[100svh] overflow-hidden"}>
        <div className="shell flex h-full flex-col justify-center gap-7 pt-[var(--header-h)] lg:gap-12">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-5">
              <p className="label">Chapter five · The engagement</p>
              <h2 id="engagement-title" className="t-h2 mt-3 max-w-[12ch] lg:mt-4">
                <span className="font-[300]">How a brand</span> gets built here
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {/* All five phases as real text for screen readers and crawlers (search
                  and AI engines read the HTML, not the animation). The animated
                  lines below show one phase at a time and are hidden from them. */}
              <ol className="sr-only">
                {PHASES.map((ph) => (
                  <li key={ph.t}>
                    <h3>{ph.t}</h3>
                    <p>{ph.b}</p>
                  </li>
                ))}
              </ol>
              <div className="flex items-baseline gap-4" aria-hidden>
                <span className="w-[2.2ch] shrink-0 text-sm font-bold tabular-nums text-flare">0{active + 1}</span>
                <div className="relative h-[clamp(2.3rem,5vw,4.4rem)] flex-1 overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.p
                      key={active}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-x-0 top-0 whitespace-nowrap text-[clamp(2.1rem,4.6vw,4.1rem)] font-[850] leading-none tracking-[-0.035em] text-paper"
                      style={{ fontVariationSettings: '"wdth" 112' }}
                    >
                      {PHASES[active].t}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              <div className="relative mt-3 min-h-[6.5rem] pl-[calc(2.2ch+1rem)] lg:min-h-[5.5rem]" aria-hidden>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="t-body max-w-[44ch] text-paper/75"
                  >
                    {PHASES[active].b}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* The wordmark, built as you scroll */}
          <div className="relative -mx-[2%] lg:mx-0">
            <div className="hidden md:block">
              <Construction p={p} />
            </div>
            <div className="mx-auto w-[92%] md:hidden">
              <Construction p={p} stacked />
            </div>
          </div>

          <div className="flex gap-2" aria-hidden>
            {PHASES.map((_, i) => (
              <span key={i} className="h-[3px] flex-1 bg-white/15">
                <span className="block h-full bg-flare transition-transform duration-500" style={{ transform: `scaleX(${i <= active ? 1 : 0})`, transformOrigin: "left" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Reduced motion: the same story, stacked */}
      {reduce && (
        <div className="py-24">
          <div className="shell">
            <p className="label">Chapter five · The engagement</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">
              <span className="font-[300]">How a brand</span> gets built here
            </h2>
            <ol className="mt-12 border-t border-white/12">
              {PHASES.map((ph, i) => (
                <li key={ph.t} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/12 py-8">
                  <span className="mt-1 text-sm font-bold tabular-nums text-flare">0{i + 1}</span>
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
