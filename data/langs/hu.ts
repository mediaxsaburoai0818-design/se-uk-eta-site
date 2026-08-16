import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// ハンガリー語。英国への渡航が多く、ハンガリー語で書かれたETA解説は競合が薄い。
const hu: LangContent = {
  code: "hu",
  label: "Magyar",
  siteName: "UK ETA útmutató",
  tagline: "Az Egyesült Királyságba szóló utazási engedély, lépésről lépésre",
  homeTitle: `UK ETA: ${F.fee} és a válasz általában 1 napon belül | Magyar útmutató 2026`,
  homeDescription:
    `Magyar nyelvű útmutató az UK ETA-hoz: ${F.fee}-ba kerül, ${F.validYears} évig érvényes, és utazásonként legfeljebb ${F.staySixMonths} hónap tartózkodásra jogosít. Így igényelheti a GOV.UK hivatalos oldalán.`,
  homeLead:
    `Ha az Egyesült Királyságba utazik, UK ETA-ra van szüksége. A hivatalos oldalon ${F.fee}-ba kerül, a válasz általában 1 napon belül megérkezik, az engedély pedig ${F.validYears} évig érvényes, több utazásra.`,
  nav: { info: "Az ETA-ról", entry: "Utazás az Egyesült Királyságba", faq: "Gyakori kérdések" },
  officialLinkLabel: "Igénylés a GOV.UK hivatalos oldalán",
  updatedLabel: "Frissítve",
  pages: {
    "what-is-eta": {
      slug: "mi-az-eta",
      title: "Mi az UK ETA: kötelező előzetes engedély, nem vízum | 2026",
      description: `Az UK ETA elektronikus utazási engedély, amelyet indulás előtt kell igényelni. Nem vízum: online intézhető, ${F.fee}-ba kerül, és az útleveléhez kapcsolódik.`,
      h1: "Mi az UK ETA",
      lead: "Az UK ETA-t (Electronic Travel Authorisation) az utazás előtt kell igényelni. Nem helyettesíti az útlevelet, és nem vízum.",
      sections: [
        { h: "Nem vízum", p: [
          "Az ETA előzetes engedély azoknak az utasoknak, akiknek nincs szükségük vízumra az Egyesült Királyságba. Az ellenőrzés a beszállás előtt történik: ETA nélkül a légitársaság megtagadhatja az utazást.",
          "A vízummal ellentétben nem kell időpontot foglalni és nincs interjú. Minden online zajlik." ] },
        { h: "Az útleveléhez kapcsolódik", p: [
          `Az engedély ahhoz az útlevélhez tartozik, amellyel igényelte. Ha új útlevelet kap, új ETA-t kell igényelnie — akkor is, ha a ${F.validYears} évből még van hátra.`,
          "Semmit nem kell kinyomtatni: a határon elég ugyanazt az útlevelet bemutatni." ] },
        { h: "Kinek van rá szüksége", p: [
          "A vízummentes országokból érkező utasoknak, tehát Magyarországról is, akár turizmus, rokonlátogatás, üzleti út vagy tranzit a cél.",
          "A gyermekeknek és csecsemőknek is saját ETA-ra van szükségük." ] },
      ],
    },
    application: {
      slug: "hogyan-igenyelheto",
      title: "Hogyan igényelhető az UK ETA: online, néhány perc alatt | Útmutató 2026",
      description: `Az UK ETA igénylésének lépései a GOV.UK hivatalos oldalán vagy alkalmazásában: útlevél, arckép, elérhetőségek és a ${F.fee} befizetése.`,
      h1: "Hogyan igényelhető az UK ETA",
      lead: "Az igénylés teljes egészében online zajlik, a GOV.UK hivatalos oldalán vagy a hivatalos alkalmazásban. Sehová nem kell személyesen elmennie.",
      sections: [
        { h: "Mit készítsen elő", p: [
          "Az útlevelet, amellyel utazik, egy képet az arcáról (telefonnal is elkészítheti), egy e-mail-címet és egy bankkártyát.",
          "Az adatoknak pontosan egyezniük kell az útlevéllel. Az eltérően írt név a leggyakoribb elutasítási ok." ] },
        { h: "A lépések", p: [
          `Nyissa meg a GOV.UK hivatalos oldalát vagy töltse le a hivatalos alkalmazást, olvassa be az útlevél adatoldalát, készítse el a képet, válaszoljon a háttérkérdésekre, majd fizesse be a ${F.fee}-ot.`,
          `Ezután megvárja a döntést. Általában 1 napon belül megérkezik, de számoljon legfeljebb ${F.decisionDays} munkanappal.` ] },
        { h: "Beküldés előtt ellenőrizze", p: [
          "Hogy az útlevélszám és a lejárati dátum helyesen szerepel-e, hogy az arc jól látszik-e a képen, és hogy az e-mail-cím pontos-e — a döntés ugyanis oda érkezik.",
          "Igényelje időben, ne az indulás napján." ] },
      ],
    },
    fee: {
      slug: "dij",
      title: `Az UK ETA díja: ${F.fee} a hivatalos oldalon | Vigyázzon a közvetítőkkel`,
      description: `Az UK ETA a GOV.UK oldalán ${F.fee}-ba kerül. Egyszeri fizetés ${F.validYears} évre és több utazásra. Így ismeri fel a jutalékot felszámító oldalakat.`,
      h1: "Mennyibe kerül az UK ETA",
      lead: `A hivatalos díj ${F.fee}, és egyszer kell megfizetni. Az engedély ezután ${F.validYears} évig érvényes, több utazásra.`,
      sections: [
        { h: "Egyszeri fizetés", p: [
          `Nincs éves díj és nincs közbenső megújítás: az igényléskor fizet ${F.fee}-ot, az engedély pedig ${F.validYears} évig érvényes — vagy az útlevél lejártáig.`,
          "Az összeget elutasítás esetén is levonják, mert az ügyintézés költségét fedezi." ] },
        { h: "Oldalak, amelyek többet kérnek", p: [
          "Vannak közvetítők, akik a hivatalos összeg fölé saját jutalékot számítanak. A brit hatóságok nem hatalmazták fel őket, és pontosan azt teszik, amit Ön is meg tud tenni.",
          `Ha egy oldal láthatóan többet kér ${F.fee}-nál, a különbözet az ő jutalékuk.` ] },
        { h: "Így ismeri fel a hivatalos oldalt", p: [
          "A hivatalos cím a GOV.UK domain alatt található. Legyen óvatos azokkal az oldalakkal, amelyek «hivatalos partnernek» vagy «jóváhagyott ügynöknek» nevezik magukat: a brit hatóságok senkit nem hatalmaznak fel kérelmek benyújtására.",
        ] },
      ],
    },
    "status-check": {
      slug: "statusz-ellenorzese",
      title: "Az UK ETA státuszának ellenőrzése: hol és mire van szükség | 2026",
      description: "Így ellenőrizheti, jóváhagyták-e az UK ETA-t: az értesítés e-mailben érkezik, a státusz pedig az útlevélszámmal kérdezhető le.",
      h1: "Az UK ETA státuszának ellenőrzése",
      lead: "A döntésről e-mailben értesítik. Ha nem érkezett meg, a státuszt lekérdezheti annak az útlevélnek az adataival, amellyel igényelte.",
      sections: [
        { h: "Először nézze meg az e-mailjét", p: [
          "A jóváhagyás arra a címre érkezik, amelyet az igénylésben megadott. Mielőtt hibára gyanakodna, nézze meg a levélszemét mappát is.",
          "Nyomtatható dokumentumot nem állítanak ki: az engedély az útleveléhez van rögzítve." ] },
        { h: "Mire lesz szüksége", p: [
          "Az útlevélszámra, amellyel az igénylést benyújtotta, és a személyes adataira úgy, ahogyan megadta őket.",
          "Ha másik útlevéllel igényelte, a lekérdezés nem találja meg." ] },
        { h: "Ha elhúzódik", p: [
          `A döntések többsége 1 napon belül megérkezik, de számoljon legfeljebb ${F.decisionDays} munkanappal. Ha ennél tovább tart és közeledik az indulás, forduljon a hivatalos elérhetőségekhez.`,
        ] },
      ],
    },
    validity: {
      slug: "ervenyesseg",
      title: `UK ETA: ${F.validYears} évig érvényes, vagy az útlevél lejártáig | 2026`,
      description: `Az UK ETA a jóváhagyástól számítva ${F.validYears} évig érvényes, és több utazásra szól. Új útlevél esetén újra kell igényelni.`,
      h1: "Meddig érvényes az UK ETA",
      lead: `Az engedély ${F.validYears} évig érvényes — vagy az útlevél lejártáig, ha az hamarabb következik be.`,
      sections: [
        { h: "Több utazás is belefér", p: [
          `E ${F.validYears} év alatt annyiszor utazhat az Egyesült Királyságba, ahányszor szeretne, amíg egy-egy tartózkodás nem haladja meg a ${F.staySixMonths} hónapot.`,
          "Nem kell minden utazáshoz új engedélyt igényelni." ] },
        { h: "Új útlevél esetén", p: [
          "Az engedély ahhoz az útlevélhez tartozik, amellyel igényelték. Ha megújítja az útlevelét, új ETA-t kell igényelnie, még akkor is, ha van hátralévő érvényesség.",
        ] },
        { h: "Így keresi meg a dátumot", p: [
          "A dátum a jóváhagyó e-mailben szerepel. Ha az már nincs meg, kérdezze le a státuszt az útlevéladatokkal.",
        ] },
      ],
    },
    "processing-time": {
      slug: "ugyintezesi-ido",
      title: `UK ETA: válasz általában 1 napon belül (legfeljebb ${F.decisionDays} munkanap) | 2026`,
      description: `Az UK ETA-ról szóló döntés általában 1 napon belül megérkezik, de számoljon legfeljebb ${F.decisionDays} munkanappal. Mikor érdemes igényelni.`,
      h1: "Mennyi ideig tart az UK ETA",
      lead: `A legtöbb esetben a válasz 1 napon belül megérkezik. Mégis érdemes legfeljebb ${F.decisionDays} munkanappal számolni.`,
      sections: [
        { h: "Mikor igényelje", p: [
          "Igényelje, amint lefoglalta a repülőjegyet — ne az indulás előtti napon. Ha további ellenőrzés szükséges, tovább tart.",
          "Jóváhagyott engedély nélkül a légitársaság megtagadhatja az utazást." ] },
        { h: "Miért tart néha tovább", p: [
          "Azok a kérelmek, amelyeket kézzel kell átnézni (például ha valamelyik háttérkérdésre «igen» a válasz), tovább tartanak, mint az automatikusan feldolgozottak.",
        ] },
        { h: "Ha semmi nem érkezik", p: [
          "Nézze meg a levélszemét mappát, és hogy helyes-e a megadott cím. Ezután kérdezze le a státuszt az útlevéladatokkal.",
        ] },
      ],
    },
    "required-documents": {
      slug: "szukseges-dokumentumok",
      title: "Az UK ETA dokumentumai: útlevél, fénykép és bankkártya | 2026",
      description: "Mire van szüksége az UK ETA-hoz: az útlevélre, amellyel utazik, egy arcképre, egy e-mail-címre és egy fizetési eszközre.",
      h1: "Milyen dokumentumokra van szükség",
      lead: "Az igénylés egyszerű: útlevél, egy fénykép és egy fizetési eszköz. Útiokmányokra vagy igazolásokra nincs szükség.",
      sections: [
        { h: "Útlevél", p: [
          "Ugyanannak az útlevélnek kell lennie, amellyel utazik, és érvényesnek kell lennie. Az adatokat pontosan úgy másolja át, ahogyan szerepelnek.",
        ] },
        { h: "Arckép", p: [
          "Az igénylés közben telefonnal is elkészítheti. Az arcnak jól láthatónak kell lennie, napszemüveg és bármilyen takarás nélkül, egyszínű háttér előtt.",
        ] },
        { h: "E-mail és fizetés", p: [
          `A döntés e-mailben érkezik, ezért a címnek pontosnak kell lennie. A ${F.fee} befizetése a végén, kártyával történik.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "tartozkodas-hossza",
      title: `Az UK ETA-val utazásonként legfeljebb ${F.staySixMonths} hónapig maradhat | 2026`,
      description: `Az UK ETA utazásonként legfeljebb ${F.staySixMonths} hónap tartózkodásra jogosít turizmus, látogatás vagy üzleti célból. Mire nem használható.`,
      h1: "Meddig maradhat",
      lead: `Utazásonként legfeljebb ${F.staySixMonths} hónapig tartózkodhat az Egyesült Királyságban. Az engedély turizmusra, rokonlátogatásra, üzleti útra és tranzitra szól.`,
      sections: [
        { h: "Mi megengedett", p: [
          "Turizmus, család vagy barátok meglátogatása, tárgyalások és egyedi üzleti tevékenységek, valamint tranzit az Egyesült Királyságon át.",
        ] },
        { h: "Mi nem megengedett", p: [
          "Nem dolgozhat brit munkáltatónak, és nem telepedhet le. Ezekre külön útvonalak vannak.",
          "A hosszabb tanulmányok sem tartoznak ide: az ETA rövid tartózkodásra szól." ] },
        { h: "Több utazás", p: [
          `Az engedély érvényessége alatt többször is utazhat, de egy-egy tartózkodás ${F.staySixMonths} hónapra korlátozott, és a tartózkodások nem fűzhetők korlátlanul egymás után.`,
        ] },
      ],
    },
    faq: {
      slug: "gyakori-kerdesek",
      title: "UK ETA: rövid válaszok a díjról, érvényességről és ügyintézési időről | GYIK 2026",
      description: `Gyakori kérdések az UK ETA-ról: mennyibe kerül (${F.fee}), meddig érvényes (${F.validYears} év), mennyi ideig tart, és mi van, ha elutasítják.`,
      h1: "Gyakori kérdések az UK ETA-ról",
      lead: "Rövid válaszok a leggyakoribb kérdésekre. Minden pont a teljes magyarázatra hivatkozik.",
      sections: [
        { h: `Mennyibe kerül? ${F.fee}`, p: [`A hivatalos díj a GOV.UK oldalán ${F.fee}, egyszeri fizetéssel ${F.validYears} évre.`] },
        { h: `Meddig érvényes? ${F.validYears} év`, p: ["Vagy az útlevél lejártáig, ha az hamarabb következik be. Több utazásra szól."] },
        { h: "Mennyi ideig tart? Általában 1 nap", p: [`Számoljon legfeljebb ${F.decisionDays} munkanappal, és ne hagyja az utolsó pillanatra.`] },
        { h: "És ha elutasítják?", p: ["Fellebbezésre nincs mód. Ilyenkor az utazás céljának megfelelő vízumot kellene igényelnie."] },
        { h: "A gyerekeknek is kell?", p: ["Igen. Mindenkinek, a csecsemőknek és a gyermekeknek is saját engedélyre van szükségük."] },
      ],
    },
    about: {
      slug: "az-utmutatorol",
      title: "Erről az UK ETA útmutatóról | Kik vagyunk és hogyan dolgozunk",
      description: "Ki adja ki ezt a magyar nyelvű UK ETA útmutatót, honnan származnak az adatok, és hogyan kezeljük a javításokat.",
      h1: "Erről az útmutatóról",
      lead: "Ez az útmutató magyarul mutatja be az UK ETA-t. Nem a brit hatóságok hivatalos oldala, és kérelmeket nem nyújtunk be.",
      sections: [
        { h: "Nem hivatalos oldal", p: ["Nem állunk kapcsolatban a brit hatóságokkal. Az igénylést mindig a GOV.UK hivatalos oldalán vagy a hivatalos alkalmazásban kell benyújtani."] },
        { h: "Honnan származnak az adatok", p: ["Az összegek, határidők és feltételek a GOV.UK által közzétett információkból származnak. A változó adatoknál feltüntetjük a frissítés dátumát."] },
        { h: "Javítások", p: ["Ha elavult vagy téves adatot lát, jelezze. Kijavítjuk."] },
      ],
    },
    privacy: {
      slug: "adatvedelem",
      title: "Adatvédelmi tájékoztató | UK ETA útmutató",
      description: "Milyen adatokat gyűjt ez az oldal, és mire használja őket.",
      h1: "Adatvédelmi tájékoztató",
      lead: "Ez az oldal ismerteti, hogyan kezeljük az adatokat ezen a webhelyen.",
      sections: [
        { h: "Milyen adatok", p: ["Az útmutató olvasásához nem kérünk személyes adatokat. ETA-kérelmeket nem nyújtunk be, így útlevél- vagy fizetési adatokhoz sem jutunk hozzá."] },
        { h: "Statisztikák", p: ["Összesített használati statisztikát használunk a tartalom javítására. Ez nem alkalmas egyes személyek azonosítására."] },
      ],
    },
    terms: {
      slug: "jogi-informaciok",
      title: "Jogi információk | UK ETA útmutató",
      description: "Ennek a tájékoztató jellegű UK ETA útmutatónak a felhasználási feltételei.",
      h1: "Jogi információk",
      lead: "A webhely tartalmának használatára vonatkozó feltételek.",
      sections: [
        { h: "Tájékoztató jelleg", p: ["A tartalom tájékoztató célú. A hivatalos feltételek változhatnak; igénylés előtt ellenőrizze őket a GOV.UK oldalán."] },
        { h: "Felelősség", p: ["Nem vállalunk felelősséget a kizárólag ezen útmutató alapján hozott döntésekért. Minden kérelemről a brit hatóságok döntenek."] },
      ],
    },
  },
};

export default hu;
