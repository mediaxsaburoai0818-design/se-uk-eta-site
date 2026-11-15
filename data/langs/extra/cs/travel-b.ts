import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（cs・travel-b）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。
// チェコは EU 加盟国 → EHIC/GHIC・EU ローミングの記述は fi と同じく読者に当てはまる。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "londynska-doprava-oyster",
    group: "travel",
    title: "Doprava v Londýně: bezkontaktně, nebo Oyster za stejnou cenu (2026)",
    description:
      "V londýnském metru, autobusech a vlacích platíte kartou, mobilem nebo Oyster za stejné jízdné. Platí denní a týdenní strop. Částky ověřte u TfL.",
    h1: "Placení dopravy v Londýně: Oyster a bezkontaktní platba",
    lead: "V londýnském metru, autobusech a vlacích zaplatíte nejsnáze tak, že k čtečce přiložíte bezkontaktní kartu, mobil nebo kartu Oyster. Bezkontaktní platba i Oyster stojí stejně a denní a týdenní cenové stropy omezují, kolik celkem zaplatíte.",
    card: "Bezkontaktní karta, mobil nebo Oyster: stejné jízdné, cenové stropy a přiložení při vstupu i výstupu.",
    sections: [
      { h: "Bezkontaktně, nebo Oyster: jak platit", blocks: [
        "Londýnská veřejná doprava — metro (Tube), autobusy a vlaky — funguje na principu „pay as you go“: ke žluté čtečce přiložíte bezkontaktní platební kartu, mobil s nastavenou platbou nebo kartu Oyster a platíte za každou jízdu zvlášť.",
        "Bezkontaktní platba a Oyster mají stejné jízdné. Pokud už máte bezkontaktní kartu nebo mobil z domova, můžete cestovat za stejnou sazbu, aniž byste si kupovali kartu Oyster. Pro krátkodobé návštěvníky je bezkontaktní platba obvykle nejpohodlnější. Kartu Visitor Oyster si naopak objednáváte ještě před cestou.",
      ] },
      { h: "Cenový strop (capping): výdaje nerostou donekonečna", blocks: [
        "Cenový strop existuje denní i týdenní. Jakmile součet vašich jízd dosáhne stropu, za další jízdy v daném období už neplatíte. Výše stropů závisí na tom, ve kterých zónách cestujete. Částky se v čase mění, proto si aktuální hodnoty ověřte u TfL a nespoléhejte na pevnou částku.",
      ] },
      { h: "Metro a vlaky: přiložit při vstupu i výstupu", blocks: [
        "V metru a ve vlacích kartu přikládáte jak na začátku, tak na konci jízdy — jinak vám může být účtováno nesprávné jízdné. V autobusech a tramvajích (tram) ji přikládáte jen při nástupu; při výstupu to není potřeba.",
        { ul: [
          "Metro / vlak: přiložit na začátku jízdy a znovu na jejím konci.",
          "Autobus / tramvaj: přiložit jen při nástupu.",
        ] },
      ] },
      { h: "Autobusy hotovost nepřijímají", blocks: [
        "Londýnské autobusy hotovost nepřijímají. Zaplatit lze pouze bezkontaktní kartou, mobilem nebo kartou Oyster, proto si před nástupem ověřte, že máte funkční bezkontaktní platební prostředek.",
      ] },
      { h: "Používejte pokaždé stejnou kartu", blocks: [
        "Při každé jízdě přikládejte stejnou kartu nebo stejné zařízení. Jednu bezkontaktní kartu nesdílejte mezi více cestujícími — aby se cenové stropy spočítaly správně, musí každý přikládat vlastní platební prostředek.",
      ] },
      { h: "Než odcestujete do Spojeného království", blocks: [
        "Veřejnou dopravu využijete až na místě — pro samotný vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti můžete sledovat přes [ověření stavu](/cs/overeni-stavu/). Po příletu projdete [hraniční kontrolou a branami eGates](/cs/hranicni-kontrola-egates/). Pokud místo veřejné dopravy plánujete jezdit autem, přečtěte si o [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
    ],
    faq: [
      { q: "Potřebuji v Londýně kartu Oyster?", a: "Ne nutně. Máte-li bezkontaktní platební kartu nebo mobil s nastavenou platbou, můžete hned cestovat za stejnou cenu jako s kartou Oyster. Bezkontaktní platba a Oyster stojí stejně, takže návštěvníkům bezkontaktní karta obvykle stačí." },
      { q: "Lze v londýnském autobusu platit hotově?", a: "Ne. Londýnské autobusy hotovost nepřijímají. Platíte bezkontaktní kartou, mobilem nebo kartou Oyster, kterou při nástupu přiložíte ke čtečce." },
      { q: "Co když během jednoho dne cestuji hodně?", a: "Platí denní a týdenní cenové stropy (capping). Jakmile strop dosáhnete, za další jízdy už neplatíte. Stropy se liší podle zón a v čase se mění — aktuální částky ověřte u Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "rizeni-v-britanii",
    group: "travel",
    title: "Řízení ve Spojeném království s českým průkazem: 12 měsíců, věk 17 (2026)",
    description:
      "Osobní auto smíte ve Spojeném království řídit od 17 let. Návštěvník jezdí s platným domácím řidičským průkazem až 12 měsíců od příjezdu. Jezdí se vlevo.",
    h1: "Smíte ve Spojeném království řídit se zahraničním řidičským průkazem?",
    lead: "Minimální věk pro řízení osobního auta je ve Spojeném království 17 let (GOV.UK). Pokud žijete mimo Spojené království, smíte s platným řidičským průkazem ze své země, například českým, řídit až 12 měsíců od příjezdu. Níže najdete pravidla k délce řízení, mezinárodnímu řidičskému průkazu, jízdě vlevo a pojištění — a vysvětlení, proč ETA není řidičské oprávnění.",
    card: "S domácím průkazem až 12 měsíců, věk 17, jízda vlevo a povinné pojištění.",
    sections: [
      { h: "Pravidlo 12 měsíců: řízení s domácím průkazem", blocks: [
        "Pokud žijete mimo Spojené království, smíte s platným řidičským průkazem ze své země řídit až 12 měsíců ode dne, kdy jste do země přicestovali. Platí to pro:",
        { ul: [
          "Osobní automobily (do 3 500 kg a s nejvýše osmi místy pro cestující).",
          "Motocykly.",
        ] },
        "Řidičský průkaz musí být platný po celou dobu pobytu. Lhůta 12 měsíců se počítá ode dne příjezdu, nikoli ode dne vydání průkazu.",
      ] },
      { h: "Mezinárodní řidičský průkaz (IDP) a překlad", blocks: [
        "Řídit smíte s platným průkazem ze své země. Pokud průkaz není vydán v angličtině, doporučuje se úřední překlad nebo mezinárodní řidičský průkaz (IDP), aby úřady i půjčovny mohly údaje snadno přečíst.",
        "Požadavky se liší podle země, která průkaz vydala. Svou situaci si proto před cestou ověřte na GOV.UK — pravidla se mohou podle domovské země lišit.",
      ] },
      { h: "Jízda vlevo, minimální věk a pojištění", blocks: [
        { ul: [
          "Jízda vlevo: ve Spojeném království se jezdí po levé straně silnice.",
          "Minimální věk: 17 let pro řízení osobního auta.",
          "Platné pojištění vozidla je pro řízení ve Spojeném království povinné.",
        ] },
        "Než usednete za volant, ověřte si, že se vaše pojištění vztahuje i na Spojené království. Pokud si auto půjčujete, pojištění bývá součástí smlouvy — podmínky si pozorně přečtěte.",
      ] },
      { h: "Velká vozidla: autobusy a nákladní auta", blocks: [
        "Pro velká vozidla, jako jsou autobusy a nákladní auta, platí jiná pravidla než pro osobní auta a motocykly. Pokud takové vozidlo plánujete řídit, ověřte si před cestou konkrétní požadavky na GOV.UK.",
      ] },
      { h: "ETA a řidičský průkaz jsou dvě různé věci", blocks: [
        "UK ETA je povolení ke vstupu do Spojeného království — o tom, zda smíte řídit, nerozhoduje. Oprávnění k řízení upravují samostatná pravidla týkající se řidičského průkazu, věku, pojištění a typu vozidla.",
        "Pro samotný vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti zjistíte přes [ověření stavu](/cs/overeni-stavu/). Užitečné je také seznámit se s [celními pravidly a limity dovozu](/cs/celni-pravidla-britanie/) a s tím, jak funguje [hraniční kontrola a brány eGates](/cs/hranicni-kontrola-egates/).",
      ] },
    ],
    faq: [
      { q: "Smím ve Spojeném království řídit s českým řidičským průkazem?", a: "Ano. Návštěvníci, kteří žijí mimo Spojené království, smějí s platným průkazem ze své země řídit osobní auta a motocykly až 12 měsíců ode dne příjezdu." },
      { q: "Potřebuji mezinárodní řidičský průkaz (IDP) nebo překlad?", a: "Řídit smíte s platným průkazem ze své země. Pokud průkaz není v angličtině, doporučuje se úřední překlad nebo mezinárodní řidičský průkaz (IDP). Pravidla se liší podle země — svou situaci si ověřte na gov.uk/driving-nongb-licence." },
      { q: "Od kolika let se v Anglii smí řídit?", a: "Minimální věk pro řízení osobního auta je v Anglii (i ve zbytku Spojeného království) 17 let — v tomto věku může většina lidí začít s výukou. Ve Spojeném království se jezdí vlevo a platné pojištění vozidla je povinné." },
    ],
    sources: [
      { label: "GOV.UK – Řízení ve Velké Británii s průkazem vydaným mimo GB", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "mena-a-hotovost-v-britanii",
    group: "travel",
    title: "Měna ve Spojeném království 2026: libra (GBP), hotovost a spropitné",
    description:
      "V Anglii, Skotsku i Londýně se platí librou šterlinků (GBP, £). Hotovost potřebujete zřídka, karta většinou stačí. Částku od £10 000 výše musíte přihlásit.",
    h1: "Měna v Anglii a Skotsku: libra, hotovost a spropitné",
    lead: "Měnou Anglie, Skotska, Walesu i Severního Irska je libra šterlinků (GBP, £), a to i v roce 2026. Dozvíte se, kolik hotovosti smíte přivézt bez přihlášení, jak nejlépe směnit peníze a co čekat od plateb kartou a spropitného.",
    card: "Libra šterlinků (GBP), karta obvykle stačí; hotovost od £10 000 je třeba přihlásit.",
    sections: [
      { h: "Jaká měna platí v Anglii a Skotsku? Libra šterlinků (GBP, £)", blocks: [
        "Zákonným platidlem Spojeného království je libra šterlinků (GBP, £). Eura ani jiné měny běžné obchody obvykle nepřijímají, takže na místě budete potřebovat buď kartu, nebo hotovost v librách. I ve Skotsku je měnou libra. Tam vydávají vlastní bankovky Bank of Scotland, Clydesdale Bank a The Royal Bank of Scotland, zatímco v Anglii a Walesu vydává bankovky Bank of England (zdroj: Bank of England).",
      ] },
      { h: "Hotovost: od £10 000 povinnost přihlásit", blocks: [
        "Pokud přicestujete do Velké Británie s hotovostí ve výši £10 000 nebo více — včetně ekvivalentu v jiných měnách — musíte ji přihlásit. Přihlásit ji lze předem online nebo po příletu v červeném koridoru. Nesplnění této povinnosti může vést k zabavení celé částky a k pokutě až £5 000.",
      ] },
      { h: "Potřebujete v Londýně a Anglii hotovost? Karta, nebo hotovost", blocks: [
        "Platby kartou, zejména bezkontaktní, jsou ve Spojeném království velmi rozšířené. V mnoha situacích se bez hotovosti obejdete úplně — od veřejné dopravy a kaváren až po větší obchody. Londýnskou veřejnou dopravu (TfL) platíte bezkontaktní kartou nebo kartou Oyster (zdroj: TfL).",
        { ul: [
          "Trocha hotovosti se přesto může hodit v malých obchodech, na trzích a na spropitné.",
          "Před cestou si u své banky ověřte poplatky za platby kartou v zahraničí.",
        ] },
      ] },
      { h: "Kde směnit peníze", blocks: [
        "Peníze lze směnit v bankách, ve směnárnách a na letištích. Počítejte s tím, že směnný kurz na letišti bývá méně výhodný. Než budete měnit větší částky, kurzy porovnejte.",
      ] },
      { h: "Spropitné: zvyk, nikoli povinnost", blocks: [
        "Spropitné je ve Spojeném království zvykem, nikoli zákonnou povinností. Co je obvyklé, záleží na situaci:",
        { ul: [
          "Restaurace: k účtu se někdy připočítává servisní poplatek („service charge“) 10–12,5 % — zkontrolujte rozpis. Pokud servisní poplatek připočten není, běžným vodítkem je zhruba 10 %.",
          "Hospody (pub): když si objednáváte u baru, spropitné se obvykle neočekává.",
          "Taxi: běžné je zaokrouhlit částku nahoru.",
        ] },
      ] },
      { h: "Dobré vědět před příjezdem", blocks: [
        "Hotovost se v případě potřeby přihlašuje na celnici, která následuje po pasové kontrole — podívejte se, jak fungují [celní pravidla a limity dovozu](/cs/celni-pravidla-britanie/). Pro vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti můžete sledovat přes [ověření stavu](/cs/overeni-stavu/). Pokud si plánujete půjčit auto, přečtěte si o [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
    ],
    faq: [
      { q: "Jaká měna se v roce 2026 používá v Anglii a Skotsku?", a: "V celém Spojeném království libra šterlinků (GBP, £). Ve Skotsku vydávají tři banky vlastní bankovky, měna je ale stejná." },
      { q: "Potřebuji v Londýně hotovost?", a: "Většinou ne: platby kartou, zejména bezkontaktní, jsou velmi rozšířené a veřejnou dopravu (TfL) platíte bezkontaktní kartou nebo kartou Oyster. Trocha hotovosti se může hodit v malých obchodech, na trzích a na spropitné." },
      { q: "Od jaké částky musím hotovost při vstupu do Spojeného království přihlásit?", a: "Pokud přicestujete do Velké Británie s hotovostí ve výši £10 000 nebo více (včetně ekvivalentu v jiných měnách), musíte ji přihlásit. Učiníte tak předem online nebo po příletu v červeném koridoru. Nesplnění této povinnosti může vést k zabavení celé částky a k pokutě až £5 000." },
      { q: "Vystačím ve Spojeném království jen s kartou?", a: "Platby kartou, včetně bezkontaktních, jsou velmi rozšířené a přijímají se ve většině situací. Často si vystačíte pouze s kartou. Trocha hotovosti se přesto může hodit v malých obchodech nebo na spropitné." },
      { q: "Je spropitné ve Spojeném království povinné?", a: "Není. Spropitné je zvykem, nikoli zákonnou povinností. V restauracích se k účtu někdy připočítává servisní poplatek („service charge“) 10–12,5 % — zkontrolujte rozpis. Pokud připočten není, běžným vodítkem je zhruba 10 %." },
    ],
    sources: [
      { label: "GOV.UK – Převoz hotovosti do Velké Británie a z ní", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "vraceni-dph-v-britanii",
    group: "travel",
    title: "Vrácení DPH (VAT refund) ve Spojeném království: co platí v roce 2026",
    description:
      "Od 1. 1. 2021 se v Anglii, Skotsku a Walesu DPH ze zboží, které si cestující odváží s sebou, zpravidla nevrací. Zboží zaslané do ciziny může být bez DPH.",
    h1: "Vrácení DPH (VAT refund) z nákupů ve Spojeném království",
    lead: "Rozšířený omyl: od roku 2021 se ve Spojeném království DPH ze zboží, které si cestující odváží domů, zpravidla nevrací. Vysvětlujeme, co skutečně platí, jaká výjimka se týká zboží, které obchod zašle přímo do zahraničí, a proč má Severní Irsko zvláštní režim.",
    card: "Od roku 2021 se DPH ze zboží v zavazadle zpravidla nevrací. Výjimka: zaslání do zahraničí.",
    sections: [
      { h: "To nejdůležitější: od roku 2021 se DPH ze zboží v zavazadle nevrací", blocks: [
        "Právě tento bod bývá často nepochopen. Od 1. ledna 2021 se ve Velké Británii (Anglii, Skotsku a Walesu) DPH zpravidla již nevrací ze zboží, které cestující nakoupí a odvezou domů ve svých zavazadlech.",
        "Tehdy byl zrušen systém vracení DPH při vývozu zboží v maloobchodě (VAT Retail Export Scheme). V praxi tedy DPH ze zboží, které si sami vyvezete ze země, obvykle zpět nedostanete.",
      ] },
      { h: "Výjimka: když obchod zašle zboží přímo do zahraničí", blocks: [
        "Pokud obchod zašle zboží přímo na adresu v zahraničí, může být nákup v některých případech bez DPH. Záleží však na postupech daného obchodu a na platných podmínkách, proto si před nákupem u konkrétního obchodu ověřte, co je možné.",
      ] },
      { h: "Severní Irsko má zvláštní režim", blocks: [
        "V Severním Irsku platí zčásti jiná pravidla. Cestující, kteří nežijí v EU, tam mohou mít v souvislosti se Severoirským protokolem stále nárok na určité vrácení DPH. Podmínky se mohou měnit, proto si ověřte pravidla platná v době vaší cesty.",
      ] },
      { h: "Dobré vědět na letišti", blocks: [
        "I když uvidíte cedule „Tax Free“ nebo bývalé přepážky pro vracení daně, DPH ze zboží, které vezete v zavazadlech, se v Anglii, Skotsku ani Walesu zpravidla nevrací. Na vrácení proto nespoléhejte a v případě nejistoty si ověřte aktuální pravidla.",
      ] },
      { h: "Další čtení před cestou", blocks: [
        "Co dalšího smíte do země dovézt a vyvézt, popisují [celní pravidla](/cs/celni-pravidla-britanie/), a průběh vstupu do země vysvětluje průvodce [hraniční kontrola a brány eGates](/cs/hranicni-kontrola-egates/). Cestujete-li s dětmi, přečtěte si o [cestování s dětmi](/cs/cestovani-s-detmi/). Pro vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/) — stav žádosti zjistíte přes [ověření stavu](/cs/overeni-stavu/).",
      ] },
    ],
    faq: [
      { q: "Lze si ve Spojeném království nechat vrátit DPH (VAT) z nákupů?", a: "Ve Velké Británii (Anglii, Skotsku a Walesu) se DPH ze zboží, které si cestující odvážejí domů v zavazadlech, zpravidla již nevrací. Systém VAT Retail Export Scheme tam byl zrušen 1. ledna 2021. To se liší od dřívější praxe i od pravidel v některých jiných zemích." },
      { q: "Dá se ve Spojeném království nějak nakoupit bez DPH?", a: "Pokud obchod zašle zboží přímo na adresu v zahraničí, může být nákup v některých případech bez DPH. Záleží však na postupech daného obchodu a na platných podmínkách. Ověřte si u konkrétního obchodu, co je možné." },
      { q: "Platí stejná pravidla i v Severním Irsku?", a: "Severní Irsko má zvláštní režim a zčásti jiná pravidla. Cestující, kteří nežijí v EU, tam mohou mít v souvislosti se Severoirským protokolem stále nárok na určité vrácení DPH. Než s vrácením budete počítat, ověřte si aktuální podmínky." },
    ],
    sources: [
      { label: "GOV.UK – Nákupy bez daně (Tax-free shopping)", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "sim-karta-a-data-v-britanii",
    group: "travel",
    title: "SIM karta, eSIM a mobilní data ve Spojeném království (2026)",
    description:
      "Největší mobilní sítě ve Spojeném království jsou EE, O2, Vodafone a Three. Předplacená SIM, eSIM, odblokovaný telefon a roaming po brexitu.",
    h1: "SIM karta, eSIM a mobilní internet ve Spojeném království",
    lead: "Jaké mobilní sítě ve Spojeném království působí, jak si jako návštěvník vybrat mezi předplacenou SIM kartou a eSIM, co vědět o odblokovaném telefonu a roamingu — a kde najdete Wi-Fi zdarma.",
    card: "EE, O2, Vodafone a Three, předplacená SIM nebo eSIM a roaming po brexitu.",
    sections: [
      { h: "Mobilní sítě ve Spojeném království", blocks: [
        "Největší mobilní sítě ve Spojeném království jsou EE, O2, Vodafone a Three. Kromě nich existuje řada virtuálních operátorů (MVNO), kteří využívají stejné sítě, například giffgaff, Lebara a Lyca.",
        { note: "V této oblasti existuje jen málo jednotných oficiálních pravidel a ceny i tarify se často mění. Informace níže berte jako obecné vodítko a aktuální podmínky si ověřte u operátora." },
      ] },
      { h: "Možnosti pro návštěvníky: předplacená SIM, nebo eSIM", blocks: [
        { ul: [
          "Předplacená / turistická SIM karta: k dostání na letištích, v prodejnách mobilních telefonů a v supermarketech.",
          "eSIM: koupíte ji online a hned aktivujete, pokud ji váš telefon podporuje — fyzickou SIM kartu tak nemusíte měnit.",
        ] },
      ] },
      { h: "Odblokovaný telefon je nutností", blocks: [
        "Abyste mohli používat místní SIM kartu nebo eSIM, musí být váš telefon odblokovaný (bez SIM zámku). Ověřte si to u svého současného operátora s dostatečným předstihem před cestou.",
      ] },
      { h: "Roaming po brexitu", blocks: [
        "Návštěvníci ze zemí EU by si měli dát pozor na poplatky za roaming. Po brexitu mohou někteří operátoři roaming ve Spojeném království zpoplatňovat, jiní ne. Podmínky se liší — abyste se vyhnuli nečekaným výdajům, ověřte si je před cestou u svého operátora.",
      ] },
      { h: "Pokrytí a Wi-Fi zdarma", blocks: [
        "Ve městech je pokrytí obecně dobré, na venkově se však může u jednotlivých operátorů lišit. Pokrytí si můžete ověřit na mapě pokrytí regulátora Ofcom.",
        "Wi-Fi zdarma je běžná v kavárnách, ve veřejné dopravě a na mnoha veřejných místech a může vaše mobilní připojení doplnit.",
      ] },
      { h: "Dobré vědět před příjezdem", blocks: [
        "Pro vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti zjistíte přes [ověření stavu](/cs/overeni-stavu/). Pokud si plánujete půjčit auto, přečtěte si o [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
    ],
    faq: [
      { q: "Potřebuji ve Spojeném království místní SIM kartu?", a: "Záleží na vašem současném operátorovi. Místní předplacená SIM nebo eSIM se může hodit, abyste se vyhnuli poplatkům za roaming a měli na místě mobilní data. eSIM koupíte online a hned aktivujete, pokud ji váš telefon podporuje." },
      { q: "Mohu ve Spojeném království používat eSIM?", a: "Ano. Pokud váš telefon eSIM podporuje a je odblokovaný, můžete si eSIM koupit online a aktivovat ji bez výměny fyzické SIM karty. Předem si ověřte, že je zařízení kompatibilní a odblokované." },
      { q: "Mohu ve Spojeném království používat svůj český (EU) tarif jako obvykle?", a: "Po brexitu někteří operátoři roaming ve Spojeném království zpoplatňují, jiní ne. Podmínky se liší podle operátora a tarifu — ověřte si je před cestou u svého operátora." },
    ],
    sources: [
      { label: "Ofcom – britský regulátor v oblasti komunikací", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "zasuvky-a-napeti-v-britanii",
    group: "travel",
    title: "Zásuvky ve Spojeném království a Londýně: typ G, 230 V (2026)",
    description:
      "Zásuvky ve Spojeném království i v Londýně jsou typu G (BS 1363, tři hranaté kolíky), 230 V, 50 Hz. Je-li na nabíječce INPUT 100–240 V, stačí adaptér.",
    h1: "Zásuvky ve Spojeném království a v Londýně",
    lead: "Zásuvky ve Spojeném království, v Londýně stejně jako ve zbytku země, jsou typu G se třemi hranatými kolíky a napětí je 230 V. Jaký cestovní adaptér potřebujete, kdy stačí samotný adaptér a kdy může být nutný měnič napětí, rozhoduje štítek na vašem zařízení.",
    card: "Typ G, 230 V a 50 Hz. Je-li na zařízení 100–240 V, stačí cestovní adaptér.",
    sections: [
      { h: "Jaké zásuvky se ve Spojeném království používají?", blocks: [
        "Zásuvky ve Spojeném království jsou typu G — zástrčka má tři hranaté kolíky. Napětí je 230 V a frekvence 50 Hz. Abyste mohli zapojit zařízení s jiným typem zástrčky, potřebujete cestovní adaptér typu G.",
      ] },
      { h: "Je na nabíječce uvedeno 100–240 V? Pak stačí adaptér", blocks: [
        "Zařízení ze zemí s nižším napětím — například z Japonska (100 V) nebo Severní Ameriky (120 V) — fungují ve Spojeném království, pokud je na jejich štítku INPUT uvedeno „100–240 V“ (tzv. dual voltage). Pak potřebujete jen cestovní adaptér typu G.",
        "Nabíječky telefonů, notebooků a fotoaparátů jsou ve většině případů označeny 100–240 V. I když to tak obvykle bývá, vždy si přečtěte štítek (INPUT) právě na svém zařízení.",
      ] },
      { h: "Kdy může být potřeba měnič napětí?", blocks: [
        "Zařízení, na jejichž štítku INPUT je uvedeno pouze napětí vaší domovské země — často výkonné spotřebiče, například některé fény a žehličky na vlasy — mohou potřebovat měnič napětí (transformátor). Před zapojením čehokoli štítek zkontrolujte; pokud si nejste jisti, nejbezpečnější je nechat zařízení doma.",
      ] },
      { h: "USB zásuvky a praktické tipy", blocks: [
        "Některá ubytování mají USB zásuvky, nejjistější je ale vzít si vlastní cestovní adaptér typu G. Zařízení pak nabijete bez ohledu na to, jak je pokoj vybaven.",
      ] },
      { h: "Kontrolní seznam před cestou", blocks: [
        { ul: [
          "Přečtěte si štítek INPUT na každé nabíječce a zařízení.",
          "Je tam 100–240 V? Pak stačí adaptér typu G.",
          "Je na výkonném spotřebiči jen napětí vaší domovské země? Pak může být potřeba měnič.",
          "Vezměte si vlastní adaptér a nespoléhejte na USB zásuvky na pokoji.",
        ] },
      ] },
      { h: "Než odcestujete do Spojeného království", blocks: [
        "Pro samotný vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti můžete sledovat přes [ověření stavu](/cs/overeni-stavu/). Po příletu projdete [hraniční kontrolou a branami eGates](/cs/hranicni-kontrola-egates/). Pokud plánujete řídit, přečtěte si o [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
      { h: "Oficiální a technické odkazy", blocks: [
        "Britskou normou pro zástrčky a zásuvky 13 A je BS 1363 (typ G; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V a 50 Hz: Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "Bude moje nabíječka ve Spojeném království fungovat?", a: "Pokud je na nabíječce uvedeno INPUT 100–240 V (dual voltage), ve Spojeném království fungovat bude — potřebujete jen cestovní adaptér typu G. Většina nabíječek telefonů, notebooků a fotoaparátů je takto označena. Štítek na zařízení si vždy zkontrolujte." },
      { q: "Potřebuji měnič napětí?", a: "Měnič napětí (transformátor) může být potřeba u výkonných spotřebičů určených jen pro napětí vaší domovské země, například u některých fénů a žehliček na vlasy. Zkontrolujte štítek (INPUT) — je-li na něm jen napětí vaší domovské země, může být měnič nutný." },
      { q: "Jaké zásuvky jsou ve Spojeném království a v Londýně?", a: "Zásuvky ve Spojeném království, v Londýně stejně jako ve zbytku země, jsou typu G se třemi hranatými kolíky (BS 1363, 13 A). Napětí je 230 V a frekvence 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "zdravotni-pece-nhs",
    group: "travel",
    title: "Zdravotní péče, NHS a EHIC/GHIC ve Spojeném království (2026)",
    description:
      "Pohotovost (A&E) a praktický lékař (GP) jsou v NHS zdarma. Co kryje EHIC/GHIC, proč se cestovní pojištění důrazně doporučuje a tísňová čísla 999 a NHS 111.",
    h1: "Zdravotní péče, NHS a EHIC/GHIC ve Spojeném království",
    lead: "Co je v NHS zdarma, jak funguje EHIC/GHIC pro návštěvníky ze zemí EU, EFTA a ze Švýcarska, proč se cestovní pojištění důrazně doporučuje a jaká tísňová čísla použít.",
    card: "Pohotovost a praktický lékař zdarma, EHIC/GHIC, cestovní pojištění a čísla 999 a 111.",
    sections: [
      { h: "Pohotovost a praktický lékař jsou zdarma", blocks: [
        "V NHS je pohotovost (A&E) i návštěva praktického lékaře (GP) zdarma pro každého — bez ohledu na pobytový status nebo na to, zda máte u sebe doklady. Týká se to akutní první pomoci.",
      ] },
      { h: "Návštěvníci ze zemí EU, EFTA a ze Švýcarska: EHIC/GHIC", blocks: [
        "S platným průkazem EHIC/GHIC vydaným v domovské zemi mohou návštěvníci ze zemí EU, EFTA a ze Švýcarska během dočasného pobytu čerpat lékařsky nezbytnou péči. Mějte na paměti, že EHIC/GHIC nehradí všechny náklady a nenahrazuje cestovní pojištění.",
      ] },
      { h: "Návštěvníci bez EHIC/GHIC", blocks: [
        "Návštěvníkům bez EHIC/GHIC může být nemocniční péče nad rámec akutní péče účtována (údajně ve výši 150 % standardního poplatku NHS). Naléhavou péči, která nesnese odklad, však dostanete vždy a platba se řeší dodatečně.",
      ] },
      { h: "Cestovní pojištění se důrazně doporučuje", blocks: [
        "Cestovní pojištění se důrazně doporučuje. EHIC/GHIC nekryje všechno — například převoz domů (repatriace) obvykle zahrnut není. Pojištění je proto důležitým doplňkem a průkaz GHIC je nenahradí.",
      ] },
      { h: "Tísňová čísla a zdravotní poradenství", blocks: [
        { ul: [
          "999 (nebo 112) — tísňové číslo pro naléhavé situace.",
          "NHS 111 — pro zdravotní poradenství v nenaléhavých případech.",
          "Za léky na předpis se může platit poplatek za recept (v Anglii).",
        ] },
      ] },
      { h: "Dobré vědět před příjezdem", blocks: [
        "Pro vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti zjistíte přes [ověření stavu](/cs/overeni-stavu/). Pokud si plánujete půjčit auto, přečtěte si o [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
    ],
    faq: [
      { q: "Je ošetření na pohotovosti ve Spojeném království zdarma?", a: "Pohotovost (A&E) i návštěva praktického lékaře (GP) jsou v NHS zdarma pro každého bez ohledu na pobytový status či doklady. Nemocniční péče nad rámec akutní péče však může být návštěvníkům bez EHIC/GHIC účtována." },
      { q: "Mohu ve Spojeném království použít průkaz EHIC nebo GHIC?", a: "Návštěvníci ze zemí EU, EFTA a ze Švýcarska mohou s platným průkazem EHIC/GHIC vydaným v domovské zemi čerpat během dočasného pobytu lékařsky nezbytnou péči. EHIC/GHIC však nehradí všechny náklady a nenahrazuje cestovní pojištění." },
      { q: "Potřebuji do Spojeného království cestovní pojištění?", a: "Cestovní pojištění se důrazně doporučuje. EHIC/GHIC nekryje všechno — například převoz domů (repatriace) obvykle zahrnut není. Cestovní pojištění je proto důležitým doplňkem a průkaz GHIC je nenahradí." },
    ],
    sources: [
      { label: "NHS – Přístup ke službám NHS při návštěvě ze zahraničí", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Zdravotní péče pro občany EU a EFTA při návštěvě Spojeného království", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "tisnova-cisla-a-bezpecnost",
    group: "travel",
    title: "Tísňová čísla ve Spojeném království: v nouzi 999, zdraví 111 | 2026",
    description:
      "V nouzi volejte 999 (nebo 112) — policie, hasiči a záchranka, zdarma. Číslo 101 pro nenaléhavé záležitosti policie, NHS 111 pro zdravotní poradenství.",
    h1: "Tísňová čísla a bezpečnost ve Spojeném království",
    lead: "To nejdůležitější na úvod: v nouzi volejte 999 (nebo 112). Níže vysvětlujeme rozdíl mezi čísly 999 a 101, linku zdravotního poradenství NHS 111, průběh tísňového volání a několik obecných bezpečnostních tipů pro cestovatele.",
    card: "V nouzi 999 nebo 112, nenaléhavé záležitosti policie 101 a zdravotní poradenství NHS 111.",
    sections: [
      { h: "Tísňová čísla: 999 a 112", blocks: [
        "V nouzi — když potřebujete policii, hasiče nebo záchrannou službu — volejte 999. Volání je zdarma a lze je uskutečnit z jakéhokoli telefonu, i bez pokrytí vašeho vlastního operátora.",
        "Ve Spojeném království funguje i jednotné evropské číslo tísňového volání 112, které vás spojí se stejnou tísňovou službou jako 999. Můžete tedy použít kterékoli z obou čísel.",
        "Při volání se vás zeptají, kterou službu potřebujete — police (policie), fire (hasiči), ambulance (záchranka) nebo coastguard (pobřežní stráž).",
      ] },
      { h: "Nenaléhavé záležitosti: 101 a NHS 111", blocks: [
        "Pokud situace není naléhavá, jsou místo čísla 999 k dispozici samostatná čísla:",
        { ul: [
          "101 — číslo policie pro nenaléhavé záležitosti, například nahlášení drobného trestného činu nebo ztracené věci.",
          "NHS 111 — zdravotní poradenství v nenaléhavých případech. Poradí vám ohledně příznaků a nasměrují vás na odpovídající úroveň péče.",
        ] },
        "Použitím správného čísla pomůžete lince 999 soustředit se na skutečné tísňové situace. Více o fungování britského zdravotnictví najdete v průvodci [zdravotní péče a NHS ve Spojeném království](/cs/zdravotni-pece-nhs/).",
      ] },
      { h: "Jak probíhá tísňové volání", blocks: [
        "Když zavoláte na 999 nebo 112, spojí vás s operátorem, který se zeptá, kterou službu potřebujete a kde se nacházíte. Snažte se co nejjasněji popsat místo a to, co se stalo.",
        "Pokud máte potíže se sluchem nebo s mluvením, existují zvláštní možnosti: můžete poslat SMS na 999 přes předem registrovanou službu emergencySMS, nebo použít tzv. „silent solution“ (po spojení hovoru stisknete 55), pokud nemůžete volně mluvit. Podmínky těchto služeb podrobněji popisují oficiální zdroje.",
      ] },
      { h: "Obecné bezpečnostní tipy pro cestovatele", blocks: [
        "Stejně jako v mnoha jiných destinacích je dobré mít se na pozoru před kapsáři a vytrháváním tašek na turistických místech, ve veřejné dopravě a v přeplněných místech. Několik běžných tipů:",
        { ul: [
          "Cennosti noste blízko těla a tašky nenechávejte bez dozoru.",
          "V davu se neukazujte s telefonem, peněženkou a drahými věcmi.",
          "Ztracené věci nebo drobné trestné činy nahlaste policii na čísle 101 nebo na nejbližší policejní stanici.",
        ] },
        "Rozumné je mít i cestovní pojištění. Pokud plánujete řídit, seznamte se s britskými pravidly silničního provozu v průvodci [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
      { h: "Ztracený pas: kontaktujte velvyslanectví", blocks: [
        "Pokud během cesty ztratíte pas, obraťte se na velvyslanectví nebo konzulát své země, které vám pomohou s náhradním cestovním dokladem. Pokud vám byl pas odcizen, je vhodné krádež nahlásit také policii. Pro vstup do země navíc potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/) — stav žádosti zjistíte přes [ověření stavu](/cs/overeni-stavu/). Co smíte a nesmíte převážet přes hranici, popisuje průvodce [celní pravidla a limity dovozu](/cs/celni-pravidla-britanie/).",
      ] },
    ],
    faq: [
      { q: "Jaké číslo volat ve Spojeném království v nouzi?", a: "V nouzi, kdy potřebujete policii, hasiče nebo záchrannou službu, volejte 999. Číslo 112 funguje stejně a spojí vás se stejnou tísňovou službou. Obě čísla jsou zdarma a lze je volat z jakéhokoli telefonu." },
      { q: "Co dělat, když situace není naléhavá?", a: "V nenaléhavých záležitostech policie volejte 101. Potřebujete-li zdravotní radu v nenaléhavém případě, volejte NHS 111, kde vám poradí ohledně příznaků a nasměrují vás na vhodnou péči." },
      { q: "Jak se chránit před kapsáři?", a: "Cennosti noste blízko těla, v davu se neukazujte s telefonem a peněženkou a buďte ostražití na turistických místech a ve veřejné dopravě. Pokud vám něco ukradnou, můžete kontaktovat policii na čísle 101 nebo zajít na nejbližší policejní stanici." },
    ],
    sources: [
      { label: "GOV.UK – Kdy volat 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Kontakt s policií na čísle 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "statni-svatky-britanie-2026",
    group: "travel",
    title: "Státní svátky (bank holidays) ve Spojeném království 2026",
    description:
      "Bank holidays 2026 v Anglii a Walesu podle GOV.UK: banky zavřené, obchody s kratší otevírací dobou, doprava jezdí méně — o Vánocích je zavřeno téměř vše.",
    h1: "Státní svátky (bank holidays) ve Spojeném království 2026",
    lead: "O státním svátku (bank holiday) jsou banky zavřené, mnoho obchodů má kratší otevírací dobu a veřejná doprava může jezdit méně často. Zde jsou oficiální svátky v Anglii a Walesu v roce 2026 podle GOV.UK — a co znamenají pro vaši cestu.",
    card: "Svátky 2026 v Anglii a Walesu, co je otevřeno a proč se o Vánocích zastaví téměř vše.",
    sections: [
      { h: "Bank holidays v Anglii a Walesu 2026", blocks: [
        "Podle GOV.UK platí v Anglii a Walesu v roce 2026 tyto oficiální bank holidays. Ve Skotsku a Severním Irsku se data zčásti liší.",
        { table: { head: ["Datum", "Svátek"], rows: [
          ["1. ledna", "Nový rok (New Year's Day)"],
          ["3. dubna", "Velký pátek (Good Friday)"],
          ["6. dubna", "Velikonoční pondělí (Easter Monday)"],
          ["4. května", "Early May bank holiday"],
          ["25. května", "Spring bank holiday"],
          ["31. srpna", "Summer bank holiday"],
          ["25. prosince", "Boží hod vánoční (Christmas Day)"],
          ["28. prosince", "Náhradní volno za 2. svátek vánoční (Boxing Day)"],
        ] } },
      ] },
      { h: "Co je otevřeno — a čeho se svátek týká?", blocks: [
        "O státním svátku jsou banky zavřené. Mnoho obchodů a turistických atrakcí má otevřeno, často však s kratší otevírací dobou. Veřejná doprava může jezdit v omezeném režimu, například podle nedělního jízdního řádu.",
        "Otevírací doby a jízdní řády si ověřte předem právě pro den, který plánujete, protože se liší podle místa a provozovatele.",
      ] },
      { h: "Boží hod vánoční: zavřeno je téměř vše", blocks: [
        "Boží hod vánoční (25. prosince) je výjimečný: zavřeno je téměř vše a většina veřejné dopravy nejezdí. Pokud cestujete přes Vánoce, plánujte dny s rezervou a s běžným provozem nepočítejte.",
      ] },
      { h: "Náhradní volno, když svátek připadne na víkend", blocks: [
        "Pokud bank holiday připadne na sobotu nebo neděli, volno se obvykle přesouvá na nejbližší pracovní den (tzv. náhradní volno). Proto některá data ve výše uvedeném přehledu připadají na pracovní den po víkendu.",
      ] },
      { h: "Než odcestujete do Spojeného království", blocks: [
        "Pro samotný vstup do země potřebujete platnou UK ETA, o kterou [požádáte takto](/cs/jak-zadat/), a stav žádosti můžete sledovat přes [ověření stavu](/cs/overeni-stavu/). Po příletu projdete [hraniční kontrolou a branami eGates](/cs/hranicni-kontrola-egates/). Pokud během cesty plánujete řídit, přečtěte si o [řízení ve Spojeném království](/cs/rizeni-v-britanii/).",
      ] },
    ],
    faq: [
      { q: "Kdy jsou ve Spojeném království v roce 2026 bank holidays?", a: "Podle GOV.UK jsou oficiální bank holidays v Anglii a Walesu v roce 2026: 1. ledna (Nový rok), 3. dubna (Velký pátek), 6. dubna (Velikonoční pondělí), 4. května (Early May), 25. května (Spring), 31. srpna (Summer), 25. prosince (Boží hod vánoční) a 28. prosince (náhradní volno za Boxing Day). Ve Skotsku a Severním Irsku se data zčásti liší." },
      { q: "Mají obchody o bank holidays otevřeno?", a: "Banky jsou zavřené. Mnoho obchodů a atrakcí má otevřeno, často však s kratší otevírací dobou. Na Boží hod vánoční (25. prosince) je zavřeno téměř vše." },
      { q: "Jak svátky ovlivňují veřejnou dopravu?", a: "Veřejná doprava může jezdit v omezeném režimu, například podle nedělního jízdního řádu. Na Boží hod vánoční většina spojů nejezdí, proto si cestovní dny naplánujte s rezervou." },
    ],
    sources: [
      { label: "GOV.UK – Státní svátky ve Spojeném království (UK bank holidays)", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
