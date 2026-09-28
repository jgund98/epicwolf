"use client"

import { useEffect, useRef } from "react"

/** Muted, looping background video that only loads and plays while on screen. */
export function LazyVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!v.src) v.src = src
          v.play().catch(() => {})
        } else v.pause()
      },
      { rootMargin: "200px" }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src])
  return <video ref={ref} poster={poster} muted loop playsInline preload="none" aria-hidden className={className} />
}
