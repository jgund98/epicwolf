"use client"

import Link from "next/link"
import { useLayoutEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { RotatingWord } from "./RotatingWord"
import { useRange } from "@/lib/motion"

const WORDS = ["brand", "launch", "story", "pitch", "name"]

/**
 * Chapter one. "Make your brand impossible to ignore." with IMPOSSIBLE TO
 * IGNORE cut out of the black so a real South Florida coastline aerial plays
 * through the letters.
 *
 * How the cutout works: the video sits full-bleed at the back. Over it is an
 * ink layer with the big words set in white, blended with multiply: white keeps
 * the video, ink kills it. No canvas, no SVG masks, works on every phone.
 *
 * Scrolling scales ONLY that ink layer, into the first I. The video
 * never scales, so when the stem swallows the screen the footage is at its
 * native sharpness. Then the chapter copy lands over it.
 *
 * Motion: where the browser supports CSS scroll-driven animations, the whole
 * choreography (zoom, fades, chapter copy) runs as native keyframes on a view
 * timeline, on the compositor, in lockstep with the finger on a phone. Older
 * browsers fall back to the same curves driven by motion in JavaScript.
 *
 * The headline is laid out twice from the same component: once as the mask
 * (white letters, everything else hidden) and once as the readable content
 * (big words transparent, everything else visible). Same flow, so they can
 * never drift apart.
 */
export function Hero() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const maskHead = useRef<HTMLSpanElement>(null)
  const maskL = useRef<HTMLSpanElement>(null)
  const [fs, setFs] = useState<number | null>(null)
  const [origin, setOrigin] = useState("50% 50%")
  const [maxScale, setMaxScale] = useState(40)
  const measureRef = useRef<HTMLSpanElement>(null)

  /* Touch devices: the mask is scaled as a GPU texture instead of being
     re-rasterized every frame, which is what made phones stutter. */
  const [touch, setTouch] = useState(false)
  const [sd, setSd] = useState(false)
  useLayoutEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches)
    setSd(typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()"))
  }, [])
  const native = sd && !reduce

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
      const m = measureRef.current
      if (!m) return
      const box = m.parentElement!
      const cs = getComputedStyle(box)
      const shell = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
      const probes = m.parentElement!.querySelectorAll<HTMLElement>("[data-probe]")
      const perEm = Math.max(
        m.getBoundingClientRect().width / 100,
        probes[0].getBoundingClientRect().width / 100,
        probes[1].getBoundingClientRect().width / 100,
      )
      const vh = window.innerHeight
      const vw = window.innerWidth
      const byWidth = (shell / perEm) * 0.99
      const byHeight = vw < 768 ? vh * 0.12 : vh * 0.2
      setFs(Math.floor(Math.min(byWidth, byHeight)))
    }
    fit(true)
    document.fonts?.ready.then(() => fit(true))
    const ro = new ResizeObserver(() => fit())
    ro.observe(document.documentElement)
    return () => ro.disconnect()
  }, [])

  /* Zoom target: the middle of the first I, measured off the rendered glyph. */
  useLayoutEffect(() => {
    if (!fs) return
    const read = () => {
      const l = maskL.current
      const layer = maskHead.current?.closest("[data-mask-layer]") as HTMLElement | null
      if (!l || !layer) return
      /* Layout offsets, not client rects: the layer may already be scaled
         when this runs (a resize mid-scroll), and offsets ignore transforms. */
      let ox = 0
      let oy = 0
      let el: HTMLElement | null = l
      while (el && el !== layer) {
        ox += el.offsetLeft
        oy += el.offsetTop
        el = el.offsetParent as HTMLElement | null
      }
      const stem = findStem(l, fs, "I")
      const x = ox + stem.center
      const y = oy + l.offsetHeight * 0.5
      setOrigin(`${x}px ${y}px`)
      setMaxScale((Math.max(window.innerWidth, window.innerHeight) / stem.width) * 1.6)
    }
    read()
    const t = setTimeout(read, 300)
    return () => clearTimeout(t)
  }, [fs])

  const { scrollYProgress: p } = useScroll({ target: section, offset: ["start start", "end end"] })

  const scale = useTransform(p, (v) => {
    const t = Math.min(Math.max((v - 0.06) / 0.5, 0), 1)
    const eased = t * t * (3 - 2 * t)
    return Math.exp(eased * Math.log(maxScale))
  })
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
      {native && <style>{heroKeyframes(maxScale)}</style>}
      <div className={reduce ? "relative min-h-[100svh] overflow-hidden" : "sticky top-0 h-[100svh] overflow-hidden"}>
        {/* Width probe for the fit. Never visible. */}
        <div className="shell pointer-events-none invisible absolute inset-x-0 top-0" aria-hidden>
          <span ref={measureRef} className="hero-word inline-block whitespace-nowrap" style={{ fontSize: 100 }}>
            IMPOSSIBLE
          </span>
          <span data-probe className="hero-word inline-block whitespace-nowrap" style={{ fontSize: 100 }}>
            TO IGNORE.
          </span>
          <span data-probe className="hero-word inline-block whitespace-nowrap" style={{ fontSize: 44 }}>
            MAKE YOUR LAUNCH
          </span>
        </div>

        <video
          className="absolute inset-0 h-full w-full object-cover"
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

        {/* The ink layer with the letter cutouts */}
        <motion.div
          data-mask-layer
          aria-hidden
          className={`absolute inset-0 mix-blend-multiply ${native ? "hsd-mask" : ""}`}
          style={{ scale: reduce || native ? undefined : scale, transformOrigin: origin, willChange: touch || native ? "transform" : "auto", backgroundColor: "#000" }}
        >
          <HeadLayout mode="mask" fs={fs} headRef={maskHead} lRef={maskL} />
        </motion.div>

        {/* The readable layer */}
        <div className="absolute inset-0 text-paper">
          <HeadLayout mode="content" fs={fs} native={native} upY={reduce || native ? undefined : upY} downY={reduce || native ? undefined : downY} fade={reduce || native ? undefined : contentOpacity} />
        </div>

        {/* Chapter copy over the footage, once the L has swallowed the screen */}
        {!reduce && <Chapter p={p} scrim={scrim} native={native} />}
      </div>
    </section>
  )
}

/**
 * Find the glyph's stem in pixels by drawing the glyph with the live font and
 * scanning one row. Beats guessing side bearings per breakpoint.
 */
function findStem(l: HTMLElement, fs: number, ch: string) {
  const fallback = { center: fs * 0.17, width: fs * 0.22 }
  try {
    const cs = getComputedStyle(l)
    const c = document.createElement("canvas")
    const w = Math.ceil(fs * 1.2)
    const h = Math.ceil(fs * 1.4)
    c.width = w
    c.height = h
    const ctx = c.getContext("2d")
    if (!ctx) return fallback
    ctx.font = `${cs.fontWeight} ${cs.fontStretch === "normal" ? "" : cs.fontStretch} ${fs}px ${cs.fontFamily}`.replace(/\s+/g, " ")
    ;(ctx as CanvasRenderingContext2D & { fontStretch?: string }).fontStretch = "expanded"
    ctx.textBaseline = "alphabetic"
    ctx.fillStyle = "#000"
    ctx.fillText(ch, 0, fs)
    const row = ctx.getImageData(0, Math.round(fs * 0.55), w, 1).data
    let a = -1
    let b = -1
    for (let x = 0; x < w; x++) {
      const on = row[x * 4 + 3] > 128
      if (on && a < 0) a = x
      if (!on && a >= 0) {
        b = x
        break
      }
    }
    if (a < 0 || b < 0 || b - a < fs * 0.08) return fallback
    /* Canvas can't take the width axis everywhere; scale the result by the
       ratio of the DOM glyph's advance to the canvas glyph's advance. */
    const ratio = l.offsetWidth / Math.max(ctx.measureText(ch).width, 1)
    return { center: ((a + b) / 2) * ratio, width: (b - a) * ratio }
  } catch {
    return fallback
  }
}

function HeadLayout({
  mode,
  fs,
  headRef,
  lRef,
  upY,
  downY,
  fade,
  native,
}: {
  native?: boolean
  mode: "mask" | "content"
  fs: number | null
  headRef?: React.Ref<HTMLSpanElement>
  lRef?: React.Ref<HTMLSpanElement>
  upY?: MotionValue<string>
  downY?: MotionValue<string>
  fade?: MotionValue<number>
}) {
  const mask = mode === "mask"
  const hide = mask ? { visibility: "hidden" as const } : undefined
  const size = fs ?? 120
  const small = size * 0.44

  const H1 = mask ? "div" : "h1"

  return (
    <div className="shell flex h-full flex-col justify-center pb-[max(1.5rem,4svh)] pt-[calc(var(--header-h)+1rem)] md:pb-10">
      <H1 id={mask ? undefined : "hero-title"} className="relative">
        <motion.span style={{ y: upY, opacity: fade, ...hide }} className={`block ${native ? "hsd-up" : ""}`}>
          <span className="label mb-5 md:mb-7" style={hide}>
            West Palm Beach branding and marketing agency
          </span>
          <span className="hero-word block whitespace-nowrap text-paper" style={{ fontSize: small, ...hide }}>
            Make your{" "}
            <span className="inline-block align-top text-flare">
              {mask ? "brand" : <RotatingWord words={WORDS} />}
            </span>
          </span>
        </motion.span>

        <span
          ref={headRef}
          className="hero-word my-[0.04em] block"
          style={{
            fontSize: size,
            color: mask ? "#fff" : "transparent",
            opacity: fs ? 1 : 0,
            transition: "opacity .4s",
          }}
        >
          <span className="block whitespace-nowrap">
            <span ref={lRef} className="inline-block">I</span>MPOSSIBLE
          </span>
          <span className="block whitespace-nowrap">To ignore.</span>
        </span>

      </H1>

      <motion.div
        style={{ y: downY, opacity: fade, ...hide }}
        className={`${native ? "hsd-down " : ""}mt-6 grid gap-6 md:mt-9 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10`}
      >
        <p className="t-lead max-w-[46ch] text-paper/85" style={hide}>
          Branding, digital marketing and business development for companies that intend to lead their market.
          Built in West Palm Beach. Made to be noticed anywhere.
        </p>
        <div className="on-dark flex flex-wrap gap-2.5 !bg-transparent sm:gap-3" style={hide}>
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

function Chapter({ p, scrim, native }: { p: MotionValue<number>; scrim: MotionValue<number>; native: boolean }) {
  const lines = [
    { text: "Over six million people live in South Florida.", at: 0.56 },
    { text: "Every one of them is busy.", at: 0.62 },
    { text: "Most have never heard your name.", at: 0.68 },
  ]
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div className={`absolute inset-0 bg-ink ${native ? "hsd-scrim" : ""}`} style={native ? undefined : { opacity: scrim }} />
      <div className="shell relative flex h-full flex-col justify-center gap-[0.35em]">
        {native ? (
          <>
            <p className="label hsd-label mb-4 text-paper">Chapter one · The noise</p>
            {lines.map((l, i) => (
              <p key={l.text} className={`t-h2 max-w-[20ch] text-paper hsd-line-${i}`}>
                {l.text}
              </p>
            ))}
            <p className="t-h2 hsd-line-3 max-w-[20ch] text-flare">Yet.</p>
          </>
        ) : (
          <>
            <ChapterLabel p={p} />
            {lines.map((l) => (
              <ChapterLine key={l.text} p={p} at={l.at} text={l.text} />
            ))}
            <ChapterLine p={p} at={0.76} text="Yet." flare />
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
  const y = useTransform(p, [at, at + 0.06], [40, 0])
  return (
    <motion.p
      style={{ opacity: o, y }}
      className={`t-h2 max-w-[20ch] ${flare ? "text-flare" : "text-paper"}`}
    >
      {text}
    </motion.p>
  )
}


/**
 * The hero's choreography as native scroll-driven keyframes on the section's
 * view timeline. Same curves as the JavaScript fallback: the zoom is an
 * eased exponential (sampled finely so it reads as continuous), content lifts
 * and fades, then the scrim and the chapter lines arrive.
 */
function heroKeyframes(maxScale: number) {
  const pct = (v: number) => `${(v * 100).toFixed(2)}%`
  const zoom: string[] = ["0% { transform: scale(1) }", "6% { transform: scale(1) }"]
  for (let i = 1; i <= 40; i++) {
    const t = i / 40
    const eased = t * t * (3 - 2 * t)
    zoom.push(`${pct(0.06 + t * 0.5)} { transform: scale(${Math.exp(eased * Math.log(maxScale)).toFixed(4)}) }`)
  }
  zoom.push(`100% { transform: scale(${maxScale.toFixed(4)}) }`)
  const tl = "animation-timeline: --hero; animation-range: contain 0% contain 100%;"
  const line = (i: number, at: number) => `
    @keyframes hsd-line-${i} { 0%, ${pct(at)} { opacity: 0; transform: translateY(40px) } ${pct(at + 0.05)} { opacity: 1 } ${pct(at + 0.06)}, 100% { opacity: 1; transform: none } }
    .hsd-line-${i} { animation: hsd-line-${i} linear both; ${tl} }`
  return `
    @keyframes hsd-mask { ${zoom.join(" ")} }
    @keyframes hsd-up { 0%, 4% { transform: translateY(0) } 30%, 100% { transform: translateY(-40%) } }
    @keyframes hsd-down { 0%, 4% { transform: translateY(0) } 30%, 100% { transform: translateY(60%) } }
    @keyframes hsd-fade { 0%, 8% { opacity: 1 } 26%, 100% { opacity: 0 } }
    @keyframes hsd-scrim { 0%, 50% { opacity: 0 } 70%, 100% { opacity: 0.55 } }
    @keyframes hsd-label { 0%, 52% { opacity: 0 } 58%, 100% { opacity: 1 } }
    .hsd-mask { animation: hsd-mask linear both; ${tl} }
    .hsd-up { animation: hsd-up linear both, hsd-fade linear both; animation-timeline: --hero, --hero; animation-range: contain 0% contain 100%, contain 0% contain 100%; }
    .hsd-down { animation: hsd-down linear both, hsd-fade linear both; animation-timeline: --hero, --hero; animation-range: contain 0% contain 100%, contain 0% contain 100%; }
    .hsd-scrim { animation: hsd-scrim linear both; ${tl} }
    .hsd-label { animation: hsd-label linear both; ${tl} }
    ${line(0, 0.56)} ${line(1, 0.62)} ${line(2, 0.68)} ${line(3, 0.76)}
  `
}
