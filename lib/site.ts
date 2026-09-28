/**
 * Every business fact on the site lives here. Components read from this file
 * and never hardcode a phone number, a URL or a town list. Change it once and
 * it changes everywhere, including schema, sitemap and llms.txt.
 *
 * Epic Wolf is a new brand. Anything marked CONFIRM is a sensible default that
 * the partners should confirm before launch (see HANDOFF.md).
 */

const ORIGIN =
  /* CONFIRM domain. epicwolf.com is registered to an unrelated owner, so the
     real domain is still to be chosen; set NEXT_PUBLIC_SITE_ORIGIN in Vercel. */
  globalThis.process?.env?.NEXT_PUBLIC_SITE_ORIGIN?.replace(/\/$/, "") || "https://www.epicwolf.agency"

export const site = {
  name: "Epic Wolf",
  legalName: "Epic Wolf", // CONFIRM entity name (LLC?)
  tagline: "Impossible to ignore.",
  /** One sentence that answers "who are you" for people, Google and AI answers alike. */
  oneLiner:
    "Epic Wolf is a West Palm Beach PR, branding and marketing agency that also builds the websites and software and prints the signs, wraps and merch, so a Palm Beach County business gets one team from the front page to the front door.",
  description:
    "West Palm Beach PR firm and branding agency for Palm Beach County. Public relations, brand identity, digital marketing, business development, websites and software, plus in-house signs, vehicle wraps and print.",
  url: ORIGIN,

  /* Display format everywhere; the hrefs stay E.164 for dialers. */
  phone: "(561) 247-5514", // CONFIRM Epic Wolf line (currently Epic's)
  phoneHref: "tel:+15612475514",
  smsHref: "sms:+15612475514",
  /* Empty until the domain's inbox exists. Components hide it while empty so
     no visitor ever writes to an address that bounces. */
  email: "", // CONFIRM e.g. hello@epicwolf.com

  city: "West Palm Beach",
  region: "FL",
  regionName: "Florida",
  county: "Palm Beach County",
  postalCode: "", // CONFIRM once there is a public office address
  streetAddress: "", // CONFIRM; left blank on purpose so nothing invents a home base
  /* Downtown West Palm Beach. Used for schema geo only. */
  geo: { lat: 26.7153, lng: -80.0534 },

  hours: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }],
  hoursLabel: "Mon to Fri, 9 to 6", // CONFIRM

  founders: [
    {
      name: "Jordan Gundlach",
      first: "Jordan",
      role: "Partner, Digital and Growth",
      img: "/img/team/jordan.jpg",
      focus: "Websites, software, search and the systems that turn attention into booked calls.",
    },
    {
      name: "Shawn Wolf",
      first: "Shawn",
      role: "Partner, Brand and Street",
      img: "/img/team/shawn.jpg",
      focus: "Brand, print and everything physical, from a storefront sign to a fleet of wrapped vans.",
    },
  ],

  /* Add real profile URLs and every social link on the site turns on. */
  socials: [] as { label: string; href: string }[],

  nav: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],
} as const

export type Founder = (typeof site.founders)[number]

/**
 * Three disciplines, and only three, are presented as what Epic Wolf is.
 * Everything else the team can do (PR, websites and software, signs, wraps,
 * print) is a capability that lives inside one of them. Those pages exist
 * for search, but they are never listed as a menu of trades: a prestige
 * agency leads with a point of view, not an inventory.
 */
export type Pillar = {
  slug: "branding" | "digital-marketing" | "business-development"
  name: string
  line: string
  /** Capabilities inside the discipline. href only where a page exists. */
  caps: { name: string; href?: string }[]
  img: string
}

export const pillars: Pillar[] = [
  {
    slug: "branding",
    name: "Branding",
    line: "Who you are, said so well that people repeat it.",
    caps: [
      { name: "Brand strategy and positioning" },
      { name: "Naming and identity systems" },
      { name: "Public relations", href: "/public-relations" },
      { name: "Signage and storefronts", href: "/signs" },
      { name: "Vehicle graphics", href: "/vehicle-wraps" },
      { name: "Print and brand goods", href: "/print" },
    ],
    img: "/img/stock/sketch.jpg",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    line: "Found first, chosen fast, remembered after.",
    caps: [
      { name: "Search and AI visibility" },
      { name: "Paid media" },
      { name: "Social and content" },
      { name: "Websites and software", href: "/web-design" },
      { name: "Analytics and reporting" },
    ],
    img: "/img/stock/ew-digital.jpg",
  },
  {
    slug: "business-development",
    name: "Business Development",
    line: "The pipeline, the partners and the pitch that closes.",
    caps: [
      { name: "Go-to-market and market entry" },
      { name: "Pipeline and CRM systems" },
      { name: "Partnerships and sponsorships" },
      { name: "Pitch decks and sales materials" },
    ],
    img: "/img/stock/deal.jpg",
  },
]

/** Every service page that exists, for sitemap, schema and routing. */
export const serviceIndex = [
  { slug: "branding", name: "Branding", pillar: "branding" },
  { slug: "digital-marketing", name: "Digital Marketing", pillar: "digital-marketing" },
  { slug: "business-development", name: "Business Development", pillar: "business-development" },
  { slug: "public-relations", name: "Public Relations", pillar: "branding" },
  { slug: "signs", name: "Signage and Storefronts", pillar: "branding" },
  { slug: "vehicle-wraps", name: "Vehicle Graphics", pillar: "branding" },
  { slug: "print", name: "Print and Brand Goods", pillar: "branding" },
  { slug: "web-design", name: "Websites and Software", pillar: "digital-marketing" },
] as const

export const towns = [
  { slug: "west-palm-beach", name: "West Palm Beach" },
  { slug: "palm-beach", name: "Palm Beach" },
  { slug: "palm-beach-gardens", name: "Palm Beach Gardens" },
  { slug: "jupiter", name: "Jupiter" },
  { slug: "juno-beach", name: "Juno Beach" },
  { slug: "riviera-beach", name: "Riviera Beach" },
  { slug: "wellington", name: "Wellington" },
  { slug: "royal-palm-beach", name: "Royal Palm Beach" },
  { slug: "lake-worth-beach", name: "Lake Worth Beach" },
  { slug: "boynton-beach", name: "Boynton Beach" },
  { slug: "delray-beach", name: "Delray Beach" },
  { slug: "boca-raton", name: "Boca Raton" },
] as const

export const abs = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`
