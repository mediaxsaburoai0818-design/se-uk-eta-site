import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（nl・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "inreizen-en-visum",
    group: "travel",
    hub: true,
    title: "Inreizen in het Verenigd Koninkrijk en visum: gids 2026",
    description: `Inreisregels voor het VK: UK ETA voor verblijf tot ${F.staySixMonths} maanden, wanneer u een visum nodig heeft, grenscontrole (eGates), documenten en reizen met kinderen.`,
    h1: "Inreizen in het Verenigd Koninkrijk en visum",
    lead: `Voor toerisme, zaken, familiebezoek of transit tot ${F.staySixMonths} maanden hebben Nederlanders en Belgen geen visum nodig: een UK ETA volstaat. Een visum is pas nodig voor langer verblijf, studie, werk of vestiging.`,
    card: `ETA of visum, grenscontrole, documenten en reizen met kinderen in één overzicht.`,
    sections: [
      { h: `ETA of visum? Verblijf tot ${F.staySixMonths} maanden`, blocks: [
        `Voor toerisme, zaken, familiebezoek of transit en een verblijf van maximaal ${F.staySixMonths} maanden hebben EU-burgers, dus ook Nederlanders en Belgen, geen visum nodig: een UK ETA (Electronic Travel Authorisation) volstaat. U vraagt hem online aan en de meeste aanvragers krijgen binnen enkele minuten een automatische beslissing. Vraag hem toch minstens ${F.decisionDays} werkdagen vóór vertrek aan, omdat sommige aanvragen extra controle kunnen vereisen.`,
        `Een ETA kost ${F.fee}, is ${F.validYears} jaar geldig en geldt voor meerdere reizen. Meer leest u in [Wat is de UK ETA](/nl/wat-is-de-eta/).`,
      ] },
      { h: "Wanneer u een visum nodig heeft", blocks: [
        `Een Brits visum is nodig voor een verblijf langer dan ${F.staySixMonths} maanden en voor reizen voor langdurige studie, werk of vestiging. De meest voorkomende soorten zijn:`,
        { ul: [
          "Studentenvisum: voor langdurige studie (meestal 2 tot 5 jaar, afhankelijk van de opleiding).",
          "Werkvisum: voor werk in het VK; het type hangt af van het aanbod en uw kwalificaties.",
          "Gezinsvisum: om u te herenigen met een familielid dat in het VK woont.",
          "Youth Mobility Scheme: voor jongeren uit bepaalde landen (verblijf tot 2 jaar).",
        ] },
      ] },
      { h: "Grenscontrole: eGates en handmatige paspoortcontrole", blocks: [
        "Op Britse luchthavens verloopt de grenscontrole via automatische eGates (op basis van een biometrisch paspoort) of bij een balie met een grensbeambte. eGates versnellen de paspoortcontrole; bij vragen over het doel van uw reis kan een gesprek met een beambte volgen. Wie de automatische poortjes mag gebruiken en hoe het stap voor stap werkt, leest u in de gids [Paspoortcontrole en eGates](/nl/paspoortcontrole-en-egates/).",
        "Na de paspoortcontrole volgt de douane. Welke levensmiddelen en goederen u mag meenemen, leest u in de gids [Douaneregels en invoerlimieten](/nl/douaneregels/).",
      ] },
      { h: "Benodigde documenten", blocks: [
        { ul: [
          "Paspoort dat geldig is gedurende het hele verblijf (een nationale identiteitskaart wordt sinds oktober 2021 niet meer geaccepteerd).",
          "UK ETA gekoppeld aan dat paspoort (of het juiste visum bij een langer verblijf).",
          "Ondersteunende documenten: een bevestiging van uw accommodatie, een retourticket en voldoende middelen voor het verblijf kunnen worden gecontroleerd.",
        ] },
      ] },
      { h: "Reizen met kinderen (jonger dan 18 jaar)", blocks: [
        "Iedere reiziger heeft een eigen UK ETA nodig, ongeacht de leeftijd, ook baby's en kinderen. Kinderen die zonder een of beide ouders reizen, kunnen worden gevraagd een document te tonen waaruit blijkt dat de gezaghebbende ouder toestemming geeft voor de reis. Neem bij voorkeur een geboorteakte of een schriftelijke toestemming (in het Engels) mee. Meer in de gids [Met kinderen naar het VK](/nl/met-kinderen-naar-het-vk/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "paspoortvereisten",
    group: "travel",
    title: "Paspoort VK 2026: geldig voor het hele verblijf, id-kaart zelden",
    description: `Nederlanders en Belgen hebben voor het VK een paspoort nodig dat het hele verblijf geldig is. Een id-kaart volstaat zelden, bijvoorbeeld bij settled status.`,
    h1: "Paspoortvereisten voor het Verenigd Koninkrijk: geldigheid en ETA",
    lead: `Als Nederlander, Belg of andere EU-burger heeft u voor Engeland en de rest van het VK een paspoort nodig dat geldig is gedurende uw hele verblijf. Een nationale identiteitskaart volstaat alleen in bepaalde gevallen, bijvoorbeeld als u settled of pre-settled status heeft. Het paspoort is bovendien gekoppeld aan uw ETA (${F.fee}).`,
    card: "Hoe lang uw paspoort geldig moet zijn, de koppeling met de ETA, een paspoort per persoon.",
    sections: [
      { h: "Een paspoort dat het hele verblijf geldig is", blocks: [
        "Voor een bezoek aan het Verenigd Koninkrijk heeft u een geldig paspoort nodig, dat in de regel geldig moet zijn gedurende uw hele verblijf.",
        "Voor veel nationaliteiten geldt meestal geen extra eis, zoals dat het paspoort nog zes maanden na aankomst geldig moet zijn. De eisen kunnen wel per nationaliteit verschillen, dus controleer vóór vertrek op gov.uk wat voor uw land geldt.",
      ] },
      { h: "De ETA is gekoppeld aan het paspoort", blocks: [
        "Een ETA is gekoppeld aan het paspoort waarmee u de aanvraag deed, en u reist met hetzelfde paspoort dat u in de aanvraag heeft opgegeven.",
        "Vernieuwt of vervangt u uw paspoort, dan moet u in de regel een nieuwe ETA aanvragen voor het nieuwe paspoort. Het is daarom verstandig de geldigheid van uw paspoort ruim op tijd te controleren voordat u de ETA aanvraagt.",
      ] },
      { h: "Iedere reiziger een eigen paspoort, ook baby's", blocks: [
        "Iedere reiziger, ook baby's en kinderen, heeft in de regel een eigen paspoort nodig om naar het Verenigd Koninkrijk te reizen, en daarnaast een eigen ETA. Meer leest u in de gids [Met kinderen naar het VK](/nl/met-kinderen-naar-het-vk/). Een paspoort voor een kind regelen kan tijd kosten, dus begin op tijd.",
      ] },
      { h: "Meerdere paspoorten of dubbele nationaliteit", blocks: [
        "Heeft u een dubbele nationaliteit of meerdere paspoorten, dan reist u in de regel in met het paspoort waaraan uw ETA is gekoppeld. Zorg er dus voor dat de ETA hoort bij het paspoort waarmee u daadwerkelijk wilt reizen.",
      ] },
      { h: "Volgende stappen voor de reis", blocks: [
        "Is uw paspoort in orde, dan kunt u [de UK ETA aanvragen](/nl/hoe-aanvragen/) en de aanvraag volgen via [de statuscontrole](/nl/status-controleren/). Bij aankomst gaat u door [de paspoortcontrole en eGates](/nl/paspoortcontrole-en-egates/); wat u mag invoeren staat in de gids over [de douane in het VK](/nl/douaneregels/). De algemene inreisregels vindt u in [Inreizen in het Verenigd Koninkrijk en visum](/nl/inreizen-en-visum/).",
      ] },
    ],
    faq: [
      { q: "Hoe lang moet mijn paspoort geldig zijn voor een reis naar het VK?", a: "Voor een bezoek aan het Verenigd Koninkrijk heeft u in de regel een geldig paspoort nodig dat geldig is gedurende uw hele verblijf. Voor veel nationaliteiten geldt meestal geen extra eis, zoals zes maanden extra geldigheid na aankomst, maar de eisen kunnen verschillen. Controleer daarom vóór vertrek op gov.uk wat voor uw land geldt." },
      { q: "Aan welk paspoort is de ETA gekoppeld?", a: "Een ETA is gekoppeld aan het paspoort waarmee u de aanvraag deed, en u reist met datzelfde paspoort. Vernieuwt of vervangt u uw paspoort, dan moet u in de regel een nieuwe ETA aanvragen voor het nieuwe paspoort. Heeft u een dubbele nationaliteit en meerdere paspoorten, dan reist u in met het paspoort waaraan de ETA is gekoppeld." },
      { q: "Heeft een kind een eigen paspoort nodig voor het VK?", a: "Alle reizigers, ook baby's, hebben in de regel een eigen paspoort nodig om naar het Verenigd Koninkrijk te reizen. Daarnaast heeft iedere reiziger een eigen ETA nodig. Controleer de eisen ruim op tijd, want een paspoort voor een kind regelen kan tijd kosten." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "paspoortcontrole-en-egates",
    group: "travel",
    title: "Paspoortcontrole in het VK: eGates op de luchthavens (2026)",
    description: "Met een EU-paspoort en een geldige UK ETA gebruikt u de eGates: geen vragen, geen stempel. Vanaf 8 juli 2026 mogen ook kinderen vanaf 8 jaar door de eGates.",
    h1: "Paspoortcontrole in het Verenigd Koninkrijk en eGates",
    lead: "Met een paspoort van een EU-land, dus ook Nederland of België, en een geldige UK ETA kunt u de automatische eGates gebruiken: geen vragen en geen stempel. Sinds 8 juli 2026 mogen ook kinderen vanaf 8 jaar erdoor.",
    card: "Wie door de eGates mag, hoe ze werken en wat er per 8 juli 2026 verandert voor gezinnen.",
    sections: [
      { h: "Nieuw vanaf 8 juli 2026: eGates vanaf 8 jaar", blocks: [
        "Vanaf 8 juli 2026 mogen kinderen van 8 jaar en ouder de eGates gebruiken; eerder lag de grens op 10 jaar. Er gelden twee voorwaarden: het kind moet minstens 120 cm lang zijn, en kinderen van 8 tot en met 17 jaar moeten met een volwassene reizen.",
        "Voor veel gezinnen betekent dit dat het hele gezelschap nu door de automatische poortjes kan, zonder in de rij te staan voor de balie met een grensbeambte.",
      ] },
      { h: "Wie mag de eGates gebruiken", blocks: [
        "De eGates staan open voor houders van een paspoort van:",
        { ul: [
          "alle EU-landen (waaronder Nederland en België),",
          "IJsland, Liechtenstein, Noorwegen en Zwitserland,",
          "Australië, Canada, Japan, Nieuw-Zeeland, Singapore, Zuid-Korea en de Verenigde Staten.",
        ] },
        "Voorwaarde is dat u een geldige reistoestemming heeft. Voor Nederlanders en Belgen betekent dat in de praktijk een geldige UK ETA (of een eVisa). Heeft u die nog niet, lees dan [hoe u de UK ETA aanvraagt](/nl/hoe-aanvragen/).",
        "Op 15 luchthavens en treinterminals in het VK staan meer dan 290 eGates, onder meer op [de luchthavens van Londen](/nl/luchthavens-londen/) zoals Heathrow.",
      ] },
      { h: "Zo werkt een eGate: geen vragen, geen stempel", blocks: [
        { ul: [
          "Leg uw biometrische paspoort, opengeslagen op de pagina met de foto, op de lezer.",
          "Kijk in de camera: het systeem vergelijkt uw gezicht met de foto in het paspoort.",
          "Het poortje gaat open en u loopt door, zonder gesprek met een beambte en zonder inreisstempel in uw paspoort.",
        ] },
        "Herkent het poortje u niet (bijvoorbeeld door een versleten paspoort), dan wordt u gewoon naar de balie met een grensbeambte verwezen.",
      ] },
      { h: "Handmatige paspoortcontrole: de 5 mogelijke vragen", blocks: [
        "Gaat u langs een grensbeambte, dan kunt u vragen krijgen over:",
        { ul: [
          "Het doel van de reis: toerisme, zaken, familiebezoek.",
          "De duur van het verblijf: hoeveel dagen u blijft.",
          "De accommodatie: het adres van het hotel of van uw gastheer.",
          "De terugreis: datum en boeking van de reis naar huis.",
          "Financiële middelen: voldoende geld voor het verblijf.",
        ] },
      ] },
      { h: "Benodigde documenten", blocks: [
        { ul: [
          "Een biometrisch paspoort dat geldig is gedurende het hele verblijf.",
          "Een geldige UK ETA: die is elektronisch gekoppeld aan het paspoort en hoeft niet te worden afgedrukt; bewaar de goedkeuringsmail toch voor de zekerheid.",
        ] },
        "Twijfelt u over uw aanvraag, lees dan hoe u [de status van uw ETA-aanvraag controleert](/nl/status-controleren/). Voor overstappen via het VK gelden aparte regels.",
      ] },
      { h: "Gezinnen met kinderen: wat er geldt", blocks: [
        { ul: [
          "Kinderen vanaf 8 jaar (en minstens 120 cm lang) gebruiken de eGates; kinderen van 8 tot en met 17 jaar altijd samen met een volwassene.",
          "Kinderen jonger dan 8 jaar gaan samen met hun ouders langs de balie met een grensbeambte.",
          "Ieder kind, ook een baby, heeft een eigen UK ETA nodig.",
          "De algemene inreisregels vindt u in [Inreizen in het Verenigd Koninkrijk en visum](/nl/inreizen-en-visum/).",
        ] },
      ] },
      { h: "Na de paspoortcontrole: de douane", blocks: [
        "Na de paspoortcontrole volgt de douanecontrole. Let op: het is verboden vlees en zuivelproducten uit de EU mee te nemen naar het Verenigd Koninkrijk. Meer in de gids [Douaneregels en invoerlimieten](/nl/douaneregels/).",
      ] },
    ],
    faq: [
      { q: "Kan ik de eGates gebruiken met een Nederlands of Belgisch paspoort?", a: "Ja. De eGates staan open voor paspoorthouders uit alle EU-landen (en IJsland, Liechtenstein, Noorwegen en Zwitserland, plus Australië, Canada, Japan, Nieuw-Zeeland, Singapore, Zuid-Korea en de Verenigde Staten), op voorwaarde dat u een geldige reistoestemming heeft, zoals een UK ETA of een eVisa." },
      { q: "Vanaf welke leeftijd mogen kinderen de eGates gebruiken?", a: "Sinds 8 juli 2026 mogen kinderen vanaf 8 jaar de eGates gebruiken (eerder gold 10 jaar). Het kind moet minstens 120 cm lang zijn, en kinderen van 8 tot en met 17 jaar moeten samen met een volwassene reizen." },
      { q: "Krijg ik een stempel in mijn paspoort bij een eGate?", a: "Nee. Bij een eGate stelt geen beambte vragen en wordt er geen inreisstempel in het paspoort gezet. Uw UK ETA is elektronisch gekoppeld aan uw paspoort." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "douaneregels",
    group: "travel",
    title: "Wat mag u meenemen naar Engeland? Douaneregels VK (2026)",
    description: "Naar het VK: 4 l sterke drank, 18 l wijn, 42 l bier en 200 sigaretten belastingvrij. Geen vlees of zuivel uit de EU. Contant geld vanaf £10 000 aangeven.",
    h1: "Wat mag u meenemen naar Engeland? De douane in het VK",
    lead: "De belangrijkste regel: uit de EU mag u geen vlees en zuivelproducten meenemen naar het Verenigd Koninkrijk. Hieronder leest u welke levensmiddelen wel mogen, welke uitzondering geldt voor babyvoeding, de vrijstellingen voor alcohol en tabak en wanneer u contant geld moet aangeven.",
    card: "Geen vlees of zuivel uit de EU, vrijstellingen voor alcohol en tabak, cash vanaf £10 000.",
    sections: [
      { h: "Regel 1: geen vlees en geen zuivel uit de EU", blocks: [
        "Uit de EU is het verboden vlees en zuivelproducten mee te nemen naar Groot-Brittannië (Engeland, Schotland, Wales). Het verbod geldt voor:",
        { ul: [
          "Zuivelproducten: kaas, melk, boter, yoghurt.",
          "Vlees: varken, rund, schaap, geit en wild en producten daarvan, waaronder salami, worst, ham en broodjes met vlees of kaas.",
        ] },
        "De regel geldt ook voor kleine hoeveelheden in de handbagage: een broodje ham dat u op de luchthaven koopt, moet vóór de controle op of weggegooid zijn.",
      ] },
      { h: "De uitzondering: babyvoeding (tot 2 kg)", blocks: [
        "Zuigelingenvoeding, babyvoeding en speciale voeding voor medisch gebruik zijn toegestaan tot 2 kg per persoon, mits in ongeopende merkverpakking en zonder dat ze vóór gebruik gekoeld hoeven te worden.",
      ] },
      { h: "Levensmiddelen die u zonder problemen kunt meenemen", blocks: [
        { ul: [
          "Brood (maar geen broodjes met vlees of zuivel).",
          "Gebak zonder verse room, koekjes en chocolade.",
          "Pasta en verpakte soepen.",
          "Vis, eieren en honing: toegestaan voor eigen gebruik.",
        ] },
        "Twijfelt u, controleer dan vóór vertrek het specifieke product op GOV.UK: de regels verschillen per categorie levensmiddelen.",
      ] },
      { h: "Alcohol en tabak: belastingvrije hoeveelheden bij aankomst in het VK", blocks: [
        { table: { head: ["Categorie", "Belastingvrije hoeveelheid"], rows: [
          ["Bier", "42 liter"],
          ["Niet-mousserende wijn", "18 liter"],
          ["Sterke drank (meer dan 22%)", "4 liter of 9 liter dranken tot 22%"],
          ["Sigaretten", "200 stuks (of 50 sigaren of 250 g tabak)"],
          ["Overige goederen (cadeaus, souvenirs)", "tot £390 (£270 bij aankomst met een privévliegtuig of privéboot)"],
        ] } },
        "Alles boven deze hoeveelheden moet u aangeven en de bijbehorende heffingen moet u betalen. Dit zijn de hoeveelheden die gelden bij aankomst in het Verenigd Koninkrijk; voor de terugreis naar huis gelden de regels van uw eigen land.",
      ] },
      { h: "Contant geld: aangifteplicht vanaf £10 000", blocks: [
        "Heeft u £10 000 of meer bij u (contant, inclusief het overeenkomstige bedrag in andere valuta), dan bent u verplicht dat aan te geven: online vóór de reis of in de rode doorgang bij aankomst. Wie geen aangifte doet, kan het hele bedrag in beslag genomen zien worden en een boete krijgen van maximaal £5 000.",
      ] },
      { h: "Sancties en hoe de controle verloopt", blocks: [
        "Verboden levensmiddelen kunnen aan de grens in beslag worden genomen, en wie zonder aangifte boven de vrijstellingen voor alcohol en tabak uitkomt, kan de goederen kwijtraken en een sanctie krijgen. Heeft u iets aan te geven, kies dan voor de zekerheid de rode doorgang.",
        "De douanecontrole volgt na de paspoortcontrole: lees hoe [de paspoortcontrole en de eGates](/nl/paspoortcontrole-en-egates/) werken. Vergeet niet dat u voor de inreis een geldige [UK ETA](/nl/hoe-aanvragen/) nodig heeft; de status van uw aanvraag ziet u via [de statuscontrole](/nl/status-controleren/). De algemene inreisregels vindt u in [Inreizen in het Verenigd Koninkrijk en visum](/nl/inreizen-en-visum/).",
      ] },
    ],
    faq: [
      { q: "Mag ik kaas of vleesproducten uit Nederland of België meenemen naar Engeland?", a: "Nee. Uit de EU is het verboden vlees (varken, rund, schaap, geit, wild) en vleesproducten en zuivelproducten (kaas, melk, boter, yoghurt) mee te nemen naar Groot-Brittannië. De producten kunnen aan de grens in beslag worden genomen." },
      { q: "Hoeveel sigaretten en alcohol mag ik belastingvrij meenemen naar het VK?", a: "200 sigaretten (of 50 sigaren of 250 g tabak), 42 liter bier, 18 liter niet-mousserende wijn en 4 liter sterke drank boven 22% of 9 liter alcoholische dranken tot 22%." },
      { q: "Moet ik contant geld aangeven bij aankomst in het VK?", a: "Ja, als u £10 000 of meer bij u heeft. U doet de aangifte vooraf online of in de rode doorgang bij aankomst. Wie geen aangifte doet, riskeert inbeslagname van het hele bedrag en een boete van maximaal £5 000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "medicijnen-meenemen",
    group: "travel",
    title: "Medicijnen meenemen naar het VK: regels en verklaring (2026)",
    description: "Neem tot drie maanden voorraad eigen medicijnen mee naar het VK, met bewijs dat ze aan u zijn voorgeschreven. Controlled drugs kunnen een vergunning vereisen.",
    h1: "Medicijnen meenemen naar het Verenigd Koninkrijk",
    lead: "U mag uw eigen medicijnen meenemen naar het Verenigd Koninkrijk, tot drie maanden voorraad, zolang u kunt aantonen dat ze aan u zijn voorgeschreven. Voor medicijnen met gereguleerde stoffen (controlled drugs) gelden extra regels.",
    card: "Tot drie maanden voorraad, welke verklaring u meeneemt en wat geldt voor controlled drugs.",
    sections: [
      { h: "Tot drie maanden voorraad", blocks: [
        "U mag tot drie maanden voorraad van uw eigen medicijnen voor persoonlijk gebruik meenemen naar het Verenigd Koninkrijk. U moet kunnen aantonen dat de medicijnen aan u zijn voorgeschreven.",
        "Bewaar de medicijnen waar mogelijk in de originele verpakking. Dan kunt u gemakkelijker laten zien wat het is en dat ze van u zijn, mocht u er aan de grens naar gevraagd worden.",
      ] },
      { h: "Verklaring en recept om mee te nemen", blocks: [
        "Neem een verklaring of recept mee als bewijs dat het medicijn aan u is voorgeschreven. Het document vermeldt bij voorkeur:",
        { ul: [
          "De naam van het medicijn.",
          "Dosering en sterkte.",
          "Hoe vaak u het medicijn inneemt.",
          "De handtekening of het registratienummer van de voorschrijvende arts.",
        ] },
        "Houd de medicijnen waar het kan in de originele verpakking, zodat de gegevens op de verpakking overeenkomen met de verklaring.",
      ] },
      { h: "Medicijnen met gereguleerde stoffen (controlled drugs)", blocks: [
        "Sommige medicijnen bevatten stoffen die onder de drugswetgeving vallen (controlled drugs) en waarvoor extra regels gelden. Vraag uw arts of apotheker of dat voor uw medicijnen geldt.",
        "Is dat zo, dan kunt u een persoonlijke vergunning (personal licence) nodig hebben. Neem in dat geval minstens 15 werkdagen vóór de reis contact op met het Britse Home Office (Drug and Firearms Licensing Unit).",
        "Middelen die onder Schedule 1 vallen, mogen zonder vergunning niet worden ingevoerd.",
      ] },
      { h: "Vloeistoffen en spuiten in de handbagage", blocks: [
        "Vloeistoffen en spuiten in de handbagage vallen onder de gewone beveiligingsregels van de luchthaven. Neemt u vloeibare medicijnen of injectiemateriaal mee, houd de verklaring dan ook bij de beveiligingscontrole bij de hand. Meer in de gids over [vloeistoffen en de beveiligingscontrole](/nl/vloeistoffen-handbagage/).",
      ] },
      { h: "Zorg ter plaatse in het VK", blocks: [
        "Heeft u tijdens uw verblijf zorg of nieuwe medicijnen nodig, dan is het handig te weten hoe het Britse zorgstelsel (NHS) werkt.",
      ] },
    ],
    faq: [
      { q: "Mag ik mijn medicijnen meenemen naar het VK?", a: "Ja, u mag tot drie maanden voorraad van uw eigen medicijnen voor persoonlijk gebruik meenemen. Neem bewijs mee dat de medicijnen aan u zijn voorgeschreven en bewaar ze bij voorkeur in de originele verpakking." },
      { q: "Welke documenten heb ik nodig om medicijnen mee te nemen?", a: "Neem een verklaring of recept mee met de naam van het medicijn, de dosering en sterkte, hoe vaak u het inneemt en de handtekening of het registratienummer van de voorschrijvende arts. Houd de medicijnen waar het kan in de originele verpakking." },
      { q: "Wat geldt voor medicijnen met gereguleerde stoffen?", a: "Sommige medicijnen bevatten gereguleerde stoffen (controlled drugs) en vallen onder extra regels. Vraag uw arts of apotheker of dat voor uw medicijnen geldt. Is dat zo, dan kunt u een persoonlijke vergunning nodig hebben en neemt u minstens 15 werkdagen vóór de reis contact op met het Britse Home Office." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "vloeistoffen-handbagage",
    group: "travel",
    title: "Vloeistoffen in de handbagage op Britse luchthavens (2026)",
    description: "Veel Britse luchthavens staan max. 100 ml per verpakking in de handbagage toe (zakje max. 1 liter); sommige 2 liter dankzij CT-scanners. Check uw luchthaven.",
    h1: "Vloeistoffen in de handbagage en de beveiligingscontrole op Britse luchthavens",
    lead: "Op veel Britse luchthavens geldt nog een grens van 100 ml per verpakking voor vloeistoffen in de handbagage. Sommige luchthavens staan dankzij nieuwe scanners meer toe, maar de regels verschillen: controleer altijd wat geldt op uw vertrekluchthaven.",
    card: "De 100 ml-regel, de nieuwe CT-scanners en uitzonderingen voor babyvoeding en medicijnen.",
    sections: [
      { h: "De 100 ml-regel en het doorzichtige zakje", blocks: [
        "Op veel Britse luchthavens geldt dat vloeistoffen in de handbagage in verpakkingen van maximaal 100 ml per stuk moeten zitten. Een verpakking met een inhoud van meer dan 100 ml wordt meestal niet geaccepteerd, ook als die niet helemaal vol is.",
        { ul: [
          "De verpakkingen moeten meestal samen in één doorzichtig, hersluitbaar zakje van maximaal 1 liter.",
          "De regel is doorgaans één zakje per persoon.",
          "Ook gels, pasta's, crèmes, sprays en vergelijkbare producten tellen vaak als vloeistof.",
        ] },
        "Omdat de details per luchthaven kunnen verschillen, is het verstandig vóór de reis de actuele regels van uw vertrekluchthaven te controleren.",
      ] },
      { h: "Nieuwe CT-scanners: op sommige luchthavens een hogere grens", blocks: [
        "Een deel van de Britse luchthavens heeft nieuwe CT-scanners in gebruik genomen en kan daardoor vloeistoffen in verpakkingen tot 2 liter toestaan. De invoering gaat echter in verschillend tempo en de situatie verschilt per luchthaven.",
        "Ook halverwege 2026 geldt de 100 ml-grens nog op veel luchthavens. Ga er dus niet van uit dat de hogere grens geldt, maar controleer altijd de laatste regels van de luchthaven waarvan u vertrekt, en bij voorkeur ook van uw terugvluchtluchthaven.",
      ] },
      { h: "Uitzonderingen: babyvoeding, moedermelk en medicijnen", blocks: [
        "Babyvoeding en zuigelingenvoeding en noodzakelijke medicijnen mogen in bepaalde gevallen in grotere hoeveelheden mee dan de gewone vloeistofgrens. Meestal moet u ze dan wel bij de controle melden aan het personeel.",
        "Welke hoeveelheden en voorwaarden gelden, kan per luchthaven verschillen. Houd een recept of andere documentatie bij de hand en controleer vooraf wat er geldt waar u reist. Reist u met kinderen, lees dan ook de gids [Met kinderen naar het VK](/nl/met-kinderen-naar-het-vk/).",
      ] },
      { h: "Elektronica en grotere voorwerpen", blocks: [
        "Grotere elektronica, zoals laptops, moet u mogelijk uit de tas halen en apart in de bak leggen volgens de aanwijzingen van het personeel. Ook dit kan verschillen per luchthaven en per apparatuur die bij de controle wordt gebruikt, dus volg de instructies ter plaatse.",
      ] },
      { h: "Zo bereidt u zich voor op de controle", blocks: [
        "De controle verloopt soepeler als u de vloeistoffen thuis al in het doorzichtige zakje doet, babyvoeding en medicijnen makkelijk bereikbaar houdt om ze te kunnen melden, en vooraf de actuele regels van uw luchthaven controleert.",
        "De beveiligingscontrole komt vóór de paspoortcontrole: lees hoe [de paspoortcontrole en de eGates](/nl/paspoortcontrole-en-egates/) werken en wat u mag meenemen door [de douane in het VK](/nl/douaneregels/). Vergeet niet dat u voor de inreis een geldige [UK ETA](/nl/hoe-aanvragen/) nodig heeft; de status ziet u via [de statuscontrole](/nl/status-controleren/). De algemene inreisregels vindt u in [Inreizen in het Verenigd Koninkrijk en visum](/nl/inreizen-en-visum/).",
      ] },
    ],
    faq: [
      { q: "Hoeveel vloeistof mag ik meenemen in de handbagage op een Britse luchthaven?", a: "Op veel Britse luchthavens geldt vaak een grens van 100 ml per verpakking, samen in één doorzichtig, hersluitbaar zakje van maximaal 1 liter, één zakje per persoon. Sommige luchthavens hebben nieuwe CT-scanners en kunnen tot 2 liter toestaan, maar dat verschilt per luchthaven. Controleer daarom altijd vóór de reis de actuele regels van uw vertrekluchthaven." },
      { q: "Mag ik water meenemen door de beveiligingscontrole?", a: "Water en andere dranken die u na de beveiligingscontrole koopt, mag u meestal mee aan boord nemen. Dranken die u vóór de controle bij u heeft, vallen doorgaans onder de vloeistofregels en moeten mogelijk worden weggegooid als ze boven de grens uitkomen. De regels kunnen per luchthaven verschillen, dus controleer wat er geldt waar u reist." },
      { q: "Mag ik babymelk en medicijnen meenemen door de controle?", a: "Babyvoeding, zuigelingenvoeding en noodzakelijke medicijnen mogen in bepaalde gevallen in grotere hoeveelheden mee dan de gewone vloeistofgrens, mits u ze meldt aan het personeel bij de controle. Welke hoeveelheden en voorwaarden gelden, kan verschillen; controleer het vooraf bij uw luchthaven en houd eventueel een recept of documentatie bij de hand." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alcohol-en-roken",
    group: "travel",
    title: "Leeftijdsgrens alcohol in Engeland: 18 jaar, plus rookregels 2026",
    description: "In Engeland moet u 18 zijn om alcohol te kopen of in een pub te drinken. Op 16 of 17 jaar mag u met een volwassene bier, wijn of cider drinken bij het eten.",
    h1: "Leeftijdsgrens voor alcohol in Engeland, roken en andere regels",
    lead: "In Engeland moet u 18 jaar zijn om alcohol te kopen of in een pub of restaurant te drinken. Bent u 16 of 17 en in gezelschap van een volwassene, dan mag u bij een maaltijd bier, wijn of cider drinken (maar niet kopen) (GOV.UK). Roken is binnen op openbare plaatsen verboden.",
    card: "18 jaar voor alcohol en tabak, rookverbod binnen, vapen, rijden onder invloed.",
    sections: [
      { h: "Wat is de leeftijdsgrens voor alcohol in Engeland? 18 jaar voor alcohol en tabak", blocks: [
        "In het Verenigd Koninkrijk moet u minstens 18 jaar zijn om alcohol en tabak te kopen. Die leeftijdsgrens geldt in winkels, bars, restaurants en andere verkooppunten.",
        "Winkels en horeca kunnen om een identiteitsbewijs vragen waaruit uw leeftijd blijkt, ook als u er ouder uitziet. Houd dus een geldig identiteitsbewijs bij de hand als u alcohol of tabak wilt kopen.",
      ] },
      { h: "Rookverbod binnen op openbare plaatsen", blocks: [
        "Sinds de invoering van de rookvrije wet in 2007 (Smoke-free law) is roken binnen verboden op alle besloten openbare plaatsen, op werkplekken en in het openbaar vervoer.",
        "Dat betekent dat pubs, restaurants en stations binnen rookvrij zijn. U mag alleen roken in speciaal aangewezen buitenruimtes.",
        { ul: [
          "Binnen: roken verboden op besloten openbare plaatsen en werkplekken.",
          "Openbaar vervoer: rookvrij.",
          "Toegestaan: alleen in aangewezen buitenruimtes.",
        ] },
      ] },
      { h: "Vapen en e-sigaretten", blocks: [
        "De regels voor vapen en e-sigaretten verschillen per plek. Op veel plaatsen is het binnen niet toegestaan, maar dat kan per gebouw en bedrijf verschillen. Volg altijd de borden en de aanwijzingen van het personeel ter plaatse.",
      ] },
      { h: "Rijden onder invloed en alcohol op straat", blocks: [
        "Rijden onder invloed wordt in het Verenigd Koninkrijk streng bestraft, met vastgestelde grenswaarden en sancties. Wilt u er autorijden, zorg dan dat u de regels kent.",
        "Sommige lokale overheden hebben bovendien zones ingesteld waar het drinken van alcohol op straat aan beperkingen is gebonden. Let op lokale borden die zulke beperkingen aangeven.",
      ] },
      { h: "Alcohol en tabak invoeren", blocks: [
        "Voor hoeveel alcohol en tabak u het land mag binnenbrengen, gelden aparte douane- en invoerlimieten (duty-free). Die staan in de gids [Douaneregels en invoerlimieten](/nl/douaneregels/).",
      ] },
    ],
    faq: [
      { q: "Wat is de leeftijdsgrens voor alcohol in Engeland?", a: "In Engeland moet u 18 jaar zijn om alcohol te kopen of in een pub of restaurant te drinken. Bent u 16 of 17 jaar en in gezelschap van een volwassene, dan mag u bij een maaltijd bier, wijn of cider drinken, maar niet kopen (GOV.UK)." },
      { q: "Welke leeftijdsgrens geldt voor het kopen van alcohol en tabak in het VK?", a: "U moet minstens 18 jaar zijn om alcohol en tabak te kopen in het Verenigd Koninkrijk. Winkels en bars kunnen om een identiteitsbewijs vragen waaruit uw leeftijd blijkt." },
      { q: "Mag ik roken in pubs en winkels?", a: "Nee. Roken is binnen verboden op alle besloten openbare plaatsen, op werkplekken en in het openbaar vervoer. Pubs, restaurants en stations zijn binnen rookvrij; u mag alleen roken in speciaal aangewezen buitenruimtes." },
      { q: "Mag ik een e-sigaret gebruiken (vapen)?", a: "De regels voor e-sigaretten en vapen verschillen per plek. Binnen is het vaak niet toegestaan. Volg altijd de borden en de aanwijzingen van het personeel ter plaatse." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "met-kinderen-naar-het-vk",
    group: "travel",
    title: "Met kinderen naar het VK: ETA en paspoort per kind (2026)",
    description: "Iedereen, ook een baby, heeft een eigen ETA en een eigen paspoort nodig voor het VK. Border Force kan bewijs van verwantschap vragen: zo bereidt u de reis voor.",
    h1: "Met kinderen naar het Verenigd Koninkrijk",
    lead: "Ieder kind heeft een eigen ETA en een eigen paspoort nodig, ook een baby. Border Force kan bovendien vragen om bewijs van uw relatie met het kind, vooral als u een andere achternaam heeft.",
    card: "Eigen ETA en paspoort per kind, en welke bewijzen van verwantschap u meeneemt.",
    sections: [
      { h: "Iedere reiziger een eigen ETA en een eigen paspoort", blocks: [
        "Alle reizigers, ook baby's, hebben een eigen ETA en een eigen paspoort nodig. Een kind kan niet reizen op de ETA van een ouder: het is één ETA per persoon.",
      ] },
      { h: "Border Force kan bewijs van verwantschap vragen", blocks: [
        "Reist u met kinderen, dan kan Border Force (de grenscontrole) om bewijs van uw relatie vragen, vooral als u een andere achternaam heeft of als u niet de ouder van het kind bent. Geldig bewijs kan zijn:",
        { ul: [
          "Een geboorte- of adoptieakte.",
          "Een huwelijks- of echtscheidingsakte (als u de ouder bent maar een andere achternaam heeft).",
          "Een toestemmingsbrief (consent letter) van de ouder (als u niet de ouder van het kind bent).",
        ] },
      ] },
      { h: "Neem de documenten mee", blocks: [
        "Ook voor toekomstige reizen is het handig zulke bewijzen van verwantschap bij u te hebben. Dat maakt de inreis soepeler als u er bij de grenscontrole naar wordt gevraagd.",
      ] },
      { h: "Goed om te weten voor de inreis", blocks: [
        "Vraag voor elk gezinslid een [UK ETA](/nl/hoe-aanvragen/) aan en volg de aanvraag via [de statuscontrole](/nl/status-controleren/). De algemene inreisregels vindt u in [Inreizen in het Verenigd Koninkrijk en visum](/nl/inreizen-en-visum/) en wat u mag meenemen in [Douaneregels en invoerlimieten](/nl/douaneregels/).",
      ] },
    ],
    faq: [
      { q: "Heeft een kind ook een ETA nodig voor het VK?", a: "Ja. Alle reizigers, ook baby's, hebben een eigen ETA nodig. Een kind kan niet reizen op de ETA van een ouder: het is één ETA per persoon." },
      { q: "Kan een kind reizen op het paspoort of de ETA van een ouder?", a: "Nee. Iedere reiziger heeft een eigen paspoort en een eigen ETA nodig, ongeacht de leeftijd. U kunt niet inreizen op het paspoort of de ETA van iemand anders." },
      { q: "Wat geldt als ik reis met een kind dat een andere achternaam heeft?", a: "Border Force kan bewijs van verwantschap vragen, vooral als u een andere achternaam heeft of niet de ouder van het kind bent. Geldig bewijs kan een geboorte- of adoptieakte zijn, een huwelijks- of echtscheidingsakte, of een toestemmingsbrief (consent letter) van de ouder." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "luchthavens-londen",
    group: "travel",
    title: "Gatwick is de op één na grootste luchthaven: 5 van Londen",
    description: "De op één na grootste luchthaven van Engeland en het VK is Londen Gatwick (42,8 mln. passagiers in 2025 volgens de CAA), na Heathrow. De 5 luchthavens kort.",
    h1: "De 5 grootste luchthavens van Londen",
    lead: "De op één na grootste luchthaven van Engeland en het Verenigd Koninkrijk is Londen Gatwick, met 42,8 miljoen passagiers in 2025, na Heathrow (84,5 miljoen). Op drie staat Manchester (32,1 miljoen), volgens de Britse luchtvaartautoriteit CAA.",
    card: "Heathrow, Gatwick, Stansted, Luton en London City: ligging en reistijd naar het centrum.",
    sections: [
      { h: "Vijf luchthavens rond Londen", blocks: [
        "Londen wordt bediend door vijf grote luchthavens. Uw keuze bepaalt de route, de reistijd en de kosten om in het centrum te komen. Hieronder een korte beschrijving van elk.",
      ] },
      { h: "Heathrow (LHR) – West-Londen", blocks: [
        "De grootste luchthaven van het Verenigd Koninkrijk en het belangrijkste internationale knooppunt (terminals 2-5). Meer in de gids [Luchthaven Heathrow (LHR)](/nl/luchthaven-heathrow/).",
        "Reis: Heathrow Express ca. 15 min, Elizabeth Line ca. 30 min, metro ca. 50 min.",
      ] },
      { h: "Gatwick (LGW) – Zuid-Londen", blocks: [
        "De op één na grootste luchthaven van Engeland en het Verenigd Koninkrijk (na Heathrow); zowel traditionele als prijsvechtende maatschappijen (North en South Terminal).",
        "Reis: Gatwick Express ca. 30 min, Thameslink ca. 30-45 min.",
      ] },
      { h: "Stansted (STN) – Noordoost-Londen", blocks: [
        "Thuisbasis van Ryanair, veel Europese verbindingen; één terminal, overzichtelijk.",
        "Reis: Stansted Express ca. 50 min, bus ca. 60-90 min.",
      ] },
      { h: "Luton (LTN) – ten noorden van Londen", blocks: [
        "Basis van easyJet en Wizz Air; één terminal, met een shuttle naar het station.",
        "Reis: Luton Airport Express ca. 30 min, Thameslink ca. 30 min.",
      ] },
      { h: "London City (LCY) – centraal Londen (het dichtstbij)", blocks: [
        "Het dichtst bij het centrum; populair bij zakenreizigers.",
        "Reis: DLR ca. 15-25 min naar het centrum.",
        { note: "De reistijden zijn bij benadering en hangen af van uw bestemming in Londen en het tijdstip." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  "heathrow": {
    slug: "luchthaven-heathrow",
    group: "travel",
    title: "Luchthaven Heathrow (LHR): terminals, controle en vervoer",
    description: "Gids voor Londen Heathrow: terminals 2-5, grenscontrole (eGates) en vervoer naar centraal Londen met Heathrow Express, Elizabeth Line, metro en bus.",
    h1: "Luchthaven Heathrow (LHR)",
    lead: "Heathrow is de grootste luchthaven van het Verenigd Koninkrijk en de belangrijkste toegangspoort tot Londen. Hieronder vindt u de terminals, hoe de grenscontrole verloopt en hoe u in het centrum komt.",
    card: "Terminals 2-5, eGates bij aankomst en de snelste weg naar centraal Londen.",
    sections: [
      { h: "Ligging en terminals", blocks: [
        "Heathrow (IATA-code: LHR) ligt in West-Londen. Het is de grootste en drukste luchthaven van het VK, met verbindingen uit de hele wereld. Terminals 2, 3, 4 en 5 zijn in gebruik. Controleer het terminalnummer op uw ticket, want dat bepaalt zowel uw route als het inchecken.",
      ] },
      { h: "Grenscontrole na aankomst", blocks: [
        `Na aankomst gaat u door de grenscontrole via automatische eGates (op basis van een biometrisch paspoort) of bij een balie met een beambte. Houd er rekening mee dat u voor de inreis een geldig paspoort nodig heeft en een geldige [UK ETA](/nl/wat-is-de-eta/) die aan dat paspoort is gekoppeld (bij een verblijf tot ${F.staySixMonths} maanden). Meer in de gids [Paspoortcontrole en eGates](/nl/paspoortcontrole-en-egates/).`,
      ] },
      { h: "Naar centraal Londen", blocks: [
        { table: { head: ["Vervoermiddel", "Reistijd bij benadering"], rows: [
          ["Heathrow Express (sneltrein)", "ca. 15 minuten"],
          ["Elizabeth Line", "ca. 30 minuten"],
          ["Metro (Piccadilly line)", "ca. 50 minuten"],
          ["Bus / coach", "ca. 60-90 minuten"],
        ] } },
        { note: "De reistijden zijn bij benadering en hangen af van de terminal, het tijdstip en uw bestemming in Londen." },
        "Meer over de luchthavens van Londen: [De 5 grootste luchthavens van Londen](/nl/luchthavens-londen/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
