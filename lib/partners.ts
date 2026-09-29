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
      "Jordan Gundlach leads digital marketing, websites and growth at Epic Wolf in West Palm Beach, bringing an engineer's rigor to how a brand gets found.",
    headline: "Marketing built like software",
    lead: "Jordan leads digital at Epic Wolf: the website, the search presence and the systems that turn attention into signed work.",
    background: [
      {
        label: "The background",
        body: "Jordan came to marketing from the build side: websites, apps, custom software and automation for businesses across South Florida. That shapes how digital runs at Epic Wolf. A site is treated as a product, a campaign as a system, and every claim gets measured.",
      },
      {
        label: "What Jordan brings",
        body: "The part of a brand most agencies hand off. The search presence people find, the site that turns a visit into an inquiry and the follow-up that turns an inquiry into a meeting. Built fast, measured plainly and owned by the client.",
      },
      { label: "Why Epic Wolf", body: `${WHY} Jordan owns everything digital.` },
    ],
    facts: [
      { k: "Role", v: "Partner, Digital and Growth" },
      { k: "Based in", v: "West Palm Beach, Florida" },
      { k: "Leads", v: "Digital marketing, websites and growth systems" },
      { k: "Brings", v: "An engineer's rigor to marketing" },
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
        q: "What does Jordan bring to a brand?",
        a: "A builder's discipline. Jordan came to marketing from websites, software and automation, so digital work at Epic Wolf is engineered to be found, to convert and to be measured, and it always matches the brand the client sees everywhere else.",
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
