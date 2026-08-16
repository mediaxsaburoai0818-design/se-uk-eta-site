import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// ノルウェー語（ブークモール）。デンマーク語と語彙は近いが別言語なので使い回さず個別に書く。
const no: LangContent = {
  code: "nb",   // html lang と揃える（fix-lang-attr.mjs が nb を出力する）
  label: "Norsk",
  siteName: "UK ETA Guide",
  tagline: "Reisetillatelsen til Storbritannia, steg for steg",
  homeTitle: `UK ETA: ${F.fee} og svar som regel innen 1 dag | Guide på norsk 2026`,
  homeDescription:
    `Norsk guide til UK ETA: den koster ${F.fee}, varer i ${F.validYears} år og gir opphold på inntil ${F.staySixMonths} måneder per reise. Slik søker du på GOV.UK sine offisielle sider.`,
  homeLead:
    `Skal du til Storbritannia, trenger du en UK ETA. Den koster ${F.fee} på den offisielle siden, svaret kommer som regel innen 1 dag, og tillatelsen varer i ${F.validYears} år for flere reiser.`,
  nav: { info: "Om ETA", entry: "Reise til Storbritannia", faq: "Ofte stilte spørsmål" },
  officialLinkLabel: "Søk på GOV.UK sine offisielle sider",
  updatedLabel: "Oppdatert",
  pages: {
    "what-is-eta": {
      slug: "hva-er-eta",
      title: "Hva er UK ETA: en obligatorisk forhåndstillatelse, ikke et visum | 2026",
      description: `UK ETA er en elektronisk reisetillatelse du søker om før avreise. Det er ikke et visum: du ordner det på nett, det koster ${F.fee}, og det knyttes til passet ditt.`,
      h1: "Hva er UK ETA",
      lead: "UK ETA (Electronic Travel Authorisation) søker du om før reisen. Den erstatter ikke passet, og den er ikke et visum.",
      sections: [
        { h: "Ikke et visum", p: [
          "ETA er en forhåndstillatelse for reisende som ikke trenger visum til Storbritannia. Kontrollen skjer før ombordstigning: uten ETA kan flyselskapet nekte deg å reise.",
          "I motsetning til et visum kreves verken timeavtale eller intervju. Alt skjer på nett." ] },
        { h: "Knyttet til passet ditt", p: [
          `Tillatelsen hører til passet du søkte med. Får du nytt pass, må du søke om ny ETA — også om det er tid igjen av de ${F.validYears} årene.`,
          "Du trenger ikke skrive ut noe: på grensen holder det å ha det samme passet med." ] },
        { h: "Hvem trenger den", p: [
          "Reisende fra land uten visumplikt, altså også Norge, enten formålet er turisme, familiebesøk, forretninger eller transitt.",
          "Også barn og spedbarn må ha sin egen ETA." ] },
      ],
    },
    application: {
      slug: "slik-soker-du",
      title: "Slik søker du om UK ETA: på nett og på få minutter | Guide 2026",
      description: `Stegene for å søke om UK ETA via GOV.UK sine offisielle sider eller app: pass, ansiktsbilde, kontaktopplysninger og betaling av ${F.fee}.`,
      h1: "Slik søker du om UK ETA",
      lead: "Søknaden gjøres i sin helhet på nett, enten på GOV.UK sine offisielle sider eller i den offisielle appen. Du trenger ikke møte opp noe sted.",
      sections: [
        { h: "Dette må du ha klart", p: [
          "Passet du reiser med, et bilde av ansiktet ditt (du kan ta det med mobilen), en e-postadresse og et betalingskort.",
          "Opplysningene må stemme nøyaktig med passet. Et navn som er skrevet annerledes er den vanligste årsaken til avslag." ] },
        { h: "Stegene", p: [
          `Gå inn på GOV.UK sine offisielle sider eller last ned den offisielle appen, skann datasiden i passet, ta bildet, svar på bakgrunnsspørsmålene og betal ${F.fee}.`,
          `Deretter venter du på avgjørelsen. Den kommer som regel innen 1 dag, men regn med inntil ${F.decisionDays} virkedager.` ] },
        { h: "Sjekk før du sender", p: [
          "At passnummer og utløpsdato er riktig avskrevet, at ansiktet er tydelig på bildet, og at e-postadressen stemmer — det er dit avgjørelsen kommer.",
          "Søk i god tid, ikke på avreisedagen." ] },
      ],
    },
    fee: {
      slug: "pris",
      title: `Pris for UK ETA: ${F.fee} på den offisielle siden | Se opp for mellomledd`,
      description: `UK ETA koster ${F.fee} på GOV.UK. Det er en engangsbetaling for ${F.validYears} år og flere reiser. Slik kjenner du igjen sider som legger på et gebyr.`,
      h1: "Hva koster UK ETA",
      lead: `Den offisielle prisen er ${F.fee}, og du betaler den én gang. Deretter varer tillatelsen i ${F.validYears} år for flere reiser.`,
      sections: [
        { h: "Én betaling", p: [
          `Det er verken årlige gebyrer eller fornyelser underveis: du betaler ${F.fee} ved søknaden, og tillatelsen varer i ${F.validYears} år — eller til passet går ut.`,
          "Beløpet belastes også om søknaden får avslag, fordi det dekker saksbehandlingen." ] },
        { h: "Sider som tar mer", p: [
          "Det finnes mellomledd som legger sin egen provisjon oppå det offisielle beløpet. De er ikke godkjent av britiske myndigheter og gjør nøyaktig det du kan gjøre selv.",
          `Ber en side om tydelig mer enn ${F.fee}, er differansen deres provisjon.` ] },
        { h: "Slik kjenner du den offisielle siden", p: [
          "Den offisielle adressen ligger under domenet GOV.UK. Vær varsom med sider som kaller seg «offisiell partner» eller «godkjent agent»: britiske myndigheter godkjenner ikke tredjeparter til å sende inn søknader.",
        ] },
      ],
    },
    "status-check": {
      slug: "sjekk-status",
      title: "Sjekk status på UK ETA: hvor og hva du trenger | 2026",
      description: "Slik sjekker du om UK ETA er godkjent: beskjeden kommer på e-post, og status slår du opp med passnummeret ditt.",
      h1: "Sjekk status på UK ETA",
      lead: "Avgjørelsen meddeles på e-post. Har den ikke kommet, kan du slå opp status med opplysningene fra passet du søkte med.",
      sections: [
        { h: "Se først i e-posten", p: [
          "Godkjenningen sendes til adressen du oppga i søknaden. Sjekk også søppelpostmappen før du regner med at noe har gått galt.",
          "Det utstedes ikke et dokument til utskrift: tillatelsen er registrert på passet ditt." ] },
        { h: "Dette trenger du", p: [
          "Passnummeret du søkte med, og personopplysningene slik du fylte dem ut.",
          "Har du søkt med et annet pass, finner ikke oppslaget den." ] },
        { h: "Hvis det drar ut", p: [
          `De fleste avgjørelser kommer innen 1 dag, men regn med inntil ${F.decisionDays} virkedager. Drar det lenger ut og avreisen nærmer seg, ta kontakt via de offisielle kanalene.`,
        ] },
      ],
    },
    validity: {
      slug: "gyldighet",
      title: `UK ETA: gyldig i ${F.validYears} år eller til passet går ut | 2026`,
      description: `UK ETA varer i ${F.validYears} år fra godkjenningen og dekker flere reiser. Får du nytt pass, må du søke på nytt.`,
      h1: "Hvor lenge varer UK ETA",
      lead: `Tillatelsen varer i ${F.validYears} år — eller til passet går ut, om det skjer først.`,
      sections: [
        { h: "Flere reiser er inkludert", p: [
          `I disse ${F.validYears} årene kan du reise til Storbritannia så ofte du vil, så lenge hvert opphold ikke overstiger ${F.staySixMonths} måneder.`,
          "Du trenger ikke søke om ny tillatelse for hver reise." ] },
        { h: "Ved nytt pass", p: [
          "Tillatelsen hører til passet den ble søkt med. Fornyer du passet, må du søke om ny ETA, selv om det er gyldighet igjen.",
        ] },
        { h: "Slik finner du datoen igjen", p: [
          "Datoen står i godkjenningsmeldingen. Har du den ikke lenger, kan du slå opp status med passopplysningene dine.",
        ] },
      ],
    },
    "processing-time": {
      slug: "behandlingstid",
      title: `UK ETA: svar som regel innen 1 dag (inntil ${F.decisionDays} virkedager) | 2026`,
      description: `Avgjørelsen om UK ETA kommer som regel innen 1 dag, men regn med inntil ${F.decisionDays} virkedager. Når det lønner seg å søke.`,
      h1: "Hvor lang tid tar UK ETA",
      lead: `I de fleste tilfeller kommer svaret innen 1 dag. Likevel er rådet å regne med inntil ${F.decisionDays} virkedager.`,
      sections: [
        { h: "Når bør du søke", p: [
          "Søk så snart du har booket flyet — ikke dagen før avreise. Krever saken ekstra kontroll, tar den lengre tid.",
          "Uten godkjent tillatelse kan flyselskapet nekte deg å reise." ] },
        { h: "Derfor tar det av og til lengre tid", p: [
          "Søknader som må gjennomgås manuelt (for eksempel ved et «ja» på bakgrunnsspørsmålene) tar lengre tid enn de som behandles automatisk.",
        ] },
        { h: "Hvis ingenting kommer", p: [
          "Sjekk søppelpostmappen og om adressen du oppga er riktig. Slå deretter opp status med passopplysningene dine.",
        ] },
      ],
    },
    "required-documents": {
      slug: "dokumenter",
      title: "Dokumenter til UK ETA: pass, bilde og betalingskort | 2026",
      description: "Dette trenger du til UK ETA: passet du reiser med, et ansiktsbilde, en e-postadresse og et betalingsmiddel.",
      h1: "Hvilke dokumenter trenger du",
      lead: "Søknaden er enkel: pass, et bilde og et betalingsmiddel. Reisedokumentasjon eller erklæringer er ikke nødvendig.",
      sections: [
        { h: "Pass", p: [
          "Det må være det samme passet du reiser med, og det må være gyldig. Skriv av opplysningene nøyaktig slik de står.",
        ] },
        { h: "Ansiktsbilde", p: [
          "Du kan ta det med mobilen underveis i søknaden. Ansiktet må være tydelig, uten solbriller eller noe som dekker det, og med ensfarget bakgrunn.",
        ] },
        { h: "E-post og betaling", p: [
          `Avgjørelsen kommer på e-post, så adressen må være riktig. Betalingen på ${F.fee} gjør du til slutt med kort.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "oppholdets-lengde",
      title: `Med UK ETA kan du bli inntil ${F.staySixMonths} måneder per reise | 2026`,
      description: `UK ETA gir opphold på inntil ${F.staySixMonths} måneder per reise til turisme, besøk eller forretninger. Dette kan du ikke bruke den til.`,
      h1: "Hvor lenge kan du bli",
      lead: `Per reise kan du oppholde deg i Storbritannia i inntil ${F.staySixMonths} måneder. Tillatelsen dekker turisme, familiebesøk, forretninger og transitt.`,
      sections: [
        { h: "Dette kan du gjøre", p: [
          "Turisme, besøke familie eller venner, møter og enkeltstående forretningsaktiviteter, samt transitt gjennom Storbritannia.",
        ] },
        { h: "Dette kan du ikke gjøre", p: [
          "Du kan ikke arbeide for en britisk arbeidsgiver eller bosette deg. Til det finnes andre ordninger.",
          "Langvarige studier dekkes heller ikke: ETA er for korte opphold." ] },
        { h: "Flere reiser", p: [
          `Du kan reise flere ganger mens tillatelsen er gyldig, men hvert opphold er begrenset til ${F.staySixMonths} måneder, og opphold kan ikke legges ubegrenset etter hverandre.`,
        ] },
      ],
    },
    faq: {
      slug: "ofte-stilte-sporsmal",
      title: "UK ETA: korte svar om pris, gyldighet og behandlingstid | FAQ 2026",
      description: `Ofte stilte spørsmål om UK ETA: hva koster den (${F.fee}), hvor lenge varer den (${F.validYears} år), hvor lang tid tar det, og hva om den får avslag.`,
      h1: "Ofte stilte spørsmål om UK ETA",
      lead: "Korte svar på de vanligste spørsmålene. Hvert punkt viser til den fullstendige forklaringen.",
      sections: [
        { h: `Hva koster den? ${F.fee}`, p: [`Den offisielle prisen på GOV.UK er ${F.fee}, betalt én gang for ${F.validYears} år.`] },
        { h: `Hvor lenge varer den? ${F.validYears} år`, p: ["Eller til passet går ut, om det skjer først. Den dekker flere reiser."] },
        { h: "Hvor lang tid tar det? Som regel 1 dag", p: [`Regn med inntil ${F.decisionDays} virkedager, og vent ikke til siste liten.`] },
        { h: "Og om den får avslag?", p: ["Det kan ikke klages. Da må du søke et visum som passer til formålet med reisen."] },
        { h: "Må barn også ha en?", p: ["Ja. Alle, også spedbarn og barn, må ha sin egen tillatelse."] },
      ],
    },
    about: {
      slug: "om-denne-guiden",
      title: "Om denne UK ETA-guiden | Hvem vi er og hvordan vi arbeider",
      description: "Hvem som utgir denne norske guiden til UK ETA, hvor opplysningene kommer fra, og hvordan vi retter feil.",
      h1: "Om denne guiden",
      lead: "Denne guiden forklarer UK ETA på norsk. Dette er ikke en offisiell britisk myndighetsside, og vi sender ikke inn søknader.",
      sections: [
        { h: "Ikke en offisiell side", p: ["Vi er ikke tilknyttet britiske myndigheter. Søknaden skal alltid gjøres på GOV.UK sine offisielle sider eller i den offisielle appen."] },
        { h: "Hvor opplysningene kommer fra", p: ["Beløp, frister og vilkår stammer fra det GOV.UK publiserer. Ved tall som kan endre seg oppgir vi datoen for oppdatering."] },
        { h: "Rettelser", p: ["Ser du en utdatert eller feil opplysning, si fra. Vi retter den."] },
      ],
    },
    privacy: {
      slug: "personvern",
      title: "Personvernerklæring | UK ETA Guide",
      description: "Hvilke opplysninger denne siden samler inn, og hva de brukes til.",
      h1: "Personvernerklæring",
      lead: "Denne siden forklarer hvordan opplysninger håndteres her.",
      sections: [
        { h: "Hvilke opplysninger", p: ["For å lese guiden ber vi ikke om personopplysninger. Vi sender ikke inn ETA-søknader og mottar derfor verken pass- eller betalingsopplysninger."] },
        { h: "Statistikk", p: ["Vi bruker samlet bruksstatistikk for å forbedre innholdet. Den brukes ikke til å identifisere enkeltpersoner."] },
      ],
    },
    terms: {
      slug: "juridisk-informasjon",
      title: "Juridisk informasjon | UK ETA Guide",
      description: "Vilkår for bruk av denne informative guiden til UK ETA.",
      h1: "Juridisk informasjon",
      lead: "Vilkår for bruk av innholdet på denne siden.",
      sections: [
        { h: "Informativt formål", p: ["Innholdet er ment som informasjon. De offisielle vilkårene kan endre seg; sjekk dem på GOV.UK før du søker."] },
        { h: "Ansvar", p: ["Vi er ikke ansvarlige for beslutninger som utelukkende bygger på denne guiden. Hver søknad avgjøres av britiske myndigheter."] },
      ],
    },
  },
};

export default no;
