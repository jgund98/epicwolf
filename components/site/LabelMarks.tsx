"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Turns each chapter label's E into the W the first time it scrolls into
 * view: the logo's own idea, replayed quietly at every chapter.
 */
export function LabelMarks() {
  const pathname = usePathname()
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".label:not(.is-in)")
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [pathname])
  return null
}
