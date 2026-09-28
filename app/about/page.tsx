import { breadcrumbSchema, pageMeta } from "@/lib/seo"
import { site } from "@/lib/site"
import { JsonLd } from "@/components/site/JsonLd"
import { PageHero } from "@/components/site/PageHero"
import { CtaBand } from "@/components/site/CtaBand"
import { Names } from "@/components/home/Names"
import { Reveal } from "@/components/ui/Reveal"
import { ParallaxImage } from "@/components/ui/ParallaxImage"

export const metadata = pageMeta({
  title: "About Epic Wolf | West Palm Beach Branding and Marketing Agency",
  description:
    "Epic Wolf is a West Palm Beach branding, PR, digital marketing and business development agency led by partners Jordan Gundlach and Shawn Wolf.",
  path: "/about",
})

const principles = [
  {
    t: "Strategy before style",
    b: "Nothing gets designed until we can say, in one sentence, why a customer should choose you. The work is judged against that sentence, not against taste.",
  },
  {
    t: "One standard everywhere",
    b: "The press release, the website and the sign out front are held to the same bar and the same voice. Brands are rarely lost in the big moments. They erode in the small ones.",
  },
  {
    t: "Partners in the room",
    b: "Epic Wolf is led by the people who founded it, and they stay close to the work. Decisions are made by people who can make them.",
  },
  {
    t: "Measured in outcomes",
    b: "Recognition, inquiries, pipeline and revenue. We agree on what success looks like at the start and report against it plainly.",
  },
]

export default function About() {
  const person = site.founders.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: f.name,
    jobTitle: f.role,
    worksFor: { "@id": `${site.url}/#org` },
    image: `${site.url}${f.img}`,
  }))
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "About", path: "/about" }]), ...person]} />
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        kicker="About Epic Wolf"
        lines={["Built to be", "noticed."]}
        lead={
          <p>
            Epic Wolf is a branding, digital marketing and business development agency founded in West Palm Beach by
            Jordan Gundlach and Shawn Wolf.
          </p>
        }
      />

      <section data-tone="dark" className="on-dark pb-4">
        <div className="shell">
          <ParallaxImage src="/img/stock/press.jpg" alt="The West Palm Beach skyline across the Intracoastal from the Royal Park Bridge" className="aspect-[16/10] md:aspect-[21/9]" priority />
        </div>
      </section>

      <section data-tone="light" className="on-light py-24 md:py-36">
        <div className="shell grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3">Why it exists</p>
          <div className="md:col-span-8 md:col-start-5">
            <p className="t-intro">
              Most companies hire one firm for the story, another for the website, a third for the ads and someone
              else for the sign. Each does fine work. None of it adds up to one brand.
            </p>
            <div className="prose-ew t-body muted-light mt-8 max-w-[62ch]">
              <p>
                Epic Wolf was started to fix that. Shawn has put brands on storefronts, apparel and printed goods since
                founding SM Wolf Creative Agency in 2001. Jordan built Epic Development Solutions around websites,
                software and the systems growing companies run on. Together they lead an agency where the strategy,
                the story and the execution come from one place.
              </p>
              <p>
                We are based in {site.city} and work with companies across Palm Beach County, South Florida and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-tone="dark" className="on-dark grain relative py-24 md:py-36">
        <div className="shell relative z-[2]">
          <h2 className="t-h2 max-w-[14ch]">How we work</h2>
          <div className="mt-14 border-t border-white/12 md:mt-20">
            {principles.map((p, i) => (
              <Reveal key={p.t} y={24} delay={i * 0.04} className="grid gap-3 border-b border-white/12 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <p className="t-h3 md:col-span-4">{p.t}</p>
                <p className="t-body muted-dark md:col-span-7 md:col-start-6">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Names label="The partners" cta={false} />
      <CtaBand />
    </>
  )
}
