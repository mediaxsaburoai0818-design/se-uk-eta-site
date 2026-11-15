import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（da・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "hvem-skal-have-eta",
    group: "eta",
    title: "Hvem skal have UK ETA? Nationaliteter og undtagelser 2026",
    description: "Hvem skal have UK ETA, og hvem er undtaget: britiske og irske statsborgere, personer med opholdstilladelse, airside-transit. Også børn skal have deres egen.",
    h1: "Hvem skal have en UK ETA?",
    lead: "UK ETA kræves for statsborgere i visumfrie lande ved korte ophold (turisme, forretning, kortvarige studier). Alle rejsende, også spædbørn og børn, skal have deres egen ETA.",
    card: "Hvem der skal have ETA, og hvem der er undtaget",
    sections: [
      { h: "Hvem er undtaget fra ETA", blocks: [
        { ul: [
          "Britiske og irske statsborgere (med britisk eller irsk pas)",
          "Personer med tilladelse til at bo, arbejde eller studere i Storbritannien (f.eks. visum, settled eller pre-settled status)",
          "Indehavere af et British Overseas Territories Citizen- eller British National (Overseas)-pas",
          "Personer bosat i Irland, der rejser fra Irland, Guernsey, Jersey eller Isle of Man",
          "Airside-transitpassagerer, der ikke passerer grænsekontrollen",
          "Personer, der venter på en afgørelse om en ansøgning under EU Settlement Scheme",
        ] },
      ] },
      { h: "Vigtigt at vide", blocks: [
        { ul: [
          "Personer med britisk eller irsk statsborgerskab kan ikke få en ETA og rejser på det statsborgerskabs dokumenter.",
          "Er din nationalitet ikke visumfri, kan du have brug for et visum: tjek det med GOV.UK's officielle værktøj.",
          "Også spædbørn og børn skal have deres egen ETA.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
    ],
  },

  "eta-vs-visa": {
    slug: "forskel-eta-og-visum",
    group: "eta",
    title: "UK ETA eller visum: hvad er forskellen? 2026",
    description: `Forskellen på UK ETA og visum: ETA giver ophold på op til ${F.staySixMonths} måneder til turisme, forretning og kortvarige studier, men ikke arbejde eller bosættelse.`,
    h1: "UK ETA eller visum: forskellen",
    lead: "UK ETA er ikke et visum, men en rejsetilladelse for statsborgere i visumfrie lande. Den garanterer ikke indrejse — det er grænsepolitiet, der træffer afgørelsen.",
    card: "Hvad ETA dækker, og hvornår du skal have et visum i stedet",
    sections: [
      { h: `Det må du med en ETA (højst ${F.staySixMonths} måneder)`, blocks: [
        { ul: [
          "Turisme og besøg hos familie og venner",
          "Forretningsrejser (business)",
          "Kortvarige studier (short-term study)",
          "Transit, hvor du passerer grænsekontrollen",
          "Permitted paid engagement; aktiviteter i op til 3 måneder under Creative Worker concession",
        ] },
      ] },
      { h: "Det må du IKKE med en ETA", blocks: [
        { ul: [
          `Ophold på mere end ${F.staySixMonths} måneder`,
          "Lønnet eller ulønnet arbejde for en britisk virksomhed eller som selvstændig (bortset fra undtagelserne ovenfor)",
          "Modtage offentlige ydelser (public funds)",
          "Reelt bosætte dig i Storbritannien gennem hyppige, gentagne besøg",
          "Indgå ægteskab eller registreret partnerskab (det kræver et Marriage Visitor visa)",
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
    title: "Standard Visitor-visum til UK: når ETA ikke er nok",
    description: "Afslag på UK ETA (ingen klageadgang), eller kræver din nationalitet visum? Så skal du søge Standard Visitor-visum: fra £135, svar typisk inden for 3 uger.",
    h1: "Standard Visitor-visum til UK: når ETA ikke er nok",
    lead: "Får du afslag på din UK ETA (der kan ikke klages), eller kræver din nationalitet visum, skal du søge om et Standard Visitor-visum for at rejse til Storbritannien. Herunder fakta ifølge GOV.UK.",
    card: "Priser, sagsbehandling og ansøgning, når ETA ikke kan bruges",
    sections: [
      { h: "Hvem skal have visum i stedet for ETA", blocks: [
        { ul: [
          "Personer, hvis nationalitet kræver visum til UK (de kan ikke få en ETA).",
          "Personer, hvis ETA-ansøgning har fået afslag — de kan ikke rejse ind i UK med ETA, men skal have visum.",
          "Tjek, hvilket visum du skal bruge, med værktøjet ”Check if you need a UK visa” på GOV.UK.",
        ] },
      ] },
      { h: "Priser (GOV.UK)", blocks: [
        { table: { head: ["Visum", "Pris"], rows: [
          [`Standard Visitor (op til ${F.staySixMonths} måneder)`, "£135"],
          ["Langtidsvisum — 2 år", "£506"],
          ["Langtidsvisum — 5 år", "£903"],
          ["Langtidsvisum — 10 år", "£1.128"],
          ["Transitvisum", "£74,50"],
        ] } },
        `Et langtidsvisum giver mulighed for flere indrejser, men hvert ophold er begrænset til ${F.staySixMonths} måneder. Beløbene er ifølge GOV.UK og kan ændre sig.`,
      ] },
      { h: "Sagsbehandling, gyldighed og ophold", blocks: [
        { ul: [
          "Afgørelse: som regel inden for 3 uger efter besøget på visumcentret.",
          `Ophold: højst ${F.staySixMonths} måneder pr. besøg.`,
          "Hvornår du søger: tidligst 3 måneder før rejsen.",
        ] },
      ] },
      { h: "Sådan søger du (GOV.UK)", blocks: [
        { ul: [
          "1. Søg online (du kan gemme ansøgningen og gøre den færdig senere).",
          "2. Book en tid på et visumansøgningscenter.",
          "3. Mød op for at bekræfte din identitet og afgive biometri (fingeraftryk og foto) samt dokumenter.",
          "4. Du får afgørelsen på e-mail; passet udleveres igen på centret.",
        ] },
        "Forbered blandt andet:",
        { ul: [
          "Gyldigt pas (gyldigt under hele opholdet)",
          "Rejsedatoer, overnatning og de anslåede udgifter",
          "Nuværende adresse og hvor længe du har boet der",
          "Årsindkomst (hvis relevant) og oplysninger om arbejdsgiver (hvis relevant)",
          "Eventuel strafferetlig eller udlændingeretlig historik",
          "Bekræftede oversættelser af dokumenter, der ikke er på engelsk eller walisisk",
        ] },
      ] },
      { h: "Bemærk", blocks: [
        { note: "Denne guide er en uafhængig informationstjeneste og ikke en offentlig myndigheds side. Oplysninger og priser kan ændre sig — tjek altid de officielle oplysninger på GOV.UK, før du søger." },
      ] },
    ],
    faq: [
      { q: "Hvornår skal jeg have et Standard Visitor-visum i stedet for ETA?", a: "Når din nationalitet kræver visum til UK, eller når din ETA-ansøgning har fået afslag. Et ETA-afslag kan ikke påklages — vil du rejse, skal du søge om det rette visum." },
      { q: "Hvad koster et Standard Visitor-visum?", a: `Ifølge GOV.UK koster et visum op til ${F.staySixMonths} måneder £135. Langtidsvisum: £506 (2 år), £903 (5 år), £1.128 (10 år). Transitvisum: £74,50.` },
      { q: "Hvor lang er sagsbehandlingen?", a: "Som regel får du en afgørelse inden for 3 uger efter besøget på visumcentret." },
      { q: "Hvor længe må jeg blive i UK?", a: `Standardopholdet er højst ${F.staySixMonths} måneder pr. besøg.` },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
  },

  "expiration": {
    slug: "hvornar-udlober-eta",
    group: "eta",
    title: `Hvornår udløber UK ETA? Efter ${F.validYears} år eller med passet | 2026`,
    description: `UK ETA udløber efter ${F.validYears} år eller når passet udløber, hvis det sker først. Nyt pas eller navneskift betyder ny ansøgning og ${F.fee} igen.`,
    h1: "Hvornår udløber UK ETA, og hvornår skal du søge igen?",
    lead: `En UK ETA gælder i ${F.validYears} år fra udstedelsen eller til passet udløber — det, der sker først. Får du nyt pas, skifter navn, eller er de ${F.validYears} år gået, skal du søge om en ny.`,
    card: "Hvornår din ETA udløber, og hvornår du skal søge om en ny",
    sections: [
      { h: "Reglerne for gyldighed", blocks: [
        { ul: [
          `Gyldig i ${F.validYears} år fra udstedelsesdatoen`,
          "Udløber samtidig med passet (hvis passet udløber tidligere)",
          "Giver mulighed for flere indrejser i Storbritannien i gyldighedsperioden",
          `Hvert ophold må højst vare ${F.staySixMonths} måneder`,
          "ETA er knyttet til et bestemt pas",
        ] },
        "Den grundlæggende forklaring på gyldigheden finder du i guiden [Hvor længe gælder UK ETA](/da/gyldighed/).",
      ] },
      { h: "Hvornår skal du søge om en ny ETA?", blocks: [
        "Du skal indsende en ny ansøgning om UK ETA i disse tilfælde:",
        { ul: [
          `Når der er gået ${F.validYears} år, siden din ETA blev udstedt`,
          "Når du har fået et nyt pas",
          "Ved navneskift",
          "Ved ændrede forhold, der har betydning for, om du kan få en ETA",
        ] },
      ] },
      { h: "Kan jeg rejse med en ETA, der snart udløber?", blocks: [
        "Din UK ETA skal være gyldig, når du rejser ind i Storbritannien. Den behøver ikke være gyldig under hele opholdet — det afgørende er, at den gælder på ankomstdagen. Det anbefales dog at søge om en ny i god tid.",
      ] },
      { h: "Hvordan tjekker jeg udløbsdatoen?", blocks: [
        "Ifølge GOV.UK kan du tjekke den online via gov.uk/eta (Check your ETA): her kan du se, om du har en ETA, og hvornår den udløber. Se også [Tjek status på din UK ETA](/da/tjek-status/).",
      ] },
      { h: "Hvad sker der, hvis jeg skifter pas, mens min ETA er gyldig?", blocks: [
        `ETA er knyttet til et bestemt pas. Får du et nyt pas (f.eks. fordi det gamle er udløbet, eller ved navneskift), skal du indsende en ny ETA-ansøgning og betale gebyret på ${F.fee} igen. Den gamle ETA holder op med at gælde.`,
        { note: `Tip: Det anbefales at søge om UK ETA mindst ${F.decisionDays} hverdage før den planlagte rejse, så der er tid til sagsbehandlingen.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "eta-til-born-og-familie",
    group: "eta",
    title: "UK ETA til børn og familier: skal spædbørn have en? 2026",
    description: "Også spædbørn og børn skal have deres egen UK ETA. Du kan søge for en anden person med vedkommendes pas og ansigtsfoto.",
    h1: "UK ETA til børn og familier",
    lead: "Alle rejsende, også spædbørn og børn, skal have deres egen UK ETA. Du kan indsende ansøgningen for en anden person.",
    card: "Børn og spædbørn skal have egen ETA — sådan søger du for familien",
    sections: [
      { h: "Ansøgning for familien", blocks: [
        { ul: [
          "Hver rejsende skal have sin egen ETA, også børn og spædbørn",
          "Du kan søge for en anden person: i appen, hvis personen er til stede, ellers online (der kræves foto af passet og af ansigtet)",
          "Børn, der står på formularen France-UK school trip travel information form, skal ikke have en ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "afslag-pa-eta",
    group: "eta",
    title: "Afslag på UK ETA? Det skal du gøre, og dine muligheder 2026",
    description: "Får du afslag på UK ETA, kan du ikke klage. Vil du stadig rejse til Storbritannien, skal du søge om et visum. Sådan kommer du videre.",
    h1: "Afslag på UK ETA: hvad nu?",
    lead: "Får din ansøgning om UK ETA afslag, kan du ikke klage (appeal). Vil du alligevel rejse til Storbritannien, skal du søge om et visum.",
    card: "Ingen klageadgang efter afslag — sådan søger du visum i stedet",
    sections: [
      { h: "Det gør du ved afslag", blocks: [
        { ul: [
          "Der er ingen klageadgang ved afslag på en ETA",
          "For at rejse til Storbritannien skal du søge om et passende visum",
          "Tjek på GOV.UK, hvilket visum der passer til formålet med din rejse",
        ] },
      ] },
      { h: "Næste skridt: Standard Visitor-visum", blocks: [
        "Efter et afslag på ETA er visum den eneste vej til Storbritannien. Se pris (£135), sagsbehandlingstid og fremgangsmåde i guiden [Standard Visitor-visum til UK](/da/standard-visitor-visum/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (april 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "typiske-fejl",
    group: "eta",
    title: "Typiske fejl i ansøgningen om UK ETA og den officielle app 2026",
    description: `Typiske fejl i ansøgningen om UK ETA: pasoplysninger der ikke stemmer, krav til fotos, betaling af ${F.fee} og falske hjemmesider. Brug den officielle UK ETA-app.`,
    h1: "Typiske fejl og UK ETA-appen",
    lead: "Mange problemer skyldes oplysninger, der ikke stemmer med passet. Brug altid den officielle app ”UK ETA”, og tjek oplysningerne, før du sender.",
    card: "Fejl i pasdata, fotos og betaling — og falske sider at undgå",
    sections: [
      { h: "Fejl du skal undgå", blocks: [
        { ul: [
          "Oplysningerne skal stemme nøjagtigt med passet: afvigelser giver forsinkelser eller afslag",
          "Fotos, der kræves: dit ansigt og alle passider, skarpe og korrekte",
          `Betaling (${F.fee}): Apple Pay, Google Pay eller kort (Amex, JCB, Mastercard, Visa); 3D Secure-godkendelse kan blive krævet`,
          "Et biometrisk pas (med ePassport-symbolet) er nødvendigt for at kunne læse chippen",
          "Pas på falske hjemmesider, der efterligner myndighederne og tager højere gebyrer: brug kun GOV.UK",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "officiel-side-gov-uk",
    group: "eta",
    title: "Den officielle GOV.UK-side for UK ETA – sådan genkender du falske",
    description: `Kun GOV.UK er den officielle kilde til ansøgning om UK ETA. Gebyret er præcis ${F.fee}. Sådan genkender du falske sider og undgår svindel med ekstra gebyrer.`,
    h1: "Den officielle GOV.UK-side til ansøgning om UK ETA",
    lead: "Du kan søge om UK ETA på den britiske regerings officielle hjemmeside eller i den officielle app.",
    card: "Sådan kender du den officielle side og undgår dyre kopisider",
    sections: [
      { h: "Officiel webadresse", blocks: [
        "Den officielle side for UK ETA: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta).",
        "Domænet .gov.uk betyder, at det er den britiske regerings officielle side.",
      ] },
      { h: "Sådan genkender du den officielle side", blocks: [
        { ul: [
          "Webadressen indeholder gov.uk (den britiske regerings domæne)",
          "Siden drives af Home Office",
          `Gebyret er præcis ${F.fee}`,
          "Siden har det karakteristiske sort-hvide GOV.UK-design",
          "Der opkræves ikke gebyr for «hurtigere» sagsbehandling",
        ] },
      ] },
      { h: "Sådan genkender du en falsk side", blocks: [
        { note: `Advarselstegn: webadressen indeholder ikke gov.uk; gebyret er tydeligt højere end ${F.fee}; løfter om «garanteret godkendelse»; tilbud om «hurtigere sagsbehandling»; aggressiv reklame eller påtrængende pop op-vinduer; intet GOV.UK-logo.` },
      ] },
      { h: "Den officielle app", blocks: [
        "Du kan også søge om UK ETA i den officielle app ”UK ETA”:",
        { ul: [
          "iOS: søg efter ”UK ETA” i App Store (udgiver: Home Office)",
          "Android: søg efter ”UK ETA” i Google Play (udgiver: Home Office)",
        ] },
      ] },
      { h: "Andre nyttige myndighedssider", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) — tjek, om du skal have visum til UK",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) — information om besøgsvisum",
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
    slug: "eta-app",
    group: "eta",
    title: "Den officielle UK ETA-app: søg fra mobilen | iOS og Android 2026",
    description: "Med den officielle UK ETA-app søger du direkte fra mobilen. Sådan henter du den, hvad du skal bruge (pas og foto), og hvordan ansøgningen foregår.",
    h1: "UK ETA-appen",
    lead: "Den britiske regering har udgivet den officielle app ”UK ETA”, så du kan indsende ansøgningen direkte fra din smartphone.",
    card: "Krav til telefonen, trinene i appen og scanning af passet med NFC",
    sections: [
      { h: "Om UK ETA-appen", blocks: [
        "UK ETA-appen er Home Offices officielle værktøj til ansøgning om elektronisk rejsetilladelse. Det er den anbefalede måde at søge på, fordi du kan scanne passet med NFC og få oplysningerne udfyldt automatisk.",
      ] },
      { h: "Hvor findes den", blocks: [
        { ul: [
          "iOS (App Store) — til Apple-enheder (iPhone). Kræver iOS 16 eller nyere.",
          "Android (Google Play) — til Android-enheder. Kræver Android 12 eller nyere og NFC.",
        ] },
        "Søg efter appen under navnet ”UK ETA”, udgiver: Home Office.",
      ] },
      { h: "Appens funktioner", blocks: [
        { ul: [
          "Indsend en ny ansøgning om UK ETA",
          "Scan et biometrisk pas (NFC + OCR)",
          "Tag et ansigtsfoto (selfie) til verifikation",
          "Tjek status på en eksisterende ansøgning",
          "Betal med kort, Apple Pay eller Google Pay",
          "Pushbeskeder, når status ændrer sig",
        ] },
      ] },
      { h: "Sådan søger du i appen", blocks: [
        { ul: [
          "1. Hent appen ”UK ETA” i App Store eller Google Play",
          "2. Opret en konto (e-mailadresse og adgangskode)",
          "3. Scan det biometriske pas (hold telefonen mod passet)",
          "4. Tag et ansigtsfoto (selfie)",
          "5. Besvar spørgsmålene i formularen",
          `6. Betal ${F.fee}`,
          "7. Send ansøgningen, og vent på afgørelsen",
        ] },
      ] },
      { h: "Scanning af passet (NFC)", blocks: [
        "Appen bruger NFC-teknologi (Near Field Communication) til at aflæse oplysningerne fra den biometriske chip i passet. Sådan scanner du passet:",
        { ul: [
          "Slå passet op på siden med fotoet",
          "Hold bagsiden af telefonen mod det åbne pas",
          "Hold den stille i 5-10 sekunder",
          "Vent, til appen bekræfter, at oplysningerne er aflæst",
        ] },
      ] },
      { h: "Fordele ved appen", blocks: [
        { ul: [
          "Scanning af passet med NFC — oplysningerne udfyldes automatisk",
          "Hurtigere ansøgning end via hjemmesiden",
          "Pushbeskeder om ansøgningens status",
          "Biometrisk sikkerhed (Face ID / Touch ID)",
        ] },
        { note: "Bemærk: Sørg for at hente den officielle app. Søg efter udgiveren ”Home Office” i appbutikken. Falske apps kan stjæle personoplysninger." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "transit-gennem-storbritannien",
    group: "eta",
    title: "Transit gennem Storbritannien: skal du have UK ETA? 2026",
    description: "Skal du have UK ETA ved transit? Ja, hvis du passerer grænsekontrollen (landside). Nej, hvis du skifter fly uden at gøre det (airside). Regler og undtagelser.",
    h1: "Transit gennem Storbritannien: skal jeg have UK ETA?",
    lead: "Du skal kun have UK ETA ved transit, hvis du passerer grænsekontrollen i en britisk lufthavn, før du rejser videre (landside). Skifter du fly uden at passere grænsekontrollen (airside), skal du ikke have en ETA. Er du i tvivl, så spørg dit flyselskab.",
    card: "Landside kræver ETA, airside gør ikke — sådan skelner du",
    sections: [
      { h: "Reglerne for transit", blocks: [
        "Siden 2. april 2025 skal EU-borgere, herunder danske statsborgere, have UK ETA til transit gennem Storbritannien, hvis de passerer grænsekontrollen i lufthavnen (landside-transit). Ved transit uden at passere grænsekontrollen (airside-transit) er der ikke brug for en ETA. Er du i tvivl, så spørg dit flyselskab.",
        { ul: [
          "Landside-transit (du passerer grænsekontrollen): ETA er påkrævet",
          "Airside-transit (ingen paskontrol): ETA er ikke påkrævet",
          "Ifølge det officielle factsheet skal transitpassagerer i Heathrow og Manchester, der ikke passerer den britiske paskontrol, for nuværende ikke have en ETA",
          "Tjek altid transittypen med dit flyselskab",
        ] },
      ] },
      { h: "Typer af transit", blocks: [
        { table: { head: ["Type", "Hvad det betyder", "ETA"], rows: [
          ["Airside-transit", "Du skifter fly i lufthavnen uden at passere grænsekontrollen. Er du usikker på, om du kommer igennem grænsekontrollen, så spørg dit flyselskab.", "Ikke påkrævet"],
          ["Landside-transit", "Du passerer grænsekontrollen, før du rejser videre, f.eks. for at hente bagage eller overnatte på hotel. Formelt rejser du ind i Storbritannien.", "Påkrævet"],
        ] } },
        "Ved skift i en britisk lufthavn skal du have UK ETA, hvis du passerer grænsekontrollen — uanset hvor kort skiftet er. Skifter du uden at passere grænsekontrollen (airside), er der ikke brug for en ETA.",
      ] },
      { h: "Undtagelser fra ETA-kravet ved transit", blocks: [
        "Der er få undtagelser fra kravet om ETA ved transit:",
        { ul: [
          "Irske statsborgere (det fælles rejseområde, CTA)",
          "Indehavere af et gyldigt britisk visum",
          "Personer med opholdstilladelse i UK (settled eller pre-settled status)",
        ] },
      ] },
      { h: "Sådan undgår du at skulle have ETA til transit", blocks: [
        "Vil du ikke søge om UK ETA, kan du vælge ruter, der ikke går gennem Storbritannien. For eksempel:",
        { ul: [
          "Direkte fly til bestemmelsesstedet",
          "Skift i EU-lande (Amsterdam, Frankfurt, Paris)",
          "Skift i Dublin (Irland — kræver ikke ETA)",
        ] },
        { note: `Tip: Planlægger du en rejse med skift i London, så søg om UK ETA mindst ${F.decisionDays} hverdage før afrejse. Mangler du en ETA, kan du blive nægtet at gå om bord.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (april 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "nyheder-om-eta",
    group: "eta",
    title: `Nyheder om UK ETA: pris på ${F.fee}, fuldt krav og nye gebyrer 2026`,
    description: `Nyt om UK ETA: prisen steg til ${F.fee} den 8. april 2026, kravet gælder fuldt ud fra 25. februar 2026, og EU-borgere skal have ETA fra 2. april 2025.`,
    h1: "Nyheder om UK ETA og rejser til Storbritannien",
    lead: `De vigtigste ændringer fra 2025-2026: UK ETA koster ${F.fee} fra 8. april 2026, kravet håndhæves fuldt ud fra 25. februar 2026, og EU-borgere har skullet have ETA siden 2. april 2025.`,
    card: "Prisstigning, fuldt krav og andre ændringer i 2025–2026",
    sections: [
      { h: `8. april 2026: Prisen på UK ETA steg til ${F.fee}`, blocks: [
        `Fra og med 8. april 2026 koster UK ETA ${F.fee} i stedet for de tidligere £16 (en stigning på 25 %). Det er ansøgningsdatoen, der afgør prisen.`,
        `Home Office har bekræftet, at gebyret for UK ETA (Electronic Travel Authorisation) er hævet fra £16 til ${F.fee}. Den nye takst gælder fra og med 8. april 2026.`,
        `Den, der indsendte sin ansøgning før 8. april 2026, betalte £16, mens ansøgninger indsendt 8. april eller senere koster ${F.fee}.`,
        `Det er endnu en stigning i ordningens historie: ETA startede med et gebyr på £10, blev derefter hævet til £16 og er nu nået op på ${F.fee}. Tilladelsen gælder fortsat i ${F.validYears} år og giver ret til flere indrejser (hvert ophold op til ${F.staySixMonths} måneder).`,
        "Stigningen berører statsborgere i over 50 lande, som skal have UK ETA for at rejse ind i Storbritannien.",
        "Kilde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25. februar 2026: UK ETA er fuldt obligatorisk", blocks: [
        "Fra og med 25. februar 2026 håndhæves UK ETA fuldt ud: flyselskaberne lader ikke passagerer uden en gyldig tilladelse gå om bord.",
        "Den 25. februar 2026 sluttede overgangsperioden for indførelsen af UK ETA. Fra denne dato gælder kravet fuldt ud.",
        "I praksis betyder det, at transportører (flyselskaber, færger, Eurostar) ikke lader rejsende, der skal have en ETA, men ikke har en, gå om bord. Transportørerne risikerer bøder for at transportere en passager uden gyldig tilladelse.",
        `Derfor bør du skaffe din ETA før rejsen — mindst ${F.decisionDays} hverdage i forvejen, da et lille antal ansøgninger kan kræve yderligere gennemgang.`,
        "Kilde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2. april 2025: EU-borgere skal have UK ETA", blocks: [
        "Fra og med 2. april 2025 skal statsborgere i EU, EØS og Schweiz have en UK ETA, før de rejser til Storbritannien. Det gælder også danske statsborgere.",
        "ETA kræves ved turist- og forretningsrejser, familiebesøg og ved transit, hvor man passerer grænsekontrollen. Det gælder også børn og spædbørn — hver person indsender sin egen ansøgning.",
        `Tilladelsen er elektronisk knyttet til det pas, der blev brugt i ansøgningen, og giver mulighed for flere indrejser i ${F.validYears} år.`,
        "Kilde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8. april 2026: Højere udlændingegebyrer i Storbritannien", blocks: [
        "Sammen med ETA blev også andre gebyrer hos Home Office hævet fra 8. april 2026 — blandt andet for besøgsvisum, bosættelse og statsborgerskab.",
        `Den 8. april 2026 opdaterede Home Office sin officielle gebyrtabel. Ud over stigningen af ETA til ${F.fee} blev også de fleste andre gebyrer for indvandring og statsborgerskab hævet.`,
        "Det gælder blandt andet besøgsvisum (visit visa), gebyrer for bosættelse (settlement) og ansøgninger om britisk statsborgerskab.",
        "Planlægger du et længere ophold eller en anden type visum end ETA, så tjek det aktuelle gebyr på den officielle GOV.UK-side, før du indsender din ansøgning.",
        "Kilde: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1. marts 2026: Sikkerhed på rejsen til Storbritannien", blocks: [
        "Før afrejse er det klogt at tjekke de aktuelle sikkerhedsmeddelelser og sikre sig, at pas og ETA er gyldige.",
        "Storbritannien er et populært og generelt sikkert rejsemål, men før hver rejse er det klogt at tjekke myndighedernes aktuelle meddelelser.",
        "Før du rejser, så sørg for, at passet er gyldigt under hele opholdet, at du har en gyldig UK ETA knyttet til netop det pas, og at du har en rejseforsikring.",
        "Aktuelle oplysninger om situationen og trusselsniveauet offentliggøres af officielle kilder — den britiske regering (GOV.UK) og de relevante diplomatiske repræsentationer. I nødsituationer i UK er alarmnummeret 999.",
        "Kilde: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
