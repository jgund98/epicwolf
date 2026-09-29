import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { partners, partnerBySlug } from "@/lib/partners"
import { site } from "@/lib/site"
import { breadcrumbSchema, faqSchema, ORG_ID, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { FaqList } from "@/components/ui/FaqList"
import { Reveal } from "@/components/ui/Reveal"
import { WM_EPIC, WM_H, WM_WOLF } from "@/components/brand/wordmark"

export function generateStaticParams() {
  return partners.map((p) => ({ partner: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ partner: string }> }) {
  const p = partnerBySlug((await params).partner)
  if (!p) return {}
  return pageMeta({ title: p.metaTitle, description: p.metaDescription, path: `/about/${p.slug}`, image: "/og.jpg" })
}

export default async function PartnerPage({ params }: { params: Promise<{ partner: string }> }) {
  const p = partnerBySlug((await params).partner)
  if (!p) notFound()
  const path = `/about/${p.slug}`
  const other = partners.find((x) => x.slug !== p.slug)!
  const word = p.slug === "shawn-wolf" ? WM_WOLF : WM_EPIC

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}${path}#person`,
    name: p.name,
    givenName: p.first,
    jobTitle: p.role,
    description: p.lead,
    url: `${site.url}${path}`,
    image: `${site.url}${p.img}`,
    worksFor: [
      { "@id": ORG_ID },
      {
        "@type": "Organization",
        name: p.company.name,
        url: p.company.url,
        ...(p.company.foundingDate ? { foundingDate: p.company.foundingDate, founder: { "@id": `${site.url}${path}#person` } } : {}),
      },
    ],
    workLocation: { "@type": "Place", name: `${site.city}, ${site.regionName}` },
    knowsAbout: p.knowsAbout,
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "About", path: "/about" },
            { name: p.name, path },
          ]),
          person,
          faqSchema(p.faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "About", href: "/about" },
          { name: p.name, href: path },
        ]}
        kicker={p.role}
        lines={[p.name]}
        lead={<p>{p.lead}</p>}
      />

      {/* Portrait on signal orange, in front of the partner's half of the wordmark */}
      <section data-tone="light" className="relative overflow-hidden bg-flare text-ink">
        <div className="shell relative pt-14 md:pt-20">
          <svg viewBox={`0 0 ${word.w} ${WM_H}`} className="absolute inset-x-[var(--gutter)] top-[18%] h-auto w-[calc(100%-2*var(--gutter))]" aria-hidden>
            {word.letters.map((l, i) => (
              <path key={i} d={l.d} fill="#0a0a0b" />
            ))}
          </svg>
          <div className="relative mx-auto aspect-[1000/1120] w-[min(88vw,34rem)]">
            <Image src={p.cut} alt={`${p.name}, ${p.role} at Epic Wolf`} fill priority sizes="(min-width: 768px) 34rem, 88vw" className="object-contain object-bottom" />
          </div>
        </div>
      </section>

      {/* Background and facts */}
      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label">Background</p>
            <h2 className="t-h2 mt-4 max-w-[18ch]">{p.headline}</h2>
            <div className="prose-ew t-body muted-light mt-8 max-w-[62ch]">
              {p.background.map((b) => (
                <p key={b.slice(0, 24)}>{b}</p>
              ))}
            </div>
          </div>
          <Reveal className="md:col-span-4 md:col-start-9">
            <dl className="grid grid-cols-1 border-t border-ink/12 sm:grid-cols-2 md:grid-cols-1">
              {p.facts.map((f) => (
                <div key={f.k} className="border-b border-ink/12 py-5">
                  <dt className="text-sm font-semibold muted-light">{f.k}</dt>
                  <dd className="mt-1 text-lg font-bold tracking-[-0.01em]">
                    {f.href ? (
                      <a href={f.href} className="link-draw" rel="noopener">
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* What the partner leads */}
      <section data-tone="dark" className="on-dark py-24 md:py-32">
        <div className="shell">
          <p className="label">At Epic Wolf</p>
          <h2 className="t-h2 mt-4 max-w-[16ch]">What {p.first} leads</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {p.leads.map((l) => (
              <Link key={l.t} href={l.href} className="group flex flex-col justify-between rounded-[18px] border border-white/12 p-7 transition-colors hover:border-flare md:min-h-[15rem]">
                <p className="t-h3">{l.t}</p>
                <p className="t-body muted-dark mt-6">{l.b}</p>
                <span className="mt-6 font-bold text-flare">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="t-body muted-dark mt-12 max-w-[60ch]">
            Every client works with both partners, from West Palm Beach to{" "}
            <Link href="/palm-beach-county/palm-beach" className="link-draw font-bold text-paper">
              Palm Beach island
            </Link>
            .{" "}
            <Link href={`/about/${other.slug}`} className="link-draw font-bold text-paper">
              Meet {other.first}
            </Link>
            , or read{" "}
            <Link href="/about" className="link-draw font-bold text-paper">
              about Epic Wolf
            </Link>
            .
          </p>
        </div>
      </section>

      <section data-tone="light" className="on-light py-24 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Questions</p>
            <h2 className="t-h2 mt-4 max-w-[12ch]">About {p.first}</h2>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={p.faqs} />
          </div>
        </div>
      </section>

      <CtaBand line={`Talk to ${p.first} directly.`} />
    </>
  )
}
