import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（no・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "innreise-og-visum",
    group: "travel",
    hub: true,
    title: "Innreise til Storbritannia og visum – guide 2026",
    description: `Reglene for innreise til Storbritannia: UK ETA for opphold på inntil ${F.staySixMonths} måneder, når du trenger visum, passkontroll (eGate), dokumenter og reiser med barn.`,
    h1: "Innreise til Storbritannia og visum",
    lead: "En samlet guide til reglene for innreise til Storbritannia: når en UK ETA er nok, når du trenger visum, hvordan grensekontrollen foregår og hvilke dokumenter du bør ha klare.",
    card: `Når ETA er nok, når du trenger visum, og hva du må ha med på grensen`,
    sections: [
      { h: `ETA eller visum? Opphold på inntil ${F.staySixMonths} måneder`, blocks: [
        `Til turisme, forretninger, familiebesøk eller transitt, ved opphold på inntil ${F.staySixMonths} måneder, trenger europeiske borgere, også nordmenn, ikke visum – det holder med en UK ETA (Electronic Travel Authorisation). Søknaden gjøres på nett, og de fleste får en automatisk avgjørelse i løpet av noen minutter. Søk likevel minst ${F.decisionDays} virkedager før reisen, fordi enkelte søknader kan kreve ekstra gjennomgang.`,
        `En ETA koster ${F.fee}, er gyldig i ${F.validYears} år og gir rett til flere innreiser. Les mer i [Hva er UK ETA](/no/hva-er-eta/).`,
      ] },
      { h: "Når du trenger visum", blocks: [
        `Et britisk visum kreves ved opphold lenger enn ${F.staySixMonths} måneder og ved reiser for langvarige studier, arbeid eller bosetting. De vanligste typene er:`,
        { ul: [
          "Studentvisum – langvarige studier (vanligvis 2 til 5 år avhengig av utdanningen).",
          "Arbeidsvisum – arbeid i Storbritannia; typen avhenger av tilbudet og kvalifikasjonene dine.",
          "Familievisum – for å gjenforenes med et familiemedlem som bor i Storbritannia.",
          "Youth Mobility Scheme – for unge personer fra utvalgte land (opphold på inntil 2 år).",
        ] },
      ] },
      { h: "Grensekontroll: eGate og manuell passkontroll", blocks: [
        "På britiske flyplasser skjer grensekontrollen via automatiske eGate-sluser (som bruker biometrisk pass) eller ved en manuell skranke med en grensebetjent. eGate gjør passkontrollen raskere; har betjenten spørsmål om formålet med reisen, kan det bli en samtale. Hvem som kan bruke de automatiske slusene, og hvordan passeringen foregår steg for steg, leser du i [Passkontroll og eGates](/no/passkontroll-egates/).",
        "Etter passkontrollen kommer tollen – hvilke matvarer og varer du kan ta med, leser du i [Tollregler og kvoter](/no/tollregler-storbritannia/).",
      ] },
      { h: "Nødvendige dokumenter", blocks: [
        { ul: [
          "Pass som er gyldig under hele oppholdet (nasjonalt ID-kort godtas ikke siden oktober 2021).",
          "UK ETA knyttet til dette passet (eller tilsvarende visum ved lengre opphold).",
          "Støttedokumenter: bekreftelse på overnatting, returbillett og midler til oppholdet kan bli kontrollert.",
        ] },
      ] },
      { h: "Reise med barn (personer under 18 år)", blocks: [
        "Alle må ha sin egen UK ETA, uansett alder – også spedbarn og barn. Barn som reiser uten en av eller begge foreldrene, kan bli bedt om å vise et dokument som bekrefter at foresatte samtykker til reisen. Det er lurt å ha med fødselsattest eller et skriftlig samtykke (på engelsk). Les mer i [Reise med barn til Storbritannia](/no/reise-med-barn/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "krav-til-pass",
    group: "travel",
    title: "Krav til pass for England 2026: gyldig hele oppholdet",
    description: "Passkrav for England/UK: passet må være gyldig hele oppholdet. For EU-borgere holder ID-kort bare i visse tilfeller, for eksempel ved settled status.",
    h1: "Krav til pass for reise til Storbritannia: gyldighet og ETA",
    lead: `Som nordmann eller annen europeisk borger trenger du et pass som er gyldig under hele oppholdet i Storbritannia. Passet er dessuten knyttet til ETA-en din (${F.fee}). For EU-borgere holder et nasjonalt ID-kort bare i visse tilfeller, for eksempel ved settled eller pre-settled status – sjekk hva som gjelder for deg.`,
    card: "Passet må være gyldig hele oppholdet, og ETA-en følger passet",
    sections: [
      { h: "Gyldig pass under hele oppholdet", blocks: [
        "For å besøke Storbritannia trenger du et gyldig pass, og det skal som regel være gyldig under hele oppholdet.",
        "For mange nasjonaliteter kreves det vanligvis ikke noe tillegg, som at passet må være gyldig i seks måneder ekstra etter innreisen. Kravene kan likevel variere med nasjonalitet, så sjekk hva som gjelder for ditt land på gov.uk før reisen.",
      ] },
      { h: "ETA-en er knyttet til passet", blocks: [
        "En ETA er knyttet til passet du brukte da du søkte, og du reiser med det samme passet som du oppga i søknaden.",
        "Fornyer eller bytter du pass, må du som regel søke om en ny ETA for det nye passet. Derfor er det lurt å sjekke passets gyldighet i god tid før du søker om ETA.",
      ] },
      { h: "Alle reisende trenger eget pass – også spedbarn", blocks: [
        "Hver reisende, også spedbarn og barn, trenger som regel sitt eget pass for å reise til Storbritannia, og i tillegg sin egen ETA. Les mer i [Reise med barn til Storbritannia](/no/reise-med-barn/). Siden det kan ta tid å skaffe pass til barn, bør du begynne i god tid.",
      ] },
      { h: "Flere pass eller dobbelt statsborgerskap", blocks: [
        "Har du dobbelt statsborgerskap eller flere pass, reiser du som regel inn med passet som ETA-en din er knyttet til. Sørg derfor for at ETA-en er knyttet til passet du faktisk skal reise med.",
      ] },
      { h: "Neste steg før reisen", blocks: [
        "Når passet er i orden, kan du [søke om UK ETA](/no/slik-soker-du/) og deretter [sjekke statusen](/no/sjekk-status/). Ved ankomst går du gjennom [passkontrollen og eGates](/no/passkontroll-egates/), og hva du kan ta med, står i guiden om [tollen i Storbritannia](/no/tollregler-storbritannia/). De generelle innreisereglene finner du i [Innreise til Storbritannia og visum](/no/innreise-og-visum/), og for mellomlandinger i guiden om transitt gjennom Storbritannia.",
      ] },
    ],
    faq: [
      { q: "Hvor lenge må passet være gyldig for en reise til Storbritannia?", a: "For å besøke Storbritannia trenger du som regel et gyldig pass som gjelder under hele oppholdet. For mange nasjonaliteter kreves det vanligvis ikke noe tillegg, som at passet skal være gyldig i seks måneder ekstra etter innreisen, men kravene kan variere. Sjekk derfor hva som gjelder for ditt land på gov.uk før reisen." },
      { q: "Hvilket pass er ETA-en knyttet til?", a: "En ETA er knyttet til passet du brukte da du søkte, og du reiser med det samme passet. Fornyer eller bytter du pass, må du som regel søke om ny ETA for det nye passet. Har du dobbelt statsborgerskap og flere pass, reiser du inn med passet ETA-en er knyttet til." },
      { q: "Trenger barn eget pass til Storbritannia?", a: "Alle reisende, også spedbarn, trenger som regel sitt eget pass for å reise til Storbritannia. Hver reisende trenger i tillegg sin egen ETA. Sjekk kravene i god tid, fordi det kan ta tid å skaffe pass til barn." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "passkontroll-egates",
    group: "travel",
    title: "Passkontroll i Storbritannia: eGates i London (2026)",
    description: "Med norsk pass og gyldig UK ETA kan du bruke eGates – ingen spørsmål, ingen stempel. Fra 8. juli 2026 kan også barn fra 8 år bruke eGates.",
    h1: "Passkontroll i Storbritannia og eGates",
    lead: "Hvem som kan bruke de automatiske eGate-slusene på Londons flyplasser, hvordan passeringen foregår steg for steg, hva grensebetjenten kan spørre om ved skranken, og hva som endres for familier fra 8. juli 2026.",
    card: "Hvem som kan bruke eGates, og nytt fra 8. juli 2026: barn fra 8 år",
    sections: [
      { h: "Nytt fra 8. juli 2026: eGates fra 8 år", blocks: [
        "Fra 8. juli 2026 kan barn som er 8 år eller eldre, bruke eGates – tidligere var grensen 10 år. To vilkår gjelder: barnet må være minst 120 cm høyt, og barn mellom 8 og 17 år må reise sammen med en voksen.",
        "For mange familier betyr det at hele reisefølget nå kan gå gjennom de automatiske slusene, uten å stå i kø ved skranken med grensebetjenter.",
      ] },
      { h: "Hvem kan bruke eGates", blocks: [
        "eGates er åpne for passinnehavere fra:",
        { ul: [
          "alle EU-land,",
          "Island, Liechtenstein, Norge og Sveits,",
          "Australia, Canada, Japan, New Zealand, Singapore, Sør-Korea og USA.",
        ] },
        "Vilkåret er at du har en gyldig reisetillatelse – for norske reisende betyr det i praksis en gyldig UK ETA (eller eVisa). Har du ingen ennå, se hvordan du [søker om UK ETA](/no/slik-soker-du/).",
        "På 15 flyplasser og togterminaler i Storbritannia finnes det over 290 eGates – blant annet på [Londons flyplasser](/no/flyplasser-i-london/) som Heathrow.",
      ] },
      { h: "Slik fungerer en eGate: ingen spørsmål, ingen stempel", blocks: [
        { ul: [
          "Legg det biometriske passet, oppslått på siden med bildet, på leseren.",
          "Se inn i kameraet – systemet sammenligner ansiktet ditt med bildet i passet.",
          "Slusen åpnes og du går gjennom – uten samtale med en betjent og uten innreisestempel i passet.",
        ] },
        "Hvis slusen ikke gjenkjenner deg (for eksempel på grunn av et slitt pass), blir du ganske enkelt henvist til skranken med grensebetjenter.",
      ] },
      { h: "Manuell passkontroll: de 5 mulige spørsmålene", blocks: [
        "Går du gjennom kontrollen hos en grensebetjent, kan du få spørsmål om:",
        { ul: [
          "Formålet med reisen – turisme, forretninger, familiebesøk.",
          "Lengden på oppholdet – hvor mange dager du blir.",
          "Overnattingen – adressen til hotellet eller verten.",
          "Hjemreisen – dato og bestilling for returen.",
          "Økonomiske midler – nok penger til oppholdet.",
        ] },
      ] },
      { h: "Nødvendige dokumenter", blocks: [
        { ul: [
          "Biometrisk pass som er gyldig under hele oppholdet.",
          "Gyldig UK ETA – den er elektronisk knyttet til passet og trenger ikke skrives ut; ta likevel gjerne vare på e-posten med godkjenningen.",
        ] },
        "Er du usikker på søknaden din, se hvordan du [sjekker statusen på ETA-en](/no/sjekk-status/). For mellomlandinger i Storbritannia gjelder egne regler – se guiden om transitt gjennom Storbritannia.",
      ] },
      { h: "Familier med barn: dette gjelder", blocks: [
        { ul: [
          "Barn fra 8 år (og minst 120 cm høye) bruker eGates; barn mellom 8 og 17 år alltid sammen med en voksen.",
          "Barn under 8 år går gjennom skranken med grensebetjenter sammen med foreldrene.",
          "Hvert barn – også spedbarn – trenger sin egen UK ETA.",
          "De generelle innreisereglene finner du i [Innreise til Storbritannia og visum](/no/innreise-og-visum/).",
        ] },
      ] },
      { h: "Etter passkontrollen: tollen", blocks: [
        "Etter passkontrollen kommer tollkontrollen – merk at det er forbudt å ta med kjøtt og meieriprodukter fra EU til Storbritannia. Les mer i guiden om [tollregler og kvoter](/no/tollregler-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Kan jeg bruke eGates med norsk pass?", a: "Ja. eGates er åpne for passinnehavere fra alle EU-land (samt Island, Liechtenstein, Norge og Sveits, i tillegg til Australia, Canada, Japan, New Zealand, Singapore, Sør-Korea og USA), forutsatt at du har en gyldig reisetillatelse som UK ETA eller eVisa." },
      { q: "Fra hvilken alder kan barn bruke eGates?", a: "Siden 8. juli 2026 kan barn fra 8 år bruke eGates (tidligere var grensen 10 år). Barnet må være minst 120 cm høyt, og barn mellom 8 og 17 år må reise sammen med en voksen." },
      { q: "Blir passet stemplet når jeg går gjennom en eGate?", a: "Nei. Når du passerer en eGate, stiller ingen betjent spørsmål, og det blir ikke satt noe innreisestempel i passet. UK ETA-en din er elektronisk knyttet til passet." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "tollregler-storbritannia",
    group: "travel",
    title: "Hva kan du ta med til England? Tollregler og kvoter (2026)",
    description: "Til Storbritannia: tollfritt 4 l brennevin, 18 l vin og 42 l øl. Ikke meieriprodukter eller kjøtt fra EU. Kontanter fra £10 000 må deklareres.",
    h1: "Hva kan du ta med til England? Tollen i Storbritannia",
    lead: "Den viktigste regelen: fra EU kan du ikke ta med kjøtt og meieriprodukter til Storbritannia. Her ser du hvilke matvarer som er tillatt, unntaket for barnemat, kvotene for alkohol og tobakk, og når kontanter må deklareres.",
    card: "Ikke kjøtt og meieri fra EU, kvoter for alkohol og tobakk, kontanter fra £10 000",
    sections: [
      { h: "Regel nr. 1: ikke kjøtt og meieriprodukter fra EU", blocks: [
        "Fra EU er det forbudt å ta med kjøtt og meieriprodukter til Storbritannia (England, Skottland, Wales). Forbudet omfatter:",
        { ul: [
          "Meieriprodukter: ost, melk, smør, yoghurt.",
          "Kjøtt: svin, storfe, sau, geit og vilt samt produkter av disse – også salami, pølser, skinke og smørbrød med kjøtt eller ost.",
        ] },
        "Regelen gjelder også små mengder i håndbagasjen – et skinkesmørbrød kjøpt på flyplassen må spises opp eller kastes før kontrollen.",
        { note: "Reglene ovenfor gjelder varer fra EU. Reiser du fra Norge eller et annet land utenfor EU, sjekk hva som gjelder for deg på GOV.UK." },
      ] },
      { h: "Unntaket: barnemat (inntil 2 kg)", blocks: [
        "Morsmelkerstatning, barnemat og spesialnæring til medisinsk bruk er tillatt opptil 2 kg per person, forutsatt at det ligger i uåpnet originalemballasje og ikke må oppbevares kjølig før bruk.",
      ] },
      { h: "Matvarer du kan ta med uten problemer", blocks: [
        { ul: [
          "Brød (men ikke smørbrød med kjøtt eller meieriprodukter).",
          "Kaker uten fersk krem, kjeks og sjokolade.",
          "Pasta og ferdigpakkede supper.",
          "Fisk, egg og honning – tillatt til eget bruk.",
        ] },
        "Er du usikker, sjekk det konkrete produktet på GOV.UK før avreise – reglene varierer med matvarekategori.",
      ] },
      { h: "Alkohol og tobakk: tollfrie kvoter ved ankomst til Storbritannia", blocks: [
        { table: { head: ["Kategori", "Tollfri kvote"], rows: [
          ["Øl", "42 liter"],
          ["Vin uten kullsyre", "18 liter"],
          ["Brennevin (over 22 %)", "4 liter eller 9 liter drikkevarer på inntil 22 %"],
          ["Sigaretter", "200 stykker (eller 50 sigarer eller 250 g tobakk)"],
          ["Andre varer (gaver, suvenirer)", "inntil £390 (£270 ved ankomst med privatfly eller privat båt)"],
        ] } },
        "Alt som overstiger kvotene, må deklareres, og tilhørende avgifter må betales. Dette er Storbritannias kvoter ved ankomst; for hjemreisen gjelder reglene i landet du reiser hjem til.",
      ] },
      { h: "Kontanter: deklarasjonsplikt fra £10 000", blocks: [
        "Har du med deg £10 000 eller mer (kontanter, også tilsvarende beløp i andre valutaer), er du pliktig til å deklarere beløpet – på nett før reisen eller i den røde sonen ved ankomst. Lar du være å deklarere, kan hele beløpet bli beslaglagt, og du kan få bot på inntil £5 000.",
      ] },
      { h: "Sanksjoner og hvordan kontrollen foregår", blocks: [
        "Forbudte matvarer kan beslaglegges på grensen, og overskrider du kvotene for alkohol og tobakk uten å deklarere, kan varene holdes tilbake og sanksjoner ilegges. Det tryggeste er å gå gjennom den røde sonen hvis du har noe å deklarere.",
        "Tollkontrollen kommer etter passkontrollen – se hvordan [passkontrollen og passeringen gjennom eGates](/no/passkontroll-egates/) foregår. Husk at du trenger en gyldig [UK ETA](/no/slik-soker-du/) for innreisen – statusen ser du via [statussjekken for ETA](/no/sjekk-status/). De generelle innreisereglene finner du i [Innreise til Storbritannia og visum](/no/innreise-og-visum/), og for mellomlandinger i guiden om transitt gjennom Storbritannia.",
      ] },
    ],
    faq: [
      { q: "Kan jeg ta med ost eller kjøttprodukter fra EU til England?", a: "Nei. Fra EU er det forbudt å ta med kjøtt (svin, storfe, sau, geit, vilt) og kjøttprodukter samt meieriprodukter (ost, melk, smør, yoghurt) til Storbritannia. Produktene kan bli beslaglagt på grensen. Reiser du fra Norge eller et annet land utenfor EU, sjekk hva som gjelder for deg på GOV.UK." },
      { q: "Hvor mye sigaretter og alkohol kan jeg ta med tollfritt til Storbritannia?", a: "200 sigaretter (eller 50 sigarer eller 250 g tobakk), 42 liter øl, 18 liter vin uten kullsyre samt 4 liter brennevin over 22 % eller 9 liter alkoholholdige drikkevarer på inntil 22 %." },
      { q: "Må jeg deklarere kontanter ved innreise til Storbritannia?", a: "Ja, hvis du har med deg £10 000 eller mer. Deklarasjonen gjøres på nett på forhånd eller i den røde sonen ved ankomst. Lar du være å deklarere, kan hele beløpet bli beslaglagt, og du kan få bot på inntil £5 000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "ta-med-medisiner",
    group: "travel",
    title: "Ta med medisiner til Storbritannia: regler og attester (2026)",
    description: "Ta med inntil tre måneders forbruk av egne medisiner til UK, med bevis på at de er skrevet ut til deg. Narkotikaklassifiserte legemidler kan kreve lisens.",
    h1: "Ta med medisiner til Storbritannia",
    lead: "Du kan ta med dine egne medisiner til Storbritannia – inntil tre måneders forbruk – så lenge du kan vise at de er skrevet ut til deg. Her ser du hvor mye du kan ta med, hvilke attester du trenger, hva som gjelder for narkotikaklassifiserte legemidler og reglene for væsker i håndbagasjen.",
    card: "Inntil tre måneders forbruk, resept eller legeattest, egne regler for controlled drugs",
    sections: [
      { h: "Inntil tre måneders forbruk", blocks: [
        "Du kan ta med inntil tre måneders forbruk av dine egne medisiner til personlig bruk til Storbritannia. Du bør kunne dokumentere at legemidlene er skrevet ut til deg.",
        "Oppbevar medisinene i originalemballasjen der det er mulig. Da er det lettere å vise hva legemidlene er, og at de tilhører deg, hvis du blir spurt på grensen.",
      ] },
      { h: "Attest og resept du bør ha med", blocks: [
        "Ta med en legeattest eller resept som bevis på at medisinen er forskrevet til deg. Dokumentet bør inneholde:",
        { ul: [
          "Navnet på legemiddelet.",
          "Dosering og styrke.",
          "Hvor ofte du tar legemiddelet.",
          "Underskriften eller registreringsnummeret til legen som skrev det ut.",
        ] },
        "Behold legemidlene i originalemballasjen der det går, slik at opplysningene på pakningen stemmer med attesten.",
      ] },
      { h: "Narkotikaklassifiserte legemidler (controlled drugs)", blocks: [
        "Noen legemidler inneholder narkotikaklassifiserte stoffer (controlled drugs) og omfattes av ekstra regler. Spør legen din eller apotekpersonalet om det gjelder dine medisiner.",
        "Hvis det gjør det, kan du trenge en personlig lisens (personal licence). Da bør du kontakte det britiske Home Office (Drug and Firearms Licensing Unit) minst 15 virkedager før reisen.",
        "Legemidler som er klassifisert i Schedule 1, kan ikke tas inn uten lisens.",
      ] },
      { h: "Væsker og sprøyter i håndbagasjen", blocks: [
        "Væsker og sprøyter i håndbagasjen følger flyplassenes vanlige sikkerhetsregler. Har du med flytende medisiner eller injeksjonsutstyr, kan det være lurt å ha attesten for hånden også i sikkerhetskontrollen. Les mer i guiden om [væsker og sikkerhetskontroll på flyplassen](/no/vaesker-i-handbagasjen/).",
      ] },
      { h: "Helsehjelp i Storbritannia", blocks: [
        "Skulle du trenge helsehjelp eller nye legemidler under oppholdet, er det nyttig å vite hvordan det britiske helsevesenet (NHS) fungerer. Det beskriver vi i guiden om helsehjelp og NHS i Storbritannia.",
      ] },
    ],
    faq: [
      { q: "Kan jeg ta med medisinene mine til Storbritannia?", a: "Ja, du kan ta med inntil tre måneders forbruk av dine egne medisiner til personlig bruk. Ha med bevis på at legemidlene er skrevet ut til deg, og oppbevar dem gjerne i originalemballasjen." },
      { q: "Hvilke dokumenter trenger jeg for å ta med medisiner?", a: "Ta med en legeattest eller resept som viser navnet på legemiddelet, dosering og styrke, hvor ofte du tar det, og underskriften eller registreringsnummeret til legen som skrev det ut. Behold legemidlene i originalemballasjen der det går." },
      { q: "Hva gjelder for narkotikaklassifiserte legemidler?", a: "Noen legemidler inneholder narkotikaklassifiserte stoffer (controlled drugs) og omfattes av ekstra regler. Spør legen din eller apotekpersonalet om det gjelder dine medisiner. Hvis det gjør det, kan du trenge en personlig lisens, og du bør kontakte det britiske Home Office minst 15 virkedager før reisen." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "vaesker-i-handbagasjen",
    group: "travel",
    title: "Væsker i håndbagasjen på britiske flyplasser (2026)",
    description: "Mange britiske flyplasser tillater maks 100 ml per beholder i håndbagasjen (pose på maks 1 liter); noen 2 liter takket være CT-skannere. Sjekk din flyplass.",
    h1: "Væsker i håndbagasjen og sikkerhetskontrollen på britiske flyplasser",
    lead: "På mange britiske flyplasser gjelder ofte en grense på 100 ml per beholder for væsker i håndbagasjen. Noen flyplasser har begynt å tillate større mengder takket være nye skannere, men reglene varierer – her ser du hva som vanligvis gjelder, og hvorfor det er lurt å sjekke din avreiseflyplass.",
    card: "100 ml-regelen, nye CT-skannere og unntak for barnemat og medisiner",
    sections: [
      { h: "100 ml-regelen og den gjennomsiktige posen", blocks: [
        "På mange britiske flyplasser gjelder ofte at væsker i håndbagasjen må ligge i beholdere på maks 100 ml hver. En beholder som rommer mer enn 100 ml, blir vanligvis ikke godtatt selv om den ikke er full.",
        { ul: [
          "Beholderne skal vanligvis samles i én gjennomsiktig, gjenlukkbar pose på maks 1 liter.",
          "Regelen er vanligvis én pose per person.",
          "Som væsker regnes ofte også geléer, pastaer, kremer, spray og lignende produkter.",
        ] },
        "Siden detaljene kan variere mellom flyplasser, er det lurt å sjekke de gjeldende reglene for din avreiseflyplass før reisen.",
      ] },
      { h: "Nye CT-skannere: på noen flyplasser kan grensen være høyere", blocks: [
        "En del britiske flyplasser har tatt i bruk nye CT-skannere og kan i den forbindelse tillate væsker i beholdere på inntil 2 liter. Innføringen skjer likevel i ulikt tempo, og situasjonen varierer mellom flyplassene.",
        "Også midt i 2026 gjelder 100 ml-grensen fortsatt på mange flyplasser. Ikke gå ut fra at den høyere grensen gjelder, men sjekk alltid de nyeste reglene for flyplassen du reiser fra – og gjerne også for returflyplassen.",
      ] },
      { h: "Unntak: barnemat, morsmelkerstatning og medisiner", blocks: [
        "Barnemat og morsmelkerstatning samt nødvendige medisiner kan i noen tilfeller tas med i større mengder enn den vanlige væskegrensen. Det kreves likevel vanligvis at du gir beskjed om dem til personalet i kontrollen.",
        "Hvilke mengder og vilkår som gjelder, kan variere mellom flyplasser. Det kan være lurt å ha resept eller annen dokumentasjon for hånden, og å sjekke på forhånd hva som gjelder der du reiser. Reiser du med barn, kan du også lese guiden om [å reise med barn til Storbritannia](/no/reise-med-barn/).",
      ] },
      { h: "Elektronikk og større gjenstander", blocks: [
        "Større elektronikk, som bærbare datamaskiner, kan måtte tas ut av vesken og legges separat i kassen etter anvisning fra personalet. Også dette kan variere med flyplass og hvilket utstyr kontrollen bruker, så følg instruksjonene du får på stedet.",
      ] },
      { h: "Slik forbereder du deg til kontrollen", blocks: [
        "For at kontrollen skal gå greit, kan det hjelpe å pakke væskene i den gjennomsiktige posen allerede hjemme, ha barnemat og medisiner lett tilgjengelig slik at du kan gi beskjed om dem, og sjekke de gjeldende reglene for flyplassen din på forhånd.",
        "Sikkerhetskontrollen skjer før passkontrollen – se hvordan [passkontrollen og passeringen gjennom eGates](/no/passkontroll-egates/) foregår, og hva du kan ta med gjennom [tollen i Storbritannia](/no/tollregler-storbritannia/). Husk at du trenger en gyldig [UK ETA](/no/slik-soker-du/) for innreisen – statusen ser du via [statussjekken for ETA](/no/sjekk-status/). De generelle innreisereglene finner du i [Innreise til Storbritannia og visum](/no/innreise-og-visum/), og for mellomlandinger i guiden om transitt gjennom Storbritannia.",
      ] },
    ],
    faq: [
      { q: "Hvor mye væske kan man ha i håndbagasjen på en britisk flyplass?", a: "På mange britiske flyplasser gjelder ofte en grense på 100 ml per beholder, samlet i en gjennomsiktig, gjenlukkbar pose på maks 1 liter, én pose per person. Noen flyplasser har tatt i bruk nye CT-skannere og kan da tillate inntil 2 liter, men innføringen varierer mellom flyplassene. Sjekk derfor alltid de gjeldende reglene for din avreiseflyplass før reisen." },
      { q: "Kan man ta med vann gjennom sikkerhetskontrollen?", a: "Vann og andre drikkevarer som kjøpes etter sikkerhetskontrollen, kan vanligvis tas med om bord. Drikke du har med før kontrollen, omfattes derimot vanligvis av væskereglene og kan måtte kastes hvis den overstiger grensen. Reglene kan variere mellom flyplasser, så sjekk hva som gjelder der du reiser." },
      { q: "Kan man ta med morsmelkerstatning og medisiner gjennom kontrollen?", a: "Barnemat, morsmelkerstatning og nødvendige medisiner kan i noen tilfeller tas med i større mengder enn den vanlige væskegrensen, forutsatt at du gir beskjed om dem til personalet i kontrollen. Hvilke mengder og vilkår som gjelder, kan variere, så sjekk med flyplassen din på forhånd og ha eventuelt resept eller dokumentasjon for hånden." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "aldersgrense-alkohol-royking",
    group: "travel",
    title: "Aldersgrense for alkohol i England: 18 år – og røykeregler | 2026",
    description: "Aldersgrensen for alkohol i England er 18 år for å kjøpe eller drikke på pub. Er du 16–17 år og med en voksen, kan du drikke øl, vin eller cider til maten.",
    h1: "Aldersgrense for alkohol i England – røyking og regler",
    lead: "I England må du være 18 år for å kjøpe alkohol eller drikke alkohol på pub eller restaurant. Er du 16 eller 17 år og sammen med en voksen, kan du drikke (men ikke kjøpe) øl, vin eller cider til et måltid (GOV.UK). Røyking er forbudt innendørs på offentlige steder.",
    card: "18 år for alkohol og tobakk, røykeforbud innendørs og regler for vaping",
    sections: [
      { h: "Hva er aldersgrensen for alkohol i England? 18 år for alkohol og tobakk", blocks: [
        "I Storbritannia må du være minst 18 år for å kjøpe alkohol og tobakk. Aldersgrensen gjelder i butikker, barer, restauranter og andre utsalgssteder.",
        "Butikker og serveringssteder kan be om legitimasjon som viser alderen din, selv om du ser eldre ut. Ha derfor gjerne gyldig legitimasjon for hånden hvis du skal kjøpe alkohol eller tobakk.",
      ] },
      { h: "Røykeforbud innendørs på offentlige steder", blocks: [
        "Siden røykeloven ble innført i 2007 (Smoke-free law), er røyking forbudt innendørs på alle lukkede offentlige steder, arbeidsplasser og i kollektivtrafikken.",
        "Det betyr at puber, restauranter og stasjoner er røykfrie innendørs. Du kan bare røyke i egne anviste utendørsområder.",
        { ul: [
          "Innendørs: røyking forbudt på lukkede offentlige steder og arbeidsplasser.",
          "Kollektivtrafikk: røykfritt.",
          "Tillatt: bare i anviste utendørsområder.",
        ] },
      ] },
      { h: "Vaping og e-sigaretter", blocks: [
        "Reglene for vaping og e-sigaretter varierer mellom steder. Mange steder er det ikke tillatt innendørs, men det kan variere mellom ulike lokaler og virksomheter. Følg alltid skiltingen og personalets anvisninger der du er.",
      ] },
      { h: "Promillekjøring og alkohol på offentlig sted", blocks: [
        "Promillekjøring straffes strengt i Storbritannia, med fastsatte grenseverdier og sanksjoner. Skal du kjøre bil, bør du kjenne reglene – les mer i guiden om å kjøre bil i Storbritannia.",
        "Noen lokale myndigheter har dessuten innført soner med restriksjoner mot å drikke alkohol på offentlig sted. Vær oppmerksom på lokal skilting som viser slike begrensninger.",
      ] },
      { h: "Innførsel av alkohol og tobakk", blocks: [
        "For hvor mye alkohol og tobakk du kan ta med inn i landet, gjelder egne toll- og innførselsgrenser (duty-free). Disse er beskrevet nærmere i guiden om [tollregler og kvoter](/no/tollregler-storbritannia/).",
      ] },
    ],
    faq: [
      { q: "Hva er aldersgrensen for alkohol i England?", a: "I England må du være 18 år for å kjøpe alkohol eller drikke alkohol på pub eller restaurant. Er du 16 eller 17 år og sammen med en voksen, kan du drikke (men ikke kjøpe) øl, vin eller cider til et måltid (GOV.UK)." },
      { q: "Hvilken aldersgrense gjelder for å kjøpe alkohol og tobakk i Storbritannia?", a: "Du må være minst 18 år for å kjøpe alkohol og tobakk i Storbritannia. Butikker og barer kan be om legitimasjon som viser alderen din." },
      { q: "Kan jeg røyke på puber og i butikker?", a: "Nei. Røyking er forbudt innendørs på alle lukkede offentlige steder, arbeidsplasser og i kollektivtrafikken. Puber, restauranter og stasjoner er røykfrie innendørs – du kan bare røyke i egne anviste utendørsområder." },
      { q: "Kan jeg bruke e-sigarett (vaping)?", a: "Reglene for e-sigaretter og vaping varierer mellom steder. Ofte er det ikke tillatt innendørs. Følg alltid skiltingen og personalets anvisninger på stedet." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "reise-med-barn",
    group: "travel",
    title: "Reise med barn til Storbritannia: ETA og pass (2026)",
    description: "Alle, også spedbarn, trenger egen ETA og eget pass til Storbritannia. Border Force kan be om bevis på slektskap – slik forbereder du reisen med barn.",
    h1: "Reise med barn til Storbritannia",
    lead: "Hvorfor hvert barn trenger sin egen ETA og sitt eget pass, når Border Force kan be om bevis på slektskap, og hvilke dokumenter du bør ha med for en smidig innreise med barn.",
    card: "Én ETA og ett pass per barn, og hvilke papirer Border Force kan be om",
    sections: [
      { h: "Hver reisende trenger egen ETA og eget pass", blocks: [
        "Alle reisende, også spedbarn, trenger sin egen ETA og sitt eget pass. Et barn kan ikke reise på en forelders ETA – det gjelder én ETA per person.",
      ] },
      { h: "Border Force kan be om bevis på slektskap", blocks: [
        "Når du reiser med barn, kan Border Force (grensekontrollen) be om bevis på forholdet mellom dere – særlig hvis dere har ulike etternavn, eller hvis du ikke er barnets forelder. Gyldige bevis kan være:",
        { ul: [
          "Fødselsattest eller adopsjonsbevis.",
          "Vigselsattest eller skilsmissebevis (hvis du er forelder, men har et annet etternavn).",
          "Et samtykkebrev (consent letter) fra forelderen (hvis du ikke er barnets forelder).",
        ] },
      ] },
      { h: "Ha dokumentene med deg", blocks: [
        "Også på fremtidige reiser er det lurt å ha med slike bevis på slektskap. Det gjør innreisen enklere hvis du blir spurt i grensekontrollen.",
      ] },
      { h: "Greit å vite før innreisen", blocks: [
        "Søk om [UK ETA](/no/slik-soker-du/) for hvert familiemedlem, og følg søknaden via [statussjekken for ETA](/no/sjekk-status/). De generelle innreisereglene finner du i [Innreise til Storbritannia og visum](/no/innreise-og-visum/), og hva du kan ta med, i guiden om [tollregler og kvoter](/no/tollregler-storbritannia/). Skal du leie bil, kan du lese om å kjøre bil i Storbritannia, og for mellomlandinger guiden om transitt gjennom Storbritannia.",
      ] },
    ],
    faq: [
      { q: "Trenger barn også en ETA til Storbritannia?", a: "Ja. Alle reisende, også spedbarn, trenger sin egen ETA. Et barn kan ikke reise på en forelders ETA – det gjelder én ETA per person." },
      { q: "Kan barn reise på forelderens pass eller ETA?", a: "Nei. Hver reisende trenger eget pass og egen ETA, uansett alder. Det er ikke mulig å reise inn på en annen persons pass eller ETA." },
      { q: "Hva gjelder hvis jeg reiser med et barn som har et annet etternavn?", a: "Border Force kan be om bevis på slektskap, særlig hvis dere har ulike etternavn, eller hvis du ikke er barnets forelder. Gyldige bevis kan være fødselsattest eller adopsjonsbevis, vigselsattest eller skilsmissebevis, eller et samtykkebrev (consent letter) fra forelderen." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "flyplasser-i-london",
    group: "travel",
    title: "Englands nest største flyplass er Gatwick – Londons 5 flyplasser",
    description: "Englands og Storbritannias nest største flyplass er London Gatwick (42,8 mill. passasjerer i 2025 ifølge CAA), etter Heathrow. Her er Londons 5 flyplasser.",
    h1: "Londons 5 største flyplasser",
    lead: "Englands – og Storbritannias – nest største flyplass er London Gatwick med 42,8 millioner passasjerer i 2025, etter Heathrow (84,5 millioner). På tredjeplass kommer Manchester (32,1 millioner), ifølge den britiske luftfartsmyndigheten CAA. London betjenes av fem store flyplasser, og valget påvirker reiserute, tid og kostnad for å komme inn til sentrum.",
    card: "Heathrow, Gatwick, Stansted, Luton og London City – og hvordan du kommer til sentrum",
    sections: [
      { h: "Heathrow (LHR) – vestlige London", blocks: [
        "Storbritannias største flyplass og viktigste internasjonale knutepunkt (terminal 2–5). Les mer i guiden om [Heathrow flyplass](/no/heathrow-flyplass/).",
        "Reise: Heathrow Express ca. 15 min, Elizabeth Line ca. 30 min, T-bane ca. 50 min.",
      ] },
      { h: "Gatwick (LGW) – søndre London", blocks: [
        "Englands og Storbritannias nest største flyplass (etter Heathrow); både tradisjonelle selskaper og lavprisselskaper (nordre og søndre terminal).",
        "Reise: Gatwick Express ca. 30 min, Thameslink ca. 30–45 min.",
      ] },
      { h: "Stansted (STN) – nordøst for London", blocks: [
        "Ryanairs base, mange europeiske forbindelser; én terminal, lett å orientere seg.",
        "Reise: Stansted Express ca. 50 min, buss ca. 60–90 min.",
      ] },
      { h: "Luton (LTN) – nord for London", blocks: [
        "Base for easyJet og Wizz Air; én terminal, forbindelse til stasjonen med shuttle.",
        "Reise: Luton Airport Express ca. 30 min, Thameslink ca. 30 min.",
      ] },
      { h: "London City (LCY) – sentrale London (nærmest)", blocks: [
        "Nærmest sentrum; populær blant forretningsreisende.",
        "Reise: DLR ca. 15–25 min til sentrum.",
        { note: "Reisetidene er omtrentlige og avhenger av hvor i London du skal og tidspunktet på døgnet." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  heathrow: {
    slug: "heathrow-flyplass",
    group: "travel",
    title: "Heathrow flyplass (LHR): terminaler, kontroll og vei til London",
    description: "Guide til Heathrow flyplass: terminal 2–5, grensekontroll (eGate) og reise til sentrale London – Heathrow Express, Elizabeth Line, T-bane og buss.",
    h1: "Heathrow flyplass (LHR)",
    lead: "Heathrow er Storbritannias største flyplass og den viktigste innreiseporten til London. Her finner du terminalene, hvordan grensekontrollen foregår og hvordan du kommer deg inn til sentrum.",
    card: "Terminal 2–5, eGates og raskeste vei inn til sentrale London",
    sections: [
      { h: "Beliggenhet og terminaler", blocks: [
        "Heathrow (IATA-kode: LHR) ligger i vestlige London. Det er den største og mest trafikkerte flyplassen i Storbritannia og har forbindelser fra hele verden. Terminal 2, 3, 4 og 5 er i drift – sjekk terminalnummeret på billetten, fordi det påvirker både reiseruten og innsjekkingen.",
      ] },
      { h: "Grensekontroll etter ankomst", blocks: [
        `Etter ankomst går du gjennom grensekontrollen via automatiske eGate-sluser (som bruker biometrisk pass) eller ved en manuell skranke med en betjent. Husk at du for innreise trenger et gyldig pass og en gyldig [UK ETA](/no/hva-er-eta/) knyttet til dette passet (ved opphold på inntil ${F.staySixMonths} måneder). Se også [passkontroll og eGates](/no/passkontroll-egates/).`,
      ] },
      { h: "Reise til sentrale London", blocks: [
        { table: { head: ["Transportmiddel", "Omtrentlig reisetid"], rows: [
          ["Heathrow Express (ekspresstog)", "ca. 15 minutter"],
          ["Elizabeth Line", "ca. 30 minutter"],
          ["T-bane (Piccadilly line)", "ca. 50 minutter"],
          ["Buss / coach", "ca. 60–90 minutter"],
        ] } },
        { note: "Reisetidene er omtrentlige og avhenger av terminal, tidspunkt på døgnet og hvor i London du skal." },
        "Mer om Londons flyplasser: [Londons 5 største flyplasser](/no/flyplasser-i-london/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
