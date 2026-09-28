import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { cities } from "@/lib/cities"
import { guides } from "@/lib/guides"
import { abs } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-28")
  const page = (path: string, priority: number, lastModified = now) => ({ url: abs(path), lastModified, priority })
  return [
    page("/", 1),
    page("/services", 0.9),
    ...services.map((s) => page(`/${s.slug}`, ["branding", "digital-marketing", "business-development"].includes(s.slug) ? 0.9 : 0.7)),
    page("/about", 0.7),
    page("/contact", 0.7),
    page("/insights", 0.7),
    ...guides.map((g) => page(`/insights/${g.slug}`, 0.6, new Date(g.updated))),
    page("/palm-beach-county", 0.6),
    ...cities.map((c) => page(`/palm-beach-county/${c.slug}`, 0.5)),
    page("/privacy", 0.2),
  ]
}
