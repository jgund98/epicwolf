import type { Faq } from "./types"

/**
 * The partners' own pages: about the people, what each brings to the table and
 * why they formed Epic Wolf. Jordan's rule: the pages do not promote the
 * partners' other companies and do not pitch direct contact. The "why" is the
 * agency's stated reason (see the About page), not an invented anecdote.
 * No pronouns: written with names and roles. Copy laws in VOICE.md.
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
  background: { label: string; body: string }[]
  facts: { k: string; v: string }[]
  leads: { t: string; b: string; href: string }[]
  knowsAbout: string[]
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
      "Jordan Gundlach leads digital and growth at Epic Wolf: a South Florida marketer since 2018 and a former chief technology officer.",
    headline: "A marketer who can build",
    lead: "Jordan leads digital at Epic Wolf: the website, the search presence and the systems that turn attention into signed work.",
    background: [
      {
        label: "The marketing years",
        body: "Jordan has worked in South Florida marketing since 2018, starting on the front lines of search, ads, social, email and reputation for a Delray Beach medical practice. Next came a multi-location law firm in Palm Beach Gardens. Jordan ran its marketing for three years, grew its organic search traffic tenfold in two and produced the design and video work behind its growth into a seven-figure practice. Along the way Jordan consulted on brand and campaigns for a national insurance group.",
      },
      {
        label: "The build years",
        body: "Then came the technology side. As chief technology officer of a health insurance technology company, Jordan led engineering and product teams and launched a first-of-its-kind mobile app that modernized how people enroll. In 2025 Jordan founded a West Palm Beach development studio building websites, apps, custom platforms and AI automation.",
      },
      {
        label: "What Jordan brings",
        body: "Both sides of the screen. Jordan has run campaigns that had to produce leads and led the teams that ship software, so digital work at Epic Wolf is designed for results, engineered properly and measured plainly.",
      },
      {
        label: "Why Epic Wolf",
        body: "Years of running marketing and building software for other companies point to one lesson: a website or a campaign can only perform as well as the brand behind it. Epic Wolf puts the brand and the digital work under one roof, with Shawn shaping the brand and Jordan making sure people find it, trust it and act on it.",
      },
    ],
    facts: [
      { k: "Role", v: "Partner, Digital and Growth" },
      { k: "Based in", v: "West Palm Beach, Florida" },
      { k: "In South Florida marketing since", v: "2018" },
      { k: "Background", v: "Marketing lead, then chief technology officer" },
    ],
    leads: [
      { t: "Digital marketing", b: "Search, local search, paid social and content, measured against inquiries and revenue.", href: "/digital-marketing" },
      { t: "Websites and software", b: "Fast sites built to rank and convert, plus the custom tools a growing company needs.", href: "/web-design" },
      { t: "Business development", b: "The pipeline behind the brand: follow-up, CRM and the reporting partners actually read.", href: "/business-development" },
    ],
    knowsAbout: ["Digital marketing", "Search engine optimization", "Local SEO", "Web design", "Custom software development", "Marketing automation", "Lead generation", "Business development"],
    faqs: [
      {
        q: "What does Jordan Gundlach do at Epic Wolf?",
        a: "Jordan Gundlach is the partner who leads digital and growth at Epic Wolf. That covers digital marketing, search and paid programs, the website and the systems behind every inquiry, from instant follow-up to the reporting that shows which work is paying off.",
      },
      {
        q: "What is Jordan Gundlach's background?",
        a: "Jordan has worked in South Florida marketing since 2018, leading digital marketing for a medical practice and a multi-location law firm, where organic search traffic grew tenfold in two years. Jordan later served as chief technology officer of a health insurance technology company and in 2025 founded a West Palm Beach development studio.",
      },
      {
        q: "Why did Jordan start Epic Wolf with Shawn?",
        a: "Because digital work only performs when the brand behind it is right. After years of running marketing and building software for other companies, Jordan wanted the brand, the website and the pipeline under one partner-led team.",
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
      "Shawn Wolf leads brand at Epic Wolf and has been building brands for South Florida businesses since 2001, from identity to the storefront.",
    headline: "Building South Florida brands since 2001",
    lead: "Shawn leads brand at Epic Wolf: strategy, identity and every place customers meet the brand in person.",
    background: [
      {
        label: "The background",
        body: "Shawn has been producing brands for South Florida businesses since 2001: storefront signs, fleet graphics, apparel, print and packaging. More than two decades of that work show exactly where a brand lives. On the front of the building, the side of the truck, the shirt on the crew and the menu on the table.",
      },
      {
        label: "What Shawn brings",
        body: "A production eye. A mark that looks right on a screen can fail at forty feet or across a curved van panel, and Shawn has seen what survives and what does not. Every identity is built for the real world from the first sketch.",
      },
      {
        label: "Why Epic Wolf",
        body: "A sign, a van or a storefront can only be as strong as the identity it carries. Epic Wolf lets Shawn start where the brand actually starts, with the strategy and the identity, and carry it all the way to the front door, while Jordan makes sure the same brand gets found online.",
      },
    ],
    facts: [
      { k: "Role", v: "Partner, Brand and Street" },
      { k: "Building brands since", v: "2001, in West Palm Beach" },
      { k: "Leads", v: "Brand strategy, identity and the physical brand" },
      { k: "Brings", v: "A production eye for what works at full size" },
    ],
    leads: [
      { t: "Brand strategy and identity", b: "Positioning, naming and the identity system that has to hold up everywhere it shows up.", href: "/branding" },
      { t: "Signage and storefronts", b: "Exterior signs, window and door graphics and the storefront as the brand's front page.", href: "/signs" },
      { t: "Vehicles, apparel and print", b: "Fleet graphics, crew apparel and printed pieces produced to the same standard as the logo.", href: "/vehicle-wraps" },
    ],
    knowsAbout: ["Brand strategy", "Brand identity", "Signage", "Storefront graphics", "Vehicle graphics", "Branded apparel", "Commercial printing", "Promotional products", "Packaging"],
    faqs: [
      {
        q: "What does Shawn Wolf do at Epic Wolf?",
        a: "Shawn Wolf is the partner who leads brand at Epic Wolf: strategy and identity, and every surface where customers meet the brand in person, from storefront signs and window graphics to fleet graphics, apparel and print.",
      },
      {
        q: "How long has Shawn Wolf been building brands in South Florida?",
        a: "Since 2001. Shawn has produced signs, fleet graphics, apparel, print and packaging for South Florida businesses for more than 25 years, and that production experience is behind every identity Epic Wolf builds.",
      },
      {
        q: "Why did Shawn start Epic Wolf with Jordan?",
        a: "Because a sign or a vehicle wrap can only be as strong as the identity it carries. Epic Wolf lets Shawn shape the brand from the strategy up and carry it to every surface, while Jordan makes sure the same brand is found and chosen online.",
      },
    ],
  },
]

export const partnerBySlug = (slug: string) => partners.find((p) => p.slug === slug)
