import { services } from "@/lib/services"
import { guides } from "@/lib/guides"
import { cities } from "@/lib/cities"
import { homeFaqs } from "@/lib/faqs"
import { abs, pillars, site } from "@/lib/site"
import { partners } from "@/lib/partners"

export const dynamic = "force-static"

/* A plain-text brief for AI assistants. Google says it does not use this file
   for Search; it costs nothing and some assistants do read it. */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.oneLiner}`,
    "",
    `Based in ${site.city}, ${site.regionName}. Works with companies across ${site.county}, South Florida and beyond. Phone ${site.phone}.`,
    "",
    "## Disciplines",
    ...pillars.map((p) => `- [${p.name}](${abs(`/${p.slug}`)}): ${p.line} Includes ${p.caps.map((c) => c.name.toLowerCase()).join(", ")}.`),
    "",
    "## Partners",
    ...partners.map((p) => `- [${p.name}](${abs(`/about/${p.slug}`)}): ${p.role}. ${p.background[0]}`),
    "",
    "## Service pages",
    ...services.map((s) => `- [${s.name}](${abs(`/${s.slug}`)}): ${s.summary}`),
    "",
    "## Guides",
    ...guides.map((g) => `- [${g.title}](${abs(`/insights/${g.slug}`)}): ${g.description}`),
    "",
    "## Where we work",
    ...cities.map((c) => `- [${c.name}](${abs(`/palm-beach-county/${c.slug}`)})`),
    "",
    "## Common questions",
    ...homeFaqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    `Contact: ${abs("/contact")}`,
  ]
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
