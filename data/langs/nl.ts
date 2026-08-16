import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// オランダ語。未着手の中で最大市場（渡航者約200万人）。ベルギー北部もカバーできる。
const nl: LangContent = {
  code: "nl",
  label: "Nederlands",
  siteName: "UK ETA Gids",
  tagline: "De reistoestemming voor het Verenigd Koninkrijk, stap voor stap",
  homeTitle: `UK ETA: ${F.fee} en meestal binnen 1 dag antwoord | Gids in het Nederlands 2026`,
  homeDescription:
    `Nederlandstalige gids over de UK ETA: het kost ${F.fee}, is ${F.validYears} jaar geldig en geeft recht op verblijven van maximaal ${F.staySixMonths} maanden per reis. Zo vraagt u hem aan op de officiële website van GOV.UK.`,
  homeLead:
    `Reist u naar het Verenigd Koninkrijk, dan heeft u een UK ETA nodig. De aanvraag kost ${F.fee} op de officiële site, het antwoord komt meestal binnen 1 dag en de toestemming geldt ${F.validYears} jaar voor meerdere reizen.`,
  nav: { info: "Over de ETA", entry: "Reizen naar het VK", faq: "Veelgestelde vragen" },
  officialLinkLabel: "Aanvragen op de officiële site van GOV.UK",
  updatedLabel: "Bijgewerkt",
  pages: {
    "what-is-eta": {
      slug: "wat-is-de-eta",
      title: "Wat is de UK ETA: een verplichte toestemming vooraf, geen visum | 2026",
      description: `De UK ETA is een elektronische reistoestemming die u vóór vertrek aanvraagt. Het is geen visum: u regelt het online, het kost ${F.fee} en het wordt aan uw paspoort gekoppeld.`,
      h1: "Wat is de UK ETA",
      lead: "De UK ETA (Electronic Travel Authorisation) vraagt u aan vóór uw reis. Het vervangt uw paspoort niet en is geen visum.",
      sections: [
        { h: "Geen visum", p: [
          "De ETA is een toestemming vooraf voor reizigers die geen visum nodig hebben voor het Verenigd Koninkrijk. De controle gebeurt vóór het instappen: zonder ETA kan de luchtvaartmaatschappij u weigeren.",
          "Anders dan bij een visum is er geen afspraak of interview nodig. Alles gaat online." ] },
        { h: "Gekoppeld aan uw paspoort", p: [
          `De toestemming hoort bij het paspoort waarmee u hem aanvraagt. Vernieuwt u uw paspoort, dan vraagt u een nieuwe ETA aan, ook als de ${F.validYears} jaar nog niet voorbij zijn.`,
          "U hoeft niets af te drukken: aan de grens volstaat hetzelfde paspoort." ] },
        { h: "Wie heeft hem nodig", p: [
          "Reizigers uit landen zonder visumplicht, dus ook Nederland en België, voor toerisme, familiebezoek, zaken of transit.",
          "Ook kinderen en baby's hebben een eigen ETA nodig." ] },
      ],
    },
    application: {
      slug: "hoe-aanvragen",
      title: "UK ETA aanvragen: online en in een paar minuten | Gids 2026",
      description: `Stappen om de UK ETA aan te vragen via de officiële site of app van GOV.UK: paspoort, gezichtsfoto, contactgegevens en betaling van ${F.fee}.`,
      h1: "Hoe vraagt u de UK ETA aan",
      lead: "De aanvraag gaat volledig online, via de officiële website van GOV.UK of de officiële app. U hoeft nergens langs te gaan.",
      sections: [
        { h: "Wat u bij de hand moet hebben", p: [
          "Het paspoort waarmee u reist, een foto van uw gezicht (die u met uw telefoon kunt maken), een e-mailadres en een betaalkaart.",
          "De gegevens moeten exact overeenkomen met het paspoort. Een naam die anders is geschreven is de meest voorkomende reden voor afwijzing." ] },
        { h: "De stappen", p: [
          `Ga naar de officiële site van GOV.UK of download de officiële app, scan de gegevenspagina van uw paspoort, maak de foto, beantwoord de vragen over uw achtergrond en betaal ${F.fee}.`,
          `Daarna wacht u op de beslissing. Die komt meestal binnen 1 dag, maar houd rekening met maximaal ${F.decisionDays} werkdagen.` ] },
        { h: "Controleer vóór verzending", p: [
          "Of het paspoortnummer en de vervaldatum goed zijn overgenomen, of uw gezicht goed zichtbaar is op de foto en of het e-mailadres klopt: daar komt de beslissing binnen.",
          "Vraag de ETA ruim van tevoren aan en niet op de dag van vertrek." ] },
      ],
    },
    fee: {
      slug: "kosten",
      title: `Kosten UK ETA: ${F.fee} op de officiële site | Let op tussenpersonen`,
      description: `De UK ETA kost ${F.fee} op GOV.UK. Dat is een eenmalige betaling voor ${F.validYears} jaar en meerdere reizen. Zo herkent u sites die een toeslag rekenen.`,
      h1: "Wat kost de UK ETA",
      lead: `De officiële prijs is ${F.fee} en u betaalt die één keer. Daarmee is de toestemming ${F.validYears} jaar geldig, voor meerdere reizen.`,
      sections: [
        { h: "Eén keer betalen", p: [
          `Er zijn geen jaarlijkse kosten of tussentijdse verlengingen: u betaalt ${F.fee} bij de aanvraag en de toestemming geldt ${F.validYears} jaar, of tot uw paspoort verloopt.`,
          "Het bedrag wordt ook in rekening gebracht als de aanvraag wordt afgewezen, omdat het de behandeling dekt." ] },
        { h: "Sites die meer vragen", p: [
          "Er bestaan tussenpersonen die hun eigen commissie boven op het officiële bedrag zetten. Zij zijn niet door de Britse overheid gemachtigd en doen precies wat u zelf ook kunt doen.",
          `Vraagt een site duidelijk meer dan ${F.fee}, dan is het verschil hun commissie.` ] },
        { h: "De officiële site herkennen", p: [
          "Het officiële adres valt onder het domein GOV.UK. Wees voorzichtig met sites die zich «officiële partner» of «erkend agent» noemen: de Britse overheid machtigt geen derden om aanvragen in te dienen.",
        ] },
      ],
    },
    "status-check": {
      slug: "status-controleren",
      title: "Status van uw UK ETA controleren: waar en wat u nodig heeft | 2026",
      description: "Zo controleert u of uw UK ETA is goedgekeurd: de melding komt per e-mail en de status vraagt u op met uw paspoortnummer.",
      h1: "De status van uw UK ETA controleren",
      lead: "De beslissing wordt per e-mail meegedeeld. Is die niet aangekomen, dan kunt u de status opvragen met de gegevens van het paspoort waarmee u de aanvraag deed.",
      sections: [
        { h: "Kijk eerst in uw e-mail", p: [
          "De goedkeuring gaat naar het adres dat u bij de aanvraag opgaf. Kijk ook in de map ongewenste e-mail voordat u ervan uitgaat dat er iets misging.",
          "Er wordt geen document verstrekt om af te drukken: de toestemming staat geregistreerd bij uw paspoort." ] },
        { h: "Wat u nodig heeft", p: [
          "Het paspoortnummer waarmee u de aanvraag deed en uw persoonsgegevens zoals u ze heeft ingevuld.",
          "Heeft u de ETA met een ander paspoort aangevraagd, dan vindt de controle hem niet." ] },
        { h: "Als het langer duurt", p: [
          `De meeste beslissingen komen binnen 1 dag, maar houd rekening met maximaal ${F.decisionDays} werkdagen. Duurt het langer en nadert uw vertrek, neem dan contact op via de officiële kanalen.`,
        ] },
      ],
    },
    validity: {
      slug: "geldigheid",
      title: `UK ETA: ${F.validYears} jaar geldig of tot uw paspoort verloopt | 2026`,
      description: `De UK ETA is ${F.validYears} jaar geldig vanaf de goedkeuring en geldt voor meerdere reizen. Bij een nieuw paspoort vraagt u hem opnieuw aan.`,
      h1: "Hoe lang is de UK ETA geldig",
      lead: `De toestemming is ${F.validYears} jaar geldig, of tot de vervaldatum van uw paspoort als die eerder valt.`,
      sections: [
        { h: "Meerdere reizen inbegrepen", p: [
          `In die ${F.validYears} jaar kunt u zo vaak naar het Verenigd Koninkrijk reizen als u wilt, zolang elk verblijf niet langer duurt dan ${F.staySixMonths} maanden.`,
          "U hoeft niet voor elke reis een nieuwe toestemming aan te vragen." ] },
        { h: "Bij een nieuw paspoort", p: [
          "De toestemming hoort bij het paspoort waarmee hij is aangevraagd. Vernieuwt u dat, dan vraagt u een nieuwe ETA aan, ook als er nog geldigheid over is.",
        ] },
        { h: "De datum terugvinden", p: [
          "De datum staat in de goedkeuringsmail. Heeft u die niet meer, vraag de status dan op met uw paspoortgegevens.",
        ] },
      ],
    },
    "processing-time": {
      slug: "doorlooptijd",
      title: `UK ETA: meestal binnen 1 dag antwoord (tot ${F.decisionDays} werkdagen) | 2026`,
      description: `De beslissing over de UK ETA komt meestal binnen 1 dag, maar houd rekening met maximaal ${F.decisionDays} werkdagen. Wanneer u hem het beste aanvraagt.`,
      h1: "Hoe lang duurt de UK ETA",
      lead: `In de meeste gevallen komt het antwoord binnen 1 dag. Toch is het advies om rekening te houden met maximaal ${F.decisionDays} werkdagen.`,
      sections: [
        { h: "Wanneer aanvragen", p: [
          "Vraag hem aan zodra u uw vlucht heeft geboekt, en niet de dag vóór vertrek. Is aanvullende controle nodig, dan duurt het langer.",
          "Zonder goedgekeurde toestemming kan de luchtvaartmaatschappij u weigeren." ] },
        { h: "Waarom het soms langer duurt", p: [
          "Aanvragen die handmatig moeten worden bekeken (bijvoorbeeld bij een «ja» op de achtergrondvragen) duren langer dan aanvragen die automatisch worden afgehandeld.",
        ] },
        { h: "Als er niets komt", p: [
          "Controleer de map ongewenste e-mail en of het opgegeven adres klopt. Vraag daarna de status op met uw paspoortgegevens.",
        ] },
      ],
    },
    "required-documents": {
      slug: "benodigde-documenten",
      title: "Documenten voor de UK ETA: paspoort, foto en betaalkaart | 2026",
      description: "Wat u nodig heeft voor de UK ETA: het paspoort waarmee u reist, een gezichtsfoto, een e-mailadres en een betaalmiddel.",
      h1: "Welke documenten heeft u nodig",
      lead: "De aanvraag is eenvoudig: paspoort, een foto en een betaalmiddel. Reisbewijzen of verklaringen zijn niet nodig.",
      sections: [
        { h: "Paspoort", p: [
          "Het moet hetzelfde paspoort zijn waarmee u reist en het moet geldig zijn. Neem de gegevens exact over zoals ze er staan.",
        ] },
        { h: "Gezichtsfoto", p: [
          "Die kunt u tijdens de aanvraag met uw telefoon maken. Uw gezicht moet goed zichtbaar zijn, zonder zonnebril of iets dat het bedekt, met een egale achtergrond.",
        ] },
        { h: "E-mailadres en betaling", p: [
          `De beslissing komt per e-mail, dus het adres moet kloppen. De betaling van ${F.fee} doet u aan het eind met een kaart.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "verblijfsduur",
      title: `Met de UK ETA maximaal ${F.staySixMonths} maanden per reis | 2026`,
      description: `De UK ETA geeft recht op verblijven van maximaal ${F.staySixMonths} maanden per reis, voor toerisme, bezoek of zaken. Wat er niet mee mag.`,
      h1: "Hoe lang mag u blijven",
      lead: `Per reis mag u maximaal ${F.staySixMonths} maanden in het Verenigd Koninkrijk blijven. De toestemming geldt voor toerisme, familiebezoek, zaken en transit.`,
      sections: [
        { h: "Wat mag wel", p: [
          "Toerisme, familie of vrienden bezoeken, vergaderingen en losse zakelijke activiteiten, en transit via het Verenigd Koninkrijk.",
        ] },
        { h: "Wat mag niet", p: [
          "Werken voor een Britse werkgever of u er vestigen mag niet. Daarvoor bestaan andere routes.",
          "Ook langdurige studie valt er niet onder: de ETA is voor kort verblijf." ] },
        { h: "Meerdere keren reizen", p: [
          `U kunt meerdere keren reizen zolang de toestemming geldig is, maar elk verblijf is beperkt tot ${F.staySixMonths} maanden en verblijven mogen niet onbeperkt aan elkaar worden geplakt.`,
        ] },
      ],
    },
    faq: {
      slug: "veelgestelde-vragen",
      title: "UK ETA: korte antwoorden over kosten, geldigheid en doorlooptijd | FAQ 2026",
      description: `Veelgestelde vragen over de UK ETA: wat kost hij (${F.fee}), hoe lang is hij geldig (${F.validYears} jaar), hoe lang duurt het en wat als hij wordt afgewezen.`,
      h1: "Veelgestelde vragen over de UK ETA",
      lead: "Korte antwoorden op de meest gestelde vragen. Elk onderdeel verwijst naar de volledige uitleg.",
      sections: [
        { h: `Wat kost het? ${F.fee}`, p: [`De officiële prijs op GOV.UK is ${F.fee}, één keer te betalen voor ${F.validYears} jaar.`] },
        { h: `Hoe lang geldig? ${F.validYears} jaar`, p: ["Of tot uw paspoort verloopt, als dat eerder is. Geldt voor meerdere reizen."] },
        { h: "Hoe lang duurt het? Meestal 1 dag", p: [`Houd rekening met maximaal ${F.decisionDays} werkdagen en wacht niet tot het laatste moment.`] },
        { h: "En als hij wordt afgewezen?", p: ["Bezwaar is niet mogelijk. Dan zou u een visum moeten aanvragen dat past bij het doel van uw reis."] },
        { h: "Hebben kinderen er ook een nodig?", p: ["Ja. Iedereen, ook baby's en kinderen, heeft een eigen toestemming nodig."] },
      ],
    },
    about: {
      slug: "over-deze-gids",
      title: "Over deze UK ETA-gids | Wie wij zijn en hoe wij werken",
      description: "Wie deze Nederlandstalige gids over de UK ETA publiceert, waar de gegevens vandaan komen en hoe wij met correcties omgaan.",
      h1: "Over deze gids",
      lead: "Deze gids legt de UK ETA in het Nederlands uit. Dit is geen officiële website van de Britse overheid en wij dienen geen aanvragen in.",
      sections: [
        { h: "Geen officiële website", p: ["Wij zijn niet verbonden aan de Britse overheid. De aanvraag doet u altijd op de officiële site van GOV.UK of in de officiële app."] },
        { h: "Waar de gegevens vandaan komen", p: ["Bedragen, termijnen en voorwaarden komen uit de informatie die GOV.UK publiceert. Bij cijfers die kunnen veranderen vermelden wij de datum van bijwerking."] },
        { h: "Correcties", p: ["Ziet u een verouderd of onjuist gegeven, laat het ons weten. Wij passen het aan."] },
      ],
    },
    privacy: {
      slug: "privacy",
      title: "Privacyverklaring | UK ETA Gids",
      description: "Welke gegevens deze website verzamelt en waarvoor.",
      h1: "Privacyverklaring",
      lead: "Deze pagina legt uit hoe met gegevens wordt omgegaan op deze site.",
      sections: [
        { h: "Welke gegevens", p: ["Om de gids te lezen vragen wij geen persoonsgegevens. Wij dienen geen ETA-aanvragen in en ontvangen dus geen paspoort- of betaalgegevens."] },
        { h: "Statistieken", p: ["Wij gebruiken geaggregeerde gebruiksstatistieken om de inhoud te verbeteren. Die worden niet gebruikt om personen te identificeren."] },
      ],
    },
    terms: {
      slug: "juridische-informatie",
      title: "Juridische informatie | UK ETA Gids",
      description: "Gebruiksvoorwaarden van deze informatieve gids over de UK ETA.",
      h1: "Juridische informatie",
      lead: "Voorwaarden voor het gebruik van de inhoud van deze site.",
      sections: [
        { h: "Informatief karakter", p: ["De inhoud is informatief bedoeld. Officiële voorwaarden kunnen veranderen; controleer ze vóór de aanvraag op GOV.UK."] },
        { h: "Aansprakelijkheid", p: ["Wij zijn niet aansprakelijk voor beslissingen die uitsluitend op deze gids zijn gebaseerd. Over elke aanvraag beslist de Britse overheid."] },
      ],
    },
  },
};

export default nl;
