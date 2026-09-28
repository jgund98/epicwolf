import type { Service } from "./types"

/**
 * Service page content. Obeys VOICE.md: no em or en dashes, no commas in
 * headline fields, no fabricated results, and no client names (the site
 * describes what Epic Wolf does, not past work).
 */
export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "public-relations",
    name: "Public Relations",
    side: "story",
    headline: "Get your name in the news for the right reasons",
    kicker: "Public relations firm in West Palm Beach",
    metaTitle: "Public Relations and PR Firm in West Palm Beach | Epic Wolf",
    metaDescription:
      "West Palm Beach PR firm for media relations, launches, crisis communications and thought leadership, with the website and storefront the story points to.",
    summary:
      "Media relations, launches, crisis communications and reputation work for Palm Beach County companies, from strategists who can also build the page the story links to and hang the sign it points at.",
    intro: [
      "Public relations is the work of getting the right people to hear about you from someone other than you. In Palm Beach County that means the reporters and editors at the Palm Beach Post, the Palm Beach Daily News, the South Florida Business Journal and local TV, plus the trade press that covers your industry nationally. It also means the neighbors, investors and boards who read those stories over coffee on Clematis Street and decide whether you are worth a call.",
      "We run PR the way a newsroom thinks. Find the angle that is actually news. Write it so an editor can use it in ten minutes. Pitch it to the few people who cover that beat, and have the photos, the facts and the spokesperson ready before anyone asks. No blast lists. No press release sprayed at hundreds of inboxes in hope.",
      "The difference is what happens after a story runs. Most PR firms hand you a clip and a report. We connect the coverage to the rest of the business: a landing page that turns readers into inquiries, a website that backs up every claim in the piece, and a storefront, van or event booth that looks like the company the article described. Coverage is borrowed attention. We make sure it lands somewhere.",
    ],
    deliverables: [
      { name: "Media relations", detail: "Targeted pitching to local, business and trade reporters on the beats that fit your story." },
      { name: "Launch PR", detail: "Openings, relocations, new products and new offices, planned backward from the day you want the story to run." },
      { name: "Crisis communications", detail: "Holding statements, spokesperson prep and a clear approval chain, drafted before the bad day and used on it." },
      { name: "Reputation management", detail: "Review response and a plan for what people find when they search your name, built on earned content rather than tricks." },
      { name: "Thought leadership", detail: "Bylines, op-eds, speaking pitches and nominations for industry honors that put your principals in front of the people they want to reach." },
      { name: "Press kits and newsroom pages", detail: "Bios, headshots, fact sheets, logos and a web newsroom reporters can pull from without emailing you." },
      { name: "Media training", detail: "On-camera and phone interview practice so your spokesperson answers the question and still lands the message." },
      { name: "Event publicity", detail: "Media advisories, photo coverage and follow-up for galas, ribbon cuttings and season openers." },
      { name: "Press releases", detail: "Written as news, sent where it matters and posted where search engines and AI assistants can find it." },
    ],
    approach: [
      {
        title: "Find the news",
        body: "We start by interviewing you the way a reporter would. What changed, who cares, why now. Most companies have two or three genuinely newsworthy angles hiding under the one they want to lead with.",
      },
      {
        title: "Build the kit first",
        body: "Before a single pitch goes out, the facts, photos, bios and landing page are ready. Editors move fast, and the story goes to whoever answers first with usable material.",
      },
      {
        title: "Pitch the few who matter",
        body: "Short, personal pitches to the reporters who cover the beat, timed to their calendar rather than ours. A trade editor in New York and a local business reporter get very different emails.",
      },
      {
        title: "Make the coverage work",
        body: "When a piece runs, it goes on the site, into the sales deck, onto social and into the email list. We track inquiries and search visibility, not just clip counts.",
      },
    ],
    oneTeam:
      "PR is the discipline that forces everything else to be ready, which is why it sits in the same house as the build and the street. When a client opens a second location, the announcement, the updated website, the Google Business Profile, the storefront sign and the grand opening tees ship the same week in the same voice, reviewed by the same people. A reporter who clicks through finds a site that matches the pitch. A customer who reads the article and drives by sees a storefront that matches the photo. PR firms that cannot touch the website or the sign are hoping someone else gets it right. We just do it.",
    audiences: [
      "Financial firms and family offices arriving in Wall Street South",
      "Real estate developers and brokerages",
      "Restaurant and hospitality openings",
      "Law firms and professional practices",
      "Healthcare practices and med spas",
      "Nonprofits heading into gala season",
    ],
    vocabulary: [
      "PR firm",
      "PR agency",
      "public relations agency",
      "publicist",
      "media relations",
      "crisis PR",
      "crisis communications firm",
      "reputation management",
      "press release services",
      "strategic communications",
      "media training",
      "thought leadership",
    ],
    faqs: [
      {
        q: "How much does a PR firm in West Palm Beach cost?",
        a: "PR cost depends mostly on scope and duration, not a menu price. A single launch or announcement is usually quoted as a fixed project. Ongoing media relations and thought leadership run on a monthly retainer sized to how many stories, spokespeople and markets are in play. Crisis work is scoped separately because it is urgent and unpredictable. We scope it after one conversation and put the number in writing before work starts.",
      },
      {
        q: "How long does it take to get press coverage?",
        a: "Plan on six to eight weeks from kickoff to meaningful coverage for most launches. That window covers finding the angle, building the press kit and pitching reporters on their timelines. Breaking news moves faster and magazine features move slower, since glossy monthlies often plan months ahead. Anyone promising placements in days is usually selling paid content, so ask before you sign.",
      },
      {
        q: "Can you guarantee a story in the Palm Beach Post?",
        a: "No, and no honest PR firm can. Editors decide what runs, which is exactly why earned coverage carries weight that paid placement does not. What we control is the quality of the angle, the timing, the materials and who receives the pitch. Sponsored content and advertorials are real options too, and we will tell you plainly when one is worth buying and label it as what it is.",
      },
      {
        q: "What is the difference between a PR firm and a publicist?",
        a: "A publicist mainly works on getting mentions for a person or brand, while a PR firm runs the broader communications program. That program includes strategy, crisis planning, spokesperson training, thought leadership and how coverage connects to sales. For a single restaurant opening a publicist can be enough. For a company with investors, a board or a reputation to protect, you want the whole program.",
      },
      {
        q: "Why not hire a big Miami or New York PR agency?",
        a: "You can, but you will pay for their overhead and often get their most junior staff. National firms are strong at national pitching and weak at knowing that a ribbon cutting on Clematis, a feature in the Palm Beach Daily News and a table at the right gala matter more here than a wire release. We pitch nationally when the story earns it, and we can build the website and sign the story needs.",
      },
      {
        q: "Do you handle crisis communications for Palm Beach County businesses?",
        a: "Yes. We build crisis plans before anything goes wrong and step in when something already has. That means a fast holding statement, one trained spokesperson, a clear approval chain that includes your attorney, and a plan for search results and reviews after the news cycle moves on. If you are in a crisis right now, call us instead of filling out the form.",
      },
    ],
    related: ["branding", "digital-marketing", "business-development"],
    image: "/img/stock/press.jpg",
    imageAlt: "The West Palm Beach skyline across the Intracoastal from the Royal Park Bridge",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "branding",
    name: "Branding",
    side: "story",
    headline: "Become the name people repeat",
    kicker: "Branding agency in West Palm Beach",
    metaTitle: "Branding Agency and Logo Design West Palm Beach | Epic Wolf",
    metaDescription:
      "West Palm Beach branding agency for brand strategy, naming, logo design, identity systems and rebrands, built to work on screens, storefronts and vans alike.",
    summary:
      "Brand strategy, naming, logo and identity systems, guidelines and rebrands for Palm Beach County businesses, designed to hold up everywhere from a pitch deck to a channel letter sign.",
    intro: [
      "A brand is the promise people expect you to keep, and the identity is how they recognize you before they read a word. In Palm Beach County the bar is set by Worth Avenue storefronts, family office letterhead and restaurant groups that open with a finished look on day one. If your logo was made in an afternoon for an earlier stage of the business, people notice, even if they never say so.",
      "We start with strategy, not a mood board. Who you serve, what you do that competitors do not, how you want to sound, and what the name and mark need to survive. Then we design an identity system: logo, type, color, photography direction, voice and the rules that keep it consistent when someone else is making a flyer at nine at night.",
      "Then we do the part branding studios skip. We test the identity where it will actually live. On a phone screen in bright sun. As a lit sign at night. Across a van door with a handle in the way. Embroidered small on a polo. A brand that only works in a PDF is not finished.",
    ],
    deliverables: [
      { name: "Brand strategy", detail: "Positioning, audience, competitive landscape and the one sentence that explains why you." },
      { name: "Naming", detail: "Company, product and location names screened for plain-language fit, available domains and obvious conflicts." },
      { name: "Logo design", detail: "A primary mark, secondary marks and an icon, drawn to read at the size of an app tile and the size of a building." },
      { name: "Visual identity system", detail: "Type, color, photography and illustration direction, patterns and layout rules." },
      { name: "Brand guidelines", detail: "A usable guide your staff, printers and future vendors can follow without calling us." },
      { name: "Rebrands and brand refreshes", detail: "Evolving an identity people already know without throwing away the recognition you paid for." },
      { name: "Brand voice and messaging", detail: "Tagline, boilerplate, elevator pitch and a short voice guide for everyone who writes on your behalf." },
      { name: "Packaging direction", detail: "Label, box and bag direction that holds up on a shelf and in an unboxing video." },
      { name: "Rollout planning", detail: "An ordered list of every place the brand appears, from email signatures to fleet graphics, with what changes and when." },
    ],
    approach: [
      {
        title: "Listen hard",
        body: "Interviews with owners, staff and a few customers. The best positioning lines usually come from something a customer said, not from a workshop whiteboard.",
      },
      {
        title: "Design the system",
        body: "We present a small number of directions with the reasoning behind each, then refine one. You see it on real applications from the first round, not floating on a white page.",
      },
      {
        title: "Test it in the wild",
        body: "Mockups on your actual storefront photo, your actual van and your actual website. We print test pieces for anything that will be seen from a distance or stitched.",
      },
      {
        title: "Roll it out",
        body: "Guidelines, files and a rollout plan. If you want it, we handle the rollout too: site, signs, wraps, print and merch, in the order that makes the switch look clean.",
      },
    ],
    oneTeam:
      "Most rebrands die in the rollout. The agency hands over a logo file, the sign shop redraws it, the printer shifts the color and the web developer picks a different font. Here the people who designed the mark also manage the channel letters, the van wrap, the business cards and the website, so the blue on the storefront matches the blue on the homepage, and the press release announcing the rebrand goes out the same week the new sign lights up. One set of files, one set of eyes, one launch date.",
    audiences: [
      "New companies and new locations that need a finished look on opening day",
      "Established businesses whose logo no longer fits the company",
      "Restaurants and retail on Clematis Street, Worth Avenue and Atlantic Avenue",
      "Financial firms and family offices that need quiet credibility",
      "Home services and trades building a recognizable fleet",
      "Nonprofits refreshing ahead of a capital campaign",
    ],
    vocabulary: [
      "branding agency",
      "brand agency",
      "brand identity",
      "brand strategy",
      "logo design",
      "logo designer",
      "rebrand",
      "brand refresh",
      "naming agency",
      "brand guidelines",
      "visual identity",
      "corporate identity program",
    ],
    faqs: [
      {
        q: "How much does branding cost in West Palm Beach?",
        a: "Branding cost is driven by scope: a logo refresh, a full identity system and a strategy-led rebrand with naming are very different projects. The other big drivers are how many applications we design, how many stakeholders need to sign off and whether you want us to manage the rollout. We quote a fixed project fee after a first conversation, so you know the number before we start.",
      },
      {
        q: "How long does a rebrand take?",
        a: "A focused identity project usually takes six to ten weeks from kickoff to final files, and naming or deep research adds time. The rollout is the longer part. Signs may need permits, vehicles have to come off the road to be wrapped and printed stock has to run down. We sequence the rollout so the public sees a clean switch, not a year of mixed logos.",
      },
      {
        q: "Is branding just a logo?",
        a: "No. The logo is the most visible piece of a brand, but the brand is the whole set of choices around it: what you say, how you say it, the colors and type, the photography and how consistently all of it shows up. A great logo with inconsistent everything else still reads as a small operation. A good system makes every touchpoint look intentional.",
      },
      {
        q: "Why not get a logo from a freelancer or an online contest?",
        a: "You can get a mark cheaply that way, but you rarely get a system or a strategy behind it. The problems show up later: the logo fails in one color, falls apart when embroidered, cannot be cut as a sign or looks like a competitor. We design for every place the brand will live and test it there before you pay for a single sign.",
      },
      {
        q: "Do you handle trademark clearance for new names?",
        a: "We screen names for obvious conflicts, available domains, social handles and plain-language problems, but formal trademark clearance belongs with a trademark attorney. We recommend a legal search before you commit to a name, and we build that step into the timeline so it does not delay your launch or force a rename after the sign is ordered.",
      },
      {
        q: "Can you refresh our brand without losing the recognition we have?",
        a: "Yes, and it is often the smarter move. A refresh keeps the equity people already recognize, like a color, a shape or a name treatment, and fixes what holds it back: legibility, dated type, weak contrast or poor performance at small sizes. Long-standing Palm Beach businesses often need exactly this rather than a full reinvention that confuses loyal customers.",
      },
    ],
    related: ["public-relations", "signs", "web-design"],
    image: "/img/stock/sketch.jpg",
    imageAlt: "Hands sketching logo concepts in pencil on a spiral notebook",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    side: "digital",
    headline: "Be found first and chosen fast",
    kicker: "Digital marketing agency in West Palm Beach",
    metaTitle: "Digital Marketing and SEO Agency West Palm Beach | Epic Wolf",
    metaDescription:
      "Digital marketing agency in West Palm Beach for local SEO, Google Business Profile, AI search visibility, Google Ads, social media, email and analytics.",
    summary:
      "SEO, local SEO and Google Business Profile, AI search visibility, paid search and social, content, email and analytics, run by the same team that writes your story and builds your site.",
    intro: [
      "When someone in Jupiter searches for a med spa, or a property manager in Boca Raton asks ChatGPT for a sign company, the answer comes from the same few places: your Google Business Profile, your website, the directories and reviews that mention you and the articles that cite you. Digital marketing is the work of making sure those places say the right thing, and that the right thing is you.",
      "We cover the full stack. Local SEO and Google Business Profile management for the map results. Technical and content SEO for the organic results. Structured data and answer-first pages so AI Overviews, ChatGPT and Perplexity can describe you accurately. Google Ads and Meta ads when paid traffic makes sense. Social content and email people actually open. And analytics that report calls, forms and booked jobs instead of vanity charts.",
      "What we will not do is spin up fifty copy-paste city pages or promise a number one ranking. Palm Beach County has 39 municipalities, and each one deserves real content or none at all. We would rather publish a handful of pages that answer real questions for customers in Wellington, Delray Beach and Palm Beach Gardens than a pile of templates search engines learn to ignore.",
    ],
    deliverables: [
      { name: "Local SEO", detail: "Citations, reviews, location pages and on-page work that move you up in the map results for your service area." },
      { name: "Google Business Profile management", detail: "Categories, services, photos, posts and review responses kept current every month." },
      { name: "AI search visibility", detail: "Structured data, answer-first content and consistent listings so AI assistants describe you correctly and cite you." },
      { name: "Technical and content SEO", detail: "Site speed, indexing, internal links and useful articles written around the questions your customers ask." },
      { name: "Paid search", detail: "Google Ads campaigns built on tight keywords, negative lists and call tracking, managed against cost per lead." },
      { name: "Paid social", detail: "Meta and LinkedIn campaigns aimed by location, interest and job title, with creative made for each placement." },
      { name: "Social media content", detail: "Photo, video and copy for the channels your customers use, planned around local seasons and events." },
      { name: "Email marketing", detail: "Newsletters, launch sequences and automated follow-ups that bring past customers back." },
      { name: "Analytics and reporting", detail: "Call tracking, form tracking and a monthly report in plain English on what produced revenue." },
    ],
    approach: [
      {
        title: "Audit what exists",
        body: "Your profile, site, listings, reviews, ad accounts and analytics, checked against the competitors actually beating you in search. You keep the findings whether or not you hire us.",
      },
      {
        title: "Fix the foundation",
        body: "Profile categories, broken tracking, slow pages, duplicate listings and missing schema come first. They are unglamorous, and they often move results faster than anything else.",
      },
      {
        title: "Build and buy attention",
        body: "Content and SEO for the long game, paid campaigns for the short one, with budget moved toward whatever is producing calls.",
      },
      {
        title: "Report on revenue",
        body: "Monthly numbers tied to leads and jobs, with a short list of what we are changing next and why.",
      },
    ],
    oneTeam:
      "Digital marketing works best when it is not working alone. A press feature becomes a link and a citation that AI assistants trust. A rebrand updates the Google Business Profile photos the same day the new sign goes up, so the storefront in the map listing matches the one on the street. A wrapped van carries a short URL that lands on a tracked page, so the fleet shows up in the report. Search, press and the physical brand feed each other here because they are planned in the same room by the same people.",
    audiences: [
      "Home services and trades competing for map results",
      "Healthcare practices, dentists and med spas",
      "Restaurants and hospitality chasing season traffic",
      "Law firms and professional services",
      "Retail and ecommerce brands selling beyond the county",
      "B2B firms that need qualified leads rather than clicks",
    ],
    vocabulary: [
      "digital marketing agency",
      "marketing agency",
      "marketing firm",
      "SEO company",
      "local SEO",
      "Google Business Profile",
      "PPC agency",
      "Google Ads agency",
      "social media agency",
      "social media manager",
      "email marketing",
      "AI search optimization",
    ],
    faqs: [
      {
        q: "How much does digital marketing cost for a local business?",
        a: "Digital marketing cost is set by how many channels you need and how competitive your market is. Local SEO and profile management is typically a monthly fee. Paid ads have two parts: the ad spend that goes to Google or Meta, and the management fee. We recommend starting with the channel closest to revenue, proving it works, and adding from there instead of buying everything at once.",
      },
      {
        q: "How long does SEO take to work?",
        a: "Fixes to your Google Business Profile and technical problems can show results within weeks, while competitive organic rankings usually take several months of steady work. The timeline depends on your site's history, your competitors and how much useful content you publish. Paid search is the fast lane when you need calls this month while SEO builds underneath it.",
      },
      {
        q: "How do I get my business recommended by ChatGPT or Google AI Overviews?",
        a: "AI assistants recommend businesses they can verify across several trusted sources. That means a complete Google Business Profile, a website with clear answer-first content and structured data, the same name, address and phone number across directories, real reviews and mentions in credible publications. There is no special switch. It is good SEO plus earned coverage, which is why our PR and digital work sit together.",
      },
      {
        q: "Why not hire a national SEO company?",
        a: "National SEO shops often rank for local terms with templated city pages, then deliver the same template to you. They rarely know that Wellington's busy season follows the horse shows or that a Clematis restaurant lives on weekend nights. We know the county, we can shoot fresh photos of your actual storefront, and we connect search to your press, signs and vehicles.",
      },
      {
        q: "Do you manage Google Ads and Meta ads?",
        a: "Yes. We build and manage Google Search, Performance Max, Meta and LinkedIn campaigns, with call and conversion tracking set up before a dollar is spent. Ad spend is billed by the platforms directly to you, so you always own the account and the data. If a channel is not producing leads after a fair test, we tell you and move the budget.",
      },
      {
        q: "Will you post on our social media for us?",
        a: "Yes, if social is a channel your customers actually use. We plan a monthly calendar, create the photo, video and copy, post it, and handle or flag comments under rules we agree on together. For many local businesses a steady Google Business Profile and one strong Instagram account beat trying to be everywhere, so we recommend the channels before we fill them.",
      },
    ],
    related: ["web-design", "public-relations", "business-development"],
    image: "/img/stock/ew-digital.jpg",
    imageAlt: "The Epic Wolf website shown on a laptop and a phone",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "business-development",
    name: "Business Development",
    side: "story",
    headline: "Turn a good reputation into a full pipeline",
    kicker: "Business development firm in West Palm Beach",
    metaTitle: "Business Development Consultant West Palm Beach | Epic Wolf",
    metaDescription:
      "Business development in West Palm Beach: lead generation, sales decks, CRM and pipeline setup, sponsorships, trade shows and market entry for new arrivals.",
    summary:
      "Lead generation systems, sales decks and collateral, CRM setup, partnerships, sponsorships, trade show strategy and market entry for companies moving to Palm Beach County.",
    intro: [
      "Plenty of Palm Beach County companies are excellent at what they do and still run on referrals and luck. Business development is the discipline of making growth repeatable: knowing who the next hundred customers are, how they will hear about you, what they will see when they do, and what happens between the first call and the signed contract.",
      "We build the parts of that machine that marketing agencies ignore and sales consultants cannot make. Target account lists and outreach sequences. Sales decks, capability statements and leave-behinds that look as good as the company is. A CRM set up so leads stop living in someone's inbox. Partnership and sponsorship plans that put you in the right rooms, from a hospitality tent at the Cognizant Classic to a table at the right gala.",
      "We also help companies arriving from New York, Chicago and the Northeast. The county's Business Development Board calls this corridor Wall Street South, and financial firms, family offices and the vendors who serve them keep landing here. Market entry is its own project: who to meet, which associations and events matter, how to become known in Palm Beach and the business press before the lease is signed, and how to look local without pretending.",
    ],
    deliverables: [
      { name: "Lead generation systems", detail: "Target lists, outreach sequences, landing pages and follow-up rules that produce qualified conversations on a schedule." },
      { name: "Sales decks and pitch materials", detail: "Presentation decks, one-pagers and proposal templates your team will actually use in the room." },
      { name: "Capability statements and collateral", detail: "Printed and digital leave-behinds for corporate, institutional and government buyers." },
      { name: "CRM and pipeline setup", detail: "Stages, fields, automations and reporting in HubSpot or the CRM you already pay for." },
      { name: "Partnerships and referral programs", detail: "Structured relationships with complementary firms, with clear terms, tracking and co-marketing." },
      { name: "Sponsorship strategy", detail: "Choosing, negotiating and activating sponsorships so the logo on the banner turns into meetings." },
      { name: "Trade show and event strategy", detail: "Which shows to attend, booth design and production, pre-show outreach and post-show follow-up." },
      { name: "Market entry for relocating companies", detail: "A plan for companies moving to Palm Beach County: who to meet, events to attend, press to pursue and a local presence to build." },
      { name: "Go-to-market planning", detail: "Positioning, packaging and launch sequencing for a new service, product or territory." },
    ],
    approach: [
      {
        title: "Define the customer",
        body: "A short list of the accounts, industries and roles worth pursuing, with the reason each one should care. Most pipelines are weak because the target is vague.",
      },
      {
        title: "Arm the team",
        body: "Deck, collateral, proof points and scripts that sound like your best salesperson on a good day.",
      },
      {
        title: "Build the system",
        body: "CRM, outreach, landing pages and tracking, wired together so every lead has an owner and a next step.",
      },
      {
        title: "Show up in the room",
        body: "Events, sponsorships, partnerships and press timed so prospects have heard of you before you call.",
      },
    ],
    oneTeam:
      "Business development is where the rest of the house pays off. The PR side pursues the trade and business press coverage that turns a cold email warm. The design side builds the deck and the trade show booth from the same identity. The web side builds the landing pages and the CRM automations. The street side produces the leave-behinds, the event banners and the client gifts that land on a desk on Flagler Drive. Most business development consultants hand you a strategy and a list of vendors to hire. We hand you the finished kit, built by one team on one timeline.",
    audiences: [
      "Financial firms and family offices relocating to Palm Beach County",
      "B2B service firms that have outgrown referrals",
      "Commercial real estate and development teams",
      "Contractors and construction firms bidding larger work",
      "Healthcare groups adding locations",
      "Professional firms launching a new practice area",
    ],
    vocabulary: [
      "business development consultant",
      "growth consultant",
      "lead generation company",
      "B2B marketing agency",
      "sales strategy",
      "go-to-market strategy",
      "market entry",
      "sales deck design",
      "CRM setup",
      "sponsorship strategy",
      "event marketing",
      "fractional CMO",
    ],
    faqs: [
      {
        q: "What does a business development firm actually do?",
        a: "A business development firm builds the system that finds, wins and keeps customers beyond referrals. That includes defining target accounts, creating sales materials, setting up a CRM, running outreach and choosing the partnerships, events and sponsorships that put you in front of buyers. It sits between marketing, which creates attention, and sales, which closes deals, and it makes the handoff between them work.",
      },
      {
        q: "How much does business development consulting cost?",
        a: "Cost depends on whether you need a one-time build or an ongoing partner. A sales deck, CRM setup or market entry plan is usually a fixed project. Ongoing lead generation, event programs and fractional business development leadership run monthly. Booth builds, event production and printed collateral are quoted separately, because they depend on quantities, venues and deadlines.",
      },
      {
        q: "We are moving our company to Palm Beach County. Where do we start?",
        a: "Start by deciding who needs to know you are here and by when. Then build the local presence those people will check: a website and Google Business Profile with a local address, a short list of associations and events worth joining, and a press announcement timed to the move. The county's Business Development Board is also a useful early call for relocation resources.",
      },
      {
        q: "How long before a lead generation system produces results?",
        a: "Expect the first qualified conversations within the first couple of months and a reliable rhythm after about a quarter of testing and adjusting. Setup takes a few weeks for lists, messaging, landing pages and the CRM. Long sales cycles, like commercial real estate or institutional finance, take longer to show closed revenue, so we report on meetings and pipeline in the meantime.",
      },
      {
        q: "Why not just hire a full-time business development rep?",
        a: "A rep is only as good as the system and materials behind them, and many companies hire one before those exist. We build the deck, the CRM, the target list and the brand presence first, so a new hire can start producing instead of spending months making slides. When you do add salespeople, they plug into a system that already works.",
      },
      {
        q: "Are trade shows and sponsorships worth the money?",
        a: "They are worth it when the audience matches your buyers and the follow-up is planned before you pay. The mistake is buying a logo on a banner and hoping. We choose events by who attends, book meetings before the show, produce the booth and materials and follow up within days. The boat show on Flagler Drive or a sponsorship during Wellington's equestrian season can do more than a year of cold email.",
      },
    ],
    related: ["public-relations", "digital-marketing", "print"],
    image: "/img/stock/deal.jpg",
    imageAlt: "Sailboats moored along Flagler Drive below the West Palm Beach skyline",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "web-design",
    name: "Websites and Software",
    side: "digital",
    headline: "Build the site that does the selling",
    kicker: "Web design and software company in West Palm Beach",
    metaTitle: "Web Design and Custom Software West Palm Beach | Epic Wolf",
    metaDescription:
      "Web design and custom software in West Palm Beach: fast custom websites, ecommerce, landing pages, customer portals, internal tools and AI assistants.",
    summary:
      "Custom websites, ecommerce, landing pages, web apps, customer portals, internal tools and AI assistants, designed and coded for Palm Beach County businesses that have outgrown templates.",
    intro: [
      "Your website is where every other piece of marketing sends people. The press article links to it. The van wrap prints its address. The Google profile shows it. If it loads slowly, looks dated on a phone or buries the phone number, all that attention leaks out the bottom. Too many business sites in Palm Beach County still run on bloated themes and page builders nobody on staff can safely edit.",
      "We design and code websites from scratch on modern frameworks, so they load fast, rank cleanly, read clearly to search engines and AI assistants, and look like your brand instead of a theme demo. Every build includes real copy, structured data, analytics and forms that actually reach your inbox. You also get an editing setup your team can use without breaking the layout.",
      "Then there is the software most agencies cannot build. Customer portals where clients check a project or pay an invoice. Internal tools that replace the spreadsheet everyone is afraid to touch. Booking flows, quote calculators, automations between your CRM and your inbox, and AI assistants that answer common questions and hand off to a human. If it runs in a browser and saves your team time, it is in scope.",
    ],
    deliverables: [
      { name: "Custom website design", detail: "Designed around your brand and your customers, coded from scratch and built mobile first." },
      { name: "Website redesign", detail: "A rebuild that protects your search history with proper redirects, then fixes what the old site got wrong." },
      { name: "Ecommerce websites", detail: "Online stores on Shopify or a custom build, with product pages, checkout, shipping and inventory set up." },
      { name: "Landing pages", detail: "Fast single-purpose pages for campaigns, launches and events, wired to tracking and your CRM." },
      { name: "Web applications", detail: "Custom browser-based software for booking, quoting, scheduling or anything your business still does by hand." },
      { name: "Customer portals", detail: "Secure logins where clients see their status, documents and invoices without calling the office." },
      { name: "Internal tools and dashboards", detail: "Admin panels, reporting dashboards and workflow tools that replace fragile spreadsheets." },
      { name: "Automation and AI assistants", detail: "Connections between your forms, CRM, email and texting, plus AI chat that answers questions and books calls." },
      { name: "Hosting and care plans", detail: "Monitoring, updates, backups and small changes handled monthly so the site stays fast and secure." },
    ],
    approach: [
      {
        title: "Plan the pages that earn money",
        body: "We map what visitors need to see before they call, book or buy, and write the copy before we design, so the layout serves the words instead of filler.",
      },
      {
        title: "Design in the browser",
        body: "You review real pages on your own phone early, not static pictures of a website that behave differently once built.",
      },
      {
        title: "Build it fast and findable",
        body: "Modern code, optimized images, schema, clean URLs and redirects from the old site so search rankings carry over.",
      },
      {
        title: "Launch and keep improving",
        body: "We watch forms, calls and search data after launch and ship improvements rather than disappearing at go-live.",
      },
    ],
    oneTeam:
      "A website is the hub everything else points to, so it should be built by the people making the spokes. When a client launches, the press release links to a newsroom page we built, the ad campaigns land on pages designed for them, and the storefront sign and van wrap carry a URL or QR code that opens a tracked page on the day they go live. The brand colors on screen are matched to the vinyl and the print because the same team specified all three. Nobody has to chase a web vendor to update the site after the rebrand.",
    audiences: [
      "Service businesses whose site should book jobs",
      "Restaurants and hospitality groups that need menus, reservations and events",
      "Professional firms that need credibility on the first click",
      "Retail brands ready to sell online",
      "Operations-heavy companies running on spreadsheets",
      "Startups that need a product and a marketing site",
    ],
    vocabulary: [
      "web design",
      "website designer",
      "web developer",
      "website company",
      "website redesign",
      "ecommerce website",
      "landing page design",
      "web agency",
      "custom software development",
      "app developer",
      "customer portal",
      "AI chatbot",
    ],
    faqs: [
      {
        q: "How much does a website cost in West Palm Beach?",
        a: "Website cost depends on the number of unique page types, how much copy and photography we create, and what the site has to do beyond presenting information. A focused marketing site is a very different project from ecommerce or a customer portal. We quote a fixed price after a scoping call and itemize anything ongoing, like hosting or a care plan, so nothing surprises you later.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A typical custom marketing website takes four to eight weeks from kickoff to launch. The biggest variable is content and approvals: sites move fastest when decisions come quickly. Ecommerce and custom software take longer and are scoped in phases, so something useful goes live early and further features follow on a published schedule rather than an open-ended build.",
      },
      {
        q: "Why not use Wix or Squarespace?",
        a: "Website builders are fine for a hobby or a very new business, but they cap how fast, findable and distinctive your site can be. Growing businesses hit limits on speed, SEO control, integrations and design. We build sites you own, that load fast and that connect to your CRM, booking and ads. If a builder is honestly the right call for you, we will say so.",
      },
      {
        q: "Will a redesign hurt our Google rankings?",
        a: "Not if it is done carefully. Rankings drop after redesigns when URLs change without redirects, content gets deleted or technical settings are missed. We crawl the old site first, map every URL with search value, keep or improve the content on it and set up permanent redirects. Then we watch Search Console after launch to catch problems early.",
      },
      {
        q: "Do you build custom software and web apps too?",
        a: "Yes. We build browser-based software such as customer portals, booking and quoting tools, internal dashboards and automations between the systems you already use. We start with the smallest version that solves the real problem, put it in front of your team, and expand it based on how people actually use it rather than a long specification written in advance.",
      },
      {
        q: "Can you add an AI assistant to our website?",
        a: "Yes. We build AI assistants that answer from your own services, prices and policies, qualify inquiries and hand off to a person by text or email when it matters. They are set up to say they do not know rather than invent an answer, and every conversation is logged so you can see what customers are really asking.",
      },
    ],
    related: ["digital-marketing", "branding", "business-development"],
    image: "/img/stock/ew-web.jpg",
    imageAlt: "Epic Wolf web pages shown across several phone screens",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "signs",
    name: "Signs and Storefronts",
    side: "street",
    headline: "Give the sidewalk a reason to walk in",
    kicker: "Sign company in West Palm Beach",
    metaTitle: "Sign Company and Business Signs West Palm Beach | Epic Wolf",
    metaDescription:
      "Sign company in West Palm Beach for storefront and channel letter signs, illuminated and blade signs, window graphics, wall murals, wayfinding and banners.",
    summary:
      "Storefront and channel letter signs, illuminated and blade signs, window graphics, wall graphics and murals, wayfinding, menu boards, banners and trade show displays, managed from permit to install.",
    intro: [
      "Your sign works every hour you are open and every hour you are closed. On Clematis Street, Atlantic Avenue or a plaza off Okeechobee Boulevard, it is the first piece of branding most customers ever see, and often the only one before they decide whether to walk in. A good sign reads from a moving car, looks right at night and survives a Florida summer.",
      "We handle signs end to end: design, engineering, fabrication, permits and installation, managed by the same team that shapes the brand. The sign is designed as part of the identity, not redrawn from a logo file by someone who never met you, so the storefront reads like the brand from across the street.",
      "What separates us from a sign shop is the thinking before fabrication. We check what the landlord, the association and the city will allow, design the sign from the brand instead of redrawing your logo, choose lighting for how the street actually looks after dark, and plan the window graphics, interior signs and menu boards as one system. One team is responsible for how the whole storefront reads.",
    ],
    deliverables: [
      { name: "Storefront signs", detail: "Fascia and building signs designed to the brand and sized for the distance customers read them from." },
      { name: "Channel letter signs", detail: "Front-lit, halo-lit and non-lit dimensional letters for retail, restaurants and offices." },
      { name: "Illuminated signs", detail: "Light boxes, LED lit letters and neon-style signs that carry the brand after dark." },
      { name: "Blade signs", detail: "Projecting signs that catch people walking the sidewalk, not only traffic facing the building." },
      { name: "Window graphics and lettering", detail: "Printed and cut vinyl, perforated window film, frosted privacy film and hours decals." },
      { name: "Wall graphics and murals", detail: "Printed wall wraps, dimensional logos and murals for lobbies, offices, gyms and dining rooms." },
      { name: "Interior and wayfinding signage", detail: "Room IDs, directories, ADA room signs and directional systems for offices, clinics and campuses." },
      { name: "Menu boards", detail: "Printed and digital menu boards designed to be read quickly from the line." },
      { name: "Banners and trade show displays", detail: "Grand opening banners, A-frames, backdrops, pop-up displays and table covers." },
    ],
    approach: [
      {
        title: "Survey the site",
        body: "Photos, measurements, sightlines and lighting at the actual location, plus the landlord's sign criteria if the plaza has them.",
      },
      {
        title: "Design to the brand",
        body: "Mockups on your real storefront photo, day and night, with sizes, materials and lighting called out so there are no surprises at install.",
      },
      {
        title: "Handle permits and production",
        body: "Drawings and permit applications prepared per the city's rules, then fabrication once approvals come through.",
      },
      {
        title: "Install and document",
        body: "Professional installation scheduled around your hours, inspection where required, and fresh photos for your website and Google profile.",
      },
    ],
    oneTeam:
      "A new sign is news for a local business, and we treat it that way. The same week the channel letters light up, the Google Business Profile gets new storefront photos, the website hero updates, the grand opening banner and window graphics go up, and a short announcement goes to local press and the neighborhood. The sign, the site and the story are designed together, so the storefront a customer sees on Google is the storefront they find on the street.",
    audiences: [
      "Restaurants, cafes and bars opening or rebranding",
      "Boutiques on Worth Avenue, Clematis Street and Atlantic Avenue",
      "Medical offices, clinics and med spas",
      "Gyms, studios and wellness businesses",
      "Offices and real estate firms that need lobby and window branding",
      "Property managers running multi-tenant signage",
    ],
    vocabulary: [
      "sign company",
      "sign shop",
      "signage company",
      "business signs",
      "storefront signs",
      "channel letters",
      "LED signs",
      "blade signs",
      "window graphics",
      "wall murals",
      "wayfinding signage",
      "signs near me",
    ],
    faqs: [
      {
        q: "How much does a storefront sign cost?",
        a: "Storefront sign cost comes down to size, construction, lighting and installation conditions. Non-illuminated dimensional letters cost far less than illuminated channel letters, and a light box usually sits in between. Letter height, wall type, electrical access, landlord requirements and permit fees all move the number. We give a written quote after a site survey so the price reflects your actual building.",
      },
      {
        q: "Do I need a permit for a business sign in Palm Beach County?",
        a: "Most permanent exterior signs need a permit, and the rules vary by municipality. Palm Beach County has 39 cities and towns plus unincorporated areas, and each sets its own rules on size, lighting and placement. Many plazas also have landlord sign criteria on top of that. We prepare drawings and applications per the city's rules and build review time into the schedule.",
      },
      {
        q: "How long does it take to get a new sign installed?",
        a: "Window graphics and simple interior signs can often go up within a couple of weeks of design approval. Permitted exterior signs take longer, because permit review and fabrication both take time and review periods vary by city. We give you a realistic schedule up front and plan any grand opening around the permit instead of around hope.",
      },
      {
        q: "Why not just go to a sign franchise?",
        a: "A franchise sign shop is built to fabricate what you hand it, and many do that well. What they usually do not do is brand strategy, the website, the press announcement or the van wrap that should match the sign. We design the sign as part of your brand, manage production and install, and coordinate everything around it so the opening lands as one event.",
      },
      {
        q: "Will my sign hold up to Florida weather?",
        a: "Yes, when it is specified for Florida. Exterior signs here have to be built and installed to handle high winds and hurricane season, and that is part of what permit drawings address. We also specify UV-resistant inks and laminates, sealed electrical components and materials that resist salt air near the coast, since sun and humidity age signs fastest in South Florida.",
      },
      {
        q: "Can you refresh our storefront with window graphics instead of a new sign?",
        a: "Yes. Window graphics are one of the fastest ways to refresh a storefront without touching the main sign. Perforated film carries full images while still letting you see out, frosted film adds privacy and cut vinyl handles hours, logos and lettering. Graphics are often simpler to approve than new exterior signs, though some cities and landlords limit how much glass you can cover.",
      },
    ],
    related: ["branding", "vehicle-wraps", "print"],
    image: "/img/brand/ew-storefront.jpg",
    imageAlt: "A storefront with the Epic Wolf wordmark across the sign band",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vehicle-wraps",
    name: "Vehicle Graphics",
    side: "street",
    headline: "Put your name in every lane of I-95",
    kicker: "Vehicle wraps in West Palm Beach",
    metaTitle: "Vehicle Wraps and Fleet Graphics West Palm Beach | Epic Wolf",
    metaDescription:
      "Vehicle wraps in West Palm Beach: full and partial wraps, fleet graphics, van, box truck and trailer wraps, food trucks, lettering, decals and boat graphics.",
    summary:
      "Full and partial wraps, fleet graphics programs, van, box truck and trailer wraps, food trucks, lettering, decals and boat graphics, designed to be read at speed.",
    intro: [
      "A wrapped vehicle is the one ad you already paid to drive around. Every trip down I-95, every job parked in a Wellington driveway and every afternoon stuck on Okeechobee Boulevard puts your name in front of people who live in your service area. The catch is that most wraps are designed like billboards for someone standing still. On the road, people get a few seconds and a bad angle.",
      "We design wraps to be read at speed: one clear message, a name and a phone number or short URL that survive glare, and a layout drawn on accurate templates for your exact make and model so the logo does not fold into a door handle. Every file is checked against the real vehicle before a single panel is printed. We then manage the printing, laminating and professional installation.",
      "For fleets, we treat wraps as a program instead of a one-off. A graphics standard that works on a sedan, a transit van and a box truck. Unit numbers and DOT lettering where they apply. A rollout schedule that keeps vehicles working. And saved files, so a door damaged in a fender bender gets a new panel instead of a whole new wrap.",
    ],
    deliverables: [
      { name: "Full vehicle wraps", detail: "Complete coverage in printed cast vinyl with protective laminate, designed for your exact vehicle." },
      { name: "Partial wraps", detail: "Strategic coverage that blends printed graphics with the vehicle's paint for impact at a lower cost." },
      { name: "Fleet graphics programs", detail: "One standard across every vehicle type, with numbering, rollout scheduling and replacement planning." },
      { name: "Van and box truck wraps", detail: "Cargo vans, Sprinters, Transits and box trucks laid out around doors, ribs and roll-up panels." },
      { name: "Trailer wraps", detail: "Enclosed, utility and concession trailers, including rear doors that read clearly in traffic." },
      { name: "Food truck wraps", detail: "Brand, menu highlights and social handles in a design that works parked at an event and moving between them." },
      { name: "Vehicle lettering and decals", detail: "Cut vinyl names, phone numbers, DOT numbers and door logos when a full wrap is more than you need." },
      { name: "Boat graphics", detail: "Hull names, registration numbers and graphics for charter, marine service and fishing businesses." },
      { name: "Magnetic signs", detail: "Removable door signs for personal vehicles that do business duty part of the time." },
    ],
    approach: [
      {
        title: "Measure the vehicle",
        body: "Photos and measurements of the actual vehicles, including existing damage, trim and hardware that affect the layout.",
      },
      {
        title: "Design for three seconds",
        body: "Proofs on accurate templates, reviewed at driving distance, with the message cut down to what someone can read in traffic.",
      },
      {
        title: "Print and install",
        body: "Printed on cast wrap film, laminated and installed indoors on clean paint by experienced wrap installers.",
      },
      {
        title: "Care and replace",
        body: "Care instructions for every vehicle and, for fleets, saved files and a panel replacement plan so a damaged door is a quick fix.",
      },
    ],
    oneTeam:
      "A van is a rolling version of your brand, so it should match everything else. We design wraps from the same identity files as the storefront sign, the website and the uniforms, and each wrap can carry a short URL or number that lands on a tracked page we built, so you can see which vehicles bring in calls. When a company opens a new service area, the wrapped trucks, the local landing page, the direct mail drop and the announcement to local press can all roll out the same week.",
    audiences: [
      "Home services and trades like HVAC, plumbing, pools, roofing and landscaping",
      "Cleaning, pest control and property services",
      "Food trucks and caterers",
      "Tour operators and hospitality shuttles",
      "Marine service, charter and fishing businesses",
      "Growing companies building a branded fleet",
    ],
    vocabulary: [
      "vehicle wraps",
      "car wrap",
      "truck wrap",
      "van wrap",
      "fleet wraps",
      "fleet graphics",
      "box truck wrap",
      "trailer wrap",
      "commercial wrap",
      "vehicle lettering",
      "car decals",
      "boat wrap",
    ],
    faqs: [
      {
        q: "How much does a vehicle wrap cost?",
        a: "Wrap cost depends mainly on vehicle size, how much of it is covered and how complex the design is. As a typical market range, the Hyperformance Graphics 2026 wrap cost guide puts a full cargo van wrap at roughly $3,500 to $6,500 and a box truck at roughly $4,000 to $8,000. Partial wraps and lettering cost less. We quote after seeing your vehicle and design.",
      },
      {
        q: "How long does a vehicle wrap last in Florida?",
        a: "A professionally installed wrap in quality cast vinyl typically lasts several years, but Florida sun shortens that on horizontal surfaces like hoods and roofs. Parking in shade, hand washing and keeping pressure washers away from edges all help. We specify UV-protective laminate as standard, and worn panels can be replaced individually instead of rewrapping the whole vehicle.",
      },
      {
        q: "How long will my vehicle be out of service?",
        a: "Most wraps need the vehicle for one to three days, depending on size and coverage. Design and printing happen before you drop it off, so the only downtime is installation, post-heating and inspection. For fleets we schedule vehicles in rotation so your crews keep working. Simple lettering and decals can often be done in a few hours.",
      },
      {
        q: "Will a wrap damage my paint?",
        a: "No, not on factory paint in good condition. Quality wrap film protects the paint underneath from sun and light scratches, and it can be removed cleanly by a professional within its rated life. The risk is on repainted, chipped or oxidized surfaces, where removal can lift paint. We inspect for that before quoting and tell you exactly where it applies.",
      },
      {
        q: "Should I wrap or paint my work van?",
        a: "Wrap it if you want graphics, if the van is leased or if you plan to resell it. A wrap is often less expensive than custom paint with comparable graphics, installs faster, protects the original paint and comes off when the vehicle leaves the fleet. Paint makes sense for a solid color change on an owned vehicle you plan to keep for its whole life.",
      },
      {
        q: "Why not just go straight to a wrap installer?",
        a: "A skilled installer is essential, and many are excellent with vinyl. But most wrap shops work from whatever artwork you bring, and most businesses do not have artwork designed to be read at highway speed. We design from your brand, manage the print and install, and connect the wrap to tracked landing pages so you can see what the fleet brings in.",
      },
    ],
    related: ["signs", "branding", "print"],
    image: "/img/brand/ew-van.jpg",
    imageAlt: "A cargo van wrapped in Epic Wolf black and orange on a seawall",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "print",
    name: "Print and Brand Goods",
    side: "street",
    headline: "Print the things people actually keep",
    kicker: "Printing and promotional products in West Palm Beach",
    metaTitle: "Printing and Promo Products West Palm Beach | Epic Wolf",
    metaDescription:
      "Printing and promotional products in West Palm Beach: business cards, menus, direct mail and EDDM, packaging, custom apparel, promo items and event materials.",
    summary:
      "Business cards, stationery, menus, brochures, direct mail and EDDM, packaging, custom apparel, promotional products and event materials, designed on brand and managed from proof to delivery.",
    intro: [
      "Print is the part of marketing people hold in their hands. A menu card on the table, a cup that goes home after a beach day, a crew shirt that shows up at every job, a mailer on the kitchen counter. Done well, it is the most personal brand touch you have. Done cheaply, it is a stack of flyers in the recycling bin and a shirt nobody wears twice.",
      "We design and manage print and promo from brief to delivery: paper and material choices, color matching, proofs, production with the right vendors and delivery to your door or your event. The goal is simple: things people keep, use and show off, in exactly your colors, so the brand keeps working long after the event.",
      "The rule we work by is simple: make things people want to keep. That means better blanks, better decoration methods and designs that feel like merchandise rather than advertising. It also means print with a job to do. Direct mail and EDDM with a tracked offer, menus that are easy to update, and event materials that point to a page where the lead gets captured.",
    ],
    deliverables: [
      { name: "Business cards and stationery", detail: "Cards, letterhead, envelopes, notecards and folders, with premium paper, foil and letterpress options." },
      { name: "Menus and menu cards", detail: "Dine-in menus, cocktail cards, takeout menus and table tents designed for real lighting and real spills." },
      { name: "Brochures and sales collateral", detail: "Brochures, sell sheets, presentation folders and leave-behinds for sales teams and offices." },
      { name: "Direct mail and EDDM", detail: "Postcards and mailers targeted by list or by USPS carrier route, with tracked offers and landing pages." },
      { name: "Packaging and labels", detail: "Boxes, bags, stickers, labels and tissue that make the unboxing part of the brand." },
      { name: "Custom apparel", detail: "Screen printed and embroidered tees, polos, hoodies, hats, aprons and hi-vis for crews, staff and fans." },
      { name: "Promotional products", detail: "Drinkware, bags, fans, towels and useful giveaways chosen to get used rather than tossed." },
      { name: "Corporate gifts", detail: "Client and employee gifts and kits, packed and shipped for holidays, closings and milestones." },
      { name: "Event materials", detail: "Table covers, step and repeat backdrops, banners, badges and signage for galas, festivals and trade shows." },
    ],
    approach: [
      {
        title: "Start with the job",
        body: "What the piece has to accomplish, who will hold it and for how long. That decides paper, material and quantity before design starts.",
      },
      {
        title: "Design and proof",
        body: "On-brand layouts with physical proofs or samples for anything where color, texture or fit matters.",
      },
      {
        title: "Produce and deliver",
        body: "We manage production across the right vendor for each item and deliver to your office, job site or event on the date you need it.",
      },
      {
        title: "Make reorders easy",
        body: "Files, specs and pricing saved so the next run of cards or shirts is one message, not a new project.",
      },
    ],
    oneTeam:
      "Print is where the brand becomes physical, so it has to match the rest precisely. The same people who set the colors for your website and sign specify the ink on your mailers and the thread on your polos. When a restaurant opens, the menus, the staff tees, the window graphics and the launch mailer are designed together and delivered the same week the press announcement goes out and the Google profile goes live. Every mailer and card can point to a tracked page, so print finally reports back.",
    audiences: [
      "Restaurants, bars and beach venues",
      "Contractors and home services outfitting crews",
      "Cities, municipalities and public events",
      "Wellness practices and med spas",
      "Real estate teams and brokerages",
      "Nonprofits and gala committees",
    ],
    vocabulary: [
      "printing company",
      "print shop",
      "commercial printing",
      "business cards",
      "brochures",
      "direct mail",
      "EDDM",
      "promotional products",
      "branded merchandise",
      "custom apparel",
      "embroidered shirts",
      "corporate gifts",
    ],
    faqs: [
      {
        q: "How much do custom shirts and promotional products cost?",
        a: "Unit price is driven by quantity, the blank you choose, the decoration method and how many colors or print locations are involved. Larger runs lower the per-piece price, while premium blanks and embroidery raise it. Rush timelines add cost. We quote two or three options at different quality levels so you can see exactly what each upgrade buys.",
      },
      {
        q: "How long does a print or promo order take?",
        a: "Most business cards, flyers and standard print are ready within one to two weeks after proof approval. Custom apparel and promotional products usually take two to four weeks depending on the item and decoration, and some imported items take longer. For events like the Palm Beach Food and Wine Festival or a winter gala, order early and we will work backward from the date.",
      },
      {
        q: "What is EDDM and is it worth it?",
        a: "EDDM is Every Door Direct Mail, a USPS service that delivers a mailer to every address on the carrier routes you choose without buying a mailing list. It works well for restaurants, home services and retailers that serve a defined area. It is worth it when the offer is clear and trackable, which is why we pair every drop with a dedicated landing page or code.",
      },
      {
        q: "Why not order from an online print site?",
        a: "Online print sites are fine for a quick reorder of something already designed. They will not tell you your menu is unreadable in dim light, match your ink to your sign vinyl or source a better cup for a beach bar. We handle design, material choices, color consistency and delivery, and we keep your specs on file so reorders stay easy.",
      },
      {
        q: "Do you have minimum order quantities?",
        a: "Minimums depend on the item and decoration method. Digital print and some apparel can run in small quantities, while screen printing, custom packaging and many promotional products carry higher minimums set by the manufacturer. We tell you the minimum for each option up front and suggest alternatives that fit if your quantity is small.",
      },
      {
        q: "Can you match our exact brand colors on print and apparel?",
        a: "Yes, within the limits of each material. We specify Pantone colors for spot printing and thread, use color-managed files for digital print and proof physically when color is critical. Coated paper, cotton, vinyl and plastic all show color differently, so we check them side by side to keep the brand consistent from the business card to the storefront.",
      },
    ],
    related: ["branding", "signs", "business-development"],
    image: "/img/brand/ew-tote.jpg",
    imageAlt: "A canvas tote printed with the Epic Wolf mark",
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)
