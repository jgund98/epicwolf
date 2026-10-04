import Link from "next/link"
import { notFound } from "next/navigation"
import { topics, topicBy, topicsFor } from "@/lib/topics"
import { serviceBySlug } from "@/lib/services"
import { guideBySlug } from "@/lib/guides"
import { localForService } from "@/lib/local-services"
import { cityBySlug } from "@/lib/cities"
import { pillars, serviceIndex, site } from "@/lib/site"
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { FaqList } from "@/components/ui/FaqList"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { Reveal } from "@/components/ui/Reveal"
import { ContactForm } from "@/components/ui/ContactForm"

export const dynamicParams = false
export function generateStaticParams() {
  return topics.map((t) => ({ service: t.service, topic: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; topic: string }> }) {
  const { service, topic } = await params
  const t = topicBy(service, topic)
  if (!t) return {}
  return pageMeta({ title: t.metaTitle, description: t.metaDescription, path: `/${t.service}/${t.slug}`, image: "/og.jpg" })
}

export default async function TopicPage({ params }: { params: Promise<{ service: string; topic: string }> }) {
  const { service, topic } = await params
  const t = topicBy(service, topic)
  const s = serviceBySlug(service)
  if (!t || !s) notFound()

  const path = `/${s.slug}/${t.slug}`
  const pillar = pillars.find((p) => p.slug === serviceIndex.find((x) => x.slug === s.slug)!.pillar)!
  const crumbs = [
    { name: "Services", href: "/services" },
    { name: s.name, href: `/${s.slug}` },
    { name: t.name, href: path },
  ]
  /* Two columns from 640px up: an odd list gets a closing card so no cell sits empty. */
  const oddList = t.includes.length % 2 === 1
  const related = t.related.map((r) => topicBy(s.slug, r)).filter((x): x is NonNullable<typeof x> => Boolean(x))
  const siblings = related.length ? related : topicsFor(s.slug).filter((x) => x.slug !== t.slug).slice(0, 4)
  const towns = localForService(s.slug)

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: t.name, description: t.metaDescription, path }),
          faqSchema(t.faqs),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
        ]}
      />

      <PageHero crumbs={crumbs} kicker={t.kicker} lines={[t.headline]} lead={<p>{t.answer}</p>}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#start" className="btn btn-flare">
            Start a project <span className="arrow" aria-hidden>→</span>
          </a>
          <a href={site.phoneHref} className="btn btn-line tabular-nums">
            {site.phone}
          </a>
        </div>
      </PageHero>

      <section data-tone="dark" className="on-dark pb-4">
        <div className="shell">
          <ParallaxImage src={t.image.src} alt={t.image.alt} className="aspect-[16/10] md:aspect-[21/9]" priority />
        </div>
      </section>

      {/* Overview */}
      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3">{t.name}</p>
          <div className="md:col-span-8 md:col-start-5">
            <p className="t-intro">{t.intro[0]}</p>
            <div className="prose-ew t-body muted-light mt-8 max-w-[62ch]">
              {t.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What it includes, closed by the mid-page call to action */}
      <section data-tone="light" className="on-light pb-24 md:pb-32">
        <div className="shell grid gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-3">What it includes</h2>
          <ul className="grid border-t border-ink/12 sm:grid-cols-2 sm:gap-x-12 md:col-span-8 md:col-start-5">
            {t.includes.map((d, i) => (
              <Reveal as="li" key={d.name} delay={(i % 2) * 0.06} y={20} className="border-b border-ink/12 py-6">
                <p className="text-lg font-bold tracking-[-0.01em]">{d.name}</p>
                <p className="t-small muted-light mt-1.5">{d.detail}</p>
              </Reveal>
            ))}
            {oddList && (
              <Reveal as="li" delay={0.06} y={20} className="py-4 sm:py-3">
                <div className="cut-sm flex h-full flex-col justify-between gap-6 bg-ink p-6 text-paper md:p-7">
                  <p className="text-lg font-bold tracking-[-0.01em]">Not sure which of these you need?</p>
                  <a href="#start" className="link-draw font-bold">
                    Tell us the goal <span aria-hidden>→</span>
                  </a>
                </div>
              </Reveal>
            )}
          </ul>
          <Reveal y={24} className="md:col-span-8 md:col-start-5">
            <div className="cut-sm mt-6 flex flex-col gap-6 bg-flare p-7 text-ink md:flex-row md:items-end md:justify-between md:p-10">
              <div className="max-w-[46ch]">
                <p className="t-h3">{t.cta.line}</p>
                <p className="t-body mt-3 text-ink/80">{t.cta.body}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-3">
                <a href="#start" className="btn btn-ink">
                  Start here <span className="arrow" aria-hidden>→</span>
                </a>
                <a href={site.phoneHref} className="link-draw font-bold tabular-nums">
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to know: the rules and standards, each with its source */}
      <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">What to know</p>
            <h2 className="t-h2 mt-4 max-w-[14ch]">The rules behind {t.name.toLowerCase()}</h2>
          </div>
          <dl className="border-t border-ink/12 md:col-span-8">
            {t.ground.map((g, i) => (
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
        </div>
      </section>

      {/* How the work runs */}
      <section data-tone="dark" className="on-dark grain relative py-24 md:py-32">
        <div className="shell relative z-[2]">
          <h2 className="t-h2 max-w-[14ch]">How the work runs</h2>
          <div className="mt-14 border-t border-white/12 md:mt-20">
            {t.plan.map((a, i) => (
              <Reveal key={a.title} y={24} delay={i * 0.04} className="grid gap-3 border-b border-white/12 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <p className="t-h3 md:col-span-4">{a.title}</p>
                <p className="t-body muted-dark md:col-span-7 md:col-start-6">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Questions</p>
            <h2 className="t-h2 mt-4 max-w-[13ch]">{t.name} questions answered</h2>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={t.faqs} />
          </div>
        </div>
      </section>

      <section data-tone="light" className="bg-paper-2 py-20 text-ink md:py-28">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Keep reading</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">Go deeper before you decide</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-ink/12">
              {t.guides.map((slug) => {
                const g = guideBySlug(slug)
                return g ? (
                  <li key={slug} className="border-b border-ink/12">
                    <Link href={`/insights/${slug}`} className="group flex items-start justify-between gap-6 py-6">
                      <span>
                        <span className="block text-lg font-bold tracking-[-0.01em] group-hover:text-flare-deep">{g.title}</span>
                        <span className="t-small muted-light mt-1 block max-w-[60ch]">{g.description}</span>
                      </span>
                      <span aria-hidden className="mt-1 text-flare">→</span>
                    </Link>
                  </li>
                ) : null
              })}
            </ul>
            {siblings.length > 0 && (
              <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
                <span className="font-semibold">Related</span>
                {siblings.map((x) => (
                  <Link key={x.slug} href={`/${s.slug}/${x.slug}`} className="link-draw muted-light">
                    {x.name}
                  </Link>
                ))}
                <Link href={`/${s.slug}`} className="link-draw muted-light">
                  All {s.name.toLowerCase()}
                </Link>
              </p>
            )}
            {towns.length > 0 && (
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <span className="font-semibold">By town</span>
                <Link href={`/${s.slug}`} className="link-draw muted-light">
                  West Palm Beach
                </Link>
                {towns.map((x) => (
                  <Link key={x.town} href={`/palm-beach-county/${x.town}/${s.slug}`} className="link-draw muted-light">
                    {cityBySlug(x.town)?.name}
                  </Link>
                ))}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* The form lives on the page: one step from reading to asking. */}
      <section id="start" data-tone="dark" className="on-dark scroll-mt-24 py-24 md:py-32">
        <div className="shell grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label">Start a project</p>
            <h2 className="t-h2 mt-4 max-w-[16ch]">Tell us what you are planning</h2>
            <div className="mt-12">
              <ContactForm source={`${t.name} page`} defaultInterest={pillar.name} />
            </div>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="border-t border-white/12 pt-6">
              <p className="font-semibold">What happens next</p>
              <p className="t-body muted-dark mt-3">
                A partner reads your note and replies personally. If there is a fit, we set a working session to learn the business and the goal, then come back with a clear recommendation and scope.
              </p>
            </div>
            <div className="mt-10 border-t border-white/12 pt-6">
              <p className="font-semibold">Talk now</p>
              <p className="t-body muted-dark mt-3">
                Call or text{" "}
                <a href={site.phoneHref} className="link-draw font-semibold text-paper tabular-nums">
                  {site.phone}
                </a>
                .
              </p>
            </div>
            <div className="mt-10 border-t border-white/12 pt-6">
              <p className="font-semibold">Where we work</p>
              <p className="t-body muted-dark mt-3">
                Based in West Palm Beach, working across Palm Beach County, South Florida and with companies around the country.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
