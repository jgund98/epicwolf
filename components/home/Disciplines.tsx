"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react"
import { pillars } from "@/lib/site"

/**
 * Chapter three. Three disciplines as three enormous lines of type. Hovering
 * one dims the others and floats its photograph beside the cursor; phones get
 * the photograph inline. Capabilities sit under each name as quiet text, the
 * way a serious agency lists what it does: once, small, without a menu.
 */
export function Disciplines() {
  const [active, setActive] = useState<number | null>(null)
  const box = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 260, damping: 30, mass: 0.6 })
  const y = useSpring(my, { stiffness: 260, damping: 30, mass: 0.6 })
  const [fine, setFine] = useState(false)

  useEffect(() => setFine(window.matchMedia("(pointer: fine)").matches), [])

  return (
    <section data-tone="dark" className="on-dark grain relative overflow-hidden py-28 md:py-40" aria-labelledby="disciplines-title">
      <div className="shell relative z-[2]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">Chapter three · The craft</p>
            <h2 id="disciplines-title" className="t-h2 mt-4 max-w-[16ch]">
              <span className="font-[300]">Three disciplines.</span> One point of view.
            </h2>
          </div>
          <p className="t-body muted-dark max-w-[38ch]">
            We keep the list short on purpose. Everything we make serves one of these, and all three answer to the
            same strategy.
          </p>
        </div>

        <div
          ref={box}
          className="relative mt-16 border-t border-white/12 md:mt-24"
          onPointerMove={(e) => {
            const r = box.current!.getBoundingClientRect()
            mx.set(e.clientX - r.left)
            my.set(e.clientY - r.top)
          }}
          onPointerLeave={() => setActive(null)}
        >
          {pillars.map((p, i) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              data-cursor="Open"
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group relative block border-b border-white/12 py-8 md:py-12"
            >
              <p
                className="t-poster transition-[opacity,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:text-flare"
                style={{ opacity: active === null || active === i ? 1 : 0.22 }}
              >
                {p.name}
              </p>
              <div
                className="mt-6 grid gap-3 transition-opacity duration-500 md:mt-8 md:grid-cols-12 md:gap-10"
                style={{ opacity: active === null || active === i ? 1 : 0.35 }}
              >
                <p className="t-lead font-semibold md:col-span-5">{p.line}</p>
                <p className="muted-dark t-small md:col-span-6 md:col-start-7 md:pt-1">
                  {p.caps.map((c, k) => (
                    <span key={c.name}>
                      <span className="whitespace-nowrap">
                        {c.name}
                        {k < p.caps.length - 1 ? <span className="pl-2 text-white/25">/</span> : null}
                      </span>{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="cut-sm relative mt-6 aspect-[16/9] overflow-hidden md:hidden">
                <Image src={p.img} alt="" fill sizes="92vw" className="object-cover" />
              </div>
            </Link>
          ))}

          {fine && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
              style={{ x, y }}
            >
              <AnimatePresence>
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                    animate={{ opacity: 1, scale: 1, rotate: -2 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="cut-sm absolute -translate-y-1/2 translate-x-10 overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]"
                    style={{ width: "min(26vw, 380px)", aspectRatio: "4 / 3" }}
                  >
                    <Image src={pillars[active].img} alt="" fill sizes="380px" className="object-cover" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
