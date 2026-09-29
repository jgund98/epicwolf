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
     real domain is still to be chosen. Until then the site lives on the
     epicdevsolutions subdomain, and canonicals, sitemap and every link-preview
     image must point where the site actually is. Change this default when the
     domain is live. */
  globalThis.process?.env?.NEXT_PUBLIC_SITE_ORIGIN?.replace(/\/$/, "") || "https://epicwolf.epicdevsolutions.com"

export const site = {
  name: "Epic Wolf",
  legalName: "Epic Wolf", // CONFIRM entity name (LLC?)
  tagline: "Impossible to ignore.",
  /** One sentence that answers "who are you" for people, Google and AI answers alike. */
  oneLiner:
    "Epic Wolf is a West Palm Beach branding, digital marketing and business development agency. One partner-led team shapes the brand, gets it found and turns the attention into revenue, so companies in Palm Beach County and beyond become impossible to ignore. Its partners have been building brands in South Florida since 2001.",
  /** The partners' track record, not the agency's founding date: never use it as foundingDate. */
  experienceSince: 2001,
  description:
    "West Palm Beach branding agency and PR firm. Brand, public relations, digital marketing and business development for companies that intend to lead their market.",
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
      focus: "Digital marketing, search, websites and the systems that turn attention into signed work.",
    },
    {
      name: "Shawn Wolf",
      first: "Shawn",
      role: "Partner, Brand and Street",
      img: "/img/team/shawn.jpg",
      focus: "Brand strategy, identity and every place the brand is seen in person, from the front door to the fleet.",
    },
  ],

  /* Add real profile URLs and every social link on the site turns on. */
  /* Every public profile (LinkedIn, Instagram, Google Business Profile, Clutch,
     directories...). Listed here they become schema sameAs links, which is how
     search engines and AI assistants tie the profiles to this site as one
     entity. See LISTINGS.md. */
  socials: [] as { label: string; href: string }[],
  /* Site-ownership codes: paste the content value of each meta tag that Google
     Search Console and Bing Webmaster Tools give you. Empty ones render nothing. */
  verification: { google: "", bing: "" },
  /* IndexNow key (public/<key>.txt). scripts/indexnow.mjs pings Bing, Yandex and
     other IndexNow engines with every sitemap URL after a deploy. */
  indexNowKey: "eeae7d324595cc7df12d721e82bdaa55",

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
    line: "Who you are, said so clearly that people repeat it.",
    caps: [
      { name: "Brand strategy and positioning" },
      { name: "Naming and identity systems" },
      { name: "Public relations", href: "/public-relations" },
      { name: "Signage and storefronts", href: "/signs" },
      { name: "Vehicle graphics", href: "/vehicle-wraps" },
      { name: "Print and brand goods", href: "/print" },
    ],
    img: "/img/work/inch-ounce-storefront.jpg",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    line: "Found first in every place your buyers look.",
    caps: [
      { name: "Search and AI visibility" },
      { name: "Paid media" },
      { name: "Social and content" },
      { name: "Websites and software", href: "/web-design" },
      { name: "Analytics and reporting" },
    ],
    img: "/img/disc/digital.jpg",
  },
  {
    slug: "business-development",
    name: "Business Development",
    line: "Where attention turns into meetings and signed work.",
    caps: [
      { name: "Go-to-market and market entry" },
      { name: "Pipeline and CRM systems" },
      { name: "Partnerships and sponsorships" },
      { name: "Pitch decks and sales materials" },
    ],
    img: "/img/disc/lagoon-dusk.jpg",
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
