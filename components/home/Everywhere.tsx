"use client"

import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { projectionMatrix } from "@/lib/homography"
import { FALLBACK_NAME, setBrandName, useBrandName } from "@/lib/nameStore"

/**
 * Say it once. See it everywhere.
 *
 * The visitor types their business name and it lands on seven surfaces in the
 * order a brand actually comes to life: the identity, the answer, the
 * website, the billboard, the van, the team, the front door. Four looks let
 * them try on an identity. Photographed surfaces use a real four-point
 * homography; the rest are built in the DOM.
 *
 * Desktop pins the stage and walks the strip sideways as you scroll. Phones
 * get a native swipe strip with the next panel peeking, never a scroll trap.
 */

type Look = {
  key: string
  label: string
  bg: string
  fg: string
  accent: string
  type: CSSProperties
}

const LOOKS: Look[] = [
  {
    key: "signal",
    label: "Signal",
    bg: "#0a0a0b",
    fg: "#ffffff",
    accent: "#ff4a1c",
    type: { fontVariationSettings: '"wdth" 125', fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em" },
  },
  {
    key: "coastal",
    label: "Coastal",
    bg: "#0c2c4a",
    fg: "#ffffff",
    accent: "#3fd6c8",
    type: { fontVariationSettings: '"wdth" 100', fontWeight: 800, letterSpacing: "-0.035em" },
  },
  {
    key: "estate",
    label: "Estate",
    bg: "#123d2f",
    fg: "#f6f3ec",
    accent: "#cfa85a",
    type: { fontVariationSettings: '"wdth" 80', fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em" },
  },
  {
    key: "pop",
    label: "Pop",
    bg: "#ff2e88",
    fg: "#0a0a0b",
    accent: "#ffe14d",
    type: { fontVariationSettings: '"wdth" 112', fontWeight: 900, textTransform: "lowercase", letterSpacing: "-0.045em" },
  },
]

export function Everywhere() {
  const reduce = useReducedMotion()
  const raw = useBrandName()
  const [lookKey, setLookKey] = useState("signal")
  const look = LOOKS.find((l) => l.key === lookKey)!
  const name = raw.trim() || FALLBACK_NAME

  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  const [desktop, setDesktop] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const read = () => {
      setDesktop(mq.matches)
      const t = track.current
      if (t) setDist(Math.max(0, t.scrollWidth - window.innerWidth))
    }
    read()
    const ro = new ResizeObserver(read)
    if (track.current) ro.observe(track.current)
    mq.addEventListener("change", read)
    window.addEventListener("resize", read)
    return () => {
      ro.disconnect()
      mq.removeEventListener("change", read)
      window.removeEventListener("resize", read)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, (v) => -Math.min(Math.max(v, 0), 1) * dist)
  const pinned = desktop && !reduce

  const panels: { cap: string; node: ReactNode }[] = [
    { cap: "The identity", node: <Identity name={name} look={look} /> },
    { cap: "The answer", node: <Answer name={name} look={look} /> },
    { cap: "The website", node: <Website name={name} look={look} /> },
    { cap: "The billboard", node: <Billboard name={name} look={look} /> },
    { cap: "The van", node: <Van name={name} look={look} /> },
    { cap: "The team", node: <Tee name={name} look={look} /> },
    { cap: "The front door", node: <Storefront name={name} look={look} /> },
  ]

  return (
    <section
      ref={section}
      data-tone="light"
      className="on-light relative"
      style={{ height: pinned ? `calc(100svh + ${dist}px)` : "auto" }}
      aria-labelledby="everywhere-title"
    >
      <div className={pinned ? "sticky top-0 flex h-[100svh] flex-col overflow-hidden" : "flex flex-col py-20"}>
        <div className="shell grid gap-6 pt-[calc(var(--header-h)+1rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-end lg:gap-12">
          <div>
            <p className="label">Chapter four · Try it on</p>
            <h2 id="everywhere-title" className="t-h2 mt-3">
              <span className="font-[300]">Say it once.</span>
              <br />
              <span className="text-flare-deep">See it everywhere.</span>
            </h2>
          </div>
          <div>
            <label htmlFor="brand-name" className="t-small muted-light block font-semibold">
              Type your business name and try on a look
            </label>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <input
                id="brand-name"
                value={raw}
                maxLength={28}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Your business name"
                autoComplete="organization"
                className="h-14 min-w-0 flex-1 basis-60 rounded-full border-2 border-ink/15 bg-paper px-6 text-lg font-semibold outline-none transition-colors placeholder:text-ink/35 focus:border-ink"
              />
              <div className="flex gap-2" role="radiogroup" aria-label="Brand look">
                {LOOKS.map((l) => (
                  <button
                    key={l.key}
                    type="button"
                    role="radio"
                    aria-checked={l.key === lookKey}
                    aria-label={l.label}
                    title={l.label}
                    onClick={() => setLookKey(l.key)}
                    className="relative grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{
                      background: l.bg,
                      boxShadow: l.key === lookKey ? `0 0 0 3px #fff, 0 0 0 5px ${l.bg === "#0a0a0b" ? "#ff4a1c" : l.bg}` : "inset 0 0 0 1px rgba(0,0,0,.12)",
                    }}
                  >
                    <span className="h-3.5 w-3.5 rounded-full" style={{ background: l.accent }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={pinned ? "relative mt-6 flex-1 min-h-0" : "mt-8"}>
          <motion.div
            ref={track}
            style={pinned ? { x } : undefined}
            className={
              pinned
                ? "flex h-full w-max gap-6 pl-[var(--gutter)] pr-[var(--gutter)] pb-8"
                : "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4 [scroll-padding-inline:var(--gutter)]"
            }
          >
            {panels.map((p, i) => (
              <figure
                key={p.cap}
                className={
                  pinned
                    ? "flex h-full shrink-0 flex-col"
                    : "w-[86vw] max-w-[34rem] shrink-0 snap-start"
                }
                style={pinned ? { width: "min(62vw, calc((100svh - 17rem) * 1.42))" } : undefined}
              >
                <div
                  className={`relative overflow-hidden rounded-[22px] bg-paper-2 ${pinned ? "min-h-0 flex-1" : "aspect-[4/3]"}`}
                >
                  {p.node}
                </div>
                <figcaption className="mt-3 flex items-baseline gap-3 font-semibold">
                  <span className="tabular-nums text-flare-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.cap}</span>
                </figcaption>
              </figure>
            ))}
            <div className={pinned ? "flex h-full w-[min(34rem,40vw)] shrink-0 flex-col justify-center pr-[4vw]" : "flex w-[80vw] max-w-[26rem] shrink-0 snap-start flex-col justify-center"}>
              <p className="t-h3 max-w-[16ch]">Like how it looks on the van?</p>
              <p className="t-body muted-light mt-3 max-w-[34ch]">
                That was the preview. The real thing starts with a conversation about who you are and who you need
                to reach.
              </p>
              <Link
                href={raw.trim() ? `/contact?business=${encodeURIComponent(raw.trim())}` : "/contact"}
                className="btn btn-ink mt-6 self-start"
              >
                Make it real <span className="arrow" aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Helpers ---------- */

function fit(name: string, base: number, min: number, perChar: number) {
  return Math.max(min, Math.min(base, perChar / Math.max(name.length, 4)))
}

/** A photographed surface with a flat plane projected onto a measured quad. */
function Projected({
  src,
  alt,
  quad,
  planeW,
  planeH,
  children,
  blend,
  objectPosition,
}: {
  src: string
  alt: string
  /** Normalized TL, TR, BR, BL against the image's own width and height. */
  quad: [number, number][]
  planeW: number
  planeH: number
  children: ReactNode
  blend?: CSSProperties["mixBlendMode"]
  objectPosition?: string
}) {
  const box = useRef<HTMLDivElement>(null)
  const [m, setM] = useState<string | null>(null)
  const img = useRef<{ w: number; h: number } | null>(null)

  useLayoutEffect(() => {
    const el = box.current
    if (!el) return
    const compute = () => {
      const { width: W, height: H } = el.getBoundingClientRect()
      const iw = img.current?.w ?? 4
      const ih = img.current?.h ?? 3
      if (!W || !H) return
      /* object-fit: cover math, so the quad follows the crop at any aspect. */
      const s = Math.max(W / iw, H / ih)
      const dw = iw * s
      const dh = ih * s
      const [px, py] = (objectPosition ?? "50% 50%").split(" ").map((v) => parseFloat(v) / 100)
      const ox = (W - dw) * px
      const oy = (H - dh) * py
      setM(projectionMatrix(planeW, planeH, quad.map(([qx, qy]) => [ox + qx * dw, oy + qy * dh])))
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [quad, planeW, planeH, objectPosition])

  return (
    <div ref={box} className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 62vw, 86vw"
        className="object-cover"
        style={{ objectPosition }}
        onLoad={(e) => {
          const t = e.currentTarget
          img.current = { w: t.naturalWidth, h: t.naturalHeight }
          box.current?.dispatchEvent(new Event("resize"))
          /* ResizeObserver won't fire for a load; recompute by nudging state. */
          setM((prev) => prev + " ")
        }}
      />
      {m && (
        <div
          aria-hidden
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: planeW, height: planeH, transform: m.trim(), mixBlendMode: blend }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

/* ---------- Surfaces ---------- */

function Identity({ name, look }: { name: string; look: Look }) {
  const initials = name
    .split(/s+/)
    .filter((w) => /[a-z0-9]/i.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
  const chips = [look.bg, look.accent, look.fg, "#e9e8e4"]
  return (
    <div className="absolute inset-0 grid grid-cols-[1.35fr_1fr] gap-[3%] bg-[#ecebe7] p-[5%]">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-[14px] p-[8%]" style={{ background: look.bg, color: look.fg }}>
        <div className="flex items-center justify-between">
          <span
            className="grid h-[clamp(2.2rem,4vw,3.4rem)] w-[clamp(2.2rem,4vw,3.4rem)] place-items-center rounded-full text-[clamp(.8rem,1.3vw,1.1rem)]"
            style={{ ...look.type, letterSpacing: "0", background: look.accent, color: look.key === "pop" ? "#0a0a0b" : look.bg }}
          >
            {initials || "Y"}
          </span>
          <span className="text-[11px] font-semibold opacity-60">Primary mark</span>
        </div>
        <p className="break-words leading-[0.9]" style={{ ...look.type, fontSize: `clamp(1.4rem, ${fit(name, 3.6, 1.6, 30)}vw, 4rem)` }}>
          {name}
        </p>
        <div className="h-[5px] w-[28%]" style={{ background: look.accent }} />
      </div>
      <div className="flex min-w-0 flex-col gap-[6%]">
        <div className="grid flex-1 grid-cols-2 gap-2">
          {chips.map((c, i) => (
            <div key={i} className="flex flex-col justify-end rounded-[10px] p-2.5" style={{ background: c, boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)" }}>
              <span className="text-[10px] font-semibold tabular-nums" style={{ color: i === 0 || (i === 1 && look.key === "coastal") ? "#fff" : "#0a0a0b", opacity: 0.75 }}>
                {c.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-[10px] bg-white p-3">
          <p className="leading-none" style={{ ...look.type, textTransform: "none", fontSize: "clamp(1.6rem,3vw,2.6rem)" }}>
            Aa
          </p>
          <p className="mt-2 text-[10px] font-semibold text-ink/50">Display, set {look.label.toLowerCase()}</p>
        </div>
      </div>
    </div>
  )
}

function Answer({ name, look }: { name: string; look: Look }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-[#f4f4f2] p-[6%]">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[clamp(.85rem,1.3vw,1.05rem)] shadow-[0_1px_0_rgba(0,0,0,.06),0_8px_24px_-12px_rgba(0,0,0,.2)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.4" />
          <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
        <span className="truncate text-ink/80">who do people recommend near me</span>
      </div>
      <div className="rounded-[18px] bg-white p-[5%] shadow-[0_20px_50px_-30px_rgba(0,0,0,.35)]">
        <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-ink/50">
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" fill={look.accent === "#ffe14d" ? "#ff2e88" : look.accent} />
          </svg>
          AI answer
        </p>
        <p className="mt-3 text-[clamp(1rem,1.7vw,1.4rem)] font-semibold leading-snug tracking-[-0.01em]">
          Most people point to <mark className="rounded px-1" style={{ background: look.bg, color: look.fg }}>{name}</mark>.
          People mention them by name, their reviews say the same thing, and they show up everywhere customers
          look.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-semibold text-ink/50">
          <span>Local press</span>
          <span>Business profile</span>
          <span>Their website</span>
        </div>
      </div>
      <div className="rounded-[14px] bg-white px-5 py-3">
        <p className="text-[12px] text-ink/50">{slug(name)}.com</p>
        <p className="text-[clamp(.95rem,1.4vw,1.15rem)] font-bold" style={{ color: "#1a4fd6" }}>
          {name} | Official site
        </p>
      </div>
    </div>
  )
}

function Website({ name, look }: { name: string; look: Look }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ background: `radial-gradient(120% 90% at 70% 10%, ${look.accent}33, transparent 60%), #efefec` }}>
      <div className="relative h-[88%] aspect-[9/19] rounded-[2.2rem] bg-ink p-[3.5%] shadow-[0_40px_70px_-30px_rgba(0,0,0,.55)]">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[1.8rem]" style={{ background: look.bg, color: look.fg }}>
          <div className="flex items-center justify-between px-[9%] pt-[14%]">
            <span className="truncate text-[11px]" style={look.type}>
              {name}
            </span>
            <span className="grid gap-[3px]">
              <span className="block h-[2px] w-4" style={{ background: look.fg }} />
              <span className="block h-[2px] w-4" style={{ background: look.fg }} />
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-[9%]">
            <p className="text-[11px] font-semibold opacity-70">Now booking</p>
            <p className="mt-2 break-words leading-[0.9]" style={{ ...look.type, fontSize: fit(name, 38, 20, 190) }}>
              {name}
            </p>
            <p className="mt-3 text-[11px] leading-snug opacity-75">Open now. Book in two taps.</p>
            <span className="mt-4 inline-flex h-8 items-center self-start rounded-full px-4 text-[11px] font-bold" style={{ background: look.accent, color: look.bg === "#ff2e88" ? "#0a0a0b" : look.bg }}>
              Book now
            </span>
          </div>
          <div className="relative h-[34%]">
            <Image src="/img/stock/worth-ave.jpg" alt="" fill sizes="12rem" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Billboard({ name, look }: { name: string; look: Look }) {
  /* Face of the board measured on the 2000x1333 photograph. */
  const quad: [number, number][] = [
    [588 / 2000, 412 / 1333],
    [1210 / 2000, 135 / 1333],
    [1219 / 2000, 862 / 1333],
    [598 / 2000, 1052 / 1333],
  ]
  return (
    <Projected src="/img/stock/billboard.jpg" alt="A blank billboard against the sky beside palm fronds" quad={quad} planeW={1000} planeH={640} objectPosition="45% 50%">
      <div className="relative flex h-full w-full flex-col justify-between p-[6%]" style={{ background: look.bg, color: look.fg }}>
        <p className="text-[46px] font-semibold opacity-80">Now open. Come see us.</p>
        <p className="break-words leading-[0.86]" style={{ ...look.type, fontSize: fit(name, 200, 70, 1500) }}>
          {name}
        </p>
        <div className="h-[18px] w-[36%]" style={{ background: look.accent }} />
      </div>
    </Projected>
  )
}

function Van({ name, look }: { name: string; look: Look }) {
  /* Cargo side panel, behind the driver door, on the 2000x1502 photograph. */
  const quad: [number, number][] = [
    [836 / 2000, 468 / 1502],
    [1526 / 2000, 462 / 1502],
    [1526 / 2000, 856 / 1502],
    [836 / 2000, 860 / 1502],
  ]
  return (
    <Projected
      src="/img/stock/van.jpg"
      alt="A white cargo van parked on a seawall"
      quad={quad}
      planeW={1000}
      planeH={570}
      blend="multiply"
      objectPosition="60% 55%"
    >
      <div className="relative h-full w-full overflow-hidden" style={{ background: look.bg === "#0a0a0b" ? "#1d1d20" : look.bg, color: look.fg }}>
        <div className="absolute -right-[12%] top-0 h-full w-[46%] -skew-x-[18deg]" style={{ background: look.accent }} />
        <div className="relative flex h-full flex-col justify-center p-[7%]">
          <p className="max-w-[78%] break-words leading-[0.88]" style={{ ...look.type, fontSize: fit(name, 150, 60, 1150) }}>
            {name}
          </p>
          <p className="mt-6 text-[40px] font-bold opacity-90">{slug(name)}.com</p>
        </div>
      </div>
    </Projected>
  )
}

function Tee({ name, look }: { name: string; look: Look }) {
  return (
    <div className="absolute inset-0">
      <Image src="/img/stock/tee.jpg" alt="A black t-shirt on a hanger against a sunlit wall" fill sizes="(min-width: 1024px) 62vw, 86vw" className="object-cover" style={{ objectPosition: "55% 45%" }} />
      <div className="absolute left-[50%] top-[33%] w-[20%] -translate-x-1/2 text-center" aria-hidden style={{ color: look.key === "estate" ? look.accent : look.key === "pop" ? "#ff2e88" : "#fff" }}>
        <p className="break-words leading-[0.9] opacity-[0.92]" style={{ ...look.type, fontSize: `clamp(10px, ${fit(name, 2.2, 0.9, 16)}vw, 40px)` }}>
          {name}
        </p>
        <div className="mx-auto mt-[6%] h-[3px] w-[40%]" style={{ background: look.key === "signal" ? look.accent : "currentColor", opacity: 0.9 }} />
      </div>
    </div>
  )
}

function Storefront({ name, look }: { name: string; look: Look }) {
  /* The continuous upper fascia band on the 1700x1275 photograph. */
  const quad: [number, number][] = [
    [30 / 1700, 58 / 1275],
    [1630 / 1700, 58 / 1275],
    [1630 / 1700, 172 / 1275],
    [30 / 1700, 172 / 1275],
  ]
  /* Centered on the right-hand pane of frosted glass. */
  const win: [number, number][] = [
    [930 / 1700, 500 / 1275],
    [1500 / 1700, 500 / 1275],
    [1500 / 1700, 880 / 1275],
    [930 / 1700, 880 / 1275],
  ]
  return (
    <>
      <Projected src="/img/stock/storefront.jpg" alt="A storefront with a blank sign band and frosted windows" quad={quad} planeW={1600} planeH={114}>
        <div className="flex h-full w-full items-center justify-center" style={{ color: look.key === "estate" ? look.accent : "#fff" }}>
          <p className="whitespace-nowrap leading-none" style={{ ...look.type, fontSize: fit(name, 84, 40, 1500), textShadow: "0 0 18px rgba(255,255,255,.35)" }}>
            {name}
          </p>
        </div>
      </Projected>
      <Projected src="/img/stock/storefront.jpg" alt="" quad={win} planeW={570} planeH={380}>
        <div className="flex h-full w-full flex-col items-center justify-center text-center" style={{ color: look.bg === "#ff2e88" ? "#ff2e88" : look.bg }}>
          <p className="max-w-[92%] break-words leading-[0.9]" style={{ ...look.type, fontSize: fit(name, 96, 36, 620) }}>
            {name}
          </p>
          <div className="my-4 h-[5px] w-16" style={{ background: look.accent }} />
          <p className="text-[30px] font-bold">Come on in</p>
        </div>
      </Projected>
    </>
  )
}

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 22) || "yourname"
}
