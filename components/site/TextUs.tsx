"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { site } from "@/lib/site"

/**
 * Phones only. The wordmark's period becomes a text bubble.
 *
 * Once the visitor is past the first screen, the orange dot lands in the corner,
 * grows into a message bubble, "types" for a beat, then resolves into Text us.
 * Tapping opens Messages with the first words already written.
 *
 * Tucks away while the footer or a contact form is on screen, and never shows on
 * the contact page. Transforms and opacity only (.tu-* in globals.css).
 */
const BODY = "Hi Epic Wolf, "

export function TextUs() {
  const pathname = usePathname()
  const [past, setPast] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [stage, setStage] = useState<"dot" | "typing" | "ready">("dot")
  /* Flip to a cream bubble over dark sections, ink over light and orange ones. */
  const [tone, setTone] = useState<"dark" | "light">("light")

  // Past the first screen
  useEffect(() => {
    let raf = 0
    const read = () => {
      raf = 0
      setPast(window.scrollY > window.innerHeight * 0.9)
      const under = document
        .elementsFromPoint(window.innerWidth - 70, window.innerHeight - 40)
        .find((el) => !el.closest(".tu"))
      const t = under?.closest("[data-tone]")?.getAttribute("data-tone")
      setTone(t === "dark" ? "dark" : "light")
    }
    const on = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    window.addEventListener("scroll", on, { passive: true })
    return () => {
      window.removeEventListener("scroll", on)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  // Out of the way of the footer and any form
  useEffect(() => {
    const targets = [...document.querySelectorAll("footer, form")]
    if (!targets.length) return
    const seen = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)
      setBlocked(seen.size > 0)
    })
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pathname])

  const show = past && !blocked && pathname !== "/contact"

  // The first arrival types, then resolves. Later arrivals go straight to ready.
  useEffect(() => {
    if (!show || stage === "ready") return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setStage("ready")
      return
    }
    const t1 = setTimeout(() => setStage("typing"), 420)
    const t2 = setTimeout(() => setStage("ready"), 1900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [show, stage])

  return (
    <a
      href={`${site.smsHref}?&body=${encodeURIComponent(BODY)}`}
      aria-label={`Text Epic Wolf at ${site.phone}`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      data-tone-under={tone}
      className={`tu md:hidden ${show ? "is-on" : ""} tu-s-${stage}`}
    >
      <span className="tu-dot" aria-hidden />
      <span className="tu-bubble" aria-hidden>
        <span className="tu-typing">
          <i />
          <i />
          <i />
        </span>
        <span className="tu-text">
          <span className="tu-title">Text us</span>
          <span className="tu-sub">We&apos;ll write back.</span>
        </span>
      </span>
    </a>
  )
}
