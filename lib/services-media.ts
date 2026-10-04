import type { Service } from "./types"

/**
 * Photography and video production: capabilities inside the Branding discipline.
 * Copy laws: VOICE.md (no em/en dashes, no commas in headline or metaTitle).
 * Honesty rules: Epic Wolf plans, directs and produces shoots. No claim of an
 * in-house studio, staff photographers, owned cameras or drones, or any
 * certification held by Epic Wolf. Legal facts checked against faa.gov and
 * copyright.gov on 2026-10-04.
 */

export const mediaServices: Service[] = [
  {
    slug: "photography",
    name: "Photography",
    side: "story",
    headline: "Make the first look match the real thing",
    kicker: "Commercial photographer in West Palm Beach",
    metaTitle: "Commercial Photography West Palm Beach | Epic Wolf",
    metaDescription:
      "Commercial photography in West Palm Beach: brand shoots, headshots, architecture and interiors, product, events and aerials, planned and directed by one team.",
    summary:
      "Brand shoots, headshots and team portraits, architecture and interiors, product, events and aerials, planned from the places the pictures will run and directed by the team that shaped the brand.",
    intro: [
      "Most businesses in Palm Beach County are better in person than they look online. The lobby is beautiful and the website shows a stock handshake. The partners are sharp and their portraits come from three different years. A buyer comparing two firms on a phone sees none of the real thing, only the pictures, and pictures that were never planned together read as a brand that was never planned at all.",
      "We plan, direct and produce photography as part of the brand. Before anyone picks up a camera we list where each image will run: the home page, the team page, a press kit, an ad, a sign, a proposal cover. That list becomes the shot list. Then we choose the photographer whose eye fits the work, scout the location, handle permits and releases, and direct the day so the pictures come back as one set.",
      "What you receive is a library, not a folder of leftovers. Every frame is chosen and finished to one standard of color and crop, sized for the screen and for print, and delivered with written terms that say where you may use it. The same pictures then go to work across the site, the press and the ads, because the people who planned them are the people placing them.",
    ],
    deliverables: [
      { name: "Brand photography", detail: "A planned set of images of your people, place and work that gives every page and post the same look." },
      { name: "Headshots and team portraits", detail: "Consistent portraits for partners and staff, lit and framed alike so the team page reads as one firm." },
      { name: "Architectural and interior photography", detail: "Buildings, residences, offices and dining rooms photographed for builders, designers, brokers and owners." },
      { name: "Product photography", detail: "Clean catalog shots and styled scenes for ecommerce listings, menus, packaging and print." },
      { name: "Event and gala photography", detail: "Coverage of openings, benefits and client events with a shot list built for press and sponsors." },
      { name: "Aerial and drone photography", detail: "Property, site and waterfront views from the air, flown by an FAA-certified remote pilot on every job." },
      { name: "Food and hospitality photography", detail: "Dishes, rooms and service moments for restaurants, clubs and hotels, shot around real operating hours." },
      { name: "Finished image library", detail: "Selected and retouched files, sized for web, social and print, with usage terms stated in writing." },
    ],
    approach: [
      {
        title: "Start from where the pictures run",
        body: "We list every place an image is needed, from the website hero to the press kit, and build the shot list from that instead of from whatever looks good on the day.",
      },
      {
        title: "Scout and clear the location",
        body: "We visit at the hour we plan to shoot, check the light, and sort out permits, building permission and releases before the date is fixed.",
      },
      {
        title: "Direct the day",
        body: "A partner-led team runs the schedule, keeps people at ease in front of the lens and checks each setup against the list before moving on.",
      },
      {
        title: "Finish and deliver a library",
        body: "We select, retouch and color the set to one standard, then hand over organized files with the crops each channel needs.",
      },
    ],
    oneTeam:
      "Photography is where a brand either holds together or comes apart, because pictures appear on every surface at once. When one team makes the identity, the website and the images, the shot list is written from the page designs, so the hero photo is framed to leave room for the headline and the team portraits fit the layout they were made for. The press kit carries the same faces a reporter will meet. The ads use frames from the same day, so a prospect who clicks lands on a page that looks like what they clicked. Nothing has to be explained to an outside photographer, and nothing comes back that the brand cannot use.",
    audiences: [
      "Wealth managers, family offices and law firms that need credible portraits",
      "Luxury builders, architects, designers and real estate teams",
      "Hotels, private clubs, restaurants and hospitality groups",
      "Medical practices and med spas that must handle patient images carefully",
      "Yacht builders, brokers, marinas and marine services",
      "Nonprofits and gala committees that owe sponsors good coverage",
    ],
    vocabulary: [
      "commercial photographer",
      "corporate photographer",
      "headshot photographer",
      "business headshots",
      "brand photographer",
      "architectural photographer",
      "interior photographer",
      "product photographer",
      "event photographer",
      "drone photography",
      "real estate photographer",
      "photography studio",
    ],
    faqs: [
      {
        q: "Who owns the photos after a shoot?",
        a: "Ownership follows the written agreement, so read it before the shoot. The U.S. Copyright Office explains that the person who takes a photograph is its author and owner unless the work is made for hire or the copyright is transferred. Most commercial photography is therefore licensed: you receive stated rights to use the images. We spell out those rights in the proposal, and an attorney should review anything unusual.",
      },
      {
        q: "Do we need a permit for a commercial photo shoot in Palm Beach County?",
        a: "You do when the shoot uses public property such as a park, beach, street or sidewalk. The Palm Beach County Film and Television Commission issues those permits at no cost for the county and most municipalities, and still photography is one of the project types on its application. The Town of Palm Beach runs its own process. A shoot held wholly on private property with the owner's permission usually needs none.",
      },
      {
        q: "How does a photo shoot day run?",
        a: "A shoot day follows a written schedule built from the shot list. The crew arrives early to set up, the first setups are the ones that need the most people, and each frame is checked on a screen against the list before the team moves on. We keep senior people's time short by scheduling portraits in a block, then use the remaining hours for spaces, details and working scenes.",
      },
      {
        q: "How soon will we get the finished photos?",
        a: "Turnaround depends on how many images are selected and how much retouching each one needs. Event coverage for press can be prioritized so a small set arrives first and the full gallery follows. Portraits and architecture take longer because every file is finished by hand. We agree on a delivery date in writing before the shoot so the website launch or campaign is planned around a real date.",
      },
      {
        q: "What drives the cost of commercial photography?",
        a: "Cost is driven by time, people and rights. The main factors are the number of shoot days, the size of the crew, locations and permits, styling or talent, how many final images are retouched and how broadly you want to use them. A half day of headshots is a different project from a multi-location brand shoot. We quote a fixed scope after a planning call rather than an hourly guess.",
      },
      {
        q: "Can we use the same photos on the website and in ads and press?",
        a: "Yes, and planning for that is the reason to build the shot list first. Each use wants a different shape: wide frames for a website hero, vertical crops for social, clean portraits for a press kit and high resolution for print. We shoot for all of them on the same day and write the license to cover those uses, so one set of images serves every channel.",
      },
    ],
    related: ["branding", "video-production", "web-design", "public-relations"],
    image: "/img/brand/ew-tote-3.jpg",
    imageAlt: "A canvas tote printed with the Epic Wolf mark",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "video-production",
    name: "Video Production",
    side: "story",
    headline: "Put the story on film and let it travel",
    kicker: "Video production company in West Palm Beach",
    metaTitle: "Video Production Company West Palm Beach | Epic Wolf",
    metaDescription:
      "Video production company in West Palm Beach: brand films, commercials, social video, testimonials, event and property films and drone video from one team.",
    summary:
      "Brand films, commercials, social video, testimonials, event coverage, property films and drone video, written from the brand and cut for every screen the story has to reach.",
    intro: [
      "Video is the closest a stranger gets to meeting you before the first call. It is also where many companies spend the most and keep the least: one long film that sits on an About page while the ads, the social feed and the sales team go without. The problem is rarely the camera work. It is that nobody decided what the film was for before the crew arrived.",
      "We plan, direct and produce video as part of the brand. The work starts with a script or an interview outline tied to one message, and a list of every version the footage has to become: the full film, a short cut for ads, vertical clips for social, a silent captioned loop for the lobby screen. Then we assemble the right crew for the job, clear locations and permits, and run the day.",
      "Aerial footage follows federal rules. Commercial drone flights fall under the FAA's Part 107 rule, which requires a certified remote pilot, so an FAA-certified pilot flies every job and applies for airspace authorization where it is needed. After the shoot we edit, color, mix sound and caption each version, and deliver files ready for the website, the ad platforms and a reporter's inbox.",
    ],
    deliverables: [
      { name: "Brand films", detail: "A short film that says who you are and why it matters, written to anchor the website and the pitch." },
      { name: "Commercials", detail: "Spots for broadcast, streaming and paid online placements, produced in the lengths each outlet requires." },
      { name: "Social video", detail: "Vertical and square cuts with captions, planned in the script so they are more than trimmed leftovers." },
      { name: "Testimonial and case study video", detail: "Client interviews filmed with signed releases and edited to honest claims a viewer can trust." },
      { name: "Event video", detail: "Coverage of openings, galas and conferences with a recap cut ready while the event is still news." },
      { name: "Real estate and property films", detail: "Walkthroughs and neighborhood films for residences, developments, hotels and commercial space." },
      { name: "Drone video", detail: "Aerial footage of sites, waterfronts and properties, flown by an FAA-certified remote pilot." },
      { name: "Editing and finishing", detail: "Edit, color, sound, music licensing, captions and exports sized for each platform." },
    ],
    approach: [
      {
        title: "Write before anyone films",
        body: "We settle the one message, the audience and every version the footage must become, then write the script or interview questions to serve them.",
      },
      {
        title: "Plan the production",
        body: "We choose the crew for the job, scout locations, schedule the day and secure permits, releases and any airspace authorization ahead of time.",
      },
      {
        title: "Direct the shoot",
        body: "A partner-led team runs the set, coaches people who have never been on camera and captures the extra footage each short cut will need.",
      },
      {
        title: "Edit and place every version",
        body: "We cut the main film first, then the shorter versions, and deliver each one captioned and sized for the page or platform it was planned for.",
      },
    ],
    oneTeam:
      "A film made apart from the brand has to be explained to the crew, then explained again to the web developer, the media buyer and the publicist. When one team makes all of it, the script is drawn from the same positioning as the website copy, the title cards use the brand's type and color, and the page that will hold the film is designed while it is being cut. The ad versions are edited by people who know which audiences will see them. The press release goes out with footage a station or an editor can use. One day of filming feeds the site, the campaign and the story, and the message is the same in each.",
    audiences: [
      "Financial and professional firms that sell on trust",
      "Developers, luxury builders and real estate teams marketing property",
      "Hotels, clubs, restaurants and hospitality groups",
      "Medical practices whose patient stories need written authorization",
      "Marine companies with boats, yards and waterfronts to show",
      "Nonprofits that need a gala film and a year of donor content",
    ],
    vocabulary: [
      "video production company",
      "videographer",
      "corporate video",
      "commercial video production",
      "brand video",
      "promotional video",
      "testimonial video",
      "event videographer",
      "real estate videographer",
      "drone videography",
      "aerial video",
      "social media video",
    ],
    faqs: [
      {
        q: "Who owns the footage after a video shoot?",
        a: "The contract decides, and it should say so plainly. The U.S. Copyright Office notes that a commissioned work counts as a work made for hire only when it falls in a listed category, which includes part of a motion picture or other audiovisual work, and both parties sign a written agreement saying so. Without that, rights are licensed or assigned in writing. We state the terms in the proposal, and your attorney should confirm them.",
      },
      {
        q: "Do we need a permit to film in Palm Beach County?",
        a: "Filming on public property needs a permit, and the Palm Beach County Film and Television Commission issues it free through one application. Its site says private property can need one too when a shoot affects adjacent roads or sidewalks or involves stunts. The commission does not permit the Town of Palm Beach, which requires Town Council approval for commercial filming on public property. We file the applications as part of planning.",
      },
      {
        q: "How does a video shoot day run?",
        a: "A video day runs on a call sheet that lists every scene, person and location by time. Interviews are usually filmed first while people are fresh, with lighting and sound set before they sit down. The rest of the day gathers the supporting footage the edit will need: the space, the work, the details. A director keeps the schedule and makes sure each planned version has what it requires.",
      },
      {
        q: "How long does editing take after the shoot?",
        a: "Editing time depends on the length of the film, the number of versions and how many review rounds you want. A single interview cut moves faster than a brand film with music, graphics and several short edits. The step that most often slows a project is feedback, so we set review dates in advance and ask for consolidated comments from a single point of contact on your side. The delivery date is agreed in writing before filming.",
      },
      {
        q: "What drives the cost of video production?",
        a: "Video cost comes down to days, crew and finishing. The variables are how many shoot days and locations are involved, the size of the crew, whether there are actors or a drone pilot, permits and insurance, licensed music, motion graphics and the number of finished versions. Scripted commercials cost more than interview films because they need more people. We price a defined scope after a planning call.",
      },
      {
        q: "Can one shoot produce video for the website and ads and press?",
        a: "Yes, when the versions are planned before filming. A website film, a short ad and a vertical social clip each need different framing and pacing, so we film with all of them in mind rather than cropping one master afterward. We also capture clean footage without titles that a news outlet can use. Every version is exported in the format its destination requires and labeled so your team knows which is which.",
      },
    ],
    related: ["branding", "photography", "public-relations", "web-design"],
    image: "/img/brand/ew-storefront-3.jpg",
    imageAlt: "A storefront window carrying the Epic Wolf mark",
  },
]
