import type { MetadataRoute } from "next"
import { abs } from "@/lib/site"

/* Search and AI answer engines are welcome: being cited is the point. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/lab"] },
      ...["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended", "Bingbot"].map(
        (userAgent) => ({ userAgent, allow: "/", disallow: ["/api/", "/lab"] })
      ),
    ],
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  }
}
