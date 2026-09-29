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

const WHY =
  "Most companies hire one firm for the story, another for the website, a third for the ads and someone else for the sign. Each does fine work and none of it adds up to one brand. Jordan and Shawn formed Epic Wolf to fix that: one partner-led team, one strategy and one standard from the first conversation to the front door."

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
        body: "Jordan has worked in South Florida marketing since 2018, starting on the front lines of search, ads, social, email and reputation for a Delray Beach medical practice. From there Jordan ran marketing for a multi-location law firm in Palm Beach Gardens, growing its organic search traffic tenfold in two years and producing the design and video work behind the firm's growth into a seven-figure practice, while consulting on brand and campaigns for a national insurance group.",
      },
      {
        label: "The build years",
        body: "Then came the technology side. As chief technology officer of a health insurance technology company, Jordan led engineering and product teams and launched a first-of-its-kind mobile app that modernized how people enroll. In 2025 Jordan founded a West Palm Beach development studio building websites, apps, custom platforms and AI automation.",
      },
      {
        label: "What Jordan brings",
        body: "A rare combination: a marketer who can build. Jordan has run campaigns that had to produce leads and led the teams that ship software, so digital work at Epic Wolf is designed for results, engineered properly and measured plainly.",
      },
      { label: "Why Epic Wolf", body: `${WHY} Jordan owns everything digital.` },
    ],
    facts: [
      { k: "Role", v: "Partner, Digital and Growth" },
      { k: "Based in", v: "West Palm Beach, Florida" },
      { k: "In South Florida marketing since", v: "2018" },
      { k: "Background", v: "Marketing leadership and chief technology officer" },
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
        q: "Why did Jordan and Shawn start Epic Wolf?",
        a: "Because most companies end up with a different firm for the story, the website, the ads and the sign, and the pieces never add up to one brand. Jordan and Shawn formed Epic Wolf so one partner-led team carries a single strategy from the first conversation to the front door.",
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
        body: "The eye of someone who has watched designs meet the real world for more than twenty years. A mark that looks right on a screen can fail at forty feet or across a curved van panel. Shawn knows what a design has to survive and builds the brand for it from the first sketch.",
      },
      { label: "Why Epic Wolf", body: `${WHY} Shawn owns the brand and everything people can see and touch.` },
    ],
    facts: [
      { k: "Role", v: "Partner, Brand and Street" },
      { k: "Building brands since", v: "2001, in West Palm Beach" },
      { k: "Leads", v: "Brand strategy, identity and the physical brand" },
      { k: "Brings", v: "Two decades of making brands real at full size" },
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
        a: "Since 2001. Shawn has spent more than two decades producing signs, fleet graphics, apparel, print and packaging for South Florida businesses, and that production experience is behind every identity Epic Wolf builds.",
      },
      {
        q: "Why did Jordan and Shawn start Epic Wolf?",
        a: "Because most companies end up with a different firm for the story, the website, the ads and the sign, and the pieces never add up to one brand. Jordan and Shawn formed Epic Wolf so one partner-led team carries a single strategy from the first conversation to the front door.",
      },
    ],
  },
]

export const partnerBySlug = (slug: string) => partners.find((p) => p.slug === slug)
