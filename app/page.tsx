import { Hero } from "@/components/home/Hero"
import { Manifesto } from "@/components/home/Manifesto"
import { Disciplines } from "@/components/home/Disciplines"
import { Everywhere } from "@/components/home/Everywhere"
import { Kinetic } from "@/components/home/Kinetic"
import { Engagement } from "@/components/home/Engagement"
import { Names } from "@/components/home/Names"
import { Local } from "@/components/home/Local"
import { HomeFaq } from "@/components/home/HomeFaq"
import { FinalCta } from "@/components/home/FinalCta"
import { Intro } from "@/components/site/Intro"
import { JsonLd } from "@/components/site/JsonLd"
import { faqSchema, pageMeta } from "@/lib/seo"
import { homeFaqs } from "@/lib/faqs"

export const metadata = pageMeta({
  title: "Epic Wolf | Branding and Marketing Agency in West Palm Beach",
  description:
    "Epic Wolf is a West Palm Beach branding, digital marketing and business development agency for South Florida companies that intend to lead their market.",
  path: "/",
})

export default function Home() {
  return (
    <>
      <Intro />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <Manifesto />
      <Kinetic />
      <Disciplines />
      <Everywhere />
      <Engagement />
      <Names />
      <Local />
      <HomeFaq />
      <FinalCta />
    </>
  )
}
