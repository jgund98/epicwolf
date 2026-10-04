import type { LocalService } from "./types"

/**
 * Web design pages for the central and southern towns: Wellington, Royal Palm
 * Beach, Lake Worth Beach, Boynton Beach and Delray Beach. Facts verified on
 * primary sources 2026-10-04 (U.S. Census QuickFacts read on census.gov, each
 * municipality's own pages, the Boynton Beach CRA, the Delray Beach DDA,
 * Wellington International, Google's own documentation). Copy laws: VOICE.md.
 * Epic Wolf is based in West Palm Beach. No page claims an office in the town.
 */

const CENSUS_WELLINGTON = "https://www.census.gov/quickfacts/fact/table/wellingtonvillageflorida/PST045224"
const CENSUS_ROYAL_PALM = "https://www.census.gov/quickfacts/fact/table/royalpalmbeachvillageflorida/PST045224"
const CENSUS_LAKE_WORTH = "https://www.census.gov/quickfacts/fact/table/lakeworthbeachcityflorida/PST045224"
const CENSUS_BOYNTON = "https://www.census.gov/quickfacts/fact/table/boyntonbeachcityflorida/PST045224"
const CENSUS_DELRAY = "https://www.census.gov/quickfacts/fact/table/delraybeachcityflorida/PST045224"
const GBP = "https://support.google.com/business/answer/3038177?hl=en"

const IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

export const webTownsSouth: LocalService[] = [
  {
    town: "wellington",
    service: "web-design",
    metaTitle: "Web Design Company in Wellington FL | Epic Wolf",
    metaDescription:
      "Wellington web design for barns, equine practices, real estate teams and village businesses: seasonal, multilingual-ready sites and custom software.",
    kicker: "Web design company in Wellington, FL",
    headline: "One Website for Both Wellingtons",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites and custom software for Wellington businesses, from barns, equine practices and equestrian real estate teams to the family services along Forest Hill Boulevard. Each site is planned for two audiences at once: the clientele that arrives from other states and countries each winter, and the residents who live in the village all year.",
    intro: [
      "Wellington has two audiences and most local websites speak to only one of them. The first arrives for the winter show season. Wellington International says its participants come from all 50 states and more than 55 countries, and many of them choose a vet, a farrier, a shipper, a rental or a restaurant from a phone before they land. The second audience never leaves: the families who keep the village running in July.",
      "The winter visitor needs to see proof quickly, in a language they read comfortably, with a way to reach you that works from another time zone. The year-round resident needs hours, prices where you can show them and a booking path that takes a minute. A site built for only one of those readers loses the other for half the year.",
      "Residents here are also unusually well connected. The Census estimates that 96.2 percent of Wellington households have a broadband subscription and that nearly half of adults hold a bachelor's degree or higher. This is a village that looks a business up before it calls, and reads what it finds.",
    ],
    ground: [
      {
        title: "Who arrives each winter",
        body: "Wellington International, the showground that hosts the Winter Equestrian Festival, says it attracts participants from all 50 states and more than 55 countries each year. A Wellington site serving that clientele is read abroad first, often months before the client is in town.",
        source: { label: "Wellington International", href: "https://www.wellingtoninternational.com/" },
      },
      {
        title: "Who lives here",
        body: "Census QuickFacts for the village estimate that 32.7 percent of residents age five and older speak a language other than English at home and 24.9 percent were born abroad. The estimated median household income is $115,632 and 49.7 percent of adults 25 and older hold a bachelor's degree or higher.",
        source: { label: "U.S. Census Bureau QuickFacts: Wellington", href: CENSUS_WELLINGTON },
      },
      {
        title: "A connected village",
        body: "The same Census table estimates that 98.2 percent of Wellington households have a computer and 96.2 percent have a broadband internet subscription. Almost every household in the village can check a business online before it picks up the phone.",
        source: { label: "U.S. Census Bureau QuickFacts: Wellington", href: CENSUS_WELLINGTON },
      },
      {
        title: "Home offices and signs",
        body: "The village allows home-based businesses on conditions. No more than 15 percent of a dwelling's floor area may be used for the business, and no external evidence or sign may advertise or indicate its presence. For a consultant, trainer or broker working from home in Wellington, the website is the only storefront the rules allow.",
        source: { label: "Village of Wellington: Home-Based Businesses", href: "https://www.wellingtonfl.gov/1044/Home-Based-Businesses" },
      },
      {
        title: "Seasonal hours on Google",
        body: "Google's Business Profile guidelines tell seasonal businesses to set regular hours while they are open, to note the seasonal period in the business description, and to mark the profile as temporarily closed in the off-season. The website should say the same thing the profile says on the same dates.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
    ],
    plan: [
      {
        title: "Write for the reader abroad",
        body: "We start with the client who has never been to your barn or office: what they need to see, which questions they send by message at midnight their time and how they pay or reserve from another country. Those answers become the first pages.",
      },
      {
        title: "Add the second language properly",
        body: "Where your clients read Spanish, Portuguese, French or German, the key pages get a real version of their own, marked for search engines and reachable from a visible language link. We build the structure once so another language can follow later.",
      },
      {
        title: "Give the site a summer mode",
        body: "The same site carries off-season hours, year-round services for residents and an early inquiry path for next winter. When the trucks leave in spring, the site changes with the calendar and your Google profile changes with it.",
      },
    ],
    cta: {
      line: "Tell us who your clients are in January and in July.",
      body: "A partner will reply with how one site can serve both, and which pages we would build first.",
    },
    faqs: [
      {
        q: "Which languages should a Wellington equestrian website offer?",
        a: "Offer the languages your clients already write to you in, and no more. Wellington International reports participants from more than 55 countries, and the Census estimates a third of village residents speak a language other than English at home, so the need is real. Look at your inbox and your invoices, pick the one or two languages that appear most, and translate the pages that lead to a booking.",
      },
      {
        q: "What should a seasonal Wellington business do with its website in summer?",
        a: "Keep it live and tell the truth about the calendar. Post off-season hours or a clear reopening month, keep contact details working and use the quiet months to take early inquiries for next winter. Google's guidelines let a seasonal business mark its profile temporarily closed in the off-season, and the site and the profile should always agree.",
      },
      {
        q: "Can I run a business from a home office in Wellington and still be found online?",
        a: "Yes, and the website does the work a sign cannot. The village allows home-based businesses but bars any external sign or evidence of the business at the residence. Google also asks businesses that serve customers at their locations to hide the home address and set a service area. A clear site with your services, area and contact details is how clients confirm you are real.",
      },
      {
        q: "Do Wellington barns and trainers need a website when the work comes by referral?",
        a: "Yes, because a referral still gets checked. Someone hears your name at the ring, then looks you up before sending a horse or a deposit. If nothing comes up, or what comes up is years old, the referral cools. A short, current site with the facility, the people, the program and a direct way to reach you is enough to confirm what they were told.",
      },
      {
        q: "Can you build client portals or booking tools for a Wellington barn or practice?",
        a: "Yes. Beyond the marketing site we build browser-based software such as client portals, lesson and appointment booking, and internal tools that replace a shared spreadsheet. For a seasonal operation the useful first version is usually small: one place where a client abroad can see a schedule, a document or an invoice without a phone call. It grows from how people use it.",
      },
    ],
    guides: ["website-cost-palm-beach-county", "how-to-choose-a-web-design-company-palm-beach-county", "website-vs-web-app-vs-custom-software"],
    image: IMAGE,
  },

  {
    town: "royal-palm-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Royal Palm Beach FL | Epic Wolf",
    metaDescription:
      "Royal Palm Beach web design for practices, plaza retailers and home service firms: fast phone-first sites that turn a nearby search into a call.",
    kicker: "Web design company in Royal Palm Beach, FL",
    headline: "Win the Search Before the Drive",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for Royal Palm Beach businesses: pediatric and dental practices, plaza retailers, restaurants, gyms and the contractors who work the western communities. The sites are built phone first, load fast and answer the questions a family asks before it gets in the car. When a business needs scheduling, quoting or a customer portal, the same team builds that too.",
    intro: [
      "Royal Palm Beach is a village of homeowners with errands. The Census estimates that 82.3 percent of its homes are owner occupied, the average household holds 2.86 people and the average commute runs about half an hour. People here decide where to take the kids, the car and the dog from a phone, usually between two other things.",
      "The money is real. The Census counted about $1.76 billion in retail sales in the village in 2022, or $44,745 per resident, a figure that points to shoppers driving in from Loxahatchee, The Acreage and Westlake. A business on State Road 7 or Southern Boulevard is competing for a regional customer, and that customer compares three options on a screen before choosing a parking lot.",
      "So the website has a narrow job. Load at once. Say what you do, where you are and when you are open. Show the price or how pricing works. Make the call, the booking or the directions one tap. Plenty of local sites miss on speed and on the phone number, which is good news for the business that gets both right.",
    ],
    ground: [
      {
        title: "A retail village",
        body: "Census QuickFacts report total retail sales in Royal Palm Beach of about $1.76 billion in 2022, or $44,745 per capita. That is the weight of the plazas along the village's main roads, and it suggests customers who come from well outside the village limits.",
        source: { label: "U.S. Census Bureau QuickFacts: Royal Palm Beach", href: CENSUS_ROYAL_PALM },
      },
      {
        title: "Homeowners and families",
        body: "The Census estimates an owner-occupied housing rate of 82.3 percent, 2.86 persons per household and 22.5 percent of residents under 18. Roofs, lawns, pools, braces and after-school programs are the everyday purchases of a village built like that.",
        source: { label: "U.S. Census Bureau QuickFacts: Royal Palm Beach", href: CENSUS_ROYAL_PALM },
      },
      {
        title: "Online at home",
        body: "An estimated 97.2 percent of village households have a computer and 94.0 percent have a broadband subscription. The Census also estimates that 32.9 percent of residents speak a language other than English at home and 30.2 percent were born abroad.",
        source: { label: "U.S. Census Bureau QuickFacts: Royal Palm Beach", href: CENSUS_ROYAL_PALM },
      },
      {
        title: "Home occupations",
        body: "The village describes a home occupation as work at a residence that does not alter the exterior of the dwelling, with no signs, no traffic generated by the business and no stock sold on the premises. A lawn service or consultant run from a Royal Palm Beach home has no storefront, so the site and the Google profile carry all of it.",
        source: { label: "Village of Royal Palm Beach: Tax Receipts Information", href: "https://www.royalpalmbeachfl.gov/322/Tax-Receipts-Information" },
      },
      {
        title: "The village directory",
        body: "The village publishes a searchable business directory with more than a thousand listings, sorted by categories that run from contractors and dentists to home occupations, with fields for address, phone and website. Check that your entry matches your site exactly.",
        source: { label: "Village of Royal Palm Beach: Resource Directory", href: "https://www.royalpalmbeachfl.gov/BusinessDirectoryII.aspx" },
      },
      {
        title: "One profile and a service area",
        body: "Google's guidelines say a business that serves customers at their locations should have one profile for its central office with a designated service area, and should hide its address from customers. A website for a mobile business should name the same towns the profile does.",
        source: { label: "Google Business Profile guidelines", href: GBP },
      },
    ],
    plan: [
      {
        title: "Start from the phone screen",
        body: "We design the small screen before the large one: name, what you do, hours, a tap-to-call number and a booking or quote button above the fold. You review working pages on your own phone, in the plaza parking lot if you like.",
      },
      {
        title: "Give every job its own page",
        body: "Each service you want more of gets a page that answers the real question a customer types, with photos of your own work and plain guidance on price. The service area is described honestly, town by town, without copy-paste pages.",
      },
      {
        title: "Connect the site to the front desk",
        body: "Forms land where your staff already works, calls and bookings are tracked, and repeat tasks like appointment requests or estimates can become a simple tool. That is often where a website turns into a scheduling system or a customer portal.",
      },
    ],
    cta: {
      line: "Send us your current site and the three jobs you want more of.",
      body: "A partner will reply with what is costing you calls today and what we would build instead.",
    },
    faqs: [
      {
        q: "What does a Royal Palm Beach service business need on its home page?",
        a: "It needs five things a customer can find in seconds: what you do, where you work, when you are open, proof you are good and one obvious way to reach you. In practice that is a plain headline, the towns you serve, hours, recent reviews or photos of real jobs and a phone number that dials on tap. Everything else can live one click deeper.",
      },
      {
        q: "How should a home-based Royal Palm Beach business show its location online?",
        a: "Show the area you serve, not the house. The village's home occupation rules allow no signs and no business traffic at the residence, and Google asks businesses that travel to customers to hide their address and list a service area instead. Name the village and the neighboring communities you actually cover on the site, and keep that list identical on your Google profile.",
      },
      {
        q: "How many pages does a small business website in Royal Palm Beach need?",
        a: "Fewer than most owners think, but each one has to earn its place. A typical local business needs a home page, a page for every service it wants to sell, an about page with real people, a contact page and a short set of answers to common questions. A dental office with eight services needs eight service pages. A single-trade contractor may need three.",
      },
      {
        q: "What drives the cost of a website for a Royal Palm Beach practice or shop?",
        a: "Scope drives it: the number of distinct page types, who writes the copy, whether photography is needed and what the site must do beyond presenting information. Online scheduling, patient or customer forms, payments and connections to the software you already run each add work. We scope after a conversation and put the estimate in writing, with anything ongoing such as hosting listed separately.",
      },
    ],
    guides: ["custom-website-vs-website-builder", "website-cost-palm-beach-county", "get-found-in-ai-search-local-business"],
    image: IMAGE,
  },

  {
    town: "lake-worth-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Lake Worth Beach FL | Epic Wolf",
    metaDescription:
      "Lake Worth Beach web design for independent shops, restaurants, galleries and trades: light, fast, properly multilingual websites with character.",
    kicker: "Web design company in Lake Worth Beach, FL",
    headline: "A Website the Whole City Can Read",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for Lake Worth Beach businesses, including the independent restaurants, galleries, shops and trades around Lake and Lucerne avenues. In a city where the Census estimates most residents speak a language other than English at home, we plan the languages first, keep pages light enough for any phone and keep the owner's personality on the screen.",
    intro: [
      "Most web advice assumes an English-speaking customer on fast home internet. Lake Worth Beach is not that city. The Census estimates that 57.3 percent of residents age five and older speak a language other than English at home and that 40.7 percent were born in another country. A site written only in English greets most of the neighborhood in its second language.",
      "The connection matters as much as the language. The Census estimates that 83.2 percent of households here have a broadband subscription, which leaves roughly one household in six without one. Heavy video headers and oversized photo galleries punish exactly the customer a neighborhood business depends on. Light pages are a courtesy and a sales decision.",
      "None of that means a plain site. Downtown is the city's own argument for character: the city describes Old Town as a commercial core of about 16 acres with a variety of historic building styles. A good Lake Worth Beach website looks like the shop it belongs to, shows the person behind the counter and still opens in a second on an old phone.",
    ],
    ground: [
      {
        title: "The languages at home",
        body: "Census QuickFacts estimate that 57.3 percent of Lake Worth Beach residents age five and older speak a language other than English at home, that 40.7 percent of residents are foreign born and that 50.3 percent are Hispanic or Latino. The Census table does not name the languages, so ask your own customers.",
        source: { label: "U.S. Census Bureau QuickFacts: Lake Worth Beach", href: CENSUS_LAKE_WORTH },
      },
      {
        title: "Not every home has broadband",
        body: "The Census estimates that 96.2 percent of city households have a computer but only 83.2 percent have a broadband internet subscription. Pages should be built to open quickly on a phone and a mobile data plan.",
        source: { label: "U.S. Census Bureau QuickFacts: Lake Worth Beach", href: CENSUS_LAKE_WORTH },
      },
      {
        title: "How Google reads languages",
        body: "Google recommends a different URL for each language version of a page instead of switching content by cookie or browser setting. It says it uses the visible content of a page to determine its language, and it advises against automatically redirecting visitors based on what a site guesses their language to be.",
        source: { label: "Google Search Central: Managing multilingual sites", href: "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites" },
      },
      {
        title: "Old Town",
        body: "The city lists six historic districts and describes the Old Town district, about 16 acres, as the commercial core of downtown Lake Worth Beach and home to a variety of historic building styles. The same page records that the settlement was first platted as Lucerne before a post office conflict made it Lake Worth.",
        source: { label: "City of Lake Worth Beach: Historic Districts", href: "https://lakeworthbeachfl.gov/historic-districts" },
      },
      {
        title: "The license behind the site",
        body: "The city says anyone providing merchandise or services to the public, including home-based businesses, must hold a current Lake Worth Beach Business License, which is made up of a business tax receipt, a use and occupancy certificate and an inspection. The name and address on that license are the ones a website should repeat.",
        source: { label: "City of Lake Worth Beach: Business License", href: "https://www.lakeworthbeachfl.gov/community-sustainability/business-license" },
      },
    ],
    plan: [
      {
        title: "Decide the languages first",
        body: "Before any design we ask who walks in and what they speak. That sets which pages need a second or third language, what the navigation says and how a visitor switches. Language is architecture, so it is settled at the start.",
      },
      {
        title: "Write each version for real",
        body: "Every language gets its own page at its own address, written for the people who read it and checked by a fluent reader before launch. Menus, prices, hours and the contact form all exist in each version, so nobody hits an English dead end.",
      },
      {
        title: "Keep it light and keep the character",
        body: "Photos of the actual shop, the owner and the work, compressed hard. Text that loads before images. No autoplay video. The page should feel like Lake Avenue and still open on a weak signal.",
      },
    ],
    cta: {
      line: "Tell us what languages you hear at your counter.",
      body: "A partner will reply with a page plan for each one and an honest view of what your current site is missing.",
    },
    faqs: [
      {
        q: "Is an automatic translate button enough for a Lake Worth Beach website?",
        a: "No, not if you want those customers to find you. Google says it determines a page's language from its visible content and recommends a separate URL for each language version. A widget that swaps text in the browser leaves no page in the second language for a search engine to index, and machine wording on a menu or a price list costs trust. Translate the pages that matter and do it properly.",
      },
      {
        q: "Why does page weight matter for a Lake Worth Beach business?",
        a: "Because a meaningful share of your neighbors reach you on a phone plan, not home internet. The Census estimates that about 83 percent of households in the city have a broadband subscription. A page loaded with large images or video can take long enough on mobile data that the visitor leaves. Compressed photos, simple layouts and text that appears first keep that customer.",
      },
      {
        q: "Can a Lake Worth Beach gallery or maker sell online without losing the shop's personality?",
        a: "Yes, if the store is designed around the work instead of a stock template. We build online stores on Shopify or as a custom build, with product pages that show the maker, the process and the piece at real scale. Shipping, pickup at the shop and inventory are set up so the online store and the counter never sell the same one-off item twice.",
      },
      {
        q: "Does a home business in Lake Worth Beach need a license before its website goes live?",
        a: "The website itself needs no city approval, but the business behind it does. The city says anyone providing goods or services to the public, including home-based businesses, must hold a current Lake Worth Beach Business License. We are not attorneys, so confirm your own case with the city's business license division. Then use the licensed name and address on the site and on every listing.",
      },
    ],
    guides: ["website-accessibility-ada-florida", "custom-website-vs-website-builder", "get-found-in-ai-search-local-business"],
    image: IMAGE,
  },

  {
    town: "boynton-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Boynton Beach FL | Epic Wolf",
    metaDescription:
      "Boynton Beach web design for medical practices, marina operators, restaurants and trades: readable, fast sites, online booking and custom software.",
    kicker: "Web design company in Boynton Beach, FL",
    headline: "Websites That Earn the Call in Boynton",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites and custom software for Boynton Beach businesses: medical and dental practices, charter and dive operators at the marina, restaurants, retailers and home service companies. Sites are built to be read easily by an older audience, to load fast on a phone and to put the call or the booking first. We also help owners in the redevelopment area check which local programs apply.",
    intro: [
      "Boynton Beach is rebuilding its east side in public. The Boynton Beach Community Redevelopment Agency describes Town Square, a 16.5 acre complex with City Hall, the library, a cultural center in the historic high school and an amphitheater, as the catalyst project for two of its districts. New apartments and storefronts are following along Ocean Avenue, Boynton Beach Boulevard and Federal Highway.",
      "A business opening into that is judged online before anyone walks past it. And the judges are specific. The Census estimates that 22.5 percent of Boynton residents are 65 or older and that 38 percent speak a language other than English at home. Small gray type, low contrast and a phone number hidden in a footer fail this audience first.",
      "Boynton is also one of the few places where a public agency lists website work as a reimbursable expense. The redevelopment agency's marketing grant names website development and enhancement among its eligible costs for businesses inside its area. It is not a certainty and it has conditions, but an owner on the east side should know it exists before paying for a site.",
    ],
    ground: [
      {
        title: "A grant that names websites",
        body: "The Boynton Beach CRA's Commercial Business Marketing Grant Program is a reimbursable grant whose eligible expenses include website development and enhancement, digital marketing campaigns and branding and graphic design services. Applicants must be in a commercial property inside the agency's area and hold valid city and county business tax receipts. The agency states that applying is not a guarantee of funding.",
        source: { label: "Boynton Beach CRA: Commercial Business Marketing Grant Program", href: "https://www.boyntonbeachcra.com/business-development/business-grants/commercial-business-marketing-grant-program" },
      },
      {
        title: "Where the area is",
        body: "The agency says it was created by the city in 1982 and covers 1,650 acres along the eastern edge of Boynton Beach, organized into six districts: Industrial Avenue, Boynton Beach Boulevard, Heart of Boynton, Cultural, Downtown and Federal Highway. Its boundary map decides which businesses its programs reach.",
        source: { label: "Boynton Beach CRA: How the BBCRA Works", href: "https://www.boyntonbeachcra.com/about-bbcra/how-the-bbcra-works" },
      },
      {
        title: "Town Square",
        body: "The CRA describes the 16.5 acre Town Square project as the catalyst for redevelopment of its Boynton Beach Boulevard and Cultural districts. It includes the City Hall and library building, a fire station, park space and an amphitheater, and the historic Boynton Beach High School reused as a cultural center.",
        source: { label: "Boynton Beach CRA: Town Square", href: "https://www.boyntonbeachcra.com/bbcra-projects/completed-projects/town-square" },
      },
      {
        title: "Who reads the site",
        body: "Census QuickFacts estimate that 22.5 percent of Boynton Beach residents are 65 or older, 38.0 percent of residents age five and older speak a language other than English at home and 29.6 percent were born abroad. An estimated 89.1 percent of households have a broadband subscription.",
        source: { label: "U.S. Census Bureau QuickFacts: Boynton Beach", href: CENSUS_BOYNTON },
      },
      {
        title: "A medical economy",
        body: "The Census reports about $910 million in health care and social assistance receipts in Boynton Beach in 2022, close to three times the city's accommodation and food services sales that year. Practices are a large share of local business, and a practice website is judged on clarity and trust.",
        source: { label: "U.S. Census Bureau QuickFacts: Boynton Beach", href: CENSUS_BOYNTON },
      },
      {
        title: "Free help worth taking",
        body: "The CRA runs a Social Media Outreach Program, free to small businesses inside its area, that offers consulting on building an online brand. It also keeps a public business directory that businesses can submit to online. Both are worth using whoever builds the site.",
        source: { label: "Boynton Beach CRA: Social Media Outreach Program", href: "https://www.boyntonbeachcra.com/business-development/social-media-outreach-program-smop" },
      },
    ],
    plan: [
      {
        title: "Check the map before the budget",
        body: "We look at whether the business sits inside the redevelopment area and which city or agency programs might apply, then point you to the people who run them. The application is yours to file. We scope the web work clearly enough to document.",
      },
      {
        title: "Design for older eyes and small screens",
        body: "Large type, strong contrast, generous buttons and a phone number at the top of every page. Forms ask only what the office needs. We build to recognized accessibility guidelines from the first layout, because fixing a finished site costs more.",
      },
      {
        title: "Put the booking where the thumb is",
        body: "A charter needs dates and a deposit. A practice needs an appointment request that reaches the front desk. A contractor needs a quote form that works with photos. We build the path that fits and connect it to the tools your staff already uses.",
      },
    ],
    cta: {
      line: "Send us your address and what a new customer should be able to do online.",
      body: "A partner will reply with a page plan and whether your location sits inside the redevelopment area.",
    },
    faqs: [
      {
        q: "Can a Boynton Beach CRA grant help pay for a new website?",
        a: "It can, for eligible businesses, though approval is never automatic. The agency's Commercial Business Marketing Grant Program reimburses marketing costs and lists website development and enhancement as an eligible expense. The business must be in a commercial property inside the agency's area, hold city and county business tax receipts and show a need. The board decides, and the agency says applying is not a guarantee of funding, so read the current rules first.",
      },
      {
        q: "How long does a website take for a Boynton Beach business?",
        a: "A typical custom marketing website takes four to eight weeks from kickoff to launch. Content and approvals set the pace more than design or code, so a practice that gathers its services, staff bios and photos early finishes sooner. Booking systems, patient forms and custom software take longer and are scoped in phases, with a useful first version going live before the rest.",
      },
      {
        q: "What makes a website easy for older Boynton Beach customers to use?",
        a: "Legibility and fewer steps make the difference. Use large type with strong contrast, plain labels instead of icons alone, buttons big enough for an unsteady thumb and a phone number that is always visible, because many older customers prefer to call. Avoid pop-ups, sliders and forms that time out. The Census estimates more than a fifth of Boynton residents are 65 or older, so this is a core audience.",
      },
      {
        q: "Can you add online booking to a Boynton Harbor Marina charter or dive site?",
        a: "Yes. We build booking flows that show available dates, take a deposit and confirm by email or text, either by connecting the reservation system you already use or by building one around how your boat actually runs. The page around it matters as much: the trip, the captain, what to bring and the weather policy, all readable on a phone at the dock.",
      },
    ],
    guides: ["website-accessibility-ada-florida", "website-redesign-checklist", "website-cost-palm-beach-county"],
    image: IMAGE,
  },

  {
    town: "delray-beach",
    service: "web-design",
    metaTitle: "Web Design Company in Delray Beach FL | Epic Wolf",
    metaDescription:
      "Delray Beach web design for Atlantic Avenue restaurants, Pineapple Grove galleries, hotels and service firms. Fast sites that sell the room on a phone.",
    kicker: "Web design company in Delray Beach, FL",
    headline: "The Avenue Starts on a Phone",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for Delray Beach businesses, from Atlantic Avenue restaurants and boutique hotels to Pineapple Grove galleries and the service firms off the avenue. We plan and produce the photography, write the copy and build a fast site that shows the room, answers the practical questions and takes the reservation, the booking or the sale on a phone.",
    intro: [
      "In Delray the decision is made on the sidewalk, with a phone in one hand. A couple standing on Atlantic Avenue pulls up three restaurants and picks the one whose site shows the room, the menu and a table at eight. The website is not a brochure here. It is the host stand.",
      "The stakes are large for a city this size. The Census counted about $721 million in accommodation and food services sales in Delray Beach in 2022, more than double the figure for Boynton Beach next door, which has more residents. That money moves through a few dense blocks, where the next option is always thirty feet away.",
      "Downtown is also more than one street. The Downtown Development Authority counts six neighborhoods in its district: The Ave, SOFA, West Atlantic, Pineapple Grove, US1 and Beachside. A gallery on Artist Alley and a bar near the bridge are selling different evenings to different people, and their websites should not look like each other.",
    ],
    ground: [
      {
        title: "Six neighborhoods downtown",
        body: "The Delray Beach Downtown Development Authority says it was created in 1971 by downtown property owners and is funded by a tax paid by property owners inside the district. It names six neighborhoods in that district: The Ave, SOFA (South of Atlantic), West Atlantic, Pineapple Grove, US1 and Beachside.",
        source: { label: "Delray Beach DDA: About", href: "https://downtowndelraybeach.com/dda" },
      },
      {
        title: "The downtown listing",
        body: "The DDA takes business listings for the Downtown Delray website through an online form. The form is for businesses located within the DDA district only, limited to those with a physical storefront or location downtown, and a listing carries contact details, a website link, a description and a photo.",
        source: { label: "Delray Beach DDA: Submit a Business", href: "https://downtowndelraybeach.com/live-and-work/submit-a-business" },
      },
      {
        title: "A hospitality city",
        body: "Census QuickFacts report about $721 million in accommodation and food services sales in Delray Beach in 2022 and about $3.1 billion in total retail sales. Restaurants, bars, hotels and shops are the local economy, and every one of them is compared on a phone.",
        source: { label: "U.S. Census Bureau QuickFacts: Delray Beach", href: CENSUS_DELRAY },
      },
      {
        title: "Who lives here",
        body: "The Census estimates that 28.0 percent of Delray Beach residents are 65 or older, 43.7 percent of adults 25 and older hold a bachelor's degree or higher and 28.1 percent of residents age five and older speak a language other than English at home. The average household is 2.24 people.",
        source: { label: "U.S. Census Bureau QuickFacts: Delray Beach", href: CENSUS_DELRAY },
      },
      {
        title: "Pineapple Grove",
        body: "The DDA's listing for Arts Warehouse places it on Artist Alley in the Pineapple Grove district, opened in late 2017, with three gallery spaces, monthly workshops and 15 private studios for resident artists that are open to visitors. The arts district is a working one.",
        source: { label: "Downtown Delray Beach: Arts Warehouse", href: "https://downtowndelraybeach.com/go/arts-warehouse" },
      },
    ],
    plan: [
      {
        title: "Photograph the room first",
        body: "Atmosphere is what Delray sells, so the site starts with a shoot we plan, direct and produce: the space at the hour it looks right, the plates, the people who run it. Stock photos of someone else's patio are the fastest way to look like nobody.",
      },
      {
        title: "Make the first screen do the work",
        body: "Hours, address, tonight's menu as real text and a reserve or book button, all before the first scroll. Parking and valet notes help on the avenue. The page is tested on a phone in daylight, because that is where it will be read.",
      },
      {
        title: "Tie the site to every listing",
        body: "The Downtown Delray listing, the Google profile, the reservation platform and the social bios should all point to the same pages with the same hours. We set that up at launch and add tracking so you can see which doors people come through.",
      },
    ],
    cta: {
      line: "Send us your address and the one thing a visitor should do on your site.",
      body: "Reserve, book a room, buy a piece or call. A partner will reply with how we would build toward it.",
    },
    faqs: [
      {
        q: "Should a Delray Beach restaurant post its menu as a PDF?",
        a: "No. Put the menu on the page as real text. A PDF is slow to open on a phone, hard to read without pinching and awkward for search engines and AI assistants to quote a dish from. Text menus load instantly, can be updated in a minute when the kitchen changes something and let a search for a specific dish land on you.",
      },
      {
        q: "How does a business get listed on the Downtown Delray website?",
        a: "Through the Downtown Development Authority's online submission form. The DDA says the form is only for businesses located within its district, and listings are limited to those with a physical storefront or location downtown. A listing includes contact information, a website link, a description and a photo, so have a current site and a strong image ready before you submit.",
      },
      {
        q: "What should a Pineapple Grove gallery or boutique website do?",
        a: "It should show the work at a size worth looking at and make the next step obvious. For a gallery that means current exhibitions, artist pages and a simple way to inquire about a piece. For a boutique it means new arrivals, hours and whether an item can be held or shipped. Visitors arrive on foot from Atlantic Avenue, so directions and parking deserve a clear line too.",
      },
      {
        q: "Does an Atlantic Avenue business need its own website if it has Instagram and a reservation app?",
        a: "Yes, because you own neither of those. A social profile and a booking platform are rented space with someone else's rules, layout and competitors one swipe away. Your own site is where the hours are always right, the menu is yours, private events and gift cards have a page and Google and AI assistants find a clear description of the business. The other channels should lead back to it.",
      },
    ],
    guides: ["how-to-choose-a-web-design-company-palm-beach-county", "planning-a-brand-shoot-palm-beach-county", "website-redesign-checklist"],
    image: IMAGE,
  },
]
