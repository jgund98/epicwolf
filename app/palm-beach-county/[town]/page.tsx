import Link from "next/link"
import { notFound } from "next/navigation"
import { cities, cityBySlug } from "@/lib/cities"
import { pillars } from "@/lib/site"
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { FaqList } from "@/components/ui/FaqList"

export const dynamicParams = false
export function generateStaticParams() {
  return cities.map((c) => ({ town: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }) {
  const { town } = await params
  const c = cityBySlug(town)
  if (!c) return {}
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/palm-beach-county/${c.slug}` })
}

export default async function Town({ params }: { params: Promise<{ town: string }> }) {
  const { town } = await params
  const c = cityBySlug(town)
  if (!c) notFound()
  const path = `/palm-beach-county/${c.slug}`

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: `Branding and marketing in ${c.name}`, description: c.metaDescription, path, area: c.name }),
          faqSchema(c.faqs),
          breadcrumbSchema([
            { name: "Where we work", path: "/palm-beach-county" },
            { name: c.name, path },
          ]),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Where we work", href: "/palm-beach-county" },
          { name: c.name, href: path },
        ]}
        kicker={`Branding and marketing agency serving ${c.name}, FL`}
        lines={[c.headline]}
      />

      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3">{c.name}</p>
          <div className="md:col-span-8 md:col-start-5">
            <p className="t-intro">{c.intro[0]}</p>
            <div className="prose-ew t-body muted-light mt-8 max-w-[62ch]">
              {c.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-tone="dark" className="on-dark py-24 md:py-32">
        <div className="shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="t-h2">The market</h2>
            <p className="t-body muted-dark mt-6">{c.angle}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            <div>
              <p className="font-semibold">Where business happens</p>
              <ul className="mt-4 border-t border-white/12">
                {c.corridors.map((x) => (
                  <li key={x} className="muted-dark border-b border-white/12 py-3">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Who we see there</p>
              <ul className="mt-4 border-t border-white/12">
                {c.industries.map((x) => (
                  <li key={x} className="muted-dark border-b border-white/12 py-3">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell">
          <h2 className="t-h2 max-w-[18ch]">What we bring to {c.name}</h2>
          <div className="mt-12 border-t border-ink/12">
            {pillars.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group grid gap-2 border-b border-ink/12 py-7 md:grid-cols-12 md:gap-10">
                <span className="t-h3 transition-colors group-hover:text-flare-deep md:col-span-5">{p.name}</span>
                <span className="t-body muted-light md:col-span-6 md:col-start-7">{p.line}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Questions</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">Working with us in {c.name}</h2>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={c.faqs} />
            <p className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
              <span className="font-semibold">Nearby</span>
              {c.nearby.map((n) => {
                const x = cityBySlug(n)
                return x ? (
                  <Link key={n} href={`/palm-beach-county/${n}`} className="link-draw muted-light">
                    {x.name}
                  </Link>
                ) : null
              })}
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
