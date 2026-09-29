import Link from "next/link"
import { pillars } from "@/lib/site"
import { serviceBySlug } from "@/lib/services"
import { breadcrumbSchema, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { Reveal } from "@/components/ui/Reveal"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { Kinetic } from "@/components/home/Kinetic"

export const metadata = pageMeta({
  title: "Services | Branding, Digital Marketing and Business Development | Epic Wolf",
  description:
    "Epic Wolf works in three disciplines: branding and public relations, digital marketing, and business development, for companies in West Palm Beach, Palm Beach County and South Florida.",
  path: "/services",
})

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        kicker="Branding, PR and marketing services"
        lines={["Three disciplines.", "One point of view."]}
        lead={
          <p>
            We keep the list short on purpose. Every engagement draws on the same three disciplines, and all three carry
            one idea to the market.
          </p>
        }
      />

      <Kinetic />

      {pillars.map((p, i) => {
        const s = serviceBySlug(p.slug)!
        const dark = i % 2 === 1
        return (
          <section key={p.slug} data-tone={dark ? "dark" : "light"} className={`${dark ? "on-dark" : "on-light"} py-24 md:py-36`}>
            <div className="shell grid gap-12 md:grid-cols-12 md:items-center">
              <Reveal className={`md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`} y={40}>
                <ParallaxImage
                  src={s.image}
                  alt={s.imageAlt}
                  frame={i % 2 ? "cut-flip" : "cut"}
                  travel={6}
                  position="50% 20%"
                  sizes="(min-width: 768px) 46vw, 92vw"
                  className="aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3]"
                />
              </Reveal>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
                <h2 className="t-poster !text-[clamp(2.4rem,5vw,4.8rem)]">{p.name}</h2>
                <p className="t-lead mt-6 font-semibold">{s.headline}.</p>
                <p className={`t-body mt-4 ${dark ? "muted-dark" : "muted-light"}`}>{s.summary}</p>
                <ul className={`mt-8 border-t ${dark ? "border-white/12" : "border-ink/12"}`}>
                  {p.caps.map((c) => (
                    <li key={c.name} className={`border-b py-3.5 ${dark ? "border-white/12" : "border-ink/12"}`}>
                      {c.href ? (
                        <Link href={c.href} className="group flex items-center justify-between font-semibold">
                          {c.name}
                          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      ) : (
                        <span className={dark ? "text-paper/85" : "text-ink/85"}>{c.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <Link href={`/${p.slug}`} className={`btn mt-9 ${dark ? "btn-flare" : "btn-ink"}`}>
                  Explore {p.name.toLowerCase()} <span className="arrow" aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </section>
        )
      })}

      <CtaBand />
    </>
  )
}
