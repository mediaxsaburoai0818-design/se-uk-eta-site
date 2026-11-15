import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（fi・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "maahantulo-ja-viisumi",
    group: "travel",
    hub: true,
    title: "Maahantulo Britanniaan ja viisumi: opas 2026",
    description: `Britannian maahantulosäännöt: UK ETA enintään ${F.staySixMonths} kuukauden oleskeluun, milloin tarvitset viisumin, rajatarkastus (eGate), asiakirjat ja matkat lasten kanssa.`,
    h1: "Maahantulo Britanniaan ja viisumi",
    lead: `Matkailuun, työmatkaan, sukulaisvierailuun tai kauttakulkuun enintään ${F.staySixMonths} kuukaudeksi EU-kansalainen ei tarvitse viisumia — UK ETA riittää. Tästä oppaasta näet, milloin viisumi on tarpeen, miten rajatarkastus sujuu ja mitkä asiakirjat kannattaa valmistella.`,
    card: "ETA vai viisumi, rajatarkastus, asiakirjat ja lapset — maahantulon perusteet",
    sections: [
      { h: `ETA vai viisumi? Oleskelu enintään ${F.staySixMonths} kuukautta`, blocks: [
        `Matkailuun, työasioihin, sukulaisvierailuun tai kauttakulkuun EU-kansalaiset eivät tarvitse viisumia, kun oleskelu kestää enintään ${F.staySixMonths} kuukautta — UK ETA (Electronic Travel Authorisation) riittää. Hakemus tehdään verkossa, ja useimmat saavat automaattisen päätöksen muutamassa minuutissa. Hae kuitenkin vähintään ${F.decisionDays} arkipäivää ennen matkaa, koska osa hakemuksista voi vaatia lisätarkastelua.`,
        `ETA maksaa ${F.fee}, on voimassa ${F.validYears} vuotta ja sallii useita maahantuloja. Lue lisää oppaasta [Mikä on UK ETA](/fi/mika-on-eta/).`,
      ] },
      { h: "Milloin tarvitset viisumin", blocks: [
        `Britannian viisumi vaaditaan, kun oleskelu kestää yli ${F.staySixMonths} kuukautta, sekä pitkäaikaiseen opiskeluun, työntekoon tai maahan asettumiseen. Yleisimmät viisumityypit ovat:`,
        { ul: [
          "Opiskelijaviisumi — pitkäaikainen opiskelu (yleensä 2–5 vuotta koulutuksesta riippuen).",
          "Työviisumi — työskentely Britanniassa; tyyppi riippuu työtarjouksesta ja pätevyydestäsi.",
          "Perheviisumi — perheenjäsenen luo muuttaminen, kun hän asuu Britanniassa.",
          "Youth Mobility Scheme — nuorille tietyistä maista (oleskelu enintään 2 vuotta).",
        ] },
      ] },
      { h: "Rajatarkastus: eGate tai virkailijan tiski", blocks: [
        "Britannian lentoasemilla rajatarkastus tehdään automaattisilla eGate-porteilla (biometrisen passin avulla) tai tiskillä rajavirkailijan luona. eGate nopeuttaa passintarkastusta; jos matkan tarkoituksesta on kysyttävää, virkailija voi haluta keskustella kanssasi. Ketkä automaattisia portteja saavat käyttää ja miten läpikulku etenee vaihe vaiheelta, kerrotaan oppaassa [Passintarkastus ja eGates](/fi/passintarkastus-egates/).",
        "Passintarkastuksen jälkeen on vuorossa tulli — mitä elintarvikkeita ja tavaroita saat tuoda mukanasi, näet oppaasta [Tullisäännöt ja tuontirajat](/fi/tullisaannot-britannia/).",
      ] },
      { h: "Tarvittavat asiakirjat", blocks: [
        { ul: [
          "Passi, joka on voimassa koko oleskelun ajan (kansallista henkilökorttia ei ole hyväksytty lokakuusta 2021 lähtien).",
          "UK ETA, joka on liitetty tähän passiin (tai pidemmässä oleskelussa vastaava viisumi).",
          "Tukiasiakirjat: majoitusvahvistus, paluulippu ja varat oleskelua varten voidaan tarkistaa.",
        ] },
      ] },
      { h: "Matkustaminen lasten kanssa (alle 18-vuotiaat)", blocks: [
        "Jokaisella on oltava oma UK ETA iästä riippumatta — myös vauvoilla ja lapsilla. Jos lapsi matkustaa ilman toista tai kumpaakaan vanhempaansa, häntä voidaan pyytää esittämään asiakirja, joka osoittaa huoltajan suostumuksen matkaan. Mukaan kannattaa ottaa syntymätodistus tai kirjallinen suostumus (englanniksi). Lisää oppaassa [Matkustaminen lasten kanssa Britanniaan](/fi/matkustaminen-lasten-kanssa/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "passivaatimukset",
    group: "travel",
    title: "Passivaatimukset Englantiin 2026: passi voimassa koko oleskelun",
    description: "Suomalainen ja muu EU-kansalainen tarvitsee Englantiin passin, joka on voimassa koko oleskelun. Henkilökortti käy vain poikkeuksin, esim. settled status.",
    h1: "Passivaatimukset Britanniaan: voimassaolo ja ETA",
    lead: `Suomalaisena tai muuna EU-kansalaisena tarvitset Englantiin ja muualle Britanniaan passin, joka on voimassa koko oleskelun ajan. Kansallinen henkilökortti riittää vain tietyissä tapauksissa, esimerkiksi jos sinulla on settled- tai pre-settled-status. Passi on lisäksi sidottu ETA-lupaasi (${F.fee}).`,
    card: "Passin voimassaolo, passin ja ETA:n yhteys sekä lasten omat passit",
    sections: [
      { h: "Passin oltava voimassa koko oleskelun ajan", blocks: [
        "Britanniaan matkustamiseen tarvitset voimassa olevan passin, ja sen on yleensä oltava voimassa koko oleskelusi ajan.",
        "Monilta kansalaisuuksilta ei tavallisesti vaadita lisäaikaa, kuten että passin pitäisi olla voimassa vielä kuusi kuukautta maahantulon jälkeen. Vaatimukset voivat kuitenkin vaihdella kansalaisuuden mukaan, joten tarkista oman maasi vaatimukset GOV.UK:sta ennen matkaa.",
      ] },
      { h: "ETA on sidottu passiin", blocks: [
        "ETA liitetään siihen passiin, jota käytit hakemuksessa, ja matkustat samalla passilla, jonka ilmoitit hakemuksessa.",
        "Jos uusit tai vaihdat passin, sinun on yleensä haettava uusi ETA uudelle passille. Siksi passin voimassaolo kannattaa tarkistaa hyvissä ajoin ennen kuin haet ETA:a.",
      ] },
      { h: "Jokainen matkustaja tarvitsee oman passin — myös vauva", blocks: [
        "Jokainen matkustaja, myös vauvat ja lapset, tarvitsee yleensä oman passin matkustaakseen Britanniaan, ja lisäksi oman ETA:n. Lue lisää oppaasta [Matkustaminen lasten kanssa Britanniaan](/fi/matkustaminen-lasten-kanssa/). Lapsen passin hankkiminen voi viedä aikaa, joten aloita ajoissa.",
      ] },
      { h: "Useampi passi tai kaksoiskansalaisuus", blocks: [
        "Jos sinulla on kaksoiskansalaisuus tai useampi passi, saavut maahan yleensä sillä passilla, johon ETA on liitetty. Varmista siis, että ETA on sidottu siihen passiin, jolla todella aiot matkustaa.",
      ] },
      { h: "Seuraavat vaiheet ennen matkaa", blocks: [
        "Kun passi on kunnossa, voit [hakea UK ETA -luvan](/fi/nain-haet/) ja seurata hakemusta [ETA:n tilan tarkistuksella](/fi/tilan-tarkistus/). Perillä maahantulo tapahtuu [passintarkastuksen ja eGate-porttien](/fi/passintarkastus-egates/) kautta, ja mitä saat tuoda maahan, kerrotaan [Britannian tullisäännöissä](/fi/tullisaannot-britannia/). Yleiset maahantulosäännöt löytyvät oppaasta [Maahantulo Britanniaan ja viisumi](/fi/maahantulo-ja-viisumi/); välilaskuista kerrotaan erikseen Britannian kauttakulkua käsittelevässä oppaassa.",
      ] },
    ],
    faq: [
      { q: "Kuinka kauan passin on oltava voimassa Britannian-matkalla?", a: "Britanniaan matkustamiseen tarvitset yleensä passin, joka on voimassa koko oleskelusi ajan. Monilta kansalaisuuksilta ei tavallisesti vaadita lisäaikaa, kuten että passin pitäisi olla voimassa vielä kuusi kuukautta maahantulon jälkeen, mutta vaatimukset voivat vaihdella. Tarkista siksi oman maasi vaatimukset GOV.UK:sta ennen matkaa." },
      { q: "Mihin passiin ETA on liitetty?", a: "ETA liitetään siihen passiin, jota käytit hakemuksessa, ja matkustat samalla passilla. Jos uusit tai vaihdat passin, sinun on yleensä haettava uusi ETA uudelle passille. Jos sinulla on kaksoiskansalaisuus ja useampi passi, saavut maahan sillä passilla, johon ETA on liitetty." },
      { q: "Tarvitseeko lapsi oman passin Britanniaan?", a: "Kaikki matkustajat, myös vauvat, tarvitsevat yleensä oman passin matkustaakseen Britanniaan. Lisäksi jokainen matkustaja tarvitsee oman ETA:n. Tarkista vaatimukset ajoissa, sillä lapsen passin hankkiminen voi viedä aikaa." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "passintarkastus-egates",
    group: "travel",
    title: "Passintarkastus Britanniassa: eGates Lontoon lentoasemilla (2026)",
    description: "EU-passilla ja voimassa olevalla UK ETA:lla voit käyttää eGate-portteja – ei kysymyksiä, ei leimaa. 8.7.2026 alkaen myös 8 vuotta täyttäneet lapset.",
    h1: "Passintarkastus Britanniassa ja eGates",
    lead: "Suomalaisella passilla ja voimassa olevalla UK ETA:lla voit käyttää automaattisia eGate-portteja: ei kysymyksiä eikä leimaa passiin. 8.7.2026 alkaen portteja saavat käyttää myös 8 vuotta täyttäneet lapset.",
    card: "Kuka saa käyttää eGate-portteja, miten ne toimivat ja mitä rajalla kysytään",
    sections: [
      { h: "Uutta 8.7.2026 alkaen: eGates 8-vuotiaista", blocks: [
        "8.7.2026 alkaen 8 vuotta täyttäneet lapset saavat käyttää eGate-portteja — aiemmin ikäraja oli 10 vuotta. Ehtoja on kaksi: lapsen on oltava vähintään 120 cm pitkä, ja 8–17-vuotiaiden on matkustettava aikuisen seurassa.",
        "Monelle perheelle tämä tarkoittaa, että koko seurue voi nyt kulkea automaattisten porttien kautta jonottamatta rajavirkailijan tiskille.",
      ] },
      { h: "Kuka saa käyttää eGate-portteja", blocks: [
        "eGate-portit ovat avoinna seuraavien maiden passinhaltijoille:",
        { ul: [
          "kaikki EU-maat (myös Suomi)",
          "Islanti, Liechtenstein, Norja ja Sveitsi",
          "Australia, Kanada, Japani, Uusi-Seelanti, Singapore, Etelä-Korea ja Yhdysvallat",
        ] },
        "Ehtona on voimassa oleva matkustuslupa — suomalaisille matkustajille se tarkoittaa käytännössä voimassa olevaa UK ETA:a (tai eVisaa). Jos sinulla ei vielä ole lupaa, katso [miten haet UK ETA:n](/fi/nain-haet/).",
        "Britannian 15 lentoasemalla ja juna-asemalla on yli 290 eGate-porttia — muun muassa [Lontoon lentoasemilla](/fi/lontoon-lentoasemat/), kuten Heathrow'ssa.",
      ] },
      { h: "Näin eGate toimii: ei kysymyksiä, ei leimaa", blocks: [
        { ul: [
          "Aseta biometrinen passisi kuvasivu auki lukijalle.",
          "Katso kameraan — järjestelmä vertaa kasvojasi passin kuvaan.",
          "Portti aukeaa ja kuljet läpi — ilman keskustelua virkailijan kanssa ja ilman maahantuloleimaa passiin.",
        ] },
        "Jos portti ei tunnista sinua (esimerkiksi kuluneen passin vuoksi), sinut ohjataan yksinkertaisesti rajavirkailijan tiskille.",
      ] },
      { h: "Tiskillä tehtävä passintarkastus: 5 mahdollista kysymystä", blocks: [
        "Jos kuljet rajavirkailijan tarkastuksen kautta, sinulta voidaan kysyä:",
        { ul: [
          "Matkan tarkoitus — matkailu, työasiat, sukulaisvierailu.",
          "Oleskelun kesto — montako päivää olet maassa.",
          "Majoitus — hotellin tai majoittajan osoite.",
          "Paluumatka — kotimatkan päivämäärä ja varaus.",
          "Varat — riittävästi rahaa oleskelua varten.",
        ] },
      ] },
      { h: "Tarvittavat asiakirjat", blocks: [
        { ul: [
          "Biometrinen passi, joka on voimassa koko oleskelun ajan.",
          "Voimassa oleva UK ETA — se on liitetty passiin sähköisesti eikä sitä tarvitse tulostaa; hyväksymisviesti kannattaa silti säilyttää.",
        ] },
        "Jos olet epävarma hakemuksestasi, katso [miten tarkistat ETA-hakemuksen tilan](/fi/tilan-tarkistus/). Välilaskuihin Britannian kautta sovelletaan omia sääntöjään — niistä kerrotaan kauttakulkua käsittelevässä oppaassa.",
      ] },
      { h: "Lapsiperheet: näin toimitaan", blocks: [
        { ul: [
          "8 vuotta täyttäneet (ja vähintään 120 cm pitkät) lapset käyttävät eGate-portteja; 8–17-vuotiaat aina aikuisen seurassa.",
          "Alle 8-vuotiaat kulkevat vanhempiensa kanssa rajavirkailijan tiskin kautta.",
          "Jokainen lapsi — myös vauva — tarvitsee oman UK ETA:n.",
          "Yleiset maahantulosäännöt löydät oppaasta [Maahantulo Britanniaan ja viisumi](/fi/maahantulo-ja-viisumi/).",
        ] },
      ] },
      { h: "Passintarkastuksen jälkeen: tulli", blocks: [
        "Passintarkastuksen jälkeen on vuorossa tullitarkastus — huomaa, että lihan ja maitotuotteiden tuominen EU:sta Britanniaan on kielletty. Lue lisää oppaasta [Tullisäännöt ja tuontirajat](/fi/tullisaannot-britannia/).",
      ] },
    ],
    faq: [
      { q: "Voinko käyttää eGate-portteja suomalaisella passilla?", a: "Kyllä. eGate-portit ovat avoinna kaikkien EU-maiden passinhaltijoille (sekä Islannin, Liechtensteinin, Norjan ja Sveitsin sekä Australian, Kanadan, Japanin, Uuden-Seelannin, Singaporen, Etelä-Korean ja Yhdysvaltojen), kunhan sinulla on voimassa oleva matkustuslupa, kuten UK ETA tai eVisa." },
      { q: "Minkä ikäisenä lapsi saa käyttää eGate-portteja?", a: "8.7.2026 alkaen 8 vuotta täyttäneet lapset saavat käyttää eGate-portteja (aiemmin ikäraja oli 10 vuotta). Lapsen on oltava vähintään 120 cm pitkä, ja 8–17-vuotiaiden on matkustettava aikuisen seurassa." },
      { q: "Leimataanko passi, kun kuljen eGate-portin kautta?", a: "Ei. eGate-portilla virkailija ei esitä kysymyksiä eikä passiin lyödä maahantuloleimaa. UK ETA on liitetty passiisi sähköisesti." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "tullisaannot-britannia",
    group: "travel",
    title: "Mitä Englantiin saa viedä? Tullisäännöt ja tuontirajat (2026)",
    description: "Britanniaan saa tuoda tullitta 4 l väkeviä, 18 l viiniä ja 42 l olutta. EU:sta ei saa tuoda maitotuotteita eikä lihaa. Käteinen £10 000 alkaen on ilmoitettava.",
    h1: "Mitä Englantiin saa viedä? Britannian tulli",
    lead: "Tärkein sääntö: EU:sta ei saa tuoda Britanniaan lihaa eikä maitotuotteita. Tällä sivulla käydään läpi sallitut elintarvikkeet, vauvanruokaa koskeva poikkeus, alkoholin ja tupakan tullittomat kiintiöt sekä se, milloin käteinen on ilmoitettava.",
    card: "Liha- ja maitotuotekielto, alkoholin ja tupakan kiintiöt sekä käteisen ilmoittaminen",
    sections: [
      { h: "Sääntö nro 1: ei lihaa eikä maitotuotteita EU:sta", blocks: [
        "EU:sta on kiellettyä tuoda lihaa ja maitotuotteita Britanniaan (Englanti, Skotlanti, Wales). Kielto koskee:",
        { ul: [
          "Maitotuotteet: juusto, maito, voi, jogurtti.",
          "Liha: sika, nauta, lammas, vuohi ja riista sekä niistä valmistetut tuotteet — myös salami, makkara, kinkku sekä lihaa tai juustoa sisältävät voileivät.",
        ] },
        "Sääntö koskee myös pieniä määriä käsimatkatavaroissa — lentoasemalta ostettu kinkkuvoileipä on syötävä tai heitettävä pois ennen tarkastusta.",
      ] },
      { h: "Poikkeus: vauvanruoka (enintään 2 kg)", blocks: [
        "Äidinmaidonkorvike, vauvanruoka ja lääkinnälliseen käyttöön tarkoitetut erityisruoat ovat sallittuja enintään 2 kg henkeä kohden, kunhan ne ovat avaamattomassa tuotemerkin pakkauksessa eivätkä vaadi kylmäsäilytystä ennen käyttöä.",
      ] },
      { h: "Elintarvikkeet, joita voit tuoda ongelmitta", blocks: [
        { ul: [
          "Leipä (mutta ei voileipiä, joissa on lihaa tai maitotuotteita).",
          "Kakut ilman tuoretta kermaa, keksit ja suklaa.",
          "Pasta ja pakatut keitot.",
          "Kala, kananmunat ja hunaja — sallittuja omaan käyttöön.",
        ] },
        "Jos olet epävarma, tarkista kyseinen tuote GOV.UK:sta ennen lähtöä — säännöt vaihtelevat elintarvikeryhmän mukaan.",
      ] },
      { h: "Alkoholi ja tupakka: tullittomat kiintiöt Britanniaan saavuttaessa", blocks: [
        { table: { head: ["Tuoteryhmä", "Tullitonta"], rows: [
          ["Olut", "42 litraa"],
          ["Muu kuin kuohuviini", "18 litraa"],
          ["Väkevät alkoholijuomat (yli 22 %)", "4 litraa tai 9 litraa enintään 22 %:n juomia"],
          ["Savukkeet", "200 kpl (tai 50 sikaria tai 250 g tupakkaa)"],
          ["Muut tavarat (lahjat, matkamuistot)", "enintään £390 (£270, jos saavut yksityiskoneella tai yksityisellä veneellä)"],
        ] } },
        "Kiintiöt ylittävä osuus on ilmoitettava tullille ja siihen liittyvät maksut maksettava. Nämä ovat Britannian kiintiöt maahan saavuttaessa. Kotiin palatessa sovelletaan kotimaasi omia tullisääntöjä.",
      ] },
      { h: "Käteinen: ilmoitusvelvollisuus £10 000 alkaen", blocks: [
        "Jos sinulla on mukanasi £10 000 tai enemmän käteistä (myös vastaava summa muissa valuutoissa), sinun on ilmoitettava summa — verkossa ennen matkaa tai saapuessa punaisella kaistalla. Ilmoittamatta jättäminen voi johtaa koko summan takavarikointiin ja enintään £5 000:n sakkoon.",
      ] },
      { h: "Seuraamukset ja tarkastuksen kulku", blocks: [
        "Kielletyt elintarvikkeet voidaan takavarikoida rajalla, ja jos ylität alkoholin ja tupakan kiintiöt ilmoittamatta, tavarat voidaan pidättää ja seuraamuksia määrätä. Varminta on käyttää punaista kaistaa, jos sinulla on jotain ilmoitettavaa.",
        "Tullitarkastus tulee passintarkastuksen jälkeen — katso, miten [passintarkastus ja eGate-portit](/fi/passintarkastus-egates/) toimivat. Muista, että maahantuloon tarvitset voimassa olevan [UK ETA:n](/fi/nain-haet/); hakemuksen tilan näet [ETA:n tilan tarkistuksesta](/fi/tilan-tarkistus/). Yleiset maahantulosäännöt löydät oppaasta [Maahantulo Britanniaan ja viisumi](/fi/maahantulo-ja-viisumi/), ja välilaskuista kerrotaan kauttakulkua käsittelevässä oppaassa.",
      ] },
    ],
    faq: [
      { q: "Saako Englantiin viedä juustoa tai lihatuotteita Suomesta tai muualta EU:sta?", a: "Ei. EU:sta on kiellettyä tuoda Britanniaan lihaa (sika, nauta, lammas, vuohi, riista) ja lihatuotteita sekä maitotuotteita (juusto, maito, voi, jogurtti). Tuotteet voidaan takavarikoida rajalla." },
      { q: "Paljonko savukkeita ja alkoholia saa tuoda tullitta Britanniaan?", a: "200 savuketta (tai 50 sikaria tai 250 g tupakkaa), 42 litraa olutta, 18 litraa muuta kuin kuohuviiniä sekä 4 litraa yli 22 %:n väkeviä tai 9 litraa enintään 22 %:n alkoholijuomia." },
      { q: "Onko käteinen ilmoitettava Britanniaan saavuttaessa?", a: "Kyllä, jos sinulla on mukanasi £10 000 tai enemmän. Ilmoitus tehdään verkossa etukäteen tai saapuessa punaisella kaistalla. Ilmoittamatta jättäminen voi johtaa koko summan takavarikointiin ja enintään £5 000:n sakkoon." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "laakkeet-britanniaan",
    group: "travel",
    title: "Lääkkeet mukaan Britanniaan: säännöt ja todistukset (2026)",
    description: "Omia lääkkeitä saa tuoda Britanniaan enintään kolmen kuukauden tarpeeseen, kun voit osoittaa ne sinulle määrätyiksi. Huumausainelääkkeet voivat vaatia luvan.",
    h1: "Lääkkeet mukaan Britanniaan",
    lead: "Saat tuoda Britanniaan omia lääkkeitäsi enintään kolmen kuukauden tarpeeseen, kunhan voit osoittaa, että ne on määrätty sinulle. Tältä sivulta näet sallitun määrän, tarvittavat todistukset, huumausaineeksi luokiteltuja lääkkeitä koskevat säännöt ja käsimatkatavaroiden nesteet.",
    card: "Kolmen kuukauden lääkemäärä, reseptit ja todistukset sekä controlled drugs -luvat",
    sections: [
      { h: "Enintään kolmen kuukauden tarve", blocks: [
        "Saat tuoda Britanniaan omia lääkkeitäsi henkilökohtaiseen käyttöön enintään kolmen kuukauden tarpeeseen. Sinun tulisi pystyä osoittamaan, että lääkkeet on määrätty sinulle.",
        "Säilytä lääkkeet mahdollisuuksien mukaan alkuperäispakkauksissa. Silloin on helpompi näyttää, mistä lääkkeistä on kyse ja että ne kuuluvat sinulle, jos sitä kysytään rajalla.",
      ] },
      { h: "Mukaan otettavat todistukset ja reseptit", blocks: [
        "Ota mukaan lääkärintodistus tai resepti todisteeksi siitä, että lääke on määrätty sinulle. Asiakirjassa tulisi olla:",
        { ul: [
          "Lääkkeen nimi.",
          "Annostus ja vahvuus.",
          "Kuinka usein otat lääkettä.",
          "Lääkkeen määränneen lääkärin allekirjoitus tai rekisterinumero.",
        ] },
        "Pidä lääkkeet mahdollisuuksien mukaan alkuperäispakkauksissa, jotta pakkauksen tiedot vastaavat todistusta.",
      ] },
      { h: "Huumausaineeksi luokitellut lääkkeet (controlled drugs)", blocks: [
        "Jotkin lääkkeet sisältävät huumausaineeksi luokiteltuja aineita (controlled drugs), ja niihin sovelletaan lisäsääntöjä. Kysy lääkäriltäsi tai apteekin henkilökunnalta, koskeeko tämä juuri sinun lääkkeitäsi.",
        "Jos koskee, saatat tarvita henkilökohtaisen luvan (personal licence). Ota silloin yhteyttä Britannian Home Officen yksikköön Drug and Firearms Licensing Unit vähintään 15 arkipäivää ennen matkaa.",
        "Schedule 1 -luokkaan kuuluvia lääkkeitä ei saa tuoda maahan ilman lupaa.",
      ] },
      { h: "Nesteet ja ruiskut käsimatkatavaroissa", blocks: [
        "Käsimatkatavaroiden nesteisiin ja ruiskuihin sovelletaan lentoasemien tavallisia turvallisuussääntöjä. Jos sinulla on mukana nestemäisiä lääkkeitä tai pistosvälineitä, todistus kannattaa pitää käden ulottuvilla myös turvatarkastuksessa. Lue lisää oppaasta [Nesteet käsimatkatavaroissa ja turvatarkastus](/fi/nesteet-kasimatkatavaroissa/).",
      ] },
      { h: "Hoito Britanniassa", blocks: [
        "Jos tarvitset oleskelun aikana hoitoa tai uusia lääkkeitä, on hyvä tietää, miten Britannian terveydenhuoltojärjestelmä NHS toimii. Siitä kerrotaan Britannian terveydenhuoltoa käsittelevässä oppaassa.",
      ] },
    ],
    faq: [
      { q: "Saanko viedä lääkkeeni Britanniaan?", a: "Kyllä, saat tuoda omia lääkkeitäsi henkilökohtaiseen käyttöön enintään kolmen kuukauden tarpeeseen. Ota mukaan todiste siitä, että lääkkeet on määrätty sinulle, ja säilytä ne mieluiten alkuperäispakkauksissa." },
      { q: "Mitä asiakirjoja tarvitsen lääkkeitä varten?", a: "Ota mukaan lääkärintodistus tai resepti, josta näkyvät lääkkeen nimi, annostus ja vahvuus, kuinka usein otat lääkettä sekä lääkkeen määränneen lääkärin allekirjoitus tai rekisterinumero. Pidä lääkkeet alkuperäispakkauksissa, jos mahdollista." },
      { q: "Mitä huumausaineeksi luokitelluista lääkkeistä pitää tietää?", a: "Jotkin lääkkeet sisältävät huumausaineeksi luokiteltuja aineita (controlled drugs), ja niihin sovelletaan lisäsääntöjä. Kysy lääkäriltäsi tai apteekista, koskeeko tämä lääkkeitäsi. Jos koskee, saatat tarvita henkilökohtaisen luvan, ja Britannian Home Officeen kannattaa olla yhteydessä vähintään 15 arkipäivää ennen matkaa." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "nesteet-kasimatkatavaroissa",
    group: "travel",
    title: "Nesteet käsimatkatavaroissa: turvatarkastus Britanniassa (2026)",
    description: "Monella Britannian lentoasemalla nesteiden raja on 100 ml pakkausta kohden (pussi enintään 1 l); osassa 2 l CT-skannerien ansiosta. Tarkista oma kenttäsi.",
    h1: "Nesteet käsimatkatavaroissa ja turvatarkastus Britannian lentoasemilla",
    lead: "Monella Britannian lentoasemalla käsimatkatavaroiden nesteille on yhä 100 ml:n pakkauskohtainen raja. Osa kentistä sallii uusien skannerien ansiosta suurempia määriä, mutta käytäntö vaihtelee — tarkista siksi juuri oman lähtöasemasi säännöt.",
    card: "100 ml:n sääntö, CT-skannerit sekä vauvanruoan ja lääkkeiden poikkeukset",
    sections: [
      { h: "100 ml:n sääntö ja läpinäkyvä pussi", blocks: [
        "Monella Britannian lentoasemalla käsimatkatavaroiden nesteiden on usein oltava enintään 100 ml:n pakkauksissa. Yli 100 ml:n vetoista pakkausta ei yleensä hyväksytä, vaikka se ei olisi täynnä.",
        { ul: [
          "Pakkaukset kerätään yleensä yhteen läpinäkyvään, uudelleen suljettavaan pussiin, jonka tilavuus on enintään 1 litra.",
          "Sääntönä on yleensä yksi pussi henkeä kohden.",
          "Nesteiksi luetaan usein myös geelit, tahnat, voiteet, suihkeet ja vastaavat tuotteet.",
        ] },
        "Koska yksityiskohdat voivat vaihdella lentoasemittain, kannattaa ennen matkaa tarkistaa juuri oman lähtöasemasi ajantasaiset säännöt.",
      ] },
      { h: "Uudet CT-skannerit: joillakin kentillä raja voi olla korkeampi", blocks: [
        "Osa Britannian lentoasemista on ottanut käyttöön uusia CT-skannereita ja voi sen myötä sallia nesteet enintään 2 litran pakkauksissa. Käyttöönotto etenee kuitenkin eri tahtiin, ja tilanne vaihtelee lentoasemittain.",
        "Vielä vuoden 2026 puolivälissäkin 100 ml:n raja on voimassa monella lentoasemalla. Älä siis oleta korkeamman rajan pätevän, vaan tarkista aina uusimmat säännöt lähtöasemaltasi — ja mieluiten myös paluulennon lentoasemalta.",
      ] },
      { h: "Poikkeukset: vauvanruoka, äidinmaidonkorvike ja lääkkeet", blocks: [
        "Vauvanruokaa ja äidinmaidonkorviketta sekä välttämättömiä lääkkeitä voi joissakin tapauksissa ottaa mukaan tavallista nesterajaa suurempia määriä. Yleensä ne on kuitenkin ilmoitettava tarkastuksen henkilökunnalle.",
        "Sallitut määrät ja ehdot voivat vaihdella lentoasemittain. Resepti tai muu dokumentaatio kannattaa pitää käden ulottuvilla, ja käytäntö kannattaa tarkistaa etukäteen. Jos matkustat lasten kanssa, lue myös opas [Matkustaminen lasten kanssa Britanniaan](/fi/matkustaminen-lasten-kanssa/).",
      ] },
      { h: "Elektroniikka ja suuremmat esineet", blocks: [
        "Suuremmat elektroniset laitteet, kuten kannettavat tietokoneet, voidaan joutua ottamaan laukusta ja asettamaan erikseen laatikkoon henkilökunnan ohjeiden mukaan. Tämäkin voi vaihdella lentoaseman ja tarkastuslaitteiden mukaan, joten noudata paikan päällä annettuja ohjeita.",
      ] },
      { h: "Näin valmistaudut tarkastukseen", blocks: [
        "Tarkastus sujuu jouhevammin, kun pakkaat nesteet läpinäkyvään pussiin jo kotona, pidät vauvanruoan ja lääkkeet helposti saatavilla niiden ilmoittamista varten ja tarkistat lentoasemasi ajantasaiset säännöt etukäteen.",
        "Turvatarkastus tehdään ennen passintarkastusta — katso, miten [passintarkastus ja eGate-portit](/fi/passintarkastus-egates/) toimivat ja mitä saat tuoda maahan [Britannian tullisääntöjen](/fi/tullisaannot-britannia/) mukaan. Muista, että maahantuloon tarvitset voimassa olevan [UK ETA:n](/fi/nain-haet/); tilan näet [ETA:n tilan tarkistuksesta](/fi/tilan-tarkistus/). Yleiset maahantulosäännöt ovat oppaassa [Maahantulo Britanniaan ja viisumi](/fi/maahantulo-ja-viisumi/), ja välilaskuista kerrotaan kauttakulkua käsittelevässä oppaassa.",
      ] },
    ],
    faq: [
      { q: "Paljonko nestettä käsimatkatavaroissa saa olla Britannian lentoasemalla?", a: "Monella Britannian lentoasemalla raja on usein 100 ml pakkausta kohden, ja pakkausten on oltava läpinäkyvässä, uudelleen suljettavassa enintään 1 litran pussissa, yksi pussi henkeä kohden. Osa lentoasemista on ottanut käyttöön uusia CT-skannereita ja voi sallia jopa 2 litraa, mutta käyttöönotto vaihtelee lentoasemittain. Tarkista siksi aina lähtöasemasi ajantasaiset säännöt ennen matkaa." },
      { q: "Saako vettä viedä turvatarkastuksen läpi?", a: "Turvatarkastuksen jälkeen ostetut vedet ja muut juomat voi yleensä ottaa mukaan koneeseen. Ennen tarkastusta mukana olevat juomat kuuluvat sen sijaan yleensä nestesääntöjen piiriin, ja ne voidaan joutua heittämään pois, jos raja ylittyy. Säännöt voivat vaihdella lentoasemittain, joten tarkista, mitä omalla matkallasi sovelletaan." },
      { q: "Saako äidinmaidonkorviketta ja lääkkeitä viedä tarkastuksen läpi?", a: "Vauvanruokaa, äidinmaidonkorviketta ja välttämättömiä lääkkeitä voi joissakin tapauksissa ottaa mukaan tavallista nesterajaa suurempia määriä, kunhan ne ilmoitetaan tarkastuksen henkilökunnalle. Sallitut määrät ja ehdot voivat vaihdella, joten tarkista ne etukäteen lentoasemaltasi ja pidä mahdollinen resepti tai muu dokumentaatio käden ulottuvilla." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alkoholi-ja-tupakointi",
    group: "travel",
    title: "Alkoholin ikäraja Englannissa: 18 vuotta – tupakointisäännöt 2026",
    description: "Englannissa alkoholia saa ostaa tai juoda pubissa 18-vuotiaana. 16–17-vuotias saa aikuisen seurassa juoda olutta, viiniä tai siideriä aterian kanssa.",
    h1: "Alkoholin ikäraja Englannissa – tupakointi ja säännöt",
    lead: "Englannissa alkoholin ostaminen ja juominen pubissa tai ravintolassa edellyttää 18 vuoden ikää. 16- tai 17-vuotias saa aikuisen seurassa juoda (mutta ei ostaa) olutta, viiniä tai siideriä aterian kanssa (GOV.UK). Tupakointi on kielletty sisätiloissa julkisilla paikoilla.",
    card: "18 vuoden ikäraja, tupakointikielto sisätiloissa, sähkösavukkeet ja rattijuopumus",
    sections: [
      { h: "Mikä on alkoholin ikäraja Englannissa? 18 vuotta alkoholille ja tupakalle", blocks: [
        "Britanniassa alkoholin ja tupakan ostaminen edellyttää vähintään 18 vuoden ikää. Ikäraja koskee kauppoja, baareja, ravintoloita ja muita myyntipaikkoja.",
        "Kaupat ja anniskelupaikat voivat pyytää henkilöllisyystodistusta ikäsi osoittamiseksi, vaikka näyttäisit vanhemmalta. Pidä siksi voimassa oleva henkilöllisyystodistus mukana, jos aiot ostaa alkoholia tai tupakkaa.",
      ] },
      { h: "Tupakointikielto julkisissa sisätiloissa", blocks: [
        "Vuonna 2007 voimaan tulleen savuttomuuslain (Smoke-free law) jälkeen tupakointi on ollut kielletty sisätiloissa kaikilla suljetuilla julkisilla paikoilla, työpaikoilla ja julkisessa liikenteessä.",
        "Pubit, ravintolat ja asemat ovat siis sisätiloiltaan savuttomia. Tupakoida saa vain erikseen osoitetuilla ulkoalueilla.",
        { ul: [
          "Sisätilat: tupakointi kielletty suljetuilla julkisilla paikoilla ja työpaikoilla.",
          "Julkinen liikenne: savuton.",
          "Sallittu: vain osoitetuilla ulkoalueilla.",
        ] },
      ] },
      { h: "Sähkösavukkeet ja vaping", blocks: [
        "Sähkösavukkeita ja vapingia koskevat säännöt vaihtelevat paikoittain. Monin paikoin se ei ole sallittua sisätiloissa, mutta käytäntö voi vaihdella tiloittain ja toimijoittain. Noudata aina kylttejä ja henkilökunnan ohjeita paikan päällä.",
      ] },
      { h: "Rattijuopumus ja alkoholi julkisilla paikoilla", blocks: [
        "Rattijuopumukseen suhtaudutaan Britanniassa tiukasti, ja sille on määritelty raja-arvot ja seuraamukset. Jos aiot ajaa autoa, perehdy sääntöihin — niistä kerrotaan Britanniassa autoilua käsittelevässä oppaassa.",
        "Jotkin paikallisviranomaiset ovat lisäksi perustaneet alueita, joilla alkoholin juomista julkisilla paikoilla on rajoitettu. Kiinnitä huomiota paikallisiin kyltteihin, jotka kertovat tällaisista rajoituksista.",
      ] },
      { h: "Alkoholin ja tupakan tuonti", blocks: [
        "Maahan tuotavan alkoholin ja tupakan määrälle on omat tullittomat tuontirajansa (duty-free). Ne kuvataan tarkemmin oppaassa [Tullisäännöt ja tuontirajat](/fi/tullisaannot-britannia/).",
      ] },
    ],
    faq: [
      { q: "Mikä on alkoholin ikäraja Englannissa?", a: "Englannissa alkoholin ostaminen tai juominen pubissa tai ravintolassa edellyttää 18 vuoden ikää. 16- tai 17-vuotias saa aikuisen seurassa juoda (mutta ei ostaa) olutta, viiniä tai siideriä aterian kanssa (GOV.UK)." },
      { q: "Mikä ikäraja Britanniassa on alkoholin ja tupakan ostamiselle?", a: "Alkoholin ja tupakan ostaminen Britanniassa edellyttää vähintään 18 vuoden ikää. Kaupat ja baarit voivat pyytää henkilöllisyystodistusta ikäsi osoittamiseksi." },
      { q: "Saako pubeissa ja kaupoissa tupakoida?", a: "Ei. Tupakointi on kielletty sisätiloissa kaikilla suljetuilla julkisilla paikoilla, työpaikoilla ja julkisessa liikenteessä. Pubit, ravintolat ja asemat ovat sisätiloiltaan savuttomia — tupakoida saa vain erikseen osoitetuilla ulkoalueilla." },
      { q: "Saako sähkösavuketta käyttää (vaping)?", a: "Sähkösavukkeita ja vapingia koskevat säännöt vaihtelevat paikoittain. Usein se ei ole sallittua sisätiloissa. Noudata aina kylttejä ja henkilökunnan ohjeita paikan päällä." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "matkustaminen-lasten-kanssa",
    group: "travel",
    title: "Matkustaminen lasten kanssa Britanniaan: ETA ja passi (2026)",
    description: "Kaikki, myös vauvat, tarvitsevat Britanniaan oman ETA:n ja passin. Border Force voi pyytää todisteen sukulaisuudesta – näin valmistaudut matkaan lasten kanssa.",
    h1: "Matkustaminen lasten kanssa Britanniaan",
    lead: "Jokainen lapsi, myös vauva, tarvitsee oman ETA:n ja oman passin. Rajalla Border Force voi pyytää todisteen sukulaisuudesta, joten mukaan kannattaa ottaa oikeat asiakirjat.",
    card: "Oma ETA ja passi jokaiselle lapselle sekä todisteet sukulaisuudesta rajalla",
    sections: [
      { h: "Jokainen matkustaja tarvitsee oman ETA:n ja oman passin", blocks: [
        "Kaikki matkustajat, myös vauvat, tarvitsevat oman ETA:n ja oman passin. Lapsi ei voi matkustaa vanhempansa ETA:lla — sääntönä on yksi ETA henkeä kohden.",
      ] },
      { h: "Border Force voi pyytää todisteen sukulaisuudesta", blocks: [
        "Kun matkustat lasten kanssa, Border Force (rajavalvonta) voi pyytää todisteen välisestä suhteestanne — etenkin jos teillä on eri sukunimet tai jos et ole lapsen vanhempi. Kelvollisia todisteita voivat olla:",
        { ul: [
          "Syntymä- tai adoptiotodistus.",
          "Vihki- tai avioerotodistus (jos olet vanhempi, mutta sukunimesi on eri).",
          "Vanhemman suostumuskirje (consent letter) (jos et ole lapsen vanhempi).",
        ] },
      ] },
      { h: "Pidä asiakirjat mukana", blocks: [
        "Tällaiset todisteet sukulaisuudesta kannattaa pitää mukana myös tulevilla matkoilla. Ne sujuvoittavat maahantuloa, jos sinulta kysytään niitä rajatarkastuksessa.",
      ] },
      { h: "Hyvä tietää ennen maahantuloa", blocks: [
        "Hae [UK ETA](/fi/nain-haet/) jokaiselle perheenjäsenelle ja seuraa hakemusta [ETA:n tilan tarkistuksella](/fi/tilan-tarkistus/). Yleiset maahantulosäännöt löydät oppaasta [Maahantulo Britanniaan ja viisumi](/fi/maahantulo-ja-viisumi/) ja tuotavia tavaroita koskevat säännöt oppaasta [Tullisäännöt ja tuontirajat](/fi/tullisaannot-britannia/). Jos aiot vuokrata auton, katso myös Britanniassa autoilua käsittelevä opas, ja välilaskuista kerrotaan kauttakulkua käsittelevässä oppaassa.",
      ] },
    ],
    faq: [
      { q: "Tarvitseeko lapsikin ETA:n Britanniaan?", a: "Kyllä. Kaikki matkustajat, myös vauvat, tarvitsevat oman ETA:n. Lapsi ei voi matkustaa vanhempansa ETA:lla — sääntönä on yksi ETA henkeä kohden." },
      { q: "Voiko lapsi matkustaa vanhemman passilla tai ETA:lla?", a: "Ei. Jokainen matkustaja tarvitsee oman passin ja oman ETA:n iästä riippumatta. Maahan ei voi saapua toisen henkilön passilla tai ETA:lla." },
      { q: "Mitä jos matkustan lapsen kanssa, jolla on eri sukunimi?", a: "Border Force voi pyytää todisteen sukulaisuudesta, etenkin jos teillä on eri sukunimet tai jos et ole lapsen vanhempi. Kelvollisia todisteita voivat olla syntymä- tai adoptiotodistus, vihki- tai avioerotodistus tai vanhemman suostumuskirje (consent letter)." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "lontoon-lentoasemat",
    group: "travel",
    title: "Englannin 2. suurin lentoasema on Gatwick – Lontoon 5 lentoasemaa",
    description: "Englannin ja Britannian toiseksi suurin lentoasema on Lontoon Gatwick (42,8 milj. matkustajaa 2025, CAA) Heathrow'n jälkeen. Lontoon 5 lentoasemaa lyhyesti.",
    h1: "Lontoon 5 suurinta lentoasemaa",
    lead: "Englannin — ja koko Britannian — toiseksi suurin lentoasema on Lontoon Gatwick, jonka kautta kulki 42,8 miljoonaa matkustajaa vuonna 2025. Suurin on Heathrow (84,5 miljoonaa) ja kolmas Manchester (32,1 miljoonaa) Britannian ilmailuviranomaisen CAA:n mukaan.",
    card: "Heathrow, Gatwick, Stansted, Luton ja London City sekä matka-ajat keskustaan",
    sections: [
      { h: "Viisi lentoasemaa, eri reitit keskustaan", blocks: [
        "Lontoota palvelee viisi suurta lentoasemaa. Valinta vaikuttaa siihen, millä reitillä, kuinka nopeasti ja millä hinnalla pääset keskustaan. Alla on lyhyt kuvaus jokaisesta.",
      ] },
      { h: "LHR – Heathrow (Länsi-Lontoo)", blocks: [
        "Britannian suurin lentoasema ja tärkein kansainvälinen solmukohta (terminaalit 2–5).",
        "Matka: Heathrow Express n. 15 min, Elizabeth Line n. 30 min, metro n. 50 min. Lisää oppaassa [Heathrow'n lentoasema (LHR)](/fi/heathrow-lentoasema/).",
      ] },
      { h: "LGW – Gatwick (Etelä-Lontoo)", blocks: [
        "Englannin ja Britannian toiseksi suurin lentoasema (Heathrow'n jälkeen); sekä perinteisiä lentoyhtiöitä että halpalentoyhtiöitä (pohjoinen ja eteläinen terminaali).",
        "Matka: Gatwick Express n. 30 min, Thameslink n. 30–45 min.",
      ] },
      { h: "STN – Stansted (Koillis-Lontoo)", blocks: [
        "Ryanairin tukikohta, paljon eurooppalaisia yhteyksiä; yksi terminaali, helppo löytää perille.",
        "Matka: Stansted Express n. 50 min, bussi n. 60–90 min.",
      ] },
      { h: "LTN – Luton (Lontoon pohjoispuolella)", blocks: [
        "easyJetin ja Wizz Airin tukikohta; yksi terminaali, yhteys asemalle sukkulalla.",
        "Matka: Luton Airport Express n. 30 min, Thameslink n. 30 min.",
      ] },
      { h: "LCY – London City (Keski-Lontoo, lähimpänä)", blocks: [
        "Lähimpänä keskustaa; suosittu liikematkustajien keskuudessa.",
        "Matka: DLR n. 15–25 min keskustaan.",
        { note: "Matka-ajat ovat suuntaa antavia ja riippuvat määränpäästä Lontoossa sekä vuorokaudenajasta." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  "heathrow": {
    slug: "heathrow-lentoasema",
    group: "travel",
    title: "Heathrow (LHR): terminaalit, rajatarkastus ja matka Lontooseen",
    description: "Opas Heathrow'n lentoasemaan: terminaalit 2–5, rajatarkastus (eGate) ja matka Lontoon keskustaan – Heathrow Express, Elizabeth Line, metro ja bussi.",
    h1: "Heathrow'n lentoasema (LHR)",
    lead: "Heathrow on Britannian suurin lentoasema ja tärkein maahantulopaikka Lontooseen. Alla näet terminaalit, rajatarkastuksen kulun ja tavat päästä keskustaan.",
    card: "Terminaalit 2–5, eGate-portit ja matka-ajat Lontoon keskustaan",
    sections: [
      { h: "Sijainti ja terminaalit", blocks: [
        "Heathrow (IATA-koodi LHR) sijaitsee Länsi-Lontoossa. Se on Britannian suurin ja vilkkain lentoasema, ja sieltä on yhteyksiä kaikkialle maailmaan. Käytössä ovat terminaalit 2, 3, 4 ja 5 — tarkista terminaalin numero lipustasi, koska se vaikuttaa sekä reittiin että lähtöselvitykseen.",
      ] },
      { h: "Rajatarkastus saapumisen jälkeen", blocks: [
        `Saavuttuasi kuljet rajatarkastuksen läpi automaattisilla eGate-porteilla (biometrisen passin avulla) tai tiskillä virkailijan luona. Muista, että maahantuloon tarvitset voimassa olevan passin sekä voimassa olevan, tähän passiin liitetyn [UK ETA:n](/fi/mika-on-eta/) (kun oleskelu kestää enintään ${F.staySixMonths} kuukautta). Porttien käytöstä kerrotaan tarkemmin oppaassa [Passintarkastus ja eGates](/fi/passintarkastus-egates/).`,
      ] },
      { h: "Matka Lontoon keskustaan", blocks: [
        { table: { head: ["Kulkuneuvo", "Arvioitu matka-aika"], rows: [
          ["Heathrow Express (pikajuna)", "n. 15 minuuttia"],
          ["Elizabeth Line", "n. 30 minuuttia"],
          ["Metro (Piccadilly line)", "n. 50 minuuttia"],
          ["Bussi / kaukoliikenteen bussi", "n. 60–90 minuuttia"],
        ] } },
        { note: "Matka-ajat ovat suuntaa antavia ja riippuvat terminaalista, vuorokaudenajasta ja määränpäästä Lontoossa." },
        "Lisää Lontoon lentoasemista: [Lontoon 5 suurinta lentoasemaa](/fi/lontoon-lentoasemat/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
