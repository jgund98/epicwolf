import type { Topic } from "./types"

/**
 * Photography topic pages: /photography/[topic]. Facts verified on primary
 * sources 2026-10-04: the U.S. Copyright Office, the Palm Beach County Film
 * and Television Commission, the Town of Palm Beach, the Florida Statutes,
 * the FAA, The Florida Bar, NAR and the platforms' own help pages.
 * Epic Wolf plans, directs and produces shoots through vetted partners. It
 * claims no studio, staff photographers, equipment or certifications.
 * Copy laws: VOICE.md.
 */

const IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

const COPYRIGHT_PHOTO_FAQ = "https://www.copyright.gov/help/faq/faq-fairuse.html"
const COPYRIGHT_BASICS = "https://www.copyright.gov/circs/circ01.pdf"
const COPYRIGHT_FOR_HIRE = "https://www.copyright.gov/circs/circ30.pdf"
const COUNTY_PERMITS = "https://www.pbfilm.com/free-one-stop-permitting"
const COUNTY_TURTLES = "https://www.pbfilm.com/sea-turtle-information"
const COUNTY_DRONE = "https://www.pbfilm.com/filming-with-a-drone"
const TOWN_PERMITS = "https://www.townofpalmbeach.com/423/Permits-and-Licenses"
const TOWN_EVENT_FAQ = "https://www.townofpalmbeach.com/FAQ.aspx?QID=266"
const FL_LIKENESS = "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0540/Sections/0540.08.html"
const FL_DRONE_PRIVACY = "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0934/Sections/0934.50.html"

export const photoTopics: Topic[] = [
  {
    service: "photography",
    slug: "brand-photography",
    kind: "service",
    name: "Brand photography",
    metaTitle: "Brand Photography Palm Beach County | Epic Wolf",
    metaDescription:
      "Brand photography for Palm Beach County firms, planned and directed by Epic Wolf: one image library for the website, ads, press and print, usage in writing.",
    kicker: "Brand photography in Palm Beach County",
    headline: "Photographs That Could Only Be Yours",
    answer:
      "Epic Wolf plans, directs and produces brand photography for businesses in Palm Beach County from its base in West Palm Beach. A brand shoot builds one library of images, covering people, place, process and detail, that serves the website, ads, press and print for a year or more. We write the shot list, handle permits and bring in a vetted photographer suited to the work.",
    intro: [
      "Most business photography is bought one emergency at a time. A headshot for a conference bio. A phone picture of the lobby for the Google profile. Three stock images to fill a web page. A year later the firm has a folder of pictures that share nothing, and the market sees five versions of the same company.",
      "A brand shoot answers that with a plan. Before a camera comes out, we decide what the pictures have to prove: that the advisers are people you would hand a portfolio to, that the builder's job sites are orderly, that the dining room feels the way the menu reads. Then every frame is lit, composed and edited to one standard, so an image on the home page and an image in a magazine ad are recognizably from the same firm.",
      "In Palm Beach County the setting does real work. Light on the Intracoastal at seven in the morning, a banyan on a quiet street, a storefront on Clematis after the dinner rush. Using those places well means knowing which ones need a permit, which towns have their own rules and which months the beach has restrictions. That planning is part of the job, and it is where a shoot is usually won or lost.",
    ],
    ground: [
      {
        title: "Who owns the pictures",
        body: "The U.S. Copyright Office says the owner of a photograph is generally the photographer or, in certain situations, the photographer's employer. Hiring a photographer does not move the copyright to the client unless it is transferred in a writing signed by the copyright owner. What a business usually buys is a license, so the license terms matter.",
        source: { label: "U.S. Copyright Office: photographs", href: COPYRIGHT_PHOTO_FAQ },
      },
      {
        title: "Work made for hire has limits",
        body: "Under the Copyright Office's Circular 30, a commissioned work counts as made for hire only if it falls in one of nine listed categories and both parties sign a written agreement that says so. A typical commissioned marketing photograph does not become the client's property just because the invoice was paid.",
        source: { label: "U.S. Copyright Office Circular 30", href: COPYRIGHT_FOR_HIRE },
      },
      {
        title: "County permits for public places",
        body: "The Palm Beach County Film and Television Commission issues permits for productions on public property such as parks, beaches, streets, sidewalks and public buildings, at no cost to the production, and asks for three business days to process a standard permit. It requires a liability insurance certificate, and it does not permit for the Town of Palm Beach.",
        source: { label: "Palm Beach County Film and Television Commission", href: COUNTY_PERMITS },
      },
      {
        title: "The island runs its own process",
        body: "The Town of Palm Beach requires a permit for all commercial photography or videography on public property, including streets, sidewalks, parks and beaches. Every application must be approved by the Town Council and submitted at least 20 business days before the meeting where it will be heard.",
        source: { label: "Town of Palm Beach: Permits and Licenses", href: TOWN_PERMITS },
      },
      {
        title: "Beach shoots have a season",
        body: "The county film commission lists sea turtle nesting season as March 1 through October 31. During it, lights are not permitted on the beach before sunrise or after sunset, and equipment may not penetrate the sand, apart from tripods to a depth of no more than six inches.",
        source: { label: "Palm Beach County Film and Television Commission: sea turtles", href: COUNTY_TURTLES },
      },
    ],
    includes: [
      { name: "Shoot strategy", detail: "A short written brief on what the images must prove about the business and where each one will be used." },
      { name: "Shot list and schedule", detail: "Every setup, person and location in order, timed around light, traffic and the working day." },
      { name: "Location scouting and permits", detail: "Sites chosen in person, with county, municipal or Town applications filed where public property is involved." },
      { name: "Photographer selection", detail: "A vetted photographer matched to the subject, whether that is people, interiors, food or boats." },
      { name: "On-set direction", detail: "A partner on site keeping every frame on brief and putting people who dislike cameras at ease." },
      { name: "Styling and wardrobe guidance", detail: "Clear advice on clothing, props and how to dress the space so nothing dates the pictures." },
      { name: "Editing and retouching", detail: "A consistent color grade and honest cleanup, delivered in sizes for web, social and print." },
      { name: "Written usage terms", detail: "A license that names where the images may run and for how long, agreed before the shoot." },
    ],
    plan: [
      {
        title: "Decide what the pictures must prove",
        body: "We read the brand, the website plan and the next year of marketing, then write a brief and a shot list. The list is built backward from real uses: the home page, the team page, a print ad, a press kit. Nothing is photographed just because it is there.",
      },
      {
        title: "Produce the day",
        body: "We scout, file permits where a location needs one, book the photographer and any stylist, and send everyone a schedule. On the day a partner directs, so the people in front of the camera only have to show up and be themselves.",
      },
      {
        title: "Edit and put the library to work",
        body: "Selects are edited to one look and delivered in an organized library with the usage terms attached. Then the images go where they were planned to go, and the old mismatched ones come down.",
      },
    ],
    cta: {
      line: "Send us your website and the three places new photos would matter most.",
      body: "We will reply with a draft shot list, the locations we would use and whether any of them needs a permit.",
    },
    faqs: [
      {
        q: "Who owns the photos after a brand shoot?",
        a: "By default the photographer does. The U.S. Copyright Office says a photographer owns the copyright unless it is transferred in a signed writing, so a business normally receives a license instead. We put that license in writing before the shoot, covering the website, advertising, press, print and social, so you know exactly where the images can run and nobody has to ask twice.",
      },
      {
        q: "Do we need a permit for a brand shoot in Palm Beach County?",
        a: "Only when the shoot uses public property or affects it. A session inside your own office or store needs no film permit. Parks, beaches, streets and sidewalks do, through the county film commission's permitting service for most municipalities or through the Town Council on the island of Palm Beach. We check each location on the shot list and file what is required.",
      },
      {
        q: "How many final images come out of a brand shoot?",
        a: "It depends on the shot list, and the number is agreed before the shoot. A day built around a few carefully lit setups yields fewer, stronger images than a day of quick coverage across many rooms and people. We plan around uses instead of a count: every page, ad and profile that needs a picture gets one, plus alternates in other crops.",
      },
      {
        q: "What should our team wear for brand photos?",
        a: "Wear what a client would see you in on your best ordinary day. Solid colors and well-fitted clothing photograph better than busy patterns, large logos or anything bought for the occasion and never worn. We send a short wardrobe note ahead of time, tuned to your brand colors and the settings, and ask everyone to bring a second option.",
      },
      {
        q: "Can brand photos be used in paid advertising?",
        a: "Yes, as long as the license and the releases cover advertising. Florida law requires consent before a person's photograph is used for a commercial or advertising purpose, so anyone recognizable in an ad should have signed a release. The image license also has to name paid media. We settle both before the shoot so the pictures are cleared for ads from day one.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "branding-cost-palm-beach-county"],
    related: ["headshots-and-team-portraits", "architectural-and-interior-photography", "product-photography", "aerial-and-drone-photography"],
    image: IMAGE,
  },
  {
    service: "photography",
    slug: "headshots-and-team-portraits",
    kind: "service",
    name: "Headshots and team portraits",
    metaTitle: "Corporate Headshots Palm Beach County | Epic Wolf",
    metaDescription:
      "Corporate headshots and executive portraits for Palm Beach County firms. Epic Wolf plans and directs one consistent set for the team page, LinkedIn and press.",
    kicker: "Corporate headshots in Palm Beach County",
    headline: "A Team Page Clients Trust Before the First Call",
    answer:
      "Epic Wolf plans and directs corporate headshots, executive portraits and team photography for firms in Palm Beach County, working from West Palm Beach. We set one look for the whole team, schedule the session at your office or a chosen location, bring in a vetted portrait photographer and deliver images sized for the website, LinkedIn, press and proposals, with a plan for new hires.",
    intro: [
      "For a law firm, a wealth practice or a medical group, the team page is where a prospect goes to see who they would be dealing with. That prospect is deciding whether to trust a person, and the portrait is the first evidence. When eight partners have eight different backgrounds, crops and decades, the page says something about the firm that nobody intended.",
      "Good headshots are a system more than a session. One background or setting, one lighting approach, one crop and one editing standard, written down so the associate who joins in the spring matches the partners who were photographed in the fall. We set that standard first, then photograph to it.",
      "Executives in this county are short on time and many dislike being photographed. So the session comes to them, runs on a schedule measured per person and is directed by someone whose job is to get a natural expression quickly. The result should look like the person a client meets across the table.",
    ],
    ground: [
      {
        title: "LinkedIn's photo specifications",
        body: "LinkedIn's help center says a profile photo must be a PNG or JPG no larger than 8MB, between 400 by 400 pixels and 7680 by 4320 pixels. It also says the photo must reflect your likeness, and it recommends one that will not need much cropping.",
        source: { label: "LinkedIn Help: profile photo specifications", href: "https://www.linkedin.com/help/linkedin/answer/a549049" },
      },
      {
        title: "Law firm sites are advertising",
        body: "The Florida Bar states that Rules 4-7.11 through 4-7.17 generally govern the content of a lawyer's website. Those rules include disclaimers when an advertisement uses an actor or a dramatization, which is a reason to photograph the firm's real lawyers and staff and to have the firm's counsel review the page.",
        source: { label: "The Florida Bar: lawyer advertising FAQ", href: "https://www.floridabar.org/ethics/etad/faqexpand/" },
      },
      {
        title: "Consent to use a likeness",
        body: "Florida Statute 540.08 bars using a person's name, portrait or photograph for trade, commercial or advertising purposes without that person's express written or oral consent. A signed release from each employee keeps the question simple, including after someone leaves the firm.",
        source: { label: "Florida Statutes 540.08", href: FL_LIKENESS },
      },
      {
        title: "A file is not the copyright",
        body: "The Copyright Office's Circular 1 notes that owning a copy of a work does not give the owner the copyright in it. Holding the image files does not by itself settle where a firm may publish them. The license does, and a nonexclusive license is the usual arrangement.",
        source: { label: "U.S. Copyright Office Circular 1", href: COPYRIGHT_BASICS },
      },
    ],
    includes: [
      { name: "Portrait standard", detail: "A one-page spec for background, light, crop and expression that every current and future portrait follows." },
      { name: "On-site session", detail: "A portrait setup brought to your office or a chosen location, scheduled person by person." },
      { name: "Executive portraits", detail: "Longer environmental sittings for principals, suited to press features and speaking bios." },
      { name: "Group and working photographs", detail: "The team together and at work, for the about page, recruiting and proposals." },
      { name: "Direction and coaching", detail: "Posing and expression guidance for people who would rather be anywhere else." },
      { name: "Retouching to one standard", detail: "Natural cleanup and matched color, so the page reads as one firm." },
      { name: "Platform-ready crops", detail: "Files sized for the website, LinkedIn, email signatures, press kits and print." },
      { name: "New-hire plan", detail: "A documented way to add people later without the mismatch returning." },
    ],
    plan: [
      {
        title: "Set the standard",
        body: "We look at the brand, the website and where the portraits will appear, then decide on studio-style or environmental, the background, the crop and the tone. That becomes a written spec and a test frame you approve before the full session.",
      },
      {
        title: "Run a tight session",
        body: "The photographer sets up where your people already are. Each person gets a time slot, a wardrobe note in advance and a quick review of their frames on the spot, so nobody is surprised by their own portrait later.",
      },
      {
        title: "Deliver and keep it current",
        body: "Selected portraits are retouched, cropped for each platform and named consistently. The spec stays on file so new hires and promotions are photographed to match, in a makeup session or at the next scheduled one.",
      },
    ],
    cta: {
      line: "Send us your team page and the number of people to photograph.",
      body: "We will propose a portrait standard, a session plan for your office and how new hires get added afterward.",
    },
    faqs: [
      {
        q: "What should I wear for a corporate headshot?",
        a: "Wear a solid, well-fitted outfit one notch more formal than your normal client day. Mid-tone and darker colors work well, while bright white, tight patterns and shiny fabrics distract. Avoid anything brand new and untested. We send a wardrobe note matched to the chosen background, and we suggest bringing a second jacket or top in case the first one fights the setting.",
      },
      {
        q: "Can you photograph our whole team at our office?",
        a: "Yes. The portrait setup comes to you and needs a quiet room with some depth, such as a conference room, plus a schedule that gives each person a short slot. Shooting on site keeps billable time intact and lets us capture working and group photographs in the same visit. If the office does not suit the look, we recommend a nearby location instead.",
      },
      {
        q: "How do we keep headshots consistent when new people join?",
        a: "Write the look down and reuse it. We document the background, lighting, lens, crop and retouching as a portrait standard, so a later session reproduces it. New hires are then photographed to that spec, either in small makeup sessions or at a regular team session. The mismatch on most team pages comes from skipping this step, not from bad photography.",
      },
      {
        q: "Who owns our headshots and can employees use them on LinkedIn?",
        a: "The photographer usually owns the copyright and the firm holds a license, so the license should name every intended use. We write it to cover the firm's website, press, proposals and advertising, and personal professional profiles such as LinkedIn for the people pictured. A signed release from each employee covers the firm's side, since Florida requires consent to use a likeness commercially.",
      },
      {
        q: "How many portraits does each person receive?",
        a: "Each person receives the final retouched portraits agreed in the scope, typically chosen from a larger set reviewed on the day. We set the number per person before the session so the budget is predictable. Principals often get additional environmental portraits for press and speaking engagements, and everyone's selects are delivered in the same crops for the website, LinkedIn and print.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "how-to-choose-a-branding-agency-palm-beach", "getting-press-palm-beach-county"],
    related: ["brand-photography", "event-and-gala-photography", "architectural-and-interior-photography"],
    image: IMAGE,
  },
  {
    service: "photography",
    slug: "architectural-and-interior-photography",
    kind: "service",
    name: "Architectural and interior photography",
    metaTitle: "Architectural Photography Palm Beach County | Epic Wolf",
    metaDescription:
      "Architectural and interior photography for Palm Beach County builders, architects and designers. Epic Wolf plans and directs the shoot and the licensing.",
    kicker: "Architectural and interior photography in Palm Beach County",
    headline: "Finished Work Deserves a Proper Record",
    answer:
      "Epic Wolf plans, directs and produces architectural and interior photography for builders, architects, interior designers, hospitality groups and real estate firms in Palm Beach County. Based in West Palm Beach, we scout the property, schedule around the light, style each room and bring in a vetted architectural photographer. We also sort out licensing when several firms want to use the same images.",
    intro: [
      "A custom home takes years to design and build, and the owner moves in the week it is finished. If the project is not photographed in that narrow window, the builder, the architect and the designer are left with phone pictures of the most expensive thing they made that year. Portfolios in this county are won on photographs of completed work.",
      "Architectural photography is slow on purpose. Verticals are kept straight, each room is styled and lit so the windows and the interior both hold detail, and exteriors wait for the hour when the facade is evenly lit or the sky goes blue at dusk. A good day produces a modest number of images, each one usable on a website, in a magazine submission and in an awards entry.",
      "The other half of the job is rights. A single house can involve a builder, an architect, an interior designer, a landscape architect and a listing broker, and each wants the pictures. Who commissioned them and who is licensed to use them should be settled before the shoot, because sorting it out afterward is where disputes start.",
    ],
    ground: [
      {
        title: "Listing photos and copyright",
        body: "The National Association of Realtors describes ownership of listing photographs as fractured across the industry and advises members to review their photography agreements, audit how images are used, make sure future agreements permit the intended uses and keep records. It points to litigation over photos reused beyond the active listing.",
        source: { label: "National Association of Realtors: Who Owns Your Property Photos", href: "https://www.nar.realtor/copyright/who-owns-your-property-photos" },
      },
      {
        title: "Several firms can share one shoot",
        body: "The Copyright Office explains that any or all of a copyright owner's exclusive rights, or parts of them, can be transferred. A transfer generally must be written and signed, while granting a right on a nonexclusive basis does not require a written agreement. That is the mechanism that lets a builder, an architect and a designer each hold a license to the same photographs.",
        source: { label: "U.S. Copyright Office Circular 1", href: COPYRIGHT_BASICS },
      },
      {
        title: "Exteriors on the island",
        body: "The Town of Palm Beach's permit page says commercial filming is allowed only in commercial districts and is prohibited in residential districts, that filming on streets is prohibited, and that filming is prohibited between 8 and 10 a.m. and between 3 and 5 p.m. The permit applies to commercial photography on public property, so exteriors are planned from private property.",
        source: { label: "Town of Palm Beach: Permits and Licenses", href: TOWN_PERMITS },
      },
      {
        title: "Private property can still need a permit",
        body: "The county film commission notes that permitting may be required on private property when a shoot affects adjacent public areas such as roads or sidewalks, or when a municipality has requested special permitting for residential areas. A crew working from the street in front of a house is a case to check first.",
        source: { label: "Palm Beach County Film and Television Commission", href: COUNTY_PERMITS },
      },
    ],
    includes: [
      { name: "Site walk and shot plan", detail: "A visit before the shoot to choose angles and note when each elevation and room gets its best light." },
      { name: "Interior photography", detail: "Composed room views with straight verticals and balanced window light, plus detail shots of materials and millwork." },
      { name: "Exterior and twilight photography", detail: "Facades, outdoor living areas and dusk views scheduled to the hour." },
      { name: "Styling and staging direction", detail: "Furniture, art, linens and landscaping tidied and arranged with the designer or owner." },
      { name: "Owner and access coordination", detail: "Scheduling with homeowners, property managers and hotel operations so the property is ready and undisturbed." },
      { name: "Multi-party licensing", detail: "A clear arrangement when the builder, architect, designer or broker each want rights to the images." },
      { name: "Retouching and color", detail: "Careful editing that keeps materials and finishes true to life." },
      { name: "Publication-ready delivery", detail: "Files prepared for the portfolio, magazine submissions, awards entries and print." },
    ],
    plan: [
      {
        title: "Walk the property",
        body: "We visit with the builder or designer, list the views that matter and note the sun's path across each side of the building. We also confirm who owns the property, who is commissioning the shoot and which firms want to use the photographs.",
      },
      {
        title: "Prepare and photograph",
        body: "The space is cleaned, styled and cleared of anything that dates it. The photographer works through the plan room by room, with exteriors held for the right light and a return at dusk when the design calls for it.",
      },
      {
        title: "License and publish",
        body: "Final images are retouched and delivered with written usage terms for each firm involved. From there we can build the project page, prepare a magazine or awards submission and update the portfolio.",
      },
    ],
    cta: {
      line: "Send us the address and the date the project will be finished and furnished.",
      body: "We will tell you the best window to photograph it, what to prepare and how to handle rights if other firms want the images.",
    },
    faqs: [
      {
        q: "How should we prepare a home or space for an architectural shoot?",
        a: "Finish it, clean it and clear it. Punch-list items, protective film, contractor signs, cords, bins and cars should be gone, windows washed, landscaping trimmed and every light bulb working and matched in color. Inside, we style with the designer: fewer objects, straightened furniture, fresh linens and flowers. We send a room-by-room checklist after the site walk so nothing is left for the morning of the shoot.",
      },
      {
        q: "Can the builder, architect and designer all use the same photos?",
        a: "Yes, if each firm is licensed to. Copyright stays with the photographer unless transferred in writing, and the photographer can grant nonexclusive licenses to more than one party. The clean approach is to agree before the shoot who is commissioning, who shares the cost and what each firm may do with the images. We set that up in writing so credit and usage are never argued later.",
      },
      {
        q: "When is the best time to photograph a finished project?",
        a: "Photograph it after furnishings and landscaping are in and before daily life takes over. For a home, that is often a short window around move-in, so the date should be reserved while construction is finishing. Time of day matters as much: each elevation has an hour when it is evenly lit, and a twilight exterior needs a clear evening.",
      },
      {
        q: "Do we need the homeowner's permission to photograph a house we built?",
        a: "Yes, you need the owner's permission to enter and photograph a private home. Many builders and designers write photography access into their contracts for that reason. Owners in this county often ask that the address, family photographs and artwork stay out of the pictures, and we plan for that. Shooting from public property instead raises permit questions, especially in the Town of Palm Beach.",
      },
      {
        q: "Can listing photos be reused in a builder's or designer's portfolio?",
        a: "Not automatically. Listing photographs are often licensed only for marketing an active listing, and the National Association of Realtors warns that using them beyond the agreement can lead to a copyright claim. Check the photography agreement or ask the photographer for a broader license. Commissioning your own shoot of the finished project avoids the question and gives you images composed for a portfolio.",
      },
    ],
    guides: ["filming-and-photo-permits-palm-beach-county", "planning-a-brand-shoot-palm-beach-county", "drone-rules-palm-beach-county"],
    related: ["aerial-and-drone-photography", "brand-photography", "headshots-and-team-portraits", "product-photography"],
    image: IMAGE,
  },
  {
    service: "photography",
    slug: "product-photography",
    kind: "service",
    name: "Product photography",
    metaTitle: "Product Photography Palm Beach County | Epic Wolf",
    metaDescription:
      "Product photography for ecommerce and catalogs in Palm Beach County. Epic Wolf plans and directs images that meet Google, Amazon and Shopify specifications.",
    kicker: "Product photography in Palm Beach County",
    headline: "Product Images Built to the Rules of Every Shelf",
    answer:
      "Epic Wolf plans, directs and produces product photography for ecommerce stores, catalogs and retailers in Palm Beach County, working from West Palm Beach. We turn each sales channel's image requirements into one shot plan, then manage a vetted product photographer, styling and retouching. You receive clean catalog images, detail shots and lifestyle scenes, named and sized for your store, marketplaces and ads.",
    intro: [
      "Online, the photograph is the product. A shopper cannot pick up the bag, feel the linen or check the clasp, so the images have to do it for them: an honest front view, the angles a hand would turn to, the scale, the detail that justifies the price.",
      "Every channel also has its own rulebook. Amazon wants the main image on pure white with the product filling most of the frame. Google rejects images with promotional overlays. A Shopify theme looks ragged if the aspect ratios vary from one product to the next. Images made without those rules in mind get resized, cropped or refused, and the store looks improvised.",
      "We plan the shoot from the rules backward. One list covers every product, every required view and every destination, so a single session yields the compliant catalog image, the zoomable detail and the styled scene for the home page and ads. For a Worth Avenue boutique or a Delray maker shipping nationally, that consistency is what makes a small catalog look established.",
    ],
    ground: [
      {
        title: "Amazon's main image rules",
        body: "Amazon's product image guide requires the main image to have a pure white background, with RGB values of 255, 255, 255, to show the product as 85 percent of the image, to show the entire product once and to leave out props that are not included with it.",
        source: { label: "Amazon Seller Central: Product image guide", href: "https://sellercentral.amazon.com/help/hub/reference/external/G1881" },
      },
      {
        title: "Amazon's size threshold for zoom",
        body: "The same Amazon guide sets a minimum of 500 pixels and a maximum of 10,000 pixels on the longest side, and says images with 1,000 or more pixels on the longest side enable the zoom function. It recommends JPEG and at least six additional images beyond the main one.",
        source: { label: "Amazon Seller Central: Product image guide", href: "https://sellercentral.amazon.com/help/hub/reference/external/G1881" },
      },
      {
        title: "Google Merchant Center requirements",
        body: "Google's Merchant Center help says a product image must be at least 500 by 500 pixels and no larger than 16MB, and recommends around 1500 by 1500 pixels. It does not allow promotional elements or overlays such as calls to action, watermarks or borders, or placeholder and generic images.",
        source: { label: "Google Merchant Center Help: image link", href: "https://support.google.com/merchants/answer/6324350" },
      },
      {
        title: "Images in Google Search results",
        body: "Google's merchant listing documentation says product pictures that clearly show the product, for example against a white background, are preferred. It recommends providing multiple high-resolution images in 16x9, 4x3 and 1x1 aspect ratios, at URLs Google can crawl and index.",
        source: { label: "Google Search Central: merchant listing structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing" },
      },
      {
        title: "Shopify's guidance",
        body: "Shopify's help center says product images can be up to 5000 by 5000 pixels and must be smaller than 20 MB, that 2048 by 2048 pixels usually displays best for square product images, and that a consistent aspect ratio keeps collection pages uniform.",
        source: { label: "Shopify Help Center: product media types", href: "https://help.shopify.com/en/manual/products/product-media/product-media-types" },
      },
    ],
    includes: [
      { name: "Channel requirements audit", detail: "The image rules for every place you sell, merged into one specification before the shoot." },
      { name: "Shot plan per product", detail: "A row for each item listing the views, details and scenes it needs." },
      { name: "White-background catalog images", detail: "Clean, evenly lit product views that meet marketplace main-image rules." },
      { name: "Detail and scale shots", detail: "Close views of materials, hardware and finish, and images that show size honestly." },
      { name: "Lifestyle and styled scenes", detail: "The product in use or in a setting, for the home page, email and ads." },
      { name: "Color-accurate retouching", detail: "Dust, scratches and reflections cleaned up, with color checked against the real item." },
      { name: "Export and file naming", detail: "Every image cropped, sized and named for your store, marketplaces and ad platforms." },
      { name: "Store upload support", detail: "Images placed into product pages with descriptive alt text when we manage the site." },
    ],
    plan: [
      {
        title: "Build the specification",
        body: "We list where each product is sold and gather the image rules for each channel. That becomes one spec and one shot plan, so a single session satisfies the strictest marketplace and still gives the brand room for styled work.",
      },
      {
        title: "Shoot in batches",
        body: "Products are prepped, grouped by size and material, and photographed set by set so lighting and angle stay identical across the catalog. Styled scenes are shot the same day while everything is on hand.",
      },
      {
        title: "Retouch and load",
        body: "Images are retouched, color-checked against the product and exported to each channel's size and naming rules. If we run your store, we load them and confirm the listings display correctly.",
      },
    ],
    cta: {
      line: "Send us a link to your store and a count of the products to photograph.",
      body: "We will send back a shot plan per product and a list of what each sales channel requires.",
    },
    faqs: [
      {
        q: "How many photos does each product need?",
        a: "Plan for one main image plus several supporting views. Amazon's own guide recommends at least six additional images beyond the main one, and Google recommends multiple high-resolution images for its listings. In practice that means the front, the back or side, a detail, a scale reference and at least one styled scene. Simple items need fewer and complex ones need more.",
      },
      {
        q: "Do product photos have to be on a white background?",
        a: "On Amazon, the main image does. Its product image guide requires a pure white background for the main image, while additional images can show the product in use. Google says images that clearly show the product, such as on white, are preferred. On your own store the choice is yours, though a consistent background across the catalog is what makes a collection page look orderly.",
      },
      {
        q: "Can the same product photos be used on Amazon and Google and in ads?",
        a: "Yes, if they are planned for the strictest channel first. An image that meets Amazon's main-image rules will generally satisfy Google's requirements too, and neither platform accepts text or promotional overlays on the product image. Ads and social posts can use the styled scenes. The image license should name marketplaces and paid media, which we confirm in writing before the shoot.",
      },
      {
        q: "Do we need to ship our products to you?",
        a: "Usually the products go to wherever the shoot takes place, and we arrange that. Small goods travel easily to the photographer's setup, while furniture, artwork and anything fragile or large is often photographed at your showroom or warehouse instead. We ask for one clean, undamaged sample of every item and variant, since the camera shows scuffs a shopper would never notice on a shelf.",
      },
      {
        q: "What drives the cost of product photography?",
        a: "The number of products, the views per product and the amount of styling drive the cost. Reflective, transparent and very small items take longer to light, and lifestyle scenes need props, a location and sometimes a model. Retouching time rises with catalog size. We quote from the shot plan, so you can see what each product requires and trim the plan before the shoot.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "custom-website-vs-website-builder", "website-redesign-checklist"],
    related: ["brand-photography", "architectural-and-interior-photography", "event-and-gala-photography"],
    image: IMAGE,
  },
  {
    service: "photography",
    slug: "event-and-gala-photography",
    kind: "service",
    name: "Event and gala photography",
    metaTitle: "Event and Gala Photography Palm Beach | Epic Wolf",
    metaDescription:
      "Event and gala photography in Palm Beach County. Epic Wolf plans coverage of galas, openings and corporate events, with names captured for society pages.",
    kicker: "Event and gala photography in Palm Beach County",
    headline: "One Night Photographed for a Year of Use",
    answer:
      "Epic Wolf plans, directs and produces photography for galas, openings, corporate events and charity season in Palm Beach County, from its base in West Palm Beach. We build the shot list around what the photos are for: sponsor recognition, society pages, donor stewardship and next year's invitation. A vetted event photographer covers the night and names are captured for every published image.",
    intro: [
      "A gala lasts one evening and its photographs work for the whole year that follows. They thank sponsors, fill the annual report, land in the society pages, open next year's invitation and show a prospective donor what the room looks like. Coverage that drifts through the evening without a list misses the pictures the organization needed.",
      "So the planning starts with the uses. Each sponsor gets the photograph their agreement promised. The honoree, the chairs and the board are photographed early, while everyone is fresh. Arrivals, the room before doors open, the program and the paddle raise each get a slot on the schedule, and someone is assigned to record names, because local editors will not print a photo without them.",
      "The same discipline suits a store opening on Clematis, a client reception for a wealth firm or a hospital foundation luncheon. Decide what the pictures have to do, staff the event accordingly and deliver a small set quickly enough to be useful to the press and to social channels while people still care.",
    ],
    ground: [
      {
        title: "The season on one page",
        body: "Palm Beach Society publishes a cover and editorial schedule that lists a date every week from early October through late April, each paired with a charitable organization. It is a practical map of when the season's coverage runs and how far ahead it is planned.",
        source: { label: "Palm Beach Society: editorial schedule", href: "https://www.pbsociety.com/editorial-schedule" },
      },
      {
        title: "What Boca magazine asks for",
        body: "Boca magazine's submission instructions for party photos ask for a first and last name for each person in every photo, and a post-event press release or a few paragraphs covering who, what, where and when. It asks for high-resolution images at 300 dpi and says it does not publish more than one photo of the same person.",
        source: { label: "Boca magazine: contact and submissions", href: "https://bocamag.com/contact-us/" },
      },
      {
        title: "Charitable events on the island",
        body: "The Town of Palm Beach requires a charitable solicitation permit under Chapter 78 of its code, with a mandatory staff appointment before applying. Its checklist includes the state solicitation registration, a board resolution stating the event's location and date, and proof of trained crowd control managers.",
        source: { label: "Town of Palm Beach: Permits and Licenses", href: TOWN_PERMITS },
      },
      {
        title: "Events on public property",
        body: "The Town's event permit FAQ says events with guests and any setup on public property need a special event permit from the Town Clerk's Office, and that small wedding or engagement gatherings at parks or beaches are included. It lists the public venues the Town accepts.",
        source: { label: "Town of Palm Beach: event permit FAQ", href: TOWN_EVENT_FAQ },
      },
      {
        title: "News use and advertising use differ",
        body: "Florida Statute 540.08 requires consent to use a person's photograph for commercial or advertising purposes. It exempts bona fide news reports where the likeness is not used for advertising, and photographs of people solely as members of the public who are not named. A guest's picture in a recap is different from the same picture in a paid ad.",
        source: { label: "Florida Statutes 540.08", href: FL_LIKENESS },
      },
    ],
    includes: [
      { name: "Coverage plan", detail: "A shot list built from the run of show, the sponsor agreements and the outlets you hope to reach." },
      { name: "Sponsor and honoree photographs", detail: "The recognition images each sponsor, chair and honoree was promised, scheduled early." },
      { name: "Step-and-repeat and arrivals", detail: "Posed arrival portraits against the event backdrop, with names recorded as people are photographed." },
      { name: "Candid and room coverage", detail: "The decor before doors, the program, the giving moment and guests enjoying the evening." },
      { name: "Name capture and captions", detail: "First and last names matched to frames so photos can be submitted to editors." },
      { name: "Fast selects for press and social", detail: "A small edited set turned around first for media submissions and posts." },
      { name: "Full edited gallery", detail: "The complete set, color-corrected and organized by moment for the organization's records." },
      { name: "Venue and permit coordination", detail: "Photography rules confirmed with the venue, and with the town when public property is involved." },
    ],
    plan: [
      {
        title: "Plan from the run of show",
        body: "We meet with the event chair or planner, read the sponsor commitments and mark the moments that cannot be missed. The shot list assigns each one a time and a place, and names who will gather people for group photographs.",
      },
      {
        title: "Cover the event",
        body: "The photographer arrives before doors to capture the room, then works the list through arrivals, the program and the giving moment. Names are recorded as posed photographs are taken, so nothing has to be reconstructed the next morning.",
      },
      {
        title: "Deliver in two passes",
        body: "A short set of selects goes out first, captioned for media submission and social posts. The full gallery follows, organized for sponsor reports, the annual report and next season's invitation.",
      },
    ],
    cta: {
      line: "Send us the event date and venue and what the photos need to accomplish.",
      body: "We will reply with a coverage plan, the photographs your sponsors will expect and how the selects reach local editors.",
    },
    faqs: [
      {
        q: "How do gala photos get into Palm Beach society pages?",
        a: "Editors choose what runs, and they expect complete submissions. Boca magazine, for example, asks for a first and last name for every person in each photo and a short write-up of the event. We capture names as photographs are taken, caption the selects and send them with the event details. No one can promise a placement, but a clean submission is the one that gets considered.",
      },
      {
        q: "Do guests need to sign a release at an event?",
        a: "Not for ordinary event coverage, though advertising is different. Florida law requires consent before a person's photograph is used for a commercial or advertising purpose. Recaps and news-style coverage are treated differently from a paid ad built around one guest's face. A notice on the invitation and at the door is common practice, and your attorney should approve the wording.",
      },
      {
        q: "How should we prepare the room for event photography?",
        a: "Give the photographer the room before the guests arrive. Decor, tables and lighting should be finished ahead of doors so the space can be photographed empty. Put the step-and-repeat where there is space to queue and even light, keep sponsor signage unobstructed, and tell the lighting team that very dark or saturated colored light makes faces hard to photograph.",
      },
      {
        q: "How many photographers does an event need?",
        a: "The run of show decides it. One photographer can cover a reception in a single room. An event with an arrivals line, a cocktail hour and a seated program happening in overlapping spaces usually needs a second, so posed and candid coverage are not competing. We recommend staffing after reading the schedule, the guest count and the list of required photographs.",
      },
      {
        q: "Can event photos be used for fundraising and next year's invitation?",
        a: "Yes, when the license and the consent both cover it. We write the image license to include the organization's own fundraising, reports, website and invitations. For any image that features an identifiable guest in a solicitation or advertisement, get that person's permission first. Many organizations use room, decor and crowd photographs for promotion and keep close portraits for recaps.",
      },
    ],
    guides: ["getting-press-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "market-a-palm-beach-business-without-looking-loud"],
    related: ["headshots-and-team-portraits", "brand-photography", "aerial-and-drone-photography"],
    image: IMAGE,
  },
  {
    service: "photography",
    slug: "aerial-and-drone-photography",
    kind: "service",
    name: "Aerial and drone photography",
    metaTitle: "Drone Photography Palm Beach County | Epic Wolf",
    metaDescription:
      "Aerial and drone photography in Palm Beach County. Epic Wolf plans each flight with an FAA-certified remote pilot, with airspace and privacy checked first.",
    kicker: "Aerial and drone photography in Palm Beach County",
    headline: "The Aerial View Flown by the Book",
    answer:
      "Epic Wolf plans and produces aerial and drone photography for properties, developments, marinas and events in Palm Beach County, from its base in West Palm Beach. Commercial drone flights legally require an FAA-certified remote pilot, so a certified pilot flies every job. We check airspace, permits and privacy rules before the flight and direct the shots to fit the rest of your marketing.",
    intro: [
      "Some things only make sense from above. A waterfront lot's relationship to the inlet. A development's distance from the interstate and the beach. A marina's slips, a golf community's routing, the full footprint of an estate behind its hedge. One aerial image can explain what ten ground-level photographs cannot.",
      "Flying a drone for a business is aviation, and it is regulated as such. The FAA requires a certified remote pilot for commercial flights, parts of the county sit in controlled airspace that needs authorization first, and Florida has a privacy statute written specifically about drones and private property. Hiring someone's nephew with a drone puts the client's name on the result.",
      "Our role is the planning and direction. We decide what the aerials need to show, check where and when the flight is legal, book a certified pilot and brief the shots so they match the ground photography in light and color. The pilot flies. The pictures arrive ready to sit beside everything else in the brand's library.",
    ],
    ground: [
      {
        title: "A certificate is required",
        body: "The FAA states that to fly a drone under its Small UAS Rule, Part 107, a pilot must obtain a Remote Pilot Certificate from the FAA, which involves passing an aeronautical knowledge exam. Part 107 is the rule the FAA applies to flying a small drone for work or business.",
        source: { label: "FAA: Become a Certificated Remote Pilot", href: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
      },
      {
        title: "Controlled airspace needs authorization",
        body: "The FAA says drone pilots planning to fly under 400 feet in controlled airspace around airports must receive an airspace authorization before they fly. Its LAANC system can return that authorization in near real time, and it covers airspace only, so the pilot must still check restrictions and weather.",
        source: { label: "FAA: LAANC", href: "https://www.faa.gov/uas/getting_started/laanc" },
      },
      {
        title: "Remote ID",
        body: "According to the FAA, drones that are required to be registered, including those flown for business, must comply with the Remote ID rule. Remote ID is a drone's ability to broadcast identification and location information in flight that other parties can receive.",
        source: { label: "FAA: Remote Identification of Drones", href: "https://www.faa.gov/uas/getting_started/remote_id" },
      },
      {
        title: "Florida's drone privacy law",
        body: "Florida Statute 934.50 says a person may not use a drone with an imaging device to record privately owned real property, or its owner or occupants, with intent to conduct surveillance in violation of a reasonable expectation of privacy without written consent. The statute provides for civil actions and attorney fees.",
        source: { label: "Florida Statutes 934.50", href: FL_DRONE_PRIVACY },
      },
      {
        title: "The county's permit process",
        body: "The Palm Beach County Film and Television Commission says production companies planning commercial filming with a drone need to follow the FAA's Part 107 rule, which is incorporated into its permitting process, and that normal processing takes a minimum of three full business days.",
        source: { label: "Palm Beach County Film and Television Commission: drones", href: COUNTY_DRONE },
      },
      {
        title: "The Town of Palm Beach",
        body: "The Town's event permit FAQ says no additional Town permit is required to use a drone beyond what the FAA requires, and that drones operated in the town must be operated and registered under all FAA and State of Florida rules, citing Sec. 14-35 of its code.",
        source: { label: "Town of Palm Beach: event permit FAQ", href: TOWN_EVENT_FAQ },
      },
    ],
    includes: [
      { name: "Flight feasibility check", detail: "Airspace class, local rules and any restrictions reviewed for the address before a date is set." },
      { name: "FAA-certified remote pilot", detail: "A vetted, certified pilot engaged for every flight, with proof of certification available to the client." },
      { name: "Airspace authorization", detail: "Authorization requested by the pilot when the site sits in controlled airspace." },
      { name: "Shot direction", detail: "Altitudes, angles and time of day chosen to show context, access and scale." },
      { name: "Property and neighbor consent", detail: "Written permission from the property owner and a plan to keep neighboring homes out of frame." },
      { name: "Aerial stills and site context", detail: "Overheads, obliques and wide establishing views for listings, pitch decks and websites." },
      { name: "Editing and annotation", detail: "Color matched to ground photography, with lot lines or labels added where they help." },
      { name: "Matched ground coverage", detail: "Ground-level photography planned for the same day so the full set shares one light." },
    ],
    plan: [
      {
        title: "Check the site",
        body: "Before quoting a date, we look up the airspace over the address, the local rules and who owns the land the pilot would launch from. Some sites need FAA authorization, some need a county permit and a few cannot be flown the way a client first imagined.",
      },
      {
        title: "Brief the flight",
        body: "We write the shot list with the pilot: what each image must show, from what height and in which light. The owner's written consent is collected, and neighbors' properties are planned out of the frame.",
      },
      {
        title: "Fly and finish",
        body: "The certified pilot flies the plan in suitable weather while we direct from the ground. Selects are edited to match the rest of the shoot and delivered with any labels or boundary lines the marketing needs.",
      },
    ],
    cta: {
      line: "Send us the address and what the aerial view needs to show.",
      body: "We will check the airspace and local rules for that site and tell you what can be flown and what it takes.",
    },
    faqs: [
      {
        q: "Is it legal to fly a drone for business in Palm Beach County?",
        a: "Yes, when a certified pilot follows the FAA's Part 107 rules. The FAA requires a Remote Pilot Certificate for commercial drone flights, registration and Remote ID for the aircraft, and prior authorization in controlled airspace. Florida's privacy statute and local permit rules apply on top of that. Epic Wolf does not fly drones itself. We engage an FAA-certified remote pilot for every job.",
      },
      {
        q: "Do we need a permit to use a drone in the Town of Palm Beach?",
        a: "Not from the Town. Its event permit FAQ says no additional Town permit is required for a drone beyond what the FAA requires, and that drones must be operated and registered under FAA and Florida rules. That does not waive federal airspace authorization or Florida's privacy law, and commercial photography on Town property by other means still needs a filming permit.",
      },
      {
        q: "Can a drone photograph a property next to an airport?",
        a: "Often yes, with FAA authorization first. The FAA requires drone pilots to receive an airspace authorization before flying under 400 feet in controlled airspace around airports, and its LAANC system can grant many of those requests in near real time. Altitude ceilings vary by location and some requests need manual review, so we check the address before promising a date.",
      },
      {
        q: "Can a drone photograph my neighbor's property by accident?",
        a: "It can, which is why the flight is planned to avoid it. Florida law prohibits using a drone to record private property or the people on it with intent to conduct surveillance in violation of their reasonable expectation of privacy, without written consent. We get the owner's consent for the subject property and choose angles and altitudes that keep neighboring homes and yards out of the frame.",
      },
      {
        q: "What stops a drone shoot from going ahead on the day?",
        a: "Weather and airspace are the usual reasons. Wind, rain and low cloud can ground a flight, and the FAA can issue temporary flight restrictions that close an area on short notice. The pilot makes the final call on safety. We schedule aerial work with a backup date, and we plan ground photography for the same day so the visit is still productive.",
      },
    ],
    guides: ["drone-rules-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "planning-a-brand-shoot-palm-beach-county"],
    related: ["architectural-and-interior-photography", "brand-photography", "event-and-gala-photography"],
    image: IMAGE,
  },
]
