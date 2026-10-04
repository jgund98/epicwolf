import type { LocalService } from "./types"

/**
 * Web design pages for the island and the north county towns: Palm Beach,
 * Palm Beach Gardens, Jupiter, Juno Beach and Riviera Beach.
 * Facts verified on primary sources 2026-10-04 (U.S. Census Bureau QuickFacts
 * and data.census.gov, the Town of Palm Beach financial report, city and town
 * pages, the institutions' own sites, Google's help center). Copy laws: VOICE.md.
 * Juno Beach is too small for QuickFacts; its figures come from the Census
 * Bureau profile on data.census.gov and carry wide margins of error.
 */

const TOWN_REPORT = "https://townofpalmbeach.com/DocumentCenter/View/28941"
const GBP = "https://support.google.com/business/answer/3038177?hl=en"
const QF_PALM_BEACH = "https://www.census.gov/quickfacts/fact/table/palmbeachtownflorida/PST045224"
const QF_GARDENS = "https://www.census.gov/quickfacts/fact/table/palmbeachgardenscityflorida/PST045224"
const QF_JUPITER = "https://www.census.gov/quickfacts/fact/table/jupitertownflorida/PST045224"
const QF_RIVIERA = "https://www.census.gov/quickfacts/fact/table/rivierabeachcityflorida/PST045224"
const CENSUS_JUNO = "https://data.census.gov/profile/Juno_Beach_town,_Florida?g=160XX00US1235850"
const WEB_IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

export const webTownsNorth: LocalService[] = [
  {
    town: "palm-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Palm Beach FL | Epic Wolf",
    metaDescription:
      "Web design for Town of Palm Beach businesses: composed, readable sites for a seasonal clientele that often decides before it arrives on the island.",
    kicker: "Web design company in Palm Beach, FL",
    headline: "The Website Your Client Reads From Another State",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for businesses in the Town of Palm Beach, the island across the bridge from our base. The sites are written for a clientele that is largely over 65, highly educated and away for part of the year, and they state plainly which Palm Beach the business is in. Brand and marketing come from the same partners.",
    intro: [
      "Most of the island's customers are not on the island when they choose. The Town's own financial report counts roughly nine thousand full-time residents and estimates fifteen thousand more who live here only from November to May. A florist, a decorator or a concierge practice is often picked in September from a kitchen in Connecticut. The website is the storefront that client can walk into.",
      "The Town describes its commerce as town-serving: banks, shops, hotels and restaurants that exist for the people who live here. That is a small, exacting audience. The Census Bureau puts nearly two thirds of residents at 65 or older and seven in ten adults at a bachelor's degree or more. They read carefully and they notice sloppiness. Generous type, calm pages, a phone number that is never hidden and plain statements of what you do will outperform any animation.",
      "Then there is the name. Palm Beach, West Palm Beach, Palm Beach Gardens, North Palm Beach and Palm Beach County sound alike to a search engine and to a new arrival. A site for an island business has to say Town of Palm Beach and give its street address early and in text, so the right client finds it and the wrong inquiry never arrives.",
    ],
    ground: [
      {
        title: "Who lives here and when",
        body: "The Town's Annual Comprehensive Financial Report says it serves a full-time resident population of 9,191 plus an estimated 15,000 additional seasonal residents from November to May, along with visitors and people employed on the island. A site should make sense to someone planning their return, not only to someone standing outside the door.",
        source: { label: "Town of Palm Beach Annual Comprehensive Financial Report", href: TOWN_REPORT },
      },
      {
        title: "Town-serving commerce",
        body: "The same report calls the Town primarily a residential community. It says commercial activities are restricted primarily to Town-serving establishments, including banks, retail shops, hotels and restaurants, for the permanent population and seasonal residents, and that there is no industrial development within the Town.",
        source: { label: "Town of Palm Beach Annual Comprehensive Financial Report", href: TOWN_REPORT },
      },
      {
        title: "The reader",
        body: "Census QuickFacts for Palm Beach town show 63.5 percent of residents are 65 or older and 70.0 percent of adults 25 and over hold a bachelor's degree or higher. It also shows 98.7 percent of households with a computer and 96.3 percent with a broadband subscription. Older does not mean offline here.",
        source: { label: "U.S. Census Bureau QuickFacts: Palm Beach town", href: QF_PALM_BEACH },
      },
      {
        title: "Hours that change with the season",
        body: "Google's Business Profile guidelines tell seasonal businesses to set regular hours while they are open, to say in the description that they operate for a specific season and to mark the profile temporarily closed in the off-season. The website should show the same hours and the same dates.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
      {
        title: "The business community",
        body: "The Palm Beach Chamber of Commerce calls itself the voice of business in the Town of Palm Beach and organizes members into councils for healthcare, nonprofits, technology, real estate and women's leadership. Those councils are a fair map of who needs a serious website on the island.",
        source: { label: "Palm Beach Chamber of Commerce", href: "https://www.palmbeachchamber.com/" },
      },
    ],
    plan: [
      {
        title: "Settle the name and the address",
        body: "Before design, we fix how the business identifies itself: the exact name, Town of Palm Beach, the street address and one phone number. That wording goes into the page text, the footer, the structured data and the Google profile so every source agrees about which side of the bridge you are on.",
      },
      {
        title: "Write for the client who is away",
        body: "Pages answer what a returning resident asks from a distance: are you open before the season, can I arrange this by phone or email, who will I deal with. Type is large, contrast is strong, and nothing important is buried in a menu or an image.",
      },
      {
        title: "Keep it current through the year",
        body: "Summer hours, holiday closings and the first week back all change what the site should say. We set up editing your staff can handle and keep the site and the Google profile in step as the calendar turns.",
      },
    ],
    cta: {
      line: "Send us your island address and your season dates.",
      body: "A partner will reply with how we would structure the site for clients who decide before they arrive.",
    },
    faqs: [
      {
        q: "How does a Palm Beach website avoid being mistaken for West Palm Beach?",
        a: "By naming the Town of Palm Beach and the street address in plain text near the top of the site, not only in the footer. Search engines read the words on the page, the structured data behind it and the Google profile, and they trust a business whose details agree in all three. We also avoid vague phrases like the Palm Beaches on pages meant to describe one island location.",
      },
      {
        q: "What should a website do for seasonal residents who are not in town yet?",
        a: "It should let them decide and arrange things from wherever they are. The Town estimates 15,000 seasonal residents arrive between November and May, and many line up services before they travel. That means clear opening dates, a way to inquire or reserve without visiting, a named contact and pages that load quickly on any connection. A site that only works for a walk-in loses that client.",
      },
      {
        q: "Does an older audience change how a Palm Beach site is designed?",
        a: "Yes, mostly toward clarity. The Census Bureau reports 63.5 percent of Town residents are 65 or older, and almost every household has a computer and broadband. So the readers are online and experienced, and they have little patience for small gray type, hidden phone numbers or pop-ups. We design with larger text, strong contrast, obvious buttons and a telephone number on every page.",
      },
      {
        q: "Should an island business list summer hours on its website?",
        a: "Yes, and they should match the Google profile exactly. Google's guidelines tell seasonal businesses to set their regular hours while open and to mark the profile temporarily closed in the off-season. When the website says one thing and the profile says another, a returning client assumes the worse of the two. We build a simple way for staff to change hours in one place.",
      },
      {
        q: "Is Epic Wolf located on the island of Palm Beach?",
        a: "No. Epic Wolf is based in West Palm Beach, across the bridge from the Town of Palm Beach, and works with island businesses from there. We say so because the confusion between the two places is the very problem an island website has to solve. Meetings happen at your location or ours, and the work runs through both partners.",
      },
    ],
    guides: [
      "how-to-choose-a-web-design-company-palm-beach-county",
      "website-accessibility-ada-florida",
      "market-a-palm-beach-business-without-looking-loud",
    ],
    image: WEB_IMAGE,
  },

  {
    town: "palm-beach-gardens",
    service: "web-design",
    metaTitle: "Web Design Company in Palm Beach Gardens FL | Epic Wolf",
    metaDescription:
      "Palm Beach Gardens web design for practices, professional firms and retail along PGA Boulevard: sites built to be compared and still chosen.",
    kicker: "Web design company in Palm Beach Gardens, FL",
    headline: "Built to Be Compared and Still Chosen",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites and custom software for Palm Beach Gardens businesses, from medical and financial practices near PGA Boulevard to retailers and corporate offices. Gardens buyers open several sites at once, so we build pages that state who you are, what you do and how to reach you faster than the tab beside yours. One team also handles brand and marketing.",
    intro: [
      "A Gardens buyer rarely looks at one website. They open the orthopedist, the two other orthopedists and the reviews, and they decide in a few minutes which office to call. The site that wins is not the prettiest. It is the one that answers first: what you treat or sell, who the people are, where to park and how to book.",
      "The city has built its economy around professional work. Its comprehensive plan targets medical and pharmaceutical, aerospace and engineering, information technology and business and financial services, and the Census Bureau reports that more than half of adults here hold a bachelor's degree. Much of what gets searched in the Gardens is a named person: a physician, an advisor, an attorney. Each of them needs a page of their own that matches how Google expects practitioners to be listed.",
      "It is also a large city. Palm Beach Gardens covers almost 59 square miles of land, from the mall and the PGA Boulevard office corridor out to the western communities, and its population has grown about eight percent since the last census. Newcomers have no habits yet. They search, and whichever business explains itself best becomes the habit.",
    ],
    ground: [
      {
        title: "What the city is recruiting",
        body: "The Economic Development Element of the city's comprehensive plan says Palm Beach Gardens will continue to attract employers in cluster industries such as medical and pharmaceutical, aerospace and engineering, information technology, business and financial services, education and research and development.",
        source: { label: "City of Palm Beach Gardens: Economic Development Element (PDF)", href: "https://www.pbgfl.gov/DocumentCenter/View/90/Economic-Development-PDF" },
      },
      {
        title: "A growing and educated city",
        body: "Census QuickFacts estimate 63,883 residents, up 8.0 percent from the 2020 base, across 58.71 square miles of land. They show 57.4 percent of adults with a bachelor's degree or higher, 32.5 percent of residents 65 or older and 95.4 percent of households with a broadband subscription.",
        source: { label: "U.S. Census Bureau QuickFacts: Palm Beach Gardens", href: QF_GARDENS },
      },
      {
        title: "A regional shopping draw",
        body: "The Census Bureau's economic figures put total retail sales in Palm Beach Gardens at $42,149 per resident in 2022, more than double the figure it reports for neighboring Jupiter. People drive in to shop here, so a retailer's site has to serve visitors who do not know the layout.",
        source: { label: "U.S. Census Bureau QuickFacts: Palm Beach Gardens", href: QF_GARDENS },
      },
      {
        title: "Practitioner listings",
        body: "Google's guidelines treat doctors, dentists, lawyers, financial planners and insurance or real estate agents as individual practitioners who may have their own Business Profile. Where several practitioners share a location, the organization keeps a separate profile and each practitioner's profile carries only that person's name.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
      {
        title: "The corridor's own voice",
        body: "The PGA Corridor Association says it has provided a voice for business and property owners in Palm Beach Gardens since 2000, with a mission to promote the PGA Corridor as a premier business location. The city lists it beside the Business Development Board and the Palm Beach North Chamber as a development partner.",
        source: { label: "PGA Corridor Association", href: "https://www.pgacorridor.org/" },
      },
    ],
    plan: [
      {
        title: "Study the other tabs",
        body: "We open the same sites your prospect opens and note what each one answers and what it dodges. Then we plan your pages to settle those questions sooner: services, people, insurance or pricing approach, location and the next step, in that order of urgency.",
      },
      {
        title: "Give every practitioner a page",
        body: "Each physician, advisor or attorney gets a profile page with credentials, focus and a direct way to book, named exactly as their Google listing is named. The practice keeps its own pages. Search engines and patients can then tell the person from the firm.",
      },
      {
        title: "Prove it after launch",
        body: "Calls, forms and bookings are tracked from the first day, so you can see which pages produce appointments. We adjust the weak ones and report in inquiries, never in visits alone.",
      },
    ],
    cta: {
      line: "Send us the two competitors you lose to most often.",
      body: "We will look at all three sites the way a Gardens buyer does and tell you where yours falls behind.",
    },
    faqs: [
      {
        q: "What makes a professional practice website work in Palm Beach Gardens?",
        a: "Speed to the answer. Gardens buyers compare several firms at once, so the winning site states the specialty, shows the people, gives the address with parking and offers booking within the first screen or two. Credentials and reviews support the decision, and a slow or vague page ends it. We write the content before designing so nothing important is left to a later scroll.",
      },
      {
        q: "Should each doctor or advisor in our Gardens office have a separate web page?",
        a: "Yes. Google's guidelines allow individual practitioners such as doctors, lawyers and financial planners to hold their own Business Profile, separate from the practice. Each profile should point to a page about that person, with the name written the same way in both places. Patients search for people by name, and a dedicated page gives that search somewhere accurate to land.",
      },
      {
        q: "Can a new website help us reach people who just moved to Palm Beach Gardens?",
        a: "It can, because new residents search before they ask a neighbor. Census estimates show the city's population up about eight percent since 2020. Someone new looks for a dentist, a gym or a contractor by service and area, then reads the top few sites. Pages that name the neighborhoods you serve, show real work and make contact easy are the ones that become that person's first call.",
      },
      {
        q: "Do you build patient portals or client logins for Gardens firms?",
        a: "Yes. Beyond marketing sites, we build browser-based software such as client portals, booking flows and internal dashboards. For a medical or financial practice, anything touching protected health or account information has to be scoped with your compliance officer and your existing systems, and they have the final word on what is allowed. We start with what the firm needs staff to stop doing by hand.",
      },
      {
        q: "Is Epic Wolf a Palm Beach Gardens company?",
        a: "No, Epic Wolf is based in West Palm Beach and serves Palm Beach Gardens from there. The drive is short and we meet Gardens clients at their offices. We mention it because honest location details are part of what we build into every client's site, and it would be odd to hold our own to a lower standard.",
      },
    ],
    guides: [
      "how-to-choose-a-web-design-company-palm-beach-county",
      "website-redesign-checklist",
      "website-vs-web-app-vs-custom-software",
    ],
    image: WEB_IMAGE,
  },

  {
    town: "jupiter",
    service: "web-design",
    metaTitle: "Web Design Company in Jupiter FL | Epic Wolf",
    metaDescription:
      "Jupiter web design for research spinoffs, marine and waterfront businesses and local trades: websites that hold up to scientists and boat owners alike.",
    kicker: "Web design company in Jupiter, FL",
    headline: "A Site Scientists and Boat Owners Both Believe",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites and web software for Jupiter organizations: life science startups and vendors around the Abacoa research campus, marine and waterfront businesses, and the trades and practices that serve a town of about 62,000. We build each site around evidence, because Jupiter's two main audiences, researchers and boat owners, both check claims before they believe them.",
    intro: [
      "Jupiter has an audience most towns its size do not. The Wertheim UF Scripps Institute says around 500 people work on its campus, and the Max Planck Society chose Jupiter for its first institute in the United States. Those neighbors produce spinoff companies, recruit from other continents and buy from specialized suppliers. A website aimed at them is read by people trained to look for the weak point in an argument.",
      "The other Jupiter runs on the water and on reputation. A charter captain, a marine electrician or a dock builder is hired on the strength of work someone has seen. That site needs dated photos of real jobs, the names of the people who do them and a way to request a quote from a phone at the ramp. Stock images of someone else's boat cost more trust than having no image at all.",
      "Different as they look, both audiences want the same thing from a website: proof. Publications and data for one. Finished work and named references for the other. We start every Jupiter project by asking what the business can actually show, and we design around that.",
    ],
    ground: [
      {
        title: "The research campus",
        body: "The Herbert Wertheim UF Scripps Institute says around 500 people work at its Jupiter campus, including 40 principal investigators, and that its scientists spin off new Florida-based companies at a rate of about one per year. Each of those companies needs a credible site long before it has a product.",
        source: { label: "The Wertheim UF Scripps Institute: About", href: "https://wertheim.scripps.ufl.edu/about/" },
      },
      {
        title: "A first for Max Planck",
        body: "The Max Planck Florida Institute for Neuroscience describes itself as the first U.S. institution of Germany's Max Planck Society. It says the Jupiter Neuroscience Campus is a collaboration between its neuroscientists, the Wertheim UF Scripps Institute, Florida Atlantic University and the ZEISS Microscopy Solutions center.",
        source: { label: "Max Planck Florida Institute for Neuroscience: Careers", href: "https://www.mpfi.org/about-us/careers/" },
      },
      {
        title: "The university next door",
        body: "Florida Atlantic University says its John D. MacArthur Campus in Jupiter houses the Wilkes Honors College and the headquarters of its Stiles-Nicholson Brain Institute. It also describes the Osher Lifelong Learning Institute on that campus as the largest membership organization of its kind in the country.",
        source: { label: "Florida Atlantic University: Jupiter Campus", href: "https://www.fau.edu/jupiter/" },
      },
      {
        title: "Jupiter by the numbers",
        body: "Census QuickFacts estimate 62,350 residents. They show 53.5 percent of adults with a bachelor's degree or higher, 24.4 percent of residents 65 or older, 20.4 percent speaking a language other than English at home and 94.4 percent of households with a broadband subscription.",
        source: { label: "U.S. Census Bureau QuickFacts: Jupiter", href: QF_JUPITER },
      },
      {
        title: "Help from Town Hall",
        body: "The Town of Jupiter staffs a Business Community Liaison who explains which rules apply to a business, gives direction on development and permit applications and explains the licensing Palm Beach County requires. The town's Doing Business page sends local business tax questions to the county tax collector.",
        source: { label: "Town of Jupiter: Business Community Liaison", href: "https://www.jupiter.fl.us/105/Business-Community-Liaison" },
      },
    ],
    plan: [
      {
        title: "Inventory the evidence",
        body: "We list what the organization can show: papers, patents, data, team biographies, finished jobs, vessels serviced, references who will take a call. Gaps get filled with new photography or writing before design starts, because a Jupiter audience reads the proof first.",
      },
      {
        title: "Build for the reader's setting",
        body: "A recruit in Munich reads on a laptop at night. A boat owner reads on a phone in the sun. We design the science pages for depth and the service pages for one-thumb use, and we test both on the devices those readers actually hold.",
      },
      {
        title: "Leave room to grow into software",
        body: "A spinoff may need a data room or a partner login next year. A marine shop may want online work orders. The site is structured so those tools can be added without starting over.",
      },
    ],
    cta: {
      line: "Send us the three best pieces of proof your business has.",
      body: "We will tell you how we would build a site around them and what else a Jupiter buyer would expect to see.",
    },
    faqs: [
      {
        q: "What does a Jupiter biotech startup need from its first website?",
        a: "It needs to make the science and the team credible to investors, partners and recruits in a few pages. That usually means a clear statement of the problem and the approach, founder and advisor biographies, publications or data where they can be shared, and a simple contact path. Fundraising and regulatory claims should be reviewed by counsel. We keep the build lean so it can expand as the company does.",
      },
      {
        q: "How should a marine business in Jupiter show its work online?",
        a: "With its own photographs, dated and described. Owners and captains here know boats, so a page that names the vessel type, the job and the result persuades far better than a general list of services. Add the technicians' names and certifications you really hold, a quote request that works on a phone and reviews that mention the job. We plan and direct that photography with you.",
      },
      {
        q: "Does Jupiter's research community affect ordinary local business websites?",
        a: "Yes, because it raises the standard of the whole audience. UF Scripps alone reports around 500 people on its campus, and the Census Bureau shows more than half of Jupiter adults with a bachelor's degree. Those residents hire dentists, roofers and restaurants like anyone else, and they are quick to notice vague claims. Specific, checkable statements serve every Jupiter business well.",
      },
      {
        q: "Can one website serve recruits overseas and customers in Jupiter?",
        a: "Yes, if it is organized by reader. A research organization or a growing firm can keep a careers and science section written for candidates abroad and a separate path for local clients, donors or visitors. Each section gets its own navigation, tone and calls to action. Trouble starts when both audiences are forced through one home page that speaks to neither.",
      },
    ],
    guides: [
      "website-vs-web-app-vs-custom-software",
      "custom-website-vs-website-builder",
      "get-found-in-ai-search-local-business",
    ],
    image: WEB_IMAGE,
  },

  {
    town: "juno-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Juno Beach FL | Epic Wolf",
    metaDescription:
      "Juno Beach web design for small coastal businesses: simple, quick websites that serve residents, the weekday office crowd and beach visitors.",
    kicker: "Web design company in Juno Beach, FL",
    headline: "Three Audiences Find You on One Small Screen",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for Juno Beach businesses. The town has fewer than 4,000 residents, a Fortune 200 headquarters and a sea turtle center that reports more than 350,000 visitors a year, so a local site has to serve neighbors, office workers and day visitors at once. We build small, quick sites that do a few things very well.",
    intro: [
      "Juno Beach is two square miles with three different customers. The residents are few and mostly retired: the Census Bureau's estimate puts the median age near 69. The weekday crowd comes from NextEra Energy, which keeps its headquarters here. The weekend crowd comes for the pier and for Loggerhead Marinelife Center, which says more than 350,000 people visit each year.",
      "No small business can write three websites. What it can do is make one short site answer each group's first question. The neighbor wants to know you are still open in August. The office worker wants today's menu and whether lunch fits in forty minutes. The visitor wants directions, parking and hours, on a phone, with sand on the screen.",
      "That argues for restraint. A Juno Beach site should be a handful of fast pages with real photos, current hours, a map and a phone number that dials when tapped. The Census Bureau counts far more housing units than year-round households in town, so part of the audience is away for months and checks in from elsewhere. Keeping the site accurate matters more than keeping it large.",
    ],
    ground: [
      {
        title: "A very small and older town",
        body: "The Census Bureau's profile counts 3,858 residents in the 2020 census. Its latest five-year survey estimates a median age of 69.1 and 57.9 percent of residents 65 or older, with wide margins of error because the town is so small.",
        source: { label: "U.S. Census Bureau profile: Juno Beach town", href: CENSUS_JUNO },
      },
      {
        title: "Homes versus households",
        body: "The same Census profile estimates 3,658 total housing units in Juno Beach and 2,309 households. A large share of homes are not occupied by a year-round household, which fits a town where many owners are present for only part of the year.",
        source: { label: "U.S. Census Bureau profile: Juno Beach town", href: CENSUS_JUNO },
      },
      {
        title: "The headquarters",
        body: "NextEra Energy describes itself as headquartered in Juno Beach, Florida, a Fortune 200 company that owns Florida Power and Light, which it says serves approximately 12 million people across the state. For local lunch spots and service firms, that is a weekday audience of professionals.",
        source: { label: "NextEra Energy investor relations", href: "https://www.investor.nexteraenergy.com/" },
      },
      {
        title: "The visitors",
        body: "Loggerhead Marinelife Center says more than 350,000 visitors come each year to see its exhibits and its sea turtle hospital, and calls Juno Beach one of the most active nesting beaches in the world. Many of those visitors look for a meal or a shop nearby on their phones.",
        source: { label: "Loggerhead Marinelife Center: About", href: "https://marinelife.org/about/" },
      },
      {
        title: "Working from home",
        body: "Google's guidelines say a business that serves customers at their locations should hide its address, and give the example of a plumber working from a residential address. A consultant or tradesperson running a business from a Juno Beach condo should list a service area on Google and on the website instead of the unit number.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
    ],
    plan: [
      {
        title: "Pick the few jobs the site must do",
        body: "We sit down with the owner and choose three or four tasks: show today's hours, take a reservation, display the menu, collect a quote request. Everything else is left out on purpose. A short list is what keeps a small site quick and easy to maintain.",
      },
      {
        title: "Design it phone first and sun proof",
        body: "Large type, dark text on a light background, buttons big enough for a thumb and photos sized so the page opens quickly on a cellular signal at the beach. We check it outdoors before anyone calls it finished.",
      },
      {
        title: "Hand over the keys",
        body: "The owner or a staff member learns to change hours, swap a menu and post a closure in minutes. In a town this size a wrong detail gets noticed by regulars the same day.",
      },
    ],
    cta: {
      line: "Send us your current site and the question customers ask most.",
      body: "A partner will reply with what a smaller and faster version would keep and what it would drop.",
    },
    faqs: [
      {
        q: "How big should a website be for a small Juno Beach business?",
        a: "Small. Most Juno Beach businesses are well served by a handful of pages: what you offer, hours and location, photos, and a way to book or call. The town has fewer than 4,000 residents plus a steady flow of office workers and visitors, and all of them want a quick answer on a phone. Extra pages that nobody maintains do more harm than good.",
      },
      {
        q: "How do beach and turtle center visitors find a Juno Beach business online?",
        a: "Mostly through a map search on a phone while they are already nearby. Loggerhead Marinelife Center reports more than 350,000 visitors a year, and many search for food or shopping afterward. A complete Google profile with accurate hours gets you onto the map, and a quick site with a menu, photos and directions closes the decision. Both need to agree on every detail.",
      },
      {
        q: "Can a home-based Juno Beach business have a professional website without publishing its address?",
        a: "Yes. A home-based business can show a service area instead of a street address, and Google's guidelines say a business that travels to its customers should hide its address on its profile. The website can name Juno Beach and the surrounding towns you serve, list a phone number and contact form, and leave the unit number out entirely. Check the town's rules for home businesses separately.",
      },
      {
        q: "What happens to a Juno Beach website when owners leave for the summer?",
        a: "It should say so clearly. Census estimates show many more housing units than year-round households in Juno Beach, so plenty of customers and some owners are away for part of the year. Post summer hours or a reopening date on the home page and mirror it on Google. A site that looks abandoned in July costs you the customer who checks in from up north in October.",
      },
    ],
    guides: [
      "custom-website-vs-website-builder",
      "website-cost-palm-beach-county",
      "get-found-in-ai-search-local-business",
    ],
    image: WEB_IMAGE,
  },

  {
    town: "riviera-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Riviera Beach FL | Epic Wolf",
    metaDescription:
      "Riviera Beach web design for marine trades, port and logistics firms, Singer Island hospitality and neighborhood businesses near the Marina District.",
    kicker: "Web design company in Riviera Beach, FL",
    headline: "A Capability Statement That Loads on the Dock",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites and custom software for Riviera Beach companies: marine service yards, port tenants and logistics firms, Singer Island hospitality and neighborhood businesses around the Marina District. For the working waterfront we build business-to-business sites that show capability, capacity and contact details in seconds, on any phone and any signal.",
    intro: [
      "The buyers who matter most to Riviera Beach's waterfront are rarely browsing. A yacht captain needs a haul-out slot. A shipper needs to know what a terminal handles. A procurement officer needs a vendor's certifications before a call is worth scheduling. For these readers a website is a capability statement, and the test is whether it gives the facts without making anyone dig.",
      "The city holds real industry. The Port of Palm Beach is here, with dozens of tenants and cargo bound largely for the Caribbean. Viking runs its yacht service center on Avenue C. Yet many marine and industrial firms still present themselves with a logo, a paragraph and a phone number. A site with equipment lists, lift capacity, service areas, photos of the yard and a named contact wins work from people who have never visited.",
      "The neighborhood side of the city needs a different kind of care. The Census Bureau reports that about nine in ten Riviera Beach households have a broadband subscription, lower than in the towns to the north, and more than a fifth of residents speak a language other than English at home. Sites for local shops, churches, clinics and restaurants should be light enough for a phone on cellular data and ready for a second language.",
    ],
    ground: [
      {
        title: "The port",
        body: "The Florida Ports Council describes the Port of Palm Beach in Riviera Beach as a landlord port whose dozens of tenants employ more than 3,800 people. It says the port consistently ranks as the fourth busiest container port among Florida's seaports and that almost 80 percent of the goods passing through are exports.",
        source: { label: "Florida Ports Council: Port of Palm Beach", href: "https://flaports.org/ports/port-of-palm-beach/" },
      },
      {
        title: "Yacht service on Avenue C",
        body: "Viking lists two Riviera Beach facilities on its service site: the Viking Yacht Service Center at 1550 Avenue C and the Viking International Yacht Center at 2100 Avenue B. Yards like these draw the subcontractors and suppliers whose own websites are often their only sales tool.",
        source: { label: "Viking Yacht Service Center", href: "https://www.vikingservicecenter.com/" },
      },
      {
        title: "Connections at home",
        body: "Census QuickFacts show 89.3 percent of Riviera Beach households with a broadband subscription and 94.2 percent with a computer. They also show 22.0 percent of residents speaking a language other than English at home and 23.4 percent born outside the United States.",
        source: { label: "U.S. Census Bureau QuickFacts: Riviera Beach", href: QF_RIVIERA },
      },
      {
        title: "Certificate of Use",
        body: "The city says a Certificate of Use or Business Tax Receipt is required of anyone who keeps a permanent business location or branch office in Riviera Beach or transacts business with sufficient nexus there. It posts separate applications for commercial, home and out-of-city businesses. A site should use the business name exactly as it appears on that receipt.",
        source: { label: "City of Riviera Beach: Business Tax Receipt", href: "https://www.rivierabch.com/government/development/tax" },
      },
      {
        title: "The Marina District",
        body: "The Riviera Beach Community Redevelopment Agency describes the transformation of the Riviera Beach Marina as a public-private partnership between the agency, the city and private development partners. New tenants there will open into a district whose map and directions are still changing.",
        source: { label: "Riviera Beach CRA", href: "https://rbcra.com/" },
      },
    ],
    plan: [
      {
        title: "Write the capability statement first",
        body: "Before any design, we document what the company can do in the terms its buyers use: vessel sizes, lift and storage capacity, cargo types, certifications held, response times, coverage area. That document becomes the backbone of the site and often of the sales deck too.",
      },
      {
        title: "Make the facts easy to reach",
        body: "Specifications go in text, not in a brochure download. Each service gets a page a buyer can forward. Contact routes to a named person. Pages stay light so they open on a phone in a shipyard or on a home connection without broadband.",
      },
      {
        title: "Connect the site to the operation",
        body: "When inquiries start arriving, the next step is usually a tool: a quote request that feeds the schedule, a customer login for job status, a dashboard that replaces the whiteboard. We scope those in phases so the first one pays for the next.",
      },
    ],
    cta: {
      line: "Send us your equipment list and the kind of job you want more of.",
      body: "We will reply with an outline of the site a captain or a freight buyer would need to see before calling you.",
    },
    faqs: [
      {
        q: "What belongs on a marine service company's website in Riviera Beach?",
        a: "The facts a captain or yacht manager needs before calling: the vessel sizes you handle, haul-out and storage capacity, the trades available on site, certifications you actually hold, hours and a direct contact. Add recent photographs of the yard and of finished work. Keep specifications in page text so they can be found by search and read on a phone at the dock.",
      },
      {
        q: "Does a port or logistics company really need more than a one-page site?",
        a: "Usually yes, because its buyers research before they pick up the phone. The Port of Palm Beach's trade group describes dozens of tenants handling containers, bulk and project cargo. A shipper comparing providers wants to see cargo types, routes, equipment and compliance details. One page cannot hold that. A small set of specific pages lets each buyer find and forward the part that concerns them.",
      },
      {
        q: "Why should a Riviera Beach neighborhood business keep its website lightweight?",
        a: "Because a meaningful share of local customers will open it on a phone using cellular data. Census figures show about 89 percent of Riviera Beach households with a broadband subscription, which leaves roughly one in ten without. Heavy video, oversized images and slow scripts shut those customers out. A light page with clear text, compressed photos and a tap-to-call number reaches everyone.",
      },
      {
        q: "Should a business opening in the Marina District launch its site before the doors open?",
        a: "Yes. The district is being rebuilt through a partnership led by the city's redevelopment agency, so maps and habits are still forming. A site that goes live early with the address, opening timing, parking and a way to join a list gives search engines and neighbors something accurate to find. It also gives local press and partners a page to link to.",
      },
      {
        q: "Can a company based outside Riviera Beach build a site that targets customers there?",
        a: "Yes, as long as the site is honest about where the company is. The city itself issues an out-of-city application for firms that do business in Riviera Beach without a location there. A service page can describe the work you do in the city, the areas you cover and how quickly you respond, without implying an address you do not have.",
      },
    ],
    guides: [
      "website-vs-web-app-vs-custom-software",
      "website-cost-palm-beach-county",
      "how-to-choose-a-web-design-company-palm-beach-county",
    ],
    image: WEB_IMAGE,
  },
]
