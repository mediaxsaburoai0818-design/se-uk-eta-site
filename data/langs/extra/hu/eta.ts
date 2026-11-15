import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（hu・eta）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "kinek-kell-eta",
    group: "eta",
    title: "Kinek kell UK ETA? Állampolgárságok és kivételek 2026",
    description: "Kinek kell UK ETA, és ki mentesül alóla: brit és ír állampolgárok, tartózkodási engedéllyel rendelkezők, airside tranzit. Útmutató állampolgárság szerint.",
    h1: "Kinek van szüksége UK ETA-ra?",
    lead: "Az UK ETA-t a vízummentes országok állampolgárainak kell igényelniük rövid tartózkodás esetén (turizmus, üzleti út, rövid tanulmányok). Minden utasnak, a csecsemőknek és a gyermekeknek is, saját ETA-ra van szüksége.",
    card: "Kinek kell ETA-t igényelnie és ki mentesül – magyar utasoknak is",
    sections: [
      { h: "Kire vonatkozik az ETA-kötelezettség", blocks: [
        "Az ETA a vízummentes országok állampolgárainak kötelező, ha rövid időre utaznak az Egyesült Királyságba: turizmus, üzleti út vagy rövid tanulmányok céljából. Magyarország is ezek közé az országok közé tartozik, így a magyar állampolgároknak is ETA-ra van szükségük.",
        { note: "Minden utasnak, a csecsemőknek és a gyermekeknek is, saját ETA-ra van szüksége." },
      ] },
      { h: "Ki mentesül az ETA alól", blocks: [
        { ul: [
          "Brit és ír állampolgárok (brit vagy ír útlevéllel)",
          "Akik engedéllyel élnek, dolgoznak vagy tanulnak az Egyesült Királyságban (pl. vízum, settled/pre-settled status)",
          "British Overseas Territories Citizen vagy British National (Overseas) útlevél birtokosai",
          "Írországban élők, akik Írországból, Guernseyről, Jerseyről vagy a Man-szigetről utaznak",
          "Airside tranzitutasok, akik nem haladnak át a határellenőrzésen",
          "Akik az EU Settlement Scheme keretében benyújtott kérelmük elbírálására várnak",
        ] },
      ] },
      { h: "Jó tudni", blocks: [
        { ul: [
          "Aki brit vagy ír állampolgársággal is rendelkezik, nem kaphat ETA-t: az adott állampolgárság okmányaival utazik.",
          "Ha az Ön állampolgársága nem vízummentes, vízumra lehet szüksége: ellenőrizze a GOV.UK hivatalos eszközével, a [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) oldalon.",
          "A csecsemőknek és a gyermekeknek is saját ETA-ra van szükségük.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-vagy-vizum",
    group: "eta",
    title: "UK ETA vagy vízum: mi a különbség? 2026",
    description: `Az UK ETA és a vízum különbsége: az ETA legfeljebb ${F.staySixMonths} hónapos tartózkodást enged turizmus, üzleti út és rövid tanulmányok céljából – munkát és letelepedést nem.`,
    h1: "UK ETA vagy vízum: a különbség",
    lead: "Az UK ETA nem vízum, hanem utazási engedély a vízummentes országok állampolgárai számára. Nem garantálja a beutazást – arról a határellenőrzés dönt.",
    card: "Mit tehet ETA-val az Egyesült Királyságban, és mikor kell vízum",
    sections: [
      { h: `Mit tehet ETA-val (legfeljebb ${F.staySixMonths} hónapig)`, blocks: [
        { ul: [
          "Turizmus, valamint család és barátok meglátogatása",
          "Üzleti utak (business)",
          "Rövid tanulmányok (short-term study)",
          "Tranzit, amelynek során áthalad a határellenőrzésen",
          "Permitted paid engagement; legfeljebb 3 hónapos tevékenység a Creative Worker concession keretében",
        ] },
      ] },
      { h: "Mit NEM tehet ETA-val", blocks: [
        { ul: [
          `${F.staySixMonths} hónapnál hosszabb tartózkodás`,
          "Fizetett vagy nem fizetett munka brit cégnek vagy önálló vállalkozóként (a fent felsorolt eseteket leszámítva)",
          "Állami támogatások (public funds) igénybevétele",
          "Tényleges letelepedés az Egyesült Királyságban gyakori, ismétlődő látogatásokkal",
          "Házasságkötés vagy élettársi kapcsolat bejegyzése (ehhez Marriage Visitor vízum kell)",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "standard-visitor-visa": {
    slug: "standard-visitor-vizum",
    group: "eta",
    title: "Standard Visitor vízum az Egyesült Királyságba: ha az ETA nem elég",
    description: "Ha UK ETA-kérelmét elutasítják (fellebbezni nem lehet), vagy állampolgársága vízumköteles, Standard Visitor vízum kell. Díjak, ügyintézési idő, igénylés.",
    h1: "Standard Visitor vízum az Egyesült Királyságba: ha az ETA nem elég",
    lead: "Ha UK ETA-kérelmét elutasítják (fellebbezni nem lehet), vagy állampolgársága vízumköteles, Standard Visitor vízumot kell igényelnie ahhoz, hogy az Egyesült Királyságba utazhasson. Az alábbi adatok a GOV.UK szerint.",
    card: "Vízumdíjak (£135-tól), ügyintézési idő és az igénylés lépései",
    sections: [
      { h: "Kinek kell vízum az ETA helyett", blocks: [
        { ul: [
          "Akinek az állampolgársága vízumköteles az Egyesült Királyságba (nem jogosult ETA-ra).",
          "Akinek az ETA-kérelmét elutasították – ETA-val nem utazhat az Egyesült Királyságba, vízum szükséges.",
          "Hogy melyik vízumra van szüksége, a GOV.UK [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) eszközével ellenőrizheti.",
        ] },
      ] },
      { h: "Díjak (GOV.UK)", blocks: [
        { table: { head: ["Vízum", "Díj"], rows: [
          ["Standard Visitor (legfeljebb 6 hónap)", "£135"],
          ["Hosszú távú – 2 év", "£506"],
          ["Hosszú távú – 5 év", "£903"],
          ["Hosszú távú – 10 év", "£1128"],
          ["Tranzitvízum", "£74,50"],
        ] } },
        "A hosszú távú vízum több beutazásra jogosít, de minden egyes tartózkodás legfeljebb 6 hónap lehet. Az összegek a GOV.UK szerint értendők, és változhatnak.",
      ] },
      { h: "Ügyintézési idő, érvényesség és tartózkodás", blocks: [
        { ul: [
          "Döntés: általában 3 héten belül a vízumközpontban tett látogatás után.",
          "Tartózkodás: látogatásonként legfeljebb 6 hónap.",
          "Mikor igényelje: legkorábban 3 hónappal az utazás előtt.",
        ] },
      ] },
      { h: "Az igénylés lépései (GOV.UK)", blocks: [
        { ul: [
          "1. Igényeljen online (a kérelmet elmentheti, és később befejezheti).",
          "2. Foglaljon időpontot egy vízumkérelmi központba.",
          "3. A látogatáskor igazolja személyazonosságát, adja le biometrikus adatait (ujjlenyomat és fénykép), valamint a dokumentumokat.",
          "4. A döntést e-mailben kapja meg; az útlevelét a központban veheti át.",
        ] },
        "Többek között készítse elő:",
        { ul: [
          "Érvényes útlevél (a teljes tartózkodás idejére érvényes)",
          "Az utazás dátumai, a szállás és a becsült költségek",
          "Jelenlegi lakcíme, és hogy mióta lakik ott",
          "Éves jövedelme (ha szükséges) és munkáltatója adatai (ha szükséges)",
          "Esetleges büntetett előélet vagy bevándorlási előzmények",
          "Hiteles fordítás azokról a dokumentumokról, amelyek nem angol vagy walesi nyelvűek",
        ] },
        { note: "Ez egy független tájékoztató oldal, nem hatósági weboldal. Az adatok és a díjak változhatnak – igénylés előtt mindig ellenőrizze a hivatalos információkat a GOV.UK oldalán." },
      ] },
    ],
    faq: [
      { q: "Mikor van szükségem Standard Visitor vízumra az ETA helyett?", a: "Ha az állampolgársága vízumköteles az Egyesült Királyságba, vagy ha az ETA-kérelmét elutasították. Az ETA-döntés ellen nem lehet fellebbezni – az utazáshoz a megfelelő vízumot kell igényelnie." },
      { q: "Mennyibe kerül a Standard Visitor vízum?", a: "A GOV.UK szerint a legfeljebb 6 hónapra szóló vízum £135. Hosszú távú vízumok: £506 (2 év), £903 (5 év), £1128 (10 év). A tranzitvízum £74,50." },
      { q: "Mennyi ideig tart az ügyintézés?", a: "A döntés általában 3 héten belül megszületik a vízumközpontban tett látogatás után." },
      { q: "Mennyi ideig tartózkodhatok az Egyesült Királyságban?", a: "A szokásos tartózkodás látogatásonként legfeljebb 6 hónap." },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
  },

  "expiration": {
    slug: "eta-lejarata",
    group: "eta",
    title: `Mikor jár le az UK ETA, és mikor kell újat igényelni? | 2026`,
    description: `Az UK ETA ${F.validYears} év után vagy az útlevéllel együtt jár le, ha az korábban lejár. Új ETA kell új útlevél, névváltozás vagy a körülmények változása esetén.`,
    h1: "Mikor jár le az UK ETA, és mikor kell újat igényelni",
    lead: `Az UK ETA a kiadástól számítva ${F.validYears} évig érvényes, vagy amíg az útlevél le nem jár – amelyik korábban következik be. Új kérelemre akkor van szükség, ha az engedély lejár, vagy ha új útlevelet kap.`,
    card: "A lejárat szabályai és azok a helyzetek, amikor új ETA kell",
    sections: [
      { h: "Az érvényesség szabályai röviden", blocks: [
        `Az érvényességről részletesen a [Meddig érvényes az UK ETA](/hu/ervenyesseg/) oldalon olvashat. Összefoglalva (GOV.UK):`,
        { ul: [
          `A kiadástól számítva ${F.validYears} évig érvényes`,
          "Az útlevéllel együtt megszűnik (ha az útlevél korábban lejár)",
          "Az érvényesség ideje alatt több beutazásra jogosít az Egyesült Királyságba",
          `Egy-egy tartózkodás legfeljebb ${F.staySixMonths} hónap lehet`,
          "Az ETA egy adott útlevélhez kapcsolódik",
        ] },
      ] },
      { h: "Mikor kell új ETA-t igényelni?", blocks: [
        "Új UK ETA-kérelmet a következő esetekben kell benyújtania:",
        { ul: [
          `Ha az ETA kiadása óta eltelt ${F.validYears} év`,
          "Ha új útlevelet kapott",
          "Ha megváltozott a neve",
          "Ha a körülményei olyan módon változtak, amely érinti az ETA-ra való jogosultságát",
        ] },
      ] },
      { h: "Utazhatok olyan ETA-val, amely hamarosan lejár?", blocks: [
        "Az UK ETA-nak az Egyesült Királyságba érkezéskor kell érvényesnek lennie. Nem szükséges, hogy a teljes tartózkodás alatt érvényes maradjon – az a lényeg, hogy az érkezés napján érvényes legyen. Az új kérelmet ennek ellenére érdemes időben benyújtani.",
      ] },
      { h: "Hogyan ellenőrizhetem a lejárat dátumát?", blocks: [
        "A GOV.UK szerint online ellenőrizheti a gov.uk/eta oldalon (Check your ETA): itt láthatja, van-e ETA-ja, és mikor szűnik meg az érvényessége. Lásd még: [Az UK ETA státuszának ellenőrzése](/hu/statusz-ellenorzese/).",
      ] },
      { h: "Mi történik, ha érvényes ETA mellett útlevelet cserélek?", blocks: [
        `Az ETA egy adott útlevélhez kapcsolódik. Ha új útlevelet kap (például a régi lejárta vagy névváltozás miatt), új ETA-kérelmet kell benyújtania, és a ${F.fee} díjat ismét meg kell fizetnie. A régi ETA érvényét veszti.`,
        { note: `Tipp: az UK ETA-kérelmet érdemes legalább ${F.decisionDays} munkanappal a tervezett utazás előtt benyújtani, hogy legyen idő az elbírálásra.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "gyerekek-es-csalad",
    group: "eta",
    title: "UK ETA gyerekeknek és családoknak: a babának is kell saját? 2026",
    description: "A csecsemőknek és a gyermekeknek is saját UK ETA kell. Más személy nevében is igényelhet az ő útlevele és arcképe segítségével – így az egész családnak.",
    h1: "UK ETA gyerekeknek és családoknak",
    lead: "Minden utasnak, a csecsemőknek és a gyermekeknek is, saját UK ETA-ra van szüksége. A kérelmet más személy nevében is benyújthatja.",
    card: "Minden családtagnak saját ETA kell – így igényelhet mások nevében",
    sections: [
      { h: "Kérelem az egész családnak", blocks: [
        { ul: [
          "Minden utasnak saját ETA kell, a gyermekeknek és a csecsemőknek is",
          "Más személy nevében is igényelhet: az alkalmazásban, ha az illető jelen van, egyébként online (útlevél és arckép szükséges)",
          "A France-UK school trip travel information form nyomtatványon szereplő gyermekeknek nem kell ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "elutasitott-eta",
    group: "eta",
    title: "Elutasították az UK ETA-t? Teendők és lehetőségek 2026",
    description: "Az elutasított UK ETA ellen nem lehet fellebbezni. Ha mégis az Egyesült Királyságba szeretne utazni, vízumot kell igényelnie. A lehetőségek 2026-ban.",
    h1: "Elutasították az UK ETA-t: mi a teendő?",
    lead: "Ha UK ETA-kérelmét elutasítják, ez ellen nem lehet fellebbezni (appeal). Ha ennek ellenére az Egyesült Királyságba szeretne utazni, vízumot kell igényelnie.",
    card: "Az elutasítás ellen nincs fellebbezés – a következő lépés a vízum",
    sections: [
      { h: "Teendők az elutasítás után", blocks: [
        { ul: [
          "Az ETA elutasítása ellen nincs jogorvoslati eljárás",
          "Ha az Egyesült Királyságba szeretne utazni, megfelelő vízumot kell igényelnie",
          "Ellenőrizze a GOV.UK oldalán, melyik vízum felel meg az utazása céljának",
        ] },
      ] },
      { h: "A következő lépés: Standard Visitor vízum", blocks: [
        "Az ETA elutasítása után a vízum az egyetlen út az Egyesült Királyságba. A díjat (£135), az ügyintézési időt és az igénylés menetét a [Standard Visitor vízum az Egyesült Királyságba](/hu/standard-visitor-vizum/) útmutatóban találja.",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (2026. április)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "gyakori-hibak",
    group: "eta",
    title: "Gyakori hibák az UK ETA-kérelemben és a hivatalos alkalmazás 2026",
    description: "Gyakori hibák az UK ETA-kérelemben: az útlevéllel nem egyező adatok, fényképkövetelmények, fizetés és hamis oldalak. Használja a hivatalos UK ETA alkalmazást.",
    h1: "Gyakori hibák és az UK ETA alkalmazás",
    lead: "Sok probléma abból adódik, hogy az adatok nem egyeznek az útlevéllel. Mindig a hivatalos „UK ETA” alkalmazást használja, és beküldés előtt ellenőrizze az adatokat.",
    card: "Útlevéladatok, fényképek, fizetés és csaló oldalak – kerülje el ezeket a hibákat",
    sections: [
      { h: "Elkerülendő hibák", blocks: [
        { ul: [
          "Az adatoknak pontosan egyezniük kell az útlevéllel: az eltérések késedelmet vagy elutasítást okoznak",
          "Szükséges képek: az arc és az útlevél összes oldala, élesen és helyesen",
          `Fizetés (${F.fee}): Apple Pay/Google Pay/kártya (Amex, JCB, Mastercard, Visa); 3D Secure azonosításra lehet szükség`,
          "Biometrikus útlevél (ePassport jelzés) szükséges a chip beolvasásához",
          "Óvakodjon a hatóságokat utánzó, magasabb díjat felszámító hamis oldalaktól: kizárólag a GOV.UK-t használja",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "hivatalos-gov-uk",
    group: "eta",
    title: "Az UK ETA hivatalos GOV.UK-oldala – így ismeri fel a csaló oldalakat",
    description: "Az UK ETA-t kizárólag a GOV.UK-n lehet hivatalosan igényelni. Így ismeri fel a hamis oldalakat, és így kerülheti el a többletdíjat felszámító csalásokat.",
    h1: "Az UK ETA-kérelem hivatalos GOV.UK-oldala",
    lead: "Az UK ETA-kérelmet a brit kormány hivatalos weboldalán vagy a hivatalos mobilalkalmazásban lehet benyújtani.",
    card: "A hivatalos cím, a figyelmeztető jelek és a hivatalos alkalmazás",
    sections: [
      { h: "A hivatalos webcím", blocks: [
        "Az UK ETA hivatalos oldala: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta). A .gov.uk domain a brit kormány hivatalos weboldalát jelöli.",
      ] },
      { h: "Hogyan ismeri fel a hivatalos oldalt?", blocks: [
        { ul: [
          "A webcímben szerepel a gov.uk (a brit kormány domainje)",
          "Az oldalt a Home Office üzemelteti",
          `A díj pontosan ${F.fee}`,
          "Az oldal a GOV.UK jellegzetes fekete-fehér megjelenését használja",
          "Nem kér díjat „gyorsított” ügyintézésért",
        ] },
      ] },
      { h: "Hogyan ismeri fel a hamis oldalt?", blocks: [
        { note: "Figyelmeztető jelek: a webcímben nem szerepel a gov.uk · a díj jóval magasabb " + F.fee + "-nál · „garantált jóváhagyás” ígérete · „gyorsított ügyintézés” ajánlata · agresszív reklámok vagy tolakodó felugró ablakok · hiányzik a GOV.UK logó." },
      ] },
      { h: "A hivatalos mobilalkalmazás", blocks: [
        "Az UK ETA-kérelmet a hivatalos „UK ETA” mobilalkalmazásban is benyújthatja:",
        { ul: [
          "iOS: keressen rá az „UK ETA” névre az App Store-ban (fejlesztő: Home Office)",
          "Android: keressen rá az „UK ETA” névre a Google Playen (fejlesztő: Home Office)",
        ] },
      ] },
      { h: "További hasznos hatósági oldalak", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) – az Egyesült Királyságra vonatkozó vízumkövetelmények ellenőrzése",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) – tudnivalók a turistavízumról",
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
    slug: "uk-eta-alkalmazas",
    group: "eta",
    title: "A hivatalos UK ETA alkalmazás: igénylés telefonról | iOS és Android 2026",
    description: "A hivatalos UK ETA alkalmazással közvetlenül a telefonjáról igényelhet. Így töltheti le, ez kell hozzá (útlevél és arckép), és így zajlik az igénylés.",
    h1: "Az UK ETA mobilalkalmazás",
    lead: "A brit kormány hivatalos „UK ETA” mobilalkalmazást kínál, amellyel a kérelem közvetlenül okostelefonról benyújtható.",
    card: "Letöltés, eszközkövetelmények, NFC-s útlevélbeolvasás és az igénylés lépései",
    sections: [
      { h: "Az UK ETA alkalmazásról", blocks: [
        "Az UK ETA alkalmazás a Home Office hivatalos eszköze az elektronikus utazási engedély igényléséhez. Ez az ajánlott igénylési mód, mert NFC segítségével beolvashatja vele az útlevelét, és az adatok automatikusan kitöltődnek.",
      ] },
      { h: "Elérhetőség", blocks: [
        { ul: [
          "iOS (App Store) – Apple-eszközökre (iPhone). iOS 16 vagy újabb szükséges.",
          "Android (Google Play) – Android-eszközökre. Android 12 vagy újabb, valamint NFC szükséges.",
        ] },
        "Az alkalmazást „UK ETA” néven keresse, fejlesztő: Home Office.",
      ] },
      { h: "Az alkalmazás funkciói", blocks: [
        { ul: [
          "Új UK ETA-kérelem benyújtása",
          "Biometrikus útlevél beolvasása (NFC + OCR)",
          "Arckép (szelfi) készítése az azonosításhoz",
          "Meglévő kérelem státuszának ellenőrzése",
          "Fizetés kártyával, Apple Pay-jel vagy Google Pay-jel",
          "Push-értesítések a státusz változásakor",
        ] },
      ] },
      { h: "Hogyan igényelhet az alkalmazással?", blocks: [
        { ul: [
          "1. Töltse le az „UK ETA” alkalmazást az App Store-ból vagy a Google Playről",
          "2. Hozzon létre fiókot (e-mail-cím és jelszó)",
          "3. Olvassa be a biometrikus útlevelét (tartsa a telefont az útlevélhez)",
          "4. Készítsen arcképet (szelfit)",
          "5. Válaszoljon az űrlap kérdéseire",
          `6. Fizesse be a ${F.fee}-ot`,
          "7. Küldje be a kérelmet, és várja meg a döntést",
        ] },
      ] },
      { h: "Az útlevél beolvasása (NFC)", blocks: [
        "Az alkalmazás NFC-technológiával (Near Field Communication) olvassa ki az adatokat az útlevél biometrikus chipjéből. Az útlevél beolvasása így történik:",
        { ul: [
          "Nyissa ki az útlevelet a fényképes adatoldalnál",
          "Tartsa a telefon hátoldalát a kinyitott útlevélhez",
          "Tartsa mozdulatlanul 5–10 másodpercig",
          "Várja meg, amíg az alkalmazás visszaigazolja, hogy beolvasta az adatokat",
        ] },
      ] },
      { h: "A mobilalkalmazás előnyei", blocks: [
        { ul: [
          "Útlevél-beolvasás NFC-vel – az adatok automatikusan kitöltődnek",
          "Gyorsabb igénylés, mint a weboldalon",
          "Push-értesítések a kérelem státuszáról",
          "Biometrikus védelem (Face ID / Touch ID)",
        ] },
        { note: "Figyelem: győződjön meg róla, hogy a hivatalos alkalmazást tölti le. Az alkalmazásboltban ellenőrizze, hogy a fejlesztő a „Home Office”. A hamis alkalmazások ellophatják a személyes adatait." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "atszallas-tranzit",
    group: "eta",
    title: "Tranzit az Egyesült Királyságon át: kell UK ETA? 2026",
    description: "Kell UK ETA tranzithoz? Igen, ha áthalad a határellenőrzésen (landside); nem, ha útlevél-ellenőrzés nélkül száll át (airside). Így döntheti el az esetét.",
    h1: "Tranzit az Egyesült Királyságon át – kell UK ETA?",
    lead: "Tranzit esetén csak akkor kell UK ETA, ha a továbbutazás előtt áthalad egy brit repülőtér határellenőrzésén (landside). Ha a határellenőrzés érintése nélkül száll át (airside), nincs szükség ETA-ra. Ha bizonytalan, kérdezze meg a légitársaságát.",
    card: "Airside vagy landside: mikor kell ETA a tranzithoz",
    sections: [
      { h: "A tranzit szabályai", blocks: [
        "2025. április 2. óta az uniós polgároknak, köztük a magyaroknak is, UK ETA kell az Egyesült Királyságon átvezető tranzithoz, ha áthaladnak a repülőtéri határellenőrzésen (landside tranzit). Határellenőrzés nélküli tranzithoz (airside tranzit) nem kell ETA. Ha bizonytalan, kérdezze meg a légitársaságát.",
        { ul: [
          "Landside tranzit (áthalad a határellenőrzésen): ETA szükséges",
          "Airside tranzit (nincs útlevél-ellenőrzés): ETA nem szükséges",
          "A hivatalos factsheet szerint a Heathrow-n vagy Manchesteren átutazóknak, akik nem haladnak át a brit útlevél-ellenőrzésen, jelenleg nem kell ETA",
          "A tranzit típusát mindig egyeztesse a légitársaságával",
        ] },
      ] },
      { h: "A tranzit típusai", blocks: [
        { table: { head: ["Típus", "Mi történik", "Kell ETA?"], rows: [
          ["Airside tranzit (a repülőtéren belül)", "Átszállás a repülőtéren a határellenőrzés érintése nélkül. Ha nem biztos benne, hogy áthalad-e a határellenőrzésen, kérdezze meg a légitársaságát.", "Nem"],
          ["Landside tranzit", "A továbbutazás előtt áthalad a határellenőrzésen, például a poggyásza átvétele vagy szállodai éjszaka miatt. Ilyenkor formálisan belép az Egyesült Királyságba.", "Igen"],
        ] } },
        "UK ETA-ra van szüksége, ha áthalad egy brit repülőtér határellenőrzésén, bármilyen rövid is az átszállási idő. Ha a határellenőrzés érintése nélkül száll át (airside), nincs szükség ETA-ra.",
      ] },
      { h: "Kivételek az ETA-kötelezettség alól tranzit esetén", blocks: [
        "A tranzitra vonatkozó ETA-kötelezettség alól csak kevés kivétel van:",
        { ul: [
          "Ír állampolgárok (közös utazási térség, CTA)",
          "Érvényes brit vízummal rendelkezők",
          "Az Egyesült Királyságban tartós tartózkodási joggal rendelkezők (settled/pre-settled status)",
        ] },
      ] },
      { h: "Hogyan kerülheti el az ETA-t tranzitnál?", blocks: [
        "Ha nem szeretne UK ETA-t igényelni, választhat olyan útvonalat, amely nem az Egyesült Királyságon át vezet. Például:",
        { ul: [
          "Közvetlen járat az úti célra",
          "Átszállás egy uniós országban (Amszterdam, Frankfurt, Párizs)",
          "Átszállás Dublinban (Írország – nem kell ETA)",
        ] },
        { note: `Tipp: ha Londonban száll át, igényelje az UK ETA-t legalább ${F.decisionDays} munkanappal az indulás előtt. ETA nélkül megtagadhatják Öntől a beszállást.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (2026. április)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "eta-hirek",
    group: "eta",
    title: `UK ETA hírek 2026: ${F.fee} díj, kötelező alkalmazás és egyéb változások`,
    description: `UK ETA hírek: 2026. április 8-tól ${F.fee} a díj, 2026. február 25. óta teljes körűen kötelező, az uniós polgárokra 2025. április 2. óta vonatkozik.`,
    h1: "Hírek az UK ETA-ról és az Egyesült Királyságba utazásról",
    lead: `A legutóbbi változások röviden: az UK ETA 2026. április 8. óta ${F.fee}-ba kerül, 2026. február 25. óta teljes körűen kötelező, az uniós polgároknak pedig 2025. április 2. óta van rá szükségük. Az adatok a GOV.UK és a Home Office szerint.`,
    card: `A díj ${F.fee}-ra emelkedése, a kötelezővé válás és más aktuális változások`,
    sections: [
      { h: `2026. április 8.: az UK ETA díja ${F.fee}-ra emelkedett`, blocks: [
        `2026. április 8. óta az UK ETA a korábbi £16 helyett ${F.fee}-ba kerül (25%-os emelés). A kérelem benyújtásának napja a döntő.`,
        `A Home Office megerősítette, hogy az UK ETA (Electronic Travel Authorisation) díja £16-ról ${F.fee}-ra emelkedik. Az új ár 2026. április 8-tól érvényes.`,
        `A díj összegét a kérelem benyújtásának napja határozza meg: aki 2026. április 8. előtt nyújtotta be a kérelmét, £16-ot fizetett, a 2026. április 8-án vagy azt követően benyújtott kérelmek díja pedig ${F.fee}.`,
        `Ez újabb emelés a rendszer történetében: az ETA £10-os díjjal indult, majd £16-ra emelkedett, most pedig ${F.fee}. Az engedély továbbra is ${F.validYears} évig érvényes, és több beutazásra jogosít (egy-egy tartózkodás legfeljebb ${F.staySixMonths} hónap).`,
        "Az emelés több mint 50 ország állampolgárait érinti, akiknek UK ETA kell az Egyesült Királyságba utazáshoz.",
        "Forrás: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026. február 25.: az UK ETA teljes körűen kötelező", blocks: [
        "2026. február 25. óta az UK ETA-t teljes körűen alkalmazzák: a légitársaságok nem engedik fel a gépre azt az utast, akinek nincs érvényes engedélye.",
        "Az UK ETA bevezetésének átmeneti időszaka 2026. február 25-én véget ért. Ettől a naptól a követelményt teljes körűen alkalmazzák.",
        "A gyakorlatban ez azt jelenti, hogy a fuvarozók (légitársaságok, kompok, Eurostar) nem engedik fel azokat az utasokat, akiknek ETA-ra van szükségük, de nem rendelkeznek vele. A fuvarozókat bírsággal sújthatják, ha érvényes engedély nélküli utast szállítanak.",
        `Ezért az ETA-t érdemes az utazás előtt beszerezni – legalább ${F.decisionDays} munkanappal korábban, mert a kérelmek egy kis része további ellenőrzést igényelhet.`,
        "Forrás: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2025. április 2.: az uniós polgároknak UK ETA kell", blocks: [
        "2025. április 2. óta az EU, az EGT és Svájc állampolgárainak UK ETA-t kell beszerezniük, mielőtt az Egyesült Királyságba utaznak.",
        "2025. április 2. óta az UK ETA rendszere az Európai Unió, az Európai Gazdasági Térség és Svájc állampolgáraira is kiterjed.",
        "Az ETA turisztikai és üzleti utakhoz, rokonlátogatáshoz, valamint olyan tranzithoz szükséges, amelynek során áthaladnak a határellenőrzésen. Ez a gyermekekre és a csecsemőkre is vonatkozik – mindenki saját kérelmet nyújt be.",
        `Az engedély elektronikusan kapcsolódik a kérelemben megadott útlevélhez, és ${F.validYears} évig több beutazásra jogosít.`,
        "Forrás: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026. április 8.: emelkedtek a brit bevándorlási díjak", blocks: [
        "Az ETA mellett 2026. április 8-tól a Home Office más díjai is emelkedtek – többek között a beutazási vízumok, a letelepedés és az állampolgárság díjai.",
        `A Home Office 2026. április 8-án frissítette hivatalos díjtáblázatát. Az ETA ${F.fee}-ra emelése mellett a legtöbb egyéb bevándorlási és állampolgársági díj is nőtt.`,
        "Ez érinti többek között a látogatói vízumokat (visit visa), a letelepedési díjakat (settlement) és a brit állampolgársági kérelmeket.",
        "Ha hosszabb tartózkodást vagy az ETA-tól eltérő vízumtípust tervez, a kérelem benyújtása előtt ellenőrizze az aktuális díjat a hivatalos GOV.UK-oldalon.",
        "Forrás: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "2026. március 1.: biztonság az Egyesült Királyságban – mire érdemes figyelni", blocks: [
        "Indulás előtt érdemes átnézni az aktuális biztonsági tájékoztatókat, és meggyőződni arról, hogy az útlevele és az ETA-ja érvényes.",
        "Az Egyesült Királyság népszerű és általánosságban biztonságos úti cél, de minden utazás előtt célszerű ellenőrizni a hatóságok aktuális tájékoztatását.",
        "Utazás előtt győződjön meg arról, hogy az útlevele a teljes tartózkodás idejére érvényes, hogy rendelkezik ehhez az útlevélhez kapcsolódó érvényes UK ETA-val, és hogy van utasbiztosítása.",
        "A helyzetről és a fenyegetettségi szintről a hivatalos források – a brit kormány (GOV.UK) és az illetékes diplomáciai képviseletek – közölnek naprakész információt. Vészhelyzetben az Egyesült Királyságban a segélyhívó szám 999.",
        "Forrás: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
