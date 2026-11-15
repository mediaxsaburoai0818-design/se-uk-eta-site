import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（fi・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "kuka-tarvitsee-eta",
    group: "eta",
    title: "Kuka tarvitsee UK ETA:n? Kansalaisuudet ja poikkeukset 2026",
    description: "Kuka tarvitsee UK ETA:n ja kuka on vapautettu: Britannian ja Irlannin kansalaiset, oleskeluluvan haltijat ja airside-kauttakulku. Opas kansalaisuuden mukaan.",
    h1: "Kuka tarvitsee UK ETA:n?",
    lead: "UK ETA vaaditaan viisumivapaiden maiden kansalaisilta lyhyillä oleskeluilla (matkailu, liikematkat, lyhyt opiskelu). Jokainen matkustaja, myös vauvat ja lapset, tarvitsee oman ETA:n.",
    card: "Kenen on haettava ETA ja kuka on vapautettu – myös suomalaisille",
    sections: [
      { h: "Ketä ETA-vaatimus koskee", blocks: [
        "ETA vaaditaan viisumivapaiden maiden kansalaisilta, kun he matkustavat Yhdistyneeseen kuningaskuntaan lyhyesti: matkailuun, liikematkalle tai lyhyeen opiskeluun. Suomi kuuluu näihin maihin, joten myös Suomen kansalaiset tarvitsevat ETA:n.",
        { note: "Jokainen matkustaja, myös vauvat ja lapset, tarvitsee oman ETA:n." },
      ] },
      { h: "Kuka on vapautettu ETA:sta", blocks: [
        { ul: [
          "Britannian ja Irlannin kansalaiset (brittiläisellä tai irlantilaisella passilla)",
          "Henkilöt, joilla on lupa asua, työskennellä tai opiskella Isossa-Britanniassa (esim. viisumi, settled/pre-settled status)",
          "British Overseas Territories Citizen- tai British National (Overseas) -passin haltijat",
          "Irlannissa asuvat henkilöt, jotka matkustavat Irlannista, Guernseystä, Jerseystä tai Mansaarelta",
          "Airside-kauttakulkumatkustajat, jotka eivät kulje rajatarkastuksen läpi",
          "Henkilöt, jotka odottavat päätöstä EU Settlement Scheme -hakemukseensa",
        ] },
      ] },
      { h: "Hyvä tietää", blocks: [
        { ul: [
          "Britannian tai Irlannin kansalaisuuden omaavat eivät voi saada ETA:a, vaan he matkustavat kyseisen kansalaisuuden asiakirjoilla.",
          "Jos kansalaisuutesi ei ole viisumivapaa, saatat tarvita viisumin: tarkista asia GOV.UK:n virallisella työkalulla.",
          "Myös vauvat ja lapset tarvitsevat oman ETA:n.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-vai-viisumi",
    group: "eta",
    title: "UK ETA vai viisumi: mikä on ero? 2026",
    description: `Ero UK ETA:n ja viisumin välillä: ETA sallii enintään ${F.staySixMonths} kuukauden oleskelun matkailuun, liikematkaan ja lyhyeen opiskeluun – ei työtä eikä maahan asettumista.`,
    h1: "UK ETA vai viisumi: ero",
    lead: "UK ETA ei ole viisumi, vaan matkustuslupa viisumivapaiden maiden kansalaisille. Se ei takaa maahanpääsyä – päätöksen tekee rajaviranomainen.",
    card: "Mitä ETA:lla saa tehdä Britanniassa ja milloin tarvitaan viisumi",
    sections: [
      { h: `Mitä ETA:lla saa tehdä (enintään ${F.staySixMonths} kuukautta)`, blocks: [
        { ul: [
          "Matkailu sekä perheen ja ystävien tapaaminen",
          "Liikematkat (business)",
          "Lyhyt opiskelu (short-term study)",
          "Kauttakulku, jossa kuljet rajatarkastuksen läpi",
          "Permitted paid engagement; toiminta enintään 3 kuukautta Creative Worker concession -järjestelyllä",
        ] },
      ] },
      { h: "Mitä ETA:lla EI saa tehdä", blocks: [
        { ul: [
          `Yli ${F.staySixMonths} kuukauden oleskelut`,
          "Palkallinen tai palkaton työ brittiläiselle yritykselle tai itsenäisenä ammatinharjoittajana (lukuun ottamatta yllä mainittuja poikkeuksia)",
          "Julkisten varojen (public funds) vastaanottaminen",
          "Tosiasiallinen asettuminen Isoon-Britanniaan tiheillä, toistuvilla vierailuilla",
          "Avioliiton tai parisuhteen rekisteröinti (vaatii Marriage Visitor -viisumin)",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "standard-visitor-visa": {
    slug: "standard-visitor-viisumi",
    group: "eta",
    title: "Standard Visitor -viisumi Britanniaan: kun ETA ei riitä",
    description: "Jos UK ETA -hakemuksesi hylätään (valittaa ei voi) tai kansalaisuutesi vaatii viisumin, tarvitset Standard Visitor -viisumin. Hinnat, käsittelyaika ja haku.",
    h1: "Standard Visitor -viisumi Britanniaan: kun ETA ei riitä",
    lead: "Jos UK ETA -hakemuksesi hylätään (valittaa ei voi) tai kansalaisuutesi vaatii viisumin, sinun on haettava Standard Visitor -viisumia matkustaaksesi Isoon-Britanniaan. Alla tiedot GOV.UK:n mukaan.",
    card: "Viisumin hinnat (alk. £135), käsittelyaika ja hakuvaiheet",
    sections: [
      { h: "Kuka tarvitsee viisumin ETA:n sijaan", blocks: [
        { ul: [
          "Henkilöt, joiden kansalaisuus vaatii viisumin Britanniaan (eivät ole oikeutettuja ETA:han).",
          "Henkilöt, joiden ETA-hakemus on hylätty – ETA:lla ei voi matkustaa Britanniaan, vaan tarvitaan viisumi.",
          "Tarkista, minkä viisumin tarvitset, GOV.UK:n työkalulla ”Check if you need a UK visa”.",
        ] },
      ] },
      { h: "Hinnat (GOV.UK)", blocks: [
        { table: { head: ["Viisumi", "Hinta"], rows: [
          ["Standard Visitor (enintään 6 kuukautta)", "£135"],
          ["Pitkäaikainen – 2 vuotta", "£506"],
          ["Pitkäaikainen – 5 vuotta", "£903"],
          ["Pitkäaikainen – 10 vuotta", "£1 128"],
          ["Kauttakulkuviisumi", "£74,50"],
        ] } },
        "Pitkäaikainen viisumi sallii useita maahantuloja, mutta jokainen oleskelu on rajattu 6 kuukauteen. Summat GOV.UK:n mukaan – ne voivat muuttua.",
      ] },
      { h: "Käsittelyaika, voimassaolo ja oleskelu", blocks: [
        { ul: [
          "Päätös: yleensä 3 viikon kuluessa käynnistä viisumikeskuksessa.",
          "Oleskelu: enintään 6 kuukautta käyntiä kohden.",
          "Milloin hakea: aikaisintaan 3 kuukautta ennen matkaa.",
        ] },
      ] },
      { h: "Näin haet (GOV.UK)", blocks: [
        { ul: [
          "1. Hae verkossa (voit tallentaa hakemuksen ja viimeistellä sen myöhemmin).",
          "2. Varaa aika viisumihakemuskeskukseen.",
          "3. Mene käynnille todistamaan henkilöllisyytesi ja antamaan biometriset tiedot (sormenjäljet ja valokuva) sekä asiakirjat.",
          "4. Saat päätöksen sähköpostiin; passi palautetaan keskuksessa.",
        ] },
        "Valmistele muun muassa:",
        { ul: [
          "Voimassa oleva passi (voimassa koko oleskelun ajan)",
          "Matkapäivät, majoitus ja arvioidut kustannukset",
          "Nykyinen osoite ja kuinka kauan olet asunut siinä",
          "Vuositulot (tarvittaessa) ja työnantajan tiedot (tarvittaessa)",
          "Mahdollinen rikos- tai maahanmuuttohistoria",
          "Oikeaksi todistetut käännökset asiakirjoista, jotka eivät ole englanniksi tai kymriksi",
        ] },
        { note: "Tämä on riippumaton tietopalvelu, ei viranomaisen sivusto. Tiedot ja hinnat voivat muuttua – tarkista aina viralliset tiedot GOV.UK:sta ennen hakemista." },
      ] },
    ],
    faq: [
      { q: "Milloin tarvitsen Standard Visitor -viisumin ETA:n sijaan?", a: "Kun kansalaisuutesi vaatii viisumin Britanniaan tai kun ETA-hakemuksesi on hylätty. ETA-päätöksestä ei voi valittaa – matkustaaksesi haet oikeaa viisumia." },
      { q: "Paljonko Standard Visitor -viisumi maksaa?", a: "GOV.UK:n mukaan enintään 6 kuukauden viisumi maksaa £135. Pitkäaikaiset: £506 (2 vuotta), £903 (5 vuotta), £1 128 (10 vuotta). Kauttakulkuviisumi £74,50." },
      { q: "Kauanko käsittely kestää?", a: "Päätös tulee yleensä 3 viikon kuluessa käynnistä viisumikeskuksessa." },
      { q: "Kuinka kauan saan oleskella Britanniassa?", a: "Tavallinen oleskelu on enintään 6 kuukautta käyntiä kohden." },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
  },

  "expiration": {
    slug: "eta-vanhenee",
    group: "eta",
    title: `Milloin UK ETA vanhenee ja milloin haet uuden? | 2026`,
    description: `UK ETA vanhenee ${F.validYears} vuoden kuluttua tai passin mukana, jos se on aiemmin. Uusi ETA tarvitaan uuden passin, nimenmuutoksen tai olosuhteiden muuttuessa.`,
    h1: "Milloin UK ETA vanhenee ja milloin on haettava uusi",
    lead: `UK ETA on voimassa ${F.validYears} vuotta myöntämispäivästä tai kunnes passi vanhenee – kumpi tahansa tapahtuu ensin. Uusi hakemus tarvitaan, kun lupa vanhenee tai kun saat uuden passin.`,
    card: "Vanhenemisen säännöt ja tilanteet, joissa on haettava uusi ETA",
    sections: [
      { h: "Voimassaolon säännöt lyhyesti", blocks: [
        `Voimassaoloa käsitellään tarkemmin sivulla [Kuinka kauan UK ETA on voimassa](/fi/voimassaolo/). Tiivistettynä (GOV.UK):`,
        { ul: [
          `Voimassa ${F.validYears} vuotta myöntämispäivästä`,
          "Lakkaa olemasta voimassa passin mukana (jos passi vanhenee aiemmin)",
          "Sallii useita maahantuloja Isoon-Britanniaan voimassaoloaikana",
          `Yksittäinen oleskelu saa olla enintään ${F.staySixMonths} kuukautta`,
          "ETA on sidottu tiettyyn passiin",
        ] },
      ] },
      { h: "Milloin on haettava uusi ETA?", blocks: [
        "Uusi UK ETA -hakemus on tehtävä seuraavissa tilanteissa:",
        { ul: [
          `Kun ETA:n myöntämisestä on kulunut ${F.validYears} vuotta`,
          "Kun olet saanut uuden passin",
          "Kun nimesi muuttuu",
          "Kun olosuhteesi muuttuvat tavalla, joka vaikuttaa oikeuteen saada ETA",
        ] },
      ] },
      { h: "Voinko matkustaa ETA:lla, joka on pian vanhenemassa?", blocks: [
        "UK ETA:n on oltava voimassa, kun saavut Isoon-Britanniaan. Sen ei tarvitse olla voimassa koko oleskelun ajan – olennaista on, että se on voimassa saapumispäivänä. Uusi hakemus kannattaa silti tehdä hyvissä ajoin.",
      ] },
      { h: "Miten tarkistan vanhenemispäivän?", blocks: [
        "GOV.UK:n mukaan voit tarkistaa sen verkossa osoitteessa gov.uk/eta (Check your ETA): siellä näet, onko sinulla ETA ja milloin se lakkaa olemasta voimassa. Katso myös [UK ETA:n tilan tarkistaminen](/fi/tilan-tarkistus/).",
      ] },
      { h: "Mitä tapahtuu, jos vaihdan passia ETA:n ollessa voimassa?", blocks: [
        `ETA on sidottu tiettyyn passiin. Jos hankit uuden passin (esim. vanhan vanhennuttua tai nimenmuutoksen vuoksi), sinun on tehtävä uusi ETA-hakemus ja maksettava ${F.fee} maksu uudelleen. Vanha ETA lakkaa olemasta voimassa.`,
        { note: `Vinkki: UK ETA -hakemus kannattaa tehdä vähintään ${F.decisionDays} arkipäivää ennen suunniteltua matkaa, jotta hakemuksen käsittelylle jää aikaa.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "lapset-ja-perhe",
    group: "eta",
    title: "UK ETA lapsille ja perheille: tarvitseeko vauva oman? 2026",
    description: "Myös vauvat ja lapset tarvitsevat oman UK ETA:n. Voit hakea toisen henkilön puolesta hänen passinsa ja kasvokuvansa avulla.",
    h1: "UK ETA lapsille ja perheille",
    lead: "Jokainen matkustaja, myös vauvat ja lapset, tarvitsee oman UK ETA:n. Voit tehdä hakemuksen toisen henkilön puolesta.",
    card: "Jokainen perheenjäsen tarvitsee oman ETA:n – näin haet muiden puolesta",
    sections: [
      { h: "Hakemus koko perheelle", blocks: [
        { ul: [
          "Jokainen matkustaja tarvitsee oman ETA:n, myös lapset ja vauvat",
          "Voit hakea toisen henkilön puolesta: sovelluksessa, jos henkilö on paikalla, muuten verkossa (passi ja kasvokuva tarvitaan)",
          "Lapset, jotka on merkitty France-UK school trip travel information form -lomakkeelle, eivät tarvitse ETA:a",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "hylatty-eta",
    group: "eta",
    title: "UK ETA hylättiin? Mitä tehdä ja mitkä ovat vaihtoehdot 2026",
    description: "Hylätystä UK ETA:sta ei voi valittaa. Matkustaaksesi Isoon-Britanniaan sinun on haettava viisumia. Vaihtoehdot vuonna 2026.",
    h1: "UK ETA hylättiin: mitä nyt?",
    lead: "Jos UK ETA -hakemuksesi hylätään, siitä ei voi valittaa (appeal). Jos haluat silti matkustaa Isoon-Britanniaan, sinun on haettava viisumia.",
    card: "Hylkäyksestä ei voi valittaa – seuraava askel on viisumi",
    sections: [
      { h: "Mitä tehdä hylkäyksen jälkeen", blocks: [
        { ul: [
          "ETA-hylkäykseen ei ole muutoksenhakumenettelyä",
          "Matkustaaksesi Isoon-Britanniaan sinun on haettava sopivaa viisumia",
          "Tarkista GOV.UK:sta, mikä viisumi sopii matkasi tarkoitukseen",
        ] },
      ] },
      { h: "Seuraava askel: Standard Visitor -viisumi", blocks: [
        "ETA-hylkäyksen jälkeen viisumi on ainoa tie Isoon-Britanniaan. Katso hinta (£135), käsittelyaika ja hakuprosessi oppaasta [Standard Visitor -viisumi Britanniaan](/fi/standard-visitor-viisumi/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (huhtikuu 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "yleiset-virheet",
    group: "eta",
    title: "Yleiset virheet UK ETA -hakemuksessa ja virallinen sovellus 2026",
    description: "Yleiset virheet UK ETA -hakemuksessa: passitiedot eivät täsmää, kuvavaatimukset, maksu ja väärennetyt sivustot. Käytä virallista UK ETA -sovellusta.",
    h1: "Yleiset virheet ja UK ETA -sovellus",
    lead: "Monet ongelmat johtuvat tiedoista, jotka eivät vastaa passia. Käytä aina virallista ”UK ETA” -sovellusta ja tarkista tiedot ennen lähettämistä.",
    card: "Passitiedot, kuvat, maksu ja huijaussivustot – vältä nämä virheet",
    sections: [
      { h: "Vältettävät virheet", blocks: [
        { ul: [
          "Tietojen on vastattava passia täsmälleen: poikkeamat aiheuttavat viivästyksiä tai hylkäyksen",
          "Vaaditut kuvat: kasvot ja kaikki passin sivut, terävinä ja oikein",
          `Maksu (${F.fee}): Apple Pay/Google Pay/kortti (Amex, JCB, Mastercard, Visa); 3D Secure -tunnistautuminen voidaan vaatia`,
          "Biometrinen passi (ePassport-symboli) tarvitaan sirun lukemiseen",
          "Varo väärennettyjä sivustoja, jotka jäljittelevät viranomaisia ja perivät korkeampia maksuja: käytä vain GOV.UK:ta",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "virallinen-gov-uk",
    group: "eta",
    title: "UK ETA:n virallinen GOV.UK-sivu – näin tunnistat huijaussivut",
    description: "Vain GOV.UK on virallinen paikka hakea UK ETA:a. Näin tunnistat väärennetyt sivustot ja vältät huijaukset, joissa peritään ylimääräisiä maksuja.",
    h1: "UK ETA -hakemuksen virallinen GOV.UK-sivu",
    lead: "UK ETA -hakemuksen voi jättää Britannian hallituksen virallisella verkkosivustolla tai virallisessa mobiilisovelluksessa.",
    card: "Virallinen osoite, varoitusmerkit ja virallinen sovellus",
    sections: [
      { h: "Virallinen verkko-osoite", blocks: [
        "UK ETA:n virallinen sivu: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta). Verkkotunnus .gov.uk tarkoittaa Britannian hallituksen virallista sivustoa.",
      ] },
      { h: "Miten tunnistat virallisen sivun?", blocks: [
        { ul: [
          "Verkko-osoitteessa on gov.uk (Britannian hallituksen verkkotunnus)",
          "Sivustoa ylläpitää Home Office",
          `Maksu on täsmälleen ${F.fee}`,
          "Sivustolla on GOV.UK:n tunnusomainen musta-valkoinen ulkoasu",
          "Se ei peri maksua ”nopeammasta” käsittelystä",
        ] },
      ] },
      { h: "Miten tunnistat väärennetyn sivun?", blocks: [
        { note: "Varoitusmerkit: verkko-osoitteessa ei ole gov.uk · maksu selvästi yli " + F.fee + " · lupaus ”taatusta hyväksynnästä” · tarjous ”nopeammasta käsittelystä” · aggressiivinen mainonta tai tunkeilevat ponnahdusikkunat · GOV.UK-logo puuttuu." },
      ] },
      { h: "Virallinen mobiilisovellus", blocks: [
        "UK ETA -hakemuksen voi jättää myös virallisessa ”UK ETA” -mobiilisovelluksessa:",
        { ul: [
          "iOS: hae ”UK ETA” App Storesta (julkaisija: Home Office)",
          "Android: hae ”UK ETA” Google Playsta (julkaisija: Home Office)",
        ] },
      ] },
      { h: "Muita hyödyllisiä viranomaissivuja", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) – tarkista Britannian viisumivaatimukset",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) – tietoa turistiviisumista",
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
    slug: "eta-sovellus",
    group: "eta",
    title: "Virallinen UK ETA -sovellus: hae puhelimella | iOS ja Android 2026",
    description: "Virallisella UK ETA -sovelluksella haet suoraan puhelimella. Näin lataat sen, mitä tarvitset (passi ja kasvokuva) ja miten hakeminen etenee.",
    h1: "UK ETA -mobiilisovellus",
    lead: "Britannian hallitus tarjoaa virallisen ”UK ETA” -mobiilisovelluksen, jolla hakemuksen voi jättää suoraan älypuhelimella.",
    card: "Lataus, laitevaatimukset, NFC-passiskannaus ja hakuvaiheet",
    sections: [
      { h: "Tietoa UK ETA -sovelluksesta", blocks: [
        "UK ETA -sovellus on Home Officen virallinen työkalu sähköisen matkustusluvan hakemiseen. Se on suositeltu tapa hakea, koska sillä voi skannata passin NFC:n avulla ja täyttää tiedot automaattisesti.",
      ] },
      { h: "Saatavuus", blocks: [
        { ul: [
          "iOS (App Store) – Applen laitteille (iPhone). Vaatii iOS 16:n tai uudemman.",
          "Android (Google Play) – Android-laitteille. Vaatii Android 12:n tai uudemman sekä NFC:n.",
        ] },
        "Hae sovellusta nimellä ”UK ETA”, julkaisija: Home Office.",
      ] },
      { h: "Sovelluksen toiminnot", blocks: [
        { ul: [
          "Uuden UK ETA -hakemuksen jättäminen",
          "Biometrisen passin skannaus (NFC + OCR)",
          "Kasvokuvan (selfien) ottaminen tunnistusta varten",
          "Olemassa olevan hakemuksen tilan tarkistaminen",
          "Maksu kortilla, Apple Paylla tai Google Paylla",
          "Push-ilmoitukset tilan muuttuessa",
        ] },
      ] },
      { h: "Miten sovelluksella haetaan?", blocks: [
        { ul: [
          "1. Lataa ”UK ETA” -sovellus App Storesta tai Google Playsta",
          "2. Luo tili (sähköpostiosoite ja salasana)",
          "3. Skannaa biometrinen passi (pidä puhelinta passia vasten)",
          "4. Ota kasvokuva (selfie)",
          "5. Vastaa lomakkeen kysymyksiin",
          `6. Maksa ${F.fee}`,
          "7. Lähetä hakemus ja odota päätöstä",
        ] },
      ] },
      { h: "Passin skannaus (NFC)", blocks: [
        "Sovellus käyttää NFC-tekniikkaa (Near Field Communication) lukeakseen tiedot passin biometrisestä sirusta. Näin skannaat passin:",
        { ul: [
          "Avaa passi kuvasivulta",
          "Pidä puhelimen takaosaa avattua passia vasten",
          "Pidä paikallaan 5–10 sekuntia",
          "Odota, kunnes sovellus vahvistaa, että tiedot on luettu",
        ] },
      ] },
      { h: "Mobiilisovelluksen edut", blocks: [
        { ul: [
          "Passin skannaus NFC:llä – tiedot täyttyvät automaattisesti",
          "Nopeampi hakemus kuin verkkosivustolla",
          "Push-ilmoitukset hakemuksen tilasta",
          "Biometrinen suojaus (Face ID / Touch ID)",
        ] },
        { note: "Huomaa: varmista, että lataat virallisen sovelluksen. Tarkista sovelluskaupasta, että julkaisija on ”Home Office”. Väärennetyt sovellukset voivat varastaa henkilötietoja." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "kauttakulku",
    group: "eta",
    title: "Kauttakulku Britannian kautta: tarvitsetko UK ETA:n? 2026",
    description: "Tarvitaanko UK ETA kauttakulussa? Kyllä, jos kuljet rajatarkastuksen läpi (landside); ei, jos vaihdat koneeseen ilman passintarkastusta (airside).",
    h1: "Kauttakulku Britannian kautta – tarvitsenko UK ETA:n?",
    lead: "Tarvitset UK ETA:n kauttakulussa vain, jos kuljet Britannian lentoaseman rajatarkastuksen läpi ennen jatkomatkaa (landside). Jos vaihdat lentoa kulkematta rajatarkastuksen läpi (airside), ETA:a ei tarvita. Jos olet epävarma, kysy lentoyhtiöltäsi.",
    card: "Airside vai landside: milloin kauttakulku vaatii ETA:n",
    sections: [
      { h: "Kauttakulun säännöt", blocks: [
        "2.4.2025 alkaen EU-kansalaiset, myös suomalaiset, tarvitsevat UK ETA:n kauttakulkuun Britannian kautta, jos he kulkevat lentoaseman rajatarkastuksen läpi (landside transit). Kauttakulkuun ilman rajatarkastusta (airside transit) ETA:a ei tarvita. Jos olet epävarma, kysy lentoyhtiöltäsi.",
        { ul: [
          "Landside-kauttakulku (kuljet rajatarkastuksen läpi): ETA vaaditaan",
          "Airside-kauttakulku (ei passintarkastusta): ETA:a ei vaadita",
          "Virallisen factsheetin mukaan Heathrow’n tai Manchesterin kautta kulkevat matkustajat, jotka eivät kulje Britannian passintarkastuksen läpi, eivät tällä hetkellä tarvitse ETA:a",
          "Tarkista kauttakulun tyyppi aina lentoyhtiöltäsi",
        ] },
      ] },
      { h: "Kauttakulun tyypit", blocks: [
        { table: { head: ["Tyyppi", "Mitä tapahtuu", "Tarvitaanko ETA?"], rows: [
          ["Airside-kauttakulku (lentoasemalla)", "Vaihto lentoasemalla kulkematta rajatarkastuksen läpi. Jos et ole varma, kuljetko rajatarkastuksen läpi, kysy lentoyhtiöltäsi.", "Ei"],
          ["Landside-kauttakulku", "Kuljet rajatarkastuksen läpi ennen jatkomatkaa, esim. noutaaksesi matkatavarat tai yöpyäksesi hotellissa. Saavut tällöin muodollisesti Isoon-Britanniaan.", "Kyllä"],
        ] } },
        "Tarvitset UK ETA:n, jos kuljet Britannian lentoaseman rajatarkastuksen läpi, oli vaihtoaika kuinka lyhyt tahansa. Jos vaihdat koneeseen kulkematta rajatarkastuksen läpi (airside), ETA:a ei tarvita.",
      ] },
      { h: "Poikkeukset ETA-vaatimuksesta kauttakulussa", blocks: [
        "Kauttakulun ETA-vaatimukseen on vain vähän poikkeuksia:",
        { ul: [
          "Irlannin kansalaiset (yhteinen matkustusalue CTA)",
          "Voimassa olevan brittiläisen viisumin haltijat",
          "Henkilöt, joilla on pysyvä oleskelulupa Britanniassa (settled/pre-settled status)",
        ] },
      ] },
      { h: "Miten välttää ETA kauttakulussa?", blocks: [
        "Jos et halua hakea UK ETA:a, voit valita reitin, joka ei kulje Britannian kautta. Esimerkiksi:",
        { ul: [
          "Suora lento määränpäähän",
          "Vaihto EU-maassa (Amsterdam, Frankfurt, Pariisi)",
          "Vaihto Dublinissa (Irlanti – ei vaadi ETA:a)",
        ] },
        { note: `Vinkki: jos lentosi vaihto on Lontoossa, hae UK ETA vähintään ${F.decisionDays} arkipäivää ennen lähtöä. Ilman ETA:a sinulta voidaan evätä pääsy koneeseen.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (huhtikuu 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "eta-uutiset",
    group: "eta",
    title: `UK ETA -uutiset 2026: maksu ${F.fee}, pakollisuus ja muut muutokset`,
    description: `Uusimmat UK ETA -uutiset: maksu nousi ${F.fee}:een 8.4.2026, ETA täysin pakollinen 25.2.2026 alkaen, EU-kansalaiset mukana 2.4.2025 alkaen.`,
    h1: "Uutisia UK ETA:sta ja matkustamisesta Britanniaan",
    lead: `Viimeisimmät muutokset lyhyesti: UK ETA maksaa 8.4.2026 alkaen ${F.fee}, se on ollut täysin pakollinen 25.2.2026 alkaen, ja EU-kansalaiset ovat tarvinneet sen 2.4.2025 alkaen. Tiedot GOV.UK:n ja Home Officen mukaan.`,
    card: `Maksun nousu ${F.fee}:een, pakollisuus ja muut ajankohtaiset muutokset`,
    sections: [
      { h: `8.4.2026: UK ETA:n maksu nousi ${F.fee}:een`, blocks: [
        `8.4.2026 alkaen UK ETA maksaa ${F.fee} aiemman £16:n sijaan (25 %:n korotus). Ratkaisevaa on hakemuspäivä.`,
        `Home Office on vahvistanut UK ETA:n (Electronic Travel Authorisation) maksun nousun £16:sta ${F.fee}:een. Uusi hinta on voimassa 8.4.2026 alkaen.`,
        `Maksun suuruuden ratkaisee hakemuspäivä: ennen 8.4.2026 hakemuksen jättäneet maksoivat £16, kun taas 8.4.2026 tai sen jälkeen jätetyt hakemukset maksavat ${F.fee}.`,
        `Kyseessä on jälleen yksi korotus järjestelmän historiassa: ETA alkoi £10:n maksulla, nousi sitten £16:een ja on nyt ${F.fee}. Lupa on edelleen voimassa ${F.validYears} vuotta ja oikeuttaa useisiin maahantuloihin (kukin oleskelu enintään ${F.staySixMonths} kuukautta).`,
        "Korotus koskee yli 50 maan kansalaisia, jotka tarvitsevat UK ETA:n matkustaakseen Isoon-Britanniaan.",
        "Lähde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25.2.2026: UK ETA täysin pakollinen", blocks: [
        "25.2.2026 alkaen UK ETA:a sovelletaan täysimääräisesti: lentoyhtiöt eivät päästä koneeseen matkustajaa, jolla ei ole voimassa olevaa lupaa.",
        "UK ETA:n käyttöönoton siirtymäaika päättyi 25.2.2026. Tästä päivästä alkaen vaatimusta sovelletaan täysimääräisesti.",
        "Käytännössä tämä tarkoittaa, että kuljetusyhtiöt (lentoyhtiöt, lautat, Eurostar) eivät päästä kyytiin matkustajia, jotka tarvitsevat ETA:n mutta joilla sitä ei ole. Kuljetusyhtiöt voivat saada sakkoja, jos ne kuljettavat matkustajan ilman voimassa olevaa lupaa.",
        `Siksi ETA kannattaa hankkia ennen matkaa – vähintään ${F.decisionDays} arkipäivää etukäteen, koska pieni osa hakemuksista voi vaatia lisätarkastusta.`,
        "Lähde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2.4.2025: EU-kansalaiset tarvitsevat UK ETA:n", blocks: [
        "2.4.2025 alkaen EU:n, ETA-alueen ja Sveitsin kansalaisten on pitänyt hankkia UK ETA ennen matkaa Isoon-Britanniaan.",
        "2.4.2025 alkaen UK ETA -järjestelmä on koskenut Euroopan unionin, Euroopan talousalueen sekä Sveitsin kansalaisia.",
        "ETA vaaditaan matkailu- ja liikematkoilla, sukulaisvierailuilla sekä kauttakulussa, jossa kuljetaan rajatarkastuksen läpi. Tämä koskee myös lapsia ja vauvoja – jokainen jättää oman hakemuksen.",
        `Lupa on sähköisesti sidottu hakemuksessa käytettyyn passiin ja sallii useita maahantuloja ${F.validYears} vuoden ajan.`,
        "Lähde: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8.4.2026: Britannian maahanmuuttomaksut nousivat", blocks: [
        "ETA:n ohella 8.4.2026 alkaen nousivat myös muut Home Officen maksut – muun muassa maahantuloviisumien, maahan asettumisen ja kansalaisuuden maksut.",
        `Home Office päivitti virallisen maksutaulukkonsa 8.4.2026. ETA:n ${F.fee}:n korotuksen lisäksi nousivat myös useimmat muut maahanmuutto- ja kansalaisuusmaksut.`,
        "Tämä koskee muun muassa vierailuviisumeja (visit visa), maahan asettumisen maksuja (settlement) sekä Britannian kansalaisuushakemuksia.",
        "Jos suunnittelet pidempää oleskelua tai muuta viisumityyppiä kuin ETA, tarkista voimassa oleva maksu virallisesta GOV.UK-sivusta ennen hakemuksen jättämistä.",
        "Lähde: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1.3.2026: Turvallisuus Britannian-matkalla – mitä kannattaa huomioida", blocks: [
        "Ennen lähtöä kannattaa tarkistaa ajankohtaiset turvallisuustiedotteet sekä varmistaa, että passi ja ETA ovat voimassa.",
        "Iso-Britannia on suosittu ja yleisesti turvallinen matkakohde, mutta ennen jokaista matkaa on viisasta tarkistaa viranomaisten ajankohtaiset tiedotteet.",
        "Varmista ennen matkaa, että passi on voimassa koko oleskelun ajan, että sinulla on voimassa oleva UK ETA, joka on sidottu tähän passiin, ja että sinulla on matkavakuutus.",
        "Ajankohtaista tietoa tilanteesta ja uhkatasosta julkaisevat viralliset lähteet – Britannian hallitus (GOV.UK) sekä asianomaiset diplomaattiedustustot. Hätätilanteissa Britanniassa hätänumero on 999.",
        "Lähde: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
