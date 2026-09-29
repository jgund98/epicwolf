"use client"

import Link from "next/link"
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { RotatingWord } from "./RotatingWord"
import { HERO_MASK } from "./heroMask"
import { useRange } from "@/lib/motion"

const WORDS = ["brand", "launch", "story", "pitch", "name"]

/**
 * Chapter one. "Make your brand impossible to ignore." with IMPOSSIBLE TO
 * IGNORE cut out of the black so a real South Florida coastline aerial plays
 * through the letters. Scrolling flies into the first I until its stem is the
 * whole screen, then the chapter copy lands over the footage.
 *
 * How the cutout works: the video sits full-bleed at the back. Over it is one
 * screen-sized canvas, painted black with the letters punched out. Every frame
 * the canvas is redrawn from scratch at the current zoom, from outline paths
 * baked out of the same Archivo instances the page uses (scripts/build-hero-mask.mjs).
 *
 * Why a canvas and not a scaled layer: scaling a full-screen layer 50x asks the
 * browser for a texture it can't raster, which shows up as blur, stale tiles on
 * the way back up, and stutter on phones. A canvas never grows. The zoom is
 * just a different transform on a few paths, so it stays razor sharp at any
 * scale, in both directions, at a cost of well under a millisecond a frame.
 *
 * The readable headline is real text laid out by the page (transparent where
 * the canvas shows the letters), so search engines and screen readers get it,
 * and the canvas takes its positions from that layout.
 */
export function Hero() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const lineRefs = [useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null)]
  const probeRefs = [useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null)]
  const [fs, setFs] = useState<number | null>(null)
  const measureRef = useRef<HTMLSpanElement>(null)

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
      const byWidth = (shell / perEm) * 0.99
      const byHeight = vwNow < 768 ? vhNow * 0.12 : vhNow * 0.2
      setFs(Math.floor(Math.min(byWidth, byHeight)))
    }
    fit(true)
    document.fonts?.ready.then(() => fit(true))
    const ro = new ResizeObserver(() => fit())
    ro.observe(document.documentElement)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress: p } = useScroll({ target: section, offset: ["start start", "end end"] })

  /* ---------- The canvas mask ---------- */

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
  }
  const geo = useRef<Geo | null>(null)
  const last = useRef(-1)

  const draw = useCallback(
    (v: number, force?: boolean) => {
      const c = canvas.current
      const g = geo.current
      if (!c || !g || !paths) return
      /* Eased exponential zoom: every stretch of scroll multiplies the scale by
         the same factor, which reads as one continuous flight into the letter. */
      const t = reduce ? 0 : Math.min(Math.max((v - 0.06) / 0.5, 0), 1)
      const eased = t * t * (3 - 2 * t)
      if (!force && eased === last.current) return
      last.current = eased
      const ctx = c.getContext("2d")
      if (!ctx) return
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, c.width, c.height)
      if (eased >= 1) return // the stem is the whole screen: nothing left to cover
      const s = Math.exp(eased * Math.log(g.end))
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
    [paths, reduce]
  )

  /* Read where the page laid the big words out, size the canvas, find the zoom target. */
  const measure = useCallback(() => {
    const c = canvas.current
    const st = stage.current
    if (!c || !st || !fs) return
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
    if (c.width !== pw || c.height !== ph) {
      c.width = pw
      c.height = ph
    }
    geo.current = { face, w, h, dpr, lines, ox, oy, end }
    draw(p.get(), true)
    c.style.backgroundColor = "transparent"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fs, draw, p])

  useLayoutEffect(() => {
    if (!fs) return
    measure()
    document.fonts?.ready.then(measure)
    const ro = new ResizeObserver(() => measure())
    if (stage.current) ro.observe(stage.current)
    return () => ro.disconnect()
  }, [fs, measure])

  useMotionValueEvent(p, "change", (v) => draw(v))

  /* ---------- The rest of the choreography ---------- */

  const upY = useTransform(p, [0.04, 0.3], ["0%", "-40%"])
  const downY = useTransform(p, [0.04, 0.3], ["0%", "60%"])
  const contentOpacity = useRange(p, [0.08, 0.26], [1, 0])
  const scrim = useRange(p, [0.5, 0.7], [0, 0.55])

  return (
    <section
      ref={section}
      data-tone="dark"
      className="relative bg-ink"
      style={{ height: reduce ? "auto" : "300vh" }}
      aria-labelledby="hero-title"
    >
      {/* The stage fills the LARGEST viewport, so when a phone's toolbar
          collapses mid-scroll there is never a band below the footage. The
          readable layout inside sits in the SMALL viewport, so nothing is ever
          hidden behind the toolbar. */}
      <div ref={stage} className={reduce ? "hero-stage relative overflow-hidden" : "hero-stage sticky top-0 overflow-hidden"}>
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

        {/* Black until the first frame is drawn, so the footage never flashes uncut. */}
        <canvas ref={canvas} aria-hidden className="absolute inset-0 h-full w-full" style={{ backgroundColor: "#000" }} />

        {/* The readable layer */}
        <div className="absolute inset-0 text-paper">
          <HeadLayout
            fs={fs}
            lineRefs={lineRefs}
            probeRefs={probeRefs}
            upY={reduce ? undefined : upY}
            downY={reduce ? undefined : downY}
            fade={reduce ? undefined : contentOpacity}
          />
        </div>

        {/* Chapter copy over the footage, once the I has swallowed the screen */}
        {!reduce && <Chapter p={p} scrim={scrim} />}
      </div>
    </section>
  )
}

function HeadLayout({
  fs,
  lineRefs,
  probeRefs,
  upY,
  downY,
  fade,
}: {
  fs: number | null
  lineRefs: React.RefObject<HTMLSpanElement | null>[]
  probeRefs: React.RefObject<HTMLSpanElement | null>[]
  upY?: MotionValue<string>
  downY?: MotionValue<string>
  fade?: MotionValue<number>
}) {
  const size = fs ?? 120
  const small = size * 0.44
  const big = ["Impossible", "To ignore."]

  return (
    <div className="shell flex h-[100svh] flex-col justify-center pb-[max(1.5rem,4svh)] pt-[calc(var(--header-h)+1rem)] md:pb-10">
      <h1 id="hero-title" className="relative">
        <motion.span style={{ y: upY, opacity: fade }} className="block will-change-transform">
          <span className="label mb-5 md:mb-7">West Palm Beach branding and marketing agency</span>
          <span className="hero-word block whitespace-nowrap text-paper" style={{ fontSize: small }}>
            Make your{" "}
            <span className="inline-block align-top text-flare">
              <RotatingWord words={WORDS} />
            </span>
          </span>
        </motion.span>

        {/* The big words: laid out for real, drawn by the canvas. */}
        <span className="hero-word my-[0.04em] block" style={{ fontSize: size, color: "transparent" }}>
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
        className="mt-6 grid gap-6 will-change-transform md:mt-9 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10"
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

function Chapter({ p, scrim }: { p: MotionValue<number>; scrim: MotionValue<number> }) {
  const lines = [
    { text: "Over six million people live in South Florida.", at: 0.56 },
    { text: "Every one of them is busy.", at: 0.62 },
    { text: "Most have never heard your name.", at: 0.68 },
  ]
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div className="absolute inset-0 bg-ink" style={{ opacity: scrim }} />
      <div className="shell relative flex h-[100svh] flex-col justify-center gap-[0.35em]">
        <ChapterLabel p={p} />
        {lines.map((l) => (
          <ChapterLine key={l.text} p={p} at={l.at} text={l.text} />
        ))}
        <ChapterLine p={p} at={0.76} text="Yet." flare />
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
