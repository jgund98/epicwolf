"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

/** A wide photograph that drifts slower than the page inside its rounded frame. */
export function ParallaxImage({
  src,
  alt,
  className = "",
  priority,
  position = "50% 50%",
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  position?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"])
  return (
    <div ref={ref} className={`cut relative overflow-hidden bg-ink-3 ${className}`}>
      <motion.div className="absolute inset-[-8%_0]" style={{ y: reduce ? 0 : y }}>
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1480px) 1400px, 94vw" className="object-cover" style={{ objectPosition: position }} />
      </motion.div>
    </div>
  )
}
