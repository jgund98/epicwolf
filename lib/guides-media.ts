import type { Guide } from "./types"

/**
 * Guides for photography and video production in Palm Beach County.
 * Every fact is from a primary source checked 2026-10-04.
 * Copy laws: VOICE.md (no em/en dashes, no commas in title or h2 fields).
 * Fees are left out on purpose: they change. The county's commercial airport
 * is never named (VOICE.md law 7).
 */

const FTC_PERMITS = "https://www.pbfilm.com/free-one-stop-permitting"
const FTC_DRONE = "https://www.pbfilm.com/filming-with-a-drone"
const TOWN_PERMITS = "https://townofpalmbeach.com/423/Permits-and-Licenses"
const PARKS_PHOTO = "https://discover.pbc.gov/parks/General/Photography-Videography.aspx"
const STATE_PARK_RULE = "https://flrules.org/gateway/ruleno.asp?id=62D-2.014"
const FS_934_50 = "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0934/Sections/0934.50.html"
const FS_330_41 = "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0330/Sections/0330.41.html"
const FS_540_08 = "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0540/Sections/0540.08.html"

export const mediaGuides: Guide[] = [
  {
    slug: "filming-and-photo-permits-palm-beach-county",
    title: "Filming and Photo Permits in Palm Beach County",
    description:
      "When a commercial photo or video shoot needs a permit in Palm Beach County, who issues it, how the Town of Palm Beach differs and how far ahead to apply.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "A commercial shoot needs a permit when it uses public property: a park, a beach, a street, a sidewalk or a public building. For the county and its cities, one free application to the Palm Beach County Film and Television Commission covers it, and the commission asks for three business days. The Town of Palm Beach is the exception: it runs its own process and the Town Council approves every commercial filming permit. Private property with the owner's permission usually needs no permit unless the shoot spills onto public space.",
    sections: [
      {
        h2: "When a shoot needs a permit",
        answer:
          "Public property is the trigger. The Palm Beach County Film and Television Commission issues permits for parks, beaches, streets, sidewalks and public buildings. It says private property can also require one when filming affects adjacent roads or sidewalks, when pyrotechnics or stunts are involved or when a municipality has asked for special permitting in residential areas.",
        body: [
          "The size of the crew is not the test. A photographer with one assistant on a public beach for an ad campaign is doing commercial work on public property, and the commission's application lists still photography as a project type next to commercials, web content and feature films.",
          "A shoot inside your own office, restaurant or showroom is a different matter. If the crew, the gear and the parking all stay on private property and the owner has agreed, there is normally nothing to file. Ask the commission when you are unsure. The call costs nothing and the staff work with the city on your behalf.",
        ],
      },
      {
        h2: "Who issues permits across the county",
        answer:
          "Most permits come from one office. The Palm Beach County Film and Television Commission describes a free one-stop process covering more than 50 municipalities, taxing districts, county departments and other entities. Its staff deal with the municipal contacts for you. The commission states plainly that it does not issue permits for the Town of Palm Beach.",
        table: {
          head: ["Where you are shooting", "Who issues the permit", "What to know"],
          rows: [
            ["County public property and unincorporated areas", "Palm Beach County Film and Television Commission", "One free online application; allow three business days for a standard permit"],
            ["City of West Palm Beach public property", "Film and Television Commission one-stop process", "The city's Community Events division separately permits special events on public property and rights-of-way"],
            ["City of Boca Raton property", "Film and Television Commission", "The city says commercial filming and photography on its property require the commission's permit, including drone use"],
            ["Town of Palm Beach public property", "The Town itself, by Town Council approval", "Commercial districts only, with no filming on streets; apply well ahead of a monthly council meeting"],
            ["Palm Beach County parks and beaches", "Film and Television Commission for commercial projects; Parks and Recreation for private portrait sessions", "Parks issues daily or annual photography permits to businesses and asks for five business days"],
            ["Florida state parks", "The Florida Park Service", "Commercial photography is allowed, but a production that disrupts the park requires a contract with the Division of Recreation and Parks"],
            ["Private property", "The owner's permission; a permit only in certain cases", "A permit can be required if the shoot affects public roads or sidewalks or involves stunts"],
          ],
        },
      },
      {
        h2: "How the Town of Palm Beach differs",
        answer:
          "The Town handles its own permits and sets a higher bar. Its permits page says Chapter 22 Article IV of the Town Code requires a permit for all commercial photography or videography on public property, that the Town Council must approve every application and that commercial filming is allowed only in commercial districts.",
        list: [
          "Applications are due no less than 20 business days before the council meeting where they will be heard",
          "The Town Council generally meets on the second Tuesday of each month",
          "Commercial filming is prohibited in residential districts and filming on streets is prohibited",
          "No filming between 8 and 10 a.m. or between 3 and 5 p.m.",
          "The application needs a letter of intent with each public location and time, a description of the business and a certificate of insurance",
          "Exempt: short personal or family shoots, student and faculty educational shoots, news coverage of live events and law enforcement filming",
        ],
      },
      {
        h2: "County parks and state parks",
        answer:
          "County parks split photography into three kinds. Visitors may take personal photos freely. A business running private portrait sessions needs a Parks and Recreation photography permit. Commercial projects such as advertisements, catalogs, commercials and programs are scheduled and permitted through the Film and Television Commission instead of the parks department.",
        body: [
          "The county's Parks and Recreation page lists what counts as commercial: photos that appear in advertisements, calendars, catalogs, guidebooks, magazines or other published print, and filming for educational or documentary videos, television advertisements, programs, infomercials and movies. A brand shoot for a website or a campaign belongs in that group.",
          "State parks follow a statewide rule. Florida Administrative Code Rule 62D-2.014 allows private and commercial photography in state parks, but commercial photography such as a motion picture production requires a contract with the Division of Recreation and Parks if it will disrupt normal operations, harm park resources or disrupt the public's enjoyment. Speak with the park manager early.",
        ],
      },
      {
        h2: "What the county permit asks of you",
        answer:
          "The commission's permit is free, but it has conditions. The commission says securing a permit requires a $1 million comprehensive or commercial general liability policy, with more for stunts or special effects, and that the number of insurance certificates depends on where you film. It sends the exact certificate wording after you apply.",
        body: [
          "Some scenes bring police with them. The commission says local law enforcement must be assigned when an exterior shoot needs traffic control or shows prop firearms, weapons or actors in police uniforms, and the production pays for the detail. For large commercial productions it recommends a pre-production meeting about three weeks before cameras roll.",
        ],
      },
      {
        h2: "How far ahead to apply",
        answer:
          "Work backward from the slowest approval. The county commission asks for three business days for a standard permit and longer for road closures, traffic control or special effects. County parks ask for five business days for a photography permit. The Town of Palm Beach requires 20 business days before a council meeting that happens once a month.",
        list: [
          "Standard county permit: three business days, with rush requests possible if you tell the office immediately",
          "Road closures, traffic control or closing a public area: longer, so raise it on the first call",
          "County parks private session permit: five business days from the application",
          "Town of Palm Beach: 20 business days before the monthly council meeting, then the hearing itself",
          "State parks: contact the park manager before you set a date, since a contract may be needed",
          "Controlled airspace for drone flights: FAA authorization comes first and can be requested well in advance",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a photographer need a permit to shoot on a public beach in Palm Beach County?",
        a: "Yes, if the work is commercial. The Palm Beach County Film and Television Commission permits public property including beaches, and its application lists still photography as a project type. In county-run beach parks, a business doing private portrait sessions needs a Parks and Recreation photography permit instead. Beaches inside the Town of Palm Beach fall under the Town's own rules, which require Town Council approval for commercial photography on public property.",
      },
      {
        q: "Is the Palm Beach County film permit really free?",
        a: "Yes. The Film and Television Commission says permits for public property within the county are issued at no cost to the production. Free does not mean without cost elsewhere: the commission requires liability insurance, some scenes require a paid law enforcement detail and individual venues can charge their own location or rental fees. The Town of Palm Beach charges for its own filming permit, so check its current schedule.",
      },
      {
        q: "Do I need a permit to film inside my own business?",
        a: "Usually not. A shoot that stays entirely on private property with the owner's permission does not use public space, which is what the county permit covers. The Film and Television Commission says a permit may still be required if filming affects adjacent roads or sidewalks, involves pyrotechnics or stunts or takes place where a municipality has requested special permitting for residential areas. Tenants should also check the lease and tell the landlord.",
      },
      {
        q: "Can the county film commission permit a shoot on Worth Avenue?",
        a: "No. The Palm Beach County Film and Television Commission states that its office does not issue permits for the Town of Palm Beach and directs productions to the Town. The Town requires a permit for commercial photography or videography on public property, approved by the Town Council, and it prohibits filming on streets. A shoot inside a private shop or courtyard with the owner's consent is a separate question to raise with the Town Clerk's office.",
      },
    ],
    related: ["photography", "video-production", "public-relations"],
    sources: [
      { label: "Palm Beach County Film and Television Commission", href: "https://www.pbfilm.com/" },
      { label: "Film and Television Commission: One-Stop Permitting", href: FTC_PERMITS },
      { label: "Film and Television Commission: Standard permit application", href: "https://www.pbfilm.com/standard-permit" },
      { label: "Town of Palm Beach: Permits and Licenses (Filming)", href: TOWN_PERMITS },
      { label: "City of Boca Raton: Media, Film and Photography Requests", href: "https://www.myboca.us/2405/Media-Film-and-Photography-Requests" },
      { label: "City of West Palm Beach: Event Permits", href: "https://www.wpb.org/Residents/Community-Events/Event-Permits" },
      { label: "Palm Beach County Parks and Recreation: Photography and Videography", href: PARKS_PHOTO },
      { label: "Florida Administrative Code Rule 62D-2.014: Activities and Recreation in state parks", href: STATE_PARK_RULE },
    ],
  },

  {
    slug: "drone-rules-palm-beach-county",
    title: "Drone Rules for Commercial Shoots in Palm Beach County",
    description:
      "The rules for commercial drone photo and video in Palm Beach County: FAA Part 107, airspace authorization, Florida privacy law, parks and local permits.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Any drone flight for a business falls under the FAA's Part 107 rule. The pilot must hold a Remote Pilot Certificate, the drone must be registered and broadcast Remote ID, and flights in controlled airspace need FAA authorization first. Florida adds a privacy law that bars drone surveillance of private property and reserves most drone regulation to the state. On the ground, parks and permit offices decide where you may take off, and the county film commission asks for the pilot's paperwork.",
    sections: [
      {
        h2: "What counts as a commercial drone flight",
        answer:
          "Almost any flight for a business counts. The FAA says payment is not the single deciding factor and gives taking photos to help sell a property or service as an example of a non-recreational flight under Part 107. Its guidance is direct: when in doubt assume you are flying under Part 107.",
        body: [
          "Recreational flying is a narrow exception created by Congress for flights made purely for fun or personal enjoyment. Even unpaid goodwill work, such as volunteering to survey a coastline for a nonprofit, is non-recreational in the FAA's examples. A real estate listing, a builder's progress video and a restaurant's opening reel are all Part 107 flights.",
        ],
      },
      {
        h2: "What Part 107 requires of the pilot and the drone",
        answer:
          "Part 107 requires a certified pilot and a registered aircraft. The FAA says you must obtain a Remote Pilot Certificate to fly under the rule, which means passing an aeronautical knowledge test. The drone must weigh less than 55 pounds and be registered, and registered drones must comply with the Remote ID rule.",
        list: [
          "Remote Pilot Certificate: the pilot must be at least 16 and pass the FAA's Unmanned Aircraft General knowledge test",
          "Recurrent training: certificate holders complete online training every 24 calendar months",
          "The certificate must be easily accessible to the pilot during every flight",
          "Registration: Part 107 pilots register each drone individually through FAADroneZone and mark it with its number",
          "Remote ID: the drone broadcasts identification and location information in flight",
          "Night flights and flights over people are allowed without a waiver only when the rule's conditions are met",
        ],
      },
      {
        h2: "Flying in controlled airspace near the airport",
        answer:
          "Controlled airspace needs FAA authorization before takeoff, and that includes the controlled airspace around the county's commercial airport. The FAA says pilots planning to fly under 400 feet in controlled airspace around airports must receive an airspace authorization first, through LAANC or through FAADroneZone.",
        body: [
          "LAANC stands for Low Altitude Authorization and Notification Capability. Pilots apply through apps from FAA-approved service suppliers, and the FAA says approved requests can come back in near real time. Requests can be submitted up to 90 days ahead. Where the published ceiling for a location is lower than the flight needs, a Part 107 pilot can file a further coordination request.",
          "FAADroneZone is the slower path. The FAA warns that processing there has historically taken up to eight weeks and that you are not authorized to fly without the approval. For a shoot with a fixed date, the airspace check belongs in the first planning call, before a location is promised to anyone.",
        ],
      },
      {
        h2: "What Florida law adds on privacy",
        answer:
          "Florida bars drone surveillance of private property. Section 934.50 says a person may not use a drone with an imaging device to record privately owned real property or the people on it with intent to conduct surveillance, in violation of their reasonable expectation of privacy, without written consent.",
        body: [
          "The statute presumes a person has a reasonable expectation of privacy on their own property if they cannot be seen by people at ground level in a place where those people have a legal right to be, even if a drone could see them from the air. An owner, tenant or guest may sue for damages and an injunction, and the prevailing party recovers attorney fees.",
          "For a commercial shoot the practical answer is consent and framing. Get written permission from the owner of the property you are filming, plan flight paths that keep neighboring yards and pool decks out of frame and reshoot rather than publish footage of people who did not agree. An attorney should advise on anything close to the line.",
        ],
      },
      {
        h2: "Who can regulate drones locally",
        answer:
          "The state reserves most drone regulation to itself. Section 330.41 says a city or county may not enact or enforce an ordinance on the operation of unmanned aircraft systems, including airspace, altitude, flight paths and pilot qualifications. Local governments keep authority over nuisances, voyeurism, harassment, reckless endangerment and property damage.",
        body: [
          "The same statute protects critical infrastructure. A person may not knowingly operate a drone over a critical infrastructure facility unless the flight is for a commercial purpose and complies with FAA regulations, and may never let a drone touch one or come close enough to interfere with it. The list includes power plants and substations, water treatment plants, communications towers, seaports, airports, dams and correctional facilities. A violation is a third degree felony.",
          "Preemption does not open every piece of ground. A government still decides what happens on land it owns or manages, which is why parks and permit offices can say where a drone may take off and land.",
        ],
      },
      {
        h2: "Where parks and permits limit takeoff",
        answer:
          "Check the ground rules for every launch point. State parks prohibit aircraft and other aerial apparatus from taking off or landing except in an emergency. County parks require a permit for commercial drone photography and close several parks to drones entirely. The county film commission folds Part 107 into its one-stop permit.",
        table: {
          head: ["Location", "The rule", "Source"],
          rows: [
            ["Florida state parks", "No aircraft or other aerial apparatus may take off from or land in a park except in an emergency or at a designated landing facility", "Rule 62D-2.014(15)"],
            ["Palm Beach County parks", "Commercial drone photography requires a permit under County Code Chapter 21", "Parks and Recreation FAQ"],
            ["County parks closed to drones", "Nature centers and their trails and wetlands, Riverbend Park, Loxahatchee River Battlefield Park, Morikami Museum and Japanese Gardens and the Juno Beach Pier", "Parks and Recreation FAQ"],
            ["Public property through the county film commission", "Provide the drone's registration, the pilot's remote pilot certificate and a copy of the LAANC approval for controlled airspace", "Film and Television Commission"],
            ["City of Boca Raton property", "Commercial filming and photography, including drone use, require a Film and Television Commission permit", "City of Boca Raton"],
            ["Town of Palm Beach", "The Town says no additional Town permit is required for a drone beyond what the FAA requires, and flights must follow FAA and state rules", "Town of Palm Beach FAQ"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Can I use my own drone to film my business?",
        a: "Only under Part 107. The FAA treats photos or video taken to help sell a property or service as non-recreational flying, so the person at the controls needs a Remote Pilot Certificate and the drone must be registered and broadcast Remote ID. Owning the business does not change that. If nobody on staff is certified, hire a certified remote pilot and ask to see the certificate before the flight.",
      },
      {
        q: "Do I need permission to fly a drone near downtown West Palm Beach?",
        a: "Probably, because downtown sits close to the county's commercial airport and the controlled airspace around it. The FAA requires an airspace authorization before any flight under 400 feet in controlled airspace, obtained through a LAANC app or FAADroneZone. The pilot checks the FAA's facility map for the exact address, since pre-approved altitudes vary from one map grid to the next. Launching from public property also means a county film permit.",
      },
      {
        q: "Does the Town of Palm Beach require a drone permit?",
        a: "No. The Town's event permit FAQ says no additional permits are required from the Town beyond what the FAA requires, and that drones must be operated and registered under FAA and State of Florida rules, citing Town Code Sec. 14-35. That answer covers the aircraft only. A crew working on the Town's public property for a commercial shoot should confirm with the Town Clerk's office whether its filming permit applies.",
      },
      {
        q: "Can a drone legally photograph a neighbor's property during a real estate shoot?",
        a: "Not if it amounts to surveillance without consent. Florida's Section 934.50 prohibits using a drone to record privately owned real property or the people on it with intent to conduct surveillance in violation of a reasonable expectation of privacy, unless they consent in writing. A listing shoot should frame the subject property, avoid lingering on neighboring homes and blur or cut anything private. Ask an attorney where the line falls for your project.",
      },
    ],
    related: ["video-production", "photography", "web-design"],
    sources: [
      { label: "FAA: Certificated Remote Pilots including Commercial Operators (Part 107)", href: "https://www.faa.gov/uas/commercial_operators" },
      { label: "FAA: Become a Certificated Remote Pilot", href: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
      { label: "FAA: Remote Identification of Drones", href: "https://www.faa.gov/uas/getting_started/remote_id" },
      { label: "FAA: UAS Data Exchange (LAANC)", href: "https://www.faa.gov/uas/getting_started/laanc" },
      { label: "FAA: Part 107 Airspace Authorizations", href: "https://www.faa.gov/uas/commercial_operators/part_107_airspace_authorizations" },
      { label: "FAA: Recreational Flyers and what counts as recreational", href: "https://www.faa.gov/uas/recreational_flyers" },
      { label: "Florida Statutes Sec. 934.50: Searches and seizure using a drone", href: FS_934_50 },
      { label: "Florida Statutes Sec. 330.41: Unmanned Aircraft Systems Act", href: FS_330_41 },
      { label: "Florida Administrative Code Rule 62D-2.014: Aircraft in state parks", href: STATE_PARK_RULE },
      { label: "Palm Beach County Parks and Recreation: FAQs", href: "https://discover.pbc.gov/parks/General/FAQs.aspx" },
      { label: "Film and Television Commission: Filming with a Drone", href: FTC_DRONE },
      { label: "City of Boca Raton: Media, Film and Photography Requests", href: "https://www.myboca.us/2405/Media-Film-and-Photography-Requests" },
      { label: "Town of Palm Beach: Event Permits FAQ", href: "https://www.townofpalmbeach.com/m/faq?cat=37" },
    ],
  },

  {
    slug: "planning-a-brand-shoot-palm-beach-county",
    title: "Planning a Brand Photo or Video Shoot in Palm Beach County",
    description:
      "How to plan a brand photo or video shoot in Palm Beach County: the shot list, locations and permits, releases, image rights, weather and a checklist.",
    published: "2026-10-04",
    updated: "2026-10-04",
    summary:
      "Plan the shoot from the places the images will run, not from the camera. List every use first: website, press, ads, signage and print. Choose locations with the permit in mind, get written releases from every person and property, and settle who owns the images in the contract. In South Florida, schedule around afternoon storms in the summer season and book early for winter. A patient's image needs a HIPAA authorization, and a testimonial has to follow the FTC's Endorsement Guides.",
    sections: [
      {
        h2: "Build the shot list from the uses",
        answer:
          "Write down every place an image or clip will appear before choosing a single shot. A website hero wants a wide frame with room for a headline. A press kit wants clean portraits. Ads want vertical crops. A sign or a printed piece wants high resolution. Each use becomes a line on the shot list.",
        table: {
          head: ["Where it runs", "What it needs", "Plan for"],
          rows: [
            ["Website", "Wide frames with empty space for text, plus portraits that match", "Horizontal and vertical versions of each key scene"],
            ["Press", "Simple portraits and one strong picture of the place or product", "Captions with names spelled correctly and files a newsroom can download"],
            ["Ads and social", "Vertical and square crops that read on a phone", "Short clips with captions for viewers watching without sound"],
            ["Signage and print", "High resolution files with clean backgrounds", "Extra room around the subject for trim and large formats"],
            ["Proposals and decks", "Detail shots and team images that support a point", "A consistent look so slides do not mix old and new pictures"],
          ],
        },
      },
      {
        h2: "Choose locations with the permit in mind",
        answer:
          "Decide where to shoot and what it requires at the same time. Private property with the owner's permission is simplest. Public parks, beaches, streets and sidewalks need a permit, which the county film commission issues free for most of the county. The Town of Palm Beach needs Town Council approval and far more lead time.",
        body: [
          "The county commission asks for three business days for a standard permit and requires liability insurance. The Town of Palm Beach requires an application 20 business days before a monthly council meeting and limits commercial filming to commercial districts. A waterfront scene in West Palm Beach and one across the bridge are therefore two different schedules.",
          "Scout at the hour you plan to shoot. Look at where the sun falls, where a crew can park, how loud the street is and whether the background includes a neighbor's sign or home. If a drone is involved, the pilot should check the airspace for that address before the location is confirmed.",
        ],
      },
      {
        h2: "Get releases signed before the shoot",
        answer:
          "Get written consent from every recognizable person. Florida's Section 540.08 says no one may publicly use a person's name, portrait, photograph or other likeness for trade or advertising without that person's express written or oral consent. A signed release is how you prove consent later. Staff, clients and guests all count.",
        body: [
          "The statute lets a person whose likeness is used without consent sue to stop the use and recover damages, including a reasonable royalty. Oral consent satisfies the law, but it is hard to prove after an employee leaves or a client relationship ends. A one-page release signed on the day removes the question.",
          "Property needs permission too. A property release from the owner covers a private home, a boat, a club or a storefront that is not yours, and artwork or a recognizable design in the frame may carry its own rights. An attorney should draft the release forms you reuse.",
        ],
      },
      {
        h2: "Settle who owns the images in writing",
        answer:
          "The contract decides ownership, so read it first. The U.S. Copyright Office says that once you create an original work and fix it, like taking a photograph, you are the author and the owner. Paying for a shoot does not by itself transfer the copyright. Rights move by a written agreement or a license.",
        body: [
          "Work made for hire is narrower than most clients assume. The Copyright Office's Circular 30 describes two situations: a work created by an employee as part of regular duties, and certain kinds of specially commissioned work when both parties sign a written agreement calling it a work made for hire. The listed kinds include part of a motion picture or other audiovisual work and a contribution to a collective work.",
          "For most brand shoots the practical question is the license. Ask where you may use the images, for how long, in which media and whether anyone else may use them. Make sure the answer covers the website, advertising, press and print. The Copyright Office itself says it cannot give legal advice on a work's status, so have counsel review the terms.",
        ],
      },
      {
        h2: "Know the rules for patients and testimonials",
        answer:
          "Health care and testimonials carry extra rules. The U.S. Department of Health and Human Services says the HIPAA Privacy Rule requires an individual's written authorization before protected health information is used for marketing, with limited exceptions. The FTC says an endorsement must reflect the endorser's honest opinion and material connections must be disclosed.",
        body: [
          "A patient's picture is health information when it identifies the patient. HHS lists full-face photographs and comparable images among the identifiers that must be removed before health information counts as de-identified. A medical practice or med spa should have its compliance officer approve the authorization form before any patient appears in a photo, a before-and-after or a video.",
          "For testimonial video, the FTC's guidance says an endorsement cannot be used to make a claim the marketer could not legally make itself, and that a connection consumers would not expect, such as payment or a free product, should be disclosed clearly. In video, the FTC says a disclosure should be made in the same way the claim is made, visually or audibly.",
        ],
      },
      {
        h2: "Plan around South Florida light and rain",
        answer:
          "Schedule outdoor work early and keep a backup. The National Weather Service describes southeast Florida's summer season as warm and humid with frequent showers and thunderstorms. In its study of Miami records, the median start of that season was May 21 and the median end was October 17.",
        body: [
          "The same study found the average summer season produced 69 percent of the year's precipitation in Miami's records. That is why outdoor shoots in summer are planned for the morning, with interiors held for the afternoon and a rain date agreed in advance. Hurricane season overlaps much of the same period, so a contract should say what happens if a storm forces a move.",
          "Light matters as much as rain. Midday sun here is high and hard, which flattens buildings and makes people squint. Early and late light is softer and warmer, and an east-facing oceanfront looks its strongest soon after sunrise. Winter brings drier weather and the county's busiest social calendar, so venues, crews and permits are in demand. Book ahead.",
        ],
      },
      {
        h2: "A checklist for the week before",
        answer:
          "Confirm everything in writing a week out. The list below covers what most often goes wrong on a brand shoot: a missing permit, an unsigned release, a location nobody scouted at the right hour, wardrobe that clashes with the brand and no plan for rain. Each item takes minutes to check.",
        list: [
          "Shot list approved, with each shot tied to a use and a format",
          "Permits issued or confirmed as not required, and insurance certificates sent",
          "Model releases ready for every person and property releases signed by owners",
          "HIPAA authorizations approved by the compliance officer for any patient on camera",
          "Usage rights and delivery date stated in the signed agreement",
          "Call sheet sent with times, parking, contacts and who approves shots on the day",
          "Wardrobe, product and the space itself prepared, with logos and clutter checked",
          "Airspace authorization in hand if a drone is flying",
          "Rain date and an indoor fallback agreed",
        ],
      },
    ],
    faqs: [
      {
        q: "How far ahead should we plan a brand shoot?",
        a: "Plan as far ahead as your slowest approval requires. A shoot on private property can come together quickly once the shot list is settled. Public locations add permit time: the county film commission asks for three business days for a standard permit, and the Town of Palm Beach requires an application 20 business days before a monthly council meeting. Winter dates fill early, so hold the date first and refine the plan after.",
      },
      {
        q: "Do employees need to sign a release to appear in company photos?",
        a: "They should. Florida's Section 540.08 requires a person's express consent before their name or likeness is used for trade or advertising, and it allows oral consent, but a signed release is the only practical proof. Have each employee sign before the shoot, say where the images will appear and decide in advance what happens to their pictures if they leave. An employment attorney should review the form.",
      },
      {
        q: "Can a medical practice post patient photos or video?",
        a: "Only with the patient's written authorization. HHS says the HIPAA Privacy Rule requires an individual's written authorization before protected health information is used for marketing, and it lists full-face photographs among the identifiers that make information identifiable. A general consent-to-treat form is not the same document. The practice's compliance officer or health care attorney should approve the authorization wording before anything is filmed or published.",
      },
      {
        q: "What is the right time of year for an outdoor shoot in Palm Beach County?",
        a: "The drier months from late fall through spring are the most dependable for outdoor work. The National Weather Service found that southeast Florida's summer season, with its frequent showers and thunderstorms, typically ran from late May to mid October in Miami's records. Summer shoots still work when they start early in the day and include a rain plan. Winter offers steadier weather but busier venues and tighter schedules.",
      },
    ],
    related: ["photography", "video-production", "branding", "web-design"],
    sources: [
      { label: "U.S. Copyright Office: What is Copyright?", href: "https://www.copyright.gov/what-is-copyright/" },
      { label: "U.S. Copyright Office: Circular 30, Works Made for Hire", href: "https://www.copyright.gov/circs/circ30.pdf" },
      { label: "Florida Statutes Sec. 540.08: Unauthorized publication of name or likeness", href: FS_540_08 },
      { label: "HHS: HIPAA Privacy Rule and marketing", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html" },
      { label: "HHS: De-identification of protected health information", href: "https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html" },
      { label: "FTC: Endorsement Guides, What People Are Asking", href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" },
      { label: "National Weather Service Miami: Duration of the summer season in South Florida", href: "https://www.weather.gov/mfl/summer_season" },
      { label: "Film and Television Commission: One-Stop Permitting", href: FTC_PERMITS },
      { label: "Town of Palm Beach: Permits and Licenses (Filming)", href: TOWN_PERMITS },
    ],
  },
]
