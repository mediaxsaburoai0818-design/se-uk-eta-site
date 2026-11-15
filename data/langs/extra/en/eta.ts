import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（en・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "who-needs-an-eta",
    group: "eta",
    title: "Who needs a UK ETA? Nationalities and exemptions 2026",
    description: "Who needs a UK ETA and who is exempt: British and Irish citizens, people with UK permission to stay, airside transit. Check your nationality.",
    h1: "Who needs a UK ETA?",
    lead: "A UK ETA is required for nationals of visa-exempt countries making short visits (tourism, business, short-term study). Every traveller, including babies and children, needs their own ETA.",
    card: "Who needs an ETA, who is exempt, and why children need their own",
    sections: [
      { h: "Who does not need an ETA", blocks: [
        { ul: [
          "British and Irish citizens (travelling on a British or Irish passport)",
          "People with permission to live, work or study in the UK (for example a visa, or settled or pre-settled status)",
          "Holders of a British Overseas Territories Citizen or British National (Overseas) passport",
          "People resident in Ireland who are travelling from Ireland, Guernsey, Jersey or the Isle of Man",
          "Airside transit passengers who do not go through border control",
          "People waiting for a decision on an EU Settlement Scheme application",
        ] },
      ] },
      { h: "Good to know", blocks: [
        { ul: [
          "People with British or Irish citizenship cannot get an ETA and travel on the documents of that citizenship.",
          "If your nationality is not visa-exempt, you may need a visa: check with the official GOV.UK tool, [Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
          "Babies and children also need their own ETA.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-or-visa",
    group: "eta",
    title: "UK ETA or visa: what is the difference? 2026",
    description: `UK ETA vs visa: an ETA allows stays of up to ${F.staySixMonths} months for tourism, business and short-term study, but not work or living in the UK.`,
    h1: "UK ETA or visa: the difference",
    lead: "A UK ETA is not a visa. It is a travel authorisation for nationals of visa-exempt countries, and it does not guarantee entry — that decision is made by Border Force.",
    card: `What an ETA lets you do (up to ${F.staySixMonths} months) and when you need a visa`,
    sections: [
      { h: `What you can do with an ETA (up to ${F.staySixMonths} months)`, blocks: [
        { ul: [
          "Tourism and visiting family and friends",
          "Business trips",
          "Short-term study",
          "Transit that goes through border control",
          "Permitted paid engagements; activities of up to 3 months under the Creative Worker concession",
        ] },
      ] },
      { h: "What you cannot do with an ETA", blocks: [
        { ul: [
          `Stay longer than ${F.staySixMonths} months`,
          "Do paid or unpaid work for a UK company or as self-employed (except the exceptions above)",
          "Claim public funds",
          "Live in the UK in practice through frequent or successive visits",
          "Give notice of or register a marriage or civil partnership (this requires a Marriage Visitor visa)",
        ] },
        `If your nationality is not visa-exempt, check which visa you need with [Check if you need a UK visa](https://www.gov.uk/check-uk-visa).`,
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "standard-visitor-visa": {
    slug: "uk-standard-visitor-visa",
    group: "eta",
    title: "UK Standard Visitor visa: when an ETA is not enough (2026)",
    description: "If your UK ETA is refused (no appeal) or your nationality needs a visa, apply for a Standard Visitor visa: £135 for up to 6 months, decision usually in 3 weeks.",
    h1: "UK Standard Visitor visa: when an ETA is not enough",
    lead: "If your UK ETA is refused (there is no appeal) or your nationality requires a visa, you must apply for a Standard Visitor visa to travel to the UK. The facts below are taken from GOV.UK.",
    card: "Fees, timings and how to apply when an ETA is refused or not available",
    sections: [
      { h: "Who needs a visa instead of an ETA", blocks: [
        { ul: [
          "People whose nationality requires a visa for the UK (not eligible for an ETA).",
          "People whose ETA application has been refused — you cannot enter the UK with an ETA, so a visa is required.",
          "Check which visa you need with the [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) tool on GOV.UK.",
        ] },
      ] },
      { h: "Fees (GOV.UK)", blocks: [
        { table: { head: ["Visa", "Fee"], rows: [
          ["Standard Visitor (up to 6 months)", "£135"],
          ["Long-term — 2 years", "£506"],
          ["Long-term — 5 years", "£903"],
          ["Long-term — 10 years", "£1,128"],
          ["Transit visa", "£74.50"],
        ] } },
        "Long-term visas allow multiple entries, but each stay is limited to 6 months. Amounts are as stated on GOV.UK and may change.",
      ] },
      { h: "Timing, validity and length of stay", blocks: [
        { ul: [
          "Decision: usually within 3 weeks of your appointment at the visa application centre.",
          "Stay: up to 6 months per visit.",
          "When to apply: no earlier than 3 months before you travel.",
        ] },
      ] },
      { h: "How to apply (GOV.UK)", blocks: [
        { ul: [
          "1. Apply online (you can save your application and finish it later).",
          "2. Book an appointment at a visa application centre.",
          "3. Attend the appointment to prove your identity, give your biometrics (fingerprints and a photo) and provide your documents.",
          "4. You get the decision by email; your passport is returned at the centre.",
        ] },
        "Things to prepare include:",
        { ul: [
          "A valid passport (valid for the whole of your stay)",
          "Travel dates, accommodation and the estimated cost of the trip",
          "Your current address and how long you have lived there",
          "Your annual income (if applicable) and employer details (if applicable)",
          "Any criminal or immigration history",
          "Certified translations of any documents not in English or Welsh",
        ] },
        { note: "This is an independent information service, not a government website. Details and fees may change — always check the official information on GOV.UK before you apply." },
      ] },
    ],
    faq: [
      { q: "When do I need a Standard Visitor visa instead of an ETA?", a: "When your nationality requires a visa for the UK, or when your ETA application has been refused. An ETA refusal cannot be appealed — to travel, you apply for the right visa." },
      { q: "How much does the Standard Visitor visa cost?", a: "According to GOV.UK, a visa for up to 6 months costs £135. Long-term: £506 (2 years), £903 (5 years), £1,128 (10 years). Transit visa: £74.50." },
      { q: "How long does processing take?", a: "You usually get a decision within 3 weeks of your appointment at the visa application centre." },
      { q: "How long can I stay in the UK?", a: "The standard stay is up to 6 months per visit." },
    ],
    sources: [
      { label: "GOV.UK – Visit the UK as a Standard Visitor", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "expiration": {
    slug: "when-eta-expires",
    group: "eta",
    title: `When does a UK ETA expire? ${F.validYears} years or passport expiry (2026)`,
    description: `A UK ETA expires after ${F.validYears} years or when your passport expires, whichever is first. When to reapply: new passport, name change, ETA expired.`,
    h1: "When does a UK ETA expire, and when do you need a new one?",
    lead: `A UK ETA is valid for ${F.validYears} years from the date it is issued, or until your passport expires — whichever comes first. Until then you can travel to England and the rest of the UK as many times as you like, for up to ${F.staySixMonths} months per visit (GOV.UK).`,
    card: "When your ETA expires, when to reapply and travelling close to expiry",
    sections: [
      { h: "How long an ETA lasts: the rules", blocks: [
        { ul: [
          `Valid for ${F.validYears} years from the date of issue`,
          "Expires together with your passport (if the passport expires first)",
          "Allows multiple entries to the UK while it is valid",
          `Each stay must not exceed ${F.staySixMonths} months`,
          "The ETA is linked to one specific passport",
        ] },
        "More detail on validity is on our page [UK ETA validity](/en/validity/).",
      ] },
      { h: "When do you need to apply again?", blocks: [
        "You need to make a new UK ETA application in these cases:",
        { ul: [
          `When ${F.validYears} years have passed since your ETA was issued`,
          "When you have a new passport",
          "If you change your name",
          "If your circumstances change in a way that affects your eligibility",
        ] },
      ] },
      { h: "Can I travel with an ETA that is about to expire?", blocks: [
        "Your UK ETA must be valid when you enter the UK. It does not need to be valid for the whole of your stay — what matters is that it is valid on the day you arrive. Even so, it is a good idea to apply for a new one in good time.",
      ] },
      { h: "How do I check my expiry date?", blocks: [
        "According to GOV.UK, you can check online via [gov.uk/eta](https://www.gov.uk/eta) (Check your ETA): it shows whether you have an ETA and when it expires. See also [Check UK ETA status](/en/check-status/).",
      ] },
      { h: "What if I change passport while my ETA is valid?", blocks: [
        `The ETA is linked to one specific passport. If you get a new passport (for example because the old one expired, or after a name change), you must make a new ETA application and pay the ${F.fee} fee again. The old ETA stops being valid.`,
        { note: `Tip: apply for your UK ETA at least ${F.decisionDays} working days before your planned trip, to allow time for your application to be processed.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "children-family": {
    slug: "children-and-families",
    group: "eta",
    title: "UK ETA for children and families: do babies need one? 2026",
    description: "Babies and children also need their own UK ETA. You can apply on behalf of someone else using their passport and a photo of their face.",
    h1: "UK ETA for children and families",
    lead: "Every traveller, including babies and children, needs their own UK ETA. You can submit the application on behalf of another person.",
    card: "Every child needs their own ETA — how to apply for the whole family",
    sections: [
      { h: "Applying for your family", blocks: [
        { ul: [
          "Each traveller needs their own ETA, including children and babies",
          "You can apply for another person: in the app if they are with you, otherwise online (their passport and a photo of their face are required)",
          "Children listed on a France-UK school trip travel information form do not need an ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "eta-refused",
    group: "eta",
    title: "UK ETA refused? What to do and your options in 2026",
    description: "A refused UK ETA cannot be appealed. To travel to the UK you must apply for a visa instead. Your options after a refusal in 2026.",
    h1: "UK ETA refused: what happens now?",
    lead: "If your UK ETA application is refused, you cannot appeal. If you still want to travel to the UK, you must apply for a visa.",
    card: "No appeal against a refusal — a visa is the way forward",
    sections: [
      { h: "What to do after a refusal", blocks: [
        { ul: [
          "There is no appeal process against an ETA refusal",
          "To travel to the UK, you must apply for a suitable visa",
          "Check on GOV.UK which visa fits the purpose of your trip",
        ] },
      ] },
      { h: "Next step: the Standard Visitor visa", blocks: [
        "After an ETA refusal, a visa is the only way to travel to the UK. See the cost (£135), timings and process in our guide to the [UK Standard Visitor visa](/en/uk-standard-visitor-visa/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (April 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "common-mistakes",
    group: "eta",
    title: "Common UK ETA application mistakes and the official app 2026",
    description: `Common UK ETA mistakes: details that don't match your passport, photo requirements, paying the ${F.fee} fee and fake websites. Use the official UK ETA app.`,
    h1: "Common mistakes and the UK ETA app",
    lead: "Many problems come from details that do not match your passport. Always use the official \"UK ETA\" app and check your details before you submit.",
    card: "Passport mismatches, photos, payment and fake sites — what to avoid",
    sections: [
      { h: "Mistakes to avoid", blocks: [
        { ul: [
          "Your details must match your passport exactly: any differences cause delays or a refusal",
          "Photos required: your face and the passport pages, sharp and correct",
          `Payment (${F.fee}): Apple Pay, Google Pay or card (Amex, JCB, Mastercard, Visa); 3D Secure authentication may be required`,
          "A biometric passport (with the ePassport symbol) is needed to read the chip",
          "Watch out for fake websites that imitate the government and charge higher fees: use GOV.UK only",
        ] },
        "For a step-by-step guide to the app, see [UK ETA App](/en/uk-eta-app/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "official-gov-uk-site",
    group: "eta",
    title: "The official GOV.UK site for the UK ETA – how to spot fake sites",
    description: `Only GOV.UK is the official place to apply for a UK ETA. The fee is exactly ${F.fee}. How to spot fake sites and avoid scams with extra charges.`,
    h1: "The official GOV.UK site for applying for a UK ETA",
    lead: "You can apply for a UK ETA on the UK government's official website or in the official mobile app.",
    card: `How to recognise GOV.UK, warning signs of fake sites, and the ${F.fee} fee`,
    sections: [
      { h: "Official web address", blocks: [
        "Official UK ETA page: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta). The .gov.uk domain means it is an official UK government site.",
      ] },
      { h: "How to recognise the official site", blocks: [
        { ul: [
          "The web address contains gov.uk (the UK government domain)",
          "The site is run by the Home Office",
          `The fee is exactly ${F.fee}`,
          "The site has the distinctive black-and-white GOV.UK design",
          "It does not charge a fee for \"faster\" processing",
        ] },
      ] },
      { h: "How to spot a fake site", blocks: [
        { note: "Warning signs:" },
        { ul: [
          "The web address does not contain gov.uk",
          `A fee significantly higher than ${F.fee}`,
          "A promise of \"guaranteed approval\"",
          "An offer of \"faster processing\"",
          "Aggressive advertising or intrusive pop-up windows",
          "No GOV.UK logo",
        ] },
      ] },
      { h: "Official mobile app", blocks: [
        "You can also apply in the official mobile app, \"UK ETA\":",
        { ul: [
          "iOS: search for \"UK ETA\" in the App Store (publisher: Home Office)",
          "Android: search for \"UK ETA\" on Google Play (publisher: Home Office)",
        ] },
        "How to use it: see [UK ETA App](/en/uk-eta-app/).",
      ] },
      { h: "Other useful government pages", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) — check whether you need a visa for the UK",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) — information on the visitor visa",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Visit the UK as a Standard Visitor", url: "https://www.gov.uk/standard-visitor" },
    ],
  },

  "transit": {
    slug: "transit-through-the-uk",
    group: "eta",
    title: "Transiting through the UK: do you need a UK ETA? 2026",
    description: "Do you need a UK ETA to transit? Yes if you go through border control (landside), no if you stay airside. Transit rules and exemptions for 2026.",
    h1: "Transiting through the UK — do I need a UK ETA?",
    lead: "You only need a UK ETA for transit if you go through border control at a UK airport before continuing your journey (landside). If you change flights without going through border control (airside), you do not need an ETA. If you are unsure, ask your airline.",
    card: "Airside vs landside transit — when an ETA is needed and the exemptions",
    sections: [
      { h: "Transit rules", blocks: [
        "Since 2 April 2025, EU citizens have needed a UK ETA to transit through the UK if they go through border control at the airport (landside transit). For transit without going through border control (airside transit), no ETA is needed. If you are unsure, ask your airline. Travellers of other nationalities can check their situation with [Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
      ] },
      { h: "Types of transit", blocks: [
        { table: { head: ["Type of transit", "What it means", "ETA needed?"], rows: [
          ["Airside transit", "Changing flights at the airport without going through border control", "No"],
          ["Landside transit", "Going through border control before continuing your journey, for example to collect baggage or stay overnight in a hotel — you formally enter the UK", "Yes"],
        ] } },
        "If you are unsure whether you will go through border control, ask your airline.",
      ] },
      { h: "When an ETA is required for transit", blocks: [
        { ul: [
          "Landside transit (you go through border control): ETA required",
          "Airside transit (no passport control): no ETA required",
          "According to the official factsheet, transit passengers at Heathrow or Manchester who do not go through UK passport control currently do not need an ETA",
          "Always check your type of transit with your airline",
        ] },
        "On any route with a change in the UK, you need a UK ETA if you go through border control at the UK airport, however short the connection. If you change without going through border control (airside), no ETA is needed.",
      ] },
      { h: "Exemptions from the ETA requirement for transit", blocks: [
        "There are few exemptions from the ETA requirement for transit:",
        { ul: [
          "Irish citizens (Common Travel Area)",
          "Holders of a valid UK visa",
          "Holders of permanent permission to stay in the UK (settled or pre-settled status)",
        ] },
      ] },
      { h: "How to avoid needing an ETA for transit", blocks: [
        "If you do not want to apply for a UK ETA, you can choose routes that do not go through the UK. For example:",
        { ul: [
          "A direct flight to your destination",
          "A connection in an EU country (Amsterdam, Frankfurt, Paris)",
          "A connection in Dublin (Ireland — no ETA required)",
        ] },
        { note: `Tip: if you are planning a flight with a change in London, apply for your UK ETA at least ${F.decisionDays} working days before departure. Without an ETA you may be refused boarding.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (April 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-news": {
    slug: "eta-news",
    group: "eta",
    title: `UK ETA news 2025–2026: ${F.fee} fee, full enforcement and more`,
    description: `UK ETA news: the fee rose to ${F.fee} on 8 April 2026, full enforcement from 25 February 2026, EU citizens included from 2 April 2025, and visa fee rises.`,
    h1: "UK ETA news: the latest changes",
    lead: `The key UK ETA changes of 2025–2026: the fee rose to ${F.fee} on 8 April 2026, the ETA has been fully enforced since 25 February 2026, and EU citizens have needed one since 2 April 2025. Facts from GOV.UK and the Home Office only.`,
    card: "Fee rise, full enforcement, EU citizens and other recent changes",
    sections: [
      { h: `8 April 2026: UK ETA fee rises to ${F.fee}`, blocks: [
        `From 8 April 2026 the UK ETA fee is ${F.fee} instead of the previous £16 (a 25% increase). The date you apply is what counts.`,
        `The Home Office has confirmed the increase in the UK ETA (Electronic Travel Authorisation) fee from £16 to ${F.fee}. The new fee applies from 8 April 2026.`,
        `The fee depends on the date of your application: anyone who applied before 8 April 2026 paid £16, while applications made on or after 8 April cost ${F.fee}.`,
        `This is another increase in the scheme's history: the ETA started with a fee of £10, then rose to £16 and has now reached ${F.fee}. The authorisation remains valid for ${F.validYears} years and allows multiple entries (each stay up to ${F.staySixMonths} months).`,
        "The increase affects nationals of more than 50 countries who need a UK ETA to enter the UK.",
        "Source: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25 February 2026: UK ETA fully mandatory", blocks: [
        "From 25 February 2026 the UK ETA is fully enforced: airlines will not let a passenger board without a valid authorisation.",
        "On 25 February 2026 the transition period for introducing the UK ETA ended. From that date the requirement applies in full.",
        "In practice this means that carriers (airlines, ferries, Eurostar) do not allow travellers who need an ETA but do not have one to board. Carriers risk fines for carrying a passenger without a valid authorisation.",
        `So get your ETA before you travel — at least ${F.decisionDays} working days in advance, because a small number of applications may need further checks.`,
        "Source: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2 April 2025: EU citizens need a UK ETA", blocks: [
        "From 2 April 2025, citizens of the EU, the EEA and Switzerland must get a UK ETA before travelling to the UK.",
        "From that date the UK ETA scheme covers citizens of the European Union, the European Economic Area and Switzerland.",
        "An ETA is required for tourist and business trips, visits to family, and transit that involves going through border control. This also applies to children and babies — each person makes their own application.",
        `The authorisation is electronically linked to the passport used in the application and allows multiple entries over ${F.validYears} years.`,
        "Source: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8 April 2026: higher UK immigration fees", blocks: [
        "Alongside the ETA, other Home Office fees also rose from 8 April 2026 — including for visit visas, settlement and citizenship.",
        `On 8 April 2026 the Home Office updated its official fees table. As well as the ETA increase to ${F.fee}, most other immigration and citizenship fees also went up.`,
        "This includes visit visas, settlement fees and applications for British citizenship.",
        "If you are planning a longer stay or a type of visa other than the ETA, check the current fee on the official GOV.UK page before you apply.",
        "Source: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1 March 2026: travel safety in the UK — what to keep in mind", blocks: [
        "Before you set off, it is sensible to check the latest safety advice and make sure your passport and ETA are valid.",
        "The UK is a popular and generally safe destination, but before any trip it is sensible to check the authorities' latest advice.",
        "Before you travel, make sure that your passport is valid for the whole of your stay, that you have a valid UK ETA linked to that passport, and that you have travel insurance.",
        "Up-to-date information on the situation and the threat level is published by official sources — the UK government (GOV.UK) and the relevant diplomatic missions. In an emergency in the UK, call 999.",
        "Source: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Visa fees", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
      { label: "GOV.UK – Foreign travel advice", url: "https://www.gov.uk/foreign-travel-advice" },
    ],
  },
};
export default pages;
