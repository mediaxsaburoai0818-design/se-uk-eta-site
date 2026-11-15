import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（pt・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const CHECK_VISA = "[GOV.UK: Check if you need a UK visa](https://www.gov.uk/check-uk-visa)";

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "quem-precisa-de-eta",
    group: "eta",
    title: "Quem precisa da UK ETA? Nacionalidades e exceções 2026",
    description: "Quem precisa da UK ETA e quem está isento: cidadãos britânicos e irlandeses, residentes autorizados no Reino Unido, trânsito airside. Guia por nacionalidade.",
    h1: "Quem precisa de uma UK ETA?",
    lead: "A UK ETA é exigida aos cidadãos de países isentos de visto para estadias curtas (turismo, negócios, estudos de curta duração). Cada viajante, incluindo bebés e crianças, precisa da sua própria ETA.",
    card: "Quem tem de pedir a UK ETA e quem está isento",
    sections: [
      { h: "Portugal e outras nacionalidades", blocks: [
        "Os cidadãos portugueses, como os restantes cidadãos da UE, precisam de ETA para viagens curtas ao Reino Unido.",
        `Se tem outra nacionalidade (por exemplo, brasileira), confirme se precisa de ETA ou de visto na ferramenta oficial ${CHECK_VISA}.`,
      ] },
      { h: "Quem está isento da ETA", blocks: [
        { ul: [
          "Cidadãos britânicos e irlandeses (com passaporte britânico ou irlandês)",
          "Pessoas com autorização para viver, trabalhar ou estudar no Reino Unido (por exemplo, visto, settled ou pre-settled status)",
          "Titulares de passaporte British Overseas Territories Citizen ou British National (Overseas)",
          "Residentes na Irlanda que viajem a partir da Irlanda, de Guernsey, de Jersey ou da Ilha de Man",
          "Passageiros em trânsito airside que não passam o controlo de fronteira",
          "Pessoas que aguardam a decisão de um pedido ao EU Settlement Scheme",
        ] },
      ] },
      { h: "O que é importante saber", blocks: [
        { ul: [
          "Quem tem cidadania britânica ou irlandesa não pode obter ETA e viaja com o documento dessa cidadania.",
          "Se a sua nacionalidade não estiver isenta de visto, pode precisar de um visto: confirme na ferramenta oficial do GOV.UK.",
          "Também os bebés e as crianças precisam da sua própria ETA.",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-ou-visto",
    group: "eta",
    title: "UK ETA ou visto: qual é a diferença? 2026",
    description: `Diferença entre UK ETA e visto: a ETA permite estadias até ${F.staySixMonths} meses para turismo, negócios e estudos curtos, mas não trabalhar nem residir.`,
    h1: "UK ETA ou visto: a diferença",
    lead: "A UK ETA não é um visto: é uma autorização de viagem para cidadãos de países isentos de visto. Não garante a entrada — a decisão cabe à polícia de fronteira.",
    card: "O que a ETA permite e quando é preciso um visto",
    sections: [
      { h: "Para quem é a ETA", blocks: [
        "Os cidadãos portugueses viajam com ETA para estadias curtas.",
        `Se tem outra nacionalidade (por exemplo, brasileira), confirme se lhe basta a ETA ou se precisa de visto em ${CHECK_VISA}.`,
      ] },
      { h: `O que pode fazer com a ETA (máximo ${F.staySixMonths} meses)`, blocks: [
        { ul: [
          "Turismo e visitas a familiares e amigos",
          "Viagens de negócios (business)",
          "Estudos de curta duração (short-term study)",
          "Trânsito com passagem pelo controlo de fronteira",
          "Permitted paid engagement; atividades até 3 meses ao abrigo da Creative Worker concession",
        ] },
      ] },
      { h: "O que NÃO pode fazer com a ETA", blocks: [
        { ul: [
          `Estadias superiores a ${F.staySixMonths} meses`,
          "Trabalho pago ou não pago para uma empresa britânica ou por conta própria (salvo as exceções acima)",
          "Receber fundos públicos (public funds)",
          "Fixar residência de facto no Reino Unido através de visitas frequentes e repetidas",
          "Registar um casamento ou uma união de facto (exige o Marriage Visitor visa)",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "standard-visitor-visa": {
    slug: "visto-standard-visitor",
    group: "eta",
    title: "Visto Standard Visitor para o Reino Unido: quando a ETA não basta",
    description: "Se a UK ETA for recusada (sem recurso) ou a sua nacionalidade exigir visto, precisa de um Standard Visitor visa. Preços, prazos e passos segundo o GOV.UK.",
    h1: "Visto Standard Visitor: quando a ETA não basta",
    lead: "Se a sua UK ETA for recusada (não há recurso) ou se a sua nacionalidade exigir visto, tem de pedir um Standard Visitor visa para viajar para o Reino Unido. Abaixo, os factos segundo o GOV.UK.",
    card: "Preço, prazo e passos do visto quando a ETA não serve",
    sections: [
      { h: "Quem precisa de visto em vez de ETA", blocks: [
        { ul: [
          "Pessoas cuja nacionalidade exige visto para o Reino Unido (sem direito a ETA).",
          "Pessoas cujo pedido de ETA foi recusado — não é possível entrar no Reino Unido com ETA e é necessário um visto.",
          `Confirme de que visto precisa na ferramenta «Check if you need a UK visa» do GOV.UK: ${CHECK_VISA}.`,
        ] },
        "Os cidadãos portugueses viajam normalmente com ETA; quem tem outra nacionalidade (por exemplo, brasileira) deve confirmar a sua situação nessa ferramenta.",
      ] },
      { h: "Preços (GOV.UK)", blocks: [
        { table: { head: ["Tipo de visto", "Preço"], rows: [
          [`Standard Visitor (até ${F.staySixMonths} meses)`, "£135"],
          ["Longa duração — 2 anos", "£506"],
          ["Longa duração — 5 anos", "£903"],
          ["Longa duração — 10 anos", "£1 128"],
          ["Visto de trânsito", "£74,50"],
        ] } },
        `Os vistos de longa duração permitem várias entradas, mas cada estadia está limitada a ${F.staySixMonths} meses. Valores segundo o GOV.UK — podem mudar.`,
      ] },
      { h: "Prazo, validade e estadia", blocks: [
        { ul: [
          "Decisão: normalmente no prazo de 3 semanas após a marcação no centro de vistos.",
          `Estadia: no máximo ${F.staySixMonths} meses por visita.`,
          "Quando pedir: no máximo 3 meses antes da viagem.",
        ] },
      ] },
      { h: "Como pedir (GOV.UK)", blocks: [
        { ul: [
          "1. Faça o pedido online (pode guardar e concluir mais tarde).",
          "2. Marque uma ida a um centro de pedidos de visto.",
          "3. Compareça para comprovar a identidade, dar os dados biométricos (impressões digitais e fotografia) e entregar os documentos.",
          "4. Recebe a decisão por email; o passaporte é devolvido no centro.",
        ] },
        "Prepare, entre outros:",
        { ul: [
          "Passaporte válido (durante toda a estadia)",
          "Datas da viagem, alojamento e custo estimado",
          "Morada atual e há quanto tempo lá vive",
          "Rendimento anual (se aplicável) e dados da entidade patronal (se aplicável)",
          "Eventuais antecedentes criminais ou de imigração",
          "Traduções certificadas dos documentos que não estejam em inglês ou galês",
        ] },
        "Se a sua ETA foi recusada, veja também [o que fazer após a recusa da UK ETA](/pt/eta-recusada/).",
        { note: "Este é um serviço de informação independente, não um site governamental. Dados e preços podem mudar — confirme sempre a informação oficial no GOV.UK antes de fazer o pedido." },
      ] },
    ],
    faq: [
      { q: "Quando preciso de um Standard Visitor visa em vez da ETA?", a: "Quando a sua nacionalidade exige visto para o Reino Unido ou quando o pedido de ETA foi recusado. A recusa da ETA não admite recurso — para viajar, pede o visto adequado." },
      { q: "Quanto custa o Standard Visitor visa?", a: `Segundo o GOV.UK, o visto até ${F.staySixMonths} meses custa £135. Longa duração: £506 (2 anos), £903 (5 anos), £1 128 (10 anos). Visto de trânsito: £74,50.` },
      { q: "Quanto tempo demora a decisão?", a: "Normalmente recebe a decisão no prazo de 3 semanas após a marcação no centro de vistos." },
      { q: "Quanto tempo posso ficar no Reino Unido?", a: `A estadia normal é de no máximo ${F.staySixMonths} meses por visita.` },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "expiration": {
    slug: "quando-expira-a-eta",
    group: "eta",
    title: `Quando expira a UK ETA e quando pedir outra? ${F.validYears} anos (2026)`,
    description: `A UK ETA expira ao fim de ${F.validYears} anos ou quando o passaporte caduca, se for antes. Novo passaporte ou mudança de nome = novo pedido e novo pagamento de ${F.fee}.`,
    h1: "Quando expira a UK ETA e quando tem de pedir outra",
    lead: `A UK ETA é válida durante ${F.validYears} anos a contar da emissão ou até o passaporte caducar, consoante o que acontecer primeiro. Nesse período pode viajar para Inglaterra e o resto do Reino Unido as vezes que quiser, até ${F.staySixMonths} meses por visita (GOV.UK).`,
    card: "Quando a ETA deixa de valer e em que casos pedir de novo",
    sections: [
      { h: "Regras de validade", blocks: [
        { ul: [
          `Válida durante ${F.validYears} anos a contar da data de emissão`,
          "Deixa de valer juntamente com o passaporte (se este caducar antes)",
          "Permite várias entradas no Reino Unido durante a validade",
          `Cada estadia não pode ultrapassar ${F.staySixMonths} meses`,
          "A ETA está ligada a um passaporte concreto",
        ] },
        "Mais pormenores sobre a duração estão na página [Quanto tempo dura a UK ETA](/pt/validade/).",
      ] },
      { h: "Quando tem de fazer um novo pedido", blocks: [
        "Tem de pedir uma nova UK ETA nos seguintes casos:",
        { ul: [
          `Quando passarem ${F.validYears} anos desde a emissão da ETA`,
          "Quando tiver um passaporte novo",
          "Se mudar de nome",
          "Se houver alterações de circunstâncias que afetem a elegibilidade",
        ] },
      ] },
      { h: "Posso viajar com uma ETA prestes a expirar?", blocks: [
        "A UK ETA tem de ser válida no momento da entrada no Reino Unido. Não precisa de ser válida durante toda a estadia — o que conta é estar válida no dia da chegada. Ainda assim, recomenda-se fazer o novo pedido com tempo.",
      ] },
      { h: "Como confirmar a data de validade", blocks: [
        "Segundo o GOV.UK, pode consultá-la online em gov.uk/eta (Check your ETA): aí vê se tem uma ETA e quando expira. Veja também [como consultar o estado da UK ETA](/pt/consultar-estado/).",
      ] },
      { h: "E se mudar de passaporte com a ETA ainda válida?", blocks: [
        `A ETA está ligada a um passaporte concreto. Se tiver um passaporte novo (por exemplo, porque o anterior caducou ou porque mudou de nome), tem de fazer um novo pedido de ETA e pagar outra vez ${F.fee}. A ETA antiga deixa de valer.`,
        { note: `Dica: recomenda-se pedir a UK ETA pelo menos ${F.decisionDays} dias úteis antes da viagem prevista, para dar tempo à análise do pedido.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "children-family": {
    slug: "eta-criancas-e-familia",
    group: "eta",
    title: "UK ETA para crianças e famílias: os bebés precisam? 2026",
    description: "Também os bebés e as crianças precisam da sua própria UK ETA. Pode fazer o pedido por outra pessoa com o passaporte e a fotografia do rosto dela.",
    h1: "UK ETA para crianças e famílias",
    lead: "Cada viajante, incluindo bebés e crianças, precisa da sua própria UK ETA. Pode fazer o pedido em nome de outra pessoa.",
    card: "Uma ETA por pessoa, também para bebés, e como pedir pela família",
    sections: [
      { h: "Pedido para a família", blocks: [
        { ul: [
          "Cada viajante precisa da sua própria ETA, incluindo crianças e bebés",
          "Pode pedir por outra pessoa: na aplicação, se a pessoa estiver presente; caso contrário, online (são precisas a fotografia do passaporte e a do rosto)",
          "As crianças incluídas no France-UK school trip travel information form não precisam de ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "eta-recusada",
    group: "eta",
    title: "UK ETA recusada? O que fazer e que alternativas há (2026)",
    description: "Se a UK ETA for recusada, não há recurso. Para viajar para o Reino Unido tem de pedir um visto. O que fazer a seguir e qual a alternativa.",
    h1: "UK ETA recusada: e agora?",
    lead: "Se o seu pedido de UK ETA for recusado, não é possível recorrer (appeal). Se mesmo assim quiser viajar para o Reino Unido, tem de pedir um visto.",
    card: "Sem recurso: o caminho é pedir um visto",
    sections: [
      { h: "O que fazer em caso de recusa", blocks: [
        { ul: [
          "Não existe procedimento de recurso contra a recusa da ETA",
          "Para viajar para o Reino Unido é preciso pedir um visto adequado",
          "Confirme no GOV.UK que visto corresponde ao motivo da sua viagem",
        ] },
      ] },
      { h: "Próximo passo: Standard Visitor visa", blocks: [
        "Depois de uma recusa da ETA, o visto é a única via para o Reino Unido. Veja o preço (£135), o prazo e o processo no guia [Visto Standard Visitor para o Reino Unido](/pt/visto-standard-visitor/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (abril de 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "erros-comuns",
    group: "eta",
    title: "Erros comuns no pedido da UK ETA e a aplicação oficial (2026)",
    description: "Erros comuns no pedido da UK ETA: dados que não coincidem com o passaporte, fotografias, pagamento e sites falsos. Use a aplicação oficial UK ETA.",
    h1: "Erros comuns e a aplicação UK ETA",
    lead: "Muitos problemas resultam de dados que não coincidem com o passaporte. Use sempre a aplicação oficial «UK ETA» e confirme os dados antes de enviar.",
    card: "Os erros que atrasam ou fazem recusar o pedido",
    sections: [
      { h: "Erros a evitar", blocks: [
        { ul: [
          "Os dados têm de coincidir exatamente com o passaporte: as discrepâncias causam atrasos ou recusas",
          "Fotografias exigidas: o rosto e todas as páginas do passaporte, nítidas e corretas",
          `Pagamento (${F.fee}): Apple Pay, Google Pay ou cartão (Amex, JCB, Mastercard, Visa); pode ser pedida a autenticação 3D Secure`,
          "É necessário um passaporte biométrico (com o símbolo de ePassport) para ler o chip",
          "Cuidado com sites falsos que imitam o Governo e cobram valores mais altos: use apenas o GOV.UK",
        ] },
        "Mais sobre a aplicação no guia [Aplicação oficial UK ETA](/pt/aplicacao-uk-eta/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "site-oficial-gov-uk",
    group: "eta",
    title: "Site oficial GOV.UK da UK ETA: como reconhecer sites falsos",
    description: `Só o GOV.UK é a fonte oficial para pedir a UK ETA. Como reconhecer sites falsos e evitar fraudes com taxas acima de ${F.fee}.`,
    h1: "O site oficial GOV.UK para pedir a UK ETA",
    lead: "O pedido de UK ETA pode ser feito no site oficial do Governo britânico ou através da aplicação móvel oficial.",
    card: "Onde pedir a ETA e os sinais de um site falso",
    sections: [
      { h: "Endereço oficial", blocks: [
        "Página oficial da UK ETA: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta).",
        "O domínio .gov.uk identifica os sites oficiais do Governo britânico.",
      ] },
      { h: "Como reconhecer o site oficial", blocks: [
        { ul: [
          "O endereço contém gov.uk (domínio do Governo britânico)",
          "O site é gerido pelo Home Office",
          `A taxa é exatamente ${F.fee}`,
          "Tem o design característico do GOV.UK, a preto e branco",
          "Não cobra nenhuma taxa por um tratamento «mais rápido»",
        ] },
      ] },
      { h: "Como reconhecer um site falso", blocks: [
        { note: `Sinais de alerta: o endereço não contém gov.uk; taxa bem acima de ${F.fee}; promessa de «aprovação garantida»; oferta de «tratamento mais rápido»; publicidade agressiva ou janelas pop-up insistentes; ausência do logótipo GOV.UK.` },
      ] },
      { h: "Aplicação móvel oficial", blocks: [
        "O pedido de UK ETA também pode ser feito na aplicação móvel oficial «UK ETA»:",
        { ul: [
          "iOS: procure «UK ETA» na App Store (editor: Home Office)",
          "Android: procure «UK ETA» no Google Play (editor: Home Office)",
        ] },
      ] },
      { h: "Outras páginas oficiais úteis", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) — confirmar se precisa de visto para o Reino Unido",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) — informação sobre o visto de visitante",
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
    slug: "aplicacao-uk-eta",
    group: "eta",
    title: "Aplicação oficial UK ETA: peça no telemóvel | iOS e Android 2026",
    description: "Com a aplicação oficial UK ETA faz o pedido no telemóvel: como a instalar, o que precisa (passaporte e fotografia) e como decorre o pedido.",
    h1: "A aplicação móvel UK ETA",
    lead: "O Governo britânico disponibiliza a aplicação móvel oficial «UK ETA», que permite fazer o pedido diretamente no smartphone.",
    card: "Instalar a aplicação, ler o passaporte por NFC e pedir",
    sections: [
      { h: "Sobre a aplicação UK ETA", blocks: [
        "A aplicação UK ETA é a ferramenta oficial do Home Office para pedir a autorização eletrónica de viagem. É a forma recomendada de fazer o pedido, porque permite ler o passaporte por NFC e preencher os dados automaticamente.",
      ] },
      { h: "Disponibilidade", blocks: [
        { ul: [
          "iOS (App Store) — para dispositivos Apple (iPhone). Requer iOS 16 ou posterior.",
          "Android (Google Play) — para dispositivos Android. Requer Android 12 ou posterior e NFC.",
        ] },
        "Procure a aplicação com o nome «UK ETA», editor: Home Office.",
      ] },
      { h: "Funcionalidades da aplicação", blocks: [
        { ul: [
          "Fazer um novo pedido de UK ETA",
          "Ler o passaporte biométrico (NFC + OCR)",
          "Tirar uma fotografia do rosto (selfie) para verificação",
          "Consultar o estado de um pedido existente",
          "Pagar com cartão, Apple Pay ou Google Pay",
          "Notificações push quando o estado muda",
        ] },
      ] },
      { h: "Como pedir pela aplicação", blocks: [
        { ul: [
          "1. Instale a aplicação «UK ETA» a partir da App Store ou do Google Play",
          "2. Crie uma conta (email e palavra-passe)",
          "3. Leia o passaporte biométrico (encoste o telemóvel ao passaporte)",
          "4. Tire uma fotografia do rosto (selfie)",
          "5. Responda às perguntas do formulário",
          `6. Pague ${F.fee}`,
          "7. Envie o pedido e aguarde a decisão",
        ] },
      ] },
      { h: "Leitura do passaporte (NFC)", blocks: [
        "A aplicação usa a tecnologia NFC (Near Field Communication) para ler os dados do chip biométrico do passaporte. Para ler o passaporte:",
        { ul: [
          "Abra o passaporte na página da fotografia",
          "Encoste a parte de trás do telemóvel ao passaporte aberto",
          "Mantenha-o imóvel durante 5-10 segundos",
          "Aguarde até a aplicação confirmar que os dados foram lidos",
        ] },
      ] },
      { h: "Vantagens da aplicação móvel", blocks: [
        { ul: [
          "Leitura do passaporte por NFC — preenchimento automático dos dados",
          "Pedido mais rápido do que no site",
          "Notificações push sobre o estado do pedido",
          "Segurança biométrica (Face ID / Touch ID)",
        ] },
        { note: "Atenção: certifique-se de que instala a aplicação oficial. Procure o editor «Home Office» na loja de aplicações. Aplicações falsas podem roubar dados pessoais." },
        "Para os restantes passos do pedido, veja [Como pedir a UK ETA](/pt/como-pedir/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "transito-pelo-reino-unido",
    group: "eta",
    title: "Trânsito pelo Reino Unido: precisa de UK ETA? Guia 2026",
    description: "Precisa de UK ETA em trânsito? Sim se passar o controlo de fronteira (landside); não se mudar de voo sem o passar (airside). Regras e exceções.",
    h1: "Trânsito pelo Reino Unido: precisa de UK ETA?",
    lead: "Só precisa de UK ETA em trânsito se passar o controlo de fronteira num aeroporto do Reino Unido antes de seguir viagem (landside). Se mudar de voo sem passar o controlo de fronteira (airside), não precisa de ETA. Em caso de dúvida, pergunte à sua companhia aérea.",
    card: "Airside sem ETA, landside com ETA: como saber o seu caso",
    sections: [
      { h: "Regras de trânsito", blocks: [
        "Desde 2 de abril de 2025, os cidadãos da UE (incluindo os portugueses) precisam de UK ETA para o trânsito pelo Reino Unido se passarem o controlo de fronteira no aeroporto (trânsito landside). Para o trânsito sem passar o controlo de fronteira (trânsito airside) não é precisa ETA. Em caso de dúvida, pergunte à sua companhia aérea.",
        `Se tem outra nacionalidade (por exemplo, brasileira), confirme as regras que se lhe aplicam em ${CHECK_VISA}.`,
      ] },
      { h: "Quando é exigida a ETA em trânsito", blocks: [
        { ul: [
          "Trânsito landside (passa o controlo de fronteira): é exigida ETA",
          "Trânsito airside (sem controlo de passaportes): não é exigida ETA",
          "Segundo o factsheet oficial, os passageiros em trânsito em Heathrow/Manchester que não passam o controlo de passaportes do Reino Unido não precisam, por agora, de ETA",
          "Confirme sempre o tipo de trânsito com a sua companhia aérea",
        ] },
      ] },
      { h: "Tipos de trânsito", blocks: [
        { table: { head: ["Tipo", "O que significa", "UK ETA"], rows: [
          ["Trânsito airside (Airside Transit)", "Mudança de voo no aeroporto sem passar o controlo de fronteira. Se não tiver a certeza de que vai passar o controlo, pergunte à companhia aérea.", "Não é exigida"],
          ["Trânsito landside (Landside Transit)", "Passar o controlo de fronteira antes de seguir viagem, por exemplo para recolher a bagagem ou dormir num hotel. Entra formalmente no Reino Unido.", "É exigida"],
        ] } },
        "Em qualquer ligação via Reino Unido, precisa de UK ETA se passar o controlo de fronteira no aeroporto britânico, por mais curta que seja a escala. Se mudar de voo sem passar o controlo de fronteira (airside), não é precisa ETA.",
      ] },
      { h: "Exceções à exigência de ETA em trânsito", blocks: [
        "Há poucas exceções à exigência de ETA em trânsito:",
        { ul: [
          "Cidadãos irlandeses (Zona Comum de Viagem, CTA)",
          "Titulares de um visto britânico válido",
          "Titulares de autorização de residência permanente no Reino Unido (settled/pre-settled status)",
        ] },
      ] },
      { h: "Como evitar precisar de ETA em trânsito", blocks: [
        "Se não quiser pedir a UK ETA, pode escolher rotas que não passem pelo Reino Unido. Por exemplo:",
        { ul: [
          "Voos diretos até ao destino",
          "Escala em países da UE (Amesterdão, Frankfurt, Paris)",
          "Escala em Dublin (Irlanda — não exige ETA)",
        ] },
        { note: `Dica: se tiver um voo com escala em Londres, peça a UK ETA pelo menos ${F.decisionDays} dias úteis antes da partida. Sem ETA, pode ser-lhe recusado o embarque.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (abril de 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-news": {
    slug: "noticias-uk-eta",
    group: "eta",
    title: `Notícias UK ETA 2026: taxa de ${F.fee}, obrigatoriedade e mais`,
    description: `Últimas notícias da UK ETA: taxa de ${F.fee} desde 8 de abril de 2026, obrigatória desde 25 de fevereiro de 2026, novas taxas de imigração e segurança.`,
    h1: "Notícias sobre a UK ETA e as viagens ao Reino Unido",
    lead: `As principais novidades de 2025-2026 segundo o GOV.UK e o Home Office: a UK ETA custa ${F.fee} desde 8 de abril de 2026 e é plenamente obrigatória desde 25 de fevereiro de 2026.`,
    card: "Taxa, obrigatoriedade e outras mudanças de 2025-2026",
    sections: [
      { h: `8 de abril de 2026 — Taxa da UK ETA sobe para ${F.fee}`, blocks: [
        `Desde 8 de abril de 2026, a UK ETA custa ${F.fee} em vez dos anteriores £16 (um aumento de 25 %). O que conta é a data do pedido.`,
        `O Home Office confirmou o aumento da taxa da UK ETA (Electronic Travel Authorisation) de £16 para ${F.fee}. A nova tabela aplica-se a partir de 8 de abril de 2026.`,
        `É a data do pedido que determina o valor: quem fez o pedido antes de 8 de abril de 2026 pagou £16, e os pedidos feitos a 8 de abril ou depois custam ${F.fee}.`,
        `É mais um aumento na história do sistema: a ETA começou com uma taxa de £10, subiu depois para £16 e chega agora a ${F.fee}. A autorização continua válida durante ${F.validYears} anos e permite várias entradas (cada estadia até ${F.staySixMonths} meses).`,
        "O aumento abrange os cidadãos de mais de 50 países que precisam de UK ETA para entrar no Reino Unido.",
        "Fonte: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25 de fevereiro de 2026 — UK ETA plenamente obrigatória", blocks: [
        "Desde 25 de fevereiro de 2026, a UK ETA aplica-se em pleno: as companhias aéreas não deixam embarcar passageiros sem autorização válida.",
        "A 25 de fevereiro de 2026 terminou o período de transição da introdução da UK ETA. A partir dessa data, a exigência aplica-se em pleno.",
        "Na prática, os transportadores (companhias aéreas, ferries, Eurostar) não deixam embarcar viajantes que precisem de ETA e não a tenham. Os transportadores arriscam multas por transportar um passageiro sem autorização válida.",
        `Por isso, a ETA deve ser obtida antes da viagem — pelo menos ${F.decisionDays} dias úteis antes, porque um pequeno número de pedidos pode exigir uma análise adicional.`,
        "Fonte: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2 de abril de 2025 — Cidadãos da UE precisam de UK ETA", blocks: [
        "Desde 2 de abril de 2025, os cidadãos da UE, do EEE e da Suíça têm de obter a UK ETA antes de viajar para o Reino Unido.",
        "Desde 2 de abril de 2025, o sistema UK ETA abrange os cidadãos da União Europeia, do Espaço Económico Europeu e da Suíça.",
        "A ETA é exigida em viagens de turismo e de negócios, em visitas a familiares e em trânsitos que impliquem passar o controlo de fronteira. Aplica-se também a crianças e bebés — cada pessoa faz o seu próprio pedido.",
        `A autorização fica ligada eletronicamente ao passaporte usado no pedido e permite várias entradas durante ${F.validYears} anos.`,
        "Fonte: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8 de abril de 2026 — Taxas de imigração mais altas no Reino Unido", blocks: [
        "Juntamente com a ETA, a partir de 8 de abril de 2026 subiram também outras taxas do Home Office — entre elas as de vistos de entrada, de residência e de cidadania.",
        `A 8 de abril de 2026, o Home Office atualizou a sua tabela oficial de taxas. Além do aumento da ETA para ${F.fee}, subiu também a maioria das restantes taxas de imigração e de cidadania.`,
        "Isto inclui, entre outras, os vistos de visita (visit visa), as taxas de residência (settlement) e os pedidos de cidadania britânica.",
        "Se planeia uma estadia mais longa ou outro tipo de visto que não a ETA, confirme a taxa em vigor na página oficial do GOV.UK antes de fazer o pedido.",
        "Fonte: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1 de março de 2026 — Segurança na viagem ao Reino Unido: o que ter em conta", blocks: [
        "Antes de partir, convém consultar os avisos de segurança atuais e garantir que o passaporte e a ETA estão válidos.",
        "O Reino Unido é um destino popular e, em geral, seguro, mas antes de cada viagem convém consultar os avisos atuais das autoridades.",
        "Antes de viajar, confirme que: o passaporte é válido durante toda a estadia, tem uma UK ETA válida ligada a esse passaporte e tem seguro de viagem.",
        "A informação atualizada sobre a situação e o nível de ameaça é publicada por fontes oficiais — o Governo do Reino Unido (GOV.UK) e as representações diplomáticas competentes. Em emergências no Reino Unido, o número de emergência é o 999.",
        "Fonte: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Visa fees", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
      { label: "GOV.UK – Foreign travel advice", url: "https://www.gov.uk/foreign-travel-advice" },
    ],
  },
};
export default pages;
