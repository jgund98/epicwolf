import Link from "next/link"
import { cities } from "@/lib/cities"
import { breadcrumbSchema, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { Reveal } from "@/components/ui/Reveal"
import { LazyVideo } from "@/components/ui/LazyVideo"
import { LineReveal } from "@/components/ui/Reveal"
import { KineticBand } from "@/components/site/KineticBand"
import { PhotoPair } from "@/components/site/PhotoPair"
import { pageImagery } from "@/lib/imagery"

export const metadata = pageMeta({
  title: "Branding and Marketing Agency for Palm Beach County | Epic Wolf",
  description:
    "Epic Wolf is based in West Palm Beach and works with companies across Palm Beach County, from Jupiter and Palm Beach Gardens to Wellington, Delray Beach and Boca Raton.",
  path: "/palm-beach-county",
})

export default function County() {
  const half = Math.ceil(cities.length / 2)
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

      <KineticBand
        label="From Jupiter to Boca Raton"
        rows={[
          { items: cities.slice(0, half).map((c) => c.name), dir: -1 },
          { items: cities.slice(half).map((c) => c.name), dir: 1 },
        ]}
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
      <section data-tone="light" className="on-light py-24 md:py-36">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6">
              <p className="label">Why the town matters</p>
              <LineReveal as="h2" className="t-h2 mt-4 max-w-[14ch]" lines={["Every town is its own market"]} />
            </div>
            <p className="t-lead muted-light md:col-span-5 md:col-start-8 md:self-end">
              A gallery on Worth Avenue, a restaurant on Atlantic Avenue and a family office on Flagler Drive need
              different things from the same agency. We start with the street the business sits on and the customers
              who actually walk it.
            </p>
          </div>
          <PhotoPair pics={pageImagery.countyPair} className="mt-14 md:mt-20" />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
