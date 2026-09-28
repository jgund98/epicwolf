import Link from "next/link"
import { cities } from "@/lib/cities"
import { breadcrumbSchema, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { Reveal } from "@/components/ui/Reveal"
import { LazyVideo } from "@/components/ui/LazyVideo"

export const metadata = pageMeta({
  title: "Branding and Marketing Agency for Palm Beach County | Epic Wolf",
  description:
    "Epic Wolf is based in West Palm Beach and works with companies across Palm Beach County, from Jupiter and Palm Beach Gardens to Wellington, Delray Beach and Boca Raton.",
  path: "/palm-beach-county",
})

export default function County() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Where we work", path: "/palm-beach-county" }])} />
      <PageHero
        crumbs={[{ name: "Where we work", href: "/palm-beach-county" }]}
        kicker="Branding and marketing across Palm Beach County"
        lines={["Local roots.", "Regional reach."]}
        lead={
          <p>
            We&rsquo;re based in West Palm Beach and work across the county, South Florida and beyond. Every town here
            has its own market, its own corridors and its own way of reading a brand.
          </p>
        }
      />

      <section data-tone="dark" className="on-dark relative isolate overflow-hidden">
        <LazyVideo src="/video/shore.mp4" poster="/video/shore.jpg" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/60 to-ink" />
        <div className="shell py-24 md:py-32">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal as="li" key={c.slug} y={20} delay={(i % 3) * 0.05} className="border-b border-white/15">
                <Link href={`/palm-beach-county/${c.slug}`} className="group flex items-baseline justify-between gap-4 py-6">
                  <span className="t-h3 transition-colors group-hover:text-flare">{c.name}</span>
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
