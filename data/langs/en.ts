import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// 英語。8月対象シートのオーストラリア(No.9)・ニュージーランド(No.37)がUK ETA対象で英語圏のため必要。
// ⚠️ 英語はGOV.UK公式と正面から競合する。当サイトの役割は「公式より読みやすい要約」であり、
//    公式の代替を名乗らない。各ページで公式サイトへ誘導する。
const en: LangContent = {
  code: "en",
  label: "English",
  siteName: "UK ETA Guide",
  tagline: "The UK travel authorisation, step by step",
  homeTitle: `UK ETA: ${F.fee}, usually decided within 1 day | Plain-English guide 2026`,
  homeDescription:
    `A plain-English guide to the UK ETA: it costs ${F.fee}, lasts ${F.validYears} years and allows stays of up to ${F.staySixMonths} months per trip. How to apply on the official GOV.UK site.`,
  homeLead:
    `If you are travelling to the United Kingdom, you need a UK ETA. It costs ${F.fee} on the official site, a decision usually arrives within 1 day, and the authorisation lasts ${F.validYears} years for multiple trips.`,
  nav: { info: "About the ETA", entry: "Travelling to the UK", faq: "Frequently asked questions" },
  officialLinkLabel: "Apply on the official GOV.UK site",
  updatedLabel: "Updated",
  pages: {
    "what-is-eta": {
      slug: "what-is-the-eta",
      title: "What is the UK ETA: a required pre-authorisation, not a visa | 2026",
      description: `The UK ETA is an electronic travel authorisation you get before departure. Not a visa: apply online, it costs ${F.fee} and is linked to your passport.`,
      h1: "What is the UK ETA",
      lead: "You apply for the UK ETA (Electronic Travel Authorisation) before you travel. It does not replace your passport, and it is not a visa.",
      sections: [
        { h: "It is not a visa", p: [
          "The ETA is a pre-authorisation for travellers who do not need a visa for the UK. The check happens before boarding: without an ETA, the airline can refuse to carry you.",
          "Unlike a visa, there is no appointment and no interview. Everything is done online." ] },
        { h: "Linked to your passport", p: [
          `The authorisation belongs to the passport you applied with. If you get a new passport, you must apply again — even if there is time left on the ${F.validYears} years.`,
          "There is nothing to print: at the border, the same passport is enough." ] },
        { h: "Who needs one", p: [
          "Travellers from visa-free countries, which includes Australia and New Zealand, whether for tourism, visiting family, business or transit.",
          "Children and infants each need their own ETA." ] },
      ],
    },
    // 2026-10-14 新設。事実は gov.uk/guidance/using-the-uk-eta-app・gov.uk/eta/apply・App Store/Google Play 掲載（同日確認）
    "mobile-app": {
      slug: "uk-eta-app",
      title: "UK ETA App: Download, Passport Chip Scan & Fixes (2026)",
      description: `How to use the official UK ETA app: phone requirements, the ${F.fee} fee, scanning your passport chip, applying for children, and what to do if it fails.`,
      h1: "UK ETA App: How to Apply on Your Phone",
      lead: `The UK ETA app is the official, free app for applying for an Electronic Travel Authorisation. It takes about 10 minutes: you photograph your passport, scan its chip, scan your face and pay the ${F.fee} fee. Last checked against GOV.UK and the app stores on 14 October 2026.`,
      sections: [
        { h: "Is the UK ETA app official and free?", p: [
          "Yes. The app is called \"UK ETA\". On the Apple App Store the developer is listed as the Home Office; on Google Play it is UK Visas and Immigration. Downloading it is free — you only pay the ETA fee during the application.",
          "Other apps and websites use similar names and charge extra for \"help\". GOV.UK warns that other websites may charge more and advises avoiding sites that imitate government services. Download the app only from the links on GOV.UK." ] },
        { h: "Phone requirements", p: [
          "iPhone: iOS 16 or later and at least 179MB of free space. Android: Android 12 or later, at least 165MB of free space, and NFC so the app can read your passport chip.",
          "If your phone can make contactless payments, it has NFC. The app also needs camera access and an internet connection (mobile data or Wi-Fi). It is only available in English." ] },
        { h: "What you need before you start", p: [
          "Your physical passport — the same one you will travel with. Photocopies and digital passports are not accepted. You also need an email address and a credit or debit card, Apple Pay or Google Pay (Amex, JCB, Mastercard and Visa are accepted).",
          "You do not need to enter travel dates or flight details." ] },
        { h: "How to apply in the app, step by step", p: [
          `1) Photograph the photo page of your passport. 2) Scan the passport chip. 3) Check the details the app has read. 4) Scan your face (anyone aged 10 or over). 5) Take a photo of yourself. 6) Answer the questions about your address, job, other nationalities and any criminal convictions. 7) Pay ${F.fee} — the price can be shown in your local currency.`,
          `Most decisions arrive by email within a day, but allow up to ${F.decisionDays} working days. The email contains a 16-digit ETA reference number. Do not travel until you have it.` ] },
        { h: "Passport chip won't scan? Try this", p: [
          "Look for the ePassport symbol on the cover. Take your phone out of its case, remove any passport cover, and place the top of the phone on the middle of the passport. A beep means the chip has been read. If nothing happens, slowly move the phone around the passport. For US passports, try the inside of the back cover.",
          "If the chip still cannot be read, the app takes your details from the photo page instead. Check every field carefully against your passport — mismatches can lead to delays or a refusal." ] },
        { h: "Applying for children and other family members", p: [
          "Every traveller needs their own ETA, including babies and children. You can apply for someone in the app only if they are with you, because the app photographs them and, if they are 10 or over, scans their face. If they are not with you, apply online with a photo of their passport and a photo of their face.",
          "For under-18s you must give contact details for someone with parental responsibility. Decisions for each person may arrive at different times." ] },
        { h: "No NFC, or the app isn't working?", p: [
          "If you cannot download or use the app, apply on GOV.UK instead: you upload a passport photo and a face photo. The fee and the decision time are the same.",
          `If the app does not ask for camera access, turn it on in your phone's settings. For other problems, use the UKVI ETA webchat linked from GOV.UK. No decision after ${F.decisionDays} working days? Check your spam folder first, then contact UKVI.` ] },
        { h: "Fee, validity and how long you can stay", p: [
          `The fee is ${F.fee} (it went up from £16 on 8 April 2026) and it is not refunded, even if your application is refused. An ETA is valid for ${F.validYears} years or until your passport expires, whichever is sooner.`,
          `You can make multiple trips of up to ${F.staySixMonths} months each to the UK, Jersey, Guernsey and the Isle of Man. The ETA is linked digitally to your passport, so you only need to travel with that passport — you can delete the app after you apply.` ] },
      ],
    },
    application: {
      slug: "how-to-apply",
      title: "How to apply for the UK ETA: online, in a few minutes | Guide 2026",
      description: `The steps to apply for the UK ETA on the official GOV.UK site or app: passport, a photo of your face, contact details and a ${F.fee} payment.`,
      h1: "How to apply for the UK ETA",
      lead: "The application is entirely online, either on the official GOV.UK site or in the official app. You do not need to attend anywhere in person.",
      sections: [
        { h: "What to have ready", p: [
          "The passport you will travel on, a photo of your face (you can take it with your phone), an email address and a payment card.",
          "The details must match the passport exactly. A name spelled differently is the most common reason for refusal." ] },
        { h: "The steps", p: [
          `Go to the official GOV.UK site or download the official app, scan the photo page of your passport, take the picture, answer the suitability questions and pay ${F.fee}.`,
          `Then you wait for the decision. It usually arrives within 1 day, but allow up to ${F.decisionDays} working days.` ] },
        { h: "Check before you submit", p: [
          "That the passport number and expiry date are copied correctly, that your face is clearly visible in the photo, and that the email address is right — that is where the decision goes.",
          "Apply well ahead of time, not on the day of departure." ] },
      ],
    },
    fee: {
      slug: "cost",
      title: `UK ETA cost: ${F.fee} on the official site | Watch out for middlemen`,
      description: `The UK ETA costs ${F.fee} on GOV.UK. It is a one-off payment covering ${F.validYears} years and multiple trips. How to spot sites that add a fee.`,
      h1: "How much the UK ETA costs",
      lead: `The official price is ${F.fee} and you pay it once. The authorisation then lasts ${F.validYears} years, for multiple trips.`,
      sections: [
        { h: "One payment", p: [
          `There are no annual fees and no mid-term renewals: you pay ${F.fee} when you apply, and the authorisation lasts ${F.validYears} years — or until your passport expires.`,
          "The amount is charged even if the application is refused, because it covers processing." ] },
        { h: "Sites that charge more", p: [
          "Some intermediaries add their own commission on top of the official amount. They are not authorised by the UK government and do exactly what you can do yourself.",
          `If a site asks for noticeably more than ${F.fee}, the difference is their commission.` ] },
        { h: "Recognising the official site", p: [
          "The official address sits under the GOV.UK domain. Be careful with sites calling themselves an « official partner » or « approved agent »: the UK government does not authorise third parties to submit applications.",
        ] },
      ],
    },
    "status-check": {
      slug: "check-status",
      title: "Checking your UK ETA status: where and what you need | 2026",
      description: "How to check whether your UK ETA has been approved: the decision comes by email, and the status can be looked up with your passport number.",
      h1: "Checking your UK ETA status",
      lead: "The decision is sent by email. If it has not arrived, you can look up the status using the details of the passport you applied with.",
      sections: [
        { h: "Check your email first", p: [
          "The approval goes to the address you gave in the application. Check your spam folder before assuming something went wrong.",
          "No printable document is issued: the authorisation is recorded against your passport." ] },
        { h: "What you need", p: [
          "The passport number you applied with, and your personal details exactly as you entered them.",
          "If you applied with a different passport, the check will not find it." ] },
        { h: "If it takes longer", p: [
          `Most decisions arrive within 1 day, but allow up to ${F.decisionDays} working days. If it takes longer and your departure is close, contact the official channels.`,
        ] },
      ],
    },
    validity: {
      slug: "validity",
      title: `UK ETA: valid for ${F.validYears} years or until your passport expires | 2026`,
      description: `The UK ETA is valid for ${F.validYears} years from approval and covers multiple trips. With a new passport you must apply again.`,
      h1: "How long the UK ETA lasts",
      lead: `The authorisation is valid for ${F.validYears} years — or until your passport expires, if that comes first.`,
      sections: [
        { h: "Multiple trips included", p: [
          `During those ${F.validYears} years you can travel to the UK as often as you like, as long as each stay does not exceed ${F.staySixMonths} months.`,
          "You do not need to apply again for each trip." ] },
        { h: "With a new passport", p: [
          "The authorisation belongs to the passport it was granted against. If you renew your passport, you must apply again, even if validity remains.",
        ] },
        { h: "Finding the date again", p: [
          "The date is in the approval email. If you no longer have it, look up the status using your passport details.",
        ] },
      ],
    },
    "processing-time": {
      slug: "processing-time",
      title: `UK ETA: usually decided within 1 day (up to ${F.decisionDays} working days) | 2026`,
      description: `A UK ETA decision usually arrives within 1 day, but allow up to ${F.decisionDays} working days. When it is best to apply.`,
      h1: "How long the UK ETA takes",
      lead: `In most cases the answer arrives within 1 day. Even so, it is sensible to allow up to ${F.decisionDays} working days.`,
      sections: [
        { h: "When to apply", p: [
          "Apply as soon as your flight is booked — not the day before departure. If extra checks are needed, it takes longer.",
          "Without an approved authorisation, the airline can refuse to carry you." ] },
        { h: "Why it sometimes takes longer", p: [
          "Applications that need to be reviewed by a person (for example when a suitability question is answered « yes ») take longer than those handled automatically.",
        ] },
        { h: "If nothing arrives", p: [
          "Check your spam folder and that the address you entered is correct. Then look up the status using your passport details.",
        ] },
      ],
    },
    "required-documents": {
      slug: "what-you-need",
      title: "What you need for the UK ETA: passport, photo and a payment card | 2026",
      description: "What the UK ETA requires: the passport you will travel on, a photo of your face, an email address and a way to pay.",
      h1: "What documents you need",
      lead: "The application is simple: passport, a photo and a way to pay. No travel bookings or supporting letters are required.",
      sections: [
        { h: "Passport", p: [
          "It must be the same passport you travel on, and it must be valid. Copy the details exactly as they appear.",
        ] },
        { h: "Photo of your face", p: [
          "You can take it with your phone during the application. Your face must be clearly visible, without sunglasses or anything covering it, against a plain background.",
        ] },
        { h: "Email and payment", p: [
          `The decision arrives by email, so the address must be correct. The ${F.fee} payment is made at the end, by card.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "how-long-you-can-stay",
      title: `With a UK ETA you can stay up to ${F.staySixMonths} months per trip | 2026`,
      description: `The UK ETA allows stays of up to ${F.staySixMonths} months per trip for tourism, visits or business. What it does not allow.`,
      h1: "How long you can stay",
      lead: `Per trip, you can stay in the UK for up to ${F.staySixMonths} months. The authorisation covers tourism, family visits, business and transit.`,
      sections: [
        { h: "What is allowed", p: [
          "Tourism, visiting family or friends, meetings and one-off business activities, and transit through the UK.",
        ] },
        { h: "What is not allowed", p: [
          "You cannot work for a UK employer or settle in the UK. There are separate routes for that.",
          "Long-term study is not covered either: the ETA is for short stays." ] },
        { h: "Travelling more than once", p: [
          `You can travel repeatedly while the authorisation is valid, but each stay is limited to ${F.staySixMonths} months, and stays cannot be chained together indefinitely.`,
        ] },
      ],
    },
    faq: {
      slug: "faq",
      title: "UK ETA: short answers on cost, validity and processing time | FAQ 2026",
      description: `Common questions about the UK ETA: what it costs (${F.fee}), how long it lasts (${F.validYears} years), how long it takes, and what happens if it is refused.`,
      h1: "Frequently asked questions about the UK ETA",
      lead: "Short answers to the most common questions. Each point links to the full explanation.",
      sections: [
        { h: `What does it cost? ${F.fee}`, p: [`The official price on GOV.UK is ${F.fee}, paid once for ${F.validYears} years.`] },
        { h: `How long is it valid? ${F.validYears} years`, p: ["Or until your passport expires, if that comes first. It covers multiple trips."] },
        { h: "How long does it take? Usually 1 day", p: [`Allow up to ${F.decisionDays} working days and do not leave it to the last minute.`] },
        { h: "What if it is refused?", p: ["There is no appeal. You would then need to apply for a visa that matches the purpose of your trip."] },
        { h: "Do children need one?", p: ["Yes. Everyone, including infants and children, needs their own authorisation."] },
      ],
    },
    about: {
      slug: "about-this-guide",
      title: "About this UK ETA guide | Who we are and how we work",
      description: "Who publishes this plain-English UK ETA guide, where the information comes from, and how we handle corrections.",
      h1: "About this guide",
      lead: "This guide explains the UK ETA in plain English. It is not an official UK government site, and we do not submit applications.",
      sections: [
        { h: "Not an official site", p: ["We are not connected to the UK government. Applications must always be made on the official GOV.UK site or in the official app."] },
        { h: "Where the information comes from", p: ["Amounts, deadlines and conditions come from what GOV.UK publishes. For figures that can change, we state the date we checked."] },
        { h: "Corrections", p: ["If you spot something out of date or wrong, tell us and we will correct it."] },
      ],
    },
    privacy: {
      slug: "privacy",
      title: "Privacy policy | UK ETA Guide",
      description: "What data this site collects and what it is used for.",
      h1: "Privacy policy",
      lead: "This page explains how data is handled on this site.",
      sections: [
        { h: "What data", p: ["Reading the guide requires no personal data. We do not submit ETA applications and therefore never receive passport or payment details."] },
        { h: "Statistics", p: ["We use aggregated usage statistics to improve the content. They are not used to identify individuals."] },
      ],
    },
    terms: {
      slug: "legal",
      title: "Legal information | UK ETA Guide",
      description: "Terms of use for this informational guide to the UK ETA.",
      h1: "Legal information",
      lead: "Terms for using the content on this site.",
      sections: [
        { h: "Informational purpose", p: ["The content is provided for information. Official conditions can change; check them on GOV.UK before applying."] },
        { h: "Liability", p: ["We are not responsible for decisions based solely on this guide. Every application is decided by the UK government."] },
      ],
    },
  },
};

export default en;
