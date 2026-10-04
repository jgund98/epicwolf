import type { LocalService } from "./types"

/**
 * Boca Raton discipline pages. Facts verified on primary sources 2026-10-04
 * (City of Boca Raton code and pages, Palm Beach County, U.S. Census,
 * Google help center, the outlets' own sites). Copy laws: VOICE.md.
 * Downtown rules are under revision; keep downtown claims general.
 */

const CODE = "https://library.municode.com/fl/boca_raton/codes/code_of_ordinances?nodeId="
const CENSUS = "https://www.census.gov/quickfacts/fact/table/bocaratoncityflorida/PST045224"
const GBP = "https://support.google.com/business/answer/3038177?hl=en"

const beyond = (what: string) =>
  `Yes. Epic Wolf is based in West Palm Beach and works with companies across Palm Beach County, South Florida and the rest of the country. Boca Raton has its own page because its rules and its audience are specific enough to change how ${what} should be done here. Wherever the project is, the same partners lead it, and the brand, the marketing and the physical presence come from one team.`

export const bocaServices: LocalService[] = [
  {
    town: "boca-raton",
    service: "signs",
    omit: ["Illuminated signs", "Banners and trade show displays"],
    metaTitle: "Sign Company in Boca Raton FL | Epic Wolf",
    metaDescription:
      "Boca Raton business signs designed to the city code: channel letters, blade signs, window graphics, permits and Community Appearance Board approvals.",
    kicker: "Sign company in Boca Raton, FL",
    headline: "Storefronts That Belong on a Boca Street",
    answer:
      "Epic Wolf designs business signs and storefronts for Boca Raton companies and manages fabrication, permits and install through vetted partners. Every sign starts from Chapter 24 of the city code, which limits colors, letter heights and window coverage, and from the Community Appearance Board's standard of understated, elegant design. We are a West Palm Beach agency, so the sign, the brand and the website come from one team.",
    intro: [
      "Boca Raton writes its taste into law. The sign code asks for a well-planned, uncluttered and understated streetscape built on simple, elegant design and moderation in scale. The Community Appearance Board judges projects on whether they add to the city's image as a place of beauty, harmony and high quality. In Boca a sign is a brand decision and a legal one at the same time.",
      "That changes how the work starts. Wall signs have to be channel letters or individually fabricated dimensional letters, so the familiar lit box cabinet is off the table unless the board approves an exception. A permanent sign can carry three colors at most, not counting black and white, and the main message has to be a single color. A logo can stand no taller than one and a half times the height of the words beside it. Designing inside those limits from the first sketch is how a storefront looks deliberate instead of compromised.",
      "Downtown adds a layer. Ground-floor letters inside the downtown district default to 12 inches and top out at 18, and every in-line shop with an outdoor entrance can have one blade sign hung under the arcade. The downtown development order has long pointed designers to Addison Mizner's tradition of stucco, clay tile, painted window frames and arcades, and asks for reinterpretation rather than imitation. We design for that street, not around it.",
    ],
    ground: [
      {
        title: "The review clock",
        body: "The city must approve, deny or comment on a complete standard sign permit within 30 days, and each resubmittal gets up to 15 more business days. If an applicant does not answer the city's comments, the application is deemed abandoned 30 days after notice, with only one 30-day extension, and permit fees are not refunded.",
        source: { label: "Boca Raton Code Sec. 24-33", href: `${CODE}VOII_CH24SI_ARTIIPE_S24-33ADRESIPEEXALIDSIARSI` },
      },
      {
        title: "Size and placement",
        body: "In commercial districts, wall sign area per frontage is the greater of 20 percent of the signable facade or the code's frontage table, capped at 120 square feet. The code's own example gives a 60-foot frontage 57 square feet. Signs must be centered in the signable area, centered on an entrance or justified to a corner, and may not exceed 75 percent of that area's width or height.",
        source: { label: "Boca Raton Code Sec. 24-81", href: `${CODE}VOII_CH24SI_ARTIIIRE_DIV2SIREZODI_S24-811LBNC40POREPTPLMCVCLIDIDDCONO` },
      },
      {
        title: "Windows",
        body: "Window signs are allowed only on the ground floor and may cover 20 percent of a window or 9 square feet, whichever is less. Only 3 square feet per business may be printed on paper or vinyl. The rest must be individual letters, logos and graphics, and window signs may not be illuminated.",
        source: { label: "Boca Raton Code Sec. 24-100", href: `${CODE}VOII_CH24SI_ARTIIIRE_DIV3DESIST_S24-100WISI` },
      },
      {
        title: "The board",
        body: "Master sign plans and alternative designs go to the Community Appearance Board, which meets on Tuesday evenings twice a month. Items are due a week before the meeting, and applications are filed through the city's Boca eHub portal. Once a master sign plan is approved, the city will not consider one-off deviations from it.",
        source: { label: "City of Boca Raton: Community Appearance Board", href: "https://myboca.us/2260/Community-Appearance-Board" },
      },
      {
        title: "City or county",
        body: "A Boca Raton address does not always mean city rules. The county's parcel control numbers start with 00 for unincorporated land, which follows the county's own sign rules in Article 8 of its land development code, while City of Boca Raton parcels start with 06. Check the parcel number before anyone designs.",
        source: { label: "Palm Beach County zoning FAQ", href: "https://discover.pbc.gov/pzb/FAQPages/Zoning.aspx" },
      },
    ],
    plan: [
      {
        title: "Check the address first",
        body: "We confirm whether the property sits in the city, the downtown district or unincorporated county, and whether a landlord's master sign plan already sets sizes, colors and letter styles. That one step decides which rules apply and how long approval will take.",
      },
      {
        title: "Design to the code",
        body: "The sign is drawn from the brand inside Boca's limits: three colors, a single-color message, dimensional letters, a logo in proportion and a blade sign where the storefront has an arcade. When a project deserves more, a ground sign built from materials like natural stone, stainless steel or glass can qualify as an architectural sign with additional area and height.",
      },
      {
        title: "Permit and install",
        body: "We assemble the drawings, file the permit, answer comments well inside the 30-day window and take board items through Boca eHub. Fabrication and install run through vetted partners we manage, and we stay on it through the final inspection.",
      },
    ],
    cta: {
      line: "Send us the storefront address.",
      body: "We will check whether it falls under the city, the downtown district, the county or a landlord's sign plan, and tell you what that means for the sign you have in mind.",
    },
    faqs: [
      {
        q: "How long does a sign permit take in Boca Raton?",
        a: "The city must approve, deny or comment on a complete standard sign permit within 30 days, and each resubmittal gets up to 15 more business days. Items that go to the Community Appearance Board, such as master sign plans and alternative designs, take longer because the hearing is set at least 25 days after staff review. Answer comments quickly, because an application left unanswered for 30 days is treated as abandoned.",
      },
      {
        q: "Can I use a lit box sign in Boca Raton?",
        a: "Usually not. Boca Raton requires wall identity signs to be face-lit channel letters, reverse channel letters or individually fabricated dimensional letters. A cabinet or box sign is possible only through an alternative identity sign approval, which means convincing the Community Appearance Board the design is equal or superior. Most brands get a better result by designing for dimensional letters from the start.",
      },
      {
        q: "How much of a storefront window can signs cover in Boca Raton?",
        a: "Less than most owners expect. Window signs are allowed only on the ground floor and may cover 20 percent of a window or 9 square feet, whichever is less. Only 3 square feet per business may be printed on paper or vinyl, and window signs cannot be lit. Full-window printed graphics are out, so the window has to work with letters, logos and restraint.",
      },
      {
        q: "How many colors can a business sign have in Boca Raton?",
        a: "Three, not counting black and white. Boca Raton limits permanent signs to three colors, and the main message has to be a single color, with a second color allowed only for an outline or shadow. Fluorescent pigments and color-changing signs are prohibited. A brand with a large palette needs a sign version built for that rule, which is part of our brand work.",
      },
      {
        q: "Does a Boca Raton address mean the city sign code applies?",
        a: "Not always. The city says a Boca Raton address does not necessarily mean a property is inside city limits, and large areas to the west are unincorporated Palm Beach County. Look up the parcel control number: city parcels begin with 06 and unincorporated parcels begin with 00. County properties follow the county's sign rules in Article 8 of its land development code.",
      },
      {
        q: "Do you make signs for businesses outside Boca Raton?",
        a: beyond("a storefront"),
      },
    ],
    guides: ["boca-raton-sign-approval", "opening-a-business-downtown-boca-raton", "business-sign-permits-palm-beach-county"],
    image: { src: "/img/work/anzo-sign-wide.jpg", alt: "Dimensional channel letters over a Mediterranean restaurant entrance" },
  },

  {
    town: "boca-raton",
    service: "branding",
    metaTitle: "Branding Agency in Boca Raton FL | Epic Wolf",
    metaDescription:
      "Boca Raton branding for headquarters, medical and wealth firms and downtown retail, built for a demanding audience and the city's appearance standards.",
    kicker: "Branding agency in Boca Raton, FL",
    headline: "A Brand Boca Takes Seriously",
    answer:
      "Epic Wolf is a West Palm Beach branding agency that builds identity systems for Boca Raton companies, from corporate headquarters and medical and wealth firms to downtown retail and dining. The work covers strategy, naming, logo and visual system, messaging and every physical surface, designed for an audience that compares carefully and a city that reviews what a brand looks like on the street.",
    intro: [
      "Boca Raton is where Palm Beach County keeps its headquarters. The city's economic development office says more than half of the county's corporate headquarters are here, and D-Wave chose the Boca Raton Innovation Campus for its new one. Brands in this market are read by boards, procurement teams and investors before they are read by anyone else.",
      "The consumer audience is just as exacting. Census figures show more than six in ten Boca adults hold a bachelor's degree or higher, nearly a quarter of residents are 65 or older, and about a quarter speak a language other than English at home. This is an audience that notices careless typography, distrusts hype and expects a brand to read clearly in more than one language.",
      "The city's own taste is written down too. Boca's sign code asks for simple, elegant design and moderation in scale, and its pre-approved exterior paint palette runs to whites, creams, beiges and soft grays. A Boca brand system needs a version of itself that lives comfortably inside those rules: a restrained street palette, letterforms that work as dimensional signage, and a voice that sounds composed rather than loud.",
    ],
    ground: [
      {
        title: "Who buys here",
        body: "The City of Boca Raton's economic development office says the city is home to more than half of Palm Beach County's corporate headquarters, and that it assisted D-Wave in choosing the Boca Raton Innovation Campus for its new headquarters.",
        source: { label: "City of Boca Raton: Office of Economic Development", href: "https://myboca.us/470/Economic-Development" },
      },
      {
        title: "The audience",
        body: "Census QuickFacts for the city show 61.8 percent of adults 25 and older with a bachelor's degree or higher, 24.6 percent of residents 65 and older, 25.2 percent speaking a language other than English at home and 20.4 percent born abroad.",
        source: { label: "U.S. Census Bureau QuickFacts: Boca Raton", href: CENSUS },
      },
      {
        title: "The design standard",
        body: "The Community Appearance Board approves projects that contribute to the image of the city as a place of beauty, spaciousness, harmony, taste, fitness, broad vistas and high quality, and must spell out any criterion a project fails. That is the brief every exterior application of a Boca brand is measured against.",
        source: { label: "Boca Raton Code Sec. 2-129", href: `${CODE}PTIICOOR_CH2AD_ARTIIIBOCOCOSPMA_DIV4COAPBO_S2-129CRAP` },
      },
      {
        title: "Color on the street",
        body: "Permanent signs are limited to three colors, not counting black and white, with a single-color primary message and no fluorescent pigments. Logos are allowed but may stand no taller than 1.5 times the height of the sign copy.",
        source: { label: "Boca Raton Code Sec. 24-56", href: `${CODE}VOII_CH24SI_ARTIIIRE_DIV1STAPALSI_S24-56GEDESTALSI` },
      },
      {
        title: "Exterior paint",
        body: "The city publishes a Paint Color Palette and Guidelines with pre-approved Sherwin-Williams and Benjamin Moore colors, mostly whites, creams, beiges and soft grays. Colors on the list get staff review instead of the board. Painting stone, coral rock, brick or architectural concrete needs board approval regardless of color.",
        source: { label: "City of Boca Raton Paint Color Palette (PDF)", href: "https://www.myboca.us/DocumentCenter/View/37781" },
      },
    ],
    plan: [
      {
        title: "Learn how the buyer decides",
        body: "We interview the people who sell, the people who buy and the people who say no, and study the competitors a Boca buyer compares you to. For a corporate client that often means a formal brief and an approval path. For a practice or a shop it means the moment a patient or customer chooses.",
      },
      {
        title: "Build one system",
        body: "Strategy, name if needed, identity, voice and messaging, then the rules that make it hold: a full palette for screens and print, a three-color version for the street, dimensional letterforms, and copy that works in a second language where the audience needs it.",
      },
      {
        title: "Roll it out everywhere",
        body: "The same team carries the brand onto the website, the signage, print and the launch story, from one set of files. The market meets one brand, not five versions of it.",
      },
    ],
    cta: {
      line: "Tell us what the brand has to carry.",
      body: "A launch, a rebrand, a second location or a company that outgrew its logo. A partner will reply with how we would approach it.",
    },
    faqs: [
      {
        q: "How much does branding cost in Boca Raton?",
        a: "It depends on scope more than the zip code. A focused identity for one practice or shop costs far less than a full system for a multi-location company with naming, messaging and rollout. Research depth, the number of applications and how many decision makers sign off drive the price. Our guide to branding cost in Palm Beach County walks through the published market ranges.",
      },
      {
        q: "Do you work with corporate marketing teams in Boca Raton?",
        a: "Yes. Boca Raton holds more than half of the county's corporate headquarters, and their marketing teams usually need an agency that takes a formal brief, respects existing brand standards and reports clearly. We can own a full rebrand or work alongside an in-house team on a specific program, such as a campus identity, a product launch or executive positioning.",
      },
      {
        q: "Can a Boca Raton brand use bright colors?",
        a: "On screens and in print, yes. On the building it gets harder. Boca Raton limits permanent signs to three colors, not counting black and white, and its pre-approved exterior paint palette is mostly whites, creams, beiges and soft grays. We design a full palette for digital and print and a restrained street version, so the brand reads as the same company everywhere.",
      },
      {
        q: "Should a Boca Raton brand look Mediterranean?",
        a: "Not literally. Boca's downtown development order has long encouraged Addison Mizner's ideas as a design influence while asking for reinterpretation rather than copies. For most brands the lesson is restraint and craft, not arches in the logo. We look at where the business sits, who it serves and what its competitors already look like, then design something that belongs without blending in.",
      },
      {
        q: "Do you take branding projects outside Boca Raton?",
        a: beyond("a brand"),
      },
    ],
    guides: ["branding-cost-palm-beach-county", "how-to-choose-a-branding-agency-palm-beach", "boca-west-palm-palm-beach-marketing-differences"],
    image: { src: "/img/work/au-storefront-wide.jpg", alt: "Navy window bands carrying one logo system across an office storefront and its doors" },
  },

  {
    town: "boca-raton",
    service: "public-relations",
    metaTitle: "PR Firm in Boca Raton FL | Public Relations | Epic Wolf",
    metaDescription:
      "Boca Raton public relations: story development, media relations with Boca magazine and regional press, charity season strategy and executive positioning.",
    kicker: "Public relations firm in Boca Raton, FL",
    headline: "Earn the Story Boca Repeats",
    answer:
      "Epic Wolf is a West Palm Beach agency that runs public relations for Boca Raton companies and nonprofits: story development, media relations, executive positioning and community and charity strategy. Local targets include Boca magazine, the Boca Raton Tribune, The Coastal Star and the regional business and broadcast press. Coverage is earned with news value and timing, never promised, and the same team ties it to the brand and the website.",
    intro: [
      "Boca has a media layer of its own, and each outlet works differently. Boca magazine routes print and web story queries to different editors and closes its arts and entertainment listings three months before publication. The Boca Raton Tribune asks for every idea and release by email, with no phone calls. BocaNewsNow, a hyper-local site, runs business press releases as a paid service. Knowing which door is earned and which is bought is the first piece of local PR.",
      "The social calendar is the second. Boca magazine publishes its Charity Register each September as the guide to the area's charitable organizations and their major fundraisers, and the Greater Boca Raton Chamber of Commerce runs its own circuit of awards luncheons, a gala and leads groups. A business that shows up in those rooms for years earns a different kind of coverage than one that sends a release.",
      "The third is expertise. Between FAU and its Research Park, Boca Raton Regional Hospital and a deep bench of corporate headquarters, Boca has no shortage of people with something to say. The executives who get quoted are the ones with a clear point of view, prepared to say it well and easy to reach. We build that before we pitch anyone.",
    ],
    ground: [
      {
        title: "Boca magazine",
        body: "Boca magazine's contact page sends print story queries to its print editor and web items to its web editor, and arts and entertainment listings such as fundraisers, openings and performances to its A&E editor. The deadline for the A&E section is three months before publication.",
        source: { label: "Boca magazine: Contact", href: "https://bocamag.com/contact-us/" },
      },
      {
        title: "The Tribune",
        body: "The Boca Raton Tribune asks for all editorial ideas and press releases by email and asks for no editorial or public relations phone calls.",
        source: { label: "The Boca Raton Tribune: Contact", href: "https://www.bocaratontribune.com/contact-us/" },
      },
      {
        title: "Paid versus earned",
        body: "BocaNewsNow publishes business press releases through a paid online form, invoiced before publication. Government agencies and nonprofits submit announcements by email instead. A paid release is useful for an announcement, but it is not the same thing as a story an editor chose to run.",
        source: { label: "BocaNewsNow: Press release submissions", href: "https://bocanewsnow.com/pressrelease/" },
      },
      {
        title: "Charity season",
        body: "Boca magazine's Charity Register, published in September, describes itself as a guide to charitable organizations and their major fundraising events. It is the map of the season's galas and the causes local leaders are seen supporting.",
        source: { label: "Boca magazine: Charity Register", href: "https://bocamag.com/charity-register/" },
      },
      {
        title: "The Chamber",
        body: "The Greater Boca Raton Chamber of Commerce runs leads groups made of non-competitive businesses that meet twice a month to exchange referrals, and a Leadership Boca program limited to 35 participants. Programs like these build the relationships local coverage tends to follow.",
        source: { label: "Greater Boca Raton Chamber: Leads Groups", href: "https://www.bocachamber.com/leads-groups/" },
      },
    ],
    plan: [
      {
        title: "Find the news",
        body: "We look for what is genuinely new: a hire, a launch, a result, a point of view no one else in the market holds. Then we map it against the calendar Boca already runs on, from the Charity Register in September to the season's festivals and awards.",
      },
      {
        title: "Prepare the spokesperson",
        body: "Messages, proof points, a bio and photography that look like the brand, and media training so the first interview sounds like the tenth. An executive who is ready is an executive reporters call back.",
      },
      {
        title: "Pitch the right door",
        body: "Each outlet gets the pitch it asks for, through the channel it asks for, on its timeline. We are plain with clients about what is earned and what is paid, and we measure the work in coverage, inquiries and the conversations it opens.",
      },
    ],
    cta: {
      line: "Tell us the story you want told.",
      body: "A partner will tell you honestly whether it is news yet, and what would make it news.",
    },
    faqs: [
      {
        q: "Can a Boca Raton PR firm guarantee coverage?",
        a: "No, and be wary of any firm that says it can. Editors decide what runs. A good firm finds the real news in your business, times it to each outlet's deadlines, prepares a strong spokesperson and pitches through the channels each outlet asks for. In Boca that means knowing, for example, that Boca magazine routes print and web pitches to different editors.",
      },
      {
        q: "Is a paid press release the same as press coverage?",
        a: "No. A paid release is advertising formatted as news. Some Boca outlets, such as BocaNewsNow, publish business press releases as a paid service, while earned coverage is a story an editor chose to run. Paid placement can help an announcement reach people, but it does not carry the same credibility. We tell clients which is which before they spend anything.",
      },
      {
        q: "How far ahead should a Boca Raton event be pitched?",
        a: "Months ahead for magazines. Boca magazine closes its arts and entertainment section three months before publication, so a fundraiser, opening or performance should be submitted well in advance. Newspapers and online outlets move faster but still need the details, images and a ready contact. We build a press calendar backward from the event date so nothing is late.",
      },
      {
        q: "Does charity work help a Boca Raton company's reputation?",
        a: "It can, when it is real and sustained. Boca's charity season is organized and widely covered, and Boca magazine publishes a Charity Register each September as the guide to local organizations and their major fundraisers. Businesses that support a cause for years build standing that coverage reflects. One-time sponsorships bought for exposure rarely do, and editors can tell the difference.",
      },
      {
        q: "Do you handle public relations outside Boca Raton?",
        a: beyond("public relations"),
      },
    ],
    guides: ["choosing-a-pr-firm-west-palm-beach", "getting-press-palm-beach-county", "boca-west-palm-palm-beach-marketing-differences"],
    image: { src: "/img/disc/arches.jpg", alt: "White arches casting long shadows" },
  },

  {
    town: "boca-raton",
    service: "digital-marketing",
    metaTitle: "Digital Marketing Agency in Boca Raton FL | Epic Wolf",
    metaDescription:
      "Boca Raton digital marketing and local SEO: Google Business Profile, search, paid media and visibility in ChatGPT and Google AI answers.",
    kicker: "Digital marketing agency in Boca Raton, FL",
    headline: "Be the Answer When Boca Searches",
    answer:
      "Epic Wolf is a West Palm Beach agency that runs digital marketing for Boca Raton businesses: local SEO, Google Business Profile management, paid search and social, content and visibility in AI answers from ChatGPT and Google. The work starts with the details Boca businesses most often get wrong, like whether a Boca Raton address is actually inside the city, and ends in measured inquiries and revenue.",
    intro: [
      "Boca is a researched market. More than six in ten adults in the city hold a bachelor's degree or higher, and buyers here read reviews, compare firms and check a company's search presence before they call. Digital marketing in Boca is less about reach and more about being the credible answer at the moment someone looks.",
      "Local search has a Boca-specific trap. The city covers about 29 square miles of land, but the Boca Raton mailing address stretches far west into unincorporated Palm Beach County. Businesses list a Boca address, target the wrong area or write location pages for a city they are not technically in. Google is strict about the basics: the business name has to be the real one, a service-area business has to hide its address, and a virtual office cannot hold a profile at all.",
      "Then there is language and season. About a quarter of Boca residents speak a language other than English at home, and a share of every Boca audience spends part of the year somewhere else. Campaigns that account for both, with language versions where they matter and budgets that follow the season, waste far less.",
    ],
    ground: [
      {
        title: "City or county",
        body: "The City of Boca Raton says plainly that having a Boca Raton address does not necessarily mean a property is within city limits. Parts of Boca Raton are unincorporated Palm Beach County and are served by the county. Location pages and service areas should describe where a business really is.",
        source: { label: "City of Boca Raton: Resident Resources", href: "https://myboca.us/2057/Resident-Resources" },
      },
      {
        title: "Google's name rule",
        body: "Google's Business Profile guidelines say unnecessary information in a business name is not permitted and could result in suspension of the profile. Adding a city or a service keyword to the name is the shortcut that most often costs a listing.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
      {
        title: "Offices that do not qualify",
        body: "Under the same guidelines, a virtual office is not eligible for a profile, and an office in a co-working space qualifies only if it keeps clear signage, receives customers during business hours and is staffed. Service-area businesses should hide their address from customers.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
      {
        title: "Service areas",
        body: "A Google profile can list up to 20 service areas, and Google says the overall area should not extend more than about two hours of driving from where the business is based. Hybrid businesses can show a storefront address and a service area at the same time.",
        source: { label: "Google: Manage your service area", href: "https://support.google.com/business/answer/9157481?hl=en" },
      },
      {
        title: "The audience online",
        body: "Census QuickFacts show 25.2 percent of Boca Raton residents speak a language other than English at home and 61.8 percent of adults hold a bachelor's degree or higher. Both shape what a Boca campaign should say and in which languages.",
        source: { label: "U.S. Census Bureau QuickFacts: Boca Raton", href: CENSUS },
      },
    ],
    plan: [
      {
        title: "Fix the foundation",
        body: "A clean Google Business Profile with the real name and the right categories, the same name, address and phone everywhere, a Bing listing, a fast site with structured data, and tracking on every call and form. Most Boca businesses gain more from this step than from any campaign.",
      },
      {
        title: "Build what Boca searches",
        body: "Service and location pages that are honest about jurisdiction, a steady reviews program, and content that answers the questions buyers actually ask in plain, quotable language, which is what Google and AI assistants lift into their answers.",
      },
      {
        title: "Spend where it returns",
        body: "Paid search and social aimed at the searches and audiences that convert, budgets that follow the season and a monthly report in inquiries and revenue, never impressions.",
      },
    ],
    cta: {
      line: "Tell us where you want to show up.",
      body: "Share the searches that matter to your business and a partner will reply with how we would approach them.",
    },
    faqs: [
      {
        q: "How do I get my Boca Raton business into Google's map results?",
        a: "Start with an accurate, complete Google Business Profile, then build relevance and prominence. Use your real business name with no added keywords, choose the right primary category, keep hours current, collect genuine reviews and make sure the website shows the same name, address and phone. If you serve customers at their location, set a service area and hide your address, as Google requires.",
      },
      {
        q: "My address says Boca Raton but I am not in the city. Does it matter?",
        a: "It matters for accuracy and for rules. The city itself says a Boca Raton address does not necessarily mean a property is inside city limits. You can still use the mailing address, but permits, sign rules and business tax approvals follow your actual jurisdiction, and location pages should describe where you really are and who you actually serve.",
      },
      {
        q: "Can I add Boca Raton to my business name on Google?",
        a: "Not unless it is part of your real-world name. Google's guidelines say unnecessary information in a business name is not permitted and can lead to suspension of the profile. Adding a city or service keyword to the name is a common shortcut that can cost the listing entirely. Relevance should come from your categories, services, website and reviews.",
      },
      {
        q: "Can you help a Boca Raton business show up in ChatGPT?",
        a: "Yes, by working on what those assistants read. ChatGPT and Google's AI answers lean on sources that describe a business clearly and consistently: its own website, its Google and Bing profiles, reviews and credible local coverage. We structure every page to answer a real question directly, keep business details identical everywhere and build the outside mentions assistants cite. No one can guarantee a mention.",
      },
      {
        q: "Do you run digital marketing for companies outside Boca Raton?",
        a: beyond("digital marketing"),
      },
    ],
    guides: ["get-found-in-ai-search-local-business", "boca-west-palm-palm-beach-marketing-differences", "opening-a-business-downtown-boca-raton"],
    image: { src: "/img/stock/ew-digital.jpg", alt: "The Epic Wolf website on a laptop and a phone" },
  },

  {
    town: "boca-raton",
    service: "web-design",
    metaTitle: "Web Design Company in Boca Raton FL | Epic Wolf",
    metaDescription:
      "Boca Raton web design and custom software: fast, accessible, multilingual-ready websites for medical groups, firms and headquarters.",
    kicker: "Web design company in Boca Raton, FL",
    headline: "Websites Built for How Boca Buys",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites and custom software for Boca Raton businesses, from medical groups and wealth firms to headquarters and downtown retail. Sites are fast, accessible and structured for search and AI answers, and the same team handles the brand behind them and the marketing that brings people to them.",
    intro: [
      "In Boca the website is usually the second meeting. Someone hears the name at a dinner, a board meeting or a doctor's office, then looks it up. For a corporate buyer the site works as a capability statement. For a patient or a homeowner it is the decision. Either way it has to confirm what they were told.",
      "Boca's audience shapes the build. Nearly a quarter of city residents are 65 or older, and a quarter speak a language other than English at home. Legible type, strong contrast, clear navigation and a structure ready for a second language are not extras here. They decide whether a patient books or a client calls.",
      "Boca's technology community raises the bar as well. FAU's Research Park and its Tech Runway accelerator, the Boca Raton Innovation Campus and a corridor of headquarters put many prospects in front of sophisticated software every day. A site that loads slowly or breaks on a phone reads as a company that cuts corners.",
    ],
    ground: [
      {
        title: "The audience",
        body: "Census QuickFacts show 24.6 percent of Boca Raton residents are 65 or older and 25.2 percent speak a language other than English at home. Readability, accessibility and language options are conversion decisions in this market.",
        source: { label: "U.S. Census Bureau QuickFacts: Boca Raton", href: CENSUS },
      },
      {
        title: "Tech runway",
        body: "Florida Atlantic University describes FAU Tech Runway as a public-private partnership that provides services to accelerate the development of innovative startup companies. The Research Park at FAU sits on the university's Boca campus.",
        source: { label: "FAU: Research Park and Tech Runway", href: "https://www.fau.edu/research/magazine/2019/01/dor-research-park/" },
      },
      {
        title: "Headquarters",
        body: "The city's economic development office says Boca Raton is home to more than half of Palm Beach County's corporate headquarters and that D-Wave chose the Boca Raton Innovation Campus for its new headquarters. Corporate buyers read a vendor's site the way they read a proposal.",
        source: { label: "City of Boca Raton: Office of Economic Development", href: "https://myboca.us/470/Economic-Development" },
      },
      {
        title: "Site and profile",
        body: "Google lets hybrid businesses show a storefront address and a service area together. A site should state the same name, address, phone and service area as the Google profile, because mismatches confuse both customers and search engines.",
        source: { label: "Google: Manage your service area", href: "https://support.google.com/business/answer/9157481?hl=en" },
      },
    ],
    plan: [
      {
        title: "Plan the pages people need",
        body: "We start from the questions buyers ask and the decisions the site has to support, then plan the pages, the content and the path to an inquiry, booking or purchase. Every service and location gets a page that answers its question directly.",
      },
      {
        title: "Design and build",
        body: "Fast on a phone, accessible from the start, ready for a second language and easy for your team to update. When the business needs more than a website, we build the portal, the booking flow or the internal tool alongside it.",
      },
      {
        title: "Launch and measure",
        body: "Structured data, analytics, form and call tracking connected to your CRM, and a clean handoff. After launch we watch what people actually do and improve the pages that matter most.",
      },
    ],
    cta: {
      line: "Tell us what the site has to do.",
      body: "Book patients, win proposals, sell product or recruit. A partner will reply with how we would approach it.",
    },
    faqs: [
      {
        q: "How much does a website cost in Boca Raton?",
        a: "It depends on what the site has to do, not where you are. A focused site for one practice costs far less than a multi-location site with booking, integrations or custom software. The number of pages, who writes the content, the integrations and how many people approve the work drive the price. We scope after a working session so the estimate matches the actual job.",
      },
      {
        q: "Does a Boca Raton website need to be accessible?",
        a: "It should be, and Boca's audience makes the case on its own. Nearly a quarter of city residents are 65 or older, so readable type, strong contrast, captions and simple navigation directly affect whether visitors convert. We build to recognized accessibility guidelines from the start, because retrofitting a finished site costs more and usually looks worse.",
      },
      {
        q: "Should my Boca Raton website be in more than one language?",
        a: "If your customers are, yes. About a quarter of Boca Raton residents speak a language other than English at home, according to the Census. For medical practices, real estate and services with a multilingual client base, translating the key pages can lift inquiries. We structure sites so a second language can be added cleanly and marked properly for search engines.",
      },
      {
        q: "Will a new website help my Boca business show up in Google and ChatGPT?",
        a: "It should, if it is built for it. We give every service and location a page that answers a real question directly, add structured data describing the business, keep pages fast on phones and match the name, address and phone to your Google profile. That makes the site easy for Google to rank and for AI assistants to cite, though no one can guarantee placement.",
      },
      {
        q: "Do you build websites for companies outside Boca Raton?",
        a: beyond("a website"),
      },
    ],
    guides: ["get-found-in-ai-search-local-business", "boca-west-palm-palm-beach-marketing-differences", "rebrand-vs-refresh"],
    image: { src: "/img/stock/ew-web.jpg", alt: "Epic Wolf web pages on a desktop screen" },
  },
]
