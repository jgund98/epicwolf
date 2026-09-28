import Link from "next/link"
import { guides } from "@/lib/guides"
import { breadcrumbSchema, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { Reveal } from "@/components/ui/Reveal"

export const metadata = pageMeta({
  title: "Insights | Branding, PR and Marketing Guides | Epic Wolf",
  description:
    "Plain-spoken guides from Epic Wolf on branding, public relations, AI search visibility and brand environments for companies in West Palm Beach and South Florida.",
  path: "/insights",
})

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })

export default function Insights() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])} />
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }]}
        kicker="Insights"
        lines={["Straight answers.", "No fluff."]}
        lead={<p>The questions clients ask us most, answered in full.</p>}
      />
      <section data-tone="light" className="on-light py-20 md:py-28">
        <div className="shell">
          <div className="border-t border-ink/12">
            {guides.map((g, i) => (
              <Reveal key={g.slug} y={24} delay={i * 0.04}>
                <Link href={`/insights/${g.slug}`} className="group grid gap-4 border-b border-ink/12 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                  <p className="t-small muted-light md:col-span-2">{fmt(g.updated)}</p>
                  <div className="md:col-span-7">
                    <h2 className="t-h3 !text-[clamp(1.5rem,2.6vw,2.4rem)] transition-colors group-hover:text-flare-deep">{g.title}</h2>
                    <p className="t-body muted-light mt-4 max-w-[60ch]">{g.description}</p>
                  </div>
                  <span aria-hidden className="hidden self-center justify-self-end text-3xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-3 md:block">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
