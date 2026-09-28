import type { Metadata } from "next"
import { abs, site } from "./site"
import type { Faq } from "./types"

/** Keep meta descriptions inside the ~158 characters Google shows. */
export function clip(s: string, max = 158) {
  if (s.length <= max) return s
  const cut = s.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:]$/, "") + "."
}

export function pageMeta({
  title,
  description,
  path,
  image = "/og.jpg",
  type = "website",
}: {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
}): Metadata {
  const d = clip(description)
  return {
    title: { absolute: title },
    description: d,
    alternates: { canonical: abs(path) },
    openGraph: {
      title,
      description: d,
      url: abs(path),
      siteName: site.name,
      locale: "en_US",
      type,
      images: [{ url: abs(image), width: 1200, height: 630, alt: `${site.name}, ${site.city} ${site.region}` }],
    },
    twitter: { card: "summary_large_image", title, description: d, images: [abs(image)] },
  }
}

export const ORG_ID = `${site.url}/#org`

export const areaServed = [
  "West Palm Beach",
  "Palm Beach",
  "Palm Beach Gardens",
  "North Palm Beach",
  "Jupiter",
  "Juno Beach",
  "Tequesta",
  "Riviera Beach",
  "Lake Worth Beach",
  "Lantana",
  "Greenacres",
  "Wellington",
  "Royal Palm Beach",
  "Westlake",
  "Boynton Beach",
  "Delray Beach",
  "Boca Raton",
  "Highland Beach",
]

export function orgSchema(serviceNames: string[]) {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "US",
  }
  if (site.streetAddress) address.streetAddress = site.streetAddress
  if (site.postalCode) address.postalCode = site.postalCode

  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: "Epic Wolf Agency",
    description: site.oneLiner,
    slogan: site.tagline,
    url: site.url,
    logo: abs("/icon-512.png"),
    image: abs("/og.jpg"),
    telephone: site.phone,
    ...(site.email ? { email: site.email } : {}),
    address,
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Palm Beach County, Florida" },
      ...areaServed.map((name) => ({ "@type": "City", name: `${name}, Florida` })),
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    founder: site.founders.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
    knowsAbout: [
      "Public relations",
      "Media relations",
      "Crisis communications",
      "Brand strategy",
      "Brand identity design",
      "Logo design",
      "Digital marketing",
      "Search engine optimization",
      "Local SEO",
      "Paid social advertising",
      "Business development",
      "Lead generation",
      "Web design",
      "Custom software development",
      "Signage",
      "Vehicle wraps",
      "Fleet graphics",
      "Commercial printing",
      "Promotional products",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Epic Wolf services",
      itemListElement: serviceNames.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
    ...(site.socials.length ? { sameAs: site.socials.map((s) => s.href) } : {}),
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  }
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function serviceSchema({ name, description, path, area }: { name: string; description: string; path: string; area?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: area
      ? { "@type": "City", name: `${area}, Florida` }
      : { "@type": "AdministrativeArea", name: "Palm Beach County, Florida" },
  }
}
