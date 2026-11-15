import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（no・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。
// ノルウェーは EU 外：EU ローミング・EHIC/GHIC は原本どおりの対象（EU/EFTA/スイス）として書き、ノルウェー人に当てはまるとは断定しない。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "kollektivtransport-london-oyster",
    group: "travel",
    title: "Betale for reiser i London: Oyster og kontaktløst (2026)",
    description:
      "I London betaler du T-bane, buss og tog kontaktløst, med mobilen eller Oyster-kort – samme pris, med daglige og ukentlige pristak. Sjekk beløpene hos TfL.",
    h1: "Betale for reiser i London: Oyster og kontaktløst",
    lead: "I Londons T-bane, busser og tog betaler du enklest ved å holde et kontaktløst kort, mobilen eller et Oyster-kort mot leseren. Kontaktløst og Oyster koster det samme, og daglige og ukentlige pristak begrenser hva du betaler.",
    card: "Kontaktløst eller Oyster, pristak og hvorfor bussen ikke tar kontanter",
    sections: [
      { h: "Kontaktløst eller Oyster – slik betaler du", blocks: [
        "Kollektivtrafikken i London – T-banen (the Tube), busser og tog – bygger på «pay as you go»: du holder et kontaktløst betalingskort, en mobil med betalingsfunksjon eller et Oyster-kort mot den gule leseren og betaler per tur.",
        "Kontaktløst og Oyster har samme pris. Har du allerede et kontaktløst kort eller en mobil med betaling hjemmefra, kan du reise til samme takst uten å kjøpe Oyster-kort. For besøkende er kontaktløst som regel det enkleste. Et Visitor Oyster-kort må derimot bestilles før avreise.",
      ] },
      { h: "Pristak (capping): du betaler ikke ubegrenset", blocks: [
        "Det finnes pristak per dag og per uke. Når reisene dine til sammen har nådd takbeløpet, blir du ikke belastet mer for resten av reisene i perioden. Takbeløpene varierer etter hvilke soner du reiser i. Beløpene endres over tid, så sjekk de aktuelle tallene hos TfL i stedet for å stole på et fast beløp.",
      ] },
      { h: "T-bane og tog: registrer deg inn og ut", blocks: [
        "På T-bane og tog holder du kortet mot leseren både når du går på og når du går av (touch in og touch out) – ellers kan du bli belastet feil takst. På busser og trikk (tram) gjør du det bare når du går på; du trenger ikke registrere deg ut.",
        { ul: [
          "Tube / tog: registrer deg inn ved start og ut ved slutt.",
          "Buss / trikk: registrer deg bare inn.",
        ] },
      ] },
      { h: "Bussene tar ikke kontanter", blocks: [
        "Bussene i London tar ikke imot kontanter. Du kan bare betale med kontaktløst kort, mobil eller Oyster-kort. Sørg derfor for å ha et kontaktløst betalingsmiddel som fungerer, før du går på.",
      ] },
      { h: "Bruk samme kort hver gang", blocks: [
        "Bruk samme kort eller enhet på hver tur. Ikke del ett og samme kontaktløse kort mellom flere reisende – for at pristakene skal beregnes riktig, må hver person bruke sitt eget betalingsmiddel.",
      ] },
      { h: "Før du reiser til Storbritannia", blocks: [
        "Kollektivtrafikken bruker du først etter ankomst. For selve innreisen trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og du kan følge søknaden via [statussjekken for ETA](/no/sjekk-status/). Ved ankomst går du gjennom passkontrollen og eGates. Skal du heller kjøre bil, kan du lese om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Trenger jeg et Oyster-kort i London?", a: "Ikke nødvendigvis. Har du et kontaktløst betalingskort eller en mobil med betaling, kan du reise direkte til samme pris som med Oyster. Kontaktløst og Oyster koster det samme, så for besøkende holder det som regel med et kontaktløst kort." },
      { q: "Kan man betale kontant på bussen i London?", a: "Nei. Bussene i London tar ikke imot kontanter. Du betaler med kontaktløst kort, mobil eller Oyster-kort ved å holde det mot leseren når du går på." },
      { q: "Hva skjer hvis jeg reiser mye i løpet av en dag?", a: "Det finnes pristak (capping) per dag og per uke. Når du har nådd takbeløpet, blir du ikke belastet mer for flere reiser. Takbeløpene varierer etter sone og endres over tid – sjekk aktuelle beløp hos Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "kjore-bil-i-storbritannia",
    group: "travel",
    title: "Kjøre bil i Storbritannia: utenlandsk førerkort i 12 mnd (2026)",
    description:
      "Personbil fra 17 år i Storbritannia. Besøkende kan kjøre på gyldig førerkort fra hjemlandet i inntil 12 måneder fra innreise. Venstrekjøring, forsikring påbudt.",
    h1: "Kan man kjøre bil i Storbritannia med utenlandsk førerkort?",
    lead: "Ja. Bor du utenfor Storbritannia, kan du kjøre personbil og motorsykkel på et gyldig førerkort fra hjemlandet i inntil 12 måneder fra innreisedagen. Laveste alder for å kjøre personbil i Storbritannia er 17 år, det er venstrekjøring, og gyldig bilforsikring er påbudt.",
    card: "12-månedersregelen, internasjonalt førerkort, venstrekjøring og forsikring",
    sections: [
      { h: "12-månedersregelen: kjøre på førerkort fra hjemlandet", blocks: [
        "Bor du utenfor Storbritannia, kan du kjøre på et gyldig førerkort fra hjemlandet ditt i inntil 12 måneder, regnet fra dagen du reiste inn i landet. Retten gjelder for:",
        { ul: [
          "Personbiler (inntil 3 500 kg og med plass til høyst åtte passasjerer).",
          "Motorsykler.",
        ] },
        "Førerkortet må være gyldig under hele oppholdet. Perioden på 12 måneder regnes fra innreisedagen, ikke fra datoen førerkortet ble utstedt.",
      ] },
      { h: "Internasjonalt førerkort (IDP) og oversettelse", blocks: [
        "Du kan kjøre på et gyldig førerkort fra hjemlandet. Er førerkortet ikke utstedt på engelsk, anbefales en offisiell oversettelse eller et internasjonalt førerkort (IDP), slik at myndigheter og utleiefirmaer lett kan lese opplysningene.",
        "Kravene varierer etter hvilket land førerkortet er utstedt i. Sjekk derfor din egen situasjon på GOV.UK før reisen – reglene kan være forskjellige avhengig av hjemlandet ditt.",
      ] },
      { h: "Venstrekjøring, laveste alder og forsikring", blocks: [
        { ul: [
          "Venstrekjøring: i Storbritannia kjører man på venstre side av veien.",
          "Laveste alder: 17 år for å kjøre personbil – da begynner de fleste å øvelseskjøre.",
          "Gyldig bilforsikring er påbudt for å kjøre i Storbritannia.",
        ] },
        "Sjekk at forsikringen din gjelder i Storbritannia før du kjører. Leier du bil, er forsikringen vanligvis inkludert i avtalen – les vilkårene nøye.",
      ] },
      { h: "Store kjøretøy: busser og lastebiler", blocks: [
        "For store kjøretøy som busser og lastebiler gjelder andre regler enn for personbiler og motorsykler. Planlegger du å kjøre et slikt kjøretøy, må du sjekke de særskilte kravene på GOV.UK før reisen.",
      ] },
      { h: "ETA og førerkort: to forskjellige ting", blocks: [
        "En UK ETA er en tillatelse til innreise i Storbritannia – den avgjør ikke om du får kjøre bil. Retten til å kjøre styres av et eget regelverk for førerkort, alder, forsikring og type kjøretøy.",
        "For selve innreisen trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og status på søknaden finner du via [statussjekken for ETA](/no/sjekk-status/). Les også om tollregler og passkontrollen med eGates før reisen.",
      ] },
    ],
    faq: [
      { q: "Kan jeg kjøre bil i Storbritannia med førerkort fra hjemlandet?", a: "Ja. Besøkende som bor utenfor Storbritannia, kan kjøre personbil og motorsykkel på et gyldig førerkort fra hjemlandet i inntil 12 måneder regnet fra innreisedagen." },
      { q: "Trenger jeg internasjonalt førerkort (IDP) eller oversettelse?", a: "Du kan kjøre på et gyldig førerkort fra hjemlandet. Er førerkortet ikke på engelsk, anbefales en offisiell oversettelse eller et internasjonalt førerkort (IDP). Reglene varierer fra land til land – sjekk din situasjon på gov.uk/driving-nongb-licence." },
      { q: "Når kan man ta førerkort i England – hva er aldersgrensen?", a: "Aldersgrensen for personbil i England (og resten av Storbritannia) er 17 år – da kan de fleste begynne å øvelseskjøre. I Storbritannia kjører man på venstre side av veien, og det er påbudt å ha gyldig bilforsikring." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "valuta-pund-kontanter-tips",
    group: "travel",
    title: "Valuta i England og Skottland 2026: britisk pund (GBP)",
    description:
      "Valutaen i England, Skottland og London er britisk pund (GBP, £) også i 2026. Trenger du kontanter? Som regel ikke – kort holder langt. Fra £10 000: deklarer.",
    h1: "Valuta i England og Skottland: britisk pund, kontanter og tips",
    lead: "Valutaen i England, Skottland, Wales og Nord-Irland er britisk pund (GBP, £) – også i 2026. Kort, særlig kontaktløs betaling, er svært utbredt, og kontanter på £10 000 eller mer må deklareres ved innreise.",
    card: "Britisk pund, kort eller kontanter, deklarering fra £10 000 og tips",
    sections: [
      { h: "Hvilken valuta brukes i England og Skottland? Britisk pund (GBP, £)", blocks: [
        "Betalingsmiddelet i Storbritannia er britisk pund (GBP, £). Euro og andre valutaer tas generelt ikke imot i vanlige butikker, så du trenger enten kort eller pund i kontanter til utgiftene på stedet. Også i Skottland er valutaen pund. Der gir Bank of Scotland, Clydesdale Bank og The Royal Bank of Scotland ut egne sedler, mens Bank of England gir ut sedlene i England og Wales (kilde: Bank of England).",
      ] },
      { h: "Kontanter: deklareringsplikt fra £10 000", blocks: [
        "Reiser du inn i Storbritannia (GB) med £10 000 eller mer i kontanter – inkludert tilsvarende beløp i andre valutaer – har du plikt til å deklarere summen. Deklarasjonen gjøres på nett på forhånd eller i den røde sonen ved ankomst. Unnlater du å deklarere, kan hele beløpet bli beslaglagt, og du kan få bot på inntil £5 000.",
      ] },
      { h: "Trenger man kontanter i London og England? Kort eller kontanter", blocks: [
        "Kort, særlig kontaktløs betaling, er svært utbredt i Storbritannia. I mange situasjoner klarer du deg helt uten kontanter – fra kollektivtrafikk og kafeer til større butikker. Kollektivtrafikken i London (TfL) betaler du med kontaktløst kort eller Oyster (kilde: TfL).",
        { ul: [
          "Det kan likevel være praktisk med litt kontanter til mindre butikker, markeder og tips.",
          "Sjekk med banken din om gebyrer for kortbetaling i utlandet før reisen.",
        ] },
      ] },
      { h: "Hvor veksler man penger?", blocks: [
        "Du kan veksle penger i banker, på vekslingskontorer og på flyplasser. Husk at veksling på flyplasser ofte gir en dårligere kurs. Sammenlign gjerne kurser før du veksler større beløp.",
      ] },
      { h: "Tips: skikk, ikke krav", blocks: [
        "Tips i Storbritannia er en skikk og ikke et lovpålagt krav. Retningslinjene varierer etter situasjon:",
        { ul: [
          "Restauranter: en «service charge» på 10–12,5 % legges noen ganger til på regningen – sjekk spesifikasjonen. Kommer det ikke noe slikt tillegg, er rundt 10 % en vanlig rettesnor.",
          "Pub: bestiller du i baren, forventes det normalt ikke tips.",
          "Taxi: det er vanlig å runde opp.",
        ] },
      ] },
      { h: "Greit å vite før innreisen", blocks: [
        "Kontanter deklareres ved behov i tollen, som kommer etter passkontrollen. For innreisen trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og du kan følge søknaden via [statussjekken for ETA](/no/sjekk-status/). Skal du betale reiser i London, se [Oyster og kontaktløs betaling](/no/kollektivtransport-london-oyster/), og planlegger du å leie bil, kan du lese om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Hvilken valuta brukes i England og Skottland i 2026?", a: "Britisk pund (GBP, £) i hele Storbritannia. I Skottland gir tre banker ut egne sedler, men valutaen er den samme." },
      { q: "Trenger man kontanter i London?", a: "Som regel ikke: kort, særlig kontaktløs betaling, er svært utbredt, og kollektivtrafikken (TfL) betaler du med kontaktløst kort eller Oyster. Litt kontanter kan være praktisk i mindre butikker, på markeder og til tips." },
      { q: "Fra hvilket beløp må jeg deklarere kontanter ved innreise til Storbritannia?", a: "Reiser du inn i Storbritannia (GB) med £10 000 eller mer i kontanter (inkludert tilsvarende beløp i andre valutaer), har du plikt til å deklarere summen. Det gjøres på nett på forhånd eller i den røde sonen ved ankomst. Unnlater du å deklarere, kan hele beløpet bli beslaglagt, og du kan få bot på inntil £5 000." },
      { q: "Holder det med kort i Storbritannia?", a: "Kort, inkludert kontaktløs betaling, er svært utbredt og godtas i de fleste situasjoner. I mange tilfeller klarer du deg helt med kort. Det kan likevel være praktisk å ha litt kontanter til mindre butikker eller tips." },
      { q: "Er tips obligatorisk i Storbritannia?", a: "Nei, tips er en skikk og ikke et lovpålagt krav. På restauranter legges det noen ganger en «service charge» på 10–12,5 % til regningen – sjekk spesifikasjonen. Kommer det ingen serviceavgift, er rundt 10 % en vanlig rettesnor." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "momsrefusjon-vat-storbritannia",
    group: "travel",
    title: "Momsrefusjon i Storbritannia (VAT refund): dette gjelder (2026)",
    description:
      "Fra 1. januar 2021 refunderes momsen som regel ikke på varer du tar med hjem fra England, Skottland og Wales. Sendes varen utenlands, kan den bli momsfri.",
    h1: "Momsrefusjon (VAT refund) ved shopping i Storbritannia",
    lead: "En vanlig misforståelse: siden 2021 refunderes som regel ikke momsen på varer reisende tar med seg hjem fra Storbritannia. Unntaket er når butikken sender varen til utlandet, og Nord-Irland behandles for seg.",
    card: "Ingen momsrefusjon for håndbagasje siden 2021 – unntak og Nord-Irland",
    sections: [
      { h: "Det viktigste: ingen momsrefusjon for håndbagasje siden 2021", blocks: [
        "Dette er punktet som ofte misforstås. Siden 1. januar 2021 refunderes som regel ikke lenger momsen i Storbritannia (England, Skottland og Wales) på varer som reisende kjøper og tar med seg hjem i håndbagasjen.",
        "Ordningen for momsrefusjon ved detaljeksport (VAT Retail Export Scheme) ble avviklet på det tidspunktet. Det betyr at du normalt ikke kan få tilbake momsen på varer du selv tar med ut av landet.",
      ] },
      { h: "Unntaket: når butikken sender varen direkte til utlandet", blocks: [
        "Sender en butikk varen direkte til en adresse i utlandet, kan kjøpet i noen tilfeller skje uten moms. Dette avhenger likevel av butikkens rutiner og vilkårene som gjelder, så sjekk med den enkelte butikken hva som er mulig før du handler.",
      ] },
      { h: "Nord-Irland behandles for seg", blocks: [
        "Nord-Irland har delvis andre regler. For reisende som ikke er bosatt i EU, kan en viss momsrefusjon fortsatt finnes der, knyttet til Nord-Irland-protokollen. Vilkårene kan endres, så sjekk hva som gjelder på tidspunktet for reisen din.",
      ] },
      { h: "Greit å vite på flyplassen", blocks: [
        "Selv om du ser skilt med «Tax Free» eller tidligere refusjonsskranker, bør du være klar over at momsen på varer du tar med i håndbagasjen som regel ikke refunderes i England, Skottland eller Wales. Ikke regn med at du får refusjon, men sjekk de gjeldende reglene hvis du er usikker.",
      ] },
      { h: "Les videre før reisen", blocks: [
        "Hva du ellers kan ta med inn og ut, beskrives i guiden om tollregler, og hvordan innreisen foregår, i guiden om passkontrollen og eGates. For innreisen trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og status finner du via [statussjekken for ETA](/no/sjekk-status/).",
      ] },
    ],
    faq: [
      { q: "Kan man få tilbake momsen (VAT) på shopping i Storbritannia?", a: "I Storbritannia (England, Skottland og Wales) refunderes som regel ikke lenger momsen på varer som reisende tar med seg hjem i håndbagasjen. Ordningen for momsrefusjon ved detaljeksport (VAT Retail Export Scheme) ble avviklet der 1. januar 2021. Dette skiller seg fra hvordan det fungerte tidligere og fra det som gjelder i enkelte andre land." },
      { q: "Finnes det noen måte å handle uten moms i Storbritannia?", a: "Sender en butikk varen direkte til en adresse i utlandet, kan kjøpet i noen tilfeller skje uten moms. Dette avhenger likevel av butikkens rutiner og vilkårene som gjelder. Sjekk med den enkelte butikken hva som er mulig." },
      { q: "Gjelder de samme reglene i Nord-Irland?", a: "Nord-Irland behandles for seg og har delvis andre regler. For reisende som ikke er bosatt i EU, kan en viss momsrefusjon fortsatt finnes der, knyttet til Nord-Irland-protokollen. Sjekk de gjeldende vilkårene før du regner med refusjon." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "sim-kort-esim-mobil-storbritannia",
    group: "travel",
    title: "SIM-kort, eSIM og mobildata i Storbritannia (2026)",
    description:
      "De største mobiloperatørene i Storbritannia er EE, O2, Vodafone og Three. Kontantkort, eSIM, ulåst telefon og roaming etter brexit – slik holder du deg på nett.",
    h1: "SIM-kort, eSIM og mobildata i Storbritannia",
    lead: "De største mobilnettene i Storbritannia er EE, O2, Vodafone og Three. Som besøkende kan du velge et lokalt kontantkort eller et eSIM – forutsatt at telefonen er ulåst – eller bruke ditt eget abonnement etter å ha sjekket roamingvilkårene med operatøren.",
    card: "Mobiloperatører, kontantkort eller eSIM, ulåst telefon og roaming",
    sections: [
      { h: "Mobiloperatører i Storbritannia", blocks: [
        "De største mobilnettene i Storbritannia er EE, O2, Vodafone og Three. I tillegg finnes flere virtuelle operatører (MVNO) som bruker de samme nettene, for eksempel giffgaff, Lebara og Lyca.",
        "Dette området har få enhetlige offisielle regler, og priser og abonnementer endres ofte. Se på informasjonen nedenfor som generell veiledning, og sjekk gjeldende vilkår hos operatøren.",
      ] },
      { h: "Alternativer for besøkende: kontantkort eller eSIM", blocks: [
        { ul: [
          "Kontantkort / SIM-kort for turister: kjøpes på flyplasser, i mobilbutikker og i dagligvarebutikker.",
          "eSIM: kjøpes på nett og aktiveres med en gang hvis telefonen din støtter det – da slipper du å bytte fysisk SIM-kort.",
        ] },
      ] },
      { h: "Ulåst telefon er en forutsetning", blocks: [
        "For å kunne bruke et lokalt SIM-kort eller eSIM må telefonen din være operatørulåst (SIM-ulåst). Sjekk dette med din nåværende operatør i god tid før avreise.",
      ] },
      { h: "Roaming etter brexit", blocks: [
        "Besøkende fra EU bør være oppmerksomme på roamingavgifter. Etter brexit kan noen operatører ta betalt for roaming i Storbritannia, mens andre ikke gjør det. Vilkårene varierer – sjekk med operatøren din før avreise for å unngå uventede kostnader.",
        { note: "Sjekk hva som gjelder for deg og ditt abonnement hos operatøren din før du reiser." },
      ] },
      { h: "Dekning og gratis Wi-Fi", blocks: [
        "Dekningen er generelt god i byene, mens den på landsbygda kan variere mellom operatørene. Du kan sjekke dekningen i Ofcoms dekningskart.",
        "Gratis Wi-Fi er vanlig på kafeer, i kollektivtrafikken og på mange offentlige steder, og kan være et supplement til mobilforbindelsen.",
      ] },
      { h: "Greit å vite før innreisen", blocks: [
        "For innreisen til Storbritannia trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og status på søknaden finner du via [statussjekken for ETA](/no/sjekk-status/). Planlegger du å leie bil, kan du lese om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Trenger jeg et lokalt SIM-kort i Storbritannia?", a: "Det kommer an på din nåværende operatør. Et lokalt kontantkort eller et eSIM kan være praktisk for å unngå roamingavgifter og få mobildata på stedet. eSIM kjøpes på nett og aktiveres med en gang hvis telefonen din støtter det." },
      { q: "Kan jeg bruke eSIM i Storbritannia?", a: "Ja, hvis telefonen din støtter eSIM og er ulåst, kan du kjøpe et eSIM på nett og aktivere det uten å bytte fysisk SIM-kort. Sjekk på forhånd at enheten er kompatibel og operatørulåst." },
      { q: "Kan jeg bruke en EU-mobil som vanlig i Storbritannia?", a: "Etter brexit tar noen operatører betalt for roaming i Storbritannia, mens andre ikke gjør det. Vilkårene varierer mellom operatører og abonnementer – sjekk med operatøren din før avreise." },
    ],
    sources: [
      { label: "Ofcom – Storbritannias tilsynsmyndighet for kommunikasjon", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "stikkontakt-storbritannia",
    group: "travel",
    title: "Stikkontakter i Storbritannia og London: type G, 230 V (2026)",
    description:
      "Britiske stikkontakter i Storbritannia og London er type G (BS 1363, tre firkantede pinner), 230 V, 50 Hz. Står det INPUT 100–240 V, holder en reiseadapter.",
    h1: "Stikkontakter i Storbritannia og London",
    lead: "Britiske stikkontakter, i London som i resten av Storbritannia, er av type G med tre firkantede pinner, og spenningen er 230 V. Om du bare trenger en adapter eller også en spenningsomformer, avgjøres av merkingen på apparatet.",
    card: "Type G med tre firkantede pinner, 230 V – adapter eller omformer?",
    sections: [
      { h: "Hvilke stikkontakter har Storbritannia og London?", blocks: [
        "Stikkontaktene i Storbritannia er av type G – støpselet har tre firkantede pinner. Spenningen er 230 V og frekvensen 50 Hz. For å koble til utstyr med en annen støpseltype trenger du en reiseadapter til type G.",
      ] },
      { h: "Er laderen merket 100–240 V? Da holder det med en adapter", blocks: [
        "Utstyr fra land med lavere spenning – som Japan (100 V) eller Nord-Amerika (120 V) – fungerer i Storbritannia hvis INPUT-merkingen på apparatet sier «100–240 V» (såkalt dual voltage). Da trenger du bare en reiseadapter til type G.",
        "Ladere til mobiler, bærbare datamaskiner og kameraer er i de fleste tilfeller merket 100–240 V. Selv om det som regel stemmer, bør du alltid lese etiketten (INPUT) på akkurat ditt apparat.",
      ] },
      { h: "Når kan det trengs en spenningsomformer?", blocks: [
        "Apparater der INPUT bare angir spenningen i hjemlandet – ofte utstyr med høy effekt, som enkelte hårfønere og rettetenger – kan trenge en spenningsomformer (transformator). Sjekk merkingen før du kobler til noe; er du usikker, er det tryggest å la apparatet bli igjen hjemme.",
      ] },
      { h: "USB-uttak og praktiske tips", blocks: [
        "Noen overnattingssteder har USB-uttak, men det sikreste er å ta med en egen reiseadapter til type G. Da kan du lade uansett hvordan rommet er utstyrt.",
      ] },
      { h: "Sjekkliste før avreise", blocks: [
        { ul: [
          "Les INPUT-merkingen på hver lader og hvert apparat.",
          "Står det 100–240 V? Da holder det med en adapter til type G.",
          "Bare hjemlandets spenning på et apparat med høy effekt? Da kan det trengs en omformer.",
          "Ta med en egen adapter i stedet for å stole på USB-uttak på rommet.",
        ] },
      ] },
      { h: "Før du reiser til Storbritannia", blocks: [
        "For selve innreisen trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og du kan følge søknaden via [statussjekken for ETA](/no/sjekk-status/). Ved ankomst går du gjennom passkontrollen og eGates. Planlegger du å kjøre bil, kan du lese om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
      { h: "Offisiell og teknisk referanse", blocks: [
        "Den britiske standarden for 13 A-støpsler og stikkontakter er BS 1363 (type G; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V og 50 Hz: Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "Fungerer laderen min i Storbritannia?", a: "Er laderen merket INPUT 100–240 V (dual voltage), fungerer den i Storbritannia – da trenger du bare en reiseadapter til type G. De fleste ladere til mobiler, datamaskiner og kameraer er merket slik. Sjekk alltid merkingen på apparatet." },
      { q: "Trenger jeg en spenningsomformer?", a: "En spenningsomformer (transformator) kan trengs for apparater med høy effekt som bare er laget for hjemlandets spenning, for eksempel enkelte hårfønere og rettetenger. Sjekk merkingen (INPUT) – står det bare hjemlandets spenning, kan en omformer være nødvendig." },
      { q: "Hvilke stikkontakter har Storbritannia og London?", a: "Britiske stikkontakter, i London som i resten av Storbritannia, er av type G med tre firkantede pinner (BS 1363, 13 A). Spenningen er 230 V og frekvensen 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "helsehjelp-nhs-ghic",
    group: "travel",
    title: "Helsehjelp, NHS og GHIC for besøkende i Storbritannia (2026)",
    description:
      "Akuttmottak (A&E) og allmennlege (GP) er gratis i NHS. Om EHIC/GHIC, hvorfor reiseforsikring anbefales sterkt, nødnummer 999 og NHS 111.",
    h1: "Helsehjelp, NHS og GHIC for besøkende i Storbritannia",
    lead: "Akuttmottak (A&E) og besøk hos allmennlege (GP) er gratis i NHS for alle. EHIC/GHIC dekker medisinsk nødvendig behandling for besøkende fra EU, EFTA og Sveits, men erstatter ikke reiseforsikring – og den anbefales sterkt.",
    card: "Gratis akutthjelp i NHS, EHIC/GHIC, reiseforsikring og nødnumre",
    sections: [
      { h: "Akutthjelp og allmennlege er gratis", blocks: [
        "I NHS er akuttmottak (A&E) og besøk hos allmennlege (GP) gratis for alle – uansett oppholdsstatus og uansett om du har med deg papirer. Dette gjelder den akutte førstehjelpen.",
      ] },
      { h: "Besøkende fra EU, EFTA og Sveits: EHIC/GHIC", blocks: [
        "Med et gyldig EHIC/GHIC utstedt i hjemlandet kan besøkende fra EU, EFTA og Sveits få den behandlingen som blir medisinsk nødvendig under et midlertidig opphold. Merk at EHIC/GHIC ikke dekker alle kostnader og ikke erstatter en reiseforsikring.",
        { note: "Sjekk hva som gjelder for deg, og ha med gyldig kort fra hjemlandet hvis ordningen omfatter deg." },
      ] },
      { h: "Besøkende uten EHIC/GHIC", blocks: [
        "Besøkende uten EHIC/GHIC kan bli fakturert for sykehusbehandling utover akuttbehandling (ifølge opplysninger 150 % av NHS sin standardsats). Akutt behandling som ikke kan vente, gis likevel alltid, og betalingen ordnes i etterkant.",
      ] },
      { h: "Reiseforsikring anbefales sterkt", blocks: [
        "En reiseforsikring anbefales sterkt. EHIC/GHIC dekker ikke alt – for eksempel er hjemtransport (repatriering) normalt ikke inkludert. Forsikringen er derfor et viktig supplement og kan ikke byttes ut med et GHIC.",
      ] },
      { h: "Nødnumre og helseråd", blocks: [
        { ul: [
          "999 (eller 112) – nødnummer i akutte situasjoner.",
          "NHS 111 – for medisinske råd som ikke haster.",
          "Reseptbelagte legemidler kan medføre en reseptavgift (i England).",
        ] },
        "Mer om nødnumrene finner du i guiden om [nødnumre og sikkerhet i Storbritannia](/no/nodnummer-sikkerhet-storbritannia/).",
      ] },
      { h: "Greit å vite før innreisen", blocks: [
        "For innreisen til Storbritannia trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og status på søknaden finner du via [statussjekken for ETA](/no/sjekk-status/). Planlegger du å leie bil, kan du lese om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Koster akutthjelp penger i Storbritannia?", a: "Akuttmottak (A&E) og besøk hos allmennlege (GP) er gratis i NHS for alle, uansett oppholdsstatus eller papirer. Sykehusbehandling utover akuttbehandling kan derimot medføre kostnader for besøkende uten EHIC/GHIC." },
      { q: "Kan jeg bruke EHIC eller GHIC i Storbritannia?", a: "Besøkende fra EU, EFTA og Sveits kan med et gyldig EHIC/GHIC utstedt i hjemlandet få medisinsk nødvendig behandling under et midlertidig opphold. EHIC/GHIC dekker likevel ikke alle kostnader og erstatter ikke reiseforsikring. Sjekk hva som gjelder for deg." },
      { q: "Trenger jeg reiseforsikring til Storbritannia?", a: "Reiseforsikring anbefales sterkt. EHIC/GHIC dekker ikke alt – for eksempel er hjemtransport (repatriering) normalt ikke inkludert. En reiseforsikring er altså et viktig supplement og kan ikke byttes ut med GHIC." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "nodnummer-sikkerhet-storbritannia",
    group: "travel",
    title: "Nødnummer i Storbritannia: ring 999 i nød, 111 for helse (2026)",
    description:
      "Ring 999 (eller 112) i en nødsituasjon – politi, brannvesen og ambulanse, gratis. 101 for politiet i saker som ikke haster, og NHS 111 for helseråd.",
    h1: "Nødnumre og sikkerhet i Storbritannia",
    lead: "Det viktigste først: i en nødsituasjon ringer du 999 (eller 112). For politisaker som ikke haster ringer du 101, og for helseråd som ikke er akutte ringer du NHS 111.",
    card: "999 og 112 i nød, 101 og NHS 111 når det ikke haster, og sikkerhetsråd",
    sections: [
      { h: "Nødnumre: 999 og 112", blocks: [
        "I en nødsituasjon – når du trenger politi, brannvesen eller ambulanse – ringer du 999. Nummeret er gratis og kan ringes fra hvilken som helst telefon, også uten dekning fra din egen operatør.",
        "Også 112, det felles europeiske nødnummeret, fungerer i Storbritannia og går til samme nødsentral som 999. Du kan altså bruke hvilket som helst av numrene.",
        "Når du ringer, blir du spurt om hvilken tjeneste du trenger – police, fire, ambulance eller coastguard (kystvakt).",
      ] },
      { h: "Saker som ikke haster: 101 og NHS 111", blocks: [
        "Er situasjonen ikke akutt, finnes det egne numre du bruker i stedet for 999:",
        { ul: [
          "101 – politiets nummer for saker som ikke haster, for eksempel for å anmelde et mindre lovbrudd eller en mistet eiendel.",
          "NHS 111 – helseråd som ikke er akutte. Du får råd om symptomer og blir henvist videre til riktig behandlingsnivå.",
        ] },
        "Å bruke riktig nummer gjør at nødsentralen på 999 kan prioritere de virkelige nødsituasjonene. Mer om hvordan det britiske helsevesenet fungerer, finner du i guiden om [helsehjelp og NHS i Storbritannia](/no/helsehjelp-nhs-ghic/).",
      ] },
      { h: "Slik foregår en nødsamtale", blocks: [
        "Når du ringer 999 eller 112, blir du satt over til en operatør som spør hvilken tjeneste du trenger og hvor du befinner deg. Prøv å beskrive så tydelig som mulig hvor du er og hva som har skjedd.",
        "For deg som har vanskelig for å høre eller snakke, finnes egne løsninger, som å sende SMS til 999 via den forhåndsregistrerte tjenesten emergencySMS, eller den såkalte silent solution (å trykke 55 når samtalen er satt over) hvis du ikke kan snakke fritt. Vilkårene for disse tjenestene er nærmere beskrevet i de offisielle kildene.",
      ] },
      { h: "Generelle sikkerhetsråd for reisende", blocks: [
        "Som på mange reisemål kan det være lurt å være oppmerksom på lommetyveri og veskenapping på turiststeder, i kollektivtrafikken og på trange steder med mye folk. Noen vanlige råd:",
        { ul: [
          "Hold verdisaker tett inntil kroppen, og ikke la vesker stå uten tilsyn.",
          "Unngå å vise frem telefon, lommebok og dyre gjenstander i folkemengder.",
          "Meld fra om mistede gjenstander eller mindre lovbrudd til politiet på 101 eller på nærmeste politistasjon.",
        ] },
        "Det kan også være klokt å ha reiseforsikring. Planlegger du å kjøre bil, kan du lese om de britiske trafikkreglene i guiden om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
      { h: "Mistet pass: kontakt ambassaden", blocks: [
        "Mister du passet under reisen, kontakter du ditt eget lands ambassade eller konsulat for å få hjelp med midlertidige reisedokumenter. Er passet stjålet, kan det også være lurt å anmelde tyveriet til politiet. For innreisen trenger du dessuten en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og status på søknaden finner du via [statussjekken for ETA](/no/sjekk-status/).",
      ] },
    ],
    faq: [
      { q: "Hvilket nummer ringer man i en nødsituasjon i Storbritannia?", a: "Ring 999 i en nødsituasjon som krever politi, brannvesen eller ambulanse. Nummeret 112 fungerer på samme måte og går til samme nødsentral. Begge er gratis og kan ringes fra hvilken som helst telefon." },
      { q: "Hva gjør jeg hvis det ikke er akutt?", a: "For politisaker som ikke haster, ringer du 101. Trenger du helseråd som ikke er akutte, ringer du NHS 111, som gir råd om symptomer og henviser deg til riktig behandling." },
      { q: "Hvordan beskytter jeg meg mot lommetyver?", a: "Hold verdisaker tett inntil kroppen, unngå å vise frem telefon og lommebok i folkemengder, og vær oppmerksom på turiststeder og i kollektivtrafikken. Blir du frastjålet noe, kan du kontakte politiet på 101 eller gå til nærmeste politistasjon." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "bank-holidays-helligdager-2026",
    group: "travel",
    title: "Bank holidays i Storbritannia 2026: helligdager og datoer",
    description:
      "Bank holidays 2026 i England og Wales ifølge GOV.UK: bankene stenger, butikker har kortere åpningstider, færre avganger – 1. juledag er nesten alt stengt.",
    h1: "Bank holidays i Storbritannia 2026",
    lead: "På en bank holiday er bankene stengt, mange butikker har kortere åpningstider, og kollektivtrafikken kan gå sjeldnere. Her er de offisielle helligdagene i England og Wales i 2026 ifølge GOV.UK – og hva de betyr for reisen din.",
    card: "Alle bank holidays i England og Wales 2026 og hva som er åpent",
    sections: [
      { h: "Bank holidays i England og Wales 2026", blocks: [
        "Ifølge GOV.UK gjelder disse offisielle bank holidays i England og Wales i 2026. Skottland og Nord-Irland har delvis andre datoer.",
        { table: { head: ["Dato", "Helligdag"], rows: [
          ["1. januar", "Nyttårsdag (New Year's Day)"],
          ["3. april", "Langfredag (Good Friday)"],
          ["6. april", "2. påskedag (Easter Monday)"],
          ["4. mai", "Early May bank holiday"],
          ["25. mai", "Spring bank holiday"],
          ["31. august", "Summer bank holiday"],
          ["25. desember", "1. juledag (Christmas Day)"],
          ["28. desember", "Erstatningsdag for 2. juledag (Boxing Day)"],
        ] } },
      ] },
      { h: "Hva er åpent – og hva påvirkes?", blocks: [
        "På en bank holiday er bankene stengt. Mange butikker og severdigheter holder åpent, men ofte med kortere åpningstider. Kollektivtrafikken kan ha færre avganger, for eksempel søndagsruter.",
        "Sjekk åpningstider og rutetider på forhånd for akkurat den dagen du planlegger, siden det varierer mellom steder og virksomheter.",
      ] },
      { h: "1. juledag: nesten alt er stengt", blocks: [
        "1. juledag (25. desember) er spesiell: nesten alt er stengt, og det meste av kollektivtrafikken er innstilt. Reiser du i julehelgen, bør du planlegge dagene med god margin og ikke regne med vanlige avganger.",
      ] },
      { h: "Erstatningsdager når helligdagen faller på en helg", blocks: [
        "Faller en bank holiday på en lørdag eller søndag, flyttes fridagen normalt til nærmeste påfølgende hverdag (en såkalt erstatningsdag). Det er forklaringen på at enkelte datoer i listen over ligger på en hverdag etter en helg.",
      ] },
      { h: "Før du reiser til Storbritannia", blocks: [
        "For selve innreisen trenger du en gyldig UK ETA – se [slik søker du om UK ETA](/no/slik-soker-du/) – og du kan følge søknaden via [statussjekken for ETA](/no/sjekk-status/). Ved ankomst går du gjennom passkontrollen og eGates. Skal du kjøre bil under reisen, kan du lese om [å kjøre bil i Storbritannia](/no/kjore-bil-i-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Når er det bank holidays i Storbritannia i 2026?", a: "I England og Wales er de offisielle bank holidays i 2026 ifølge GOV.UK: 1. januar (nyttårsdag), 3. april (langfredag), 6. april (2. påskedag), 4. mai (Early May), 25. mai (Spring), 31. august (Summer), 25. desember (1. juledag) og 28. desember (erstatningsdag for 2. juledag). Skottland og Nord-Irland har delvis andre datoer." },
      { q: "Har butikkene åpent på bank holidays?", a: "Bankene er stengt. Mange butikker og severdigheter har åpent, men ofte med kortere åpningstider. 1. juledag (25. desember) er nesten alt stengt." },
      { q: "Hvordan påvirkes kollektivtrafikken på helligdager?", a: "Kollektivtrafikken kan ha færre avganger, for eksempel søndagsruter. 1. juledag er det meste av trafikken innstilt, så planlegg reisedagene med god margin." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
