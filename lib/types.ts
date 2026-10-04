export type Faq = { q: string; a: string }

export type ServiceSlug =
  | "public-relations"
  | "branding"
  | "digital-marketing"
  | "business-development"
  | "web-design"
  | "signs"
  | "vehicle-wraps"
  | "print"
  | "photography"
  | "video-production"

export type Service = {
  slug: ServiceSlug
  /** Short label for nav, lists and chips. e.g. "Public Relations" */
  name: string
  /** Which side of the house: the talk (strategy/story), the build (digital), the street (physical). */
  side: "story" | "digital" | "street"
  /** Visible H1 on the service page. Compelling, no commas, no em dashes. */
  headline: string
  /** The SEO phrase set small above the H1, inside the h1 element. e.g. "Public relations firm in West Palm Beach" */
  kicker: string
  metaTitle: string
  metaDescription: string
  /** One or two sentences for cards and the services index. */
  summary: string
  /** Two to four paragraphs of page copy. */
  intro: string[]
  /** Concrete deliverables people search for. 6 to 9 items. */
  deliverables: { name: string; detail: string }[]
  /** How the work actually runs. 3 or 4 short beats. Rendered as prose, never as numbered cards. */
  approach: { title: string; body: string }[]
  /** The one-team argument for this discipline: how it connects to the rest of the house. One paragraph. */
  oneTeam: string
  /** Who this is for in Palm Beach County. 4 to 6 short phrases. */
  audiences: string[]
  /** Synonyms and the "wrong" words people search. Rendered in real copy ("Also searched as"). 6 to 12 items. */
  vocabulary: string[]
  /** 5 to 7 answer-first FAQs. First sentence of each answer directly answers the question. */
  faqs: Faq[]
  related: ServiceSlug[]
  /** Hero image path under /public. */
  image: string
  imageAlt: string
}

export type City = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  /** Visible H1, no commas. */
  headline: string
  /** Two or three paragraphs. Must be specific to this town, never a template with the name swapped. */
  intro: string[]
  /** Real, well-known business corridors or districts in this town. */
  corridors: string[]
  /** The kinds of businesses that define the local economy. */
  industries: string[]
  /** One paragraph on what marketing actually has to do in this town. */
  angle: string
  /** Verified local facts an owner can act on, each with its primary source. */
  ground: { title: string; body: string; source: { label: string; href: string } }[]
  /** Slugs of the guides most useful to a business in this town. */
  guides: string[]
  faqs: Faq[]
  nearby: string[]
  /** Approximate coordinates, for the county map and schema. */
  lat: number
  lng: number
}

export type GuideSection = {
  h2: string
  /** 40 to 60 word direct answer. */
  answer: string
  body?: string[]
  list?: string[]
  table?: { head: string[]; rows: string[][] }
}

export type Guide = {
  slug: string
  title: string
  description: string
  /** ISO date */
  published: string
  updated: string
  /** One-paragraph summary shown at the top ("The short answer"). */
  summary: string
  sections: GuideSection[]
  faqs: Faq[]
  related: ServiceSlug[]
  sources?: { label: string; href: string }[]
}

/** A discipline in one priority town: /palm-beach-county/[town]/[service]. */
export type LocalService = {
  town: string
  service: ServiceSlug
  metaTitle: string
  metaDescription: string
  /** The SEO phrase inside the h1, e.g. "Sign company in Boca Raton, FL". */
  kicker: string
  /** Visible H1. No commas, no dashes. */
  headline: string
  /** 40 to 80 words that answer "who does this in this town" on their own. Quoted by AI answers. */
  answer: string
  /** Two or three paragraphs only true of this discipline in this town. */
  intro: string[]
  /** Verified facts for this discipline in this town, each with its primary source. */
  ground: { title: string; body: string; source: { label: string; href: string } }[]
  /** How the work runs here. Three beats. */
  plan: { title: string; body: string }[]
  /** Mid-page call to action. */
  cta: { line: string; body: string }
  faqs: Faq[]
  guides: string[]
  image: { src: string; alt: string }
  /** Deliverable names from the service that this town restricts or bans, left off the scope list. */
  omit?: string[]
}

/**
 * A page one level under a service hub: /[service]/[topic].
 * kind "service" is a specific thing we build or make (ecommerce, brand films);
 * kind "industry" is that service for one kind of client (law firms, builders).
 */
export type Topic = {
  service: ServiceSlug
  slug: string
  kind: "service" | "industry"
  /** Short label for lists and breadcrumbs, e.g. "Law firm websites". */
  name: string
  metaTitle: string
  metaDescription: string
  /** The SEO phrase inside the h1, e.g. "Law firm website design in Palm Beach County". */
  kicker: string
  /** Visible H1. No commas, no dashes. */
  headline: string
  /** 40 to 80 words that answer "who does this here and what is it" on their own. */
  answer: string
  /** Two or three paragraphs specific to this topic. */
  intro: string[]
  /** Verified facts a buyer can act on, each with its primary source. */
  ground: { title: string; body: string; source: { label: string; href: string } }[]
  /** What the work includes. Six to eight items, written for this topic only. */
  includes: { name: string; detail: string }[]
  /** How the work runs. Three beats. */
  plan: { title: string; body: string }[]
  cta: { line: string; body: string }
  faqs: Faq[]
  /** Guide slugs. */
  guides: string[]
  /** Other topic slugs under the same service. */
  related: string[]
  image: { src: string; alt: string }
}
