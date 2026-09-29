"use client"

import Link from "next/link"
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { RotatingWord } from "./RotatingWord"
import { HERO_MASK } from "./heroMask"
import { useRange } from "@/lib/motion"

const WORDS = ["brand", "launch", "story", "pitch", "name"]

/* The zoom curve, shared by every renderer: an eased exponential from 1 to
   `end` between 6% and 56% of the hero's scroll. Every stretch of scroll
   multiplies the scale by the same factor, which reads as one continuous
   flight into the letter. */
const Z0 = 0.06
const Z1 = 0.56
function zoomAt(v: number, end: number) {
  const t = Math.min(Math.max((v - Z0) / (Z1 - Z0), 0), 1)
  const eased = t * t * (3 - 2 * t)
  return { eased, s: Math.exp(eased * Math.log(end)) }
}

/* Phones: the zoom is a ladder of pre-drawn frames at 1x, 2x, 4x... each
   screen-sized. The compositor scales the active one (never past 2x before
   the next, sharper frame takes over), so there is no drawing and no texture
   upload while the finger moves. */
const LADDER_MAX = 8
/* A rung switches on a little before its octave (while the rung under it is
   still fully on) and off only once the next is fully on, so the black never
   thins during a handoff. Higher rungs stack on top. */
function rungOn(eased: number, s: number, b: number, i: number, n: number) {
  if (eased >= 1) return false
  const from = i === 0 ? 0 : b / 1.12
  return s >= from && (s < 2 * b || i === n - 1)
}

/**
 * Chapter one. "Make your brand impossible to ignore." with IMPOSSIBLE TO
 * IGNORE cut out of the black so a real South Florida coastline aerial plays
 * through the letters. Scrolling flies into the first I until its stem is the
 * whole screen, then the chapter copy lands over the footage.
 *
 * The cutout is black canvas with the letters punched out, over the video,
 * drawn from outline paths baked out of the page's own Archivo instances
 * (scripts/build-hero-mask.mjs), placed on the page's real text layout.
 *
 * Two renderers, one curve:
 *  - Desktop: one canvas, redrawn every frame at the exact zoom. Razor sharp
 *    at any scale, a fraction of a millisecond per frame on a desktop GPU.
 *  - Phones: the ladder (above), animated on the compositor by a native
 *    scroll-driven timeline where supported, so it moves in lockstep with the
 *    finger. Older browsers drive the same ladder from JavaScript, which is
 *    still only a transform and an opacity per frame.
 *
 * The rest of the choreography (the copy lifting away, the scrim, the chapter
 * lines) also runs on the native timeline where supported.
 */
export function Hero() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const ladder = useRef<(HTMLCanvasElement | null)[]>([])
  const lineRefs = [useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null)]
  const probeRefs = [useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null)]
  const [fs, setFs] = useState<number | null>(null)

  /* Capabilities, read once on the client. */
  const [caps, setCaps] = useState<{ native: boolean; phone: boolean } | null>(null)
  useLayoutEffect(() => {
    setCaps({
      native: typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()"),
      phone: window.matchMedia("(pointer: coarse), (max-width: 767px)").matches,
    })
  }, [])
  const native = !!caps?.native && !reduce
  const useLadder = !!caps?.phone && !reduce

  /* The hero is held (black) until the real font has loaded, the headline is
     fitted and the cutout is drawn, then it arrives in one piece: the footage
     fades up inside the letters while the copy fades in. Without this a refresh
     flashes the fallback font, the unfitted size and a blank frame in turn. */
  const [ready, setReady] = useState(false)
  useLayoutEffect(() => {
    const t = setTimeout(() => setReady(true), 2500) // never hold longer than this
    return () => clearTimeout(t)
  }, [])

  /* Fit IMPOSSIBLE to the shell width, capped so the whole headline fits the fold.
     Height-only changes are ignored: on phones the address bar collapsing
     mid-scroll changes the viewport height, and refitting giant type then is
     a full relayout per frame. */
  useLayoutEffect(() => {
    let lastW = 0
    let lastH = 0
    const fit = (force?: boolean) => {
      const vwNow = window.innerWidth
      const vhNow = window.innerHeight
      if (!force && vwNow === lastW && Math.abs(vhNow - lastH) < 180) return
      lastW = vwNow
      lastH = vhNow
      /* The size itself is pure CSS (.hero-fit in globals.css), so the headline
         paints at its final size before any JavaScript runs. Here we only read
         it back for the canvas. */
      const big = lineRefs[0].current?.closest<HTMLElement>(".hero-word")
      if (!big) return
      setFs(parseFloat(getComputedStyle(big).fontSize))
    }
    fit(true)
    document.fonts?.ready.then(() => fit(true))
    const ro = new ResizeObserver(() => fit())
    ro.observe(document.documentElement)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress: p } = useScroll({ target: section, offset: ["start start", "end end"] })

  /* ---------- The mask ---------- */

  const paths = useMemo(() => {
    if (typeof window === "undefined") return null
    return {
      wide: HERO_MASK.wide.lines.map((l) => new Path2D(l.d)),
      narrow: HERO_MASK.narrow.lines.map((l) => new Path2D(l.d)),
    }
  }, [])

  type Geo = {
    face: "wide" | "narrow"
    w: number
    h: number
    dpr: number
    lines: { x: number; b: number; k: number; hr: number }[]
    ox: number
    oy: number
    end: number
    rungs: number[]
  }
  const geo = useRef<Geo | null>(null)
  const last = useRef(-1)
  const [ladderCss, setLadderCss] = useState("")

  /** Paint the cutout at zoom s into a canvas sized to the stage. */
  const paint = useCallback(
    (c: HTMLCanvasElement, g: Geo, s: number) => {
      const ctx = c.getContext("2d")
      if (!ctx || !paths) return
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, c.width, c.height)
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, c.width, c.height)
      ctx.globalCompositeOperation = "destination-out"
      const face = paths[g.face]
      g.lines.forEach((l, i) => {
        const k = l.k * s * g.dpr
        ctx.setTransform(k * l.hr, 0, 0, k, g.dpr * (g.ox + s * (l.x - g.ox)), g.dpr * (g.oy + s * (l.b - g.oy)))
        ctx.fill(face[i])
      })
    },
    [paths]
  )

  /* Desktop renderer: redraw the one canvas at the exact zoom. */
  const draw = useCallback(
    (v: number, force?: boolean) => {
      const c = canvas.current
      const g = geo.current
      if (!c || !g) return
      const { eased, s } = zoomAt(reduce ? 0 : v, g.end)
      if (!force && eased === last.current) return
      last.current = eased
      if (eased >= 1) {
        c.getContext("2d")?.clearRect(0, 0, c.width, c.height) // the stem is the whole screen
        return
      }
      paint(c, g, s)
    },
    [paint, reduce]
  )

  /* Phone renderer, JavaScript fallback: pick the rung and scale it. */
  const stepLadder = useCallback((v: number) => {
    const g = geo.current
    if (!g) return
    const { eased, s } = zoomAt(v, g.end)
    g.rungs.forEach((b, i) => {
      const c = ladder.current[i]
      if (!c) return
      const on = rungOn(eased, s, b, i, g.rungs.length)
      c.style.opacity = on ? "1" : "0"
      c.style.transform = `scale(${Math.max(s / b, 0.001)})`
    })
  }, [])

  /* Read where the page laid the big words out, size the canvases, find the zoom target. */
  const measure = useCallback(() => {
    const st = stage.current
    if (!st || !fs || !caps) return
    const sr = st.getBoundingClientRect()
    const face: Geo["face"] = window.matchMedia("(max-width: 767px)").matches ? "narrow" : "wide"
    const data = HERO_MASK[face]
    const lines = lineRefs.map((ref, i) => {
      const line = ref.current!.getBoundingClientRect()
      const probe = probeRefs[i].current!.getBoundingClientRect()
      const k = fs / 1000
      /* Horizontal trim so the paths land exactly on the page's own text width. */
      const hr = line.width / (data.lines[i].adv * k)
      return { x: probe.left - sr.left, b: probe.top - sr.top, k, hr: Number.isFinite(hr) && hr > 0.8 && hr < 1.2 ? hr : 1 }
    })
    const l0 = lines[0]
    const stemW = (data.stem.x1 - data.stem.x0) * l0.k * l0.hr
    const stemH = data.stem.cap * l0.k
    const ox = l0.x + ((data.stem.x0 + data.stem.x1) / 2) * l0.k * l0.hr
    const oy = l0.b - stemH / 2
    const w = sr.width
    const h = sr.height
    /* Zoom until the stem covers the screen edge to edge, with a hair of margin. */
    const end = 1.04 * Math.max((2 * Math.max(ox, w - ox)) / stemW, (2 * Math.max(oy, h - oy)) / stemH)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const pw = Math.round(w * dpr)
    const ph = Math.round(h * dpr)
    const rungs: number[] = []
    for (let b = 1; b <= end && rungs.length < LADDER_MAX; b *= 2) rungs.push(b)
    const g: Geo = { face, w, h, dpr, lines, ox, oy, end, rungs }
    geo.current = g

    if (useLadder) {
      rungs.forEach((b, i) => {
        const c = ladder.current[i]
        if (!c) return
        if (c.width !== pw || c.height !== ph) {
          c.width = pw
          c.height = ph
        }
        c.style.transformOrigin = `${ox}px ${oy}px`
        paint(c, g, b)
        c.style.backgroundColor = "transparent"
      })
      if (native) setLadderCss(ladderKeyframes(end, rungs))
      else stepLadder(p.get())
    } else {
      const c = canvas.current
      if (!c) return
      if (c.width !== pw || c.height !== ph) {
        c.width = pw
        c.height = ph
      }
      draw(p.get(), true)
      c.style.backgroundColor = "transparent"
    }
    if (!document.fonts || document.fonts.status === "loaded") setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fs, caps, draw, paint, stepLadder, p, useLadder, native])

  useLayoutEffect(() => {
    if (!fs) return
    measure()
    document.fonts?.ready.then(measure)
    const ro = new ResizeObserver(() => measure())
    if (stage.current) ro.observe(stage.current)
    return () => ro.disconnect()
  }, [fs, measure])

  useMotionValueEvent(p, "change", (v) => {
    if (!useLadder) draw(v)
    else if (!native) stepLadder(v)
  })

  /* ---------- The rest of the choreography (JavaScript fallback) ---------- */

  const js = !reduce && !native
  const upY = useTransform(p, [0.04, 0.3], ["0%", "-40%"])
  const downY = useTransform(p, [0.04, 0.3], ["0%", "60%"])
  const contentOpacity = useRange(p, [0.08, 0.26], [1, 0])
  const scrim = useRange(p, [0.5, 0.7], [0, 0.55])

  return (
    <section
      ref={section}
      data-tone="dark"
      className="relative bg-ink"
      style={{ height: reduce ? "auto" : "300vh", ...(native ? ({ viewTimelineName: "--hero" } as React.CSSProperties) : {}) }}
      aria-labelledby="hero-title"
    >
      {native && <style>{CONTENT_KEYFRAMES + ladderCss}</style>}
      {/* The stage fills the LARGEST viewport, so when a phone's toolbar
          collapses mid-scroll there is never a band below the footage. The
          readable layout inside sits in the SMALL viewport, so nothing is ever
          hidden behind the toolbar. */}
      <div ref={stage} className={reduce ? "hero-stage relative overflow-hidden" : "hero-stage sticky top-0 overflow-hidden"}>
        <video
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: ready ? 1 : 0 }}
          poster="/video/coast.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/video/coast-960.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/coast.mp4" type="video/mp4" />
        </video>

        {/* The cutout. Black until the first frame is drawn, so the footage never flashes uncut. */}
        {useLadder ? (
          Array.from({ length: LADDER_MAX }).map((_, i) => (
            <canvas
              key={i}
              ref={(el) => {
                ladder.current[i] = el
              }}
              aria-hidden
              className={`absolute inset-0 h-full w-full ${native ? `hl-${i}` : ""}`}
              style={{ backgroundColor: i === 0 ? "#000" : undefined, opacity: i === 0 ? 1 : 0, willChange: "transform, opacity" }}
            />
          ))
        ) : (
          <canvas ref={canvas} aria-hidden className="absolute inset-0 h-full w-full" style={{ backgroundColor: "#000" }} />
        )}

        {/* The readable layer */}
        <div className="hero-copy absolute inset-0 text-paper">
          <HeadLayout
            solid={!ready}
            lineRefs={lineRefs}
            probeRefs={probeRefs}
            native={native}
            upY={js ? upY : undefined}
            downY={js ? downY : undefined}
            fade={js ? contentOpacity : undefined}
          />
        </div>

        {/* Chapter copy over the footage, once the I has swallowed the screen */}
        {!reduce && <Chapter p={p} scrim={scrim} native={native} />}
      </div>
    </section>
  )
}

function HeadLayout({
  solid,
  lineRefs,
  probeRefs,
  native,
  upY,
  downY,
  fade,
}: {
  /** Big words in solid paper until the canvas cutout is ready, then they clear to show the footage. */
  solid: boolean
  lineRefs: React.RefObject<HTMLSpanElement | null>[]
  probeRefs: React.RefObject<HTMLSpanElement | null>[]
  native: boolean
  upY?: MotionValue<string>
  downY?: MotionValue<string>
  fade?: MotionValue<number>
}) {
  const big = ["Impossible", "To ignore."]

  return (
    <div className="shell flex h-[100svh] flex-col justify-center pb-[max(1.5rem,4svh)] pt-[calc(var(--header-h)+1rem)] md:pb-10">
      <h1 id="hero-title" className="hero-fit relative">
        <motion.span style={{ y: upY, opacity: fade }} className={`block will-change-transform ${native ? "hsd-up" : ""}`}>
          <span className="label mb-5 md:mb-7">West Palm Beach branding and marketing agency</span>
          <span className="hero-word block whitespace-nowrap text-paper" style={{ fontSize: "calc(var(--hero-fs) * 0.44)" }}>
            Make your{" "}
            <span className="inline-block align-top text-flare">
              <RotatingWord words={WORDS} />
            </span>
          </span>
        </motion.span>

        {/* The big words: laid out for real, drawn by the canvas. */}
        <span className="hero-word my-[0.04em] block" style={{ fontSize: "var(--hero-fs)", color: solid ? "var(--color-paper)" : "transparent", transition: "color .7s ease-out" }}>
          {big.map((w, i) => (
            <span key={w} className="block whitespace-nowrap">
              <span ref={lineRefs[i]} className="inline-block">
                {/* Zero-size marker whose top edge sits exactly on the baseline */}
                <span ref={probeRefs[i]} className="inline-block h-0 w-0 align-baseline" aria-hidden />
                {w}
              </span>
            </span>
          ))}
        </span>
      </h1>

      <motion.div
        style={{ y: downY, opacity: fade }}
        className={`mt-6 grid gap-6 will-change-transform md:mt-9 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10 ${native ? "hsd-down" : ""}`}
      >
        <p className="t-lead max-w-[46ch] text-paper/85">
          Branding, digital marketing and business development for companies that intend to lead their market.
          Built in West Palm Beach. Made to be noticed anywhere.
        </p>
        <div className="on-dark flex flex-wrap gap-2.5 !bg-transparent sm:gap-3">
          <Link href="/contact" className="btn btn-flare">
            Start a project <span className="arrow" aria-hidden>→</span>
          </Link>
          <Link href="/services" className="btn btn-line text-paper">
            What we do
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

const LINES = [
  { text: "Over six million people live in South Florida.", at: 0.56 },
  { text: "Every one of them is busy.", at: 0.62 },
  { text: "Most have never heard your name.", at: 0.68 },
  { text: "Yet.", at: 0.76, flare: true },
]

function Chapter({ p, scrim, native }: { p: MotionValue<number>; scrim: MotionValue<number>; native: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div className={`absolute inset-0 bg-ink ${native ? "hsd-scrim" : ""}`} style={native ? undefined : { opacity: scrim }} />
      <div className="shell relative flex h-[100svh] flex-col justify-center gap-[0.35em]">
        {native ? (
          <>
            <p className="label hsd-label mb-4 text-paper">Chapter one · The noise</p>
            {LINES.map((l, i) => (
              <p key={l.text} className={`t-h2 max-w-[20ch] hsd-line-${i} ${l.flare ? "text-flare" : "text-paper"}`}>
                {l.text}
              </p>
            ))}
          </>
        ) : (
          <>
            <ChapterLabel p={p} />
            {LINES.map((l) => (
              <ChapterLine key={l.text} p={p} at={l.at} text={l.text} flare={l.flare} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

function ChapterLabel({ p }: { p: MotionValue<number> }) {
  const o = useRange(p, [0.52, 0.58], [0, 1])
  return (
    <motion.p style={{ opacity: o }} className="label mb-4 text-paper">
      Chapter one · The noise
    </motion.p>
  )
}

function ChapterLine({ p, at, text, flare }: { p: MotionValue<number>; at: number; text: string; flare?: boolean }) {
  const o = useRange(p, [at, at + 0.05], [0, 1])
  const y = useRange(p, [at, at + 0.06], [40, 0])
  return (
    <motion.p style={{ opacity: o, y }} className={`t-h2 max-w-[20ch] ${flare ? "text-flare" : "text-paper"}`}>
      {text}
    </motion.p>
  )
}

/* ---------- Native scroll-driven keyframes (same curves as the JavaScript path) ---------- */

const TL = "animation-timeline: --hero; animation-range: contain 0% contain 100%;"
const pct = (v: number) => `${(v * 100).toFixed(3)}%`

const CONTENT_KEYFRAMES = (() => {
  const line = (i: number, at: number) => `
    @keyframes hsd-line-${i} { 0%, ${pct(at)} { opacity: 0; transform: translateY(40px) } ${pct(at + 0.05)} { opacity: 1 } ${pct(at + 0.06)}, 100% { opacity: 1; transform: none } }
    .hsd-line-${i} { animation: hsd-line-${i} linear both; ${TL} }`
  return `
    @keyframes hsd-up { 0%, 4% { transform: translateY(0) } 30%, 100% { transform: translateY(-40%) } }
    @keyframes hsd-down { 0%, 4% { transform: translateY(0) } 30%, 100% { transform: translateY(60%) } }
    @keyframes hsd-fade { 0%, 8% { opacity: 1 } 26%, 100% { opacity: 0 } }
    @keyframes hsd-scrim { 0%, 50% { opacity: 0 } 70%, 100% { opacity: 0.55 } }
    @keyframes hsd-label { 0%, 52% { opacity: 0 } 58%, 100% { opacity: 1 } }
    .hsd-up { animation: hsd-up linear both, hsd-fade linear both; animation-timeline: --hero, --hero; animation-range: contain 0% contain 100%, contain 0% contain 100%; }
    .hsd-down { animation: hsd-down linear both, hsd-fade linear both; animation-timeline: --hero, --hero; animation-range: contain 0% contain 100%, contain 0% contain 100%; }
    .hsd-scrim { animation: hsd-scrim linear both; ${TL} }
    .hsd-label { animation: hsd-label linear both; ${TL} }
    ${LINES.map((l, i) => line(i, l.at)).join("")}
  `
})()

/** The ladder on the native timeline: each rung scales with the zoom and is
 *  shown only while the zoom sits in its octave. Sampled finely enough that
 *  the linear steps between samples are invisible. */
function ladderKeyframes(end: number, rungs: number[]) {
  const N = 120
  return rungs
    .map((b, i) => {
      const frames: string[] = []
      const at = (v: number) => {
        const { eased, s } = zoomAt(v, end)
        const on = rungOn(eased, s, b, i, rungs.length)
        frames.push(`${pct(v)} { transform: scale(${(s / b).toFixed(5)}); opacity: ${on ? 1 : 0} }`)
      }
      at(0)
      for (let j = 0; j <= N; j++) at(Z0 + ((Z1 - Z0) * j) / N)
      at(Z1 + 0.0001)
      at(1)
      return `@keyframes hl-${i} { ${frames.join(" ")} } .hl-${i} { animation: hl-${i} linear both; ${TL} }`
    })
    .join("\n")
}
