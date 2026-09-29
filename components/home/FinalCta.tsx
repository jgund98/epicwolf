import { ContactForm } from "@/components/ui/ContactForm"
import { LineReveal } from "@/components/ui/Reveal"
import { site } from "@/lib/site"
import { Marker } from "@/components/ui/Marker"

/** The last chapter. One enormous line, then the form, on ink. */
export function FinalCta() {
  return (
    <section data-tone="dark" className="on-dark relative overflow-hidden py-28 md:py-40" aria-labelledby="cta-title" id="inquire">
      <div className="shell">
        <p className="label">The last chapter · Your move</p>
        <LineReveal id="cta-title" as="h2" className="t-mega mt-6" lines={["Your", <Marker key="m" kind="underline" delay={0.9}><span className="text-paper">move.</span></Marker>]} />
        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="t-lead text-paper/85">
              Tell us where the company is going. A partner reads every inquiry and replies personally.
            </p>
            <p className="muted-dark t-small mt-8">
              Prefer to talk?
              <br />
              <a href={site.phoneHref} className="link-draw text-lg font-semibold tabular-nums text-paper">
                {site.phone}
              </a>
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ContactForm source="home" />
          </div>
        </div>
      </div>
    </section>
  )
}
