import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（nl・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "wie-heeft-een-eta-nodig",
    group: "eta",
    title: "Wie heeft een UK ETA nodig? Nationaliteit en uitzonderingen 2026",
    description:
      "Wie heeft een UK ETA nodig en wie niet: Britse en Ierse burgers, houders van een verblijfsvergunning, airside-transit. Ook baby's hebben een eigen ETA nodig.",
    h1: "Wie heeft een UK ETA nodig?",
    lead: "Een UK ETA is verplicht voor burgers van visumvrije landen, zoals Nederland en België, bij een kort verblijf (toerisme, zaken, korte studie). Iedere reiziger, ook baby's en kinderen, heeft een eigen ETA nodig.",
    card: "Wie een ETA nodig heeft, wie is vrijgesteld en waarom ook kinderen er een moeten hebben.",
    sections: [
      { h: "Wie is vrijgesteld van de ETA", blocks: [
        { ul: [
          "Britse en Ierse burgers (met een Brits of Iers paspoort)",
          "Personen met toestemming om in het Verenigd Koninkrijk te wonen, werken of studeren (bijvoorbeeld een visum of settled/pre-settled status)",
          "Houders van een paspoort British Overseas Territories Citizen of British National (Overseas)",
          "Inwoners van Ierland die vanuit Ierland, Guernsey, Jersey of het eiland Man reizen",
          "Airside-transitreizigers die niet door de grenscontrole gaan",
          "Personen die wachten op een beslissing over een aanvraag in het EU Settlement Scheme",
        ] },
      ] },
      { h: "Belangrijk om te weten", blocks: [
        { ul: [
          "Wie de Britse of Ierse nationaliteit heeft, kan geen ETA krijgen en reist met de documenten van die nationaliteit.",
          "Is uw nationaliteit niet visumvrij, dan heeft u mogelijk een visum nodig: controleer dit met de officiële tool van GOV.UK.",
          "Ook baby's en kinderen hebben een eigen ETA nodig.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-of-visum",
    group: "eta",
    title: "UK ETA of visum: wat is het verschil? 2026",
    description: `Het verschil tussen de UK ETA en een visum: met de ETA mag u tot ${F.staySixMonths} maanden blijven voor toerisme, zaken of korte studie, maar niet werken of er gaan wonen.`,
    h1: "UK ETA of visum: het verschil",
    lead: "De UK ETA is geen visum, maar een reistoestemming voor burgers van visumvrije landen. Ze garandeert geen toegang: de grenspolitie beslist bij aankomst.",
    card: "Wat u met een ETA wel en niet mag doen, en wanneer u een visum nodig heeft.",
    sections: [
      { h: `Wat u met een ETA mag doen (maximaal ${F.staySixMonths} maanden)`, blocks: [
        { ul: [
          "Toerisme en bezoek aan familie en vrienden",
          "Zakenreizen (business)",
          "Korte studie (short-term study)",
          "Transit waarbij u door de grenscontrole gaat",
          "Permitted paid engagement; activiteiten tot 3 maanden met de Creative Worker concession",
        ] },
      ] },
      { h: "Wat u met een ETA niet mag doen", blocks: [
        { ul: [
          `Verblijven langer dan ${F.staySixMonths} maanden`,
          "Betaald of onbetaald werk voor een Brits bedrijf of als zelfstandige (behalve de uitzonderingen hierboven)",
          "Overheidsgeld ontvangen (public funds)",
          "Feitelijk in het Verenigd Koninkrijk wonen door frequente, herhaalde bezoeken",
          "Een huwelijk of partnerschap laten registreren (daarvoor is een Marriage Visitor visa nodig)",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "standard-visitor-visa": {
    slug: "standard-visitor-visum",
    group: "eta",
    title: "Standard Visitor-visum voor het VK: als de ETA niet volstaat",
    description:
      "ETA afgewezen (geen beroep mogelijk) of heeft uw nationaliteit een visum nodig? Dan vraagt u een Standard Visitor-visum aan: £135 voor maximaal 6 maanden.",
    h1: "Standard Visitor-visum voor het VK: als de ETA niet volstaat",
    lead: "Wordt uw UK ETA afgewezen (beroep is niet mogelijk) of heeft u op grond van uw nationaliteit een visum nodig, dan moet u een Standard Visitor-visum aanvragen om naar het Verenigd Koninkrijk te reizen. Hieronder de feiten volgens GOV.UK.",
    card: "Kosten, doorlooptijd en aanvraag van het Standard Visitor-visum als de ETA niet volstaat.",
    sections: [
      { h: "Wie een visum nodig heeft in plaats van een ETA", blocks: [
        { ul: [
          "Personen van wie de nationaliteit een visum voor het VK vereist (geen recht op een ETA).",
          "Personen van wie de ETA-aanvraag is afgewezen: met een ETA kunt u het VK dan niet in, er is een visum nodig.",
          "Controleer welk visum u nodig heeft met de tool “check if you need a visa” op GOV.UK.",
        ] },
      ] },
      { h: "Kosten (GOV.UK)", blocks: [
        { table: { head: ["Visum", "Kosten"], rows: [
          ["Standard Visitor (tot 6 maanden)", "£135"],
          ["Langlopend — 2 jaar", "£506"],
          ["Langlopend — 5 jaar", "£903"],
          ["Langlopend — 10 jaar", "£1.128"],
          ["Transitvisum", "£74,50"],
        ] } },
        "Een langlopend visum geeft recht op meerdere inreizen, maar elk verblijf is beperkt tot 6 maanden. Bedragen volgens GOV.UK — ze kunnen wijzigen.",
      ] },
      { h: "Doorlooptijd, geldigheid en verblijf", blocks: [
        { ul: [
          "Beslissing: meestal binnen 3 weken na de afspraak bij het visumaanvraagcentrum.",
          "Verblijf: maximaal 6 maanden per bezoek.",
          "Wanneer aanvragen: op zijn vroegst 3 maanden vóór de reis.",
        ] },
      ] },
      { h: "Zo vraagt u het aan (GOV.UK)", blocks: [
        { ul: [
          "1. Vraag online aan (u kunt tussentijds opslaan en later afronden).",
          "2. Maak een afspraak bij een visumaanvraagcentrum.",
          "3. Ga naar de afspraak om uw identiteit aan te tonen, biometrische gegevens (vingerafdrukken en foto) af te geven en uw documenten in te leveren.",
          "4. U ontvangt de beslissing per e-mail; uw paspoort krijgt u terug bij het centrum.",
        ] },
        "Zorg onder meer voor:",
        { ul: [
          "Een geldig paspoort (geldig gedurende het hele verblijf)",
          "Reisdata, verblijfsadres en geschatte kosten",
          "Uw huidige adres en hoe lang u daar woont",
          "Jaarinkomen (indien van toepassing) en gegevens van uw werkgever (indien van toepassing)",
          "Eventuele strafrechtelijke of immigratiegeschiedenis",
          "Beëdigde vertalingen van documenten die niet in het Engels of Welsh zijn",
        ] },
        { note: "Dit is een onafhankelijke informatiedienst, geen overheidswebsite. Gegevens en tarieven kunnen wijzigen — controleer altijd de officiële informatie op GOV.UK voordat u aanvraagt." },
      ] },
    ],
    faq: [
      { q: "Wanneer heb ik een Standard Visitor-visum nodig in plaats van een ETA?", a: "Als uw nationaliteit een visum voor het VK vereist of als uw ETA-aanvraag is afgewezen. Tegen een ETA-afwijzing is geen beroep mogelijk — om te reizen vraagt u het juiste visum aan." },
      { q: "Hoeveel kost het Standard Visitor-visum?", a: "Volgens GOV.UK kost een visum tot 6 maanden £135. Langlopend: £506 (2 jaar), £903 (5 jaar), £1.128 (10 jaar). Transitvisum £74,50." },
      { q: "Hoe lang duurt de behandeling?", a: "Meestal krijgt u binnen 3 weken na de afspraak bij het visumaanvraagcentrum een beslissing." },
      { q: "Hoe lang mag ik in het VK blijven?", a: "Het standaardverblijf is maximaal 6 maanden per bezoek." },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
  },

  "expiration": {
    slug: "eta-verlopen-opnieuw-aanvragen",
    group: "eta",
    title: `UK ETA verlopen? Wanneer u opnieuw aanvraagt (${F.validYears} jaar) 2026`,
    description: `Uw UK ETA verloopt na ${F.validYears} jaar of eerder met uw paspoort. Wanneer u opnieuw aanvraagt: na ${F.validYears} jaar, bij een nieuw paspoort of een naamswijziging.`,
    h1: "Wanneer verloopt uw UK ETA en wanneer vraagt u opnieuw aan?",
    lead: `De UK ETA is ${F.validYears} jaar geldig vanaf de datum van afgifte, of tot uw paspoort verloopt — wat het eerst gebeurt. In die periode kunt u zo vaak u wilt naar Engeland en de rest van het VK reizen, maximaal ${F.staySixMonths} maanden per bezoek (GOV.UK).`,
    card: "Wanneer uw ETA verloopt en wanneer u opnieuw aanvraagt, ook bij een nieuw paspoort.",
    sections: [
      { h: "De regels voor de geldigheid", blocks: [
        `De basisregels staan ook op onze pagina over de [geldigheid van de UK ETA](/nl/geldigheid/). Kort samengevat:`,
        { ul: [
          `Geldig ${F.validYears} jaar vanaf de datum van afgifte`,
          "Verloopt samen met het paspoort (als het paspoort eerder verloopt)",
          "Meerdere inreizen in het VK binnen de geldigheidsduur",
          `Elk verblijf mag niet langer zijn dan ${F.staySixMonths} maanden`,
          "De ETA is gekoppeld aan één specifiek paspoort",
        ] },
      ] },
      { h: "Wanneer moet u opnieuw aanvragen?", blocks: [
        "U dient een nieuwe UK ETA-aanvraag in als:",
        { ul: [
          `er ${F.validYears} jaar zijn verstreken sinds de afgifte van de ETA`,
          "u een nieuw paspoort heeft gekregen",
          "uw naam is gewijzigd",
          "uw omstandigheden zijn veranderd op een manier die gevolgen heeft voor uw recht op een ETA",
        ] },
      ] },
      { h: "Kan ik reizen met een ETA die bijna verloopt?", blocks: [
        "De UK ETA moet geldig zijn op het moment dat u het VK inreist. Hij hoeft niet geldig te blijven tijdens uw hele verblijf — het gaat erom dat hij op de dag van aankomst geldig is. Het is wel aan te raden om tijdig een nieuwe aanvraag in te dienen.",
      ] },
      { h: "Hoe controleer ik tot wanneer mijn ETA geldig is?", blocks: [
        "Volgens GOV.UK kunt u dit online controleren via gov.uk/eta (Check your ETA): daar ziet u of u een ETA heeft en wanneer die verloopt. Zie ook onze pagina over het [controleren van uw status](/nl/status-controleren/).",
      ] },
      { h: "Wat gebeurt er als ik een nieuw paspoort krijg terwijl de ETA nog geldig is?", blocks: [
        `De ETA is gekoppeld aan één specifiek paspoort. Krijgt u een nieuw paspoort (bijvoorbeeld omdat het oude is verlopen of na een naamswijziging), dan moet u een nieuwe ETA aanvragen en opnieuw ${F.fee} betalen. De oude ETA vervalt.`,
        { note: `Tip: dien uw UK ETA-aanvraag bij voorkeur minstens ${F.decisionDays} werkdagen vóór de geplande reis in, zodat er tijd is voor de behandeling.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "children-family": {
    slug: "eta-voor-kinderen-en-gezin",
    group: "eta",
    title: "UK ETA voor kinderen en gezinnen: ook voor baby's? 2026",
    description:
      "Ook baby's en kinderen hebben een eigen UK ETA nodig. U kunt aanvragen voor een ander, met diens paspoort en gezichtsfoto.",
    h1: "UK ETA voor kinderen en gezinnen",
    lead: "Iedere reiziger, ook baby's en kinderen, heeft een eigen UK ETA nodig. U kunt de aanvraag voor iemand anders indienen.",
    card: "Ook baby's hebben een eigen ETA nodig: zo vraagt u aan voor uw gezin.",
    sections: [
      { h: "Aanvragen voor het gezin", blocks: [
        { ul: [
          "Iedere reiziger heeft een eigen ETA nodig, ook kinderen en baby's",
          "U kunt aanvragen voor een ander: via de app als die persoon erbij is, anders online (een foto van het paspoort en van het gezicht is nodig)",
          "Kinderen die op het formulier France-UK school trip travel information form staan, hebben geen ETA nodig",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "eta-afgewezen",
    group: "eta",
    title: "UK ETA afgewezen? Wat u kunt doen en de alternatieven 2026",
    description:
      "Is uw UK ETA afgewezen, dan is beroep niet mogelijk. Om toch naar het VK te reizen moet u een visum aanvragen. Gids 2026 met de alternatieven.",
    h1: "UK ETA afgewezen: wat nu?",
    lead: "Wordt uw UK ETA-aanvraag afgewezen, dan kunt u daartegen geen beroep (appeal) instellen. Wilt u toch naar het Verenigd Koninkrijk reizen, dan moet u een visum aanvragen.",
    card: "Geen beroep mogelijk na een afwijzing: welk visum u dan nodig heeft.",
    sections: [
      { h: "Wat u doet na een afwijzing", blocks: [
        { ul: [
          "Tegen een ETA-afwijzing bestaat geen beroepsprocedure",
          "Om naar het VK te reizen moet u een passend visum aanvragen",
          "Controleer op GOV.UK welk visum bij uw reisdoel past",
        ] },
      ] },
      { h: "Volgende stap: Standard Visitor-visum", blocks: [
        "Na een ETA-afwijzing is een visum de enige weg naar het Verenigd Koninkrijk. Bekijk de kosten (£135), de doorlooptijd en de procedure in onze gids over het [Standard Visitor-visum](/nl/standard-visitor-visum/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (april 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "veelgemaakte-fouten",
    group: "eta",
    title: "Veelgemaakte fouten bij de UK ETA-aanvraag en in de app 2026",
    description:
      "Veelgemaakte fouten bij de UK ETA: paspoortgegevens die niet kloppen, fotovereisten, betaling en nepsites. Gebruik de officiële UK ETA-app.",
    h1: "Veelgemaakte fouten en de UK ETA-app",
    lead: "Veel problemen ontstaan doordat gegevens niet overeenkomen met het paspoort. Gebruik altijd de officiële app “UK ETA” en controleer uw gegevens voordat u verzendt.",
    card: "Paspoortgegevens, foto's, betaling en nepsites: de fouten die u voorkomt.",
    sections: [
      { h: "Fouten om te vermijden", blocks: [
        { ul: [
          "De gegevens moeten exact overeenkomen met het paspoort: afwijkingen leiden tot vertraging of afwijzing",
          "Vereiste foto's: uw gezicht en alle paspoortpagina's, scherp en correct",
          `Betaling (${F.fee}): Apple Pay/Google Pay/kaart (Amex, JCB, Mastercard, Visa); verificatie met 3D Secure kan nodig zijn`,
          "Een biometrisch paspoort (met het ePassport-symbool) is nodig om de chip uit te lezen",
          "Pas op voor nepsites die zich voordoen als de overheid en hogere kosten rekenen: gebruik alleen GOV.UK",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "officiele-site-gov-uk",
    group: "eta",
    title: "Officiële GOV.UK-site voor de UK ETA: zo herkent u nepsites",
    description: `Alleen GOV.UK is de officiële bron voor de UK ETA-aanvraag. Zo herkent u nepsites en voorkomt u extra kosten bovenop ${F.fee}.`,
    h1: "Officiële GOV.UK-site voor uw UK ETA-aanvraag",
    lead: "U kunt de UK ETA aanvragen op de officiële website van de Britse overheid of via de officiële mobiele app.",
    card: "Het officiële adres, de kenmerken van de echte site en signalen van nepsites.",
    sections: [
      { h: "Officieel webadres", blocks: [
        "De officiële UK ETA-pagina: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta). Het domein .gov.uk staat voor de officiële site van de Britse overheid.",
      ] },
      { h: "Hoe herkent u de officiële site?", blocks: [
        { ul: [
          "Het webadres bevat gov.uk (domein van de Britse overheid)",
          "De site wordt beheerd door het Home Office",
          `De kosten zijn precies ${F.fee}`,
          "De site heeft het kenmerkende zwart-witte GOV.UK-ontwerp",
          "Er wordt geen extra bedrag gevraagd voor een “snellere” behandeling",
        ] },
      ] },
      { h: "Hoe herkent u een nepsite?", blocks: [
        { note: "Waarschuwingssignalen:" },
        { ul: [
          "Het webadres bevat geen gov.uk",
          `Kosten die duidelijk hoger zijn dan ${F.fee}`,
          "Een belofte van “gegarandeerde goedkeuring”",
          "Een aanbod voor “snellere behandeling”",
          "Agressieve reclame of opdringerige pop-upvensters",
          "Het ontbreken van het GOV.UK-logo",
        ] },
      ] },
      { h: "Officiële mobiele app", blocks: [
        "U kunt de UK ETA ook aanvragen via de officiële mobiele app “UK ETA”:",
        { ul: [
          "iOS: zoek naar “UK ETA” in de App Store (uitgever: Home Office)",
          "Android: zoek naar “UK ETA” in Google Play (uitgever: Home Office)",
        ] },
      ] },
      { h: "Andere nuttige overheidspagina's", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) — nagaan of u een visum nodig heeft voor het VK",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) — informatie over het bezoekersvisum",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
    ],
  },

  "mobile-app": {
    slug: "uk-eta-app",
    group: "eta",
    title: "Officiële UK ETA-app: aanvragen met uw telefoon | iOS en Android",
    description:
      "Met de officiële UK ETA-app vraagt u direct op uw telefoon aan: zo downloadt u de app, wat u nodig heeft (paspoort en foto) en hoe de aanvraag verloopt.",
    h1: "De UK ETA-app",
    lead: "De Britse overheid biedt de officiële mobiele app “UK ETA” aan, waarmee u uw aanvraag rechtstreeks vanaf uw smartphone indient.",
    card: "Download, vereisten, paspoortscan met NFC en de stappen in de officiële app.",
    sections: [
      { h: "Over de UK ETA-app", blocks: [
        "De UK ETA-app is het officiële hulpmiddel van het Home Office om een elektronische reistoestemming aan te vragen. Het is de aanbevolen manier om aan te vragen, omdat u uw paspoort met NFC kunt scannen en de gegevens automatisch worden ingevuld.",
      ] },
      { h: "Beschikbaarheid", blocks: [
        { ul: [
          "iOS (App Store) — voor Apple-apparaten (iPhone). Vereist iOS 16 of hoger.",
          "Android (Google Play) — voor Android-apparaten. Vereist Android 12 of hoger en NFC.",
        ] },
        "Zoek de app onder de naam “UK ETA”, uitgever: Home Office.",
      ] },
      { h: "Functies van de app", blocks: [
        { ul: [
          "Een nieuwe UK ETA-aanvraag indienen",
          "Een biometrisch paspoort scannen (NFC + OCR)",
          "Een gezichtsfoto (selfie) maken ter verificatie",
          "De status van een lopende aanvraag controleren",
          "Betalen met kaart, Apple Pay of Google Pay",
          "Pushmeldingen bij een statuswijziging",
        ] },
      ] },
      { h: "Hoe vraagt u aan via de app?", blocks: [
        { ul: [
          "1. Download de app “UK ETA” uit de App Store of Google Play",
          "2. Maak een account aan (e-mailadres en wachtwoord)",
          "3. Scan uw biometrische paspoort (houd de telefoon tegen het paspoort)",
          "4. Maak een gezichtsfoto (selfie)",
          "5. Beantwoord de vragen in het formulier",
          `6. Betaal ${F.fee}`,
          "7. Verstuur de aanvraag en wacht op de beslissing",
        ] },
      ] },
      { h: "Paspoort scannen (NFC)", blocks: [
        "De app gebruikt NFC-technologie (Near Field Communication) om de gegevens uit de biometrische chip in uw paspoort te lezen. Zo scant u uw paspoort:",
        { ul: [
          "Open het paspoort op de pagina met de foto",
          "Houd de achterkant van de telefoon tegen het geopende paspoort",
          "Houd hem 5-10 seconden stil",
          "Wacht tot de app bevestigt dat de gegevens zijn gelezen",
        ] },
      ] },
      { h: "Voordelen van de mobiele app", blocks: [
        { ul: [
          "Paspoortscan met NFC — gegevens worden automatisch ingevuld",
          "Sneller dan aanvragen via de website",
          "Pushmeldingen over de status van uw aanvraag",
          "Biometrische beveiliging (Face ID / Touch ID)",
        ] },
        { note: "Let op: zorg dat u de officiële app downloadt. Zoek in de appwinkel naar de uitgever “Home Office”. Nep-apps kunnen persoonsgegevens stelen." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "transit-via-vk",
    group: "eta",
    title: "Transit via het VK: UK ETA nodig? Airside of landside 2026",
    description:
      "UK ETA bij transit? Gaat u door de grenscontrole (landside), dan ja; stapt u over zonder grenscontrole (airside), dan nee. Regels en uitzonderingen.",
    h1: "Transit via het Verenigd Koninkrijk: heeft u een UK ETA nodig?",
    lead: "Voor transit heeft u alleen een UK ETA nodig als u op een Britse luchthaven door de grenscontrole gaat voordat u verder reist (landside). Stapt u over zonder door de grenscontrole te gaan (airside), dan heeft u geen ETA nodig. Twijfelt u, vraag het dan aan uw luchtvaartmaatschappij.",
    card: "Airside of landside: wanneer u voor een overstap in het VK een ETA nodig heeft.",
    sections: [
      { h: "Transitregels", blocks: [
        "Sinds 2 april 2025 hebben EU-burgers, dus ook Nederlanders en Belgen, een UK ETA nodig voor transit via het VK als zij op de luchthaven door de grenscontrole gaan (landside transit). Voor transit zonder grenscontrole (airside transit) is geen ETA nodig. Twijfelt u, vraag het dan aan uw luchtvaartmaatschappij.",
        { ul: [
          "Landside-transit (u gaat door de grenscontrole): ETA verplicht",
          "Airside-transit (geen paspoortcontrole): geen ETA nodig",
          "Volgens de officiële factsheet hebben transitreizigers op Heathrow/Manchester die niet door de Britse paspoortcontrole gaan op dit moment geen ETA nodig",
          "Controleer het type transit altijd bij uw luchtvaartmaatschappij",
        ] },
      ] },
      { h: "Soorten transit", blocks: [
        { table: { head: ["Type", "Wat het inhoudt", "UK ETA"], rows: [
          ["Airside transit", "Overstappen op de luchthaven zonder door de grenscontrole te gaan. Weet u niet zeker of u door de grenscontrole gaat, vraag het dan aan uw luchtvaartmaatschappij.", "Niet nodig"],
          ["Landside transit", "Door de grenscontrole gaan voordat u verder reist, bijvoorbeeld om bagage op te halen of in een hotel te overnachten. U reist dan formeel het VK in.", "Verplicht"],
        ] } },
        "Gaat u bij een overstap in het VK door de grenscontrole, dan heeft u een UK ETA nodig, hoe kort de overstap ook is. Stapt u over zonder door de grenscontrole te gaan (airside), dan is geen ETA nodig.",
      ] },
      { h: "Uitzonderingen op de ETA-plicht bij transit", blocks: [
        "Er zijn weinig uitzonderingen op de ETA-plicht bij transit:",
        { ul: [
          "Ierse burgers (gemeenschappelijk reisgebied, CTA)",
          "Houders van een geldig Brits visum",
          "Houders van een permanente verblijfsvergunning in het VK (settled/pre-settled status)",
        ] },
      ] },
      { h: "Hoe voorkomt u dat u een ETA nodig heeft voor transit?", blocks: [
        "Wilt u geen UK ETA aanvragen, dan kunt u kiezen voor routes die niet via het Verenigd Koninkrijk lopen. Bijvoorbeeld:",
        { ul: [
          "Een rechtstreekse vlucht naar uw bestemming",
          "Overstappen in een EU-land (Amsterdam, Frankfurt, Parijs)",
          "Overstappen in Dublin (Ierland — geen ETA nodig)",
        ] },
        { note: `Tip: plant u een vlucht met een overstap in Londen, vraag de UK ETA dan minstens ${F.decisionDays} werkdagen vóór vertrek aan. Zonder ETA kan u het instappen worden geweigerd.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (april 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "eta-nieuws",
    group: "eta",
    title: `Nieuws over de UK ETA 2026: kosten ${F.fee} en volledig verplicht`,
    description: `Het laatste nieuws over de UK ETA: ${F.fee} vanaf 8 april 2026, volledig verplicht sinds 25 februari 2026 en verplicht voor EU-burgers sinds 2 april 2025.`,
    h1: "Nieuws over de UK ETA en reizen naar het VK",
    lead: `De belangrijkste wijzigingen op een rij: de ETA kost ${F.fee} sinds 8 april 2026, is volledig verplicht sinds 25 februari 2026 en geldt voor EU-burgers sinds 2 april 2025. Alleen feiten uit 2025-2026 volgens GOV.UK en het Home Office.`,
    card: "Kostenverhoging, volledige invoering en andere actuele wijzigingen rond de ETA.",
    sections: [
      { h: `8 april 2026 — Kosten van de UK ETA verhoogd naar ${F.fee}`, blocks: [
        `Vanaf 8 april 2026 kost de UK ETA ${F.fee} in plaats van £16 (een stijging van 25 %). De datum van de aanvraag is bepalend.`,
        `Het Home Office heeft de verhoging van de kosten van de UK ETA (Electronic Travel Authorisation) van £16 naar ${F.fee} bevestigd. Het nieuwe tarief geldt vanaf 8 april 2026.`,
        `De aanvraagdatum bepaalt het bedrag: wie vóór 8 april 2026 aanvroeg, betaalde £16; aanvragen op of na 8 april kosten ${F.fee}.`,
        `Het is opnieuw een verhoging in de geschiedenis van het systeem: de ETA begon met £10, ging daarna naar £16 en staat nu op ${F.fee}. De toestemming blijft ${F.validYears} jaar geldig en geeft recht op meerdere inreizen (elk verblijf tot ${F.staySixMonths} maanden).`,
        "De verhoging geldt voor burgers van meer dan 50 landen die een UK ETA nodig hebben om het VK in te reizen.",
        "Bron: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25 februari 2026 — UK ETA volledig verplicht", blocks: [
        "Vanaf 25 februari 2026 wordt de UK ETA volledig toegepast: luchtvaartmaatschappijen laten geen passagiers zonder geldige toestemming aan boord.",
        "Op 25 februari 2026 eindigde de overgangsperiode voor de invoering van de UK ETA. Vanaf die datum geldt de verplichting volledig.",
        "In de praktijk betekent dit dat vervoerders (luchtvaartmaatschappijen, veerboten, Eurostar) reizigers die een ETA nodig hebben maar er geen hebben, niet laten instappen. Vervoerders riskeren een boete als zij een passagier zonder geldige toestemming vervoeren.",
        `Vraag de ETA daarom vóór de reis aan — minstens ${F.decisionDays} werkdagen van tevoren, omdat een klein aantal aanvragen extra controle kan vergen.`,
        "Bron: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2 april 2025 — EU-burgers hebben een UK ETA nodig", blocks: [
        "Vanaf 2 april 2025 moeten burgers van de EU, de EER en Zwitserland een UK ETA hebben voordat zij naar het VK reizen. Dat geldt dus ook voor Nederlanders en Belgen.",
        "Vanaf 2 april 2025 valt het UK ETA-systeem ook voor burgers van de Europese Unie, de Europese Economische Ruimte en Zwitserland.",
        "De ETA is nodig voor toeristische reizen en zakenreizen, familiebezoek en transit waarbij u door de grenscontrole gaat. Dit geldt ook voor kinderen en baby's — iedere persoon dient een eigen aanvraag in.",
        `De toestemming is elektronisch gekoppeld aan het paspoort waarmee u heeft aangevraagd en geeft gedurende ${F.validYears} jaar recht op meerdere inreizen.`,
        "Bron: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8 april 2026 — Hogere immigratietarieven in het VK", blocks: [
        "Samen met de ETA zijn vanaf 8 april 2026 ook andere tarieven van het Home Office verhoogd — onder meer voor visa, vestiging en staatsburgerschap.",
        `Op 8 april 2026 heeft het Home Office zijn officiële tarieventabel bijgewerkt. Naast de verhoging van de ETA naar ${F.fee} zijn ook de meeste andere tarieven voor immigratie en staatsburgerschap gestegen.`,
        "Het gaat onder meer om bezoekersvisa (visit visa), tarieven voor vestiging (settlement) en aanvragen voor het Britse staatsburgerschap.",
        "Plant u een langer verblijf of een ander type visum dan de ETA, controleer dan het actuele tarief op de officiële GOV.UK-pagina voordat u aanvraagt.",
        "Bron: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1 maart 2026 — Veilig reizen naar het VK: waar u op let", blocks: [
        "Controleer vóór vertrek de actuele veiligheidsberichten en zorg dat uw paspoort en ETA geldig zijn.",
        "Het Verenigd Koninkrijk is een populaire en over het algemeen veilige bestemming, maar het is verstandig om vóór elke reis de actuele berichten van de overheid te raadplegen.",
        "Zorg vóór vertrek dat uw paspoort geldig is voor het hele verblijf, dat u een geldige UK ETA heeft die aan dat paspoort is gekoppeld, en dat u een reisverzekering heeft.",
        "Actuele informatie over de situatie en het dreigingsniveau wordt gepubliceerd door officiële bronnen — de Britse overheid (GOV.UK) en de betrokken diplomatieke vertegenwoordigingen. Bij noodgevallen in het VK belt u het alarmnummer 999.",
        "Bron: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
