import Link from "next/link"
import { Logo } from "@/components/brand/Logo"
import { pillars, site } from "@/lib/site"
import { FooterMark } from "./FooterMark"

/**
 * Deliberately short. A prestige agency's footer is a few doors, not an
 * inventory: three disciplines, the agency pages, one way to reach us, and
 * the wordmark. Town and capability pages are linked from their hubs and the
 * sitemap, never listed here.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const groups = [
    {
      head: "Services.",
      links: pillars.map((p) => ({ l: p.name, h: `/${p.slug}` })),
    },
    {
      head: "Agency.",
      links: [
        { l: "About", h: "/about" },
        { l: "Insights", h: "/insights" },
      ],
    },
  ]

  return (
    <footer data-tone="dark" className="on-dark relative overflow-hidden">
      <div className="shell grid gap-14 pt-24 pb-16 md:grid-cols-12 md:pt-32">
        <div className="md:col-span-5">
          <p className="t-h2 max-w-[13ch]"><span className="font-[300]">Made in</span> the 561.</p>
          <Link href="/contact" className="btn btn-flare mt-9">
            Start a project <span className="arrow" aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
        {groups.map((g) => (
          <nav key={g.head} aria-label={g.head}>
            <p className="text-lg font-bold">{g.head}</p>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((i) => (
                <li key={i.h}>
                  <Link href={i.h} className="link-draw muted-dark transition-colors hover:text-paper">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="text-lg font-bold">Contact.</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={site.phoneHref} className="link-draw muted-dark tabular-nums transition-colors hover:text-paper">
                {site.phone}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="link-draw muted-dark transition-colors hover:text-paper">
                  {site.email}
                </a>
              </li>
            )}
            <li className="muted-dark">{site.city}, {site.regionName}</li>
          </ul>
        </div>
        </div>
      </div>

      <FooterMark />

      <div className="shell mt-10 flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-[#8b8b91] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.legalName}
        </p>
        <p className="flex gap-6">
          <Link href="/privacy" className="hover:text-paper">
            Privacy
          </Link>
          <span>{site.city}, {site.region}</span>
        </p>
      </div>
    </footer>
  )
}
