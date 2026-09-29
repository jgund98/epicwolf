# Epic Wolf listing kit

Paste these exact words everywhere. Search engines and AI assistants trust a business
more when every profile says the same thing, character for character. Research behind
the target list: `raw/ai-visibility-research.md` (gitignored).

## 1. Canonical facts (never vary these)

| Field | Value |
|---|---|
| Business name | Epic Wolf |
| Website | https://www.epicwolf.agency |
| Phone | (561) 247-5514 *(CONFIRM this is the Epic Wolf line)* |
| Email | *(CONFIRM, e.g. hello@epicwolf.agency, once the inbox exists)* |
| Address | Service-area business, no public street address. Serves Palm Beach County, FL. *(If an office address is ever published, update the site first, then every profile the same day.)* |
| City / region | West Palm Beach, Florida |
| Hours | Mon to Fri, 9 AM to 6 PM *(CONFIRM)* |
| Partners | Jordan Gundlach, Partner, Digital and Growth. Shawn Wolf, Partner, Brand and Street |
| Experience line | The partners have been building brands in South Florida since 2001. *(Experience, not a founding date. Never enter 2001 as "year founded".)* |

## 2. Descriptions

**Tagline (≤ 30 chars):** Impossible to ignore.

**Short (≤ 160 chars):**
West Palm Beach branding, digital marketing and business development agency. Partners building South Florida brands since 2001.

**Medium (≤ 300 chars):**
Epic Wolf is a West Palm Beach branding, digital marketing and business development agency. One partner-led team shapes the brand, gets it found and turns the attention into revenue. The partners have been building brands in South Florida since 2001.

**Long (≤ 750 chars):**
Epic Wolf is a branding, digital marketing and business development agency based in West Palm Beach, Florida. We build brand identities and reputations, run the search, paid and social programs that grow them, and set up the pipeline and partnerships that turn attention into revenue. Public relations sits inside our branding practice, and every brand we build is carried through to the website, the storefront and the fleet. Our partners have been building brands in South Florida since 2001, and every client works directly with them. We work with companies across Palm Beach County and beyond that intend to lead their market.

## 3. Categories and services

**Google Business Profile.** Primary: *Marketing agency*. Secondary: *Advertising agency*, *Public relations firm*, *Graphic designer*, *Internet marketing service*, *Website designer*.

**Directory service lines (in this order):** Branding and brand strategy, Logo and visual identity, Public relations, Digital marketing, SEO and local SEO, Paid social advertising, Business development and lead generation, Web design, Signage and storefront graphics, Vehicle graphics and fleet wraps, Print and brand goods.

**Service area:** West Palm Beach, Palm Beach, Palm Beach Gardens, North Palm Beach, Jupiter, Juno Beach, Riviera Beach, Lake Worth Beach, Wellington, Boynton Beach, Delray Beach, Boca Raton.

## 4. Files (in `listing-kit/`)

| File | Use |
|---|---|
| `logo-square-orange-1024.png` | Profile photo / logo: Google, Bing, Clutch, LinkedIn, Instagram |
| `logo-square-ink-1024.png` | Alternate logo on light-background platforms |
| `wordmark-ink-2400.png`, `wordmark-white-2400.png` | Wordmark, transparent, for directories that want a horizontal logo |
| `cover-linkedin-1584x396.png` | LinkedIn company banner |
| `cover-1640x856.png` | Google/Facebook cover |
| `share-image-1200x630.jpg` | Any "featured image" field |
| Photos | Real work from `public/img/work/` (signage, window vinyl, fleet). Client names show in several. *(CONFIRM each client is fine being shown.)* |

## 5. Do in this order

1. **Google Search Console.** Add property `https://www.epicwolf.agency`, choose the "HTML tag" method, copy the `content` value into `site.verification.google` in `lib/site.ts`, deploy, verify, then submit `https://www.epicwolf.agency/sitemap.xml`.
2. **Bing Webmaster Tools.** Sign in and use "Import from Google Search Console" (fastest), or the meta-tag method into `site.verification.bing`. Submit the sitemap. IndexNow already pings Bing on each deploy (`node scripts/indexnow.mjs`).
3. **Google Business Profile** (business.google.com). Service-area business, hide address, categories above, the long description, logo, cover and 10+ real work photos. Then ask 5–10 past clients for reviews.
4. **Bing Places** (bingplaces.com). Import from Google Business Profile.
5. **LinkedIn company page** (Microsoft-owned). Medium description, logo, banner, website. Both partners list Epic Wolf as their current role.
6. **Directories.** These rank on page one for our queries. Use the short and long descriptions.
   - DesignRush: https://www.designrush.com/submit/agency. The West Palm Beach branding page has only 16 firms.
   - Sortlist: https://www.sortlist.com/providers. #1 on DuckDuckGo for "branding West Palm Beach".
   - Clutch: https://clutch.co/get-listed. Free profile; reviews drive rank.
   - ThreeBestRated: https://threebestrated.com/submit-business?reason=new. Three slots per city.
   - GoodFirms: https://www.goodfirms.co/get-listed
   - TechBehemoths: https://techbehemoths.com (branding and PR, West Palm Beach)
7. **Local credibility.** Chamber of Commerce of the Palm Beaches (https://palmbeaches.org/membership-levels/, from $450/yr), Palm Beach Chamber (Town of Palm Beach), Palm Beach North Chamber, BBB, South Florida Business Journal list surveys, AAF South Florida ADDYs.
8. **After each profile goes live,** add its URL to `site.socials` in `lib/site.ts` and deploy. That publishes the `sameAs` links that tie every profile to the site as one entity.

## 6. Monthly AI check (10 minutes)

Ask ChatGPT, Perplexity, Gemini, Copilot and Claude each of these, and note who gets named and which sources are cited. The cited sources are the next listing targets.

1. Best branding agency in West Palm Beach
2. Who should I hire to rebrand my business in Palm Beach County
3. Marketing agency Palm Beach County for a growing company
4. PR firm West Palm Beach
5. How much does branding cost in Palm Beach County
6. Rebrand or refresh my business, who can help in South Florida
7. Digital marketing agency West Palm Beach
8. Business development consultant Palm Beach
9. Who designs storefront signs and window graphics in West Palm Beach
10. Epic Wolf agency reviews
