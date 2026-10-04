import type { Guide } from "./types"

/**
 * Guides for the websites and software cluster. Every fact is from a primary
 * or named published source opened and checked 2026-10-04.
 * Copy laws: VOICE.md (no em/en dashes, no commas in title or h2 fields).
 * Market ranges are published third-party figures, never Epic Wolf prices.
 * Government filing fees, platform plan prices and future compliance dates
 * are left out on purpose: they change.
 */

const SUNBIZ = "https://dos.fl.gov/sunbiz/search/"
const ICANN_FAQ = "https://www.icann.org/resources/pages/faqs-84-2012-02-25-en"
const ICANN_RIGHTS = "https://www.icann.org/resources/pages/benefits-2013-09-16-en"
const ADA_WEB = "https://www.ada.gov/resources/web-guidance/"
const WCAG = "https://www.w3.org/WAI/standards-guidelines/wcag/"
const SITE_MOVE = "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
const REDIRECTS = "https://developers.google.com/search/docs/crawling-indexing/301-redirects"
const FTC_SECURITY = "https://www.ftc.gov/business-guidance/resources/start-security-guide-business"

export const webGuides: Guide[] = [
  {
    slug: "website-cost-palm-beach-county",
    title: "What Does a Website Cost in Palm Beach County",
    description:
      "Published market ranges for a business website plus what drives the price: page types, content, ecommerce, integrations, software and ongoing costs.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Clutch reports that most web design projects reviewed on its platform cost less than $10,000, while the average is $38,105 because a few large builds pull it up. WebFX publishes $3,000 to $30,000 or more for agency design and $10,000 to $50,000 or more for ecommerce and large sites. No survey isolates Palm Beach County, so these are national figures and not our pricing. What decides your number is scope: how many distinct page layouts, who creates the content, and whether the site only presents information or has to sell, book, log people in and talk to other systems.",
    sections: [
      {
        h2: "What published sources say a website costs",
        answer:
          "Clutch says most web design projects reviewed on its platform cost less than $10,000 and that agencies typically charge $2,000 to $100,000 depending on scope. WebFX publishes $3,000 to $30,000 or more for agency design. These are typical published market ranges from national sources. They are not Epic Wolf prices.",
        body: [
          "The two sources measure different things. Clutch builds its figures from client reviews of agencies on its own platform. WebFX publishes ranges on a pricing page it says draws on spending shared by more than 2,000 businesses. Neither isolates Palm Beach County or Florida, and neither can tell you what your project should cost. They tell you what is normal enough to be published.",
          "Read the gap between Clutch's common project size and its average carefully. An average of $38,105 next to a most common size under $10,000 means a small number of large builds sit far above everyone else. Plan around the range that matches your scope, not the average.",
        ],
        table: {
          head: ["What is being priced", "Typical published market range", "Source"],
          rows: [
            ["Most common web design project size", "Less than $10,000", "Clutch"],
            ["Average web design project", "$38,105", "Clutch"],
            ["What agencies typically charge overall", "$2,000 to $100,000", "Clutch"],
            ["US web design firm hourly rate", "$100 to $149 an hour", "Clutch"],
            ["Small business website", "$100 to $5,000", "WebFX"],
            ["Freelancer design", "$500 to $10,000 or more", "WebFX"],
            ["Agency design", "$3,000 to $30,000 or more", "WebFX"],
            ["Ecommerce or large website", "$10,000 to $50,000 or more", "WebFX"],
          ],
        },
      },
      {
        h2: "Why page types matter more than page count",
        answer:
          "A website is priced by how many different layouts have to be designed and built, not by how many URLs exist. Forty service pages that share one layout cost far less than eight pages that each need their own design. Ask every bidder how many unique page types the quote covers.",
        body: [
          "A typical marketing site has a short list of true page types: home, a service or product layout, an about page, a contact page, an article layout and perhaps a location or case layout. Each one is designed, written for, built, tested on phones and checked for accessibility. Once a layout exists, adding another page that uses it is mostly a content job.",
          "This is why two quotes for a twenty-page site can sit far apart and both be honest. One bidder counted three layouts. The other counted nine. Neither is wrong until you ask what you are getting.",
        ],
      },
      {
        h2: "How content changes the budget",
        answer:
          "Content is the line most quotes leave vague. Someone has to write every page, and someone has to supply or shoot the photography. If the agency does both, the price goes up and the timeline gets shorter. If you do both, the price drops and the project waits on you.",
        list: [
          "Copywriting: whether the quote includes writing or expects finished text from you",
          "Photography and video: original shoots versus stock versus images you already own",
          "Migration: how many existing pages and articles have to be moved and cleaned up",
          "Approvals: how many people sign off on words before a page is final",
          "Regulated copy: finance, legal and medical pages that need a compliance review",
          "Languages: each added language is a second set of content to write and maintain",
        ],
      },
      {
        h2: "What ecommerce and integrations add",
        answer:
          "Selling online and connecting to other systems are where a website stops being a set of pages. Product catalogs, checkout, tax, shipping, bookings, CRM connections and payment processing each add design, build and testing work. WebFX's published range for ecommerce and large sites starts where its agency design range is already well underway.",
        body: [
          "Integrations are priced by how well the other system cooperates. A booking tool with a documented way to connect is a small job. A legacy system with no documentation is a research project with a build attached. Before you ask for a quote, list every system the site has to send data to or read data from, and who at that vendor can answer technical questions.",
          "A storefront on Worth Avenue with forty products and a marine supplier with four thousand part numbers are both ecommerce. They are not the same project.",
        ],
      },
      {
        h2: "When the project is really custom software",
        answer:
          "If people log in, see their own records, pay invoices, upload documents or move work through steps, you are buying software, not a website. Software is scoped by workflows and user roles rather than pages, and it is normally built in phases so a useful first version goes live before the full plan is finished.",
        body: [
          "The published website ranges above do not describe this kind of work. A customer portal or an internal tool has security, permissions, data storage and ongoing support obligations that a marketing site does not. Our guide to websites versus web apps versus custom software walks through how to tell which one you need.",
        ],
      },
      {
        h2: "What you pay for after launch",
        answer:
          "Every website has running costs. The domain renews each year. Hosting is billed monthly or annually. Builders and store platforms charge subscription fees and often take a share of each sale. A care plan covers updates, backups, monitoring and small changes. Ask for each of these in writing before you sign.",
        body: [
          "Ownership matters as much as the amount. ICANN says the registrant is the person or entity that holds the rights to a domain name, and warns that a developer who registers a name for you may have used their own contact details. Make sure the domain, the hosting account and the analytics are in your company's name, with the agency added as a user.",
        ],
        list: [
          "Domain registration, renewed annually and held in your own registrar account",
          "Hosting, sized to traffic and to what the site has to do",
          "Platform subscriptions and payment processing on builders and store platforms",
          "Licenses for fonts, plugins, stock photography and third-party tools",
          "A care plan for updates, backups, monitoring and small edits",
          "New content, which is what keeps a site earning search traffic",
        ],
      },
      {
        h2: "How to compare website quotes fairly",
        answer:
          "Put the quotes side by side by scope, not by total. Line up the number of page types, who writes the copy, who supplies photography, which integrations are included, how many revision rounds you get, who owns the code and accounts, and what is billed after launch. The cheapest total often covers the least work.",
        body: [
          "Geography is a weak predictor. Clutch reports the same $100 to $149 hourly band for web design firms across the United States, so a West Palm Beach quote and a quote from another state should be judged on the same questions. What a local firm adds is the ability to sit in your office on Clematis Street or PGA Boulevard, photograph the real place and understand who walks through the door in season.",
        ],
        list: [
          "An itemized list of page types and features",
          "Copywriting and photography stated as included or excluded",
          "Every integration named, with who is responsible for each",
          "Redirects from the old site if this is a redesign",
          "Accessibility work described, not assumed",
          "Written ownership of the domain, code, content and accounts",
          "Ongoing costs listed separately from the build",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a published average price for a website in Palm Beach County?",
        a: "No published survey isolates Palm Beach County. The closest benchmarks are national: Clutch reports that most web design projects reviewed on its platform cost less than $10,000 and average $38,105, and WebFX publishes $3,000 to $30,000 or more for agency design. Treat those as typical published market ranges and let the scope of your own project decide where you fall.",
      },
      {
        q: "Why did two agencies quote such different prices for the same website?",
        a: "They almost certainly priced different scopes. One may have counted three page layouts and assumed you would write the copy, while the other counted nine layouts and included writing, photography and redirects. Ask each bidder to list page types, content responsibilities, integrations and post-launch costs. Once the lists match, the totals usually move much closer together.",
      },
      {
        q: "What ongoing website costs should a business expect?",
        a: "Expect a domain renewal each year, hosting, any platform or software subscriptions, payment processing if you sell online, and a care plan if someone else maintains the site. Published figures for these vary so widely that a single number would mislead. Ask your builder to itemize each recurring cost and name the account it is billed through.",
      },
      {
        q: "Does a more expensive website rank higher on Google?",
        a: "No. Price does not rank a website. Search performance comes from pages that answer what people are looking for, load quickly, work on phones and can be crawled and indexed. A modest site with clear, specific content will outperform an expensive one that says little. Budget for content and upkeep, not only for design.",
      },
    ],
    related: ["web-design", "digital-marketing", "branding"],
    sources: [
      { label: "Clutch: Web Design Company Pricing Guide (updated September 2026)", href: "https://clutch.co/web-designers/pricing" },
      { label: "WebFX: How Much Does a Website Cost in 2026", href: "https://www.webfx.com/web-design/pricing/website-costs/" },
      { label: "ICANN: FAQs for domain name registrants", href: ICANN_FAQ },
    ],
  },

  {
    slug: "how-to-choose-a-web-design-company-palm-beach-county",
    title: "How to Choose a Web Design Company in Palm Beach County",
    description:
      "What to check before you hire a web design company: who writes the copy, who owns the domain and code, Sunbiz records, redirects, accessibility and support.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Choose on proof and paperwork, not on the portfolio alone. Confirm the company is a real, active Florida business on Sunbiz. Get it in writing that the domain is registered to you, that you own the code and content, and that every account is in your name. Ask who writes the copy, how leads reach you, what happens to your old URLs and what support looks like after launch. Then call two references and ask what went wrong and how it was handled.",
    sections: [
      {
        h2: "Verify the company on Sunbiz first",
        answer:
          "Search the company on Sunbiz, the Florida Division of Corporations site, before the first meeting. It is the state's official business entity index. You can search by name, by officer or registered agent, or by document number, and it also lists fictitious names, which is how many agencies trade.",
        body: [
          "A two-minute search tells you whether the entity exists, whether its status is active, who its officers are and what address it files under. If the agency trades under a brand name, search the fictitious name records too and confirm who owns it. The name on your contract should match an entity you can find.",
          "The Palm Beach County Tax Collector also states that any person selling merchandise or services in the county must have a local business tax receipt, including home-based businesses. It is reasonable to ask a local firm for theirs. A company based elsewhere will have the equivalent from its own state or county.",
        ],
      },
      {
        h2: "Who will own the domain and the accounts",
        answer:
          "You should. ICANN describes the registrant as the person or entity that holds the rights to a domain name, and warns that a developer hired to manage a domain may have registered it with their own contact details. Insist the domain sits in your registrar account under your company's name.",
        body: [
          "ICANN's guidance goes further: if a third party registered the name, you may need proof of payment to show your registrar that you are the rightful holder. That is a dispute nobody wants during a vendor breakup. Its registrant rights document also makes you responsible for keeping contact details accurate and payment information current, which you cannot do for an account you cannot log in to.",
          "Apply the same rule to everything else: hosting, analytics, Search Console, the Google Business Profile, the email platform and any ad accounts. The business owns each one. The agency is added as a user and can be removed in a minute.",
        ],
        list: [
          "Domain registrar account, in the company's name",
          "Hosting and deployment accounts",
          "Analytics and Search Console properties",
          "Google Business Profile ownership",
          "Email, CRM and form tools",
          "Source code and design files, with a written transfer",
        ],
      },
      {
        h2: "Who actually writes the words",
        answer:
          "Ask this before anything about design. Many website quotes assume the client supplies finished copy, and most clients never do, so the launch stalls or the site goes live with filler. Find out whether writing is included, who does it, how they learn your business and how many rounds of edits are covered.",
        body: [
          "The words do most of the selling and most of the ranking. A firm that designs first and asks for text later is building a container. A firm that interviews you, drafts the pages and then designs around what needs to be said is building a sales tool. Ask to see a page they wrote, not only pages they designed.",
        ],
      },
      {
        h2: "How leads will reach you",
        answer:
          "Have the company show you exactly where a form submission goes, who gets it, how fast and what happens if the email fails. A website that looks right and drops inquiries is worse than an ugly one that delivers them. Ask about call tracking, spam filtering and a record of every submission.",
        list: [
          "Which inbox or CRM each form delivers to, and who can change it",
          "Whether submissions are also stored somewhere in case an email bounces",
          "How phone calls from the site are counted",
          "What spam protection is used and whether it blocks real people",
          "Whether you get a test submission report before launch",
          "Who is alerted if a form stops working",
        ],
      },
      {
        h2: "What happens to your old site in a redesign",
        answer:
          "Ask for the redirect plan in writing. Google's own documentation on site moves tells owners to map old URLs to new ones, use permanent redirects, avoid redirect chains and keep the redirects in place for as long as possible, generally at least a year. A company that cannot describe this will cost you traffic.",
        body: [
          "This is the single most common way a redesign damages a business. The new site launches, the old addresses stop working, and the pages that had earned search traffic for years return errors. Ask who builds the URL map, who tests it on launch day and who watches Search Console afterward.",
        ],
      },
      {
        h2: "How they handle accessibility",
        answer:
          "Ask which standard they build to and how they test. The Department of Justice says the ADA applies to the websites of businesses open to the public, and it points to the Web Content Accessibility Guidelines as existing technical guidance. A credible answer names WCAG and describes manual testing, not only a scanner.",
        body: [
          "Be cautious if the answer is a widget. The Federal Trade Commission ordered one overlay vendor to pay $1 million over claims that its automated tool could make any site meet WCAG. Accessibility is built into the design, the code and the content, then checked by a person using a keyboard and a screen reader.",
        ],
      },
      {
        h2: "What to ask about life after launch",
        answer:
          "Get the post-launch arrangement in writing: who hosts the site, who applies updates, how fast a broken form gets fixed, what a small change costs and how you leave if you want to. The best time to agree on the exit is before you sign, while everyone is still friendly.",
        body: [
          "Then check references properly. Ask a past client what went wrong during the project and how the firm handled it, whether the launch date held, and whether they can edit the site themselves today. Ask whether the people in the pitch were the people who did the work. In a county where a lot of business still moves by referral, a firm with nothing to hide will hand over names without hesitation.",
        ],
        list: [
          "Hosting and care plan terms, with the monthly scope spelled out",
          "Response time for something broken versus something requested",
          "Whether your team can edit pages without a developer",
          "Who holds backups and how a restore works",
          "The handover process if you move to another vendor",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I check that a Florida web design company is legitimate?",
        a: "Search its name on Sunbiz, the Florida Division of Corporations site, which is the state's official business entity index. Confirm the entity exists, that its status is active and that the officers match the people you are dealing with. Search fictitious names as well if the firm trades under a brand. Then ask for two client references you can call.",
      },
      {
        q: "Should my web designer register my domain name for me?",
        a: "They can help, but the registration should be in your name and in an account you control. ICANN notes that a developer who manages a domain for a client may have registered it using their own contact details, which can make them the registrant of record. If that has already happened, ask your registrar how to correct it and keep your payment records.",
      },
      {
        q: "Do I need to hire a web design company located in Palm Beach County?",
        a: "No. Good website work can be done from anywhere, and you should hire on scope, proof and ownership terms. A nearby firm does make some things easier: meeting in person, photographing the real location and knowing how seasonal the local market is. Epic Wolf is based in West Palm Beach and works with businesses across South Florida and nationally.",
      },
      {
        q: "What should a website contract include?",
        a: "A website contract should list the deliverables by page type and feature, state who provides copy and images, set the number of revision rounds, name every recurring cost and transfer ownership of the code, content and design files to you on payment. It should also say the domain and accounts are yours. Have an attorney review anything you are unsure about.",
      },
    ],
    related: ["web-design", "digital-marketing", "branding"],
    sources: [
      { label: "Florida Division of Corporations (Sunbiz): Search Records", href: SUNBIZ },
      { label: "ICANN: FAQs for domain name registrants", href: ICANN_FAQ },
      { label: "ICANN: Registrants' Benefits and Responsibilities", href: ICANN_RIGHTS },
      { label: "Palm Beach County Tax Collector: Local Business Tax", href: "https://www.pbctax.gov/local-business-tax/" },
      { label: "Google Search Central: Site moves with URL changes", href: SITE_MOVE },
      { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: ADA_WEB },
      { label: "FTC: Final order requiring accessiBe to pay $1 million", href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million" },
    ],
  },

  {
    slug: "custom-website-vs-website-builder",
    title: "Custom Website vs Website Builder",
    description:
      "Wix, Squarespace, Shopify and WordPress compared with a custom build: what each platform's own documentation says about export, ownership and limits.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "A builder is the right call when the business is new, the budget is small and the site only has to present information or sell a simple catalog. A custom build earns its cost when the site has to be distinctive, fast, connected to other systems or grown into software. The question most owners skip is portability. Wix says a Wix site must be hosted on Wix. Squarespace exports only some content. Shopify exports products as a spreadsheet. WordPress is open source and exports its content. Know what you can take with you before you build.",
    sections: [
      {
        h2: "When a website builder is the right choice",
        answer:
          "Use a builder when you need to be online this month, the offer is still changing and the site's job is to state who you are, what you do and how to reach you. A clean template with real photos and clear words beats a custom project that never launches.",
        list: [
          "A new business still testing its offer and its prices",
          "A simple brochure site with a handful of pages",
          "A small product catalog with standard checkout needs",
          "An event, a pop-up or a short campaign",
          "An owner who wants to edit everything personally",
          "A budget better spent on photography and copy than on code",
        ],
        body: [
          "There is no shame in it. A new boutique on Atlantic Avenue or a consultant leaving a larger firm does not need a custom platform on day one. They need a credible page, a way to be contacted and a Google Business Profile. Spend on the words and the pictures, which move with you to whatever comes next.",
        ],
      },
      {
        h2: "What each platform lets you take with you",
        answer:
          "Portability differs sharply by platform. Wix says a Wix site cannot be hosted elsewhere. Squarespace exports some pages and one blog as a WordPress file. Shopify exports product data as a CSV without images. WordPress exports posts, pages, comments and users. Your domain and your original content stay yours on all four.",
        table: {
          head: ["Platform", "What its own documentation says", "What that means when you leave"],
          rows: [
            ["Wix", "A Wix site needs to be hosted and operated on Wix's servers because it relies on Wix's proprietary technology. Blog posts cannot currently be exported to other platforms. Store products export to a CSV file", "Plan on rebuilding the design and re-entering most content"],
            ["Squarespace", "Exports layout pages, one blog page with its posts, text blocks and image blocks as a WordPress XML file. Store pages, product blocks, style settings and custom CSS do not export", "Text and a blog move; the design and the store do not"],
            ["Shopify", "Exports products to a CSV file for backup or for moving to another store. Product images are not included in the file", "Catalog data moves; the theme and checkout stay behind"],
            ["WordPress", "Open source under the GPL. The export tool creates an XML file with posts, pages, comments, custom fields, categories, tags and users", "Content moves to another WordPress host; themes and plugins are separate"],
          ],
        },
        body: [
          "None of this makes a platform bad. It means the design you pay for on a hosted builder lives on that builder. Wix's help center says the content you create belongs to you under its terms, and Shopify's terms say materials you owned before uploading remain yours. What you cannot move is the platform's own machinery.",
        ],
      },
      {
        h2: "Where builders start to hold a business back",
        answer:
          "Builders strain when the site has to do something the platform did not plan for: an unusual layout, a connection to an industry system, a customer login, complex pricing or page speed the template cannot reach. The sign is a growing pile of plugins and workarounds that nobody wants to touch.",
        list: [
          "The design looks like other sites in your category built on the same template",
          "A needed integration exists only as a third-party add-on with its own subscription",
          "Pages slow down as apps and scripts accumulate",
          "Staff avoid editing because changes break the layout",
          "The business needs logins, portals or workflows the platform does not offer",
          "Monthly platform and app fees have quietly become a real line item",
        ],
      },
      {
        h2: "What WordPress is and is not",
        answer:
          "WordPress is open source software, licensed under the GPL, that you install on hosting you choose. Its own site says it is the platform of choice for over 43 percent of all sites on the web. That freedom is real, and so is the upkeep: themes, plugins and the core software all need regular updates.",
        body: [
          "WordPress sits between a hosted builder and a custom build. You can move a WordPress site from one host to another, which you cannot do with Wix. In exchange, you or someone you pay is responsible for security updates, backups and plugin conflicts. Most WordPress problems are not WordPress problems. They are maintenance that stopped.",
          "A custom theme on WordPress can be an excellent answer for a content-heavy site whose team wants a familiar editor. A purchased theme with thirty plugins is a builder with more ways to break.",
        ],
      },
      {
        h2: "When Shopify beats a custom store",
        answer:
          "For most stores, a hosted commerce platform is the sensible default. Checkout, payments, tax, inventory and security are solved problems that a platform maintains for every merchant at once. A custom store makes sense when the catalog, pricing or buying process is unusual enough that the platform fights you.",
        body: [
          "Epic Wolf builds stores on Shopify or as a custom build, and the honest starting question is which one the business actually needs. A retailer with a normal catalog should not pay to reinvent checkout. A distributor with customer-specific pricing, quotes and account logins may need something a standard store was never designed to do.",
        ],
      },
      {
        h2: "What a custom build actually buys you",
        answer:
          "A custom build buys control: a design made for your brand alone, pages built for speed, structure that search engines and AI assistants read cleanly, and the freedom to connect or add anything later. You own the code and can host it where you choose. You also take on a larger upfront cost.",
        body: [
          "The less obvious benefit is the path forward. A custom site can grow a quote calculator, a booking flow or a client login without changing platforms. That matters for firms that expect the website to become part of how the business operates, which is common among the professional, real estate and marine companies in this county.",
          "The risk is dependence on whoever built it. Protect yourself the same way you would with any vendor: the code in a repository you own, the hosting in your name, documentation and an editor your staff can use.",
        ],
      },
      {
        h2: "A fair way to decide",
        answer:
          "Decide by what the site must do in the next two years, not by what feels more serious. If it presents and collects inquiries, a builder may be enough. If it has to differentiate a premium brand, connect to your systems or become software, build custom. Either way, own the domain.",
        table: {
          head: ["If this describes you", "Lean toward"],
          rows: [
            ["New business, small budget, offer still changing", "A builder"],
            ["Standard online store with a normal catalog", "Shopify or a similar platform"],
            ["Content-heavy site with a team that publishes often", "WordPress with a custom theme or a custom build"],
            ["Premium brand where the site must look like no one else", "A custom build"],
            ["Logins, portals, quoting, booking or system integrations", "A custom build"],
            ["You may switch vendors or platforms later", "Whichever option leaves the content and domain portable"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Can I move my Wix website to another host?",
        a: "No. Wix's help center says a Wix site needs to be hosted and operated on Wix's servers because it uses Wix's proprietary technology. It also says blog posts cannot currently be exported to other platforms, though store products can be exported to a CSV file. Moving away from Wix means rebuilding the site elsewhere and pointing your domain at the new one.",
      },
      {
        q: "Can I export a Squarespace site to WordPress?",
        a: "Partly. Squarespace exports certain content as a WordPress XML file, including layout pages, one blog page with its posts, text blocks and image blocks. Its documentation lists what does not export, including store pages, product blocks, style settings and custom CSS. Expect to move the words and rebuild the design, and copy your images before the old site is closed.",
      },
      {
        q: "Is WordPress free?",
        a: "The WordPress software is free and open source under the GPL, which grants the freedom to run, study, change and redistribute it. Running a WordPress site is not free. You pay for hosting, a domain, any premium themes or plugins and the time or care plan needed to keep everything updated and backed up.",
      },
      {
        q: "Will a website builder hurt my search rankings?",
        a: "Not by itself. Search engines rank pages, not platforms, and a well-written builder site can rank. The limits show up later: less control over page speed, structure and technical details, and templates shared with many other sites. If search is a main source of customers, those limits become a reason to move to a build you control.",
      },
    ],
    related: ["web-design", "digital-marketing", "branding"],
    sources: [
      { label: "Wix Help Center: Exporting or Embedding Your Wix Site Elsewhere", href: "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" },
      { label: "Wix Help Center: Exporting Blog Posts to Other Platforms", href: "https://support.wix.com/en/article/wix-blog-request-exporting-blog-posts-to-other-platforms" },
      { label: "Wix Help Center: Exporting Your Product List", href: "https://support.wix.com/en/article/wix-stores-exporting-your-product-list" },
      { label: "Squarespace Help Center: Exporting Your Site", href: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site" },
      { label: "Shopify Help Center: Exporting Products", href: "https://help.shopify.com/en/manual/products/import-export/export-products" },
      { label: "Shopify: Terms of Service", href: "https://www.shopify.com/legal/terms" },
      { label: "WordPress.org: Tools Export Screen", href: "https://wordpress.org/documentation/article/tools-export-screen/" },
      { label: "WordPress.org: About WordPress", href: "https://wordpress.org/about/" },
    ],
  },

  {
    slug: "website-accessibility-ada-florida",
    title: "Website Accessibility and the ADA for Florida Businesses",
    description:
      "What the ADA, the Department of Justice and WCAG say about website accessibility, why Florida businesses get sued and a practical checklist to start with.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "The Department of Justice says the ADA applies to the websites of businesses open to the public, but it has not issued a detailed technical standard for private businesses. Its 2024 rule sets WCAG 2.1 Level AA for state and local governments only. In practice, WCAG is the yardstick everyone uses. Florida is one of the busiest states for these lawsuits: Seyfarth Shaw counted 961 federal website accessibility suits here in 2025. This guide explains the rules and a practical checklist. It is not legal advice. If you receive a demand letter, call an attorney before you respond.",
    sections: [
      {
        h2: "What the ADA says about business websites",
        answer:
          "The Department of Justice's web guidance says Title III of the ADA prohibits discrimination by businesses open to the public and that an inaccessible website can limit access to a business's goods and services. The Department has no regulation setting detailed standards for businesses, but says its longstanding interpretation applies to web accessibility.",
        body: [
          "The same guidance says businesses have flexibility in how they comply with the ADA's general requirements of nondiscrimination and effective communication, and that they must comply. It points to the Web Content Accessibility Guidelines and the federal Section 508 standards as existing technical guidance.",
          "It also lists the barriers it sees most often: poor color contrast, information conveyed by color alone, images without text alternatives, videos without captions, online forms that cannot be used with assistive technology and navigation that only works with a mouse.",
        ],
      },
      {
        h2: "What WCAG is and why everyone points to it",
        answer:
          "WCAG is the Web Content Accessibility Guidelines, developed through the World Wide Web Consortium as a single shared standard for web content accessibility. It is organized under four principles: perceivable, operable, understandable and robust. Each requirement is graded at Level A, AA or AAA. Level AA is the common target.",
        body: [
          "The W3C published WCAG 2.0 in 2008, WCAG 2.1 in 2018 and WCAG 2.2 in 2023, each adding requirements without removing the earlier ones. The W3C notes that WCAG 2.2 is also an approved ISO standard. Because the Department of Justice names WCAG in its guidance and adopted it in its government rule, it has become the reference point for private businesses too.",
        ],
      },
      {
        h2: "What the 2024 Title II rule does and does not cover",
        answer:
          "The Department of Justice's 2024 rule applies to state and local governments under Title II of the ADA. It makes WCAG 2.1 Level AA the technical standard for their web content and mobile apps. It does not apply to private businesses, though it shows which standard the Department considers the measure.",
        body: [
          "The rule covers agencies and departments of state and local governments, special purpose districts and commuter authorities. Compliance dates are staggered by the size of the government, and ADA.gov notes that an interim final rule in April 2026 extended them. It includes narrow exceptions, such as archived content and certain preexisting documents.",
          "For a private company in Palm Beach County, the practical effects are indirect. The county, its cities, the school district and other public bodies are all Title II entities. Vendors who build or supply web content and apps for them should expect accessibility requirements in contracts. Ask an attorney how the rule touches your own agreements.",
        ],
      },
      {
        h2: "Why Florida businesses receive demand letters and lawsuits",
        answer:
          "Florida is one of the most active states for this litigation. The law firm Seyfarth Shaw, which tracks filings each year, counted 3,117 federal website accessibility lawsuits nationally in 2025. New York had 1,021 and Florida had 961, almost double Florida's 470 the year before.",
        body: [
          "Seyfarth's count covers lawsuits filed in federal court only. It does not include state court cases or demand letters that never become lawsuits, so the real volume of claims is higher. The firm also reports that Florida ranked second in the country for all ADA Title III federal filings in 2025, with 1,823 cases.",
          "The pattern in these cases is consistent: a plaintiff alleges that a business open to the public has a website that a person using a screen reader or keyboard cannot use. Restaurants, retailers, hotels, medical offices and other consumer-facing businesses are frequent targets, and this county has a great many of them. Whether a specific claim has merit is a legal question for your attorney.",
        ],
      },
      {
        h2: "Why an overlay widget is not a fix",
        answer:
          "No widget makes a website compliant by itself. The Federal Trade Commission approved a final order requiring the overlay vendor accessiBe to pay $1 million and barring it from claiming its automated products can make any website WCAG compliant unless it has evidence to support the claim.",
        body: [
          "The FTC alleged the company's claims that its plug-in could make any website compliant were false, misleading or unsubstantiated. The Department of Justice's own guidance is more measured about automated tools in general: it says automated checkers and overlays can be helpful but need to be used carefully, and that pairing a manual check with automated checkers gives a better sense of a site's accessibility.",
          "The takeaway for a business owner is simple. Scanners find some problems. A toolbar bolted onto a broken site does not repair the underlying code or content. Real fixes happen in the design, the markup and the words.",
        ],
      },
      {
        h2: "A practical accessibility checklist",
        answer:
          "Start with the checks the W3C publishes as easy first steps: page titles, image text alternatives, headings, color contrast, visible keyboard focus, form labels and captions. The W3C warns that a page can pass these and still have significant barriers, so treat them as a starting point and not a certification.",
        list: [
          "Every page has a unique, descriptive title",
          "Images that carry meaning have text alternatives; decorative ones are marked as decorative",
          "Headings are real headings, in a logical order",
          "Text has enough contrast against its background, including text over photos",
          "Everything works with a keyboard alone, and you can always see where the focus is",
          "Form fields have labels, required fields are identified and errors are explained in text",
          "Videos have captions and audio has a transcript",
          "Nothing relies on color alone to convey meaning",
          "Pages still work when text is zoomed",
          "PDFs, menus and booking or checkout tools from third parties are checked too",
        ],
        body: [
          "The last item catches many businesses. A restaurant's menu posted as an image, a reservation widget or an embedded scheduling tool is part of the experience even though someone else built it. Test the whole path a customer takes, not just your own pages.",
        ],
      },
      {
        h2: "When to call an attorney",
        answer:
          "Call an attorney as soon as you receive a demand letter or a complaint, and before you reply, pay or publish an accessibility statement that makes promises. A web team can audit and repair a site. Only a lawyer can advise on liability, settlement and what to say in writing.",
        body: [
          "The two jobs work together. Counsel handles the claim while the web team documents the site's current state, fixes the barriers in priority order and keeps a record of what changed and when. A business with no claim against it can do the same work on its own schedule, which is always cheaper than doing it under a deadline. Nothing in this guide is legal advice.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the ADA apply to my business website in Florida?",
        a: "The Department of Justice says it does if your business is open to the public. Its guidance states that Title III of the ADA prohibits discrimination by such businesses and that an inaccessible website can limit access to their goods and services. How that applies to a particular business or claim is a legal question, so ask an attorney about your situation.",
      },
      {
        q: "Is WCAG legally required for private businesses?",
        a: "Not by a federal regulation written for private businesses. The Department of Justice has not issued a detailed technical standard for businesses under Title III. Its 2024 rule requires WCAG 2.1 Level AA of state and local governments only. WCAG is still the standard the Department points to in its guidance, which is why most businesses and courts use it as the measure.",
      },
      {
        q: "Will an accessibility plugin protect my website from a lawsuit?",
        a: "No tool can promise that. The Federal Trade Commission's final order against one overlay vendor bars it from claiming its automated product can make any website WCAG compliant without evidence, and the Department of Justice says automated tools need to be used carefully alongside manual checks. Fixing the site's actual code and content is the reliable route.",
      },
      {
        q: "How many website accessibility lawsuits are filed in Florida?",
        a: "The law firm Seyfarth Shaw counted 961 website accessibility lawsuits filed in federal court in Florida in 2025, second only to New York's 1,021 and almost double Florida's 470 in 2024. Its national total was 3,117. Those figures cover federal filings only and leave out state court cases and demand letters settled before any suit.",
      },
    ],
    related: ["web-design", "digital-marketing", "branding"],
    sources: [
      { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: ADA_WEB },
      { label: "ADA.gov: Fact Sheet on the Title II Web and Mobile App Accessibility Rule", href: "https://www.ada.gov/resources/2024-03-08-web-rule/" },
      { label: "W3C Web Accessibility Initiative: WCAG 2 Overview", href: WCAG },
      { label: "W3C Web Accessibility Initiative: Easy Checks", href: "https://www.w3.org/WAI/test-evaluate/easy-checks/" },
      { label: "FTC: Final order requiring accessiBe to pay $1 million", href: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million" },
      { label: "Seyfarth Shaw: Federal Court Website Accessibility Lawsuit Filings Bounce Back in 2025", href: "https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/" },
      { label: "Seyfarth Shaw: ADA Title III Federal Lawsuit Filings Fall Slightly to 8,667 in 2025", href: "https://www.adatitleiii.com/2026/02/ada-title-iii-federal-lawsuit-filings-fall-slightly-to-8667-in-2025/" },
    ],
  },

  {
    slug: "website-vs-web-app-vs-custom-software",
    title: "Website vs Web App vs Custom Software",
    description:
      "How to tell whether your business needs a website, a web app or portal, a CRM, a mobile app or custom software, and when to buy instead of build.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "A website informs and persuades. A web application lets people log in and do something with their own data. A CRM tracks relationships and deals. A mobile app earns its place when it needs the phone itself. Custom software is for work that is specific to how your company makes money. Buy what is common and build only what is yours. When you do build, start with the smallest version that removes one real bottleneck, and remember that the moment you store customer data you take on the duty to protect it.",
    sections: [
      {
        h2: "The difference in plain terms",
        answer:
          "The test is what the visitor does. If they read and then contact you, it is a website. If they log in and see or change their own information, it is a web application. If your staff use it to run the business, it is internal software. The label matters because each is scoped differently.",
        table: {
          head: ["What it is", "Who uses it", "What it does", "A sign you need it"],
          rows: [
            ["Website", "Anyone", "Explains the business and collects inquiries", "People cannot find you or do not understand what you do"],
            ["Web application or customer portal", "Customers with a login", "Shows their status, documents, bookings or invoices", "Your phone rings with questions a screen could answer"],
            ["CRM", "Your sales and service staff", "Tracks contacts, deals and follow-up", "Leads live in inboxes and nobody knows who called back"],
            ["Internal tool", "Your operations team", "Runs a workflow that is specific to you", "One spreadsheet runs the company and one employee understands it"],
            ["Mobile app", "Customers or field staff on phones", "Uses the device: camera, location, notifications, offline", "The work happens away from a desk and a browser falls short"],
          ],
        },
      },
      {
        h2: "Signs you have outgrown spreadsheets and plugins",
        answer:
          "You have outgrown them when the workaround costs more than the fix. The usual signs are the same data typed into several systems, a spreadsheet only one employee dares to edit, customers calling for information you already have and decisions made on numbers nobody fully trusts.",
        list: [
          "The same customer details are entered in three or more places",
          "A key process depends on one employee's spreadsheet or memory",
          "Staff spend hours each week copying data between tools",
          "Customers call or email for status you could show them",
          "Errors trace back to version confusion or a missed handoff",
          "Plugin and subscription costs keep rising while the gaps stay",
          "You cannot answer a basic question about the business without a manual count",
        ],
        body: [
          "This is common in Palm Beach County's operations-heavy trades: builders tracking selections and draws, marine service yards scheduling haul-outs, property managers handling seasonal owners who are out of state half the year. The business grew, the tools did not, and good people fill the gap by hand.",
        ],
      },
      {
        h2: "Build versus buy",
        answer:
          "Buy software for anything that works the same way in every company: accounting, payroll, email, a standard CRM, a standard store. Build only where your process is different in a way that earns you money or where no product fits without painful compromise. Most businesses should buy most things.",
        table: {
          head: ["Question", "Points toward buying", "Points toward building"],
          rows: [
            ["Is the process the same at most companies?", "Yes", "No, it is how you compete"],
            ["Does an existing product cover most of the need?", "Yes, with minor adjustments", "No, or only with heavy workarounds"],
            ["How many people will use it?", "Per-user fees stay reasonable", "Per-user fees grow faster than the value"],
            ["Do you need it to connect to other systems?", "Standard connections exist", "The connections are the whole point"],
            ["Who maintains it?", "The vendor", "You need a team or partner committed for years"],
            ["What if the vendor changes terms or shuts down?", "You could switch without much pain", "The business would stall"],
          ],
        },
        body: [
          "The middle path is often the right one: buy the standard pieces and build the thin layer that joins them. A customer portal that reads from the accounting system and the project tracker you already pay for is a far smaller project than replacing both.",
        ],
      },
      {
        h2: "When a CRM is the real answer",
        answer:
          "If the problem is that leads are lost, follow-up is inconsistent or nobody can see the pipeline, you need a CRM before you need anything custom. An off-the-shelf CRM set up properly and connected to your website forms solves this for most firms. Custom CRM work is for sales processes that standard products cannot model.",
        body: [
          "Many requests for custom software turn out to be requests for a CRM that someone actually configured. The test is whether your stages, fields and handoffs can be expressed in a mainstream product without bending the business around it. If they can, buy it. If your deals involve steps no standard tool understands, such as multi-party approvals or project-based pricing, a custom layer or a custom build starts to make sense.",
        ],
      },
      {
        h2: "When you actually need a mobile app",
        answer:
          "You need a native app when the product depends on the phone itself or on daily repeat use. Otherwise a responsive web application reaches everyone with a browser and nothing to install. Both app stores also reject thin apps: Apple and Google each publish a minimum functionality rule.",
        body: [
          "Apple's App Review Guidelines say an app should include features, content and an interface that make it more than a repackaged website, and that apps should not primarily be marketing materials, advertisements or web clippings. Google Play's policy says it does not allow apps that only have limited functionality and content, such as static apps without app-specific features.",
          "Apple's guidelines also require its in-app purchase system when an app sells access to features or content inside the app, which changes the economics of anything sold digitally. Read the current guidelines with your developer before you commit to a store.",
        ],
        list: [
          "It needs the camera, location, notifications or other device hardware",
          "It must work without a connection, such as on a job site or on the water",
          "Customers will open it often enough to keep it on their home screen",
          "Field staff need it in their hands all day",
          "The app offers something the mobile website cannot",
        ],
      },
      {
        h2: "What changes when you hold customer data",
        answer:
          "Once people log in or you store their records, security becomes your responsibility. The Federal Trade Commission's guidance for businesses opens with two rules: do not collect personal information you do not need, and keep it only as long as you have a legitimate business need. Design the system around both.",
        body: [
          "The FTC's Start with Security guide draws its lessons from the agency's own enforcement cases. It tells businesses to restrict access to sensitive data, limit administrative access, insist on complex and unique passwords, store passwords securely, use industry-tested methods rather than inventing their own and make sure service providers implement reasonable security.",
          "The Cybersecurity and Infrastructure Security Agency reduces the basics for small and medium businesses to four practices: teach employees to avoid phishing, require strong passwords, require multifactor authentication and update business software. Regulated fields such as healthcare and finance carry additional obligations. Have counsel or a compliance officer confirm what applies before a portal goes live.",
        ],
        list: [
          "Collect the minimum data the feature needs",
          "Decide in advance how long each kind of record is kept",
          "Give each user role only the access it requires",
          "Require multifactor authentication for staff and administrators",
          "Write security expectations into every vendor contract",
          "Keep software updated and have a plan for reported vulnerabilities",
        ],
      },
      {
        h2: "Start with the smallest useful version",
        answer:
          "Pick one bottleneck, build the least that removes it, and put it in front of real users within weeks rather than quarters. A first version that lets clients check one status or lets staff skip one spreadsheet teaches you more than a long specification and limits what you spend before you know it works.",
        body: [
          "The discipline is in what you leave out. Write down the one job the first version must do, who does it today and how you will know it worked. Everything else goes on a list for later, ordered by what users ask for once they have the tool in their hands.",
          "This is also why a website is so often the door to larger work. The site reveals where inquiries stall, which questions repeat and what customers want to do for themselves. The next build should answer what the site has already shown you, and the one after that should answer what the portal shows you.",
        ],
        list: [
          "Name the single bottleneck and the people it affects",
          "Define the smallest version that removes it",
          "Launch it to a small group and watch how they use it",
          "Measure the hours saved or the calls avoided",
          "Add the next feature only when the evidence asks for it",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between a website and a web application?",
        a: "A website presents the same information to everyone, while a web application lets individual users log in and work with their own data. A services page is a website. A page where a client signs in to see project status, download documents or pay an invoice is a web application. Many businesses end up with both under one domain.",
      },
      {
        q: "Do I need a mobile app or is a mobile website enough?",
        a: "A mobile website or web application is enough for most businesses. A native app is worth building when it needs device features such as the camera, location, notifications or offline use, or when people will open it often. Apple and Google both publish rules against apps that offer little beyond a repackaged website, so a thin app may not be approved.",
      },
      {
        q: "Should a small business build a custom CRM?",
        a: "Usually not. A mainstream CRM that is configured properly and connected to your website forms covers what most small businesses need, and the vendor maintains it. Custom CRM development makes sense only when your sales or service process has steps that standard products cannot represent without workarounds that cost your team time every day.",
      },
      {
        q: "What security responsibilities come with a customer portal?",
        a: "You become responsible for protecting whatever the portal stores. The Federal Trade Commission advises businesses to collect only the personal information they need, keep it only as long as necessary, restrict access, require strong passwords and hold service providers to reasonable security. Industries such as healthcare and finance have further rules, so have an attorney or compliance officer review the plan.",
      },
    ],
    related: ["web-design", "business-development", "digital-marketing"],
    sources: [
      { label: "Apple: App Review Guidelines", href: "https://developer.apple.com/app-store/review/guidelines/" },
      { label: "Google Play Console Help: Minimum Functionality policy", href: "https://support.google.com/googleplay/android-developer/answer/9898783" },
      { label: "FTC: Start with Security, A Guide for Business", href: FTC_SECURITY },
      { label: "CISA: Secure Your Business", href: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business" },
    ],
  },

  {
    slug: "website-redesign-checklist",
    title: "Website Redesign Checklist That Protects Your Rankings",
    description:
      "A website redesign checklist built on Google's own site move documentation: content inventory, URL mapping, redirects, analytics, accessibility and launch.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Redesigns lose search traffic for one main reason: URLs change and nothing points the old addresses to the new ones. Google's site move documentation gives the method. Inventory every existing URL, map each one to its new home, use permanent server-side redirects, avoid chains, submit a new sitemap and keep the redirects for at least a year. Google also says to expect temporary ranking fluctuation, and that a medium-sized site can take a few weeks or more to settle. Plan the launch for a quiet period and watch Search Console closely afterward.",
    sections: [
      {
        h2: "Inventory the old site before anyone designs",
        answer:
          "Start with a complete list of what exists. Google's documentation says to build the URL list from your sitemaps, server logs and analytics data. Add Search Console's performance data so you know which pages earn impressions and clicks. That list decides what must be kept, improved, merged or retired.",
        list: [
          "Every live URL, including PDFs, images and old campaign pages",
          "Which pages receive search traffic and for which queries",
          "Which pages other websites link to",
          "Which pages generate calls, forms or sales",
          "Content that is outdated, duplicated or thin",
          "Every form, tracking tag, embedded tool and integration",
        ],
        body: [
          "The inventory is where a redesign is won. A page that looks unimportant in a design review may be the one bringing in a third of your inquiries. Decide what happens to each URL with the data open, not from memory.",
        ],
      },
      {
        h2: "Map every old URL to a new one",
        answer:
          "Create a mapping from each existing URL to its new destination. Google's guidance is specific: do not redirect many old URLs to one irrelevant page such as the home page, and return a proper 404 or 410 for content that is truly gone. Each valuable page needs an equivalent.",
        body: [
          "The cleanest redesign keeps URLs the same wherever the page still exists. Every URL you do not change is one you cannot break. Where the structure has to change, the map becomes the build specification for redirects and the test script for launch day.",
          "Google's documentation also says to update internal links to point at the new URLs directly rather than relying on redirects, and to give new pages self-referencing canonical tags.",
        ],
        table: {
          head: ["Old page situation", "What to do", "Why"],
          rows: [
            ["Page stays with the same content", "Keep the same URL if possible", "No redirect needed and nothing to lose"],
            ["Page stays at a new address", "Permanent redirect to the new URL", "Google treats it as a signal that the target should be canonical"],
            ["Two pages are merged", "Redirect both to the combined page", "Visitors and search engines land on the closest match"],
            ["Page is retired with no replacement", "Return a 404 or 410", "Google advises against redirecting to an irrelevant page"],
            ["Whole site moves to a new domain", "Redirect every URL then use the Change of Address tool", "The tool is only for domain or subdomain moves"],
          ],
        },
      },
      {
        h2: "Use the right kind of redirect",
        answer:
          "Use permanent server-side redirects, the 301 or 308 status codes. Google's redirect documentation says a permanent redirect shows the new target in search results while a temporary one keeps showing the source page. It says to use JavaScript redirects only if server-side or meta refresh redirects are not possible.",
        body: [
          "Google also advises against chaining redirects. If a page moved in an earlier redesign and moves again now, point the oldest address straight at the newest one instead of hopping through the middle. Then leave the redirects alone: Google says to keep them as long as possible, generally at least one year.",
          "This matters for a physical business too. Old URLs are printed on brochures, vehicle graphics, QR codes and menus. Redirects keep those working long after the reprint budget is spent.",
        ],
      },
      {
        h2: "Carry over analytics and tracking",
        answer:
          "Record a baseline before launch and make sure measurement survives it. Export rankings, traffic and conversion numbers for the old site, verify the new site in Search Console and confirm that analytics, call tracking, ad conversion tags and form notifications all fire on the new pages before the switch.",
        list: [
          "Baseline export of traffic, top pages, queries and conversions",
          "Search Console verified for the new site, and the old one kept verified",
          "Analytics installed and tested on every page type",
          "Form submissions tested end to end, to the inbox and the CRM",
          "Call tracking numbers and click-to-call links checked on a phone",
          "Ad landing pages and conversion tags updated to the new URLs",
        ],
        body: [
          "Without a baseline you cannot tell a normal post-launch wobble from a real problem. Google recommends the Search Console Performance report as the first place to look when traffic changes, comparing periods and reviewing which pages were affected.",
        ],
      },
      {
        h2: "Rebuild accessibility in instead of patching it later",
        answer:
          "A redesign is the cheapest moment to get accessibility right, because every template is being rebuilt anyway. Design to the Web Content Accessibility Guidelines from the first layout, then test each page type with a keyboard and a screen reader before launch rather than after a complaint.",
        body: [
          "The Department of Justice's guidance lists the barriers it sees most: poor contrast, missing text alternatives, uncaptioned video, inaccessible forms and mouse-only navigation. Each is trivial to prevent in a new design system and tedious to retrofit across a finished site. Our guide to website accessibility and the ADA in Florida covers the rules and a fuller checklist.",
        ],
      },
      {
        h2: "Launch day",
        answer:
          "Pick a quiet period, launch everything at once and test immediately. Google says small and medium sites should move all URLs together, and suggests timing a move for lower traffic. Then remove any noindex rules or robots.txt blocks left from development, test the redirects and submit the new sitemap.",
        list: [
          "Confirm the development noindex and robots.txt blocks are gone",
          "Test every redirect in the URL map, not a sample",
          "Submit the new sitemap in Search Console",
          "Send a test through every form and place a test call",
          "Check key pages on a phone, on slow data",
          "Use the Change of Address tool only if the domain itself changed",
          "Keep the old site's files and database archived",
        ],
        body: [
          "Timing is local. For many Palm Beach County businesses the busy stretch runs through winter and spring, so the calmer summer months are the natural window for a move. A restaurant on Clematis Street and an equestrian business in Wellington will have different quiet weeks. Look at your own traffic and pick yours.",
        ],
      },
      {
        h2: "The weeks after launch",
        answer:
          "Expect some movement and watch for real errors. Google says to expect temporary fluctuation in ranking during a move and that for a medium-sized site it can take a few weeks or more for the new URLs to appear. Check Search Console's indexing reports for unexpected errors.",
        list: [
          "Review indexing reports for 404s and pages blocked by mistake",
          "Compare traffic and conversions against the baseline each week",
          "Fix any old URL that still gets visits and has no redirect",
          "Ask the owners of important sites that link to you to update their links",
          "Update the URL on your Google Business Profile, directories and social profiles",
          "Leave the redirects in place for at least a year",
        ],
        body: [
          "Google's troubleshooting advice is to look at the pattern. A brief dip that recovers is the move being processed. A drop confined to certain pages usually points to missing redirects or removed content. A site-wide drop that holds calls for a technical review of what changed.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take Google to process a redesigned website?",
        a: "Google says that for a medium-sized website it can take a few weeks or more for its systems to start showing the new URLs, and longer for large sites. The speed depends mostly on the number of URLs and your server speed. Google also tells site owners to expect temporary fluctuation in rankings while the move is processed.",
      },
      {
        q: "How long should redirects stay in place after a redesign?",
        a: "Keep them as long as possible. Google's site move documentation says to keep redirects generally for at least one year so its systems can transfer signals to the new URLs. In practice there is rarely a reason to remove them, since printed materials, old emails and links on other websites will keep sending people to the old addresses.",
      },
      {
        q: "Do I need the Change of Address tool for a redesign?",
        a: "Only if the domain or subdomain is changing. Google's Search Console help says the Change of Address tool is for moving a site from one domain or subdomain to another, used after the redirects are live. It is not for moving pages within the same site, switching to HTTPS or changing between the www and non-www versions.",
      },
      {
        q: "Can I redirect all my old pages to the new home page?",
        a: "You should not. Google's documentation specifically warns against redirecting many old URLs to one irrelevant destination such as the home page, because it confuses visitors and may be treated as an error. Redirect each old page to its closest equivalent, and let pages with no replacement return a 404 or 410 status.",
      },
    ],
    related: ["web-design", "digital-marketing", "branding"],
    sources: [
      { label: "Google Search Central: Site moves with URL changes", href: SITE_MOVE },
      { label: "Google Search Central: Redirects and Google Search", href: REDIRECTS },
      { label: "Search Console Help: Change of Address tool", href: "https://support.google.com/webmasters/answer/9370220" },
      { label: "Google Search Central: Debugging drops in Google Search traffic", href: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" },
      { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: ADA_WEB },
      { label: "W3C Web Accessibility Initiative: WCAG 2 Overview", href: WCAG },
    ],
  },
]
