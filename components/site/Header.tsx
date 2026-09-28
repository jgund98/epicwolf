"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Logo } from "@/components/brand/Logo"
import { site } from "@/lib/site"

/**
 * The header reads the section underneath it. Every band on the site carries
 * data-tone="dark" or "light"; whichever one sits under the header's midline
 * decides whether the header is ink-on-paper or paper-on-ink. The switch is a
 * color transition, never a jump.
 */
export function Header() {
  const pathname = usePathname()
  const [tone, setTone] = useState<"dark" | "light">("dark")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    let raf = 0
    const read = () => {
      raf = 0
      setScrolled(window.scrollY > 24)
      const probe = 36
      const els = document.querySelectorAll<HTMLElement>("[data-tone]")
      let found: "dark" | "light" | null = null
      for (const el of els) {
        const r = el.getBoundingClientRect()
        if (r.top <= probe && r.bottom > probe) found = (el.dataset.tone as "dark" | "light") ?? found
      }
      if (found) setTone(found)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    read()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
  }, [open])

  const dark = tone === "dark" || open

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-500"
        style={{
          height: "var(--header-h)",
          color: dark ? "var(--color-paper)" : "var(--color-ink)",
          backgroundColor: open
            ? "transparent"
            : scrolled
              ? dark
                ? "rgba(10,10,11,0.82)"
                : "rgba(255,255,255,0.86)"
              : "transparent",
          backdropFilter: scrolled && !open ? "blur(14px) saturate(1.4)" : undefined,
          WebkitBackdropFilter: scrolled && !open ? "blur(14px) saturate(1.4)" : undefined,
          boxShadow: scrolled && !open ? (dark ? "0 1px 0 rgba(255,255,255,0.08)" : "0 1px 0 rgba(10,10,11,0.08)") : "none",
        }}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <Link href="/" aria-label="Epic Wolf home" className="group relative z-10 block shrink-0" onClick={() => setOpen(false)}>
            <Logo className="h-[15px] w-auto transition-transform duration-500 group-hover:scale-[1.03] sm:h-[17px]" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-draw text-[0.95rem] font-semibold tracking-[-0.01em]"
                  style={{ backgroundSize: active ? "100% 2px" : undefined }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <a href={site.phoneHref} className="hidden text-[0.95rem] font-semibold tabular-nums xl:block">
              {site.phone}
            </a>
            <Link href="/contact" className="btn btn-flare hidden !h-11 !px-5 text-[0.95rem] sm:inline-flex">
              Start a project
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="relative -mr-2 grid h-11 w-11 place-items-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3 w-6">
                <span
                  className="absolute left-0 top-0 h-[2.5px] w-6 bg-current transition-transform duration-500"
                  style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute bottom-0 left-0 h-[2.5px] w-6 bg-current transition-transform duration-500"
                  style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="on-dark fixed inset-0 z-40 flex flex-col overflow-y-auto lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          >
            <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center gap-1 pt-24 pb-8">
              {[{ label: "Home", href: "/" }, ...site.nav, { label: "Contact", href: "/contact" }].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block py-1.5 text-[clamp(1.9rem,8.6vw,3.2rem)] font-[850] uppercase leading-[1] tracking-[-0.035em]"
                    style={{ fontVariationSettings: '"wdth" 125', color: pathname === item.href ? "var(--color-flare)" : undefined }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="shell flex flex-col gap-4 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" className="btn btn-flare w-full">
                Start a project
              </Link>
              <a href={site.phoneHref} className="btn btn-line w-full">
                Call {site.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
