import type { LocalService } from "./types"

/**
 * Town of Palm Beach (the island) discipline pages. Facts verified on primary
 * sources 2026-10-04: the Town Code on Municode, Town of Palm Beach documents,
 * the U.S. Census, Google and Bing help pages and the outlets' own sites.
 * The Palm Beach Daily News site blocks automated reading; only its help
 * center was checked. Copy laws: VOICE.md.
 */

const CODE = "https://library.municode.com/fl/palm_beach/codes/code_of_ordinances?nodeId="
const TOWN_REPORT = "https://townofpalmbeach.com/DocumentCenter/View/28941"

const beyond = (what: string) =>
  `Yes. Epic Wolf is based across the bridge in West Palm Beach and works with companies across Palm Beach County, South Florida and the rest of the country. The island has its own page because the Town's rules and its seasonal, private audience change how ${what} should be done there. Wherever the project is, the same partners lead it and one team carries the brand from the storefront to the screen.`

export const palmBeachServices: LocalService[] = [
  {
    town: "palm-beach",
    service: "signs",
    omit: ["Illuminated signs", "Banners and trade show displays"],
    metaTitle: "Sign Company in Palm Beach FL | Epic Wolf",
    metaDescription:
      "Signs for Worth Avenue and Town of Palm Beach storefronts, designed to the Town's sign code with staff, ARCOM and Landmarks approvals managed start to finish.",
    kicker: "Sign company in Palm Beach, FL",
    headline: "Twenty Square Feet Done Perfectly",
    answer:
      "Epic Wolf designs storefront signs for businesses in the Town of Palm Beach, on Worth Avenue and across the island, and manages approvals, fabrication and install through vetted partners. The Town allows a business only 10 or 20 square feet of signage, limited to its registered name, one small logo and what it does, so every inch is designed. We are based across the bridge in West Palm Beach.",
    intro: [
      "Palm Beach opens its sign code with a statement of purpose: the town is internationally known and has become a worldwide synonym for beauty, quality and value, and unregulated signs would detract from that. Everything after it serves that sentence. If the code does not specifically permit a sign, the sign is prohibited.",
      "The allowance is small and exact. In the commercial districts, all of a business's identification signs together get 20 square feet per 18 feet of frontage, 10 square feet if the frontage is shorter, and no building may exceed 20. Window and door lettering counts against the same total. The sign may carry only the business name as registered, one logo that fits in a 12-inch square and what the business does. A tagline does not fit.",
      "Light changes the timeline. A non-illuminated sign can be approved by Town staff, but an illuminated sign needs Town Council approval as a special exception and is a major Architectural Commission project, with newspaper notice and mailed notice to neighbors at least 30 days before the hearing. Designated landmarks, including the Royal Poinciana Plaza, go to the Landmarks Preservation Commission instead. Choosing the approval path is the first design decision.",
    ],
    ground: [
      {
        title: "What a sign may say",
        body: "A business identification sign may show only the name of the establishment as identified on its business tax receipt and state registration, one logo that fits within a 12-inch square and the nature of the business. The logo counts toward the sign area limit.",
        source: { label: "Town Code Sec. 134-2439", href: `${CODE}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2439PELELO` },
      },
      {
        title: "How much",
        body: "All business identification signs together may not exceed 20 square feet per 18 feet of street or via frontage. A business with less than 18 feet of frontage gets 10 square feet, no building may exceed 20 square feet in total and a hanging via sign is capped at 2 square feet.",
        source: { label: "Town Code Sec. 134-2438", href: `${CODE}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2438SISI` },
      },
      {
        title: "Lit signs",
        body: "An illuminated sign may not be permitted or erected until the Town Council approves it as a special exception use. The Town's project matrix treats illuminated signage as a major Architectural Commission project, which carries newspaper notice and mailed notice to owners within 300 feet at least 30 days before the hearing.",
        source: { label: "Town Code Sec. 134-2373", href: `${CODE}PTIICOOR_CH134ZO_ARTXISI_DIV1GE_S134-2373GEREDEAPPESI` },
      },
      {
        title: "What is banned",
        body: "Banner signs of any kind are prohibited, and the definition of a banner reaches pennants, balloons and streamers. No sign, logo or street number may appear on an awning visible from a street, nothing may hang from a canopy and no sign may flash, move or outline a building in neon.",
        source: { label: "Town Code Sec. 134-2373", href: `${CODE}PTIICOOR_CH134ZO_ARTXISI_DIV1GE_S134-2373GEREDEAPPESI` },
      },
      {
        title: "The season",
        body: "From November 1 through April, construction work that requires a permit, which includes sign installs and storefront build-outs, may run only from 8 a.m. to 5 p.m. on weekdays and not on weekends or Town holidays. In the off-season, the Worth Avenue district allows work from 8 a.m. to 8 p.m. except Sundays and legal holidays.",
        source: { label: "Town Code Sec. 42-199", href: `${CODE}PTIICOOR_CH42EN_ARTVNO_DIV1GE_S42-199HOCOWO` },
      },
      {
        title: "Empty storefronts",
        body: "A vacant or under-construction storefront must screen its glass within 10 days, with at least 75 percent covered by images from an approved list such as historical pictures of Palm Beach. Advertising is never permitted in the display, so a branded coming-soon wrap is not an option.",
        source: { label: "Town of Palm Beach Window Treatment Policy", href: "https://www.townofpalmbeach.com/DocumentCenter/View/24372" },
      },
    ],
    plan: [
      {
        title: "Choose the path",
        body: "We confirm the zoning district, whether the property is a designated landmark, whether the frontage is on a street or a via and whether the sign needs light. Those four answers decide between staff approval, an Architectural Commission hearing or the Landmarks Preservation Commission, and how long each takes.",
      },
      {
        title: "Design every inch",
        body: "The name, a logo built to read inside a 12-inch square, the materials, the lettering on the door and the window, all counted against one small allowance. On a pedestrian street like Worth Avenue the best sign is often the most restrained one, executed with real craft.",
      },
      {
        title: "File and schedule",
        body: "We prepare the Town's submittal, file through its portal or the published commission calendar, and schedule fabrication so the install lands in the off-season or inside the Town's weekday hours. Fabrication and install run through vetted partners we manage.",
      },
    ],
    cta: {
      line: "Send us the address and the opening date.",
      body: "We will tell you which review the sign needs, how long that path takes and whether the install has to land before or after the season.",
    },
    faqs: [
      {
        q: "How big can a business sign be in Palm Beach?",
        a: "Small. In the Town's commercial districts, all of a business's identification signs together may not exceed 20 square feet per 18 feet of frontage, a business with less than 18 feet of frontage gets 10 square feet, and no building may exceed 20 square feet in total. Window and door lettering counts toward the same allowance, and signs stay on the first floor, no higher than 15 feet.",
      },
      {
        q: "Can a Palm Beach storefront have a lit sign?",
        a: "Only with Town Council approval. The Town's code says an illuminated sign may not go up until it is approved as a special exception use, and the Town treats illuminated signage as a major Architectural Commission project, which requires newspaper notice and mailed notice to nearby owners at least 30 days before the hearing. Non-illuminated signs can usually be approved by staff, which is far faster.",
      },
      {
        q: "Can I use a banner or balloons for a grand opening in Palm Beach?",
        a: "No. The Town bans banner signs of any kind, and its definition of a banner includes pennants, balloons, streamers and wind-driven whirligigs. Sidewalk barkers and noisy advertising are unlawful too. A Palm Beach opening is announced through invitations, press and the storefront itself, plus a temporary display sign on an easel, which is allowed only from April 1 to October 31.",
      },
      {
        q: "Can a store put its logo on its awning in Palm Beach?",
        a: "No. The Town prohibits any sign, including lettering, logos, illustrations and street numbers, painted or installed on an awning visible from a street, and nothing may hang from or beneath an awning or canopy. Cloth awnings on commercial buildings also have to stay installed except for repairs or an approaching storm. Put the identity on the wall or in a ground-floor window instead.",
      },
      {
        q: "When is the best time to install a sign on the island?",
        a: "May through October. From November 1 through April, permitted construction work, which includes sign installs and storefront build-outs, can run only from 8 a.m. to 5 p.m. on weekdays and not on weekends or holidays. Off-season hours are longer, and the Worth Avenue district allows work from 8 a.m. to 8 p.m. except Sundays and legal holidays. File early enough to install before the season.",
      },
      {
        q: "Do you design signs for businesses outside Palm Beach?",
        a: beyond("a storefront"),
      },
    ],
    guides: ["palm-beach-sign-approval", "market-a-palm-beach-business-without-looking-loud", "business-sign-permits-palm-beach-county"],
    image: { src: "/img/work/motivo-wall.jpg", alt: "A painted wall sign for an interior design showroom" },
  },

  {
    town: "palm-beach",
    service: "branding",
    metaTitle: "Branding Agency in Palm Beach FL | Epic Wolf",
    metaDescription:
      "Branding for Town of Palm Beach businesses: identity, naming, print and storefronts held to the island's standard of discretion and craft.",
    kicker: "Branding agency in Palm Beach, FL",
    headline: "Quiet Brands for a Town That Notices",
    answer:
      "Epic Wolf is a West Palm Beach branding agency that builds identities for businesses on the island of Palm Beach: Worth Avenue retail, hospitality, wealth and professional firms and the organizations that shape the season. The work covers strategy, naming, identity, print and the storefront, designed for a town whose code limits a sign to a name and one small logo and whose clients value discretion over exposure.",
    intro: [
      "The Town of Palm Beach describes its own commerce plainly: banks, retail shops, hotels and restaurants that serve the town, and no industry. Its year-round population was 9,245 at the 2020 Census, and the Town estimates another 15,000 seasonal residents arrive between November and May. Close to two thirds of residents are 65 or older. It is a small, discerning and mostly seasonal market that has seen every kind of brand.",
      "On the island a brand is read up close. The sign code allows a business its registered name, one logo inside a 12-inch square and a description of what it does, in 10 or 20 square feet, and Worth Avenue follows its own design guidelines written into the zoning code. The logo, the letterforms and the materials do almost all of the work, which rewards brands built on restraint.",
      "The rest of the brand lives in print, introductions and the season. The Palm Beach Chamber of Commerce's Palm Beach Guide reaches residents across the island and every guest room at The Breakers, Palm Beach Society runs weekly covers through the season and philanthropy carries real weight. A Palm Beach identity needs stationery, invitations and a website as composed as the storefront.",
    ],
    ground: [
      {
        title: "The market",
        body: "The Town's annual financial report says commercial activity is restricted primarily to town-serving establishments, including banks, retail shops, hotels and restaurants. It counts a full-time population of 9,191 plus an estimated 15,000 additional seasonal residents from November to May.",
        source: { label: "Town of Palm Beach Annual Comprehensive Financial Report", href: TOWN_REPORT },
      },
      {
        title: "The residents",
        body: "The 2020 Census counted 9,245 residents in the Town of Palm Beach, and the Census estimates that 63.5 percent are 65 or older.",
        source: { label: "U.S. Census Bureau QuickFacts: Palm Beach town", href: "https://www.census.gov/quickfacts/fact/table/palmbeachtownflorida/PST045224" },
      },
      {
        title: "What a sign may say",
        body: "A business sign may show only the establishment's name as identified on its business tax receipt and state registration, one logo that fits within a 12-inch square and the nature of the business. The identity has to work at that scale.",
        source: { label: "Town Code Sec. 134-2439", href: `${CODE}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2439PELELO` },
      },
      {
        title: "Worth Avenue",
        body: "The Worth Avenue Design Guidelines are incorporated into the Town's zoning code for the C-WA district, whose stated purpose includes preserving an area of unique quality and character oriented to pedestrian comparison shopping. Changes to street-facing windows and doors there go to the Architectural Commission.",
        source: { label: "Town Code Sec. 134-232", href: `${CODE}PTIICOOR_CH134ZO_ARTIIAD_DIV4SPEXVADIWA_SDIIISPEX_S134-232APWOAVDEGUDI` },
      },
      {
        title: "The guide in every room",
        body: "The Palm Beach Chamber of Commerce says its Palm Beach Guide is distributed to more than 15,000 residents across the Town and along the Intracoastal, with a copy in every room at The Breakers. Advertising in it is open only to members.",
        source: { label: "Palm Beach Chamber of Commerce: Palm Beach Guide", href: "https://www.palmbeachchamber.com/palm-beach-guide/" },
      },
    ],
    plan: [
      {
        title: "Start with discretion",
        body: "We learn how clients actually find the business, which is usually through someone they trust, what they expect to be kept private and which competitors they already compare it to. The brand strategy grows from that, not from what a louder market would want.",
      },
      {
        title: "Design for the small surfaces",
        body: "A mark that reads inside a 12-inch square, letterforms that become dimensional signage, paper and finishes chosen as carefully as the logo and a voice that sounds established from the first sentence. Then the full system around it, built to hold.",
      },
      {
        title: "Carry it through the season",
        body: "Stationery, invitations, the website, the storefront and the story arrive together and say the same thing. The market meets one brand, not five versions of it.",
      },
    ],
    cta: {
      line: "Tell us what the brand has to hold.",
      body: "A new shop on Worth Avenue, a firm moving to the island or a name that needs to feel established. A partner will reply with how we would approach it.",
    },
    faqs: [
      {
        q: "What makes branding different in Palm Beach?",
        a: "Scale and discretion. The Town allows a business sign only its registered name, one logo within a 12-inch square and what it does, in 10 or 20 square feet, so the identity has to work small and up close. Clients value privacy and usually arrive through referrals. A Palm Beach brand is built on restraint, materials and consistency rather than volume.",
      },
      {
        q: "Does my logo have to fit in a 12-inch square in Palm Beach?",
        a: "On your sign, yes. The Town's code permits one logo on a business identification sign, it has to fit within a 12-inch square and it counts toward the sign area limit. On the website, packaging or stationery the logo can be any size. We design marks that hold up at that size, because a logo that only works large looks weak on the storefront.",
      },
      {
        q: "Should a company moving to Palm Beach rebrand?",
        a: "Not always. Many firms relocating to the Palm Beaches, especially in finance, arrive with brands that already work. What usually needs attention is the local layer: the office or storefront identity under the Town's rules, print that meets the island's expectations and a website and Google profile that say clearly where the business now is. Sometimes a refresh is enough, and we will say so.",
      },
      {
        q: "Can I photograph my Palm Beach storefront for a brand launch?",
        a: "Yes, with the right permit. The Town requires a filming permit from the Town Council for commercial filming or photography on Town property, which includes streets, sidewalks, parks and beaches, and its definition covers still photography and drones. The exemptions are narrow. Interior shoots on private property generally avoid the issue, and outdoor shoots should be scheduled around the permit.",
      },
      {
        q: "Do you take branding projects outside Palm Beach?",
        a: beyond("a brand"),
      },
    ],
    guides: ["market-a-palm-beach-business-without-looking-loud", "how-to-choose-a-branding-agency-palm-beach", "boca-west-palm-palm-beach-marketing-differences"],
    image: { src: "/img/stock/worth-ave.jpg", alt: "Palms and storefronts along Worth Avenue in Palm Beach" },
  },

  {
    town: "palm-beach",
    service: "public-relations",
    metaTitle: "PR Firm in Palm Beach FL | Public Relations | Epic Wolf",
    metaDescription:
      "Palm Beach public relations: media relations with Palm Beach Illustrated and Palm Beach Society, season and philanthropy strategy and discreet positioning.",
    kicker: "Public relations firm in Palm Beach, FL",
    headline: "Press That Respects the Island",
    answer:
      "Epic Wolf is a West Palm Beach agency that runs public relations for Palm Beach businesses, organizations and the people who lead them: story development, media relations, season and philanthropy strategy and executive positioning. Targets include Palm Beach Illustrated, Palm Beach Society, the Palm Beach Daily News and the regional business and broadcast press. Coverage is earned, never promised, and discretion comes first.",
    intro: [
      "Palm Beach press runs on the season. Palm Beach Society publishes weekly covers from early October through late April, each paired with a charitable organization and its event, and hands them out at valet stands, hotel lobbies, Worth Avenue shops and wealth management offices on Royal Palm Way. Palm Beach Illustrated, which debuted in 1952, publishes 11 times a year and takes story ideas only as a concise query letter. Each outlet has its own door.",
      "Philanthropy is part of the calendar and part of the law. Soliciting contributions for a charitable purpose in the Town requires a Town permit, a permit covers no more than two events in 12 months and the Town asks for state charity registration and a board resolution naming the event. A gala or a give-back promotion that skips this step becomes a story nobody wants.",
      "The island also protects its privacy. A commercial photo or video shoot on Town streets, sidewalks or beaches needs a Town Council filming permit, and many clients would rather never be named at all. Good Palm Beach PR asks permission before it asks for coverage, and plans the photography as carefully as the pitch.",
    ],
    ground: [
      {
        title: "Palm Beach Illustrated",
        body: "Palm Beach Illustrated says it does not accept or return unsolicited manuscripts and photos and asks for a concise query letter to its editorial director. Event listings go through the Submit Event link on its calendar. The magazine debuted in 1952 and publishes 11 times a year.",
        source: { label: "Palm Beach Illustrated: Contact", href: "https://palmbeachillustrated.com/contact-us/" },
      },
      {
        title: "Palm Beach Society",
        body: "Palm Beach Society's published cover schedule runs weekly from early October through late April, each issue paired with a charitable organization and its event. It lists its office on Worth Avenue and distributes to valet counters, hotel lobbies, Worth Avenue and County Road shops and Royal Palm Way wealth management offices.",
        source: { label: "Palm Beach Society: Cover schedule", href: "https://www.pbsociety.com/editorial-schedule" },
      },
      {
        title: "Charity permits",
        body: "The Town requires a permit to solicit contributions for any charitable purpose in town, with narrow exceptions. A permit lasts up to 12 months and covers no more than two events, a limit that does not apply to in-town businesses giving a percentage of sales to charity. The Town asks for state registration, 501(c)(3) papers and a board resolution naming the event.",
        source: { label: "Town of Palm Beach FAQ: Charitable solicitation", href: "https://www.townofpalmbeach.com/FAQ.aspx?QID=266" },
      },
      {
        title: "Filming on Town property",
        body: "Commercial filming or photography on Town property, including streets, sidewalks, parks and beaches, requires a filming permit from the Town Council. The definition covers still photography and drones, and the exemptions for personal, student and news shoots are narrow.",
        source: { label: "Town Code Sec. 22-151", href: `${CODE}PTIICOOR_CH22BU_ARTIVFIOP_DIV2FIPE_S22-151RE` },
      },
      {
        title: "The Daily News",
        body: "The Palm Beach Daily News is part of the USA TODAY Network and is owned and operated by Gannett. Its help center directs people with local story ideas to the paper's staff directory, and the Town lists the paper among its community partners.",
        source: { label: "Palm Beach Daily News Help Center", href: "https://help.palmbeachdailynews.com/contact-us" },
      },
    ],
    plan: [
      {
        title: "Find the island story",
        body: "We look for what is genuinely new and worth an editor's attention, then place it against the season: the weekly covers from October to April, the Palm Beach Food and Wine Festival each December and the Society of the Four Arts season from November to May.",
      },
      {
        title: "Secure permission first",
        body: "Written consent before anyone is named, quoted or photographed, a charitable solicitation permit before a gala or a give-back campaign and a filming permit before an outdoor shoot. On the island the process is part of the reputation.",
      },
      {
        title: "Pitch with restraint",
        body: "One well-placed story usually does more than ten mentions. We pitch through the route each outlet asks for, on its schedule, and measure the work in inquiries, introductions and relationships rather than clippings.",
      },
    ],
    cta: {
      line: "Tell us what deserves to be known.",
      body: "A partner will reply with whether it is a story yet and how we would place it without overexposing anyone.",
    },
    faqs: [
      {
        q: "How do I get my business into Palm Beach Illustrated?",
        a: "Pitch a real story with a concise query letter. Palm Beach Illustrated says it does not accept or return unsolicited manuscripts and photos and asks for story ideas as a short query to its editorial director, while events go through the Submit Event link on its calendar. The magazine publishes 11 times a year, so plan months ahead and lead with what is genuinely new.",
      },
      {
        q: "Does a Palm Beach charity event need a permit?",
        a: "Usually, yes. The Town of Palm Beach requires a permit to solicit contributions for any charitable purpose in town, with narrow exceptions for an organization's own members. A permit lasts up to 12 months and covers no more than two events, though in-town businesses giving a percentage of sales to charity are not held to the two-event limit. Apply well before invitations go out.",
      },
      {
        q: "Can you guarantee a feature in Palm Beach Society or the Daily News?",
        a: "No. Editors decide, and anyone promising placement is selling something else. What we can do is find the real story, time it to the season, prepare the people involved and pitch through the route each outlet uses. Palm Beach Society, for example, builds its weekly covers around charitable organizations and their events from early October through late April.",
      },
      {
        q: "How do you handle clients who want privacy?",
        a: "Privacy is the default. We get written permission before naming a client, quoting anyone or photographing a home, an event or a guest, and we keep donor and guest lists out of marketing systems. Outdoor commercial shoots on Town property also need a Town Council filming permit. Some of the best Palm Beach PR is one well-placed story and a great deal that never runs.",
      },
      {
        q: "Do you run public relations outside Palm Beach?",
        a: beyond("public relations"),
      },
    ],
    guides: ["market-a-palm-beach-business-without-looking-loud", "getting-press-palm-beach-county", "choosing-a-pr-firm-west-palm-beach"],
    image: { src: "/img/disc/pb-arcade.jpg", alt: "Mediterranean Revival arches and palms in Palm Beach" },
  },

  {
    town: "palm-beach",
    service: "digital-marketing",
    metaTitle: "Digital Marketing Agency in Palm Beach FL | Epic Wolf",
    metaDescription:
      "Digital marketing for Town of Palm Beach businesses: Google and Bing profiles, search, seasonal campaigns and ChatGPT and Google AI answers.",
    kicker: "Digital marketing agency in Palm Beach, FL",
    headline: "Found Before the Season Starts",
    answer:
      "Epic Wolf is a West Palm Beach agency that runs digital marketing for businesses on the island of Palm Beach: Google and Bing profiles, local search, seasonal paid campaigns, websites and visibility in ChatGPT and Google AI answers. The plan follows the island's year, when the Town estimates 15,000 seasonal residents arrive between November and May, and keeps every listing clear about which Palm Beach a business is in.",
    intro: [
      "The island's audience moves. The Town counts about 9,200 full-time residents and estimates another 15,000 seasonal residents from November to May. Many of them choose a dentist, a florist or a gallery from their other home before they arrive. Digital marketing for Palm Beach has to reach people where they are in October, not only where they will be in January.",
      "Name confusion is real here. Palm Beach, West Palm Beach, North Palm Beach, Palm Beach Gardens and Palm Beach County are different places to a resident and nearly the same words to a search engine. A business on the island should say Town of Palm Beach and give its full street address on its site, its Google profile and its Bing listing, so it is not shown to someone looking for a plumber in Palm Beach Gardens.",
      "The rest is restraint. Island clients respond to composed, accurate information, a website that answers a careful buyer's questions and reviews that read like real people. Google prohibits rewarding customers for reviews and treats asking only happy customers as fake engagement. The right reviews come from asking everyone, simply, with a link.",
    ],
    ground: [
      {
        title: "The seasonal audience",
        body: "The Town's annual financial report says it serves a full-time resident population of 9,191 plus an estimated 15,000 additional seasonal residents from November to May. Campaign timing should follow that curve.",
        source: { label: "Town of Palm Beach Annual Comprehensive Financial Report", href: TOWN_REPORT },
      },
      {
        title: "Google's name rule",
        body: "Google's guidelines say a profile should reflect the business's real-world name as used on its storefront, website and stationery, and that adding unnecessary information such as locations or services to the name can get the profile suspended.",
        source: { label: "Google Business Profile guidelines", href: "https://support.google.com/business/answer/3038177?hl=en" },
      },
      {
        title: "Reviews",
        body: "Google says offering incentives, such as free or discounted goods or services, in exchange for reviews is strictly prohibited. It recommends asking customers through a Google link or a QR code.",
        source: { label: "Google: Tips to get more reviews", href: "https://support.google.com/business/answer/3474122?hl=en" },
      },
      {
        title: "Review gating",
        body: "Google's policy on fake engagement prohibits discouraging negative reviews or selectively asking only satisfied customers for positive ones. Ask everyone the same way.",
        source: { label: "Google Maps content policy: Fake engagement", href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
      },
      {
        title: "Bing",
        body: "Bing Places for Business is free, can import an existing Google listing by linking the accounts and recommends keeping the business name, address, phone and website consistent across every channel.",
        source: { label: "Bing Places for Business Help", href: "https://www.bing.com/forbusiness/help" },
      },
    ],
    plan: [
      {
        title: "Clean up the listings",
        body: "Google and Bing profiles with the real name, the full island address and the right categories, the same details on every directory and a website that says Town of Palm Beach plainly. Seasonal businesses can mark themselves temporarily closed in the off-season instead of looking abandoned.",
      },
      {
        title: "Plan around the season",
        body: "Search and paid campaigns that start in early fall, aimed at where seasonal residents spend the rest of the year, then run through the season and taper in summer. Budgets follow the Town's calendar, not the fiscal one.",
      },
      {
        title: "Earn the answer",
        body: "Pages that answer the questions island clients actually ask, in plain and quotable language, a steady reviews program and the outside mentions that Google and AI assistants rely on. Reported monthly in inquiries and revenue.",
      },
    ],
    cta: {
      line: "Tell us when your season starts.",
      body: "Share the searches and the months that matter most, and a partner will reply with how we would plan the year.",
    },
    faqs: [
      {
        q: "How do I keep my Palm Beach business from being confused with West Palm Beach?",
        a: "Be explicit everywhere. Use your full street address on the island, say Town of Palm Beach on your website and keep the same name, address and phone on Google, Bing and every directory. Write location pages about the island specifically, not Palm Beach County in general. Search engines and AI assistants match details, and precise, consistent details separate you from businesses across the bridge.",
      },
      {
        q: "When should a Palm Beach business start its season marketing?",
        a: "Before the season, not during it. The Town estimates about 15,000 seasonal residents arrive between November and May, and many decide where to shop, dine and book services while still at their other home. Start search and paid campaigns in early fall, aim them at where those residents spend the rest of the year and have the website and profiles ready first.",
      },
      {
        q: "Can I offer a discount in exchange for Google reviews?",
        a: "No. Google prohibits offering incentives, such as free or discounted goods or services, in exchange for reviews, and it treats asking only happy customers or discouraging negative reviews as fake engagement. Ask every customer the same way with a simple link or QR code, reply to reviews thoughtfully, and the profile will reflect the business honestly.",
      },
      {
        q: "Does Bing matter for a Palm Beach business?",
        a: "Yes, and it takes little effort. Bing Places for Business is free, can import an existing Google listing directly and asks businesses to keep their name, address, phone and website consistent everywhere. Many local competitors never claim their Bing listing, which leaves search results and the tools that draw on them working from incomplete details.",
      },
      {
        q: "Do you run digital marketing for businesses outside Palm Beach?",
        a: beyond("digital marketing"),
      },
    ],
    guides: ["get-found-in-ai-search-local-business", "market-a-palm-beach-business-without-looking-loud", "boca-west-palm-palm-beach-marketing-differences"],
    image: { src: "/img/disc/palm-shadow.jpg", alt: "Palm frond shadows on a white stucco wall" },
  },
]
