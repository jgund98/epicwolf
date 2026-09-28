# Epic Wolf: handoff

Next.js 16 + Tailwind 4 + motion 12 + Lenis. Archivo (variable, width axis) is the only typeface.
Dev `npm run dev` (3640), prod `next build && next start -p 3641`.

## The story (homepage chapters)
1. **The noise.** Hero: "Make your [brand/launch/story/pitch/name] IMPOSSIBLE TO IGNORE." A real
   South Florida coastline aerial plays through the letters (multiply-blended black layer). Scrolling
   zooms through the first I into the full footage and the chapter copy.
2. **The belief.** "Attention is rented. Reputation is owned." Inks in word by word.
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
- Not yet done off-site (biggest SEO/AI-answer levers): Google Business Profile, Clutch/DesignRush/
  Yelp/BBB listings, LinkedIn, consistent name + phone everywhere, first reviews.

## Gotchas
- Tailwind scans from `source("..")`; the dev server must be started from this folder.
- motion's array-form `useTransform` on opacity is hardware-accelerated and does not clamp; use
  `lib/motion.ts` `useRange` for scroll-linked opacity.
- Year-long cache headers are production-only in `next.config.ts` (in dev they pin stale CSS).
- Portraits: `scripts/cutout.mjs` (background removal) then `scripts/partners.mjs` (scale match).
