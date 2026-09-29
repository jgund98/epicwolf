import Link from "next/link"
import { notFound } from "next/navigation"
import { guides, guideBySlug } from "@/lib/guides"
import { serviceBySlug } from "@/lib/services"
import { abs, site } from "@/lib/site"
import { breadcrumbSchema, faqSchema, ORG_ID, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { CtaBand } from "@/components/site/CtaBand"
import { FaqList } from "@/components/ui/FaqList"
import { LineReveal, Reveal } from "@/components/ui/Reveal"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { guideImagery } from "@/lib/imagery"

export const dynamicParams = false
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const g = guideBySlug(slug)
  if (!g) return {}
  return pageMeta({ title: `${g.title} | Epic Wolf`, description: g.description, path: `/insights/${g.slug}`, type: "article" })
}

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
const id = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const g = guideBySlug(slug)
  if (!g) notFound()
  const path = `/insights/${g.slug}`
  const pics = guideImagery[g.slug]
  /* The second photograph lands halfway through, where a long read needs a breath. */
  const breakAfter = Math.floor(g.sections.length / 2) - 1

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.title,
            description: g.description,
            datePublished: g.published,
            dateModified: g.updated,
            author: { "@type": "Organization", "@id": ORG_ID, name: site.name },
            publisher: { "@id": ORG_ID },
            mainEntityOfPage: abs(path),
            image: abs("/og.jpg"),
          },
          faqSchema(g.faqs),
          breadcrumbSchema([
            { name: "Insights", path: "/insights" },
            { name: g.title, path },
          ]),
        ]}
      />

      <section data-tone="dark" className="on-dark pb-16 pt-[calc(var(--header-h)+3.5rem)] md:pb-24 md:pt-[calc(var(--header-h)+6rem)]">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
            <Link href="/insights" className="hover:text-paper">
              Insights
            </Link>
          </nav>
          <LineReveal as="h1" className="t-h2 !text-[clamp(2.2rem,5vw,4.6rem)] max-w-[20ch]" lines={[g.title]} />
          <p className="t-small muted-dark mt-8">
            Updated {fmt(g.updated)} by the {site.name} team
          </p>
        </div>
      </section>

      {pics && (
        <section data-tone="dark" className="on-dark pb-4">
          <div className="shell">
            <ParallaxImage src={pics.lead.src} alt={pics.lead.alt} className="aspect-[16/10] md:aspect-[21/9]" priority />
          </div>
        </section>
      )}

      <article data-tone="light" className="on-light py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          {/* Sticky, so the contents column travels with the article instead of
              leaving a tall empty strip beside it. */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
            <p className="font-semibold">In this guide</p>
            <ol className="mt-4 space-y-3 text-[0.95rem]">
              {g.sections.map((s) => (
                <li key={s.h2}>
                  <a href={`#${id(s.h2)}`} className="muted-light hover:text-ink">
                    {s.h2}
                  </a>
                </li>
              ))}
            </ol>
            <div className="cut-sm mt-10 bg-ink p-6 text-paper">
              <p className="text-lg font-bold leading-snug tracking-[-0.01em]">Rather talk it through?</p>
              <p className="t-small muted-dark mt-2">A partner will answer the version of this question that fits your business.</p>
              <a href={site.phoneHref} className="link-draw mt-5 inline-block text-lg font-bold tabular-nums">
                {site.phone}
              </a>
              <Link href="/contact" className="btn btn-flare mt-5 !h-11 !px-5 !text-[0.95rem]">
                Start a project <span className="arrow" aria-hidden>→</span>
              </Link>
            </div>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <Reveal y={24} className="cut-sm bg-flare p-7 text-ink md:p-10">
              <p className="label label-paper">The short answer</p>
              <p className="t-lead mt-4 font-semibold">{g.summary}</p>
            </Reveal>

            {g.sections.map((s, si) => (
              <section key={s.h2} id={id(s.h2)} className="scroll-mt-28 pt-16">
                <h2 className="t-h3 !text-[clamp(1.5rem,2.4vw,2.2rem)]">{s.h2}</h2>
                <p className="t-lead mt-5 font-semibold">{s.answer}</p>
                {s.body?.map((p, i) => (
                  <p key={i} className="t-body muted-light mt-5 max-w-[68ch]">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-6 border-t border-ink/12">
                    {s.list.map((li) => (
                      <li key={li} className="t-body border-b border-ink/12 py-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="mt-8 overflow-x-auto rounded-[16px] border border-ink/12">
                    <table className="w-full min-w-[34rem] text-left text-[0.95rem]">
                      <thead className="bg-paper-2">
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} className="px-5 py-3.5 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r, i) => (
                          <tr key={i} className="border-t border-ink/10">
                            {r.map((c, k) => (
                              <td key={k} className={`px-5 py-3.5 ${k === 0 ? "font-semibold" : "muted-light"}`}>
                                {c}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {pics && si === breakAfter && (
                  <Reveal as="figure" y={32} className="mt-16">
                    <ParallaxImage src={pics.inline.src} alt={pics.inline.alt} frame="cut-flip" travel={8} sizes="(min-width: 1024px) 62vw, 92vw" className="aspect-[16/10]" />
                  </Reveal>
                )}
              </section>
            ))}

            <section className="pt-20">
              <h2 className="t-h3 !text-[clamp(1.5rem,2.4vw,2.2rem)]">Frequently asked</h2>
              <div className="mt-6">
                <FaqList faqs={g.faqs} />
              </div>
            </section>

            {g.sources && g.sources.length > 0 && (
              <section className="pt-16">
                <p className="font-semibold">Sources</p>
                <ul className="mt-3 space-y-2 text-[0.9rem]">
                  {g.sources.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} rel="nofollow noopener" target="_blank" className="muted-light underline decoration-ink/20 underline-offset-4 hover:text-ink">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {g.related.length > 0 && (
              <p className="mt-16 flex flex-wrap gap-x-6 gap-y-2">
                <span className="font-semibold">Related</span>
                {g.related.map((r) => {
                  const s = serviceBySlug(r)
                  return s ? (
                    <Link key={r} href={`/${r}`} className="link-draw muted-light">
                      {s.name}
                    </Link>
                  ) : null
                })}
              </p>
            )}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  )
}
