"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

/** Rise-in on first sight. Transform + opacity only. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
  amount = 0.25,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "li" | "section" | "p" | "span" | "figure"
  amount?: number
}) {
  const reduce = useReducedMotion()
  const M = motion[as] as typeof motion.div
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  )
}

/**
 * Headline reveal: each line rises out of its own mask. Pass lines as an
 * array so breaks are authored, never left to chance.
 *
 * The in-view trigger lives on the (unclipped) wrapper and cascades to the
 * lines through variants. Observing the lines themselves never fires: they
 * start fully translated out of an overflow-hidden mask, so the observer
 * sees nothing intersecting.
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  as = "h2",
  id,
}: {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
  id?: string
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] as typeof motion.div
  return (
    <Tag
      className={as === "span" ? `block ${className ?? ""}` : className}
      id={id}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
