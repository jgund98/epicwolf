import type { Guide } from "./types"

/**
 * Guides for the three priority markets: Boca Raton, West Palm Beach and the
 * Town of Palm Beach. Every fact is from a primary source checked 2026-10-04.
 * Copy laws: VOICE.md (no em/en dashes, no commas in title or h2 fields).
 * Grant amounts are left out on purpose: they change.
 */

const BOCA = "https://library.municode.com/fl/boca_raton/codes/code_of_ordinances?nodeId="
const PB = "https://library.municode.com/fl/palm_beach/codes/code_of_ordinances?nodeId="

export const localGuides: Guide[] = [
  {
    slug: "boca-raton-sign-approval",
    title: "Getting a Sign Approved in Boca Raton",
    description:
      "How business signs get approved in Boca Raton: city or county jurisdiction, the Chapter 24 design rules, the Community Appearance Board and real timelines.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Confirm first that the property is inside the City of Boca Raton, because many Boca addresses are unincorporated county land with different rules. Inside the city, Chapter 24 decides what a sign can be: dimensional letters, three colors at most, limited window graphics and firm size caps. Staff must act on a complete standard permit within 30 days. Master sign plans and alternative designs go to the Community Appearance Board, which adds weeks.",
    sections: [
      {
        h2: "Check whether the city or the county has jurisdiction",
        answer:
          "Look up the parcel control number before anyone designs. City of Boca Raton parcels begin with 06 and unincorporated Palm Beach County parcels begin with 00. The city says a Boca Raton address does not necessarily mean a property is inside city limits, and county properties follow the county's own sign rules.",
        body: [
          "The Palm Beach County Property Appraiser lists every municipality's two-digit code, and the county's zoning FAQ confirms that unincorporated parcel numbers begin with 00 and that Article 8 of the county's Unified Land Development Code governs signs there. The city also publishes a residency map that colors city, beach and park district and county areas differently.",
          "Downtown adds a third layer. Use and development of property in the community redevelopment area is governed by the downtown development order, whatever the zoning map says, and the downtown rules carry their own sign provisions. Confirm with city staff which process applies before you file.",
        ],
      },
      {
        h2: "What the code allows on a Boca storefront",
        answer:
          "Boca's sign code is specific about form, not only size. Wall signs must be dimensional letters, a permanent sign may use three colors besides black and white, logos are capped relative to the lettering and window graphics are tightly limited. Knowing these rules before design saves a redesign and a resubmittal.",
        table: {
          head: ["Element", "The rule", "Code section"],
          rows: [
            ["Wall signs", "Face-lit channel letters, reverse channel letters or fabricated dimensional letters; box cabinets only by alternative approval", "Sec. 24-93"],
            ["Color", "Three colors at most, not counting black and white; a one-color main message; no fluorescent pigments", "Sec. 24-56"],
            ["Logos", "No taller than 1.5 times the height of the sign copy", "Sec. 24-56"],
            ["Wall sign area", "The greater of 20 percent of the signable facade or the frontage table, capped at 120 square feet", "Sec. 24-81"],
            ["Downtown letters", "Ground-floor capital letters 12 inches by default and 18 inches at most", "Sec. 24-81"],
            ["Blade signs", "One per in-line storefront with an outdoor entrance, up to 6 feet by 18 inches, or a 4 square foot wall plaque instead", "Sec. 24-81"],
            ["Windows", "Ground floor only; 20 percent of a window or 9 square feet, whichever is less; 3 square feet of printed vinyl per business; never lit", "Sec. 24-100"],
            ["Lighting", "No brighter than 700 candelas per square meter; no exposed bulbs; white external light only", "Sec. 24-51"],
            ["Digital signs", "Static images that change no more than 3 times a day, with no transitions or scrolling", "Sec. 24-101"],
            ["Ground signs", "No taller than 12 feet or larger than 72 square feet anywhere in the city", "Sec. 24-58"],
            ["Prohibited", "Neon, roof, animated, inflatable, vehicle and sandwich or sidewalk signs", "Sec. 24-6"],
          ],
        },
      },
      {
        h2: "Staff review or the Community Appearance Board",
        answer:
          "Standard sign permits are reviewed by city staff. Master sign plans, alternative identity signs and architectural signs go to the Community Appearance Board after staff review. The board meets on Tuesday evenings twice a month, items are due a week before the meeting and applications are filed through the Boca eHub portal.",
        body: [
          "Master sign plans are required for nonresidential developments designed for multiple occupancies, which describes most shopping centers and office buildings. Once a plan is approved, the city will not consider a request to deviate from it. A tenant designs inside the landlord's plan or pursues a formal amendment backed by a unique location or architectural reason.",
          "The board's job is broader than signs. It reviews site development, buildings, exterior spaces and landscaping for everything except single-family and two-family homes, and it approves work that contributes to the city's image as a place of beauty, spaciousness, harmony, taste, fitness, broad vistas and high quality.",
        ],
      },
      {
        h2: "How long approval takes",
        answer:
          "Plan on about a month for a standard permit and longer for board items. Staff must act on a complete standard application within 30 days and get up to 15 business days for each resubmittal. Board items are heard at least 25 days after staff review, and an application left unanswered is treated as abandoned.",
        list: [
          "Standard sign permit: approval, denial or written comments within 30 days of a complete application",
          "Each resubmittal: up to 15 more business days of review",
          "No response to comments: the application is deemed abandoned 30 days after notice, with one 30-day extension and no fee refund",
          "Board items: a staff recommendation within 30 days, then a hearing at the next meeting at least 25 days later",
          "Appeals: a staff denial can be appealed to the board in writing within 14 days",
          "After approval: a sign permit is valid for 180 days, so schedule fabrication, install and inspection inside that window",
        ],
      },
      {
        h2: "When a better sign earns more room",
        answer:
          "Boca rewards design quality. A ground sign designed by a design professional with materials better than the industry standard, such as natural stone, stainless steel or glass, can be approved as an architectural sign with up to 25 percent more area and 30 percent more height, still within the citywide caps.",
        body: [
          "Alternative identity signs work on the same principle. The board has to find that the alternative produces equal or superior results, and the code's criteria include a well-planned, uncluttered and understated streetscape built on simple, elegant and cohesive design and moderation in scale. Few cities publish a clearer creative brief.",
        ],
      },
      {
        h2: "Banners and signs before opening",
        answer:
          "A tenant may show a temporary banner while its permanent sign permit is in review, up to 32 square feet or the size of the allowed permanent sign, whichever is less. Get the business tax receipt first, because the city treats displaying a sign or advertising as evidence a business is operating.",
        body: [
          "The city requires a business tax receipt and certificate of use from anyone offering goods or services in Boca Raton, and its approval comes before the Palm Beach County receipt. Each location and each trade name needs its own.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who approves signs in downtown Boca Raton?",
        a: "Downtown works differently. Property in the community redevelopment area is governed by the downtown development order, and under the city's compiled downtown rules the CRA board, made up of the City Council, serves as the appearance board for downtown signs and approves banners. Downtown letter heights are set separately in the sign code. Confirm the current process with staff, because the downtown rules have been under revision.",
      },
      {
        q: "Can a Boca Raton sign be lit at night?",
        a: "Yes, within limits. Signs may not exceed 700 candelas per square meter, exposed and unshielded light sources are not allowed and external lighting must be white. Window signs may not be lit at all, and neon signs are prohibited outright. Internally lit channel letters and halo-lit reverse channel letters are the common choices that pass review and still look refined at night.",
      },
      {
        q: "What happens if the city sends comments on my sign permit?",
        a: "Answer them quickly. The city gives each resubmittal up to 15 business days of review, but if an applicant does not respond to comments, the application is deemed abandoned 30 days after the city's notice. Only one 30-day extension is allowed, and permit fees are not refunded. Have the designer and fabricator ready to revise drawings before you file.",
      },
      {
        q: "Do signs in unincorporated Boca follow the city's rules?",
        a: "No. Areas with a Boca Raton mailing address that sit in unincorporated Palm Beach County follow the county's sign rules in Article 8 of its Unified Land Development Code, not the city's Chapter 24, and permits go through county offices. Check the parcel control number on the Property Appraiser's site: 06 means the City of Boca Raton and 00 means unincorporated county.",
      },
    ],
    related: ["signs", "branding", "print"],
    sources: [
      { label: "City of Boca Raton Code, Chapter 24 Signs", href: `${BOCA}VOII_CH24SI` },
      { label: "Boca Raton Code Sec. 24-33: Administrative review", href: `${BOCA}VOII_CH24SI_ARTIIPE_S24-33ADRESIPEEXALIDSIARSI` },
      { label: "Boca Raton Code Sec. 24-34: Board review and master sign plans", href: `${BOCA}VOII_CH24SI_ARTIIPE_S24-34COAPBOREMASIPLALIDSIARSI` },
      { label: "Boca Raton Code Sec. 24-81: Commercial district signs", href: `${BOCA}VOII_CH24SI_ARTIIIRE_DIV2SIREZODI_S24-811LBNC40POREPTPLMCVCLIDIDDCONO` },
      { label: "Boca Raton Code Sec. 24-100: Window signs", href: `${BOCA}VOII_CH24SI_ARTIIIRE_DIV3DESIST_S24-100WISI` },
      { label: "Boca Raton Code Sec. 24-50: Architectural signs", href: `${BOCA}VOII_CH24SI_ARTIIIRE_DIV1STAPALSI_S24-50ARSI` },
      { label: "City of Boca Raton: Community Appearance Board", href: "https://myboca.us/2260/Community-Appearance-Board" },
      { label: "City of Boca Raton: Sign Information", href: "https://www.myboca.us/1250/Sign-Information" },
      { label: "Palm Beach County Property Appraiser: Municipality codes", href: "https://pbcpao.gov/muni-list.htm" },
      { label: "Palm Beach County zoning FAQ", href: "https://discover.pbc.gov/pzb/FAQPages/Zoning.aspx" },
      { label: "City of Boca Raton: Business Tax Receipts", href: "https://myboca.us/273/Business-Tax-Receipts" },
    ],
  },

  {
    slug: "palm-beach-sign-approval",
    title: "Getting a Sign Approved in the Town of Palm Beach",
    description:
      "How business signs get approved in the Town of Palm Beach: what a sign may say, the 10 and 20 square foot limits, ARCOM, Landmarks and the season.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "On the island, a business sign may show only its registered name, one logo within a 12-inch square and what the business does, in 10 or 20 square feet including window lettering. Non-illuminated signs can be approved by Town staff. Illuminated signs need a Town Council special exception and a major Architectural Commission review with 30 days of public notice. Landmarked properties go to the Landmarks Preservation Commission, and installs are easiest from May to October.",
    sections: [
      {
        h2: "Start with what the Town allows",
        answer:
          "The Town permits only the sign types its code lists, and anything not specifically permitted is prohibited. Its sign article opens by calling Palm Beach a worldwide synonym for beauty, quality and value. Every rule after that protects the same idea, so design for the code rather than against it.",
        list: [
          "Banners of any kind are banned, and the definition includes pennants, balloons, streamers and whirligigs",
          "No lettering, logos or street numbers on awnings visible from a street, and nothing hung from a canopy or awning",
          "No flashing, animated or moving signs anywhere in town",
          "No neon or strip lighting outlining a building",
          "No paper signs or flyers on sidewalks, trees, poles or lampposts",
          "Every sign must also meet the Florida Building Code and Fire Prevention Code",
        ],
      },
      {
        h2: "What a business sign may say and how big it can be",
        answer:
          "A business sign may carry the name as registered, one logo within a 12-inch square and the nature of the business. All of a business's signs together get 20 square feet per 18 feet of frontage, 10 square feet below 18 feet of frontage, and no building may exceed 20 square feet.",
        table: {
          head: ["Element", "The rule", "Code section"],
          rows: [
            ["Wording", "The name on the business tax receipt and state registration, one logo within a 12-inch square and the nature of the business", "Sec. 134-2439"],
            ["Total area", "20 square feet per 18 feet of frontage, 10 square feet under 18 feet, never more than 20 per building", "Sec. 134-2438"],
            ["Windows and doors", "First-floor window and door lettering counts toward the same total", "Sec. 134-2440"],
            ["Height", "First floor only, no higher than 15 feet or the first-floor ceiling, never on a roof", "Sec. 134-2441"],
            ["Vias", "One hanging sign perpendicular to the wall, name only, with at least 8 feet of clearance; via directories up to 6 square feet with no logos", "Sec. 134-2436"],
            ["Menu signs", "One at a restaurant entrance, within 4 feet of it and no larger than 2 square feet; no permit or review needed", "Sec. 134-2448"],
            ["Sale or event signs", "One easel sign of up to 2 square feet per 18 feet of frontage, April 1 to October 31 only, up to 15 days before the event", "Sec. 134-2445"],
            ["Development signs", "After a building permit only, up to 10 square feet, removed within 15 days of the certificate of occupancy", "Sec. 134-2446"],
          ],
        },
      },
      {
        h2: "Which review your sign needs",
        answer:
          "Lighting and landmark status decide the path. A non-illuminated sign can be approved by Town staff. An illuminated sign is a major Architectural Commission project and needs Town Council approval as a special exception. Designated landmarks and properties in historic districts are reviewed by the Landmarks Preservation Commission instead of ARCOM.",
        body: [
          "The Town's project designation matrix sorts work into staff approval, chair review and minor and major commission projects. Non-illuminated signage, new awnings and outdoor seating furnishings are staff review. Changes to street-facing windows and doors in the Worth Avenue district are an Architectural Commission minor project.",
          "For a staff review, the Town's administrative review guide asks for color photographs, an enlarged plan of each sign's copy area, elevations, a materials and finishes sheet and the total square footage of all tenant signage, including existing signs that stay. Applications can be filed through the Town's Citizen Access Portal or in person.",
          "The Town says more than 328 landmark properties, sites and vistas are protected under its historic preservation ordinance, and the Landmarks Preservation Commission meets monthly. The Royal Poinciana Plaza describes itself as a landmarked property. Ask the Town before designing if you are unsure of a building's status.",
        ],
      },
      {
        h2: "How long approval takes",
        answer:
          "Staff approval of a non-illuminated sign is the short path. A major Architectural Commission project needs a public hearing, newspaper notice and mailed notice to every owner within 300 feet at least 30 days before it. The commission meets monthly, and no sign permit can issue until it approves the sign.",
        list: [
          "The Architectural Commission meets monthly, and the Town publishes a yearly calendar of meetings and submittal deadlines",
          "Major projects: newspaper advertisement and mailed notice to owners within 300 feet, both at least 30 days before the hearing",
          "Illuminated signs: Town Council approval as a special exception, in addition to commission review",
          "No permit for a proposed sign until the commission, or the Town Council on appeal, approves it",
          "Landmarks: review by the Landmarks Preservation Commission instead of the Architectural Commission",
        ],
      },
      {
        h2: "When the work can happen",
        answer:
          "Install in the off-season when you can. From November 1 through April, permitted construction work, which includes sign installs and storefront build-outs, may run only from 8 a.m. to 5 p.m. on weekdays. Jackhammers and similar heavy equipment are banned outright in that window, and violations count toward the Town's three strike rule.",
        body: [
          "From May through October, weekday work may run from 8 a.m. to 6 p.m., and the Worth Avenue district allows construction from 8 a.m. to 8 p.m. except on Sundays and legal holidays. In practice, approvals belong in late summer and installs belong before November.",
        ],
      },
      {
        h2: "Before the doors open",
        answer:
          "A storefront that is vacant or under construction must screen its glass within 10 days, with at least 75 percent covered by images from the Town's approved list, such as historical pictures of Palm Beach. Advertising is never permitted in the display, and construction fences may not carry signage of any kind.",
        body: [
          "A development sign announcing the project can go up only after a building permit is issued, is limited to 10 square feet per street frontage and must come down within 15 days of the certificate of occupancy. Once open, the business tax receipt has to be posted where customers can see it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a Palm Beach sign include a tagline?",
        a: "No. The Town limits business identification signs to the name of the establishment as it appears on its business tax receipt and state registration, one logo that fits within a 12-inch square and the nature of the business. Taglines, promotions and phone numbers do not fit within that rule. Put them on the website, in print and inside the store instead.",
      },
      {
        q: "Does window lettering count against my sign allowance in Palm Beach?",
        a: "Yes. The Town allows identification signs in first-floor display windows and entry doors, but that lettering counts toward the business's total allowed sign area, which is 10 or 20 square feet depending on frontage. On a pedestrian street like Worth Avenue, spending much of the allowance on the door and window is often the right decision.",
      },
      {
        q: "Can I cover my windows with branded graphics during a build-out?",
        a: "No. The Town requires vacant or under-construction storefronts to screen their glass within 10 days under its window treatment policy, with at least 75 percent covered by images from an approved list such as historical pictures of Palm Beach. Advertising is never permitted in the display, and construction fences cannot carry signage either. Announce the opening through press and invitations instead.",
      },
      {
        q: "How do I know if my storefront is a landmark?",
        a: "Ask the Town before designing. The Town says more than 328 properties, sites and vistas are protected under its historic preservation ordinance, and signs on designated landmarks, properties under consideration and buildings in historic districts are reviewed by the Landmarks Preservation Commission instead of the Architectural Commission. The Royal Poinciana Plaza, for example, describes itself as a landmarked property.",
      },
    ],
    related: ["signs", "branding", "print"],
    sources: [
      { label: "Town Code Sec. 134-2371: Statement of findings", href: `${PB}PTIICOOR_CH134ZO_ARTXISI_DIV1GE_S134-2371STFIPU` },
      { label: "Town Code Sec. 134-2373: General sign regulations", href: `${PB}PTIICOOR_CH134ZO_ARTXISI_DIV1GE_S134-2373GEREDEAPPESI` },
      { label: "Town Code Sec. 134-2438: Size of sign", href: `${PB}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2438SISI` },
      { label: "Town Code Sec. 134-2439: Permitted lettering and logos", href: `${PB}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2439PELELO` },
      { label: "Town Code Sec. 134-2445: Temporary display signs", href: `${PB}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2445TEDISI` },
      { label: "Town Code Sec. 18-202: Development review procedure", href: `${PB}PTIICOOR_CH18BUBURE_ARTIIIARRE_DIV3PRRE_S18-202UNDEREPR` },
      { label: "Town Code Sec. 42-199: Hours for construction work", href: `${PB}PTIICOOR_CH42EN_ARTVNO_DIV1GE_S42-199HOCOWO` },
      { label: "Town of Palm Beach: Project Designation Matrix (PDF)", href: "https://townofpalmbeach.com/DocumentCenter/View/16181/APPROVAL-MATRIX-_ADOPTED_7132022" },
      { label: "Town of Palm Beach: Administrative Review Guide (PDF)", href: "https://www.townofpalmbeach.com/DocumentCenter/View/27903/ADMIN-REVIEW_GUIDE_071625" },
      { label: "Town of Palm Beach: Window Treatment Policy (PDF)", href: "https://www.townofpalmbeach.com/DocumentCenter/View/24372" },
      { label: "Town of Palm Beach: Planning, Zoning and Development Review", href: "https://townofpalmbeach.com/1292/Planning-Zoning-Development-Review" },
    ],
  },

  {
    slug: "opening-a-business-downtown-boca-raton",
    title: "Opening a Business in Downtown Boca Raton: The Marketing Checklist",
    description:
      "A marketing checklist for opening in downtown Boca Raton: licensing before advertising, storefront and sign rules, Google, press lead times and timing.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Confirm zoning before signing a lease, get the city's business tax approval before the county's and hold advertising until both are in hand, because the city treats a sign or an ad as proof a business is operating. Design the storefront for downtown's letter heights, blade signs and window limits, set up Google and Bing correctly, pitch Boca magazine three months ahead and time the opening to the downtown calendar.",
    sections: [
      {
        h2: "Check zoning before you sign the lease",
        answer:
          "The city advises calling its zoning office before leasing space to confirm the business is allowed in that district. Downtown, the downtown development order governs use and development regardless of the zoning map. Outdoor display of merchandise is also prohibited in the city's business districts, which changes how a shop can merchandise its frontage.",
      },
      {
        h2: "License before you advertise",
        answer:
          "Boca Raton requires a business tax receipt and certificate of use from anyone selling goods or services in the city, and the city's approval must come before the Palm Beach County receipt. Under the city code, displaying a sign or advertising at a location is evidence the business is operating, so license first.",
        list: [
          "Apply to the city through Boca eHub, and file the county application at the same time",
          "Get city approval before the county issues its receipt",
          "Each location and each trade name or DBA needs its own receipt",
          "City receipts expire every September 30, and renewals open July 1",
        ],
      },
      {
        h2: "Design the storefront for downtown",
        answer:
          "Downtown ground-floor letters default to 12 inches and top out at 18. Each in-line shop with an outdoor entrance can hang one blade sign under the arcade, window signs may cover 20 percent of a window or 9 square feet at most and wall signs must be dimensional letters in three colors or fewer.",
        body: [
          "The downtown development order has long named Addison Mizner as a principal design influence, from stucco and clay tile to arcades and courtyards, and asks for reinterpretation rather than copies. Under the city's compiled downtown rules, the CRA board serves as the appearance board for downtown signs, and downtown banners need its approval. The downtown rules have been under revision, so confirm the current process with staff before ordering anything.",
        ],
      },
      {
        h2: "Set up search before the doors open",
        answer:
          "Create one Google Business Profile for the location using the business's real-world name, with no added keywords or city names, and keep the hours accurate because a profile must be reachable during stated hours. Import it to Bing Places, and make the website show the identical name, address and phone.",
        body: [
          "Tell customers how to arrive. The city's downtown site says Mizner Park offers free parking in its four garages, and the city's agreement for the Brightline station near Palmetto Park Road and Dixie Highway includes a public parking garage. Clear directions on the website and the profile remove a common reason people skip a downtown visit.",
        ],
      },
      {
        h2: "Tell the press on their schedule",
        answer:
          "Boca magazine closes its arts and entertainment listings three months before publication and routes print and web pitches to different editors. The Boca Raton Tribune takes ideas and releases by email only. BocaNewsNow publishes business press releases as a paid service, which is advertising rather than earned coverage.",
        body: [
          "The Greater Boca Raton Chamber of Commerce runs leads groups of non-competitive businesses that meet twice a month to trade referrals, and Boca magazine's Charity Register each September maps the season's major fundraisers. Both are where a new business gets known before a reporter ever calls.",
        ],
      },
      {
        h2: "Time the opening to the downtown calendar",
        answer:
          "Open before the busiest weeks, not during them. The city's holiday street parade usually runs north on Federal Highway to the Mizner Park Amphitheater in December, and Festival of the Arts BOCA fills March. A finished storefront and a working website before those crowds is worth more than a launch event in the middle of them.",
        body: [
          "Special event applications for grand openings on private property sit with the city's Code Enforcement division, and the city asks applicants to call because every event is different. Allow time for that conversation.",
        ],
      },
      {
        h2: "The checklist",
        answer:
          "Work through these in order. Most opening mistakes in Boca come from doing the right thing too early, such as advertising before licensing or ordering a sign before confirming which rules and which board apply to the address.",
        list: [
          "Zoning confirmed with the city before the lease is signed",
          "City business tax approval, then the county receipt, before any sign or ad",
          "Parcel number checked, and the sign process confirmed for the downtown district",
          "Storefront designed to downtown letter heights, the blade sign rule and window limits",
          "One Google Business Profile with the real name, plus a Bing listing imported from it",
          "A website with the same name, address, phone, hours and parking directions",
          "A press calendar built backward from opening day, magazines first",
          "Chamber membership and one cause you will support for years",
          "Opening timed ahead of December and March crowds",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I put up a coming soon sign in downtown Boca before I am licensed?",
        a: "Wait until the business tax approval is in hand. Boca Raton's code treats displaying a sign or advertising a business at a location as sufficient evidence that the business is operating. A temporary tenant banner is allowed while a permanent sign permit is in review, but downtown banners also need approval under the downtown rules, so confirm the process with the city first.",
      },
      {
        q: "Do I need both a city and a county business tax receipt in Boca Raton?",
        a: "Yes. A business inside the City of Boca Raton needs the city's business tax receipt and certificate of use and a Palm Beach County receipt, and the city's approval has to come first. Each location and each trade name needs its own receipt. City receipts expire every September 30, and the renewal window opens on July 1.",
      },
      {
        q: "Where should I tell customers to park in downtown Boca?",
        a: "Say it plainly on your website and your Google profile. The downtown Boca site run by the city's community redevelopment agency says Mizner Park offers free parking in its four garages, and the Brightline station area near Palmetto Park Road and Dixie Highway includes a public garage. Clear parking directions remove one of the most common reasons people skip a downtown visit.",
      },
      {
        q: "When should a downtown Boca business open?",
        a: "Ahead of the busiest weeks. The city's holiday street parade usually runs north on Federal Highway to the Mizner Park Amphitheater in December, and Festival of the Arts BOCA fills March. Finish the storefront, the website and the Google profile before those crowds arrive, and pitch magazines at least three months before the opening date.",
      },
    ],
    related: ["branding", "signs", "digital-marketing", "public-relations"],
    sources: [
      { label: "City of Boca Raton: Business Tax Receipts", href: "https://myboca.us/273/Business-Tax-Receipts" },
      { label: "City of Boca Raton: Business Tax FAQs", href: "https://www.myboca.us/2955/Business-Tax-FAQs" },
      { label: "Boca Raton Code Sec. 8-40: Evidence of doing business", href: `${BOCA}PTIICOOR_CH8LOBUTABURE_ARTIILOBUTA_S8-40EVENBUREAGSEBUTAEALOAPUSSEBUTAEACO` },
      { label: "Boca Raton Code Chapter 28: Zoning", href: `${BOCA}VOII_CH28ZO` },
      { label: "Boca Raton Code Sec. 24-81: Commercial district signs", href: `${BOCA}VOII_CH24SI_ARTIIIRE_DIV2SIREZODI_S24-811LBNC40POREPTPLMCVCLIDIDDCONO` },
      { label: "Downtown Boca: Map and parking", href: "https://www.downtownboca.org/162/Downtown-Boca-Map" },
      { label: "City of Boca Raton: Brightline land lease announcement", href: "https://myboca.us/CivicAlerts.asp?AID=602" },
      { label: "City of Boca Raton: Special Event Applications", href: "https://www.myboca.us/348/Special-Event-Applications" },
      { label: "Boca magazine: Contact", href: "https://bocamag.com/contact-us/" },
      { label: "The Boca Raton Tribune: Contact", href: "https://www.bocaratontribune.com/contact-us/" },
      { label: "Google Business Profile guidelines", href: "https://support.google.com/business/answer/3038177?hl=en" },
      { label: "Festival of the Arts BOCA: About", href: "https://festivalboca.org/about/" },
    ],
  },

  {
    slug: "opening-a-business-downtown-west-palm-beach",
    title: "Opening on Clematis Street or at CityPlace: The West Palm Beach Marketing Checklist",
    description:
      "A marketing checklist for opening in downtown West Palm Beach: tax receipts, DDA grants and free promotion, sign and cafe rules, permits, Google and press.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Get the city business tax receipt, pass its inspections and then get the county receipt before you advertise. Ask the Downtown Development Authority about its grand opening and facade grants and its free promotion forms. Design the storefront to the city's sign code, keep A-frame signs out of sidewalk cafes, file private-property event permits four to six weeks ahead and give Google and Bing the same details as the website.",
    sections: [
      {
        h2: "Two tax receipts and an inspection",
        answer:
          "West Palm Beach requires a local business tax from anyone doing business in the city, and a city receipt is issued only after its inspections pass. The business then needs a Palm Beach County receipt too, and City Hall staff at 401 Clematis Street complete the zoning sign-off on the county form.",
        list: [
          "City business tax receipt from Development Services, issued after the initial inspections pass",
          "A certificate of use for some businesses, including those that rent property",
          "The county receipt from the Palm Beach County Tax Collector, in addition to the city's",
          "Both renew between July 1 and September 30 each year",
        ],
      },
      {
        h2: "Ask the DDA before you spend",
        answer:
          "The West Palm Beach Downtown Development Authority lists grand opening assistance that reimburses part of the cost of an opening and facade improvement grants of up to half the cost of exterior work, including signs and awnings, inside its district. Its larger business incentive grant is closed until further notice, so confirm current terms first.",
        body: [
          "The DDA also promotes downtown businesses for free. One form shares promotions and specials and another shares business anniversaries through its weekly newsletter, website and social media, with every submission approved first. Its events calendar accepts events inside the downtown district that have a permanent event web address, excluding financial seminars, political events and private events.",
          "The city's Community Redevelopment Agency runs separate incentives for its Downtown/City Center and Northwood/Pleasant City districts, including a facade and exterior improvement program downtown. Amounts change, so check the CRA's incentives page before you budget.",
        ],
      },
      {
        h2: "Design the storefront to the city code",
        answer:
          "West Palm Beach regulates signs in Article XIII of Chapter 94 of its zoning code. Billboards are prohibited, wall signs may project no more than 18 inches and murals need a mural permit. A new business may show temporary grand opening signs for up to 30 days, except on lots with more than one business.",
        body: [
          "Restaurants and shops with sidewalk seating have one more rule. A-frame and portable signs are not permitted anywhere in a permitted sidewalk cafe area. A cafe may have one menu board and one specials board attached to the building facade, subject to the sign code, and the sidewalk cafe permit itself runs from October 1 to September 30.",
        ],
      },
      {
        h2: "Permits for the opening event",
        answer:
          "An opening event on private property needs a Private Property Special Event application at least four to six weeks ahead, and tents, stages, generators, banners or alcohol can each trigger additional permits. Events on public property or in the public right-of-way go through the city's Community Events Division instead.",
      },
      {
        h2: "Tell people how to get there",
        answer:
          "Put arrival directions on the website and the Google profile. The city manages the Banyan Street, City Center, Clematis Street, Evernia Street and Sapodilla garages, metered parking takes ParkMobile and Brightline's West Palm Beach station is within walking distance of downtown. The old downtown trolley no longer runs.",
        body: [
          "The city's West Palm Move service, a fixed route with on-demand rides, has replaced the earlier trolley and on-demand pilots, with stops that include downtown and Clematis and CityPlace. BrightBike is the city's official bike share. Brightline lists its station at 260 Quadrille Plaza Drive.",
        ],
      },
      {
        h2: "Search reviews and press",
        answer:
          "Create one Google Business Profile with the business's real-world name and no added keywords, import it into Bing Places and ask every customer for a review the same way, with a link or QR code. Google prohibits incentives for reviews. Then pitch local editors through the routes each outlet publishes.",
        body: [
          "Clematis Street has been the city's main retail street for well over a century, and CityPlace has been a downtown destination since Related opened it in 2000. That history gives an opening a natural local angle. WPTV takes story ideas by phone and through an online form, CBS12 asks for press releases at a single news tips inbox, WPBF takes tips by email and Stet News, a nonprofit newsroom covering only Palm Beach County, takes tips by email too.",
        ],
      },
      {
        h2: "The checklist",
        answer:
          "Work through these in order. Licensing comes before advertising, the DDA comes before spending and the event permit comes four to six weeks before the party. Most downtown opening problems are timing problems, not budget problems.",
        list: [
          "City business tax receipt, inspections passed, then the county receipt",
          "A call to the DDA about grand opening and facade grants before any exterior work",
          "Storefront and signs designed to Article XIII, with the landlord's sign criteria checked",
          "No A-frame signs in the sidewalk cafe area; menu and specials boards on the facade",
          "Private Property Special Event application four to six weeks before the opening",
          "Google Business Profile with the real name, a Bing listing and a website that match",
          "Parking, Brightline and West Palm Move directions on the website",
          "A promotion and an anniversary submitted to the DDA's free forms",
          "A local story pitched through each outlet's published route",
        ],
      },
    ],
    faqs: [
      {
        q: "Does downtown West Palm Beach offer grants for new businesses?",
        a: "Some. The Downtown Development Authority lists grand opening assistance that reimburses part of opening costs and facade improvement grants of up to half the cost of exterior work, including signs and awnings, inside its district. Its larger business incentive grant is closed until further notice, and the city's CRA runs separate incentives for its districts. Confirm current terms with each office before you budget.",
      },
      {
        q: "Can I put an A-frame sign outside my West Palm Beach restaurant?",
        a: "Not in a sidewalk cafe area. West Palm Beach's sidewalk cafe rules say A-frame or portable signs are not permitted anywhere in the permitted sidewalk area. A cafe may have one menu board and one specials board attached to the building facade, subject to the city's sign code. Sidewalk seating itself needs an annual permit that runs October 1 to September 30.",
      },
      {
        q: "How far ahead do I need a permit for a grand opening event in West Palm Beach?",
        a: "Four to six weeks for private property. The city asks for a Private Property Special Event application at least four to six weeks before the event, and tents, stages, generators, banners or alcohol can each trigger additional permits. Events on public property or in the public right-of-way go through the city's Community Events Division instead, so start there if anything spills onto the street.",
      },
      {
        q: "Is there still a free trolley in downtown West Palm Beach?",
        a: "No. The Downtown Development Authority's trolleys stopped running, and the city now operates West Palm Move, a fixed route with on-demand rides serving downtown, Clematis Street and CityPlace. Update any directions that mention the trolley. City-managed garages, metered parking through ParkMobile, Brightline and the BrightBike bike share are the current ways to get downtown.",
      },
    ],
    related: ["branding", "signs", "digital-marketing", "public-relations"],
    sources: [
      { label: "City of West Palm Beach: Business Tax", href: "https://www.wpb.org/Business/Business-Tax-redirect" },
      { label: "Palm Beach County Tax Collector: Local Business Tax", href: "https://www.pbctax.gov/local-business-tax" },
      { label: "DowntownWPB: Business Incentives", href: "https://downtownwpb.com/work/incentives/" },
      { label: "DowntownWPB: Submit an Event", href: "https://downtownwpb.com/explore/submit-an-event/" },
      { label: "West Palm Beach DDA: Promotion forms", href: "https://downtownwpb.submittable.com/submit" },
      { label: "City of West Palm Beach: CRA Incentives", href: "https://www.wpb.org/Departments/Community-Redevelopment-Agency/Incentives" },
      { label: "City of West Palm Beach: Article XIII Sign Regulations", href: "https://online.encodeplus.com/regs/westpalmbeach-fl/doc-viewer.aspx?secid=687" },
      { label: "West Palm Beach Code Chapter 78, Article X: Sidewalk Cafe Seating", href: "https://library.municode.com/fl/west_palm_beach/codes/code_of_ordinances?nodeId=PTIICOOR_CH78STSIPUPL_ARTXSICASE" },
      { label: "City of West Palm Beach: Special Events on Private Property", href: "https://www.wpb.org/Departments/Development-Services/Special-Events-Private-Property" },
      { label: "City of West Palm Beach: Event Permits", href: "https://www.wpb.org/Residents/Community-Events/Event-Permits" },
      { label: "DowntownWPB: Getting Around", href: "https://downtownwpb.com/explore/getting-around/" },
      { label: "Brightline: West Palm Beach Station", href: "https://www.gobrightline.com/train-stations/fl/west-palm-beach" },
      { label: "Florida Division of Historical Resources: Clematis Street marker", href: "https://markers.flheritage.com/home/details/642" },
      { label: "Google: Tips to get more reviews", href: "https://support.google.com/business/answer/3474122?hl=en" },
    ],
  },

  {
    slug: "getting-press-palm-beach-county",
    title: "Getting Press in Palm Beach County: The Outlets and How They Take Stories",
    description:
      "Where local stories run in Boca Raton, West Palm Beach and Palm Beach, and how each outlet takes pitches, from Palm Beach Illustrated to WPTV and Stet News.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Every outlet in Palm Beach County has its own front door. Magazines want short query letters months ahead, television stations take tips by phone, form or email and some hyper-local sites charge businesses to run a press release. Pitch each outlet the way it asks, time the story to its schedule and treat every placement as earned, never promised.",
    sections: [
      {
        h2: "Know what is earned and what is paid",
        answer:
          "Earned coverage is a story an editor chose to run. Paid placement is advertising formatted as news. BocaNewsNow, for example, publishes business press releases through a paid form while nonprofits submit by email. Both can be useful, but only earned coverage carries an editor's judgment, and readers can usually tell the difference.",
      },
      {
        h2: "Magazines",
        answer:
          "The county's magazines plan months ahead and want concise, specific pitches. Palm Beach Illustrated takes query letters only, Boca magazine routes pitches by section and closes arts listings three months out, and Palm Beach Society builds its weekly in-season covers around charitable organizations.",
        table: {
          head: ["Outlet", "What it covers", "How it takes stories"],
          rows: [
            ["Palm Beach Illustrated", "Island and regional life; debuted in 1952 and publishes 11 times a year", "A concise query letter to the editorial director; no unsolicited manuscripts or photos; events through Submit Event"],
            ["Boca magazine", "Dining and fashion through more substantive local issues and trends", "Print queries by email to the editor-in-chief; arts and entertainment items about three months before publication; party photos to the web editor"],
            ["Palm Beach Society", "Weekly covers from early October through late April, each paired with a charitable organization and event", "A contact form and its published info address; no formal submission process described"],
            ["The Coastal Star", "A monthly covering the coastal neighborhoods of Boca Raton and Delray Beach", "News submissions by email to its newsroom"],
          ],
        },
      },
      {
        h2: "Newspapers and online news",
        answer:
          "The Palm Beach Post and the Palm Beach Daily News are Gannett papers in the USA TODAY Network, and both help centers direct story ideas to their staff directories. Pitch the reporter who covers your area or industry. Stet News and the Boca Raton Tribune take tips and releases by email.",
        list: [
          "Palm Beach Post: story ideas through the staff directory linked from its help center",
          "Palm Beach Daily News: the same Gannett help center route to its staff directory",
          "Stet News: a nonprofit newsroom covering Palm Beach County only, taking tips by email",
          "The Boca Raton Tribune: all editorial ideas and press releases by email, no phone calls",
          "BocaNewsNow: paid business press releases; government and nonprofit announcements by email",
        ],
      },
      {
        h2: "Television",
        answer:
          "Each station publishes its own tip route. WPTV takes story ideas by phone and an online form, WPBF takes news tips by phone, by email and through a photo and video upload, and CBS12 asks for every press release at a single news tips inbox. Send visuals and a ready spokesperson with the pitch.",
        table: {
          head: ["Station", "Where it is", "How it takes tips"],
          rows: [
            ["WPTV", "Banyan Boulevard, West Palm Beach", "Phone and an online story idea form"],
            ["WPBF 25", "RCA Boulevard, Palm Beach Gardens", "Phone, news@wpbf.com and a photo and video upload"],
            ["CBS12 (WPEC)", "Fairfield Drive, West Palm Beach", "All press releases to newstips@cbs12.com, plus a separate tipline"],
          ],
        },
      },
      {
        h2: "Community channels that lead to coverage",
        answer:
          "Local press often follows local presence. Chambers, downtown authorities and the charity calendar put a business in front of the people reporters already talk to. Several of these channels are free or come with membership, and they reward businesses that show up consistently over years.",
        list: [
          "The West Palm Beach DDA shares downtown businesses' promotions and anniversaries for free through its newsletter, website and social media",
          "The Greater Boca Raton Chamber's leads groups meet twice a month, one business per category",
          "The Palm Beach Chamber's Palm Beach Guide reaches more than 15,000 residents and every guest room at The Breakers, with advertising open to members",
          "Boca magazine's Charity Register each September maps the season's major fundraisers",
          "A charity event in the Town of Palm Beach needs a charitable solicitation permit before invitations go out",
        ],
      },
      {
        h2: "How to pitch so editors answer",
        answer:
          "Lead with what is new, say why it matters locally and make it easy to say yes. A short pitch to the right person, sent through the route the outlet asks for, beats a long release sent everywhere. Have photos, facts and a spokesperson ready before you hit send.",
        list: [
          "One sentence that states the news, then two or three that prove it",
          "A local angle tied to a place, a season or a community the outlet covers",
          "Images you have the rights to and permission for, including from anyone pictured",
          "A spokesperson who is reachable the same day",
          "Timing built backward from the outlet's lead time, months for magazines and days for television",
          "Nothing promised to a client that only an editor can decide",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I send a press release to local TV in Palm Beach County?",
        a: "Use each station's published route. CBS12 asks for all press releases at newstips@cbs12.com, WPBF takes news tips at news@wpbf.com and by phone and WPTV takes story ideas by phone and through an online form. Keep the pitch short, lead with what is happening and when, and offer visuals and a spokesperson who can talk that day.",
      },
      {
        q: "Will the Palm Beach Post publish my press release?",
        a: "Not automatically. The Post is a Gannett newspaper in the USA TODAY Network, and its help center directs people with local story ideas to its staff directory. Editors choose what to cover based on news value. Send a short, specific pitch to the reporter who covers your industry or area rather than a generic release to every address you can find.",
      },
      {
        q: "Should I pay to publish a press release in Palm Beach County?",
        a: "Only if you understand what you are buying. Some local sites, such as BocaNewsNow, publish business press releases as a paid service, which guarantees placement but carries the credibility of advertising. Earned coverage costs nothing to run and carries an editor's judgment, but it is never guaranteed. Many announcements deserve one paid placement and a separate earned pitch with a real story.",
      },
      {
        q: "When is the best time to pitch Palm Beach media?",
        a: "Earlier than you think. Boca magazine closes its arts and entertainment section about three months before publication, Palm Beach Illustrated publishes 11 times a year and Palm Beach Society runs weekly covers only from early October through late April. Television and online outlets move in days. Build the calendar backward from the date that matters.",
      },
    ],
    related: ["public-relations", "branding", "digital-marketing"],
    sources: [
      { label: "Palm Beach Illustrated: Contact", href: "https://palmbeachillustrated.com/contact-us/" },
      { label: "Palm Beach Illustrated: About", href: "https://palmbeachillustrated.com/about-us/" },
      { label: "Boca magazine: Contact", href: "https://bocamag.com/contact-us/" },
      { label: "Palm Beach Society: Cover schedule", href: "https://www.pbsociety.com/editorial-schedule" },
      { label: "The Coastal Star: Contact", href: "https://thecoastalstar.com/contact-us" },
      { label: "The Palm Beach Post Help Center", href: "https://help.palmbeachpost.com/contact-us" },
      { label: "Palm Beach Daily News Help Center", href: "https://help.palmbeachdailynews.com/contact-us" },
      { label: "Stet News: Contact", href: "https://stetnews.org/contact/" },
      { label: "The Boca Raton Tribune: Contact", href: "https://www.bocaratontribune.com/contact-us/" },
      { label: "BocaNewsNow: Press releases", href: "https://bocanewsnow.com/pressrelease/" },
      { label: "WPTV: Contact the station", href: "https://support.wptv.com/support/solutions/articles/5000717472-contact-the-station" },
      { label: "WPBF 25: Contact", href: "https://www.wpbf.com/article/contact-us/1317570" },
      { label: "CBS12: Station contact", href: "https://cbs12.com/station/contact" },
      { label: "West Palm Beach DDA: Promotion forms", href: "https://downtownwpb.submittable.com/submit" },
      { label: "Palm Beach Chamber of Commerce: Palm Beach Guide", href: "https://www.palmbeachchamber.com/palm-beach-guide/" },
    ],
  },

  {
    slug: "boca-west-palm-palm-beach-marketing-differences",
    title: "Boca Raton vs West Palm Beach vs Palm Beach: Marketing to Three Different Markets",
    description:
      "How marketing differs across Boca Raton, West Palm Beach and the Town of Palm Beach: who decides, what the street allows, the press and the timing.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Boca Raton is the county's corporate center, with a highly educated, multilingual audience and a strict appearance code. West Palm Beach is the downtown, with Clematis Street, CityPlace, Brightline and the finance firms the county markets as Wall Street South. The Town of Palm Beach is small, seasonal and private, with the tightest sign rules of the three. One brand can serve all three markets, but the channels and the street-level execution change.",
    sections: [
      {
        h2: "Three markets in one county",
        answer:
          "Palm Beach County has an estimated 1.58 million residents and 39 cities and towns, and its Business Development Board names Boca Raton, West Palm Beach and Palm Beach among the most popular places for relocating financial firms. The three sit within a short drive of each other and behave like different markets.",
      },
      {
        h2: "Boca Raton",
        answer:
          "Boca is the county's headquarters city. The city says it holds more than half of the county's corporate headquarters, and the Census shows a highly educated, multilingual and older audience. Buyers research before they call, and the city's Community Appearance Board holds the street to a written standard of understated design.",
        list: [
          "More than six in ten adults hold a bachelor's degree or higher",
          "About a quarter of residents speak a language other than English at home",
          "Nearly a quarter of residents are 65 or older",
          "Signs are limited to three colors and dimensional letters, with tight window limits",
          "Local press includes Boca magazine, the Boca Raton Tribune and The Coastal Star",
        ],
      },
      {
        h2: "West Palm Beach",
        answer:
          "West Palm Beach is the county's downtown and the center of its finance story. Clematis Street has been the main retail street since Henry Flagler's era, CityPlace has drawn crowds since 2000 and Brightline puts a station within walking distance of both. The Business Development Board says over 300 financial firms are in the county.",
        list: [
          "Wall Street South is the Business Development Board's own initiative to market the county to financial firms",
          "The Downtown Development Authority offers grants and free promotion to downtown businesses",
          "The sign code bans billboards and allows temporary grand opening signs for up to 30 days",
          "Television stations, the Palm Beach Post and Stet News are all reachable from downtown",
        ],
      },
      {
        h2: "The Town of Palm Beach",
        answer:
          "The island is small, seasonal and private. The 2020 Census counted 9,245 residents, the Town estimates another 15,000 seasonal residents from November to May and its commerce is mostly banks, shops, hotels and restaurants serving the town. Signs are limited to a name, one small logo and 10 or 20 square feet.",
        list: [
          "Close to two thirds of residents are 65 or older",
          "Banners, balloons and signs on awnings are banned, and lit signs need Town Council approval",
          "Charity events need a Town permit, and commercial shoots on Town property need a filming permit",
          "Palm Beach Illustrated, Palm Beach Society and the Palm Beach Daily News cover island life",
        ],
      },
      {
        h2: "How the three compare",
        answer:
          "The same company can market well in all three places, but it should not market the same way. The table below compares what decides a sale, what the street allows, where the press is and when to move in each market.",
        table: {
          head: ["", "Boca Raton", "West Palm Beach", "Town of Palm Beach"],
          rows: [
            ["Who decides", "Corporate teams and careful, researched consumers", "Downtown professionals, finance newcomers and longtime locals", "Referrals among a small, private, seasonal community"],
            ["What wins", "Proof, polish and consistency", "Clarity, presence and a strong downtown address", "Discretion, craft and introductions"],
            ["The street", "Dimensional letters, three colors, appearance board review", "Article XIII sign code, 30-day grand opening signs", "10 or 20 square feet, name and logo only, no banners"],
            ["Local press", "Boca magazine, Boca Raton Tribune, The Coastal Star", "Palm Beach Post, WPTV, CBS12, Stet News", "Palm Beach Illustrated, Palm Beach Society, Daily News"],
            ["Timing", "December and March downtown crowds", "GreenMarket from October, the boat show in March", "November to May season, installs before November"],
          ],
        },
      },
      {
        h2: "One brand across all three",
        answer:
          "Build one brand with rules flexible enough for every surface: a full palette for screens and print, a restrained version for Boca and the island, a logo that reads inside a 12-inch square and a voice that sounds composed in any room. Then adjust the channels and timing for each market.",
        list: [
          "One positioning sentence that every market hears the same way",
          "A logo and letterforms tested at the smallest size any town allows",
          "Separate location pages that describe each town accurately",
          "A Google and Bing presence that is honest about where the business actually is",
          "A press plan that names different outlets and lead times for each market",
          "A calendar built around the season, not the fiscal year",
        ],
      },
    ],
    faqs: [
      {
        q: "Should a business market differently in Boca Raton and Palm Beach?",
        a: "Yes, in execution if not in identity. Boca's audience is larger, corporate and research-driven, and its sign code allows more than the island's. The Town of Palm Beach is small and seasonal, values privacy and allows a sign only a name, one small logo and 10 or 20 square feet. Keep the brand the same and change the channels, the timing and the storefront.",
      },
      {
        q: "Does one website work for all three markets?",
        a: "Yes, if it is honest about location. One site can serve Boca Raton, West Palm Beach and Palm Beach, with a page for each market that describes what the business actually does there. Avoid pages that swap town names into the same text. Search engines and AI assistants reward specific, accurate local detail and ignore pages that read like templates.",
      },
      {
        q: "Why do local sign rules matter for marketing?",
        a: "Because the storefront is part of the brand, and each town decides what it can look like. Boca Raton limits signs to three colors and dimensional letters, West Palm Beach allows temporary grand opening signs for 30 days and the Town of Palm Beach limits a business to its name and one small logo. A brand designed without those rules ends up redesigned at the permit counter.",
      },
    ],
    related: ["branding", "digital-marketing", "public-relations", "signs"],
    sources: [
      { label: "U.S. Census Bureau QuickFacts: Palm Beach County", href: "https://www.census.gov/quickfacts/fact/table/palmbeachcountyflorida/PST045224" },
      { label: "Business Development Board: Financial Services", href: "https://bdb.org/industries/financial-services/" },
      { label: "City of Boca Raton: Office of Economic Development", href: "https://myboca.us/470/Economic-Development" },
      { label: "U.S. Census Bureau QuickFacts: Boca Raton", href: "https://www.census.gov/quickfacts/fact/table/bocaratoncityflorida/PST045224" },
      { label: "Florida Division of Historical Resources: Clematis Street marker", href: "https://markers.flheritage.com/home/details/642" },
      { label: "Related Companies: CityPlace announcement", href: "https://www.related.com/press-releases/2017-12-12/related-companies-announces-plans-continued-evolution-cityplace-dynamic" },
      { label: "Brightline: West Palm Beach Station", href: "https://www.gobrightline.com/train-stations/fl/west-palm-beach" },
      { label: "U.S. Census Bureau QuickFacts: Palm Beach town", href: "https://www.census.gov/quickfacts/fact/table/palmbeachtownflorida/PST045224" },
      { label: "Town of Palm Beach Annual Comprehensive Financial Report", href: "https://townofpalmbeach.com/DocumentCenter/View/28941" },
      { label: "Town of Palm Beach Code Sec. 134-2438: Size of sign", href: `${PB}PTIICOOR_CH134ZO_ARTXISI_DIV3CODI_S134-2438SISI` },
      { label: "Boca Raton Code Sec. 24-56: Sign design standards", href: `${BOCA}VOII_CH24SI_ARTIIIRE_DIV1STAPALSI_S24-56GEDESTALSI` },
    ],
  },
]
