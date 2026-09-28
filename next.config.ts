import type { NextConfig } from "next"

const YEAR = "public, max-age=31536000, immutable"
const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
  },
  async headers() {
    const security = {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
      ],
    }
    /* Immutable caching only in production. In dev the chunk URLs are stable,
       so a year-long cache pins the browser to a stale stylesheet. */
    if (!isProd) return [security]
    return [
      { source: "/:all*(svg|jpg|jpeg|png|webp|avif|mp4|woff2|ico)", headers: [{ key: "Cache-Control", value: YEAR }] },
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: YEAR }] },
      security,
    ]
  },
}

export default nextConfig
