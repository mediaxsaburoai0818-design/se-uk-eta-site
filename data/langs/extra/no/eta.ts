import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（no・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "hvem-trenger-eta",
    group: "eta",
    title: "Hvem trenger UK ETA? Nasjonaliteter og unntak 2026",
    description: "Hvem trenger UK ETA, og hvem er unntatt: britiske og irske borgere, personer med oppholdstillatelse og airside-transitt. Oversikt over reglene.",
    h1: "Hvem trenger UK ETA?",
    lead: "UK ETA kreves for borgere av land uten visumplikt ved korte opphold (turisme, forretninger, kortvarige studier). Hver reisende, også spedbarn og barn, må ha sin egen ETA.",
    card: "Hvem som må ha UK ETA, og hvem som er unntatt",
    sections: [
      { h: "Hvem er unntatt fra ETA", blocks: [
        { ul: [
          "Britiske og irske borgere (med britisk eller irsk pass)",
          "Personer med tillatelse til å bo, arbeide eller studere i Storbritannia (for eksempel visum, settled/pre-settled status)",
          "Innehavere av pass som British Overseas Territories Citizen eller British National (Overseas)",
          "Personer bosatt i Irland som reiser fra Irland, Guernsey, Jersey eller Isle of Man",
          "Transittreisende som bytter airside og ikke passerer grensekontrollen",
          "Personer som venter på avgjørelse i en søknad etter EU Settlement Scheme",
        ] },
      ] },
      { h: "Viktig å vite", blocks: [
        { ul: [
          "Personer med britisk eller irsk statsborgerskap kan ikke få ETA, og reiser med dokumentene for dette statsborgerskapet.",
          "Er nasjonaliteten din ikke visumfri, kan du trenge visum: sjekk med det offisielle verktøyet på GOV.UK, [Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
          "Også spedbarn og barn må ha sin egen ETA.",
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
    slug: "forskjell-eta-og-visum",
    group: "eta",
    title: "UK ETA eller visum: hva er forskjellen? 2026",
    description: `Forskjellen på UK ETA og visum: ETA gir opphold på inntil ${F.staySixMonths} måneder til turisme, forretninger og kortvarige studier, men ikke arbeid eller bosetting.`,
    h1: "UK ETA eller visum: forskjellen",
    lead: "UK ETA er ikke et visum, men en reisetillatelse for borgere av land uten visumplikt. Den garanterer ikke innreise — det avgjør grensepolitiet.",
    card: "Hva ETA dekker, og når du trenger visum i stedet",
    sections: [
      { h: `Dette kan du gjøre med ETA (maks ${F.staySixMonths} måneder)`, blocks: [
        { ul: [
          "Turisme og besøk hos familie og venner",
          "Forretningsreiser (business)",
          "Kortvarige studier (short-term study)",
          "Transitt der du passerer grensekontrollen",
          "Permitted paid engagement, og aktiviteter i inntil 3 måneder med Creative Worker concession",
        ] },
      ] },
      { h: "Dette kan du ikke gjøre med ETA", blocks: [
        { ul: [
          `Opphold på mer enn ${F.staySixMonths} måneder`,
          "Lønnet eller ulønnet arbeid for et britisk selskap eller som selvstendig næringsdrivende (unntatt unntakene over)",
          "Motta offentlige ytelser (public funds)",
          "I praksis bosette deg i Storbritannia gjennom hyppige, gjentatte besøk",
          "Registrere ekteskap eller partnerskap (krever Marriage Visitor visa)",
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
    title: "Standard Visitor-visum til Storbritannia: når ETA ikke holder",
    description: "Får du avslag på UK ETA (kan ikke påklages), eller krever nasjonaliteten din visum, må du søke Standard Visitor-visum. Pris, tid og søknad etter GOV.UK.",
    h1: "Standard Visitor-visum til Storbritannia: når ETA ikke holder",
    lead: "Får du avslag på UK ETA (det kan ikke påklages), eller krever nasjonaliteten din visum, må du søke om et Standard Visitor-visum for å reise til Storbritannia. Under finner du fakta etter GOV.UK.",
    card: "Visum når ETA får avslag eller ikke gjelder deg: pris og prosess",
    sections: [
      { h: "Hvem trenger visum i stedet for ETA", blocks: [
        { ul: [
          "Personer der nasjonaliteten krever visum til Storbritannia (ikke kvalifisert for ETA).",
          "Personer som har fått avslag på ETA-søknaden — da kan man ikke reise inn i Storbritannia med ETA, og visum kreves.",
          "Sjekk hvilket visum du trenger med verktøyet «Check if you need a UK visa» på GOV.UK: [gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa).",
        ] },
      ] },
      { h: "Gebyrer (GOV.UK)", blocks: [
        { table: { head: ["Visum", "Gebyr"], rows: [
          ["Standard Visitor (inntil 6 måneder)", "£135"],
          ["Langtidsvisum — 2 år", "£506"],
          ["Langtidsvisum — 5 år", "£903"],
          ["Langtidsvisum — 10 år", "£1 128"],
          ["Transittvisum", "£74,50"],
        ] } },
        "Langtidsvisum gir flere innreiser, men hvert opphold er begrenset til 6 måneder. Beløpene er hentet fra GOV.UK og kan endres.",
      ] },
      { h: "Tid, gyldighet og opphold", blocks: [
        { ul: [
          "Avgjørelse: vanligvis innen 3 uker etter oppmøtet på visumsenteret.",
          "Opphold: maks 6 måneder per besøk.",
          "Når du søker: tidligst 3 måneder før reisen.",
        ] },
      ] },
      { h: "Slik søker du (GOV.UK)", blocks: [
        { ul: [
          "1. Søk på nett (du kan lagre og fullføre senere).",
          "2. Bestill time på et visumsøknadssenter.",
          "3. Møt opp for å bekrefte identiteten din og avgi biometri (fingeravtrykk og bilde), og lever dokumentene.",
          "4. Avgjørelsen får du på e-post; passet leveres tilbake på senteret.",
        ] },
        "Forbered blant annet:",
        { ul: [
          "Gyldig pass (gyldig under hele oppholdet)",
          "Reisedatoer, overnatting og anslåtte kostnader",
          "Nåværende adresse og hvor lenge du har bodd der",
          "Årsinntekt (hvis aktuelt) og opplysninger om arbeidsgiver (hvis aktuelt)",
          "Eventuell historikk knyttet til straffesaker eller immigrasjon",
          "Bekreftede oversettelser av dokumenter som ikke er på engelsk eller walisisk",
        ] },
        "Mer om avslag finner du i [veiledningen om avslag på UK ETA](/no/eta-avslatt/).",
      ] },
      { h: "Om denne informasjonen", blocks: [
        { note: "Dette er en uavhengig informasjonstjeneste, ikke et offentlig nettsted. Opplysninger og gebyrer kan endres — sjekk alltid de offisielle opplysningene på GOV.UK før du søker." },
      ] },
    ],
    faq: [
      { q: "Når trenger jeg Standard Visitor-visum i stedet for ETA?", a: "Når nasjonaliteten din krever visum til Storbritannia, eller når ETA-søknaden har fått avslag. Avslag på ETA kan ikke påklages — for å reise søker du om riktig visum." },
      { q: "Hva koster Standard Visitor-visum?", a: "Ifølge GOV.UK koster visum for inntil 6 måneder £135. Langtidsvisum: £506 (2 år), £903 (5 år), £1 128 (10 år). Transittvisum koster £74,50." },
      { q: "Hvor lang er behandlingstiden?", a: "Vanligvis får du avgjørelsen innen 3 uker etter oppmøtet på visumsenteret." },
      { q: "Hvor lenge kan jeg bli i Storbritannia?", a: "Standardoppholdet er maks 6 måneder per besøk." },
    ],
    sources: [
      { label: "GOV.UK – Visit the UK as a Standard Visitor", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  expiration: {
    slug: "nar-utloper-eta",
    group: "eta",
    title: `Når utløper UK ETA? Etter ${F.validYears} år eller med passet (2026)`,
    description: `UK ETA utløper etter ${F.validYears} år eller når passet går ut, det som skjer først. Slik ser du utløpsdatoen, og når du må søke på nytt.`,
    h1: "Når utløper UK ETA, og når må du søke på nytt?",
    lead: `UK ETA gjelder i ${F.validYears} år fra utstedelsen eller til passet utløper — det som skjer først. I denne perioden kan du reise til England og resten av Storbritannia så ofte du vil, med maks ${F.staySixMonths} måneder per besøk (GOV.UK).`,
    card: "Utløpsdato, ny søknad og reise med en ETA som snart går ut",
    sections: [
      { h: "Reglene for gyldighet i korte trekk", blocks: [
        { ul: [
          `Gyldig i ${F.validYears} år fra utstedelsesdatoen`,
          "Slutter å gjelde samtidig med passet (hvis passet utløper tidligere)",
          "Gir flere innreiser til Storbritannia i gyldighetsperioden",
          `Hvert opphold kan ikke overstige ${F.staySixMonths} måneder`,
          "ETA er knyttet til ett bestemt pass",
        ] },
        "Mer om hva gyldigheten dekker, finner du på siden om [hvor lenge UK ETA varer](/no/gyldighet/).",
      ] },
      { h: "Når må du sende inn en ny søknad?", blocks: [
        "Du må søke om ny UK ETA i disse tilfellene:",
        { ul: [
          `Når det har gått ${F.validYears} år siden ETA ble utstedt`,
          "Når du har fått nytt pass",
          "Ved navneendring",
          "Ved endrede forhold som påvirker om du fyller vilkårene",
        ] },
      ] },
      { h: "Kan jeg reise med en ETA som snart utløper?", blocks: [
        "UK ETA må være gyldig når du reiser inn i Storbritannia. Den trenger ikke være gyldig under hele oppholdet — det viktige er at den gjelder på ankomstdagen. Likevel anbefales det å sende inn en ny søknad i god tid.",
      ] },
      { h: "Hvordan sjekker jeg utløpsdatoen?", blocks: [
        "Ifølge GOV.UK kan du sjekke den på nett via gov.uk/eta (Check your ETA): der ser du om du har en ETA og når den utløper. Se også [slik sjekker du status på UK ETA](/no/sjekk-status/).",
      ] },
      { h: "Hva skjer hvis jeg bytter pass mens ETA-en er gyldig?", blocks: [
        `ETA er knyttet til ett bestemt pass. Får du nytt pass (for eksempel fordi det gamle har utløpt, eller ved navneendring), må du sende inn en ny ETA-søknad og betale gebyret på ${F.fee} på nytt. Den gamle ETA-en slutter å gjelde.`,
        { note: `Tips: Det anbefales å sende inn søknaden om UK ETA minst ${F.decisionDays} virkedager før den planlagte reisen, slik at det er tid til behandlingen.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "eta-for-barn-og-familie",
    group: "eta",
    title: "UK ETA for barn og familier: trenger spedbarn en? 2026",
    description: "Også spedbarn og barn må ha sin egen UK ETA. Du kan søke for en annen person med vedkommendes pass og ansiktsbilde.",
    h1: "UK ETA for barn og familier",
    lead: "Hver reisende, også spedbarn og barn, må ha sin egen UK ETA. Du kan sende inn søknaden for en annen person.",
    card: "Egen ETA for hvert barn, og slik søker du for familien",
    sections: [
      { h: "Søknad for familien", blocks: [
        { ul: [
          "Hver reisende må ha sin egen ETA, også barn og spedbarn",
          "Du kan søke for en annen person: i appen hvis personen er til stede, ellers på nett (pass og ansiktsbilde kreves)",
          "Barn som står oppført i skjemaet France-UK school trip travel information form, trenger ikke ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "eta-avslatt",
    group: "eta",
    title: "Avslag på UK ETA? Dette gjør du, og alternativene 2026",
    description: "Får du avslag på UK ETA, kan det ikke påklages. For å reise til Storbritannia må du søke visum. Slik ser alternativene ut.",
    h1: "Avslag på UK ETA: hva nå?",
    lead: "Får ETA-søknaden din avslag, kan avgjørelsen ikke påklages (appeal). Vil du likevel reise til Storbritannia, må du søke om visum.",
    card: "Ingen klageadgang: neste steg er et passende visum",
    sections: [
      { h: "Dette gjør du ved avslag", blocks: [
        { ul: [
          "Det finnes ingen klageordning for avslag på ETA",
          "For å reise til Storbritannia må du søke et passende visum",
          "Sjekk på GOV.UK hvilket visum som passer til formålet med reisen",
        ] },
      ] },
      { h: "Neste steg: Standard Visitor-visum", blocks: [
        "Etter avslag på ETA er visum den eneste veien til Storbritannia. Se pris (£135), tid og prosess i [veiledningen om Standard Visitor-visum](/no/standard-visitor-visum/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (april 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "vanlige-feil-eta",
    group: "eta",
    title: "Vanlige feil i UK ETA-søknaden og den offisielle appen 2026",
    description: "Vanlige feil i UK ETA-søknaden: passopplysninger som ikke stemmer, krav til bilder, betaling og falske nettsteder. Bruk den offisielle UK ETA-appen.",
    h1: "Vanlige feil og UK ETA-appen",
    lead: "Mange problemer skyldes opplysninger som ikke stemmer med passet. Bruk alltid den offisielle appen «UK ETA», og kontroller opplysningene før du sender.",
    card: "Feilene som gir forsinkelser eller avslag, og hvordan du unngår dem",
    sections: [
      { h: "Feil du bør unngå", blocks: [
        { ul: [
          "Opplysningene må stemme nøyaktig med passet: avvik fører til forsinkelser eller avslag",
          "Bilder som kreves: ansiktet og alle sidene i passet, skarpe og korrekte",
          `Betaling (${F.fee}): Apple Pay, Google Pay eller kort (Amex, JCB, Mastercard, Visa); 3D Secure-autentisering kan kreves`,
          "Biometrisk pass (ePassport-symbol) kreves for å lese brikken",
          "Se opp for falske nettsteder som etterligner myndighetene og tar høyere gebyrer: bruk bare GOV.UK",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "offisiell-gov-uk-side",
    group: "eta",
    title: "Den offisielle GOV.UK-siden for UK ETA: slik avslører du falske",
    description: "Bare GOV.UK er den offisielle kilden for søknad om UK ETA. Slik kjenner du igjen falske nettsteder og unngår svindel med ekstra gebyrer.",
    h1: "Den offisielle GOV.UK-siden for søknad om UK ETA",
    lead: "Du kan søke om UK ETA på britiske myndigheters offisielle nettsted eller i den offisielle mobilappen.",
    card: "Den offisielle adressen og varselsignalene på falske sider",
    sections: [
      { h: "Offisiell nettadresse", blocks: [
        "Den offisielle UK ETA-siden: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
        "Domenet .gov.uk betyr at det er en offisiell side fra britiske myndigheter.",
      ] },
      { h: "Slik kjenner du igjen den offisielle siden", blocks: [
        { ul: [
          "Nettadressen inneholder gov.uk (britisk myndighetsdomene)",
          "Siden drives av Home Office",
          `Gebyret er nøyaktig ${F.fee}`,
          "Siden har det karakteristiske svart-hvite GOV.UK-designet",
          "Det kreves ikke noe gebyr for «raskere» behandling",
        ] },
      ] },
      { h: "Slik kjenner du igjen en falsk side", blocks: [
        { note: "Varselsignaler: nettadressen inneholder ikke gov.uk; gebyret er tydelig høyere enn " + F.fee + "; løfte om «garantert godkjenning»; tilbud om «raskere behandling»; aggressiv reklame eller påtrengende popup-vinduer; GOV.UK-logoen mangler." },
      ] },
      { h: "Offisiell mobilapp", blocks: [
        "Du kan også søke om UK ETA i den offisielle mobilappen «UK ETA»:",
        { ul: [
          "iOS: søk etter «UK ETA» i App Store (utgiver: Home Office)",
          "Android: søk etter «UK ETA» i Google Play (utgiver: Home Office)",
        ] },
      ] },
      { h: "Andre nyttige myndighetssider", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) — sjekk om du trenger visum til Storbritannia",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) — informasjon om besøksvisum",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Visit the UK as a Standard Visitor", url: "https://www.gov.uk/standard-visitor" },
    ],
  },

  "mobile-app": {
    slug: "uk-eta-appen",
    group: "eta",
    title: "Offisiell UK ETA-app: søk fra mobilen | iOS og Android 2026",
    description: "Med den offisielle UK ETA-appen søker du rett fra mobilen. Slik laster du den ned, hva du trenger (pass og bilde) og hvordan søknaden foregår.",
    h1: "UK ETA-appen",
    lead: "Britiske myndigheter tilbyr den offisielle mobilappen «UK ETA», som lar deg sende inn søknaden direkte fra smarttelefonen.",
    card: "Last ned, skann passet med NFC og søk på få steg",
    sections: [
      { h: "Om UK ETA-appen", blocks: [
        "UK ETA-appen er Home Offices offisielle verktøy for å søke om elektronisk reisetillatelse. Det er den anbefalte måten å søke på, fordi du kan skanne passet med NFC og få opplysningene fylt ut automatisk.",
      ] },
      { h: "Tilgjengelighet", blocks: [
        { ul: [
          "iOS (App Store) — for Apple-enheter (iPhone). Krever iOS 16 eller nyere.",
          "Android (Google Play) — for Android-enheter. Krever Android 12 eller nyere og NFC.",
        ] },
        "Søk etter appen under navnet «UK ETA», utgiver: Home Office.",
      ] },
      { h: "Appens funksjoner", blocks: [
        { ul: [
          "Sende inn en ny UK ETA-søknad",
          "Skanne biometrisk pass (NFC + OCR)",
          "Ta et ansiktsbilde (selfie) for verifisering",
          "Sjekke statusen for en eksisterende søknad",
          "Betale med kort, Apple Pay eller Google Pay",
          "Push-varsler når statusen endres",
        ] },
      ] },
      { h: "Slik søker du i appen", blocks: [
        { ul: [
          "1. Last ned appen «UK ETA» fra App Store eller Google Play",
          "2. Opprett en konto (e-postadresse og passord)",
          "3. Skann det biometriske passet (hold telefonen mot passet)",
          "4. Ta et ansiktsbilde (selfie)",
          "5. Svar på spørsmålene i skjemaet",
          `6. Betal ${F.fee}`,
          "7. Send inn søknaden og vent på avgjørelsen",
        ] },
        "Søknaden steg for steg, også på nett, finner du i [slik søker du om UK ETA](/no/slik-soker-du/).",
      ] },
      { h: "Skanning av passet (NFC)", blocks: [
        "Appen bruker NFC-teknologi (Near Field Communication) til å lese opplysningene fra den biometriske brikken i passet. Slik skanner du passet:",
        { ul: [
          "Åpne passet på siden med bildet",
          "Hold baksiden av telefonen mot det åpne passet",
          "Hold den i ro i 5–10 sekunder",
          "Vent til appen bekrefter at opplysningene er lest",
        ] },
      ] },
      { h: "Fordeler med mobilappen", blocks: [
        { ul: [
          "Skanning av passet med NFC — opplysningene fylles ut automatisk",
          "Raskere søknad enn via nettstedet",
          "Push-varsler om søknadens status",
          "Biometrisk sikkerhet (Face ID / Touch ID)",
        ] },
        { note: "Merk: Pass på at du laster ned den offisielle appen. Se etter utgiveren «Home Office» i appbutikken. Falske apper kan stjele personopplysninger." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  transit: {
    slug: "transitt-gjennom-storbritannia",
    group: "eta",
    title: "Transitt gjennom Storbritannia: trenger du UK ETA? 2026",
    description: "Trenger du UK ETA ved transitt i Storbritannia? Passerer du grensekontrollen (landside), ja. Bytter du uten å passere den (airside), nei.",
    h1: "Transitt gjennom Storbritannia: trenger jeg UK ETA?",
    lead: "Du trenger UK ETA for transitt bare hvis du passerer grensekontrollen på en flyplass i Storbritannia før du reiser videre (landside). Bytter du fly uten å passere grensekontrollen (airside), trenger du ingen ETA. Er du usikker, spør flyselskapet ditt.",
    card: "Airside eller landside: når ETA kreves ved flybytte",
    sections: [
      { h: "Reglene for transitt", blocks: [
        "Siden 2. april 2025 må europeiske borgere, også nordmenn, ha UK ETA for transitt gjennom Storbritannia hvis de passerer grensekontrollen på flyplassen (landside-transitt). For transitt uten å passere grensekontrollen (airside-transitt) trengs ingen ETA. Er du usikker, spør flyselskapet ditt.",
        { ul: [
          "Landside-transitt (du passerer grensekontrollen): ETA kreves",
          "Airside-transitt (ingen passkontroll): ETA kreves ikke",
          "Ifølge det offisielle faktaarket (factsheet) trenger transittreisende på Heathrow og Manchester som ikke passerer den britiske passkontrollen, foreløpig ingen ETA",
          "Sjekk alltid hvilken type transitt det gjelder med flyselskapet ditt",
        ] },
      ] },
      { h: "Typer transitt", blocks: [
        { table: { head: ["Type", "Hva det innebærer", "UK ETA"], rows: [
          ["Airside-transitt (flytransitt)", "Bytte på flyplassen uten å passere grensekontrollen. Er du usikker på om du må gjennom grensekontrollen, spør flyselskapet ditt.", "Kreves ikke"],
          ["Landside-transitt", "Du passerer grensekontrollen før du reiser videre, for eksempel for å hente bagasje eller overnatte på hotell. Du reiser formelt inn i Storbritannia.", "Kreves"],
        ] } },
      ] },
      { h: "Bytte i London", blocks: [
        "Bytter du fly i Storbritannia, trenger du UK ETA hvis du passerer grensekontrollen på flyplassen, uansett hvor kort byttet er. Bytter du uten å passere grensekontrollen (airside), trengs ingen ETA.",
      ] },
      { h: "Unntak fra ETA-kravet ved transitt", blocks: [
        "Det finnes få unntak fra kravet om ETA ved transitt:",
        { ul: [
          "Irske borgere (det felles reiseområdet, CTA)",
          "Innehavere av gyldig britisk visum",
          "Innehavere av varig oppholdstillatelse i Storbritannia (settled/pre-settled status)",
        ] },
      ] },
      { h: "Slik unngår du å trenge ETA for transitt", blocks: [
        "Vil du ikke søke om UK ETA, kan du velge ruter som ikke går gjennom Storbritannia. For eksempel:",
        { ul: [
          "Direktefly til reisemålet",
          "Bytte i EU-land (Amsterdam, Frankfurt, Paris)",
          "Bytte i Dublin (Irland — krever ikke ETA)",
        ] },
        { note: `Tips: Planlegger du en flyreise med bytte i London, søk om UK ETA minst ${F.decisionDays} virkedager før avreise. Mangler du ETA, kan du bli nektet ombordstigning.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (april 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "nyheter-om-uk-eta",
    group: "eta",
    title: `Nyheter om UK ETA: ${F.fee} fra 8. april 2026 og full håndheving`,
    description: `Siste nytt om UK ETA: gebyret er ${F.fee} fra 8. april 2026, full håndheving fra 25. februar 2026, krav for europeere fra 2. april 2025, og høyere visumgebyrer.`,
    h1: "Siste nytt om UK ETA og reiser til Storbritannia",
    lead: `Fra 8. april 2026 koster UK ETA ${F.fee}, og siden 25. februar 2026 håndheves kravet fullt ut. Her er de viktigste endringene 2025–2026, med kilder fra GOV.UK og Home Office.`,
    card: "Gebyrøkning, full håndheving og andre endringer 2025–2026",
    sections: [
      { h: `8. april 2026: gebyret for UK ETA økte til ${F.fee}`, blocks: [
        `Fra og med 8. april 2026 koster UK ETA ${F.fee} i stedet for tidligere £16 (en økning på 25 %). Det er søknadsdatoen som avgjør.`,
        `Home Office har bekreftet at gebyret for UK ETA (Electronic Travel Authorisation) økes fra £16 til ${F.fee}. Den nye satsen gjelder fra og med 8. april 2026.`,
        `Søknadsdatoen avgjør beløpet: den som sendte inn søknaden før 8. april 2026, betalte £16, mens søknader sendt inn 8. april eller senere koster ${F.fee}.`,
        `Det er enda en økning i ordningens historie: ETA startet med et gebyr på £10, ble så økt til £16 og har nå nådd ${F.fee}. Tillatelsen gjelder fortsatt i ${F.validYears} år og gir rett til flere innreiser (hvert opphold inntil ${F.staySixMonths} måneder).`,
        "Økningen gjelder borgere av over 50 land som trenger UK ETA for å reise inn i Storbritannia.",
        "Kilde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25. februar 2026: UK ETA er fullt obligatorisk", blocks: [
        "Fra og med 25. februar 2026 håndheves UK ETA fullt ut: flyselskapene slipper ikke passasjerer uten gyldig tillatelse om bord.",
        "Den 25. februar 2026 var overgangsperioden for innføringen av UK ETA over. Fra denne datoen håndheves kravet fullt ut.",
        "I praksis betyr det at transportører (flyselskaper, ferger, Eurostar) ikke slipper reisende som trenger ETA, men mangler den, om bord. Transportørene risikerer bøter for å frakte en passasjer uten gyldig tillatelse.",
        `Derfor bør du skaffe ETA før reisen — minst ${F.decisionDays} virkedager i forveien, fordi et lite antall søknader kan kreve ekstra kontroll.`,
        "Kilde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2. april 2025: europeiske borgere må ha UK ETA", blocks: [
        "Fra og med 2. april 2025 må borgere av EU, EØS og Sveits skaffe UK ETA før reise til Storbritannia — altså også nordmenn.",
        "Fra og med 2. april 2025 omfatter UK ETA-ordningen borgere av Den europeiske union, Det europeiske økonomiske samarbeidsområdet og Sveits.",
        "ETA kreves ved turist- og forretningsreiser, familiebesøk og ved transitt der du passerer grensekontrollen. Dette gjelder også barn og spedbarn — hver person sender inn sin egen søknad.",
        `Tillatelsen er elektronisk knyttet til passet som ble brukt i søknaden, og gir flere innreiser i løpet av ${F.validYears} år.`,
        "Kilde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8. april 2026: høyere immigrasjonsgebyrer i Storbritannia", blocks: [
        "Sammen med ETA ble også andre gebyrer hos Home Office økt fra 8. april 2026 — blant annet for besøksvisum, bosetting og statsborgerskap.",
        `Den 8. april 2026 oppdaterte Home Office den offisielle gebyrtabellen sin. I tillegg til at ETA økte til ${F.fee}, ble også de fleste andre immigrasjons- og statsborgerskapsgebyrer økt.`,
        "Det gjelder blant annet besøksvisum (visit visa), gebyrer for bosetting (settlement) og søknader om britisk statsborgerskap.",
        "Planlegger du et lengre opphold eller en annen type visum enn ETA, sjekk det gjeldende gebyret på den offisielle GOV.UK-siden før du sender inn søknaden.",
        "Kilde: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1. mars 2026: sikkerhet på reisen til Storbritannia", blocks: [
        "Før avreise er det lurt å sjekke aktuelle sikkerhetsmeldinger og forsikre deg om at passet og ETA-en er gyldige.",
        "Storbritannia er et populært og generelt trygt reisemål, men før hver reise er det lurt å sjekke myndighetenes aktuelle meldinger.",
        { ul: [
          "Passet er gyldig under hele oppholdet",
          "Du har en gyldig UK ETA knyttet til dette passet",
          "Du har reiseforsikring",
        ] },
        "Oppdatert informasjon om situasjonen og trusselnivået publiseres av offisielle kilder — britiske myndigheter (GOV.UK) og de aktuelle diplomatiske representasjonene. Ved nødsituasjoner i Storbritannia er nødnummeret 999.",
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
