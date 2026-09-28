import type { Guide } from "./types"

/**
 * Long-form, answer-first guides. Every figure is a published market range with a source,
 * never Epic Wolf pricing. Sources checked 2026-09-28.
 * Copy laws: see VOICE.md (no em/en dashes, no commas in title or h2 fields, no fabrication).
 */
const all: Guide[] = [
  {
    slug: "vehicle-wrap-cost-palm-beach-county",
    title: "How Much Does a Vehicle Wrap Cost in Palm Beach County",
    description:
      "Typical 2026 market ranges for car, van, truck and trailer wraps, what drives price, wrap vs paint, how long vinyl lasts in Florida sun, and fleet programs.",
    published: "2026-09-28",
    updated: "2026-09-28",
    summary:
      "Published 2026 pricing guides put a full wrap on a sedan at roughly $2,500 to $5,000, a cargo van at $3,500 to $8,000, and a box truck at $4,000 to $8,000 or more. Partial wraps and lettering cost far less. Your quote depends on surface area, film, design and install time. In Palm Beach County, sun exposure is the biggest factor in how long that money lasts, so the material choice matters as much as the price.",
    sections: [
      {
        h2: "How much does a vehicle wrap cost in Palm Beach County",
        answer:
          "Most full commercial wraps land between about $2,500 and $8,000 depending on the vehicle, based on published 2026 national pricing guides. Sedans sit at the low end, vans and pickups in the middle, and box trucks and trailers at the top. Partial wraps and spot lettering cost less. Local quotes follow the same drivers.",
        body: [
          "There is no official price list for wraps, so treat any number as a range, not a quote. The figures below combine two widely published 2026 pricing guides: one from Lee's Signs and one from VehicleWrapCost.com. Where the two differ, we show the combined span. These are typical market ranges, not our pricing, and a real quote needs the vehicle, the design and the coverage in front of the installer.",
        ],
        table: {
          head: ["Vehicle or coverage", "Typical market range", "Notes"],
          rows: [
            ["Sedan or coupe, full wrap", "$2,500 to $5,000", "Smallest surface area; bumpers and mirrors add labor"],
            ["SUV or crossover, full wrap", "$3,000 to $6,000", "Roof and rear hatch drive the spread"],
            ["Pickup truck, full wrap", "$3,000 to $7,000", "Cab style and whether the bed is wrapped"],
            ["Cargo van, full wrap", "$3,500 to $8,000", "Sprinter, Transit and ProMaster sizes vary widely"],
            ["Box truck, full wrap", "$4,000 to $8,000 or more", "Length and whether the roll-up door is included"],
            ["53-foot trailer", "$5,000 to $10,000 or more", "Mostly flat panels, but a lot of them"],
            ["Partial wrap", "$1,500 to $3,000", "Often 60 to 70 percent coverage on vans"],
            ["Spot graphics and lettering", "$300 to $1,000", "Logos, phone, website and DOT numbers"],
          ],
        },
      },
      {
        h2: "What drives the cost of a vehicle wrap",
        answer:
          "Surface area and material drive most of the price. After that come coverage (full, partial or lettering), design time, body complexity like deep recesses and bumpers, and prep such as removing an old wrap or fixing damaged paint. Premium films, laminates and specialty finishes like chrome or matte add cost on top.",
        body: [
          "One national wrap company, Wrapmate, estimates material at roughly $8 to $12 per square foot plus $2 to $3 per square foot for installation. That math explains why a box truck costs more than a sedan even though its panels are flatter and easier to wrap.",
          "Design is the cost people forget. A wrap is a large format layout that has to work at 45 miles per hour and from a parking lot, around door handles, seams and windows. A designer who builds from an accurate vehicle template saves reprints later.",
        ],
        list: [
          "Vehicle size and total square footage",
          "Film quality: cast vinyl with a matching laminate lasts longer than cheaper calendered film",
          "Coverage: full, partial, or lettering and spot graphics",
          "Design time, especially custom illustration or photography",
          "Body complexity: deep channels, rivets, bumpers and mirrors",
          "Prep: removing old graphics or repairing paint that will not hold adhesive",
          "Window perforated film, roof coverage and door jambs",
        ],
      },
      {
        h2: "Is a vehicle wrap cheaper than a paint job",
        answer:
          "Usually yes for a color change or commercial graphics. One 2026 pricing guide puts wraps at roughly $2,500 to $6,000 and paint jobs at $3,000 to $10,000 or more. A wrap also comes off, protects the paint underneath and can carry printed photography and logos that paint cannot reproduce economically.",
        body: [
          "For business vehicles, wraps win on flexibility. You can change the offer, the phone number or the whole brand without repainting, and a leased vehicle can go back with factory paint once the film is removed properly.",
          "Paint still has a place. A high quality paint job can outlast a wrap, and a wrap will not hide rust, peeling clear coat or dents. Film follows the surface it sits on, so damaged paint needs to be repaired before any wrap goes on.",
        ],
      },
      {
        h2: "How long does a vehicle wrap last in the Florida sun",
        answer:
          "A professionally installed wrap on quality cast vinyl typically lasts five to seven years, but that assumes reasonable care. In hot, sunny climates with outdoor parking, one pricing guide says life can drop to three or four years. Hoods, roofs and trunk lids fail first because they face the sun directly.",
        body: [
          "Manufacturer numbers are measured under gentler conditions than a South Florida parking lot. 3M's product bulletin for its 2080 wrap film lists an expected performance life of 8 years, but for film applied to a flat, vertical, outdoor surface under Northern European climate conditions. The bulletin also points installers to warranty periods that vary by geographic zone.",
          "The practical takeaway for Palm Beach County: ask which film and laminate you are getting, ask what the warranty covers on horizontal surfaces versus sides, and park in shade or a garage when you can. A vehicle that lives outside on the Okeechobee Boulevard corridor all day will age faster than one that sleeps in a garage.",
        ],
      },
      {
        h2: "Should you wrap the whole vehicle or just add lettering",
        answer:
          "Choose by the job the vehicle has to do. Lettering is enough when the goal is identification: name, phone, license and website. A partial wrap adds brand color and impact for less money. A full wrap turns the vehicle into a moving billboard and makes sense for vehicles that spend all day in traffic.",
        body: [
          "Readability matters more than coverage. Drivers get a few seconds to read your truck, so the business name, what you do and one way to reach you should be legible from a distance. Busy photo collages and long service lists rarely survive the trip.",
        ],
        list: [
          "Lettering: best for trades that need clear identification on a budget",
          "Partial wrap: brand color and a strong graphic on the most visible panels",
          "Full wrap: maximum visibility for vehicles that live on I-95 and US 1",
          "Perforated window film: extends the design over rear glass while keeping visibility from inside",
        ],
      },
      {
        h2: "How do fleet wrap programs work",
        answer:
          "A fleet program standardizes one design system across every vehicle type, then rolls it out on a schedule that keeps trucks on the road. It usually includes templates per make and model, a master file library, staggered installs, and a plan for new vehicles and returns. Many shops discount per vehicle as fleet size grows.",
        body: [
          "Published discounts vary. Lee's Signs, for example, lists typical fleet discounts of 10 to 20 percent for three to five vehicles, 15 to 25 percent for six to ten, and 20 to 30 percent or more for larger fleets. Treat that as one shop's published guide, not a rule.",
          "The bigger savings come from consistency. When the design lives in one approved master file per vehicle type, every new truck looks like the last one, and your brand does not slowly drift as different installers improvise. That matters most for companies with trucks across the whole county.",
        ],
        list: [
          "One approved design system with templates for each vehicle model",
          "Brand compliance rules for logo size, colors and contact info",
          "Install scheduling around routes so no crew loses a work day",
          "A plan for lease returns and removal",
          "Photo records of each vehicle after install",
        ],
      },
      {
        h2: "How do you care for a vehicle wrap in South Florida",
        answer:
          "Hand wash regularly with a mild soap, rinse well and dry. Remove bird droppings, bugs and tree sap quickly because they can stain or etch film in the heat. Park in shade when possible. Ask your installer about pressure washing distance and which cleaners and protectants are safe for your specific film.",
        body: [
          "Sun, salt air and summer storms are the local enemies. Frequent gentle washing keeps contaminants from baking into the surface. Watch edges and seams, where lifting usually starts, and get small issues fixed early before water gets underneath.",
          "Follow the film manufacturer's care instructions, because matte, satin and gloss finishes need different products, and some waxes and polishes can damage specialty films.",
        ],
      },
      {
        h2: "What should you ask before you sign a wrap quote",
        answer:
          "Ask exactly which film and laminate will be used, what the warranty covers on horizontal and vertical surfaces, who does the design and how many revisions are included, whether prep or removal is extra, and how long the vehicle will be out of service. Get it in writing before you pay a deposit.",
        list: [
          "Which film brand and product line, and is it cast or calendered",
          "Is there a laminate, and which one",
          "What the film and workmanship warranties cover, and for how long",
          "Who owns the design files when the job is done",
          "Is removal of existing graphics included",
          "How long will the vehicle be off the road",
          "Can you see recent installs on similar vehicles",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to wrap a work van in Palm Beach County?",
        a: "Published 2026 national pricing guides put a full cargo van wrap at roughly $3,500 to $8,000, depending on van size, film and design. Larger high-roof vans sit at the upper end. A partial wrap often runs $1,500 to $3,000, and lettering can come in under $1,000. Treat these as typical market ranges and get a written quote for your specific van.",
      },
      {
        q: "Does a wrap damage the paint underneath?",
        a: "A properly installed and properly removed wrap should not damage healthy factory paint, and it can protect it from minor scuffs and sun. Problems come from damaged or aftermarket paint, very old film left on too long, or careless removal. Ask your installer about removal before install, and remove the wrap within the film's rated life.",
      },
      {
        q: "How long does it take to wrap a vehicle?",
        a: "It depends on the vehicle and the coverage, and the install is only one part of the timeline. The full process includes design, approvals, printing and laminate curing before the film ever touches the vehicle. Plan for the whole process from first meeting to finished vehicle rather than just the install day, and ask the installer for a written schedule so your crew can plan around it.",
      },
      {
        q: "Are vehicle wraps worth it for small businesses?",
        a: "For many local service businesses, yes, because a wrapped vehicle keeps working every hour it is on the road or parked at a job. The value depends on how much the vehicle is seen and how clearly the design says who you are and how to reach you. A clean, readable design on a busy route beats a complicated design on a truck that sits in a yard.",
      },
      {
        q: "Can you wrap a leased vehicle?",
        a: "Usually yes, and many businesses wrap leased vehicles because the film comes off before return. Check your lease terms first, since some leases address aftermarket modifications. Plan the removal in advance and have it done by a professional, because rushed removal on a hot day can leave adhesive residue or lift clear coat.",
      },
    ],
    related: ["vehicle-wraps", "signs", "branding", "print"],
    sources: [
      { label: "Lee's Signs: Vehicle Wrap Cost Guide 2026", href: "https://www.leessign.com/blog/vehicle-wrap-cost" },
      { label: "VehicleWrapCost.com: Vehicle Wrap Cost 2026", href: "https://vehiclewrapcost.com/" },
      { label: "Wrapmate: How Much Do Vehicle Wraps Cost", href: "https://blog.wrapmate.com/how-much-do-vehicle-wraps-cost/" },
      { label: "3M Wrap Film Series 2080 Product Bulletin", href: "https://multimedia.3m.com/mws/media/1733396O/product-bulletin-2080-series.pdf" },
    ],
  },
  {
    slug: "choosing-a-pr-firm-west-palm-beach",
    title: "How to Choose a PR Firm in West Palm Beach",
    description:
      "PR firm vs publicist vs marketing agency, typical retainer and project ranges, what to ask, red flags, and the West Palm Beach media landscape in 2026.",
    published: "2026-09-28",
    updated: "2026-09-28",
    summary:
      "Pick a PR firm the way you would pick a lawyer: for judgment, not promises. The right firm understands your business, knows which local and trade outlets actually cover it, writes a plan with measurable goals, and tells you honestly what is newsworthy. Published guides put boutique agency retainers at roughly $3,500 to $10,000 a month. Anyone who guarantees coverage is selling something other than public relations.",
    sections: [
      {
        h2: "What does a PR firm actually do",
        answer:
          "A PR firm manages how your organization is seen by the people who matter to it: customers, investors, media, regulators and the community. The core work is media relations, messaging, reputation and crisis response, executive visibility and events. The Public Relations Society of America calls it a strategic communication process that builds relationships.",
        body: [
          "Media relations is only part of it. A good firm helps decide what you should say, who should say it and when, then finds the right channel. Sometimes that is a news story. Sometimes it is a byline, a speaking slot, a community partnership or a well handled response to a problem before it becomes a headline.",
        ],
        list: [
          "Media relations and press outreach",
          "Messaging and executive positioning",
          "Crisis and reputation management",
          "Thought leadership: bylines, op-eds and speaking",
          "Launches, openings and events",
          "Community and stakeholder relations",
        ],
      },
      {
        h2: "PR firm vs publicist vs marketing agency",
        answer:
          "A publicist is usually an individual focused on getting coverage for a person or brand. A PR firm is a team that handles strategy, media, reputation and crisis at larger scale. A marketing agency drives demand through advertising, digital and content. Many businesses need pieces of all three, which is why the handoffs matter.",
        table: {
          head: ["Option", "What they do", "Best for", "Watch for"],
          rows: [
            ["Publicist", "Pitches media for a person, product or event", "Authors, chefs, personalities, one launch", "Limited bandwidth and depth outside media"],
            ["PR firm", "Strategy, media relations, reputation, crisis, events", "Companies that need sustained visibility and protection", "Retainers that report activity instead of results"],
            ["Marketing agency", "Advertising, digital, content, lead generation", "Driving sales and leads directly", "Earned media and crisis are often outside the core"],
            ["Integrated agency", "PR, brand, digital and physical marketing in one team", "Businesses tired of coordinating vendors", "Make sure each discipline has real depth"],
          ],
        },
      },
      {
        h2: "How much does a PR firm cost",
        answer:
          "Published 2026 guides put individual publicists at roughly $2,000 to $10,000 a month, boutique agencies at $3,500 to $10,000, mid-sized agencies at $10,000 to $25,000, and large firms at $25,000 or more. Project work often runs $10,000 to $75,000. These are national market ranges, and scope drives the real number.",
        body: [
          "Those ranges come from a 2026 pricing overview on Everything PR. Another agency, Canvas PR, writes that it is rare to find a traditional PR firm charging less than $5,000 a month. Both are national figures. Local market rates vary with the firm's size, the industry and how much of the work is strategy versus execution.",
          "The honest way to compare is scope, not price. Ask what a month of work actually includes: hours, deliverables, who does the work and how results are reported.",
        ],
      },
      {
        h2: "Should you hire a PR firm on retainer or by project",
        answer:
          "Use a project for a defined moment: a launch, an opening, a rebrand or an event. Use a retainer when you need steady visibility, reputation protection and relationships that build over time. Many businesses start with a project to test the fit, then move to a retainer once the story and results are proven.",
        body: [
          "Retainers usually come with minimum terms. Everything PR notes most retainers require three to six month minimums. That is reasonable, since media relationships and story pipelines take time to build, but the contract should still spell out deliverables, reporting and a clean exit if the work does not perform.",
        ],
      },
      {
        h2: "What should you ask a PR firm before you hire them",
        answer:
          "Ask who will actually do the work, what they think your real story is, which outlets they would target and why, how they will measure success, and what they would say no to. The quality of their questions about your business tells you more than any list of past clients.",
        list: [
          "Who on the team will run the account day to day",
          "What is newsworthy about us right now, and what is not",
          "Which outlets and reporters would you target, and why those",
          "How will you measure success beyond a count of clips",
          "How do you handle a negative story or a crisis",
          "What happens in the first 90 days",
          "What are the contract term and exit terms",
        ],
      },
      {
        h2: "What are the red flags when hiring a PR firm",
        answer:
          "Be wary of guaranteed placements, vague reporting, and claims of owning relationships with specific journalists. Earned media cannot be guaranteed, because editors decide what runs. Other warning signs include senior people who disappear after the pitch, long lock-in contracts without deliverables, and plans that could be pasted onto any client.",
        list: [
          "Guaranteed coverage in named outlets (often paid placement dressed up as PR)",
          "We know everyone claims instead of a specific plan",
          "Reporting that counts clips but ignores audience and outcomes",
          "Advertising value equivalency as the main success metric",
          "A senior pitch team replaced by juniors after signing",
          "No written plan, goals or timeline",
          "Long terms with no performance review or exit",
        ],
      },
      {
        h2: "What does the West Palm Beach media landscape look like",
        answer:
          "West Palm Beach sits in a market served by daily and business papers, a nonprofit local newsroom, four major network TV affiliates and public radio, plus trade and national outlets. The right targets depend on your audience. A family office, a restaurant and a nonprofit gala each need a different media list.",
        body: [
          "Treat this as a map of possible targets, not a promise of placement. Every outlet decides its own coverage, and the best pitches are built around a specific reporter's beat.",
        ],
        list: [
          "The Palm Beach Post: daily coverage across the county",
          "Palm Beach Daily News, known as the Shiny Sheet: the island of Palm Beach",
          "South Florida Business Journal: business, real estate and finance",
          "Sun Sentinel: South Florida daily coverage",
          "Stet News: a nonprofit newsroom focused on Palm Beach County",
          "WPTV (NBC), WPBF (ABC), CBS12 (WPEC) and WFLX (Fox): local TV news",
          "WLRN: South Florida public media",
          "Trade publications and national outlets for your industry",
        ],
      },
      {
        h2: "How do you measure PR results",
        answer:
          "Measure PR against business goals, not clip counts. Useful measures include coverage in the outlets your buyers actually read, how often your key messages appear, referral traffic and branded search after coverage, inbound leads and partnership inquiries, and whether AI assistants begin citing your business when people ask about your category.",
        body: [
          "Agree on the scorecard before the work starts. A quarterly review that ties coverage to traffic, leads and reputation is far more useful than a monthly binder of links.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a PR firm cost in West Palm Beach?",
        a: "Published 2026 national guides put boutique PR agency retainers at roughly $3,500 to $10,000 a month and mid-sized agencies at $10,000 to $25,000, with project work often $10,000 to $75,000. Local pricing follows scope: how much strategy, media outreach, events and crisis support you need. Always compare proposals by deliverables and team, not just the monthly number.",
      },
      {
        q: "Can a PR firm guarantee coverage in the Palm Beach Post?",
        a: "No. Editors and reporters decide what they cover, so no legitimate PR firm can guarantee earned coverage in the Palm Beach Post or any other newsroom. A firm can build a genuinely newsworthy story, pitch it to the right reporter at the right time and prepare your spokesperson. Guaranteed placements are usually paid content, which is a different product.",
      },
      {
        q: "Do I need a PR firm or a publicist?",
        a: "Choose a publicist if you mainly need media attention for a person, a book, a restaurant opening or a single launch. Choose a PR firm if you need ongoing strategy, reputation protection, crisis readiness, executive visibility and coordination with the rest of your marketing. Growing companies usually outgrow a single publicist once reputation and investor audiences matter.",
      },
      {
        q: "How long before PR shows results?",
        a: "Expect early signs within the first few months and more meaningful momentum after about six months of consistent work. The first weeks go to messaging, story development and media lists. Coverage depends on news value and timing, so a firm that promises instant results is overselling. Reputation and search benefits build over time as coverage accumulates.",
      },
      {
        q: "Should my PR firm also handle marketing and branding?",
        a: "It helps when they work as one team, because your press story, your brand and your advertising should say the same thing. If PR, branding and marketing live with three different vendors, someone has to coordinate them, and messages drift. An integrated agency removes the handoffs, but check that each discipline has real depth.",
      },
    ],
    related: ["public-relations", "branding", "business-development", "digital-marketing"],
    sources: [
      { label: "PRSA: About Public Relations", href: "https://www.prsa.org/about/all-about-pr" },
      { label: "Everything PR: PR Firm Cost in 2026", href: "https://everything-pr.com/how-much-does-a-pr-firm-cost-in-2026" },
      { label: "Canvas PR: How Do PR Companies Charge", href: "https://www.canvaspr.com/blog/how-do-pr-companies-charge" },
      { label: "Palm Beach Daily News (Wikipedia)", href: "https://en.wikipedia.org/wiki/Palm_Beach_Daily_News" },
      { label: "Stet News", href: "https://stetnews.org/" },
      { label: "WPTV-TV (Wikipedia)", href: "https://en.wikipedia.org/wiki/WPTV-TV" },
      { label: "WPBF (Wikipedia)", href: "https://en.wikipedia.org/wiki/WPBF" },
      { label: "WPEC (Wikipedia)", href: "https://en.wikipedia.org/wiki/WPEC" },
    ],
  },
  {
    slug: "branding-agency-vs-marketing-agency",
    title: "Branding Agency vs Marketing Agency and Why It Matters",
    description:
      "What a branding agency does, what a marketing agency does, when you need each, why splitting them causes brand drift, and when integrated makes sense.",
    published: "2026-09-28",
    updated: "2026-09-28",
    summary:
      "A branding agency decides who you are: positioning, name, identity and the rules that hold it together. A marketing agency decides how you get found and chosen: campaigns, channels and demand. You need branding first when you are new, changing or confusing people, and marketing when the brand is solid but the phone is quiet. Splitting the two between vendors is the most common cause of brand drift, especially once signs, vehicles and print enter the picture.",
    sections: [
      {
        h2: "What does a branding agency do",
        answer:
          "A branding agency defines what your business stands for and how it looks and sounds. The work covers positioning, naming, messaging, logo and visual identity, and the guidelines that keep it all consistent. The American Marketing Association defines a brand as the name, design, symbol or feature that distinguishes one seller from others.",
        list: [
          "Brand strategy and positioning",
          "Naming and taglines",
          "Logo and visual identity: color, type, imagery",
          "Messaging and voice",
          "Brand guidelines and asset libraries",
          "Rebrands and brand refreshes",
        ],
      },
      {
        h2: "What does a marketing agency do",
        answer:
          "A marketing agency gets your business in front of buyers and turns attention into leads and sales. The work covers advertising, search, social media, email, content, websites and analytics. A good one plans campaigns around goals, picks the channels your customers use, and reports on what those efforts actually produced for the business.",
        list: [
          "Search engine optimization and Google Business Profile",
          "Paid search and social advertising",
          "Social media content and management",
          "Email and marketing automation",
          "Websites and landing pages",
          "Analytics and reporting",
        ],
      },
      {
        h2: "What is the difference between branding and marketing",
        answer:
          "Branding is who you are. Marketing is how you get chosen. Branding sets the promise, the look and the voice, and it changes rarely. Marketing puts that promise in front of people through campaigns and channels, and it changes constantly. Strong marketing on a weak brand spends money to make a forgettable impression.",
        table: {
          head: ["", "Branding", "Marketing"],
          rows: [
            ["Core question", "Who are we and why us", "How do we get found and chosen"],
            ["Time horizon", "Years", "Weeks to quarters"],
            ["Typical outputs", "Positioning, name, identity, guidelines", "Campaigns, ads, content, websites, reports"],
            ["How it is judged", "Recognition, trust, pricing power", "Leads, sales, cost per result"],
            ["When it changes", "Rebrand or major business shift", "Every campaign and season"],
          ],
        },
      },
      {
        h2: "When do you need a branding agency",
        answer:
          "You need branding work when people are confused about what you do, when you have outgrown a logo made on day one, when you are changing markets, merging, renaming or raising prices, or when every new marketing campaign looks like it came from a different company. Fix the foundation before spending more on reach.",
        list: [
          "Launching a new company, location or product line",
          "A merger, acquisition or ownership change",
          "Moving upmarket or into a new audience",
          "A name that is confusing, generic or legally risky",
          "Inconsistent look across website, vehicles, signs and print",
          "Preparing for investors or a sale",
        ],
      },
      {
        h2: "When do you need a marketing agency",
        answer:
          "You need marketing help when the brand is clear but not enough of the right people know about it. Signs include a slow pipeline, a website with little traffic, a thin Google profile, ads that spend without returns, or no one on staff with time to plan campaigns and measure what is working.",
        body: [
          "If you hire a marketing agency before your brand is settled, expect the agency to make brand decisions anyway, one ad at a time. That is how businesses end up with five versions of their logo and three different taglines.",
        ],
      },
      {
        h2: "Why does splitting branding and marketing cause brand drift",
        answer:
          "Brand drift happens at handoffs. The branding agency delivers a guidelines PDF, then the marketing agency, the web developer, the sign shop, the wrap installer and the printer each interpret it. Small changes stack up: a stretched logo, an off color, a new font. Within a year the brand no longer looks like one company.",
        body: [
          "The physical layer is where drift shows first. A sign shop redraws the logo from a low resolution file. A wrap installer squeezes it onto a van panel. A printer matches the color by eye. None of them were in the room when the brand was built, so none of them know which rules matter.",
          "Drift costs real money. Inconsistent brands look smaller and less trustworthy, which weakens pricing and referrals, and fixing it later means reprinting, rewrapping and resigning.",
        ],
      },
      {
        h2: "What is an integrated agency and when does it make sense",
        answer:
          "An integrated agency handles brand, marketing and often PR under one team and one plan, so the same people who define the brand also apply it. It makes sense when you are tired of coordinating vendors, when consistency matters to your reputation, or when your marketing spans digital, press and physical pieces like signs and vehicles.",
        body: [
          "The tradeoff is depth. Check that the integrated team has real specialists in each discipline, not generalists covering everything. Ask to see how a single project moved from strategy to website to physical production, and who was accountable at each step.",
        ],
      },
      {
        h2: "How do you tell if your brand has drifted",
        answer:
          "Put everything side by side. Lay out your website, Google profile photos, social accounts, business cards, proposals, vehicle graphics, storefront sign and uniforms, and look for differences in logo, color, type and message. If a stranger would not immediately recognize them as one company, your brand has drifted and needs a reset.",
        list: [
          "Is the logo the same file everywhere, at correct proportions",
          "Do colors match across screen, print, vinyl and paint",
          "Is the same tagline or description used everywhere",
          "Does the business name appear the same way on every listing",
          "Would a new customer recognize the truck, the sign and the website as one company",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I hire a branding agency or a marketing agency first?",
        a: "Hire branding first if your positioning, name or identity is unclear, outdated or inconsistent, because marketing will amplify whatever you give it. Hire marketing first if your brand is solid and customers already understand what you offer, but not enough of them know you exist. If you need both, one team that handles both avoids paying twice.",
      },
      {
        q: "Is a logo the same thing as a brand?",
        a: "No. A logo is one piece of a brand. The brand is the whole impression: what you promise, how you sound, how you look across every touchpoint and how people feel after dealing with you. A great logo on an inconsistent business does little, while a clear brand can make a simple logo feel strong.",
      },
      {
        q: "How often should a business rebrand?",
        a: "Rebrand when the business has changed, not on a calendar. Common triggers include new ownership, new markets, a move upmarket, a merger, or an identity that no longer reflects the company. Many businesses need a refresh, which updates the look while keeping recognition, rather than a full rebrand that starts over.",
      },
      {
        q: "Can one agency really do branding, marketing and signage?",
        a: "Yes, if it has real depth in each area and manages production carefully. The benefit is that the people who designed the brand also control how it appears on the website, in ads, on vehicles and on the building. Ask how they handle production and install, and who checks each piece against the brand standards.",
      },
    ],
    related: ["branding", "digital-marketing", "public-relations", "signs"],
    sources: [
      { label: "AMA definition of brand via Branding Strategy Insider", href: "https://brandingstrategyinsider.com/the-language-of-2/" },
    ],
  },
  {
    slug: "business-sign-permits-palm-beach-county",
    title: "Getting a Business Sign Approved in Palm Beach County",
    description:
      "How business sign approval generally works in Palm Beach County: who has jurisdiction, landlord and HOA sign-off, design review boards and permits.",
    published: "2026-09-28",
    updated: "2026-09-28",
    summary:
      "There is no single sign code for Palm Beach County. The county has 39 incorporated municipalities, each with its own rules, and unincorporated areas follow the county's Unified Land Development Code. The general path is the same almost everywhere: confirm who has jurisdiction, get landlord or association approval, design to the local code, pass any design review, then apply for building and electrical permits before installing. Always confirm the details with the specific city or town before you order anything.",
    sections: [
      {
        h2: "Who approves a business sign in Palm Beach County",
        answer:
          "The government that controls your property's location approves the sign. Palm Beach County has 39 incorporated municipalities, each with its own sign rules, and unincorporated areas follow the county's Unified Land Development Code. Your mailing address does not always tell you which one applies, so confirm the jurisdiction before you design anything.",
        body: [
          "Mailing addresses mislead. The Postal Service uses Lake Worth for six ZIP codes, but only part of that area is the City of Lake Worth Beach; the rest includes other towns and unincorporated county land. The same kind of mismatch happens elsewhere. The county property appraiser's record for your parcel shows the municipality, which is the reliable answer.",
          "In unincorporated areas, the county's sign rules live in Article 8 of the Unified Land Development Code, which applies to all signs in unincorporated Palm Beach County unless a sign is specifically exempt.",
        ],
      },
      {
        h2: "Do you need a permit for a business sign",
        answer:
          "In most cases, yes. Permanent business signs generally need a building permit, and illuminated signs also need an electrical permit. In unincorporated Palm Beach County, every sign not specifically exempted needs a building permit, and exempt signs using electricity still need an electrical permit. Municipal rules differ, so check locally.",
        body: [
          "The county code also requires that every permitted sign be marked with its permit number in figures at least one inch tall, and it treats unpermitted non-exempt signs as illegal. Changing the copy or graphics on an existing permitted sign is not treated as an alteration under the county code, but enlarging, relocating or structurally changing it is.",
          "Some small signs are exempt. In unincorporated areas, window signs covering no more than 20 percent of each window or glass door are exempt from review and building permits. Cities set their own exemptions, which is why the same window graphic can be fine in one town and need a permit in the next.",
        ],
      },
      {
        h2: "What approvals do you need before the permit",
        answer:
          "Before any government permit, you usually need approval from whoever controls the property: the landlord, the shopping center's sign criteria, a property owners association or a condo association. Larger developments often have a master sign plan that fixes size, placement, colors and letter styles. Private approval never replaces the government permit.",
        body: [
          "Palm Beach County's code defines a master sign plan as a coordinated program of all signs on a development site, including locations, dimensions, colors, letter styles and sign types. Many cities use similar plans. If your center has one, your sign must fit it, and changing it can require its own approval.",
        ],
        list: [
          "Landlord or property manager written approval",
          "Shopping center sign criteria or master sign plan",
          "Property owners or condo association approval where it applies",
          "Any design review board required by the city or town",
        ],
      },
      {
        h2: "Which Palm Beach County towns have design review for signs",
        answer:
          "Several do, and the review can matter as much as the permit. The Town of Palm Beach, Boca Raton, Delray Beach and Wellington all involve appearance or architectural boards in some sign decisions, and historic districts add another layer. The table summarizes what each jurisdiction publishes. Confirm current rules directly before designing.",
        table: {
          head: ["Jurisdiction", "Who is involved", "What they publish"],
          rows: [
            [
              "Town of Palm Beach",
              "Architectural Commission (ARCOM) or Landmarks Preservation Commission",
              "Code requires a permit and architectural review to erect, alter or illuminate a sign; some compliant temporary signs are exempt",
            ],
            [
              "Boca Raton",
              "Community Appearance Board",
              "Signs come under close scrutiny; sign code in Chapter 24 was rewritten in 2020; temporary signs generally limited to 45 days in 365",
            ],
            [
              "Delray Beach",
              "Site Plan Review and Appearance Board or Historic Preservation Board",
              "New signs and face changes need a sign permit; historic district signs need a building permit and may need a Certificate of Appropriateness",
            ],
            [
              "Wellington",
              "Architectural Review Board",
              "Reviews multifamily and non-residential development, and ARB approval can include signage",
            ],
            [
              "West Palm Beach",
              "Development Services",
              "Sign regulations in Article XIII of the zoning code; downtown also governed by Downtown Master Plan regulations",
            ],
            [
              "Unincorporated county",
              "Zoning and Building divisions",
              "ULDC Article 8 governs signs; master sign plans for developments subject to review",
            ],
          ],
        },
      },
      {
        h2: "Does a large sign need engineering",
        answer:
          "Often, yes. Signs and their supports must meet the Florida Building Code, which accounts for hurricane-force wind loads. For freestanding, monument and larger wall signs, expect the building department to ask for structural details, and in many cases engineered drawings. Ask your jurisdiction what triggers engineering before you finalize size and mounting.",
        body: [
          "Palm Beach County's code states that unless exempt, signs and supporting structures shall be installed in accordance with the Florida Building Code, and that all signs must be maintained in their permitted condition. Structural requirements are one reason a sign that looks simple can take longer and cost more than expected.",
        ],
      },
      {
        h2: "What goes into a sign permit application",
        answer:
          "Most sign permit applications ask for a site plan showing where the sign goes, drawings with dimensions and sign area, construction and attachment details, electrical details for lit signs, and proof of property owner approval. Some also require structural calculations and copies of any board approvals. Exact submittals vary by city.",
        list: [
          "Site plan or storefront elevation showing sign location",
          "Scaled sign drawing with dimensions, colors and materials",
          "Sign area calculation against what the code allows",
          "Attachment and structural details",
          "Electrical details and a separate electrical permit for lit signs",
          "Landlord or property owner authorization",
          "Copies of any design review or historic approvals",
        ],
      },
      {
        h2: "How long does sign approval take",
        answer:
          "It depends on the jurisdiction and whether a board has to review the sign. A straightforward permit in a plaza with an approved master sign plan moves faster than a sign that needs design review, a waiver or a historic approval tied to a board's meeting calendar. Build review time into any opening date.",
        body: [
          "For unincorporated areas, the county's code sets a 30-day window for the Zoning Division to complete its review once a complete building permit application is submitted. Incomplete applications restart the clock in practice, so accuracy up front saves the most time.",
        ],
      },
      {
        h2: "Why do sign approvals get delayed",
        answer:
          "Most delays come from avoidable mistakes: designing before checking the code, missing landlord approval, sign area calculations that exceed the limit, incomplete drawings, or not realizing a design review board is involved. Fabricating before approval is the most expensive mistake, because a rejected sign has to be rebuilt or modified.",
        list: [
          "Sign is larger than the code or master sign plan allows",
          "Landlord or association approval missing",
          "Wrong jurisdiction assumed from the mailing address",
          "Incomplete drawings or missing structural details",
          "Lighting that does not meet local rules",
          "Board review not scheduled into the timeline",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I put up a temporary banner while my permanent sign is approved?",
        a: "Often, within limits set by your jurisdiction. In unincorporated Palm Beach County, a temporary cover over a permanent sign can stay up to 30 days after a change of ownership or up to 90 days after a building permit is issued. Boca Raton generally limits temporary signs to 45 days in a 365-day period. Check your city's temporary sign rules first.",
      },
      {
        q: "Do window graphics need a permit in Palm Beach County?",
        a: "Sometimes. In unincorporated Palm Beach County, window signs covering no more than 20 percent of each window or glass door are exempt from review and building permits. Cities and towns set their own limits, and some, like the Town of Palm Beach, review signs closely. Confirm with your city before covering glass with graphics.",
      },
      {
        q: "Does landlord approval replace the city sign permit?",
        a: "No. Landlord, shopping center or association approval is a private requirement, and the government permit is a separate legal one. You usually need both, and most permit applications ask for proof of the owner's authorization. Get the landlord's written approval first, then apply for the permit with that approval attached.",
      },
      {
        q: "Who pulls the sign permit, the business owner or the sign company?",
        a: "In most cases the sign contractor handling fabrication and installation pulls the permit, because the application requires construction and installation details. Confirm this in your contract. Whoever pulls it, the business owner should see the approved drawings before fabrication so there are no surprises on install day.",
      },
      {
        q: "Are new billboards allowed in Palm Beach County?",
        a: "Not in unincorporated Palm Beach County. The county's code prohibits new billboards and similar off-site signs there, while allowing certain existing registered billboards to be maintained, relocated or replaced under specific rules. Municipalities set their own policies, so check with the city if your property is inside one.",
      },
    ],
    related: ["signs", "branding", "print", "vehicle-wraps"],
    sources: [
      { label: "Palm Beach County ULDC Article 8: Signage (PDF)", href: "https://pbc.gov/uldc/pdf/Article8.pdf" },
      { label: "Palm Beach County: Municipalities", href: "https://discover.pbc.gov/pages/municipalities.aspx" },
      { label: "Town of Palm Beach: Planning, Zoning and Development Review", href: "https://townofpalmbeach.com/1292/Planning-Zoning-Development-Review" },
      { label: "Town of Palm Beach Code: Article XI Signs", href: "https://library.municode.com/fl/palm_beach/codes/code_of_ordinances?nodeId=PTIICOOR_CH134ZO_ARTXISI_DIV2REDI_S134-2401SCDI" },
      { label: "City of Boca Raton: Community Appearance Board", href: "https://myboca.us/378/Community-Appearance-Board" },
      { label: "City of Boca Raton: Sign Information", href: "https://www.myboca.us/1250/Sign-Information" },
      { label: "City of Delray Beach: Signs", href: "https://www.delraybeachfl.gov/government/city-departments/development-services/zoning-current-planning/signage" },
      { label: "Village of Wellington: Architectural Review Board", href: "https://www.wellingtonfl.gov/303/Architectural-Review-Board" },
      { label: "City of West Palm Beach: Article XIII Sign Regulations", href: "https://online.encodeplus.com/regs/westpalmbeach-fl/doc-viewer.aspx?secid=687" },
      { label: "AOL: How to Tell if You Live in Lake Worth or Lake Worth Beach", href: "https://www.aol.com/articles/tell-live-lake-worth-lake-190318000.html" },
    ],
  },
  {
    slug: "get-found-in-ai-search-local-business",
    title: "How a Palm Beach Business Gets Found in ChatGPT and Google AI Answers",
    description:
      "A practical guide to showing up in Google AI Overviews, AI Mode and ChatGPT: Business Profile, entity consistency, reviews, answer-first pages, schema, PR.",
    published: "2026-09-28",
    updated: "2026-09-28",
    summary:
      "There is no secret AI switch. Google says there are no special requirements to appear in AI Overviews or AI Mode beyond being indexed and eligible for a snippet, and it does not use llms.txt. What works is the unglamorous foundation: a complete Google Business Profile, the same name, address and phone everywhere, real reviews, pages that answer questions directly, accurate structured data and coverage in sources that AI tools trust. Do those well and you give every AI assistant good material to cite.",
    sections: [
      {
        h2: "How do AI search tools decide which local businesses to mention",
        answer:
          "AI answers are built from sources the tool can find and trust. Google's AI Overviews and AI Mode draw on Google's search index and business data. ChatGPT search uses its own crawler plus other sources. In both cases, businesses with clear, consistent, well reviewed information across many trusted places are easier to mention.",
        body: [
          "Google describes a technique it calls query fan-out, where its AI features run multiple related searches across subtopics and data sources to build an answer. That means your business can be surfaced through many angles: a service page, a review site, a news story or your Business Profile.",
          "For ChatGPT, OpenAI says its OAI-SearchBot crawler is used to surface websites in ChatGPT's search features, and it recommends allowing that crawler in robots.txt. Sites that block it will not appear in ChatGPT search answers, though they may still show as navigation links.",
        ],
      },
      {
        h2: "Do you need special optimization for Google AI Overviews",
        answer:
          "No. Google states there are no additional requirements to appear in AI Overviews or AI Mode and no special optimizations needed. A page must be indexed and eligible to show with a snippet. The same foundations that help classic search help here: crawlable pages, helpful content, good page experience and current business information.",
        body: [
          "Be skeptical of anyone selling a secret AI ranking formula. The practical work is ordinary search hygiene done thoroughly, plus a clear answer to the questions your customers actually ask.",
        ],
      },
      {
        h2: "Why does Google Business Profile matter for AI answers",
        answer:
          "Your Google Business Profile is the most direct source of truth Google has about your business. Google says local results are based mainly on relevance, distance and prominence, and it recommends complete information, verification, accurate hours, replies to reviews and real photos. Google also states there is no way to pay for better local ranking.",
        list: [
          "Verify the profile and keep ownership in the company's hands",
          "Choose the most accurate primary category and relevant secondary ones",
          "Fill in services, service areas, hours, holiday hours and attributes",
          "Add real photos of your work, team, vehicles and location",
          "Reply to reviews, both positive and negative",
          "Keep the business name exactly as it appears in the real world",
        ],
      },
      {
        h2: "What is entity consistency and why does it matter",
        answer:
          "Entity consistency means your business name, address, phone number and short description are identical everywhere they appear: website, Google, Apple and Bing listings, directories, social profiles and state records. Consistent details make it easier for search engines and AI tools to recognize every mention as the same business and trust the information.",
        body: [
          "Palm Beach County has a built-in trap. Mailing cities do not always match municipalities. The Postal Service uses Lake Worth for six ZIP codes even though the city is now Lake Worth Beach and most of those ZIP codes cover other towns. Pick the correct, official version of your address and use it the same way everywhere.",
          "The same goes for your name. If your sign says one thing, your website another and your state registration a third, you are asking machines to guess.",
        ],
      },
      {
        h2: "Do reviews and directories affect AI recommendations",
        answer:
          "They help. Google says prominence is based partly on how many websites link to your business and how many reviews you have, and more reviews and positive ratings can help local ranking. AI tools also cite third-party review sites and industry directories, so accurate listings on the platforms your customers use add credible sources.",
        body: [
          "Focus on quality over volume. A steady stream of genuine reviews that mention the specific service and the town is more useful than a burst of generic five-star comments. Never buy reviews or gate them, which violates platform policies and damages trust.",
        ],
        list: [
          "Ask every satisfied customer for a review, with a direct link",
          "Reply to every review with specifics",
          "Claim and correct listings on Apple, Bing, Yelp and the Better Business Bureau",
          "Join the industry directories your buyers actually browse",
          "Keep every listing's name, address and phone identical to your website",
        ],
      },
      {
        h2: "How should you structure pages so AI can quote them",
        answer:
          "Write pages that answer real questions directly. Use headings phrased the way customers ask, put a short plain answer immediately under each heading, then add detail, examples, prices or ranges where honest, and a date showing when the page was updated. Clear structure helps readers first and makes accurate quoting easier for AI.",
        list: [
          "One page per core service, with the service and area in the title",
          "Headings phrased as the questions customers ask",
          "A 40 to 60 word direct answer under each heading",
          "Tables for comparisons and price ranges, with sources",
          "Named people, real photos and specific local details",
          "A visible updated date",
        ],
      },
      {
        h2: "Do schema markup and llms.txt help with AI search",
        answer:
          "Schema helps machines read your facts but is not an AI ranking switch. Google says no special structured data is required for AI features, and that markup should match visible page text. On llms.txt, Google clarified in June 2026 that Search does not use it. It costs little to add but should not be relied on.",
        body: [
          "Structured data is still worth doing well. Google's local business markup requires a name and address and recommends details such as geo coordinates, hours, telephone and URL. Organization, service and FAQ markup can describe the rest. The rule that matters is accuracy: every property should match what a visitor can see on the page.",
        ],
      },
      {
        h2: "Why does earned media help you show up in AI answers",
        answer:
          "Coverage in trusted publications gives AI tools independent sources that describe your business. A mention in a local newspaper, a business journal, a trade publication or a respected industry site adds credibility that your own website cannot. It also contributes to prominence, which Google names as a local ranking factor through links and mentions.",
        body: [
          "This is where public relations and search meet. A well placed story, a byline from your founder or a quote in a trade article can be retrieved and cited for years. The goal is not volume. It is being described accurately in the places your customers and AI tools already trust.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I pay to get my business recommended by ChatGPT or Google AI?",
        a: "You cannot pay for organic placement in Google's local results, and Google says so directly. Where AI products show paid placements, they are advertising and separate from organic answers. The reliable path to being mentioned is the same as for search: accurate listings, real reviews, useful pages and credible coverage in sources the tools already trust.",
      },
      {
        q: "Should I block AI crawlers from my website?",
        a: "Only if you are willing to disappear from those tools. OpenAI says sites that block its OAI-SearchBot crawler will not appear in ChatGPT search answers, apart from navigation links. OpenAI lists separate crawlers for search and for model training, so you can allow search while making a separate choice about training. Review your robots.txt before blocking anything.",
      },
      {
        q: "How long does it take to show up in AI answers?",
        a: "There is no fixed timeline. Pages must be crawled and indexed first, and profile, review and listing improvements build over weeks and months. OpenAI notes robots.txt changes can take about 24 hours to take effect in its systems. Treat AI visibility as the result of steady search, reputation and PR work rather than a single switch.",
      },
      {
        q: "Do I need a separate page for every town I serve?",
        a: "Only when you have something genuinely specific to say about that town. Pages that swap the town name into the same template tend to be ignored by readers and search engines. A strong town page covers local projects, specific neighborhoods, relevant rules and the questions customers there actually ask.",
      },
      {
        q: "How do I check whether AI tools mention my business?",
        a: "Ask them the questions your customers ask, such as which firms handle a service in your town, and record what they say. Test in a signed out or fresh session, try several phrasings and check monthly. Note which sources the tools cite, then improve your presence on those sources.",
      },
    ],
    related: ["digital-marketing", "public-relations", "web-design", "branding"],
    sources: [
      { label: "Google Search Central: AI Features and Your Website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google Business Profile Help: Tips to Improve Your Local Ranking", href: "https://support.google.com/business/answer/7091?hl=en" },
      { label: "Google Search Central: Local Business Structured Data", href: "https://developers.google.com/search/docs/appearance/structured-data/local-business" },
      { label: "OpenAI: Overview of OpenAI Crawlers", href: "https://developers.openai.com/api/docs/bots" },
      { label: "TechWyse: Google Says llms.txt Will Not Help Rankings (June 2026)", href: "https://www.techwyse.com/news/ai-search/google-llms-txt-no-ranking-benefit-june-2026" },
      { label: "AOL: How to Tell if You Live in Lake Worth or Lake Worth Beach", href: "https://www.aol.com/articles/tell-live-lake-worth-lake-190318000.html" },
    ],
  },
]

/* Lead with the strategic guides; the trade guides follow. */
const ORDER = [
  "get-found-in-ai-search-local-business",
  "choosing-a-pr-firm-west-palm-beach",
  "branding-agency-vs-marketing-agency",
  "business-sign-permits-palm-beach-county",
  "vehicle-wrap-cost-palm-beach-county",
]
export const guides: Guide[] = [...all].sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug))

export const guideBySlug = (s: string) => guides.find((g) => g.slug === s)
