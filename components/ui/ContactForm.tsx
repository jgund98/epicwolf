"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useBrandName, setBrandName } from "@/lib/nameStore"
import { pillars, site } from "@/lib/site"

const INTERESTS = [...pillars.map((p) => p.name), "Not sure yet"]
const BUDGETS = ["Under $10k", "$10k to $25k", "$25k to $75k", "$75k and up", "Not sure yet"]

/**
 * The inquiry form. Big quiet fields on a hairline, two tap-to-choose rows,
 * nothing else. Prefills the company from the name the visitor typed into the
 * homepage showpiece, or from ?business= on the URL.
 */
export function ContactForm({
  tone = "dark",
  source = "contact",
  defaultInterest,
}: {
  tone?: "dark" | "light"
  source?: string
  /** Preselects a discipline chip, e.g. on a local service page. */
  defaultInterest?: string
}) {
  const brand = useBrandName()
  const [company, setCompany] = useState("")
  const [interest, setInterest] = useState<string | null>(defaultInterest && INTERESTS.includes(defaultInterest) ? defaultInterest : null)
  const [from, setFrom] = useState("")
  const [budget, setBudget] = useState<string | null>(null)
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")
  const [first, setFirst] = useState("")

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("business")
    if (q) {
      setBrandName(q)
      setCompany(q)
    } else if (brand) setCompany((c) => c || brand)
    const i = new URLSearchParams(window.location.search).get("interest")
    if (i && INTERESTS.includes(i)) setInterest(i)
    const f = new URLSearchParams(window.location.search).get("from")
    if (f) setFrom(f.slice(0, 120))
  }, [brand])

  // The thank-you only mounts after the form's exit finishes (mode="wait"), so
  // bring it into view from its ref callback, not from an effect on state.
  const done = useCallback((el: HTMLDivElement | null) => {
    if (!el) return
    const r = el.getBoundingClientRect()
    const top = Math.max(0, r.top + window.scrollY - (window.innerHeight - r.height) / 2)
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis
    if (lenis) lenis.scrollTo(top)
    else window.scrollTo({ top, behavior: "smooth" })
  }, [])

  const dark = tone === "dark"
  const field = `w-full border-0 border-b-2 bg-transparent px-0 py-3 text-[1.15rem] font-semibold outline-none transition-colors placeholder:font-normal ${
    dark ? "border-white/20 placeholder:text-white/35 focus:border-flare" : "border-ink/20 placeholder:text-ink/35 focus:border-flare-deep"
  }`
  const chip = (on: boolean) =>
    `h-11 rounded-full px-5 text-[0.95rem] font-semibold transition-colors duration-300 ${
      on
        ? dark
          ? "bg-paper text-ink"
          : "bg-ink text-paper"
        : dark
          ? "text-paper shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.25)] hover:shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.8)]"
          : "text-ink shadow-[inset_0_0_0_1.5px_rgba(10,10,11,.2)] hover:shadow-[inset_0_0_0_1.5px_rgba(10,10,11,.7)]"
    }`

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get("name") || "").trim()
    setFirst(name.split(" ")[0] || "")
    setState("sending")
    setError("")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company: fd.get("company"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          message: fd.get("message"),
          website: fd.get("website"),
          interest,
          budget,
          source: from ? `${source} (from ${from})` : source,
        }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok || !j.ok) throw new Error(j.error || "Something went wrong.")
      setState("sent")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setState("error")
    }
  }

  return (
    <AnimatePresence mode="wait">
      {state === "sent" ? (
        <motion.div
          key="done"
          ref={done}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="py-10"
          role="status"
        >
          <p className="t-h2">Thank you{first ? `, ${first}` : ""}.</p>
          <p className={`t-lead mt-5 max-w-[40ch] ${dark ? "text-paper/80" : "muted-light"}`}>
            Your note is with the partners. We&rsquo;ll be in touch shortly. If it can&rsquo;t wait, call{" "}
            <a href={site.phoneHref} className="link-draw font-semibold tabular-nums">
              {site.phone}
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -16 }} className="grid gap-10" noValidate={false}>
          <fieldset>
            <legend className="font-semibold">What can we help with?</legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {INTERESTS.map((i) => (
                <button key={i} type="button" aria-pressed={interest === i} onClick={() => setInterest(interest === i ? null : i)} className={chip(interest === i)}>
                  {i}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Company</span>
              <input name="company" autoComplete="organization" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Phone, optional</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="sr-only">Tell us about it</span>
              <textarea name="message" rows={3} placeholder="Tell us about the company and what you want to happen next" className={`${field} resize-none`} />
            </label>
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          </div>

          <fieldset>
            <legend className="font-semibold">
              Investment range <span className={dark ? "text-white/45" : "text-ink/45"}>(optional)</span>
            </legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {BUDGETS.map((b) => (
                <button key={b} type="button" aria-pressed={budget === b} onClick={() => setBudget(budget === b ? null : b)} className={chip(budget === b)}>
                  {b}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-wrap items-center gap-6">
            <button type="submit" disabled={state === "sending"} className={`btn ${dark ? "btn-flare" : "btn-ink"} disabled:opacity-60`}>
              {state === "sending" ? "Sending" : "Send inquiry"} <span className="arrow" aria-hidden>→</span>
            </button>
            {state === "error" && (
              <p className="font-semibold text-flare" role="alert">
                {error} You can also call {site.phone}.
              </p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
