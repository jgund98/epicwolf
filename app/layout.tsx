import type { Metadata, Viewport } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/site/Header"
import { Footer } from "@/components/site/Footer"
import { SmoothScroll } from "@/components/site/SmoothScroll"
import { LabelMarks } from "@/components/site/LabelMarks"
import { JsonLd } from "@/components/site/JsonLd"
import { orgSchema, websiteSchema } from "@/lib/seo"
import { serviceIndex, site } from "@/lib/site"

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Epic Wolf | PR Firm and Marketing Agency in West Palm Beach",
    template: "%s | Epic Wolf",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  other: { "geo.region": "US-FL", "geo.placename": site.city, "geo.position": `${site.geo.lat};${site.geo.lng}` },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={archivo.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-flare focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <JsonLd data={[orgSchema(serviceIndex.map((s) => s.name)), websiteSchema()]} />
        <SmoothScroll />
        <LabelMarks />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
