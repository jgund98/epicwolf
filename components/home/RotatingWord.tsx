"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

/**
 * Cycles the last word of the headline. Each letter flips up out of a mask on
 * its own beat, like type being set. The first word is what search engines and
 * screen readers get; the rest are decoration.
 */
export function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    /* Holds still once the visitor scrolls off the top. A flip mid-scroll repaints
       the whole headline layer while the hero is animating it, a visible hitch on
       phones; the headline is already fading away by then anyway. */
    const id = setInterval(() => {
      if (window.scrollY > 8) return
      setI((n) => (n + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [reduce, words.length, interval])

  const word = words[i]
  return (
    <span className="relative block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <span className="sr-only">{words[0]}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={word} className="block whitespace-nowrap" aria-hidden>
          {word.split("").map((ch, k) => (
            <motion.span
              key={k}
              className="inline-block"
              initial={{ y: "110%", rotateX: -80 }}
              animate={{ y: "0%", rotateX: 0 }}
              exit={{ y: "-110%", rotateX: 80, transition: { duration: 0.4, delay: k * 0.018, ease: [0.7, 0, 0.84, 0] } }}
              transition={{ duration: 0.7, delay: 0.1 + k * 0.03, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "50% 100%" }}
            >
              {ch === " " ? "\u00a0" : ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
