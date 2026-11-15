import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（en・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "london-transport-oyster-contactless",
    group: "travel",
    title: "Paying for London transport: Oyster or contactless (2026)",
    description: "On London's Tube, buses and trains you pay by contactless card, phone or Oyster: the same fares, with daily and weekly caps. Check current amounts with TfL.",
    h1: "Paying for travel in London: Oyster and contactless",
    lead: "On London's Tube, buses and trains, the easiest way to pay is to touch a contactless card, a phone or an Oyster card on the reader. Contactless and Oyster cost the same, and daily and weekly price caps limit what you pay.",
    card: "Contactless, phone or Oyster: same fares, daily caps, and no cash on buses.",
    sections: [
      { h: "Contactless or Oyster: how to pay", blocks: [
        "London's public transport — the Tube, buses and trains — works on \"pay as you go\": you touch a contactless payment card, a phone with payments set up or an Oyster card on the yellow reader and pay per journey.",
        "Contactless and Oyster have the same fares. If you already have a contactless card or a phone from home, you can travel at the same rate without buying an Oyster card. For short-term visitors, contactless is usually the most convenient option. A Visitor Oyster card, on the other hand, is something you order before you travel.",
      ] },
      { h: "Price caps: there is a limit to what you pay", blocks: [
        "There are daily and weekly price caps. Once your journeys add up to the cap, you are not charged for any further journeys in that period. The caps differ depending on which zones you travel in. The amounts change over time, so check the current figures with TfL rather than relying on a fixed amount.",
      ] },
      { h: "Tube and trains: touch in and touch out", blocks: [
        "On the Tube and trains, you touch in when you start and touch out when you finish — otherwise you may be charged the wrong fare. On buses and trams, you only touch in when you board; there is no need to touch out.",
        { ul: [
          "Tube / train: touch in at the start, touch out at the end.",
          "Bus / tram: touch in only.",
        ] },
      ] },
      { h: "Buses do not take cash", blocks: [
        "London's buses do not accept cash. You can only pay with a contactless card, a phone or an Oyster card, so make sure you have a working contactless payment method before you board.",
      ] },
      { h: "Use the same card every time", blocks: [
        "Touch in with the same card or device on every journey. Do not share one contactless card between several travellers — for the caps to be calculated correctly, each person needs to touch in with their own payment method.",
      ] },
      { h: "Before you travel to the UK", blocks: [
        "You only use public transport after you arrive — to enter the country you need a valid [UK ETA](/en/how-to-apply/), and you can follow your application with the [ETA status check](/en/check-status/). On arrival you go through passport control and the eGates. If you plan to drive instead of using public transport, read about [driving in the UK](/en/driving-in-the-uk/).",
      ] },
    ],
    faq: [
      { q: "Do I need an Oyster card in London?", a: "Not necessarily. If you have a contactless payment card or a phone with payments set up, you can travel straight away at the same price as with Oyster. Contactless and Oyster cost the same, so for visitors a contactless card is usually enough." },
      { q: "Can you pay cash on London buses?", a: "No. London's buses do not accept cash. You pay with a contactless card, a phone or an Oyster card by touching it on the reader when you board." },
      { q: "What if I travel a lot in one day?", a: "There are daily and weekly price caps (capping). Once you reach the cap, you are not charged for further journeys. The caps vary by zone and change over time — check the current amounts with Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "driving-in-the-uk",
    group: "travel",
    title: "Driving in the UK on a foreign licence: 12 months, age 17 (2026)",
    description: "Visitors can drive in the UK on a valid home licence for up to 12 months from arrival. Minimum age for a car is 17; drive on the left; insurance is required.",
    h1: "Can you drive in the UK on a foreign driving licence?",
    lead: "The minimum age to drive a car in the UK is 17 — the age at which most people start learning (GOV.UK). As a visitor living outside the UK, you can drive on a valid licence from your home country for up to 12 months from the date you arrive.",
    card: "Drive on your home licence for up to 12 months; keep left and get insurance.",
    sections: [
      { h: "The 12-month rule: driving on your home licence", blocks: [
        "If you live outside the UK, you can drive on a valid driving licence from your home country for up to 12 months, counted from the day you entered the country. This applies to:",
        { ul: [
          "Cars (up to 3,500 kg with no more than eight passenger seats).",
          "Motorcycles.",
        ] },
        "Your licence must be valid for the whole of your stay. The 12-month period runs from the date you arrived, not from the date your licence was issued.",
      ] },
      { h: "International Driving Permit (IDP) and translations", blocks: [
        "You can drive on a valid licence from your home country. If your licence is not issued in English, an official translation or an International Driving Permit (IDP) is recommended, so that the authorities and rental companies can read the details easily.",
        "The requirements vary depending on the country that issued your licence. Check your own situation on [GOV.UK](https://www.gov.uk/driving-nongb-licence) before you travel — the rules can differ depending on your home country.",
      ] },
      { h: "Driving on the left, minimum age and insurance", blocks: [
        { ul: [
          "Driving on the left: in the UK, you drive on the left-hand side of the road.",
          "Minimum age: 17 to drive a car.",
          "Valid motor insurance is compulsory to drive in the UK.",
        ] },
        "Check that your insurance covers you in the UK before you drive. If you hire a car, insurance is usually included in the agreement — read the terms carefully.",
      ] },
      { h: "Large vehicles: buses and lorries", blocks: [
        "Different rules apply to large vehicles such as buses and lorries than to cars and motorcycles. If you plan to drive one, check the specific requirements on GOV.UK before you travel.",
      ] },
      { h: "The ETA and your driving licence are two different things", blocks: [
        "A UK ETA is a permission to enter the UK — it does not decide whether you may drive. Your right to drive is governed by a separate set of rules on licences, age, insurance and vehicle type.",
        "To enter the country you need a valid [UK ETA](/en/how-to-apply/), and you can see the status of your application with the [ETA status check](/en/check-status/). The general entry rules, customs allowances and how passport control and the eGates work are covered in our other guides on travelling to the UK.",
      ] },
    ],
    faq: [
      { q: "Can I drive in the UK on my foreign driving licence?", a: "Yes. Visitors who live outside the UK can drive cars and motorcycles on a valid licence from their home country for up to 12 months from the date they arrived." },
      { q: "Do I need an International Driving Permit (IDP) or a translation?", a: "You can drive on a valid licence from your home country. If your licence is not in English, an official translation or an International Driving Permit (IDP) is recommended. The rules vary by country — check your situation at gov.uk/driving-nongb-licence." },
      { q: "What is the minimum driving age in England?", a: "The minimum age to drive a car in England (and the rest of the UK) is 17 — the age at which most people can start learning. In the UK you drive on the left, and valid motor insurance is compulsory." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "uk-currency-cash-tipping",
    group: "travel",
    title: "UK currency 2026: pound sterling (GBP) – cash, exchange, tips",
    description: "The currency in England, Scotland and London is the pound sterling (GBP, £) in 2026. Do you need cash? Usually not – cards go far. Declare £10,000 or more.",
    h1: "Currency in England and Scotland: pounds, cash and tipping",
    lead: "The currency in England, Scotland, Wales and Northern Ireland is the pound sterling (GBP, £) — in 2026 too. Here is how much cash you can bring without declaring it, how to exchange money and what to expect with cards and tipping.",
    card: "Pound sterling (GBP), cards almost everywhere, declare cash from £10,000.",
    sections: [
      { h: "What currency is used in England and Scotland? The pound sterling (GBP, £)", blocks: [
        "The currency in the UK is the pound sterling (GBP, £). Euros and other currencies are generally not accepted in ordinary shops, so you will need either a card or cash in pounds for your spending. The currency in Scotland is also the pound. There, Bank of Scotland, Clydesdale Bank and The Royal Bank of Scotland issue their own banknotes, while the Bank of England issues the notes in England and Wales (source: Bank of England).",
      ] },
      { h: "Cash: you must declare £10,000 or more", blocks: [
        "If you enter Great Britain with £10,000 or more in cash — including the equivalent in other currencies — you must declare it. You can declare online in advance or in the red channel on arrival. Failing to declare can lead to the whole amount being seized and a fine of up to £5,000.",
      ] },
      { h: "Do you need cash in London and England? Card or cash", blocks: [
        "Cards, especially contactless payments, are very widely used in the UK. In many situations you can manage entirely without cash — from public transport and cafés to larger shops. London's public transport (TfL) is paid by contactless card or Oyster (source: TfL).",
        { ul: [
          "A little cash can still be handy for small shops, markets and tips.",
          "Check with your bank about fees for card payments abroad before you travel.",
        ] },
      ] },
      { h: "Where to exchange money", blocks: [
        "You can exchange money at banks, bureaux de change and airports. Bear in mind that airport exchange often gives a less favourable rate. Compare rates before you exchange larger amounts.",
      ] },
      { h: "Tipping: a custom, not a requirement", blocks: [
        "Tipping in the UK is a custom, not a legal requirement. What is usual depends on the situation:",
        { ul: [
          "Restaurants: a service charge of 10–12.5% is sometimes added to the bill — check the breakdown. If no service charge is added, around 10% is a common guideline.",
          "Pubs: when you order at the bar, a tip is not normally expected.",
          "Taxis: rounding up is common.",
        ] },
      ] },
      { h: "Good to know before you arrive", blocks: [
        "Cash is declared, where necessary, at customs, which comes after passport control. To enter the country you need a valid [UK ETA](/en/how-to-apply/), and you can follow your application with the [ETA status check](/en/check-status/). If you plan to hire a car, read about [driving in the UK](/en/driving-in-the-uk/). Customs allowances, the general entry rules and transit are covered in our other guides.",
      ] },
    ],
    faq: [
      { q: "What currency is used in England and Scotland in 2026?", a: "The pound sterling (GBP, £) throughout the UK. In Scotland, three banks issue their own banknotes, but the currency is the same." },
      { q: "Do you need cash in London?", a: "Usually not: cards, especially contactless payments, are very widely used, and you pay for public transport (TfL) by contactless card or Oyster. A little cash can be handy for small shops, markets and tips." },
      { q: "From what amount do I have to declare cash when entering the UK?", a: "If you enter Great Britain with £10,000 or more in cash (including the equivalent in other currencies), you must declare it. You can do this online in advance or in the red channel on arrival. Failing to declare can lead to the whole amount being seized and a fine of up to £5,000." },
      { q: "Is a card enough in the UK?", a: "Cards, including contactless payments, are very widely used and accepted in most situations. In many cases you can manage with a card alone. It can still be handy to have a little cash for small shops or tips." },
      { q: "Is tipping compulsory in the UK?", a: "No, tipping is a custom and not a legal requirement. In restaurants a service charge of 10–12.5% is sometimes added to the bill — check the breakdown. If no service charge is added, around 10% is a common guideline." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "uk-vat-refund-tax-free-shopping",
    group: "travel",
    title: "UK VAT refund for visitors: what applies in 2026",
    description: "Since 1 January 2021, VAT is generally not refunded on goods visitors take home from England, Scotland and Wales. If the shop ships abroad, it may be VAT-free.",
    h1: "VAT refunds when shopping in the UK",
    lead: "A common misconception: since 2021, VAT is generally no longer refunded in the UK on goods that travellers take home with them. Here is what actually applies, the exception when the shop sends the goods abroad, and why Northern Ireland is treated separately.",
    card: "No VAT refund on goods you carry home since 2021 — with one exception.",
    sections: [
      { h: "The key point: no VAT refund on goods you carry home since 2021", blocks: [
        "This is the point that is often misunderstood. Since 1 January 2021, VAT is generally no longer refunded in Great Britain (England, Scotland and Wales) on goods that travellers buy and take home in their luggage.",
        "The VAT Retail Export Scheme was abolished at that point. This means you normally cannot get the VAT back on goods you carry out of the country.",
      ] },
      { h: "The exception: when the shop sends the goods directly abroad", blocks: [
        "If a shop sends the goods directly to an address abroad, the purchase may in some cases be VAT-free. This depends on the shop's procedures and the conditions that apply, so check with the individual shop what is possible before you buy.",
      ] },
      { h: "Northern Ireland is treated separately", blocks: [
        "Northern Ireland partly has different rules. For travellers who do not live in the EU, some VAT refunds may still be available there, linked to the Northern Ireland Protocol. The conditions can change, so check what applies at the time of your trip.",
      ] },
      { h: "Good to know at the airport", blocks: [
        "Even if you see \"Tax Free\" signs or former refund desks, be aware that VAT on goods you take in your luggage is generally not refunded in England, Scotland or Wales. Do not assume you will get a refund — check the current rules if you are unsure.",
      ] },
      { h: "Further reading before you travel", blocks: [
        "To enter the UK you need a valid [UK ETA](/en/how-to-apply/) — you can see its status with the [ETA status check](/en/check-status/). What else you can bring in and take out, how passport control and the eGates work, travelling with children, the general entry rules and transit are covered in our other guides on travelling to the UK.",
      ] },
    ],
    faq: [
      { q: "Can you get a VAT refund on shopping in the UK?", a: "In Great Britain (England, Scotland and Wales), VAT is generally no longer refunded on goods that travellers take home in their luggage. The VAT Retail Export Scheme was abolished there on 1 January 2021. This differs from how it used to work and from the rules in some other countries." },
      { q: "Is there any way to shop VAT-free in the UK?", a: "If a shop sends the goods directly to an address abroad, the purchase may in some cases be VAT-free. However, this depends on the shop's procedures and the conditions that apply. Check with the individual shop what is possible." },
      { q: "Do the same rules apply in Northern Ireland?", a: "Northern Ireland is treated separately and partly has different rules. For travellers who do not live in the EU, some VAT refunds may still be available there, linked to the Northern Ireland Protocol. Check the current conditions before you count on a refund." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "uk-sim-esim-mobile-data",
    group: "travel",
    title: "SIM cards, eSIM and mobile data in the UK (2026)",
    description: "The UK's largest mobile networks are EE, O2, Vodafone and Three. Pay-as-you-go SIMs, eSIM, unlocked phones and roaming after Brexit: how to stay connected.",
    h1: "SIM cards, eSIM and mobile internet in the UK",
    lead: "Which mobile networks operate in the UK, how to choose between a pay-as-you-go SIM and an eSIM as a visitor, what to know about unlocked phones and roaming — and where to find free Wi-Fi.",
    card: "EE, O2, Vodafone, Three: prepaid SIM or eSIM, unlocked phone, roaming.",
    sections: [
      { h: "Mobile networks in the UK", blocks: [
        "The largest mobile networks in the UK are EE, O2, Vodafone and Three. There are also several virtual operators (MVNOs) that use the same networks, such as giffgaff, Lebara and Lyca.",
        { note: "There are few uniform official rules in this area, and prices and plans change often. Treat the information below as general guidance and check the current terms with the operator." },
      ] },
      { h: "Options for visitors: pay-as-you-go SIM or eSIM", blocks: [
        { ul: [
          "Pay-as-you-go / tourist SIM: sold at airports, mobile phone shops and supermarkets.",
          "eSIM: bought online and activated straight away if your phone supports it — so you do not need to swap a physical SIM card.",
        ] },
      ] },
      { h: "An unlocked phone is essential", blocks: [
        "To use a local SIM card or eSIM, your phone needs to be unlocked (SIM-free). Check this with your current operator well before you travel.",
      ] },
      { h: "Roaming after Brexit", blocks: [
        "Visitors from the EU should watch out for roaming charges. Since Brexit, some operators may charge for roaming in the UK, while others do not. Terms vary — check with your operator before you travel to avoid unexpected costs.",
      ] },
      { h: "Coverage and free Wi-Fi", blocks: [
        "Coverage is generally good in towns and cities, while in rural areas it can vary between operators. You can check coverage on Ofcom's coverage map.",
        "Free Wi-Fi is common in cafés, on public transport and in many public places, which can supplement your mobile connection.",
      ] },
      { h: "Good to know before you arrive", blocks: [
        "To enter the UK you need a valid [UK ETA](/en/how-to-apply/) — you can see the status of your application with the [ETA status check](/en/check-status/). If you plan to hire a car, read about [driving in the UK](/en/driving-in-the-uk/). The general entry rules, customs allowances and transit are covered in our other guides.",
      ] },
    ],
    faq: [
      { q: "Do I need a local SIM card in the UK?", a: "It depends on your current operator. A local pay-as-you-go SIM or an eSIM can be useful to avoid roaming charges and get mobile data while you are there. An eSIM is bought online and activated straight away if your phone supports it." },
      { q: "Can I use an eSIM in the UK?", a: "Yes, if your phone supports eSIM and is unlocked, you can buy an eSIM online and activate it without swapping a physical SIM card. Check in advance that your device is compatible and unlocked." },
      { q: "Can I use my EU phone as normal in the UK?", a: "Since Brexit, some operators charge for roaming in the UK, while others do not. Terms vary between operators and plans — check with your operator before you travel." },
    ],
    sources: [
      { label: "Ofcom – the UK's communications regulator", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "uk-plug-socket-voltage",
    group: "travel",
    title: "UK plug sockets in London and Britain: Type G, 230 V (2026)",
    description: "UK sockets, in London as elsewhere, are Type G (BS 1363, three rectangular pins), 230 V, 50 Hz. If a charger says INPUT 100–240 V, an adapter is enough.",
    h1: "Plug sockets in the UK and London",
    lead: "UK sockets, in London as in the rest of the country, are Type G with three rectangular pins, and the voltage is 230 V. Which travel adapter you need, when an adapter alone is enough and when a voltage converter may be required all depend on the label on your device.",
    card: "Type G, 230 V, 50 Hz: check INPUT 100–240 V and bring a Type G adapter.",
    sections: [
      { h: "What plug sockets does the UK use?", blocks: [
        "Sockets in the UK are Type G — the plug has three rectangular pins. The voltage is 230 V and the frequency 50 Hz. To plug in equipment with a different type of plug, you need a Type G travel adapter.",
        "The British standard for 13 A plugs and sockets is BS 1363 (Type G; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V and 50 Hz are set by the Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
      { h: "Is your charger labelled 100–240 V? Then an adapter is enough", blocks: [
        "Equipment from countries with a lower voltage — such as Japan (100 V) or North America (120 V) — works in the UK if the device's INPUT label says \"100–240 V\" (known as dual voltage). In that case you only need a Type G travel adapter.",
        "Chargers for phones, laptops and cameras are in most cases labelled 100–240 V. Even though this is usually true, always read the label (INPUT) on your own device.",
      ] },
      { h: "When might you need a voltage converter?", blocks: [
        "Devices whose INPUT shows only your home country's voltage — often high-power equipment such as some hairdryers and hair straighteners — may need a voltage converter (transformer). Check the label before you plug anything in; if you are unsure, the safest option is to leave the device at home.",
      ] },
      { h: "USB sockets and practical tips", blocks: [
        "Some accommodation has USB sockets, but the safest option is to bring your own Type G travel adapter. That way you can charge your devices however the room is equipped.",
      ] },
      { h: "Checklist before you travel", blocks: [
        { ul: [
          "Read the INPUT label on every charger and device.",
          "Does it say 100–240 V? Then a Type G adapter is enough.",
          "Only your home country's voltage on a high-power device? Then a converter may be needed.",
          "Bring your own adapter rather than relying on USB sockets in the room.",
        ] },
      ] },
      { h: "Before you travel to the UK", blocks: [
        "To enter the country you need a valid [UK ETA](/en/how-to-apply/), and you can follow your application with the [ETA status check](/en/check-status/). On arrival you go through passport control and the eGates. If you plan to drive, read about [driving in the UK](/en/driving-in-the-uk/).",
      ] },
    ],
    faq: [
      { q: "Will my charger work in the UK?", a: "If the charger is labelled INPUT 100–240 V (dual voltage), it will work in the UK — you only need a Type G travel adapter. Most chargers for phones, laptops and cameras are labelled this way. Always check the label on the device." },
      { q: "Do I need a voltage converter?", a: "A voltage converter (transformer) may be needed for high-power devices built only for your home country's voltage, such as some hairdryers and hair straighteners. Check the label (INPUT) — if it shows only your home country's voltage, a converter may be required." },
      { q: "What plug sockets do the UK and London use?", a: "UK sockets, in London as in the rest of the country, are Type G with three rectangular pins (BS 1363, 13 A). The voltage is 230 V and the frequency 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "uk-healthcare-nhs-ghic",
    group: "travel",
    title: "Healthcare, the NHS and GHIC for visitors to the UK (2026)",
    description: "A&E and GP visits are free on the NHS. How EHIC/GHIC works, why travel insurance is strongly recommended, and the numbers to call: 999 and NHS 111.",
    h1: "Healthcare, the NHS and GHIC for visitors to the UK",
    lead: "What is free on the NHS, how EHIC/GHIC works for visitors from the EU, EFTA and Switzerland, why travel insurance is strongly recommended and which emergency numbers to use.",
    card: "A&E and GP visits are free; EHIC/GHIC for EU visitors; get travel insurance.",
    sections: [
      { h: "A&E and GP visits are free", blocks: [
        "On the NHS, accident and emergency (A&E) and visits to a general practitioner (GP) are free for everyone — regardless of immigration status or whether you have documents with you. This applies to initial emergency care.",
      ] },
      { h: "Visitors from the EU, EFTA and Switzerland: EHIC/GHIC", blocks: [
        "With a valid EHIC/GHIC issued in their home country, visitors from the EU, EFTA and Switzerland can get medically necessary care during a temporary stay. Note that EHIC/GHIC does not cover all costs and does not replace travel insurance.",
      ] },
      { h: "Visitors without EHIC/GHIC", blocks: [
        "Visitors without EHIC/GHIC may be charged for hospital treatment beyond emergency care (reportedly 150% of the standard NHS charge). Urgent care that cannot wait is always given, however, and payment is dealt with afterwards.",
      ] },
      { h: "Travel insurance is strongly recommended", blocks: [
        "Travel insurance is strongly recommended. EHIC/GHIC does not cover everything — for example, transport home (repatriation) is not normally included. Insurance is therefore an important addition and cannot be replaced by a GHIC.",
      ] },
      { h: "Emergency numbers and health advice", blocks: [
        { ul: [
          "999 (or 112) — the emergency number for urgent situations.",
          "NHS 111 — for non-urgent medical advice.",
          "Prescription medicines may involve a prescription charge (in England).",
        ] },
      ] },
      { h: "Good to know before you arrive", blocks: [
        "To enter the UK you need a valid [UK ETA](/en/how-to-apply/) — you can see the status of your application with the [ETA status check](/en/check-status/). If you plan to hire a car, read about [driving in the UK](/en/driving-in-the-uk/). The general entry rules, customs allowances and transit are covered in our other guides.",
      ] },
    ],
    faq: [
      { q: "Is emergency treatment free in the UK?", a: "A&E and GP visits are free on the NHS for everyone, regardless of immigration status or documents. Hospital treatment beyond emergency care may, however, be charged to visitors without EHIC/GHIC." },
      { q: "Can I use an EHIC or GHIC in the UK?", a: "Visitors from the EU, EFTA and Switzerland with a valid EHIC/GHIC issued in their home country can get medically necessary care during a temporary stay. However, EHIC/GHIC does not cover all costs and does not replace travel insurance." },
      { q: "Do I need travel insurance for the UK?", a: "Travel insurance is strongly recommended. EHIC/GHIC does not cover everything — for example, transport home (repatriation) is not normally included. Travel insurance is therefore an important addition and cannot be swapped for a GHIC." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "uk-emergency-numbers-safety",
    group: "travel",
    title: "UK emergency numbers 2026: 999 in an emergency, 111 for health",
    description: "Call 999 (or 112) in an emergency – police, fire and ambulance, free of charge. Use 101 for non-urgent police matters and NHS 111 for medical advice.",
    h1: "Emergency numbers and safety in the UK",
    lead: "The most important thing first: in an emergency, call 999 (or 112). Below: the difference between 999 and 101, the NHS 111 advice line, how an emergency call works and some general safety tips for travellers.",
    card: "999 or 112 in an emergency, 101 for non-urgent police, NHS 111 for advice.",
    sections: [
      { h: "Emergency numbers: 999 and 112", blocks: [
        "In an emergency — when you need the police, fire service or an ambulance — call 999. The number is free of charge and can be called from any phone, even without coverage from your own operator.",
        "112, the common European emergency number, also works in the UK and goes to the same emergency service as 999. You can use either number.",
        "When you call, you will be asked which service you need — police, fire, ambulance or coastguard.",
      ] },
      { h: "Non-urgent matters: 101 and NHS 111", blocks: [
        "If the situation is not urgent, there are separate numbers to use instead of 999:",
        { ul: [
          "101 — the police number for matters that are not urgent, for example reporting a minor crime or lost property.",
          "NHS 111 — non-urgent medical advice. You get advice about symptoms and are directed to the right level of care.",
        ] },
        "Using the right number helps the 999 service prioritise genuine emergencies. More on how British healthcare works is in our guide to [healthcare and the NHS in the UK](/en/uk-healthcare-nhs-ghic/).",
      ] },
      { h: "How an emergency call works", blocks: [
        "When you call 999 or 112, you are put through to an operator who asks which service you need and where you are. Try to describe the location and what has happened as clearly as possible.",
        "If you have difficulty hearing or speaking, there are special options, such as texting 999 through the pre-registered emergencySMS service, or the \"silent solution\" (pressing 55 once the call has connected) if you cannot speak freely. The conditions for these services are described in more detail by the official sources.",
      ] },
      { h: "General safety tips for travellers", blocks: [
        "As in many destinations, it is worth watching out for pickpockets and bag snatching at tourist sites, on public transport and in crowded places. Some common tips:",
        { ul: [
          "Keep valuables close to your body and do not leave bags unattended.",
          "Avoid showing off your phone, wallet and expensive items in crowds.",
          "Report lost property or minor crimes to the police on 101 or at the nearest police station.",
        ] },
        "It is also wise to have travel insurance. If you plan to drive, see the British rules of the road in our guide to [driving in the UK](/en/driving-in-the-uk/).",
      ] },
      { h: "Lost passport: contact your embassy", blocks: [
        "If you lose your passport during your trip, contact your own country's embassy or consulate for help with temporary travel documents. If it was stolen, it is also a good idea to report it to the police. To enter the UK you also need a valid [UK ETA](/en/how-to-apply/) — you can see the status of your application with the [ETA status check](/en/check-status/). What you can and cannot bring across the border is covered in our guide to UK customs rules.",
      ] },
    ],
    faq: [
      { q: "What number do you call in an emergency in the UK?", a: "Call 999 in an emergency that needs the police, fire service or an ambulance. 112 works in the same way and goes to the same emergency service. Both are free of charge and can be called from any phone." },
      { q: "What should I do if it is not urgent?", a: "For police matters that are not urgent, call 101. If you need medical advice that is not urgent, call NHS 111, which gives advice about symptoms and directs you to the right care." },
      { q: "How do I protect myself against pickpockets?", a: "Keep valuables close to your body, avoid showing off your phone and wallet in crowds, and stay alert at tourist sites and on public transport. If something is stolen, you can contact the police on 101 or go to the nearest police station." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "uk-bank-holidays-2026",
    group: "travel",
    title: "UK bank holidays 2026: dates and what is closed",
    description: "Bank holidays 2026 in England and Wales per GOV.UK: banks close, shops open shorter hours, transport runs less often – almost everything shuts on Christmas Day.",
    h1: "UK bank holidays 2026",
    lead: "On a bank holiday, banks are closed, many shops have shorter opening hours and public transport may run less often. Here are the official bank holidays in England and Wales in 2026 according to GOV.UK — and what they mean for your trip.",
    card: "The 2026 dates for England and Wales, and what closes on each day.",
    sections: [
      { h: "Bank holidays in England and Wales 2026", blocks: [
        "According to GOV.UK, the following official bank holidays apply in England and Wales in 2026. Scotland and Northern Ireland partly have different dates.",
        { table: { head: ["Date", "Bank holiday"], rows: [
          ["1 January", "New Year's Day"],
          ["3 April", "Good Friday"],
          ["6 April", "Easter Monday"],
          ["4 May", "Early May bank holiday"],
          ["25 May", "Spring bank holiday"],
          ["31 August", "Summer bank holiday"],
          ["25 December", "Christmas Day"],
          ["28 December", "Boxing Day (substitute day)"],
        ] } },
      ] },
      { h: "What is open — and what is affected?", blocks: [
        "On a bank holiday, banks are closed. Many shops and attractions are open, but often with shorter opening hours. Public transport may run a reduced service, for example a Sunday timetable.",
        "Check opening hours and timetables in advance for the specific day you are planning, as they vary between places and businesses.",
      ] },
      { h: "Christmas Day: almost everything is closed", blocks: [
        "Christmas Day (25 December) is special: almost everything is closed and most public transport does not run. If you are travelling over Christmas, plan your days with some margin and do not count on a normal service.",
      ] },
      { h: "Substitute days when a bank holiday falls at the weekend", blocks: [
        "If a bank holiday falls on a Saturday or Sunday, the day off normally moves to the next weekday (a substitute day). That is why some dates in the list above fall on a weekday after a weekend.",
      ] },
      { h: "Before you travel to the UK", blocks: [
        "To enter the country you need a valid [UK ETA](/en/how-to-apply/), and you can follow your application with the [ETA status check](/en/check-status/). On arrival you go through passport control and the eGates. If you plan to drive during your trip, read about [driving in the UK](/en/driving-in-the-uk/).",
      ] },
    ],
    faq: [
      { q: "When are the UK bank holidays in 2026?", a: "In England and Wales, the official bank holidays in 2026 according to GOV.UK are: 1 January (New Year's Day), 3 April (Good Friday), 6 April (Easter Monday), 4 May (Early May), 25 May (Spring), 31 August (Summer), 25 December (Christmas Day) and 28 December (substitute day for Boxing Day). Scotland and Northern Ireland partly have different dates." },
      { q: "Are shops open on bank holidays?", a: "Banks are closed. Many shops and attractions are open, but often with shorter opening hours. On Christmas Day (25 December) almost everything is closed." },
      { q: "How is public transport affected on bank holidays?", a: "Public transport may run a reduced service, for example a Sunday timetable. On Christmas Day most services do not run, so plan your travel days with some margin." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
