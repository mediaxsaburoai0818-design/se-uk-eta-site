import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（en・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "uk-entry-requirements-and-visas",
    group: "travel",
    hub: true,
    title: "UK entry requirements and visas: guide 2026",
    description: `UK entry rules: a UK ETA for stays of up to ${F.staySixMonths} months, when you need a visa, border control (eGates), documents and travelling with children.`,
    h1: "Entering the UK: entry requirements and visas",
    lead: "A complete guide to the rules for entering the United Kingdom: when a UK ETA is enough, when you need a visa, how border control works and which documents to have ready.",
    card: `When an ETA is enough, when you need a visa, and what to have ready at the border.`,
    sections: [
      { h: `ETA or visa? Stays of up to ${F.staySixMonths} months`, blocks: [
        `For tourism, business, visiting family or transit, on stays of up to ${F.staySixMonths} months, EU citizens do not need a visa — a UK ETA (Electronic Travel Authorisation) is enough. You apply online and most people get an automatic decision within minutes, but apply at least ${F.decisionDays} working days before you travel, because some applications may need further checks.`,
        `An ETA costs ${F.fee}, is valid for ${F.validYears} years and allows multiple entries. Read more in [What is the UK ETA?](/en/what-is-the-eta/)`,
        "Travelling on a passport from another country? Check whether you need an ETA or a visa with the GOV.UK tool [Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
      ] },
      { h: "When you need a visa", blocks: [
        `A UK visa is required for stays longer than ${F.staySixMonths} months and for long-term study, work or settlement. The most common types are:`,
        { ul: [
          "Student visa — long-term study (usually 2 to 5 years depending on the course).",
          "Work visa — working in the UK; the type depends on the job offer and your qualifications.",
          "Family visa — to join a family member who lives in the UK.",
          "Youth Mobility Scheme — for young people from selected countries (stays of up to 2 years).",
        ] },
      ] },
      { h: "Border control: eGates and manual passport checks", blocks: [
        "At UK airports, border control takes place either at automatic eGates (using a biometric passport) or at a staffed desk with a Border Force officer. eGates speed up the passport check; if there are questions about the purpose of your trip, you may be asked to speak to an officer. Who can use the automatic gates, and how to go through them step by step, is explained in the guide [Passport control and eGates](/en/uk-border-control-egates/).",
        "Customs comes after passport control — which foods and goods you can bring is covered in the guide [Customs rules and allowances](/en/what-you-can-bring-into-the-uk/).",
      ] },
      { h: "Documents you need", blocks: [
        { ul: [
          "A passport valid for the whole of your stay (national ID cards have not been accepted since October 2021).",
          "A UK ETA linked to that passport (or the relevant visa for a longer stay).",
          "Supporting documents: proof of accommodation, a return ticket and funds for your stay may be checked.",
        ] },
      ] },
      { h: "Travelling with children (under 18)", blocks: [
        "Every person must have their own UK ETA, whatever their age — including babies and children. Children travelling without one or both parents may be asked to show a document confirming that the parent or guardian has consented to the trip. It is a good idea to carry a birth certificate or a written consent letter (in English). More in the guide [Travelling to the UK with children](/en/travelling-to-the-uk-with-children/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "passport-rules-for-the-uk",
    group: "travel",
    title: "UK passport rules 2026: whole-stay validity, ID card rarely enough",
    description: "Passport rules for the UK: EU citizens need a passport valid for the whole stay. An ID card is only enough in some cases, e.g. with settled status.",
    h1: "Passport requirements for the UK: validity and your ETA",
    lead: `For England and the rest of the UK, EU citizens need a passport that is valid for the whole of their stay. A national ID card is only enough in certain cases, for example if you have settled or pre-settled status. Your passport is also linked to your ETA (${F.fee}).`,
    card: "How long your passport must be valid, and why your ETA is tied to it.",
    sections: [
      { h: "A passport valid for your whole stay", blocks: [
        "To visit the UK you need a valid passport, and as a rule it must be valid for the whole of your stay.",
        "For many nationalities there is usually no extra requirement, such as the passport having to be valid for a further six months after you arrive. Requirements can differ by nationality, however, so check what applies to your country on GOV.UK before you travel — for example with [Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
      ] },
      { h: "Your ETA is linked to your passport", blocks: [
        "An ETA is linked to the passport you used when you applied, and you travel on the same passport you gave in your application.",
        "If you renew or replace your passport, you will normally need to apply for a new ETA for the new passport. It is therefore sensible to check your passport's validity well before you apply for your ETA.",
      ] },
      { h: "Every traveller needs their own passport — including babies", blocks: [
        "Every traveller, including babies and children, normally needs their own passport to travel to the UK, as well as their own ETA. Read more in our guide to [travelling to the UK with children](/en/travelling-to-the-uk-with-children/). Getting a passport for a child can take time, so start early.",
      ] },
      { h: "More than one passport or dual nationality", blocks: [
        "If you have dual nationality or more than one passport, you normally enter on the passport your ETA is linked to. Make sure your ETA is tied to the passport you actually plan to travel with.",
      ] },
      { h: "Next steps before you travel", blocks: [
        "Once your passport is in order, you can [apply for your UK ETA](/en/how-to-apply/) and then follow your application with the [ETA status check](/en/check-status/). On arrival you go through [passport control and eGates](/en/uk-border-control-egates/), and what you can bring in is covered in the guide to [UK customs rules](/en/what-you-can-bring-into-the-uk/). The general entry rules are in the guide [Entering the UK: entry requirements and visas](/en/uk-entry-requirements-and-visas/), and transit through the UK has its own guide.",
      ] },
    ],
    faq: [
      { q: "How long must my passport be valid for a trip to the UK?", a: "To visit the UK you normally need a valid passport that covers the whole of your stay. For many nationalities there is usually no extra requirement, such as six months' further validity after arrival, but requirements can differ. Check what applies to your country on GOV.UK before you travel." },
      { q: "Which passport is my ETA linked to?", a: "An ETA is linked to the passport you used when you applied, and you travel on that same passport. If you renew or replace your passport, you will normally need to apply for a new ETA for the new one. If you have dual nationality and more than one passport, you enter on the passport your ETA is linked to." },
      { q: "Do children need their own passport for the UK?", a: "All travellers, including babies, normally need their own passport to travel to the UK. Each traveller also needs their own ETA. Check the requirements in good time, as getting a passport for a child can take a while." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "uk-border-control-egates",
    group: "travel",
    title: "UK passport control and eGates in London (2026)",
    description: "With an EU passport and a valid UK ETA you can use eGates — no questions, no stamp. From 8 July 2026 children aged 8 and over can use them too.",
    h1: "UK passport control and eGates",
    lead: "Who can use the automatic eGates at London's airports, how they work step by step, what a Border Force officer may ask at the desk, and what changes for families from 8 July 2026.",
    card: "Who can use eGates, how they work, and the new rule for children from 8 July 2026.",
    sections: [
      { h: "New from 8 July 2026: eGates from age 8", blocks: [
        "From 8 July 2026, children aged 8 or over can use eGates — previously the minimum age was 10. Two conditions apply: the child must be at least 120 cm tall, and children aged 8 to 17 must travel with an adult.",
        "For many families this means the whole group can now go through the automatic gates without queuing for the staffed desk.",
      ] },
      { h: "Who can use eGates", blocks: [
        "eGates are open to passport holders from:",
        { ul: [
          "all EU countries,",
          "Iceland, Liechtenstein, Norway and Switzerland,",
          "Australia, Canada, Japan, New Zealand, Singapore, South Korea and the USA.",
        ] },
        "The condition is that you hold valid permission to travel — for travellers from visa-exempt countries this in practice means a valid UK ETA (or an eVisa). If you are not sure what applies to your passport, use [Check if you need a UK visa](https://www.gov.uk/check-uk-visa). If you do not have an ETA yet, see [how to apply for a UK ETA](/en/how-to-apply/).",
        "There are more than 290 eGates at 15 airports and rail terminals in the UK — including at [London's airports](/en/london-airports/) such as Heathrow.",
      ] },
      { h: "How an eGate works: no questions, no stamp", blocks: [
        { ul: [
          "Place your biometric passport, open at the photo page, on the reader.",
          "Look into the camera — the system compares your face with the photo in your passport.",
          "The gate opens and you walk through — without speaking to an officer and without an entry stamp in your passport.",
        ] },
        "If the gate does not recognise you (for example because your passport is worn), you will simply be directed to the staffed Border Force desk.",
      ] },
      { h: "Manual passport control: the 5 possible questions", blocks: [
        "If you go through the desk with a Border Force officer, you may be asked about:",
        { ul: [
          "The purpose of your trip — tourism, business, visiting family.",
          "The length of your stay — how many days you are staying.",
          "Your accommodation — the address of your hotel or host.",
          "Your return journey — the date and booking for your trip home.",
          "Your funds — enough money for your stay.",
        ] },
      ] },
      { h: "Documents you need", blocks: [
        { ul: [
          "A biometric passport valid for the whole of your stay.",
          "A valid UK ETA — it is linked electronically to your passport and does not need to be printed; it is still a good idea to keep the approval email.",
        ] },
        "If you are unsure about your application, see how to [check your ETA application status](/en/check-status/). Special rules apply to connecting flights via the UK — see the guide on transit through the UK.",
      ] },
      { h: "Families with children: what applies", blocks: [
        { ul: [
          "Children aged 8 and over (and at least 120 cm tall) use eGates; children aged 8 to 17 always with an adult.",
          "Children under 8 go through the staffed desk together with their parents.",
          "Every child — including babies — needs their own UK ETA.",
          "The general entry rules are in the guide [Entering the UK: entry requirements and visas](/en/uk-entry-requirements-and-visas/).",
        ] },
      ] },
      { h: "After passport control: customs", blocks: [
        "Customs comes after passport control — note that bringing meat and dairy products from the EU into the UK is prohibited. Read more in the guide to [customs rules and allowances](/en/what-you-can-bring-into-the-uk/).",
      ] },
    ],
    faq: [
      { q: "Can I use eGates with an EU passport?", a: "Yes. eGates are open to passport holders from all EU countries (as well as Iceland, Liechtenstein, Norway and Switzerland, plus Australia, Canada, Japan, New Zealand, Singapore, South Korea and the USA), provided you hold valid permission to travel such as a UK ETA or an eVisa." },
      { q: "From what age can children use eGates?", a: "Since 8 July 2026, children aged 8 and over can use eGates (previously the minimum age was 10). The child must be at least 120 cm tall, and children aged 8 to 17 must travel with an adult." },
      { q: "Will my passport be stamped when I use an eGate?", a: "No. When you go through an eGate, no officer asks you questions and no entry stamp is put in your passport. Your UK ETA is linked electronically to your passport." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "uk-customs-rules": {
    slug: "what-you-can-bring-into-the-uk",
    group: "travel",
    title: "What can you bring into the UK? Customs allowances (2026)",
    description: "UK duty-free allowances: 4 l spirits, 18 l wine, 42 l beer, 200 cigarettes. No meat or dairy from the EU. Cash of £10,000 or more must be declared.",
    h1: "What can you bring into the UK? UK customs rules",
    lead: "The most important rule: you cannot bring meat or dairy products from the EU into the UK. Below: which foods are allowed, the exception for baby food, the alcohol and tobacco allowances, and when cash must be declared.",
    card: "No meat or dairy from the EU, duty-free allowances, and the £10,000 cash rule.",
    sections: [
      { h: "Rule no. 1: no meat and no dairy products from the EU", blocks: [
        "Bringing meat and dairy products from the EU into Great Britain (England, Scotland, Wales) is prohibited. The ban covers:",
        { ul: [
          "Dairy products: cheese, milk, butter, yoghurt.",
          "Meat: pork, beef, lamb and mutton, goat and game, and products made from them — including salami, sausages, ham, and sandwiches containing meat or cheese.",
        ] },
        "The rule also applies to small amounts in your hand luggage — a ham sandwich bought at the airport must be eaten or thrown away before the check.",
      ] },
      { h: "The exception: baby food (up to 2 kg)", blocks: [
        "Infant formula, baby food and special foods for medical use are allowed up to 2 kg per person, provided they are in unopened branded packaging and do not need to be refrigerated before use.",
      ] },
      { h: "Foods you can bring without problems", blocks: [
        { ul: [
          "Bread (but not sandwiches with meat or dairy products).",
          "Cakes without fresh cream, biscuits and chocolate.",
          "Pasta and packet soups.",
          "Fish, eggs and honey — allowed for personal use.",
        ] },
        "If you are unsure, check the specific product on GOV.UK before you travel — the rules vary by food category.",
      ] },
      { h: "Alcohol and tobacco: duty-free allowances on arrival in the UK", blocks: [
        { table: { head: ["Category", "Duty-free allowance"], rows: [
          ["Beer", "42 litres"],
          ["Still wine", "18 litres"],
          ["Spirits (over 22%)", "4 litres, or 9 litres of drinks up to 22%"],
          ["Cigarettes", "200 (or 50 cigars or 250 g of tobacco)"],
          ["Other goods (gifts, souvenirs)", "up to £390 (£270 if arriving by private plane or private boat)"],
        ] } },
        "Anything above the allowances must be declared and the relevant charges paid. These are the UK's allowances on arrival; when you return home, your own country's rules apply.",
      ] },
      { h: "Cash: you must declare £10,000 or more", blocks: [
        "If you are carrying £10,000 or more in cash (including the equivalent amount in other currencies), you must declare it — online before you travel or in the red channel on arrival. Failing to declare it can lead to the whole amount being seized and a fine of up to £5,000.",
      ] },
      { h: "Penalties and how the check works", blocks: [
        "Prohibited foods can be seized at the border, and if you exceed the alcohol and tobacco allowances without declaring them, the goods can be held and penalties imposed. The safest option is to use the red channel if you have anything to declare.",
        "Customs comes after passport control — see how [passport control and the eGates](/en/uk-border-control-egates/) work. Remember that you need a valid [UK ETA](/en/how-to-apply/) to enter — you can follow your application with the [ETA status check](/en/check-status/). The general entry rules are in the guide [Entering the UK: entry requirements and visas](/en/uk-entry-requirements-and-visas/), and transit through the UK has its own guide.",
      ] },
    ],
    faq: [
      { q: "Can I bring cheese or meat products from the EU to the UK?", a: "No. Bringing meat (pork, beef, lamb and mutton, goat and game) and meat products, as well as dairy products (cheese, milk, butter, yoghurt), from the EU into Great Britain is prohibited. The products can be seized at the border." },
      { q: "How many cigarettes and how much alcohol can I bring into the UK duty-free?", a: "200 cigarettes (or 50 cigars or 250 g of tobacco), 42 litres of beer, 18 litres of still wine, and 4 litres of spirits over 22% or 9 litres of alcoholic drinks up to 22%." },
      { q: "Do I have to declare cash when entering the UK?", a: "Yes, if you are carrying £10,000 or more. You declare it online in advance or in the red channel on arrival. Failing to declare it can lead to the whole amount being seized and a fine of up to £5,000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK for personal use", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "taking-medicine-to-the-uk",
    group: "travel",
    title: "Taking medicine to the UK: rules and documents (2026)",
    description: "You can bring up to three months' supply of your own medicine to the UK, with proof it was prescribed to you. Controlled drugs may need a licence.",
    h1: "Taking medicine to the UK",
    lead: "You can bring your own medicine to the UK — up to three months' supply — as long as you can show it was prescribed to you. Below: how much you can bring, which documents you need, the rules for controlled drugs, and liquids in hand luggage.",
    card: "Up to three months' supply, the prescription details to carry, and controlled drugs.",
    sections: [
      { h: "Up to three months' supply", blocks: [
        "You can bring up to three months' supply of your own medicine for personal use into the UK. You should be able to show that the medicine has been prescribed to you.",
        "Keep your medicine in its original packaging where possible. This makes it easier to show what it is and that it belongs to you, should you be asked at the border.",
      ] },
      { h: "Letters and prescriptions to bring", blocks: [
        "Bring a letter or prescription as proof that the medicine was prescribed to you. It should include:",
        { ul: [
          "The name of the medicine.",
          "The dose and strength.",
          "How often you take it.",
          "The signature or registration number of the prescribing doctor.",
        ] },
        "Keep the medicine in its original packaging where you can, so that the details on the pack match the letter.",
      ] },
      { h: "Medicines containing controlled drugs", blocks: [
        "Some medicines contain controlled drugs and are subject to extra rules. Ask your doctor or pharmacist whether this applies to your medicine.",
        "If it does, you may need a personal licence. In that case you should contact the UK Home Office (Drug and Firearms Licensing Unit) at least 15 working days before you travel.",
        "Medicines classed as Schedule 1 cannot be brought in without a licence.",
      ] },
      { h: "Liquids and syringes in hand luggage", blocks: [
        "Liquids and syringes in your hand luggage are subject to the airports' usual security rules. If you are carrying liquid medicine or injection equipment, it can help to have your letter to hand at the security check too. Read more in our guide to [airport security and liquids](/en/hand-luggage-liquids-uk-airports/).",
      ] },
      { h: "Healthcare during your stay in the UK", blocks: [
        "If you need treatment or new medicine during your stay, it helps to know how the UK healthcare system works. This is covered in our guide to healthcare and the NHS in the UK.",
      ] },
    ],
    faq: [
      { q: "Can I bring my medicine to the UK?", a: "Yes, you can bring up to three months' supply of your own medicine for personal use. Carry proof that it was prescribed to you and, ideally, keep it in its original packaging." },
      { q: "Which documents do I need to bring medicine?", a: "Bring a letter or prescription showing the name of the medicine, the dose and strength, how often you take it, and the signature or registration number of the prescribing doctor. Keep the medicine in its original packaging where possible." },
      { q: "What are the rules for controlled drugs?", a: "Some medicines contain controlled drugs and are subject to extra rules. Ask your doctor or pharmacist whether this applies to your medicine. If it does, you may need a personal licence and should contact the UK Home Office at least 15 working days before you travel." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "hand-luggage-liquids-uk-airports",
    group: "travel",
    title: "Liquids in hand luggage: security at UK airports (2026)",
    description: "Many UK airports allow up to 100 ml per container in hand luggage (bag up to 1 litre); some allow 2 litres thanks to CT scanners. Check your airport.",
    h1: "Liquids in hand luggage and security at UK airports",
    lead: "At many UK airports a limit of 100 ml per container still applies to liquids in hand luggage. Some airports have started allowing larger amounts thanks to new scanners, but the rules vary — here is what usually applies and why you should check your own departure airport.",
    card: "The 100 ml rule, the new CT scanners, and exceptions for baby food and medicine.",
    sections: [
      { h: "The 100 ml rule and the clear bag", blocks: [
        "At many UK airports, liquids in hand luggage must be in containers of no more than 100 ml each. A container that holds more than 100 ml is usually not accepted, even if it is not full.",
        { ul: [
          "The containers usually have to go in a single clear, resealable bag of no more than 1 litre.",
          "The rule is usually one bag per person.",
          "Gels, pastes, creams, sprays and similar products often count as liquids too.",
        ] },
        "As the details can differ between airports, it is sensible to check the current rules for your departure airport before you travel.",
      ] },
      { h: "New CT scanners: some airports may allow more", blocks: [
        "Some UK airports have introduced new CT scanners and, with them, may allow liquids in containers of up to 2 litres. The roll-out is happening at different speeds, however, and the situation varies between airports.",
        "Even in mid-2026 the 100 ml limit still applies at many airports. So do not assume the higher limit applies — always check the latest rules for the airport you are flying from, and ideally for your return airport too.",
      ] },
      { h: "Exceptions: baby food, baby milk and medicine", blocks: [
        "Baby food and baby milk, as well as essential medicine, can in some cases be carried in larger amounts than the usual liquid limit. You will usually need to declare them to the staff at the security check.",
        "The amounts and conditions can vary between airports. It can help to have a prescription or other documents to hand, and to check in advance what applies where you are travelling. If you are travelling with children, see also our guide to [travelling to the UK with children](/en/travelling-to-the-uk-with-children/).",
      ] },
      { h: "Electronics and larger items", blocks: [
        "Larger electronic devices, such as laptops, may need to be taken out of your bag and placed separately in the tray as instructed by staff. This too can differ depending on the airport and the equipment used at the check, so follow the instructions given on the spot.",
      ] },
      { h: "How to prepare for the security check", blocks: [
        "To make the check go smoothly, it helps to pack your liquids in the clear bag at home, to keep baby food and medicine easy to reach so you can declare them, and to check the current rules for your airport in advance.",
        "Security comes before passport control — see how [passport control and the eGates](/en/uk-border-control-egates/) work, and what you can bring through [UK customs](/en/what-you-can-bring-into-the-uk/). Remember that you need a valid [UK ETA](/en/how-to-apply/) to enter — you can follow your application with the [ETA status check](/en/check-status/). The general entry rules are in the guide [Entering the UK: entry requirements and visas](/en/uk-entry-requirements-and-visas/), and transit through the UK has its own guide.",
      ] },
    ],
    faq: [
      { q: "How much liquid can I take in hand luggage at a UK airport?", a: "At many UK airports a limit of 100 ml per container often applies, with the containers in one clear, resealable bag of no more than 1 litre, one bag per person. Some airports have introduced new CT scanners and may allow up to 2 litres, but this varies between airports. Always check the current rules for your departure airport before you travel." },
      { q: "Can I take water through security?", a: "Water and other drinks bought after the security check can usually be taken on board. Drinks you bring before the check are, however, usually covered by the liquid rules and may have to be thrown away if they exceed the limit. Rules can differ between airports, so check what applies where you are travelling." },
      { q: "Can I take baby milk and medicine through security?", a: "Baby food, baby milk and essential medicine can in some cases be carried in larger amounts than the usual liquid limit, provided you declare them to the staff at the check. The amounts and conditions can vary, so check with your airport in advance and have any prescription or documents to hand." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "drinking-age-and-smoking-rules",
    group: "travel",
    title: "Drinking age in England is 18 – smoking rules and more | 2026",
    description: "The drinking age in England is 18 to buy alcohol or drink in a pub. At 16–17 with an adult you may drink beer, wine or cider with a meal.",
    h1: "Drinking age in England – smoking and other rules",
    lead: "In England you must be 18 to buy alcohol or to drink alcohol in a pub or restaurant. If you are 16 or 17 and with an adult, you can drink (but not buy) beer, wine or cider with a meal (GOV.UK). In the UK the minimum age for buying alcohol and tobacco is 18, and smoking is banned indoors in public places.",
    card: "Age 18 for alcohol and tobacco, the indoor smoking ban, vaping and drink-driving.",
    sections: [
      { h: "What is the drinking age in England? 18 for alcohol and tobacco", blocks: [
        "In the UK you must be at least 18 to buy alcohol and tobacco. The age limit applies in shops, bars, restaurants and other places that sell them.",
        "Shops, pubs and restaurants may ask for ID proving your age, even if you look older. So it is a good idea to have valid ID to hand if you plan to buy alcohol or tobacco.",
      ] },
      { h: "Smoking ban indoors in public places", blocks: [
        "Since the smoke-free law was introduced in 2007, smoking has been banned indoors in all enclosed public places, workplaces and on public transport.",
        "This means pubs, restaurants and stations are smoke-free indoors. You may only smoke in designated outdoor areas.",
        { ul: [
          "Indoors: smoking banned in enclosed public places and workplaces.",
          "Public transport: smoke-free.",
          "Allowed: only in designated outdoor areas.",
        ] },
      ] },
      { h: "Vaping and e-cigarettes", blocks: [
        "The rules for vaping and e-cigarettes vary from place to place. In many places it is not allowed indoors, but this can differ between venues and businesses. Always follow the signs and staff instructions where you are.",
      ] },
      { h: "Drink-driving and drinking in public", blocks: [
        "Drink-driving is strictly enforced in the UK, with set legal limits and penalties. If you plan to drive, you should know the rules — these are covered in our guide to driving in the UK.",
        "Some local councils have also introduced zones with restrictions on drinking alcohol in public places. Look out for local signs showing such restrictions.",
      ] },
      { h: "Bringing alcohol and tobacco into the UK", blocks: [
        "Separate customs allowances (duty-free) apply to how much alcohol and tobacco you can bring into the country. These are described in our guide to [customs rules and allowances](/en/what-you-can-bring-into-the-uk/).",
      ] },
    ],
    faq: [
      { q: "What is the drinking age in England?", a: "In England you must be 18 to buy alcohol or to drink alcohol in a pub or restaurant. If you are 16 or 17 and with an adult, you can drink (but not buy) beer, wine or cider with a meal (GOV.UK)." },
      { q: "What is the minimum age for buying alcohol and tobacco in the UK?", a: "You must be at least 18 to buy alcohol and tobacco in the UK. Shops and bars may ask for ID proving your age." },
      { q: "Can I smoke in pubs and shops?", a: "No. Smoking is banned indoors in all enclosed public places, workplaces and on public transport. Pubs, restaurants and stations are smoke-free indoors — you may only smoke in designated outdoor areas." },
      { q: "Can I use an e-cigarette (vape)?", a: "The rules for e-cigarettes and vaping vary from place to place. Often it is not allowed indoors. Always follow the signs and staff instructions where you are." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "travelling-to-the-uk-with-children",
    group: "travel",
    title: "Travelling to the UK with children: ETA and passports (2026)",
    description: "Everyone, including babies, needs their own ETA and passport for the UK. Border Force may ask for proof of your relationship — how to prepare.",
    h1: "Travelling to the UK with children",
    lead: "Why every child needs their own ETA and passport, when Border Force may ask for proof of your relationship, and which documents to bring for a smooth arrival with children.",
    card: "One ETA and passport per child, and the documents Border Force may ask to see.",
    sections: [
      { h: "Every traveller needs their own ETA and passport", blocks: [
        "All travellers, including babies, need their own ETA and their own passport. A child cannot travel on a parent's ETA — it is one ETA per person.",
      ] },
      { h: "Border Force may ask for proof of your relationship", blocks: [
        "When you travel with children, Border Force (UK border control) may ask for proof of your relationship — especially if you have different surnames or if you are not the child's parent. Valid proof can include:",
        { ul: [
          "A birth or adoption certificate.",
          "A marriage or divorce certificate (if you are the parent but have a different surname).",
          "A consent letter from the parent (if you are not the child's parent).",
        ] },
      ] },
      { h: "Carry the documents with you", blocks: [
        "It is a good idea to carry this kind of proof of relationship on future trips too. It makes arrival smoother if you are asked at border control.",
      ] },
      { h: "Good to know before you travel", blocks: [
        "Apply for a [UK ETA](/en/how-to-apply/) for every member of the family and follow the applications with the [ETA status check](/en/check-status/). The general entry rules are in the guide [Entering the UK: entry requirements and visas](/en/uk-entry-requirements-and-visas/), and what you can bring in is covered in the guide to [customs rules and allowances](/en/what-you-can-bring-into-the-uk/). If you plan to hire a car, see our guide to driving in the UK; for connecting flights, see the guide on transit through the UK.",
      ] },
    ],
    faq: [
      { q: "Do children need an ETA for the UK too?", a: "Yes. All travellers, including babies, need their own ETA. A child cannot travel on a parent's ETA — it is one ETA per person." },
      { q: "Can a child travel on a parent's passport or ETA?", a: "No. Every traveller needs their own passport and their own ETA, whatever their age. You cannot enter on another person's passport or ETA." },
      { q: "What if I am travelling with a child who has a different surname?", a: "Border Force may ask for proof of your relationship, especially if you have different surnames or if you are not the child's parent. Valid proof can include a birth or adoption certificate, a marriage or divorce certificate, or a consent letter from the parent." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "london-airports",
    group: "travel",
    title: "The UK's second-largest airport is Gatwick – London's 5 airports",
    description: "The UK's second-largest airport is London Gatwick (42.8 million passengers in 2025, CAA), after Heathrow. London's 5 airports at a glance.",
    h1: "London's 5 main airports",
    lead: "England's — and the UK's — second-largest airport is London Gatwick, with 42.8 million passengers in 2025, after Heathrow (84.5 million). Third is Manchester (32.1 million), according to the UK Civil Aviation Authority (CAA). London is served by five major airports, and your choice affects your route, journey time and cost into the centre.",
    card: "Heathrow, Gatwick, Stansted, Luton and London City — and how to get into town.",
    sections: [
      { h: "Heathrow (LHR) — west London", blocks: [
        "The UK's largest airport and its most important international hub (Terminals 2–5).",
        "Getting there: Heathrow Express about 15 min, Elizabeth line about 30 min, Underground about 50 min. More in our guide to [Heathrow Airport](/en/heathrow-airport/).",
      ] },
      { h: "Gatwick (LGW) — south London", blocks: [
        "England's and the UK's second-largest airport (after Heathrow); served by both traditional and low-cost airlines (North and South Terminals).",
        "Getting there: Gatwick Express about 30 min, Thameslink about 30–45 min.",
      ] },
      { h: "Stansted (STN) — north-east London", blocks: [
        "Ryanair's base, with many European connections; a single terminal that is easy to find your way around.",
        "Getting there: Stansted Express about 50 min, coach about 60–90 min.",
      ] },
      { h: "Luton (LTN) — north of London", blocks: [
        "A base for easyJet and Wizz Air; a single terminal, with a shuttle to the station.",
        "Getting there: Luton Airport Express about 30 min, Thameslink about 30 min.",
      ] },
      { h: "London City (LCY) — central London (closest)", blocks: [
        "The closest airport to the centre; popular with business travellers.",
        "Getting there: DLR about 15–25 min to the centre.",
        { note: "Journey times are approximate and depend on your destination in London and the time of day." },
      ] },
      { h: "Before you land", blocks: [
        "Whichever airport you arrive at, the same entry rules apply — see the guide [Entering the UK: entry requirements and visas](/en/uk-entry-requirements-and-visas/).",
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  heathrow: {
    slug: "heathrow-airport",
    group: "travel",
    title: "Heathrow Airport (LHR): terminals, eGates and getting to London",
    description: "Guide to Heathrow Airport: Terminals 2–5, border control (eGates) and getting to central London — Heathrow Express, Elizabeth line, Tube and coach.",
    h1: "Heathrow Airport (LHR)",
    lead: "Heathrow is the UK's largest airport and the main point of entry to London. Below you will find the terminals, how border control works and how to get into the centre.",
    card: "Terminals 2–5, eGates on arrival, and the fastest ways into central London.",
    sections: [
      { h: "Location and terminals", blocks: [
        "Heathrow (IATA code: LHR) is in west London. It is the largest and busiest airport in the UK, with connections from all over the world. Terminals 2, 3, 4 and 5 are in operation — check the terminal number on your ticket, as it affects both your route and check-in.",
      ] },
      { h: "Border control on arrival", blocks: [
        `After landing you go through border control at the automatic eGates (using a biometric passport) or at a staffed desk with an officer. To enter, you need a valid passport and a valid [UK ETA](/en/what-is-the-eta/) linked to that passport (for stays of up to ${F.staySixMonths} months). How the gates work is explained in [Passport control and eGates](/en/uk-border-control-egates/).`,
      ] },
      { h: "Getting to central London", blocks: [
        { table: { head: ["Transport", "Approximate journey time"], rows: [
          ["Heathrow Express (fast train)", "about 15 minutes"],
          ["Elizabeth line", "about 30 minutes"],
          ["Underground (Piccadilly line)", "about 50 minutes"],
          ["Bus / coach", "about 60–90 minutes"],
        ] } },
        { note: "Journey times are approximate and depend on the terminal, the time of day and your destination in London." },
        "More about London's airports: [London's 5 main airports](/en/london-airports/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
