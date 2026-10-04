import Link from "next/link"
import { notFound } from "next/navigation"
import { localServices, localBy, localForTown } from "@/lib/local-services"
import { cityBySlug } from "@/lib/cities"
import { serviceBySlug } from "@/lib/services"
import { guideBySlug } from "@/lib/guides"
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
  return localServices.map((l) => ({ town: l.town, service: l.service }))
}

export async function generateMetadata({ params }: { params: Promise<{ town: string; service: string }> }) {
  const { town, service } = await params
  const l = localBy(town, service)
  if (!l) return {}
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: `/palm-beach-county/${l.town}/${l.service}`, image: "/og.jpg" })
}

export default async function LocalService({ params }: { params: Promise<{ town: string; service: string }> }) {
  const { town, service } = await params
  const l = localBy(town, service)
  const c = cityBySlug(town)
  const s = serviceBySlug(service)
  if (!l || !c || !s) notFound()

  const path = `/palm-beach-county/${c.slug}/${s.slug}`
  const pillar = pillars.find((p) => p.slug === serviceIndex.find((x) => x.slug === s.slug)!.pillar)!
  const label = `${s.name} in ${c.name}`
  /* Two columns from 640px up: an odd list gets a closing card so no cell sits empty. */
  const scope = s.deliverables.filter((d) => !l.omit?.includes(d.name))
  const oddList = scope.length % 2 === 1
  const siblings = localForTown(c.slug).filter((x) => x.service !== s.slug)
  const elsewhere = localServices.filter((x) => x.service === s.slug && x.town !== c.slug)

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: label, description: l.metaDescription, path, area: c.name }),
          faqSchema(l.faqs),
          breadcrumbSchema([
            { name: "Where we work", path: "/palm-beach-county" },
            { name: c.name, path: `/palm-beach-county/${c.slug}` },
            { name: s.name, path },
          ]),
        ]}
      />

      <PageHero
        crumbs={[
          { name: "Where we work", href: "/palm-beach-county" },
          { name: c.name, href: `/palm-beach-county/${c.slug}` },
          { name: s.name, href: path },
        ]}
        kicker={l.kicker}
        lines={[l.headline]}
        lead={<p>{l.answer}</p>}
      >
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
          <ParallaxImage src={l.image.src} alt={l.image.alt} className="aspect-[16/10] md:aspect-[21/9]" priority />
        </div>
      </section>

      {/* Overview */}
      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3">{label}</p>
          <div className="md:col-span-8 md:col-start-5">
            <p className="t-intro">{l.intro[0]}</p>
            <div className="prose-ew t-body muted-light mt-8 max-w-[62ch]">
              {l.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* On the ground: the facts only true here, each with its source */}
      <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">On the ground</p>
            <h2 className="t-h2 mt-4 max-w-[14ch]">What to know about {s.name.toLowerCase()} in {c.name}</h2>
          </div>
          <dl className="border-t border-ink/12 md:col-span-8">
            {l.ground.map((g, i) => (
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

      {/* How the work runs here */}
      <section data-tone="dark" className="on-dark grain relative py-24 md:py-32">
        <div className="shell relative z-[2]">
          <h2 className="t-h2 max-w-[16ch]">How we run it in {c.name}</h2>
          <div className="mt-14 border-t border-white/12 md:mt-20">
            {l.plan.map((a, i) => (
              <Reveal key={a.title} y={24} delay={i * 0.04} className="grid gap-3 border-b border-white/12 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <p className="t-h3 md:col-span-4">{a.title}</p>
                <p className="t-body muted-dark md:col-span-7 md:col-start-6">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope, closed by the mid-page call to action */}
      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-3">What it includes</h2>
          <ul className="grid border-t border-ink/12 sm:grid-cols-2 sm:gap-x-12 md:col-span-8 md:col-start-5">
            {scope.map((d, i) => (
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
                <p className="t-h3">{l.cta.line}</p>
                <p className="t-body mt-3 text-ink/80">{l.cta.body}</p>
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

      {/* Questions, then the reading and the rest of the local work */}
      <section data-tone="light" className="bg-paper-2 py-24 text-ink md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Questions</p>
            <h2 className="t-h2 mt-4 max-w-[13ch]">{label} questions answered</h2>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={l.faqs} />
          </div>
        </div>
      </section>

      <section data-tone="light" className="on-light py-20 md:py-28">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Keep reading</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">More for {c.name} businesses</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-ink/12">
              {l.guides.map((slug) => {
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
            <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              <span className="font-semibold">In {c.name}</span>
              {siblings.map((x) => (
                <Link key={x.service} href={`/palm-beach-county/${c.slug}/${x.service}`} className="link-draw muted-light">
                  {serviceBySlug(x.service)?.name}
                </Link>
              ))}
              <Link href={`/palm-beach-county/${c.slug}`} className="link-draw muted-light">
                Marketing in {c.name}
              </Link>
            </p>
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <span className="font-semibold">{s.name} elsewhere</span>
              <Link href={`/${s.slug}`} className="link-draw muted-light">
                West Palm Beach
              </Link>
              {elsewhere.map((x) => (
                <Link key={x.town} href={`/palm-beach-county/${x.town}/${s.slug}`} className="link-draw muted-light">
                  {cityBySlug(x.town)?.name}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* The form lives on the page: one step from reading to asking. */}
      <section id="start" data-tone="dark" className="on-dark scroll-mt-24 py-24 md:py-32">
        <div className="shell grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label">Start a project</p>
            <h2 className="t-h2 mt-4 max-w-[16ch]">Tell us what you are building in {c.name}</h2>
            <div className="mt-12">
              <ContactForm source={`${label} page`} defaultInterest={pillar.name} />
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
              <p className="font-semibold">Beyond {c.name}</p>
              <p className="t-body muted-dark mt-3">
                We are based in West Palm Beach and take work across South Florida and around the country. Palm Beach County is where we live, so it is where we know the rules by heart.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
