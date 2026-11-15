import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（cs・eta）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "kdo-potrebuje-eta",
    group: "eta",
    title: "Kdo potřebuje UK ETA? Státní příslušnost a výjimky 2026",
    description: "Kdo potřebuje UK ETA a kdo je od povinnosti osvobozen: občané Spojeného království a Irska, držitelé povolení k pobytu a cestující v tranzitu airside.",
    h1: "Kdo potřebuje UK ETA?",
    lead: "UK ETA potřebují občané zemí bez vízové povinnosti při krátkých cestách (turistika, služební cesty, krátkodobé studium). Každý cestující, včetně kojenců a dětí, musí mít vlastní ETA.",
    card: "Kdo musí žádat o ETA a kdo je osvobozen – platí i pro občany Česka",
    sections: [
      { h: "Na koho se povinnost ETA vztahuje", blocks: [
        "ETA potřebují občané zemí bez vízové povinnosti, kteří cestují do Spojeného království na krátkou dobu: za turistikou, služebně nebo na krátkodobé studium. Česko mezi tyto země patří, takže ETA potřebují i čeští občané.",
        { note: "Každý cestující, včetně kojenců a dětí, potřebuje vlastní ETA." },
      ] },
      { h: "Kdo ETA nepotřebuje", blocks: [
        { ul: [
          "Občané Spojeného království a Irska (cestující na britský nebo irský pas)",
          "Osoby s povolením žít, pracovat nebo studovat ve Spojeném království (např. vízum, status settled nebo pre-settled)",
          "Držitelé pasu British Overseas Territories Citizen nebo British National (Overseas)",
          "Osoby s bydlištěm v Irsku, které cestují z Irska, Guernsey, Jersey nebo ostrova Man",
          "Cestující v tranzitu airside, kteří neprocházejí hraniční kontrolou",
          "Osoby, které čekají na rozhodnutí o žádosti v rámci EU Settlement Scheme",
        ] },
      ] },
      { h: "Dobré vědět", blocks: [
        { ul: [
          "Kdo má britské nebo irské občanství, ETA získat nemůže a cestuje na doklady tohoto státu.",
          "Pokud vaše státní příslušnost nepatří mezi země bez vízové povinnosti, můžete potřebovat vízum: ověřte si to oficiálním nástrojem na GOV.UK.",
          "Vlastní ETA potřebují i kojenci a děti.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-nebo-viza",
    group: "eta",
    title: "UK ETA, nebo vízum: jaký je rozdíl? 2026",
    description: `Rozdíl mezi UK ETA a vízem: ETA umožňuje pobyt až ${F.staySixMonths} měsíců za turistikou, služebně a na krátkodobé studium – nikoli práci ani usazení se v zemi.`,
    h1: "UK ETA, nebo vízum: rozdíl",
    lead: "UK ETA není vízum, ale cestovní povolení pro občany zemí bez vízové povinnosti. Vstup do země nezaručuje – o něm rozhoduje pohraniční služba (Border Force).",
    card: "Co s ETA ve Spojeném království smíte a kdy potřebujete vízum",
    sections: [
      { h: `Co s ETA smíte (až ${F.staySixMonths} měsíců)`, blocks: [
        { ul: [
          "Turistika a návštěvy rodiny a přátel",
          "Služební cesty (business)",
          "Krátkodobé studium (short-term study)",
          "Tranzit, při kterém procházíte hraniční kontrolou",
          "Permitted paid engagement; činnost až na 3 měsíce v rámci Creative Worker concession",
        ] },
      ] },
      { h: "Co s ETA nesmíte", blocks: [
        { ul: [
          `Pobývat déle než ${F.staySixMonths} měsíců`,
          "Vykonávat placenou ani neplacenou práci pro britskou firmu nebo jako OSVČ (kromě výjimek uvedených výše)",
          "Pobírat veřejné dávky (public funds)",
          "Fakticky se ve Spojeném království usadit prostřednictvím častých, opakovaných návštěv",
          "Ohlásit nebo uzavřít manželství či registrované partnerství (k tomu je nutné vízum Marriage Visitor)",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "standard-visitor-visa": {
    slug: "standard-visitor-viza",
    group: "eta",
    title: "Vízum Standard Visitor do Spojeného království: když ETA nestačí",
    description: "Pokud vám UK ETA zamítnou (odvolání nelze podat) nebo vaše státní příslušnost vyžaduje vízum, potřebujete vízum Standard Visitor. Ceny, lhůty a postup.",
    h1: "Vízum Standard Visitor do Spojeného království: když ETA nestačí",
    lead: "Pokud vám žádost o UK ETA zamítnou (odvolat se nelze) nebo vaše státní příslušnost vyžaduje vízum, musíte pro cestu do Spojeného království požádat o vízum Standard Visitor. Níže uvádíme údaje podle GOV.UK.",
    card: "Ceny víz (od £135), doba vyřízení a postup podání žádosti",
    sections: [
      { h: "Kdo potřebuje místo ETA vízum", blocks: [
        { ul: [
          "Osoby, jejichž státní příslušnost vyžaduje pro Spojené království vízum (nemají nárok na ETA).",
          "Osoby, kterým byla žádost o ETA zamítnuta – s ETA do Spojeného království cestovat nemohou a potřebují vízum.",
          "Jaké vízum potřebujete, si ověřte nástrojem „Check if you need a UK visa“ na GOV.UK.",
        ] },
      ] },
      { h: "Ceny (GOV.UK)", blocks: [
        { table: { head: ["Vízum", "Cena"], rows: [
          ["Standard Visitor (až 6 měsíců)", "£135"],
          ["Dlouhodobé – 2 roky", "£506"],
          ["Dlouhodobé – 5 let", "£903"],
          ["Dlouhodobé – 10 let", "£1 128"],
          ["Tranzitní vízum", "£74,50"],
        ] } },
        "Dlouhodobé vízum umožňuje opakované vstupy, každý pobyt je však omezen na 6 měsíců. Částky odpovídají údajům na GOV.UK a mohou se změnit.",
      ] },
      { h: "Doba vyřízení, platnost a délka pobytu", blocks: [
        { ul: [
          "Rozhodnutí: obvykle do 3 týdnů od návštěvy vízového centra.",
          "Pobyt: nejvýše 6 měsíců na jednu návštěvu.",
          "Kdy žádat: nejdříve 3 měsíce před cestou.",
        ] },
      ] },
      { h: "Jak požádat (GOV.UK)", blocks: [
        { ul: [
          "1. Podejte žádost online (rozpracovanou žádost můžete uložit a dokončit později).",
          "2. Objednejte se do vízového centra.",
          "3. Na schůzce prokážete svou totožnost, poskytnete biometrické údaje (otisky prstů a fotografii) a předložíte doklady.",
          "4. Rozhodnutí obdržíte e-mailem; pas vám vrátí ve vízovém centru.",
        ] },
        "Připravte si mimo jiné:",
        { ul: [
          "Platný pas (platný po celou dobu pobytu)",
          "Termíny cesty, ubytování a odhadované náklady",
          "Současnou adresu a údaj, jak dlouho na ní bydlíte",
          "Roční příjem (je-li třeba) a údaje o zaměstnavateli (je-li třeba)",
          "Případnou trestní minulost nebo historii v oblasti imigrace",
          "Úředně ověřené překlady dokladů, které nejsou v angličtině nebo velštině",
        ] },
        { note: "Jde o nezávislý informační web, nikoli o stránky úřadu. Údaje a ceny se mohou měnit – před podáním žádosti si vždy ověřte oficiální informace na GOV.UK." },
      ] },
    ],
    faq: [
      { q: "Kdy potřebuji místo ETA vízum Standard Visitor?", a: "Když vaše státní příslušnost vyžaduje pro Spojené království vízum nebo když vám byla žádost o ETA zamítnuta. Proti rozhodnutí o ETA se nelze odvolat – pro cestu je třeba požádat o odpovídající vízum." },
      { q: "Kolik stojí vízum Standard Visitor?", a: "Podle GOV.UK stojí vízum až na 6 měsíců £135. Dlouhodobá víza: £506 (2 roky), £903 (5 let), £1 128 (10 let). Tranzitní vízum stojí £74,50." },
      { q: "Jak dlouho trvá vyřízení?", a: "Rozhodnutí obvykle přijde do 3 týdnů od návštěvy vízového centra." },
      { q: "Jak dlouho mohu ve Spojeném království pobývat?", a: "Běžný pobyt je nejvýše 6 měsíců na jednu návštěvu." },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
  },

  "expiration": {
    slug: "konec-platnosti-eta",
    group: "eta",
    title: `Kdy vyprší UK ETA a kdy požádat o novou? | 2026`,
    description: `UK ETA vyprší po ${F.validYears} letech, nebo spolu s pasem, pokud jeho platnost skončí dříve. O novou ETA je třeba požádat při novém pasu, změně jména či okolností.`,
    h1: "Kdy vyprší UK ETA a kdy je třeba požádat o novou",
    lead: `UK ETA platí ${F.validYears} roky ode dne vydání, nebo do vypršení pasu – podle toho, co nastane dříve. Novou žádost podáváte, když povolení vyprší nebo když dostanete nový pas.`,
    card: "Pravidla platnosti a situace, kdy je třeba požádat o novou ETA",
    sections: [
      { h: "Pravidla platnosti v kostce", blocks: [
        `Platnosti se podrobněji věnuje stránka [Jak dlouho platí UK ETA](/cs/platnost/). Ve zkratce (GOV.UK):`,
        { ul: [
          `Platí ${F.validYears} roky ode dne vydání`,
          "Pozbývá platnosti spolu s pasem (pokud pas vyprší dříve)",
          "Po dobu platnosti umožňuje opakované vstupy do Spojeného království",
          `Jeden pobyt může trvat nejvýše ${F.staySixMonths} měsíců`,
          "ETA je vázána ke konkrétnímu pasu",
        ] },
      ] },
      { h: "Kdy je třeba požádat o novou ETA?", blocks: [
        "Novou žádost o UK ETA musíte podat v těchto situacích:",
        { ul: [
          `Když od vydání ETA uplynuly ${F.validYears} roky`,
          "Když jste dostali nový pas",
          "Když se změní vaše jméno",
          "Když se vaše okolnosti změní tak, že to ovlivní nárok na ETA",
        ] },
      ] },
      { h: "Mohu cestovat s ETA, jejíž platnost brzy končí?", blocks: [
        "UK ETA musí být platná v okamžiku příjezdu do Spojeného království. Nemusí platit po celou dobu pobytu – rozhodující je, že platí v den příjezdu. Přesto je rozumné požádat o novou s dostatečným předstihem.",
      ] },
      { h: "Jak zjistím datum konce platnosti?", blocks: [
        "Podle GOV.UK si je můžete ověřit online na gov.uk/eta (Check your ETA): uvidíte tam, zda ETA máte a kdy pozbude platnosti. Viz také [Ověření stavu UK ETA](/cs/overeni-stavu/).",
      ] },
      { h: "Co když během platnosti ETA změním pas?", blocks: [
        `ETA je vázána ke konkrétnímu pasu. Pokud si pořídíte nový pas (např. po vypršení starého nebo kvůli změně jména), musíte podat novou žádost o ETA a znovu zaplatit poplatek ${F.fee}. Původní ETA pozbývá platnosti.`,
        { note: `Tip: o UK ETA žádejte alespoň ${F.decisionDays} pracovní dny před plánovanou cestou, aby na zpracování žádosti zbyl čas.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "deti-a-rodina",
    group: "eta",
    title: "UK ETA pro děti a rodiny: potřebuje vlastní i kojenec? 2026",
    description: "Vlastní UK ETA potřebují i kojenci a děti. Za jinou osobu můžete požádat pomocí jejího pasu a fotografie obličeje. Jak vyřídit žádosti pro celou rodinu.",
    h1: "UK ETA pro děti a rodiny",
    lead: "Každý cestující, včetně kojenců a dětí, potřebuje vlastní UK ETA. Žádost můžete podat i za jinou osobu.",
    card: "Každý člen rodiny potřebuje vlastní ETA – jak žádat za ostatní",
    sections: [
      { h: "Žádost pro celou rodinu", blocks: [
        { ul: [
          "Každý cestující potřebuje vlastní ETA, včetně dětí a kojenců",
          "Za jinou osobu můžete žádat: v aplikaci, pokud je osoba u vás, jinak online (je třeba její pas a fotografie obličeje)",
          "Děti uvedené ve formuláři France-UK school trip travel information form ETA nepotřebují",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "zamitnute-eta",
    group: "eta",
    title: "UK ETA zamítnuta? Co dělat a jaké máte možnosti 2026",
    description: "Proti zamítnutí UK ETA se nelze odvolat. Chcete-li přesto cestovat do Spojeného království, musíte požádat o vízum. Možnosti po zamítnutí v roce 2026.",
    h1: "UK ETA zamítnuta: co teď?",
    lead: "Pokud vám žádost o UK ETA zamítnou, nelze se proti tomu odvolat (appeal). Chcete-li do Spojeného království přesto cestovat, musíte požádat o vízum.",
    card: "Proti zamítnutí se nelze odvolat – dalším krokem je vízum",
    sections: [
      { h: "Co dělat po zamítnutí", blocks: [
        { ul: [
          "Proti zamítnutí ETA neexistuje opravný prostředek",
          "Pro cestu do Spojeného království musíte požádat o vhodné vízum",
          "Na GOV.UK si ověřte, které vízum odpovídá účelu vaší cesty",
        ] },
      ] },
      { h: "Další krok: vízum Standard Visitor", blocks: [
        "Po zamítnutí ETA je vízum jedinou cestou do Spojeného království. Cenu (£135), dobu vyřízení a postup najdete v průvodci [Vízum Standard Visitor do Spojeného království](/cs/standard-visitor-viza/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (duben 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "caste-chyby",
    group: "eta",
    title: "Časté chyby v žádosti o UK ETA a oficiální aplikace 2026",
    description: "Časté chyby v žádosti o UK ETA: údaje neodpovídají pasu, požadavky na fotografie, platba a podvodné weby. Používejte oficiální aplikaci UK ETA.",
    h1: "Časté chyby a aplikace UK ETA",
    lead: "Mnoho potíží vzniká kvůli údajům, které neodpovídají pasu. Vždy používejte oficiální aplikaci „UK ETA“ a před odesláním údaje zkontrolujte.",
    card: "Údaje z pasu, fotografie, platba a podvodné weby – čemu se vyhnout",
    sections: [
      { h: "Chyby, kterým se vyhnout", blocks: [
        { ul: [
          "Údaje se musí přesně shodovat s pasem: odchylky způsobí zdržení nebo zamítnutí",
          "Požadované fotografie: obličej a všechny stránky pasu, ostré a správně pořízené",
          `Platba (${F.fee}): Apple Pay/Google Pay/karta (Amex, JCB, Mastercard, Visa); může být vyžadováno ověření 3D Secure`,
          "K načtení čipu je nutný biometrický pas (se symbolem ePassport)",
          "Dejte si pozor na podvodné weby, které napodobují úřady a účtují vyšší poplatky: používejte pouze GOV.UK",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "oficialni-gov-uk",
    group: "eta",
    title: "Oficiální stránka UK ETA na GOV.UK – jak poznat podvodné weby",
    description: "Jediným oficiálním místem pro žádost o UK ETA je GOV.UK. Jak rozpoznat podvodné weby a vyhnout se podvodům, při kterých platíte poplatky navíc.",
    h1: "Oficiální stránka GOV.UK pro žádost o UK ETA",
    lead: "O UK ETA lze požádat na oficiálních webových stránkách britské vlády nebo v oficiální mobilní aplikaci.",
    card: "Oficiální adresa, varovné signály a oficiální aplikace",
    sections: [
      { h: "Oficiální webová adresa", blocks: [
        "Oficiální stránka UK ETA: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta). Doména .gov.uk označuje oficiální web britské vlády.",
      ] },
      { h: "Jak poznat oficiální stránku?", blocks: [
        { ul: [
          "Webová adresa obsahuje gov.uk (doména britské vlády)",
          "Web provozuje Home Office",
          `Poplatek činí přesně ${F.fee}`,
          "Web má typický černobílý vzhled GOV.UK",
          "Neúčtuje žádný příplatek za „rychlejší“ vyřízení",
        ] },
      ] },
      { h: "Jak poznat podvodnou stránku?", blocks: [
        { note: "Varovné signály: adresa neobsahuje gov.uk · poplatek výrazně vyšší než " + F.fee + " · slib „zaručeného schválení“ · nabídka „rychlejšího vyřízení“ · agresivní reklama nebo vtíravá vyskakovací okna · chybí logo GOV.UK." },
      ] },
      { h: "Oficiální mobilní aplikace", blocks: [
        "O UK ETA můžete požádat také v oficiální mobilní aplikaci „UK ETA“:",
        { ul: [
          "iOS: vyhledejte „UK ETA“ v App Storu (vydavatel: Home Office)",
          "Android: vyhledejte „UK ETA“ na Google Play (vydavatel: Home Office)",
        ] },
      ] },
      { h: "Další užitečné úřední stránky", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) – ověření, zda do Spojeného království potřebujete vízum",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) – informace o turistickém vízu",
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
    slug: "aplikace-uk-eta",
    group: "eta",
    title: "Oficiální aplikace UK ETA: žádost z mobilu | iOS a Android 2026",
    description: "S oficiální aplikací UK ETA požádáte přímo z telefonu. Jak ji stáhnout, co budete potřebovat (pas a fotografii obličeje) a jak žádost probíhá.",
    h1: "Mobilní aplikace UK ETA",
    lead: "Britská vláda nabízí oficiální mobilní aplikaci „UK ETA“, ve které lze žádost podat přímo z chytrého telefonu.",
    card: "Stažení, požadavky na zařízení, skenování pasu přes NFC a kroky žádosti",
    sections: [
      { h: "O aplikaci UK ETA", blocks: [
        "Aplikace UK ETA je oficiální nástroj Home Office pro žádost o elektronické cestovní povolení. Jde o doporučený způsob podání, protože umožňuje naskenovat pas pomocí NFC a automaticky vyplnit údaje.",
      ] },
      { h: "Dostupnost", blocks: [
        { ul: [
          "iOS (App Store) – pro zařízení Apple (iPhone). Vyžaduje iOS 16 nebo novější.",
          "Android (Google Play) – pro zařízení s Androidem. Vyžaduje Android 12 nebo novější a NFC.",
        ] },
        "Aplikaci vyhledejte pod názvem „UK ETA“, vydavatel: Home Office.",
      ] },
      { h: "Funkce aplikace", blocks: [
        { ul: [
          "Podání nové žádosti o UK ETA",
          "Skenování biometrického pasu (NFC + OCR)",
          "Pořízení fotografie obličeje (selfie) pro ověření totožnosti",
          "Kontrola stavu podané žádosti",
          "Platba kartou, přes Apple Pay nebo Google Pay",
          "Push notifikace při změně stavu",
        ] },
      ] },
      { h: "Jak v aplikaci požádat?", blocks: [
        { ul: [
          "1. Stáhněte si aplikaci „UK ETA“ z App Storu nebo Google Play",
          "2. Vytvořte si účet (e-mailová adresa a heslo)",
          "3. Naskenujte biometrický pas (přiložte telefon k pasu)",
          "4. Pořiďte fotografii obličeje (selfie)",
          "5. Odpovězte na otázky ve formuláři",
          `6. Zaplaťte ${F.fee}`,
          "7. Odešlete žádost a počkejte na rozhodnutí",
        ] },
      ] },
      { h: "Skenování pasu (NFC)", blocks: [
        "Aplikace využívá technologii NFC (Near Field Communication) k načtení údajů z biometrického čipu v pasu. Pas naskenujete takto:",
        { ul: [
          "Otevřete pas na straně s fotografií",
          "Přiložte zadní stranu telefonu k otevřenému pasu",
          "Držte jej v klidu 5–10 sekund",
          "Počkejte, až aplikace potvrdí, že údaje načetla",
        ] },
      ] },
      { h: "Výhody mobilní aplikace", blocks: [
        { ul: [
          "Skenování pasu přes NFC – údaje se vyplní automaticky",
          "Rychlejší podání než na webu",
          "Push notifikace o stavu žádosti",
          "Biometrické zabezpečení (Face ID / Touch ID)",
        ] },
        { note: "Upozornění: ujistěte se, že stahujete oficiální aplikaci. V obchodě s aplikacemi zkontrolujte, že vydavatelem je „Home Office“. Falešné aplikace mohou odcizit osobní údaje." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "transit-pres-britanii",
    group: "eta",
    title: "Tranzit přes Spojené království: potřebujete UK ETA? 2026",
    description: "Potřebujete UK ETA při tranzitu? Ano, pokud procházíte hraniční kontrolou (landside); ne, pokud přestupujete bez pasové kontroly (airside).",
    h1: "Tranzit přes Spojené království – potřebuji UK ETA?",
    lead: "UK ETA potřebujete při tranzitu jen tehdy, pokud před pokračováním cesty projdete hraniční kontrolou na britském letišti (landside). Pokud přestupujete bez průchodu hraniční kontrolou (airside), ETA nepotřebujete. Nejste-li si jisti, obraťte se na svou leteckou společnost.",
    card: "Airside, nebo landside: kdy tranzit vyžaduje ETA",
    sections: [
      { h: "Pravidla pro tranzit", blocks: [
        "Od 2. dubna 2025 potřebují občané EU, včetně občanů Česka, UK ETA pro tranzit přes Spojené království, pokud na letišti procházejí hraniční kontrolou (landside transit). Pro tranzit bez hraniční kontroly (airside transit) ETA potřeba není. Nejste-li si jisti, obraťte se na svou leteckou společnost.",
        { ul: [
          "Tranzit landside (procházíte hraniční kontrolou): ETA je nutná",
          "Tranzit airside (bez pasové kontroly): ETA nutná není",
          "Podle oficiálního factsheetu cestující přes Heathrow nebo Manchester, kteří neprocházejí britskou pasovou kontrolou, ETA v současnosti nepotřebují",
          "Typ tranzitu si vždy ověřte u své letecké společnosti",
        ] },
      ] },
      { h: "Typy tranzitu", blocks: [
        { table: { head: ["Typ", "Co se děje", "Je nutná ETA?"], rows: [
          ["Tranzit airside (na letišti)", "Přestup na letišti bez průchodu hraniční kontrolou. Pokud si nejste jisti, zda budete hraniční kontrolou procházet, zeptejte se své letecké společnosti.", "Ne"],
          ["Tranzit landside", "Před pokračováním cesty procházíte hraniční kontrolou, např. kvůli vyzvednutí zavazadel nebo přenocování v hotelu. Formálně tak vstupujete do Spojeného království.", "Ano"],
        ] } },
        "UK ETA potřebujete, pokud na britském letišti procházíte hraniční kontrolou, a to bez ohledu na délku přestupu. Pokud přestupujete bez průchodu hraniční kontrolou (airside), ETA potřeba není.",
      ] },
      { h: "Výjimky z povinnosti ETA při tranzitu", blocks: [
        "Výjimek z povinnosti mít ETA při tranzitu je jen málo:",
        { ul: [
          "Občané Irska (společný cestovní prostor CTA)",
          "Držitelé platného britského víza",
          "Osoby s trvalým povolením k pobytu ve Spojeném království (status settled nebo pre-settled)",
        ] },
      ] },
      { h: "Jak se ETA při tranzitu vyhnout?", blocks: [
        "Pokud o UK ETA žádat nechcete, můžete zvolit trasu, která nevede přes Spojené království. Například:",
        { ul: [
          "Přímý let do cílové destinace",
          "Přestup v zemi EU (Amsterdam, Frankfurt, Paříž)",
          "Přestup v Dublinu (Irsko – ETA není nutná)",
        ] },
        { note: `Tip: pokud máte let s přestupem v Londýně, požádejte o UK ETA alespoň ${F.decisionDays} pracovní dny před odletem. Bez ETA vás nemusí pustit na palubu.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (duben 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "novinky-eta",
    group: "eta",
    title: `Novinky o UK ETA 2026: poplatek ${F.fee}, plná povinnost a další změny`,
    description: `Nejnovější zprávy o UK ETA: poplatek se 8. 4. 2026 zvýšil na ${F.fee}, od 25. 2. 2026 je ETA plně povinná a občané EU ji potřebují od 2. 4. 2025.`,
    h1: "Novinky o UK ETA a cestování do Spojeného království",
    lead: `Poslední změny ve zkratce: UK ETA stojí od 8. dubna 2026 ${F.fee}, od 25. února 2026 je plně povinná a občané EU ji potřebují od 2. dubna 2025. Údaje podle GOV.UK a Home Office.`,
    card: `Zvýšení poplatku na ${F.fee}, plná povinnost a další aktuální změny`,
    sections: [
      { h: `8. dubna 2026: poplatek za UK ETA se zvýšil na ${F.fee}`, blocks: [
        `Od 8. dubna 2026 stojí UK ETA ${F.fee} místo dosavadních £16 (zvýšení o 25 %). Rozhoduje datum podání žádosti.`,
        `Home Office potvrdil zvýšení poplatku za UK ETA (Electronic Travel Authorisation) z £16 na ${F.fee}. Nová cena platí od 8. dubna 2026.`,
        `Výši poplatku určuje datum podání žádosti: kdo požádal před 8. dubnem 2026, zaplatil £16, zatímco žádosti podané 8. dubna 2026 nebo později stojí ${F.fee}.`,
        `Jde o další zvýšení v historii systému: ETA začínala na poplatku £10, poté se zvýšila na £16 a nyní stojí ${F.fee}. Povolení nadále platí ${F.validYears} roky a umožňuje opakované vstupy (každý pobyt nejvýše ${F.staySixMonths} měsíců).`,
        "Zvýšení se týká občanů více než 50 zemí, kteří pro cestu do Spojeného království potřebují UK ETA.",
        "Zdroj: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25. února 2026: UK ETA je plně povinná", blocks: [
        "Od 25. února 2026 se UK ETA uplatňuje v plném rozsahu: letecké společnosti nepustí na palubu cestujícího bez platného povolení.",
        "Přechodné období zavádění UK ETA skončilo 25. února 2026. Od tohoto data platí povinnost v plném rozsahu.",
        "V praxi to znamená, že dopravci (letecké společnosti, trajekty, Eurostar) nepustí na palubu cestující, kteří ETA potřebují, ale nemají ji. Dopravcům hrozí pokuty, pokud přepraví cestujícího bez platného povolení.",
        `Proto si ETA vyřiďte před cestou – alespoň ${F.decisionDays} pracovní dny předem, protože malá část žádostí může vyžadovat dodatečné prověření.`,
        "Zdroj: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2. dubna 2025: občané EU potřebují UK ETA", blocks: [
        "Od 2. dubna 2025 musí občané EU, EHP a Švýcarska získat před cestou do Spojeného království UK ETA.",
        "Od 2. dubna 2025 se systém UK ETA vztahuje na občany Evropské unie, Evropského hospodářského prostoru a Švýcarska.",
        "ETA je nutná pro turistické a služební cesty, návštěvy příbuzných a tranzit s průchodem hraniční kontrolou. Platí to i pro děti a kojence – každý podává vlastní žádost.",
        `Povolení je elektronicky propojeno s pasem použitým v žádosti a umožňuje opakované vstupy po dobu ${F.validYears} let.`,
        "Zdroj: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8. dubna 2026: britské imigrační poplatky se zvýšily", blocks: [
        "Spolu s ETA se od 8. dubna 2026 zvýšily i další poplatky Home Office – mimo jiné za vstupní víza, usazení a státní občanství.",
        `Home Office 8. dubna 2026 aktualizoval svůj oficiální sazebník poplatků. Kromě zvýšení poplatku za ETA na ${F.fee} vzrostla i většina dalších imigračních poplatků a poplatků za občanství.`,
        "Týká se to mimo jiné návštěvnických víz (visit visa), poplatků za usazení (settlement) a žádostí o britské občanství.",
        "Pokud plánujete delší pobyt nebo jiný typ víza než ETA, ověřte si před podáním žádosti aktuální poplatek na oficiální stránce GOV.UK.",
        "Zdroj: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1. března 2026: bezpečnost na cestě do Spojeného království – na co myslet", blocks: [
        "Před odjezdem je vhodné zkontrolovat aktuální bezpečnostní upozornění a ověřit si, že pas i ETA jsou platné.",
        "Spojené království je oblíbená a obecně bezpečná destinace, před každou cestou je však rozumné zkontrolovat aktuální upozornění úřadů.",
        "Před cestou se ujistěte, že váš pas platí po celou dobu pobytu, že máte platnou UK ETA vázanou k tomuto pasu a že máte cestovní pojištění.",
        "Aktuální informace o situaci a úrovni ohrožení zveřejňují oficiální zdroje – britská vláda (GOV.UK) a příslušné diplomatické mise. V případě nouze ve Spojeném království volejte 999.",
        "Zdroj: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
