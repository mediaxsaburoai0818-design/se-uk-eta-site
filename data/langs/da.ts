import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// デンマーク語。英国への渡航が多い北欧市場で、既存のスウェーデン語サイトと補完関係になる。
const da: LangContent = {
  code: "da",
  label: "Dansk",
  siteName: "UK ETA Guide",
  tagline: "Rejsetilladelsen til Storbritannien, trin for trin",
  homeTitle: `UK ETA: ${F.fee} og svar som regel inden for 1 dag | Guide på dansk 2026`,
  homeDescription:
    `Dansk guide til UK ETA: den koster ${F.fee}, gælder i ${F.validYears} år og giver ophold på op til ${F.staySixMonths} måneder pr. rejse. Sådan søger du på GOV.UK's officielle side.`,
  homeLead:
    `Skal du til Storbritannien, skal du have en UK ETA. Den koster ${F.fee} på den officielle side, svaret kommer som regel inden for 1 dag, og tilladelsen gælder i ${F.validYears} år til flere rejser.`,
  nav: { info: "Om ETA", entry: "Rejse til Storbritannien", faq: "Ofte stillede spørgsmål" },
  officialLinkLabel: "Ansøg på GOV.UK's officielle side",
  updatedLabel: "Opdateret",
  pages: {
    "what-is-eta": {
      slug: "hvad-er-eta",
      title: "Hvad er UK ETA: en obligatorisk forhåndstilladelse, ikke et visum | 2026",
      description: `UK ETA er en elektronisk rejsetilladelse, du søger om før afrejse. Det er ikke et visum: du ordner det online, det koster ${F.fee}, og det knyttes til dit pas.`,
      h1: "Hvad er UK ETA",
      lead: "UK ETA (Electronic Travel Authorisation) søger du om før rejsen. Den erstatter ikke dit pas, og den er ikke et visum.",
      sections: [
        { h: "Ikke et visum", p: [
          "ETA er en forhåndstilladelse for rejsende, der ikke skal have visum til Storbritannien. Kontrollen sker, før du går om bord: uden ETA kan flyselskabet afvise dig.",
          "I modsætning til et visum kræver det hverken tidsbestilling eller samtale. Det hele foregår online." ] },
        { h: "Knyttet til dit pas", p: [
          `Tilladelsen hører til det pas, du søgte med. Får du nyt pas, skal du søge om en ny ETA — også selvom der er tid tilbage af de ${F.validYears} år.`,
          "Du skal ikke printe noget ud: ved grænsen er det nok at have det samme pas med." ] },
        { h: "Hvem skal have den", p: [
          "Rejsende fra lande uden visumpligt, altså også Danmark, hvad enten formålet er turisme, familiebesøg, forretning eller transit.",
          "Også børn og spædbørn skal have deres egen ETA." ] },
      ],
    },
    application: {
      slug: "sadan-ansoger-du",
      title: "Sådan søger du om UK ETA: online på få minutter | Guide 2026",
      description: `Trinene til at søge om UK ETA via GOV.UK's officielle side eller app: pas, ansigtsfoto, kontaktoplysninger og betaling af ${F.fee}.`,
      h1: "Sådan søger du om UK ETA",
      lead: "Ansøgningen foregår helt online, enten på GOV.UK's officielle side eller i den officielle app. Du skal ikke møde op nogen steder.",
      sections: [
        { h: "Det skal du have klar", p: [
          "Det pas, du rejser på, et billede af dit ansigt (du kan tage det med telefonen), en e-mailadresse og et betalingskort.",
          "Oplysningerne skal stemme nøjagtigt med passet. Et navn, der er stavet anderledes, er den hyppigste årsag til afslag." ] },
        { h: "Trinene", p: [
          `Gå ind på GOV.UK's officielle side eller hent den officielle app, scan passets datasides oplysninger, tag billedet, besvar baggrundsspørgsmålene og betal ${F.fee}.`,
          `Derefter venter du på afgørelsen. Den kommer som regel inden for 1 dag, men regn med op til ${F.decisionDays} hverdage.` ] },
        { h: "Tjek før du sender", p: [
          "At pasnummer og udløbsdato er skrevet rigtigt af, at ansigtet er tydeligt på billedet, og at e-mailadressen er korrekt — det er dér, afgørelsen lander.",
          "Søg i god tid, og ikke på afrejsedagen." ] },
      ],
    },
    fee: {
      slug: "pris",
      title: `Pris for UK ETA: ${F.fee} på den officielle side | Pas på mellemled`,
      description: `UK ETA koster ${F.fee} på GOV.UK. Det er en engangsbetaling for ${F.validYears} år og flere rejser. Sådan genkender du sider, der lægger et gebyr oveni.`,
      h1: "Hvad koster UK ETA",
      lead: `Den officielle pris er ${F.fee}, og du betaler den én gang. Derefter gælder tilladelsen i ${F.validYears} år til flere rejser.`,
      sections: [
        { h: "Én betaling", p: [
          `Der er hverken årlige gebyrer eller fornyelser undervejs: du betaler ${F.fee} ved ansøgningen, og tilladelsen gælder i ${F.validYears} år — eller indtil passet udløber.`,
          "Beløbet opkræves også, hvis ansøgningen får afslag, fordi det dækker sagsbehandlingen." ] },
        { h: "Sider der tager mere", p: [
          "Der findes mellemled, der lægger deres egen kommission oveni det officielle beløb. De er ikke godkendt af de britiske myndigheder og gør præcis det, du selv kan gøre.",
          `Beder en side om tydeligt mere end ${F.fee}, er forskellen deres kommission.` ] },
        { h: "Sådan kender du den officielle side", p: [
          "Den officielle adresse ligger under domænet GOV.UK. Vær varsom med sider, der kalder sig «officiel partner» eller «godkendt agent»: de britiske myndigheder godkender ikke tredjeparter til at indsende ansøgninger.",
        ] },
      ],
    },
    "status-check": {
      slug: "tjek-status",
      title: "Tjek status på din UK ETA: hvor og hvad du skal bruge | 2026",
      description: "Sådan tjekker du, om din UK ETA er godkendt: beskeden kommer på e-mail, og status slår du op med dit pasnummer.",
      h1: "Tjek status på din UK ETA",
      lead: "Afgørelsen meddeles på e-mail. Er den ikke kommet, kan du slå status op med oplysningerne fra det pas, du søgte med.",
      sections: [
        { h: "Se først i din e-mail", p: [
          "Godkendelsen sendes til den adresse, du oplyste i ansøgningen. Kig også i spam-mappen, før du går ud fra, at noget er gået galt.",
          "Der udstedes ikke et dokument til udprintning: tilladelsen er registreret på dit pas." ] },
        { h: "Det skal du bruge", p: [
          "Det pasnummer, du søgte med, og dine personoplysninger, som du udfyldte dem.",
          "Har du søgt med et andet pas, finder opslaget den ikke." ] },
        { h: "Hvis det trækker ud", p: [
          `De fleste afgørelser kommer inden for 1 dag, men regn med op til ${F.decisionDays} hverdage. Trækker det længere ud, og nærmer afrejsen sig, så kontakt de officielle kanaler.`,
        ] },
      ],
    },
    validity: {
      slug: "gyldighed",
      title: `UK ETA: gyldig i ${F.validYears} år eller til passet udløber | 2026`,
      description: `UK ETA gælder i ${F.validYears} år fra godkendelsen og dækker flere rejser. Får du nyt pas, skal du søge igen.`,
      h1: "Hvor længe gælder UK ETA",
      lead: `Tilladelsen gælder i ${F.validYears} år — eller til passet udløber, hvis det sker først.`,
      sections: [
        { h: "Flere rejser er med", p: [
          `I de ${F.validYears} år kan du rejse til Storbritannien, så ofte du vil, så længe hvert ophold ikke overstiger ${F.staySixMonths} måneder.`,
          "Du skal ikke søge en ny tilladelse til hver rejse." ] },
        { h: "Ved nyt pas", p: [
          "Tilladelsen hører til det pas, den blev søgt med. Fornyer du passet, skal du søge om en ny ETA, selvom der er gyldighed tilbage.",
        ] },
        { h: "Sådan finder du datoen igen", p: [
          "Datoen står i godkendelsesmailen. Har du den ikke længere, kan du slå status op med dine pasoplysninger.",
        ] },
      ],
    },
    "processing-time": {
      slug: "behandlingstid",
      title: `UK ETA: svar som regel inden for 1 dag (op til ${F.decisionDays} hverdage) | 2026`,
      description: `Afgørelsen om UK ETA kommer som regel inden for 1 dag, men regn med op til ${F.decisionDays} hverdage. Hvornår det er bedst at søge.`,
      h1: "Hvor lang tid tager UK ETA",
      lead: `I de fleste tilfælde kommer svaret inden for 1 dag. Alligevel er rådet at regne med op til ${F.decisionDays} hverdage.`,
      sections: [
        { h: "Hvornår skal du søge", p: [
          "Søg, så snart du har booket flyet — og ikke dagen før afrejse. Kræver sagen ekstra kontrol, tager den længere tid.",
          "Uden en godkendt tilladelse kan flyselskabet afvise dig." ] },
        { h: "Derfor tager det nogle gange længere", p: [
          "Ansøgninger, der skal gennemgås manuelt (for eksempel ved et «ja» til baggrundsspørgsmålene), tager længere tid end dem, der behandles automatisk.",
        ] },
        { h: "Hvis der ikke kommer noget", p: [
          "Tjek spam-mappen, og om den oplyste adresse er rigtig. Slå derefter status op med dine pasoplysninger.",
        ] },
      ],
    },
    "required-documents": {
      slug: "dokumenter",
      title: "Dokumenter til UK ETA: pas, foto og betalingskort | 2026",
      description: "Det skal du bruge til UK ETA: det pas, du rejser på, et ansigtsfoto, en e-mailadresse og et betalingsmiddel.",
      h1: "Hvilke dokumenter skal du bruge",
      lead: "Ansøgningen er enkel: pas, et foto og et betalingsmiddel. Rejsedokumentation eller erklæringer er ikke nødvendige.",
      sections: [
        { h: "Pas", p: [
          "Det skal være det samme pas, du rejser på, og det skal være gyldigt. Skriv oplysningerne af nøjagtigt, som de står.",
        ] },
        { h: "Ansigtsfoto", p: [
          "Du kan tage det med telefonen undervejs i ansøgningen. Ansigtet skal være tydeligt, uden solbriller eller noget, der dækker det, og med ensfarvet baggrund.",
        ] },
        { h: "E-mail og betaling", p: [
          `Afgørelsen kommer på e-mail, så adressen skal være rigtig. Betalingen på ${F.fee} sker til sidst med kort.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "opholdets-laengde",
      title: `Med UK ETA må du blive op til ${F.staySixMonths} måneder pr. rejse | 2026`,
      description: `UK ETA giver ophold på op til ${F.staySixMonths} måneder pr. rejse til turisme, besøg eller forretning. Det må du ikke bruge den til.`,
      h1: "Hvor længe må du blive",
      lead: `Pr. rejse må du opholde dig i Storbritannien i op til ${F.staySixMonths} måneder. Tilladelsen dækker turisme, familiebesøg, forretning og transit.`,
      sections: [
        { h: "Det må du gerne", p: [
          "Turisme, besøge familie eller venner, møder og enkeltstående forretningsaktiviteter samt transit gennem Storbritannien.",
        ] },
        { h: "Det må du ikke", p: [
          "Du må ikke arbejde for en britisk arbejdsgiver eller bosætte dig. Til det findes der andre ordninger.",
          "Længerevarende studier er heller ikke dækket: ETA er til korte ophold." ] },
        { h: "Flere rejser", p: [
          `Du kan rejse flere gange, mens tilladelsen er gyldig, men hvert ophold er begrænset til ${F.staySixMonths} måneder, og ophold må ikke lægges ubegrænset i forlængelse af hinanden.`,
        ] },
      ],
    },
    faq: {
      slug: "ofte-stillede-sporgsmal",
      title: "UK ETA: korte svar om pris, gyldighed og behandlingstid | FAQ 2026",
      description: `Ofte stillede spørgsmål om UK ETA: hvad koster den (${F.fee}), hvor længe gælder den (${F.validYears} år), hvor lang tid tager det, og hvad hvis den får afslag.`,
      h1: "Ofte stillede spørgsmål om UK ETA",
      lead: "Korte svar på de mest stillede spørgsmål. Hvert punkt henviser til den fulde forklaring.",
      sections: [
        { h: `Hvad koster den? ${F.fee}`, p: [`Den officielle pris på GOV.UK er ${F.fee}, som betales én gang for ${F.validYears} år.`] },
        { h: `Hvor længe gælder den? ${F.validYears} år`, p: ["Eller til passet udløber, hvis det sker først. Den dækker flere rejser."] },
        { h: "Hvor lang tid tager det? Som regel 1 dag", p: [`Regn med op til ${F.decisionDays} hverdage, og vent ikke til sidste øjeblik.`] },
        { h: "Og hvis den får afslag?", p: ["Der kan ikke klages. Så skal du søge et visum, der passer til formålet med din rejse."] },
        { h: "Skal børn også have en?", p: ["Ja. Alle, også spædbørn og børn, skal have deres egen tilladelse."] },
      ],
    },
    about: {
      slug: "om-denne-guide",
      title: "Om denne UK ETA-guide | Hvem vi er, og hvordan vi arbejder",
      description: "Hvem der udgiver denne danske guide til UK ETA, hvor oplysningerne kommer fra, og hvordan vi retter fejl.",
      h1: "Om denne guide",
      lead: "Denne guide forklarer UK ETA på dansk. Det er ikke en officiel britisk myndighedsside, og vi indsender ikke ansøgninger.",
      sections: [
        { h: "Ikke en officiel side", p: ["Vi er ikke tilknyttet de britiske myndigheder. Ansøgningen skal altid ske på GOV.UK's officielle side eller i den officielle app."] },
        { h: "Hvor oplysningerne kommer fra", p: ["Beløb, frister og betingelser stammer fra det, GOV.UK offentliggør. Ved tal, der kan ændre sig, angiver vi datoen for opdatering."] },
        { h: "Rettelser", p: ["Ser du en forældet eller forkert oplysning, så sig til. Vi retter den."] },
      ],
    },
    privacy: {
      slug: "privatliv",
      title: "Privatlivspolitik | UK ETA Guide",
      description: "Hvilke oplysninger denne side indsamler, og hvad de bruges til.",
      h1: "Privatlivspolitik",
      lead: "Denne side forklarer, hvordan oplysninger håndteres her på sitet.",
      sections: [
        { h: "Hvilke oplysninger", p: ["For at læse guiden beder vi ikke om personoplysninger. Vi indsender ikke ETA-ansøgninger og modtager derfor hverken pas- eller betalingsoplysninger."] },
        { h: "Statistik", p: ["Vi bruger samlet brugsstatistik til at forbedre indholdet. Den bruges ikke til at identificere enkeltpersoner."] },
      ],
    },
    terms: {
      slug: "juridisk-information",
      title: "Juridisk information | UK ETA Guide",
      description: "Vilkår for brug af denne informative guide til UK ETA.",
      h1: "Juridisk information",
      lead: "Vilkår for brug af indholdet på denne side.",
      sections: [
        { h: "Informativt formål", p: ["Indholdet er ment som information. De officielle betingelser kan ændre sig; tjek dem på GOV.UK før du søger."] },
        { h: "Ansvar", p: ["Vi er ikke ansvarlige for beslutninger, der udelukkende bygger på denne guide. Hver ansøgning afgøres af de britiske myndigheder."] },
      ],
    },
  },
};

export default da;
