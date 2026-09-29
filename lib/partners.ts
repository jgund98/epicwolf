import type { Faq } from "./types"

/**
 * The partners' own pages. Facts only, checked against their companies' sites:
 * Shawn founded SM WOLF in West Palm Beach in 2001 (smwolf.com); Jordan runs
 * Epic Development Solutions (epicdevsolutions.com). No pronouns in the copy:
 * written with names and roles instead. Copy laws in VOICE.md.
 */
export type Partner = {
  slug: string
  name: string
  first: string
  role: string
  img: string
  cut: string
  metaTitle: string
  metaDescription: string
  headline: string
  lead: string
  background: string[]
  facts: { k: string; v: string; href?: string }[]
  leads: { t: string; b: string; href: string }[]
  knowsAbout: string[]
  company: { name: string; url: string; foundingDate?: string }
  faqs: Faq[]
}

export const partners: Partner[] = [
  {
    slug: "jordan-gundlach",
    name: "Jordan Gundlach",
    first: "Jordan",
    role: "Partner, Digital and Growth",
    img: "/img/team/jordan.jpg",
    cut: "/img/team/jordan-cut.webp",
    metaTitle: "Jordan Gundlach | Partner, Digital and Growth | Epic Wolf",
    metaDescription:
      "Jordan Gundlach leads digital marketing, websites and growth systems at Epic Wolf in West Palm Beach, and runs Epic Development Solutions.",
    headline: "The part of the brand people find",
    lead: "Jordan leads digital at Epic Wolf: the website, the search presence and the systems that turn attention into signed work.",
    background: [
      "Jordan runs Epic Development Solutions, a West Palm Beach studio that builds websites, mobile apps, custom software and AI automation for businesses across South Florida and beyond.",
      "That work sits where marketing meets engineering: sites built to rank and convert, lead funnels that follow up in seconds, client portals and the reporting that shows what is working. Jordan has also built and launched original software products, which is why every client pipeline gets treated like a product.",
      "At Epic Wolf, Jordan leads digital marketing, the website and every system behind the inquiry, so the brand gets found and the attention turns into revenue.",
    ],
    facts: [
      { k: "Role", v: "Partner, Digital and Growth" },
      { k: "Based in", v: "West Palm Beach, Florida" },
      { k: "Also runs", v: "Epic Development Solutions", href: "https://epicdevsolutions.com" },
      { k: "Builds", v: "Websites, apps, custom software and AI automation" },
    ],
    leads: [
      { t: "Digital marketing", b: "Search, local search, paid social and content, measured against inquiries and revenue.", href: "/digital-marketing" },
      { t: "Websites and software", b: "Fast sites built to rank and convert, plus the custom tools a growing company needs.", href: "/web-design" },
      { t: "Business development", b: "The pipeline behind the brand: follow-up, CRM and the reporting partners actually read.", href: "/business-development" },
    ],
    knowsAbout: ["Digital marketing", "Search engine optimization", "Local SEO", "Web design", "Custom software development", "Marketing automation", "Lead generation", "Business development"],
    company: { name: "Epic Development Solutions", url: "https://epicdevsolutions.com" },
    faqs: [
      {
        q: "What does Jordan Gundlach do at Epic Wolf?",
        a: "Jordan Gundlach is the partner who leads digital and growth at Epic Wolf. That covers digital marketing, search and paid programs, the website and the systems behind every inquiry, from instant follow-up to the reporting that shows which work is paying off.",
      },
      {
        q: "Is Jordan Gundlach connected to Epic Development Solutions?",
        a: "Yes. Jordan runs Epic Development Solutions, a West Palm Beach studio that builds websites, mobile apps, custom software and AI automation. That engineering background is why Epic Wolf's digital work is built to be measured, not just launched.",
      },
      {
        q: "Can I work with Jordan directly?",
        a: "Yes. Epic Wolf is partner-led, so clients work directly with Jordan on digital strategy, websites and growth. Call or text (561) 247-5514, or start a project through the site and a partner replies personally.",
      },
    ],
  },
  {
    slug: "shawn-wolf",
    name: "Shawn Wolf",
    first: "Shawn",
    role: "Partner, Brand and Street",
    img: "/img/team/shawn.jpg",
    cut: "/img/team/shawn-cut.webp",
    metaTitle: "Shawn Wolf | Partner, Brand and Street | Epic Wolf",
    metaDescription:
      "Shawn Wolf leads brand and every surface customers see in person at Epic Wolf. Shawn founded SM WOLF in West Palm Beach in 2001.",
    headline: "Building South Florida brands since 2001",
    lead: "Shawn leads brand at Epic Wolf: strategy, identity and every place customers meet the brand in person.",
    background: [
      "Shawn founded SM WOLF in West Palm Beach in 2001: a creative production company for print, promotional products, branded apparel, signage, displays and packaging, still led hands-on today.",
      "More than two decades of producing brands in the physical world show exactly where a brand lives: on the front of the building, the side of the truck, the shirt on the crew and the menu on the table. Shawn sources, proofs and produces that work directly and knows what a design has to survive to look right at full size.",
      "At Epic Wolf, Shawn leads brand strategy and identity, and every surface where customers meet the brand in person, held to one standard from the first sketch to the install.",
    ],
    facts: [
      { k: "Role", v: "Partner, Brand and Street" },
      { k: "Building brands since", v: "2001, in West Palm Beach" },
      { k: "Founded", v: "SM WOLF (2001)", href: "https://www.smwolf.com" },
      { k: "Produces", v: "Signage, apparel, print, promotional products and packaging" },
    ],
    leads: [
      { t: "Brand strategy and identity", b: "Positioning, naming and the identity system that has to hold up everywhere it shows up.", href: "/branding" },
      { t: "Signage and storefronts", b: "Exterior signs, window and door graphics and the storefront as the brand's front page.", href: "/signs" },
      { t: "Vehicles, apparel and print", b: "Fleet graphics, crew apparel and printed pieces produced to the same standard as the logo.", href: "/vehicle-wraps" },
    ],
    knowsAbout: ["Brand strategy", "Brand identity", "Signage", "Storefront graphics", "Vehicle graphics", "Branded apparel", "Commercial printing", "Promotional products", "Packaging"],
    company: { name: "SM WOLF", url: "https://www.smwolf.com", foundingDate: "2001" },
    faqs: [
      {
        q: "What does Shawn Wolf do at Epic Wolf?",
        a: "Shawn Wolf is the partner who leads brand at Epic Wolf: strategy and identity, and every surface where customers meet the brand in person, from storefront signs and window graphics to fleet graphics, apparel and print.",
      },
      {
        q: "How long has Shawn Wolf been building brands in West Palm Beach?",
        a: "Since 2001. Shawn founded SM WOLF in West Palm Beach that year and has produced print, promotional products, apparel, signage and packaging for South Florida businesses ever since, which is the production experience behind Epic Wolf's brand work.",
      },
      {
        q: "Can I work with Shawn directly?",
        a: "Yes. Epic Wolf is partner-led, so clients work directly with Shawn on brand strategy, identity and everything the brand needs in the physical world. Call or text (561) 247-5514, or start a project through the site.",
      },
    ],
  },
]

export const partnerBySlug = (slug: string) => partners.find((p) => p.slug === slug)
