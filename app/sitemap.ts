import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { cities } from "@/lib/cities"
import { localServices } from "@/lib/local-services"
import { topics } from "@/lib/topics"
import { guides } from "@/lib/guides"
import { partners } from "@/lib/partners"
import { abs, pillars } from "@/lib/site"
import { guideImagery, pageImagery, serviceImagery, townImage, workPhotos } from "@/lib/imagery"

/**
 * Page sitemap with an image entry for every photo each page actually shows, so
 * the work photography (signage, window vinyl, fleet graphics) can surface in
 * Google Images for searches like storefront window graphics West Palm Beach.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-04")
  const imgs = (...srcs: (string | undefined)[]) => [...new Set(srcs.filter(Boolean) as string[])].map((src) => abs(src))
  const page = (path: string, priority: number, images: string[] = [], lastModified = now) => ({
    url: abs(path),
    lastModified,
    priority,
    ...(images.length ? { images } : {}),
  })

  return [
    page("/", 1, imgs(...pillars.map((p) => p.img), ...workPhotos.map((p) => p.src))),
    page("/services", 0.9, imgs(...pillars.map((p) => p.img))),
    ...services.map((s) => {
      const set = serviceImagery[s.slug]
      return page(
        `/${s.slug}`,
        ["branding", "digital-marketing", "business-development"].includes(s.slug) ? 0.9 : 0.7,
        imgs(s.image, set?.pair[0].src, set?.pair[1].src, set?.side.src, ...(set?.strip ?? []).map((p) => p.src))
      )
    }),
    page("/about", 0.7, imgs("/img/stock/press.jpg", ...partners.map((p) => p.img))),
    ...partners.map((p) => page(`/about/${p.slug}`, 0.6, imgs(p.cut, p.img))),
    page("/contact", 0.7, imgs(pageImagery.contact.src)),
    page("/insights", 0.7, imgs(...guides.map((g) => guideImagery[g.slug]?.lead.src))),
    ...guides.map((g) => page(`/insights/${g.slug}`, 0.6, imgs(guideImagery[g.slug]?.lead.src, guideImagery[g.slug]?.inline.src), new Date(g.updated))),
    page("/palm-beach-county", 0.6, imgs(...pageImagery.countyPair.map((p) => p.src))),
    ...cities.map((c, i) => page(`/palm-beach-county/${c.slug}`, 0.5, imgs(townImage(c.slug, i).src))),
    ...topics.map((t) => page(`/${t.service}/${t.slug}`, 0.7, imgs(t.image.src))),
    ...localServices.map((l) => page(`/palm-beach-county/${l.town}/${l.service}`, 0.7, imgs(l.image.src))),
    page("/privacy", 0.2),
  ]
}
