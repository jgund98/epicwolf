"use client"

import { useEffect, useRef } from "react"

/**
 * Muted, looping background video that only loads and plays while on screen.
 * Pass srcMobile to serve phones a file sized for their screens. The poster is
 * attached on approach too: a poster attribute downloads at page load, which
 * made a below-the-fold still compete with the hero on a phone connection.
 */
export function LazyVideo({ src, srcMobile, poster, className }: { src: string; srcMobile?: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const pick = srcMobile && window.matchMedia("(max-width: 767px)").matches ? srcMobile : src
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!v.getAttribute("poster")) v.poster = poster
          if (!v.getAttribute("src")) v.src = pick
          v.play().catch(() => {})
        } else v.pause()
      },
      { rootMargin: "600px" }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src, srcMobile, poster])
  return <video ref={ref} muted loop playsInline preload="none" aria-hidden className={className} />
}
