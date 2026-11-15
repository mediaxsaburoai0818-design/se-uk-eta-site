import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（nl・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "ov-londen-oyster-contactloos",
    group: "travel",
    title: "Betalen voor het OV in Londen: Oyster en contactloos (2026)",
    description:
      "In de metro, bussen en treinen van Londen betaalt u contactloos, met uw telefoon of een Oyster-kaart: zelfde prijs, met dag- en weekplafond. Bedragen bij TfL.",
    h1: "Betalen voor het openbaar vervoer in Londen: Oyster en contactloos",
    lead:
      "In de metro, bussen en treinen van Londen betaalt u het makkelijkst door een contactloze bankpas, uw telefoon of een Oyster-kaart tegen de lezer te houden. Contactloos en Oyster kosten hetzelfde, en per dag en per week geldt een maximumbedrag.",
    card: "Contactloos of Oyster: zelfde tarief, dag- en weekplafond, geen contant geld in de bus.",
    sections: [
      { h: "Contactloos of Oyster: zo betaalt u", blocks: [
        "Het openbaar vervoer in Londen (metro of Tube, bussen en treinen) werkt met \"pay as you go\": u houdt een contactloze betaalkaart, een telefoon met betaalfunctie of een Oyster-kaart tegen de gele lezer en betaalt per rit.",
        "Contactloos en Oyster hebben hetzelfde tarief. Heeft u al een contactloze kaart of een telefoon met betaalfunctie, dan reist u tegen hetzelfde tarief zonder een Oyster-kaart te kopen. Voor kortstondige bezoekers is contactloos meestal het handigst. Een Visitor Oyster-kaart bestelt u daarentegen vóór vertrek.",
      ] },
      { h: "Prijsplafond (capping): u betaalt niet onbeperkt", blocks: [
        "Er geldt een prijsplafond per dag en per week. Zodra uw ritten samen het plafondbedrag bereiken, betaalt u voor de overige ritten in die periode niets meer. De plafondbedragen verschillen per zone waarin u reist. De bedragen veranderen in de loop van de tijd, dus controleer de actuele cijfers bij TfL in plaats van uit te gaan van een vast bedrag.",
      ] },
      { h: "Metro en trein: in- en uitchecken", blocks: [
        "In de metro en de trein checkt u zowel in bij het instappen als uit bij het uitstappen; anders kan een verkeerd tarief worden afgeschreven. In bussen en trams checkt u alleen in bij het instappen; uitchecken is niet nodig.",
        { ul: [
          "Tube / trein: inchecken bij vertrek, uitchecken bij aankomst.",
          "Bus / tram: alleen inchecken.",
        ] },
      ] },
      { h: "Bussen nemen geen contant geld aan", blocks: [
        "Bussen in Londen accepteren geen contant geld. U kunt alleen betalen met een contactloze kaart, uw telefoon of een Oyster-kaart. Zorg dus dat u een werkend contactloos betaalmiddel heeft voordat u instapt.",
      ] },
      { h: "Gebruik elke keer dezelfde kaart", blocks: [
        "Check bij elke rit in met dezelfde kaart of hetzelfde apparaat. Deel niet één contactloze kaart met meerdere reizigers: om het prijsplafond correct te laten berekenen, moet iedere persoon met een eigen betaalmiddel inchecken.",
      ] },
      { h: "Voordat u naar het Verenigd Koninkrijk reist", blocks: [
        "Het openbaar vervoer gebruikt u pas na aankomst. Voor de inreis zelf heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)) en u kunt uw aanvraag volgen via [de statuscontrole](/nl/status-controleren/). Bij aankomst gaat u door de paspoortcontrole en de eGates. Gaat u liever met de auto, lees dan over [autorijden in het VK](/nl/autorijden-in-het-vk/).",
      ] },
    ],
    faq: [
      { q: "Heb ik een Oyster-kaart nodig in Londen?", a: "Niet per se. Met een contactloze betaalkaart of een telefoon met betaalfunctie reist u direct tegen hetzelfde tarief als met Oyster. Contactloos en Oyster kosten evenveel, dus voor bezoekers volstaat meestal een contactloze kaart." },
      { q: "Kan ik in de bus in Londen contant betalen?", a: "Nee. Bussen in Londen accepteren geen contant geld. U betaalt met een contactloze kaart, uw telefoon of een Oyster-kaart door die bij het instappen tegen de lezer te houden." },
      { q: "Wat als ik op één dag veel reis?", a: "Er geldt een prijsplafond (capping) per dag en per week. Zodra u het plafondbedrag heeft bereikt, betaalt u niet meer voor extra ritten. De plafondbedragen verschillen per zone en veranderen in de loop van de tijd; controleer de actuele bedragen bij Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },
  "driving-in-uk": {
    slug: "autorijden-in-het-vk",
    group: "travel",
    title: "Autorijden in het VK: vanaf 17 jaar, met eigen rijbewijs (2026)",
    description:
      "Autorijden in het VK mag vanaf 17 jaar. Bezoekers rijden tot 12 maanden na aankomst met hun geldige eigen rijbewijs. Links rijden, verzekering verplicht.",
    h1: "Mag u in het Verenigd Koninkrijk rijden met een buitenlands rijbewijs?",
    lead:
      "De minimumleeftijd voor het besturen van een personenauto in het VK is 17 jaar. Woont u buiten het VK, dan mag u tot 12 maanden na aankomst rijden met een geldig rijbewijs uit uw eigen land, bijvoorbeeld een Nederlands of Belgisch rijbewijs.",
    card: "Tot 12 maanden rijden met uw eigen rijbewijs, links rijden en verzekering verplicht.",
    sections: [
      { h: "De 12-maandenregel: rijden met uw eigen rijbewijs", blocks: [
        "Woont u buiten het Verenigd Koninkrijk, dan mag u tot 12 maanden rijden met een geldig rijbewijs uit uw eigen land, gerekend vanaf de dag waarop u het land bent binnengekomen. Dat recht geldt voor:",
        { ul: [
          "Personenauto's (tot 3 500 kg en met plaats voor maximaal acht passagiers).",
          "Motorfietsen.",
        ] },
        "Het rijbewijs moet de hele reis geldig zijn. De periode van 12 maanden telt vanaf de dag van aankomst, niet vanaf de afgiftedatum van het rijbewijs.",
      ] },
      { h: "Internationaal rijbewijs (IDP) en vertaling", blocks: [
        "U mag rijden met een geldig rijbewijs uit uw eigen land. Is het rijbewijs niet in het Engels opgesteld, dan wordt een officiële vertaling of een internationaal rijbewijs (IDP) aanbevolen, zodat autoriteiten en verhuurbedrijven de gegevens gemakkelijk kunnen lezen.",
        "De eisen verschillen per land waar het rijbewijs is afgegeven. Controleer uw eigen situatie daarom vóór de reis op GOV.UK: de regels kunnen per land van herkomst anders zijn.",
      ] },
      { h: "Links rijden, minimumleeftijd en verzekering", blocks: [
        { ul: [
          "Links rijden: in het Verenigd Koninkrijk rijdt men aan de linkerkant van de weg.",
          "Minimumleeftijd: 17 jaar voor het besturen van een personenauto.",
          "Een geldige autoverzekering is verplicht om in het Verenigd Koninkrijk te rijden.",
        ] },
        "Controleer vóór u gaat rijden of uw verzekering in het Verenigd Koninkrijk geldig is. Huurt u een auto, dan is de verzekering meestal bij het contract inbegrepen; lees de voorwaarden goed.",
      ] },
      { h: "Grote voertuigen: bussen en vrachtwagens", blocks: [
        "Voor grote voertuigen zoals bussen en vrachtwagens gelden andere regels dan voor personenauto's en motorfietsen. Wilt u zo'n voertuig besturen, controleer dan vóór de reis de specifieke eisen op GOV.UK.",
      ] },
      { h: "ETA en rijbewijs: twee verschillende dingen", blocks: [
        "Een UK ETA is een toestemming om het Verenigd Koninkrijk binnen te komen; hij bepaalt niet of u mag autorijden. Het recht om te rijden valt onder aparte regels voor rijbewijs, leeftijd, verzekering en type voertuig.",
        "Voor de inreis zelf heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)); de status van uw aanvraag ziet u via [de statuscontrole](/nl/status-controleren/). Wat u mag meenemen, staat in de gids over douaneregels en invoergrenzen, en u kunt ook nalezen hoe de paspoortcontrole en de eGates werken.",
      ] },
    ],
    faq: [
      { q: "Mag ik in het VK rijden met mijn Nederlandse of Belgische rijbewijs?", a: "Ja. Bezoekers die buiten het VK wonen, mogen tot 12 maanden na de dag van aankomst een personenauto en motorfiets besturen met een geldig rijbewijs uit hun eigen land." },
      { q: "Heb ik een internationaal rijbewijs (IDP) of vertaling nodig?", a: "U mag rijden met een geldig rijbewijs uit uw eigen land. Is het rijbewijs niet in het Engels, dan wordt een officiële vertaling of een internationaal rijbewijs (IDP) aanbevolen. De regels verschillen per land; controleer uw situatie op gov.uk/driving-nongb-licence." },
      { q: "Vanaf welke leeftijd mag je autorijden in Engeland?", a: "De minimumleeftijd voor een personenauto in Engeland (en de rest van het VK) is 17 jaar; dan kunnen de meeste mensen beginnen met rijlessen. In het VK rijdt men links en een geldige autoverzekering is verplicht." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },
  "money-currency": {
    slug: "geld-en-valuta",
    group: "travel",
    title: "Valuta in Engeland en Schotland 2026: Brits pond, contant en fooi",
    description:
      "De valuta in Engeland, Schotland en Londen is het Britse pond (GBP, £). Contant geld meestal niet nodig: pinnen volstaat vaak. Vanaf £10 000 aangeven.",
    h1: "Valuta in Engeland en Schotland: Brits pond, contant geld en fooi",
    lead:
      "In Engeland, Schotland, Wales en Noord-Ierland betaalt u ook in 2026 met het Britse pond (GBP, £). Hieronder leest u hoeveel contant geld u zonder aangifte mag meenemen, hoe u het handigst geld wisselt en wat gebruikelijk is bij kaartbetalingen en fooi.",
    card: "Brits pond (GBP), kaart volstaat meestal, contant geld vanaf £10 000 aangeven.",
    sections: [
      { h: "Welke valuta gebruikt men in Engeland en Schotland? Het Britse pond (GBP, £)", blocks: [
        "Het betaalmiddel in het Verenigd Koninkrijk is het Britse pond (GBP, £). Euro's en andere valuta worden in gewone winkels doorgaans niet geaccepteerd, dus u heeft ter plaatse een kaart of contante ponden nodig. Ook in Schotland is de valuta het pond. Daar geven Bank of Scotland, Clydesdale Bank en The Royal Bank of Scotland eigen bankbiljetten uit, terwijl de Bank of England de biljetten in Engeland en Wales uitgeeft (bron: Bank of England).",
      ] },
      { h: "Contant geld: aangifteplicht vanaf £10 000", blocks: [
        "Reist u Groot-Brittannië (GB) binnen met £10 000 of meer aan contant geld, inclusief de tegenwaarde in andere valuta, dan bent u verplicht dat bedrag aan te geven. Dat doet u vooraf online of bij aankomst via de rode doorgang. Wie geen aangifte doet, riskeert dat het hele bedrag in beslag wordt genomen en een boete tot £5 000.",
      ] },
      { h: "Heeft u contant geld nodig in Londen en Engeland? Kaart of contant", blocks: [
        "Kaartbetalingen, vooral contactloos, zijn in het Verenigd Koninkrijk zeer gangbaar. In veel situaties kunt u helemaal zonder contant geld, van het openbaar vervoer en cafés tot grotere winkels. Het openbaar vervoer in Londen (TfL) betaalt u contactloos of met een Oyster-kaart (bron: TfL); meer daarover leest u in de gids over [betalen voor het OV in Londen](/nl/ov-londen-oyster-contactloos/).",
        { ul: [
          "Toch kan wat contant geld handig zijn voor kleinere winkels, markten en fooi.",
          "Vraag vóór vertrek bij uw bank na welke kosten gelden voor kaartbetalingen in het buitenland.",
        ] },
      ] },
      { h: "Waar wisselt u geld?", blocks: [
        "U kunt geld wisselen bij banken, wisselkantoren en op luchthavens. Houd er rekening mee dat wisselen op luchthavens vaak een minder gunstige koers oplevert. Vergelijk de koersen voordat u grotere bedragen wisselt.",
      ] },
      { h: "Fooi: gewoonte, geen verplichting", blocks: [
        "Fooi geven is in het Verenigd Koninkrijk een gewoonte en geen wettelijke verplichting. Wat gebruikelijk is, hangt af van de situatie:",
        { ul: [
          "Restaurants: soms wordt een 'service charge' van 10-12,5 % op de rekening gezet; controleer de specificatie. Staat er geen servicetoeslag op, dan is ongeveer 10 % een gangbare richtlijn.",
          "Pub: bij bestellen aan de bar wordt normaal gesproken geen fooi verwacht.",
          "Taxi: naar boven afronden is gebruikelijk.",
        ] },
      ] },
      { h: "Goed om te weten voor de inreis", blocks: [
        "Contant geld geeft u zo nodig aan bij de douane, die na de paspoortcontrole komt; zie de gids over douaneregels en invoergrenzen. Voor de inreis heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)) en u kunt uw aanvraag volgen via [de statuscontrole](/nl/status-controleren/). Wilt u een auto huren, lees dan over [autorijden in het VK](/nl/autorijden-in-het-vk/). Voor overstappen is er een aparte gids over transit via het Verenigd Koninkrijk.",
      ] },
    ],
    faq: [
      { q: "Welke valuta gebruikt men in 2026 in Engeland en Schotland?", a: "Het Britse pond (GBP, £), in het hele Verenigd Koninkrijk. In Schotland geven drie banken eigen bankbiljetten uit, maar de valuta is dezelfde." },
      { q: "Heb ik contant geld nodig in Londen?", a: "Meestal niet: kaartbetalingen, vooral contactloos, zijn zeer gangbaar en het openbaar vervoer (TfL) betaalt u met een contactloze kaart of Oyster. Wat contant geld kan handig zijn voor kleinere winkels, markten en fooi." },
      { q: "Vanaf welk bedrag moet ik contant geld aangeven bij aankomst in het VK?", a: "Reist u Groot-Brittannië (GB) binnen met £10 000 of meer aan contant geld (inclusief de tegenwaarde in andere valuta), dan moet u dat aangeven. Dat kan vooraf online of bij aankomst via de rode doorgang. Wie geen aangifte doet, riskeert inbeslagname van het hele bedrag en een boete tot £5 000." },
      { q: "Kan ik in het VK alles met mijn kaart betalen?", a: "Kaartbetalingen, ook contactloos, zijn zeer gangbaar en worden in de meeste situaties geaccepteerd. Vaak kunt u helemaal met de kaart toe. Toch kan wat contant geld handig zijn voor kleinere winkels of fooi." },
      { q: "Is fooi verplicht in het VK?", a: "Nee, fooi is een gewoonte en geen wettelijke verplichting. In restaurants wordt soms een 'service charge' van 10-12,5 % op de rekening gezet; controleer de specificatie. Staat er geen servicetoeslag op, dan is ongeveer 10 % een gangbare richtlijn." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },
  "vat-refund": {
    slug: "btw-teruggave",
    group: "travel",
    title: "Btw-teruggave in het VK (VAT refund): wat er geldt (2026)",
    description:
      "Sinds 1 januari 2021 krijgen reizigers in Engeland, Schotland en Wales in de regel geen btw terug op meegenomen aankopen. Laat u het verzenden, dan soms wel.",
    h1: "Btw-teruggave (VAT refund) bij winkelen in het Verenigd Koninkrijk",
    lead:
      "Een veelvoorkomend misverstand: sinds 2021 krijgen reizigers in het Verenigd Koninkrijk in de regel geen btw meer terug op goederen die ze zelf mee naar huis nemen. Hieronder leest u wat er werkelijk geldt, welke uitzondering er is als de winkel het artikel naar het buitenland verstuurt en waarom Noord-Ierland apart wordt behandeld.",
    card: "Sinds 2021 in de regel geen btw-teruggave op meegenomen aankopen, behalve bij verzending.",
    sections: [
      { h: "Het belangrijkste: sinds 2021 geen btw-teruggave op meegenomen aankopen", blocks: [
        "Dit punt wordt vaak verkeerd begrepen. Sinds 1 januari 2021 wordt in het Verenigd Koninkrijk (Engeland, Schotland en Wales) de btw op goederen die reizigers kopen en in hun bagage mee naar huis nemen in de regel niet meer terugbetaald.",
        "De regeling voor btw-teruggave bij export door de detailhandel (VAT Retail Export Scheme) is op dat moment afgeschaft. Dat betekent dat u normaal gesproken geen btw terugkrijgt op goederen die u zelf het land uit neemt.",
      ] },
      { h: "De uitzondering: de winkel verstuurt het artikel rechtstreeks naar het buitenland", blocks: [
        "Verstuurt een winkel het artikel rechtstreeks naar een adres in het buitenland, dan kan de aankoop in sommige gevallen zonder btw plaatsvinden. Dat hangt wel af van de werkwijze van de winkel en de geldende voorwaarden; vraag dus vóór uw aankoop bij de betreffende winkel na wat mogelijk is.",
      ] },
      { h: "Noord-Ierland wordt apart behandeld", blocks: [
        "Voor Noord-Ierland gelden deels andere regels. Voor reizigers die niet in de EU wonen, kan daar nog een vorm van btw-teruggave bestaan, gekoppeld aan het Noord-Ierlandprotocol. De voorwaarden kunnen veranderen; controleer dus wat er geldt op het moment van uw reis.",
      ] },
      { h: "Goed om te weten op de luchthaven", blocks: [
        "Ook als u bordjes met \"Tax Free\" of vroegere teruggaveloketten ziet: de btw op goederen die u in uw bagage meeneemt, wordt in Engeland, Schotland en Wales in de regel niet terugbetaald. Ga er dus niet van uit dat u iets terugkrijgt en controleer de actuele regels als u twijfelt.",
      ] },
      { h: "Verder lezen voor uw reis", blocks: [
        "Wat u verder mag in- en uitvoeren, staat in de gids over de Britse douane; hoe de grenscontrole verloopt, in de gids over de paspoortcontrole en de eGates. Reist u met kinderen, dan is er een aparte gids over reizen met kinderen naar het VK. Voor de inreis heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)); de status ziet u via [de statuscontrole](/nl/status-controleren/).",
      ] },
    ],
    faq: [
      { q: "Kan ik de btw (VAT) op aankopen in het VK terugkrijgen?", a: "In het Verenigd Koninkrijk (Engeland, Schotland en Wales) wordt de btw op goederen die reizigers in hun bagage mee naar huis nemen in de regel niet meer terugbetaald. De VAT Retail Export Scheme is daar op 1 januari 2021 afgeschaft. Dat wijkt af van hoe het vroeger werkte en van wat in sommige andere landen geldt." },
      { q: "Kan ik in het VK op een andere manier zonder btw winkelen?", a: "Verstuurt een winkel het artikel rechtstreeks naar een adres in het buitenland, dan kan de aankoop in sommige gevallen zonder btw. Dat hangt wel af van de werkwijze van de winkel en de geldende voorwaarden. Vraag bij de betreffende winkel na wat mogelijk is." },
      { q: "Gelden in Noord-Ierland dezelfde regels?", a: "Noord-Ierland wordt apart behandeld en heeft deels andere regels. Voor reizigers die niet in de EU wonen, kan daar nog een vorm van btw-teruggave bestaan, gekoppeld aan het Noord-Ierlandprotocol. Controleer de actuele voorwaarden voordat u op teruggave rekent." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },
  "sim-mobile": {
    slug: "simkaart-en-mobiel-internet",
    group: "travel",
    title: "Simkaart, eSIM en mobiel internet in het VK (2026)",
    description:
      "De grootste providers in het VK zijn EE, O2, Vodafone en Three. Prepaid-sim, eSIM, simlockvrije telefoon en roaming na de brexit: zo blijft u online.",
    h1: "Simkaart, eSIM en mobiel internet in het Verenigd Koninkrijk",
    lead:
      "Welke mobiele providers er in het Verenigd Koninkrijk zijn, hoe u als bezoeker kiest tussen een prepaid-simkaart en een eSIM, waar u op let bij een simlockvrije telefoon en roaming, en waar u gratis wifi vindt.",
    card: "EE, O2, Vodafone en Three, prepaid-sim of eSIM, en roaming na de brexit.",
    sections: [
      { h: "Mobiele providers in het Verenigd Koninkrijk", blocks: [
        "De grootste mobiele netwerken in het Verenigd Koninkrijk zijn EE, O2, Vodafone en Three. Daarnaast zijn er verschillende virtuele providers (MVNO's) die dezelfde netwerken gebruiken, zoals giffgaff, Lebara en Lyca.",
        { note: "Voor dit onderwerp bestaan weinig eenduidige officiële regels, en prijzen en bundels veranderen vaak. Beschouw de informatie hieronder als algemene richtlijn en controleer de actuele voorwaarden bij de provider." },
      ] },
      { h: "Opties voor bezoekers: prepaid-simkaart of eSIM", blocks: [
        { ul: [
          "Prepaid-simkaart / toeristensim: te koop op luchthavens, in telefoonwinkels en in supermarkten.",
          "eSIM: online te koop en direct te activeren als uw telefoon dat ondersteunt; u hoeft dan geen fysieke simkaart te wisselen.",
        ] },
      ] },
      { h: "Een simlockvrije telefoon is een voorwaarde", blocks: [
        "Om een lokale simkaart of eSIM te kunnen gebruiken, moet uw telefoon simlockvrij zijn. Controleer dat ruim vóór vertrek bij uw huidige provider.",
      ] },
      { h: "Roaming na de brexit", blocks: [
        "Bezoekers uit de EU, dus ook uit Nederland en België, moeten letten op roamingkosten. Sinds de brexit rekenen sommige providers kosten voor roaming in het Verenigd Koninkrijk, andere niet. De voorwaarden verschillen; vraag het vóór vertrek na bij uw provider om onverwachte kosten te voorkomen.",
      ] },
      { h: "Dekking en gratis wifi", blocks: [
        "De dekking is in steden over het algemeen goed; op het platteland kan die per provider verschillen. U kunt de dekking controleren via de dekkingskaart van Ofcom.",
        "Gratis wifi is gebruikelijk in cafés, in het openbaar vervoer en op veel openbare plaatsen, wat uw mobiele verbinding kan aanvullen.",
      ] },
      { h: "Goed om te weten voor de inreis", blocks: [
        "Voor de inreis in het Verenigd Koninkrijk heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)); de status van uw aanvraag ziet u via [de statuscontrole](/nl/status-controleren/). Wat u mag meenemen, staat in de gids over douaneregels en invoergrenzen. Wilt u een auto huren, lees dan over [autorijden in het VK](/nl/autorijden-in-het-vk/). Voor overstappen is er een aparte gids over transit via het Verenigd Koninkrijk.",
      ] },
    ],
    faq: [
      { q: "Heb ik een lokale simkaart nodig in het VK?", a: "Dat hangt af van uw huidige provider. Een lokale prepaid-simkaart of een eSIM kan handig zijn om roamingkosten te vermijden en ter plaatse mobiele data te hebben. Een eSIM koopt u online en activeert u direct als uw telefoon dat ondersteunt." },
      { q: "Kan ik een eSIM gebruiken in het VK?", a: "Ja. Ondersteunt uw telefoon eSIM en is hij simlockvrij, dan kunt u online een eSIM kopen en activeren zonder een fysieke simkaart te wisselen. Controleer vooraf of uw toestel geschikt en simlockvrij is." },
      { q: "Kan ik mijn telefoon uit de EU gewoon gebruiken in het VK?", a: "Sinds de brexit rekenen sommige providers kosten voor roaming in het Verenigd Koninkrijk, andere niet. De voorwaarden verschillen per provider en abonnement; vraag het vóór vertrek na bij uw provider." },
    ],
    sources: [
      { label: "Ofcom – de Britse toezichthouder voor communicatie", url: "https://www.ofcom.org.uk/" },
    ],
  },
  "power-plug": {
    slug: "stopcontact-en-stekker",
    group: "travel",
    title: "Stopcontacten in het VK en Londen: type G, 230 V (2026)",
    description:
      "Stopcontacten in het VK en Londen zijn van type G (BS 1363, drie rechthoekige pennen), 230 V en 50 Hz. Staat er INPUT 100-240 V, dan volstaat een reisadapter.",
    h1: "Stopcontacten in het Verenigd Koninkrijk en Londen",
    lead:
      "Britse stopcontacten, in Londen net als in de rest van het VK, zijn van type G met drie rechthoekige pennen, en de spanning is 230 V. Of u alleen een reisadapter nodig heeft of ook een spanningsomvormer, hangt af van wat er op uw apparaat staat.",
    card: "Type G met drie rechthoekige pennen, 230 V en 50 Hz: neem een reisadapter mee.",
    sections: [
      { h: "Welke stopcontacten heeft het VK en Londen?", blocks: [
        "De stopcontacten in het Verenigd Koninkrijk zijn van type G: de stekker heeft drie rechthoekige pennen. De spanning is 230 V en de frequentie 50 Hz. Om apparatuur met een ander type stekker aan te sluiten, heeft u een reisadapter voor type G nodig.",
      ] },
      { h: "Staat er 100-240 V op de lader? Dan volstaat een adapter", blocks: [
        "Apparatuur uit landen met een lagere spanning, zoals Japan (100 V) of Noord-Amerika (120 V), werkt in het Verenigd Koninkrijk als op het INPUT-label \"100-240 V\" staat (zogenoemde dual voltage). Dan heeft u alleen een reisadapter voor type G nodig.",
        "Laders voor telefoons, laptops en camera's zijn in de meeste gevallen geschikt voor 100-240 V. Ook al klopt dat meestal, lees altijd het label (INPUT) op uw eigen apparaat.",
      ] },
      { h: "Wanneer kan een spanningsomvormer nodig zijn?", blocks: [
        "Apparaten waarvan de INPUT alleen de spanning van het eigen land vermeldt, vaak apparaten met een hoog vermogen zoals sommige föhns en stijltangen, kunnen een spanningsomvormer (transformator) nodig hebben. Controleer het label voordat u iets aansluit; twijfelt u, dan laat u het apparaat het veiligst thuis.",
      ] },
      { h: "USB-aansluitingen en praktische tips", blocks: [
        "Sommige accommodaties hebben USB-aansluitingen, maar het veiligst is om zelf een reisadapter voor type G mee te nemen. Dan kunt u opladen, hoe de kamer ook is ingericht.",
      ] },
      { h: "Checklist vóór vertrek", blocks: [
        { ul: [
          "Lees het INPUT-label op elke lader en elk apparaat.",
          "Staat er 100-240 V? Dan volstaat een adapter voor type G.",
          "Alleen de spanning van het eigen land op een apparaat met hoog vermogen? Dan kan een omvormer nodig zijn.",
          "Neem een eigen adapter mee in plaats van te rekenen op USB-aansluitingen op de kamer.",
        ] },
      ] },
      { h: "Voordat u naar het Verenigd Koninkrijk reist", blocks: [
        "Voor de inreis zelf heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)) en u kunt uw aanvraag volgen via [de statuscontrole](/nl/status-controleren/). Bij aankomst gaat u door de paspoortcontrole en de eGates. Wilt u autorijden, lees dan over [autorijden in het VK](/nl/autorijden-in-het-vk/).",
      ] },
      { h: "Officiële en technische referentie", blocks: [
        "De Britse norm voor stekkers en stopcontacten van 13 A is BS 1363 (type G; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V en 50 Hz: Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "Werkt mijn lader in het VK?", a: "Staat er op de lader INPUT 100-240 V (dual voltage), dan werkt hij in het Verenigd Koninkrijk en heeft u alleen een reisadapter voor type G nodig. De meeste laders voor telefoons, computers en camera's zijn zo gemarkeerd. Controleer altijd het label op het apparaat." },
      { q: "Heb ik een spanningsomvormer nodig?", a: "Een spanningsomvormer (transformator) kan nodig zijn voor apparaten met een hoog vermogen die alleen voor de spanning van het eigen land zijn gebouwd, zoals sommige föhns en stijltangen. Controleer het label (INPUT): staat daar alleen de spanning van het eigen land, dan kan een omvormer nodig zijn." },
      { q: "Welke stopcontacten heeft het VK en Londen?", a: "Britse stopcontacten, in Londen net als in de rest van het Verenigd Koninkrijk, zijn van type G met drie rechthoekige pennen (BS 1363, 13 A). De spanning is 230 V en de frequentie 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },
  "healthcare-nhs": {
    slug: "gezondheidszorg-nhs",
    group: "travel",
    title: "Zorg, NHS en EHIC/GHIC voor bezoekers aan het VK (2026)",
    description:
      "Spoedeisende hulp (A&E) en de huisarts (GP) zijn gratis binnen de NHS. Over EHIC/GHIC, waarom een reisverzekering sterk wordt aangeraden, 999 en NHS 111.",
    h1: "Zorg, NHS en EHIC/GHIC voor bezoekers aan het Verenigd Koninkrijk",
    lead:
      "Spoedeisende hulp (A&E) en een bezoek aan de huisarts (GP) zijn binnen de NHS gratis. Hieronder leest u hoe de EHIC/GHIC werkt voor bezoekers uit de EU, de EVA en Zwitserland, waarom een reisverzekering sterk wordt aangeraden en welke noodnummers gelden.",
    card: "A&E en huisarts gratis, EHIC/GHIC voor EU-bezoekers, reisverzekering sterk aangeraden.",
    sections: [
      { h: "Spoedeisende hulp en huisarts zijn gratis", blocks: [
        "Binnen de NHS zijn de spoedeisende hulp (A&E) en een bezoek aan de huisarts (GP) gratis voor iedereen, ongeacht verblijfsstatus of of u papieren bij u heeft. Dat geldt voor de acute eerste hulp.",
      ] },
      { h: "Bezoekers uit de EU, de EVA en Zwitserland: EHIC/GHIC", blocks: [
        "Met een geldige EHIC/GHIC die in het eigen land is afgegeven, kunnen bezoekers uit de EU (dus ook uit Nederland en België), de EVA en Zwitserland de zorg krijgen die tijdens een tijdelijk verblijf medisch noodzakelijk wordt.",
        { note: "Let op: de EHIC/GHIC dekt niet alle kosten en vervangt geen reisverzekering." },
      ] },
      { h: "Bezoekers zonder EHIC/GHIC", blocks: [
        "Bezoekers zonder EHIC/GHIC kunnen kosten in rekening gebracht krijgen voor ziekenhuiszorg die verder gaat dan acute behandeling (naar verluidt 150 % van het standaardtarief van de NHS). Acute zorg die niet kan wachten, wordt echter altijd verleend; de betaling wordt achteraf geregeld.",
      ] },
      { h: "Een reisverzekering wordt sterk aangeraden", blocks: [
        "Een reisverzekering wordt sterk aangeraden. De EHIC/GHIC dekt niet alles; repatriëring (vervoer naar huis) valt er bijvoorbeeld normaal gesproken niet onder. Een reisverzekering is daarom een belangrijke aanvulling en kan niet worden vervangen door een GHIC.",
      ] },
      { h: "Noodnummers en medisch advies", blocks: [
        { ul: [
          "999 (of 112): het noodnummer voor spoedsituaties.",
          "NHS 111: voor medisch advies dat niet spoedeisend is.",
          "Voor geneesmiddelen op recept kan een receptbijdrage (prescription charge) gelden (in Engeland).",
        ] },
        "Meer over de noodnummers leest u in de gids over [noodnummers en veiligheid in het VK](/nl/noodnummers-en-veiligheid/).",
      ] },
      { h: "Goed om te weten voor de inreis", blocks: [
        "Voor de inreis in het Verenigd Koninkrijk heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)); de status van uw aanvraag ziet u via [de statuscontrole](/nl/status-controleren/). Wat u mag meenemen, staat in de gids over douaneregels en invoergrenzen. Wilt u een auto huren, lees dan over [autorijden in het VK](/nl/autorijden-in-het-vk/). Voor overstappen is er een aparte gids over transit via het Verenigd Koninkrijk.",
      ] },
    ],
    faq: [
      { q: "Kost spoedeisende hulp geld in het VK?", a: "De spoedeisende hulp (A&E) en een bezoek aan de huisarts (GP) zijn binnen de NHS gratis voor iedereen, ongeacht verblijfsstatus of papieren. Ziekenhuiszorg die verder gaat dan acute behandeling kan voor bezoekers zonder EHIC/GHIC wel kosten met zich meebrengen." },
      { q: "Kan ik mijn EHIC of GHIC gebruiken in het VK?", a: "Bezoekers uit de EU, de EVA en Zwitserland kunnen met een geldige EHIC/GHIC uit het eigen land medisch noodzakelijke zorg krijgen tijdens een tijdelijk verblijf. De EHIC/GHIC dekt echter niet alle kosten en vervangt geen reisverzekering." },
      { q: "Heb ik een reisverzekering nodig voor het VK?", a: "Een reisverzekering wordt sterk aangeraden. De EHIC/GHIC dekt niet alles; repatriëring valt er bijvoorbeeld normaal gesproken niet onder. Een reisverzekering is dus een belangrijke aanvulling en niet inwisselbaar voor een GHIC." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },
  "safety-emergency": {
    slug: "noodnummers-en-veiligheid",
    group: "travel",
    title: "Noodnummers in het VK: bel 999 in nood, 111 voor zorg | 2026",
    description:
      "Bel 999 (of 112) in een noodsituatie: politie, brandweer en ambulance, gratis. 101 voor de politie bij niet-spoedeisende zaken en NHS 111 voor medisch advies.",
    h1: "Noodnummers en veiligheid in het Verenigd Koninkrijk",
    lead:
      "Het belangrijkste eerst: in een noodsituatie belt u 999 (of 112). Hieronder leest u het verschil tussen 999 en 101, wat NHS 111 doet, hoe een noodoproep verloopt en enkele algemene veiligheidstips voor reizigers.",
    card: "999 of 112 in nood, 101 voor de politie zonder spoed, NHS 111 voor medisch advies.",
    sections: [
      { h: "Noodnummers: 999 en 112", blocks: [
        "In een noodsituatie, als u politie, brandweer of ambulance nodig heeft, belt u 999. Het nummer is gratis en te bellen vanaf elke telefoon, ook zonder dekking van uw eigen provider.",
        "Ook 112, het gemeenschappelijke Europese alarmnummer, werkt in het Verenigd Koninkrijk en komt uit bij dezelfde meldkamer als 999. U kunt dus elk van beide nummers gebruiken.",
        "Als u belt, wordt gevraagd welke dienst u nodig heeft: police, fire, ambulance of coastguard (kustwacht).",
      ] },
      { h: "Niet-spoedeisende zaken: 101 en NHS 111", blocks: [
        "Is de situatie niet spoedeisend, dan zijn er aparte nummers die u in plaats van 999 gebruikt:",
        { ul: [
          "101: het nummer van de politie voor zaken zonder spoed, bijvoorbeeld om een kleiner misdrijf of een verloren voorwerp te melden.",
          "NHS 111: medisch advies dat niet spoedeisend is. U krijgt advies over uw klachten en wordt doorverwezen naar de juiste zorg.",
        ] },
        "Door het juiste nummer te gebruiken, kan de meldkamer van 999 voorrang geven aan echte noodsituaties. Meer over de Britse gezondheidszorg leest u in de gids over [zorg en de NHS in het VK](/nl/gezondheidszorg-nhs/).",
      ] },
      { h: "Zo verloopt een noodoproep", blocks: [
        "Als u 999 of 112 belt, krijgt u een centralist die vraagt welke dienst u nodig heeft en waar u bent. Beschrijf zo duidelijk mogelijk de locatie en wat er is gebeurd.",
        "Voor wie moeilijk kan horen of spreken zijn er speciale oplossingen, zoals een sms naar 999 via de vooraf te registreren dienst emergencySMS, of de zogenoemde silent solution (55 intoetsen zodra de verbinding tot stand is gekomen) als u niet vrijuit kunt praten. De voorwaarden van deze diensten worden door de officiële bronnen nader beschreven.",
      ] },
      { h: "Algemene veiligheidstips voor reizigers", blocks: [
        "Zoals op veel bestemmingen is het verstandig alert te zijn op zakkenrollers en tasjesdieven op toeristische plekken, in het openbaar vervoer en op drukke plaatsen. Enkele gangbare tips:",
        { ul: [
          "Houd waardevolle spullen dicht bij u en laat tassen niet onbeheerd achter.",
          "Laat in een menigte uw telefoon, portemonnee en dure spullen niet zien.",
          "Meld verloren voorwerpen of kleinere misdrijven bij de politie via 101 of bij het dichtstbijzijnde politiebureau.",
        ] },
        "Het kan ook verstandig zijn een reisverzekering te hebben. Wilt u autorijden, bekijk dan de Britse verkeersregels in de gids over [autorijden in het VK](/nl/autorijden-in-het-vk/).",
      ] },
      { h: "Paspoort kwijt: neem contact op met de ambassade", blocks: [
        "Raakt u tijdens de reis uw paspoort kwijt, neem dan contact op met de ambassade of het consulaat van uw eigen land voor hulp met tijdelijke reisdocumenten. Gaat het om diefstal, dan is het ook verstandig aangifte te doen bij de politie. Voor de inreis heeft u bovendien een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)); de status van uw aanvraag ziet u via [de statuscontrole](/nl/status-controleren/). Wat u wel en niet over de grens mag meenemen, staat in de gids over douaneregels en invoergrenzen.",
      ] },
    ],
    faq: [
      { q: "Welk nummer belt u in een noodsituatie in het VK?", a: "Bel 999 in een noodsituatie waarbij u politie, brandweer of ambulance nodig heeft. Het nummer 112 werkt op dezelfde manier en komt uit bij dezelfde meldkamer. Beide zijn gratis en vanaf elke telefoon te bellen." },
      { q: "Wat doe ik als het niet spoedeisend is?", a: "Voor politiezaken zonder spoed belt u 101. Heeft u medisch advies nodig dat niet spoedeisend is, bel dan NHS 111; daar krijgt u advies over uw klachten en wordt u doorverwezen naar de juiste zorg." },
      { q: "Hoe bescherm ik mij tegen zakkenrollers?", a: "Houd waardevolle spullen dicht bij u, laat uw telefoon en portemonnee niet zien in een menigte en wees alert op toeristische plekken en in het openbaar vervoer. Bent u bestolen, neem dan contact op met de politie via 101 of ga naar het dichtstbijzijnde politiebureau." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },
  "bank-holidays": {
    slug: "feestdagen-bank-holidays",
    group: "travel",
    title: "Bank holidays in het VK 2026: officiële feestdagen",
    description:
      "Bank holidays 2026 in Engeland en Wales volgens GOV.UK: banken dicht, winkels korter open, minder openbaar vervoer. Op Eerste Kerstdag is bijna alles dicht.",
    h1: "Bank holidays in het Verenigd Koninkrijk 2026",
    lead:
      "Op een bank holiday zijn de banken dicht, hebben veel winkels kortere openingstijden en kan het openbaar vervoer minder vaak rijden. Hieronder vindt u de officiële feestdagen in Engeland en Wales in 2026 volgens GOV.UK, en wat ze betekenen voor uw reis.",
    card: "De officiële feestdagen 2026 in Engeland en Wales en wat er dan open of dicht is.",
    sections: [
      { h: "Bank holidays in Engeland en Wales 2026", blocks: [
        "Volgens GOV.UK gelden in Engeland en Wales in 2026 de volgende officiële bank holidays. Schotland en Noord-Ierland hebben deels andere data.",
        { table: { head: ["Datum", "Feestdag"], rows: [
          ["1 januari", "Nieuwjaarsdag (New Year's Day)"],
          ["3 april", "Goede Vrijdag (Good Friday)"],
          ["6 april", "Tweede Paasdag (Easter Monday)"],
          ["4 mei", "Early May bank holiday"],
          ["25 mei", "Spring bank holiday"],
          ["31 augustus", "Summer bank holiday"],
          ["25 december", "Eerste Kerstdag (Christmas Day)"],
          ["28 december", "Vervangende dag voor Tweede Kerstdag (Boxing Day)"],
        ] } },
      ] },
      { h: "Wat is open, en wat merkt u ervan?", blocks: [
        "Op een bank holiday zijn de banken dicht. Veel winkels en bezienswaardigheden zijn open, maar vaak met kortere openingstijden. Het openbaar vervoer kan minder vaak rijden, bijvoorbeeld volgens de zondagsdienstregeling.",
        "Controleer vooraf de openingstijden en dienstregelingen voor de dag die u plant, want die verschillen per plaats en per bedrijf.",
      ] },
      { h: "Eerste Kerstdag: bijna alles is dicht", blocks: [
        "Eerste Kerstdag (25 december) is bijzonder: bijna alles is dicht en het grootste deel van het openbaar vervoer rijdt niet. Reist u rond Kerstmis, plan de dagen dan ruim en reken niet op de normale dienstregeling.",
      ] },
      { h: "Vervangende dagen als de feestdag in het weekend valt", blocks: [
        "Valt een bank holiday op een zaterdag of zondag, dan wordt de vrije dag normaal gesproken verschoven naar de eerstvolgende werkdag (een zogenoemde vervangende dag). Daarom vallen sommige data in de tabel hierboven op een werkdag na een weekend.",
      ] },
      { h: "Voordat u naar het Verenigd Koninkrijk reist", blocks: [
        "Voor de inreis zelf heeft u een geldige UK ETA nodig (zie [hoe u de ETA aanvraagt](/nl/hoe-aanvragen/)) en u kunt uw aanvraag volgen via [de statuscontrole](/nl/status-controleren/). Bij aankomst gaat u door de paspoortcontrole en de eGates. Wilt u tijdens de reis autorijden, lees dan over [autorijden in het VK](/nl/autorijden-in-het-vk/).",
      ] },
    ],
    faq: [
      { q: "Wanneer zijn de bank holidays in het VK in 2026?", a: "In Engeland en Wales zijn de officiële bank holidays in 2026 volgens GOV.UK: 1 januari (Nieuwjaarsdag), 3 april (Goede Vrijdag), 6 april (Tweede Paasdag), 4 mei (Early May), 25 mei (Spring), 31 augustus (Summer), 25 december (Eerste Kerstdag) en 28 december (vervangende dag voor Tweede Kerstdag). Schotland en Noord-Ierland hebben deels andere data." },
      { q: "Zijn winkels open op bank holidays?", a: "De banken zijn dicht. Veel winkels en bezienswaardigheden zijn open, maar vaak met kortere openingstijden. Op Eerste Kerstdag (25 december) is bijna alles dicht." },
      { q: "Wat betekenen feestdagen voor het openbaar vervoer?", a: "Het openbaar vervoer kan minder vaak rijden, bijvoorbeeld volgens de zondagsdienstregeling. Op Eerste Kerstdag rijdt het meeste vervoer niet; plan uw reisdagen dus ruim." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
