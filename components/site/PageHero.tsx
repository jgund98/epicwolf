import Link from "next/link"
import type { ReactNode } from "react"
import { LineReveal } from "@/components/ui/Reveal"

/**
 * Inner-page opener on ink. The SEO phrase sits small inside the h1 above
 * the visible headline, so the page states plainly what it is without the
 * headline having to read like a keyword.
 */
export function PageHero({
  crumbs,
  kicker,
  lines,
  lead,
  children,
}: {
  crumbs?: { name: string; href: string }[]
  kicker: string
  lines: ReactNode[]
  lead?: ReactNode
  children?: ReactNode
}) {
  return (
    <section data-tone="dark" className="on-dark relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3.5rem)] md:pb-24 md:pt-[calc(var(--header-h)+6rem)]">
      <div className="shell">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-paper">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  {i === crumbs.length - 1 ? (
                    <span className="text-white/80" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.href} className="hover:text-paper">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1>
          <span className="label">{kicker}</span>
          <LineReveal as="span" className="t-display mt-6 max-w-[15ch]" lines={lines} delay={0.05} />
        </h1>
        {lead && <div className="t-lead mt-10 max-w-[52ch] text-paper/80">{lead}</div>}
        {children}
      </div>
    </section>
  )
}
