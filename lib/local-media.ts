import type { LocalService } from "./types"

/**
 * Photography and video production pages for the Town of Palm Beach and Boca Raton.
 * Facts verified on primary sources 2026-10-04: the Town of Palm Beach code
 * (Chapter 22 Article IV as re-enacted by Ord. No. 036-2024, read in full), the
 * Town's FAQ, planning page and financial report, the Boca Raton code and city
 * pages, the Palm Beach County Film and Television Commission, FAU, the FAA,
 * the Florida Statutes, the U.S. Copyright Office and the outlets' own sites.
 * Not confirmed: that the City of Boca Raton is one of the film commission's
 * participating municipalities by name, so the copy says to confirm jurisdiction.
 * Copy laws: VOICE.md.
 */

const PB_CODE = "https://library.municode.com/fl/palm_beach/codes/code_of_ordinances?nodeId="
const BOCA_CODE = "https://library.municode.com/fl/boca_raton/codes/code_of_ordinances?nodeId="
const TOWN_FAQ = "https://www.townofpalmbeach.com/FAQ.aspx?TID=37"
const FTC_PERMITS = "https://www.pbfilm.com/free-one-stop-permitting"
const DRONE_LAW = "http://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0934/Sections/0934.50.html"
const IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

export const mediaTowns: LocalService[] = [
  {
    town: "palm-beach",
    service: "photography",
    metaTitle: "Commercial Photographer in Palm Beach FL | Epic Wolf",
    metaDescription:
      "Commercial photography for Town of Palm Beach businesses, planned around the Town's filming permit, its rules for homes and the island's privacy.",
    kicker: "Commercial photographer in Palm Beach, FL",
    headline: "Photographs Made With Permission First",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces commercial photography for businesses in the Town of Palm Beach: shops and galleries on Worth Avenue, hotels and restaurants, advisory firms and the charities that fill the season. We work through vetted photographers, and every shoot starts with permission, because the Town requires a Council-approved permit for commercial photography on its streets, sidewalks, parks and beaches.",
    intro: [
      "Most towns treat a still camera as harmless. Palm Beach does not. The Town's filming ordinance defines a camera as any device used to produce motion pictures, commercials, still photography or any other photography, and it requires a permit from the Town Council before a shoot uses Town property, affects it or calls on Town services. A model posed on a Worth Avenue sidewalk is a permit question before it is a creative one.",
      "Homes are stricter still. The zoning code for the residential districts lists film-making and magazine feature photography among the commercial uses prohibited on residential property, and the filming ordinance says it offers no permit path around that. So the island's commercial pictures are made where commerce is allowed: inside the shop, the gallery, the dining room, the hotel suite and the office, with the owner's written consent.",
      "That constraint suits the place. Palm Beach clients expect to be asked before they are photographed, and a brand here is read up close, in a window, on an invitation and on a magazine page. We plan the shot list around what can be made on private commercial property, book the photographer whose eye fits the subject and deliver a library the brand can draw on for the whole season.",
    ],
    ground: [
      {
        title: "Stills count as filming",
        body: "The Town's code defines filming operations as the activities needed to create still, live or motion pictures for any print or electronic media, and names still photography and aerial devices in its definition of a camera. Anyone conducting them on Town property, affecting it or requiring Town services must first obtain a filming permit from the Town Council.",
        source: { label: "Town Code Sec. 22-127", href: `${PB_CODE}PTIICOOR_CH22BU_ARTIVFIOP_DIV1GE_S22-127DE` },
      },
      {
        title: "The exemptions are narrow",
        body: "Personal or family pictures are exempt only when the session lasts no longer than one hour including setup, involves no more than 15 people and uses hand-held cameras with at most one tripod. Students and faculty shooting for education and news media covering ongoing news events are exempt too. A commercial shoot fits none of these.",
        source: { label: "Town Code Sec. 22-152", href: `${PB_CODE}PTIICOOR_CH22BU_ARTIVFIOP_DIV2FIPE_S22-152EXPR` },
      },
      {
        title: "Residences",
        body: "The filming ordinance states that it does not create a permitting scheme for commercial filming operations in private residential buildings in the Town's residential zoning districts, because those uses are prohibited there by the zoning code. Confirm with the Town's planning staff before scheduling any commercial shoot at a home.",
        source: { label: "Town Code Sec. 22-126", href: `${PB_CODE}PTIICOOR_CH22BU_ARTIVFIOP_DIV1GE_S22-126PU` },
      },
      {
        title: "Landmarks as settings",
        body: "The Town says it protects more than 328 landmark properties, sites and vistas under its Historic Preservation Ordinance. The designation covers the building. Access for a shoot still belongs to the owner, and it should be granted in writing.",
        source: { label: "Town of Palm Beach: Planning, Zoning and Development Review", href: "https://townofpalmbeach.com/1292/Planning-Zoning-Development-Review" },
      },
      {
        title: "The society calendar",
        body: "Each week from October through April, Palm Beach Society gives its cover to one charitable organization, its event and the venue. Event pictures meant for the social pages have to be planned against that schedule and delivered the way each publication asks.",
        source: { label: "Palm Beach Society: Cover schedule", href: "https://www.pbsociety.com/editorial-schedule" },
      },
      {
        title: "Who owns the pictures",
        body: "The U.S. Copyright Office says the author of a work is ordinarily the person who created it. A commissioned work is made for hire only if it falls within the categories the Copyright Act lists and both parties sign a written agreement saying so. Usage rights for a shoot belong in the contract, reviewed by an attorney where the stakes are high.",
        source: { label: "U.S. Copyright Office Circular 30: Works Made for Hire", href: "https://www.copyright.gov/circs/circ30.pdf" },
      },
    ],
    plan: [
      {
        title: "Clear each frame",
        body: "We sort the shot list by where the camera stands: private commercial property, Town property or a residence. The first needs the owner's signature. The second needs the Town Council. The third usually comes off the list or moves indoors to a showroom, a hotel or a club that agrees to host it.",
      },
      {
        title: "Ask everyone in the picture",
        body: "Staff, clients, guests and neighbors sign a release or stay out of frame. On the island that is manners as much as paperwork, and it is the reason a brand can keep using its photographs for years without an awkward phone call.",
      },
      {
        title: "Shoot once for the season",
        body: "One well-planned day with the right photographer produces the storefront, the product, the people and the details, cropped for the website, print, press and social. The files arrive named, organized and licensed in writing for the uses the brand actually needs.",
      },
    ],
    cta: {
      line: "Send us the address and the shot list.",
      body: "We will tell you which frames need only the owner's consent, which need the Town Council and how we would schedule the shoot around both.",
    },
    faqs: [
      {
        q: "Do I need a permit for a commercial photo shoot in Palm Beach?",
        a: "Yes, whenever the shoot uses Town property. The Town of Palm Beach requires a filming permit from the Town Council for filming operations on its streets, sidewalks, parks, beaches and other public places, and its definition includes still photography. A shoot that stays on private commercial property with the owner's consent, and neither affects Town property nor needs Town services, falls outside that requirement as written. Confirm the details with the Town Clerk.",
      },
      {
        q: "Can I hold a commercial photo shoot at a private home in Palm Beach?",
        a: "Generally not in the Town's residential districts. The filming ordinance says it creates no permit process for commercial filming operations in private residential buildings there, because the zoning code prohibits those uses, and the zoning text names film-making and magazine feature photography. Speak with the Town's planning staff before planning anything at a residence. Many brands move the scene to a showroom, a hotel or another commercial setting instead.",
      },
      {
        q: "Can you photograph a charity gala on the island?",
        a: "Yes, with the host's permission and a plan for the guests' privacy. We agree in advance who may be photographed, how names are collected and where the pictures can run. Palm Beach Illustrated says it does not accept or return unsolicited photos, so coverage is pitched by query first. The Town's charitable solicitation permit also asks for a board resolution stating the event's location and date, which fixes the shoot date early.",
      },
      {
        q: "Can a brand photograph Worth Avenue Association events?",
        a: "Yes, but ask the Association first and expect a permit question. The Worth Avenue Association runs recurring events that include Wednesday historical walking tours, a Christmas tree lighting, a pet parade and costume contest in March and a Spring Bunny Stroll in April. They take place on public sidewalks, which are Town property, so pictures made for a company's own marketing can fall under the filming permit.",
      },
      {
        q: "Who owns the photos from a commercial shoot?",
        a: "The photographer usually does, unless the contract says otherwise. The U.S. Copyright Office explains that the author is ordinarily the person who created the work, and that a commissioned work counts as made for hire only in listed categories and with a signed written agreement. We put the license or the transfer in writing before the shoot, so the brand knows exactly where and how long it can use each image.",
      },
    ],
    guides: ["filming-and-photo-permits-palm-beach-county", "planning-a-brand-shoot-palm-beach-county", "market-a-palm-beach-business-without-looking-loud"],
    image: IMAGE,
  },

  {
    town: "palm-beach",
    service: "video-production",
    metaTitle: "Video Production in Palm Beach FL | Epic Wolf",
    metaDescription:
      "Video production for Town of Palm Beach businesses and nonprofits, scheduled around the Town Council filming permit, its hours and its drone rules.",
    kicker: "Video production company in Palm Beach, FL",
    headline: "Film the Island Without Disturbing It",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces video for Town of Palm Beach businesses and nonprofits: brand films, hospitality and property films, event coverage and short social pieces. Crews and equipment come through vetted production partners. The schedule is built around the Town's filming ordinance, which sends every permit application to a public hearing before the Town Council and limits when, where and how often cameras can work.",
    intro: [
      "Palm Beach re-enacted its filming rules in December 2024, and the article reads like a town protecting its quiet. An application has to reach the Town at least 20 business days before the Council meeting that will hear it. A permitted crew cannot work between 8 and 10 in the morning or between 3 and 5 in the afternoon, cannot set up on any street paved for vehicles and cannot block a sidewalk.",
      "The scarcest thing is the calendar. The ordinance allows filming on no more than seven days in any one month across the whole town, and applications are considered in the order they were filed. If another production already holds those days, the next one waits. The county's film commission, which permits public property for more than 50 municipalities and agencies, says it does not issue permits for the Town, so the request goes to the Town itself.",
      "The strongest island films are therefore written to need very little of the public realm. Interiors, courtyards, terraces and private commercial grounds carry the story with the owner's consent, and a permitted exterior appears only where it earns its place. The audience justifies the care. The Town estimates 15,000 seasonal residents join its full-time population from November to May, and a film finished in early fall is ready when they start making plans.",
    ],
    ground: [
      {
        title: "The clock",
        body: "A completed filming permit application must be submitted no less than 20 business days before the Town Council meeting at which it will be considered. If the plan changes after approval, the applicant must file a new application showing the change and win approval at the next Council meeting before going ahead.",
        source: { label: "Town Code Sec. 22-153", href: `${PB_CODE}PTIICOOR_CH22BU_ARTIVFIOP_DIV2FIPE_S22-153AP` },
      },
      {
        title: "Hours and streets",
        body: "No permitted activity may take place between 8 and 10 a.m. or between 3 and 5 p.m., none may take place on a street paved for vehicular use and normal foot, bicycle and car traffic may not be impeded. Filming operations are capped at seven days in any one month, and once one applicant holds them no other permit is granted for that month.",
        source: { label: "Town Code Sec. 22-154", href: `${PB_CODE}PTIICOOR_CH22BU_ARTIVFIOP_DIV2FIPE_S22-154PRCOISFIPE` },
      },
      {
        title: "Drones and the Town",
        body: "The Town's FAQ says no additional Town permit is required for a drone beyond what the FAA requires, and that drones must be operated and registered under FAA and State of Florida rules. The filming ordinance separately counts aerial devices as cameras, so a commercial shoot that uses Town property needs its filming permit however the camera is carried.",
        source: { label: "Town of Palm Beach FAQ: Event permits", href: TOWN_FAQ },
      },
      {
        title: "The pilot",
        body: "The FAA says that to fly a drone under its Small UAS Rule, Part 107, the pilot must obtain a Remote Pilot Certificate from the FAA, and that certificate holders complete recurrent training every 24 calendar months. Commercial flights legally require an FAA-certified remote pilot, and a certified pilot flies every job we produce.",
        source: { label: "FAA: Become a Certificated Remote Pilot", href: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
      },
      {
        title: "Privacy from the air",
        body: "Florida law says a person may not use a drone with an imaging device to record privately owned real property, or its owner or occupants, with the intent to conduct surveillance in violation of a reasonable expectation of privacy, without written consent. On an island of hedged estates, aerial shots are framed on the client's own property.",
        source: { label: "Florida Statutes Sec. 934.50", href: DRONE_LAW },
      },
      {
        title: "Who is watching",
        body: "The Town's annual financial report says it serves 9,191 full-time residents plus an estimated 15,000 additional seasonal residents from November to May. A film meant for that audience should be finished and published before they arrive, not shot while they are in town.",
        source: { label: "Town of Palm Beach Annual Comprehensive Financial Report", href: "https://townofpalmbeach.com/DocumentCenter/View/28941" },
      },
    ],
    plan: [
      {
        title: "Write for private ground",
        body: "The script and the storyboard come first, and they are written to the locations the client controls or can borrow with a signature. Every scene that would touch a sidewalk, a park or the beach is marked, then kept, moved or cut on its merits.",
      },
      {
        title: "File or stay inside",
        body: "If a public exterior stays in, we prepare the Town's application, the insurance and the hold harmless agreement, and count back from the Council meeting. The person leading the shoot carries the permit on the day, as the ordinance requires. If nothing public remains, the schedule is the client's own.",
      },
      {
        title: "Small crew and short days",
        body: "Production partners bring the smallest crew that can do the work properly, arrive outside the restricted hours and leave no trace. The edit then yields the main film and the shorter cuts for the website, email and social from the same footage.",
      },
    ],
    cta: {
      line: "Tell us the story and where it happens.",
      body: "A partner will reply with which scenes can be filmed on private property, which would need the Town Council and what that does to the schedule.",
    },
    faqs: [
      {
        q: "How long does a filming permit take in the Town of Palm Beach?",
        a: "Plan on more than a month. The Town requires a completed application at least 20 business days before the Town Council meeting that will consider it, and every application is set for a public hearing. The Council can approve, approve with conditions or deny. Because filming is capped at seven days in any one month for the whole town, an early filing also protects the dates.",
      },
      {
        q: "Does the county film commission issue permits for Palm Beach island?",
        a: "No. The Palm Beach County Film and Television Commission, which handles free permits for public property in more than 50 municipalities and agencies, states that its office does not issue permits for the Town of Palm Beach and tells productions to contact the Town directly. A shoot that crosses the bridge during one day may therefore need two separate approvals, one from each side.",
      },
      {
        q: "Can you fly a drone for a video in Palm Beach?",
        a: "Yes, within federal, state and Town rules. The Town's FAQ says it requires no drone permit beyond what the FAA requires, and Florida law restricts recording private property and the people on it without written consent. If the production uses Town property, the filming permit applies as well. A certified remote pilot flies every job and checks the airspace before any flight is promised.",
      },
      {
        q: "What insurance does a Palm Beach filming permit require?",
        a: "The Town's FAQ lists general liability of at least $1,000,000 per occurrence and $2,000,000 aggregate for a minor commercial filming permit, and at least $10,000,000 per occurrence for a large-scale one, with the Town endorsed as additional insured. Higher aviation or marine coverage applies when aircraft or watercraft are involved. The certificate is not due until the Town Council has approved the application.",
      },
      {
        q: "Can you film a gala or a private event on the island?",
        a: "Yes, inside the venue and with the host's consent. Event video on the island is planned around the guests: who has agreed to appear, which moments are off limits and where the film will be shown afterward. For charitable events, the Town's permit FAQ calls for trained crowd control managers who have no other duties, so the crew plans its positions with the organizer well before the doors open.",
      },
    ],
    guides: ["filming-and-photo-permits-palm-beach-county", "drone-rules-palm-beach-county", "planning-a-brand-shoot-palm-beach-county"],
    image: IMAGE,
  },

  {
    town: "boca-raton",
    service: "photography",
    metaTitle: "Commercial Photographer in Boca Raton FL | Epic Wolf",
    metaDescription:
      "Commercial photography for Boca Raton companies: executive portraits, team headshots, workplace and brand libraries, with every location cleared first.",
    kicker: "Commercial photographer in Boca Raton, FL",
    headline: "Pictures That Pass the Brand Review",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces commercial photography for Boca Raton companies: executive portraits and team headshots, workplace and brand libraries, product, architecture and event coverage. We work through vetted photographers matched to the subject. The city says Boca holds more than half of Palm Beach County's corporate headquarters, so the pictures are made to satisfy a brand standard as well as the eye.",
    intro: [
      "Boca's demand for photography starts in its office parks. The city's economic development office counts more than half of the county's corporate headquarters here and more than 12 million square feet of Class A office space. Those companies need leadership portraits that match from the chief executive to the newest hire, an honest picture of the workplace for recruiting and images a communications team can hand to the press.",
      "The settings are a mix of private and public, and the rules differ. A lobby, a campus or a restaurant needs the owner's or the landlord's consent. City parks are another matter. The city code reserves commercial activity for compensation inside a park to the recreation department and its concessionaires, and it counts the beaches as park areas. For public property around the county, the Palm Beach County Film and Television Commission runs a free permit process that lists still photography as a project type.",
      "Florida Atlantic University keeps its own door. Commercial crews are told to contact the Facilities Department, complete facilities use request forms and apply several weeks ahead. We settle which permission each location needs before a photographer is booked, so the shoot day is spent making pictures.",
    ],
    ground: [
      {
        title: "Why portraits are in demand",
        body: "The City of Boca Raton's economic development office says the city is home to more than half of Palm Beach County's corporate headquarters and has more than 12 million square feet of Class A office space. Headquarters need consistent executive portraits, recruiting images and press-ready pictures.",
        source: { label: "City of Boca Raton: Office of Economic Development", href: "https://myboca.us/470/Economic-Development" },
      },
      {
        title: "Parks and beaches",
        body: "The city code says no person other than the recreation services department or its licensed concessionaires may engage in any commercial activity for compensation or solicit business within a park or recreational area. The chapter's definition of a park includes beaches. Ask the city before planning a paid shoot in one.",
        source: { label: "Boca Raton Code Sec. 11-64", href: `${BOCA_CODE}PTIICOOR_CH11PARE_ARTIIIRE_DIV1GE_S11-64VESEPAAR` },
      },
      {
        title: "Public property permits",
        body: "The Palm Beach County Film and Television Commission issues free permits for commercial productions on public property such as parks, beaches, streets and sidewalks, working with more than 50 municipalities, taxing districts and county departments. It asks productions to contact its office to identify which municipality has jurisdiction over a location.",
        source: { label: "Palm Beach County Film and Television Commission: One-Stop Permitting", href: FTC_PERMITS },
      },
      {
        title: "On campus",
        body: "Florida Atlantic University says commercial and student crews interested in filming on any of its campuses should contact the Facilities Department for permission and guidelines, complete the facilities use request forms and submit requests in writing several weeks before the date.",
        source: { label: "FAU: Filming at FAU", href: "https://www.fau.edu/public-affairs/marketing-services/filming-at-fau/" },
      },
      {
        title: "Event photos for Boca magazine",
        body: "Boca magazine's People section asks for high-resolution photos at 300 dpi, first and last names for every person pictured and a post-event release or a few paragraphs on the who, what, where and when. It will not run more than one photo of the same person, so it asks for a variety of people.",
        source: { label: "Boca magazine: Contact", href: "https://bocamag.com/contact-us/" },
      },
      {
        title: "Copyright starts at capture",
        body: "The U.S. Copyright Office says a work is under copyright protection the moment it is created and fixed in a tangible form. A photograph is protected as soon as it is taken, which is why the license or transfer to the company should be agreed in writing before the shoot.",
        source: { label: "U.S. Copyright Office: Copyright in General", href: "https://www.copyright.gov/help/faq/faq-general.html" },
      },
    ],
    plan: [
      {
        title: "Start from the standards",
        body: "We read the brand guidelines, look at what the company already has and agree on a written look: background, light, crop, wardrobe and expression. For a headquarters that document matters more than any single portrait, because it is what keeps next year's hires matching this year's.",
      },
      {
        title: "Clear the locations",
        body: "Landlord consent for the lobby and the campus, the city's answer for any park or beach, the film commission for other public property and the university's forms for anything at FAU. Each permission is in hand before the calendar invite goes out.",
      },
      {
        title: "Run the day like a schedule",
        body: "People arrive in short slots, see their frames before they leave and approve one. The photographer then covers the workplace and the details. Files come back retouched to one standard, named by person and sized for the website, LinkedIn, proposals and press.",
      },
    ],
    cta: {
      line: "Send us the headcount and the locations.",
      body: "We will reply with how we would structure the shoot days, which permissions each location needs and how the finished library would be organized.",
    },
    faqs: [
      {
        q: "Do I need a permit for a commercial photo shoot in Boca Raton?",
        a: "It depends on whose property the camera is on. A shoot inside an office, a store or a private campus needs the owner's or landlord's consent. For public property, the Palm Beach County Film and Television Commission issues free permits and lists still photography among its project types, and it asks productions to contact it to confirm which municipality has jurisdiction. City parks carry their own limits on commercial activity.",
      },
      {
        q: "Can we take company photos on the beach or in a city park in Boca Raton?",
        a: "Ask the city before you plan it. Boca Raton's code says no one other than the recreation services department or its licensed concessionaires may engage in commercial activity for compensation inside a park or recreational area, and its definition of a park includes beaches. We get the department's answer in writing or choose a private setting with similar light, such as a terrace or a courtyard.",
      },
      {
        q: "How do you keep headshots consistent across a large company?",
        a: "By writing the look down before anyone is photographed. Background, lighting, lens, crop, wardrobe guidance and retouching limits go into a one-page standard, and every session follows it. New hires are photographed to the same standard later, in the same spot or with the same portable setup. The result is a leadership page and a proposal deck where no portrait looks like it came from a different company.",
      },
      {
        q: "What does Boca magazine need to run photos from our event?",
        a: "It asks for high-resolution images with full names and a short account of the event. Boca magazine's People section specifies 300 dpi photos, first and last names for everyone pictured and a post-event release or a couple of paragraphs covering who, what, where and when. It will not run several photos of the same person. Publication is the editors' decision, and we shoot to their specification regardless.",
      },
      {
        q: "Can a company photograph on the FAU campus?",
        a: "Only with the university's permission. Florida Atlantic University directs commercial crews to its Facilities Department for permission and guidelines, requires facilities use request forms and asks for written requests several weeks before the date because other departments may need to review them. University policies stay in effect during the shoot. We build that lead time into the plan whenever a campus location is on the list.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "boca-west-palm-palm-beach-marketing-differences"],
    image: IMAGE,
  },

  {
    town: "boca-raton",
    service: "video-production",
    metaTitle: "Video Production in Boca Raton FL | Epic Wolf",
    metaDescription:
      "Video production for Boca Raton companies: brand films, recruiting and executive video, event coverage and drone work with permits and insurance handled.",
    kicker: "Video production company in Boca Raton, FL",
    headline: "Video Planned Before the Camera Rolls",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces video for Boca Raton companies and organizations: brand films, recruiting and culture pieces, executive messages, testimonials, event coverage and social cuts. Crews come through vetted production partners, and a certified remote pilot flies any drone work. For public locations we handle the county film commission's permit application, the insurance certificates and the schedule.",
    intro: [
      "A Boca company usually makes video for an audience that already knows the category: a board, a hiring pool, a buyer comparing three vendors. That calls for a clear script, a prepared speaker and a film short enough to be watched to the end. Most of it is shot on private property, in the office, the lab, the showroom or the clinic, where the permission needed is the owner's.",
      "Public locations run through one office. The Palm Beach County Film and Television Commission issues permits for commercial productions on public property at no charge, asks for three full business days to process a standard request and requires a $1 million liability policy. It adds that a shoot on private property may need a permit when it affects adjacent roads or sidewalks. Downtown, the Mizner Park Amphitheater is owned and operated by the city and rented through its own application.",
      "Aerials add federal and state rules. The film commission folds the FAA's Part 107 rule into its permit and asks for the pilot's certificate, the drone's registration and any airspace approval. A commercial drone flight legally requires an FAA-certified remote pilot, so the pilot is confirmed before an aerial shot is written into the script.",
    ],
    ground: [
      {
        title: "The county permit",
        body: "The film commission asks for three business days to process a standard permit and says shoots with road closures, traffic control or closed public areas take longer. Securing a permit requires a $1 million comprehensive or commercial general liability policy, and the number of certificates depends on where the production films.",
        source: { label: "Palm Beach County Film and Television Commission: One-Stop Permitting", href: FTC_PERMITS },
      },
      {
        title: "The amphitheater",
        body: "The city says the Mizner Park Amphitheater is owned and operated by the City of Boca Raton and can be rented by private or nonprofit organizations for concerts, performances, fundraising events and festivals. An event video there starts with the rental application and the promoter's rules on cameras.",
        source: { label: "City of Boca Raton: Mizner Park Amphitheater Rental Info", href: "https://www.myboca.us/835/Rental-Info" },
      },
      {
        title: "Drone paperwork",
        body: "For commercial drone filming, the film commission requires a registered aircraft under 55 pounds, a copy of the remote pilot certificate and a copy of any FAA airspace approval obtained in advance. It limits flights to daylight or twilight and to 400 feet above the ground unless the drone stays within 400 feet of a structure.",
        source: { label: "Palm Beach County Film and Television Commission: Filming With a Drone", href: "https://www.pbfilm.com/filming-with-a-drone" },
      },
      {
        title: "Controlled airspace",
        body: "The FAA requires a valid airspace authorization for drone operations in controlled airspace under 400 feet, issued through FAADroneZone or its LAANC system. LAANC requests may be submitted up to 90 days before the planned flight. The pilot checks each Boca location against the FAA's maps before a date is set.",
        source: { label: "FAA: Part 107 Airspace Authorizations", href: "https://www.faa.gov/uas/commercial_operators/part_107_airspace_authorizations" },
      },
      {
        title: "The neighbors",
        body: "Under Florida's drone statute, a person is presumed to have a reasonable expectation of privacy on privately owned property if he or she cannot be observed by people at ground level in a place they have a legal right to be, even if visible from the air. A flight over an office park is planned so the camera stays on the client's site.",
        source: { label: "Florida Statutes Sec. 934.50", href: DRONE_LAW },
      },
    ],
    plan: [
      {
        title: "Decide what the film is for",
        body: "One audience, one thing they should believe afterward and one place the film will live. We write the script or the interview questions to that, prepare the people who will be on camera and agree on length before a crew is booked.",
      },
      {
        title: "Permit and insure",
        body: "We list every location, confirm with the film commission which municipality has jurisdiction over the public ones and file the application with the certificates it asks for. Aerial shots get a certified pilot, an airspace check and the property owner's written consent.",
      },
      {
        title: "Shoot for the edit",
        body: "Production partners capture the interviews, the workplace and the details in an order that respects the company's working day. The edit delivers the main film, shorter versions for social and recruiting, captions and the stills the footage can supply.",
      },
    ],
    cta: {
      line: "Tell us who the film is for.",
      body: "Share the audience, the locations you have in mind and the date it has to be ready, and a partner will reply with how we would produce it.",
    },
    faqs: [
      {
        q: "Do I need a film permit to shoot video in Boca Raton?",
        a: "On public property, plan on one. The Palm Beach County Film and Television Commission issues free permits for commercial productions on public property such as streets, sidewalks, parks and beaches across more than 50 participating entities, and it identifies which municipality has jurisdiction over a location. Video filmed entirely inside a private office or store needs the owner's consent instead, unless the shoot affects the adjacent public areas.",
      },
      {
        q: "How long does a film permit take in Palm Beach County?",
        a: "Allow at least three full business days for a standard permit. The county's film commission says requests involving road closures, intermittent traffic control or closed public areas typically take longer, and it recommends a pre-production meeting for significant productions about three weeks before cameras roll. Extra services such as police or fire rescue are provided at government cost. We file as soon as the locations are settled.",
      },
      {
        q: "Can a drone film during an event at the Mizner Park Amphitheater?",
        a: "Not as a guest. The city's amphitheater FAQ lists drones among the items not allowed inside for events and says ticketed events may restrict cameras and video recording devices. Aerial coverage of an event there would have to be arranged with the venue and the promoter in advance, flown by a certified remote pilot and cleared for the airspace. Often a high fixed camera does the job with less risk.",
      },
      {
        q: "Can a drone video show the properties next to ours?",
        a: "Passing views are hard to avoid, but recording neighbors is restricted. Florida's drone statute bars using a drone with an imaging device to record private property or the people on it with intent to conduct surveillance, in violation of a reasonable expectation of privacy, without written consent. We plan flight paths and framing around the client's own site and get consent where another property is featured. An attorney should review anything unusual.",
      },
      {
        q: "What drives the cost of a corporate video in Boca Raton?",
        a: "Shoot days, locations and the number of finished versions drive most of it. A single interview filmed in one office is a small production. A brand film with several locations, a larger crew, on-camera talent, aerials, motion graphics and separate cuts for recruiting and social is a larger one. Permits and insurance certificates add time more than money. We scope the film before quoting so the estimate matches the plan.",
      },
    ],
    guides: ["filming-and-photo-permits-palm-beach-county", "drone-rules-palm-beach-county", "planning-a-brand-shoot-palm-beach-county"],
    image: IMAGE,
  },
]
