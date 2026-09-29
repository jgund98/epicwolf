"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { W } from "@/components/brand/glyphs"

/**
 * Chapter four. Every surface, one standard.
 *
 * Epic Wolf's own identity, living in the world: on a van, over a door, on a
 * tote and a tee, on screens, as type and color, against West Palm Beach
 * light. Columns of tiles drift at different speeds inside one wave-cut frame
 * while a single enormous word breaks over its edge. Nothing to click. It
 * just has to look like the work of people who sweat every surface.
 */

type Tile = { kind: "img"; src: string; alt: string; ratio: string; pos?: string } | { kind: "node"; node: ReactNode; ratio: string }

function TypeTile() {
  return (
    <div className="flex h-full flex-col justify-between bg-ink p-[9%] text-paper">
      <p className="text-[11px] font-semibold text-white/50">Display</p>
      <p className="leading-[0.85]" style={{ fontVariationSettings: '"wdth" 125', fontWeight: 900, fontSize: "clamp(3rem,7vw,7.5rem)", letterSpacing: "-0.04em" }}>
        Aa
      </p>
      <div className="flex items-end justify-between text-[11px] font-semibold text-white/60">
        <span>Archivo Expanded</span>
        <span>900</span>
      </div>
    </div>
  )
}

function ColorTile() {
  return (
    <div className="flex h-full flex-col justify-between bg-flare p-[9%] text-ink">
      <p className="text-[11px] font-bold">Signal</p>
      <div>
        <p className="text-[clamp(1.1rem,1.8vw,1.7rem)] font-bold tracking-[-0.02em]">#FF4A1C</p>
        <p className="mt-1 text-[11px] font-semibold opacity-70">Used sparingly. Never whispered.</p>
      </div>
    </div>
  )
}

function MarkTile() {
  return (
    <div className="grid h-full place-items-center bg-paper">
      <svg viewBox="0 0 100 100" className="w-[42%]" aria-hidden>
        <path d={W.body} fill="#0a0a0b" />
        <path d={W.accent} fill="var(--color-flare)" />
      </svg>
    </div>
  )
}

function LineTile() {
  return (
    <div className="flex h-full items-end bg-ink-2 p-[9%]">
      <p className="t-h3 !text-[clamp(1.3rem,2.2vw,2.1rem)] text-paper">
        <span className="font-[300]">Impossible</span> to ignore.
      </p>
    </div>
  )
}

const COLUMNS: Tile[][] = [
  [
    { kind: "img", src: "/img/brand/ew-van-us.jpg", alt: "A cargo van wrapped in Epic Wolf black and orange", ratio: "4/3", pos: "62% 55%" },
    { kind: "node", node: <TypeTile />, ratio: "4/5" },
    { kind: "img", src: "/img/stock/press.jpg", alt: "West Palm Beach across the Intracoastal", ratio: "4/5" },
    { kind: "img", src: "/img/disc/palm-shadow.jpg", alt: "Palm fronds casting shadows on a white wall", ratio: "4/3" },
  ],
  [
    { kind: "node", node: <ColorTile />, ratio: "1/1" },
    { kind: "img", src: "/img/brand/ew-storefront-3.jpg", alt: "The Epic Wolf wordmark on a storefront sign band", ratio: "4/3", pos: "50% 20%" },
    { kind: "img", src: "/img/brand/ew-tee-3.jpg", alt: "A black tee printed with the Epic Wolf wordmark", ratio: "4/5", pos: "52% 40%" },
    { kind: "img", src: "/img/disc/bizdev.jpg", alt: "The West Palm Beach marina from above at blue hour", ratio: "1/1", pos: "50% 80%" },
  ],
  [
    { kind: "img", src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf website on desktop and phone", ratio: "16/10" },
    { kind: "img", src: "/img/brand/ew-tote-3.jpg", alt: "A tote printed with the Epic Wolf mark", ratio: "3/4", pos: "50% 55%" },
    { kind: "node", node: <LineTile />, ratio: "4/3" },
    { kind: "img", src: "/img/disc/pb-arcade.jpg", alt: "A pink Mediterranean arcade and palms in Palm Beach", ratio: "4/5" },
  ],
  [
    { kind: "img", src: "/img/stock/worth-ave.jpg", alt: "Palms along Worth Avenue in Palm Beach", ratio: "3/4" },
    { kind: "node", node: <MarkTile />, ratio: "1/1" },
    { kind: "img", src: "/img/stock/ew-digital.jpg", alt: "Epic Wolf web pages", ratio: "16/10" },
    { kind: "img", src: "/img/disc/arches.jpg", alt: "White arches in hard light", ratio: "4/5", pos: "40% 50%" },
  ],
]

export function BrandWorld() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [cols, setCols] = useState(4)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] })

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const read = () => setCols(mq.matches ? 4 : 2)
    read()
    mq.addEventListener("change", read)
    return () => mq.removeEventListener("change", read)
  }, [])

  /* Phones: two columns of five tiles that glide on their own (pure CSS on the
     GPU, nothing tied to the scroll), so it stays smooth on any phone. */
  const mobile = cols === 2
  const columns = mobile
    ? [
        [COLUMNS[0][0], COLUMNS[0][1], COLUMNS[2][1], COLUMNS[0][2], COLUMNS[2][2]],
        [COLUMNS[1][0], COLUMNS[1][1], COLUMNS[3][0], COLUMNS[1][2], COLUMNS[3][1]],
      ]
    : COLUMNS

  return (
    <section ref={ref} data-tone="light" className="on-light relative overflow-hidden pt-24 md:pt-36" aria-labelledby="world-title">
      <div className="shell grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="label">Chapter four · The standard</p>
          <h2 id="world-title" className="t-h2 mt-4 max-w-[14ch]">
            It has to work on a van too
          </h2>
        </div>
        <p className="t-body muted-light md:col-span-5">
          Your brand has to hold up on a phone screen, over a door on Clematis and on the side of a work van doing
          seventy on I-95. We design the whole world around it, then make every piece. The one below is ours.
        </p>
      </div>

      <div className="relative mt-12 md:mt-16">
        <div className="shell">
          <div className="cut-md relative h-[86svh] overflow-hidden rounded-[22px] bg-ink md:h-[108svh]">
            {mobile ? (
              <div className="absolute inset-x-[3%] top-0 grid grid-cols-2 gap-3">
                {columns.map((col, i) => (
                  <GlideColumn key={i} tiles={col} reverse={i === 1} still={!!reduce} />
                ))}
              </div>
            ) : (
              <div className="absolute inset-x-[2.5%] -top-[12%] grid grid-cols-4 gap-4">
                {columns.map((col, i) => (
                  <Column key={i} tiles={col} p={p} index={i} still={!!reduce} />
                ))}
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-ink via-ink/75 to-transparent" />
          </div>
        </div>
        <p
          aria-hidden
          className="t-mega t-world pointer-events-none absolute bottom-[0.45em] left-0 right-0 whitespace-nowrap text-center text-paper md:bottom-[-0.1em] md:mix-blend-difference"
        >
          Unmistakable.
        </p>
      </div>
      <div className="h-24 md:h-36" />
    </section>
  )
}

const DRIFT: [string, string][] = [
  ["4%", "-18%"],
  ["-10%", "8%"],
  ["8%", "-22%"],
  ["-6%", "10%"],
]

function Column({ tiles, p, index, still }: { tiles: Tile[]; p: MotionValue<number>; index: number; still: boolean }) {
  const [a, b] = DRIFT[index % DRIFT.length]
  const y = useTransform(p, [0, 1], [a, b])
  return (
    <motion.div className="flex flex-col gap-3 md:gap-4" style={{ y: still ? 0 : y, willChange: "transform" }}>
      {tiles.map((t, k) => (
        <div key={k} className="relative overflow-hidden rounded-[14px] md:rounded-[18px]" style={{ aspectRatio: t.ratio }}>
          {t.kind === "img" ? (
            <Image src={t.src} alt={t.alt} fill sizes="(min-width: 768px) 24vw, 46vw" className="object-cover" style={{ objectPosition: t.pos }} />
          ) : (
            t.node
          )}
        </div>
      ))}
    </motion.div>
  )
}

/* A column that loops forever: two identical stacks, the track slides exactly
   one stack's height, so the seam never shows. */
function GlideColumn({ tiles, reverse, still }: { tiles: Tile[]; reverse: boolean; still: boolean }) {
  const stack = (dup: boolean) => (
    <div className="flex flex-col gap-3 pb-3" aria-hidden={dup || undefined}>
      {tiles.map((t, k) => (
        <div key={k} className="relative overflow-hidden rounded-[14px]" style={{ aspectRatio: t.ratio }}>
          {t.kind === "img" ? (
            <Image src={t.src} alt={dup ? "" : t.alt} fill sizes="46vw" quality={70} className="object-cover" style={{ objectPosition: t.pos }} />
          ) : (
            t.node
          )}
        </div>
      ))}
    </div>
  )
  return (
    <div
      className={still ? "" : "glide-y"}
      style={{ animationDirection: reverse ? "reverse" : "normal", animationDuration: reverse ? "46s" : "38s" }}
    >
      {stack(false)}
      {stack(true)}
    </div>
  )
}
