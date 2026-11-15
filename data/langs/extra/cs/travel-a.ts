import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（cs・travel-a）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "vstup-do-britanie-a-viza",
    group: "travel",
    hub: true,
    title: "Vstup do Spojeného království a víza: průvodce 2026",
    description: `Pravidla vstupu do Británie: UK ETA na pobyt do ${F.staySixMonths} měsíců, kdy potřebujete vízum, hraniční kontrola (eGate), doklady a cestování s dětmi.`,
    h1: "Vstup do Spojeného království a víza",
    lead: `Na turistiku, služební cestu, návštěvu příbuzných nebo tranzit v délce až ${F.staySixMonths} měsíců občané EU vízum nepotřebují — stačí UK ETA. V tomto průvodci zjistíte, kdy je vízum nutné, jak probíhá hraniční kontrola a které doklady si připravit.`,
    card: "ETA, nebo vízum, hraniční kontrola, doklady a děti — základy vstupu do země",
    sections: [
      { h: `ETA, nebo vízum? Pobyt do ${F.staySixMonths} měsíců`, blocks: [
        `Na turistiku, služební cestu, návštěvu příbuzných nebo tranzit občané EU vízum nepotřebují, pokud pobyt nepřesáhne ${F.staySixMonths} měsíců — stačí UK ETA (Electronic Travel Authorisation). Žádost se podává online a většina žadatelů dostane automatické rozhodnutí během několika minut. Přesto žádejte nejpozději ${F.decisionDays} pracovní dny před cestou, protože některé žádosti mohou vyžadovat dodatečné posouzení.`,
        `ETA stojí ${F.fee}, platí ${F.validYears} roky a umožňuje opakované vstupy. Více se dočtete v průvodci [Co je UK ETA](/cs/co-je-eta/).`,
      ] },
      { h: "Kdy potřebujete vízum", blocks: [
        `Britské vízum je nutné při pobytu delším než ${F.staySixMonths} měsíců a také pro dlouhodobé studium, práci nebo usazení se v zemi. Nejčastější typy víz jsou:`,
        { ul: [
          "Studentské vízum — dlouhodobé studium (obvykle 2–5 let podle studijního programu).",
          "Pracovní vízum — práce ve Spojeném království; typ závisí na pracovní nabídce a vaší kvalifikaci.",
          "Rodinné vízum — přestěhování za členem rodiny, který ve Spojeném království žije.",
          "Youth Mobility Scheme — pro mladé lidi z vybraných zemí (pobyt až 2 roky).",
        ] },
      ] },
      { h: "Hraniční kontrola: eGate, nebo přepážka", blocks: [
        "Na britských letištích probíhá hraniční kontrola buď u automatických bran eGate (s biometrickým pasem), nebo u přepážky s pracovníkem pohraniční služby. eGate pasovou kontrolu urychlí; pokud vyvstanou otázky k účelu cesty, může s vámi chtít mluvit úředník. Kdo smí automatické brány používat a jak průchod probíhá krok za krokem, popisuje průvodce [Hraniční kontrola a eGates](/cs/hranicni-kontrola-egates/).",
        "Po pasové kontrole následuje celní kontrola — jaké potraviny a zboží smíte dovézt, se dozvíte v průvodci [Celní pravidla a limity dovozu](/cs/celni-pravidla-britanie/).",
      ] },
      { h: "Potřebné doklady", blocks: [
        { ul: [
          "Cestovní pas platný po celou dobu pobytu (občanský průkaz se od října 2021 nepřijímá).",
          "UK ETA propojená s tímto pasem (případně odpovídající vízum při delším pobytu).",
          "Podpůrné doklady: může být ověřeno potvrzení ubytování, zpáteční letenka a dostatek prostředků na pobyt.",
        ] },
      ] },
      { h: "Cestování s dětmi (mladšími 18 let)", blocks: [
        "Každý musí mít vlastní UK ETA bez ohledu na věk — včetně kojenců a dětí. Pokud dítě cestuje bez jednoho nebo bez obou rodičů, může být požádáno o doklad, že zákonný zástupce s cestou souhlasí. Doporučujeme vzít s sebou rodný list nebo písemný souhlas (v angličtině). Více v průvodci [Cestování s dětmi do Spojeného království](/cs/cestovani-s-detmi/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "pozadavky-na-pas",
    group: "travel",
    title: "Požadavky na pas do Británie 2026: platnost po celý pobyt",
    description: "Češi i další občané EU potřebují do Británie pas platný po celou dobu pobytu. Občanský průkaz stačí jen výjimečně, např. se statusem settled.",
    h1: "Požadavky na pas do Spojeného království: platnost a ETA",
    lead: `Jako občan Česka nebo jiného státu EU potřebujete do Anglie a do celého Spojeného království pas platný po celou dobu pobytu. Občanský průkaz stačí jen v určitých případech, například pokud máte status settled nebo pre-settled. Pas je navíc propojen s vaší ETA (${F.fee}).`,
    card: "Platnost pasu, propojení pasu s ETA a vlastní pasy pro děti",
    sections: [
      { h: "Pas musí platit po celou dobu pobytu", blocks: [
        "Na cestu do Spojeného království potřebujete platný cestovní pas, který by měl zpravidla platit po celou dobu vašeho pobytu.",
        "U mnoha státních příslušností se obvykle nevyžaduje delší platnost, například že by pas musel platit ještě šest měsíců po vstupu do země. Požadavky se však mohou podle státní příslušnosti lišit, proto si před cestou ověřte na GOV.UK, co platí pro vaši zemi.",
      ] },
      { h: "ETA je propojena s pasem", blocks: [
        "ETA se propojí s pasem, který jste uvedli v žádosti, a cestujete se stejným pasem, jaký jste v žádosti zadali.",
        "Pokud si pas obnovíte nebo vyměníte, budete obvykle muset požádat o novou ETA k novému pasu. Platnost pasu si proto zkontrolujte v dostatečném předstihu, ještě než o ETA požádáte.",
      ] },
      { h: "Každý cestující potřebuje vlastní pas — i kojenec", blocks: [
        "Každý cestující, včetně kojenců a dětí, zpravidla potřebuje na cestu do Spojeného království vlastní pas a navíc vlastní ETA. Více v průvodci [Cestování s dětmi do Spojeného království](/cs/cestovani-s-detmi/). Vyřízení pasu pro dítě může nějakou dobu trvat, začněte proto včas.",
      ] },
      { h: "Více pasů nebo dvojí občanství", blocks: [
        "Máte-li dvojí občanství nebo více pasů, vstupujete do země zpravidla s tím pasem, se kterým je ETA propojena. Ujistěte se tedy, že je ETA vázána na pas, se kterým skutečně pocestujete.",
      ] },
      { h: "Další kroky před cestou", blocks: [
        "Jakmile máte pas v pořádku, můžete [požádat o UK ETA](/cs/jak-zadat/) a sledovat žádost pomocí [ověření stavu ETA](/cs/overeni-stavu/). Po příletu projdete [hraniční kontrolou a branami eGate](/cs/hranicni-kontrola-egates/) a co smíte dovézt, popisují [britská celní pravidla](/cs/celni-pravidla-britanie/). Obecná pravidla vstupu najdete v průvodci [Vstup do Spojeného království a víza](/cs/vstup-do-britanie-a-viza/); mezipřistáním se věnuje samostatný průvodce o tranzitu přes Británii.",
      ] },
    ],
    faq: [
      { q: "Jak dlouho musí pas platit při cestě do Spojeného království?", a: "Na cestu do Spojeného království obvykle potřebujete pas platný po celou dobu pobytu. U mnoha státních příslušností se zpravidla nevyžaduje delší platnost, například šest měsíců po vstupu, požadavky se však mohou lišit. Před cestou si proto na GOV.UK ověřte, co platí pro vaši zemi." },
      { q: "S kterým pasem je ETA propojena?", a: "ETA se propojí s pasem, který jste použili v žádosti, a cestujete se stejným pasem. Pokud si pas obnovíte nebo vyměníte, budete obvykle muset požádat o novou ETA k novému pasu. Máte-li dvojí občanství a více pasů, vstupujete s tím pasem, se kterým je ETA propojena." },
      { q: "Potřebuje dítě do Spojeného království vlastní pas?", a: "Všichni cestující, včetně kojenců, zpravidla potřebují na cestu do Spojeného království vlastní pas. Každý cestující navíc potřebuje vlastní ETA. Požadavky si ověřte včas, protože vyřízení pasu pro dítě může nějakou dobu trvat." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "hranicni-kontrola-egates",
    group: "travel",
    title: "Hraniční kontrola v Británii: eGates na londýnských letištích (2026)",
    description: "S pasem EU a platnou UK ETA můžete projít branami eGate – bez otázek a bez razítka. Od 8. 7. 2026 i děti od 8 let. Kdo je smí používat a jak fungují.",
    h1: "Hraniční kontrola ve Spojeném království a eGates",
    lead: "S českým pasem a platnou UK ETA můžete používat automatické brány eGate: žádné otázky a žádné razítko do pasu. Od 8. 7. 2026 je smějí používat i děti od 8 let.",
    card: "Kdo smí používat brány eGate, jak fungují a na co se ptají na hranici",
    sections: [
      { h: "Novinka od 8. 7. 2026: eGates od 8 let", blocks: [
        "Od 8. 7. 2026 smějí brány eGate používat děti od 8 let — dříve byla věková hranice 10 let. Platí dvě podmínky: dítě musí měřit alespoň 120 cm a děti ve věku 8–17 let musí cestovat v doprovodu dospělého.",
        "Pro mnoho rodin to znamená, že nyní může celá skupina projít automatickými branami bez čekání ve frontě k přepážce pohraniční služby.",
      ] },
      { h: "Kdo smí používat brány eGate", blocks: [
        "Brány eGate jsou otevřeny držitelům pasů těchto zemí:",
        { ul: [
          "všechny státy EU (včetně Česka)",
          "Island, Lichtenštejnsko, Norsko a Švýcarsko",
          "Austrálie, Kanada, Japonsko, Nový Zéland, Singapur, Jižní Korea a Spojené státy",
        ] },
        "Podmínkou je platné povolení k cestě — pro české cestující to v praxi znamená platnou UK ETA (nebo eVisa). Pokud povolení ještě nemáte, podívejte se, [jak o UK ETA požádat](/cs/jak-zadat/).",
        "Na 15 letištích a železničních terminálech ve Spojeném království je více než 290 bran eGate — mimo jiné na [londýnských letištích](/cs/londynska-letiste/), například na Heathrow.",
      ] },
      { h: "Jak eGate funguje: bez otázek, bez razítka", blocks: [
        { ul: [
          "Položte otevřenou stranu biometrického pasu s fotografií na čtečku.",
          "Podívejte se do kamery — systém porovná váš obličej s fotografií v pasu.",
          "Brána se otevře a projdete — bez rozhovoru s úředníkem a bez vstupního razítka do pasu.",
        ] },
        "Pokud vás brána nerozpozná (například kvůli opotřebovanému pasu), budete jednoduše odkázáni k přepážce pohraniční služby.",
      ] },
      { h: "Kontrola u přepážky: 5 možných otázek", blocks: [
        "Pokud projdete kontrolou u úředníka pohraniční služby, můžete být dotázáni na:",
        { ul: [
          "Účel cesty — turistika, služební cesta, návštěva příbuzných.",
          "Délku pobytu — kolik dní v zemi strávíte.",
          "Ubytování — adresu hotelu nebo hostitele.",
          "Zpáteční cestu — datum návratu a rezervaci.",
          "Finanční prostředky — dostatek peněz na pobyt.",
        ] },
      ] },
      { h: "Potřebné doklady", blocks: [
        { ul: [
          "Biometrický pas platný po celou dobu pobytu.",
          "Platná UK ETA — je s pasem propojena elektronicky a nemusíte ji tisknout; potvrzovací zprávu si přesto uschovejte.",
        ] },
        "Pokud si žádostí nejste jisti, podívejte se, [jak ověřit stav žádosti o ETA](/cs/overeni-stavu/). Pro mezipřistání ve Spojeném království platí zvláštní pravidla — popisuje je průvodce o tranzitu přes Británii.",
      ] },
      { h: "Rodiny s dětmi: jak postupovat", blocks: [
        { ul: [
          "Děti od 8 let (a s výškou alespoň 120 cm) používají brány eGate; děti ve věku 8–17 let vždy v doprovodu dospělého.",
          "Děti mladší 8 let procházejí s rodiči přes přepážku pohraniční služby.",
          "Každé dítě — i kojenec — potřebuje vlastní UK ETA.",
          "Obecná pravidla vstupu najdete v průvodci [Vstup do Spojeného království a víza](/cs/vstup-do-britanie-a-viza/).",
        ] },
      ] },
      { h: "Po pasové kontrole: clo", blocks: [
        "Po pasové kontrole následuje celní kontrola — mějte na paměti, že dovoz masa a mléčných výrobků z EU do Spojeného království je zakázán. Více v průvodci [Celní pravidla a limity dovozu](/cs/celni-pravidla-britanie/).",
      ] },
    ],
    faq: [
      { q: "Mohu s českým pasem používat brány eGate?", a: "Ano. Brány eGate jsou otevřeny držitelům pasů všech států EU (a také Islandu, Lichtenštejnska, Norska a Švýcarska, Austrálie, Kanady, Japonska, Nového Zélandu, Singapuru, Jižní Koreje a Spojených států), pokud máte platné povolení k cestě, například UK ETA nebo eVisa." },
      { q: "Od kolika let smí dítě používat brány eGate?", a: "Od 8. 7. 2026 smějí brány eGate používat děti od 8 let (dříve byla hranice 10 let). Dítě musí měřit alespoň 120 cm a děti ve věku 8–17 let musí cestovat v doprovodu dospělého." },
      { q: "Dostanu při průchodu branou eGate razítko do pasu?", a: "Ne. U brány eGate vám úředník nepokládá otázky a do pasu se nedává vstupní razítko. UK ETA je s vaším pasem propojena elektronicky." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "celni-pravidla-britanie",
    group: "travel",
    title: "Co smíte dovézt do Británie? Celní pravidla a limity (2026)",
    description: "Do Británie smíte bez cla dovézt 4 l lihovin, 18 l vína a 42 l piva. Maso a mléčné výrobky z EU jsou zakázány. Hotovost od £10 000 je nutné přihlásit.",
    h1: "Co smíte dovézt do Spojeného království? Britské clo",
    lead: "Nejdůležitější pravidlo: z EU se do Spojeného království nesmí dovážet maso ani mléčné výrobky. Na této stránce najdete povolené potraviny, výjimku pro dětskou výživu, bezcelní limity pro alkohol a tabák a také to, kdy je nutné přihlásit hotovost.",
    card: "Zákaz masa a mléčných výrobků, limity pro alkohol a tabák a přihlášení hotovosti",
    sections: [
      { h: "Pravidlo č. 1: žádné maso ani mléčné výrobky z EU", blocks: [
        "Dovoz masa a mléčných výrobků z EU do Velké Británie (Anglie, Skotsko, Wales) je zakázán. Zákaz se týká:",
        { ul: [
          "Mléčných výrobků: sýr, mléko, máslo, jogurt.",
          "Masa: vepřové, hovězí, jehněčí, kozí a zvěřina a výrobky z nich — včetně salámu, klobás, šunky a sendvičů s masem nebo sýrem.",
        ] },
        "Pravidlo platí i pro malá množství v příručním zavazadle — sendvič se šunkou koupený na letišti musíte před kontrolou sníst nebo vyhodit.",
      ] },
      { h: "Výjimka: dětská výživa (do 2 kg)", blocks: [
        "Kojenecké mléko, dětská výživa a speciální potraviny pro lékařské účely jsou povoleny do 2 kg na osobu, pokud jsou v neotevřeném originálním obalu výrobce a před použitím nevyžadují uchovávání v chladu.",
      ] },
      { h: "Potraviny, které můžete dovézt bez problémů", blocks: [
        { ul: [
          "Chléb (ale ne sendviče s masem nebo mléčnými výrobky).",
          "Koláče bez čerstvé smetany, sušenky a čokoláda.",
          "Těstoviny a balené polévky.",
          "Ryby, vejce a med — povoleny pro vlastní potřebu.",
        ] },
        "Pokud si nejste jisti, ověřte si konkrétní výrobek před odjezdem na GOV.UK — pravidla se liší podle skupiny potravin.",
      ] },
      { h: "Alkohol a tabák: bezcelní limity při příjezdu do Británie", blocks: [
        { table: { head: ["Kategorie", "Bez cla"], rows: [
          ["Pivo", "42 litrů"],
          ["Tiché víno (nešumivé)", "18 litrů"],
          ["Lihoviny (nad 22 %)", "4 litry nebo 9 litrů nápojů do 22 %"],
          ["Cigarety", "200 ks (nebo 50 doutníků nebo 250 g tabáku)"],
          ["Ostatní zboží (dárky, suvenýry)", "do £390 (£270, pokud přilétáte soukromým letadlem nebo připlouváte soukromou lodí)"],
        ] } },
        "Množství nad limit musíte přihlásit u celní správy a zaplatit příslušné poplatky. Jde o britské limity při příjezdu do země. Při návratu domů platí celní pravidla vaší domovské země.",
      ] },
      { h: "Hotovost: povinnost přihlásit od £10 000", blocks: [
        "Pokud u sebe máte £10 000 nebo více v hotovosti (včetně odpovídající částky v jiných měnách), musíte ji přihlásit — online před cestou nebo při příjezdu v červeném pruhu. Nepřihlášení může vést ke konfiskaci celé částky a pokutě až £5 000.",
      ] },
      { h: "Sankce a průběh kontroly", blocks: [
        "Zakázané potraviny mohou být na hranici zabaveny, a pokud bez přihlášení překročíte limity pro alkohol a tabák, může být zboží zadrženo a mohou vám být uloženy sankce. Máte-li co přihlásit, nejbezpečnější je použít červený pruh.",
        "Celní kontrola následuje po pasové kontrole — podívejte se, jak funguje [hraniční kontrola a brány eGate](/cs/hranicni-kontrola-egates/). Nezapomeňte, že ke vstupu potřebujete platnou [UK ETA](/cs/jak-zadat/); stav žádosti zjistíte pomocí [ověření stavu ETA](/cs/overeni-stavu/). Obecná pravidla vstupu najdete v průvodci [Vstup do Spojeného království a víza](/cs/vstup-do-britanie-a-viza/) a mezipřistáním se věnuje průvodce o tranzitu přes Británii.",
      ] },
    ],
    faq: [
      { q: "Smím do Anglie dovézt sýr nebo masné výrobky z Česka či jiné země EU?", a: "Ne. Z EU je zakázáno dovážet do Velké Británie maso (vepřové, hovězí, jehněčí, kozí, zvěřinu) a masné výrobky ani mléčné výrobky (sýr, mléko, máslo, jogurt). Výrobky mohou být na hranici zabaveny." },
      { q: "Kolik cigaret a alkoholu smím do Británie dovézt bez cla?", a: "200 cigaret (nebo 50 doutníků nebo 250 g tabáku), 42 litrů piva, 18 litrů tichého vína a 4 litry lihovin nad 22 % nebo 9 litrů alkoholických nápojů do 22 %." },
      { q: "Musím při příjezdu do Británie přihlásit hotovost?", a: "Ano, pokud u sebe máte £10 000 nebo více. Přihlášení provedete online předem nebo při příjezdu v červeném pruhu. Nepřihlášení může vést ke konfiskaci celé částky a pokutě až £5 000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "leky-do-britanie",
    group: "travel",
    title: "Léky s sebou do Británie: pravidla a potvrzení (2026)",
    description: "Vlastní léky smíte do Británie dovézt až na tři měsíce užívání, pokud doložíte, že vám byly předepsány. Kontrolované látky mohou vyžadovat licenci.",
    h1: "Léky s sebou do Spojeného království",
    lead: "Do Spojeného království smíte dovézt vlastní léky až na tři měsíce užívání, pokud doložíte, že vám byly předepsány. Na této stránce najdete povolené množství, potřebná potvrzení, pravidla pro léky s kontrolovanými látkami a tekutiny v příručním zavazadle.",
    card: "Léky na tři měsíce, recepty a potvrzení a licence pro controlled drugs",
    sections: [
      { h: "Nejvýše na tři měsíce užívání", blocks: [
        "Do Spojeného království smíte dovézt vlastní léky pro osobní potřebu nejvýše na tři měsíce užívání. Měli byste být schopni doložit, že vám byly předepsány.",
        "Léky pokud možno uchovávejte v originálních obalech. Na hranici pak snáze ukážete, o jaké léky jde a že patří vám, pokud se na ně někdo zeptá.",
      ] },
      { h: "Potvrzení a recepty, které si vzít s sebou", blocks: [
        "Vezměte si s sebou lékařské potvrzení nebo recept jako doklad, že vám byl lék předepsán. Doklad by měl obsahovat:",
        { ul: [
          "Název léku.",
          "Dávkování a sílu.",
          "Jak často lék užíváte.",
          "Podpis nebo registrační číslo lékaře, který lék předepsal.",
        ] },
        "Léky mějte pokud možno v originálních obalech, aby údaje na obalu odpovídaly potvrzení.",
      ] },
      { h: "Léky s kontrolovanými látkami (controlled drugs)", blocks: [
        "Některé léky obsahují látky klasifikované jako kontrolované (controlled drugs) a vztahují se na ně další pravidla. Zeptejte se svého lékaře nebo lékárníka, zda se to týká právě vašich léků.",
        "Pokud ano, můžete potřebovat osobní licenci (personal licence). V takovém případě kontaktujte útvar Drug and Firearms Licensing Unit britského ministerstva vnitra (Home Office) nejméně 15 pracovních dnů před cestou.",
        "Léky zařazené do kategorie Schedule 1 se bez licence do země dovážet nesmějí.",
      ] },
      { h: "Tekutiny a injekční stříkačky v příručním zavazadle", blocks: [
        "Na tekutiny a injekční stříkačky v příručním zavazadle se vztahují běžná bezpečnostní pravidla letišť. Pokud s sebou máte tekuté léky nebo pomůcky k injekcím, je dobré mít potvrzení po ruce i u bezpečnostní kontroly. Více v průvodci [Tekutiny v příručním zavazadle a bezpečnostní kontrola](/cs/tekutiny-v-prirucnim-zavazadle/).",
      ] },
      { h: "Lékařská péče ve Spojeném království", blocks: [
        "Pokud budete během pobytu potřebovat ošetření nebo nové léky, je dobré vědět, jak funguje britský zdravotní systém NHS. Věnuje se mu průvodce o zdravotní péči ve Spojeném království.",
      ] },
    ],
    faq: [
      { q: "Smím si vzít své léky do Spojeného království?", a: "Ano, smíte dovézt vlastní léky pro osobní potřebu nejvýše na tři měsíce užívání. Vezměte si s sebou doklad, že vám byly předepsány, a uchovávejte je nejlépe v originálních obalech." },
      { q: "Jaké doklady k lékům potřebuji?", a: "Vezměte si lékařské potvrzení nebo recept, kde je uveden název léku, dávkování a síla, jak často lék užíváte a podpis nebo registrační číslo lékaře, který lék předepsal. Léky mějte pokud možno v originálních obalech." },
      { q: "Co je třeba vědět o lécích s kontrolovanými látkami?", a: "Některé léky obsahují látky klasifikované jako kontrolované (controlled drugs) a vztahují se na ně další pravidla. Zeptejte se lékaře nebo v lékárně, zda se to týká vašich léků. Pokud ano, můžete potřebovat osobní licenci a britský Home Office je vhodné kontaktovat nejméně 15 pracovních dnů před cestou." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "tekutiny-v-prirucnim-zavazadle",
    group: "travel",
    title: "Tekutiny v příručním zavazadle: kontrola na britských letištích (2026)",
    description: "Na mnoha britských letištích platí limit 100 ml na balení (sáček do 1 l); někde díky CT skenerům až 2 l. Ověřte si pravidla svého letiště.",
    h1: "Tekutiny v příručním zavazadle a bezpečnostní kontrola na britských letištích",
    lead: "Na mnoha britských letištích stále platí pro tekutiny v příručním zavazadle limit 100 ml na jedno balení. Některá letiště díky novým skenerům povolují větší množství, praxe se však liší — ověřte si proto pravidla právě svého letiště odletu.",
    card: "Pravidlo 100 ml, CT skenery a výjimky pro dětskou výživu a léky",
    sections: [
      { h: "Pravidlo 100 ml a průhledný sáček", blocks: [
        "Na mnoha britských letištích musí být tekutiny v příručním zavazadle často v baleních o objemu nejvýše 100 ml. Balení o objemu nad 100 ml se zpravidla nepřijímá, i když není plné.",
        { ul: [
          "Balení se obvykle vkládají do jednoho průhledného, znovu uzavíratelného sáčku o objemu nejvýše 1 litr.",
          "Pravidlem bývá jeden sáček na osobu.",
          "Za tekutiny se často považují také gely, pasty, krémy, spreje a podobné výrobky.",
        ] },
        "Protože se podrobnosti mohou mezi letišti lišit, vyplatí se před cestou ověřit aktuální pravidla právě vašeho letiště odletu.",
      ] },
      { h: "Nové CT skenery: na některých letištích může být limit vyšší", blocks: [
        "Některá britská letiště zavedla nové CT skenery a mohou díky nim povolovat tekutiny v baleních až do 2 litrů. Zavádění však postupuje různým tempem a situace se mezi letišti liší.",
        "I v polovině roku 2026 platí limit 100 ml na mnoha letištích. Nepředpokládejte proto, že vyšší limit platí všude, a vždy si ověřte nejnovější pravidla na letišti odletu — nejlépe i na letišti, odkud poletíte zpět.",
      ] },
      { h: "Výjimky: dětská výživa, kojenecké mléko a léky", blocks: [
        "Dětskou výživu, kojenecké mléko a nezbytné léky lze v některých případech vzít s sebou ve větším množství, než je běžný limit pro tekutiny. Obvykle je však musíte nahlásit pracovníkům kontroly.",
        "Povolená množství a podmínky se mohou mezi letišti lišit. Je dobré mít po ruce recept nebo jinou dokumentaci a praxi si ověřit předem. Pokud cestujete s dětmi, přečtěte si také průvodce [Cestování s dětmi do Spojeného království](/cs/cestovani-s-detmi/).",
      ] },
      { h: "Elektronika a větší předměty", blocks: [
        "Větší elektronická zařízení, například notebooky, bude možná třeba podle pokynů personálu vyndat ze zavazadla a položit samostatně do přepravky. I to se může lišit podle letiště a kontrolního vybavení, proto se řiďte pokyny na místě.",
      ] },
      { h: "Jak se na kontrolu připravit", blocks: [
        "Kontrola proběhne hladčeji, když si tekutiny zabalíte do průhledného sáčku už doma, dětskou výživu a léky budete mít snadno po ruce, abyste je mohli nahlásit, a aktuální pravidla svého letiště si ověříte předem.",
        "Bezpečnostní kontrola probíhá před pasovou kontrolou — podívejte se, jak funguje [hraniční kontrola a brány eGate](/cs/hranicni-kontrola-egates/) a co smíte dovézt podle [britských celních pravidel](/cs/celni-pravidla-britanie/). Nezapomeňte, že ke vstupu potřebujete platnou [UK ETA](/cs/jak-zadat/); její stav zjistíte pomocí [ověření stavu ETA](/cs/overeni-stavu/). Obecná pravidla vstupu najdete v průvodci [Vstup do Spojeného království a víza](/cs/vstup-do-britanie-a-viza/) a mezipřistáním se věnuje průvodce o tranzitu přes Británii.",
      ] },
    ],
    faq: [
      { q: "Kolik tekutin smím mít v příručním zavazadle na britském letišti?", a: "Na mnoha britských letištích je limit často 100 ml na balení a balení musí být v průhledném, znovu uzavíratelném sáčku o objemu nejvýše 1 litr, jeden sáček na osobu. Některá letiště zavedla nové CT skenery a mohou povolovat až 2 litry, zavádění se však mezi letišti liší. Před cestou si proto vždy ověřte aktuální pravidla letiště odletu." },
      { q: "Smím přenést vodu přes bezpečnostní kontrolu?", a: "Vodu a jiné nápoje zakoupené za bezpečnostní kontrolou si obvykle můžete vzít do letadla. Nápoje, které máte u sebe před kontrolou, naopak obvykle spadají pod pravidla pro tekutiny a při překročení limitu je možná budete muset vyhodit. Pravidla se mohou mezi letišti lišit, proto si ověřte, co platí pro vaši cestu." },
      { q: "Smím přes kontrolu přenést kojenecké mléko a léky?", a: "Dětskou výživu, kojenecké mléko a nezbytné léky lze v některých případech vzít ve větším množství, než je běžný limit pro tekutiny, pokud je nahlásíte pracovníkům kontroly. Povolená množství a podmínky se mohou lišit, proto si je předem ověřte u svého letiště a recept nebo jinou dokumentaci mějte po ruce." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alkohol-a-koureni",
    group: "travel",
    title: "Věková hranice pro alkohol v Anglii: 18 let – pravidla kouření 2026",
    description: "V Anglii smíte kupovat alkohol nebo pít v hospodě od 18 let. Mladí ve věku 16–17 let smějí v doprovodu dospělého pít k jídlu pivo, víno nebo cider.",
    h1: "Věková hranice pro alkohol v Anglii – kouření a pravidla",
    lead: "V Anglii je pro nákup alkoholu a jeho konzumaci v hospodě nebo restauraci nutný věk 18 let. Šestnácti- nebo sedmnáctiletí smějí v doprovodu dospělého pít (ale ne kupovat) pivo, víno nebo cider k jídlu (GOV.UK). Kouření je zakázáno ve vnitřních veřejných prostorách.",
    card: "Věková hranice 18 let, zákaz kouření uvnitř, e-cigarety a alkohol za volantem",
    sections: [
      { h: "Jaká je věková hranice pro alkohol v Anglii? 18 let pro alkohol i tabák", blocks: [
        "Ve Spojeném království je pro nákup alkoholu a tabáku nutný věk nejméně 18 let. Hranice platí pro obchody, bary, restaurace a další prodejní místa.",
        "Obchody a podniky s prodejem alkoholu mohou požadovat průkaz totožnosti k doložení věku, i když vypadáte starší. Pokud se chystáte kupovat alkohol nebo tabák, mějte proto u sebe platný doklad totožnosti.",
      ] },
      { h: "Zákaz kouření ve vnitřních veřejných prostorách", blocks: [
        "Od nabytí účinnosti protikuřáckého zákona (Smoke-free law) v roce 2007 je kouření zakázáno ve vnitřních prostorách všech uzavřených veřejných míst, na pracovištích a ve veřejné dopravě.",
        "Hospody, restaurace a nádraží jsou tedy uvnitř nekuřácké. Kouřit se smí jen ve vyhrazených venkovních prostorách.",
        { ul: [
          "Vnitřní prostory: kouření zakázáno na uzavřených veřejných místech a na pracovištích.",
          "Veřejná doprava: nekuřácká.",
          "Povoleno: pouze ve vyhrazených venkovních prostorách.",
        ] },
      ] },
      { h: "E-cigarety a vaping", blocks: [
        "Pravidla pro e-cigarety a vaping se liší podle místa. Na mnoha místech nejsou uvnitř povoleny, praxe se však může lišit podle prostor a provozovatele. Vždy se řiďte značením a pokyny personálu na místě.",
      ] },
      { h: "Alkohol za volantem a na veřejnosti", blocks: [
        "K řízení pod vlivem alkoholu se ve Spojeném království přistupuje přísně a jsou pro něj stanoveny limity a sankce. Pokud plánujete řídit, seznamte se s pravidly — popisuje je průvodce o řízení ve Spojeném království.",
        "Některé místní úřady navíc vymezily oblasti, kde je pití alkoholu na veřejnosti omezeno. Všímejte si místního značení, které na taková omezení upozorňuje.",
      ] },
      { h: "Dovoz alkoholu a tabáku", blocks: [
        "Pro množství alkoholu a tabáku dováženého do země platí samostatné bezcelní limity (duty-free). Podrobně je popisuje průvodce [Celní pravidla a limity dovozu](/cs/celni-pravidla-britanie/).",
      ] },
    ],
    faq: [
      { q: "Jaká je věková hranice pro alkohol v Anglii?", a: "V Anglii je pro nákup alkoholu nebo jeho konzumaci v hospodě či restauraci nutný věk 18 let. Šestnácti- nebo sedmnáctiletí smějí v doprovodu dospělého pít (ale ne kupovat) pivo, víno nebo cider k jídlu (GOV.UK)." },
      { q: "Od kolika let lze ve Spojeném království kupovat alkohol a tabák?", a: "Pro nákup alkoholu a tabáku ve Spojeném království je nutný věk nejméně 18 let. Obchody a bary mohou požadovat průkaz totožnosti k doložení věku." },
      { q: "Smí se kouřit v hospodách a obchodech?", a: "Ne. Kouření je zakázáno ve vnitřních prostorách všech uzavřených veřejných míst, na pracovištích a ve veřejné dopravě. Hospody, restaurace a nádraží jsou uvnitř nekuřácké — kouřit se smí jen ve vyhrazených venkovních prostorách." },
      { q: "Smím používat e-cigaretu (vaping)?", a: "Pravidla pro e-cigarety a vaping se liší podle místa. Uvnitř často povoleny nejsou. Vždy se řiďte značením a pokyny personálu na místě." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "cestovani-s-detmi",
    group: "travel",
    title: "Cestování s dětmi do Spojeného království: ETA a pas (2026)",
    description: "Každý, i kojenec, potřebuje do Spojeného království vlastní ETA a pas. Border Force může chtít doložit příbuzenský vztah – jak se na cestu připravit.",
    h1: "Cestování s dětmi do Spojeného království",
    lead: "Každé dítě, i kojenec, potřebuje vlastní ETA a vlastní pas. Na hranici může Border Force požádat o doklad o příbuzenském vztahu, proto je dobré mít s sebou správné dokumenty.",
    card: "Vlastní ETA a pas pro každé dítě a doklady o příbuzenském vztahu na hranici",
    sections: [
      { h: "Každý cestující potřebuje vlastní ETA a vlastní pas", blocks: [
        "Všichni cestující, včetně kojenců, potřebují vlastní ETA a vlastní pas. Dítě nemůže cestovat na ETA rodiče — platí pravidlo jedna ETA na osobu.",
      ] },
      { h: "Border Force může požádat o doklad o příbuzenském vztahu", blocks: [
        "Když cestujete s dětmi, může Border Force (britská pohraniční služba) požádat o doklad o vašem vzájemném vztahu — zejména pokud máte různá příjmení nebo pokud nejste rodičem dítěte. Jako doklad mohou posloužit:",
        { ul: [
          "Rodný list nebo doklad o osvojení.",
          "Oddací list nebo rozsudek o rozvodu (pokud jste rodič, ale máte jiné příjmení).",
          "Souhlas rodiče (consent letter) (pokud nejste rodičem dítěte).",
        ] },
      ] },
      { h: "Mějte doklady u sebe", blocks: [
        "Takové doklady o příbuzenském vztahu je dobré nosit s sebou i na dalších cestách. Usnadní vám vstup do země, pokud se na ně při hraniční kontrole někdo zeptá.",
      ] },
      { h: "Co vědět před vstupem do země", blocks: [
        "Požádejte o [UK ETA](/cs/jak-zadat/) pro každého člena rodiny a žádosti sledujte pomocí [ověření stavu ETA](/cs/overeni-stavu/). Obecná pravidla vstupu najdete v průvodci [Vstup do Spojeného království a víza](/cs/vstup-do-britanie-a-viza/) a pravidla pro dovážené zboží v průvodci [Celní pravidla a limity dovozu](/cs/celni-pravidla-britanie/). Pokud si chcete půjčit auto, podívejte se také na průvodce o řízení ve Spojeném království; mezipřistáním se věnuje průvodce o tranzitu přes Británii.",
      ] },
    ],
    faq: [
      { q: "Potřebuje i dítě do Spojeného království ETA?", a: "Ano. Všichni cestující, včetně kojenců, potřebují vlastní ETA. Dítě nemůže cestovat na ETA rodiče — platí pravidlo jedna ETA na osobu." },
      { q: "Může dítě cestovat na pas nebo ETA rodiče?", a: "Ne. Každý cestující potřebuje bez ohledu na věk vlastní pas a vlastní ETA. Na pas nebo ETA jiné osoby do země vstoupit nelze." },
      { q: "Co když cestuji s dítětem, které má jiné příjmení?", a: "Border Force může požádat o doklad o příbuzenském vztahu, zejména pokud máte různá příjmení nebo pokud nejste rodičem dítěte. Jako doklad může posloužit rodný list nebo doklad o osvojení, oddací list nebo rozsudek o rozvodu, případně souhlas rodiče (consent letter)." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "londynska-letiste",
    group: "travel",
    title: "Druhé největší letiště v Anglii je Gatwick – 5 londýnských letišť",
    description: "Druhým největším letištěm Anglie i Británie je londýnský Gatwick (42,8 mil. cestujících v roce 2025, CAA) po Heathrow. Pět londýnských letišť v kostce.",
    h1: "5 největších londýnských letišť",
    lead: "Druhým největším letištěm Anglie — i celého Spojeného království — je londýnský Gatwick, kterým v roce 2025 prošlo 42,8 milionu cestujících. Největší je Heathrow (84,5 milionu) a třetí Manchester (32,1 milionu) podle britského úřadu pro civilní letectví CAA.",
    card: "Heathrow, Gatwick, Stansted, Luton a London City a doba cesty do centra",
    sections: [
      { h: "Pět letišť, různé cesty do centra", blocks: [
        "Londýn obsluhuje pět velkých letišť. Volba letiště ovlivní, jakou trasou, jak rychle a za kolik se dostanete do centra. Níže najdete stručný popis každého z nich.",
      ] },
      { h: "LHR – Heathrow (západní Londýn)", blocks: [
        "Největší letiště Spojeného království a nejdůležitější mezinárodní uzel (terminály 2–5).",
        "Cesta: Heathrow Express cca 15 min, Elizabeth Line cca 30 min, metro cca 50 min. Více v průvodci [Letiště Heathrow (LHR)](/cs/letiste-heathrow/).",
      ] },
      { h: "LGW – Gatwick (jižní Londýn)", blocks: [
        "Druhé největší letiště Anglie i Spojeného království (po Heathrow); létají sem tradiční i nízkonákladové aerolinky (severní a jižní terminál).",
        "Cesta: Gatwick Express cca 30 min, Thameslink cca 30–45 min.",
      ] },
      { h: "STN – Stansted (severovýchodní Londýn)", blocks: [
        "Základna Ryanairu s mnoha evropskými spoji; jeden terminál, snadná orientace.",
        "Cesta: Stansted Express cca 50 min, autobus cca 60–90 min.",
      ] },
      { h: "LTN – Luton (severně od Londýna)", blocks: [
        "Základna easyJetu a Wizz Airu; jeden terminál, na nádraží jezdí kyvadlová doprava.",
        "Cesta: Luton Airport Express cca 30 min, Thameslink cca 30 min.",
      ] },
      { h: "LCY – London City (centrum Londýna, nejblíže)", blocks: [
        "Nejblíže centru; oblíbené u cestujících na služebních cestách.",
        "Cesta: DLR cca 15–25 min do centra.",
        { note: "Doby cesty jsou orientační a závisí na cíli v Londýně a denní době." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  "heathrow": {
    slug: "letiste-heathrow",
    group: "travel",
    title: "Heathrow (LHR): terminály, hraniční kontrola a cesta do Londýna",
    description: "Průvodce letištěm Heathrow: terminály 2–5, hraniční kontrola (eGate) a cesta do centra Londýna – Heathrow Express, Elizabeth Line, metro a autobus.",
    h1: "Letiště Heathrow (LHR)",
    lead: "Heathrow je největší letiště Spojeného království a nejdůležitější místo vstupu do Londýna. Níže najdete terminály, průběh hraniční kontroly a možnosti, jak se dostat do centra.",
    card: "Terminály 2–5, brány eGate a doba cesty do centra Londýna",
    sections: [
      { h: "Poloha a terminály", blocks: [
        "Heathrow (kód IATA LHR) leží v západním Londýně. Je to největší a nejrušnější letiště Spojeného království se spoji do celého světa. V provozu jsou terminály 2, 3, 4 a 5 — číslo terminálu si ověřte na letence, protože ovlivňuje trasu i odbavení.",
      ] },
      { h: "Hraniční kontrola po příletu", blocks: [
        `Po příletu projdete hraniční kontrolou u automatických bran eGate (s biometrickým pasem) nebo u přepážky s úředníkem. Nezapomeňte, že ke vstupu potřebujete platný pas a platnou [UK ETA](/cs/co-je-eta/) propojenou s tímto pasem (při pobytu do ${F.staySixMonths} měsíců). Používání bran podrobněji popisuje průvodce [Hraniční kontrola a eGates](/cs/hranicni-kontrola-egates/).`,
      ] },
      { h: "Cesta do centra Londýna", blocks: [
        { table: { head: ["Doprava", "Přibližná doba cesty"], rows: [
          ["Heathrow Express (rychlovlak)", "cca 15 minut"],
          ["Elizabeth Line", "cca 30 minut"],
          ["Metro (Piccadilly line)", "cca 50 minut"],
          ["Autobus / dálkový autobus", "cca 60–90 minut"],
        ] } },
        { note: "Doby cesty jsou orientační a závisí na terminálu, denní době a cíli v Londýně." },
        "Více o londýnských letištích: [5 největších londýnských letišť](/cs/londynska-letiste/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
