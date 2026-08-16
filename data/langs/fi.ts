import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// フィンランド語。北欧圏で既存のスウェーデン語サイトと補完関係。英語圏サイトが少ない言語。
const fi: LangContent = {
  code: "fi",
  label: "Suomi",
  siteName: "UK ETA -opas",
  tagline: "Matkustuslupa Yhdistyneeseen kuningaskuntaan, vaihe vaiheelta",
  homeTitle: `UK ETA: ${F.fee} ja vastaus yleensä vuorokaudessa | Opas suomeksi 2026`,
  homeDescription:
    `Suomenkielinen opas UK ETA -lupaan: se maksaa ${F.fee}, on voimassa ${F.validYears} vuotta ja oikeuttaa enintään ${F.staySixMonths} kuukauden oleskeluun matkaa kohden. Näin haet sen GOV.UK:n virallisilta sivuilta.`,
  homeLead:
    `Yhdistyneeseen kuningaskuntaan matkustaessasi tarvitset UK ETA -luvan. Se maksaa virallisilla sivuilla ${F.fee}, vastaus tulee yleensä vuorokaudessa ja lupa on voimassa ${F.validYears} vuotta useita matkoja varten.`,
  nav: { info: "Tietoa ETA:sta", entry: "Matka Britanniaan", faq: "Usein kysytyt kysymykset" },
  officialLinkLabel: "Hae GOV.UK:n virallisilta sivuilta",
  updatedLabel: "Päivitetty",
  pages: {
    "what-is-eta": {
      slug: "mika-on-eta",
      title: "Mikä on UK ETA: pakollinen ennakkolupa, ei viisumi | 2026",
      description: `UK ETA on sähköinen matkustuslupa, jota haetaan ennen lähtöä. Se ei ole viisumi: hoidat sen verkossa, se maksaa ${F.fee} ja se liitetään passiisi.`,
      h1: "Mikä on UK ETA",
      lead: "UK ETA (Electronic Travel Authorisation) haetaan ennen matkaa. Se ei korvaa passia eikä ole viisumi.",
      sections: [
        { h: "Ei ole viisumi", p: [
          "ETA on ennakkolupa matkustajille, jotka eivät tarvitse viisumia Yhdistyneeseen kuningaskuntaan. Tarkastus tehdään ennen koneeseen nousua: ilman ETA:a lentoyhtiö voi evätä matkan.",
          "Toisin kuin viisumia varten, ajanvarausta tai haastattelua ei tarvita. Kaikki hoituu verkossa." ] },
        { h: "Liitetään passiisi", p: [
          `Lupa kuuluu siihen passiin, jolla sen haet. Jos hankit uuden passin, sinun on haettava uusi ETA — vaikka ${F.validYears} vuodesta olisi aikaa jäljellä.`,
          "Mitään ei tarvitse tulostaa: rajalla riittää sama passi." ] },
        { h: "Kuka sen tarvitsee", p: [
          "Matkustajat viisumivapaista maista, siis myös Suomesta, olipa kyse matkailusta, sukulaisvierailusta, työmatkasta tai kauttakulusta.",
          "Myös lapset ja vauvat tarvitsevat oman ETA:n." ] },
      ],
    },
    application: {
      slug: "nain-haet",
      title: "Näin haet UK ETA -luvan: verkossa muutamassa minuutissa | Opas 2026",
      description: `Vaiheet UK ETA -luvan hakemiseen GOV.UK:n virallisilla sivuilla tai sovelluksessa: passi, kasvokuva, yhteystiedot ja ${F.fee} maksu.`,
      h1: "Näin haet UK ETA -luvan",
      lead: "Hakemus tehdään kokonaan verkossa, joko GOV.UK:n virallisilla sivuilla tai virallisessa sovelluksessa. Minnekään ei tarvitse mennä paikan päälle.",
      sections: [
        { h: "Mitä tarvitset valmiiksi", p: [
          "Passin, jolla matkustat, kuvan kasvoistasi (voit ottaa sen puhelimella), sähköpostiosoitteen ja maksukortin.",
          "Tietojen on vastattava passia täsmälleen. Eri tavalla kirjoitettu nimi on yleisin hylkäyksen syy." ] },
        { h: "Vaiheet", p: [
          `Mene GOV.UK:n virallisille sivuille tai lataa virallinen sovellus, skannaa passin tietosivu, ota kuva, vastaa taustakysymyksiin ja maksa ${F.fee}.`,
          `Sen jälkeen odotat päätöstä. Se tulee yleensä vuorokaudessa, mutta varaudu enintään ${F.decisionDays} arkipäivään.` ] },
        { h: "Tarkista ennen lähettämistä", p: [
          "Että passin numero ja voimassaolo on kirjattu oikein, että kasvot näkyvät kuvassa selvästi ja että sähköpostiosoite on oikea — sinne päätös tulee.",
          "Hae hyvissä ajoin, älä lähtöpäivänä." ] },
      ],
    },
    fee: {
      slug: "hinta",
      title: `UK ETA:n hinta: ${F.fee} virallisilla sivuilla | Varo välikäsiä`,
      description: `UK ETA maksaa GOV.UK:ssa ${F.fee}. Kyseessä on kertamaksu ${F.validYears} vuodeksi ja useille matkoille. Näin tunnistat sivustot, jotka lisäävät oman palkkionsa.`,
      h1: "Paljonko UK ETA maksaa",
      lead: `Virallinen hinta on ${F.fee} ja maksat sen kerran. Sen jälkeen lupa on voimassa ${F.validYears} vuotta useita matkoja varten.`,
      sections: [
        { h: "Yksi maksu", p: [
          `Vuosimaksuja tai välissä tehtäviä uusimisia ei ole: maksat hakemuksen yhteydessä ${F.fee} ja lupa on voimassa ${F.validYears} vuotta — tai kunnes passi vanhenee.`,
          "Summa veloitetaan myös hylkäävässä päätöksessä, koska se kattaa käsittelyn." ] },
        { h: "Sivustot, jotka veloittavat enemmän", p: [
          "On välikäsiä, jotka lisäävät oman palkkionsa virallisen summan päälle. Britannian viranomaiset eivät ole valtuuttaneet niitä, ja ne tekevät juuri sen, minkä voit tehdä itse.",
          `Jos sivusto pyytää selvästi enemmän kuin ${F.fee}, erotus on niiden palkkio.` ] },
        { h: "Näin tunnistat viralliset sivut", p: [
          "Virallinen osoite on GOV.UK-verkkotunnuksen alla. Ole varovainen sivustojen kanssa, jotka kutsuvat itseään «viralliseksi kumppaniksi» tai «hyväksytyksi edustajaksi»: Britannian viranomaiset eivät valtuuta kolmansia osapuolia jättämään hakemuksia.",
        ] },
      ],
    },
    "status-check": {
      slug: "tilan-tarkistus",
      title: "UK ETA:n tilan tarkistus: mistä ja mitä tarvitset | 2026",
      description: "Näin tarkistat, onko UK ETA hyväksytty: ilmoitus tulee sähköpostiin ja tilan voi tarkistaa passin numerolla.",
      h1: "UK ETA:n tilan tarkistaminen",
      lead: "Päätös ilmoitetaan sähköpostitse. Jos viestiä ei ole tullut, voit tarkistaa tilan sen passin tiedoilla, jolla haun teit.",
      sections: [
        { h: "Katso ensin sähköpostisi", p: [
          "Hyväksyntä lähetetään osoitteeseen, jonka ilmoitit hakemuksessa. Tarkista myös roskapostikansio ennen kuin oletat, että jokin meni pieleen.",
          "Tulostettavaa asiakirjaa ei anneta: lupa on merkitty passiisi." ] },
        { h: "Mitä tarvitset", p: [
          "Passin numeron, jolla haun teit, ja henkilötietosi sellaisina kuin ne täytit.",
          "Jos haet toisen passin tiedoilla, tarkistus ei löydä lupaa." ] },
        { h: "Jos käsittely venyy", p: [
          `Useimmat päätökset tulevat vuorokaudessa, mutta varaudu enintään ${F.decisionDays} arkipäivään. Jos käsittely venyy pidemmälle ja lähtö lähestyy, ota yhteyttä virallisia kanavia pitkin.`,
        ] },
      ],
    },
    validity: {
      slug: "voimassaolo",
      title: `UK ETA: voimassa ${F.validYears} vuotta tai kunnes passi vanhenee | 2026`,
      description: `UK ETA on voimassa ${F.validYears} vuotta hyväksynnästä ja kattaa useita matkoja. Uuden passin myötä lupa on haettava uudelleen.`,
      h1: "Kuinka kauan UK ETA on voimassa",
      lead: `Lupa on voimassa ${F.validYears} vuotta — tai kunnes passi vanhenee, jos se tapahtuu aiemmin.`,
      sections: [
        { h: "Useat matkat sisältyvät", p: [
          `Näiden ${F.validYears} vuoden aikana voit matkustaa Yhdistyneeseen kuningaskuntaan niin usein kuin haluat, kunhan yksittäinen oleskelu ei ylitä ${F.staySixMonths} kuukautta.`,
          "Jokaista matkaa varten ei tarvitse hakea uutta lupaa." ] },
        { h: "Uuden passin myötä", p: [
          "Lupa kuuluu siihen passiin, jolla se haettiin. Jos uusit passin, sinun on haettava uusi ETA, vaikka voimassaoloa olisi jäljellä.",
        ] },
        { h: "Näin löydät päivämäärän", p: [
          "Päivämäärä on hyväksyntäviestissä. Jos viestiä ei enää ole, tarkista tila passin tiedoilla.",
        ] },
      ],
    },
    "processing-time": {
      slug: "kasittelyaika",
      title: `UK ETA: vastaus yleensä vuorokaudessa (enintään ${F.decisionDays} arkipäivää) | 2026`,
      description: `Päätös UK ETA -hakemukseen tulee yleensä vuorokaudessa, mutta varaudu enintään ${F.decisionDays} arkipäivään. Milloin kannattaa hakea.`,
      h1: "Kuinka kauan UK ETA kestää",
      lead: `Useimmissa tapauksissa vastaus tulee vuorokaudessa. Silti kannattaa varautua enintään ${F.decisionDays} arkipäivään.`,
      sections: [
        { h: "Milloin hakea", p: [
          "Hae heti kun lento on varattu — älä lähtöä edeltävänä päivänä. Jos hakemus vaatii lisätarkastuksen, käsittely kestää pidempään.",
          "Ilman hyväksyttyä lupaa lentoyhtiö voi evätä matkan." ] },
        { h: "Miksi käsittely joskus kestää", p: [
          "Hakemukset, jotka on käytävä läpi käsin (esimerkiksi kun taustakysymykseen vastaa «kyllä»), kestävät pidempään kuin automaattisesti käsitellyt.",
        ] },
        { h: "Jos mitään ei kuulu", p: [
          "Tarkista roskapostikansio ja se, että ilmoittamasi osoite on oikein. Tarkista sen jälkeen tila passin tiedoilla.",
        ] },
      ],
    },
    "required-documents": {
      slug: "tarvittavat-asiakirjat",
      title: "UK ETA:n asiakirjat: passi, kuva ja maksukortti | 2026",
      description: "Mitä UK ETA -hakemukseen tarvitset: passin, jolla matkustat, kasvokuvan, sähköpostiosoitteen ja maksuvälineen.",
      h1: "Mitä asiakirjoja tarvitset",
      lead: "Hakemus on yksinkertainen: passi, kuva ja maksuväline. Matkatodistuksia tai selvityksiä ei tarvita.",
      sections: [
        { h: "Passi", p: [
          "Sen on oltava sama passi, jolla matkustat, ja sen on oltava voimassa. Kopioi tiedot täsmälleen sellaisina kuin ne ovat.",
        ] },
        { h: "Kasvokuva", p: [
          "Voit ottaa sen puhelimella hakemuksen aikana. Kasvojen on näyttävä selvästi, ilman aurinkolaseja tai mitään peittävää, ja taustan on oltava yksivärinen.",
        ] },
        { h: "Sähköposti ja maksu", p: [
          `Päätös tulee sähköpostiin, joten osoitteen on oltava oikein. ${F.fee} maksu suoritetaan lopuksi kortilla.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "oleskelun-kesto",
      title: `UK ETA:lla voit jäädä enintään ${F.staySixMonths} kuukaudeksi matkaa kohden | 2026`,
      description: `UK ETA oikeuttaa enintään ${F.staySixMonths} kuukauden oleskeluun matkaa kohden matkailua, vierailua tai liikeasioita varten. Mihin sitä ei voi käyttää.`,
      h1: "Kuinka kauan voit jäädä",
      lead: `Yhtä matkaa kohden voit oleskella Yhdistyneessä kuningaskunnassa enintään ${F.staySixMonths} kuukautta. Lupa kattaa matkailun, sukulaisvierailut, liikeasiat ja kauttakulun.`,
      sections: [
        { h: "Mikä on sallittua", p: [
          "Matkailu, sukulaisten tai ystävien tapaaminen, kokoukset ja yksittäiset liiketoimet sekä kauttakulku Yhdistyneen kuningaskunnan kautta.",
        ] },
        { h: "Mikä ei ole sallittua", p: [
          "Et saa työskennellä brittiläiselle työnantajalle etkä asettua maahan asumaan. Niitä varten on omat reittinsä.",
          "Myöskään pitkäkestoinen opiskelu ei kuulu tähän: ETA on lyhyitä oleskeluja varten." ] },
        { h: "Useat matkat", p: [
          `Voit matkustaa useita kertoja luvan ollessa voimassa, mutta yksittäinen oleskelu on rajattu ${F.staySixMonths} kuukauteen, eikä oleskeluja voi ketjuttaa rajattomasti peräkkäin.`,
        ] },
      ],
    },
    faq: {
      slug: "usein-kysytyt-kysymykset",
      title: "UK ETA: lyhyet vastaukset hinnasta, voimassaolosta ja käsittelyajasta | FAQ 2026",
      description: `Usein kysyttyä UK ETA:sta: paljonko se maksaa (${F.fee}), kuinka kauan se on voimassa (${F.validYears} vuotta), kauanko käsittely kestää ja mitä jos hakemus hylätään.`,
      h1: "Usein kysytyt kysymykset UK ETA:sta",
      lead: "Lyhyet vastaukset yleisimpiin kysymyksiin. Jokainen kohta viittaa täydelliseen selitykseen.",
      sections: [
        { h: `Paljonko se maksaa? ${F.fee}`, p: [`Virallinen hinta GOV.UK:ssa on ${F.fee}, kertamaksuna ${F.validYears} vuodeksi.`] },
        { h: `Kuinka kauan voimassa? ${F.validYears} vuotta`, p: ["Tai kunnes passi vanhenee, jos se tapahtuu aiemmin. Kattaa useita matkoja."] },
        { h: "Kauanko kestää? Yleensä vuorokauden", p: [`Varaudu enintään ${F.decisionDays} arkipäivään äläkä jätä viime tinkaan.`] },
        { h: "Entä jos hakemus hylätään?", p: ["Valittaa ei voi. Silloin olisi haettava matkan tarkoitukseen sopiva viisumi."] },
        { h: "Tarvitsevatko lapsetkin sen?", p: ["Kyllä. Jokainen, myös vauvat ja lapset, tarvitsee oman lupansa."] },
      ],
    },
    about: {
      slug: "tietoa-oppaasta",
      title: "Tietoa tästä UK ETA -oppaasta | Keitä olemme ja miten toimimme",
      description: "Kuka julkaisee tämän suomenkielisen UK ETA -oppaan, mistä tiedot ovat peräisin ja miten korjaamme virheet.",
      h1: "Tietoa tästä oppaasta",
      lead: "Tämä opas selittää UK ETA -luvan suomeksi. Kyseessä ei ole Britannian viranomaisten virallinen sivusto, emmekä jätä hakemuksia.",
      sections: [
        { h: "Ei virallinen sivusto", p: ["Emme ole yhteydessä Britannian viranomaisiin. Hakemus tehdään aina GOV.UK:n virallisilla sivuilla tai virallisessa sovelluksessa."] },
        { h: "Mistä tiedot ovat peräisin", p: ["Summat, määräajat ja ehdot perustuvat siihen, mitä GOV.UK julkaisee. Muuttuvien lukujen kohdalla ilmoitamme päivityksen ajankohdan."] },
        { h: "Korjaukset", p: ["Jos huomaat vanhentuneen tai virheellisen tiedon, kerro siitä. Korjaamme sen."] },
      ],
    },
    privacy: {
      slug: "tietosuoja",
      title: "Tietosuojaseloste | UK ETA -opas",
      description: "Mitä tietoja tämä sivusto kerää ja mihin niitä käytetään.",
      h1: "Tietosuojaseloste",
      lead: "Tällä sivulla kerrotaan, miten tietoja käsitellään tässä palvelussa.",
      sections: [
        { h: "Mitä tietoja", p: ["Oppaan lukemiseen emme pyydä henkilötietoja. Emme jätä ETA-hakemuksia emmekä siten saa passi- tai maksutietoja."] },
        { h: "Tilastot", p: ["Käytämme koostettua käyttötilastoa sisällön parantamiseen. Sitä ei käytetä yksittäisten henkilöiden tunnistamiseen."] },
      ],
    },
    terms: {
      slug: "oikeudelliset-tiedot",
      title: "Oikeudelliset tiedot | UK ETA -opas",
      description: "Tämän UK ETA -tieto-oppaan käyttöehdot.",
      h1: "Oikeudelliset tiedot",
      lead: "Tämän sivuston sisällön käyttöä koskevat ehdot.",
      sections: [
        { h: "Tiedottava luonne", p: ["Sisältö on tarkoitettu tiedoksi. Viralliset ehdot voivat muuttua; tarkista ne GOV.UK:sta ennen hakemista."] },
        { h: "Vastuu", p: ["Emme vastaa päätöksistä, jotka perustuvat yksinomaan tähän oppaaseen. Jokaisesta hakemuksesta päättävät Britannian viranomaiset."] },
      ],
    },
  },
};

export default fi;
