import type { Topic } from "./types"

/**
 * Website pages for eight higher-end sectors in Palm Beach County.
 * Every rule cited here was read on its primary source on 2026-10-04: The
 * Florida Bar, the Code of Federal Regulations and U.S. Code on govinfo.gov,
 * the FTC, ADA.gov, the SEC, FINRA, the Florida Statutes, the Florida
 * Administrative Code, DBPR, FDACS, the IRS, NAR, Google and the Town of
 * Palm Beach. These pages describe what the rules say. They are not legal
 * advice, and each one says who has to sign off. Copy laws: VOICE.md.
 */

const IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

export const webIndustryTopics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "law-firm-websites",
    kind: "industry",
    name: "Law firm websites",
    metaTitle: "Law Firm Website Design Palm Beach County | Epic Wolf",
    metaDescription:
      "Law firm websites designed in West Palm Beach: practice pages, attorney bios and intake built with The Florida Bar's advertising rules in view.",
    kicker: "Law firm website design in Palm Beach County",
    headline: "Win the Client Before the Consultation",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for law firms across Palm Beach County and beyond. A law firm site is practice area pages, attorney bios, intake that reaches the right lawyer and copy written with The Florida Bar's advertising rules in view. We write, design and code it, and the firm's own lawyers approve every claim before launch.",
    intro: [
      "Most law firm sites say the same four things: aggressive, experienced, caring, results. A prospective client comparing three firms on a phone cannot tell them apart, and in Florida several of those words are a problem. The Bar's rules bar comparisons a firm cannot objectively verify and limit who may claim a specialty. The safest copy is also the most persuasive: plain facts about what the firm handles, who handles it and what happens after the first call.",
      "A firm's website is advertising under the Rules Regulating The Florida Bar. It does not have to be filed for review the way a television spot does, but every page still has to follow the content rules in subchapter 4-7. That changes how a site gets written. Results need context. Testimonials need a disclaimer. The firm name and an office location have to be easy to find.",
      "We are not lawyers and we do not interpret the rules for you. We know where the rules touch a website, we draft with them open, and we hand the firm a short list of every claim that needs a lawyer's eye. Downtown West Palm Beach firms near the courthouse, estate planners on the island and litigation boutiques in Boca Raton all face the same review. The difference is what each firm has that is worth saying.",
    ],
    ground: [
      {
        title: "Websites are not filed",
        body: "The Florida Bar says lawyer and law firm websites are exempt from its advertisement filing requirement, including pop-ups on the firm's own site, under Rule 4-7.20(g). The exemption covers filing only. The Bar's website checklist applies the content rules of subchapter 4-7 to every page.",
        source: { label: "The Florida Bar: Advertising Filing Requirements", href: "https://www.floridabar.org/ethics/etad/advertising-filing-requirements/" },
      },
      {
        title: "Name and office location",
        body: "The Bar's checklist for websites requires the name of at least one lawyer, the law firm or a qualifying provider responsible for the content, and the city, town or county of at least one bona fide office location, citing Rule 4-7.12(a). Both have to be legible.",
        source: { label: "The Florida Bar: Checklist for Websites and Social Media", href: "https://www.floridabar.org/ethics/etad/checklist-websites-sm-video-sharing/" },
      },
      {
        title: "No unverifiable comparisons",
        body: "Under Rule 4-7.13(b) a site may not predict success or specific results, and may not compare or characterize the firm's skills, experience, reputation or record in ways that are not objectively verifiable. It also may not state or imply that The Florida Bar has approved the advertisement or the lawyer.",
        source: { label: "The Florida Bar: Checklist for Websites and Social Media", href: "https://www.floridabar.org/ethics/etad/checklist-websites-sm-video-sharing/" },
      },
      {
        title: "Results and testimonials",
        body: "The checklist says references to past results must be objectively verifiable and may not leave out material information. A testimonial has to be the actual experience of the person giving it, may not be paid for and needs a disclaimer that prospective clients may not receive the same or similar results.",
        source: { label: "The Florida Bar: Checklist for Websites and Social Media", href: "https://www.floridabar.org/ethics/etad/checklist-websites-sm-video-sharing/" },
      },
      {
        title: "Certified and specialist",
        body: "Only a lawyer who is board certified in an area of law may claim to be certified or board certified in it, and a law firm cannot claim certification, under Rule 4-7.14(a)(4). The checklist says a specialization or expertise claim has to be objectively verifiable through board certification or the lawyer's education, training, experience or substantial involvement.",
        source: { label: "The Florida Bar: Checklist for Websites and Social Media", href: "https://www.floridabar.org/ethics/etad/checklist-websites-sm-video-sharing/" },
      },
    ],
    includes: [
      { name: "Practice area pages", detail: "One page per matter type, written to answer what a worried person searches at night, with the next step stated plainly." },
      { name: "Attorney bios", detail: "Admissions, education, board certification where it exists and matters handled, with portraits we plan and direct." },
      { name: "Intake that routes", detail: "Forms that ask the few questions the firm needs and send each inquiry to the lawyer or intake person for that practice." },
      { name: "Compliance blocks", detail: "The firm name, office location and the disclaimers the firm's lawyers specify, built into the template so no page ships without them." },
      { name: "Results pages", detail: "Verdicts and settlements presented with the context and disclaimers the firm approves, never as a promise." },
      { name: "A claims log", detail: "A list of every factual statement on the site and who at the firm approved it, kept for the next edit." },
      { name: "Search and AI structure", detail: "Structured data for the firm, its lawyers and its offices so search engines and AI assistants describe the firm accurately." },
      { name: "Editing without risk", detail: "An editing setup where staff can post news and update bios while the required blocks stay locked in place." },
    ],
    plan: [
      {
        title: "Find what is true and specific",
        body: "We interview the partners about the matters they want more of and the facts they can stand behind: certifications, courts, languages, years at the bar. Those facts replace the adjectives every competing firm uses.",
      },
      {
        title: "Write with the rules open",
        body: "Copy comes before design. We draft each page against the Bar's website checklist and mark every result, testimonial and comparison for the firm's review. A lawyer at the firm signs off on the claims. We do not.",
      },
      {
        title: "Build the intake path",
        body: "We design and code the site, connect forms and call tracking to the people who answer, and watch what inquiries arrive after launch so the pages that bring the right matters get more attention.",
      },
    ],
    cta: {
      line: "Send us your current site and the practice areas you want more of.",
      body: "We will reply with what a prospective client cannot find on it today and a list of the claims your lawyers should look at first.",
    },
    faqs: [
      {
        q: "Does a Florida law firm have to file its website with the Bar?",
        a: "No. The Florida Bar says lawyer and law firm websites are exempt from its filing requirement, including pop-ups on the firm's own site. The content rules still apply to every page, and the Bar's checklist says sponsored or promoted social media is treated differently. A firm that wants certainty on a specific page should ask the Bar's ethics and advertising staff or its own ethics counsel.",
      },
      {
        q: "Can our website call a lawyer an expert or a specialist?",
        a: "Only if the claim can be objectively verified. The Bar's checklist says certified and board certified are reserved for lawyers who hold board certification in that area, a firm itself cannot claim certification, and a specialization or expertise claim needs support from certification or from the lawyer's education, training, experience or substantial involvement. We flag each use so the firm can decide.",
      },
      {
        q: "Can we publish case results and client testimonials?",
        a: "Yes, within the Bar's limits. Past results have to be objectively verifiable and cannot omit material information. A testimonial must reflect the person's actual experience, cannot be given in exchange for something of value and needs a disclaimer that other clients may not get the same or similar results. We build those disclaimers into the page design and your lawyers approve the wording.",
      },
      {
        q: "Who is responsible if the website breaks an advertising rule?",
        a: "The lawyers are. An agency can draft carefully, but the duty to follow the Rules Regulating The Florida Bar belongs to the firm and its members. That is why we give the firm a claims log, route every result and comparison through a named lawyer and never publish copy the firm has not approved. Epic Wolf is not a law firm and does not give ethics opinions.",
      },
      {
        q: "How long does a law firm website take to build?",
        a: "A typical custom marketing website takes four to eight weeks from kickoff to launch. For law firms the variable is partner review. Sites move fastest when one lawyer has authority to approve copy and the bios and portraits are scheduled in the first week. Firms with many practice groups often launch the core pages first and add the rest on a set schedule.",
      },
    ],
    guides: ["how-to-choose-a-web-design-company-palm-beach-county", "website-redesign-checklist", "get-found-in-ai-search-local-business"],
    related: ["custom-website-design", "website-redesign", "crm-development", "landing-pages"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "medical-practice-websites",
    kind: "industry",
    name: "Medical practice websites",
    metaTitle: "Medical Practice Website Design Palm Beach | Epic Wolf",
    metaDescription:
      "Websites for physicians, dentists, med spas and concierge practices in Palm Beach County, built around patient privacy, honest claims and easy booking.",
    kicker: "Medical practice website design in Palm Beach County",
    headline: "Earn the Patient's Trust Before the Visit",
    answer:
      "Epic Wolf, a West Palm Beach agency, designs and builds websites for physicians, dental practices, med spas and concierge medicine in Palm Beach County. A practice site has to explain treatments in plain language, name each provider and license type, make booking simple and keep patient information away from advertising tools. We write and build it, and the practice's privacy officer and counsel approve what touches patients.",
    intro: [
      "A patient choosing a dermatologist in Palm Beach Gardens or a concierge physician on the island decides on a phone, often after a referral, and looks for three things: who will see me, what will it be like and how do I book. Most practice websites answer with stock photos and a list of procedures copied from a manufacturer. The site that names its providers, shows the real office and explains the first visit wins the appointment.",
      "Health care is also the sector where an ordinary marketing habit can become a privacy problem. An appointment form collects health information. An advertising pixel on that form can send it somewhere it should not go. A before-and-after photo is a patient record used for promotion. Federal rules cover each of those, and Florida adds its own on how a practitioner is identified and what an advertisement may claim.",
      "We are not a compliance firm. We build the site so the practice can make those decisions once and have them hold: which tools load on which pages, which photos have a signed authorization on file and which claims have evidence behind them. Your privacy officer and health care counsel make the calls. We make sure the website follows them.",
    ],
    ground: [
      {
        title: "Marketing needs authorization",
        body: "The HIPAA Privacy Rule says a covered entity must obtain an authorization for any use or disclosure of protected health information for marketing, with narrow exceptions for face-to-face communication and promotional gifts of nominal value. Practices apply that to patient photos and named testimonials on a website.",
        source: { label: "45 CFR 164.508: Uses and disclosures for which an authorization is required", href: "https://www.govinfo.gov/content/pkg/CFR-2023-title45-vol2/pdf/CFR-2023-title45-vol2-sec164-508.pdf" },
      },
      {
        title: "Tracking tools and health data",
        body: "The FTC's guidance for health businesses says that using behind-the-scenes tracking technologies that share consumers' sensitive health data in contradiction of privacy promises violates the FTC Act, and that a HIPAA authorization presented in a deceptive or misleading way does too.",
        source: { label: "FTC: Collecting, Using, or Sharing Consumer Health Information", href: "https://www.ftc.gov/business-guidance/resources/collecting-using-or-sharing-consumer-health-information-look-hipaa-ftc-act-health-breach" },
      },
      {
        title: "Name the license",
        body: "Florida law says any advertisement for health care services naming the practitioner must identify the type of license the practitioner holds. The Board of Medicine's advertising rule adds that an ad containing a licensee's name must clearly identify the licensee as a medical doctor, physician assistant or anesthesiologist assistant.",
        source: { label: "Florida Statutes 456.072", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0456/Sections/0456.072.html" },
      },
      {
        title: "Specialty claims",
        body: "Board of Medicine Rule 64B8-11.001 treats an advertisement as misleading if it implies specialty recognition the physician has not received, references specialty certification without naming the board that awarded it or conveys that the physician's skills are superior to other physicians. It also requires the physician to be conspicuously identified by name.",
        source: { label: "Florida Administrative Code 64B8-11.001", href: "https://www.flrules.org/gateway/ruleNo.asp?id=64B8-11.001" },
      },
      {
        title: "Health claims need evidence",
        body: "The FTC's Health Products Compliance Guidance says health-related claims need competent and reliable scientific evidence, and that a testimonial being the endorser's honest opinion is not enough without evidence for the claim it implies. The guidance notes that ad agencies can be liable for deceptive marketing too.",
        source: { label: "FTC: Health Products Compliance Guidance", href: "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" },
      },
      {
        title: "Accessible to every patient",
        body: "The Justice Department's web guidance says the ADA's Title III covers businesses open to the public and lists common barriers: poor color contrast, images without text alternatives, videos without captions, forms without labels and navigation that only works with a mouse.",
        source: { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: "https://www.ada.gov/resources/web-guidance/" },
      },
    ],
    includes: [
      { name: "Provider pages", detail: "Each physician, dentist or injector by name with license type, training and the certifying board named in full." },
      { name: "Treatment pages", detail: "Plain-language pages on what a treatment is, who it suits, recovery and risks, written from your clinical input." },
      { name: "Booking and intake", detail: "Appointment requests that connect to the scheduling and patient systems the practice already uses, under the agreements your privacy officer requires." },
      { name: "A tracking plan", detail: "A written map of which analytics and advertising tools load on which pages, so nothing fires on forms or patient areas by accident." },
      { name: "Photo and testimonial log", detail: "A record tying every patient image and quote on the site to the authorization the practice holds for it." },
      { name: "Accessible design", detail: "Contrast, text alternatives, captions, labeled forms and keyboard navigation designed in from the first page." },
      { name: "New patient paths", detail: "First-visit pages with parking, forms, insurance or membership terms and what to bring, so the front desk answers fewer calls." },
      { name: "Locations and hours", detail: "Structured data for each office so maps, search results and AI assistants show the right address, hours and phone." },
    ],
    plan: [
      {
        title: "Map what touches patients",
        body: "Before design we list every form, chat, booking link and third-party script the site will carry, and your privacy officer decides what is allowed where. That list becomes a build rule, not a memo.",
      },
      {
        title: "Write what a patient asks",
        body: "We interview the providers, then write treatment and first-visit pages in the words patients use. Claims about outcomes go to the practice with a note on what supports them, and anything unsupported comes out.",
      },
      {
        title: "Build and keep it clean",
        body: "We design and code the site with accessibility built in, connect booking, and review scripts and forms on a schedule after launch, because a new marketing tool added in a hurry is how privacy problems usually start.",
      },
    ],
    cta: {
      line: "Send us your site address and the three treatments you want to grow.",
      body: "We will send back what a new patient cannot find today and a list of the scripts and forms your privacy officer should review.",
    },
    faqs: [
      {
        q: "Can a medical practice use advertising pixels on its website?",
        a: "It depends on the page and on what the tool collects, and the practice's privacy officer has to decide. The FTC says tracking technologies that share sensitive health data against a business's privacy promises violate the FTC Act, and HIPAA requires authorization before protected health information is used for marketing. We document every script, keep advertising tools off forms and patient areas unless counsel approves, and review the list after launch.",
      },
      {
        q: "Do we need permission to post before-and-after photos?",
        a: "Yes, practices should have a signed authorization for each one. The HIPAA Privacy Rule requires a covered entity to obtain an authorization before using protected health information for marketing, and a patient's image tied to a treatment is the kind of information practices treat that way. We keep a log that links each photo on the site to the authorization your office holds.",
      },
      {
        q: "What does Florida require when a website names a doctor?",
        a: "The license type has to be identified. Florida law says an advertisement for health care services that names the practitioner must identify the type of license held, and the Board of Medicine's rule requires an ad with a licensee's name to identify the person as a medical doctor, physician assistant or anesthesiologist assistant. Specialty certification has to name the awarding board.",
      },
      {
        q: "Does a med spa website follow the same rules as a physician's?",
        a: "Many of the same rules reach it, and counsel should confirm which. Claims about what a treatment does fall under FTC advertising law whoever makes them, and Florida's rule on naming a practitioner's license type applies to health care advertising generally. Whether HIPAA applies depends on how the business bills and operates. We build to the stricter reading until your counsel says otherwise.",
      },
      {
        q: "Does our practice website have to be accessible?",
        a: "The Justice Department's position is that the ADA applies to the websites of businesses open to the public. Its guidance does not mandate one technical standard for businesses, but it points to existing standards as helpful and lists barriers to remove, such as unlabeled forms and images without text alternatives. We design to those from the start, which costs far less than repairing a finished site.",
      },
    ],
    guides: ["website-accessibility-ada-florida", "how-to-choose-a-web-design-company-palm-beach-county", "website-cost-palm-beach-county"],
    related: ["custom-website-design", "web-applications", "landing-pages", "website-maintenance"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "wealth-management-websites",
    kind: "industry",
    name: "Wealth management websites",
    metaTitle: "Wealth Management Website Design Palm Beach | Epic Wolf",
    metaDescription:
      "Websites for RIAs, family offices and private funds in Palm Beach County, written for compliance review and designed with the restraint the audience expects.",
    kicker: "Wealth management website design in Palm Beach County",
    headline: "Discretion That Still Gets Found",
    answer:
      "Epic Wolf designs and builds websites for registered investment advisers, family offices, private equity firms and hedge funds from West Palm Beach, the center of what Palm Beach County markets as Wall Street South. A firm site here is quiet by design: who the firm serves, how it works, who the principals are and the disclosures regulators require. Your chief compliance officer approves every page before it is published.",
    intro: [
      "Financial firms that moved to the Flagler Drive waterfront and the office towers near CityPlace tend to have one of two websites. The first is a logo and an address, which tells an allocator or a prospective family nothing. The second borrows the language of retail brokerage and promises more than a compliance officer would ever allow. Neither matches a firm whose real work is careful.",
      "The better site says less and proves more. It states plainly who the firm is for, describes the process without performance theater, shows the people and makes the required documents easy to find. For a registered adviser, most of what appears on a website is an advertisement under the SEC's Marketing Rule, and for a broker-dealer it is a communication with the public under FINRA's rules. Both come with content standards and record requirements.",
      "We do not act as compliance consultants and we do not decide what a firm may say. We write to the standards we can read, mark each statement that needs review and build the site so approved language cannot be changed by accident. A firm that is not registered, such as many single family offices, still gains from the same discipline, and its counsel decides which rules reach it.",
    ],
    ground: [
      {
        title: "Wall Street South",
        body: "The Business Development Board of Palm Beach County says more than 300 hedge funds, private equity and financial service firms are located in the county, and it runs Wall Street South as an official initiative to promote the area as a destination for financial firms.",
        source: { label: "Business Development Board of Palm Beach County: Financial Services", href: "https://www.bdb.org/industries/financial-services/" },
      },
      {
        title: "Testimonials and endorsements",
        body: "The SEC's Marketing Rule lets a registered adviser use testimonials and endorsements only with conditions. The advertisement must clearly and prominently disclose whether the person is a client and whether the promoter is compensated, and the adviser has oversight duties and usually needs a written agreement with the promoter.",
        source: { label: "SEC: Investment Adviser Marketing compliance guide", href: "https://www.sec.gov/investment/investment-adviser-marketing" },
      },
      {
        title: "Performance on a page",
        body: "Under the same rule an advertisement may not show gross performance unless it also presents net performance, may not show results without specific time periods in most circumstances and may show hypothetical performance only where the adviser has policies ensuring it is relevant to the intended audience.",
        source: { label: "SEC: Investment Adviser Marketing compliance guide", href: "https://www.sec.gov/investment/investment-adviser-marketing" },
      },
      {
        title: "Form CRS on the website",
        body: "The SEC's guide to Form CRS says a firm must post the current version of its relationship summary prominently on its public website if it has one. The summary is limited to two pages for a broker-dealer or an investment adviser and four for a dual registrant.",
        source: { label: "SEC: Form CRS Relationship Summary compliance guide", href: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/form-crs-relationship-summary-amendments-form-adv" },
      },
      {
        title: "Broker-dealer communications",
        body: "FINRA Rule 2210 requires a qualified registered principal to approve each retail communication before it is used. Communications must be fair and balanced, may not make exaggerated or promissory claims and may not predict or project performance. The member's name must be prominently disclosed.",
        source: { label: "FINRA Rule 2210: Communications with the Public", href: "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210" },
      },
      {
        title: "Keep a copy of everything",
        body: "The SEC's guide says investment advisers must make and keep copies of all advertisements they disseminate, and FINRA Rule 2210 requires members to maintain retail communications with the dates of use and the name of the approving principal. A website needs a version history a firm can produce.",
        source: { label: "SEC: Investment Adviser Marketing compliance guide", href: "https://www.sec.gov/investment/investment-adviser-marketing" },
      },
    ],
    includes: [
      { name: "A positioning page", detail: "Who the firm serves and how it works, stated in a few exact sentences that survive compliance review." },
      { name: "Principal biographies", detail: "Careers, credentials and roles written as fact, with portraits we plan and direct in your offices." },
      { name: "A disclosures area", detail: "Form CRS, Form ADV links and the footers your compliance officer specifies, placed where the rules say prominently." },
      { name: "An approval workflow", detail: "Every draft page delivered with claims marked, so the reviewer sees what changed and signs once." },
      { name: "Version archiving", detail: "A dated record of each published page so the firm can show what the site said and when." },
      { name: "Investor and client portals", detail: "Secure logins for reports and documents when the firm is ready, scoped as a separate phase." },
      { name: "Insight publishing", detail: "A format for letters and commentary with review built into the publishing step, not added after." },
      { name: "Quiet search presence", detail: "Structured data and clean pages so the firm's name, principals and location resolve correctly in search and AI answers." },
    ],
    plan: [
      {
        title: "Agree on what can be said",
        body: "We start with compliance, not design. Your chief compliance officer or outside counsel tells us the firm's registration status, the disclosures required and the topics that are off the table. The site map is drawn inside those lines.",
      },
      {
        title: "Write less and prove it",
        body: "We draft short, factual pages and deliver them with each claim marked for review. Performance, rankings and client statements appear only if the firm chooses to include them and supplies the approved language.",
      },
      {
        title: "Build for the record",
        body: "We design and code the site, lock approved text against casual edits and archive each published version. Later changes follow the same review path, so the website never drifts from what was approved.",
      },
    ],
    cta: {
      line: "Send us your current site and tell us who reviews your marketing.",
      body: "We will return a short read on what an allocator or a prospective family learns from it today and how a review workflow would fit your firm.",
    },
    faqs: [
      {
        q: "Can an investment adviser put client testimonials on its website?",
        a: "Yes, if the conditions of the SEC's Marketing Rule are met. The advertisement has to disclose clearly and prominently whether the person is a client and whether they were compensated, and the adviser has oversight obligations and generally needs a written agreement with a paid promoter. Whether a given quote qualifies is a compliance decision. We build the disclosure into the layout once the firm approves it.",
      },
      {
        q: "Does our firm have to post Form CRS on its website?",
        a: "If the firm is required to deliver Form CRS and has a public website, yes. The SEC's compliance guide says the current relationship summary must be posted prominently on that website. We place it where a visitor can reach it from any page and set up a simple way to replace the file when the firm amends it, with the old version archived.",
      },
      {
        q: "Can we show fund or strategy performance online?",
        a: "Only within the limits your compliance officer sets. For registered advisers the Marketing Rule requires net performance alongside gross, specific time periods in most cases and extra safeguards for hypothetical performance. Private fund offerings raise separate securities law questions about who may see what. Many firms keep performance behind a login or leave it off the public site entirely.",
      },
      {
        q: "Does a family office need a website at all?",
        a: "Often a small one is enough. A single page that confirms the office exists, names its principals if they wish and gives a point of contact helps bankers, counsel and prospective hires verify who they are dealing with. Some families prefer no public presence, which is a legitimate choice. We will tell you plainly if a website would not serve you.",
      },
      {
        q: "How do we keep records of what the website said?",
        a: "The site should archive every published version with its date. The SEC says advisers must keep copies of the advertisements they disseminate, and FINRA requires members to keep retail communications with dates of use and the approving principal's name. We set up version history at launch so the firm can produce any past page, and your compliance team confirms it meets the firm's retention policy.",
      },
    ],
    guides: ["market-a-palm-beach-business-without-looking-loud", "how-to-choose-a-web-design-company-palm-beach-county", "website-vs-web-app-vs-custom-software"],
    related: ["custom-website-design", "web-applications", "custom-software-development", "website-maintenance"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "luxury-real-estate-websites",
    kind: "industry",
    name: "Luxury real estate websites",
    metaTitle: "Luxury Real Estate Website Design Palm Beach | Epic Wolf",
    metaDescription:
      "Websites for Palm Beach County brokerages, agents and developers: property pages, listing search and lead capture built to Florida advertising rules.",
    kicker: "Luxury real estate website design in Palm Beach County",
    headline: "Own the Search Before the Portals Do",
    answer:
      "Epic Wolf builds websites for luxury brokerages, agents and developers in Palm Beach County from its base in West Palm Beach. A real estate site is property pages that do a home justice, listing search fed by the MLS, neighborhood pages only a local could write and inquiry forms that reach an agent fast. It also has to follow Florida's brokerage advertising rule and the Fair Housing Act.",
    intro: [
      "The national portals already show every listing. An agent's or brokerage's own website cannot beat them on inventory, so it has to win on everything they cannot offer: judgment about a street, film and photography worthy of an oceanfront estate, the story of a new tower on the West Palm Beach waterfront and a person who answers. Sellers of an expensive home look at an agent's site to see how their own property would be presented.",
      "Template real estate sites all look alike because they are the same product with a different headshot. For a developer selling residences before the building exists, or a brokerage courting a listing on the island, that sameness is expensive. The site is the listing presentation.",
      "Real estate advertising is regulated at three levels. Federal fair housing law governs what an ad may say or imply. The Florida Real Estate Commission has a rule on how a brokerage's name appears, including on the internet. And the MLS sets terms for displaying other brokers' listings. We build to all three, and the broker of record approves the result.",
    ],
    ground: [
      {
        title: "Fair housing in advertising",
        body: "The Fair Housing Act makes it unlawful to make, print or publish any notice, statement or advertisement for the sale or rental of a dwelling that indicates a preference, limitation or discrimination based on race, color, religion, sex, handicap, familial status or national origin.",
        source: { label: "42 U.S.C. 3604", href: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/pdf/USCODE-2023-title42-chap45-subchapI-sec3604.pdf" },
      },
      {
        title: "The brokerage name",
        body: "Florida Administrative Code Rule 61J2-10.025 says all real estate advertisements must include the licensed name of the brokerage firm and must let a reasonable person know they are dealing with a real estate licensee. When a licensee's personal name appears it must include at least the last name as registered with the Commission.",
        source: { label: "Florida Administrative Code 61J2-10.025", href: "https://www.flrules.org/gateway/ruleNo.asp?id=61J2-10.025" },
      },
      {
        title: "Where the name goes online",
        body: "The same rule says that on an internet site the brokerage firm name must be placed adjacent to or immediately above or below the point of contact information, which it defines to include mailing and street addresses, email addresses and telephone numbers. That shapes every header, footer and agent page.",
        source: { label: "Florida Administrative Code 61J2-10.025", href: "https://www.flrules.org/gateway/ruleNo.asp?id=61J2-10.025" },
      },
      {
        title: "Showing other brokers' listings",
        body: "The National Association of Realtors' IDX policy requires a participant's display to identify the listing firm in a reasonably prominent location, in a typeface not smaller than the median used for listing data. The display must be under the participant's actual and apparent control.",
        source: { label: "NAR Handbook on Multiple Listing Policy: IDX Policy", href: "https://www.nar.realtor/handbook-on-multiple-listing-policy/advertising-print-and-electronic-section-1-internet-data-exchange-idx-policy-policy-statement-7-58" },
      },
      {
        title: "Listing data stays fresh",
        body: "NAR's policy says an IDX download must be refreshed to reflect all updates and status changes at least every twelve hours, and lets an MLS require a notice that its data is deemed reliable but is not guaranteed accurate. Your local MLS publishes its own version of these terms, which controls.",
        source: { label: "NAR Handbook on Multiple Listing Policy: IDX Policy", href: "https://www.nar.realtor/handbook-on-multiple-listing-policy/advertising-print-and-electronic-section-1-internet-data-exchange-idx-policy-policy-statement-7-58" },
      },
    ],
    includes: [
      { name: "Property pages", detail: "Full-screen photography and film, floor plans, the facts a buyer's advisor asks for and one clear way to inquire." },
      { name: "Listing search", detail: "MLS-fed search styled to the brand, with listing firm attribution and data notices placed as the MLS requires." },
      { name: "Neighborhood pages", detail: "Honest pages on the island, the waterfront towers, the club communities and the streets between, written from local knowledge." },
      { name: "Agent and team pages", detail: "Names as registered, the brokerage name beside every phone and email and sold history the broker has verified." },
      { name: "Development microsites", detail: "A site for a single building or community with residences, amenities, team and a registration form that feeds the sales office." },
      { name: "Lead routing", detail: "Inquiries sent to the right agent in seconds with the property attached, and a record in the CRM so follow-up is visible." },
      { name: "Seller presentations", detail: "Private pages that show an owner how their home would be marketed, shared by link before the listing appointment." },
      { name: "Search and AI structure", detail: "Structured data for listings, agents and offices so the firm's own pages can appear for an address or a building name." },
    ],
    plan: [
      {
        title: "Decide what the site is for",
        body: "A brokerage recruiting agents, an agent winning listings and a developer selling residences need different sites. We settle the one job first, then confirm with the broker of record which advertising and MLS terms apply.",
      },
      {
        title: "Make the property the hero",
        body: "We plan, direct and produce photography and film through vetted partners or work from the firm's existing assets, write neighborhood and property copy that avoids language fair housing law prohibits and design pages around the images.",
      },
      {
        title: "Connect search and follow-up",
        body: "We build the site, connect the listing feed under your MLS agreement and route every inquiry to a person and a CRM record. After launch we watch which pages produce conversations and improve those.",
      },
    ],
    cta: {
      line: "Send us your site and one listing you are proud of.",
      body: "We will show you how that property could be presented and what your brokerage name placement and listing attribution look like against the rules today.",
    },
    faqs: [
      {
        q: "What has to appear on a Florida real estate agent's website?",
        a: "The licensed name of the brokerage firm, placed next to the contact information. Florida's advertising rule requires every real estate advertisement to include the brokerage's licensed name, and on an internet site that name must sit adjacent to or immediately above or below the point of contact. An agent's personal name must include the last name as registered. Your broker approves the final layout.",
      },
      {
        q: "Can our website show every listing in the MLS?",
        a: "Usually yes, through your MLS's IDX program, on its terms. NAR's IDX policy lets participants display other brokers' listings if the listing firm is identified prominently, the data is refreshed at least every twelve hours and the display is clearly the participant's own. Listing brokers can opt out. We connect the feed under your agreement with the MLS and follow its display rules.",
      },
      {
        q: "How does fair housing law affect website copy?",
        a: "It limits what an advertisement may say or imply about who a home is for. The Fair Housing Act prohibits any advertisement for the sale or rental of a dwelling that indicates a preference or limitation based on race, color, religion, sex, disability, familial status or national origin. We describe the property and its features, not an ideal buyer, and the broker reviews copy and imagery.",
      },
      {
        q: "Should an agent have a personal site or rely on the brokerage's?",
        a: "A top agent or team usually benefits from both. The brokerage page provides compliance and the listing feed, while a personal site holds the agent's own sold history, film and neighborhood expertise and stays with the agent's brand over time. It still has to carry the brokerage's licensed name by the contact details. Ask your broker what the firm's policy allows before building.",
      },
      {
        q: "Can a developer's sales site be built before the building is?",
        a: "Yes, and most are. A pre-construction site runs on renderings, floor plans, the team's record and a registration form, then grows as the building does. Selling residences that do not exist yet is a legal matter as much as a marketing one, so the developer's counsel supplies the legends and disclaimers and approves the renderings. We design those into the pages instead of hiding them.",
      },
    ],
    guides: ["how-to-choose-a-web-design-company-palm-beach-county", "custom-website-vs-website-builder", "market-a-palm-beach-business-without-looking-loud"],
    related: ["custom-website-design", "crm-development", "landing-pages", "home-builder-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "home-builder-websites",
    kind: "industry",
    name: "Home builder and design firm websites",
    metaTitle: "Home Builder Website Design Palm Beach County | Epic Wolf",
    metaDescription:
      "Websites for luxury custom builders, architects, interior designers and contractors in Palm Beach County, with project pages and license details done right.",
    kicker: "Home builder website design in Palm Beach County",
    headline: "Let the Finished Homes Make the Case",
    answer:
      "Epic Wolf designs and builds websites for luxury custom home builders, architects, interior designers and contractors in Palm Beach County, from an office in West Palm Beach. A builder's site is a portfolio first: project pages with real photography, a clear account of the process and an inquiry form that screens for fit. Florida also requires a contractor's license number in advertising, and we build that in.",
    intro: [
      "Someone planning a custom home in Jupiter or a renovation on the island will spend more with their builder than on almost anything else, and they start by looking. They want to see finished houses at full size, understand how the firm works and learn who will be on site. Most builder websites show thumbnails, a paragraph about quality and a contact form. The work deserves better than that.",
      "The strongest sites in this trade are quiet. Large photographs, a few sentences on each project about the problem and how it was solved, the architect and designer credited and a process page that explains preconstruction, budgets and timelines without jargon. Clients at this level also check licenses, and Florida makes that easy for them.",
      "State law puts specific identifiers in a construction or design firm's advertising. A contractor's registration or certification number has to appear, and an architect's license number does too. We place those in the site template so they show on every page, and the firm's qualifier confirms the numbers. If a rule's reach is unclear for your trade, your attorney decides.",
    ],
    ground: [
      {
        title: "License number in every ad",
        body: "Florida Statutes 489.119(5) says the registration or certification number of each contractor shall appear in each offer of services, business proposal, bid, contract or advertisement, regardless of medium. Business stationery and promotional novelties are excluded from the definition of advertisement.",
        source: { label: "Florida Statutes 489.119", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/Sections/0489.119.html" },
      },
      {
        title: "Advertising without a license",
        body: "Under Florida Statutes 489.127 no person may advertise himself or herself or a business organization as available to engage in contracting without being duly registered or certified, or falsely hold a business out as a licensee. A website's list of services should match what the license covers.",
        source: { label: "Florida Statutes 489.127", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/Sections/0489.127.html" },
      },
      {
        title: "Architects",
        body: "Florida Statutes 481.221 requires each registered architect to include his or her license number in any advertising medium used, and each business organization to include the license number of the registered architect who serves as its qualifying agent.",
        source: { label: "Florida Statutes 481.221", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0481/Sections/0481.221.html" },
      },
      {
        title: "Clients can check",
        body: "The Florida Department of Business and Professional Regulation runs a public license search for the businesses and professionals it licenses. A firm that prints its number on its website invites the lookup, and the name on the site should match the name on the license.",
        source: { label: "DBPR: Verify a License", href: "https://www.myfloridalicense.com/wl11.asp" },
      },
    ],
    includes: [
      { name: "Project pages", detail: "One page per house with large photography, the brief, the team credited and the details an owner would ask about." },
      { name: "A process page", detail: "Preconstruction, budgeting, selections, construction and warranty explained in the order a client lives them." },
      { name: "License block", detail: "Contractor and architect license numbers set in the footer and contact areas of every page, confirmed by the firm's qualifier." },
      { name: "Qualified inquiry form", detail: "Questions on location, scope, timing and whether there is an architect, so the first call is with a real prospect." },
      { name: "Photography direction", detail: "Shoots of finished homes that we plan, direct and produce through vetted partners, with owner permission handled first." },
      { name: "Team and trades page", detail: "The principals, superintendents and long-standing design partners, because clients hire people." },
      { name: "Service area pages", detail: "Where the firm builds, written with real knowledge of each town's review boards and building season." },
      { name: "A client portal path", detail: "Room to add logins for schedules, selections and draws later, so the website grows into a tool." },
    ],
    plan: [
      {
        title: "Choose the houses",
        body: "We pick the projects that represent the work you want next, confirm owner permission and credit, and decide which need new photography. Six strong projects beat thirty thin ones.",
      },
      {
        title: "Write how you build",
        body: "We interview the principals and write the process and project stories in plain words. License numbers, firm names and the services listed are checked against your DBPR records by your office before anything is published.",
      },
      {
        title: "Build it to grow",
        body: "We design around the photographs, code the site to load fast on a phone and wire inquiries to whoever answers them. New projects are easy to add, and a client portal can follow when the firm wants one.",
      },
    ],
    cta: {
      line: "Send us your site and the three projects you are proudest of.",
      body: "We will tell you how those homes could be shown and whether your license details appear where Florida's advertising statute expects them.",
    },
    faqs: [
      {
        q: "Does a Florida contractor have to show a license number on its website?",
        a: "Yes, the statute reaches advertisements in any medium. Florida Statutes 489.119 says a contractor's registration or certification number shall appear in each offer of services, business proposal, bid, contract or advertisement, regardless of medium. We put the number in the footer and on contact pages so it appears sitewide. Your qualifier or attorney should confirm the exact number and how the firm name is shown.",
      },
      {
        q: "Do architects and interior designers have the same requirement?",
        a: "Architects do under a separate statute. Florida Statutes 481.221 requires a registered architect to include the license number in any advertising medium, and a firm to include the number of its qualifying architect. The section we read does not state a matching advertising rule for interior designers, so a design studio should ask its own counsel or the state board what applies.",
      },
      {
        q: "How many projects should a builder's website show?",
        a: "Fewer than most firms think. A prospective client wants to see that you have built the kind of house they have in mind, at a quality they can judge, and six to ten well-photographed projects do that better than a long grid. We choose with you based on the work you want more of and retire older projects as better ones are finished.",
      },
      {
        q: "Can we show a client's home without their permission?",
        a: "You should not. Owners at this level value privacy, many contracts address photography, and a house that is recognizable from the street can identify its owner. We ask every owner first, leave out addresses and exterior angles when asked and credit the architect and designer correctly. A project the owner will not release can still be described without images.",
      },
      {
        q: "Can the website handle more than marketing later?",
        a: "Yes. Builders often start with a portfolio site and later add a client portal for schedules, selections, change orders and draw requests, or an internal tool that replaces the spreadsheet tracking every job. Those are custom software projects, scoped separately and built in phases. We plan the first site so that step does not require starting over.",
      },
    ],
    guides: ["website-cost-palm-beach-county", "website-vs-web-app-vs-custom-software", "how-to-choose-a-web-design-company-palm-beach-county"],
    related: ["custom-website-design", "website-redesign", "crm-development", "luxury-real-estate-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "yacht-and-marine-websites",
    kind: "industry",
    name: "Yacht and marine websites",
    metaTitle: "Yacht and Marine Website Design Palm Beach | Epic Wolf",
    metaDescription:
      "Websites for yacht brokers, marinas, marine services and charter companies in Palm Beach County, built for buyers who research long before they call.",
    kicker: "Yacht broker and marine website design in Palm Beach County",
    headline: "Sell the Water Before the Sea Trial",
    answer:
      "Epic Wolf builds websites for yacht brokerages, marinas, marine service yards and charter operators from West Palm Beach, where the Palm Beach International Boat Show lines Flagler Drive each March. A marine site needs listings that stay current, vessel pages with real specifications and film, slip and service inquiries that reach the dock office and license details shown plainly. We design, write and code it.",
    intro: [
      "A yacht buyer studies a vessel for weeks before calling a broker. The listing portals give every boat the same grid of small photos and a specification table. A brokerage's own site is where a yacht can be shown properly: a walkthrough film, the refit history, the engine hours, the broker who knows her and a direct line to that person.",
      "Marinas, yards and charter companies have a different problem. Their customers ask practical questions, such as slip sizes, draft at low tide, haul-out capacity and what a day on the water includes, and most marine websites make them phone to find out. The site that answers saves the office hours and wins the booking.",
      "Florida licenses yacht brokers and salespeople through the Department of Business and Professional Regulation, and federal law sorts charter vessels by how many passengers they carry. Neither rule tells you how to design a website, but both shape what it should say. We build with them in view, and your broker of record, captain or maritime attorney confirms the details.",
    ],
    ground: [
      {
        title: "Brokers are licensed",
        body: "Florida Statutes 326.004 says a person may not act as a yacht broker or salesperson unless licensed under the Yacht and Ship Brokers' Act, and each broker must maintain a principal place of business in the state. The Act defines a yacht as a vessel exceeding 32 feet propelled by sail or machinery.",
        source: { label: "Florida Statutes 326.004", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0326/Sections/0326.004.html" },
      },
      {
        title: "What DBPR regulates",
        body: "DBPR's Yacht and Ship Brokers' Section says it licenses brokers and salespersons and investigates unlicensed activity, escrow violations, misrepresentation, fraud and dishonest acts. Its FAQ says a license is not required for a person selling his or her own yacht or for transactions involving new yachts.",
        source: { label: "DBPR: Yacht and Ship Brokers", href: "https://www2.myfloridalicense.com/yacht-and-ship/" },
      },
      {
        title: "Buyer funds go to escrow",
        body: "DBPR's FAQ says the Act requires all funds received in connection with a sale, exchange or purchase of a yacht to be placed in an escrow account at a Florida financial institution, and that consumers can verify a license on the department's website.",
        source: { label: "DBPR: Yacht and Ship Brokers FAQs", href: "https://www2.myfloridalicense.com/yacht-and-ships/faqs/" },
      },
      {
        title: "Charter passenger counts",
        body: "Federal law defines an uninspected passenger vessel of less than 100 gross tons as one carrying not more than six passengers, including at least one passenger for hire. A vessel of that size carrying more than six is defined separately as a small passenger vessel. A charter page's group sizes should match the vessel's category.",
        source: { label: "46 U.S.C. 2101", href: "https://www.govinfo.gov/content/pkg/USCODE-2023-title46/pdf/USCODE-2023-title46-subtitleII-partA-chap21-sec2101.pdf" },
      },
      {
        title: "The show on Flagler Drive",
        body: "The Palm Beach International Boat Show takes place each March along Flagler Drive in downtown West Palm Beach, directly across from Palm Beach island. For a local brokerage it sets the calendar: new listings, films and landing pages need to be live before the docks open.",
        source: { label: "Palm Beach International Boat Show", href: "https://www.pbboatshow.com/" },
      },
    ],
    includes: [
      { name: "Vessel pages", detail: "Film, full photography, specifications, refit and service history and the listing broker's direct contact." },
      { name: "A listings system", detail: "Inventory your team updates in one place, with sold and under-contract status changing everywhere at once." },
      { name: "Broker pages", detail: "Each broker and salesperson by name with the brokerage identified, so a buyer can look up the license." },
      { name: "Marina and yard pages", detail: "Slip dimensions, depth, power, lift capacity, fuel and services in a format a captain can scan." },
      { name: "Charter pages", detail: "What is included, how many guests the vessel may carry, who the captain is and how to reserve, confirmed by the operator." },
      { name: "Inquiry routing", detail: "Slip requests, service quotes and offers sent to the right desk with the vessel or dock attached." },
      { name: "Show landing pages", detail: "Pages for boat show displays with dock locations and appointment booking, ready before the show." },
      { name: "Owner and client portals", detail: "A later phase for service history, invoices and documents behind a login." },
    ],
    plan: [
      {
        title: "Start with the inventory",
        body: "We look at how listings, slips or charters are tracked today and design the data first: what fields exist, who updates them and where they must appear. A marine site fails when the boats on it sold months ago.",
      },
      {
        title: "Show the vessel properly",
        body: "We plan, direct and produce film and photography through vetted partners, or build from footage the brokerage already owns, and write each page with the specifications a surveyor and a captain will look for.",
      },
      {
        title: "Time it to the season",
        body: "We build and launch ahead of the winter season and the March show, connect inquiries to the people who answer and add portals or service tools afterward as the business asks for them.",
      },
    ],
    cta: {
      line: "Send us your site and tell us how your listings or slips are tracked today.",
      body: "We will reply with what a buyer or captain cannot find on it now and what should be live before the next season starts.",
    },
    faqs: [
      {
        q: "Does a yacht broker need a Florida license to advertise listings?",
        a: "A person acting as a yacht broker or salesperson in Florida needs a license under the Yacht and Ship Brokers' Act. The Act covers used vessels over 32 feet, and DBPR says no license is needed to sell your own yacht or for new yachts. We show the brokerage and each broker by name so a buyer can verify them with DBPR. Your attorney confirms how the Act applies to you.",
      },
      {
        q: "Should our brokerage site pull listings from a portal or host its own?",
        a: "Host your own and feed the portals from it where you can. Your site is the one place a yacht gets a full film, a complete history and your broker's direct contact instead of a shared lead form. We set up one inventory your team maintains, so a price change or a sale updates the website and any connected channels together.",
      },
      {
        q: "What should a charter website say about passenger limits?",
        a: "It should state the number of guests the vessel is permitted to carry and never advertise more. Federal law defines a vessel under 100 gross tons that carries more than six passengers, with at least one paying, as a small passenger vessel, a different category from the six-passenger charter boat. The operator and captain know the vessel's status. We publish the figure they confirm and keep it consistent across the site.",
      },
      {
        q: "When should a marine business launch a new website?",
        a: "Before the season, not during it. In Palm Beach County the boating calendar builds through winter toward the Palm Beach International Boat Show on Flagler Drive each March. A typical custom marketing website takes four to eight weeks from kickoff to launch, and filming vessels adds scheduling, so a brokerage that wants to be ready for the show should start in the fall.",
      },
      {
        q: "Can a marina take slip reservations through its website?",
        a: "Yes. The simplest version is a request form that captures vessel length, beam, draft, power needs and dates and sends them to the dock office. A fuller version shows availability and takes a deposit, which is a web application we scope as its own phase. We recommend starting with the request form and measuring demand before building more.",
      },
    ],
    guides: ["website-vs-web-app-vs-custom-software", "website-cost-palm-beach-county", "market-a-palm-beach-business-without-looking-loud"],
    related: ["custom-website-design", "crm-development", "web-applications", "luxury-real-estate-websites"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "restaurant-and-hospitality-websites",
    kind: "industry",
    name: "Restaurant and hospitality websites",
    metaTitle: "Restaurant and Hotel Website Design Palm Beach | Epic Wolf",
    metaDescription:
      "Websites for restaurants, hotels and private clubs in Palm Beach County: readable menus, direct reservations, private events and honest pricing notices.",
    kicker: "Restaurant and hospitality website design in Palm Beach County",
    headline: "Fill the Room From the First Search",
    answer:
      "Epic Wolf designs and builds websites for restaurants, hotels and private clubs in Palm Beach County from West Palm Beach. A hospitality site has four jobs: show the menu as real text, take the reservation or booking directly, sell private events and tell search engines the hours and location. Florida and federal rules on service charge notices and lodging prices also reach the website.",
    intro: [
      "Someone standing on Clematis Street or Atlantic Avenue deciding where to eat gives a restaurant's website about ten seconds. They want the menu, the hours, a way to book and a sense of the room. Too many sites answer with a slow video, a menu saved as a photograph and a reservation link buried under a newsletter popup.",
      "Hotels and clubs face the same test with higher stakes. A guest comparing a boutique hotel's own site with a booking platform will book wherever the price is clearer and the rooms look better. A prospective member judges a club by its restraint. In each case the website either earns the direct relationship or gives it to a middleman.",
      "The rules here are practical. Florida licenses and inspects restaurants and lodging through DBPR. A state statute says where a service charge notice has to appear, including the website when orders are placed there. A federal rule requires the total price up front for short-term lodging. We build those in, and your counsel or general manager confirms the wording.",
    ],
    ground: [
      {
        title: "Service charges on the site",
        body: "Florida Statutes 509.214 says a public food service establishment that charges an operations charge, which includes service charges and automatic gratuities, must give notice of the amount or percentage and its purpose on the food menu and on the website or mobile application where orders are placed, in type at least as large as the menu item descriptions.",
        source: { label: "Florida Statutes 509.214", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0509/Sections/0509.214.html" },
      },
      {
        title: "Hotel prices include the fees",
        body: "The FTC's Rule on Unfair or Deceptive Fees covers short-term lodging, including hotels, inns and vacation rentals. A business that shows a price must show the total, including fees guests are required to pay, and the FTC says the rule applies whether the offer appears online, in an app or in person.",
        source: { label: "FTC: Rule on Unfair or Deceptive Fees FAQ", href: "https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions" },
      },
      {
        title: "Licensed and inspected",
        body: "DBPR's Division of Hotels and Restaurants licenses, inspects and regulates public lodging and food service establishments in Florida. Its food service guide says all new licensees must pass a sanitation and safety inspection before opening, so a launch date for the website follows the license, not the lease.",
        source: { label: "DBPR: Division of Hotels and Restaurants", href: "https://www2.myfloridalicense.com/hotels-restaurants/" },
      },
      {
        title: "Menus a machine can read",
        body: "Google's local business documentation includes properties for a food establishment's menu address, the cuisine it serves and its opening hours. That structured data helps Google show accurate details in Search and Maps. A menu posted only as an image gives it nothing to read.",
        source: { label: "Google Search Central: Local business structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/local-business" },
      },
      {
        title: "Menus a person can read",
        body: "The Justice Department's ADA web guidance names images without text alternatives, poor color contrast and inaccessible online forms among the barriers that keep people with disabilities from using a business's website. A photographed menu and an unlabeled reservation form are both on that list.",
        source: { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: "https://www.ada.gov/resources/web-guidance/" },
      },
    ],
    includes: [
      { name: "Text menus", detail: "Menus built as real page text your staff can update in minutes, readable by phones, screen readers and search engines." },
      { name: "Direct reservations", detail: "Your reservation or booking system placed one tap from every page, with the phone number beside it." },
      { name: "Private events pages", detail: "Rooms, capacities, sample menus and an inquiry form that reaches the events manager with the date attached." },
      { name: "Pricing notices", detail: "Service charge and fee disclosures placed where the statute and the federal rule require, in wording your counsel approves." },
      { name: "Photography and film", detail: "The room, the plates and the people, planned and directed by us and produced through vetted partners." },
      { name: "Location data", detail: "Structured data for hours, address, cuisine and menu so maps and AI assistants send people to the right door." },
      { name: "Gift cards and ordering", detail: "Online gift cards, merchandise or ordering when the business wants them, connected to the systems already in use." },
      { name: "Multi-venue structure", detail: "One site or a family of sites for a group, with each venue's identity intact and shared content managed once." },
    ],
    plan: [
      {
        title: "Decide the one action",
        body: "A dinner reservation, a room night, a membership inquiry or a private event. We choose the action that matters most for each venue and put it within reach of every screen.",
      },
      {
        title: "Shoot and write the room",
        body: "We plan photography around service so the images look like a real night, write short copy in the venue's own voice and convert every menu to text. Fee and service charge wording goes to your counsel.",
      },
      {
        title: "Launch before the season",
        body: "We build the site fast and light for phones on cellular data, connect booking and events inquiries and train the staff who will change menus and hours. Then we watch what guests search for and adjust.",
      },
    ],
    cta: {
      line: "Send us your site and your current menu.",
      body: "We will show you how the menu reads on a phone today and what a guest has to do to book a table or a room.",
    },
    faqs: [
      {
        q: "Does a Florida restaurant have to disclose a service charge on its website?",
        a: "Yes, when orders are placed there. Florida Statutes 509.214 requires a restaurant that adds an operations charge, such as a service charge or automatic gratuity, to state the amount or percentage and its purpose on the menu and on the website or app where food and beverage orders are placed. The notice type must be at least as large as the menu descriptions. Your attorney should confirm the wording.",
      },
      {
        q: "Do hotels have to show resort fees in the price online?",
        a: "Yes. The FTC's Rule on Unfair or Deceptive Fees requires anyone advertising a price for short-term lodging to show the total price, including mandatory fees, and it applies online. That covers hotels, inns and vacation rentals. The rule does not ban a fee. It bans hiding it. We design the booking path so the first price a guest sees is the real one.",
      },
      {
        q: "Why should the menu be text instead of a PDF or image?",
        a: "Because text can be read by everything that matters. A phone displays it without zooming, a screen reader speaks it, Google can match a dish to a search and your staff can change a price without calling a designer. A PDF or a photograph of the menu fails most of those. We build menus as editable page text and can still offer a printable version.",
      },
      {
        q: "Can we take reservations directly instead of through a platform?",
        a: "Yes, and most venues should make their own site the first place to book. We place whatever reservation system you use prominently on every page and can add a simple request form for large parties and private events. Whether to keep a third-party platform is a business decision about fees and reach, and many restaurants run both.",
      },
      {
        q: "When should a new restaurant's website go live?",
        a: "A simple page should be live as soon as the name is public, and the full site before opening night. Early on it needs the concept, the location, hiring information and a way to join the list. Florida requires new food service licensees to pass an inspection before opening, so opening dates move. We keep the date off the site until the operator confirms it.",
      },
    ],
    guides: ["website-accessibility-ada-florida", "get-found-in-ai-search-local-business", "custom-website-vs-website-builder"],
    related: ["custom-website-design", "ecommerce-websites", "mobile-app-development", "website-maintenance"],
    image: IMAGE,
  },

  /* ------------------------------------------------------------------ */
  {
    service: "web-design",
    slug: "nonprofit-websites",
    kind: "industry",
    name: "Nonprofit websites",
    metaTitle: "Nonprofit Website Design Palm Beach County | Epic Wolf",
    metaDescription:
      "Websites for foundations, charities and galas in Palm Beach County, with donation pages, event ticketing and the disclosures Florida law requires.",
    kicker: "Nonprofit website design in Palm Beach County",
    headline: "Make the Mission Easy to Fund",
    answer:
      "Epic Wolf is a West Palm Beach agency that designs and builds websites for foundations, charities and gala committees in Palm Beach County. A nonprofit site has to explain the mission in one screen, make giving simple, sell tables and tickets for events and carry the disclosure Florida requires wherever donations are taken online. We write, design and build it, and your counsel or auditor approves the compliance wording.",
    intro: [
      "Palm Beach County's charitable season runs on a few crowded months, and donors here are asked constantly. An organization's website is where a new supporter checks it out after an invitation arrives. They look for what the charity does, where the money goes and who is behind it. A site with a vague mission statement and a donate button that opens a third-party page with a different name loses them.",
      "Most nonprofit sites are built by a volunteer on a template and patched every year for the gala. The result is three ticketing links, an outdated board list and a donation form that asks twelve questions. Fixing that is not expensive design. It is deciding what a donor needs and removing the rest.",
      "Fundraising is regulated. Florida requires most charities to register before soliciting and to print a specific disclosure wherever contributions are requested, including web pages. The IRS has rules on receipts and on making the Form 990 available. The Town of Palm Beach requires its own permit for charitable events on the island. We build those requirements into the pages, and your attorney or auditor confirms each one.",
    ],
    ground: [
      {
        title: "Register before asking",
        body: "The Florida Department of Agriculture and Consumer Services says the Solicitation of Contributions Act requires anyone who solicits donations in or from Florida to register with the department and renew annually. That includes charitable organizations, sponsors, professional solicitors and professional fundraising consultants.",
        source: { label: "FDACS: Solicitation of Contributions", href: "https://www.fdacs.gov/Business-Services/Solicitation-of-Contributions" },
      },
      {
        title: "The disclosure on donation pages",
        body: "Florida Statutes 496.411 requires a registered organization to conspicuously display a set disclosure statement, with the division's toll-free number and website, on any web page that identifies a mailing address for contributions, gives a telephone number to process them or provides for online processing of contributions.",
        source: { label: "Florida Statutes 496.411", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0496/Sections/0496.411.html" },
      },
      {
        title: "Gala tickets and deductions",
        body: "The IRS says a charity must give a written disclosure for any quid pro quo contribution over 75 dollars, stating that the deductible amount is limited to the payment minus the fair market value of what the donor received, with a good faith estimate of that value. It may be furnished with the solicitation or the receipt.",
        source: { label: "IRS: Quid pro quo contributions", href: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-quid-pro-quo-contributions" },
      },
      {
        title: "Receipts for larger gifts",
        body: "The IRS says a written acknowledgment for a contribution of 250 dollars or more must include the organization's name, the amount of cash given and a statement of whether goods or services were provided in return, with a description and good faith estimate if they were.",
        source: { label: "IRS: Charitable contributions written acknowledgments", href: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-written-acknowledgments" },
      },
      {
        title: "Posting the Form 990",
        body: "The IRS says an exempt organization does not have to fulfill individual requests for copies of its returns if it makes them widely available, which it can do by posting them on a website in a format that exactly reproduces the original and can be downloaded and printed without a fee. Public inspection is still required.",
        source: { label: "IRS: Exemption where organization makes documents widely available", href: "https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-exemption-where-organization-makes-documents-widely-available" },
      },
      {
        title: "Events on the island",
        body: "The Town of Palm Beach issues a charitable solicitation permit for fundraising events. Its FAQ lists what the application needs: the 501(c)(3) determination letter, the current state solicitation registration, a board resolution stating the event's location and date and trained crowd control managers scaled to attendance.",
        source: { label: "Town of Palm Beach: Event Permits FAQ", href: "https://www.townofpalmbeach.com/FAQ.aspx?QID=266" },
      },
    ],
    includes: [
      { name: "A mission page", detail: "What the organization does, for whom and what a gift accomplishes, stated in the first screen without jargon." },
      { name: "Donation pages", detail: "A short giving form with one-time and recurring options and the Florida disclosure placed where the statute requires." },
      { name: "Event and gala pages", detail: "Tables, tickets and sponsorships with the fair market value shown, so the deductible portion is clear before purchase." },
      { name: "Receipts and acknowledgments", detail: "Automatic emails carrying the wording your auditor approves, with records your development staff can search." },
      { name: "A financials page", detail: "Recent Forms 990, the annual report and registration details in one place a donor or grant officer can find." },
      { name: "Board and leadership", detail: "A current list with roles, kept in an editing setup simple enough that it actually stays current." },
      { name: "Sponsor recognition", detail: "A consistent way to credit sponsors and underwriters across the site, the invitation and the event pages." },
      { name: "Donor data connections", detail: "Gifts and registrations flowing into the donor database the organization already uses, without retyping." },
    ],
    plan: [
      {
        title: "Say the mission in one screen",
        body: "We interview staff, board and a few donors, then write the plain version of what the organization does and what a gift pays for. If a donor cannot repeat it after one visit the page is not finished.",
      },
      {
        title: "Build the giving path",
        body: "We design the donation and event flows first, with disclosures and receipt language supplied or approved by your counsel and auditor, and test each one on a phone the way a guest at a luncheon would use it.",
      },
      {
        title: "Hand it to the staff",
        body: "We launch well ahead of the season, train the people who will update events and board lists and stay on for the gala rush. Afterward we review what donors used and simplify again.",
      },
    ],
    cta: {
      line: "Send us your site and the date of your next event.",
      body: "We will walk through your donation and ticket pages as a donor would and send back where they stall and which disclosures we could not find.",
    },
    faqs: [
      {
        q: "What disclosure does a Florida charity need on its donation page?",
        a: "A registered charity must display the statement set out in Florida Statutes 496.411. It says a copy of the official registration and financial information may be obtained from the Division of Consumer Services, and that registration does not imply endorsement by the state, with the division's toll-free number and website. It belongs on any web page that takes or directs contributions. Your attorney should confirm the exact text.",
      },
      {
        q: "Does our nonprofit have to register before fundraising online in Florida?",
        a: "In most cases, yes. FDACS says anyone who solicits donations in or from Florida must register with the department and renew every year, and the agency's consumer guidance notes exclusions for religious, educational, political and governmental organizations. Whether an exemption fits your organization is a question for counsel. We ask for the registration number at kickoff because the donation page disclosure depends on it.",
      },
      {
        q: "Should we post our Form 990 on the website?",
        a: "Yes, it is good practice and it reduces work. The IRS says an organization that makes its returns widely available online, in a format that reproduces the original and downloads free, does not have to answer individual requests for copies. Donors and grant officers look for it. We add a financials page with recent returns and the annual report, and your finance lead supplies the files.",
      },
      {
        q: "How should a gala ticket page handle the tax-deductible amount?",
        a: "It should show the fair market value of what the guest receives. The IRS requires a written disclosure for a quid pro quo contribution over 75 dollars, telling the donor the deductible amount is the payment minus the value of the dinner or other benefits, with a good faith estimate. That statement can be given with the solicitation, so we print it on the ticket page and the receipt.",
      },
      {
        q: "Does a charity event in the Town of Palm Beach need a permit?",
        a: "Yes, the Town has a charitable solicitation permit for fundraising events. Its published FAQ lists the application materials: the IRS determination letter, the current state solicitation registration, a board resolution naming the event's location and date and a plan for trained crowd control managers. The Town Clerk's Office handles questions. We time event pages and invitations so nothing is announced before the committee has filed.",
      },
    ],
    guides: ["getting-press-palm-beach-county", "website-cost-palm-beach-county", "website-redesign-checklist"],
    related: ["custom-website-design", "landing-pages", "crm-development", "website-redesign"],
    image: IMAGE,
  },
]
