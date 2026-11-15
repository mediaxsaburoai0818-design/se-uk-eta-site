import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（pt・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "entrada-e-vistos",
    group: "travel",
    hub: true,
    title: "Entrada no Reino Unido e vistos: guia 2026",
    description: `Regras de entrada no Reino Unido: UK ETA para estadias até ${F.staySixMonths} meses, quando é preciso visto, controlo fronteiriço (eGates), documentos e viagens com crianças.`,
    h1: "Entrada no Reino Unido e vistos",
    lead: `Para turismo, negócios, visitas a familiares ou trânsito, com estadias até ${F.staySixMonths} meses, os cidadãos da UE — incluindo os portugueses — não precisam de visto: basta uma UK ETA. Este guia explica quando a ETA chega, quando é preciso visto, como funciona o controlo fronteiriço e que documentos deve preparar.`,
    card: `Quando basta a ETA, quando é preciso visto, eGates e documentos para entrar`,
    sections: [
      { h: `ETA ou visto? Estadias até ${F.staySixMonths} meses`, blocks: [
        `Para turismo, negócios, visitas a familiares ou trânsito, com estadias até ${F.staySixMonths} meses, os cidadãos da UE (incluindo os portugueses) não precisam de visto — basta uma UK ETA (Electronic Travel Authorisation). O pedido é feito online e a maioria das pessoas recebe uma decisão automática em poucos minutos, mas convém pedir pelo menos ${F.decisionDays} dias úteis antes da viagem, porque alguns pedidos podem exigir uma análise adicional.`,
        "Se tiver outra nacionalidade (por exemplo, brasileira), confirme se precisa de ETA ou de visto na ferramenta oficial [GOV.UK: Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
        `Uma ETA custa ${F.fee}, é válida durante ${F.validYears} anos e permite várias entradas. Saiba mais em [O que é a UK ETA](/pt/o-que-e-a-eta/).`,
      ] },
      { h: "Quando precisa de visto", blocks: [
        `É necessário um visto britânico para estadias superiores a ${F.staySixMonths} meses e para viagens de estudos de longa duração, trabalho ou fixação de residência. Os tipos mais comuns são:`,
        { ul: [
          "Visto de estudante — estudos de longa duração (normalmente de 2 a 5 anos, consoante o curso).",
          "Visto de trabalho — trabalho no Reino Unido; o tipo depende da oferta de emprego e das suas qualificações.",
          "Visto familiar — para se juntar a um familiar que vive no Reino Unido.",
          "Youth Mobility Scheme — para jovens de determinados países (estadia até 2 anos).",
        ] },
      ] },
      { h: "Controlo fronteiriço: eGates e controlo manual de passaportes", blocks: [
        "Nos aeroportos britânicos, o controlo fronteiriço faz-se nas portas automáticas eGate (com passaporte biométrico) ou num balcão manual com um agente de fronteira. As eGates aceleram o controlo de passaportes; se houver dúvidas sobre o motivo da viagem, pode ser chamado a falar com um agente. Quem pode usar as portas automáticas e como funciona a passagem, passo a passo, está no guia [Controlo de passaportes e eGates](/pt/controlo-fronteirico-egates/).",
        "Depois do controlo de passaportes segue-se a alfândega — que alimentos e bens pode levar consigo está explicado no guia [Regras alfandegárias e limites de importação](/pt/alfandega-reino-unido/).",
      ] },
      { h: "Documentos necessários", blocks: [
        { ul: [
          "Passaporte válido durante toda a estadia (o cartão de cidadão/bilhete de identidade nacional deixou de ser aceite em outubro de 2021).",
          "UK ETA associada a esse passaporte (ou o visto correspondente, no caso de estadias mais longas).",
          "Documentos de apoio: podem ser verificados a confirmação do alojamento, o bilhete de regresso e os meios de subsistência para a estadia.",
        ] },
      ] },
      { h: "Viajar com crianças (menores de 18 anos)", blocks: [
        "Cada pessoa tem de ter a sua própria UK ETA, independentemente da idade — incluindo bebés e crianças. As crianças que viajam sem um ou sem ambos os pais podem ter de apresentar um documento que comprove o consentimento do responsável parental para a viagem. É boa ideia levar a certidão de nascimento ou uma autorização escrita (em inglês). Mais pormenores no guia [Viajar com menores para o Reino Unido](/pt/viajar-com-menores/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "requisitos-do-passaporte",
    group: "travel",
    title: "Passaporte para Inglaterra 2026: válido toda a estadia",
    description: "Regras de passaporte para Inglaterra/Reino Unido: os cidadãos da UE precisam de passaporte válido toda a estadia. O cartão de cidadão só serve em certos casos.",
    h1: "Requisitos do passaporte para viajar para o Reino Unido: validade e ETA",
    lead: `Para entrar em Inglaterra e no resto do Reino Unido, os portugueses e os outros cidadãos da UE precisam de um passaporte válido durante toda a estadia. O cartão de identidade nacional só serve em certos casos, por exemplo com settled ou pre-settled status. O passaporte fica também associado à sua ETA (${F.fee}).`,
    card: "Validade do passaporte, ligação à ETA e passaporte próprio para cada viajante",
    sections: [
      { h: "Passaporte válido durante toda a estadia", blocks: [
        "Para visitar o Reino Unido precisa de um passaporte válido e, regra geral, este deve ser válido durante toda a sua estadia.",
        "Para muitas nacionalidades não costuma ser exigida margem adicional, como a de o passaporte ter de ser válido mais seis meses após a entrada. Os requisitos podem, no entanto, variar consoante a nacionalidade, por isso confirme os requisitos aplicáveis ao seu país no gov.uk antes da viagem. Se não for cidadão da UE (por exemplo, se tiver nacionalidade brasileira), verifique também se precisa de ETA ou de visto em [GOV.UK: Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
      ] },
      { h: "A ETA está associada ao passaporte", blocks: [
        "Uma ETA fica associada ao passaporte que utilizou no pedido, e viaja com o mesmo passaporte que indicou no pedido.",
        "Se renovar ou trocar de passaporte, regra geral tem de pedir uma nova ETA para o novo passaporte. Por isso, é sensato verificar a validade do passaporte com antecedência, antes de pedir a ETA.",
      ] },
      { h: "Todos os viajantes precisam de passaporte próprio — incluindo bebés", blocks: [
        "Cada viajante, incluindo bebés e crianças, precisa regra geral de um passaporte próprio para viajar para o Reino Unido e, além disso, da sua própria ETA. Saiba mais no guia [Viajar com menores para o Reino Unido](/pt/viajar-com-menores/). Como tratar do passaporte de uma criança pode demorar, é melhor começar cedo.",
      ] },
      { h: "Vários passaportes ou dupla nacionalidade", blocks: [
        "Se tiver dupla nacionalidade ou vários passaportes, entra regra geral com o passaporte ao qual a sua ETA está associada. Certifique-se, por isso, de que a ETA está ligada ao passaporte com que realmente vai viajar.",
      ] },
      { h: "Próximos passos antes da viagem", blocks: [
        "Com o passaporte em ordem, pode [pedir a sua UK ETA](/pt/como-pedir/) e depois acompanhar o pedido em [Consultar o estado da ETA](/pt/consultar-estado/). À chegada, a entrada faz-se no [controlo de passaportes e nas eGates](/pt/controlo-fronteirico-egates/), e o que pode levar consigo está descrito no guia sobre a [alfândega do Reino Unido](/pt/alfandega-reino-unido/). As regras gerais de entrada estão no guia [Entrada no Reino Unido e vistos](/pt/entrada-e-vistos/).",
      ] },
    ],
    faq: [
      { q: "Durante quanto tempo tem de ser válido o passaporte para uma viagem ao Reino Unido?", a: "Para visitar o Reino Unido precisa, regra geral, de um passaporte válido durante toda a estadia. Para muitas nacionalidades não costuma ser exigida margem adicional, como seis meses de validade após a entrada, mas os requisitos podem variar. Confirme por isso os requisitos aplicáveis ao seu país no gov.uk antes da viagem." },
      { q: "A que passaporte fica associada a ETA?", a: "A ETA fica associada ao passaporte que utilizou no pedido, e viaja com esse mesmo passaporte. Se renovar ou trocar de passaporte, regra geral tem de pedir uma nova ETA para o novo passaporte. Se tiver dupla nacionalidade e vários passaportes, entra com o passaporte ao qual a ETA está associada." },
      { q: "As crianças precisam de passaporte próprio para o Reino Unido?", a: "Todos os viajantes, incluindo bebés, precisam regra geral de um passaporte próprio para viajar para o Reino Unido. Cada viajante precisa também da sua própria ETA. Verifique os requisitos com antecedência, porque tratar do passaporte de uma criança pode demorar." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "controlo-fronteirico-egates",
    group: "travel",
    title: "Controlo de passaportes no Reino Unido: eGates (2026)",
    description: "Com passaporte da UE e uma UK ETA válida pode usar as eGates — sem perguntas nem carimbo. Desde 8 de julho de 2026, crianças a partir dos 8 anos também.",
    h1: "Controlo de passaportes no Reino Unido e eGates",
    lead: "Com um passaporte da UE e uma UK ETA válida pode passar pelas portas automáticas eGate, sem perguntas e sem carimbo. Desde 8 de julho de 2026, também as crianças a partir dos 8 anos as podem usar. Veja quem pode usar as eGates, como funciona a passagem e o que o agente de fronteira pode perguntar no balcão.",
    card: "Quem pode usar as eGates, como funcionam e a nova regra para crianças",
    sections: [
      { h: "Novidade desde 8 de julho de 2026: eGates a partir dos 8 anos", blocks: [
        "Desde 8 de julho de 2026, as crianças com 8 anos ou mais podem usar as eGates — antes, o limite era de 10 anos. Aplicam-se duas condições: a criança tem de medir pelo menos 120 cm e as crianças entre os 8 e os 17 anos têm de viajar acompanhadas por um adulto.",
        "Para muitas famílias, isto significa que todo o grupo pode agora passar pelas portas automáticas, sem fazer fila no balcão do agente de fronteira.",
      ] },
      { h: "Quem pode usar as eGates", blocks: [
        "As eGates estão abertas a titulares de passaporte de:",
        { ul: [
          "todos os países da UE (incluindo Portugal);",
          "Islândia, Liechtenstein, Noruega e Suíça;",
          "Austrália, Canadá, Japão, Nova Zelândia, Singapura, Coreia do Sul e Estados Unidos.",
        ] },
        "A condição é ter uma autorização de viagem válida — para os viajantes portugueses, isso significa na prática uma UK ETA válida (ou eVisa). Se ainda não tem, veja [como pedir a UK ETA](/pt/como-pedir/).",
        "Há mais de 290 eGates em 15 aeroportos e terminais ferroviários do Reino Unido — incluindo nos [aeroportos de Londres](/pt/aeroportos-de-londres/), como Heathrow.",
      ] },
      { h: "Como funciona uma eGate: sem perguntas, sem carimbo", blocks: [
        { ul: [
          "Coloque o passaporte biométrico, aberto na página da fotografia, no leitor.",
          "Olhe para a câmara — o sistema compara o seu rosto com a fotografia do passaporte.",
          "A porta abre-se e passa — sem falar com nenhum agente e sem carimbo de entrada no passaporte.",
        ] },
        "Se a porta não o reconhecer (por exemplo, por o passaporte estar gasto), é simplesmente encaminhado para o balcão do agente de fronteira.",
      ] },
      { h: "Controlo manual de passaportes: as 5 perguntas possíveis", blocks: [
        "Se passar pelo controlo de um agente de fronteira, podem perguntar-lhe sobre:",
        { ul: [
          "O motivo da viagem — turismo, negócios, visita a familiares.",
          "A duração da estadia — quantos dias vai ficar.",
          "O alojamento — a morada do hotel ou de quem o recebe.",
          "O regresso — data e reserva da viagem de volta.",
          "Os meios financeiros — dinheiro suficiente para a estadia.",
        ] },
      ] },
      { h: "Documentos necessários", blocks: [
        { ul: [
          "Passaporte biométrico válido durante toda a estadia.",
          "UK ETA válida — fica associada eletronicamente ao passaporte e não precisa de ser impressa; ainda assim, convém guardar o email de aprovação.",
        ] },
        "Se tiver dúvidas sobre o seu pedido, veja como [consultar o estado da ETA](/pt/consultar-estado/). Para escalas no Reino Unido aplicam-se regras próprias, explicadas no guia sobre trânsito pelo Reino Unido.",
      ] },
      { h: "Famílias com crianças: o que se aplica", blocks: [
        { ul: [
          "As crianças a partir dos 8 anos (e com pelo menos 120 cm) usam as eGates; entre os 8 e os 17 anos, sempre acompanhadas por um adulto.",
          "As crianças com menos de 8 anos passam pelo balcão do agente de fronteira juntamente com os pais.",
          "Cada criança — incluindo bebés — precisa da sua própria UK ETA.",
          "As regras gerais de entrada estão no guia [Entrada no Reino Unido e vistos](/pt/entrada-e-vistos/).",
        ] },
      ] },
      { h: "Depois do controlo de passaportes: a alfândega", blocks: [
        "Depois do controlo de passaportes segue-se o controlo aduaneiro — atenção: é proibido levar carne e laticínios da UE para o Reino Unido. Saiba mais no guia sobre [regras alfandegárias e limites de importação](/pt/alfandega-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Posso usar as eGates com passaporte português?", a: "Sim. As eGates estão abertas a titulares de passaporte de todos os países da UE (bem como da Islândia, Liechtenstein, Noruega e Suíça, e ainda da Austrália, Canadá, Japão, Nova Zelândia, Singapura, Coreia do Sul e Estados Unidos), desde que tenha uma autorização de viagem válida, como a UK ETA ou um eVisa." },
      { q: "A partir de que idade podem as crianças usar as eGates?", a: "Desde 8 de julho de 2026, as crianças a partir dos 8 anos podem usar as eGates (antes, o limite era de 10 anos). A criança tem de medir pelo menos 120 cm, e as crianças entre os 8 e os 17 anos têm de viajar acompanhadas por um adulto." },
      { q: "O passaporte é carimbado quando passo por uma eGate?", a: "Não. Ao passar por uma eGate nenhum agente lhe faz perguntas e não é aposto qualquer carimbo de entrada no passaporte. A sua UK ETA está associada eletronicamente ao passaporte." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "alfandega-reino-unido",
    group: "travel",
    title: "O que pode levar para Inglaterra? Alfândega britânica 2026",
    description: "Para o Reino Unido, isentos: 4 l de bebidas espirituosas, 18 l de vinho, 42 l de cerveja. Proibido levar da UE laticínios e carne. Dinheiro: declarar £10 000+.",
    h1: "O que pode levar para Inglaterra? A alfândega do Reino Unido",
    lead: "A regra mais importante: da UE não pode levar carne nem laticínios para o Reino Unido. Veja que alimentos são permitidos, que exceções existem para bebés, os limites de álcool e tabaco e quando é obrigatório declarar dinheiro.",
    card: "Carne e laticínios proibidos, limites de álcool e tabaco, dinheiro a declarar",
    sections: [
      { h: "Regra n.º 1: nada de carne nem laticínios da UE", blocks: [
        "Da UE é proibido levar carne e laticínios para o Reino Unido (Inglaterra, Escócia, País de Gales). A proibição abrange:",
        { ul: [
          "Laticínios: queijo, leite, manteiga, iogurte.",
          "Carne: de porco, vaca, ovelha, cabra e caça, bem como produtos derivados — incluindo salame, salsichas, fiambre/presunto e sanduíches com carne ou queijo.",
        ] },
        "A regra aplica-se também a pequenas quantidades na bagagem de mão — uma sanduíche de fiambre comprada no aeroporto tem de ser comida ou deitada fora antes do controlo.",
      ] },
      { h: "A exceção: alimentação infantil (até 2 kg)", blocks: [
        "O leite para lactentes, a alimentação infantil e os alimentos para fins medicinais específicos são permitidos até 2 kg por pessoa, desde que estejam na embalagem de marca original por abrir e não precisem de refrigeração antes do consumo.",
      ] },
      { h: "Alimentos que pode levar sem problemas", blocks: [
        { ul: [
          "Pão (mas não sanduíches com carne ou laticínios).",
          "Bolos sem natas frescas, bolachas e chocolate.",
          "Massa e sopas embaladas.",
          "Peixe, ovos e mel — permitidos para consumo próprio.",
        ] },
        "Em caso de dúvida, verifique o produto concreto no GOV.UK antes de partir — as regras variam consoante a categoria de alimento.",
      ] },
      { h: "Álcool e tabaco: limites isentos à chegada ao Reino Unido", blocks: [
        { table: { head: ["Categoria", "Limite isento"], rows: [
          ["Cerveja", "42 litros"],
          ["Vinho não espumante", "18 litros"],
          ["Bebidas espirituosas (acima de 22 %)", "4 litros ou 9 litros de bebidas até 22 %"],
          ["Cigarros", "200 unidades (ou 50 charutos ou 250 g de tabaco)"],
          ["Outros bens (presentes, lembranças)", "até £390 (£270 se chegar em avião ou barco privado)"],
        ] } },
        "Tudo o que exceder estes limites tem de ser declarado e os respetivos encargos têm de ser pagos. Estes são os limites do Reino Unido à chegada; no regresso a casa aplicam-se as regras do seu país.",
      ] },
      { h: "Dinheiro: declaração obrigatória a partir de £10 000", blocks: [
        "Se levar £10 000 ou mais (em numerário, incluindo o montante equivalente noutras moedas), é obrigado a declarar o valor — online antes da viagem ou no canal vermelho à chegada. Não declarar pode levar à apreensão de todo o montante e a uma multa até £5 000.",
      ] },
      { h: "Sanções e como decorre o controlo", blocks: [
        "Os alimentos proibidos podem ser apreendidos na fronteira e, se exceder sem declaração os limites de álcool e tabaco, os bens podem ser retidos e podem ser aplicadas sanções. O mais seguro é usar o canal vermelho se tiver algo a declarar.",
        "O controlo aduaneiro vem depois do controlo de passaportes — veja como funciona o [controlo de passaportes e a passagem pelas eGates](/pt/controlo-fronteirico-egates/). Não se esqueça: para entrar precisa de uma [UK ETA](/pt/como-pedir/) válida — o estado do pedido pode ser visto em [Consultar o estado da ETA](/pt/consultar-estado/). As regras gerais de entrada estão no guia [Entrada no Reino Unido e vistos](/pt/entrada-e-vistos/).",
      ] },
    ],
    faq: [
      { q: "Posso levar queijo ou produtos de carne de Portugal para Inglaterra?", a: "Não. Da UE é proibido levar carne (de porco, vaca, ovelha, cabra e caça) e produtos de carne, bem como laticínios (queijo, leite, manteiga, iogurte), para o Reino Unido. Os produtos podem ser apreendidos na fronteira." },
      { q: "Quantos cigarros e quanto álcool posso levar isentos para o Reino Unido?", a: "200 cigarros (ou 50 charutos ou 250 g de tabaco), 42 litros de cerveja, 18 litros de vinho não espumante e 4 litros de bebidas espirituosas acima de 22 % ou 9 litros de bebidas alcoólicas até 22 %." },
      { q: "Tenho de declarar dinheiro ao entrar no Reino Unido?", a: "Sim, se levar £10 000 ou mais. A declaração é feita online antes da viagem ou no canal vermelho à chegada. Não declarar pode levar à apreensão de todo o montante e a uma multa até £5 000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "levar-medicamentos",
    group: "travel",
    title: "Levar medicamentos para o Reino Unido: regras (2026)",
    description: "Pode levar para o Reino Unido até três meses dos seus medicamentos, com prova de que lhe foram receitados. Medicamentos controlados podem exigir licença.",
    h1: "Levar medicamentos para o Reino Unido",
    lead: "Pode levar os seus próprios medicamentos para o Reino Unido — até três meses de consumo —, desde que consiga provar que lhe foram receitados. Veja quanto pode levar, que documentos precisa, o que se aplica a medicamentos controlados e as regras para líquidos na bagagem de mão.",
    card: "Até três meses de consumo, receita ou declaração médica e medicamentos controlados",
    sections: [
      { h: "Até três meses de consumo", blocks: [
        "Pode levar para o Reino Unido até três meses de consumo dos seus próprios medicamentos, para uso pessoal. Deve conseguir provar que os medicamentos lhe foram receitados.",
        "Sempre que possível, guarde os medicamentos na embalagem original. Isso facilita mostrar o que são e que lhe pertencem, caso lhe perguntem na fronteira.",
      ] },
      { h: "Declaração médica e receita a levar", blocks: [
        "Leve uma declaração médica ou uma receita como prova de que o medicamento lhe foi prescrito. O documento deve indicar:",
        { ul: [
          "O nome do medicamento.",
          "A posologia e a dosagem.",
          "Com que frequência toma o medicamento.",
          "A assinatura ou o número de registo do médico que o prescreveu.",
        ] },
        "Mantenha os medicamentos na embalagem original sempre que possível, para que os dados da embalagem coincidam com a declaração.",
      ] },
      { h: "Medicamentos controlados (controlled drugs)", blocks: [
        "Alguns medicamentos contêm substâncias controladas (controlled drugs) e estão sujeitos a regras adicionais. Pergunte ao seu médico ou farmacêutico se é o caso dos seus medicamentos.",
        "Se for, pode precisar de uma licença pessoal (personal licence). Nesse caso, deve contactar o Home Office britânico (Drug and Firearms Licensing Unit) pelo menos 15 dias úteis antes da viagem.",
        "Os medicamentos classificados no Schedule 1 não podem entrar no país sem licença.",
      ] },
      { h: "Líquidos e seringas na bagagem de mão", blocks: [
        "Os líquidos e as seringas na bagagem de mão estão sujeitos às regras de segurança habituais dos aeroportos. Se levar medicamentos líquidos ou material para injeções, pode ser útil ter a declaração médica à mão também no controlo de segurança. Saiba mais no guia sobre [controlo de segurança e líquidos no aeroporto](/pt/liquidos-bagagem-de-mao/).",
      ] },
      { h: "Cuidados de saúde no Reino Unido", blocks: [
        "Se precisar de cuidados médicos ou de novos medicamentos durante a estadia, é útil saber como funciona o sistema de saúde britânico (NHS), que explicamos no guia sobre saúde e NHS no Reino Unido.",
      ] },
    ],
    faq: [
      { q: "Posso levar os meus medicamentos para o Reino Unido?", a: "Sim, pode levar até três meses de consumo dos seus próprios medicamentos para uso pessoal. Leve prova de que os medicamentos lhe foram receitados e, de preferência, guarde-os na embalagem original." },
      { q: "Que documentos preciso para levar medicamentos?", a: "Leve uma declaração médica ou uma receita com o nome do medicamento, a posologia e a dosagem, a frequência com que o toma e a assinatura ou o número de registo do médico que o prescreveu. Mantenha os medicamentos na embalagem original sempre que possível." },
      { q: "O que se aplica aos medicamentos controlados?", a: "Alguns medicamentos contêm substâncias controladas (controlled drugs) e estão sujeitos a regras adicionais. Pergunte ao seu médico ou farmacêutico se é o caso dos seus medicamentos. Se for, pode precisar de uma licença pessoal e deve contactar o Home Office britânico pelo menos 15 dias úteis antes da viagem." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "liquidos-bagagem-de-mao",
    group: "travel",
    title: "Líquidos na bagagem de mão: aeroportos britânicos (2026)",
    description: "Muitos aeroportos britânicos aceitam até 100 ml por embalagem na bagagem de mão (saco de 1 litro); alguns 2 litros com scanners CT. Confirme o seu aeroporto.",
    h1: "Líquidos na bagagem de mão e controlo de segurança nos aeroportos britânicos",
    lead: "Em muitos aeroportos britânicos aplica-se frequentemente o limite de 100 ml por embalagem para líquidos na bagagem de mão. Alguns aeroportos começaram a permitir quantidades maiores graças a novos scanners, mas as regras variam — por isso convém confirmar as do seu aeroporto de partida.",
    card: "Regra dos 100 ml, scanners CT, alimentação infantil e medicamentos",
    sections: [
      { h: "A regra dos 100 ml e o saco transparente", blocks: [
        "Em muitos aeroportos britânicos aplica-se frequentemente a regra de que os líquidos na bagagem de mão devem estar em embalagens de 100 ml no máximo cada. Uma embalagem com capacidade superior a 100 ml normalmente não é aceite, mesmo que não esteja cheia.",
        { ul: [
          "As embalagens devem normalmente ir num saco transparente e refechável com capacidade máxima de 1 litro.",
          "A regra costuma ser de um saco por pessoa.",
          "Contam muitas vezes como líquidos também os géis, pastas, cremes, sprays e produtos semelhantes.",
        ] },
        "Como os pormenores podem variar entre aeroportos, é sensato confirmar as regras em vigor no seu aeroporto de partida antes da viagem.",
      ] },
      { h: "Novos scanners CT: em alguns aeroportos o limite pode ser maior", blocks: [
        "Alguns aeroportos britânicos instalaram novos scanners CT e podem, com isso, permitir líquidos em embalagens até 2 litros. A introdução está, no entanto, a decorrer a ritmos diferentes e a situação varia de aeroporto para aeroporto.",
        "Mesmo em meados de 2026, o limite de 100 ml continua em vigor em muitos aeroportos. Não parta do princípio de que se aplica o limite maior: confirme sempre as regras mais recentes do aeroporto de onde parte — e, de preferência, também do aeroporto do regresso.",
      ] },
      { h: "Exceções: alimentação infantil, leite para bebé e medicamentos", blocks: [
        "A alimentação infantil, o leite para lactentes e os medicamentos necessários podem, em certos casos, ser levados em quantidade superior ao limite habitual de líquidos. Normalmente, porém, é preciso declará-los ao pessoal no controlo.",
        "As quantidades e as condições podem variar entre aeroportos. Pode ser útil ter a receita ou outra documentação à mão e confirmar previamente o que se aplica no aeroporto onde viaja. Se viajar com crianças, veja também o guia [Viajar com menores para o Reino Unido](/pt/viajar-com-menores/).",
      ] },
      { h: "Eletrónica e objetos maiores", blocks: [
        "Os aparelhos eletrónicos maiores, como computadores portáteis, podem ter de ser retirados da mala e colocados à parte na caixa, conforme as indicações do pessoal. Também isto pode variar consoante o aeroporto e o equipamento usado no controlo, por isso siga as instruções dadas no local.",
      ] },
      { h: "Como se preparar para o controlo", blocks: [
        "Para que o controlo decorra sem problemas, ajuda arrumar os líquidos no saco transparente ainda em casa, ter a alimentação infantil e os medicamentos facilmente acessíveis para os poder declarar e confirmar previamente as regras em vigor no seu aeroporto.",
        "O controlo de segurança é feito antes do controlo de passaportes — veja como funcionam o [controlo de passaportes e as eGates](/pt/controlo-fronteirico-egates/) e o que pode levar consigo na [alfândega do Reino Unido](/pt/alfandega-reino-unido/). Não se esqueça de que, para entrar, precisa de uma [UK ETA](/pt/como-pedir/) válida — o estado pode ser visto em [Consultar o estado da ETA](/pt/consultar-estado/). As regras gerais de entrada estão no guia [Entrada no Reino Unido e vistos](/pt/entrada-e-vistos/).",
      ] },
    ],
    faq: [
      { q: "Quanto líquido se pode levar na bagagem de mão num aeroporto britânico?", a: "Em muitos aeroportos britânicos aplica-se frequentemente o limite de 100 ml por embalagem, reunidas num saco transparente e refechável de 1 litro no máximo, um saco por pessoa. Alguns aeroportos instalaram novos scanners CT e podem permitir até 2 litros, mas a introdução varia entre aeroportos. Confirme sempre as regras em vigor no seu aeroporto de partida antes da viagem." },
      { q: "Pode-se levar água pelo controlo de segurança?", a: "A água e outras bebidas compradas depois do controlo de segurança podem normalmente ser levadas para bordo. Já as bebidas trazidas antes do controlo estão em regra sujeitas às regras dos líquidos e podem ter de ser deitadas fora se excederem o limite. As regras podem variar entre aeroportos, por isso confirme o que se aplica onde vai viajar." },
      { q: "Pode-se levar leite para bebé e medicamentos pelo controlo?", a: "A alimentação infantil, o leite para lactentes e os medicamentos necessários podem, em certos casos, ser levados em quantidade superior ao limite habitual de líquidos, desde que sejam declarados ao pessoal no controlo. As quantidades e condições podem variar, por isso confirme previamente junto do seu aeroporto e tenha à mão a receita ou outra documentação, se for o caso." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alcool-e-tabaco",
    group: "travel",
    title: "Idade mínima para álcool em Inglaterra: 18 anos | 2026",
    description: "Em Inglaterra é preciso ter 18 anos para comprar álcool ou beber num pub. Aos 16–17 anos, com um adulto, pode beber cerveja, vinho ou sidra à refeição.",
    h1: "Idade mínima para álcool em Inglaterra — tabaco e regras",
    lead: "Em Inglaterra é preciso ter 18 anos para comprar álcool ou beber álcool num pub ou restaurante. Com 16 ou 17 anos e acompanhado por um adulto, pode beber (mas não comprar) cerveja, vinho ou sidra a acompanhar uma refeição (GOV.UK). No Reino Unido, a idade mínima para comprar álcool e tabaco é 18 anos, e é proibido fumar em espaços públicos fechados.",
    card: "18 anos para álcool e tabaco, proibição de fumar em espaços fechados e vaping",
    sections: [
      { h: "Qual é a idade mínima para álcool em Inglaterra? 18 anos para álcool e tabaco", blocks: [
        "No Reino Unido é preciso ter pelo menos 18 anos para comprar álcool e tabaco. Este limite aplica-se em lojas, bares, restaurantes e outros pontos de venda.",
        "As lojas e os estabelecimentos de restauração podem pedir um documento de identificação que comprove a sua idade, mesmo que pareça mais velho. Tenha por isso à mão um documento de identificação válido se pretender comprar álcool ou tabaco.",
      ] },
      { h: "Proibição de fumar em espaços públicos fechados", blocks: [
        "Desde a entrada em vigor da lei antitabaco em 2007 (Smoke-free law), é proibido fumar em todos os espaços públicos fechados, nos locais de trabalho e nos transportes públicos.",
        "Isto significa que os pubs, restaurantes e estações são espaços sem fumo no interior. Só pode fumar em zonas exteriores especificamente designadas.",
        { ul: [
          "Interior: proibido fumar em espaços públicos fechados e locais de trabalho.",
          "Transportes públicos: sem fumo.",
          "Permitido: apenas em zonas exteriores designadas.",
        ] },
      ] },
      { h: "Vaping e cigarros eletrónicos", blocks: [
        "As regras para o vaping e os cigarros eletrónicos variam de local para local. Em muitos sítios não é permitido no interior, mas pode haver diferenças entre espaços e estabelecimentos. Siga sempre a sinalização e as indicações do pessoal do local onde se encontra.",
      ] },
      { h: "Condução sob o efeito do álcool e álcool na via pública", blocks: [
        "A condução sob o efeito do álcool é punida com rigor no Reino Unido, com limites e sanções definidos. Se tenciona conduzir, convém conhecer as regras — explicadas no guia sobre conduzir no Reino Unido.",
        "Algumas autoridades locais criaram ainda zonas com restrições ao consumo de álcool na via pública. Esteja atento à sinalização local que indique essas restrições.",
      ] },
      { h: "Entrada com álcool e tabaco", blocks: [
        "A quantidade de álcool e tabaco que pode trazer para o país está sujeita a limites aduaneiros e de importação próprios (duty-free), descritos em pormenor no guia sobre [regras alfandegárias e limites de importação](/pt/alfandega-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Qual é a idade mínima para álcool em Inglaterra?", a: "Em Inglaterra é preciso ter 18 anos para comprar álcool ou beber álcool num pub ou restaurante. Com 16 ou 17 anos e acompanhado por um adulto, pode beber (mas não comprar) cerveja, vinho ou sidra a acompanhar uma refeição (GOV.UK)." },
      { q: "Qual é a idade mínima para comprar álcool e tabaco no Reino Unido?", a: "É preciso ter pelo menos 18 anos para comprar álcool e tabaco no Reino Unido. As lojas e os bares podem pedir um documento de identificação que comprove a sua idade." },
      { q: "Posso fumar em pubs e lojas?", a: "Não. É proibido fumar em todos os espaços públicos fechados, locais de trabalho e transportes públicos. Os pubs, restaurantes e estações são espaços sem fumo no interior — só pode fumar em zonas exteriores especificamente designadas." },
      { q: "Posso usar cigarro eletrónico (vaping)?", a: "As regras para cigarros eletrónicos e vaping variam de local para local. Muitas vezes não é permitido no interior. Siga sempre a sinalização e as indicações do pessoal no local." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "viajar-com-menores",
    group: "travel",
    title: "Viajar com crianças para o Reino Unido: ETA e passaporte",
    description: "Todos, incluindo bebés, precisam de ETA e passaporte próprios para o Reino Unido. A Border Force pode pedir prova de parentesco — como preparar a viagem.",
    h1: "Viajar com crianças para o Reino Unido",
    lead: "Cada criança precisa da sua própria ETA e do seu próprio passaporte. Veja quando a Border Force pode pedir prova de parentesco e que documentos deve levar para uma entrada sem problemas.",
    card: "ETA e passaporte próprios para cada criança e prova de parentesco na fronteira",
    sections: [
      { h: "Cada viajante precisa de ETA e passaporte próprios", blocks: [
        "Todos os viajantes, incluindo bebés, precisam da sua própria ETA e do seu próprio passaporte. Uma criança não pode viajar com a ETA de um dos pais — é uma ETA por pessoa.",
      ] },
      { h: "A Border Force pode pedir prova de parentesco", blocks: [
        "Quando viaja com crianças, a Border Force (o controlo fronteiriço) pode pedir prova da vossa relação — sobretudo se tiverem apelidos diferentes ou se não for pai ou mãe da criança. Podem servir de prova:",
        { ul: [
          "Certidão de nascimento ou de adoção.",
          "Certidão de casamento ou de divórcio (se for pai ou mãe, mas tiver outro apelido).",
          "Uma carta de consentimento (consent letter) dos pais (se não for pai ou mãe da criança).",
        ] },
      ] },
      { h: "Leve os documentos consigo", blocks: [
        "Também em viagens futuras é útil levar estas provas de parentesco. A entrada fica mais fácil se lhe fizerem perguntas no controlo fronteiriço.",
      ] },
      { h: "A ter em conta antes da entrada", blocks: [
        "Peça uma [UK ETA](/pt/como-pedir/) para cada membro da família e acompanhe o pedido em [Consultar o estado da ETA](/pt/consultar-estado/). As regras gerais de entrada estão no guia [Entrada no Reino Unido e vistos](/pt/entrada-e-vistos/) e as regras sobre o que pode levar consigo no guia sobre [regras alfandegárias e limites de importação](/pt/alfandega-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "As crianças também precisam de ETA para o Reino Unido?", a: "Sim. Todos os viajantes, incluindo bebés, precisam da sua própria ETA. Uma criança não pode viajar com a ETA de um dos pais — é uma ETA por pessoa." },
      { q: "Uma criança pode viajar com o passaporte ou a ETA de um dos pais?", a: "Não. Cada viajante precisa do seu próprio passaporte e da sua própria ETA, independentemente da idade. Não é possível entrar com o passaporte ou a ETA de outra pessoa." },
      { q: "O que se aplica se viajar com uma criança com outro apelido?", a: "A Border Force pode pedir prova de parentesco, sobretudo se tiverem apelidos diferentes ou se não for pai ou mãe da criança. Podem servir de prova a certidão de nascimento ou de adoção, a certidão de casamento ou de divórcio, ou uma carta de consentimento (consent letter) dos pais." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "aeroportos-de-londres",
    group: "travel",
    title: "O 2.º maior aeroporto de Inglaterra é Gatwick: os 5 de Londres",
    description: "O segundo maior aeroporto de Inglaterra e do Reino Unido é Gatwick (42,8 milhões de passageiros em 2025, segundo a CAA), após Heathrow. Os 5 de Londres.",
    h1: "Os 5 maiores aeroportos de Londres",
    lead: "O segundo maior aeroporto de Inglaterra — e do Reino Unido — é London Gatwick, com 42,8 milhões de passageiros em 2025, depois de Heathrow (84,5 milhões). Em terceiro lugar está Manchester (32,1 milhões), segundo a autoridade britânica da aviação civil (CAA). Londres é servida por cinco grandes aeroportos, e a escolha influencia o percurso, o tempo e o custo da ida para o centro.",
    card: "Heathrow, Gatwick, Stansted, Luton e London City: localização e acesso ao centro",
    sections: [
      { h: "Heathrow (LHR) — oeste de Londres", blocks: [
        "O maior aeroporto do Reino Unido e o principal hub internacional (terminais 2 a 5).",
        "Acesso: Heathrow Express cerca de 15 min, Elizabeth Line cerca de 30 min, metro cerca de 50 min. Mais pormenores no guia [Aeroporto de Heathrow (LHR)](/pt/aeroporto-heathrow/).",
      ] },
      { h: "Gatwick (LGW) — sul de Londres", blocks: [
        "O segundo maior aeroporto de Inglaterra e do Reino Unido (depois de Heathrow); companhias tradicionais e de baixo custo (terminais Norte e Sul).",
        "Acesso: Gatwick Express cerca de 30 min, Thameslink cerca de 30–45 min.",
      ] },
      { h: "Stansted (STN) — nordeste de Londres", blocks: [
        "Base da Ryanair, com muitas ligações europeias; um único terminal, fácil de percorrer.",
        "Acesso: Stansted Express cerca de 50 min, autocarro cerca de 60–90 min.",
      ] },
      { h: "Luton (LTN) — norte de Londres", blocks: [
        "Base da easyJet e da Wizz Air; um único terminal, com ligação à estação por vaivém (shuttle).",
        "Acesso: Luton Airport Express cerca de 30 min, Thameslink cerca de 30 min.",
      ] },
      { h: "London City (LCY) — centro de Londres (o mais próximo)", blocks: [
        "O mais próximo do centro; popular entre quem viaja em negócios.",
        "Acesso: DLR cerca de 15–25 min até ao centro.",
        { note: "Os tempos de viagem são aproximados e dependem do destino em Londres e da hora do dia." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  heathrow: {
    slug: "aeroporto-heathrow",
    group: "travel",
    title: "Aeroporto de Heathrow (LHR): terminais, controlo e transporte",
    description: "Aeroporto de Heathrow: terminais 2 a 5, controlo fronteiriço (eGates) e ida para o centro de Londres — Heathrow Express, Elizabeth Line, metro e autocarro.",
    h1: "Aeroporto de Heathrow (LHR)",
    lead: "Heathrow é o maior aeroporto do Reino Unido e a principal porta de entrada em Londres. Veja os terminais, como funciona o controlo fronteiriço e como chegar ao centro.",
    card: "Terminais 2 a 5, eGates à chegada e ligações ao centro de Londres",
    sections: [
      { h: "Localização e terminais", blocks: [
        "Heathrow (código IATA: LHR) fica no oeste de Londres. É o maior e mais movimentado aeroporto do Reino Unido, com ligações a todo o mundo. Estão em funcionamento os terminais 2, 3, 4 e 5 — confirme o número do terminal no seu bilhete, porque influencia tanto o percurso como o check-in.",
      ] },
      { h: "Controlo fronteiriço à chegada", blocks: [
        `À chegada passa pelo controlo fronteiriço nas portas automáticas eGate (com passaporte biométrico) ou num balcão manual com um agente. Lembre-se de que, para entrar, precisa de um passaporte válido e de uma [UK ETA](/pt/o-que-e-a-eta/) válida associada a esse passaporte (para estadias até ${F.staySixMonths} meses).`,
      ] },
      { h: "Como chegar ao centro de Londres", blocks: [
        { table: { head: ["Meio de transporte", "Tempo aproximado"], rows: [
          ["Heathrow Express (comboio rápido)", "cerca de 15 minutos"],
          ["Elizabeth Line", "cerca de 30 minutos"],
          ["Metro (Piccadilly line)", "cerca de 50 minutos"],
          ["Autocarro / coach", "cerca de 60–90 minutos"],
        ] } },
        { note: "Os tempos de viagem são aproximados e dependem do terminal, da hora do dia e do destino em Londres." },
        "Mais sobre os aeroportos da capital: [Os 5 maiores aeroportos de Londres](/pt/aeroportos-de-londres/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
