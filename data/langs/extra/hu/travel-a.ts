import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（hu・travel-a）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "beutazas-es-vizum",
    group: "travel",
    hub: true,
    title: "Beutazás az Egyesült Királyságba és vízum: útmutató 2026",
    description: `Brit beutazási szabályok: UK ETA legfeljebb ${F.staySixMonths} hónapos tartózkodásra, mikor kell vízum, határellenőrzés (eGate), dokumentumok, utazás gyerekekkel.`,
    h1: "Beutazás az Egyesült Királyságba és vízum",
    lead: `Turizmus, üzleti út, rokonlátogatás vagy tranzit céljából, legfeljebb ${F.staySixMonths} hónapos tartózkodásra az uniós állampolgároknak nincs szükségük vízumra – elegendő az UK ETA. Ebből az útmutatóból megtudja, mikor kell vízum, hogyan zajlik a határellenőrzés, és milyen dokumentumokat érdemes előkészíteni.`,
    card: "ETA vagy vízum, határellenőrzés, dokumentumok és gyerekek – a beutazás alapjai",
    sections: [
      { h: `ETA vagy vízum? Legfeljebb ${F.staySixMonths} hónapos tartózkodás`, blocks: [
        `Turizmus, üzleti ügyek, rokonlátogatás vagy tranzit esetén az uniós állampolgároknak nem kell vízum, ha a tartózkodás legfeljebb ${F.staySixMonths} hónapig tart – elegendő az UK ETA (Electronic Travel Authorisation). Az igénylés online történik, és a legtöbben néhány percen belül automatikus döntést kapnak. Ennek ellenére legalább ${F.decisionDays} munkanappal az utazás előtt igényelje, mert egyes kérelmek további ellenőrzést igényelhetnek.`,
        `Az ETA díja ${F.fee}, ${F.validYears} évig érvényes, és többszöri beutazásra jogosít. Bővebben: [Mi az UK ETA](/hu/mi-az-eta/).`,
      ] },
      { h: "Mikor van szükség vízumra", blocks: [
        `Brit vízumra akkor van szükség, ha a tartózkodás ${F.staySixMonths} hónapnál tovább tart, valamint hosszú távú tanuláshoz, munkavállaláshoz vagy letelepedéshez. A leggyakoribb vízumtípusok:`,
        { ul: [
          "Diákvízum – hosszú távú tanulás (a képzéstől függően általában 2–5 év).",
          "Munkavízum – munkavégzés az Egyesült Királyságban; a típus az állásajánlattól és az Ön képesítésétől függ.",
          "Családi vízum – csatlakozás az Egyesült Királyságban élő családtaghoz.",
          "Youth Mobility Scheme – bizonyos országokból érkező fiataloknak (legfeljebb 2 éves tartózkodás).",
        ] },
      ] },
      { h: "Határellenőrzés: eGate-kapu vagy határőri pult", blocks: [
        "A brit repülőtereken a határellenőrzés automata eGate-kapuknál (biometrikus útlevéllel) vagy a pultnál, határőr előtt zajlik. Az eGate meggyorsítja az útlevél-ellenőrzést; ha az utazás céljával kapcsolatban kérdés merül fel, a határőr beszélni kívánhat Önnel. Hogy ki használhatja az automata kapukat, és hogyan zajlik az áthaladás lépésről lépésre, azt a [Határellenőrzés és eGate-kapuk](/hu/hatarellenorzes-egates/) című útmutató ismerteti.",
        "Az útlevél-ellenőrzés után a vámellenőrzés következik – hogy milyen élelmiszereket és árukat vihet be, azt a [Vámszabályok és vámmentes keretek](/hu/vamszabalyok-britannia/) című útmutatóban találja.",
      ] },
      { h: "Szükséges dokumentumok", blocks: [
        { ul: [
          "A teljes tartózkodás idejére érvényes útlevél (a nemzeti személyi igazolványt 2021 októbere óta nem fogadják el).",
          "Ehhez az útlevélhez kapcsolt UK ETA (hosszabb tartózkodásnál a megfelelő vízum).",
          "Kiegészítő dokumentumok: a szállásfoglalást, a visszautazó jegyet és a tartózkodáshoz szükséges anyagi fedezetet ellenőrizhetik.",
        ] },
      ] },
      { h: "Utazás gyerekekkel (18 év alatt)", blocks: [
        "Életkortól függetlenül mindenkinek saját UK ETA-ra van szüksége – a csecsemőknek és a gyerekeknek is. Ha a gyermek az egyik vagy mindkét szülője nélkül utazik, kérhetik tőle annak igazolását, hogy a szülő vagy a gondviselő hozzájárult az utazáshoz. Érdemes magánál tartani a születési anyakönyvi kivonatot vagy egy írásos (angol nyelvű) hozzájáruló nyilatkozatot. Bővebben: [Utazás gyerekekkel az Egyesült Királyságba](/hu/utazas-gyerekekkel/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "utlevel-kovetelmenyek",
    group: "travel",
    title: "Útlevél Angliába 2026: a teljes tartózkodás alatt érvényes legyen",
    description: "Magyar és más uniós állampolgárnak a teljes tartózkodásra érvényes útlevél kell Angliába. Személyi igazolvány csak kivételesen elég (pl. settled status).",
    h1: "Útlevél-követelmények az Egyesült Királyságba: érvényesség és ETA",
    lead: `Magyar vagy más uniós állampolgárként Angliába és az Egyesült Királyság többi részébe olyan útlevélre van szüksége, amely a teljes tartózkodás idejére érvényes. A nemzeti személyi igazolvány csak bizonyos esetekben elegendő, például ha settled vagy pre-settled státusszal rendelkezik. Az útlevél emellett az ETA-jához (${F.fee}) is kapcsolódik.`,
    card: "Az útlevél érvényessége, az útlevél és az ETA kapcsolata, valamint a gyerekek saját útlevele",
    sections: [
      { h: "Az útlevél a teljes tartózkodás alatt legyen érvényes", blocks: [
        "Az Egyesült Királyságba érvényes útlevéllel utazhat, és annak általában a teljes tartózkodás idejére érvényesnek kell lennie.",
        "Sok állampolgárság esetében jellemzően nincs további követelmény, például hogy az útlevél a beutazás után még hat hónapig érvényes legyen. A követelmények azonban állampolgárságonként eltérhetnek, ezért utazás előtt ellenőrizze a GOV.UK oldalán, mi vonatkozik az Ön országára.",
      ] },
      { h: "Az ETA az útlevélhez kapcsolódik", blocks: [
        "Az ETA ahhoz az útlevélhez kapcsolódik, amellyel igényelte, és ugyanazzal az útlevéllel kell utaznia, amelyet a kérelemben megadott.",
        "Ha megújítja vagy lecseréli az útlevelét, általában új ETA-t kell igényelnie az új útlevélhez. Ezért érdemes jóval az ETA igénylése előtt ellenőrizni, meddig érvényes az útlevele.",
      ] },
      { h: "Minden utasnak saját útlevél kell – a csecsemőknek is", blocks: [
        "Minden utasnak, a csecsemőket és a gyerekeket is beleértve, általában saját útlevélre van szüksége az Egyesült Királyságba, és emellett saját ETA-ra is. Bővebben: [Utazás gyerekekkel az Egyesült Királyságba](/hu/utazas-gyerekekkel/). A gyermek útlevelének beszerzése időbe telhet, ezért kezdje el időben.",
      ] },
      { h: "Több útlevél vagy kettős állampolgárság", blocks: [
        "Ha kettős állampolgár, vagy több útlevele van, általában azzal az útlevéllel lép be az országba, amelyhez az ETA kapcsolódik. Győződjön meg róla, hogy az ETA ahhoz az útlevélhez tartozik, amellyel ténylegesen utazni fog.",
      ] },
      { h: "A következő lépések utazás előtt", blocks: [
        "Ha az útlevele rendben van, [igényelheti az UK ETA-t](/hu/hogyan-igenyelheto/), majd a kérelmet az [ETA státuszának ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Érkezéskor a [határellenőrzésen és az eGate-kapukon](/hu/hatarellenorzes-egates/) halad át, azt pedig, hogy mit vihet be, a [brit vámszabályok](/hu/vamszabalyok-britannia/) ismertetik. Az általános beutazási szabályokat a [Beutazás az Egyesült Királyságba és vízum](/hu/beutazas-es-vizum/) című útmutató foglalja össze, az átszállásról pedig az [Átszállás és tranzit](/hu/atszallas-tranzit/) című oldalon olvashat.",
      ] },
    ],
    faq: [
      { q: "Meddig kell érvényesnek lennie az útlevélnek egy brit utazáshoz?", a: "Az Egyesült Királyságba általában olyan útlevéllel utazhat, amely a teljes tartózkodás idejére érvényes. Sok állampolgárság esetében jellemzően nincs további követelmény, például hogy az útlevél a beutazás után még hat hónapig érvényes legyen, a követelmények azonban eltérhetnek. Ezért utazás előtt ellenőrizze a GOV.UK oldalán, mi vonatkozik az Ön országára." },
      { q: "Melyik útlevélhez kapcsolódik az ETA?", a: "Az ETA ahhoz az útlevélhez kapcsolódik, amellyel igényelte, és ugyanazzal az útlevéllel kell utaznia. Ha megújítja vagy lecseréli az útlevelét, általában új ETA-t kell igényelnie az új útlevélhez. Kettős állampolgárság és több útlevél esetén azzal az útlevéllel lép be, amelyhez az ETA kapcsolódik." },
      { q: "Kell a gyereknek saját útlevél az Egyesült Királyságba?", a: "Igen, minden utasnak, a csecsemőket is beleértve, általában saját útlevélre van szüksége az Egyesült Királyságba. Emellett minden utasnak saját ETA is kell. A követelményeket ellenőrizze időben, mert a gyermek útlevelének beszerzése eltarthat egy ideig." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "hatarellenorzes-egates",
    group: "travel",
    title: "Útlevél-ellenőrzés az Egyesült Királyságban: eGate-kapuk Londonban (2026)",
    description: "Uniós útlevéllel és érvényes UK ETA-val használhatja az eGate-kapukat – kérdések és pecsét nélkül. 2026. július 8-tól a 8 éves kortól a gyerekek is.",
    h1: "Útlevél-ellenőrzés az Egyesült Királyságban és az eGate-kapuk",
    lead: "Magyar útlevéllel és érvényes UK ETA-val használhatja az automata eGate-kapukat: nincsenek kérdések, és nem kerül pecsét az útlevelébe. 2026. július 8-tól a 8. életévüket betöltött gyerekek is használhatják a kapukat.",
    card: "Ki használhatja az eGate-kapukat, hogyan működnek, és mit kérdezhetnek a határon",
    sections: [
      { h: "Újdonság 2026. július 8-tól: eGate 8 éves kortól", blocks: [
        "2026. július 8-tól a 8. életévüket betöltött gyerekek is használhatják az eGate-kapukat – korábban a korhatár 10 év volt. Két feltétel van: a gyermek legalább 120 cm magas legyen, a 8–17 évesek pedig csak felnőtt kíséretében haladhatnak át.",
        "Sok család számára ez azt jelenti, hogy most már az egész társaság az automata kapukon mehet át, és nem kell a határőri pultnál sorba állni.",
      ] },
      { h: "Ki használhatja az eGate-kapukat", blocks: [
        "Az eGate-kapukat az alábbi országok útlevelének birtokosai használhatják:",
        { ul: [
          "az összes uniós tagállam (Magyarország is)",
          "Izland, Liechtenstein, Norvégia és Svájc",
          "Ausztrália, Kanada, Japán, Új-Zéland, Szingapúr, Dél-Korea és az Egyesült Államok",
        ] },
        "A feltétel az érvényes utazási engedély – magyar utasok számára ez a gyakorlatban érvényes UK ETA-t (vagy eVisát) jelent. Ha még nincs engedélye, nézze meg, [hogyan igényelheti az UK ETA-t](/hu/hogyan-igenyelheto/).",
        "Az Egyesült Királyság 15 repülőterén és vasúti terminálján több mint 290 eGate-kapu működik – többek között a [londoni repülőtereken](/hu/londoni-repuloterek/), például Heathrow-n.",
      ] },
      { h: "Így működik az eGate: nincs kérdés, nincs pecsét", blocks: [
        { ul: [
          "Helyezze a biometrikus útlevelét a fényképes oldalánál kinyitva az olvasóra.",
          "Nézzen a kamerába – a rendszer összeveti az arcát az útlevélben lévő fényképpel.",
          "A kapu kinyílik, és Ön áthalad – a határőrrel való beszélgetés és belépési pecsét nélkül.",
        ] },
        "Ha a kapu nem ismeri fel (például mert az útlevele kopott), egyszerűen a határőri pulthoz irányítják.",
      ] },
      { h: "Ellenőrzés a pultnál: 5 lehetséges kérdés", blocks: [
        "Ha a határőri pultnál halad át, az alábbiakról kérdezhetik:",
        { ul: [
          "Az utazás célja – turizmus, üzleti ügy, rokonlátogatás.",
          "A tartózkodás időtartama – hány napot tölt az országban.",
          "Szállás – a szálloda vagy a vendéglátó címe.",
          "Visszaút – a hazautazás dátuma és foglalása.",
          "Anyagi fedezet – elegendő pénz a tartózkodáshoz.",
        ] },
      ] },
      { h: "Szükséges dokumentumok", blocks: [
        { ul: [
          "A teljes tartózkodás idejére érvényes biometrikus útlevél.",
          "Érvényes UK ETA – elektronikusan kapcsolódik az útleveléhez, nem kell kinyomtatni; a jóváhagyó üzenetet azonban érdemes megőrizni.",
        ] },
        "Ha bizonytalan a kérelmével kapcsolatban, nézze meg, [hogyan ellenőrizheti az ETA-kérelem státuszát](/hu/statusz-ellenorzese/). Az Egyesült Királyságon keresztüli átszállásra külön szabályok vonatkoznak – ezekről az [Átszállás és tranzit](/hu/atszallas-tranzit/) című útmutató szól.",
      ] },
      { h: "Gyerekes családok: mire számítson", blocks: [
        { ul: [
          "A 8. életévüket betöltött (és legalább 120 cm magas) gyerekek használhatják az eGate-kapukat; a 8–17 évesek mindig felnőtt kíséretében.",
          "A 8 év alatti gyerekek a szüleikkel együtt a határőri pultnál haladnak át.",
          "Minden gyermeknek – a csecsemőknek is – saját UK ETA-ra van szüksége.",
          "Az általános beutazási szabályokat a [Beutazás az Egyesült Királyságba és vízum](/hu/beutazas-es-vizum/) című útmutatóban találja.",
        ] },
      ] },
      { h: "Az útlevél-ellenőrzés után: vám", blocks: [
        "Az útlevél-ellenőrzés után a vámellenőrzés következik – vegye figyelembe, hogy húst és tejtermékeket tilos az EU-ból az Egyesült Királyságba bevinni. Bővebben: [Vámszabályok és vámmentes keretek](/hu/vamszabalyok-britannia/).",
      ] },
    ],
    faq: [
      { q: "Használhatom az eGate-kapukat magyar útlevéllel?", a: "Igen. Az eGate-kapukat az összes uniós tagállam útlevelének birtokosai használhatják (valamint Izland, Liechtenstein, Norvégia és Svájc, továbbá Ausztrália, Kanada, Japán, Új-Zéland, Szingapúr, Dél-Korea és az Egyesült Államok polgárai), ha érvényes utazási engedéllyel, például UK ETA-val vagy eVisával rendelkeznek." },
      { q: "Hány éves kortól használhatják a gyerekek az eGate-kapukat?", a: "2026. július 8-tól a 8. életévüket betöltött gyerekek használhatják az eGate-kapukat (korábban a korhatár 10 év volt). A gyermeknek legalább 120 cm magasnak kell lennie, a 8–17 éveseknek pedig felnőtt kíséretében kell utazniuk." },
      { q: "Kapok pecsétet az útlevelembe, ha eGate-kapun megyek át?", a: "Nem. Az eGate-kapunál nem tesznek fel kérdéseket, és belépési pecsét sem kerül az útlevelébe. Az UK ETA elektronikusan kapcsolódik az útleveléhez." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "vamszabalyok-britannia",
    group: "travel",
    title: "Mit lehet bevinni Angliába? Vámszabályok és vámmentes keretek (2026)",
    description: "Vámmentesen 4 l tömény ital, 18 l bor és 42 l sör vihető be. Az EU-ból hús és tejtermék nem vihető be. £10 000-tól a készpénzt be kell jelenteni.",
    h1: "Mit lehet bevinni Angliába? A brit vámszabályok",
    lead: "A legfontosabb szabály: az EU-ból nem vihet be húst és tejtermékeket az Egyesült Királyságba. Ezen az oldalon áttekintjük, mely élelmiszerek engedélyezettek, milyen kivétel vonatkozik a bébiételre, mekkora az alkohol és a dohányáru vámmentes kerete, és mikor kell a készpénzt bejelenteni.",
    card: "Hús- és tejtermék-tilalom, az alkohol és a dohány vámmentes kerete, a készpénz bejelentése",
    sections: [
      { h: "1. számú szabály: se hús, se tejtermék az EU-ból", blocks: [
        "Húst és tejtermékeket tilos az EU-ból Nagy-Britanniába (Anglia, Skócia, Wales) bevinni. A tilalom kiterjed a következőkre:",
        { ul: [
          "Tejtermékek: sajt, tej, vaj, joghurt.",
          "Hús: sertés-, marha-, bárány-, kecske- és vadhús, valamint az ezekből készült termékek – a szalámi, a kolbász, a sonka és a húst vagy sajtot tartalmazó szendvicsek is.",
        ] },
        "A szabály a kézipoggyászban lévő kis mennyiségekre is vonatkozik – a repülőtéren vásárolt sonkás szendvicset az ellenőrzés előtt meg kell enni vagy ki kell dobni.",
      ] },
      { h: "Kivétel: bébiétel (legfeljebb 2 kg)", blocks: [
        "Tápszer, bébiétel és gyógyászati célú különleges élelmiszer személyenként legfeljebb 2 kg-ig engedélyezett, ha bontatlan, márkás csomagolásban van, és felhasználás előtt nem igényel hűtést.",
      ] },
      { h: "Élelmiszerek, amelyeket gond nélkül bevihet", blocks: [
        { ul: [
          "Kenyér (de nem húsos vagy tejtermékes szendvics).",
          "Friss tejszín nélküli sütemények, kekszek és csokoládé.",
          "Tészta és zacskós levesek.",
          "Hal, tojás és méz – saját fogyasztásra engedélyezett.",
        ] },
        "Ha bizonytalan, indulás előtt ellenőrizze az adott terméket a GOV.UK oldalán – a szabályok élelmiszer-kategóriánként eltérnek.",
      ] },
      { h: "Alkohol és dohányáru: vámmentes keretek az Egyesült Királyságba érkezéskor", blocks: [
        { table: { head: ["Termékkategória", "Vámmentes keret"], rows: [
          ["Sör", "42 liter"],
          ["Csendes bor (nem pezsgő)", "18 liter"],
          ["Tömény ital (22% felett)", "4 liter, vagy 9 liter legfeljebb 22%-os ital"],
          ["Cigaretta", "200 szál (vagy 50 szivar vagy 250 g dohány)"],
          ["Egyéb áruk (ajándékok, szuvenírek)", "legfeljebb £390 (£270, ha magánrepülőgéppel vagy magánhajóval érkezik)"],
        ] } },
        "A kereteket meghaladó mennyiséget be kell jelenteni a vámhatóságnál, és meg kell fizetni a kapcsolódó terheket. Ezek az Egyesült Királyságba való belépéskor érvényes keretek. Hazatéréskor a saját országa vámszabályai vonatkoznak Önre.",
      ] },
      { h: "Készpénz: £10 000-tól bejelentési kötelezettség", blocks: [
        "Ha £10 000 vagy annál több készpénz van Önnél (más pénznemben is az ennek megfelelő összeg), azt be kell jelentenie – online az utazás előtt, vagy érkezéskor a piros sávban. A bejelentés elmulasztása a teljes összeg lefoglalásához és legfeljebb £5 000 bírsághoz vezethet.",
      ] },
      { h: "Szankciók és az ellenőrzés menete", blocks: [
        "A tiltott élelmiszereket a határon lefoglalhatják, és ha bejelentés nélkül túllépi az alkoholra és dohányárura vonatkozó kereteket, az árut visszatarthatják, és szankciót szabhatnak ki. A legbiztonságosabb, ha a piros sávot választja, amikor van bejelentenivalója.",
        "A vámellenőrzés az útlevél-ellenőrzés után következik – nézze meg, hogyan működik a [határellenőrzés és az eGate-kapuk](/hu/hatarellenorzes-egates/). Ne feledje, hogy a beutazáshoz érvényes [UK ETA](/hu/hogyan-igenyelheto/) szükséges; a kérelem állapotát az [ETA státuszának ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Az általános beutazási szabályokat a [Beutazás az Egyesült Királyságba és vízum](/hu/beutazas-es-vizum/) című útmutató foglalja össze, az átszállásról pedig az [Átszállás és tranzit](/hu/atszallas-tranzit/) című oldalon olvashat.",
      ] },
    ],
    faq: [
      { q: "Vihetek sajtot vagy húskészítményt Magyarországról vagy máshonnan az EU-ból Angliába?", a: "Nem. Húst (sertés-, marha-, bárány-, kecske- és vadhúst) és húskészítményeket, valamint tejtermékeket (sajtot, tejet, vajat, joghurtot) tilos az EU-ból Nagy-Britanniába bevinni. A termékeket a határon lefoglalhatják." },
      { q: "Mennyi cigarettát és alkoholt vihetek be vámmentesen az Egyesült Királyságba?", a: "200 szál cigarettát (vagy 50 szivart vagy 250 g dohányt), 42 liter sört, 18 liter csendes bort, valamint 4 liter 22% feletti tömény italt vagy 9 liter legfeljebb 22%-os alkoholos italt." },
      { q: "Be kell jelentenem a készpénzt az Egyesült Királyságba érkezéskor?", a: "Igen, ha £10 000 vagy annál több készpénz van Önnél. A bejelentés előzetesen online vagy érkezéskor a piros sávban tehető meg. A bejelentés elmulasztása a teljes összeg lefoglalásához és legfeljebb £5 000 bírsághoz vezethet." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "gyogyszerek-bevitele",
    group: "travel",
    title: "Gyógyszerek bevitele az Egyesült Királyságba: szabályok, igazolások (2026)",
    description: "Saját gyógyszereiből legfeljebb háromhavi mennyiséget vihet be, ha igazolja, hogy Önnek írták fel. A kábítószernek minősülő gyógyszerekhez engedély kellhet.",
    h1: "Gyógyszerek bevitele az Egyesült Királyságba",
    lead: "Saját gyógyszereiből legfeljebb háromhavi mennyiséget vihet be az Egyesült Királyságba, ha igazolni tudja, hogy azokat Önnek írták fel. Ezen az oldalon megtudja, mekkora mennyiség engedélyezett, milyen igazolásokra van szükség, milyen szabályok vonatkoznak a kábítószernek minősülő gyógyszerekre, és mi a helyzet a kézipoggyászban lévő folyadékokkal.",
    card: "Háromhavi mennyiség, receptek és orvosi igazolások, valamint a controlled drugs engedélyek",
    sections: [
      { h: "Legfeljebb háromhavi mennyiség", blocks: [
        "Saját gyógyszereiből személyes használatra legfeljebb háromhavi mennyiséget vihet be az Egyesült Királyságba. Ennek során igazolnia kell tudni, hogy a gyógyszereket Önnek írták fel.",
        "A gyógyszereket lehetőség szerint tartsa eredeti csomagolásukban. Így könnyebben megmutathatja, milyen gyógyszerről van szó, és hogy az Öné, ha a határon rákérdeznek.",
      ] },
      { h: "Magával viendő igazolások és receptek", blocks: [
        "Vigyen magával orvosi igazolást vagy receptet annak bizonyítására, hogy a gyógyszert Önnek írták fel. A dokumentumban szerepeljen:",
        { ul: [
          "A gyógyszer neve.",
          "Az adagolás és a hatáserősség.",
          "Milyen gyakran szedi a gyógyszert.",
          "A gyógyszert felíró orvos aláírása vagy nyilvántartási száma.",
        ] },
        "A gyógyszereket lehetőség szerint tartsa eredeti csomagolásukban, hogy a csomagoláson lévő adatok egyezzenek az igazolással.",
      ] },
      { h: "Kábítószernek minősülő gyógyszerek (controlled drugs)", blocks: [
        "Egyes gyógyszerek kábítószernek minősülő anyagokat (controlled drugs) tartalmaznak, és ezekre további szabályok vonatkoznak. Kérdezze meg kezelőorvosát vagy gyógyszerészét, hogy ez az Ön gyógyszereit érinti-e.",
        "Ha igen, személyes engedélyre (personal licence) lehet szüksége. Ebben az esetben legalább 15 munkanappal az utazás előtt vegye fel a kapcsolatot a brit belügyminisztérium (Home Office) Drug and Firearms Licensing Unit nevű egységével.",
        "A Schedule 1 kategóriába tartozó gyógyszereket engedély nélkül nem lehet bevinni az országba.",
      ] },
      { h: "Folyadékok és fecskendők a kézipoggyászban", blocks: [
        "A kézipoggyászban lévő folyadékokra és fecskendőkre a repülőterek szokásos biztonsági szabályai vonatkoznak. Ha folyékony gyógyszert vagy injekciós eszközöket visz magával, érdemes az igazolást a biztonsági ellenőrzésnél is kéznél tartani. Bővebben: [Folyadékok a kézipoggyászban és a biztonsági ellenőrzés](/hu/folyadekok-kezipoggyaszban/).",
      ] },
      { h: "Ellátás az Egyesült Királyságban", blocks: [
        "Ha a tartózkodása alatt kezelésre vagy új gyógyszerre van szüksége, hasznos tudni, hogyan működik a brit egészségügyi rendszer, az NHS. Erről az [Egészségügyi ellátás az Egyesült Királyságban (NHS)](/hu/egeszsegugy-nhs-ehic/) című útmutató szól.",
      ] },
    ],
    faq: [
      { q: "Vihetem a gyógyszereimet az Egyesült Királyságba?", a: "Igen, saját gyógyszereiből személyes használatra legfeljebb háromhavi mennyiséget vihet be. Vigyen magával igazolást arról, hogy a gyógyszereket Önnek írták fel, és lehetőleg tartsa őket eredeti csomagolásukban." },
      { q: "Milyen dokumentumokra van szükségem a gyógyszerekhez?", a: "Vigyen magával orvosi igazolást vagy receptet, amelyen szerepel a gyógyszer neve, az adagolás és a hatáserősség, hogy milyen gyakran szedi, valamint a gyógyszert felíró orvos aláírása vagy nyilvántartási száma. Ha lehetséges, tartsa a gyógyszereket eredeti csomagolásukban." },
      { q: "Mit kell tudni a kábítószernek minősülő gyógyszerekről?", a: "Egyes gyógyszerek kábítószernek minősülő anyagokat (controlled drugs) tartalmaznak, és ezekre további szabályok vonatkoznak. Kérdezze meg kezelőorvosát vagy gyógyszerészét, hogy ez az Ön gyógyszereit érinti-e. Ha igen, személyes engedélyre lehet szüksége, és legalább 15 munkanappal az utazás előtt érdemes felvennie a kapcsolatot a brit Home Office-szal." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "folyadekok-kezipoggyaszban",
    group: "travel",
    title: "Folyadékok a kézipoggyászban: biztonsági ellenőrzés a brit repülőtereken (2026)",
    description: "Sok brit repülőtéren 100 ml a folyadékok határa tárolónként (legfeljebb 1 literes tasak); néhol CT-szkennerek miatt 2 liter. Ellenőrizze a repülőterét.",
    h1: "Folyadékok a kézipoggyászban és biztonsági ellenőrzés a brit repülőtereken",
    lead: "Sok brit repülőtéren továbbra is tárolónként 100 ml-es korlát vonatkozik a kézipoggyászban lévő folyadékokra. Néhány repülőtér az új szkennereknek köszönhetően nagyobb mennyiséget is enged, de a gyakorlat eltérő – ezért mindig a saját indulási repülőtere szabályait ellenőrizze.",
    card: "A 100 ml-es szabály, a CT-szkennerek, valamint a bébiételre és a gyógyszerekre vonatkozó kivételek",
    sections: [
      { h: "A 100 ml-es szabály és az átlátszó tasak", blocks: [
        "Sok brit repülőtéren a kézipoggyászban lévő folyadékoknak gyakran legfeljebb 100 ml-es tárolókban kell lenniük. A 100 ml-nél nagyobb űrtartalmú tárolót általában akkor sem fogadják el, ha nincs tele.",
        { ul: [
          "A tárolókat általában egyetlen, legfeljebb 1 literes, átlátszó, visszazárható tasakba kell tenni.",
          "Főszabály szerint személyenként egy tasak engedélyezett.",
          "Folyadéknak számítanak gyakran a gélek, paszták, krémek, sprayk és hasonló termékek is.",
        ] },
        "Mivel a részletek repülőterenként eltérhetnek, utazás előtt érdemes ellenőrizni a saját indulási repülőtere aktuális szabályait.",
      ] },
      { h: "Új CT-szkennerek: néhány repülőtéren magasabb lehet a korlát", blocks: [
        "Néhány brit repülőtér új CT-szkennereket állított üzembe, és ennek köszönhetően legfeljebb 2 literes tárolókban is engedélyezheti a folyadékokat. A bevezetés azonban eltérő ütemben halad, és a helyzet repülőterenként különbözik.",
        "Még 2026 közepén is sok repülőtéren érvényes a 100 ml-es korlát. Ne feltételezze tehát, hogy a magasabb határ vonatkozik Önre, hanem mindig ellenőrizze az indulási repülőtér legfrissebb szabályait – lehetőleg a visszaútét is.",
      ] },
      { h: "Kivételek: bébiétel, tápszer és gyógyszerek", blocks: [
        "Bébiételt, tápszert és nélkülözhetetlen gyógyszereket bizonyos esetekben a szokásos folyadékkorlátnál nagyobb mennyiségben is vihet magával. Ezeket azonban általában jeleznie kell az ellenőrzést végző személyzetnek.",
        "Az engedélyezett mennyiségek és feltételek repülőterenként eltérhetnek. Érdemes a receptet vagy más dokumentációt kéznél tartani, és a gyakorlatot előre ellenőrizni. Ha gyerekekkel utazik, olvassa el az [Utazás gyerekekkel az Egyesült Királyságba](/hu/utazas-gyerekekkel/) című útmutatót is.",
      ] },
      { h: "Elektronikai eszközök és nagyobb tárgyak", blocks: [
        "A nagyobb elektronikai eszközöket, például a laptopokat, a személyzet utasítása szerint előfordulhat, hogy ki kell venni a táskából, és külön tálcába kell helyezni. Ez is eltérhet a repülőtértől és az átvilágító berendezésektől függően, ezért kövesse a helyszínen kapott utasításokat.",
      ] },
      { h: "Így készüljön fel az ellenőrzésre", blocks: [
        "Az ellenőrzés gördülékenyebb, ha a folyadékokat már otthon az átlátszó tasakba csomagolja, a bébiételt és a gyógyszereket könnyen elérhető helyen tartja, hogy jelezhesse őket, és előre ellenőrzi a repülőtere aktuális szabályait.",
        "A biztonsági ellenőrzés az útlevél-ellenőrzés előtt történik – nézze meg, hogyan működik a [határellenőrzés és az eGate-kapuk](/hu/hatarellenorzes-egates/), és mit vihet be a [brit vámszabályok](/hu/vamszabalyok-britannia/) szerint. Ne feledje, hogy a beutazáshoz érvényes [UK ETA](/hu/hogyan-igenyelheto/) szükséges; az állapotát az [ETA státuszának ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Az általános beutazási szabályokat a [Beutazás az Egyesült Királyságba és vízum](/hu/beutazas-es-vizum/) című útmutató foglalja össze, az átszállásról pedig az [Átszállás és tranzit](/hu/atszallas-tranzit/) című oldalon olvashat.",
      ] },
    ],
    faq: [
      { q: "Mennyi folyadék lehet a kézipoggyászban a brit repülőtereken?", a: "Sok brit repülőtéren gyakran tárolónként 100 ml a korlát, és a tárolóknak egy átlátszó, visszazárható, legfeljebb 1 literes tasakban kell lenniük, személyenként egy tasakban. Néhány repülőtér új CT-szkennereket állított üzembe, és akár 2 litert is engedélyezhet, de ez repülőterenként eltérő. Ezért utazás előtt mindig ellenőrizze az indulási repülőtere aktuális szabályait." },
      { q: "Átvihetek vizet a biztonsági ellenőrzésen?", a: "A biztonsági ellenőrzés után vásárolt vizet és más italokat általában felviheti a gépre. Az ellenőrzés előtt Önnél lévő italokra viszont általában a folyadékokra vonatkozó szabályok érvényesek, és ha a korlátot meghaladják, előfordulhat, hogy ki kell dobni őket. A szabályok repülőterenként eltérhetnek, ezért ellenőrizze, mi vonatkozik az Ön útjára." },
      { q: "Átvihetek tápszert és gyógyszert az ellenőrzésen?", a: "Bébiételt, tápszert és nélkülözhetetlen gyógyszereket bizonyos esetekben a szokásos folyadékkorlátnál nagyobb mennyiségben is vihet magával, ha jelzi őket az ellenőrzést végző személyzetnek. Az engedélyezett mennyiségek és feltételek eltérhetnek, ezért előre tájékozódjon a repülőterénél, és tartsa kéznél az esetleges receptet vagy más dokumentációt." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alkohol-es-dohanyzas",
    group: "travel",
    title: "Alkoholfogyasztás Angliában 18 éves kortól – dohányzási szabályok 2026",
    description: "Angliában 18 éves kortól lehet alkoholt venni vagy pubban inni. 16–17 évesen felnőtt kíséretében étkezéshez sört, bort vagy almabort ihat (de nem vehet).",
    h1: "Alkohol Angliában 18 éves kortól – dohányzás és egyéb szabályok",
    lead: "Angliában alkoholt vásárolni, illetve pubban vagy étteremben alkoholt fogyasztani 18 éves kortól lehet. A 16 és 17 évesek felnőtt kíséretében étkezéshez ihatnak (de nem vásárolhatnak) sört, bort vagy almabort (GOV.UK). Zárt közterületeken tilos a dohányzás.",
    card: "18 éves korhatár, dohányzási tilalom zárt térben, e-cigaretta és ittas vezetés",
    sections: [
      { h: "Hány éves kortól lehet alkoholt inni Angliában? 18 év az alkoholra és a dohányra", blocks: [
        "Az Egyesült Királyságban alkoholt és dohányárut csak 18. életévét betöltött személy vásárolhat. A korhatár üzletekben, bárokban, éttermekben és minden más értékesítési helyen érvényes.",
        "Az üzletek és vendéglátóhelyek személyazonosító okmányt kérhetnek az életkora igazolására, akkor is, ha idősebbnek látszik. Ezért ha alkoholt vagy dohányárut szeretne vásárolni, tartson magánál érvényes személyazonosító okmányt.",
      ] },
      { h: "Dohányzási tilalom zárt közterületeken", blocks: [
        "A 2007-ben hatályba lépett dohányzásmentességi törvény (Smoke-free law) óta minden zárt nyilvános helyen, munkahelyen és a tömegközlekedési eszközökön tilos a dohányzás.",
        "A pubok, éttermek és pályaudvarok belső terei tehát füstmentesek. Dohányozni csak a kijelölt kültéri helyeken szabad.",
        { ul: [
          "Zárt terek: a dohányzás tilos a zárt nyilvános helyeken és a munkahelyeken.",
          "Tömegközlekedés: füstmentes.",
          "Engedélyezett: csak a kijelölt kültéri helyeken.",
        ] },
      ] },
      { h: "E-cigaretta és vaping", blocks: [
        "Az e-cigarettára és a vapingre vonatkozó szabályok helyenként eltérnek. Sok helyen zárt térben nem megengedett, de a gyakorlat helyszínenként és üzemeltetőnként különbözhet. Mindig kövesse a helyszíni táblákat és a személyzet utasításait.",
      ] },
      { h: "Ittas vezetés és alkoholfogyasztás közterületen", blocks: [
        "Az Egyesült Királyságban szigorúan fellépnek az ittas vezetéssel szemben, meghatározott határértékekkel és szankciókkal. Ha autót szeretne vezetni, ismerje meg a szabályokat – ezekről az [Autóvezetés az Egyesült Királyságban](/hu/autovezetes-britanniaban/) című útmutató szól.",
        "Egyes helyi önkormányzatok emellett olyan övezeteket is kijelöltek, ahol korlátozzák a közterületi alkoholfogyasztást. Figyeljen az ilyen korlátozásokat jelző helyi táblákra.",
      ] },
      { h: "Alkohol és dohányáru bevitele", blocks: [
        "Az országba bevihető alkohol és dohányáru mennyiségére külön vámmentes keretek (duty-free) vonatkoznak. Ezeket a [Vámszabályok és vámmentes keretek](/hu/vamszabalyok-britannia/) című útmutató ismerteti részletesen.",
      ] },
    ],
    faq: [
      { q: "Hány éves kortól lehet alkoholt inni Angliában?", a: "Angliában alkoholt vásárolni, illetve pubban vagy étteremben alkoholt fogyasztani 18 éves kortól lehet. A 16 és 17 évesek felnőtt kíséretében étkezéshez ihatnak (de nem vásárolhatnak) sört, bort vagy almabort (GOV.UK)." },
      { q: "Mi a korhatár az alkohol és a dohányáru vásárlására az Egyesült Királyságban?", a: "Az Egyesült Királyságban alkoholt és dohányárut csak 18. életévét betöltött személy vásárolhat. Az üzletek és bárok személyazonosító okmányt kérhetnek az életkora igazolására." },
      { q: "Szabad dohányozni a pubokban és az üzletekben?", a: "Nem. Minden zárt nyilvános helyen, munkahelyen és a tömegközlekedési eszközökön tilos a dohányzás. A pubok, éttermek és pályaudvarok belső terei füstmentesek – dohányozni csak a kijelölt kültéri helyeken szabad." },
      { q: "Használhatok e-cigarettát (vaping)?", a: "Az e-cigarettára és a vapingre vonatkozó szabályok helyenként eltérnek. Zárt térben gyakran nem megengedett. Mindig kövesse a helyszíni táblákat és a személyzet utasításait." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "utazas-gyerekekkel",
    group: "travel",
    title: "Utazás gyerekekkel az Egyesült Királyságba: ETA és útlevél (2026)",
    description: "Mindenkinek, a csecsemőknek is saját ETA és útlevél kell. A Border Force igazolást kérhet a rokoni kapcsolatról – így készüljön fel a gyerekes utazásra.",
    h1: "Utazás gyerekekkel az Egyesült Királyságba",
    lead: "Minden gyermeknek, a csecsemőknek is saját ETA-ra és saját útlevélre van szüksége. A határon a Border Force igazolást kérhet a rokoni kapcsolatról, ezért érdemes a megfelelő dokumentumokat magával vinnie.",
    card: "Saját ETA és útlevél minden gyermeknek, valamint a rokoni kapcsolat igazolása a határon",
    sections: [
      { h: "Minden utasnak saját ETA és saját útlevél kell", blocks: [
        "Minden utasnak, a csecsemőknek is saját ETA-ra és saját útlevélre van szüksége. A gyermek nem utazhat a szülője ETA-jával – a szabály: személyenként egy ETA.",
      ] },
      { h: "A Border Force igazolást kérhet a rokoni kapcsolatról", blocks: [
        "Ha gyerekekkel utazik, a Border Force (a brit határőrség) igazolást kérhet az Önök közötti kapcsolatról – különösen akkor, ha eltérő a vezetéknevük, vagy ha Ön nem a gyermek szülője. Elfogadható igazolás lehet például:",
        { ul: [
          "Születési anyakönyvi kivonat vagy örökbefogadási igazolás.",
          "Házassági anyakönyvi kivonat vagy válási végzés (ha Ön a szülő, de eltérő a vezetékneve).",
          "A szülő hozzájáruló nyilatkozata (consent letter) (ha Ön nem a gyermek szülője).",
        ] },
      ] },
      { h: "Tartsa magánál a dokumentumokat", blocks: [
        "A rokoni kapcsolatot igazoló dokumentumokat a későbbi utazásokon is érdemes magánál tartania. Megkönnyítik a beutazást, ha a határellenőrzésen rákérdeznek.",
      ] },
      { h: "Jó tudni a beutazás előtt", blocks: [
        "Igényeljen [UK ETA-t](/hu/hogyan-igenyelheto/) minden családtag számára, és kövesse a kérelmeket az [ETA státuszának ellenőrzésével](/hu/statusz-ellenorzese/). Az általános beutazási szabályokat a [Beutazás az Egyesült Királyságba és vízum](/hu/beutazas-es-vizum/) című útmutatóban, a bevihető árukra vonatkozó szabályokat pedig a [Vámszabályok és vámmentes keretek](/hu/vamszabalyok-britannia/) című útmutatóban találja. Ha autót bérelne, nézze meg az [Autóvezetés az Egyesült Királyságban](/hu/autovezetes-britanniaban/) című útmutatót is, az átszállásról pedig az [Átszállás és tranzit](/hu/atszallas-tranzit/) című oldalon olvashat.",
      ] },
    ],
    faq: [
      { q: "A gyereknek is kell ETA az Egyesült Királyságba?", a: "Igen. Minden utasnak, a csecsemőknek is saját ETA-ra van szüksége. A gyermek nem utazhat a szülője ETA-jával – a szabály: személyenként egy ETA." },
      { q: "Utazhat a gyermek a szülő útlevelével vagy ETA-jával?", a: "Nem. Életkortól függetlenül minden utasnak saját útlevélre és saját ETA-ra van szüksége. Más személy útlevelével vagy ETA-jával nem lehet beutazni." },
      { q: "Mi a teendő, ha olyan gyermekkel utazom, akinek más a vezetékneve?", a: "A Border Force igazolást kérhet a rokoni kapcsolatról, különösen akkor, ha eltérő a vezetéknevük, vagy ha Ön nem a gyermek szülője. Elfogadható igazolás lehet a születési anyakönyvi kivonat vagy az örökbefogadási igazolás, a házassági anyakönyvi kivonat vagy a válási végzés, illetve a szülő hozzájáruló nyilatkozata (consent letter)." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "londoni-repuloterek",
    group: "travel",
    title: "Anglia 2. legnagyobb repülőtere a Gatwick – London 5 repülőtere",
    description: "Anglia és az Egyesült Királyság 2. legnagyobb repülőtere a londoni Gatwick (42,8 millió utas 2025-ben, CAA) a Heathrow után. London 5 repülőtere röviden.",
    h1: "London 5 legnagyobb repülőtere",
    lead: "Anglia – és az egész Egyesült Királyság – második legnagyobb repülőtere a londoni Gatwick, amelyen 2025-ben 42,8 millió utas fordult meg. A legnagyobb a Heathrow (84,5 millió), a harmadik pedig Manchester (32,1 millió) a brit polgári légiközlekedési hatóság, a CAA adatai szerint.",
    card: "Heathrow, Gatwick, Stansted, Luton és London City, valamint a menetidők a belvárosba",
    sections: [
      { h: "Öt repülőtér, különböző utak a belvárosba", blocks: [
        "Londont öt nagy repülőtér szolgálja ki. A választás befolyásolja, milyen útvonalon, milyen gyorsan és mennyiért jut be a belvárosba. Alább mindegyikről rövid áttekintést talál.",
      ] },
      { h: "LHR – Heathrow (Nyugat-London)", blocks: [
        "Az Egyesült Királyság legnagyobb repülőtere és legfontosabb nemzetközi csomópontja (2–5. terminál).",
        "Eljutás: Heathrow Express kb. 15 perc, Elizabeth Line kb. 30 perc, metró kb. 50 perc. Bővebben: [Heathrow repülőtér (LHR)](/hu/heathrow-repuloter/).",
      ] },
      { h: "LGW – Gatwick (Dél-London)", blocks: [
        "Anglia és az Egyesült Királyság második legnagyobb repülőtere (a Heathrow után); hagyományos és fapados légitársaságok egyaránt használják (északi és déli terminál).",
        "Eljutás: Gatwick Express kb. 30 perc, Thameslink kb. 30–45 perc.",
      ] },
      { h: "STN – Stansted (London északkeleti részén)", blocks: [
        "A Ryanair bázisa, sok európai járattal; egyetlen terminál, könnyen áttekinthető.",
        "Eljutás: Stansted Express kb. 50 perc, busz kb. 60–90 perc.",
      ] },
      { h: "LTN – Luton (Londontól északra)", blocks: [
        "Az easyJet és a Wizz Air bázisa; egyetlen terminál, az állomásra transzferjárat visz.",
        "Eljutás: Luton Airport Express kb. 30 perc, Thameslink kb. 30 perc.",
      ] },
      { h: "LCY – London City (Közép-London, a legközelebbi)", blocks: [
        "A belvároshoz legközelebb eső repülőtér; az üzleti utazók körében népszerű.",
        "Eljutás: DLR kb. 15–25 perc a belvárosba.",
        { note: "A menetidők tájékoztató jellegűek, és függnek a londoni úti céltól, valamint a napszaktól." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  "heathrow": {
    slug: "heathrow-repuloter",
    group: "travel",
    title: "Heathrow (LHR): terminálok, határellenőrzés és eljutás Londonba",
    description: "Útmutató a Heathrow repülőtérhez: 2–5. terminál, határellenőrzés (eGate) és eljutás London belvárosába – Heathrow Express, Elizabeth Line, metró és busz.",
    h1: "Heathrow repülőtér (LHR)",
    lead: "A Heathrow az Egyesült Királyság legnagyobb repülőtere és London legfontosabb belépési pontja. Alább megtalálja a terminálokat, a határellenőrzés menetét és a belvárosba vezető lehetőségeket.",
    card: "2–5. terminál, eGate-kapuk érkezéskor és menetidők London belvárosába",
    sections: [
      { h: "Elhelyezkedés és terminálok", blocks: [
        "A Heathrow (IATA-kód: LHR) Nyugat-Londonban található. Az Egyesült Királyság legnagyobb és legforgalmasabb repülőtere, a világ minden tájáról érkeznek ide járatok. A 2., 3., 4. és 5. terminál üzemel – a terminál számát nézze meg a jegyén, mert az útvonalat és a check-int is befolyásolja.",
      ] },
      { h: "Határellenőrzés érkezés után", blocks: [
        `Leszállás után a határellenőrzésen az automata eGate-kapuknál (biometrikus útlevéllel) vagy a pultnál, határőr előtt halad át. Ne feledje, hogy a beutazáshoz érvényes útlevél és ehhez az útlevélhez kapcsolt, érvényes [UK ETA](/hu/mi-az-eta/) szükséges (legfeljebb ${F.staySixMonths} hónapos tartózkodás esetén). A kapuk használatáról részletesen a [Határellenőrzés és eGate-kapuk](/hu/hatarellenorzes-egates/) című útmutató szól.`,
      ] },
      { h: "Eljutás London belvárosába", blocks: [
        { table: { head: ["Közlekedési eszköz", "Becsült menetidő"], rows: [
          ["Heathrow Express (gyorsvonat)", "kb. 15 perc"],
          ["Elizabeth Line", "kb. 30 perc"],
          ["Metró (Piccadilly line)", "kb. 50 perc"],
          ["Busz / távolsági busz", "kb. 60–90 perc"],
        ] } },
        { note: "A menetidők tájékoztató jellegűek, és függnek a termináltól, a napszaktól és a londoni úti céltól." },
        "Bővebben a londoni repülőterekről: [London 5 legnagyobb repülőtere](/hu/londoni-repuloterek/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
