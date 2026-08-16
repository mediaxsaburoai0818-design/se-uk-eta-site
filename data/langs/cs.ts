import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// チェコ語。英国への渡航・就労移動が多く、チェコ語で書かれたETA解説はまだ薄い。
const cs: LangContent = {
  code: "cs",
  label: "Čeština",
  siteName: "Průvodce UK ETA",
  tagline: "Cestovní povolení do Spojeného království, krok za krokem",
  homeTitle: `UK ETA: ${F.fee} a odpověď obvykle do 1 dne | Průvodce česky 2026`,
  homeDescription:
    `Český průvodce UK ETA: stojí ${F.fee}, platí ${F.validYears} roky a umožňuje pobyt až ${F.staySixMonths} měsíců na jednu cestu. Jak o něj požádat na oficiálních stránkách GOV.UK.`,
  homeLead:
    `Cestujete-li do Spojeného království, potřebujete UK ETA. Na oficiálních stránkách stojí ${F.fee}, odpověď přijde obvykle do 1 dne a povolení platí ${F.validYears} roky na opakované cesty.`,
  nav: { info: "O ETA", entry: "Cesta do Spojeného království", faq: "Časté dotazy" },
  officialLinkLabel: "Požádat na oficiálních stránkách GOV.UK",
  updatedLabel: "Aktualizováno",
  pages: {
    "what-is-eta": {
      slug: "co-je-eta",
      title: "Co je UK ETA: povinné povolení předem, nikoli vízum | 2026",
      description: `UK ETA je elektronické cestovní povolení, o které žádáte před odletem. Není to vízum: vyřídíte je online, stojí ${F.fee} a váže se k vašemu pasu.`,
      h1: "Co je UK ETA",
      lead: "O UK ETA (Electronic Travel Authorisation) žádáte před cestou. Nenahrazuje pas a není to vízum.",
      sections: [
        { h: "Není to vízum", p: [
          "ETA je povolení předem pro cestující, kteří do Spojeného království vízum nepotřebují. Kontrola probíhá před nástupem do letadla: bez ETA vás dopravce nemusí pustit na palubu.",
          "Na rozdíl od víza není potřeba termín ani pohovor. Vše probíhá online." ] },
        { h: "Váže se k vašemu pasu", p: [
          `Povolení patří k pasu, se kterým jste žádali. Pokud si pořídíte nový pas, musíte požádat o novou ETA — i když z ${F.validYears} let ještě zbývá čas.`,
          "Nic netisknete: na hranici stačí mít stejný pas." ] },
        { h: "Kdo ji potřebuje", p: [
          "Cestující ze zemí bez vízové povinnosti, tedy i z Česka, ať už jde o turistiku, návštěvu rodiny, obchodní cestu nebo tranzit.",
          "Vlastní ETA potřebují i děti a kojenci." ] },
      ],
    },
    application: {
      slug: "jak-zadat",
      title: "Jak požádat o UK ETA: online a během několika minut | Průvodce 2026",
      description: `Postup, jak požádat o UK ETA přes oficiální stránky nebo aplikaci GOV.UK: pas, fotografie obličeje, kontaktní údaje a platba ${F.fee}.`,
      h1: "Jak požádat o UK ETA",
      lead: "Žádost probíhá celá online, buď na oficiálních stránkách GOV.UK, nebo v oficiální aplikaci. Nikam nemusíte chodit.",
      sections: [
        { h: "Co si připravit", p: [
          "Pas, se kterým cestujete, fotografii obličeje (pořídíte ji mobilem), e-mailovou adresu a platební kartu.",
          "Údaje se musí přesně shodovat s pasem. Jinak zapsané jméno je nejčastější důvod zamítnutí." ] },
        { h: "Jednotlivé kroky", p: [
          `Otevřete oficiální stránky GOV.UK nebo si stáhněte oficiální aplikaci, naskenujte datovou stranu pasu, pořiďte fotografii, odpovězte na otázky k bezúhonnosti a zaplaťte ${F.fee}.`,
          `Pak čekáte na rozhodnutí. Obvykle přijde do 1 dne, ale počítejte až s ${F.decisionDays} pracovními dny.` ] },
        { h: "Než žádost odešlete", p: [
          "Zkontrolujte číslo pasu a datum platnosti, zda je obličej na fotografii dobře vidět a zda je e-mailová adresa správná — právě na ni přijde rozhodnutí.",
          "Žádejte s předstihem, ne v den odletu." ] },
      ],
    },
    fee: {
      slug: "cena",
      title: `Cena UK ETA: ${F.fee} na oficiálních stránkách | Pozor na zprostředkovatele`,
      description: `UK ETA stojí na GOV.UK ${F.fee}. Jde o jednorázovou platbu na ${F.validYears} roky a opakované cesty. Jak poznat stránky, které si přirážejí provizi.`,
      h1: "Kolik stojí UK ETA",
      lead: `Oficiální cena je ${F.fee} a platíte ji jednou. Povolení pak platí ${F.validYears} roky na opakované cesty.`,
      sections: [
        { h: "Jedna platba", p: [
          `Nejsou žádné roční poplatky ani průběžná obnovení: při žádosti zaplatíte ${F.fee} a povolení platí ${F.validYears} roky — nebo do vypršení pasu.`,
          "Částka se strhne i v případě zamítnutí, protože pokrývá zpracování žádosti." ] },
        { h: "Stránky, které chtějí víc", p: [
          "Existují zprostředkovatelé, kteří si k oficiální částce připočítají vlastní provizi. Nemají pověření britských úřadů a dělají přesně to, co zvládnete sami.",
          `Pokud stránka požaduje výrazně víc než ${F.fee}, ten rozdíl je jejich provize.` ] },
        { h: "Jak poznat oficiální stránky", p: [
          "Oficiální adresa je na doméně GOV.UK. Buďte opatrní u stránek, které se označují za «oficiálního partnera» nebo «schváleného zástupce»: britské úřady nikoho k podávání žádostí nezmocňují.",
        ] },
      ],
    },
    "status-check": {
      slug: "overeni-stavu",
      title: "Ověření stavu UK ETA: kde a co k tomu potřebujete | 2026",
      description: "Jak zjistit, zda byla vaše UK ETA schválena: oznámení přijde e-mailem a stav si ověříte podle čísla pasu.",
      h1: "Jak ověřit stav UK ETA",
      lead: "Rozhodnutí se oznamuje e-mailem. Pokud nedorazilo, můžete si stav ověřit podle údajů z pasu, se kterým jste žádali.",
      sections: [
        { h: "Nejdřív se podívejte do e-mailu", p: [
          "Schválení míří na adresu, kterou jste v žádosti uvedli. Než usoudíte, že se něco pokazilo, zkontrolujte i složku s nevyžádanou poštou.",
          "Nevydává se žádný dokument k vytištění: povolení je vedeno u vašeho pasu." ] },
        { h: "Co k tomu potřebujete", p: [
          "Číslo pasu, se kterým jste žádali, a osobní údaje tak, jak jste je vyplnili.",
          "Pokud jste žádali s jiným pasem, ověření povolení nenajde." ] },
        { h: "Když to trvá déle", p: [
          `Většina rozhodnutí přijde do 1 dne, ale počítejte až s ${F.decisionDays} pracovními dny. Trvá-li to déle a blíží se odlet, obraťte se na oficiální kontakty.`,
        ] },
      ],
    },
    validity: {
      slug: "platnost",
      title: `UK ETA: platí ${F.validYears} roky nebo do vypršení pasu | 2026`,
      description: `UK ETA platí ${F.validYears} roky od schválení a pokrývá opakované cesty. S novým pasem je nutné požádat znovu.`,
      h1: "Jak dlouho platí UK ETA",
      lead: `Povolení platí ${F.validYears} roky — nebo do vypršení pasu, pokud nastane dřív.`,
      sections: [
        { h: "Opakované cesty jsou zahrnuty", p: [
          `Během těchto ${F.validYears} let můžete do Spojeného království cestovat, jak často chcete, pokud každý pobyt nepřesáhne ${F.staySixMonths} měsíců.`,
          "Pro každou cestu nemusíte žádat o nové povolení." ] },
        { h: "Při novém pasu", p: [
          "Povolení patří k pasu, se kterým bylo vyřízeno. Pokud si pas obnovíte, musíte požádat o novou ETA, i když platnost ještě zbývá.",
        ] },
        { h: "Jak si datum dohledat", p: [
          "Datum najdete v e-mailu se schválením. Pokud ho už nemáte, ověřte si stav podle údajů z pasu.",
        ] },
      ],
    },
    "processing-time": {
      slug: "doba-vyrizeni",
      title: `UK ETA: odpověď obvykle do 1 dne (až ${F.decisionDays} pracovní dny) | 2026`,
      description: `Rozhodnutí o UK ETA přijde obvykle do 1 dne, ale počítejte až s ${F.decisionDays} pracovními dny. Kdy je nejlepší žádat.`,
      h1: "Jak dlouho trvá vyřízení UK ETA",
      lead: `Ve většině případů přijde odpověď do 1 dne. Přesto doporučujeme počítat až s ${F.decisionDays} pracovními dny.`,
      sections: [
        { h: "Kdy žádat", p: [
          "Požádejte hned, jakmile máte koupenou letenku — ne den před odletem. Pokud je potřeba dodatečná kontrola, trvá to déle.",
          "Bez schváleného povolení vás dopravce nemusí pustit na palubu." ] },
        { h: "Proč to někdy trvá déle", p: [
          "Žádosti, které musí posoudit člověk (například když na některou otázku k bezúhonnosti odpovíte «ano»), trvají déle než ty vyřízené automaticky.",
        ] },
        { h: "Když nic nepřijde", p: [
          "Zkontrolujte složku s nevyžádanou poštou a správnost zadané adresy. Pak si ověřte stav podle údajů z pasu.",
        ] },
      ],
    },
    "required-documents": {
      slug: "potrebne-doklady",
      title: "Doklady k UK ETA: pas, fotografie a platební karta | 2026",
      description: "Co potřebujete k UK ETA: pas, se kterým cestujete, fotografii obličeje, e-mailovou adresu a platební prostředek.",
      h1: "Jaké doklady potřebujete",
      lead: "Žádost je jednoduchá: pas, fotografie a platební prostředek. Doklady o cestě ani potvrzení nejsou potřeba.",
      sections: [
        { h: "Pas", p: [
          "Musí jít o stejný pas, se kterým cestujete, a musí být platný. Údaje opište přesně tak, jak jsou uvedené.",
        ] },
        { h: "Fotografie obličeje", p: [
          "Pořídíte ji mobilem přímo během žádosti. Obličej musí být dobře vidět, bez slunečních brýlí a čehokoli, co ho zakrývá, na jednobarevném pozadí.",
        ] },
        { h: "E-mail a platba", p: [
          `Rozhodnutí přijde e-mailem, adresa proto musí být správná. Platbu ${F.fee} provedete na konci kartou.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "delka-pobytu",
      title: `S UK ETA můžete zůstat až ${F.staySixMonths} měsíců na jednu cestu | 2026`,
      description: `UK ETA umožňuje pobyt až ${F.staySixMonths} měsíců na jednu cestu za účelem turistiky, návštěvy nebo obchodu. K čemu ji použít nelze.`,
      h1: "Jak dlouho můžete zůstat",
      lead: `Na jednu cestu můžete ve Spojeném království zůstat až ${F.staySixMonths} měsíců. Povolení pokrývá turistiku, návštěvy rodiny, obchodní cesty a tranzit.`,
      sections: [
        { h: "Co je povoleno", p: [
          "Turistika, návštěva rodiny nebo přátel, jednání a jednotlivé obchodní aktivity a tranzit přes Spojené království.",
        ] },
        { h: "Co povoleno není", p: [
          "Nesmíte pracovat pro britského zaměstnavatele ani se zde usadit. Na to slouží jiné cesty.",
          "Nevztahuje se ani na dlouhodobé studium: ETA je určena na krátké pobyty." ] },
        { h: "Opakované cesty", p: [
          `Po dobu platnosti povolení můžete cestovat opakovaně, ale každý pobyt je omezen na ${F.staySixMonths} měsíců a pobyty nelze neomezeně řetězit za sebou.`,
        ] },
      ],
    },
    faq: {
      slug: "caste-dotazy",
      title: "UK ETA: stručné odpovědi k ceně, platnosti a době vyřízení | FAQ 2026",
      description: `Časté dotazy k UK ETA: kolik stojí (${F.fee}), jak dlouho platí (${F.validYears} roky), jak dlouho trvá vyřízení a co když bude zamítnuta.`,
      h1: "Časté dotazy k UK ETA",
      lead: "Stručné odpovědi na nejčastější otázky. Každý bod odkazuje na podrobné vysvětlení.",
      sections: [
        { h: `Kolik stojí? ${F.fee}`, p: [`Oficiální cena na GOV.UK je ${F.fee}, platí se jednou na ${F.validYears} roky.`] },
        { h: `Jak dlouho platí? ${F.validYears} roky`, p: ["Nebo do vypršení pasu, pokud nastane dřív. Pokrývá opakované cesty."] },
        { h: "Jak dlouho trvá? Obvykle 1 den", p: [`Počítejte až s ${F.decisionDays} pracovními dny a nenechávejte to na poslední chvíli.`] },
        { h: "A když bude zamítnuta?", p: ["Odvolání není možné. Pak byste museli požádat o vízum odpovídající účelu vaší cesty."] },
        { h: "Potřebují ji i děti?", p: ["Ano. Vlastní povolení potřebuje každý, včetně kojenců a dětí."] },
      ],
    },
    about: {
      slug: "o-tomto-pruvodci",
      title: "O tomto průvodci UK ETA | Kdo jsme a jak pracujeme",
      description: "Kdo vydává tohoto českého průvodce UK ETA, odkud pocházejí údaje a jak řešíme opravy.",
      h1: "O tomto průvodci",
      lead: "Tento průvodce vysvětluje UK ETA česky. Nejde o oficiální stránky britských úřadů a žádosti nepodáváme.",
      sections: [
        { h: "Nejsou to oficiální stránky", p: ["Nejsme spojeni s britskými úřady. Žádost vždy podávejte na oficiálních stránkách GOV.UK nebo v oficiální aplikaci."] },
        { h: "Odkud pocházejí údaje", p: ["Částky, lhůty a podmínky vycházejí z toho, co zveřejňuje GOV.UK. U údajů, které se mohou měnit, uvádíme datum aktualizace."] },
        { h: "Opravy", p: ["Pokud narazíte na zastaralý nebo nesprávný údaj, dejte nám vědět. Opravíme jej."] },
      ],
    },
    privacy: {
      slug: "ochrana-osobnich-udaju",
      title: "Ochrana osobních údajů | Průvodce UK ETA",
      description: "Jaké údaje tyto stránky shromažďují a k čemu slouží.",
      h1: "Ochrana osobních údajů",
      lead: "Tato stránka vysvětluje, jak se na těchto stránkách nakládá s údaji.",
      sections: [
        { h: "Jaké údaje", p: ["Ke čtení průvodce po vás osobní údaje nechceme. Žádosti o ETA nepodáváme, a nedostáváme se tak k údajům z pasu ani k platebním údajům."] },
        { h: "Statistiky", p: ["Používáme souhrnné statistiky návštěvnosti ke zlepšování obsahu. Neslouží k identifikaci jednotlivých osob."] },
      ],
    },
    terms: {
      slug: "pravni-informace",
      title: "Právní informace | Průvodce UK ETA",
      description: "Podmínky užívání tohoto informativního průvodce UK ETA.",
      h1: "Právní informace",
      lead: "Podmínky užívání obsahu těchto stránek.",
      sections: [
        { h: "Informativní charakter", p: ["Obsah má informativní povahu. Oficiální podmínky se mohou měnit; před podáním žádosti si je ověřte na GOV.UK."] },
        { h: "Odpovědnost", p: ["Neneseme odpovědnost za rozhodnutí učiněná výhradně na základě tohoto průvodce. O každé žádosti rozhodují britské úřady."] },
      ],
    },
  },
};

export default cs;
