import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（da・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "transport-i-london-oyster",
    group: "travel",
    title: "Betaling i Londons transport: Oyster og kontaktløst (2026)",
    description:
      "I Londons undergrund, busser og tog betaler du kontaktløst, med mobilen eller Oyster-kort – samme pris med dags- og ugeloft. Se aktuelle beløb hos TfL.",
    h1: "Betaling for transport i London: Oyster og kontaktløst",
    lead:
      "I Londons undergrund, busser og tog betaler du nemmest ved at holde et kontaktløst kort, din mobil eller et Oyster-kort mod kortlæseren. Kontaktløst og Oyster koster det samme, og der er et loft over, hvor meget du betaler pr. dag og pr. uge.",
    card: "Kontaktløst kort eller Oyster i London – samme pris og loft pr. dag og uge.",
    sections: [
      { h: "Kontaktløst eller Oyster – sådan betaler du", blocks: [
        "Den kollektive trafik i London – undergrunden (the Tube), busser og tog – bygger på \"pay as you go\": Du holder et kontaktløst betalingskort, en mobil med betalingsfunktion eller et Oyster-kort mod den gule kortlæser og betaler pr. tur.",
        "Kontaktløst og Oyster koster det samme. Har du allerede et kontaktløst kort eller en mobil med betaling hjemmefra, kan du rejse til samme takst uden at købe et Oyster-kort. For besøgende er kontaktløs betaling oftest det nemmeste. Et Visitor Oyster-kort skal derimod bestilles, før du rejser.",
      ] },
      { h: "Prisloft (capping): Du betaler ikke ubegrænset", blocks: [
        "Der er et prisloft pr. dag og pr. uge. Når dine ture tilsammen har nået loftet, bliver du ikke trukket for flere ture i den periode. Loftet afhænger af, hvilke zoner du rejser i. Beløbene ændres over tid, så tjek de aktuelle tal hos TfL i stedet for at regne med et fast beløb.",
      ] },
      { h: "Undergrund og tog: check ind og check ud", blocks: [
        "I undergrunden og på tog skal du holde kortet mod læseren både når du stiger på, og når du stiger af – ellers kan du blive trukket en forkert takst. I busser og sporvogne (tram) checker du kun ind, når du stiger på; du skal ikke checke ud.",
        { ul: [
          "Tube / tog: check ind ved start, check ud ved slut.",
          "Bus / sporvogn: check kun ind.",
        ] },
      ] },
      { h: "Busserne tager ikke kontanter", blocks: [
        "Londons busser tager ikke imod kontanter. Du kan kun betale med kontaktløst kort, mobil eller Oyster-kort. Sørg derfor for at have et kontaktløst betalingsmiddel, der virker, før du stiger på.",
      ] },
      { h: "Brug det samme kort hver gang", blocks: [
        "Brug det samme kort eller den samme enhed på alle ture. Del ikke ét kontaktløst kort mellem flere rejsende – for at prisloftet bliver beregnet rigtigt, skal hver person bruge sit eget betalingsmiddel.",
      ] },
      { h: "Før du rejser til Storbritannien", blocks: [
        "Den kollektive trafik får du først brug for efter ankomsten. Til selve indrejsen skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og du kan følge ansøgningen via [statustjekket for ETA](/da/tjek-status/). Ved ankomsten skal du gennem paskontrollen og eGates. Skal du hellere køre bil end bruge offentlig transport, kan du læse om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Skal jeg have et Oyster-kort i London?", a: "Ikke nødvendigvis. Har du et kontaktløst betalingskort eller en mobil med betaling, kan du rejse med det samme til samme pris som med Oyster. Kontaktløst og Oyster koster det samme, så for besøgende er et kontaktløst kort som regel nok." },
      { q: "Kan man betale kontant i bussen i London?", a: "Nej. Londons busser tager ikke imod kontanter. Du betaler med kontaktløst kort, mobil eller Oyster-kort ved at holde det mod kortlæseren, når du stiger på." },
      { q: "Hvad sker der, hvis jeg rejser meget på en dag?", a: "Der er et prisloft (capping) pr. dag og pr. uge. Når du har nået loftet, bliver du ikke trukket for flere ture. Loftet afhænger af zonerne og ændres over tid – tjek de aktuelle beløb hos Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "bilkorsel-i-storbritannien",
    group: "travel",
    title: "Kørsel i Storbritannien med udenlandsk kørekort: 12 måneder (2026)",
    description:
      "Som besøgende må du køre på et gyldigt kørekort fra hjemlandet i op til 12 måneder fra indrejsen. Venstrekørsel, minimumsalder 17 år og krav om forsikring.",
    h1: "Må man køre bil i Storbritannien med udenlandsk kørekort?",
    lead:
      "Ja. Bor du uden for Storbritannien, må du køre på et gyldigt kørekort fra dit hjemland, fx et dansk, i op til 12 måneder fra indrejsen. Minimumsalderen for at køre personbil i Storbritannien er 17 år – det er dér, de fleste begynder at køre øvelseskørsel (GOV.UK).",
    card: "Kør på dit hjemlands kørekort i op til 12 måneder – venstrekørsel og forsikring.",
    sections: [
      { h: "12-månedersreglen: kørsel på hjemlandets kørekort", blocks: [
        "Bor du uden for Storbritannien, må du køre på et gyldigt kørekort fra dit hjemland i op til 12 måneder, regnet fra den dag, du rejste ind i landet. Retten gælder for:",
        { ul: [
          "Personbiler (op til 3.500 kg og med plads til højst otte passagerer).",
          "Motorcykler.",
        ] },
        "Kørekortet skal være gyldigt under hele opholdet. Perioden på 12 måneder regnes fra indrejsedagen, ikke fra kørekortets udstedelsesdato.",
      ] },
      { h: "Internationalt kørekort (IDP) og oversættelse", blocks: [
        "Du må køre på et gyldigt kørekort fra hjemlandet. Er kørekortet ikke udstedt på engelsk, anbefales en officiel oversættelse eller et internationalt kørekort (IDP), så myndigheder og biludlejningsfirmaer let kan læse oplysningerne.",
        "Kravene afhænger af, hvilket land kørekortet er udstedt i. Tjek derfor din egen situation på [GOV.UK: Driving in Great Britain on a non-GB licence](https://www.gov.uk/driving-nongb-licence) før rejsen – reglerne kan variere alt efter hjemland.",
      ] },
      { h: "Venstrekørsel, minimumsalder og forsikring", blocks: [
        { ul: [
          "Venstrekørsel: I Storbritannien kører man i venstre side af vejen.",
          "Minimumsalder: 17 år for at køre personbil.",
          "En gyldig bilforsikring er obligatorisk for at køre i Storbritannien.",
        ] },
        "Tjek, at din forsikring gælder i Storbritannien, før du kører. Lejer du bil, er forsikringen som regel med i aftalen – læs betingelserne grundigt.",
      ] },
      { h: "Store køretøjer: busser og lastbiler", blocks: [
        "For store køretøjer som busser og lastbiler gælder der andre regler end for personbiler og motorcykler. Har du planer om at køre et sådant køretøj, skal du tjekke de særlige krav på GOV.UK før rejsen.",
      ] },
      { h: "ETA og kørekort er to forskellige ting", blocks: [
        "En UK ETA er en tilladelse til at rejse ind i Storbritannien – den afgør ikke, om du må køre bil. Retten til at køre er reguleret af separate regler om kørekort, alder, forsikring og køretøjstype.",
        "Til selve indrejsen skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og status på ansøgningen kan du se via [statustjekket for ETA](/da/tjek-status/). Du kan også læse om toldreglerne og om paskontrollen og eGates ved ankomsten.",
      ] },
    ],
    faq: [
      { q: "Må jeg køre bil i Storbritannien med mit danske kørekort?", a: "Ja. Besøgende, der bor uden for Storbritannien, må køre personbil og motorcykel på et gyldigt kørekort fra hjemlandet i op til 12 måneder regnet fra indrejsedagen." },
      { q: "Skal jeg have et internationalt kørekort (IDP) eller en oversættelse?", a: "Du må køre på et gyldigt kørekort fra hjemlandet. Er kørekortet ikke på engelsk, anbefales en officiel oversættelse eller et internationalt kørekort (IDP). Reglerne varierer fra land til land – tjek din situation på gov.uk/driving-nongb-licence." },
      { q: "Hvornår må man tage kørekort i England – hvad er aldersgrænsen?", a: "Aldersgrænsen for personbil i England (og resten af Storbritannien) er 17 år – så kan de fleste begynde at køre øvelseskørsel. I Storbritannien kører man i venstre side af vejen, og det er obligatorisk at have en gyldig bilforsikring." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "valuta-og-kontanter",
    group: "travel",
    title: "Valuta i England og Skotland 2026: britiske pund (GBP)",
    description:
      "Valutaen i England, Skotland og London er britiske pund (GBP, £) også i 2026. Kort rækker langt, og har du £10.000 eller mere i kontanter, skal du angive det.",
    h1: "Valuta i England og Skotland: britiske pund, kontanter og drikkepenge",
    lead:
      "Valutaen i England, Skotland, Wales og Nordirland er britiske pund (GBP, £) – også i 2026. Her kan du se, hvor mange kontanter du må have med uden at angive dem, hvordan du nemmest veksler penge, og hvad der gælder for kort og drikkepenge.",
    card: "Britiske pund (GBP), kort eller kontanter, grænsen på £10.000 og drikkepenge.",
    sections: [
      { h: "Hvilken valuta bruges i England og Skotland? Britiske pund (GBP, £)", blocks: [
        "Betalingsmidlet i Storbritannien er britiske pund (GBP, £). Euro og andre valutaer tages generelt ikke imod i almindelige butikker, så du skal bruge enten kort eller pund i kontanter på stedet. I Skotland er valutaen også pund. Dér udsteder Bank of Scotland, Clydesdale Bank og The Royal Bank of Scotland deres egne pengesedler, mens Bank of England udsteder sedlerne i England og Wales (kilde: Bank of England).",
      ] },
      { h: "Kontanter: pligt til at angive fra £10.000", blocks: [
        "Rejser du ind i Storbritannien (GB) med £10.000 eller mere i kontanter – inklusive tilsvarende beløb i andre valutaer – har du pligt til at angive beløbet. Det gør du online på forhånd eller i den røde kanal ved ankomsten. Undlader du at angive det, kan hele beløbet blive beslaglagt, og du kan få en bøde på op til £5.000.",
      ] },
      { h: "Skal man have kontanter i London og England? Kort eller kontanter", blocks: [
        "Kort, især kontaktløs betaling, er meget udbredt i Storbritannien. I mange situationer klarer du dig helt uden kontanter – fra offentlig transport og caféer til større butikker. Den kollektive trafik i London (TfL) betaler du med kontaktløst kort eller Oyster (kilde: TfL).",
        { ul: [
          "Det kan alligevel være praktisk med lidt kontanter til mindre butikker, markeder og drikkepenge.",
          "Spørg din bank om gebyrer for kortbetaling i udlandet før rejsen.",
        ] },
      ] },
      { h: "Hvor veksler man penge?", blocks: [
        "Du kan veksle penge i banker, vekselkontorer og i lufthavne. Vær opmærksom på, at lufthavne ofte giver en mindre fordelagtig kurs. Sammenlign gerne kurserne, før du veksler større beløb.",
      ] },
      { h: "Drikkepenge: skik og brug, ikke et krav", blocks: [
        "Drikkepenge i Storbritannien er skik og brug og ikke et lovkrav. Retningslinjerne afhænger af situationen:",
        { ul: [
          "Restauranter: Der lægges nogle gange en 'service charge' på 10–12,5 % oven i regningen – tjek specifikationen. Er der ikke lagt et servicegebyr på, er omkring 10 % en almindelig tommelfingerregel.",
          "Pub: Bestiller du i baren, forventes der normalt ingen drikkepenge.",
          "Taxa: Det er almindeligt at runde op.",
        ] },
      ] },
      { h: "Godt at vide før indrejsen", blocks: [
        "Kontanter angives om nødvendigt i tolden, som kommer efter paskontrollen. Til indrejsen skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og du kan følge ansøgningen via [statustjekket for ETA](/da/tjek-status/). Planlægger du at leje bil, kan du læse om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Hvilken valuta bruges i England og Skotland i 2026?", a: "Britiske pund (GBP, £) i hele Storbritannien. I Skotland udsteder tre banker deres egne pengesedler, men valutaen er den samme." },
      { q: "Skal man have kontanter i London?", a: "Som regel ikke: Kort, især kontaktløs betaling, er meget udbredt, og den kollektive trafik (TfL) betaler du med kontaktløst kort eller Oyster. Lidt kontanter kan være praktisk i mindre butikker, på markeder og til drikkepenge." },
      { q: "Fra hvilket beløb skal jeg angive kontanter ved indrejse i Storbritannien?", a: "Rejser du ind i Storbritannien (GB) med £10.000 eller mere i kontanter (inklusive tilsvarende beløb i andre valutaer), har du pligt til at angive beløbet. Det gøres online på forhånd eller i den røde kanal ved ankomsten. Undlader du at angive det, kan hele beløbet blive beslaglagt, og du kan få en bøde på op til £5.000." },
      { q: "Kan man klare sig med kort i Storbritannien?", a: "Kort, også kontaktløs betaling, er meget udbredt og accepteres i de fleste situationer. I mange tilfælde klarer du dig helt med kort. Det kan alligevel være praktisk at have lidt kontanter til mindre butikker eller drikkepenge." },
      { q: "Er drikkepenge obligatoriske i Storbritannien?", a: "Nej, drikkepenge er skik og brug og ikke et lovkrav. På restauranter lægges der nogle gange en 'service charge' på 10–12,5 % oven i regningen – tjek specifikationen. Er der ikke lagt et servicegebyr på, er omkring 10 % en almindelig tommelfingerregel." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "momsrefusion-vat-refund",
    group: "travel",
    title: "Momsrefusion i Storbritannien (VAT refund): det gælder (2026)",
    description:
      "Siden 1. januar 2021 får rejsende som regel ikke momsen retur på varer fra England, Skotland og Wales. Sender butikken varen til udlandet, kan den være momsfri.",
    h1: "Momsrefusion (VAT refund) ved shopping i Storbritannien",
    lead:
      "En udbredt misforståelse: Siden 2021 refunderes momsen i Storbritannien som regel ikke på varer, som rejsende tager med hjem. Her ser vi på, hvad der faktisk gælder, på undtagelsen når butikken sender varen til udlandet, og på hvorfor Nordirland behandles for sig.",
    card: "Ingen momsrefusion på varer i håndbagagen siden 2021 – med få undtagelser.",
    sections: [
      { h: "Det vigtigste: ingen momsrefusion på håndbagage siden 2021", blocks: [
        "Det er dette punkt, der ofte bliver misforstået. Siden 1. januar 2021 refunderes momsen i Storbritannien (England, Skotland og Wales) som regel ikke længere på varer, som rejsende køber og tager med hjem i håndbagagen.",
        "Ordningen for momsrefusion ved detaileksport (VAT Retail Export Scheme) blev afskaffet på det tidspunkt. Det betyder, at du normalt ikke kan få momsen tilbage på varer, du selv bærer med ud af landet.",
      ] },
      { h: "Undtagelsen: når butikken sender varen direkte til udlandet", blocks: [
        "Sender en butik varen direkte til en adresse i udlandet, kan købet i visse tilfælde ske uden moms. Det afhænger dog af butikkens procedurer og de betingelser, der gælder, så spørg den enkelte butik, hvad der er muligt, før du handler.",
      ] },
      { h: "Nordirland behandles for sig", blocks: [
        "Nordirland har delvis andre regler. For rejsende, der ikke er bosat i EU, kan en vis momsrefusion stadig findes dér, knyttet til Nordirlandsprotokollen. Betingelserne kan ændre sig, så tjek, hvad der gælder på tidspunktet for din rejse.",
      ] },
      { h: "Godt at vide i lufthavnen", blocks: [
        "Selvom du ser skilte med \"Tax Free\" eller tidligere refusionsskranker, skal du være opmærksom på, at momsen på varer i håndbagagen som regel ikke refunderes i England, Skotland eller Wales. Regn derfor ikke med at få penge tilbage, men tjek de aktuelle regler, hvis du er i tvivl.",
      ] },
      { h: "Læs videre før rejsen", blocks: [
        "Hvad du ellers må tage ind og ud af landet, hænger sammen med toldreglerne, og ved ankomsten skal du gennem paskontrollen og eGates. Til indrejsen skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og status kan du se via [statustjekket for ETA](/da/tjek-status/).",
      ] },
    ],
    faq: [
      { q: "Kan man få momsen (VAT) tilbage på shopping i Storbritannien?", a: "I Storbritannien (England, Skotland og Wales) refunderes momsen som regel ikke længere på varer, som rejsende tager med hjem i håndbagagen. Ordningen for momsrefusion ved detaileksport (VAT Retail Export Scheme) blev afskaffet dér den 1. januar 2021. Det adskiller sig fra, hvordan det fungerede tidligere, og fra hvad der gælder i visse andre lande." },
      { q: "Kan man på nogen måde handle uden moms i Storbritannien?", a: "Sender en butik varen direkte til en adresse i udlandet, kan købet i visse tilfælde ske uden moms. Det afhænger dog af butikkens procedurer og de gældende betingelser. Spørg den enkelte butik, hvad der er muligt." },
      { q: "Gælder de samme regler i Nordirland?", a: "Nordirland behandles for sig og har delvis andre regler. For rejsende, der ikke er bosat i EU, kan en vis momsrefusion stadig findes dér, knyttet til Nordirlandsprotokollen. Tjek de aktuelle betingelser, før du regner med at få momsen tilbage." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "sim-kort-og-mobildata",
    group: "travel",
    title: "SIM-kort, eSIM og mobildata i Storbritannien (2026)",
    description:
      "De største mobilselskaber i UK er EE, O2, Vodafone og Three. Taletidskort, eSIM, ulåst telefon og roaming efter brexit – sådan holder du forbindelsen.",
    h1: "SIM-kort, eSIM og mobildata i Storbritannien",
    lead:
      "Her kan du se, hvilke mobilselskaber der findes i Storbritannien, hvordan du som besøgende vælger mellem taletidskort og eSIM, hvad du skal være opmærksom på med ulåst telefon og roaming – og hvor du finder gratis wifi.",
    card: "Mobilselskaber, taletidskort eller eSIM, roaming efter brexit og gratis wifi.",
    sections: [
      { h: "Mobilselskaber i Storbritannien", blocks: [
        "De største mobilnet i Storbritannien er EE, O2, Vodafone og Three. Derudover findes flere virtuelle mobilselskaber (MVNO), der bruger de samme net, fx giffgaff, Lebara og Lyca.",
        "På dette område er der få ensartede officielle regler, og priser og abonnementer ændrer sig ofte. Se oplysningerne nedenfor som en generel vejledning, og tjek de aktuelle betingelser hos selskabet.",
      ] },
      { h: "Muligheder for besøgende: taletidskort eller eSIM", blocks: [
        { ul: [
          "Taletidskort / SIM-kort til turister: kan købes i lufthavne, mobilbutikker og dagligvarebutikker.",
          "eSIM: købes online og aktiveres med det samme, hvis din telefon understøtter det – så slipper du for at skifte det fysiske SIM-kort.",
        ] },
      ] },
      { h: "Telefonen skal være ulåst", blocks: [
        "For at kunne bruge et lokalt SIM-kort eller eSIM skal din telefon være ulåst (uden SIM-lås). Tjek det med dit nuværende mobilselskab i god tid før afrejsen.",
      ] },
      { h: "Roaming efter brexit", blocks: [
        "Besøgende fra EU bør være opmærksomme på roaminggebyrer. Efter brexit kan nogle mobilselskaber opkræve gebyrer for roaming i Storbritannien, mens andre ikke gør. Betingelserne varierer – tjek med dit mobilselskab før afrejsen, så du undgår uventede udgifter.",
      ] },
      { h: "Dækning og gratis wifi", blocks: [
        "Dækningen er generelt god i byerne, mens den på landet kan variere mellem selskaberne. Du kan tjekke dækningen på Ofcoms dækningskort.",
        "Gratis wifi er almindeligt på caféer, i den kollektive trafik og mange offentlige steder, hvilket kan supplere din mobilforbindelse.",
      ] },
      { h: "Godt at vide før indrejsen", blocks: [
        "Til indrejsen i Storbritannien skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og status på ansøgningen kan du se via [statustjekket for ETA](/da/tjek-status/). Planlægger du at leje bil, kan du læse om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Skal jeg have et lokalt SIM-kort i Storbritannien?", a: "Det afhænger af dit nuværende mobilselskab. Et lokalt taletidskort eller et eSIM kan være praktisk for at undgå roaminggebyrer og få mobildata på stedet. Et eSIM købes online og aktiveres med det samme, hvis din telefon understøtter det." },
      { q: "Kan jeg bruge eSIM i Storbritannien?", a: "Ja, hvis din telefon understøtter eSIM og er ulåst, kan du købe et eSIM online og aktivere det uden at skifte det fysiske SIM-kort. Tjek på forhånd, at din enhed er kompatibel og uden SIM-lås." },
      { q: "Kan jeg bruge min EU-telefon som normalt i Storbritannien?", a: "Efter brexit opkræver nogle mobilselskaber gebyrer for roaming i Storbritannien, mens andre ikke gør. Betingelserne varierer mellem selskaber og abonnementer – tjek med dit mobilselskab før afrejsen." },
    ],
    sources: [
      { label: "Ofcom – Storbritanniens tilsynsmyndighed for kommunikation", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "stikkontakter-i-storbritannien",
    group: "travel",
    title: "Stikkontakter i Storbritannien og London: type G, 230 V (2026)",
    description:
      "Stikkontakter i Storbritannien og London er type G (BS 1363, tre firkantede ben), 230 V, 50 Hz. Står der INPUT 100–240 V, er en rejseadapter nok.",
    h1: "Stikkontakter i Storbritannien og London",
    lead:
      "Britiske stikkontakter er – i London som i resten af Storbritannien – af type G med tre firkantede ben, og spændingen er 230 V. Om du kun skal bruge en rejseadapter, eller om der kan være brug for en spændingsomformer, afgøres af mærkningen på apparatet.",
    card: "Type G med tre firkantede ben, 230 V og 50 Hz – hvornår en adapter er nok.",
    sections: [
      { h: "Hvilke stikkontakter har Storbritannien og London?", blocks: [
        "Stikkontakterne i Storbritannien er af type G – stikket har tre firkantede ben. Spændingen er 230 V, og frekvensen er 50 Hz. For at tilslutte udstyr med en anden stiktype skal du bruge en rejseadapter til type G.",
      ] },
      { h: "Er opladeren mærket 100–240 V? Så er en adapter nok", blocks: [
        "Udstyr fra lande med lavere spænding – som Japan (100 V) eller Nordamerika (120 V) – virker i Storbritannien, hvis apparatets INPUT-mærkning angiver \"100–240 V\" (såkaldt dual voltage). Så skal du kun bruge en rejseadapter til type G.",
        "Opladere til mobiler, bærbare computere og kameraer er i de fleste tilfælde mærket 100–240 V. Selvom det som regel passer, bør du altid læse mærkaten (INPUT) på netop dit apparat.",
      ] },
      { h: "Hvornår kan der være brug for en spændingsomformer?", blocks: [
        "Apparater, hvis INPUT kun angiver hjemlandets spænding – ofte strømkrævende udstyr som visse hårtørrere og glattejern – kan kræve en spændingsomformer (transformer). Tjek mærkningen, før du tilslutter noget; er du i tvivl, er det sikrest at lade apparatet blive hjemme.",
      ] },
      { h: "USB-stik og praktiske tips", blocks: [
        "Nogle overnatningssteder har USB-stik, men det sikreste er at tage din egen rejseadapter til type G med. Så kan du lade op, uanset hvordan værelset er udstyret.",
      ] },
      { h: "Tjekliste før afrejsen", blocks: [
        { ul: [
          "Læs INPUT-mærkningen på hver oplader og hvert apparat.",
          "Står der 100–240 V? Så er en adapter til type G nok.",
          "Kun hjemlandets spænding på et strømkrævende apparat? Så kan der være brug for en omformer.",
          "Tag din egen adapter med i stedet for at regne med USB-stik på værelset.",
        ] },
      ] },
      { h: "Officiel og teknisk reference", blocks: [
        "Den britiske standard for 13 A-stik og stikkontakter er BS 1363 (type G; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V og 50 Hz fremgår af Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
      { h: "Før du rejser til Storbritannien", blocks: [
        "Til selve indrejsen skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og du kan følge ansøgningen via [statustjekket for ETA](/da/tjek-status/). Ved ankomsten skal du gennem paskontrollen og eGates. Planlægger du at køre bil, kan du læse om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Virker min oplader i Storbritannien?", a: "Er opladeren mærket INPUT 100–240 V (dual voltage), virker den i Storbritannien – så skal du kun bruge en rejseadapter til type G. De fleste opladere til mobiler, computere og kameraer er mærket sådan. Tjek altid mærkningen på apparatet." },
      { q: "Skal jeg have en spændingsomformer?", a: "En spændingsomformer (transformer) kan være nødvendig til strømkrævende apparater, der kun er bygget til hjemlandets spænding, fx visse hårtørrere og glattejern. Tjek mærkningen (INPUT) – står der kun hjemlandets spænding, kan en omformer være påkrævet." },
      { q: "Hvilke stikkontakter har Storbritannien og London?", a: "Britiske stikkontakter er – i London som i resten af Storbritannien – af type G med tre firkantede ben (BS 1363, 13 A). Spændingen er 230 V, og frekvensen er 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "sundhed-nhs-og-ghic",
    group: "travel",
    title: "Lægehjælp, NHS og GHIC for besøgende i Storbritannien (2026)",
    description:
      "Skadestue (A&E) og praktiserende læge (GP) er gratis i NHS. Om EHIC/GHIC, hvorfor rejseforsikring stærkt anbefales, alarmnummer 999 og NHS 111.",
    h1: "Lægehjælp, NHS og GHIC for besøgende i Storbritannien",
    lead:
      "Her kan du se, hvad der er gratis i NHS, hvordan EHIC/GHIC fungerer for besøgende fra EU, EFTA og Schweiz, hvorfor en rejseforsikring stærkt anbefales, og hvilke alarmnumre der gælder.",
    card: "Gratis skadestue og egen læge, EHIC/GHIC, rejseforsikring samt 999 og NHS 111.",
    sections: [
      { h: "Skadestue og praktiserende læge er gratis", blocks: [
        "I NHS er skadestue (A&E) og besøg hos praktiserende læge (GP) gratis for alle – uanset opholdsstatus, og uanset om du har papirer med. Det gælder den akutte, første behandling.",
      ] },
      { h: "Besøgende fra EU, EFTA og Schweiz: EHIC/GHIC", blocks: [
        "Med et gyldigt EHIC/GHIC udstedt i hjemlandet kan besøgende fra EU, EFTA og Schweiz få den behandling, der bliver medicinsk nødvendig under et midlertidigt ophold. Bemærk, at EHIC/GHIC ikke dækker alle udgifter og ikke erstatter en rejseforsikring.",
      ] },
      { h: "Besøgende uden EHIC/GHIC", blocks: [
        "Besøgende uden EHIC/GHIC kan blive opkrævet betaling for hospitalsbehandling ud over akut behandling (efter det oplyste 150 % af NHS' standardtakst). Akut behandling, der ikke kan vente, gives dog altid, og betalingen ordnes bagefter.",
      ] },
      { h: "Rejseforsikring anbefales stærkt", blocks: [
        "En rejseforsikring anbefales stærkt. EHIC/GHIC dækker ikke alt – fx er hjemtransport (repatriering) normalt ikke med. Forsikringen er derfor et vigtigt supplement og kan ikke erstattes af et GHIC.",
      ] },
      { h: "Alarmnumre og lægefaglig rådgivning", blocks: [
        { ul: [
          "999 (eller 112) – alarmnummer i akutte situationer.",
          "NHS 111 – lægefaglig rådgivning, når det ikke er akut.",
          "Receptpligtig medicin kan koste et receptgebyr (i England).",
        ] },
      ] },
      { h: "Godt at vide før indrejsen", blocks: [
        "Til indrejsen i Storbritannien skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og status på ansøgningen kan du se via [statustjekket for ETA](/da/tjek-status/). Planlægger du at leje bil, kan du læse om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Koster akut behandling penge i Storbritannien?", a: "Skadestue (A&E) og besøg hos praktiserende læge (GP) er gratis i NHS for alle, uanset opholdsstatus eller papirer. Hospitalsbehandling ud over akut behandling kan derimod koste penge for besøgende uden EHIC/GHIC." },
      { q: "Kan jeg bruge EHIC eller GHIC i Storbritannien?", a: "Besøgende fra EU, EFTA og Schweiz kan med et gyldigt EHIC/GHIC udstedt i hjemlandet få medicinsk nødvendig behandling under et midlertidigt ophold. EHIC/GHIC dækker dog ikke alle udgifter og erstatter ikke en rejseforsikring." },
      { q: "Skal jeg have rejseforsikring til Storbritannien?", a: "En rejseforsikring anbefales stærkt. EHIC/GHIC dækker ikke alt – fx er hjemtransport (repatriering) normalt ikke med. En rejseforsikring er altså et vigtigt supplement og kan ikke erstattes af GHIC." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "alarmnumre-og-sikkerhed",
    group: "travel",
    title: "Alarmnummer i Storbritannien: ring 999 i nødsituationer | 2026",
    description:
      "Ring 999 (eller 112) i en nødsituation – politi, brandvæsen og ambulance, gratis. 101 til politiet, når det ikke haster, og NHS 111 til lægefaglig rådgivning.",
    h1: "Alarmnumre og sikkerhed i Storbritannien",
    lead:
      "Det vigtigste først: I en nødsituation ringer du 999 (eller 112). Her ser vi på forskellen mellem 999 og 101, lægerådgivningen NHS 111, hvordan et opkald til alarmcentralen foregår, og nogle generelle sikkerhedsråd, når du er på rejse.",
    card: "999 eller 112 i nødsituationer, 101 til politiet og NHS 111 – plus sikkerhedsråd.",
    sections: [
      { h: "Alarmnumre: 999 og 112", blocks: [
        "I en nødsituation – når du har brug for politi, brandvæsen eller ambulance – ringer du 999. Nummeret er gratis og kan ringes op fra enhver telefon, også uden dækning fra dit eget mobilselskab.",
        "Også 112, det fælles europæiske alarmnummer, virker i Storbritannien og går til samme alarmcentral som 999. Du kan altså bruge hvilket som helst af de to numre.",
        "Når du ringer, bliver du spurgt, hvilken tjeneste du har brug for – police, fire, ambulance eller coastguard (kystvagt).",
      ] },
      { h: "Når det ikke er akut: 101 og NHS 111", blocks: [
        "Er situationen ikke akut, findes der særskilte numre, som du skal bruge i stedet for 999:",
        { ul: [
          "101 – politiets nummer til henvendelser, der ikke haster, fx for at anmelde en mindre forbrydelse eller en mistet genstand.",
          "NHS 111 – lægefaglig rådgivning, når det ikke er akut. Du får råd om symptomer og bliver henvist til det rette behandlingssted.",
        ] },
        "Når du bruger det rigtige nummer, kan alarmcentralen på 999 prioritere de reelle nødsituationer. Mere om, hvordan det britiske sundhedsvæsen fungerer, kan du læse i guiden om [lægehjælp og NHS i Storbritannien](/da/sundhed-nhs-og-ghic/).",
      ] },
      { h: "Sådan foregår et alarmopkald", blocks: [
        "Når du ringer 999 eller 112, bliver du stillet om til en operatør, der spørger, hvilken tjeneste du har brug for, og hvor du befinder dig. Prøv at beskrive så tydeligt som muligt, hvor du er, og hvad der er sket.",
        "Har du svært ved at høre eller tale, findes der særlige løsninger: Du kan sende en SMS til 999 via den forhåndsregistrerede tjeneste emergencySMS, eller bruge den såkaldte silent solution (tryk 55, når opkaldet er stillet igennem), hvis du ikke kan tale frit. Betingelserne for disse tjenester er beskrevet nærmere i de officielle kilder.",
      ] },
      { h: "Generelle sikkerhedsråd til rejsende", blocks: [
        "Som mange andre rejsemål kan det være en god idé at være opmærksom på lommetyveri og tasketyveri på turiststeder, i den kollektive trafik og på steder med mange mennesker. Nogle almindelige råd:",
        { ul: [
          "Hold værdigenstande tæt på kroppen, og lad ikke tasker stå uden opsyn.",
          "Undgå at vise telefon, pung og dyre ting frem i menneskemængder.",
          "Anmeld mistede genstande eller mindre forbrydelser til politiet på 101 eller på nærmeste politistation.",
        ] },
        "Det kan også være klogt at have en rejseforsikring. Planlægger du at køre bil, kan du læse om de britiske færdselsregler i guiden om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
      { h: "Mistet pas: kontakt ambassaden", blocks: [
        "Mister du dit pas under rejsen, skal du henvende dig til dit eget lands ambassade eller konsulat for at få hjælp til midlertidige rejsedokumenter. Er passet stjålet, kan det også være en god idé at anmelde tyveriet til politiet. Til indrejsen skal du desuden have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og status på din ansøgning kan du se via [statustjekket for ETA](/da/tjek-status/).",
      ] },
    ],
    faq: [
      { q: "Hvilket nummer ringer man til i en nødsituation i Storbritannien?", a: "Ring 999 i en nødsituation, der kræver politi, brandvæsen eller ambulance. Nummeret 112 virker på samme måde og går til samme alarmcentral. Begge er gratis og kan ringes op fra enhver telefon." },
      { q: "Hvad gør jeg, hvis det ikke er akut?", a: "Ved politisager, der ikke haster, ringer du 101. Har du brug for lægefaglig rådgivning, der ikke er akut, ringer du NHS 111, som giver råd om symptomer og henviser til det rette behandlingssted." },
      { q: "Hvordan beskytter jeg mig mod lommetyve?", a: "Hold værdigenstande tæt på kroppen, undgå at vise telefon og pung frem i menneskemængder, og vær opmærksom på turiststeder og i den kollektive trafik. Bliver du bestjålet, kan du kontakte politiet på 101 eller gå til nærmeste politistation." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "helligdage-bank-holidays-2026",
    group: "travel",
    title: "Bank holidays i Storbritannien 2026: helligdage",
    description:
      "Bank holidays 2026 i England og Wales ifølge GOV.UK: Bankerne lukker, butikker har kortere åbningstider, og trafikken er tyndere – juledag er næsten alt lukket.",
    h1: "Bank holidays i Storbritannien 2026",
    lead:
      "På en bank holiday holder bankerne lukket, mange butikker har kortere åbningstider, og den kollektive trafik kan køre sjældnere. Her er de officielle helligdage i England og Wales i 2026 ifølge GOV.UK – og hvad de betyder for din rejse.",
    card: "De officielle helligdage i England og Wales 2026 og hvad der har åbent.",
    sections: [
      { h: "Bank holidays i England og Wales 2026", blocks: [
        "Ifølge GOV.UK gælder følgende officielle bank holidays i England og Wales i 2026. Skotland og Nordirland har delvis andre datoer.",
        { table: { head: ["Dato", "Helligdag"], rows: [
          ["1. januar", "Nytårsdag (New Year's Day)"],
          ["3. april", "Langfredag (Good Friday)"],
          ["6. april", "2. påskedag (Easter Monday)"],
          ["4. maj", "Early May bank holiday"],
          ["25. maj", "Spring bank holiday"],
          ["31. august", "Summer bank holiday"],
          ["25. december", "Juledag (Christmas Day)"],
          ["28. december", "Erstatningsdag for 2. juledag (Boxing Day)"],
        ] } },
      ] },
      { h: "Hvad har åbent – og hvad bliver påvirket?", blocks: [
        "På en bank holiday holder bankerne lukket. Mange butikker og seværdigheder har åbent, men ofte med kortere åbningstider. Den kollektive trafik kan køre sjældnere, fx efter søndagskøreplan.",
        "Tjek åbningstider og køreplaner på forhånd for netop den dag, du planlægger, da det varierer fra sted til sted og fra virksomhed til virksomhed.",
      ] },
      { h: "Juledag: næsten alt er lukket", blocks: [
        "Juledag (25. december) er speciel: Næsten alt holder lukket, og det meste af den kollektive trafik er indstillet. Rejser du i julen, bør du planlægge dagene med god margin og ikke regne med normal trafik.",
      ] },
      { h: "Erstatningsdage, når helligdagen falder i en weekend", blocks: [
        "Falder en bank holiday på en lørdag eller søndag, flyttes fridagen normalt til den førstkommende hverdag (en såkaldt erstatningsdag). Det er forklaringen på, at nogle af datoerne i listen ovenfor ligger på en hverdag efter en weekend.",
      ] },
      { h: "Før du rejser til Storbritannien", blocks: [
        "Til selve indrejsen skal du have en gyldig UK ETA – se [sådan søger du om UK ETA](/da/sadan-ansoger-du/) – og du kan følge ansøgningen via [statustjekket for ETA](/da/tjek-status/). Ved ankomsten skal du gennem paskontrollen og eGates. Skal du køre bil under rejsen, kan du læse om [at køre bil i Storbritannien](/da/bilkorsel-i-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Hvornår er der bank holidays i Storbritannien i 2026?", a: "I England og Wales er de officielle bank holidays i 2026 ifølge GOV.UK: 1. januar (nytårsdag), 3. april (langfredag), 6. april (2. påskedag), 4. maj (Early May), 25. maj (Spring), 31. august (Summer), 25. december (juledag) og 28. december (erstatningsdag for 2. juledag). Skotland og Nordirland har delvis andre datoer." },
      { q: "Har butikkerne åbent på bank holidays?", a: "Bankerne holder lukket. Mange butikker og seværdigheder har åbent, men ofte med kortere åbningstider. Juledag (25. december) er næsten alt lukket." },
      { q: "Hvordan påvirkes den kollektive trafik på helligdage?", a: "Den kollektive trafik kan køre sjældnere, fx efter søndagskøreplan. Juledag er det meste af trafikken indstillet, så planlæg rejsedagene med god margin." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
