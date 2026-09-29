"use client"

import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

/**
 * A hand-drawn marker stroke around (or under) a word, drawn in the first time
 * it scrolls into view. The path is built in the word's own pixel space so the
 * nib stays one weight however long the word is. Used sparingly: it is the
 * one human mark in an otherwise engineered system.
 */
type Kind = "circle" | "underline"

/* Normalized control points (0..1 across the word's box), overshooting it the way a quick hand does. */
const SHAPES: Record<Kind, number[][][]> = {
  circle: [
    [
      [-0.05, 0.6],
      [-0.07, 0.04], [0.56, -0.24], [0.88, 0.0],
      [1.12, 0.2], [1.13, 0.8], [0.79, 1.0],
      [0.44, 1.2], [-0.03, 1.1], [-0.06, 0.7],
      [-0.08, 0.46], [0.1, 0.22], [0.32, 0.12],
    ],
  ],
  underline: [
    [[-0.02, 1.0], [0.3, 0.93], [0.7, 0.91], [1.03, 0.96]],
    [[0.1, 1.13], [0.42, 1.06], [0.74, 1.05], [0.95, 1.09]],
  ],
}

function toPath(pts: number[][], w: number, h: number) {
  const P = ([x, y]: number[]) => `${(x * w).toFixed(1)} ${(y * h).toFixed(1)}`
  let d = `M${P(pts[0])}`
  for (let i = 1; i + 2 < pts.length; i += 3) d += ` C${P(pts[i])} ${P(pts[i + 1])} ${P(pts[i + 2])}`
  return d
}

export function Marker({
  children,
  kind = "circle",
  delay = 0.25,
  color = "var(--color-flare)",
}: {
  children: ReactNode
  kind?: Kind
  delay?: number
  color?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [box, setBox] = useState<{ w: number; h: number } | null>(null)
  const reduce = useReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const read = () => setBox({ w: el.offsetWidth, h: el.offsetHeight })
    read()
    const ro = new ResizeObserver(read)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const nib = box ? Math.max(3, box.h * (kind === "circle" ? 0.085 : 0.08)) : 0

  return (
    <span ref={ref} className="relative inline-block">
      {children}
      {box && (
        <motion.svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 overflow-visible"
          width={box.w}
          height={box.h}
          initial={reduce ? "on" : "off"}
          whileInView="on"
          viewport={{ once: true, amount: 0.9 }}
        >
          {SHAPES[kind].map((pts, i) => (
            <motion.path
              key={i}
              d={toPath(pts, box.w, box.h)}
              fill="none"
              stroke={color}
              strokeWidth={i ? nib * 0.8 : nib}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{
                off: { pathLength: 0, opacity: 0 },
                on: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: i ? 0.35 : kind === "circle" ? 0.85 : 0.5, delay: delay + i * 0.5, ease: [0.55, 0, 0.3, 1] },
                    opacity: { duration: 0.01, delay: delay + i * 0.5 },
                  },
                },
              }}
            />
          ))}
        </motion.svg>
      )}
    </span>
  )
}
