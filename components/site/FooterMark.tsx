"use client"

import { useEffect, useRef, useState } from "react"
import { Logo } from "@/components/brand/Logo"

/** The footer wordmark assembles letter by letter the first time it is seen. */
export function FooterMark() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`fw shell overflow-hidden pt-2 ${inView ? "is-in" : ""}`}>
      <Logo draw className="block h-auto w-full" />
    </div>
  )
}
