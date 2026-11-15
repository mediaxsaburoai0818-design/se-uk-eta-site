import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（da・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "indrejse-og-visum",
    group: "travel",
    hub: true,
    title: "Indrejse i Storbritannien og visum: guide 2026",
    description: `Indrejse i Storbritannien: UK ETA til ophold på op til ${F.staySixMonths} måneder, hvornår du skal have visum, paskontrol (eGate), dokumenter og rejser med børn.`,
    h1: "Indrejse i Storbritannien og visum",
    lead: "En samlet guide til reglerne for indrejse i Storbritannien: hvornår en UK ETA er nok, hvornår du skal have visum, hvordan paskontrollen foregår, og hvilke dokumenter du bør have klar.",
    card: "ETA eller visum, paskontrol, dokumenter og rejser med børn — samlet overblik.",
    sections: [
      { h: `ETA eller visum? Ophold på op til ${F.staySixMonths} måneder`, blocks: [
        `Til turisme, forretning, familiebesøg eller transit med ophold på op til ${F.staySixMonths} måneder skal EU-borgere, herunder danske statsborgere, ikke have visum — en UK ETA (Electronic Travel Authorisation) er nok. Du søger online, og de fleste får en automatisk afgørelse inden for få minutter. Søg alligevel mindst ${F.decisionDays} hverdage før rejsen, fordi nogle ansøgninger kan kræve yderligere kontrol.`,
        `En ETA koster ${F.fee}, gælder i ${F.validYears} år og giver ret til flere indrejser. Læs mere under [Hvad er UK ETA](/da/hvad-er-eta/).`,
      ] },
      { h: "Hvornår du skal have visum", blocks: [
        `Du skal have et britisk visum ved ophold på mere end ${F.staySixMonths} måneder og ved rejser med henblik på længerevarende studier, arbejde eller bosættelse. De mest almindelige typer er:`,
        { ul: [
          "Studievisum — længerevarende studier (normalt 2 til 5 år afhængigt af uddannelsen).",
          "Arbejdsvisum — arbejde i Storbritannien; typen afhænger af jobtilbuddet og dine kvalifikationer.",
          "Familievisum — for at blive genforenet med et familiemedlem, der bor i Storbritannien.",
          "Youth Mobility Scheme — for unge fra udvalgte lande (ophold på op til 2 år).",
        ] },
      ] },
      { h: "Paskontrol: eGate og manuel kontrol", blocks: [
        "I britiske lufthavne foregår paskontrollen enten ved de automatiske eGate-sluser (med biometrisk pas) eller ved en skranke med en grænsebetjent. eGate gør paskontrollen hurtigere; har grænsepolitiet spørgsmål om formålet med rejsen, kan det blive til en samtale med en betjent. Hvem der må bruge de automatiske sluser, og hvordan passagen foregår trin for trin, kan du læse i guiden [Paskontrol og eGates](/da/paskontrol-og-egates/).",
        "Efter paskontrollen kommer tolden — hvilke fødevarer og varer du må tage med, kan du læse i guiden [Toldregler og kvoter](/da/toldregler-storbritannien/).",
      ] },
      { h: "Nødvendige dokumenter", blocks: [
        { ul: [
          "Pas, der er gyldigt under hele opholdet (nationalt id-kort accepteres ikke siden oktober 2021).",
          "UK ETA knyttet til dette pas (eller det relevante visum ved længere ophold).",
          "Underbyggende dokumenter: bekræftelse på overnatning, returbillet og midler til opholdet kan blive kontrolleret.",
        ] },
      ] },
      { h: "Rejser med børn (under 18 år)", blocks: [
        "Alle skal have deres egen UK ETA uanset alder — også spædbørn og børn. Børn, der rejser uden den ene eller begge forældre, kan blive bedt om at vise et dokument, der viser, at forældremyndighedens indehaver har givet samtykke til rejsen. Det er en god idé at have fødselsattest eller en skriftlig samtykkeerklæring (på engelsk) med. Læs mere i guiden [Rejse med børn til Storbritannien](/da/rejse-med-born-til-uk/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "paskrav-storbritannien",
    group: "travel",
    title: "Paskrav England 2026: pas gyldigt hele opholdet, id-kort sjældent",
    description: "Paskrav til England/UK: danskere og andre EU-borgere skal have et pas, der gælder hele opholdet. Id-kort er kun nok i visse tilfælde, fx ved settled status.",
    h1: "Paskrav ved rejse til Storbritannien: gyldighed og ETA",
    lead: `Som dansker eller anden EU-borger skal du have et gyldigt pas, der gælder under hele opholdet i England og resten af Storbritannien. Et nationalt id-kort er kun nok i visse tilfælde, fx hvis du har settled eller pre-settled status. Passet er desuden knyttet til din ETA (${F.fee}).`,
    card: "Passet skal gælde hele opholdet, og ETA'en hører til netop det pas.",
    sections: [
      { h: "Gyldigt pas under hele opholdet", blocks: [
        "For at besøge Storbritannien skal du have et gyldigt pas, og det skal som regel være gyldigt under hele dit ophold.",
        "For mange nationaliteter er der normalt ikke krav om ekstra gyldighed, fx at passet skal gælde seks måneder ud over indrejsen. Kravene kan dog variere efter nationalitet, så tjek kravene for dit eget land på GOV.UK før rejsen.",
      ] },
      { h: "ETA'en er knyttet til passet", blocks: [
        "En ETA er knyttet til det pas, du brugte, da du søgte, og du rejser på det samme pas, som du oplyste i ansøgningen.",
        "Fornyer eller skifter du pas, skal du som regel søge om en ny ETA til det nye pas. Det kan derfor være klogt at tjekke passets gyldighed i god tid, før du søger om din ETA.",
      ] },
      { h: "Alle rejsende skal have eget pas — også spædbørn", blocks: [
        "Alle rejsende, også spædbørn og børn, skal som regel have deres eget pas for at rejse til Storbritannien og desuden deres egen ETA. Læs mere i guiden [Rejse med børn til Storbritannien](/da/rejse-med-born-til-uk/). Da det kan tage tid at få pas til børn, er det en god idé at gå i gang i god tid.",
      ] },
      { h: "Flere pas eller dobbelt statsborgerskab", blocks: [
        "Har du dobbelt statsborgerskab eller flere pas, rejser du som regel ind på det pas, din ETA er knyttet til. Sørg derfor for, at ETA'en hører til det pas, du faktisk vil rejse på.",
      ] },
      { h: "Næste skridt før rejsen", blocks: [
        "Når passet er i orden, kan du [søge om din UK ETA](/da/sadan-ansoger-du/) og derefter [tjekke status](/da/tjek-status/). Ved ankomsten går du gennem [paskontrollen og eGates](/da/paskontrol-og-egates/), og hvad du må tage med, står i guiden om [tolden i Storbritannien](/da/toldregler-storbritannien/). De generelle indrejseregler finder du i guiden [Indrejse i Storbritannien og visum](/da/indrejse-og-visum/), og der er også en særskilt guide om transit gennem Storbritannien.",
      ] },
    ],
    faq: [
      { q: "Hvor længe skal passet være gyldigt ved en rejse til Storbritannien?", a: "For at besøge Storbritannien skal du som regel have et gyldigt pas, der gælder under hele dit ophold. For mange nationaliteter er der normalt ikke krav om ekstra gyldighed, fx seks måneder ud over indrejsen, men kravene kan variere. Tjek derfor kravene for dit eget land på GOV.UK før rejsen." },
      { q: "Hvilket pas er ETA'en knyttet til?", a: "En ETA er knyttet til det pas, du brugte, da du søgte, og du rejser på det samme pas. Fornyer eller skifter du pas, skal du som regel søge om en ny ETA til det nye pas. Har du dobbelt statsborgerskab og flere pas, rejser du ind på det pas, ETA'en er knyttet til." },
      { q: "Skal børn have eget pas til Storbritannien?", a: "Alle rejsende, også spædbørn, skal som regel have deres eget pas for at rejse til Storbritannien. Hver rejsende skal desuden have sin egen ETA. Tjek kravene i god tid, da det kan tage tid at få pas til børn." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "paskontrol-og-egates",
    group: "travel",
    title: "Paskontrol i Storbritannien: eGates i London (2026)",
    description: "Med et EU-pas og en gyldig UK ETA kan du bruge eGates — ingen spørgsmål, intet stempel. Fra 8. juli 2026 må børn fra 8 år også bruge eGates.",
    h1: "Paskontrol i Storbritannien og eGates",
    lead: "Med et EU-pas og en gyldig UK ETA kan du gå gennem de automatiske eGates i britiske lufthavne uden spørgsmål og uden stempel i passet. Fra 8. juli 2026 må børn fra 8 år også bruge eGates.",
    card: "Hvem må bruge eGates, hvordan passagen foregår, og nyt for børn fra 8. juli 2026.",
    sections: [
      { h: "Nyt fra 8. juli 2026: eGates fra 8 år", blocks: [
        "Fra 8. juli 2026 må børn på 8 år eller derover bruge eGates — tidligere var grænsen 10 år. Der gælder to betingelser: barnet skal være mindst 120 cm højt, og børn mellem 8 og 17 år skal rejse sammen med en voksen.",
        "For mange familier betyder det, at hele selskabet nu kan gå gennem de automatiske sluser uden at stå i kø ved skranken med grænsepolitiet.",
      ] },
      { h: "Hvem må bruge eGates", blocks: [
        "eGates er åbne for indehavere af pas fra:",
        { ul: [
          "alle EU-lande (herunder Danmark),",
          "Island, Liechtenstein, Norge og Schweiz,",
          "Australien, Canada, Japan, New Zealand, Singapore, Sydkorea og USA.",
        ] },
        "Betingelsen er, at du har en gyldig rejsetilladelse — for danske rejsende betyder det i praksis en gyldig UK ETA (eller eVisa). Har du ikke en endnu, kan du se, [hvordan du søger om UK ETA](/da/sadan-ansoger-du/).",
        "I 15 lufthavne og togterminaler i Storbritannien er der over 290 eGates — blandt andet i [Londons lufthavne](/da/londons-lufthavne/) som Heathrow.",
      ] },
      { h: "Sådan virker en eGate: ingen spørgsmål, intet stempel", blocks: [
        { ul: [
          "Læg dit biometriske pas, slået op på siden med billedet, på læseren.",
          "Kig ind i kameraet — systemet sammenligner dit ansigt med billedet i passet.",
          "Slusen åbner, og du går igennem — uden samtale med en betjent og uden indrejsestempel i passet.",
        ] },
        "Hvis slusen ikke genkender dig (fx på grund af et slidt pas), bliver du blot henvist til skranken med grænsepolitiet.",
      ] },
      { h: "Manuel paskontrol: de 5 mulige spørgsmål", blocks: [
        "Går du gennem kontrollen hos en grænsebetjent, kan du få spørgsmål om:",
        { ul: [
          "Formålet med rejsen — turisme, forretning, familiebesøg.",
          "Opholdets længde — hvor mange dage du bliver.",
          "Overnatning — adressen på hotellet eller værten.",
          "Hjemrejsen — dato og booking af returrejsen.",
          "Økonomiske midler — tilstrækkelige penge til opholdet.",
        ] },
      ] },
      { h: "Nødvendige dokumenter", blocks: [
        { ul: [
          "Biometrisk pas, der er gyldigt under hele opholdet.",
          "Gyldig UK ETA — den er elektronisk knyttet til passet og skal ikke printes ud; gem alligevel gerne godkendelsesmailen.",
        ] },
        "Er du i tvivl om din ansøgning, kan du [tjekke status på din ETA](/da/tjek-status/). Ved mellemlandinger i Storbritannien gælder særlige regler — se guiden om transit gennem Storbritannien.",
      ] },
      { h: "Familier med børn: det gælder", blocks: [
        { ul: [
          "Børn fra 8 år (og mindst 120 cm høje) bruger eGates; børn mellem 8 og 17 år altid sammen med en voksen.",
          "Børn under 8 år går gennem skranken med grænsepolitiet sammen med forældrene.",
          "Hvert barn — også spædbørn — skal have sin egen UK ETA.",
          "De generelle indrejseregler finder du i guiden [Indrejse i Storbritannien og visum](/da/indrejse-og-visum/).",
        ] },
      ] },
      { h: "Efter paskontrollen: tolden", blocks: [
        "Efter paskontrollen kommer toldkontrollen — bemærk, at det er forbudt at tage kød og mejeriprodukter fra EU med til Storbritannien. Læs mere i guiden om [toldregler og kvoter](/da/toldregler-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Kan jeg bruge eGates med dansk pas?", a: "Ja. eGates er åbne for indehavere af pas fra alle EU-lande (samt Island, Liechtenstein, Norge og Schweiz plus Australien, Canada, Japan, New Zealand, Singapore, Sydkorea og USA), forudsat at du har en gyldig rejsetilladelse som UK ETA eller eVisa." },
      { q: "Fra hvilken alder må børn bruge eGates?", a: "Fra 8. juli 2026 må børn fra 8 år bruge eGates (tidligere var grænsen 10 år). Barnet skal være mindst 120 cm højt, og børn mellem 8 og 17 år skal rejse sammen med en voksen." },
      { q: "Bliver passet stemplet, når jeg går gennem en eGate?", a: "Nej. Når du går gennem en eGate, stiller ingen betjent spørgsmål, og der kommer intet indrejsestempel i passet. Din UK ETA er elektronisk knyttet til dit pas." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "toldregler-storbritannien",
    group: "travel",
    title: "Hvad må man tage med til England? Toldregler og kvoter 2026",
    description: "Til Storbritannien toldfrit: 4 l spiritus, 18 l vin, 42 l øl og 200 cigaretter. Intet kød eller mejeriprodukter fra EU. Kontanter fra £10.000 skal anmeldes.",
    h1: "Hvad må man tage med til England? Tolden i Storbritannien",
    lead: "Den vigtigste regel: fra EU må du ikke tage kød og mejeriprodukter med til Storbritannien. Her kan du se, hvilke fødevarer der er tilladt, undtagelsen for babymad, kvoterne for alkohol og tobak, og hvornår kontanter skal anmeldes.",
    card: "Intet kød eller ost fra EU, toldfrie kvoter for alkohol og tobak samt kontantgrænsen.",
    sections: [
      { h: "Regel nr. 1: intet kød og ingen mejeriprodukter fra EU", blocks: [
        "Fra EU er det forbudt at tage kød og mejeriprodukter med til Storbritannien (England, Skotland, Wales). Forbuddet omfatter:",
        { ul: [
          "Mejeriprodukter: ost, mælk, smør, yoghurt.",
          "Kød: svin, okse, får, ged og vildt samt produkter heraf — herunder salami, pølser, skinke og sandwich med kød eller ost.",
        ] },
        "Reglen gælder også små mængder i håndbagagen — en skinkesandwich købt i lufthavnen skal spises eller smides ud før kontrollen.",
      ] },
      { h: "Undtagelsen: babymad (op til 2 kg)", blocks: [
        "Modermælkserstatning, babymad og fødevarer til særlige medicinske formål er tilladt op til 2 kg pr. person, forudsat at de er i uåbnet originalemballage og ikke skal opbevares på køl før brug.",
      ] },
      { h: "Fødevarer, du kan tage med uden problemer", blocks: [
        { ul: [
          "Brød (men ikke sandwich med kød eller mejeriprodukter).",
          "Kager uden frisk fløde, kiks og chokolade.",
          "Pasta og emballerede supper.",
          "Fisk, æg og honning — tilladt til eget forbrug.",
        ] },
        "Er du i tvivl, så tjek det konkrete produkt på GOV.UK før afrejse — reglerne varierer efter fødevarekategori.",
      ] },
      { h: "Alkohol og tobak: toldfrie kvoter ved ankomst til Storbritannien", blocks: [
        { table: {
          head: ["Kategori", "Toldfri kvote"],
          rows: [
            ["Øl", "42 liter"],
            ["Vin uden brus", "18 liter"],
            ["Spiritus (over 22 %)", "4 liter eller 9 liter drikkevarer op til 22 %"],
            ["Cigaretter", "200 stk. (eller 50 cigarer eller 250 g tobak)"],
            ["Andre varer (gaver, souvenirs)", "op til £390 (£270 ved ankomst med privatfly eller privat båd)"],
          ],
        } },
        "Alt, der overstiger kvoterne, skal angives, og de tilhørende afgifter skal betales. Det er Storbritanniens kvoter ved ankomst; for hjemrejsen gælder reglerne i dit eget land.",
      ] },
      { h: "Kontanter: anmeldelsespligt fra £10.000", blocks: [
        "Har du £10.000 eller mere med (kontanter, inklusive tilsvarende beløb i andre valutaer), har du pligt til at anmelde beløbet — online før rejsen eller i den røde kanal ved ankomsten. Hvis du ikke anmelder det, kan hele beløbet blive beslaglagt, og du kan få en bøde på op til £5.000.",
      ] },
      { h: "Sanktioner og sådan foregår kontrollen", blocks: [
        "Forbudte fødevarer kan blive beslaglagt ved grænsen, og overskrider du kvoterne for alkohol og tobak uden at angive det, kan varerne blive tilbageholdt, og der kan blive udmålt sanktioner. Det sikreste er at bruge den røde kanal, hvis du har noget at angive.",
        "Toldkontrollen kommer efter paskontrollen — se, hvordan [paskontrollen og passagen gennem eGates](/da/paskontrol-og-egates/) foregår. Husk, at du skal have en gyldig [UK ETA](/da/sadan-ansoger-du/) for at rejse ind — status på ansøgningen kan du [tjekke her](/da/tjek-status/). De generelle indrejseregler finder du i guiden [Indrejse i Storbritannien og visum](/da/indrejse-og-visum/), og der er en særskilt guide om transit gennem Storbritannien.",
      ] },
    ],
    faq: [
      { q: "Må man tage ost eller kødprodukter med fra Danmark til England?", a: "Nej. Fra EU er det forbudt at tage kød (svin, okse, får, ged, vildt) og kødprodukter samt mejeriprodukter (ost, mælk, smør, yoghurt) med til Storbritannien. Produkterne kan blive beslaglagt ved grænsen." },
      { q: "Hvor mange cigaretter og hvor meget alkohol må jeg tage toldfrit med til Storbritannien?", a: "200 cigaretter (eller 50 cigarer eller 250 g tobak), 42 liter øl, 18 liter vin uden brus samt 4 liter spiritus over 22 % eller 9 liter alkoholiske drikkevarer op til 22 %." },
      { q: "Skal jeg anmelde kontanter ved indrejse i Storbritannien?", a: "Ja, hvis du har £10.000 eller mere med. Anmeldelsen sker online på forhånd eller i den røde kanal ved ankomsten. Hvis du ikke anmelder beløbet, kan hele beløbet blive beslaglagt, og du kan få en bøde på op til £5.000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "medicin-til-storbritannien",
    group: "travel",
    title: "Medicin med til Storbritannien: regler og lægeerklæring (2026)",
    description: "Tag op til tre måneders forbrug af din egen medicin med til UK, og hav bevis for, at den er ordineret til dig. Euforiserende lægemidler kan kræve tilladelse.",
    h1: "Medicin med til Storbritannien",
    lead: "Du må tage din egen medicin med til Storbritannien — op til tre måneders forbrug — så længe du kan vise, at den er ordineret til dig. Lægemidler med euforiserende stoffer kan kræve en særlig tilladelse.",
    card: "Tre måneders forbrug, dokumentation fra lægen og regler for euforiserende lægemidler.",
    sections: [
      { h: "Op til tre måneders forbrug", blocks: [
        "Du må tage op til tre måneders forbrug af din egen medicin til personligt brug med til Storbritannien. Du bør kunne dokumentere, at lægemidlerne er ordineret til dig.",
        "Opbevar medicinen i originalemballagen, hvor det er muligt. Det gør det lettere at vise, hvad lægemidlerne er, og at de tilhører dig, hvis du bliver spurgt ved grænsen.",
      ] },
      { h: "Erklæring og recept, du bør have med", blocks: [
        "Tag en lægeerklæring eller en recept med som dokumentation for, at medicinen er ordineret til dig. Dokumentet bør indeholde:",
        { ul: [
          "Lægemidlets navn.",
          "Dosering og styrke.",
          "Hvor ofte du tager lægemidlet.",
          "Den ordinerende læges underskrift eller autorisationsnummer.",
        ] },
        "Behold lægemidlerne i originalemballagen, hvor det er muligt, så oplysningerne på pakningen stemmer overens med erklæringen.",
      ] },
      { h: "Lægemidler med euforiserende stoffer (controlled drugs)", blocks: [
        "Nogle lægemidler indeholder euforiserende stoffer (controlled drugs) og er omfattet af ekstra regler. Spørg din læge eller på apoteket, om det gælder netop din medicin.",
        "Hvis det er tilfældet, kan du have brug for en personlig tilladelse (personal licence). Du bør så kontakte det britiske Home Office (Drug and Firearms Licensing Unit) mindst 15 arbejdsdage før rejsen.",
        "Lægemidler, der er klassificeret i Schedule 1, må ikke indføres uden tilladelse.",
      ] },
      { h: "Væsker og sprøjter i håndbagagen", blocks: [
        "Væsker og sprøjter i håndbagagen er omfattet af lufthavnenes almindelige sikkerhedsregler. Har du flydende medicin eller injektionsudstyr med, kan det være en god idé at have erklæringen ved hånden også i sikkerhedskontrollen. Læs mere i guiden om [væsker og sikkerhedskontrol i lufthavnen](/da/vaesker-i-handbagagen/).",
      ] },
      { h: "Lægehjælp under opholdet i Storbritannien", blocks: [
        "Får du brug for behandling eller ny medicin under opholdet, er det godt at vide, hvordan det britiske sundhedsvæsen fungerer. Det beskriver vi i en særskilt guide om sundhedsvæsenet og NHS i Storbritannien.",
      ] },
    ],
    faq: [
      { q: "Må jeg tage min medicin med til Storbritannien?", a: "Ja, du må tage op til tre måneders forbrug af din egen medicin til personligt brug med. Hav dokumentation for, at lægemidlerne er ordineret til dig, og opbevar dem gerne i originalemballagen." },
      { q: "Hvilke dokumenter skal jeg have med for at tage medicin med?", a: "Tag en lægeerklæring eller en recept med, der viser lægemidlets navn, dosering og styrke, hvor ofte du tager det, samt den ordinerende læges underskrift eller autorisationsnummer. Behold lægemidlerne i originalemballagen, hvor det er muligt." },
      { q: "Hvad gælder for lægemidler med euforiserende stoffer?", a: "Nogle lægemidler indeholder euforiserende stoffer (controlled drugs) og er omfattet af ekstra regler. Spørg din læge eller på apoteket, om det gælder din medicin. Er det tilfældet, kan du have brug for en personlig tilladelse og bør kontakte det britiske Home Office mindst 15 arbejdsdage før rejsen." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "vaesker-i-handbagagen",
    group: "travel",
    title: "Væsker i håndbagagen: sikkerhedskontrol i britiske lufthavne",
    description: "Mange britiske lufthavne tillader højst 100 ml pr. beholder i håndbagagen (pose på maks. 1 liter); nogle 2 liter takket være CT-scannere. Tjek din lufthavn.",
    h1: "Væsker i håndbagagen og sikkerhedskontrollen i britiske lufthavne",
    lead: "I mange britiske lufthavne gælder der ofte en grænse på 100 ml pr. beholder for væsker i håndbagagen. Nogle lufthavne er begyndt at tillade større mængder takket være nye scannere, men reglerne varierer — tjek derfor altid din afrejselufthavn.",
    card: "100 ml-reglen, de nye CT-scannere og undtagelserne for babymad og medicin.",
    sections: [
      { h: "100 ml-reglen og den gennemsigtige pose", blocks: [
        "I mange britiske lufthavne gælder der ofte, at væsker i håndbagagen skal være i beholdere på højst 100 ml hver. En beholder, der rummer mere end 100 ml, bliver normalt ikke godkendt, selvom den ikke er helt fyldt.",
        { ul: [
          "Beholderne skal normalt samles i én gennemsigtig pose, der kan lukkes igen, på højst 1 liter.",
          "Reglen er normalt én pose pr. person.",
          "Som væsker regnes ofte også geler, pastaer, cremer, spray og lignende produkter.",
        ] },
        "Da detaljerne kan variere fra lufthavn til lufthavn, er det klogt at tjekke de aktuelle regler for netop din afrejselufthavn før rejsen.",
      ] },
      { h: "Nye CT-scannere: i nogle lufthavne kan grænsen være højere", blocks: [
        "En del britiske lufthavne har indført nye CT-scannere og kan i den forbindelse tillade væsker i beholdere på op til 2 liter. Indførelsen sker dog i forskelligt tempo, og situationen varierer fra lufthavn til lufthavn.",
        "Selv i midten af 2026 gælder 100 ml-grænsen fortsat i mange lufthavne. Gå derfor ikke ud fra, at den højere grænse gælder, men tjek altid de seneste regler for den lufthavn, du rejser fra — og gerne også for din returlufthavn.",
      ] },
      { h: "Undtagelser: babymad, modermælkserstatning og medicin", blocks: [
        "Babymad og modermælkserstatning samt nødvendig medicin kan i visse tilfælde medbringes i større mængder end den almindelige væskegrænse. Det kræver dog normalt, at du gør personalet opmærksom på dem ved kontrollen.",
        "Hvilke mængder og betingelser der gælder, kan variere fra lufthavn til lufthavn. Det kan være en god idé at have recept eller anden dokumentation ved hånden og at tjekke på forhånd, hvad der gælder, hvor du rejser. Rejser du med børn, kan du også læse guiden om at [rejse med børn til Storbritannien](/da/rejse-med-born-til-uk/).",
      ] },
      { h: "Elektronik og større genstande", blocks: [
        "Større elektronik som bærbare computere skal muligvis tages op af tasken og lægges separat i bakken efter personalets anvisninger. Også det kan variere afhængigt af lufthavnen og det udstyr, kontrollen bruger, så følg de instruktioner, du får på stedet.",
      ] },
      { h: "Sådan forbereder du dig på kontrollen", blocks: [
        "For at kontrollen går glat, kan det hjælpe at pakke væskerne i den gennemsigtige pose allerede hjemmefra, at have babymad og medicin let tilgængeligt, så du kan vise det frem, og at tjekke de aktuelle regler for din lufthavn på forhånd.",
        "Sikkerhedskontrollen kommer før paskontrollen — se, hvordan [paskontrollen og passagen gennem eGates](/da/paskontrol-og-egates/) foregår, og hvad du må tage med gennem [tolden i Storbritannien](/da/toldregler-storbritannien/). Husk, at du skal have en gyldig [UK ETA](/da/sadan-ansoger-du/) for at rejse ind — status kan du [tjekke her](/da/tjek-status/). De generelle indrejseregler finder du i guiden [Indrejse i Storbritannien og visum](/da/indrejse-og-visum/), og der er en særskilt guide om transit gennem Storbritannien.",
      ] },
    ],
    faq: [
      { q: "Hvor meget væske må man have i håndbagagen i en britisk lufthavn?", a: "I mange britiske lufthavne gælder der ofte en grænse på 100 ml pr. beholder, samlet i én gennemsigtig pose, der kan lukkes igen, på højst 1 liter — én pose pr. person. Nogle lufthavne har indført nye CT-scannere og kan tillade op til 2 liter, men det varierer fra lufthavn til lufthavn. Tjek derfor altid de aktuelle regler for din afrejselufthavn før rejsen." },
      { q: "Må man tage vand med gennem sikkerhedskontrollen?", a: "Vand og andre drikkevarer, der er købt efter sikkerhedskontrollen, kan normalt tages med om bord. Drikkevarer, du har med før kontrollen, er derimod normalt omfattet af væskereglerne og skal muligvis smides ud, hvis de overstiger grænsen. Reglerne kan variere fra lufthavn til lufthavn, så tjek, hvad der gælder, hvor du rejser." },
      { q: "Må man tage modermælkserstatning og medicin med gennem kontrollen?", a: "Babymad, modermælkserstatning og nødvendig medicin kan i visse tilfælde medbringes i større mængder end den almindelige væskegrænse, forudsat at du gør personalet opmærksom på dem ved kontrollen. Mængder og betingelser kan variere, så tjek på forhånd hos din lufthavn, og hav eventuelt recept eller dokumentation ved hånden." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alkohol-og-rygning-england",
    group: "travel",
    title: "Aldersgrænse for alkohol i England: 18 år — og rygeregler 2026",
    description: "Aldersgrænsen for alkohol i England er 18 år for at købe eller drikke på pub. Er du 16–17 år og med en voksen, må du drikke øl, vin eller cider til maden.",
    h1: "Aldersgrænse for alkohol i England — rygning og regler",
    lead: "I England skal du være 18 år for at købe alkohol eller drikke alkohol på pub eller restaurant. Er du 16 eller 17 år og sammen med en voksen, må du drikke (men ikke købe) øl, vin eller cider til et måltid (GOV.UK). Rygning er forbudt indendørs på offentlige steder.",
    card: "18 år for alkohol og tobak, rygeforbud indendørs, e-cigaretter og spritkørsel.",
    sections: [
      { h: "Hvad er aldersgrænsen for alkohol i England? 18 år for alkohol og tobak", blocks: [
        "I Storbritannien skal du være mindst 18 år for at købe alkohol og tobak. Aldersgrænsen gælder i butikker, barer, restauranter og andre salgssteder.",
        "Butikker og serveringssteder kan bede om legitimation, der viser din alder, også selvom du ser ældre ud. Hav derfor gerne gyldigt id ved hånden, hvis du har tænkt dig at købe alkohol eller tobak.",
      ] },
      { h: "Rygeforbud indendørs på offentlige steder", blocks: [
        "Siden rygeloven (Smoke-free law) blev indført i 2007, har det været forbudt at ryge indendørs på alle lukkede offentlige steder og arbejdspladser og i den offentlige transport.",
        "Det betyder, at pubber, restauranter og stationer er røgfri indendørs. Du må kun ryge i særligt anviste udendørsområder.",
        { ul: [
          "Indendørs: rygning forbudt på lukkede offentlige steder og arbejdspladser.",
          "Offentlig transport: røgfri.",
          "Tilladt: kun i anviste udendørsområder.",
        ] },
      ] },
      { h: "Vaping og e-cigaretter", blocks: [
        "Reglerne for vaping og e-cigaretter varierer fra sted til sted. Mange steder er det ikke tilladt indendørs, men det kan variere mellem forskellige lokaler og virksomheder. Følg altid skiltningen og personalets anvisninger på stedet.",
      ] },
      { h: "Spritkørsel og alkohol på offentlige steder", blocks: [
        "Spritkørsel straffes strengt i Storbritannien, med fastsatte promillegrænser og sanktioner. Har du tænkt dig at køre bil, bør du kende reglerne — der er en særskilt guide om at køre bil i Storbritannien.",
        "Nogle lokale myndigheder har desuden indført zoner med restriktioner mod at drikke alkohol på offentlige steder. Hold øje med lokal skiltning, der angiver sådanne begrænsninger.",
      ] },
      { h: "Indførsel af alkohol og tobak", blocks: [
        "For hvor meget alkohol og tobak du må tage med ind i landet, gælder der særlige told- og indførselsgrænser (duty-free). De er beskrevet nærmere i guiden om [toldregler og kvoter](/da/toldregler-storbritannien/).",
      ] },
    ],
    faq: [
      { q: "Hvad er aldersgrænsen for alkohol i England?", a: "I England skal du være 18 år for at købe alkohol eller drikke alkohol på pub eller restaurant. Er du 16 eller 17 år og sammen med en voksen, må du drikke (men ikke købe) øl, vin eller cider til et måltid (GOV.UK)." },
      { q: "Hvilken aldersgrænse gælder for at købe alkohol og tobak i Storbritannien?", a: "Du skal være mindst 18 år for at købe alkohol og tobak i Storbritannien. Butikker og barer kan bede om legitimation, der viser din alder." },
      { q: "Må jeg ryge på pubber og i butikker?", a: "Nej. Rygning er forbudt indendørs på alle lukkede offentlige steder og arbejdspladser og i den offentlige transport. Pubber, restauranter og stationer er røgfri indendørs — du må kun ryge i særligt anviste udendørsområder." },
      { q: "Må jeg bruge e-cigaret (vaping)?", a: "Reglerne for e-cigaretter og vaping varierer fra sted til sted. Ofte er det ikke tilladt indendørs. Følg altid skiltningen og personalets anvisninger på stedet." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "rejse-med-born-til-uk",
    group: "travel",
    title: "Rejse med børn til Storbritannien: ETA og pas (2026)",
    description: "Alle, også spædbørn, skal have egen ETA og eget pas til Storbritannien. Border Force kan bede om bevis for slægtskab — sådan forbereder du rejsen med børn.",
    h1: "Rejse med børn til Storbritannien",
    lead: "Alle rejsende, også spædbørn, skal have deres egen ETA og deres eget pas. Border Force kan bede om bevis for jeres relation, især hvis I har forskellige efternavne, eller hvis du ikke er barnets forælder.",
    card: "Egen ETA og eget pas til hvert barn, og hvilke dokumenter Border Force kan bede om.",
    sections: [
      { h: "Alle rejsende skal have egen ETA og eget pas", blocks: [
        "Alle rejsende, også spædbørn, skal have deres egen ETA og deres eget pas. Et barn kan ikke rejse på en forælders ETA — der gælder én ETA pr. person.",
      ] },
      { h: "Border Force kan bede om bevis for slægtskab", blocks: [
        "Når du rejser med børn, kan Border Force (grænsekontrollen) bede om bevis for jeres relation — især hvis I har forskellige efternavne, eller hvis du ikke er barnets forælder. Gyldige beviser kan være:",
        { ul: [
          "Fødsels- eller adoptionsattest.",
          "Vielses- eller skilsmissedokument (hvis du er forælder, men har et andet efternavn).",
          "Et samtykkebrev (consent letter) fra forælderen (hvis du ikke er barnets forælder).",
        ] },
      ] },
      { h: "Hav dokumenterne med", blocks: [
        "Også ved fremtidige rejser er det en god idé at have den slags beviser for slægtskab med. Det gør indrejsen lettere, hvis du bliver spurgt ved grænsekontrollen.",
      ] },
      { h: "Godt at vide før indrejsen", blocks: [
        "[Søg om en UK ETA](/da/sadan-ansoger-du/) til hvert familiemedlem, og [tjek status](/da/tjek-status/) på ansøgningerne. De generelle indrejseregler finder du i guiden [Indrejse i Storbritannien og visum](/da/indrejse-og-visum/), og hvad du må tage med, i guiden om [toldregler og kvoter](/da/toldregler-storbritannien/). Har du planer om at leje bil, eller skal I mellemlande i Storbritannien, findes der særskilte guides om at køre bil i Storbritannien og om transit.",
      ] },
    ],
    faq: [
      { q: "Skal børn også have en ETA til Storbritannien?", a: "Ja. Alle rejsende, også spædbørn, skal have deres egen ETA. Et barn kan ikke rejse på en forælders ETA — der gælder én ETA pr. person." },
      { q: "Kan børn rejse på forælderens pas eller ETA?", a: "Nej. Alle rejsende skal have eget pas og egen ETA uanset alder. Man kan ikke rejse ind på en anden persons pas eller ETA." },
      { q: "Hvad gælder, hvis jeg rejser med et barn, der har et andet efternavn?", a: "Border Force kan bede om bevis for slægtskab, især hvis I har forskellige efternavne, eller hvis du ikke er barnets forælder. Gyldige beviser kan være fødsels- eller adoptionsattest, vielses- eller skilsmissedokument eller et samtykkebrev (consent letter) fra forælderen." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "londons-lufthavne",
    group: "travel",
    title: "Englands næststørste lufthavn er Gatwick — Londons 5 lufthavne",
    description: "Englands og Storbritanniens næststørste lufthavn er London Gatwick (42,8 mio. passagerer i 2025 ifølge CAA) efter Heathrow. Londons 5 lufthavne kort fortalt.",
    h1: "Londons 5 største lufthavne",
    lead: "Englands — og Storbritanniens — næststørste lufthavn er London Gatwick med 42,8 mio. passagerer i 2025, efter Heathrow (84,5 mio.). Nummer tre er Manchester (32,1 mio.), ifølge den britiske luftfartsmyndighed CAA. London betjenes af fem store lufthavne, og valget påvirker rute, tid og pris for at komme ind til centrum.",
    card: "Heathrow, Gatwick, Stansted, Luton og London City — og hvordan du kommer ind til centrum.",
    sections: [
      { h: "Heathrow (LHR) — det vestlige London", blocks: [
        "Storbritanniens største lufthavn og vigtigste internationale knudepunkt (terminal 2–5). Læs mere i guiden om [Heathrow Lufthavn](/da/heathrow-lufthavn/).",
        "Transport: Heathrow Express ca. 15 min., Elizabeth Line ca. 30 min., undergrundsbane ca. 50 min.",
      ] },
      { h: "Gatwick (LGW) — det sydlige London", blocks: [
        "Englands og Storbritanniens næststørste lufthavn (efter Heathrow); både traditionelle selskaber og lavprisselskaber (nord- og sydterminalen).",
        "Transport: Gatwick Express ca. 30 min., Thameslink ca. 30–45 min.",
      ] },
      { h: "Stansted (STN) — det nordøstlige London", blocks: [
        "Ryanairs base med mange europæiske forbindelser; én terminal, let at finde rundt i.",
        "Transport: Stansted Express ca. 50 min., bus ca. 60–90 min.",
      ] },
      { h: "Luton (LTN) — nord for London", blocks: [
        "Base for easyJet og Wizz Air; én terminal med shuttleforbindelse til stationen.",
        "Transport: Luton Airport Express ca. 30 min., Thameslink ca. 30 min.",
      ] },
      { h: "London City (LCY) — det centrale London (tættest på)", blocks: [
        "Tættest på centrum; populær blandt forretningsrejsende.",
        "Transport: DLR ca. 15–25 min. til centrum.",
        { note: "Rejsetiderne er omtrentlige og afhænger af, hvor i London du skal hen, og af tidspunktet på døgnet." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  heathrow: {
    slug: "heathrow-lufthavn",
    group: "travel",
    title: "Heathrow Lufthavn (LHR): terminaler, paskontrol og vej til London",
    description: "Guide til Heathrow Lufthavn: terminal 2–5, paskontrol (eGate) og transport til det centrale London — Heathrow Express, Elizabeth Line, undergrundsbane og bus.",
    h1: "Heathrow Lufthavn (LHR)",
    lead: "Heathrow er Storbritanniens største lufthavn og den vigtigste indgang til London. Her finder du terminalerne, hvordan paskontrollen foregår, og hvordan du kommer ind til centrum.",
    card: "Terminal 2–5, paskontrol med eGate og de hurtigste veje ind til det centrale London.",
    sections: [
      { h: "Beliggenhed og terminaler", blocks: [
        "Heathrow (IATA-kode: LHR) ligger i det vestlige London. Det er den største og mest trafikerede lufthavn i Storbritannien med forbindelser fra hele verden. Terminal 2, 3, 4 og 5 er i drift — tjek terminalnummeret på din billet, da det har betydning for både ruten og indtjekningen.",
      ] },
      { h: "Paskontrol efter ankomst", blocks: [
        `Efter ankomst går du gennem paskontrollen ved de automatiske eGate-sluser (med biometrisk pas) eller ved en manuel skranke med en betjent. Husk, at du for at rejse ind skal have et gyldigt pas og en gyldig [UK ETA](/da/hvad-er-eta/), der er knyttet til dette pas (ved ophold på op til ${F.staySixMonths} måneder). Læs mere om [paskontrollen og eGates](/da/paskontrol-og-egates/).`,
      ] },
      { h: "Transport til det centrale London", blocks: [
        { table: {
          head: ["Transportmiddel", "Omtrentlig rejsetid"],
          rows: [
            ["Heathrow Express (hurtigtog)", "ca. 15 minutter"],
            ["Elizabeth Line", "ca. 30 minutter"],
            ["Undergrundsbane (Piccadilly line)", "ca. 50 minutter"],
            ["Bus / coach", "ca. 60–90 minutter"],
          ],
        } },
        { note: "Rejsetiderne er omtrentlige og afhænger af terminal, tidspunkt på døgnet og hvor i London du skal hen." },
        "Mere om Londons lufthavne: [Londons 5 største lufthavne](/da/londons-lufthavne/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
