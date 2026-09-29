"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { Mark } from "@/components/brand/Logo"

/**
 * Chapter four. Every surface, one standard.
 *
 * Real work in the world, made in house: storefront and wall signage, blade
 * signs, window and door vinyl and fleet graphics, set among the
 * pieces of a brand system. Columns of tiles drift at different speeds inside one wave-cut frame
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
      <Mark className="w-[46%] text-flare" title="" />
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

const T = {
  au: { kind: "img", src: "/img/work/au-storefront.jpg", alt: "Window vinyl across a real estate capital firm's storefront", ratio: "3/4" },
  anzoSign: { kind: "img", src: "/img/work/anzo-sign.jpg", alt: "Dimensional exterior sign over a Mediterranean kitchen", ratio: "3/4" },
  anzoWindows: { kind: "img", src: "/img/work/anzo-windows.jpg", alt: "Full-color food photography window graphics on a restaurant", ratio: "4/3" },
  greek: { kind: "img", src: "/img/work/greek-market.jpg", alt: "Arched storefront lettering and pattern graphics on a Greek market", ratio: "3/4" },
  blade: { kind: "img", src: "/img/work/blade-sign.jpg", alt: "Hanging blade sign over a downtown sidewalk", ratio: "3/4" },
  factory: { kind: "img", src: "/img/work/factory-windows.jpg", alt: "Window graphics across a training gym storefront", ratio: "1/1" },
  lit: { kind: "img", src: "/img/work/lit-sign.jpg", alt: "Illuminated storefront sign over a gallery at night", ratio: "4/5" },
  wall: { kind: "img", src: "/img/work/wall-sign.jpg", alt: "White dimensional lettering on a navy building wall", ratio: "1/1" },
  door: { kind: "img", src: "/img/work/door-lettering.jpg", alt: "Large vinyl lettering on a restaurant's glass door", ratio: "4/3" },
  window: { kind: "img", src: "/img/work/window-graphics.jpg", alt: "Full-window photo graphics on a rug gallery storefront", ratio: "3/4" },
  palm: { kind: "img", src: "/img/work/palm-wall.jpg", alt: "Palm tree and crest wall graphics on white stucco under a barrel-tile roof", ratio: "1/1" },
  pickup: { kind: "img", src: "/img/work/pickup-graphics.jpg", alt: "Black pickup truck with white cut-vinyl fleet graphics", ratio: "4/5" },
} satisfies Record<string, Tile>

const COLUMNS: Tile[][] = [
  [T.au, { kind: "node", node: <TypeTile />, ratio: "4/5" }, T.anzoWindows, T.pickup],
  [{ kind: "node", node: <ColorTile />, ratio: "1/1" }, T.greek, T.palm, T.lit],
  [T.wall, T.blade, { kind: "node", node: <LineTile />, ratio: "4/3" }, T.factory],
  [T.anzoSign, { kind: "node", node: <MarkTile />, ratio: "1/1" }, T.door, T.window],
]

/* Phones: two gliding columns of five, a mix of the work and the system. */
const MOBILE: Tile[][] = [
  [T.au, { kind: "node", node: <TypeTile />, ratio: "4/5" }, T.greek, T.anzoWindows, T.blade],
  [{ kind: "node", node: <ColorTile />, ratio: "1/1" }, T.anzoSign, T.door, T.lit, T.factory],
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
  const columns = mobile ? MOBILE : COLUMNS

  return (
    <section ref={ref} data-tone="light" className="on-light relative overflow-hidden pt-24 md:pt-36" aria-labelledby="world-title">
      <div className="shell grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="label">Chapter four · The standard</p>
          <h2 id="world-title" className="t-h2 mt-4 max-w-[14ch]">
            <span className="font-[300]">Every surface.</span> One standard.
          </h2>
        </div>
        <p className="t-body muted-light md:col-span-5">
          A brand only works if it holds up everywhere it shows up. We design the whole world around it, then make every
          piece ourselves: the sign over the door, the vinyl on the glass and the graphics on the truck.
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
