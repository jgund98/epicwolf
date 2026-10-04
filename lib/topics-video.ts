import type { Topic } from "./types"

/**
 * Video production topic pages (/video-production/[topic]). Facts verified on
 * primary sources 2026-10-04: the Palm Beach County Film and Television
 * Commission, the Town of Palm Beach event permit FAQ, the FTC, the SEC, HHS,
 * The Florida Bar's advertising handbook, the U.S. Copyright Office, ADA.gov,
 * the FAA, the Florida Statutes, the eCFR and the platforms' own help pages.
 * Epic Wolf plans, directs and produces: no claim of a studio, staff crews,
 * owned cameras or drones, or any certification of its own. Copy laws: VOICE.md.
 */

const PBFILM = "https://www.pbfilm.com/free-one-stop-permitting"
const PBFILM_DRONE = "https://www.pbfilm.com/filming-with-a-drone"
const TOWN_FAQ = "https://www.townofpalmbeach.com/FAQ.aspx?QID=266"
const FTC_FAQ = "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
const IMAGE = { src: "/img/stock/ew-web.jpg", alt: "The Epic Wolf home page in a browser window and on a phone" }

export const videoTopics: Topic[] = [
  {
    service: "video-production",
    slug: "brand-films",
    kind: "service",
    name: "Brand films",
    metaTitle: "Brand Film Production Palm Beach County | Epic Wolf",
    metaDescription:
      "Brand film production in Palm Beach County: a short film written from your positioning, directed by a partner-led team and cut for every screen it must reach.",
    kicker: "Brand film production in Palm Beach County",
    headline: "The Film That Introduces You Before You Arrive",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces brand films for businesses across Palm Beach County. A brand film is a short piece, usually built on interviews and real footage of the work, that tells a stranger who you are and why it matters. We write it from the brand strategy, assemble the crew through vetted partners and deliver the main film with shorter cuts.",
    intro: [
      "Most company films fail before the camera comes out of the case. Somebody books a crew, the crew films what is in front of it and an editor is asked to find a story afterward. The result is three minutes of handsome footage that says nothing a competitor could not say. A brand film is a writing problem first.",
      "We start with the single thing a viewer should believe when the film ends, then decide who has to say it and what the camera has to prove. For a family office on Flagler Drive that might be the founder and nothing else. For a builder it might be a finished house and the foreman who framed it. The script or interview outline is approved before a date is set.",
      "A brand film also has more than one job. It anchors the home page, opens the pitch meeting, runs silent in a lobby and becomes a short introduction for a paid campaign. We list those versions before filming so each one is framed and paced on purpose. Because Epic Wolf also builds the brand and the website, the film arrives with a page designed to hold it.",
    ],
    ground: [
      {
        title: "Who owns a commissioned film",
        body: "The U.S. Copyright Office says a commissioned work is a work made for hire only if it falls within a listed category, one of which is a part of a motion picture or other audiovisual work, and the parties sign a written agreement saying so. Otherwise the person who created the work is its author. Ownership belongs in the contract.",
        source: { label: "U.S. Copyright Office Circular 30: Works Made for Hire", href: "https://www.copyright.gov/circs/circ30.pdf" },
      },
      {
        title: "A song is two copyrights",
        body: "The Copyright Office treats a musical composition and a sound recording of it as two separate works, and says copyright in the recording is no substitute for copyright in the underlying composition. A film that uses a commercial track has both to clear, which is why most brand films use licensed production music or an original score.",
        source: { label: "U.S. Copyright Office Circular 56A", href: "https://www.copyright.gov/circs/circ56a.pdf" },
      },
      {
        title: "How Google reads a film on your site",
        body: "Google says marking up a video with VideoObject structured data lets a site influence the description, thumbnail, upload date and duration shown in video results. The required properties are a name, a thumbnail URL and an upload date, and Google asks for a unique title for each video on the site.",
        source: { label: "Google Search Central: Video structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/video" },
      },
      {
        title: "Captions are an access issue",
        body: "The Department of Justice lists videos without captions among its examples of website accessibility barriers, because people with hearing disabilities may not be able to understand what a video communicates. Its guidance says videos can be made accessible with synchronized captions that are accurate and identify the speakers.",
        source: { label: "ADA.gov: Guidance on Web Accessibility and the ADA", href: "https://www.ada.gov/resources/web-guidance/" },
      },
    ],
    includes: [
      { name: "Message and script", detail: "The one belief the film has to leave behind, written as a script or an interview outline before anything is scheduled." },
      { name: "Interview direction", detail: "Questions and coaching that get a founder or a partner to say it the way they would across a table." },
      { name: "Crew and production", detail: "Director, camera, lighting and sound assembled for the job through vetted partners and run by us on the day." },
      { name: "Locations and permits", detail: "Scouting, property permission and any film permit a public street, park or beach requires." },
      { name: "Edit and color", detail: "The main cut, graded and mixed, with title cards set in your brand's type and palette." },
      { name: "Licensed music", detail: "A track cleared for the places the film will run, with the license kept on file for you." },
      { name: "Short versions", detail: "A brief introduction cut, vertical clips and a silent captioned loop planned in the script." },
      { name: "Captions and delivery", detail: "Caption files and exports for the website, presentations and each platform, labeled by use." },
    ],
    plan: [
      {
        title: "Decide what the film must prove",
        body: "We agree on the audience, the belief and the versions, then write. You approve the script or the interview outline, the people on camera and the locations before a shoot date exists.",
      },
      {
        title: "Run a calm set",
        body: "The crew is sized to the script, not the other way around. A partner directs, the schedule protects the people who have never been filmed and we capture the extra footage every short version depends on.",
      },
      {
        title: "Finish and place it",
        body: "You review the main cut first, then the short versions. Each file is captioned and exported for its destination, and the page that carries the film is marked up so search engines can read it.",
      },
    ],
    cta: {
      line: "Send us your website and the one thing a stranger should know about you.",
      body: "We will reply with a film concept, who should be on camera and the versions we would plan from the shoot.",
    },
    faqs: [
      {
        q: "How long should a brand film be?",
        a: "As long as the story holds and no longer, which for most companies means a few minutes for the main film and well under a minute for the versions that run as ads or on social. Length should follow the placement. A home page visitor will give a film more time than someone scrolling a feed, so we write the long version and the short ones as separate pieces.",
      },
      {
        q: "Who owns the brand film and the raw footage?",
        a: "Whoever the contract names, so it has to be written down. The U.S. Copyright Office says a commissioned film is a work made for hire only when both sides sign an agreement saying so, and that otherwise the creator is the author. Finished films and raw footage can be treated differently. We spell out both in the proposal, and your attorney should review the language.",
      },
      {
        q: "Do we need a permit to film a brand film at our own office?",
        a: "Usually not, if everything happens on private property with the owner's permission. The Palm Beach County Film and Television Commission says a permit may be required for private property when filming affects adjacent public areas such as roads or sidewalks. Exterior scenes on a street, in a park or on a beach do need one. We confirm the requirement for each location during planning.",
      },
      {
        q: "Can a brand film be cut into ads and social clips?",
        a: "Yes, if those versions are written into the plan before the shoot. A vertical clip needs the subject framed for a tall screen, and a short ad needs a line that works without the rest of the interview. We film those moments deliberately. Cutting them out of a finished widescreen film afterward nearly always produces weaker pieces.",
      },
      {
        q: "Do employees and clients need to sign releases to appear in the film?",
        a: "Yes, we ask everyone who is identifiable on camera to sign a release before filming. A release records that the person agreed to appear and where the film may be used. Regulated firms have more to consider, since client appearances can fall under advertising rules for advisers, lawyers and medical practices. Your attorney or compliance officer should approve the release wording.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "how-to-choose-a-branding-agency-palm-beach"],
    related: ["commercials-and-social-video", "testimonial-and-case-study-video", "drone-video"],
    image: IMAGE,
  },

  {
    service: "video-production",
    slug: "commercials-and-social-video",
    kind: "service",
    name: "Commercials and social video",
    metaTitle: "Commercial Video Production Palm Beach County | Epic Wolf",
    metaDescription:
      "Commercial and social video production in Palm Beach County: ads for streaming, social and web, scripted to one idea and delivered to each platform's specs.",
    kicker: "Commercial and social video production in Palm Beach County",
    headline: "Ads Worth the Seconds They Ask For",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces commercials and social video for Palm Beach County businesses: spots for streaming television, paid social placements and the web. Each ad is scripted around one idea, filmed with a crew assembled through vetted partners and delivered in the lengths, shapes and file formats each platform publishes, with captions on every version.",
    intro: [
      "An ad is the only film people did not ask to watch. That changes the writing. The first seconds have to earn the next ones, the brand has to be present before a viewer can skip and the idea has to survive with the sound off. Most local commercials ignore all three and open on a logo and a drone shot.",
      "We write the spot before we plan the shoot. One idea, one audience, one thing to do next. A wealth firm and a waterfront restaurant should not sound alike, and neither should sound like an advertisement for advertising. Then we list the placements, because a streaming spot, a vertical ad and a silent feed clip are three different pieces of film.",
      "Each platform publishes its own technical requirements, and they do not match. We build the delivery list from that documentation and export every version to it. Because the same team runs the paid campaigns, the cuts are made by people who know which audience sees which ad and what the landing page says when they click.",
    ],
    ground: [
      {
        title: "What YouTube asks for",
        body: "YouTube's recommended upload settings call for an MP4 container, H.264 video with progressive scan and AAC-LC or Opus audio, encoded at the same frame rate the footage was recorded in. It says the standard aspect ratio on a computer is 16:9 and that the player adapts to vertical and square video.",
        source: { label: "YouTube Help: Recommended upload encoding settings", href: "https://support.google.com/youtube/answer/1722171" },
      },
      {
        title: "What LinkedIn asks for",
        body: "LinkedIn accepts video ads from three seconds to 30 minutes long and recommends 15 to 30 seconds so an ad can qualify for all of its placements. It requires MP4 files, lists landscape, square and vertical ratios and takes captions as SRT files with plain text only.",
        source: { label: "LinkedIn Marketing Solutions Help: Video ads specifications", href: "https://www.linkedin.com/help/lms/answer/a424737" },
      },
      {
        title: "Paid voices must be disclosed",
        body: "The FTC says a connection between an endorser and a marketer that viewers would not expect, such as payment or a free product, should be disclosed clearly and conspicuously. For video it adds that the disclosure has the best chance of being clear and conspicuous if it is included in the video itself.",
        source: { label: "FTC: Endorsement Guides, What People Are Asking", href: FTC_FAQ },
      },
      {
        title: "There is no safe number of seconds",
        body: "The U.S. Copyright Office says there are no legal rules permitting the use of a specific number of words, a certain number of musical notes or a percentage of a work. Whether a use is fair depends on all the circumstances, and in cases of doubt the Office recommends getting permission.",
        source: { label: "U.S. Copyright Office: Can I Use Someone Else's Work?", href: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
      },
    ],
    includes: [
      { name: "Concept and script", detail: "A single idea written to the second, with the brand present early and a clear next step at the end." },
      { name: "Storyboard and shot list", detail: "Every frame planned for wide and tall screens so nothing important is cropped out later." },
      { name: "Casting and locations", detail: "Real staff, hired talent or both, with releases, location agreements and film permits handled." },
      { name: "Production day", detail: "A director and a crew sized to the script, brought together through vetted partners and managed by us." },
      { name: "Edit sound and graphics", detail: "The cut, the mix, licensed music and on-screen text designed in your brand's type." },
      { name: "Platform versions", detail: "Separate exports in the lengths and aspect ratios each placement calls for, never one file stretched to fit." },
      { name: "Captions", detail: "Burned-in text for silent feeds and separate caption files where a platform accepts them." },
      { name: "Campaign handoff", detail: "Files named by placement and delivered to whoever runs the media, including our own team when we manage it." },
    ],
    plan: [
      {
        title: "Write the spot",
        body: "We settle the offer, the audience and the placements, then write scripts short enough to read aloud in the time allowed. You approve words and boards before anyone is hired.",
      },
      {
        title: "Film for every shape",
        body: "The set is framed for landscape and vertical together. We record clean versions without text, alternate openings to test and enough extra footage to refresh the ads later without another shoot.",
      },
      {
        title: "Deliver to the documentation",
        body: "Each version is exported against the platform's published requirements, captioned and checked on a phone. If we run the campaign, the ads launch against pages built to receive them.",
      },
    ],
    cta: {
      line: "Send us the offer and where the ad will run.",
      body: "We will come back with a script direction and the list of versions those placements require.",
    },
    faqs: [
      {
        q: "How long should a commercial or social video ad be?",
        a: "Short, and matched to the placement. Each platform publishes its own guidance: LinkedIn, for example, recommends 15 to 30 seconds for video ads even though it accepts much longer files. A streaming spot is usually bought in set lengths, while a feed ad has to make its point before a thumb moves. We write a script for each length instead of trimming one.",
      },
      {
        q: "Can one shoot produce ads for several platforms?",
        a: "Yes, and it should. A single production day can yield a widescreen spot for streaming, vertical ads for social feeds and square versions for placements that favor them, provided every shot is framed with those crops in mind. We plan the list of deliverables first and check each setup against it on set, so no platform gets a compromised crop.",
      },
      {
        q: "Do we need a permit to film a commercial in Palm Beach County?",
        a: "On public property, yes. The Palm Beach County Film and Television Commission issues permits for parks, beaches, streets, sidewalks and public buildings and asks productions to allow three business days for a standard permit. Road closures and special effects take longer. A commercial filmed entirely inside your own business usually does not need one. We handle the application either way.",
      },
      {
        q: "Who owns the commercial once it is finished?",
        a: "Your agreement decides who owns it, and ours states it in plain terms. Ownership of the finished spot is one question. Usage rights for actors, voice talent, music and stock footage are another, because those are typically licensed for specific media and periods. We list every license and its limits in writing so nobody runs an ad past what was cleared.",
      },
      {
        q: "Do people in a commercial need to sign releases?",
        a: "Yes, anyone recognizable in an advertisement should sign a release, including employees and customers. An ad is commercial use of a person's likeness, so written consent matters more here than in almost any other kind of video. If someone on camera is paid or receives something of value for praising the business, the FTC also expects that connection to be disclosed.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "market-a-palm-beach-business-without-looking-loud"],
    related: ["brand-films", "testimonial-and-case-study-video", "event-video", "drone-video"],
    image: IMAGE,
  },

  {
    service: "video-production",
    slug: "testimonial-and-case-study-video",
    kind: "service",
    name: "Testimonial and case study video",
    metaTitle: "Testimonial Video Production Palm Beach County | Epic Wolf",
    metaDescription:
      "Testimonial and case study video in Palm Beach County: client interviews filmed with signed releases and edited to claims your compliance team can approve.",
    kicker: "Testimonial video production in Palm Beach County",
    headline: "Let a Client Say What You Cannot",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces testimonial and case study videos for Palm Beach County businesses. A client explains on camera what changed after working with you, and we shape that interview into a short film and clips. For wealth advisers, law firms and medical practices, we build the release, the disclosures and the review step into the process.",
    intro: [
      "A testimonial is the most believable film a company can make and the easiest to get wrong. The believable part is a real client, unscripted, describing a real result. The risky part is the same thing. In the county's largest professional sectors, what a client may say on camera is governed by rules written for advertising.",
      "An investment adviser's testimonial needs specific disclosures. A Florida lawyer cannot write one for a client or reward the client for giving it. A medical practice needs the patient's written authorization. Any business that shows an unusual result has to be clear about what customers can generally expect. We raise these before the interview is booked, and your attorney or compliance officer signs off on the final cut.",
      "The craft matters as much as the rules. We choose clients who speak plainly, ask questions that lead to specifics and film in a place where they are comfortable, often their own office or home. The edit keeps their words in their order. A case study version adds the context a prospect needs: the situation, the decision and what happened next.",
    ],
    ground: [
      {
        title: "Results have to be typical or explained",
        body: "The FTC says that if an advertiser lacks proof an endorser's experience represents what people will generally achieve, the ad must make clear what the generally expected results are. It adds that statements such as results not typical or individual results may vary will not change how the claim is interpreted.",
        source: { label: "FTC: Endorsement Guides, What People Are Asking", href: FTC_FAQ },
      },
      {
        title: "Investment advisers",
        body: "The SEC's guide to the marketing rule says an advertisement must clearly and prominently disclose whether the person giving a testimonial is a client and whether that person is compensated. The adviser must oversee compliance and, above a small compensation threshold, have a written agreement with the promoter.",
        source: { label: "SEC: Investment Adviser Marketing compliance guide", href: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/investment-adviser-marketing" },
      },
      {
        title: "Patients",
        body: "HHS says the HIPAA Privacy Rule, with limited exceptions, requires an individual's written authorization before a use or disclosure of his or her protected health information can be made for marketing. A patient story on video is built from that kind of information.",
        source: { label: "HHS: HIPAA Privacy Rule guidance on marketing", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html" },
      },
      {
        title: "Florida lawyers",
        body: "The Florida Bar's advertising handbook says testimonials are prohibited unless the speaker is qualified to evaluate the lawyer, describes an actual and representative experience, receives nothing of value and was not scripted by the lawyer. If results are mentioned, a clear disclaimer is required, and the client must give informed consent.",
        source: { label: "The Florida Bar: Handbook on Lawyer Advertising and Solicitation", href: "https://www-media.floridabar.org/uploads/2025/12/Handbook-2025-Approved-by-SCA-12-10-25.pdf" },
      },
      {
        title: "The advertiser answers for the claim",
        body: "The FTC tells businesses that a company is ultimately responsible for what others do on its behalf, and that it can be liable for disseminating endorsements containing representations it knows or should know are deceptive. A client's enthusiasm does not move that responsibility to the client.",
        source: { label: "FTC: Endorsement Guides, What People Are Asking", href: FTC_FAQ },
      },
    ],
    includes: [
      { name: "Client selection", detail: "Help choosing which clients to ask, based on who speaks plainly and whose story a prospect will recognize." },
      { name: "Releases and authorizations", detail: "Signed consent from every participant before filming, in wording your attorney or compliance officer has approved." },
      { name: "Interview design", detail: "Open questions that draw out specifics, never lines for the client to recite." },
      { name: "On-location filming", detail: "A small crew brought in through vetted partners, set up where the client is at ease." },
      { name: "Honest edit", detail: "The client's own words in context, with any required disclosure or disclaimer placed inside the video." },
      { name: "Compliance review cut", detail: "A draft with a transcript for your reviewer to mark up before anything is published." },
      { name: "Case study version", detail: "A longer piece that adds the situation, the decision and the outcome for sales conversations." },
      { name: "Short clips", detail: "Single-quote clips with captions for the website, proposals and social feeds." },
    ],
    plan: [
      {
        title: "Clear the rules first",
        body: "We identify which advertising rules apply to your profession, draft the release and the question list and send both to your reviewer. Then we invite the clients.",
      },
      {
        title: "Film a conversation",
        body: "The interview is unhurried and unscripted. We film where the client is comfortable, capture the supporting footage that shows the work and never feed a line.",
      },
      {
        title: "Edit to what was said",
        body: "The cut stays faithful to the interview. Your reviewer receives a transcript and a draft, disclosures go on screen where required and the approved film is delivered with its shorter clips.",
      },
    ],
    cta: {
      line: "Send us your profession and two clients who would speak for you.",
      body: "We will outline the rules that apply, the release we would use and the questions we would ask.",
    },
    faqs: [
      {
        q: "Do clients need to sign a release for a testimonial video?",
        a: "Yes, every client signs a written release before we film. For most businesses the release covers consent to appear and where the video may run. Some professions need more: HHS says a medical practice needs the patient's written authorization to use health information for marketing, and The Florida Bar requires a client's informed consent for a lawyer's testimonial. Your counsel should approve the form.",
      },
      {
        q: "Can a financial adviser use client testimonial videos?",
        a: "Yes, under the SEC's marketing rule, with conditions. The SEC's compliance guide says the advertisement must clearly and prominently disclose whether the speaker is a client and whether the speaker is compensated, and the adviser must oversee compliance. State-registered advisers may face different rules. We build the disclosures into the edit, and your compliance officer decides whether the video can run.",
      },
      {
        q: "Can we pay or reward a client for a testimonial?",
        a: "It depends on your profession, and for some the answer is no. The Florida Bar says a person giving a lawyer's testimonial may receive nothing of value in exchange. For other businesses the FTC expects any payment or gift to be disclosed clearly within the video. The simplest path is to offer nothing and ask clients who are glad to speak.",
      },
      {
        q: "How long should a testimonial video be?",
        a: "One to two minutes is a sensible length for a single client story, with shorter single-quote clips cut from it. That is our working guideline, not a rule. A case study that walks through the problem and the outcome can run longer because the viewer is already evaluating you. What matters is that every sentence left in the edit is specific.",
      },
      {
        q: "Who owns the testimonial footage and can the client withdraw?",
        a: "Ownership follows your agreement with us, and the client's right to withdraw follows the release they signed. Those are two separate documents. People change their minds and client relationships end, so we keep each testimonial as its own file that can be removed without re-editing anything else. Ask your attorney how the release should handle withdrawal.",
      },
    ],
    guides: ["planning-a-brand-shoot-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "market-a-palm-beach-business-without-looking-loud"],
    related: ["brand-films", "commercials-and-social-video", "event-video"],
    image: IMAGE,
  },

  {
    service: "video-production",
    slug: "event-video",
    kind: "service",
    name: "Event video",
    metaTitle: "Event Video Production Palm Beach County | Epic Wolf",
    metaDescription:
      "Event video in Palm Beach County for galas, openings and conferences: a planned recap film, sponsor and speaker clips and footage the press can use.",
    kicker: "Event video production in Palm Beach County",
    headline: "One Night Filmed to Work All Year",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces event video across Palm Beach County: charity galas, grand openings, conferences and private client events. We decide before the doors open what the footage is for, bring in a crew through vetted partners and deliver a recap film, speaker and sponsor clips and clean footage for the press and next season's invitation.",
    intro: [
      "An event happens once. Whatever the camera misses is gone, and most event videos miss the parts that matter because nobody told the crew what they were. The result is a montage of centerpieces and applause set to music. It proves the event happened. It does not help sell the next table, thank a sponsor or show a donor where the money went.",
      "We plan event coverage backward from its uses. A nonprofit needs a film for the room, a recap for donors and short pieces that credit each sponsor. A developer opening a sales gallery needs footage a reporter can use that week. A firm hosting a client conference on PGA Boulevard needs the keynote, edited, on its website. Those are different shot lists.",
      "Palm Beach County's social calendar is dense in season, and much of it is philanthropic. Venues, towns and performers each have rules about filming, music and public space. We sort those out with the event planner in advance so the crew is expected, credentialed and out of the guests' way.",
    ],
    ground: [
      {
        title: "The season has a schedule",
        body: "Palm Beach Society publishes a cover and editorial schedule that runs weekly from early October through late April, pairing each issue date with a charitable organization. It is a fair picture of when the gala calendar is busiest and when crews and venues are hardest to book.",
        source: { label: "Palm Beach Society: Cover Schedule", href: "https://pbsociety.com/editorial-schedule" },
      },
      {
        title: "Events on public property on the island",
        body: "The Town of Palm Beach says events with guests and any setup on public property require a special event permit from the Town Clerk's Office, including small wedding ceremonies at parks or beaches. It lists the public locations it accepts and says each may be used for a special event once per month.",
        source: { label: "Town of Palm Beach: Event Permits FAQ", href: TOWN_FAQ },
      },
      {
        title: "Charity events in the Town",
        body: "The Town of Palm Beach has a charitable solicitation permit. Its application calls for the organization's 501(c)(3) documentation, a board resolution stating the event's location and date, current state solicitation registration and one trained crowd control manager for every 250 attendees.",
        source: { label: "Town of Palm Beach: Charitable Solicitation FAQ", href: TOWN_FAQ },
      },
      {
        title: "Filming in county parks and streets",
        body: "The Palm Beach County Film and Television Commission issues permits for public property such as parks, beaches, streets, sidewalks and public buildings at no cost to production, and says securing one requires a $1 million general liability policy. The commission does not issue permits for the Town of Palm Beach.",
        source: { label: "Palm Beach County Film and Television Commission: One-Stop Permitting", href: PBFILM },
      },
      {
        title: "The band's music follows the video",
        body: "YouTube says a Content ID claim is generated when an upload matches copyrighted material, and that depending on the owner's settings a claim can block the video, run ads on it or track its viewership. A recap that carries the DJ's set or a cover band's performance can be claimed.",
        source: { label: "YouTube Help: Learn about copyright claims", href: "https://support.google.com/youtube/answer/6013276" },
      },
    ],
    includes: [
      { name: "Coverage plan", detail: "A run of show for the camera: the moments, the people and the sponsor mentions that cannot be missed." },
      { name: "Venue and permit coordination", detail: "Filming permission, credentials, load-in and any permit confirmed with the venue and the town beforehand." },
      { name: "Event crew", detail: "Camera and sound operators engaged through vetted partners, sized to the room and briefed by us." },
      { name: "Speeches and interviews", detail: "Clean audio from the podium and short on-site interviews with hosts, honorees and guests." },
      { name: "Recap film", detail: "A short film of the event with licensed music that can be posted without a copyright claim." },
      { name: "Sponsor and speaker clips", detail: "Individual pieces that thank each sponsor or present a full talk, captioned for sharing." },
      { name: "Press footage", detail: "Untitled clips and a few stills a news outlet or society editor can use with the story." },
      { name: "Archive", detail: "Organized selects kept for next season's invitation, annual report and donor appeals." },
    ],
    plan: [
      {
        title: "Plan from the uses",
        body: "We meet with the host and the event planner, list every piece the footage has to become and build the shot list around the program. Permissions and permits are settled before the week of the event.",
      },
      {
        title: "Cover it quietly",
        body: "The crew arrives early, wires the podium and works at the edges of the room. Guests at a Palm Beach gala should notice the evening, not the cameras.",
      },
      {
        title: "Deliver in order of urgency",
        body: "Press clips and a short recap come first, while the event is still news. Sponsor pieces, full speeches and the archive follow on the schedule we agree in writing.",
      },
    ],
    cta: {
      line: "Send us the event date and the venue.",
      body: "We will tell you what permissions the location needs and propose the films the night should produce.",
    },
    faqs: [
      {
        q: "Do we need a permit to film an event in Palm Beach County?",
        a: "Only when public property is involved. An event filmed inside a private venue needs the venue's permission, not a film permit. If the event or the filming uses a public park, beach or street, the county's Film and Television Commission permits it in most municipalities, and the Town of Palm Beach runs its own special event and filming permits. We check with both.",
      },
      {
        q: "Do event guests need to sign releases to be filmed?",
        a: "Not individually, in most cases, but they should be told. The usual practice is a notice on the invitation and at the entrance that the event is being filmed, with signed releases for anyone interviewed or featured. Private client events and gatherings with minors or patients call for more care. Your attorney should decide the notice wording, and we follow the host's do-not-film list.",
      },
      {
        q: "How long should an event recap video be?",
        a: "A recap works at about a minute or two, short enough that someone who was not there will finish it. Longer material belongs in separate pieces: a full keynote, an honoree's speech, a sponsor thank-you. We deliver those as their own files so each can be sent to the people who care about it instead of burying them in a long edit.",
      },
      {
        q: "Who owns the footage from our event?",
        a: "The agreement between us sets that out, and we put it in writing before the event. Hosts usually want the right to reuse the footage for future invitations and reports, so we address the finished films and the raw footage separately. Performers, speakers and venues may hold rights of their own in what was recorded, which is another reason permissions are gathered in advance.",
      },
      {
        q: "Can one event shoot produce content for several platforms?",
        a: "Yes, an evening can supply a widescreen recap for the website, vertical clips for social feeds, sponsor acknowledgments and footage for the press. It takes planning, because a vertical clip of a speaker has to be framed that way while the speech is happening. We assign those shots in the coverage plan so the crew is not choosing between formats in the moment.",
      },
    ],
    guides: ["filming-and-photo-permits-palm-beach-county", "getting-press-palm-beach-county", "market-a-palm-beach-business-without-looking-loud"],
    related: ["brand-films", "testimonial-and-case-study-video", "commercials-and-social-video", "drone-video"],
    image: IMAGE,
  },

  {
    service: "video-production",
    slug: "real-estate-and-property-films",
    kind: "service",
    name: "Real estate and property films",
    metaTitle: "Real Estate Video Production Palm Beach County | Epic Wolf",
    metaDescription:
      "Property films in Palm Beach County for luxury listings, new developments and custom builders, directed like a brand film and cleared for where it is shot.",
    kicker: "Real estate video production in Palm Beach County",
    headline: "Show the House the Way a Buyer Walks It",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces real estate and property films in Palm Beach County: luxury listings, new developments, custom builders' finished homes and commercial space. We script the walk through the property, bring in a film crew and an FAA-certified drone pilot through vetted partners, handle permits and deliver a film with shorter cuts for listings, ads and social.",
    intro: [
      "The standard listing video is a slow glide through empty rooms with a piano underneath. Every agent has one, so none of them helps. A buyer deciding whether to fly in for a showing wants to understand the house: how you arrive, where the light is in the afternoon, what you see from the kitchen, how far the dock is from the door.",
      "We plan a property film as a route. The sequence follows the way a person would move through the home, and the script, if there is one, belongs to the architect, the builder or the agent who knows it. Developments and builders need more than one film: the finished residence, the neighborhood and the people behind the work, which is the part a buyer cannot get from photographs.",
      "Filming property here has its own paperwork. The county permits filming that touches public roads and sidewalks, the Town of Palm Beach runs a separate process and housing advertisements answer to federal fair housing rules. We clear the location before the crew is booked and keep the film's claims to what the listing can support.",
    ],
    ground: [
      {
        title: "Fair housing applies to the film",
        body: "Federal regulations make it unlawful to publish an advertisement for the sale or rental of a dwelling that indicates a preference or limitation based on race, color, religion, sex, handicap, familial status or national origin. The rule names words, photographs and illustrations, and it reaches the choice of media and locations for advertising.",
        source: { label: "24 CFR 100.75: Discriminatory advertisements", href: "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/part-100/subpart-B/section-100.75" },
      },
      {
        title: "Florida licensees and misleading ads",
        body: "Florida law allows the Florida Real Estate Commission to discipline a licensee who has advertised property or services in a manner that is fraudulent, false, deceptive or misleading in form or content. A film that makes a view, a lot or a finish look like something it is not is an advertising problem for the agent.",
        source: { label: "Florida Statutes 475.25(1)(c)", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0475/Sections/0475.25.html" },
      },
      {
        title: "Private homes can still need a permit",
        body: "The county's Film and Television Commission says permitting may be required on private property when filming affects adjacent public areas such as roads or sidewalks, or when a municipality has requested special permitting for residential areas. Its staff works with the municipal contacts on the production's behalf.",
        source: { label: "Palm Beach County Film and Television Commission: One-Stop Permitting", href: PBFILM },
      },
      {
        title: "The island is its own process",
        body: "The county commission states that it does not issue permits for the Town of Palm Beach. The Town's event permit FAQ describes minor and large-scale commercial filming permits, each with its own insurance requirements, and says a certificate of insurance is not due until the Town Council has approved the application.",
        source: { label: "Town of Palm Beach: Event Permits FAQ", href: TOWN_FAQ },
      },
    ],
    includes: [
      { name: "Route and script", detail: "The order a viewer moves through the property, with narration or interview lines written before the shoot." },
      { name: "Light and timing", detail: "A schedule set by the sun for each room, the pool, the water and the street side of the house." },
      { name: "Interior and exterior filming", detail: "A camera crew chosen for architecture and brought in through vetted partners." },
      { name: "Aerial footage", detail: "Drone shots of the lot, the waterfront and the surroundings, flown by an FAA-certified remote pilot." },
      { name: "People on camera", detail: "The builder, the architect or the agent explaining what a buyer cannot see in a photograph." },
      { name: "Permits and permissions", detail: "Owner consent, association rules, film permits and any airspace authorization the flight requires." },
      { name: "Listing and ad versions", detail: "The full film plus short cuts sized for listing sites, paid ads and vertical social placements." },
      { name: "Web placement", detail: "Captioned files and the page markup that helps search engines index the film with the property." },
    ],
    plan: [
      {
        title: "Walk it before filming it",
        body: "We visit the property, choose the route and the hours with the right light and confirm what the owner, the association and the municipality will allow. The agent or builder approves the shot list.",
      },
      {
        title: "Film in one pass",
        body: "Ground and aerial work are scheduled together so the house is staged once. We film each room for wide and vertical frames and record anyone speaking in a quiet part of the day.",
      },
      {
        title: "Cut for where buyers look",
        body: "The main film goes to the property page. Shorter versions go to the listing, the ads and the agent's social accounts, each reviewed against what the listing itself states.",
      },
    ],
    cta: {
      line: "Send us the address and the listing or launch date.",
      body: "We will tell you what the location requires to film and outline the films the property deserves.",
    },
    faqs: [
      {
        q: "Do we need a permit to film a house for sale in Palm Beach County?",
        a: "Often no, but check before the crew arrives. Filming that stays on the private lot with the owner's consent generally does not need a film permit. The county's Film and Television Commission says one may be required when filming affects adjacent roads or sidewalks or when a municipality has asked for special permitting in residential areas. Gated communities and condominium associations add their own approvals.",
      },
      {
        q: "How long should a real estate video be?",
        a: "Long enough to walk the property once without repeating a room, which for many homes is a couple of minutes, and that is a guideline from practice, not a rule. Listing sites and social placements favor much shorter cuts. A development or a builder's story can run longer because the viewer is choosing a company as well as a house.",
      },
      {
        q: "Who owns a listing video, the agent or the seller?",
        a: "The party named in the production agreement owns it, so decide that before filming. Agents often commission the film and want to keep using it in their own marketing after the sale, while sellers and builders may want it too. We write the owner and the permitted uses into the contract. If the listing changes hands, the paperwork already answers who may keep running the film.",
      },
      {
        q: "Can one property shoot cover the listing and social media and ads?",
        a: "Yes, a single visit can produce the full film, a short listing cut, vertical clips and paid ad versions. We stage the house once and film each space twice, wide and tall. The federal fair housing rule on advertising reaches the choice of media as well as the wording, so the ad versions are built with whoever runs the campaign and kept consistent with the listing.",
      },
      {
        q: "Do owners or neighbors need to sign anything before a property is filmed?",
        a: "The owner should sign a location release, and anyone who appears on camera should sign a personal one. Neighbors do not sign, but their privacy counts. Florida law restricts using a drone to record private property or its occupants for surveillance without written consent where they have a reasonable expectation of privacy. We frame aerial shots on the subject property and brief the pilot accordingly.",
      },
    ],
    guides: ["filming-and-photo-permits-palm-beach-county", "drone-rules-palm-beach-county", "planning-a-brand-shoot-palm-beach-county"],
    related: ["drone-video", "brand-films", "commercials-and-social-video"],
    image: IMAGE,
  },

  {
    service: "video-production",
    slug: "drone-video",
    kind: "service",
    name: "Drone video",
    metaTitle: "Drone Video Production Palm Beach County | Epic Wolf",
    metaDescription:
      "Drone video in Palm Beach County for properties, waterfronts and job sites, planned by Epic Wolf and flown on every job by an FAA-certified remote pilot.",
    kicker: "Drone video production in Palm Beach County",
    headline: "Aerial Footage With a Reason to Be There",
    answer:
      "Epic Wolf is a West Palm Beach agency that plans, directs and produces drone video across Palm Beach County for properties, waterfronts, construction sites and brand films. Commercial drone flights legally require an FAA-certified remote pilot, so a certified pilot engaged through our vetted partners flies every job. We plan the shots, confirm airspace authorization and permits and edit the footage into the finished film.",
    intro: [
      "Aerial footage became cheap, and it shows. The same rising shot over the same roofline opens half the videos in South Florida. A drone earns its place when it shows something the ground cannot: how a property sits on the Intracoastal, how close a site is to the highway, the scale of a marina or a finished community.",
      "It is also the most regulated part of a shoot. Flying for a business falls under the FAA's Part 107 rule. The pilot must hold a Remote Pilot Certificate, the aircraft must be registered and broadcast Remote ID and flights in controlled airspace near airports need authorization first. Parts of Palm Beach County sit inside controlled airspace, so the check comes before the quote.",
      "Epic Wolf does not own drones or employ pilots. We plan what the aerial shots are for, engage a certified pilot suited to the job and direct the flight alongside the ground crew. The footage is edited into the film it was planned for, not handed over as a folder of clips.",
    ],
    ground: [
      {
        title: "A certificate is required",
        body: "The FAA says that in order to fly a drone under its Small UAS Rule, Part 107, a pilot must obtain a Remote Pilot Certificate from the FAA. Certificate holders must complete online recurrent training every 24 calendar months to keep their aeronautical knowledge current.",
        source: { label: "FAA: Become a Certificated Remote Pilot", href: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
      },
      {
        title: "Remote ID",
        body: "The FAA says drones that are required to be registered, including those flown for business, must comply with its Remote ID rule. Remote ID is the ability of a drone in flight to provide identification and location information that other parties can receive through a broadcast signal.",
        source: { label: "FAA: Remote Identification of Drones", href: "https://www.faa.gov/uas/getting_started/remote_id" },
      },
      {
        title: "Controlled airspace",
        body: "The FAA says drone pilots planning to fly under 400 feet in controlled airspace around airports must receive an airspace authorization before they fly. Its LAANC system lets Part 107 pilots submit a near real-time authorization request through approved service suppliers.",
        source: { label: "FAA: UAS Data Exchange (LAANC)", href: "https://www.faa.gov/uas/getting_started/laanc" },
      },
      {
        title: "What the county film office asks for",
        body: "The Palm Beach County Film and Television Commission folds Part 107 into its permit process. For commercial drone filming it requires the drone's registration certificate, a copy of the remote pilot's certificate and a copy of any LAANC approval, and it limits flights to daylight or twilight.",
        source: { label: "Palm Beach County Film and Television Commission: Filming With a Drone", href: PBFILM_DRONE },
      },
      {
        title: "The Town of Palm Beach",
        body: "The Town of Palm Beach says no additional Town permits are required to use a drone beyond what the FAA requires. Drones operated within the town must be operated and registered in accordance with FAA and State of Florida rules, which the Town attributes to Section 14-35 of its code.",
        source: { label: "Town of Palm Beach: Event Permits FAQ", href: TOWN_FAQ },
      },
      {
        title: "Privacy under Florida law",
        body: "Florida Statute 934.50 says a person may not use a drone with an imaging device to record privately owned real property, or its owner or occupants, with intent to conduct surveillance in violation of a reasonable expectation of privacy without written consent. The statute presumes that expectation when a person is not observable from ground level.",
        source: { label: "Florida Statutes 934.50", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0934/Sections/0934.50.html" },
      },
    ],
    includes: [
      { name: "Aerial shot plan", detail: "Each flight path chosen for what it shows, drawn on a map before the pilot is booked." },
      { name: "Certified pilot", detail: "An FAA-certified remote pilot engaged through vetted partners for every flight, with the certificate on file." },
      { name: "Airspace check", detail: "The location reviewed against FAA airspace maps and authorization requested where it is required." },
      { name: "Permits and property consent", detail: "County film permit paperwork when public property is involved and written permission from the owner." },
      { name: "Directed flight day", detail: "Flights scheduled for light, wind and tide and directed with the ground crew so the footage matches." },
      { name: "Edit and delivery", detail: "Aerials graded and cut into the film or delivered as finished clips in each format you need." },
    ],
    plan: [
      {
        title: "Check the sky first",
        body: "Before anything is promised, the address is checked against the FAA's airspace maps and local rules. If a flight needs authorization or a permit, we request it. If it cannot be flown legally, we say so.",
      },
      {
        title: "Fly with a purpose",
        body: "The pilot arrives with a shot list. We direct a handful of deliberate moves at the right hour and keep the aircraft over the subject property, away from neighbors and crowds.",
      },
      {
        title: "Put it to work",
        body: "Aerial footage is color matched to the ground cameras and placed where it explains something. You receive the finished film and its versions, with the flight records kept on file.",
      },
    ],
    cta: {
      line: "Send us the address you want filmed from the air.",
      body: "We will check the airspace and tell you what can be flown there and what approvals it takes.",
    },
    faqs: [
      {
        q: "Do you need a license to fly a drone for business in Florida?",
        a: "Yes. The FAA requires anyone flying a drone under Part 107, the rule that covers work and business flights, to hold a Remote Pilot Certificate. A hobbyist flying a company's video without that certificate puts the company at risk. Epic Wolf holds no pilot certificate of its own. A certified remote pilot flies every job we produce, and we keep a copy of the certificate with the project.",
      },
      {
        q: "Do we need a permit to fly a drone in Palm Beach County?",
        a: "It depends on where the drone takes off and what is underneath. FAA rules apply everywhere, and controlled airspace needs FAA authorization. Filming from public property generally goes through the county's Film and Television Commission, which asks for the pilot's certificate and the drone's registration. The Town of Palm Beach says it requires nothing beyond the FAA's rules. Private property needs the owner's permission.",
      },
      {
        q: "Who owns the drone footage?",
        a: "The contract says who owns it, and ours covers aerial footage in the same terms as the film it belongs to. Because the pilot is an independent professional, the agreement with the pilot has to pass the necessary rights along in writing. We arrange that before the flight, so the footage you receive is clear to use in the ways the proposal describes.",
      },
      {
        q: "How long should a drone video be?",
        a: "Shorter than most people expect. Aerial shots are strongest as a few seconds inside a film, where each one answers a question about location or scale. A piece made only of drone footage rarely holds attention for long. We plan three or four distinct moves and use them where they explain something.",
      },
      {
        q: "Can drone footage be used for social media and ads and the website?",
        a: "Yes, one flight can serve all three when it is planned for them. A widescreen aerial rarely crops well to a tall screen, so the framing has to leave room for both. We ask the pilot to repeat key moves for vertical versions. People who are recognizable from the air should have agreed to be filmed, the same as on the ground.",
      },
    ],
    guides: ["drone-rules-palm-beach-county", "filming-and-photo-permits-palm-beach-county", "planning-a-brand-shoot-palm-beach-county"],
    related: ["real-estate-and-property-films", "brand-films", "event-video"],
    image: IMAGE,
  },
]
