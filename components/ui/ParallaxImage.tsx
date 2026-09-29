"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

/**
 * A photograph that drifts slower than the page inside its frame. Only the
 * inner layer moves, by transform, so it stays smooth on phones.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  priority,
  position = "50% 50%",
  frame = "cut",
  sizes = "(min-width: 1480px) 1400px, 94vw",
  travel = 7,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  position?: string
  /** Frame class: cut, cut-flip, cut-sm, cut-md, or any rounded utility. */
  frame?: string
  sizes?: string
  /** How far the picture drifts, in percent of the frame, each way. */
  travel?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${travel}%`, `${travel}%`])
  return (
    <div ref={ref} className={`${frame} relative overflow-hidden bg-ink-3 ${className}`}>
      <motion.div className="absolute inset-x-0" style={{ top: `-${travel + 1}%`, bottom: `-${travel + 1}%`, y: reduce ? 0 : y }}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" style={{ objectPosition: position }} />
      </motion.div>
    </div>
  )
}
