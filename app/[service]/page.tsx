import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, serviceBySlug } from "@/lib/services"
import { pillars, serviceIndex, site } from "@/lib/site"
import { serviceImagery } from "@/lib/imagery"
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { FaqList } from "@/components/ui/FaqList"
import { Reveal } from "@/components/ui/Reveal"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { PhotoPair } from "@/components/site/PhotoPair"
import { Filmstrip } from "@/components/site/Filmstrip"
import { KineticBand } from "@/components/site/KineticBand"

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const s = serviceBySlug(service)
  if (!s) return {}
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}`, image: "/og.jpg" })
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const s = serviceBySlug(service)
  if (!s) notFound()

  const idx = serviceIndex.find((x) => x.slug === s.slug)!
  const pillar = pillars.find((p) => p.slug === idx.pillar)!
  const isPillar = pillar.slug === s.slug
  const crumbs = isPillar
    ? [
        { name: "Services", href: "/services" },
        { name: s.name, href: `/${s.slug}` },
      ]
    : [
        { name: "Services", href: "/services" },
        { name: pillar.name, href: `/${pillar.slug}` },
        { name: s.name, href: `/${s.slug}` },
      ]

  const inside = isPillar ? pillar.caps.filter((c) => c.href) : []
  /* Never show the hero photograph twice on one page. */
  const set = serviceImagery[s.slug]
  const fresh = (src: string) => src !== s.image
  const pair = set && set.pair.every((x) => fresh(x.src)) ? set.pair : null
  const side = set && fresh(set.side.src) ? set.side : null
  const strip = set?.strip?.filter((x) => fresh(x.src)) ?? []
  /* Two columns from 640px up: an odd list would leave the last cell empty,
     so an odd count gets a closing card that finishes the row. */
  const oddList = s.deliverables.length % 2 === 1
  const half = Math.ceil(s.vocabulary.length / 2)
  const contactHref = `/contact?interest=${encodeURIComponent(pillar.name)}`

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: s.name, description: s.metaDescription, path: `/${s.slug}` }),
          faqSchema(s.faqs),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
        ]}
      />

      <PageHero crumbs={crumbs} kicker={s.kicker} lines={[s.headline]} lead={<p>{s.summary}</p>} />

      <section data-tone="dark" className="on-dark pb-4">
        <div className="shell">
          <ParallaxImage src={s.image} alt={s.imageAlt} className="aspect-[16/10] md:aspect-[21/9]" priority />
        </div>
      </section>

      {/* Overview */}
      <section data-tone="light" className="on-light py-24 md:py-36">
        <div className="shell grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3">Overview</p>
          <div className="md:col-span-8 md:col-start-5">
            <p className="t-intro">{s.intro[0]}</p>
            <div className="prose-ew t-body muted-light mt-8 max-w-[62ch]">
              {s.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {pair && (
        <section data-tone="light" className="on-light pb-24 md:pb-36">
          <div className="shell">
            <PhotoPair pics={pair} />
          </div>
        </section>
      )}

      {/* What's included */}
      <section data-tone="light" className="on-light pb-24 md:pb-36">
        <div className="shell grid gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-3">What it includes</h2>
          <ul className="grid border-t border-ink/12 sm:grid-cols-2 sm:gap-x-12 md:col-span-8 md:col-start-5">
            {s.deliverables.map((d, i) => (
              <Reveal as="li" key={d.name} delay={(i % 2) * 0.06} y={20} className="border-b border-ink/12 py-6">
                <p className="text-lg font-bold tracking-[-0.01em]">{d.name}</p>
                <p className="t-small muted-light mt-1.5">{d.detail}</p>
              </Reveal>
            ))}
            {oddList && (
              <Reveal as="li" delay={0.06} y={20} className="py-4 sm:py-3">
                <div className="cut-sm flex h-full flex-col justify-between gap-6 bg-flare p-6 text-ink md:p-7">
                  <div>
                    <p className="text-lg font-bold tracking-[-0.01em]">Not sure which of these you need?</p>
                    <p className="t-small mt-1.5 text-ink/80">Tell us the goal and a partner will recommend the right mix.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link href={contactHref} className="btn btn-ink">
                      Start a project <span className="arrow" aria-hidden>→</span>
                    </Link>
                    <a href={site.phoneHref} className="link-draw font-bold tabular-nums">
                      {site.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      {/* Capabilities inside a discipline */}
      {inside.length > 0 && (
        <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
          <div className="shell grid gap-10 md:grid-cols-12">
            <h2 className="label md:col-span-3">Inside {pillar.name.toLowerCase()}</h2>
            <div className="md:col-span-8 md:col-start-5">
              {inside.map((c) => {
                const sub = serviceBySlug(c.href!.slice(1))
                return (
                  <Link key={c.href} href={c.href!} className="group flex items-center gap-5 border-b border-ink/12 py-6 first:border-t md:gap-8">
                    {sub && (
                      <span className="cut-sm relative aspect-[4/3] w-24 shrink-0 overflow-hidden bg-ink-3 md:w-40">
                        <Image src={sub.image} alt="" fill sizes="160px" className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.06]" />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="t-h3 transition-colors group-hover:text-flare-deep">{c.name}</span>
                      {sub && <span className="t-small muted-light mt-1.5 block max-w-[52ch]">{sub.summary}</span>}
                    </span>
                    <span aria-hidden className="hidden text-2xl transition-transform duration-500 group-hover:translate-x-1.5 sm:block">
                      →
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {strip.length >= 4 && (
        <section data-tone="dark" className="on-dark py-20 md:py-28">
          <p className="label shell mb-8 md:mb-12">{set?.stripLabel}</p>
          <Filmstrip pics={strip} label={set?.stripLabel ?? s.name} />
        </section>
      )}

      <KineticBand
        label="Also searched as"
        rows={[
          { items: s.vocabulary.slice(0, half), dir: -1 },
          { items: s.vocabulary.slice(half), dir: 1 },
        ]}
      />

      {/* Approach */}
      <section data-tone="dark" className="on-dark grain relative py-24 md:py-36">
        <div className="shell relative z-[2]">
          <h2 className="t-h2 max-w-[14ch]">How the work runs</h2>
          <div className="mt-14 border-t border-white/12 md:mt-20">
            {s.approach.map((a, i) => (
              <Reveal key={a.title} y={24} delay={i * 0.04} className="grid gap-3 border-b border-white/12 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <p className="t-h3 md:col-span-4">{a.title}</p>
                <p className="t-body muted-dark md:col-span-7 md:col-start-6">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it connects */}
      <section data-tone="light" className="on-light py-24 md:py-36">
        <div className="shell grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3 md:row-start-1">How it connects</p>
          <div className="md:col-span-8 md:col-start-5 md:row-span-2 md:row-start-1">
            <p className="t-intro">{s.oneTeam}</p>
            <p className="t-body muted-light mt-10">
              <span className="font-semibold text-ink">Built for </span>
              {s.audiences.map((a, i) => (
                <span key={a}>
                  {a.charAt(0).toLowerCase() + a.slice(1)}
                  {i < s.audiences.length - 2 ? ", " : i === s.audiences.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
            {!isPillar && (
              <p className="mt-10">
                <Link href={`/${pillar.slug}`} className="link-draw font-semibold">
                  Part of our {pillar.name.toLowerCase()} practice
                </Link>
              </p>
            )}
          </div>
          {side && (
            <Reveal y={32} className="md:col-span-3 md:row-start-2 md:self-start">
              <ParallaxImage src={side.src} alt={side.alt} frame="cut-sm" travel={9} sizes="(min-width: 768px) 24vw, 92vw" className="aspect-[4/3] md:aspect-[4/5]" />
            </Reveal>
          )}
        </div>
      </section>

      <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Questions</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">{s.name} questions answered</h2>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={s.faqs} />
          </div>
        </div>
      </section>

      {!isPillar && s.related.length > 0 && (
        <section data-tone="light" className="on-light py-16">
          <div className="shell flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <p className="font-semibold">Keep reading</p>
            {s.related.map((r) => {
              const x = serviceBySlug(r)
              return x ? (
                <Link key={r} href={`/${r}`} className="link-draw muted-light">
                  {x.name}
                </Link>
              ) : null
            })}
          </div>
        </section>
      )}

      <CtaBand interest={pillar.name} />
    </>
  )
}
