import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（hu・travel-b）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "londoni-kozlekedes-oyster",
    group: "travel",
    title: "Közlekedés Londonban: érintéses kártya vagy Oyster, azonos áron (2026)",
    description:
      "Londonban metrón, buszon, vonaton érintéses kártyával, telefonnal vagy Oyster-kártyával fizet, azonos díjjal. Napi és heti díjplafon, összegek a TfL-nél.",
    h1: "Fizetés a londoni tömegközlekedésben: Oyster és érintéses fizetés",
    lead: "A londoni metrón, buszokon és vonatokon a legegyszerűbb, ha érintéses bankkártyáját, telefonját vagy Oyster-kártyáját a leolvasóhoz érinti. Az érintéses fizetés és az Oyster ugyanannyiba kerül, a napi és heti díjplafon pedig korlátozza a kiadásait.",
    card: "Érintéses kártya, telefon vagy Oyster: azonos díj, díjplafon, be- és kijelentkezés.",
    sections: [
      { h: "Érintéses fizetés vagy Oyster: így fizet", blocks: [
        "A londoni tömegközlekedés — a metró (Tube), a buszok és a vonatok — „pay as you go” elven működik: érintéses bankkártyáját, fizetésre beállított telefonját vagy Oyster-kártyáját a sárga leolvasóhoz érinti, és utanként fizet.",
        "Az érintéses fizetés és az Oyster díja azonos. Ha már van otthonról érintéses kártyája vagy telefonja, Oyster-kártya vásárlása nélkül is ugyanazzal a díjjal utazhat. Rövid látogatás esetén általában az érintéses fizetés a legkényelmesebb. A Visitor Oyster kártyát viszont még az utazás előtt kell megrendelni.",
      ] },
      { h: "Díjplafon (capping): a költségek nem nőnek korlátlanul", blocks: [
        "Napi és heti díjplafon is létezik. Ha utazásai összege eléri a plafont, az adott időszak további útjaiért már nem fizet többet. A plafon attól függ, mely zónákban utazik. Az összegek idővel változnak, ezért fix összeg helyett mindig a TfL aktuális adatait ellenőrizze.",
      ] },
      { h: "Metró és vonat: be- és kijelentkezés", blocks: [
        "A metrón és a vonatokon az út elején és végén is érintenie kell — különben hibás díjat számolhatnak fel. A buszokon és a villamosokon (tram) csak felszálláskor kell érintenie, kijelentkezésre nincs szükség.",
        { ul: [
          "Metró / vonat: érintsen az út elején és az út végén is.",
          "Busz / villamos: csak felszálláskor érintsen.",
        ] },
      ] },
      { h: "A buszokon nem lehet készpénzzel fizetni", blocks: [
        "A londoni buszok nem fogadnak el készpénzt. Csak érintéses kártyával, telefonnal vagy Oyster-kártyával fizethet, ezért felszállás előtt győződjön meg róla, hogy van működő érintéses fizetőeszköze.",
      ] },
      { h: "Mindig ugyanazt a kártyát használja", blocks: [
        "Minden útnál ugyanazzal a kártyával vagy eszközzel érintsen. Egy érintéses kártyát ne használjon több utas — ahhoz, hogy a díjplafont helyesen számolják, mindenkinek a saját fizetőeszközével kell érintenie.",
      ] },
      { h: "Mielőtt az Egyesült Királyságba utazik", blocks: [
        "A tömegközlekedést csak megérkezés után veszi igénybe — a beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Érkezéskor az [útlevél-ellenőrzésen és az eGates kapukon](/hu/hatarellenorzes-egates/) halad át. Ha tömegközlekedés helyett autóval közlekedne, olvassa el, mit kell tudni az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/).",
      ] },
    ],
    faq: [
      { q: "Szükségem van Oyster-kártyára Londonban?", a: "Nem feltétlenül. Ha van érintéses bankkártyája vagy fizetésre beállított telefonja, azonnal utazhat, ugyanazon az áron, mint Oysterrel. Az érintéses fizetés és az Oyster ugyanannyiba kerül, így látogatóként általában elég az érintéses kártya." },
      { q: "Lehet készpénzzel fizetni a londoni buszokon?", a: "Nem. A londoni buszok nem fogadnak el készpénzt. Felszálláskor érintéses kártyával, telefonnal vagy Oyster-kártyával fizet, a leolvasóhoz érintve." },
      { q: "Mi a helyzet, ha egy nap alatt sokat utazom?", a: "Napi és heti díjplafon (capping) is létezik. Ha eléri a plafont, a további utakért már nem kell fizetnie. A plafon zónánként eltér, és idővel változik — az aktuális összegeket a Transport for London (TfL) oldalán ellenőrizze." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "autovezetes-britanniaban",
    group: "travel",
    title: "Autóvezetés az Egyesült Királyságban: hazai jogosítvánnyal 12 hónapig (2026)",
    description:
      "Az Egyesült Királyságban 17 évesen lehet autót vezetni. Látogatóként érvényes hazai jogosítvánnyal 12 hónapig vezethet az érkezéstől. Bal oldali forgalom.",
    h1: "Vezethet-e autót az Egyesült Királyságban külföldi jogosítvánnyal?",
    lead: "Az Egyesült Királyságban személyautót 17 éves kortól lehet vezetni (GOV.UK). Ha nem az Egyesült Királyságban él, érvényes hazai — például magyar — jogosítványával az érkezéstől számított legfeljebb 12 hónapig vezethet. Az alábbiakban a vezetési időtartam, a nemzetközi jogosítvány, a bal oldali közlekedés és a biztosítás szabályait foglaljuk össze — és azt, hogy miért nem vezetési engedély az ETA.",
    card: "Hazai jogosítvánnyal 12 hónapig, 17 éves korhatár, bal oldali közlekedés, kötelező biztosítás.",
    sections: [
      { h: "A 12 hónapos szabály: vezetés hazai jogosítvánnyal", blocks: [
        "Ha nem az Egyesült Királyságban él, érvényes hazai jogosítványával legfeljebb 12 hónapig vezethet attól a naptól számítva, amikor az országba érkezett. Ez a következőkre vonatkozik:",
        { ul: [
          "Személyautók (legfeljebb 3500 kg, legfeljebb nyolc utasülés).",
          "Motorkerékpárok.",
        ] },
        "A jogosítványnak a teljes tartózkodás alatt érvényesnek kell lennie. A 12 hónapos időszakot az érkezés napjától számítják, nem a jogosítvány kiállításának napjától.",
      ] },
      { h: "Nemzetközi jogosítvány (IDP) és fordítás", blocks: [
        "Érvényes hazai jogosítvánnyal vezethet. Ha a jogosítványt nem angol nyelven állították ki, hivatalos fordítás vagy nemzetközi jogosítvány (IDP) ajánlott, hogy a hatóságok és az autókölcsönzők könnyen el tudják olvasni az adatokat.",
        "A követelmények attól függnek, melyik ország állította ki a jogosítványt. Utazás előtt ezért ellenőrizze saját helyzetét a GOV.UK oldalán — a szabályok a kiállító országtól függően eltérhetnek.",
      ] },
      { h: "Bal oldali közlekedés, korhatár és biztosítás", blocks: [
        { ul: [
          "Bal oldali közlekedés: az Egyesült Királyságban az út bal oldalán kell haladni.",
          "Korhatár: személyautó vezetéséhez 17 év.",
          "Az Egyesült Királyságban csak érvényes gépjármű-biztosítással szabad vezetni.",
        ] },
        "Vezetés előtt ellenőrizze, hogy biztosítása érvényes-e az Egyesült Királyságban. Autóbérlésnél a biztosítás általában benne van a szerződésben — olvassa el figyelmesen a feltételeket.",
      ] },
      { h: "Nagy járművek: autóbuszok és tehergépkocsik", blocks: [
        "A nagy járművekre, például autóbuszokra és tehergépkocsikra, más szabályok vonatkoznak, mint a személyautókra és a motorkerékpárokra. Ha ilyen járművet szeretne vezetni, utazás előtt ellenőrizze a külön követelményeket a GOV.UK oldalán.",
      ] },
      { h: "Az ETA és a jogosítvány két külön dolog", blocks: [
        "Az UK ETA az Egyesült Királyságba való beutazásra jogosít — arról nem dönt, hogy vezethet-e autót. A vezetési jogot külön szabályok határozzák meg a jogosítványról, az életkorról, a biztosításról és a jármű típusáról.",
        "A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) láthatja. Érdemes megismernie a [vámszabályokat és a behozatali kereteket](/hu/vamszabalyok-britannia/), valamint azt is, hogyan működik az [útlevél-ellenőrzés és az eGates](/hu/hatarellenorzes-egates/).",
      ] },
    ],
    faq: [
      { q: "Vezethetek autót az Egyesült Királyságban magyar jogosítvánnyal?", a: "Igen. Az Egyesült Királyságon kívül élő látogatók érvényes hazai jogosítvánnyal az érkezés napjától számított legfeljebb 12 hónapig vezethetnek személyautót és motorkerékpárt." },
      { q: "Szükségem van nemzetközi jogosítványra (IDP) vagy fordításra?", a: "Érvényes hazai jogosítvánnyal vezethet. Ha a jogosítvány nem angol nyelvű, hivatalos fordítás vagy nemzetközi jogosítvány (IDP) ajánlott. A szabályok országonként eltérnek — saját helyzetét a gov.uk/driving-nongb-licence oldalon ellenőrizze." },
      { q: "Hány éves kortól lehet autót vezetni Angliában?", a: "Angliában (és az Egyesült Királyság többi részén) személyautót 17 éves kortól lehet vezetni — a legtöbben ekkor kezdhetik meg a vezetéstanulást. Az Egyesült Királyságban az út bal oldalán kell haladni, és az érvényes gépjármű-biztosítás kötelező." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "penz-es-keszpenz-britanniaban",
    group: "travel",
    title: "Az Egyesült Királyság pénzneme 2026: font (GBP), készpénz és borravaló",
    description:
      "Angliában, Skóciában és Londonban a font sterling (GBP, £) a fizetőeszköz. Készpénz ritkán kell, a kártya szinte mindig elég. £10 000-tól bejelentés kell.",
    h1: "Pénznem Angliában és Skóciában: font, készpénz és borravaló",
    lead: "Angliában, Skóciában, Walesben és Észak-Írországban 2026-ban is a font sterling (GBP, £) a fizetőeszköz. Az alábbiakban leírjuk, mennyi készpénzt vihet be bejelentés nélkül, hogyan válthat pénzt a legkényelmesebben, és mire számítson a kártyás fizetésnél és a borravalónál.",
    card: "A pénznem a font (GBP). Általában elég a kártya; £10 000 vagy több készpénzt be kell jelenteni.",
    sections: [
      { h: "Mi a pénznem Angliában és Skóciában? A font sterling (GBP, £)", blocks: [
        "Az Egyesült Királyság fizetőeszköze a font sterling (GBP, £). Eurót és más valutát a hétköznapi üzletekben általában nem fogadnak el, ezért a helyszínen kártyára vagy fontban lévő készpénzre lesz szüksége. Skóciában is a font a fizetőeszköz. Ott a Bank of Scotland, a Clydesdale Bank és a The Royal Bank of Scotland saját bankjegyeket bocsát ki, Angliában és Walesben pedig a Bank of England adja ki a bankjegyeket (forrás: Bank of England).",
      ] },
      { h: "Készpénz: £10 000-tól bejelentési kötelezettség", blocks: [
        "Ha £10 000 vagy annál több készpénzzel — beleértve az ennek megfelelő összeget más valutában — érkezik Nagy-Britanniába (GB), az összeget be kell jelentenie. A bejelentést előre, online, vagy érkezéskor a piros folyosón teheti meg. A bejelentés elmulasztása a teljes összeg lefoglalásához és legfeljebb £5000 bírsághoz vezethet.",
      ] },
      { h: "Kell készpénz Londonban és Angliában? Kártya vagy készpénz", blocks: [
        "Az Egyesült Királyságban a kártyás, különösen az érintéses fizetés nagyon elterjedt. Sok helyzetben teljesen készpénz nélkül is boldogul — a tömegközlekedéstől és a kávézóktól a nagyobb üzletekig. A londoni tömegközlekedést (TfL) érintéses kártyával vagy Oyster-kártyával fizeti (forrás: TfL).",
        { ul: [
          "Egy kevés készpénz azért jól jöhet kis üzletekben, piacokon és borravalóhoz.",
          "Utazás előtt érdeklődjön bankjánál a külföldi kártyás fizetés esetleges díjairól.",
        ] },
      ] },
      { h: "Hol lehet pénzt váltani?", blocks: [
        "Pénzt bankokban, pénzváltókban és repülőtereken válthat. Vegye figyelembe, hogy a repülőtereken az árfolyam gyakran kedvezőtlenebb. Nagyobb összeg váltása előtt hasonlítsa össze az árfolyamokat.",
      ] },
      { h: "Borravaló: szokás, nem kötelesség", blocks: [
        "Az Egyesült Királyságban a borravaló szokás, nem jogszabályi kötelezettség. A gyakorlat helyzetenként eltér:",
        { ul: [
          "Éttermek: a számlához néha 10–12,5%-os „service charge” kerül — nézze meg a tételeket. Ha nincs felszámítva szervizdíj, általában kb. 10% az irányadó.",
          "Pub: ha a pultnál rendel, borravalót általában nem várnak.",
          "Taxi: az összeg felfelé kerekítése a szokásos.",
        ] },
      ] },
      { h: "Jó tudni a beutazás előtt", blocks: [
        "A készpénzt szükség esetén a vámnál kell bejelenteni, amely az útlevél-ellenőrzés után következik — nézze meg, hogyan működnek a [vámszabályok és a behozatali keretek](/hu/vamszabalyok-britannia/). A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Ha autót bérelne, olvassa el, mit kell tudni az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/).",
      ] },
    ],
    faq: [
      { q: "Mi a fizetőeszköz Angliában és Skóciában 2026-ban?", a: "A font sterling (GBP, £) az egész Egyesült Királyságban. Skóciában három bank saját bankjegyeket bocsát ki, de a pénznem ugyanaz." },
      { q: "Kell készpénz Londonban?", a: "Általában nem: a kártyás, különösen az érintéses fizetés nagyon elterjedt, a tömegközlekedést (TfL) pedig érintéses kártyával vagy Oysterrel fizeti. Egy kevés készpénz jól jöhet kis üzletekben, piacokon és borravalóhoz." },
      { q: "Mekkora összegtől kell bejelenteni a készpénzt az Egyesült Királyságba érkezéskor?", a: "Ha £10 000 vagy annál több készpénzzel (beleértve az ennek megfelelő összeget más valutában) érkezik Nagy-Britanniába (GB), az összeget be kell jelentenie. Ezt előre, online, vagy érkezéskor a piros folyosón teheti meg. A bejelentés elmulasztása a teljes összeg lefoglalásához és legfeljebb £5000 bírsághoz vezethet." },
      { q: "Elég az Egyesült Királyságban csak a kártya?", a: "A kártyás, köztük az érintéses fizetés nagyon elterjedt, és a legtöbb helyzetben elfogadják. Gyakran kizárólag kártyával is boldogul. Egy kevés készpénz azért jól jöhet kis üzletekben vagy borravalóhoz." },
      { q: "Kötelező a borravaló az Egyesült Királyságban?", a: "Nem. A borravaló szokás, nem jogszabályi kötelezettség. Az éttermekben a számlához néha 10–12,5%-os „service charge” kerül — nézze meg a tételeket. Ha nincs felszámítva szervizdíj, általában kb. 10% az irányadó." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "afa-visszaterites-britanniaban",
    group: "travel",
    title: "ÁFA-visszatérítés az Egyesült Királyságban (VAT refund) 2026",
    description:
      "A magával vitt áru áfáját 2021. január 1. óta Angliában, Skóciában és Walesben általában nem térítik vissza. A külföldre szállított áru áfamentes lehet.",
    h1: "ÁFA-visszatérítés (VAT refund) az Egyesült Királyságban vásárolt termékekre",
    lead: "Gyakori tévhit: 2021 óta az Egyesült Királyságban általában már nem térítik vissza az áfát azokra a termékekre, amelyeket az utas magával visz haza. Az alábbiakban leírjuk, mi érvényes valójában, milyen kivétel vonatkozik az üzlet által közvetlenül külföldre küldött árura, és miért kezelik külön Észak-Írországot.",
    card: "A vásárlások áfáját 2021 óta általában nem térítik vissza. Kivétel: külföldre szállítás.",
    sections: [
      { h: "A legfontosabb: 2021 óta nincs áfa-visszatérítés a magával vitt árura", blocks: [
        "Ezt a pontot gyakran félreértik. Nagy-Britanniában (Angliában, Skóciában és Walesben) 2021. január 1. óta általában már nem térítik vissza az áfát azokra a termékekre, amelyeket az utasok megvásárolnak és a poggyászukban hazavisznek.",
        "A kiskereskedelmi exporthoz kapcsolódó áfa-visszatérítési rendszert (VAT Retail Export Scheme) ekkor megszüntették. A gyakorlatban tehát a saját maga által kivitt termékek áfáját általában nem kapja vissza.",
      ] },
      { h: "Kivétel: ha az üzlet közvetlenül külföldre küldi az árut", blocks: [
        "Ha az üzlet a terméket közvetlenül egy külföldi címre küldi, a vásárlás bizonyos esetekben áfamentes lehet. Ez azonban az üzlet eljárásától és a vonatkozó feltételektől függ, ezért vásárlás előtt érdeklődjön az adott üzletben, mire van lehetőség.",
      ] },
      { h: "Észak-Írországot külön kezelik", blocks: [
        "Észak-Írországban részben eltérő szabályok érvényesek. Az EU-n kívül élő utazók számára ott még elérhető lehet bizonyos áfa-visszatérítés, amely az Észak-Írországról szóló jegyzőkönyvhöz (Northern Ireland Protocol) kapcsolódik. A feltételek változhatnak, ezért ellenőrizze az utazása idején érvényes szabályokat.",
      ] },
      { h: "Jó tudni a repülőtéren", blocks: [
        "Akkor is, ha „Tax Free” táblákat vagy egykori visszatérítési pultokat lát, a poggyászban kivitt termékek áfáját Angliában, Skóciában és Walesben általában nem térítik vissza. Ne számítson tehát visszatérítésre, és ha bizonytalan, ellenőrizze az aktuális szabályokat.",
      ] },
      { h: "További olvasnivaló az utazás előtt", blocks: [
        "Hogy mit vihet még be és ki, azt a [vámszabályokról](/hu/vamszabalyok-britannia/) szóló útmutató ismerteti, a beutazás menetét pedig az [útlevél-ellenőrzés és eGates](/hu/hatarellenorzes-egates/) útmutató mutatja be. Ha gyerekekkel utazik, olvassa el az [utazás gyerekekkel](/hu/utazas-gyerekekkel/) című útmutatót. A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/) — a kérelem állapotát a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) láthatja.",
      ] },
    ],
    faq: [
      { q: "Visszaigényelhető az áfa (VAT) az Egyesült Királyságban vásárolt termékek után?", a: "Nagy-Britanniában (Angliában, Skóciában és Walesben) általában már nem térítik vissza az áfát azokra a termékekre, amelyeket az utasok a poggyászukban hazavisznek. A kiskereskedelmi exporthoz kapcsolódó áfa-visszatérítési rendszert (VAT Retail Export Scheme) ott 2021. január 1-jén megszüntették. Ez eltér a korábbi gyakorlattól és attól, ami egyes más országokban érvényes." },
      { q: "Lehet valahogyan áfa nélkül vásárolni az Egyesült Királyságban?", a: "Ha az üzlet a terméket közvetlenül egy külföldi címre küldi, a vásárlás bizonyos esetekben áfamentes lehet. Ez azonban az üzlet eljárásától és a vonatkozó feltételektől függ. Érdeklődjön az adott üzletben, mire van lehetőség." },
      { q: "Ugyanezek a szabályok érvényesek Észak-Írországban?", a: "Észak-Írországot külön kezelik, és ott részben eltérő szabályok érvényesek. Az EU-n kívül élő utazók számára ott még elérhető lehet bizonyos áfa-visszatérítés, amely az Észak-Írországról szóló jegyzőkönyvhöz kapcsolódik. Mielőtt visszatérítéssel számolna, ellenőrizze az aktuális feltételeket." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "sim-kartya-es-mobilnet-britanniaban",
    group: "travel",
    title: "SIM-kártya, eSIM és mobilinternet az Egyesült Királyságban (2026)",
    description:
      "Az Egyesült Királyság legnagyobb mobilszolgáltatói az EE, az O2, a Vodafone és a Three. Feltöltőkártya, eSIM, független telefon és roaming a Brexit után.",
    h1: "SIM-kártya, eSIM és mobilinternet az Egyesült Királyságban",
    lead: "Milyen mobilszolgáltatók működnek az Egyesült Királyságban, hogyan választhat látogatóként feltöltőkártyás SIM és eSIM között, mit érdemes tudni a független (kártyafüggetlen) telefonról és a roamingról — és hol talál ingyenes Wi-Fit.",
    card: "EE, O2, Vodafone és Three, feltöltőkártya vagy eSIM, valamint roaming a Brexit után.",
    sections: [
      { h: "Mobilszolgáltatók az Egyesült Királyságban", blocks: [
        "Az Egyesült Királyság legnagyobb mobilhálózatai az EE, az O2, a Vodafone és a Three. Mellettük számos virtuális szolgáltató (MVNO) is működik ugyanezeken a hálózatokon, például a giffgaff, a Lebara és a Lyca.",
        "Ezen a területen kevés az egységes hivatalos szabály, az árak és a csomagok pedig gyakran változnak. Az alábbiakat általános tájékoztatásnak tekintse, és az aktuális feltételeket a szolgáltatónál ellenőrizze.",
      ] },
      { h: "Lehetőségek látogatóknak: feltöltőkártya vagy eSIM", blocks: [
        { ul: [
          "Feltöltőkártyás SIM / turista SIM: kapható repülőtereken, telefonüzletekben és élelmiszerboltokban.",
          "eSIM: online vásárolható, és azonnal aktiválható, ha telefonja támogatja — nem kell fizikai SIM-kártyát cserélnie.",
        ] },
      ] },
      { h: "Feltétel a független telefon", blocks: [
        "Ahhoz, hogy helyi SIM-kártyát vagy eSIM-et használhasson, telefonjának hálózatfüggetlennek (SIM-függetlennek) kell lennie. Ezt jóval indulás előtt ellenőrizze jelenlegi szolgáltatójánál.",
      ] },
      { h: "Roaming a Brexit után", blocks: [
        "Az EU-ból érkező látogatóknak érdemes figyelniük a roamingdíjakra. A Brexit óta egyes szolgáltatók díjat számolhatnak fel az Egyesült Királyságban történő roamingért, mások nem. A feltételek eltérőek — a váratlan költségek elkerülése érdekében indulás előtt érdeklődjön szolgáltatójánál.",
      ] },
      { h: "Lefedettség és ingyenes Wi-Fi", blocks: [
        "A városokban a lefedettség általában jó, vidéken viszont szolgáltatónként eltérhet. A lefedettséget az Ofcom lefedettségi térképén ellenőrizheti.",
        "Ingyenes Wi-Fi gyakran elérhető kávézókban, a tömegközlekedésben és számos nyilvános helyen, ami kiegészítheti mobilkapcsolatát.",
      ] },
      { h: "Jó tudni a beutazás előtt", blocks: [
        "A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) láthatja. Ha autót bérelne, olvassa el, mit kell tudni az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/).",
      ] },
    ],
    faq: [
      { q: "Szükségem van helyi SIM-kártyára az Egyesült Királyságban?", a: "Ez a jelenlegi szolgáltatójától függ. A helyi feltöltőkártyás SIM vagy egy eSIM hasznos lehet a roamingdíjak elkerülésére és a helyszíni mobilinternethez. Az eSIM online vásárolható, és azonnal aktiválható, ha telefonja támogatja." },
      { q: "Használhatok eSIM-et az Egyesült Királyságban?", a: "Igen, ha telefonja támogatja az eSIM-et és független, online vásárolhat eSIM-et, és fizikai SIM-kártya cseréje nélkül aktiválhatja. Előre ellenőrizze, hogy készüléke kompatibilis és hálózatfüggetlen-e." },
      { q: "Használhatom szokásos módon az EU-s előfizetésemet az Egyesült Királyságban?", a: "A Brexit óta egyes szolgáltatók díjat számolnak fel az Egyesült Királyságban történő roamingért, mások nem. A feltételek szolgáltatónként és csomagonként eltérnek — indulás előtt érdeklődjön szolgáltatójánál." },
    ],
    sources: [
      { label: "Ofcom – az Egyesült Királyság hírközlési szabályozó hatósága", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "konnektor-es-feszultseg-britanniaban",
    group: "travel",
    title: "Konnektorok az Egyesült Királyságban és Londonban: G típus, 230 V (2026)",
    description:
      "Az Egyesült Királyság és London konnektorai G típusúak (BS 1363, három szögletes érintkező), 230 V, 50 Hz. Ha a töltőn INPUT 100–240 V áll, elég adapter.",
    h1: "Konnektorok az Egyesült Királyságban és Londonban",
    lead: "Az Egyesült Királyság konnektorai — Londonban és az ország többi részén egyaránt — három szögletes érintkezős, G típusúak, a feszültség pedig 230 V. Hogy milyen úti adapterre van szüksége, mikor elég egy egyszerű adapter, és mikor kellhet feszültségátalakító, azt a készülék címkéje dönti el.",
    card: "G típus, 230 V és 50 Hz. A 100–240 V jelölés azt jelenti, hogy elég egy úti adapter.",
    sections: [
      { h: "Milyen konnektorok vannak az Egyesült Királyságban és Londonban?", blocks: [
        "Az Egyesült Királyságban G típusú konnektorok vannak — a dugón három szögletes érintkező található. A feszültség 230 V, a frekvencia 50 Hz. Ha más dugós készüléket szeretne csatlakoztatni, G típusú úti adapterre van szüksége.",
      ] },
      { h: "100–240 V áll a töltőn? Akkor elég egy adapter", blocks: [
        "Az alacsonyabb feszültségű országokból — például Japánból (100 V) vagy Észak-Amerikából (120 V) — származó készülékek is működnek az Egyesült Királyságban, ha a készülék INPUT jelölésén „100–240 V” szerepel (úgynevezett dual voltage). Ilyenkor csak G típusú úti adapterre van szüksége.",
        "A telefon-, laptop- és fényképezőgép-töltők többségén 100–240 V jelölés áll. Bár általában így van, mindig olvassa el saját készüléke adattábláját (INPUT).",
      ] },
      { h: "Mikor lehet szükség feszültségátalakítóra?", blocks: [
        "Azok a készülékek, amelyek INPUT jelölésén csak az otthoni feszültség szerepel — gyakran nagy teljesítményű eszközök, például egyes hajszárítók és hajvasalók —, feszültségátalakítót (transzformátort) igényelhetnek. Mielőtt bármit csatlakoztatna, ellenőrizze a jelölést; ha bizonytalan, a legbiztonságosabb, ha a készüléket otthon hagyja.",
      ] },
      { h: "USB-csatlakozók és gyakorlati tanácsok", blocks: [
        "Egyes szálláshelyeken vannak USB-csatlakozók, de a legbiztosabb, ha saját G típusú úti adaptert visz magával. Így attól függetlenül töltheti készülékeit, hogyan van felszerelve a szoba.",
      ] },
      { h: "Ellenőrzőlista indulás előtt", blocks: [
        { ul: [
          "Olvassa el minden töltő és készülék INPUT jelölését.",
          "100–240 V szerepel rajta? Akkor elég egy G típusú adapter.",
          "Egy nagy teljesítményű készüléken csak az otthoni feszültség áll? Akkor átalakítóra lehet szükség.",
          "Vigyen saját adaptert, és ne számítson a szoba USB-csatlakozóira.",
        ] },
      ] },
      { h: "Mielőtt az Egyesült Királyságba utazik", blocks: [
        "A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Érkezéskor az [útlevél-ellenőrzésen és az eGates kapukon](/hu/hatarellenorzes-egates/) halad át. Ha autót vezetne, olvassa el, mit kell tudni az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/).",
      ] },
      { h: "Hivatalos és műszaki hivatkozások", blocks: [
        "A 13 A-es dugók és konnektorok brit szabványa a BS 1363 (G típus; Plugs and Sockets etc. (Safety) Regulations 1994). 230 V és 50 Hz: Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "Működni fog a töltőm az Egyesült Királyságban?", a: "Ha a töltőn INPUT 100–240 V (dual voltage) jelölés áll, működni fog az Egyesült Királyságban — ilyenkor csak G típusú úti adapterre van szüksége. A legtöbb telefon-, számítógép- és fényképezőgép-töltőn ilyen jelölés szerepel. Mindig ellenőrizze a készülék jelölését." },
      { q: "Szükségem van feszültségátalakítóra?", a: "Feszültségátalakítóra (transzformátorra) olyan nagy teljesítményű készülékeknél lehet szükség, amelyek csak az otthoni feszültségre készültek, például egyes hajszárítóknál és hajvasalóknál. Ellenőrizze a jelölést (INPUT) — ha csak az otthoni feszültség szerepel rajta, átalakító kellhet." },
      { q: "Milyen konnektorok vannak az Egyesült Királyságban és Londonban?", a: "Az Egyesült Királyság konnektorai — Londonban és az ország többi részén egyaránt — három szögletes érintkezős, G típusúak (BS 1363, 13 A). A feszültség 230 V, a frekvencia 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "egeszsegugy-nhs-ehic",
    group: "travel",
    title: "Egészségügyi ellátás, NHS és EHIC/GHIC az Egyesült Királyságban (2026)",
    description:
      "Az NHS-nél a sürgősségi ellátás (A&E) és a háziorvos (GP) ingyenes. Mit fedez az EHIC/GHIC, miért erősen ajánlott az utasbiztosítás, 999 és NHS 111.",
    h1: "Egészségügyi ellátás, NHS és EHIC/GHIC az Egyesült Királyságban",
    lead: "Mi ingyenes az NHS-nél, hogyan működik az EHIC/GHIC az EU-ból, az EFTA-országokból és Svájcból érkező látogatók számára, miért erősen ajánlott az utasbiztosítás, és milyen segélyhívó számokat használhat.",
    card: "Ingyenes sürgősségi ellátás és háziorvos, EHIC/GHIC, utasbiztosítás, 999 és 111.",
    sections: [
      { h: "A sürgősségi ellátás és a háziorvos ingyenes", blocks: [
        "Az NHS-nél a sürgősségi ellátás (A&E) és a háziorvosi (GP) vizit mindenki számára ingyenes — tartózkodási státusztól függetlenül, és attól függetlenül is, hogy vannak-e Önnél iratok. Ez a sürgős elsődleges ellátásra vonatkozik.",
      ] },
      { h: "Látogatók az EU-ból, az EFTA-országokból és Svájcból: EHIC/GHIC", blocks: [
        "A hazájukban kiállított, érvényes EHIC/GHIC kártyával az EU-ból, az EFTA-országokból és Svájcból érkező látogatók ideiglenes tartózkodásuk alatt orvosilag szükséges ellátást kaphatnak. Vegye figyelembe, hogy az EHIC/GHIC nem fedez minden költséget, és nem helyettesíti az utasbiztosítást.",
      ] },
      { h: "EHIC/GHIC nélküli látogatók", blocks: [
        "Az EHIC/GHIC kártyával nem rendelkező látogatóknak a sürgősségi ellátáson túli kórházi kezelésért díjat számolhatnak fel (a rendelkezésre álló információk szerint az NHS standard díjának 150%-át). A halaszthatatlan sürgős ellátást azonban mindig megadják, a fizetést pedig utólag rendezik.",
      ] },
      { h: "Az utasbiztosítás erősen ajánlott", blocks: [
        "Az utasbiztosítás erősen ajánlott. Az EHIC/GHIC nem fedez mindent — például a hazaszállítást (repatriáció) általában nem tartalmazza. A biztosítás ezért fontos kiegészítés, amelyet a GHIC kártya nem helyettesít.",
      ] },
      { h: "Segélyhívó számok és egészségügyi tanácsadás", blocks: [
        { ul: [
          "999 (vagy 112) — segélyhívó szám sürgős esetekre.",
          "NHS 111 — nem sürgős egészségügyi tanácsadás.",
          "A vényköteles gyógyszerekért receptdíjat számolhatnak fel (Angliában).",
        ] },
      ] },
      { h: "Jó tudni a beutazás előtt", blocks: [
        "A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) láthatja. Ha autót bérelne, olvassa el, mit kell tudni az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/).",
      ] },
    ],
    faq: [
      { q: "Kell fizetni a sürgősségi ellátásért az Egyesült Királyságban?", a: "Az NHS-nél a sürgősségi ellátás (A&E) és a háziorvosi (GP) vizit mindenki számára ingyenes, tartózkodási státusztól és iratoktól függetlenül. A sürgősségi ellátáson túli kórházi kezelésért viszont díjat számolhatnak fel azoknak a látogatóknak, akiknek nincs EHIC/GHIC kártyájuk." },
      { q: "Használhatom az EHIC vagy GHIC kártyát az Egyesült Királyságban?", a: "Az EU-ból, az EFTA-országokból és Svájcból érkező látogatók a hazájukban kiállított, érvényes EHIC/GHIC kártyával ideiglenes tartózkodásuk alatt orvosilag szükséges ellátást kaphatnak. Az EHIC/GHIC azonban nem fedez minden költséget, és nem helyettesíti az utasbiztosítást." },
      { q: "Szükségem van utasbiztosításra az Egyesült Királyságba?", a: "Az utasbiztosítás erősen ajánlott. Az EHIC/GHIC nem fedez mindent — például a hazaszállítást (repatriáció) általában nem tartalmazza. Az utasbiztosítás ezért fontos kiegészítés, amelyet a GHIC kártya nem helyettesít." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "segelyhivo-szamok-es-biztonsag",
    group: "travel",
    title: "Segélyhívó szám az Egyesült Királyságban: vészhelyzetben 999, egészség 111 | 2026",
    description:
      "Vészhelyzetben hívja a 999-et (vagy a 112-t): rendőrség, tűzoltóság, mentő, ingyenesen. Nem sürgős rendőrségi ügyben 101, egészségügyi tanácsért NHS 111.",
    h1: "Segélyhívó számok és biztonság az Egyesült Királyságban",
    lead: "A legfontosabb elöljáróban: vészhelyzetben a 999-et (vagy a 112-t) hívja. Az alábbiakban bemutatjuk a 999 és a 101 közötti különbséget, az NHS 111 egészségügyi tanácsadó vonalat, a segélyhívás menetét, valamint néhány általános biztonsági tanácsot utazóknak.",
    card: "Vészhelyzetben 999 vagy 112, nem sürgős rendőrségi ügyekben 101, tanácsért NHS 111.",
    sections: [
      { h: "Segélyhívó számok: 999 és 112", blocks: [
        "Vészhelyzetben — ha rendőrségre, tűzoltóságra vagy mentőre van szüksége — hívja a 999-et. A hívás ingyenes, és bármilyen telefonról indítható, akkor is, ha saját szolgáltatójának nincs lefedettsége.",
        "Az egységes európai segélyhívó szám, a 112 is működik az Egyesült Királyságban, és ugyanahhoz a segélyhívó központhoz kapcsol, mint a 999. Bármelyik számot használhatja.",
        "Híváskor megkérdezik, melyik szolgálatra van szüksége — police (rendőrség), fire (tűzoltóság), ambulance (mentő) vagy coastguard (parti őrség).",
      ] },
      { h: "Nem sürgős ügyek: 101 és NHS 111", blocks: [
        "Ha a helyzet nem sürgős, a 999 helyett külön számok állnak rendelkezésre:",
        { ul: [
          "101 — a rendőrség száma nem sürgős ügyekre, például kisebb bűncselekmény vagy elveszett tárgy bejelentésére.",
          "NHS 111 — nem sürgős egészségügyi tanácsadás. Tanácsot kap a tüneteivel kapcsolatban, és a megfelelő szintű ellátáshoz irányítják.",
        ] },
        "A megfelelő szám használatával segít, hogy a 999 a valódi vészhelyzetekre összpontosíthasson. A brit egészségügyi ellátás működéséről bővebben az [egészségügyi ellátás és az NHS az Egyesült Királyságban](/hu/egeszsegugy-nhs-ehic/) című útmutatóban olvashat.",
      ] },
      { h: "Így zajlik a segélyhívás", blocks: [
        "Ha a 999-et vagy a 112-t hívja, egy diszpécserhez kapcsolják, aki megkérdezi, melyik szolgálatra van szüksége, és hol tartózkodik. Igyekezzen a helyszínt és a történteket a lehető legvilágosabban leírni.",
        "Ha nehezen hall vagy beszél, külön megoldások is rendelkezésre állnak: előzetes regisztrációt követően az emergencySMS szolgáltatáson keresztül SMS-t küldhet a 999-re, illetve ha nem tud szabadon beszélni, használhatja az úgynevezett silent solution funkciót (a hívás kapcsolása után nyomja meg az 55-öt). A szolgáltatások feltételeit a hivatalos források részletesen ismertetik.",
      ] },
      { h: "Általános biztonsági tanácsok utazóknak", blocks: [
        "Mint sok úti célon, érdemes vigyázni a zsebtolvajokra és a táskarablókra a turistalátványosságoknál, a tömegközlekedésben és a zsúfolt helyeken. Néhány bevált tanács:",
        { ul: [
          "Tartsa értékeit a teste közelében, és ne hagyja őrizetlenül a táskáit.",
          "Tömegben ne mutogassa telefonját, pénztárcáját és értékes tárgyait.",
          "Az elveszett tárgyakat vagy kisebb bűncselekményeket a rendőrségnek a 101-es számon vagy a legközelebbi rendőrőrsön jelentse be.",
        ] },
        "Az utasbiztosítás megkötése is bölcs döntés lehet. Ha autót vezetne, ismerje meg a brit közlekedési szabályokat az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/) szóló útmutatóban.",
      ] },
      { h: "Elveszett útlevél: forduljon a nagykövetséghez", blocks: [
        "Ha útlevele az utazás során elveszik, forduljon hazája nagykövetségéhez vagy konzulátusához, ahol segítenek az ideiglenes úti okmányok ügyében. Lopás esetén érdemes a rendőrségen is bejelentést tenni. A beutazáshoz emellett érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/) — a kérelem állapotát a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) láthatja. Hogy mit vihet át a határon és mit nem, azt a [vámszabályok és behozatali keretek](/hu/vamszabalyok-britannia/) című útmutató ismerteti.",
      ] },
    ],
    faq: [
      { q: "Milyen számot kell hívni vészhelyzetben az Egyesült Királyságban?", a: "Hívja a 999-et, ha a vészhelyzetben rendőrségre, tűzoltóságra vagy mentőre van szükség. A 112 ugyanígy működik, és ugyanahhoz a segélyhívó központhoz kapcsol. Mindkettő ingyenes, és bármilyen telefonról hívható." },
      { q: "Mit tegyek, ha a helyzet nem sürgős?", a: "Nem sürgős rendőrségi ügyekben hívja a 101-et. Ha nem sürgős egészségügyi tanácsra van szüksége, hívja az NHS 111-et, ahol tanácsot kap a tüneteivel kapcsolatban, és a megfelelő ellátáshoz irányítják." },
      { q: "Hogyan védekezhetek a zsebtolvajok ellen?", a: "Tartsa értékeit a teste közelében, tömegben ne mutogassa telefonját és pénztárcáját, és legyen éber a turistalátványosságoknál és a tömegközlekedésben. Ha meglopják, a rendőrséget a 101-es számon érheti el, vagy fordulhat a legközelebbi rendőrőrshöz." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "munkaszuneti-napok-britannia-2026",
    group: "travel",
    title: "Bank holiday az Egyesült Királyságban 2026: munkaszüneti napok",
    description:
      "Anglia és Wales bank holiday napjai 2026-ban a GOV.UK szerint: bankok zárva, rövidebb nyitvatartás, ritkább járatok — karácsonykor szinte minden zárva.",
    h1: "Bank holiday napok az Egyesült Királyságban 2026-ban",
    lead: "Bank holiday napokon a bankok zárva tartanak, sok üzlet rövidebb nyitvatartással üzemel, és a tömegközlekedés ritkábban járhat. Az alábbiakban Anglia és Wales hivatalos munkaszüneti napjait találja 2026-ra a GOV.UK szerint — és azt, mit jelentenek ezek az utazására nézve.",
    card: "Anglia és Wales munkaszüneti napjai 2026-ban, mi tart nyitva, és mi zár be karácsonykor.",
    sections: [
      { h: "Bank holiday napok Angliában és Walesben 2026-ban", blocks: [
        "A GOV.UK szerint 2026-ban Angliában és Walesben a következő hivatalos bank holiday napok érvényesek. Skóciában és Észak-Írországban a dátumok részben eltérnek.",
        { table: { head: ["Dátum", "Munkaszüneti nap"], rows: [
          ["január 1.", "Újév (New Year's Day)"],
          ["április 3.", "Nagypéntek (Good Friday)"],
          ["április 6.", "Húsvéthétfő (Easter Monday)"],
          ["május 4.", "Early May bank holiday"],
          ["május 25.", "Spring bank holiday"],
          ["augusztus 31.", "Summer bank holiday"],
          ["december 25.", "Karácsony (Christmas Day)"],
          ["december 28.", "Karácsony másnapja helyett kiadott szabadnap (Boxing Day)"],
        ] } },
      ] },
      { h: "Mi tart nyitva — és mit érint a munkaszüneti nap?", blocks: [
        "Bank holiday napokon a bankok zárva tartanak. Sok üzlet és látnivaló nyitva van, de gyakran rövidebb nyitvatartással. A tömegközlekedés ritkábban járhat, például vasárnapi menetrend szerint.",
        "A nyitvatartást és a menetrendet előre ellenőrizze arra a napra, amelyre tervez, mivel ezek helyenként és szolgáltatónként eltérnek.",
      ] },
      { h: "Karácsony: szinte minden zárva", blocks: [
        "Karácsony napja (december 25.) különleges: szinte minden zárva tart, és a tömegközlekedés nagy része nem közlekedik. Ha karácsony körül utazik, tervezzen tartalékidővel, és ne számítson a szokásos menetrendre.",
      ] },
      { h: "Pótnapok, ha az ünnep hétvégére esik", blocks: [
        "Ha egy bank holiday szombatra vagy vasárnapra esik, a szabadnap általában a következő hétköznapra kerül (úgynevezett pótnap). Ezért esik a fenti lista néhány dátuma egy hétvégét követő hétköznapra.",
      ] },
      { h: "Mielőtt az Egyesült Királyságba utazik", blocks: [
        "A beutazáshoz érvényes UK ETA szükséges, amelyet [így igényelhet](/hu/hogyan-igenyelheto/), a kérelem állapotát pedig a [státusz ellenőrzésével](/hu/statusz-ellenorzese/) követheti. Érkezéskor az [útlevél-ellenőrzésen és az eGates kapukon](/hu/hatarellenorzes-egates/) halad át. Ha az utazás során autót vezetne, olvassa el, mit kell tudni az [autóvezetésről az Egyesült Királyságban](/hu/autovezetes-britanniaban/).",
      ] },
    ],
    faq: [
      { q: "Mikor vannak a bank holiday napok az Egyesült Királyságban 2026-ban?", a: "A GOV.UK szerint Anglia és Wales hivatalos bank holiday napjai 2026-ban: január 1. (újév), április 3. (nagypéntek), április 6. (húsvéthétfő), május 4. (Early May), május 25. (Spring), augusztus 31. (Summer), december 25. (karácsony) és december 28. (Boxing Day helyett kiadott szabadnap). Skóciában és Észak-Írországban a dátumok részben eltérnek." },
      { q: "Nyitva vannak az üzletek bank holiday napokon?", a: "A bankok zárva tartanak. Sok üzlet és látnivaló nyitva van, de gyakran rövidebb nyitvatartással. Karácsony napján (december 25.) szinte minden zárva tart." },
      { q: "Hogyan érintik a munkaszüneti napok a tömegközlekedést?", a: "A tömegközlekedés ritkábban járhat, például vasárnapi menetrend szerint. Karácsony napján a járatok nagy része nem közlekedik, ezért tervezze meg utazási napjait tartalékidővel." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
