import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（fi・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "lontoon-julkinen-liikenne-oyster",
    group: "travel",
    title: "Matkat Lontoossa: lähimaksu tai Oyster samaan hintaan (2026)",
    description:
      "Lontoon metrossa, busseissa ja junissa maksat lähimaksukortilla, puhelimella tai Oyster-kortilla samaan hintaan. Päivä- ja viikkokatto. Summat TfL:ltä.",
    h1: "Matkojen maksaminen Lontoossa: Oyster ja lähimaksu",
    lead: "Lontoon metrossa, busseissa ja junissa maksat helpoimmin näyttämällä lähimaksukorttia, puhelinta tai Oyster-korttia lukijalle. Lähimaksu ja Oyster maksavat saman verran, ja päivä- ja viikkokohtaiset hintakatot rajaavat kulut.",
    card: "Lähimaksu, puhelin vai Oyster: sama hinta, hintakatot ja leimaaminen sisään ja ulos.",
    sections: [
      { h: "Lähimaksu vai Oyster — näin maksat", blocks: [
        "Lontoon joukkoliikenne — metro (Tube), bussit ja junat — perustuu ”pay as you go” -periaatteeseen: näytät lähimaksukorttia, maksutoiminnolla varustettua puhelinta tai Oyster-korttia keltaiselle lukijalle ja maksat matka kerrallaan.",
        "Lähimaksu ja Oyster maksavat saman verran. Jos sinulla on jo lähimaksukortti tai puhelin kotoa, voit matkustaa samalla taksalla ostamatta Oyster-korttia. Tilapäiselle vierailijalle lähimaksu on yleensä kätevin. Visitor Oyster -kortti puolestaan tilataan ennen matkaa.",
      ] },
      { h: "Hintakatto (capping): kulut eivät kasva rajatta", blocks: [
        "Hintakatto on sekä päivä- että viikkokohtainen. Kun matkojesi yhteissumma on saavuttanut katon, et maksa jakson loppujen matkojen osalta enempää. Katot riippuvat siitä, millä vyöhykkeillä matkustat. Summat muuttuvat ajan myötä, joten tarkista ajantasaiset luvut TfL:ltä äläkä luota kiinteään summaan.",
      ] },
      { h: "Metro ja junat: leimaa sisään ja ulos", blocks: [
        "Metrossa ja junissa leimaat sekä noustessasi kyytiin että poistuessasi — muuten sinulta voidaan veloittaa väärä taksa. Busseissa ja raitiovaunuissa (tram) leimaat vain noustessasi kyytiin; ulosleimausta ei tarvita.",
        { ul: [
          "Tube / juna: leimaa sisään matkan alussa ja ulos matkan lopussa.",
          "Bussi / raitiovaunu: leimaa vain sisään.",
        ] },
      ] },
      { h: "Bussit eivät ota käteistä", blocks: [
        "Lontoon bussit eivät hyväksy käteistä. Voit maksaa vain lähimaksukortilla, puhelimella tai Oyster-kortilla. Varmista siis, että sinulla on toimiva lähimaksuväline ennen kuin nouset kyytiin.",
      ] },
      { h: "Käytä joka kerta samaa korttia", blocks: [
        "Leimaa jokaisella matkalla samalla kortilla tai laitteella. Älä jaa yhtä lähimaksukorttia usean matkustajan kesken — jotta hintakatot lasketaan oikein, jokaisen on leimattava omalla maksuvälineellään.",
      ] },
      { h: "Ennen matkaa Britanniaan", blocks: [
        "Joukkoliikennettä käytät vasta perillä — itse maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilaa voit seurata [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Saapuessasi kuljet [passintarkastuksen ja eGates-porttien](/fi/passintarkastus-egates/) läpi. Jos aiot ajaa autoa joukkoliikenteen sijaan, lue [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
    ],
    faq: [
      { q: "Tarvitsenko Oyster-kortin Lontoossa?", a: "En välttämättä. Jos sinulla on lähimaksukortti tai puhelin, jossa on maksutoiminto, voit matkustaa suoraan samaan hintaan kuin Oysterilla. Lähimaksu ja Oyster maksavat saman verran, joten vierailijalle lähimaksukortti riittää yleensä." },
      { q: "Voiko Lontoon bussissa maksaa käteisellä?", a: "Ei. Lontoon bussit eivät ota käteistä. Maksat lähimaksukortilla, puhelimella tai Oyster-kortilla näyttämällä sitä lukijalle, kun nouset kyytiin." },
      { q: "Entä jos matkustan paljon saman päivän aikana?", a: "Hintakatto (capping) on päivä- ja viikkokohtainen. Kun katto on saavutettu, lisämatkoista ei veloiteta enempää. Katot vaihtelevat vyöhykkeen mukaan ja muuttuvat ajan myötä — tarkista ajantasaiset summat Transport for Londonilta (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "autolla-ajaminen-britanniassa",
    group: "travel",
    title: "Autolla Britanniassa: oma ajokortti 12 kk, ikäraja 17 (2026)",
    description:
      "Henkilöautoa saa Britanniassa ajaa 17-vuotiaana. Vierailija ajaa voimassa olevalla kotimaan ajokortilla 12 kuukautta maahantulosta. Vasemmanpuoleinen liikenne.",
    h1: "Saako Britanniassa ajaa autoa ulkomaisella ajokortilla?",
    lead: "Henkilöauton ajamisen alaikäraja Britanniassa on 17 vuotta (GOV.UK). Jos asut Britannian ulkopuolella, saat ajaa voimassa olevalla kotimaasi ajokortilla, esimerkiksi suomalaisella, enintään 12 kuukautta maahantulosta. Tässä säännöt ajoajasta, kansainvälisestä ajokortista, vasemmanpuoleisesta liikenteestä ja vakuutuksesta — sekä syy siihen, miksi ETA ei ole ajolupa.",
    card: "Kotimaan ajokortilla 12 kk, ikäraja 17, vasemmanpuoleinen liikenne ja pakollinen vakuutus.",
    sections: [
      { h: "12 kuukauden sääntö: ajaminen kotimaan ajokortilla", blocks: [
        "Jos asut Britannian ulkopuolella, saat ajaa voimassa olevalla kotimaasi ajokortilla enintään 12 kuukautta siitä päivästä, jona saavuit maahan. Oikeus koskee:",
        { ul: [
          "Henkilöautoja (enintään 3 500 kg ja enintään kahdeksan matkustajan paikat).",
          "Moottoripyöriä.",
        ] },
        "Ajokortin on oltava voimassa koko oleskelun ajan. 12 kuukauden jakso lasketaan maahantulopäivästä, ei ajokortin myöntämispäivästä.",
      ] },
      { h: "Kansainvälinen ajokortti (IDP) ja käännös", blocks: [
        "Saat ajaa voimassa olevalla kotimaan ajokortilla. Jos ajokorttia ei ole myönnetty englanniksi, suositellaan virallista käännöstä tai kansainvälistä ajokorttia (IDP), jotta viranomaiset ja vuokraamot voivat lukea tiedot helposti.",
        "Vaatimukset vaihtelevat sen mukaan, missä maassa ajokortti on myönnetty. Tarkista siksi oma tilanteesi GOV.UK:sta ennen matkaa — säännöt voivat erota kotimaasi mukaan.",
      ] },
      { h: "Vasemmanpuoleinen liikenne, ikäraja ja vakuutus", blocks: [
        { ul: [
          "Vasemmanpuoleinen liikenne: Britanniassa ajetaan tien vasenta puolta.",
          "Alaikäraja: 17 vuotta henkilöauton ajamiseen.",
          "Voimassa oleva autovakuutus on pakollinen Britanniassa ajettaessa.",
        ] },
        "Tarkista ennen ajamista, että vakuutuksesi on voimassa Britanniassa. Jos vuokraat auton, vakuutus sisältyy yleensä sopimukseen — lue ehdot huolellisesti.",
      ] },
      { h: "Suuret ajoneuvot: linja-autot ja kuorma-autot", blocks: [
        "Suuria ajoneuvoja, kuten linja-autoja ja kuorma-autoja, koskevat eri säännöt kuin henkilöautoja ja moottoripyöriä. Jos aiot ajaa tällaista ajoneuvoa, tarkista erityisvaatimukset GOV.UK:sta ennen matkaa.",
      ] },
      { h: "ETA ja ajokortti: kaksi eri asiaa", blocks: [
        "UK ETA on lupa saapua Britanniaan — se ei ratkaise, saatko ajaa autoa. Ajo-oikeutta säätelevät erilliset säännöt ajokortista, iästä, vakuutuksesta ja ajoneuvotyypistä.",
        "Itse maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilan näet [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Lisäksi kannattaa tutustua [tullisääntöihin ja tuontirajoihin](/fi/tullisaannot-britannia/) sekä siihen, miten [passintarkastus ja eGates-portit](/fi/passintarkastus-egates/) toimivat.",
      ] },
    ],
    faq: [
      { q: "Saanko ajaa autoa Britanniassa suomalaisella ajokortilla?", a: "Kyllä. Britannian ulkopuolella asuvat vierailijat saavat ajaa henkilöautoa ja moottoripyörää voimassa olevalla kotimaan ajokortilla enintään 12 kuukautta maahantulopäivästä lukien." },
      { q: "Tarvitsenko kansainvälisen ajokortin (IDP) tai käännöksen?", a: "Saat ajaa voimassa olevalla kotimaan ajokortilla. Jos ajokortti ei ole englanninkielinen, suositellaan virallista käännöstä tai kansainvälistä ajokorttia (IDP). Säännöt vaihtelevat maittain — tarkista oma tilanteesi osoitteesta gov.uk/driving-nongb-licence." },
      { q: "Mikä on ajokortin ikäraja Englannissa?", a: "Henkilöauton ajokortin ikäraja Englannissa (ja muualla Britanniassa) on 17 vuotta — silloin useimmat voivat aloittaa ajoharjoittelun. Britanniassa ajetaan tien vasenta puolta, ja voimassa oleva autovakuutus on pakollinen." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "valuutta-ja-kateinen-britanniassa",
    group: "travel",
    title: "Britannian valuutta 2026: punta (GBP), käteinen ja juomarahat",
    description:
      "Englannin, Skotlannin ja Lontoon valuutta on Englannin punta (GBP, £). Käteistä tarvitaan harvoin, kortti riittää pitkälle. £10 000 tai enemmän on ilmoitettava.",
    h1: "Valuutta Englannissa ja Skotlannissa: punta, käteinen ja juomarahat",
    lead: "Englannin, Skotlannin, Walesin ja Pohjois-Irlannin valuutta on Englannin punta (GBP, £) myös vuonna 2026. Tässä kerrotaan, paljonko käteistä saat tuoda ilmoittamatta, miten rahaa vaihdetaan sujuvimmin ja mitä kannattaa tietää korttimaksuista ja juomarahoista.",
    card: "Valuutta on punta (GBP). Kortti yleensä riittää; £10 000 käteistä tai yli on ilmoitettava.",
    sections: [
      { h: "Mikä valuutta Englannissa ja Skotlannissa on? Englannin punta (GBP, £)", blocks: [
        "Britannian maksuväline on Englannin punta (GBP, £). Euroa ja muita valuuttoja ei yleensä hyväksytä tavallisissa kaupoissa, joten tarvitset paikan päällä joko kortin tai käteisiä puntia. Myös Skotlannissa valuutta on punta. Siellä Bank of Scotland, Clydesdale Bank ja The Royal Bank of Scotland laskevat liikkeeseen omia seteleitään, kun taas Englannissa ja Walesissa setelit laskee liikkeeseen Bank of England (lähde: Bank of England).",
      ] },
      { h: "Käteinen: ilmoitusvelvollisuus £10 000 alkaen", blocks: [
        "Jos saavut Britanniaan (GB) mukanasi £10 000 tai enemmän käteistä — mukaan lukien vastaava summa muina valuuttoina — sinun on ilmoitettava summa. Ilmoituksen voi tehdä etukäteen verkossa tai saapuessasi punaisella kaistalla. Ilmoittamatta jättäminen voi johtaa koko summan takavarikointiin ja enintään £5 000 sakkoon.",
      ] },
      { h: "Tarvitaanko Lontoossa ja Englannissa käteistä? Kortti vai käteinen", blocks: [
        "Korttimaksut, etenkin lähimaksut, ovat Britanniassa hyvin yleisiä. Monessa tilanteessa pärjäät kokonaan ilman käteistä — joukkoliikenteestä ja kahviloista suurempiin kauppoihin. Lontoon joukkoliikenteen (TfL) maksat lähimaksukortilla tai Oyster-kortilla (lähde: TfL).",
        { ul: [
          "Vähäinen määrä käteistä voi silti olla kätevä pienissä kaupoissa, toreilla ja juomarahoja varten.",
          "Tarkista pankistasi ennen matkaa ulkomaisten korttimaksujen mahdolliset kulut.",
        ] },
      ] },
      { h: "Mistä rahaa voi vaihtaa?", blocks: [
        "Rahaa voi vaihtaa pankeissa, valuutanvaihtopisteissä ja lentoasemilla. Huomaa, että lentoasemilla vaihtokurssi on usein epäedullisempi. Vertaile kursseja ennen kuin vaihdat suurempia summia.",
      ] },
      { h: "Juomarahat: tapa, ei vaatimus", blocks: [
        "Juomarahat ovat Britanniassa tapa eivätkä lakisääteinen vaatimus. Käytäntö vaihtelee tilanteen mukaan:",
        { ul: [
          "Ravintolat: laskuun lisätään joskus 10–12,5 %:n ”service charge” — tarkista erittely. Jos palvelumaksua ei ole lisätty, noin 10 % on tavallinen ohje.",
          "Pubi: kun tilaat tiskiltä, juomarahaa ei yleensä odoteta.",
          "Taksi: summan pyöristäminen ylöspäin on tavallista.",
        ] },
      ] },
      { h: "Hyvä tietää ennen maahantuloa", blocks: [
        "Käteinen ilmoitetaan tarvittaessa tullissa, joka tulee passintarkastuksen jälkeen — katso, miten [tullisäännöt ja tuontirajat](/fi/tullisaannot-britannia/) toimivat. Maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilaa voit seurata [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Jos aiot vuokrata auton, lue [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
    ],
    faq: [
      { q: "Mikä valuutta on käytössä Englannissa ja Skotlannissa vuonna 2026?", a: "Englannin punta (GBP, £) koko Britanniassa. Skotlannissa kolme pankkia laskee liikkeeseen omia seteleitään, mutta valuutta on sama." },
      { q: "Tarvitaanko Lontoossa käteistä?", a: "Yleensä ei: korttimaksut, etenkin lähimaksut, ovat hyvin yleisiä, ja joukkoliikenteen (TfL) maksat lähimaksukortilla tai Oysterilla. Vähäinen määrä käteistä voi olla kätevä pienissä kaupoissa, toreilla ja juomarahoja varten." },
      { q: "Mistä summasta alkaen käteinen on ilmoitettava Britanniaan saavuttaessa?", a: "Jos saavut Britanniaan (GB) mukanasi £10 000 tai enemmän käteistä (mukaan lukien vastaava summa muina valuuttoina), sinun on ilmoitettava summa. Se tehdään etukäteen verkossa tai saapuessa punaisella kaistalla. Ilmoittamatta jättäminen voi johtaa koko summan takavarikointiin ja enintään £5 000 sakkoon." },
      { q: "Pärjääkö Britanniassa pelkällä kortilla?", a: "Korttimaksut, myös lähimaksut, ovat hyvin yleisiä ja käyvät useimmissa tilanteissa. Usein pärjäät kokonaan kortilla. Vähäinen määrä käteistä voi silti olla kätevä pienissä kaupoissa tai juomarahoja varten." },
      { q: "Ovatko juomarahat pakollisia Britanniassa?", a: "Eivät. Juomarahat ovat tapa eivätkä lakisääteinen vaatimus. Ravintoloissa laskuun lisätään joskus 10–12,5 %:n ”service charge” — tarkista erittely. Jos palvelumaksua ei ole lisätty, noin 10 % on tavallinen ohje." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "arvonlisaveron-palautus-britanniassa",
    group: "travel",
    title: "Arvonlisäveron palautus Britanniassa (VAT refund) 2026",
    description:
      "Mukana vietävien ostosten arvonlisäveroa ei 1.1.2021 alkaen yleensä palauteta Englannissa, Skotlannissa ja Walesissa. Ulkomaille lähetetty voi olla veroton.",
    h1: "Arvonlisäveron palautus (VAT refund) ostoksista Britanniassa",
    lead: "Yleinen väärinkäsitys: vuodesta 2021 lähtien Britanniassa ei yleensä palauteta arvonlisäveroa tuotteista, jotka matkustaja vie mukanaan kotiin. Tässä käydään läpi, mitä todella pätee, mikä poikkeus koskee kaupan suoraan ulkomaille lähettämiä tuotteita ja miksi Pohjois-Irlantia käsitellään erikseen.",
    card: "Ostosten arvonlisäveroa ei yleensä palauteta vuodesta 2021. Poikkeus: lähetys ulkomaille.",
    sections: [
      { h: "Tärkein asia: ei arvonlisäveron palautusta käsimatkatavaroille vuodesta 2021", blocks: [
        "Tämä kohta ymmärretään usein väärin. Britanniassa (Englannissa, Skotlannissa ja Walesissa) ei 1.1.2021 alkaen yleensä enää palauteta arvonlisäveroa tuotteista, jotka matkustajat ostavat ja vievät kotiin käsimatkatavaroissaan.",
        "Vähittäiskaupan vientiin liittyvä arvonlisäveron palautusjärjestelmä (VAT Retail Export Scheme) lakkautettiin tuolloin. Käytännössä et siis yleensä saa takaisin arvonlisäveroa tuotteista, jotka viet itse mukanasi maasta.",
      ] },
      { h: "Poikkeus: kun kauppa lähettää tuotteen suoraan ulkomaille", blocks: [
        "Jos kauppa lähettää tuotteen suoraan ulkomaiseen osoitteeseen, ostos voidaan joissakin tapauksissa tehdä ilman arvonlisäveroa. Tämä riippuu kuitenkin kaupan käytännöistä ja voimassa olevista ehdoista, joten tarkista kyseisestä kaupasta ennen ostosta, mikä on mahdollista.",
      ] },
      { h: "Pohjois-Irlantia käsitellään erikseen", blocks: [
        "Pohjois-Irlannissa on osin eri säännöt. Matkustajille, jotka eivät asu EU:ssa, siellä voi edelleen olla jonkinlainen arvonlisäveron palautus, joka liittyy Pohjois-Irlannin pöytäkirjaan. Ehdot voivat muuttua, joten tarkista matkasi aikaan voimassa olevat säännöt.",
      ] },
      { h: "Hyvä tietää lentoasemalla", blocks: [
        "Vaikka näkisit ”Tax Free” -kylttejä tai entisiä palautustiskejä, käsimatkatavaroissa vietävien tuotteiden arvonlisäveroa ei Englannissa, Skotlannissa tai Walesissa yleensä palauteta. Älä siis oleta saavasi palautusta, vaan tarkista ajantasaiset säännöt, jos olet epävarma.",
      ] },
      { h: "Lue lisää ennen matkaa", blocks: [
        "Mitä muuta saat tuoda maahan ja viedä maasta, kerrotaan [tullisäännöistä](/fi/tullisaannot-britannia/), ja maahantulon kulku on kuvattu oppaassa [passintarkastus ja eGates](/fi/passintarkastus-egates/). Jos matkustat lasten kanssa, lue [matkustamisesta lasten kanssa](/fi/matkustaminen-lasten-kanssa/). Maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/) — hakemuksen tilan näet [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta.",
      ] },
    ],
    faq: [
      { q: "Saako Britanniassa ostoksista arvonlisäveron (VAT) takaisin?", a: "Britanniassa (Englannissa, Skotlannissa ja Walesissa) ei yleensä enää palauteta arvonlisäveroa tuotteista, jotka matkustajat vievät mukanaan kotiin käsimatkatavaroissa. Vähittäiskaupan vientiin liittyvä arvonlisäveron palautusjärjestelmä (VAT Retail Export Scheme) lakkautettiin siellä 1.1.2021. Tämä poikkeaa aiemmasta käytännöstä ja siitä, mitä joissakin muissa maissa on voimassa." },
      { q: "Voiko Britanniassa ostaa ilman arvonlisäveroa jollakin tavalla?", a: "Jos kauppa lähettää tuotteen suoraan ulkomaiseen osoitteeseen, ostos voidaan joissakin tapauksissa tehdä ilman arvonlisäveroa. Tämä riippuu kuitenkin kaupan käytännöistä ja voimassa olevista ehdoista. Tarkista kyseisestä kaupasta, mikä on mahdollista." },
      { q: "Koskevatko samat säännöt Pohjois-Irlantia?", a: "Pohjois-Irlantia käsitellään erikseen, ja siellä on osin eri säännöt. Matkustajille, jotka eivät asu EU:ssa, siellä voi edelleen olla jonkinlainen arvonlisäveron palautus, joka liittyy Pohjois-Irlannin pöytäkirjaan. Tarkista ajantasaiset ehdot ennen kuin lasket palautuksen varaan." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "sim-kortti-ja-mobiilidata-britanniassa",
    group: "travel",
    title: "SIM-kortti, eSIM ja mobiilidata Britanniassa (2026)",
    description:
      "Britannian suurimmat operaattorit ovat EE, O2, Vodafone ja Three. Prepaid-liittymä, eSIM, lukitsematon puhelin ja verkkovierailu brexitin jälkeen.",
    h1: "SIM-kortti, eSIM ja mobiilidata Britanniassa",
    lead: "Mitä mobiilioperaattoreita Britanniassa on, miten valitset vierailijana prepaid-liittymän ja eSIMin välillä, mitä on hyvä tietää lukitsemattomasta puhelimesta ja verkkovierailusta — ja mistä löydät ilmaisen Wi-Fin.",
    card: "EE, O2, Vodafone ja Three, prepaid tai eSIM sekä verkkovierailu brexitin jälkeen.",
    sections: [
      { h: "Mobiilioperaattorit Britanniassa", blocks: [
        "Britannian suurimmat mobiiliverkot ovat EE, O2, Vodafone ja Three. Niiden lisäksi on useita virtuaalioperaattoreita (MVNO), jotka käyttävät samoja verkkoja, esimerkiksi giffgaff, Lebara ja Lyca.",
        "Tällä alueella on vähän yhtenäisiä virallisia sääntöjä, ja hinnat ja liittymät muuttuvat usein. Pidä alla olevia tietoja yleisenä ohjeena ja tarkista ajantasaiset ehdot operaattorilta.",
      ] },
      { h: "Vaihtoehdot vierailijalle: prepaid-liittymä tai eSIM", blocks: [
        { ul: [
          "Prepaid-liittymä / turisti-SIM: saatavana lentoasemilta, puhelinliikkeistä ja ruokakaupoista.",
          "eSIM: ostetaan verkosta ja otetaan käyttöön heti, jos puhelimesi tukee sitä — fyysistä SIM-korttia ei tarvitse vaihtaa.",
        ] },
      ] },
      { h: "Lukitsematon puhelin on edellytys", blocks: [
        "Jotta voit käyttää paikallista SIM-korttia tai eSIMiä, puhelimesi on oltava operaattorilukitsematon (SIM-lukitsematon). Tarkista tämä nykyiseltä operaattoriltasi hyvissä ajoin ennen lähtöä.",
      ] },
      { h: "Verkkovierailu brexitin jälkeen", blocks: [
        "EU-maista tulevien vierailijoiden kannattaa kiinnittää huomiota verkkovierailumaksuihin. Brexitin jälkeen jotkin operaattorit voivat periä maksuja verkkovierailusta Britanniassa, toiset eivät. Ehdot vaihtelevat — tarkista asia operaattoriltasi ennen lähtöä välttääksesi yllättävät kulut.",
      ] },
      { h: "Kuuluvuus ja ilmainen Wi-Fi", blocks: [
        "Kuuluvuus on kaupungeissa yleensä hyvä, kun taas maaseudulla se voi vaihdella operaattoreittain. Kuuluvuuden voi tarkistaa Ofcomin kuuluvuuskartasta.",
        "Ilmainen Wi-Fi on yleinen kahviloissa, joukkoliikenteessä ja monissa julkisissa paikoissa, mikä voi täydentää mobiiliyhteyttäsi.",
      ] },
      { h: "Hyvä tietää ennen maahantuloa", blocks: [
        "Maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilan näet [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Jos aiot vuokrata auton, lue [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
    ],
    faq: [
      { q: "Tarvitsenko Britanniassa paikallisen SIM-kortin?", a: "Se riippuu nykyisestä operaattoristasi. Paikallinen prepaid-liittymä tai eSIM voi olla kätevä verkkovierailumaksujen välttämiseksi ja mobiilidatan saamiseksi paikan päällä. eSIM ostetaan verkosta ja otetaan käyttöön heti, jos puhelimesi tukee sitä." },
      { q: "Voinko käyttää eSIMiä Britanniassa?", a: "Kyllä, jos puhelimesi tukee eSIMiä ja on lukitsematon, voit ostaa eSIMin verkosta ja ottaa sen käyttöön vaihtamatta fyysistä SIM-korttia. Tarkista etukäteen, että laitteesi on yhteensopiva ja operaattorilukitsematon." },
      { q: "Voinko käyttää EU-liittymääni Britanniassa tavalliseen tapaan?", a: "Brexitin jälkeen jotkin operaattorit perivät maksuja verkkovierailusta Britanniassa, toiset eivät. Ehdot vaihtelevat operaattorin ja liittymän mukaan — tarkista asia operaattoriltasi ennen lähtöä." },
    ],
    sources: [
      { label: "Ofcom – Britannian viestintäalan valvontaviranomainen", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "pistorasiat-britanniassa",
    group: "travel",
    title: "Pistorasiat Britanniassa ja Lontoossa: tyyppi G, 230 V (2026)",
    description:
      "Britannian ja Lontoon pistorasiat ovat tyyppiä G (BS 1363, kolme kanttista piikkiä), 230 V, 50 Hz. Jos laturissa lukee INPUT 100–240 V, matkapistoke riittää.",
    h1: "Pistorasiat Britanniassa ja Lontoossa",
    lead: "Britannian pistorasiat, niin Lontoossa kuin muuallakin maassa, ovat tyyppiä G, jossa on kolme kanttista piikkiä, ja jännite on 230 V. Laitteen merkinnät ratkaisevat, millaisen matkapistokkeen tarvitset, milloin pelkkä adapteri riittää ja milloin jännitemuunnin voi olla tarpeen.",
    card: "Tyyppi G, 230 V ja 50 Hz. Merkintä 100–240 V tarkoittaa, että pelkkä matkapistoke riittää.",
    sections: [
      { h: "Millaiset pistorasiat Britanniassa ja Lontoossa on?", blocks: [
        "Britannian pistorasiat ovat tyyppiä G — pistokkeessa on kolme kanttista piikkiä. Jännite on 230 V ja taajuus 50 Hz. Jotta voit liittää laitteen, jossa on toisenlainen pistoke, tarvitset tyypin G matkapistokkeen (adapterin).",
      ] },
      { h: "Onko laturissa merkintä 100–240 V? Silloin adapteri riittää", blocks: [
        "Laitteet maista, joissa jännite on alempi — kuten Japanista (100 V) tai Pohjois-Amerikasta (120 V) — toimivat Britanniassa, jos laitteen INPUT-merkinnässä lukee ”100–240 V” (niin sanottu dual voltage). Silloin tarvitset vain tyypin G matkapistokkeen.",
        "Puhelinten, kannettavien tietokoneiden ja kameroiden laturit on useimmiten merkitty 100–240 V. Vaikka näin yleensä on, lue aina juuri oman laitteesi tyyppikilpi (INPUT).",
      ] },
      { h: "Milloin jännitemuunnin voi olla tarpeen?", blocks: [
        "Laitteet, joiden INPUT-merkinnässä on vain oman maan jännite — usein tehokkaat laitteet, kuten jotkin hiustenkuivaajat ja suoristusraudat — voivat tarvita jännitemuuntimen (muuntajan). Tarkista merkintä ennen kuin kytket mitään; jos olet epävarma, turvallisinta on jättää laite kotiin.",
      ] },
      { h: "USB-liitännät ja käytännön vinkit", blocks: [
        "Joissakin majoituspaikoissa on USB-liitäntöjä, mutta varminta on ottaa mukaan oma tyypin G matkapistoke. Silloin voit ladata laitteitasi riippumatta siitä, miten huone on varusteltu.",
      ] },
      { h: "Tarkistuslista ennen lähtöä", blocks: [
        { ul: [
          "Lue jokaisen laturin ja laitteen INPUT-merkintä.",
          "Onko se 100–240 V? Silloin tyypin G adapteri riittää.",
          "Onko tehokkaassa laitteessa vain oman maan jännite? Silloin voidaan tarvita muunnin.",
          "Ota mukaan oma adapteri äläkä luota huoneen USB-liitäntöihin.",
        ] },
      ] },
      { h: "Ennen matkaa Britanniaan", blocks: [
        "Itse maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilaa voit seurata [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Saapuessasi kuljet [passintarkastuksen ja eGates-porttien](/fi/passintarkastus-egates/) läpi. Jos aiot ajaa autoa, lue [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
      { h: "Viralliset ja tekniset viitteet", blocks: [
        "13 A:n pistokkeiden ja pistorasioiden brittiläinen standardi on BS 1363 (tyyppi G; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V ja 50 Hz: Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "Toimiiko laturini Britanniassa?", a: "Jos laturissa on merkintä INPUT 100–240 V (dual voltage), se toimii Britanniassa — tarvitset silloin vain tyypin G matkapistokkeen. Useimmat puhelinten, tietokoneiden ja kameroiden laturit on merkitty näin. Tarkista aina laitteen merkintä." },
      { q: "Tarvitsenko jännitemuuntimen?", a: "Jännitemuunnin (muuntaja) voi olla tarpeen tehokkaille laitteille, jotka on tehty vain oman maan jännitteelle, kuten joillekin hiustenkuivaajille ja suoristusraudoille. Tarkista merkintä (INPUT) — jos siinä lukee vain oman maan jännite, muunnin voi olla tarpeen." },
      { q: "Millaiset pistorasiat Britanniassa ja Lontoossa on?", a: "Britannian pistorasiat, niin Lontoossa kuin muualla maassa, ovat tyyppiä G, jossa on kolme kanttista piikkiä (BS 1363, 13 A). Jännite on 230 V ja taajuus 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "terveydenhuolto-nhs-ja-ehic",
    group: "travel",
    title: "Terveydenhuolto, NHS ja EHIC/GHIC Britanniassa (2026)",
    description:
      "Päivystys (A&E) ja yleislääkäri (GP) ovat NHS:ssä maksuttomia. Mitä EHIC/GHIC kattaa, miksi matkavakuutusta suositellaan vahvasti, hätänumero 999 ja NHS 111.",
    h1: "Terveydenhuolto, NHS ja EHIC/GHIC Britanniassa",
    lead: "Mikä on NHS:ssä maksutonta, miten EHIC/GHIC toimii EU- ja EFTA-maista sekä Sveitsistä tuleville vierailijoille, miksi matkavakuutusta suositellaan vahvasti ja mitkä hätänumerot ovat käytössä.",
    card: "Päivystys ja yleislääkäri maksutta, EHIC/GHIC, matkavakuutus sekä numerot 999 ja 111.",
    sections: [
      { h: "Päivystys ja yleislääkäri ovat maksuttomia", blocks: [
        "NHS:ssä päivystys (A&E) ja käynti yleislääkärillä (GP) ovat maksuttomia kaikille — oleskelustatuksesta tai siitä riippumatta, onko sinulla papereita mukana. Tämä koskee kiireellistä ensihoitoa.",
      ] },
      { h: "Vierailijat EU- ja EFTA-maista sekä Sveitsistä: EHIC/GHIC", blocks: [
        "Kotimaassa myönnetyllä voimassa olevalla EHIC/GHIC-kortilla EU- ja EFTA-maista sekä Sveitsistä tulevat vierailijat voivat saada tilapäisen oleskelun aikana lääketieteellisesti välttämätöntä hoitoa. Huomaa, että EHIC/GHIC ei kata kaikkia kuluja eikä korvaa matkavakuutusta.",
      ] },
      { h: "Vierailijat ilman EHIC/GHIC-korttia", blocks: [
        "Vierailijoilta, joilla ei ole EHIC/GHIC-korttia, voidaan veloittaa kiireellisen hoidon jälkeisestä sairaalahoidosta (tietojen mukaan 150 % NHS:n vakiomaksusta). Kiireellistä hoitoa, joka ei voi odottaa, annetaan kuitenkin aina, ja maksu hoidetaan jälkikäteen.",
      ] },
      { h: "Matkavakuutusta suositellaan vahvasti", blocks: [
        "Matkavakuutusta suositellaan vahvasti. EHIC/GHIC ei kata kaikkea — esimerkiksi kotiinkuljetus (repatriaatio) ei yleensä sisälly siihen. Vakuutus on siksi tärkeä täydennys, eikä sitä voi korvata GHIC-kortilla.",
      ] },
      { h: "Hätänumerot ja terveysneuvonta", blocks: [
        { ul: [
          "999 (tai 112) — hätänumero kiireellisiin tilanteisiin.",
          "NHS 111 — kiireettömään terveysneuvontaan.",
          "Reseptilääkkeistä voidaan periä reseptimaksu (Englannissa).",
        ] },
      ] },
      { h: "Hyvä tietää ennen maahantuloa", blocks: [
        "Maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilan näet [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Jos aiot vuokrata auton, lue [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
    ],
    faq: [
      { q: "Maksaako päivystyshoito Britanniassa?", a: "Päivystys (A&E) ja käynti yleislääkärillä (GP) ovat NHS:ssä maksuttomia kaikille oleskelustatuksesta tai papereista riippumatta. Kiireellisen hoidon jälkeinen sairaalahoito voi sen sijaan aiheuttaa kuluja vierailijoille, joilla ei ole EHIC/GHIC-korttia." },
      { q: "Voinko käyttää EHIC- tai GHIC-korttia Britanniassa?", a: "EU- ja EFTA-maista sekä Sveitsistä tulevat vierailijat voivat kotimaassa myönnetyllä voimassa olevalla EHIC/GHIC-kortilla saada lääketieteellisesti välttämätöntä hoitoa tilapäisen oleskelun aikana. EHIC/GHIC ei kuitenkaan kata kaikkia kuluja eikä korvaa matkavakuutusta." },
      { q: "Tarvitsenko matkavakuutuksen Britanniaan?", a: "Matkavakuutusta suositellaan vahvasti. EHIC/GHIC ei kata kaikkea — esimerkiksi kotiinkuljetus (repatriaatio) ei yleensä sisälly siihen. Matkavakuutus on siis tärkeä täydennys, eikä sitä voi korvata GHIC-kortilla." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "hatanumerot-ja-turvallisuus-britanniassa",
    group: "travel",
    title: "Hätänumero Britanniassa: hätätilanteessa 999, terveys 111 | 2026",
    description:
      "Soita hätätilanteessa 999 (tai 112) — poliisi, palokunta ja ambulanssi, maksutta. Numero 101 kiireettömiin poliisiasioihin ja NHS 111 terveysneuvontaan.",
    h1: "Hätänumerot ja turvallisuus Britanniassa",
    lead: "Tärkein ensin: hätätilanteessa soitat numeroon 999 (tai 112). Tässä käydään läpi numeroiden 999 ja 101 ero, NHS 111 -terveysneuvonta, hätäpuhelun kulku sekä muutama yleinen turvallisuusohje matkailijalle.",
    card: "Hätätilanteessa 999 tai 112, kiireettömät poliisiasiat 101 ja terveysneuvonta NHS 111.",
    sections: [
      { h: "Hätänumerot: 999 ja 112", blocks: [
        "Hätätilanteessa — kun tarvitset poliisia, palokuntaa tai ambulanssia — soitat numeroon 999. Numero on maksuton, ja siihen voi soittaa mistä tahansa puhelimesta, myös ilman oman operaattorisi kuuluvuutta.",
        "Myös yleiseurooppalainen hätänumero 112 toimii Britanniassa ja ohjautuu samaan hätäkeskukseen kuin 999. Voit siis käyttää kumpaa tahansa numeroa.",
        "Kun soitat, sinulta kysytään, mitä palvelua tarvitset — police, fire, ambulance vai coastguard (rannikkovartiosto).",
      ] },
      { h: "Kiireettömät asiat: 101 ja NHS 111", blocks: [
        "Jos tilanne ei ole kiireellinen, numeron 999 sijaan on käytettävissä erilliset numerot:",
        { ul: [
          "101 — poliisin numero kiireettömiin asioihin, esimerkiksi vähäisen rikoksen tai kadonneen tavaran ilmoittamiseen.",
          "NHS 111 — kiireetön terveysneuvonta. Saat neuvoja oireisiin ja ohjauksen oikean tason hoitoon.",
        ] },
        "Oikean numeron käyttäminen auttaa hätänumeroa 999 keskittymään todellisiin hätätilanteisiin. Lisää Britannian terveydenhuollon toiminnasta on oppaassa [terveydenhuolto ja NHS Britanniassa](/fi/terveydenhuolto-nhs-ja-ehic/).",
      ] },
      { h: "Näin hätäpuhelu etenee", blocks: [
        "Kun soitat numeroon 999 tai 112, sinut yhdistetään päivystäjälle, joka kysyy, mitä palvelua tarvitset ja missä olet. Yritä kuvata mahdollisimman selvästi paikka ja tapahtunut.",
        "Jos sinun on vaikea kuulla tai puhua, käytettävissä on erityisratkaisuja: voit lähettää tekstiviestin numeroon 999 ennalta rekisteröitävän emergencySMS-palvelun kautta, tai käyttää niin sanottua silent solution -toimintoa (painat 55, kun puhelu on yhdistetty), jos et voi puhua vapaasti. Palvelujen ehdot on kuvattu tarkemmin virallisissa lähteissä.",
      ] },
      { h: "Yleisiä turvallisuusohjeita matkailijoille", blocks: [
        "Kuten monissa matkakohteissa, on hyvä varoa taskuvarkauksia ja laukkujen sieppauksia turistikohteissa, joukkoliikenteessä ja ahtaissa, väkirikkaissa paikoissa. Muutama tavallinen ohje:",
        { ul: [
          "Pidä arvoesineet lähellä kehoa äläkä jätä laukkuja vartioimatta.",
          "Vältä puhelimen, lompakon ja kalliiden esineiden esittelyä tungoksessa.",
          "Ilmoita kadonneista tavaroista tai vähäisistä rikoksista poliisille numeroon 101 tai lähimmälle poliisiasemalle.",
        ] },
        "Matkavakuutus voi myös olla viisasta ottaa mukaan. Jos aiot ajaa autoa, tutustu brittiläisiin liikennesääntöihin oppaassa [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
      { h: "Kadonnut passi: ota yhteyttä suurlähetystöön", blocks: [
        "Jos passisi katoaa matkan aikana, käänny oman maasi suurlähetystön tai konsulaatin puoleen saadaksesi apua väliaikaisten matkustusasiakirjojen kanssa. Jos kyse on varkaudesta, se kannattaa myös ilmoittaa poliisille. Maahantuloa varten tarvitset lisäksi voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/) — hakemuksen tilan näet [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Mitä saat ja et saa tuoda rajan yli, kerrotaan oppaassa [tullisäännöt ja tuontirajat](/fi/tullisaannot-britannia/).",
      ] },
    ],
    faq: [
      { q: "Mihin numeroon soitetaan hätätilanteessa Britanniassa?", a: "Soita numeroon 999 hätätilanteessa, joka vaatii poliisia, palokuntaa tai ambulanssia. Numero 112 toimii samoin ja ohjautuu samaan hätäkeskukseen. Molemmat ovat maksuttomia, ja niihin voi soittaa mistä tahansa puhelimesta." },
      { q: "Mitä teen, jos tilanne ei ole kiireellinen?", a: "Kiireettömissä poliisiasioissa soitat numeroon 101. Jos tarvitset kiireetöntä terveysneuvontaa, soitat numeroon NHS 111, josta saat neuvoja oireisiin ja ohjauksen oikeaan hoitoon." },
      { q: "Miten suojaudun taskuvarkailta?", a: "Pidä arvoesineet lähellä kehoa, vältä puhelimen ja lompakon esittelyä tungoksessa ja ole tarkkana turistikohteissa ja joukkoliikenteessä. Jos sinulta varastetaan, voit ottaa yhteyttä poliisiin numerossa 101 tai kääntyä lähimmän poliisiaseman puoleen." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "bank-holiday-pyhapaivat-2026",
    group: "travel",
    title: "Bank holidayt Britanniassa 2026: yleiset vapaapäivät",
    description:
      "Englannin ja Walesin bank holidayt 2026 GOV.UK:n mukaan: pankit kiinni, kaupat auki lyhyemmin, liikenne harvempaa — joulupäivänä lähes kaikki on kiinni.",
    h1: "Bank holidayt Britanniassa 2026",
    lead: "Bank holiday -päivänä pankit ovat kiinni, monien kauppojen aukioloajat ovat lyhyempiä ja joukkoliikenne voi kulkea harvemmin. Tässä ovat Englannin ja Walesin viralliset vapaapäivät vuonna 2026 GOV.UK:n mukaan — ja mitä ne merkitsevät matkallesi.",
    card: "Englannin ja Walesin vapaapäivät 2026, mikä on auki ja mikä kiinni joulupäivänä.",
    sections: [
      { h: "Bank holidayt Englannissa ja Walesissa 2026", blocks: [
        "GOV.UK:n mukaan Englannissa ja Walesissa ovat vuonna 2026 voimassa seuraavat viralliset bank holidayt. Skotlannissa ja Pohjois-Irlannissa päivämäärät ovat osin erilaiset.",
        { table: { head: ["Päivämäärä", "Vapaapäivä"], rows: [
          ["1. tammikuuta", "Uudenvuodenpäivä (New Year's Day)"],
          ["3. huhtikuuta", "Pitkäperjantai (Good Friday)"],
          ["6. huhtikuuta", "2. pääsiäispäivä (Easter Monday)"],
          ["4. toukokuuta", "Early May bank holiday"],
          ["25. toukokuuta", "Spring bank holiday"],
          ["31. elokuuta", "Summer bank holiday"],
          ["25. joulukuuta", "Joulupäivä (Christmas Day)"],
          ["28. joulukuuta", "Tapaninpäivän korvaava vapaapäivä (Boxing Day)"],
        ] } },
      ] },
      { h: "Mikä on auki — ja mihin vapaapäivä vaikuttaa?", blocks: [
        "Bank holiday -päivänä pankit ovat kiinni. Monet kaupat ja nähtävyydet ovat auki, mutta usein lyhyemmin aukioloajoin. Joukkoliikenteen vuoroväli voi olla harvempi, esimerkiksi sunnuntaiaikataulun mukainen.",
        "Tarkista aukioloajat ja aikataulut etukäteen juuri sille päivälle, jota suunnittelet, sillä ne vaihtelevat paikkakunnittain ja toimijoittain.",
      ] },
      { h: "Joulupäivä: lähes kaikki on kiinni", blocks: [
        "Joulupäivä (25. joulukuuta) on erityinen: lähes kaikki on kiinni ja suurin osa joukkoliikenteestä on peruttu. Jos matkustat joulun aikaan, suunnittele päivät väljästi äläkä laske säännöllisen liikenteen varaan.",
      ] },
      { h: "Korvaavat vapaapäivät, kun pyhä osuu viikonloppuun", blocks: [
        "Jos bank holiday osuu lauantaille tai sunnuntaille, vapaapäivä siirtyy yleensä seuraavalle arkipäivälle (niin sanottu korvaava vapaapäivä). Siksi osa yllä olevan luettelon päivistä osuu viikonloppua seuraavalle arkipäivälle.",
      ] },
      { h: "Ennen matkaa Britanniaan", blocks: [
        "Itse maahantuloa varten tarvitset voimassa olevan UK ETA:n, jonka [haet näin](/fi/nain-haet/), ja hakemuksen tilaa voit seurata [tilan tarkistuksen](/fi/tilan-tarkistus/) kautta. Saapuessasi kuljet [passintarkastuksen ja eGates-porttien](/fi/passintarkastus-egates/) läpi. Jos aiot ajaa autoa matkan aikana, lue [autolla ajamisesta Britanniassa](/fi/autolla-ajaminen-britanniassa/).",
      ] },
    ],
    faq: [
      { q: "Milloin Britannian bank holidayt ovat vuonna 2026?", a: "GOV.UK:n mukaan Englannin ja Walesin viralliset bank holidayt vuonna 2026 ovat: 1. tammikuuta (uudenvuodenpäivä), 3. huhtikuuta (pitkäperjantai), 6. huhtikuuta (2. pääsiäispäivä), 4. toukokuuta (Early May), 25. toukokuuta (Spring), 31. elokuuta (Summer), 25. joulukuuta (joulupäivä) ja 28. joulukuuta (tapaninpäivän korvaava vapaapäivä). Skotlannissa ja Pohjois-Irlannissa päivämäärät ovat osin erilaiset." },
      { q: "Ovatko kaupat auki bank holiday -päivinä?", a: "Pankit ovat kiinni. Monet kaupat ja nähtävyydet ovat auki, mutta usein lyhyemmin aukioloajoin. Joulupäivänä (25. joulukuuta) lähes kaikki on kiinni." },
      { q: "Miten vapaapäivät vaikuttavat joukkoliikenteeseen?", a: "Joukkoliikenteen vuoroväli voi olla harvempi, esimerkiksi sunnuntaiaikataulun mukainen. Joulupäivänä suurin osa liikenteestä on peruttu, joten suunnittele matkapäivät väljästi." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
