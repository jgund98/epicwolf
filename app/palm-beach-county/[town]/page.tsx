import Link from "next/link"
import { notFound } from "next/navigation"
import { cities, cityBySlug } from "@/lib/cities"
import { guideBySlug } from "@/lib/guides"
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { FaqList } from "@/components/ui/FaqList"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { Reveal } from "@/components/ui/Reveal"
import { KineticBand } from "@/components/site/KineticBand"
import { townImage } from "@/lib/imagery"
import { PillarCards } from "@/components/site/PillarCards"

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
  const photo = townImage(c.slug, cities.indexOf(c))

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

      <section data-tone="light" className="on-light pb-24 md:pb-32">
        <div className="shell">
          <Reveal y={40}>
            <ParallaxImage src={photo.src} alt={photo.alt} className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]" />
          </Reveal>
        </div>
      </section>

      <section data-tone="dark" className="on-dark py-24 md:py-32">
        <div className="shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="t-h2">The market</h2>
            <p className="t-body muted-dark mt-6">{c.angle}</p>
          </div>
          {/* One list, not two side by side: corridor and industry counts differ
              by town, and two uneven columns leave a hole under the shorter one.
              The corridors get the orange band below instead. */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-semibold">Who we see there</p>
            <ul className="mt-4 border-t border-white/12">
              {c.industries.map((x, i) => (
                <Reveal as="li" key={x} y={16} delay={i * 0.04} className="t-lead border-b border-white/12 py-4 text-paper/85">
                  {x}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <KineticBand label={`Where business happens in ${c.name}`} rows={[{ items: c.corridors, dir: -1, dur: 60 }]} size="lg" />

      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">On the ground</p>
            <h2 className="t-h2 mt-4 max-w-[14ch]">What to know before you market in {c.name}</h2>
          </div>
          <div className="md:col-span-8">
            <dl className="border-t border-ink/12">
              {c.ground.map((g, i) => (
                <Reveal key={g.title} y={16} delay={i * 0.04} className="grid gap-x-10 gap-y-3 border-b border-ink/12 py-7 sm:grid-cols-[11rem_1fr]">
                  <dt className="t-lead font-semibold">{g.title}</dt>
                  <dd>
                    <p className="t-body muted-light max-w-[58ch]">{g.body}</p>
                    <p className="mt-3 text-sm">
                      <span className="muted-light">Source: </span>
                      <a href={g.source.href} target="_blank" rel="noopener" className="link-draw font-semibold">
                        {g.source.label}
                      </a>
                    </p>
                  </dd>
                </Reveal>
              ))}
            </dl>
            <p className="mt-10 font-semibold">Further reading</p>
            <ul className="mt-3 grid gap-2">
              {c.guides.map((slug) => {
                const g = guideBySlug(slug)
                return g ? (
                  <li key={slug}>
                    <Link href={`/insights/${slug}`} className="link-draw muted-light">
                      {g.title}
                    </Link>
                  </li>
                ) : null
              })}
            </ul>
          </div>
        </div>
      </section>

      <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
        <div className="shell">
          <h2 className="t-h2 max-w-[18ch]">What we bring to {c.name}</h2>
          <PillarCards className="mt-12 md:mt-16" />
        </div>
      </section>

      <section data-tone="light" className="on-light py-24 md:py-32">
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
