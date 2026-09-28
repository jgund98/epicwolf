"use client"

import { useEffect, useRef, useState } from "react"

/**
 * The E's orange middle bar trails the pointer and swells into a labelled disc
 * over anything marked data-cursor="View" (or any label). Fine pointers only;
 * touch devices never see it.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setOn(true)
    let x = -100, y = -100, cx = -100, cy = -100, raf = 0
    const move = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]")
      setLabel(t ? t.dataset.cursor || "" : null)
    }
    const loop = () => {
      cx += (x - cx) * 0.2
      cy += (y - cy) * 0.2
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener("pointermove", move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener("pointermove", move)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!on) return null
  const big = label !== null
  return (
    <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90]">
      <div
        className="grid -translate-x-1/2 -translate-y-1/2 place-items-center bg-flare text-ink transition-[width,height,border-radius] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: big ? 92 : 16, height: big ? 92 : 6, borderRadius: big ? 999 : 1 }}
      >
        <span
          className="text-[0.8rem] font-bold tracking-[-0.01em] transition-opacity duration-200"
          style={{ opacity: big && label ? 1 : 0, fontVariationSettings: '"wdth" 112' }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
