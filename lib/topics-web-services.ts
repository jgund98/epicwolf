import type { Topic } from "./types"

/**
 * Web topic pages, kind "service": /web-design/[topic].
 * Facts verified on primary sources 2026-10-04: Google Search Central, W3C,
 * ada.gov, the FTC, CISA, NIST, the U.S. Copyright Office, ICANN, the Florida
 * Department of Revenue, Florida Statutes on Online Sunshine, the PCI Security
 * Standards Council, Shopify and Apple Developer and Google Play help pages.
 * Copy laws: VOICE.md and raw/cluster-brief.md.
 */

const IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

const SITE_MOVE = "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
const FIPA = "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.171.html"
const FL_SOLICIT = "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.059.html"
const DOT_COM = "https://www.ftc.gov/system/files/documents/plain-language/bus41-dot-com-disclosures-information-about-online-advertising.pdf"
const APP_REVIEW = "https://developer.apple.com/app-store/review/guidelines/"
const FL_SALES_TAX = "https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx"

export const webServiceTopics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "custom-website-design",
    kind: "service",
    name: "Custom website design",
    metaTitle: "Custom Website Design Palm Beach County | Epic Wolf",
    metaDescription:
      "Custom website design for Palm Beach County firms: written, designed and coded from scratch to load fast, read clearly to Google and AI and win the inquiry.",
    kicker: "Custom website design in Palm Beach County",
    headline: "Build the Site Only Your Firm Could Own",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and codes custom websites for businesses across Palm Beach County and beyond. A custom site is written, designed and built from scratch around one company's buyers instead of being poured into a theme. The result loads fast on a phone, reads clearly to Google and AI assistants and makes the next step obvious.",
    intro: [
      "Most business websites are a rented template with a logo swapped in. The same layout sells a med spa in Boca Raton, a law firm on Flagler Drive and a contractor in Jupiter, which means it says nothing specific about any of them. A buyer comparing three firms sees three versions of the same page and picks on price.",
      "A custom website starts from the opposite end. We work out what a careful buyer needs to read before calling, write that copy first, then design pages around it and code them by hand on modern frameworks. Nothing on the page is there because a theme shipped with it. That is why a custom build can be both faster and more distinctive than a builder site: it carries only what it needs.",
      "The site is also the base for whatever comes next. Many clients begin with a marketing website and later add a quote calculator, a client login or a connection to their CRM. Building on real code from the start means those additions are an extension, not a second rebuild.",
    ],
    ground: [
      {
        title: "Speed has published targets",
        body: "Google defines three Core Web Vitals and gives a target for each: the main content should load within 2.5 seconds, the page should respond to a tap in under 200 milliseconds and the layout shift score should stay under 0.1. Google says these align with what its core ranking systems seek to reward.",
        source: { label: "Google Search Central: Core Web Vitals", href: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
      },
      {
        title: "The phone version is the one Google reads",
        body: "Google uses the mobile version of a site's content, crawled with its smartphone agent, for indexing and ranking. Its guidance is to make sure the mobile site carries the same content, titles, structured data and image alt text as the desktop site. Anything hidden or trimmed on a phone is effectively missing.",
        source: { label: "Google Search Central: Mobile-first indexing", href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" },
      },
      {
        title: "The ADA reaches the web",
        body: "The Department of Justice states that the ADA's requirements apply to all the goods, services, privileges or activities offered by public accommodations, including those offered on the web. It has not set a detailed technical standard for businesses and points to the Web Content Accessibility Guidelines as helpful guidance. An attorney should advise on your specific exposure.",
        source: { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: "https://www.ada.gov/resources/web-guidance/" },
      },
      {
        title: "Contrast is measurable",
        body: "WCAG success criterion 1.4.3, a Level AA requirement, calls for a contrast ratio of at least 4.5 to 1 between text and its background, or 3 to 1 for large text. Pale gray type on white, a common habit on luxury sites, often fails it. The palette should be tested before the design is approved.",
        source: { label: "W3C: Understanding WCAG 1.4.3 Contrast (Minimum)", href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" },
      },
      {
        title: "AI answers use the same index",
        body: "Google says there are no additional requirements to appear in AI Overviews or AI Mode. A page must be indexed and eligible to show in Search with a snippet. Its listed practices are plain: allow crawling, keep important content in text form, link pages internally and make sure structured data matches the visible text.",
        source: { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      },
      {
        title: "Structured data has a preferred format",
        body: "Google recommends JSON-LD for structured data because it is the easiest format to implement and maintain. It also says not to add structured data about information that is not visible to the user, so markup has to describe what is really on the page.",
        source: { label: "Google Search Central: Introduction to structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
      },
    ],
    includes: [
      { name: "Page plan", detail: "A map of the pages a buyer needs before they call, built from how your customers search and what they ask." },
      { name: "Copywriting", detail: "Every page written before it is designed, in your voice, with the answer first and the proof close behind." },
      { name: "Design from scratch", detail: "Layouts drawn for your brand and your photography, reviewed as working pages on your own phone." },
      { name: "Hand-coded build", detail: "Built on modern frameworks without a theme or page builder underneath, so the site carries no dead weight." },
      { name: "Search and AI foundations", detail: "Clean URLs, titles, internal links and structured data that match the visible page." },
      { name: "Accessibility pass", detail: "Contrast, keyboard use, alt text and captions checked against the WCAG guidelines before launch." },
      { name: "Forms and tracking", detail: "Inquiry forms that reach the right inbox, with analytics that show which pages produce calls." },
      { name: "Editing setup", detail: "A way for your team to change text, photos and posts without breaking the layout." },
    ],
    plan: [
      {
        title: "Decide what the site must say",
        body: "We interview the people who sell for you, read what your buyers search and write the copy for each page. Design does not start until the words are right, because layout built around placeholder text gets rebuilt later.",
      },
      {
        title: "Design it where it will live",
        body: "You review real pages in a browser and on a phone, not flat pictures. Type, spacing and photography are judged at the size a buyer will see them, and speed and contrast are checked while changes are still cheap.",
      },
      {
        title: "Launch then watch",
        body: "We connect forms, analytics and Search Console, launch and then read what happens: which pages get found, where visitors stop and which inquiries are worth having. The site keeps improving from evidence.",
      },
    ],
    cta: {
      line: "Send us your current site and the three competitors you lose to.",
      body: "We will tell you what a custom build would change, what it would not and whether a simpler option would serve you just as well.",
    },
    faqs: [
      {
        q: "What makes a website custom instead of a template?",
        a: "A custom website is designed and coded for one business, while a template is a finished layout that many businesses fill in. On a custom build the page structure, copy, design and code all follow from your buyers and your brand. On a template those decisions were made by someone who never met you. The practical differences show up in speed, in how distinct the site looks and in what it can connect to later.",
      },
      {
        q: "Do I own my website when it is finished?",
        a: "You should, and the contract is where that gets settled. Ask any web company three things before signing: who holds the domain registration, who owns the design and code once the final invoice is paid and whether you can move the site to another host. Epic Wolf builds sites clients own. Whoever you hire, have the ownership language in writing and keep the domain in your company's name.",
      },
      {
        q: "How long does a custom website take to build?",
        a: "A typical custom marketing website takes four to eight weeks from kickoff to launch. Content and approvals move the date more than design or code do. A site with ten page types, new photography and several decision makers sits at the long end. A focused site with a single approver sits at the short end. Stores and anything with logins are scoped separately, in phases.",
      },
      {
        q: "Can my team update a custom website without a developer?",
        a: "Yes, if editing is planned as part of the build. A well built custom site gives your staff a simple way to change text, swap photos, publish articles and add team members while the layout stays locked. The parts that need a developer are structural: new page types, new features and integrations. Ask to see the editing screen before you sign with anyone.",
      },
      {
        q: "Is a custom website worth it for a small business?",
        a: "It is worth it when the website is how buyers judge you before they call. A firm selling considered, higher priced work in Palm Beach Gardens or on Worth Avenue is compared online first, and a generic site costs it inquiries it never hears about. A brand new business testing an idea can start on a builder and move later. The honest test is what one additional good client is worth.",
      },
    ],
    guides: ["website-cost-palm-beach-county", "custom-website-vs-website-builder", "how-to-choose-a-web-design-company-palm-beach-county"],
    related: ["website-redesign", "landing-pages", "web-applications", "law-firm-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "website-redesign",
    kind: "service",
    name: "Website redesign",
    metaTitle: "Website Redesign Palm Beach County | Epic Wolf",
    metaDescription:
      "Website redesign in Palm Beach County that protects what you already rank for: URL mapping, permanent redirects, rewritten pages and a watched launch.",
    kicker: "Website redesign company in Palm Beach County",
    headline: "Rebuild the Site Without Losing the Rankings",
    answer:
      "Epic Wolf is a West Palm Beach agency that redesigns and rebuilds existing websites for Palm Beach County businesses. A redesign replaces the design, copy and code of a site while carrying its search history to the new one through a URL map and permanent redirects. Done in that order, a company gets a better site and keeps the visibility it already earned.",
    intro: [
      "A redesign is the riskiest routine thing a business does to its marketing. The old site may look tired, but it has years of history with Google: pages that rank, links from other sites, a Google Business Profile pointing at it. Launch a new site with new addresses and no plan, and that history points at pages that no longer exist.",
      "So the work starts with an inventory, not a mood board. We crawl the current site, pull what Search Console and analytics say about each page and sort the pages into keep, improve, merge and retire. The new design is drawn around that list. Pages that bring in business are protected. Pages nobody reads stop cluttering the menu.",
      "A redesign is also the moment to ask what the site should do that it does not do now. If staff re-type form submissions into a CRM, or clients call the office for something a login could show them, the rebuild is the cheapest time to fix it.",
    ],
    ground: [
      {
        title: "Map every old address",
        body: "Google's guidance for a site move with URL changes is to list the old URLs, decide where each one should redirect and use server side permanent redirects, such as 301 and 308, from the old URLs to the new ones. Redirecting everything to the home page is not a map.",
        source: { label: "Google Search Central: Site moves with URL changes", href: SITE_MOVE },
      },
      {
        title: "Redirects are not temporary",
        body: "Google says to keep the redirects for as long as possible, generally at least one year. They are often deleted in a later hosting change by someone who does not know why they exist, so the redirect file belongs in the handoff documents.",
        source: { label: "Google Search Central: Site moves with URL changes", href: SITE_MOVE },
      },
      {
        title: "Some movement is normal",
        body: "Google tells site owners to expect temporary fluctuation in site ranking during a move and says a small to medium sized website can take a few weeks for most pages to move. A dip in the first weeks is not proof of failure. A dip that keeps going is a reason to audit the redirects.",
        source: { label: "Google Search Central: Site moves with URL changes", href: SITE_MOVE },
      },
      {
        title: "Why a 301 carries the history",
        body: "Google explains that when Googlebot follows a permanent redirect, its indexing pipeline uses the redirect as a signal that the target should be canonical, and the new address is what shows in results. A temporary redirect keeps the old address in results instead. The type of redirect matters.",
        source: { label: "Google Search Central: Redirects and Google Search", href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects" },
      },
      {
        title: "Keep a baseline",
        body: "Google's guide to traffic drops lists site migrations as a cause, noting that changing the URLs of existing pages can bring ranking fluctuations while Google recrawls and reindexes. It recommends comparing periods in the Search Console Performance report, which holds 16 months of data. Export it before launch.",
        source: { label: "Google Search Central: Debugging drops in Search traffic", href: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" },
      },
    ],
    includes: [
      { name: "Content inventory", detail: "A crawl of every current page with its traffic, rankings and inbound links, sorted into keep, improve, merge or retire." },
      { name: "URL map", detail: "A line by line list matching each old address to its new one, approved before any code is written." },
      { name: "Rewritten pages", detail: "Copy that keeps what already ranks and fixes what never explained the business." },
      { name: "New design and build", detail: "A fresh design coded from scratch, reviewed on real devices before launch." },
      { name: "Permanent redirects", detail: "Server side redirects for pages, images and documents, tested one by one on launch day." },
      { name: "Listing updates", detail: "Google Business Profile, directories and ad destinations pointed at the new addresses." },
      { name: "Launch checklist", detail: "Forms, tracking, sitemap submission and indexing settings verified the day the site goes live." },
      { name: "Post-launch watch", detail: "Search Console and analytics compared against the saved baseline in the weeks after." },
    ],
    plan: [
      {
        title: "Take stock before touching design",
        body: "We record what the current site ranks for, which pages bring inquiries and which links point where. That baseline decides what must survive and gives everyone a fair way to judge the launch afterward.",
      },
      {
        title: "Rebuild around what works",
        body: "The new structure keeps strong pages at the same address where possible and gives every changed address a destination. Design and copy are rebuilt together so the site says more with fewer pages.",
      },
      {
        title: "Move it all at once and monitor",
        body: "For a small or medium site, Google recommends moving every URL at the same time, so we launch in one step with redirects live, submit the new sitemap and check Search Console until the old addresses have handed over.",
      },
    ],
    cta: {
      line: "Send us the address of the site you want to replace.",
      body: "We will crawl it and tell you which pages carry your search traffic today and what a rebuild has to protect.",
    },
    faqs: [
      {
        q: "Will I lose my Google rankings if I redesign my website?",
        a: "You do not have to, but some temporary movement is normal. Google itself says to expect fluctuation while it recrawls a site whose addresses changed. Lasting losses usually trace to three mistakes: changed URLs with no redirects, deleted pages that used to rank and a launch that left search engines blocked. A redesign that maps every address and keeps the strong content avoids all three.",
      },
      {
        q: "How do I know if my website needs a redesign or just an update?",
        a: "A site needs a redesign when the problems are structural and an update when they are cosmetic. Slow pages, a layout that fails on phones, a platform your staff cannot edit and a message that no longer matches the business are structural. Old photos, a stale team page and thin service descriptions can be fixed in place. If fixing the list would touch every page anyway, rebuild.",
      },
      {
        q: "Should we change our domain name during a redesign?",
        a: "Only if there is a real business reason, such as a new company name. A domain change is a larger move than a redesign because every address changes at once, and Google asks owners to keep redirects from the old domain for at least a year. If the name must change, plan it as its own step and keep ownership of the old domain for the long term.",
      },
      {
        q: "What should we save from the old website before it is replaced?",
        a: "Save the content, the addresses and the data. That means a full crawl of every URL, exports from Search Console and analytics, copies of all text, images and documents, the list of form recipients and any tracking codes in use. Businesses often discover after launch that a PDF, a careers page or a tracking tag only existed on the old site. An archive makes that a five minute fix.",
      },
      {
        q: "How often should a business redesign its website?",
        a: "There is no set schedule, and a calendar is the wrong trigger. Rebuild when the site stops doing its job: the business has changed, the brand has changed, the platform is holding back speed or editing, or buyers say they could not find what they needed. A well built site that is maintained and improved in place can go many years between full rebuilds.",
      },
    ],
    guides: ["website-redesign-checklist", "website-cost-palm-beach-county", "get-found-in-ai-search-local-business"],
    related: ["custom-website-design", "website-maintenance", "ecommerce-websites", "crm-development"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "ecommerce-websites",
    kind: "service",
    name: "Ecommerce websites",
    metaTitle: "Ecommerce Website Developer West Palm Beach | Epic Wolf",
    metaDescription:
      "Ecommerce website development in Palm Beach County: Shopify or custom stores with product pages, checkout, Florida sales tax setup, shipping and inventory.",
    kicker: "Ecommerce website developer in Palm Beach County",
    headline: "Make the Checkout the Easiest Part",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds ecommerce websites for retailers and brands in Palm Beach County and beyond, on Shopify or as a custom build. An ecommerce site is a store that runs on its own: product pages, cart, checkout, payment, sales tax, shipping and inventory, set up so an order needs no phone call to complete.",
    intro: [
      "An online store is a shop with no salesperson in it. Every question a clerk would answer on Worth Avenue or Atlantic Avenue has to be answered by the page: what it is, what it costs, whether it fits, when it arrives and what happens if it is wrong. Stores that leave those answers out lose the sale quietly.",
      "The platform question comes early and matters less than people think. Shopify suits most retailers because payments, hosting and security come with it and the catalog is easy for staff to run. A custom build earns its cost when the selling is unusual: configured products, trade pricing, deposits, bookings mixed with goods or a tie to software you already run. We build both and recommend the smaller one when it will do.",
      "The work most stores skip is the operating setup. Tax, shipping rules, inventory counts, order emails and returns decide whether the store saves labor or creates it. We set those up with whoever will fulfill the orders, because the person packing boxes in Riviera Beach knows things the design file does not.",
    ],
    ground: [
      {
        title: "Florida sales tax and delivery",
        body: "The Florida Department of Revenue says a business selling taxable items at retail must register before it operates. It also says the county surtax rate applies to a taxable item delivered into a county that imposes a surtax, so a store shipping across Florida charges by destination. A CPA should confirm your setup.",
        source: { label: "Florida Department of Revenue: Sales and Use Tax", href: FL_SALES_TAX },
      },
      {
        title: "Selling into Florida from elsewhere",
        body: "Florida requires businesses making remote sales into the state to collect and electronically remit sales tax and any applicable surtax once their taxable remote sales exceeded $100,000 over the previous calendar year. Marketplace providers must collect on the sales they facilitate for marketplace sellers.",
        source: { label: "Florida Department of Revenue: Sales and Use Tax", href: FL_SALES_TAX },
      },
      {
        title: "Card data rules apply at any size",
        body: "The PCI Security Standards Council states that PCI DSS is intended for all entities involved in payment processing, including merchants, regardless of their size or transaction volume. How much of the standard lands on you depends on whether card numbers ever touch your own systems.",
        source: { label: "PCI Security Standards Council: Merchants", href: "https://www.pcisecuritystandards.org/merchants/" },
      },
      {
        title: "What a hosted platform covers",
        body: "Shopify states that it is certified Level 1 PCI DSS compliant and that this compliance extends by default to all stores powered by Shopify. That is a main reason a hosted checkout is the lower-risk choice for most retailers compared with handling card data on a server of their own.",
        source: { label: "Shopify: PCI compliance", href: "https://www.shopify.com/security/pci-compliant" },
      },
      {
        title: "The 30-day shipping rule",
        body: "Under the FTC's Mail, Internet, or Telephone Order Merchandise Rule, a seller needs a reasonable basis to expect it can ship within the time it states, or within 30 days if it states none. If it cannot, it must offer the buyer the choice to consent to the delay or cancel for a prompt refund.",
        source: { label: "FTC: Business Guide to the Mail, Internet, or Telephone Order Merchandise Rule", href: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" },
      },
      {
        title: "Product pages can show price in Google",
        body: "Google's merchant listing documentation says Product markup can make a page eligible for shopping experiences in Search, and that only pages where a shopper can purchase the product qualify. The required properties are the product name, an image and an offer with a price and currency.",
        source: { label: "Google Search Central: Merchant listing structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing" },
      },
    ],
    includes: [
      { name: "Platform recommendation", detail: "Shopify or a custom build, chosen from how you sell and who will run the store day to day." },
      { name: "Product page design", detail: "Pages that answer size, material, delivery and return questions next to the buy button." },
      { name: "Catalog setup", detail: "Products, variants, collections and photography loaded and organized so staff can add more." },
      { name: "Checkout and payments", detail: "A hosted, secure checkout with the payment methods your buyers expect." },
      { name: "Tax and shipping rules", detail: "Florida sales tax, county surtax by destination, shipping rates and local pickup configured with your accountant's input." },
      { name: "Inventory and order flow", detail: "Stock counts, order notifications and fulfillment steps matched to how orders are really packed." },
      { name: "Product structured data", detail: "Markup for price and availability so listings are eligible for Google's shopping results." },
      { name: "Policies and order emails", detail: "Shipping, returns and confirmation messages written plainly and placed where buyers look." },
    ],
    plan: [
      {
        title: "Choose the platform from the selling",
        body: "We look at the catalog, how prices and options work, who fulfills orders and what other systems are involved. That decides between Shopify and a custom build before anyone falls in love with a design.",
      },
      {
        title: "Build the store around the product page",
        body: "The product page is where the sale is made, so it is designed first, with real photography and real copy. Collections, search, cart and checkout follow from it.",
      },
      {
        title: "Run test orders before opening",
        body: "We place orders the way customers will: different counties, different shipping methods, a return. Tax, emails and inventory are checked on each one. The store opens when the back room is ready too.",
      },
    ],
    cta: {
      line: "Send us what you sell and how orders reach you today.",
      body: "We will tell you whether Shopify or a custom store fits and what has to be decided before a build starts.",
    },
    faqs: [
      {
        q: "How long does an ecommerce site take to build?",
        a: "Longer than a marketing website, which typically takes four to eight weeks, and the catalog decides how much longer. Twenty products with good photos is a small job. Two thousand products with variants, missing images and tax questions is a large one. We scope stores in phases so a working shop with the core range opens first and the rest of the catalog follows on a schedule.",
      },
      {
        q: "Should I use Shopify or a custom ecommerce website?",
        a: "Use Shopify unless your selling does something it handles badly. It includes hosting, a secure checkout and tools your staff can learn in a day, which covers most retailers. A custom store makes sense for configured or made-to-order products, account-based trade pricing, deposits and unusual fulfillment, or when the store must share data with software you already run. Platform fees and build cost trade off differently in each case.",
      },
      {
        q: "Do I have to charge sales tax on online orders in Florida?",
        a: "Generally yes, if you sell taxable goods to Florida customers. The Florida Department of Revenue requires businesses selling taxable items at retail to register, and county surtax follows the county where the item is delivered. Sellers outside Florida must collect once their taxable remote sales into the state pass $100,000 in the prior calendar year. Exemptions and other states' rules vary, so have a CPA confirm before launch.",
      },
      {
        q: "Can an online store connect to my in-store inventory?",
        a: "Yes, and it should if you sell the same stock in both places. The store and the register need one shared count, or you will sell an item online that left the shelf an hour ago. Whether that connection is built in or needs custom work depends on the point-of-sale system you use. Tell your developer what runs the register before the platform is chosen.",
      },
      {
        q: "What does an ecommerce website cost to run each month?",
        a: "Running costs come from a short list: the platform or hosting, payment processing on each sale, any paid apps or integrations, and maintenance. Processing is usually the largest because it scales with revenue. A custom store swaps platform fees for hosting and upkeep. Ask for these to be itemized before the build, since a cheap build on an expensive stack is not cheap.",
      },
    ],
    guides: ["website-cost-palm-beach-county", "custom-website-vs-website-builder", "website-accessibility-ada-florida"],
    related: ["custom-website-design", "landing-pages", "crm-development", "restaurant-and-hospitality-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "landing-pages",
    kind: "service",
    name: "Landing pages",
    metaTitle: "Landing Page Design Palm Beach County | Epic Wolf",
    metaDescription:
      "Landing page design in Palm Beach County: single-purpose pages for ads, launches and events, written to convert and wired to tracking and your CRM.",
    kicker: "Landing page design in Palm Beach County",
    headline: "One Page With One Job",
    answer:
      "Epic Wolf is a West Palm Beach agency that writes, designs and builds landing pages for campaigns run by Palm Beach County businesses and brands elsewhere. A landing page is a single page built for one audience and one action, such as booking a consultation or reserving a seat, with the form, tracking and follow-up connected so every response is counted and answered.",
    intro: [
      "Most ad budgets leak at the click. The ad makes a specific promise, then drops the visitor on a home page that talks about everything the company does. The visitor has to find the offer again, and most will not look.",
      "A landing page repeats the promise in the first screen and removes everything that does not help someone act on it. One audience, one offer, one action. A plastic surgery practice in Boca Raton advertising a single procedure, a builder opening a model home in Wellington and a nonprofit selling gala tables each need a page that speaks only about that.",
      "The page is half the job. The other half is what happens after the form: where the lead goes, who is told, how fast someone replies and whether the ad platform learns which clicks turned into real inquiries. We build that path with the page, because a page that collects leads nobody answers is an expense.",
    ],
    ground: [
      {
        title: "Qualifiers go next to the claim",
        body: "The FTC's .com Disclosures guidance says required disclosures must be clear and conspicuous and placed as close as possible to the claim they qualify. It adds that necessary disclosures should not be relegated to terms of use, and should be shown before a consumer decides to buy.",
        source: { label: "FTC: .com Disclosures", href: DOT_COM },
      },
      {
        title: "It has to hold on a phone",
        body: "The same FTC guidance says that if an ad is viewable on a particular device, its disclosures must be sufficient on that device, and that an ad should not run on a platform where a needed disclosure cannot be made clearly. A footnote that is legible on a desktop and lost on a phone does not meet that test.",
        source: { label: "FTC: .com Disclosures", href: DOT_COM },
      },
      {
        title: "Text consent is a form design issue",
        body: "Florida Statute 501.059 treats a text message as a telephonic sales call. It defines prior express written consent as a signed agreement that names the phone number, clearly authorizes automated calls or texts and discloses that signing is not a condition of purchase. An attorney should approve the consent wording on any form that feeds a texting program.",
        source: { label: "Florida Statutes 501.059", href: FL_SOLICIT },
      },
      {
        title: "Testimonials carry federal rules",
        body: "The FTC's rule on consumer reviews and testimonials prohibits fake or false testimonials, compensation conditioned on a review expressing a particular sentiment and insider testimonials that do not clearly disclose the relationship. Every quote on a campaign page should be real, traceable and from someone who agreed to it.",
        source: { label: "FTC: Consumer Reviews and Testimonials Rule Q&A", href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" },
      },
      {
        title: "Pop-ups can cost search visibility",
        body: "Google describes intrusive interstitials as page elements that obstruct the view of the content, usually for promotional purposes, and says they may lead to poor search performance. Its advice is to use a banner that takes up a small fraction of the screen instead of a full-page overlay.",
        source: { label: "Google Search Central: Avoid intrusive interstitials and dialogs", href: "https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials" },
      },
      {
        title: "Keeping ad-only pages out of search",
        body: "Google drops a page from its results when it crawls a noindex rule on it. Google also warns that the page must not be blocked in robots.txt, because a crawler that cannot reach the page never sees the rule. Useful for offer pages that should be reachable only from an ad.",
        source: { label: "Google Search Central: Block Search indexing with noindex", href: "https://developers.google.com/search/docs/crawling-indexing/block-indexing" },
      },
    ],
    includes: [
      { name: "Offer and message", detail: "The promise, the proof and the single action worked out and written before design." },
      { name: "Page design and build", detail: "A fast page coded from scratch that matches the ad in words and look." },
      { name: "Form and consent wording", detail: "Short forms with consent language for email and text prepared for your attorney's review." },
      { name: "Conversion tracking", detail: "Form submissions and calls reported to analytics and the ad platforms as real conversions." },
      { name: "CRM and alert wiring", detail: "Each lead delivered to your CRM and to a person, with the source attached." },
      { name: "Variants for testing", detail: "Alternate headlines or offers set up so the better one is chosen from data." },
    ],
    plan: [
      {
        title: "Start from the ad",
        body: "We read the campaign first: who is being targeted and what they were promised. The page headline answers that promise in the same words, so the visitor knows at once they are in the right place.",
      },
      {
        title: "Strip it to the decision",
        body: "No site menu, no second offer, no wall of text. What remains is the claim, the evidence, the terms and the form, in the order a skeptical reader needs them.",
      },
      {
        title: "Connect the follow-up and read the numbers",
        body: "Leads route to your team and your CRM, conversions report back to the ad platform and we compare cost per qualified inquiry across versions. The page is adjusted from those results.",
      },
    ],
    cta: {
      line: "Send us the ad and the page it points to now.",
      body: "We will show you where the two disagree and what a dedicated page for that campaign would say.",
    },
    faqs: [
      {
        q: "What is the difference between a landing page and a website?",
        a: "A website serves every visitor and a landing page serves one. The site explains the whole business, has a menu and lets people wander. A landing page is built for a single campaign, has no menu and asks for one action. Businesses need both: the site for people researching the company and landing pages for people who clicked a specific ad or invitation.",
      },
      {
        q: "Do I need a separate landing page for each ad campaign?",
        a: "You need one for each distinct offer or audience, which is not always one per campaign. If two campaigns promise the same thing to the same kind of buyer, they can share a page. If one ad sells kitchen remodels and another sells impact windows, sending both to the same page wastes the second click. Match the page to the promise.",
      },
      {
        q: "How long should a landing page be?",
        a: "As long as the decision requires and no longer. A free estimate or an event RSVP can be won in a screen or two. A five-figure service, a medical procedure or a membership needs more: proof, process, terms and answers to objections. Length is not the problem on weak pages. Filler is. Every section should remove a reason to hesitate.",
      },
      {
        q: "Should a landing page show up in Google search results?",
        a: "It depends on the page's purpose. A page built for a time-limited ad offer is usually kept out of search with a noindex rule so it does not compete with your main service pages or outlive the promotion. A page built to answer a lasting search, such as a specific service in a specific town, should be indexed and treated as a permanent part of the site.",
      },
      {
        q: "Why are my ads getting clicks but no leads?",
        a: "Usually because the page does not continue what the ad started. Common causes are a headline that ignores the ad's promise, a slow load on phones, a long form, no proof near the claim and a form that fails or goes to an unread inbox. Check the last one first by submitting a test lead yourself. Then compare the ad and the page side by side.",
      },
    ],
    guides: ["website-cost-palm-beach-county", "market-a-palm-beach-business-without-looking-loud", "how-to-choose-a-web-design-company-palm-beach-county"],
    related: ["custom-website-design", "crm-development", "ecommerce-websites", "luxury-real-estate-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "web-applications",
    kind: "service",
    name: "Web applications",
    metaTitle: "Web Application Development Palm Beach County | Epic Wolf",
    metaDescription:
      "Web application development in Palm Beach County: customer portals, booking and quoting tools and dashboards that replace phone calls, email and spreadsheets.",
    kicker: "Web application development in Palm Beach County",
    headline: "Put the Busywork Behind a Login",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds web applications for businesses in Palm Beach County and beyond: customer portals, booking systems, quoting tools and dashboards. A web application is software that runs in a browser, where people sign in and do something, such as check a project, approve a quote or pay an invoice, without calling the office.",
    intro: [
      "A website tells people about your business. A web application lets them do business with you. The line is crossed the moment a visitor needs to sign in, see something that belongs only to them or change a record. That is no longer a page. It is software.",
      "The signs that a company has outgrown its website are ordinary. Staff answer the same status question by phone all day. Quotes are built in a spreadsheet and pasted into email. Bookings arrive by text and get written on a whiteboard. A marina office in Riviera Beach, a builder with twenty homes under construction and a medical practice with a full front desk all hit this point, and hiring another coordinator only hides it.",
      "We build the smallest tool that removes the bottleneck, put it in front of the people who will use it and extend it from what they do with it. A portal that shows one accurate status is worth more than a platform with forty features nobody opens.",
    ],
    ground: [
      {
        title: "A login makes you a data holder",
        body: "Florida's Information Protection Act defines personal information to include a user name or email address combined with a password or security question that would permit access to an online account. Any commercial entity that stores it is a covered entity and must take reasonable measures to protect and secure that data.",
        source: { label: "Florida Statutes 501.171", href: FIPA },
      },
      {
        title: "What Florida requires after a breach",
        body: "The same statute requires notice to affected individuals as expeditiously as practicable and no later than 30 days after a breach is determined, and notice to the Department of Legal Affairs when 500 or more people in Florida are affected. An attorney should lead any response.",
        source: { label: "Florida Statutes 501.171", href: FIPA },
      },
      {
        title: "Collect less and restrict more",
        body: "The FTC's Start with Security guide opens with a simple lesson: do not collect personal information you do not need, and keep it only as long as there is a legitimate business need. It also advises restricting access to sensitive data, limiting administrative access and storing passwords securely.",
        source: { label: "FTC: Start with Security", href: "https://www.ftc.gov/business-guidance/resources/start-security-guide-business" },
      },
      {
        title: "A second step at sign-in",
        body: "CISA explains that with multi-factor authentication, even if an unauthorized user steals a password, they will not be able to meet the second step needed to get into the account. It recommends turning it on for every account that offers it. A portal holding client records should offer it.",
        source: { label: "CISA: Turn On MFA", href: "https://www.cisa.gov/secure-our-world/turn-mfa" },
      },
      {
        title: "Online approvals can be binding",
        body: "Florida's Electronic Transaction Act says a record or signature may not be denied legal effect or enforceability solely because it is in electronic form. It applies where the parties have agreed to do business electronically. That is the basis for quote approvals and signed forms inside a portal, with wording your attorney has reviewed.",
        source: { label: "Florida Statutes 668.50", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0668/Sections/0668.50.html" },
      },
      {
        title: "Every function by keyboard",
        body: "WCAG success criterion 2.1.1, a Level A requirement, says all functionality must be operable through a keyboard interface. Application screens fail this more often than marketing pages because of custom date pickers, drag and drop and pop-up dialogs. Test it before release.",
        source: { label: "W3C: Understanding WCAG 2.1.1 Keyboard", href: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html" },
      },
    ],
    includes: [
      { name: "Workflow mapping", detail: "A plain diagram of how the request, quote or job moves today and where it stalls." },
      { name: "Customer portals", detail: "Secure logins where clients see status, documents and invoices that belong to them." },
      { name: "Booking and scheduling", detail: "Appointment and reservation flows tied to real availability, with confirmations and reminders." },
      { name: "Quote and estimate tools", detail: "Calculators and configurators that turn your pricing rules into a quote a client can approve." },
      { name: "Dashboards and reports", detail: "One screen for the numbers managers now assemble from three exports." },
      { name: "Accounts and permissions", detail: "Roles that limit who can see and change what, with multi-factor sign-in available." },
      { name: "Integrations", detail: "Connections to your CRM, accounting, payment and email systems so data is entered once." },
      { name: "Hosting and support", detail: "Monitoring, backups, updates and a named point of contact after launch." },
    ],
    plan: [
      {
        title: "Find the one bottleneck",
        body: "We sit with the people doing the work and trace one process end to end. The first version targets the step that costs the most time or loses the most customers, and nothing else.",
      },
      {
        title: "Ship a small working version",
        body: "Your team and a few customers use a real, limited tool early. Their behavior, not a long specification, decides what gets built next.",
      },
      {
        title: "Extend it in phases",
        body: "Features are added in scheduled releases, each with a stated purpose. Security, backups and permissions are part of the first release, not a later one.",
      },
    ],
    cta: {
      line: "Send us the spreadsheet or the process everyone complains about.",
      body: "We will tell you whether it calls for a web application, an off-the-shelf product or a better form.",
    },
    faqs: [
      {
        q: "What is the difference between a website and a web application?",
        a: "A website presents information and a web application lets users do something with their own data. If every visitor sees the same pages, it is a website. If people sign in and see their own orders, appointments or documents, or if the system stores and changes records, it is a web application. Many businesses run both under one address, with the public site in front and the application behind a login.",
      },
      {
        q: "When does a business need a customer portal?",
        a: "A business needs a portal when customers repeatedly contact staff for information the business already has. Status of a job, copies of documents, invoices, appointment times and approvals are the usual triggers. If the answer to most calls is something a person looks up and reads back, a portal can show it directly. It should not replace conversations that need judgment.",
      },
      {
        q: "Should we build a web application or buy existing software?",
        a: "Buy when an existing product fits how you work, and build when it would force you to change what makes you good. Scheduling, invoicing and basic CRM are well served by products. Build when your pricing, process or customer experience is unusual, when you are paying for several tools glued together by hand or when per-user fees have outgrown the value. Often the answer is a small custom layer on top of bought software.",
      },
      {
        q: "How much does a web application cost?",
        a: "Cost follows the number of user roles, screens, integrations and rules, not the visual design. A single-purpose tool with one login type is a small project. A portal with clients, staff and administrators, payments and two integrations is several times larger. Ongoing hosting and support are separate from the build. Starting with a narrow first version is the most reliable way to control the total.",
      },
      {
        q: "Is a web application secure enough for client information?",
        a: "It can be, and security is decided by how it is built and run. Expect encrypted connections, hashed passwords, role-based access, multi-factor sign-in, backups and prompt updates, and collect only the data the tool needs. Florida law requires reasonable measures to protect personal information. Regulated data such as health or financial records adds specific duties, so involve your compliance officer or attorney before design starts.",
      },
    ],
    guides: ["website-vs-web-app-vs-custom-software", "website-accessibility-ada-florida", "website-cost-palm-beach-county"],
    related: ["custom-software-development", "crm-development", "mobile-app-development", "medical-practice-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "custom-software-development",
    kind: "service",
    name: "Custom software development",
    metaTitle: "Custom Software Development West Palm Beach | Epic Wolf",
    metaDescription:
      "Custom software development in Palm Beach County: internal tools, automations and business systems scoped in phases and built around the way your company works.",
    kicker: "Custom software development in Palm Beach County",
    headline: "Software Shaped Like Your Business",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans and builds custom software for companies in Palm Beach County and beyond: internal tools, automations, integrations and full business systems that run in a browser. Custom software is written for one company's process instead of licensed off a shelf. It makes sense when the way a business operates is the thing no existing product fits.",
    intro: [
      "Every growing company ends up with a spreadsheet that runs the business. It started as a list. Now it has eleven tabs and color codes only one manager understands, and a wrong sort on a Friday can cost a week. Around it sit four subscriptions that do not talk to each other and a person whose job is copying between them.",
      "That is the point where a website company is the wrong vendor and a software project is the right conversation. Custom software replaces the spreadsheet and the copying with one system built on your rules: how you price, how a job moves, who approves what, what the owner needs to see on Monday morning. Finance offices along Okeechobee Boulevard, property managers and multi-crew service companies reach this point for different reasons and with the same symptoms.",
      "We are direct about when not to build. If a product on the market does the job, buying it is cheaper and faster. Custom software earns its place when your process is an advantage, when licenses and manual work cost more than ownership would or when nothing sold fits at all.",
    ],
    ground: [
      {
        title: "Paying for code is not owning it",
        body: "The U.S. Copyright Office explains that a commissioned work is a work made for hire only if it falls within nine listed categories and the parties sign a written agreement saying so. Software from an outside developer often meets neither test, which is why ownership should be assigned in the contract. Have an attorney review that clause.",
        source: { label: "U.S. Copyright Office: Circular 30, Works Made for Hire", href: "https://www.copyright.gov/circs/circ30.pdf" },
      },
      {
        title: "A shared vocabulary for secure development",
        body: "NIST's Secure Software Development Framework recommends a core set of secure development practices and says software purchasers can use it to foster communications with suppliers. In practice it gives a buyer a neutral checklist to ask a developer about.",
        source: { label: "NIST SP 800-218: Secure Software Development Framework", href: "https://csrc.nist.gov/pubs/sp/800/218/final" },
      },
      {
        title: "Security features should not be extras",
        body: "CISA's Secure by Design guidance says products should be secure out of the box, with features such as multi-factor authentication, logging and single sign-on available at no extra cost. A proposal that lists those as optional add-ons is worth questioning.",
        source: { label: "CISA: Secure by Design", href: "https://www.cisa.gov/securebydesign" },
      },
      {
        title: "Financial firms have a written rule",
        body: "The FTC's Safeguards Rule covers mortgage brokers, tax preparation firms, certain investment advisors and similar businesses. It requires a written information security program, encryption of customer information, multi-factor authentication and contracts that spell out security expectations for service providers. Your compliance officer decides how it applies.",
        source: { label: "FTC: Safeguards Rule, What Your Business Needs to Know", href: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know" },
      },
      {
        title: "Your vendor has a ten-day clock",
        body: "Under Florida's Information Protection Act, a third-party agent that maintains data for a business must notify that business of a security breach no later than 10 days after determining it occurred. The business then carries the duty to notify its customers. Ask who hosts your system and how you would be told.",
        source: { label: "Florida Statutes 501.171", href: FIPA },
      },
    ],
    includes: [
      { name: "Discovery and scoping", detail: "Interviews and process maps that end in a written scope, a phase plan and a fixed first step." },
      { name: "Internal tools", detail: "Job trackers, scheduling boards and admin panels built for the staff who live in them all day." },
      { name: "Process automation", detail: "Rules that move data, send notices and create records without anyone retyping." },
      { name: "System integrations", detail: "Reliable links between your accounting, CRM, phone and email platforms." },
      { name: "Data migration", detail: "Records moved out of spreadsheets and old systems, cleaned and checked against the originals." },
      { name: "AI assistants", detail: "Assistants that answer from your own documents and policies and hand off to a person when unsure." },
      { name: "Access and audit trail", detail: "Role-based permissions and a log of who changed what and when." },
      { name: "Documentation and handover", detail: "Written documentation, credentials in your name and a clear statement of who owns the code." },
    ],
    plan: [
      {
        title: "Decide whether to build at all",
        body: "We compare the cost of your current process with buying a product and with building one. If something on the market fits, we say so and help you set it up.",
      },
      {
        title: "Build the core first",
        body: "The first phase delivers the part of the system that carries the most work, with real data, to the people who will use it. Their feedback sets the order of everything after.",
      },
      {
        title: "Hand over what you paid for",
        body: "Accounts, hosting and documentation are set up so the business is never locked out of its own system. Ongoing support is offered as a plan, not required as a hostage.",
      },
    ],
    cta: {
      line: "Send us a description of the process that no software you have tried can handle.",
      body: "We will reply with an honest view on build versus buy and what a first phase would cover.",
    },
    faqs: [
      {
        q: "Do I own the code when I pay for custom software?",
        a: "Not automatically. Under U.S. copyright law, software written by an outside developer usually belongs to the developer unless a signed agreement assigns it to you. Ask for a written assignment of the custom code, a license to any reusable components the developer brings and access to the source repository. Have your attorney read that section before signing. A developer who resists the question has answered it.",
      },
      {
        q: "How do I know my business has outgrown off-the-shelf software?",
        a: "You have outgrown it when people work around the software more than they work in it. Look for duplicate data entry between systems, spreadsheets kept beside the official tool, features you pay for and never use and reports that take a day to assemble. One of these is normal. Several, in a company that is growing, usually means the process has become more specific than any general product.",
      },
      {
        q: "How is custom software priced?",
        a: "Custom software is priced by scope, usually in phases. The drivers are the number of distinct workflows, user roles, integrations, the state of your existing data and how much is still undecided. A responsible proposal fixes the price of a defined first phase and estimates the rest, because requirements change once people use the first version. Be wary of a single fixed number for a system nobody has fully described.",
      },
      {
        q: "What happens to custom software if we stop working with the developer?",
        a: "If the handover was done properly, the software keeps running and another developer can take it on. That depends on four things being in your hands: the source code, the hosting and domain accounts, the credentials and written documentation. Software built on widely used modern frameworks is easier to transfer than something proprietary. Settle all four in the contract at the start, when everyone is on good terms.",
      },
      {
        q: "Can custom software work with the programs we already use?",
        a: "Usually yes. Most current accounting, CRM, payment, email and phone platforms offer a documented way for other software to read and write data, and custom systems are commonly built around them. The limits come from older or closed programs that offer no such access. List every system that has to be involved and its version early, since integrations are where estimates most often go wrong.",
      },
    ],
    guides: ["website-vs-web-app-vs-custom-software", "how-to-choose-a-web-design-company-palm-beach-county"],
    related: ["web-applications", "crm-development", "mobile-app-development", "wealth-management-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "crm-development",
    kind: "service",
    name: "CRM development",
    metaTitle: "Custom CRM Developer Palm Beach County | Epic Wolf",
    metaDescription:
      "CRM setup, custom CRM builds, integrations and automation in Palm Beach County, so every lead is captured, assigned, followed up and tied to revenue.",
    kicker: "Custom CRM developer in Palm Beach County",
    headline: "Every Lead Counted and Answered",
    answer:
      "Epic Wolf is a West Palm Beach agency that sets up, customizes and builds CRM systems for businesses in Palm Beach County and beyond. A CRM is the one record of every lead and customer: where they came from, who owns the follow-up and what happened. We configure existing platforms, build custom CRMs when none fit and connect them to websites, phones, email and texting.",
    intro: [
      "Leads rarely vanish in marketing. They vanish afterward. A form lands in a shared inbox, a call goes to voicemail, a referral gets written on a notepad. Each person assumes another replied. By the time anyone checks, the buyer has hired the company that called back first.",
      "A CRM fixes that only if it matches how the business sells. Most failed CRM projects bought a capable product and then asked a busy team to fill in forty fields. The system that gets used is the one that captures leads automatically, shows each person their next action and asks for almost nothing else.",
      "For many companies, configuring a well-known platform properly is the whole job. A custom CRM makes sense when the sales process has stages no product models well: a builder tracking lots and selections, a yacht broker matching buyers to listings, a practice managing consultations and treatment plans. We do both, and we connect whichever one it is to the website so the first record creates itself.",
    ],
    ground: [
      {
        title: "Texting a list needs written consent in Florida",
        body: "Florida Statute 501.059 counts a text message as a telephonic sales call and bars unsolicited sales calls made with an automated system for selecting and dialing numbers unless the called party gave prior express written consent. A CRM that sends marketing texts should store that consent with each contact. An attorney should review the program.",
        source: { label: "Florida Statutes 501.059", href: FL_SOLICIT },
      },
      {
        title: "STOP has a deadline",
        body: "The same Florida statute provides that a consumer can reply STOP to end text solicitations, and the sender has 15 days after receiving that notice to cease. The CRM needs to record the opt-out against the number itself so a later campaign or a second salesperson cannot undo it.",
        source: { label: "Florida Statutes 501.059", href: FL_SOLICIT },
      },
      {
        title: "Email opt-outs within ten business days",
        body: "The FTC's CAN-SPAM guide requires senders to honor an opt-out request within 10 business days and include a valid physical postal address. It states the law makes no exception for business-to-business email and that a company cannot contract away its responsibility to comply.",
        source: { label: "FTC: CAN-SPAM Act, A Compliance Guide for Business", href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
      },
      {
        title: "Call lists have to be refreshed",
        body: "The FTC says sellers and telemarketers required to use the National Do Not Call Registry must synchronize their lists with an updated version at least every 31 days. It also notes that most calls made to solicit sales from a business are exempt from the Do Not Call provisions.",
        source: { label: "FTC: Q&A for Telemarketers and Sellers About DNC Provisions in the TSR", href: "https://www.ftc.gov/business-guidance/resources/qa-telemarketers-sellers-about-dnc-provisions-tsr" },
      },
      {
        title: "Bulk email has technical entry requirements",
        body: "Google's sender guidelines require every sender to Gmail accounts to authenticate with SPF or DKIM. Senders of more than 5,000 messages a day must also set up DMARC and support one-click unsubscribe on marketing messages. A CRM sending from your domain has to be configured for this.",
        source: { label: "Google: Email sender guidelines", href: "https://support.google.com/a/answer/81126" },
      },
      {
        title: "Old records must be destroyed properly",
        body: "Florida's Information Protection Act requires a business to take all reasonable measures to dispose of customer records containing personal information once they are no longer to be retained, by shredding, erasing or otherwise modifying the information. A CRM should have a retention rule, not an endless archive.",
        source: { label: "Florida Statutes 501.171", href: FIPA },
      },
    ],
    includes: [
      { name: "Sales process mapping", detail: "Your real stages from first contact to signed work, written down before any system is touched." },
      { name: "CRM selection and setup", detail: "An existing platform chosen for fit and configured with your stages, fields and users." },
      { name: "Custom CRM builds", detail: "A system built for you when your process has steps no product handles." },
      { name: "Lead capture wiring", detail: "Website forms, calls, chat and ad leads entering the CRM on their own with the source attached." },
      { name: "Follow-up automation", detail: "Assignments, reminders and first replies triggered by rules so no inquiry waits unseen." },
      { name: "Consent and opt-out records", detail: "Email and text permissions stored per contact and enforced on every send." },
      { name: "Data cleanup and import", detail: "Contacts merged, deduplicated and brought over from inboxes, spreadsheets and old systems." },
      { name: "Pipeline reporting", detail: "A view of leads, response time, close rate and revenue by source." },
    ],
    plan: [
      {
        title: "Follow one lead through the building",
        body: "We trace what happens to an inquiry today: who sees it, how long it waits and where it is recorded. The gaps in that trail decide what the CRM has to do first.",
      },
      {
        title: "Configure before customizing",
        body: "We set up the simplest system that covers the process and automate lead entry and assignment. Custom development is added only where a standard platform cannot model the work.",
      },
      {
        title: "Train then measure",
        body: "Each person learns their own screen in a short session. After that the numbers lead: response time, follow-up completed and revenue by source, reviewed with you on a set schedule.",
      },
    ],
    cta: {
      line: "Send us a list of every place a new lead can land today.",
      body: "We will show you where inquiries are being lost and whether a configured platform or a custom CRM closes the gaps.",
    },
    faqs: [
      {
        q: "Do I need a custom CRM or can I use an existing one?",
        a: "Most businesses should start with an existing CRM that is configured well. Standard platforms handle contacts, pipelines, tasks and email for ordinary sales processes at a low monthly cost. A custom CRM is justified when your process has stages or records the products cannot represent, when per-user fees have grown heavy or when staff keep side spreadsheets because the system does not fit. Try configuration first.",
      },
      {
        q: "Why does my team not use the CRM we already pay for?",
        a: "Usually because it asks for work and gives nothing back. If salespeople must type in leads by hand, fill in long forms and still keep their own notes elsewhere, the CRM is a reporting chore for management. Adoption follows when leads arrive automatically, each user sees a short list of next actions and required fields are cut to the few the business really uses.",
      },
      {
        q: "Can a CRM send text messages to my leads automatically?",
        a: "Yes, technically, but Florida law limits when you may. Section 501.059 treats texts as sales calls and requires prior express written consent before automated solicitation, and recipients can end messages by replying STOP. A text confirming an appointment someone booked is different from a promotion sent to a list. Store consent in the CRM and have an attorney approve the program before it goes live.",
      },
      {
        q: "How do I connect my website forms to a CRM?",
        a: "The form sends each submission straight into the CRM through the platform's documented connection, creating a contact with the source and message attached. Done properly, the same step alerts the right salesperson and starts a follow-up task. Avoid setups where the form only sends an email that someone retypes. Test it by submitting a lead yourself and timing how long until a person is notified.",
      },
      {
        q: "What should a CRM track for a service business?",
        a: "Track the few things that explain revenue: where each lead came from, how fast it was answered, what stage it reached, what it was worth and why it was lost. Add the next action and who owns it. Everything else is optional. A Jupiter contractor and a Delray Beach med spa will name their stages differently, but those six facts are what let an owner see which marketing pays.",
      },
    ],
    guides: ["website-vs-web-app-vs-custom-software", "how-to-choose-a-web-design-company-palm-beach-county"],
    related: ["web-applications", "custom-software-development", "landing-pages", "home-builder-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "mobile-app-development",
    kind: "service",
    name: "Mobile app development",
    metaTitle: "Mobile App Developer Palm Beach County | Epic Wolf",
    metaDescription:
      "Mobile app development in Palm Beach County: iPhone and Android apps planned around a real need, plus honest advice on when a mobile website does the job.",
    kicker: "Mobile app developer in Palm Beach County",
    headline: "Earn the Spot on the Home Screen",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, designs and builds mobile apps for businesses in Palm Beach County and beyond, and tells clients plainly when a mobile website or web application would serve them better. A mobile app is software installed from the App Store or Google Play. It is worth building when customers or staff will use it often.",
    intro: [
      "Most businesses that ask for an app need something smaller. An app has to be found in a store, downloaded, kept and opened again, and people keep very few. If customers deal with you twice a year, a fast mobile website will serve them better and cost far less to build and maintain.",
      "An app earns its place when use is frequent or the phone itself matters. Members of a club in Boca Raton booking courts and dining every week. Boat owners at a marina checking service and fuel. Field crews logging jobs with photos where coverage is poor. Loyalty for a restaurant group with locations from Delray Beach to Jupiter. In those cases the icon on the home screen is the product.",
      "The build is only part of the project. Apple and Google each run a review process with their own rules, accounts have to be opened in the company's legal name and every update goes back through review. We plan for the stores from the first day, because an app that cannot be approved is not finished.",
    ],
    ground: [
      {
        title: "Apple verifies the company first",
        body: "To enroll in the Apple Developer Program as an organization, Apple requires a legal entity with a D-U-N-S Number and does not accept DBAs, fictitious business names or trade names. The legal name is shown as the seller on the App Store. The person enrolling must have authority to bind the company.",
        source: { label: "Apple Developer Program: Enrollment", href: "https://developer.apple.com/programs/enroll/" },
      },
      {
        title: "A wrapped website will be rejected",
        body: "Apple's guideline 4.2 on minimum functionality says an app should include features, content and an interface that make it more than a repackaged website, and that an app which is not particularly useful, unique or app-like does not belong on the App Store. That is the test to apply before budgeting.",
        source: { label: "Apple: App Review Guidelines", href: APP_REVIEW },
      },
      {
        title: "Privacy policy and account deletion",
        body: "Apple requires every app to link to a privacy policy in its store listing and inside the app. If the app supports account creation, guideline 5.1.1 says it must also offer account deletion within the app. Both need to exist before submission.",
        source: { label: "Apple: App Review Guidelines", href: APP_REVIEW },
      },
      {
        title: "How payment has to work",
        body: "Apple's guideline 3.1.3(e) says that when an app lets people buy physical goods or services consumed outside the app, it must use purchase methods other than in-app purchase. Digital content and subscriptions fall under Apple's own in-app purchase rules. The category your sales fall into shapes the whole checkout.",
        source: { label: "Apple: App Review Guidelines", href: APP_REVIEW },
      },
      {
        title: "Google Play needs a business identity too",
        body: "Google Play requires a D-U-N-S number to create an organization developer account and says an account for an organization cannot be created without one. Open the account as the company, not under an employee's or a developer's personal name.",
        source: { label: "Google Play Console Help: Required information for a developer account", href: "https://support.google.com/googleplay/android-developer/answer/13628312" },
      },
      {
        title: "Data practices are declared in public",
        body: "Google requires all developers with an app published on Google Play to complete a Data safety form declaring how the app collects and handles user data, and a privacy policy is required to complete it. Apple likewise requires privacy details, including the practices of third-party code, to submit new apps and updates.",
        source: { label: "Google Play Console Help: Data safety section", href: "https://support.google.com/googleplay/android-developer/answer/10787469" },
      },
    ],
    includes: [
      { name: "App or web decision", detail: "A frank assessment of whether the need calls for a store app, a web application or a better mobile site." },
      { name: "Feature scope", detail: "A first release limited to what users will do most, written as screens and actions." },
      { name: "Interface design", detail: "Screens designed for thumbs, small type sizes and one-handed use, tested on real phones." },
      { name: "iPhone and Android builds", detail: "Apps for both platforms where the audience calls for it, with one shared back end." },
      { name: "Back end and admin", detail: "The server, database and staff admin screen that the app depends on." },
      { name: "Store accounts and listings", detail: "Developer accounts opened in your company's name, with store pages, screenshots and privacy declarations prepared." },
      { name: "Review and release", detail: "Submission to Apple and Google, responses to reviewer questions and a staged release." },
      { name: "Updates and support", detail: "Fixes, operating system updates and new versions handled under an ongoing plan." },
    ],
    plan: [
      {
        title: "Test the idea against the stores",
        body: "Before design, we check whether the app has a reason to exist beyond a website and how its payments and data will be treated under Apple's and Google's rules. Some ideas change shape here, and that is the cheap place for it.",
      },
      {
        title: "Release a first version to real users",
        body: "A limited app goes to a group of your customers or staff through the stores' testing channels. What they open, ignore and ask for sets the roadmap.",
      },
      {
        title: "Launch and keep it current",
        body: "We handle store review, publish and then maintain the app as phone operating systems change. An app is a commitment, so support is planned and priced from the beginning.",
      },
    ],
    cta: {
      line: "Send us what you want the app to do and who would open it every week.",
      body: "We will tell you whether it belongs in the app stores or in a browser and what a first release would include.",
    },
    faqs: [
      {
        q: "Should I build an app or a mobile website?",
        a: "Build a mobile website unless people will use it often enough to keep an icon on their phone. Websites need no download, are found through search and cost less to maintain. Apps suit frequent use, push notifications, offline work and features that depend on the camera or location. A useful test: if a customer would use it less than monthly, they will not install it.",
      },
      {
        q: "What do I need before an app can be listed on the App Store?",
        a: "You need an Apple Developer Program membership in your company's legal name, which requires a D-U-N-S Number. The app needs a privacy policy, privacy details declared in App Store Connect, a way to delete any account it lets people create and a demo login for Apple's reviewers if it has account features. It also has to offer more than a website in a wrapper.",
      },
      {
        q: "Do I need both an iPhone and an Android app?",
        a: "Usually yes for a public audience, and not always for an internal one. Customers carry both kinds of phone, so releasing on one platform leaves part of your audience out. For staff tools, the company can standardize on the devices it issues. Building for both does not mean paying twice, since much of the work, including the back end and design, is shared.",
      },
      {
        q: "Who should own the developer accounts for our app?",
        a: "Your company should. Apple displays the account holder's legal name as the seller, and both stores tie the app, its reviews and its users to the account that published it. If the app is published under a developer's account, moving it later requires a transfer and cooperation. Enroll as your own organization and grant your developer access as a team member.",
      },
      {
        q: "What does it cost to maintain an app after launch?",
        a: "Expect ongoing cost every year the app is live, driven by four things: store program memberships, hosting for the back end, updates required by new operating system versions and store policies, and fixes or features your users ask for. An app that is never updated eventually stops working well or falls out of compliance with store rules. Budget for upkeep when you budget for the build.",
      },
    ],
    guides: ["website-vs-web-app-vs-custom-software", "website-cost-palm-beach-county"],
    related: ["web-applications", "custom-software-development", "custom-website-design", "yacht-and-marine-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "website-maintenance",
    kind: "service",
    name: "Website maintenance",
    metaTitle: "Website Maintenance and Hosting Palm Beach County | Epic Wolf",
    metaDescription:
      "Website maintenance in Palm Beach County: hosting, security updates, backups, monitoring and small changes handled monthly so the site stays fast and safe.",
    kicker: "Website maintenance and hosting in Palm Beach County",
    headline: "Keep the Site You Paid For Working",
    answer:
      "Epic Wolf is a West Palm Beach agency that hosts and maintains websites for businesses in Palm Beach County and beyond through monthly care plans. Website maintenance is the routine work that keeps a site secure, fast and correct after launch: software updates, backups, uptime and form monitoring, security checks and small content changes, handled by people who answer when something breaks.",
    intro: [
      "Websites do not fail on launch day. They fail eighteen months later, when an update nobody applied lets something in, the contact form stopped delivering in March and the person who built the site no longer answers email. The owner finds out from a customer.",
      "Maintenance is unglamorous and specific. Software gets updated on a schedule. Backups are taken and, more to the point, restored once in a while to prove they work. Someone checks that the forms still deliver, the certificate has not lapsed, the domain is renewed and the hours on the site match the hours on the door. In a seasonal market like Palm Beach, that last one changes twice a year.",
      "A care plan also keeps the site moving. Small edits, a new team member, a holiday notice and a page for a new service are handled inside the plan instead of piling up into the next redesign. When the business outgrows the site and needs a portal or an integration, the people maintaining it already know how it is built.",
    ],
    ground: [
      {
        title: "Updates are the first defense",
        body: "CISA's advice is direct: fix security risks by installing updates and turning on automatic updates. It explains that a criminal who gets in through a security flaw will look for sensitive information to exploit. For a website, that means the platform, plugins and server software.",
        source: { label: "CISA: Update Software", href: "https://www.cisa.gov/secure-our-world/update-software" },
      },
      {
        title: "Which patches come first",
        body: "CISA maintains the Known Exploited Vulnerabilities catalog, which it calls the authoritative source of vulnerabilities that have been exploited in the wild. It recommends organizations use the catalog as an input to their vulnerability management prioritization. A flaw on that list should not wait for the monthly cycle.",
        source: { label: "CISA: Known Exploited Vulnerabilities Catalog", href: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" },
      },
      {
        title: "Backups only count if they restore",
        body: "CISA's ransomware guide says to maintain offline, encrypted backups of critical data and to regularly test their availability and integrity. It stresses keeping them offline because many ransomware variants try to find and delete or encrypt accessible backups.",
        source: { label: "CISA: #StopRansomware Guide", href: "https://www.cisa.gov/stopransomware/ransomware-guide" },
      },
      {
        title: "What to ask a web host",
        body: "The FTC advises small businesses to choose a web host that includes TLS, to know how the site's software will be kept up to date with the most recent security patches and to use the email authentication tools SPF, DKIM and DMARC so scammers cannot easily spoof the company's domain.",
        source: { label: "FTC: Cybersecurity for Small Business, Hiring a Web Host", href: "https://www.ftc.gov/business-guidance/blog/2019/02/cybersecurity-small-business-hiring-web-host" },
      },
      {
        title: "The domain is your responsibility",
        body: "ICANN's statement of registrant responsibilities says the registrant assumes sole responsibility for the registration and use of the domain name and must keep contact information accurate and current. If the domain is registered to a former employee or a past vendor, fix that before anything else.",
        source: { label: "ICANN: Registrants' Benefits and Responsibilities", href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en" },
      },
      {
        title: "A hacked site gets a warning label",
        body: "Google notes that hackers can take control of innocent sites to host deceptive content, and that Chrome may then display a Deceptive site ahead warning to visitors. Owners can find flagged pages in the Search Console Security Issues report and request a review after cleanup.",
        source: { label: "Google Search Central: Social engineering", href: "https://developers.google.com/search/docs/monitor-debug/security/social-engineering" },
      },
    ],
    includes: [
      { name: "Managed hosting", detail: "Fast, secure hosting with encrypted connections, set up and watched for you." },
      { name: "Software and security updates", detail: "Platform, plugin and dependency updates applied on a schedule and urgently when a flaw is being exploited." },
      { name: "Tested backups", detail: "Regular backups kept apart from the site and restored periodically to confirm they work." },
      { name: "Uptime and form monitoring", detail: "Alerts when the site goes down or an inquiry form stops delivering." },
      { name: "Domain and email records", detail: "Renewals tracked and SPF, DKIM and DMARC records kept correct so your email is trusted." },
      { name: "Content changes", detail: "Small edits such as hours, staff, photos and notices handled within the plan." },
      { name: "Speed and search checks", detail: "Core Web Vitals and Search Console reviewed so slowdowns and errors are caught early." },
      { name: "Plain monthly summary", detail: "A short note on what was updated, what was fixed and what needs a decision." },
    ],
    plan: [
      {
        title: "Audit what you have",
        body: "We document where the site is hosted, who holds the domain, what software it runs and what is out of date. Access and ownership problems are fixed first.",
      },
      {
        title: "Put it on a routine",
        body: "Updates, backups and monitoring run on a fixed schedule with alerts going to people, not an unread mailbox. Changes you request go through one channel and are confirmed when done.",
      },
      {
        title: "Report and recommend",
        body: "Each month you get a short summary and, when warranted, a recommendation. If the site has reached the point where patching costs more than rebuilding, we will tell you.",
      },
    ],
    cta: {
      line: "Send us your site address and the name of whoever hosts it.",
      body: "We will tell you what is out of date, who controls the domain and what a care plan would cover.",
    },
    faqs: [
      {
        q: "What does website maintenance include?",
        a: "Website maintenance covers the recurring work that keeps a site secure and accurate. The core is software and security updates, backups, uptime and form monitoring, certificate and domain renewals and small content edits. Better plans add speed checks, Search Console review and a monthly summary. It does not normally include new features or a redesign, which are scoped as separate projects.",
      },
      {
        q: "Do I really need a website maintenance plan?",
        a: "You need the work done, whether through a plan or by someone on staff. Any site built on software with plugins or dependencies needs regular updates, and every site needs backups, renewals and someone watching the forms. A plan makes one party accountable for all of it. The businesses that skip maintenance usually learn its value from a hacked site or months of undelivered inquiries.",
      },
      {
        q: "Who should own my domain name and hosting account?",
        a: "Your business should own both, in its own name, with its own login. ICANN holds the registrant responsible for a domain, so the registrant should be the company and not an employee, a relative or a vendor. An agency can manage the accounts with delegated access. If you do not know who holds your domain today, look it up and correct it before any other web work.",
      },
      {
        q: "How often should a website be updated?",
        a: "Security updates should be applied as they are released, and a flaw known to be under active attack should be patched immediately. Routine software updates are commonly handled weekly or monthly. Content should change whenever the facts do: hours, staff, services and prices. A site that has not been touched in a year is almost always running outdated software somewhere.",
      },
      {
        q: "What should I do if my website gets hacked?",
        a: "Act in this order: contain it, restore it and find out what was exposed. Take the site offline or into maintenance mode, change every password, restore from a clean backup and apply all updates before reopening. Check Search Console for security flags and request a review. If personal information may have been accessed, call an attorney, because Florida law sets notification duties and deadlines.",
      },
    ],
    guides: ["website-redesign-checklist", "website-accessibility-ada-florida", "custom-website-vs-website-builder"],
    related: ["website-redesign", "custom-website-design", "ecommerce-websites", "nonprofit-websites"],
    image: IMAGE,
  },
]
