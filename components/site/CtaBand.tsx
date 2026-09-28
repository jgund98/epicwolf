import Link from "next/link"
import { site } from "@/lib/site"

/** Closing band for inner pages. One line, two doors. */
export function CtaBand({ line = "Let's make it impossible to ignore.", interest }: { line?: string; interest?: string }) {
  return (
    <section data-tone="dark" className="on-dark relative py-24 md:py-32">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <p className="t-display max-w-[14ch]">{line}</p>
        <div className="flex flex-wrap gap-3">
          <Link href={interest ? `/contact?interest=${encodeURIComponent(interest)}` : "/contact"} className="btn btn-flare">
            Start a project <span className="arrow" aria-hidden>→</span>
          </Link>
          <a href={site.phoneHref} className="btn btn-line tabular-nums">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
