import { pageMeta } from "@/lib/seo"
import { site } from "@/lib/site"
import { PageHero } from "@/components/site/PageHero"

export const metadata = pageMeta({
  title: "Privacy Policy | Epic Wolf",
  description: "How Epic Wolf handles the information you share through this website.",
  path: "/privacy",
})

export default function Privacy() {
  return (
    <>
      <PageHero kicker="Privacy policy" lines={["Your information", "stays yours."]} />
      <section data-tone="light" className="on-light py-20 md:py-28">
        <div className="shell">
          <div className="prose-ew t-body muted-light max-w-[68ch] [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
            <p>Last updated September 28, 2026.</p>
            <h2>What we collect</h2>
            <p>
              When you send an inquiry we receive what you type into the form: your name, company, email, phone number
              and message. We also receive the page you sent it from. Standard server logs record technical details such
              as your browser type and IP address.
            </p>
            <h2>How we use it</h2>
            <p>
              We use inquiry details only to reply to you and to discuss a possible engagement. We do not sell or rent
              your information, and we do not add you to a mailing list without asking.
            </p>
            <h2>Who else sees it</h2>
            <p>
              Inquiries are delivered by email through a transactional email provider, and the site is hosted by a
              cloud provider. Both process data on our behalf and only as needed to deliver the service.
            </p>
            <h2>Your choices</h2>
            <p>
              To see, correct or delete what you have sent us, call {site.phone} and we will take care of it.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
