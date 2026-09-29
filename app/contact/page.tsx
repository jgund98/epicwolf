import { breadcrumbSchema, pageMeta } from "@/lib/seo"
import { site } from "@/lib/site"
import { JsonLd } from "@/components/site/JsonLd"
import { ContactForm } from "@/components/ui/ContactForm"
import { LineReveal, Reveal } from "@/components/ui/Reveal"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { pageImagery } from "@/lib/imagery"

export const metadata = pageMeta({
  title: "Contact Epic Wolf | Start a Project in West Palm Beach",
  description:
    "Start a branding, PR, digital marketing or business development project with Epic Wolf in West Palm Beach. Tell us where the company is going and a partner will reply.",
  path: "/contact",
})

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <section data-tone="dark" className="on-dark pb-28 pt-[calc(var(--header-h)+3.5rem)] md:pb-40 md:pt-[calc(var(--header-h)+6rem)]">
        <div className="shell">
          <h1>
            <span className="label">Start a project with Epic Wolf</span>
            <LineReveal as="span" className="t-display mt-6" lines={["Tell us where", <span key="g" className="text-flare">you&rsquo;re going.</span>]} />
          </h1>

          <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
            <div className="md:col-span-7">
              <ContactForm source="contact page" />
            </div>
            <aside className="md:col-span-4 md:col-start-9">
              <div className="border-t border-white/12 pt-6">
                <p className="font-semibold">What happens next</p>
                <p className="t-body muted-dark mt-3">
                  A partner reads your note and replies personally. If there&rsquo;s a fit, we set a working session to
                  learn the business and the goal, then come back with a clear recommendation and scope.
                </p>
              </div>
              <div className="mt-10 border-t border-white/12 pt-6">
                <p className="font-semibold">Talk now</p>
                <a href={site.phoneHref} className="link-draw mt-3 inline-block text-2xl font-bold tabular-nums">
                  {site.phone}
                </a>
                <p className="t-small muted-dark mt-2">{site.hoursLabel}</p>
              </div>
              <div className="mt-10 border-t border-white/12 pt-6">
                <p className="font-semibold">Where</p>
                <p className="t-body muted-dark mt-3">
                  {site.city}, {site.regionName}. Working across Palm Beach County, South Florida and beyond.
                </p>
              </div>
              {/* The photograph fills the column out to the form's length, so the aside never ends in a void. */}
              <Reveal y={32} className="mt-10">
                <ParallaxImage
                  src={pageImagery.contact.src}
                  alt={pageImagery.contact.alt}
                  frame="cut-sm"
                  travel={8}
                  sizes="(min-width: 768px) 30vw, 92vw"
                  className="aspect-[4/3]"
                />
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section data-tone="light" className="relative overflow-hidden bg-flare py-20 text-ink md:py-28">
        <div className="shell">
          <p className="label label-paper">Prefer to talk</p>
          <Reveal y={36} className="mt-6">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-[0.25em] whitespace-nowrap text-[clamp(2.1rem,10.4vw,9rem)] font-[900] uppercase leading-[0.9] tracking-[-0.04em] tabular-nums"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {site.phone}
              <span aria-hidden className="text-paper transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </a>
          </Reveal>
          <p className="t-lead mt-8 max-w-[44ch] font-semibold">
            {site.hoursLabel}. Call or text and a partner picks up the conversation.
          </p>
        </div>
      </section>
    </>
  )
}
