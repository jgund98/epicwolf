"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { LazyVideo } from "@/components/ui/LazyVideo"
import { site } from "@/lib/site"

/**
 * Chapter seven. Home, said the way locals say it: 561. The area code is set
 * enormous with a fast-cut montage of the county playing inside the numerals
 * (the Jupiter lighthouse at golden hour, boats into the sunset, the West Palm
 * skyline at night, fireworks over Flagler, the neon tree at The Square). The
 * hero's cutout technique, reprised. Footage credits live in HANDOFF.md.
 */
const PLACES = [
  "West Palm Beach",
  "Palm Beach",
  "Jupiter",
  "Palm Beach Gardens",
  "Juno Beach",
  "Wellington",
  "Royal Palm Beach",
  "Lake Worth Beach",
  "Boynton Beach",
  "Delray Beach",
  "Boca Raton",
  "Stuart",
  "Fort Lauderdale",
  "Miami",
]

export function Local() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const drift = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"])
  const zoom = useTransform(scrollYProgress, [0, 1], [1.04, 1])

  return (
    <section ref={ref} data-tone="dark" className="relative overflow-hidden pt-24 text-paper md:pt-32" style={{ backgroundColor: "#000" }} aria-labelledby="local-title">
      <div className="shell flex items-baseline justify-between gap-6">
        <p className="label">Chapter seven · Home</p>
        <p className="text-sm font-semibold tabular-nums text-white/55">
          {site.geo.lat.toFixed(4)}° N, {Math.abs(site.geo.lng).toFixed(4)}° W
        </p>
      </div>

      {/* 561, with the skyline inside it */}
      <div className="relative mt-6 isolate" aria-hidden>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute inset-[-3.5%]" style={{ y: reduce ? 0 : drift, scale: reduce ? 1 : zoom }}>
            <LazyVideo src="/video/561-hd.mp4" srcMobile="/video/561-m.mp4" poster="/video/561-hd.jpg" className="h-full w-full object-cover" />
          </motion.div>
        </div>
        <div className="relative flex items-center justify-center mix-blend-multiply" style={{ backgroundColor: "#000" }}>
          <span className="t-area block text-white">561</span>
        </div>
      </div>

      <div className="shell grid gap-10 pb-16 pt-12 md:grid-cols-12 md:pb-20 md:pt-16">
        <h2 id="local-title" className="t-h2 md:col-span-6">
          We know which side of the bridge you’re on
        </h2>
        <div className="md:col-span-5 md:col-start-8">
          <p className="t-lead text-paper/85">
            Epic Wolf is based in West Palm Beach. Close enough to walk your space and sit across the table, and fluent
            in a market where Worth Avenue, Clematis Street and the family office tower down the block all read a brand
            differently.
          </p>
          <Link href="/palm-beach-county" className="link-draw mt-8 inline-block text-lg font-semibold">
            Where we work
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5" aria-hidden>
        <div className="overflow-hidden">
          <div className="marquee" style={{ ["--marquee-dur" as string]: "70s" }}>
            {[0, 1].map((k) => (
              <span key={k} className="flex shrink-0 items-center">
                {PLACES.map((pl) => (
                  <span key={pl + k} className="flex items-center whitespace-nowrap text-[clamp(1rem,1.6vw,1.35rem)] font-semibold text-white/50">
                    <span className="px-6">{pl}</span>
                    <svg viewBox="0 0 100 100" className="h-2.5 w-2.5" aria-hidden>
                      <path d="M0 0H22V78H78V0H100V100H0Z" fill="currentColor" />
                      <path d="M39 34H61V78H39Z" fill="var(--color-flare)" />
                    </svg>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
