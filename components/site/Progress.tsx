"use client"

import { motion, useScroll, useSpring } from "motion/react"

/** The E's orange middle bar, stretched into a reading line under the header. */
export function Progress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return <motion.div aria-hidden className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-flare" style={{ scaleX: x }} />
}
