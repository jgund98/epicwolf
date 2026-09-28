"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import type { Faq } from "@/lib/types"

/**
 * Answer-first FAQ. Every answer is in the HTML from the first byte (hidden
 * with height, not removed), so search engines and AI crawlers read them all.
 */
export function FaqList({ faqs, tone = "light" }: { faqs: Faq[]; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0)
  const rule = tone === "dark" ? "border-white/12" : "border-ink/12"
  return (
    <div className={`border-t ${rule}`}>
      {faqs.map((f, i) => {
        const on = open === i
        return (
          <div key={f.q} className={`border-b ${rule}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(on ? null : i)}
                aria-expanded={on}
                className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
              >
                <span className="t-h3 !text-[clamp(1.15rem,1.6vw,1.45rem)]">{f.q}</span>
                <span
                  aria-hidden
                  className="relative mt-2 h-4 w-4 shrink-0 transition-transform duration-500"
                  style={{ transform: on ? "rotate(45deg)" : "none" }}
                >
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              <motion.div
                key={on ? "open" : "shut"}
                initial={on ? { height: 0, opacity: 0 } : false}
                animate={on ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className={`t-body max-w-[68ch] pb-7 ${tone === "dark" ? "muted-dark" : "muted-light"}`}>{f.a}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
