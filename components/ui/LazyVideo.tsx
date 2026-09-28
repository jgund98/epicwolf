"use client"

import { useEffect, useRef } from "react"

/**
 * Muted, looping background video that only loads and plays while on screen.
 * Pass srcMobile to serve phones a file sized for their screens.
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
          if (!v.getAttribute("src")) v.src = pick
          v.play().catch(() => {})
        } else v.pause()
      },
      { rootMargin: "300px" }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src, srcMobile])
  return <video ref={ref} poster={poster} muted loop playsInline preload="none" aria-hidden className={className} />
}
