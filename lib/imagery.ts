/**
 * Photography for the inner pages, kept apart from the copy files so words
 * and pictures can change independently.
 *
 * Rules the picks follow:
 * - Signage photos go on signage and branding, vehicles on vehicle graphics,
 *   print and goods on print. Local scenery everywhere else.
 * - No photo appears twice on one page. Each set below is checked against
 *   the page's hero image in lib/services.ts (the page also drops any pick
 *   that matches it, in case that file changes) and the pillar images in lib/site.ts.
 * - The work photos show real storefronts and vehicles. Alt text describes
 *   what is in frame and never names the business or claims the job.
 * - Blank stock mockups (empty billboard, blank cards, blank tee) are never
 *   used: an empty surface reads as a placeholder.
 */

export type Pic = { src: string; alt: string }

const P = {
  anzoWide: { src: "/img/work/anzo-sign-wide.jpg", alt: "Dimensional channel letters over a Mediterranean restaurant entrance" },
  anzoWindows: { src: "/img/work/anzo-windows.jpg", alt: "Full-color food photography printed on storefront windows" },
  auStore: { src: "/img/work/au-storefront.jpg", alt: "Branded window graphics running across an office storefront" },
  auStoreWide: { src: "/img/work/au-storefront-wide.jpg", alt: "Navy window bands carrying one logo system across an office storefront and its doors" },
  blade: { src: "/img/work/blade-sign.jpg", alt: "A hanging blade sign over a shaded sidewalk arcade" },
  door: { src: "/img/work/door-lettering.jpg", alt: "Oversized white lettering across a glass storefront" },
  event: { src: "/img/work/event-display.jpg", alt: "A printed backdrop and banner stand at an evening event" },
  factory: { src: "/img/work/factory-windows.jpg", alt: "Window graphics listing classes across a fitness studio front" },
  factoryWide: { src: "/img/work/factory-windows-wide.jpg", alt: "Blue window graphics running the length of a fitness studio" },
  greek: { src: "/img/work/greek-market.jpg", alt: "Patterned vinyl on the arched windows of a white stucco shop" },
  heirNight: { src: "/img/work/heir-looms-night.jpg", alt: "An illuminated sign over a rug gallery at night" },
  inchOunce: { src: "/img/work/inch-ounce-storefront.jpg", alt: "Food photography and lettering on a restaurant's storefront windows" },
  koozies: { src: "/img/work/koozies.jpg", alt: "A screen-printed can cooler made for a school fundraiser" },
  litSign: { src: "/img/work/lit-sign.jpg", alt: "A backlit sign over a storefront entrance" },
  menu: { src: "/img/work/menu-boards.jpg", alt: "Menu boards mounted on a white tile wall behind a counter" },
  motivo: { src: "/img/work/motivo-wall.jpg", alt: "A painted wall sign for an interior design showroom" },
  palmWall: { src: "/img/work/palm-wall.jpg", alt: "A wall mural of palms around a crest logo" },
  pickup: { src: "/img/work/pickup-graphics.jpg", alt: "Matte black pickup truck with white company graphics" },
  pickupWide: { src: "/img/work/pickup-graphics-wide.jpg", alt: "Side graphics on a black pickup parked under trees" },
  sedan: { src: "/img/work/sedan-graphics.jpg", alt: "A black sedan with white door and quarter panel graphics" },
  tee: { src: "/img/work/screenprint-tee.jpg", alt: "A screen-printed orange company T-shirt" },
  wallSign: { src: "/img/work/wall-sign.jpg", alt: "A script and serif logo painted on a dark wall" },
  windowGfx: { src: "/img/work/window-graphics.jpg", alt: "A full-height window graphic of stacked vintage rugs" },

  /* Tight crops cut from the originals by scripts/local-photos.mjs: the sign and its wall, nothing else. */
  anzoLetters: { src: "/img/work/anzo-letters.jpg", alt: "Dimensional letters lit by gooseneck lamps over a restaurant entrance" },
  auBand: { src: "/img/work/au-band.jpg", alt: "Navy window bands carrying one logo system across an office storefront" },
  motivoLetters: { src: "/img/work/motivo-letters.jpg", alt: "Painted lettering and a monkey crest on an interior design showroom wall" },
  heirWall: { src: "/img/work/heirlooms-wall.jpg", alt: "White serif and script lettering on a navy showroom wall" },
  heirNightWide: { src: "/img/work/heirlooms-night.jpg", alt: "An illuminated sign over a rug gallery storefront at night" },
  whiteHorse: { src: "/img/work/whitehorse-mural.jpg", alt: "A palm mural and crest painted on a white stucco wall" },
  heirWindow: { src: "/img/work/heirlooms-window.jpg", alt: "A full-height window graphic of stacked vintage rugs" },
  lagoonDusk: { src: "/img/disc/lagoon-dusk.jpg", alt: "The Lake Worth Lagoon at dusk" },

  /* Site mockups shot from the live site by scripts/local-mockups.cjs. */
  ewSiteArticle: { src: "/img/stock/ew-site-article.jpg", alt: "An Epic Wolf guide in a browser window beside the inquiry form on a phone" },
  ewSiteLocal: { src: "/img/stock/ew-site-local.jpg", alt: "An Epic Wolf town page in a browser window beside the home page on a phone" },
  ewSiteForm: { src: "/img/stock/ew-site-form.jpg", alt: "The Epic Wolf inquiry form in a browser window beside a town page on a phone" },
  ewSiteCounty: { src: "/img/stock/ew-site-county.jpg", alt: "The Epic Wolf Palm Beach County page in a browser window beside a guide on a phone" },
  ewSitePhones: { src: "/img/stock/ew-site-phones.jpg", alt: "Three phones showing Epic Wolf pages: a town page, the home page and the inquiry form" },
  ewTee: { src: "/img/brand/ew-tee-3.jpg", alt: "A black T-shirt printed with the Epic Wolf wordmark" },
  ewStorefront: { src: "/img/brand/ew-storefront-3.jpg", alt: "A storefront window carrying the Epic Wolf mark" },

  ewTote: { src: "/img/brand/ew-tote-3.jpg", alt: "A canvas tote printed with the Epic Wolf mark" },

  press: { src: "/img/stock/press.jpg", alt: "The West Palm Beach skyline across the Intracoastal from the Royal Park Bridge" },
  deal: { src: "/img/stock/deal.jpg", alt: "Sailboats moored off the downtown West Palm Beach waterfront" },
  flaglerNight: { src: "/img/stock/flagler-night.jpg", alt: "The West Palm Beach skyline at night from Flagler Drive" },
  waterfront: { src: "/img/stock/waterfront-dusk.jpg", alt: "Docks and waterfront towers under an evening sky" },
  worthAve: { src: "/img/stock/worth-ave.jpg", alt: "Palms and storefronts along Worth Avenue in Palm Beach" },
  sketch: { src: "/img/stock/sketch.jpg", alt: "Pencil sketches of logo ideas in a notebook" },
  swatches: { src: "/img/stock/swatches.jpg", alt: "A printed color swatch book fanned open" },
  loupe: { src: "/img/stock/loupe.jpg", alt: "A hand checking a printed color proof on a wooden table" },
  wrapInstall: { src: "/img/stock/wrap-install.jpg", alt: "An installer smoothing vinyl film over a vehicle panel" },
  ewDigital: { src: "/img/stock/ew-digital.jpg", alt: "The Epic Wolf website in a browser window and on a phone" },
  ewWeb: { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" },

  arches: { src: "/img/disc/arches.jpg", alt: "White arches casting long shadows" },
  marina: { src: "/img/disc/bizdev.jpg", alt: "A marina on the Intracoastal at dusk" },
  digital: { src: "/img/disc/digital.jpg", alt: "Traffic light trails beneath a lit skyline at night" },
  palmShadow: { src: "/img/disc/palm-shadow.jpg", alt: "Palm frond shadows on a white stucco wall" },
  pbArcade: { src: "/img/disc/pb-arcade.jpg", alt: "Mediterranean Revival arches and palms in Palm Beach" },
} satisfies Record<string, Pic>

/** Per service page: a photo pair after the overview, one frame beside "How it connects", an optional strip. */
export const serviceImagery: Record<string, { pair: [Pic, Pic]; side: Pic; strip?: Pic[]; stripLabel?: string }> = {
  "public-relations": { pair: [P.flaglerNight, P.worthAve], side: P.pbArcade },
  branding: {
    pair: [P.sketch, P.heirNight],
    side: P.motivo,
    stripLabel: "Where a brand gets seen",
    strip: [P.inchOunce, P.menu, P.tee, P.litSign, P.windowGfx, P.koozies, P.greek, P.palmWall],
  },
  "digital-marketing": { pair: [P.ewDigital, P.palmShadow], side: P.flaglerNight },
  "business-development": { pair: [P.deal, P.arches], side: P.waterfront },
  "web-design": { pair: [P.ewSiteLocal, P.ewSitePhones], side: P.digital },
  photography: { pair: [P.heirWall, P.whiteHorse], side: P.ewTee },
  "video-production": { pair: [P.ewStorefront, P.heirNightWide], side: P.ewTote },
  signs: {
    pair: [P.factoryWide, P.blade],
    side: P.heirNight,
    stripLabel: "Storefronts, windows and walls",
    strip: [P.litSign, P.windowGfx, P.greek, P.wallSign, P.door, P.auStore, P.menu, P.motivo, P.palmWall, P.anzoWindows],
  },
  "vehicle-wraps": { pair: [P.wrapInstall, P.sedan], side: P.pickup },
  print: {
    pair: [P.ewTote, P.tee],
    side: P.koozies,
    stripLabel: "Printed, mounted and worn",
    strip: [P.swatches, P.loupe, P.menu, P.windowGfx, P.factory, P.door],
  },
}

/**
 * Per town: one wide photograph, matched to what the town is about (water
 * towns get water). Alt text stays generic unless the photo really is that town.
 * The Intracoastal sunrise is left out: it reads as a twin of the Business
 * Development card photo (lagoon-dusk) that sits lower on every town page.
 */
const townPics: Record<string, Pic> = {
  "west-palm-beach": P.flaglerNight,
  "palm-beach": P.pbArcade,
  "palm-beach-gardens": P.palmShadow,
  jupiter: P.marina,
  "juno-beach": P.waterfront,
  "riviera-beach": P.marina,
  wellington: P.palmShadow,
  "royal-palm-beach": P.arches,
  "lake-worth-beach": P.waterfront,
  "boynton-beach": P.marina,
  "delray-beach": P.arches,
  "boca-raton": P.arches,
}
const townPool: Pic[] = [P.waterfront, P.marina, P.palmShadow, P.arches]
export function townImage(slug: string, index: number): Pic {
  return townPics[slug] ?? townPool[index % townPool.length]
}

/** Per guide: the lead image (also the index thumbnail) and one picture set mid-article. */
export const guideImagery: Record<string, { lead: Pic; inline: Pic }> = {
  "how-to-choose-a-branding-agency-palm-beach": { lead: P.anzoWindows, inline: P.greek },
  "market-a-palm-beach-business-without-looking-loud": { lead: P.worthAve, inline: P.motivo },
  "get-found-in-ai-search-local-business": { lead: P.ewDigital, inline: P.flaglerNight },
  "choosing-a-pr-firm-west-palm-beach": { lead: P.press, inline: P.worthAve },
  "branding-agency-vs-marketing-agency": { lead: P.sketch, inline: P.swatches },
  "branding-cost-palm-beach-county": { lead: P.auStoreWide, inline: P.motivo },
  "rebrand-vs-refresh": { lead: P.inchOunce, inline: P.wallSign },
  "business-sign-permits-palm-beach-county": { lead: P.anzoWide, inline: P.factoryWide },
  "vehicle-wrap-cost-palm-beach-county": { lead: P.pickupWide, inline: P.wrapInstall },
  "website-cost-palm-beach-county": { lead: P.ewWeb, inline: P.ewSitePhones },
  "how-to-choose-a-web-design-company-palm-beach-county": { lead: P.ewSiteLocal, inline: P.ewSiteForm },
  "custom-website-vs-website-builder": { lead: P.ewSitePhones, inline: P.ewSiteArticle },
  "website-accessibility-ada-florida": { lead: P.ewSiteArticle, inline: P.ewSiteCounty },
  "website-vs-web-app-vs-custom-software": { lead: P.ewDigital, inline: P.ewSitePhones },
  "website-redesign-checklist": { lead: P.ewSiteCounty, inline: P.ewWeb },
  "filming-and-photo-permits-palm-beach-county": { lead: P.pbArcade, inline: P.heirNightWide },
  "drone-rules-palm-beach-county": { lead: P.lagoonDusk, inline: P.palmShadow },
  "planning-a-brand-shoot-palm-beach-county": { lead: P.ewTote, inline: P.heirWall },
  "boca-raton-sign-approval": { lead: P.heirNightWide, inline: P.whiteHorse },
  "palm-beach-sign-approval": { lead: P.pbArcade, inline: P.motivoLetters },
  "opening-a-business-downtown-boca-raton": { lead: P.arches, inline: P.anzoLetters },
  "opening-a-business-downtown-west-palm-beach": { lead: P.flaglerNight, inline: P.auBand },
  "getting-press-palm-beach-county": { lead: P.press, inline: P.pbArcade },
  "boca-west-palm-palm-beach-marketing-differences": { lead: P.lagoonDusk, inline: P.palmShadow },
}

/** Every real work photo (signage, vinyl, fleet, print), for the home page's brand world and the image sitemap. */
export const workPhotos: Pic[] = Object.values(P).filter((x) => x.src.startsWith("/img/work/"))

export const pageImagery = {
  countyPair: [P.deal, P.worthAve] as [Pic, Pic],
  contact: P.flaglerNight,
}

/** Hero image per topic page (/[service]/[topic]); falls back to the entry's own image. */
export const topicImagery: Record<string, Pic> = {
  "web-design/custom-website-design": P.ewWeb,
  "web-design/website-redesign": P.ewSiteLocal,
  "web-design/ecommerce-websites": P.ewSiteCounty,
  "web-design/landing-pages": P.ewSiteForm,
  "web-design/web-applications": P.ewDigital,
  "web-design/custom-software-development": P.ewSiteArticle,
  "web-design/crm-development": P.ewSiteForm,
  "web-design/mobile-app-development": P.ewSitePhones,
  "web-design/website-maintenance": P.ewSiteArticle,
  "web-design/law-firm-websites": P.ewSiteArticle,
  "web-design/medical-practice-websites": P.ewSitePhones,
  "web-design/wealth-management-websites": P.ewWeb,
  "web-design/luxury-real-estate-websites": P.ewSiteLocal,
  "web-design/home-builder-websites": P.ewSiteCounty,
  "web-design/yacht-and-marine-websites": P.ewDigital,
  "web-design/restaurant-and-hospitality-websites": P.ewSitePhones,
  "web-design/nonprofit-websites": P.ewSiteForm,
  "photography/brand-photography": P.ewTote,
  "photography/headshots-and-team-portraits": P.ewTee,
  "photography/architectural-and-interior-photography": P.heirNightWide,
  "photography/product-photography": P.heirWindow,
  "photography/event-and-gala-photography": P.ewStorefront,
  "photography/aerial-and-drone-photography": P.motivoLetters,
  "video-production/brand-films": P.heirWall,
  "video-production/commercials-and-social-video": P.ewSitePhones,
  "video-production/testimonial-and-case-study-video": P.ewTee,
  "video-production/event-video": P.ewStorefront,
  "video-production/real-estate-and-property-films": P.whiteHorse,
  "video-production/drone-video": P.ewTote,
}

/** Hero image per town x discipline page added after the first nine. */
export const localImagery: Record<string, Pic> = {
  "palm-beach/web-design": P.ewSiteForm,
  "palm-beach-gardens/web-design": P.ewWeb,
  "jupiter/web-design": P.ewSiteCounty,
  "juno-beach/web-design": P.ewSitePhones,
  "riviera-beach/web-design": P.ewDigital,
  "wellington/web-design": P.ewSiteArticle,
  "royal-palm-beach/web-design": P.ewSiteLocal,
  "lake-worth-beach/web-design": P.ewSitePhones,
  "boynton-beach/web-design": P.ewWeb,
  "delray-beach/web-design": P.ewSiteCounty,
  "palm-beach/photography": P.motivoLetters,
  "palm-beach/video-production": P.ewStorefront,
  "boca-raton/photography": P.ewTote,
  "boca-raton/video-production": P.auBand,
}
