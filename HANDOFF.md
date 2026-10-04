# Epic Wolf: handoff

Next.js 16 + Tailwind 4 + motion 12 + Lenis. Archivo (variable, width axis) is the only typeface.
Dev `npm run dev` (3640), prod `next build && next start -p 3641`.

## The story (homepage chapters)
1. **The noise.** Hero: "Make your [brand/launch/story/pitch/name] IMPOSSIBLE TO IGNORE." A real
   South Florida coastline aerial plays through the letters (multiply-blended black layer). Scrolling
   zooms through the first I into the full footage and the chapter copy.
2. **The signal.** "Attention is rented. Reputation is owned. Most marketing is noise. We build the signal..."
   Inks in word by word. Answers chapter one's noise with the site's theme (VOICE.md, "signal over noise").
3. **The orange band** (kinetic rows) and **The craft**: three disciplines only (Branding, Digital
   Marketing, Business Development). PR, websites/software, signs, vehicle graphics and print live
   inside them as capability pages for search, never as a menu.
4. **The standard.** "Every surface. One standard." A wave-cut frame of drifting columns showing the
   Epic Wolf identity in the world (van, storefront, tote, tee, screens, type, color, mark, Palm Beach
   light), with UNMISTAKABLE. breaking over its edge. (Replaced an interactive "type your name" demo.)
5. **The engagement.** Listen, decide, build, go live, keep score. The logo's E turns a quarter turn
   across the five phases and lands as the W.
6. **The partners.** Jordan and Shawn as matched B&W cutouts, each in front of half of the wordmark
   on orange; the halves slide together. (Copy deliberately does not mention their separate companies.)
7. **Home.** 561 with the West Palm Beach skyline inside the numerals, coordinates, South Florida towns.
8. FAQ, then "Your move." with the inquiry form.

## Brand system
- Logo: `components/brand/glyphs.ts` (drawn from primitives; the W is the E rotated a quarter turn,
  its short middle stroke is the only orange). A monoline alternative was tried and rejected.
- The mark recurs quietly: every chapter label's E turns into the W on scroll, the cursor is the
  orange bar, an orange reading line runs under the header, the arrival animation assembles the
  wordmark, favicon/OG are generated from the same geometry (`scripts/brand-assets.mjs`).
- Colors: ink #0A0A0B, paper #FFFFFF, flare #FF4A1C. Wave-cut image crop (`.cut`).
- Copy laws in `VOICE.md` (no em dashes, no commas in headlines, no fabricated claims).

## CONFIRM before real launch
- **Domain.** epicwolf.com belongs to an unrelated owner. Set `NEXT_PUBLIC_SITE_ORIGIN` to the final
  domain; canonicals, sitemap, schema and llms.txt all follow it.
- **Phone** (561) 247-5514 is Epic's line; **email** is blank (hidden) until an inbox exists.
- **Address** intentionally omitted (no invented home base). Add `streetAddress`/`postalCode` in
  `lib/site.ts` once there is a public office; this helps the map pack.
- **Lead form** posts to `/api/lead` (Brevo). Set `BREVO_API_KEY` and `LEAD_TO_EMAIL` in Vercel;
  until then inquiries are only logged.
- Claims to approve: "A partner reads every inquiry and replies personally", the "How we work" principles on About, the investment ranges in the form.
- Service pages include agent-written timelines ("six to ten weeks" for identity work) and one
  published market range for wraps (sourced). Review before launch.
- Copy pass (signal over noise), items to verify:
  - Chapter four tiles are real storefront and signage photos, and client names are legible in several. Confirm
    the partners can show each one under the Epic Wolf name with the client's blessing. The copy no longer says
    "we make every piece ourselves" (VOICE law 6); it says we "see every piece through".
  - Wrap pricing disagrees between pages: the Vehicle Graphics FAQ cites a "Hyperformance Graphics 2026" guide
    (van $3,500 to $6,500), the wrap-cost guide cites Lee's Signs and VehicleWrapCost (van $3,500 to $8,000).
    Verify the Hyperformance source exists and align the two.
  - Third-party facts on town pages were agent-checked 2026-09-28 (WEF $536.2M impact, Port of Palm Beach
    ranking, Innovation Campus size, 328 Palm Beach landmarks). Riviera Beach says Rybovich opened a building
    "this year", which will age; re-date it.
  - Chapter one (Hero, untouched) opens with "Over six million people live in South Florida." True for the Miami
    metro at the 2020 census; keep only if the partners are comfortable with a number on the page.
  - Partner titles "Brand and street" / "Digital and growth" read more trade than prestige. Confirm the titles
    the partners want (for example "Brand and experience").
- Not yet done off-site (biggest SEO/AI-answer levers): Google Business Profile, Clutch/DesignRush/
  Yelp/BBB listings, LinkedIn, consistent name + phone everywhere, first reviews.

## Gotchas
- Tailwind scans from `source("..")`; the dev server must be started from this folder.
- motion's array-form `useTransform` on opacity is hardware-accelerated and does not clamp; use
  `lib/motion.ts` `useRange` for scroll-linked opacity.
- Year-long cache headers are production-only in `next.config.ts` (in dev they pin stale CSS).
- Portraits: `scripts/cutout.mjs` (background removal) then `scripts/partners.mjs` (scale match).

## Media to license (owner said we'll contact the owners)
**561 montage** (`public/video/561.mp4`, cut from these; standard-license YouTube unless noted):
- Jupiter Inlet Lighthouse golden hour, StreeTart: https://youtu.be/5KQmg0hyn_A
- Boats into the sunset at Jupiter Inlet, Blue Eye Visuals: https://youtu.be/XH7D28xkAmQ
- WPB skyline night timelapse, MrCobas: https://youtu.be/rHjiVk81mfY
- 4th on Flagler fireworks, Troy Collier: https://youtu.be/de4TQN1Swes
- The Square neon tree timelapse, Glowing Globetrotter: https://youtu.be/Q44dSSzqSY8

**Photography** (Unsplash/Pexels licenses; credit is courteous):
- Causeway light trails (Digital Marketing), Michael J. Vega: https://unsplash.com/photos/gPPi3cEPiwc
- Lake Worth Lagoon at dusk (Business Development), Clay LeConey (Unsplash)
- WPB marina blue hour, Clay LeConey (Unsplash)
- Tower traced in amber light (Branding page), Maksim Shutov (Unsplash)
- Palm shadow wall, Kaue Martins Bergamasco (Unsplash); white arches, Kings Lee (Unsplash);
  Palm Beach arcade, Hector Falcon: https://unsplash.com/photos/GZy6Vnb_EJM
- Full source list with URLs: see the sourcing manifests (disc/MANIFEST.md, vid561/MANIFEST.md)
  copied into `raw/` locally.

## Logo in progress
Jordan supplied a new block logo (EPIC WOLF with a wolf's head carved into the W and an orange
ear). A by-eye recreation is parked in `components/brand/glyphs-draft.ts` (not imported). Next
step: trace the original art file, then swap it into glyphs.ts (header, footer, favicon, OG,
scenes, intro, chapter five).

## Town x discipline pages (2026-10-04)
- `/palm-beach-county/[town]/[service]`: Boca Raton (signs, branding, public-relations, digital-marketing,
  web-design) and Palm Beach (signs, branding, public-relations, digital-marketing). West Palm Beach is
  covered by the main service pages. Data in `lib/local-boca.ts` and `lib/local-palm-beach.ts`, joined in
  `lib/local-services.ts`. Each page: answer capsule under the h1, sourced "On the ground" facts, a
  three-beat plan, the service scope list (minus anything the town bans, via `omit`), FAQs, guide links
  and the inquiry form on the page itself (`#start`, lead email shows the page it came from).
- Six guides for the three priority markets in `lib/guides-local.ts`.
- `node scripts/local-audit.mjs --links` lints the copy laws and checks every source URL.
  `node scripts/local-shots.cjs [origin]` audits and screenshots the pages (restart the prod server after a build).
- To verify before reuse: Boca downtown sign authority is under revision (Ordinance 4035 may be replaced);
  DDA and CRA grant amounts are deliberately not quoted; the Palm Beach Daily News and Business Journal
  sites block automated reading, so only their help centers were checked.
