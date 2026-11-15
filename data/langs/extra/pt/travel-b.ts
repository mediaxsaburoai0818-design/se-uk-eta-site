import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（pt・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "transportes-londres-oyster",
    group: "travel",
    title: "Pagar transportes em Londres: Oyster ou contactless (2026)",
    description:
      "No metro, autocarros e comboios de Londres paga com cartão contactless, telemóvel ou Oyster: mesmo preço e limites diários e semanais. Valores na TfL.",
    h1: "Pagar os transportes em Londres: Oyster e contactless",
    lead: "No metro, nos autocarros e nos comboios de Londres, o mais simples é encostar ao leitor um cartão contactless, o telemóvel ou um cartão Oyster. O contactless e o Oyster custam o mesmo e há limites diários e semanais de despesa.",
    card: "Contactless, telemóvel ou Oyster: mesmo preço e limites diários (capping).",
    sections: [
      { h: "Contactless ou Oyster: como pagar", blocks: [
        "Os transportes públicos de Londres — metro (Tube), autocarros e comboios — funcionam em regime «pay as you go»: encosta um cartão de pagamento contactless, um telemóvel com pagamento ou um cartão Oyster ao leitor amarelo e paga por viagem.",
        "O contactless e o Oyster têm o mesmo preço. Se já tem um cartão contactless ou um telemóvel com pagamento, pode viajar com a mesma tarifa sem comprar um cartão Oyster. Para quem está de visita, o contactless é normalmente a opção mais prática. Já o Visitor Oyster é um cartão que se encomenda antes da partida.",
      ] },
      { h: "Limites de despesa (capping): não paga sem limite", blocks: [
        "Existem limites de despesa por dia e por semana. Quando o total das suas viagens atinge o limite, as viagens seguintes desse período deixam de ser cobradas. Os limites variam consoante as zonas em que viaja. Os valores mudam ao longo do tempo, por isso confirme os montantes atuais na TfL em vez de confiar num valor fixo.",
      ] },
      { h: "Metro e comboio: validar à entrada e à saída", blocks: [
        "No metro e no comboio valida o cartão tanto à entrada como à saída — caso contrário, pode ser cobrada a tarifa errada. Nos autocarros e nos elétricos (tram) valida apenas à entrada; não é preciso validar à saída.",
        { ul: [
          "Tube / comboio: validar ao começar e ao terminar a viagem.",
          "Autocarro / elétrico: validar só à entrada.",
        ] },
      ] },
      { h: "Os autocarros não aceitam dinheiro", blocks: [
        "Os autocarros de Londres não aceitam dinheiro. Só pode pagar com cartão contactless, telemóvel ou cartão Oyster. Por isso, certifique-se de que tem um meio de pagamento contactless a funcionar antes de entrar.",
      ] },
      { h: "Use sempre o mesmo cartão", blocks: [
        "Valide sempre com o mesmo cartão ou dispositivo em cada viagem. Não partilhe o mesmo cartão contactless entre vários viajantes: para que os limites de despesa sejam calculados corretamente, cada pessoa tem de validar com o seu próprio meio de pagamento.",
      ] },
      { h: "Antes de viajar para o Reino Unido", blocks: [
        "Os transportes públicos só os usa depois de chegar. Para a entrada precisa de uma [UK ETA](/pt/como-pedir/) válida e pode acompanhar o pedido na página de [consulta do estado da ETA](/pt/consultar-estado/). À chegada passa pelo controlo de passaportes e pelas eGates. Se em vez dos transportes públicos pretende conduzir, leia o guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Preciso de um cartão Oyster em Londres?", a: "Não necessariamente. Se tem um cartão de pagamento contactless ou um telemóvel com pagamento, pode viajar logo com o mesmo preço do Oyster. O contactless e o Oyster custam o mesmo, por isso para quem está de visita um cartão contactless costuma bastar." },
      { q: "Pode pagar-se em dinheiro nos autocarros de Londres?", a: "Não. Os autocarros de Londres não aceitam dinheiro. Paga com cartão contactless, telemóvel ou cartão Oyster, encostando-o ao leitor quando entra." },
      { q: "O que acontece se fizer muitas viagens no mesmo dia?", a: "Há limites de despesa (capping) por dia e por semana. Quando atinge o limite, deixa de pagar pelas viagens seguintes. Os limites variam consoante a zona e mudam ao longo do tempo — confirme os valores atuais na Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "conduzir-no-reino-unido",
    group: "travel",
    title: "Conduzir no Reino Unido com carta estrangeira: até 12 meses (2026)",
    description:
      "Idade mínima para conduzir automóvel no Reino Unido: 17 anos. Visitantes podem conduzir com a carta do seu país até 12 meses após a entrada. Seguro obrigatório.",
    h1: "Pode conduzir no Reino Unido com uma carta de condução estrangeira?",
    lead: "A idade mínima para conduzir um automóvel no Reino Unido é 17 anos — é a partir daí que a maioria começa a aprender (GOV.UK). Se reside fora do Reino Unido, pode conduzir com uma carta válida do seu país, por exemplo uma carta portuguesa, até 12 meses a contar da entrada. A ETA não é uma autorização para conduzir.",
    card: "Carta do seu país válida até 12 meses, condução à esquerda e seguro obrigatório.",
    sections: [
      { h: "A regra dos 12 meses: conduzir com a carta do seu país", blocks: [
        "Se reside fora do Reino Unido, pode conduzir com uma carta de condução válida do seu país durante até 12 meses, a contar do dia em que entrou no país. Este direito abrange:",
        { ul: [
          "Automóveis ligeiros (até 3 500 kg e com lugar para, no máximo, oito passageiros).",
          "Motociclos.",
        ] },
        "A carta tem de estar válida durante toda a estadia. O período de 12 meses conta a partir da data de entrada, e não da data de emissão da carta.",
      ] },
      { h: "Licença internacional de condução (IDP) e tradução", blocks: [
        "Pode conduzir com uma carta válida do seu país. Se a carta não estiver emitida em inglês, recomenda-se uma tradução oficial ou uma licença internacional de condução (IDP), para que as autoridades e as empresas de aluguer consigam ler facilmente os dados.",
        "Os requisitos variam consoante o país que emitiu a carta. Por isso, confirme a sua situação no GOV.UK antes da viagem — as regras podem ser diferentes conforme o seu país de origem.",
      ] },
      { h: "Condução à esquerda, idade mínima e seguro", blocks: [
        { ul: [
          "Condução à esquerda: no Reino Unido circula-se do lado esquerdo da estrada.",
          "Idade mínima: 17 anos para conduzir um automóvel ligeiro.",
          "Um seguro automóvel válido é obrigatório para conduzir no Reino Unido.",
        ] },
        "Confirme que o seu seguro é válido no Reino Unido antes de conduzir. Se alugar um carro, o seguro costuma estar incluído no contrato — leia as condições com atenção.",
      ] },
      { h: "Veículos grandes: autocarros e camiões", blocks: [
        "Para veículos grandes, como autocarros e camiões, aplicam-se regras diferentes das dos automóveis ligeiros e motociclos. Se tenciona conduzir um veículo destes, confirme os requisitos específicos no GOV.UK antes da viagem.",
      ] },
      { h: "ETA e carta de condução: duas coisas diferentes", blocks: [
        "A UK ETA é uma autorização de entrada no Reino Unido — não determina se pode conduzir. O direito de conduzir rege-se por regras próprias sobre carta, idade, seguro e tipo de veículo.",
        "Para a entrada propriamente dita precisa de uma [UK ETA](/pt/como-pedir/) válida — o estado do pedido pode ser visto na página de [consulta do estado da ETA](/pt/consultar-estado/). Também vale a pena conhecer as regras aduaneiras e os limites de importação, bem como o funcionamento do controlo de passaportes e das eGates.",
      ] },
    ],
    faq: [
      { q: "Posso conduzir no Reino Unido com a minha carta de condução portuguesa?", a: "Sim. Os visitantes que residem fora do Reino Unido podem conduzir automóveis ligeiros e motociclos com uma carta válida do seu país até 12 meses a contar da data de entrada." },
      { q: "Preciso de uma licença internacional de condução (IDP) ou de uma tradução?", a: "Pode conduzir com uma carta válida do seu país. Se a carta não estiver em inglês, recomenda-se uma tradução oficial ou uma licença internacional de condução (IDP). As regras variam consoante o país — confirme a sua situação em gov.uk/driving-nongb-licence." },
      { q: "Qual é a idade mínima para conduzir em Inglaterra?", a: "A idade mínima para conduzir um automóvel em Inglaterra (e no resto do Reino Unido) é 17 anos — é a partir daí que a maioria começa a aprender. No Reino Unido conduz-se do lado esquerdo da estrada e é obrigatório ter um seguro automóvel válido." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "moeda-libra-dinheiro",
    group: "travel",
    title: "Moeda em Inglaterra e na Escócia 2026: libra (GBP) e gorjetas",
    description:
      "Em Inglaterra, na Escócia e em Londres usa-se a libra esterlina (GBP, £). Precisa de numerário? Em regra não, o cartão chega. Desde £10 000: declarar.",
    h1: "Moeda em Inglaterra e na Escócia: libra, dinheiro e gorjetas",
    lead: "A moeda de Inglaterra, Escócia, País de Gales e Irlanda do Norte é a libra esterlina (GBP, £) — também em 2026. Veja quanto dinheiro pode levar sem declarar, como trocar dinheiro e o que contar com cartões e gorjetas.",
    card: "Libra esterlina (GBP), cartão quase em todo o lado e declaração a partir de £10 000.",
    sections: [
      { h: "Que moeda se usa em Inglaterra e na Escócia? Libra esterlina (GBP, £)", blocks: [
        "O meio de pagamento no Reino Unido é a libra esterlina (GBP, £). O euro e outras moedas geralmente não são aceites nas lojas comuns, por isso precisa de cartão ou de libras em numerário para as despesas no local. Na Escócia a moeda também é a libra. Aí, o Bank of Scotland, o Clydesdale Bank e o The Royal Bank of Scotland emitem as suas próprias notas, enquanto o Bank of England emite as notas em Inglaterra e no País de Gales (fonte: Bank of England).",
      ] },
      { h: "Dinheiro em numerário: declaração obrigatória a partir de £10 000", blocks: [
        "Se entrar na Grã-Bretanha (GB) com £10 000 ou mais em numerário — incluindo o valor equivalente noutras moedas — é obrigado a declarar o montante. A declaração faz-se online com antecedência ou no canal vermelho à chegada. Não declarar pode levar à apreensão de todo o montante e a uma coima até £5 000.",
      ] },
      { h: "Precisa de dinheiro em Londres e em Inglaterra? Cartão ou numerário", blocks: [
        "Os cartões, sobretudo os pagamentos contactless, estão muito difundidos no Reino Unido. Em muitas situações dispensa totalmente o numerário — dos transportes públicos e cafés às lojas maiores. Os transportes públicos de Londres (TfL) pagam-se com cartão contactless ou Oyster (fonte: TfL).",
        { ul: [
          "Ainda assim, pode ser prático ter algum dinheiro para lojas pequenas, mercados e gorjetas.",
          "Antes da viagem, confirme com o seu banco as comissões sobre pagamentos com cartão no estrangeiro.",
        ] },
      ] },
      { h: "Onde trocar dinheiro?", blocks: [
        "Pode trocar dinheiro em bancos, casas de câmbio e aeroportos. Tenha em conta que a troca nos aeroportos oferece frequentemente uma taxa menos favorável. Compare as taxas antes de trocar montantes maiores.",
      ] },
      { h: "Gorjetas: costume, não obrigação", blocks: [
        "No Reino Unido a gorjeta é um costume e não uma obrigação legal. As práticas variam consoante a situação:",
        { ul: [
          "Restaurantes: por vezes é acrescentada à conta uma «service charge» de 10-12,5 % — confirme o detalhe da conta. Se não houver taxa de serviço, cerca de 10 % é uma referência habitual.",
          "Pub: ao pedir ao balcão, normalmente não se espera gorjeta.",
          "Táxi: é comum arredondar o valor para cima.",
        ] },
      ] },
      { h: "Bom saber antes da entrada", blocks: [
        "Se for caso disso, o numerário declara-se na alfândega, que vem depois do controlo de passaportes. Para a entrada precisa de uma [UK ETA](/pt/como-pedir/) válida e pode acompanhar o pedido na página de [consulta do estado da ETA](/pt/consultar-estado/). Se pensa alugar carro, leia o guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Que moeda se usa em Inglaterra e na Escócia em 2026?", a: "A libra esterlina (GBP, £) em todo o Reino Unido. Na Escócia três bancos emitem as suas próprias notas, mas a moeda é a mesma." },
      { q: "Precisa de dinheiro em numerário em Londres?", a: "Normalmente não: os cartões, sobretudo os pagamentos contactless, estão muito difundidos e os transportes públicos (TfL) pagam-se com cartão contactless ou Oyster. Algum dinheiro pode ser prático para lojas pequenas, mercados e gorjetas." },
      { q: "A partir de que montante tenho de declarar numerário ao entrar no Reino Unido?", a: "Se entrar na Grã-Bretanha (GB) com £10 000 ou mais em numerário (incluindo o valor equivalente noutras moedas), é obrigado a declarar o montante. Faz-se online com antecedência ou no canal vermelho à chegada. Não declarar pode levar à apreensão de todo o montante e a uma coima até £5 000." },
      { q: "Basta o cartão no Reino Unido?", a: "Os cartões, incluindo os pagamentos contactless, estão muito difundidos e são aceites na maioria das situações. Em muitos casos consegue arranjar-se só com cartão. Ainda assim, pode ser prático ter algum dinheiro para lojas pequenas ou gorjetas." },
      { q: "A gorjeta é obrigatória no Reino Unido?", a: "Não, a gorjeta é um costume e não uma obrigação legal. Nos restaurantes é por vezes acrescentada uma «service charge» de 10-12,5 % à conta — confirme o detalhe. Se não houver taxa de serviço, cerca de 10 % é uma referência habitual." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "reembolso-iva",
    group: "travel",
    title: "Reembolso do IVA no Reino Unido (VAT refund): o que se aplica (2026)",
    description:
      "Desde 1 de janeiro de 2021, em regra, não há reembolso do IVA nas compras levadas na bagagem em Inglaterra, Escócia e Gales. Envio para o estrangeiro: exceção.",
    h1: "Reembolso do IVA (VAT refund) nas compras no Reino Unido",
    lead: "Um equívoco comum: desde 2021, no Reino Unido, em regra o IVA (VAT) das compras que os viajantes levam consigo já não é reembolsado. Veja o que se aplica, a exceção quando a loja envia o artigo para o estrangeiro e porque é que a Irlanda do Norte é tratada à parte.",
    card: "Desde 2021, em regra, sem reembolso do IVA nas compras levadas na bagagem.",
    sections: [
      { h: "O essencial: sem reembolso do IVA na bagagem desde 2021", blocks: [
        "É o ponto que mais vezes é mal compreendido. Desde 1 de janeiro de 2021, no Reino Unido (Inglaterra, Escócia e País de Gales), em regra o IVA deixou de ser reembolsado nas compras que os viajantes fazem e levam consigo na bagagem.",
        "O sistema de reembolso do IVA nas exportações a retalho (VAT Retail Export Scheme) foi abolido nessa data. Isto significa que, normalmente, não pode recuperar o IVA dos artigos que leva consigo para fora do país.",
      ] },
      { h: "A exceção: quando a loja envia o artigo diretamente para o estrangeiro", blocks: [
        "Se uma loja enviar o artigo diretamente para uma morada no estrangeiro, a compra pode, em alguns casos, ser feita sem IVA. Isso depende, no entanto, dos procedimentos da loja e das condições aplicáveis, por isso confirme com a loja em causa o que é possível antes de comprar.",
      ] },
      { h: "A Irlanda do Norte é tratada à parte", blocks: [
        "A Irlanda do Norte tem regras em parte diferentes. Para viajantes que não residem na UE, pode manter-se aí algum reembolso do IVA, ligado ao Protocolo da Irlanda do Norte. As condições podem mudar, por isso confirme o que se aplica na altura da sua viagem.",
      ] },
      { h: "Bom saber no aeroporto", blocks: [
        "Mesmo que veja placas de «Tax Free» ou antigos balcões de reembolso, tenha presente que o IVA dos artigos que leva na bagagem, em regra, não é reembolsado em Inglaterra, na Escócia nem no País de Gales. Não parta do princípio de que haverá reembolso; se tiver dúvidas, confirme as regras em vigor.",
      ] },
      { h: "Para ler antes da viagem", blocks: [
        "O que pode levar para dentro e para fora do país é explicado nas regras aduaneiras do Reino Unido, e a passagem na fronteira no guia sobre o controlo de passaportes e as eGates. Para a entrada precisa de uma [UK ETA](/pt/como-pedir/) válida — o estado do pedido pode ser visto na página de [consulta do estado da ETA](/pt/consultar-estado/).",
      ] },
    ],
    faq: [
      { q: "É possível recuperar o IVA (VAT) das compras no Reino Unido?", a: "No Reino Unido (Inglaterra, Escócia e País de Gales), em regra o IVA das compras que os viajantes levam na bagagem já não é reembolsado. O sistema de reembolso do IVA nas exportações a retalho (VAT Retail Export Scheme) foi aí abolido em 1 de janeiro de 2021. Isto difere do que acontecia antes e do que se aplica noutros países." },
      { q: "Há alguma forma de comprar sem IVA no Reino Unido?", a: "Se uma loja enviar o artigo diretamente para uma morada no estrangeiro, a compra pode, em alguns casos, ser feita sem IVA. Depende, no entanto, dos procedimentos da loja e das condições aplicáveis. Confirme com a loja em causa o que é possível." },
      { q: "Aplicam-se as mesmas regras na Irlanda do Norte?", a: "A Irlanda do Norte é tratada à parte e tem regras em parte diferentes. Para viajantes que não residem na UE, pode manter-se aí algum reembolso do IVA, ligado ao Protocolo da Irlanda do Norte. Confirme as condições em vigor antes de contar com o reembolso." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "cartao-sim-internet-movel",
    group: "travel",
    title: "Cartão SIM, eSIM e internet móvel no Reino Unido (2026)",
    description:
      "Os maiores operadores móveis do Reino Unido são EE, O2, Vodafone e Three. Pré-pago, eSIM, telemóvel desbloqueado e roaming após o Brexit: como ficar ligado.",
    h1: "Cartão SIM, eSIM e internet móvel no Reino Unido",
    lead: "Que operadores móveis existem no Reino Unido, como escolher entre um cartão pré-pago e um eSIM, o que ter em conta quanto ao telemóvel desbloqueado e ao roaming — e onde encontrar Wi-Fi gratuito.",
    card: "EE, O2, Vodafone e Three; pré-pago ou eSIM e roaming após o Brexit.",
    sections: [
      { h: "Operadores móveis no Reino Unido", blocks: [
        "As maiores redes móveis do Reino Unido são a EE, a O2, a Vodafone e a Three. Além destas, há vários operadores virtuais (MVNO) que usam as mesmas redes, por exemplo a giffgaff, a Lebara e a Lyca.",
        { note: "Nesta área há poucas regras oficiais uniformes, e os preços e tarifários mudam com frequência. Considere a informação abaixo uma orientação geral e confirme as condições atuais junto do operador." },
      ] },
      { h: "Opções para visitantes: pré-pago ou eSIM", blocks: [
        { ul: [
          "Cartão pré-pago / SIM para turistas: à venda em aeroportos, lojas de telemóveis e supermercados.",
          "eSIM: compra-se online e ativa-se de imediato, se o telemóvel for compatível — assim não precisa de trocar o cartão SIM físico.",
        ] },
      ] },
      { h: "O telemóvel tem de estar desbloqueado", blocks: [
        "Para usar um cartão SIM ou eSIM local, o telemóvel tem de estar desbloqueado (livre de operador). Confirme isto com o seu operador atual com boa antecedência antes da partida.",
      ] },
      { h: "Roaming após o Brexit", blocks: [
        "Os visitantes da UE devem estar atentos às tarifas de roaming. Após o Brexit, alguns operadores podem cobrar pelo roaming no Reino Unido, enquanto outros não. As condições variam — confirme com o seu operador antes da partida para evitar custos inesperados.",
      ] },
      { h: "Cobertura e Wi-Fi gratuito", blocks: [
        "A cobertura é geralmente boa nas cidades, enquanto no campo pode variar entre operadores. Pode verificar a cobertura no mapa de cobertura da Ofcom.",
        "O Wi-Fi gratuito é comum em cafés, nos transportes públicos e em muitos locais públicos, o que pode complementar a sua ligação móvel.",
      ] },
      { h: "Bom saber antes da entrada", blocks: [
        "Para entrar no Reino Unido precisa de uma [UK ETA](/pt/como-pedir/) válida — o estado do pedido pode ser visto na página de [consulta do estado da ETA](/pt/consultar-estado/). Se pensa alugar carro, leia o guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Preciso de um cartão SIM local no Reino Unido?", a: "Depende do seu operador atual. Um cartão pré-pago local ou um eSIM pode ser prático para evitar tarifas de roaming e ter dados móveis no local. O eSIM compra-se online e ativa-se de imediato, se o telemóvel for compatível." },
      { q: "Posso usar um eSIM no Reino Unido?", a: "Sim, se o telemóvel for compatível com eSIM e estiver desbloqueado, pode comprar um eSIM online e ativá-lo sem trocar o cartão SIM físico. Confirme antes que o aparelho é compatível e está livre de operador." },
      { q: "Posso usar o meu telemóvel com operador da UE normalmente no Reino Unido?", a: "Após o Brexit, alguns operadores cobram pelo roaming no Reino Unido e outros não. As condições variam entre operadores e tarifários — confirme com o seu operador antes da partida." },
    ],
    sources: [
      { label: "Ofcom – regulador das comunicações do Reino Unido", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "tomadas-eletricas",
    group: "travel",
    title: "Tomadas no Reino Unido e em Londres: tipo G, 230 V (2026)",
    description:
      "As tomadas no Reino Unido e em Londres são do tipo G (BS 1363, três pinos retangulares), 230 V, 50 Hz. Com INPUT 100-240 V basta um adaptador de viagem.",
    h1: "Tomadas elétricas no Reino Unido e em Londres",
    lead: "As tomadas britânicas, em Londres como no resto do Reino Unido, são do tipo G, com três pinos retangulares, e a tensão é de 230 V. Se basta um adaptador ou se é preciso um conversor de tensão depende da indicação no aparelho.",
    card: "Tipo G com três pinos, 230 V e 50 Hz: quando basta um adaptador.",
    sections: [
      { h: "Que tomadas tem o Reino Unido e Londres?", blocks: [
        "As tomadas no Reino Unido são do tipo G — a ficha tem três pinos retangulares. A tensão é de 230 V e a frequência de 50 Hz. Para ligar equipamentos com outro tipo de ficha precisa de um adaptador de viagem para o tipo G.",
      ] },
      { h: "O carregador indica 100-240 V? Então basta um adaptador", blocks: [
        "Equipamentos de países com tensão mais baixa — como o Japão (100 V) ou a América do Norte (120 V) — funcionam no Reino Unido se a indicação INPUT do aparelho referir «100-240 V» (a chamada dupla tensão). Nesse caso basta um adaptador de viagem para o tipo G.",
        "Os carregadores de telemóveis, computadores portáteis e máquinas fotográficas indicam, na maioria dos casos, 100-240 V. Mesmo que seja quase sempre assim, leia sempre a etiqueta (INPUT) do seu aparelho concreto.",
      ] },
      { h: "Quando pode ser preciso um conversor de tensão?", blocks: [
        "Aparelhos cuja indicação INPUT refere apenas a tensão do próprio país — muitas vezes equipamentos de alta potência, como alguns secadores de cabelo e pranchas de alisar — podem precisar de um conversor de tensão (transformador). Verifique a indicação antes de ligar o aparelho; se tiver dúvidas, o mais seguro é deixá-lo em casa.",
      ] },
      { h: "Tomadas USB e conselhos práticos", blocks: [
        "Alguns alojamentos têm tomadas USB, mas o mais seguro é levar o seu próprio adaptador de viagem para o tipo G. Assim pode carregar os aparelhos seja qual for o equipamento do quarto.",
      ] },
      { h: "Lista de verificação antes da partida", blocks: [
        { ul: [
          "Leia a indicação INPUT em cada carregador e aparelho.",
          "Indica 100-240 V? Então basta um adaptador para o tipo G.",
          "Um aparelho de alta potência só com a tensão do próprio país? Então pode ser preciso um conversor.",
          "Leve o seu próprio adaptador em vez de contar com tomadas USB no quarto.",
        ] },
      ] },
      { h: "Antes de viajar para o Reino Unido", blocks: [
        "Para a entrada precisa de uma [UK ETA](/pt/como-pedir/) válida e pode acompanhar o pedido na página de [consulta do estado da ETA](/pt/consultar-estado/). À chegada passa pelo controlo de passaportes e pelas eGates. Se pensa conduzir, leia o guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
      { h: "Referência oficial e técnica", blocks: [
        "A norma britânica para fichas e tomadas de 13 A é a BS 1363 (tipo G; Plugs and Sockets etc. (Safety) Regulations 1994). Os 230 V e 50 Hz constam das Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "O meu carregador funciona no Reino Unido?", a: "Se o carregador indicar INPUT 100-240 V (dupla tensão), funciona no Reino Unido — basta um adaptador de viagem para o tipo G. A maioria dos carregadores de telemóveis, computadores e máquinas fotográficas tem essa indicação. Verifique sempre a etiqueta do aparelho." },
      { q: "Preciso de um conversor de tensão?", a: "Um conversor de tensão (transformador) pode ser necessário para aparelhos de alta potência feitos apenas para a tensão do próprio país, como alguns secadores de cabelo e pranchas de alisar. Verifique a indicação INPUT — se referir só a tensão do próprio país, pode ser preciso um conversor." },
      { q: "Que tomadas tem o Reino Unido e Londres?", a: "As tomadas britânicas, em Londres como no resto do Reino Unido, são do tipo G, com três pinos retangulares (BS 1363, 13 A). A tensão é de 230 V e a frequência de 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "saude-nhs-ghic",
    group: "travel",
    title: "Saúde, NHS e GHIC para visitantes no Reino Unido (2026)",
    description:
      "As urgências (A&E) e o médico de família (GP) são gratuitos no NHS. O CESD (EHIC/GHIC), porque se recomenda um seguro de viagem e os números 999 e NHS 111.",
    h1: "Saúde, NHS e GHIC para visitantes no Reino Unido",
    lead: "O que é gratuito no NHS, como funciona o EHIC/GHIC para visitantes da UE, da EFTA e da Suíça, porque se recomenda vivamente um seguro de viagem e que números de emergência usar.",
    card: "Urgências e médico de família gratuitos; EHIC/GHIC não substitui o seguro de viagem.",
    sections: [
      { h: "As urgências e o médico de família são gratuitos", blocks: [
        "No NHS, as urgências (A&E) e as consultas no médico de família (GP) são gratuitas para todos — independentemente do estatuto de residência ou de ter documentos consigo. Isto aplica-se aos primeiros cuidados urgentes.",
      ] },
      { h: "Visitantes da UE, da EFTA e da Suíça: EHIC/GHIC", blocks: [
        "Com um EHIC/GHIC válido (o Cartão Europeu de Seguro de Doença) emitido no seu país, os visitantes da UE, da EFTA e da Suíça podem receber os cuidados que se tornem clinicamente necessários durante uma estadia temporária.",
        { note: "O EHIC/GHIC não cobre todos os custos e não substitui um seguro de viagem." },
      ] },
      { h: "Visitantes sem EHIC/GHIC", blocks: [
        "Os visitantes sem EHIC/GHIC podem ser cobrados pelos cuidados hospitalares que vão além do tratamento urgente (segundo a informação disponível, 150 % da tarifa padrão do NHS). Os cuidados urgentes que não podem esperar são, no entanto, sempre prestados, e o pagamento é tratado depois.",
      ] },
      { h: "Seguro de viagem: vivamente recomendado", blocks: [
        "Recomenda-se vivamente um seguro de viagem. O EHIC/GHIC não cobre tudo — por exemplo, o regresso ao país de origem (repatriamento) normalmente não está incluído. O seguro é, por isso, um complemento importante e não pode ser substituído por um GHIC.",
      ] },
      { h: "Números de emergência e aconselhamento de saúde", blocks: [
        { ul: [
          "999 (ou 112) — número de emergência para situações urgentes.",
          "NHS 111 — aconselhamento médico em situações não urgentes.",
          "Os medicamentos sujeitos a receita podem implicar uma taxa de receita (em Inglaterra).",
        ] },
      ] },
      { h: "Bom saber antes da entrada", blocks: [
        "Para entrar no Reino Unido precisa de uma [UK ETA](/pt/como-pedir/) válida — o estado do pedido pode ser visto na página de [consulta do estado da ETA](/pt/consultar-estado/). Para saber que números ligar numa emergência, veja o guia sobre [números de emergência no Reino Unido](/pt/numeros-de-emergencia/). Se pensa alugar carro, leia o guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Os cuidados urgentes são pagos no Reino Unido?", a: "As urgências (A&E) e as consultas no médico de família (GP) são gratuitas no NHS para todos, independentemente do estatuto de residência ou de documentos. Os cuidados hospitalares para além do tratamento urgente podem, no entanto, ser cobrados a visitantes sem EHIC/GHIC." },
      { q: "Posso usar o EHIC ou o GHIC no Reino Unido?", a: "Os visitantes da UE, da EFTA e da Suíça com um EHIC/GHIC válido emitido no seu país podem receber os cuidados clinicamente necessários durante uma estadia temporária. O EHIC/GHIC não cobre, contudo, todos os custos e não substitui um seguro de viagem." },
      { q: "Preciso de seguro de viagem para o Reino Unido?", a: "Recomenda-se vivamente um seguro de viagem. O EHIC/GHIC não cobre tudo — por exemplo, o repatriamento normalmente não está incluído. O seguro de viagem é, por isso, um complemento importante e não pode ser trocado pelo GHIC." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "numeros-de-emergencia",
    group: "travel",
    title: "Emergência no Reino Unido: ligue 999, NHS 111 para saúde | 2026",
    description:
      "Numa emergência ligue 999 (ou 112) — polícia, bombeiros e ambulância, gratuito. 101 para a polícia em casos não urgentes e NHS 111 para aconselhamento de saúde.",
    h1: "Números de emergência e segurança no Reino Unido",
    lead: "O mais importante primeiro: numa emergência ligue 999 (ou 112). Veja a diferença entre o 999 e o 101, o aconselhamento de saúde NHS 111, como funciona uma chamada de emergência e alguns conselhos gerais de segurança para quem viaja.",
    card: "999 ou 112 em emergência, 101 para a polícia e NHS 111 para saúde.",
    sections: [
      { h: "Números de emergência: 999 e 112", blocks: [
        "Numa emergência — quando precisa da polícia, dos bombeiros ou de uma ambulância — ligue 999. O número é gratuito e pode ser marcado a partir de qualquer telefone, mesmo sem cobertura do seu próprio operador.",
        "O 112, o número europeu de emergência, também funciona no Reino Unido e liga para o mesmo serviço que o 999. Pode, portanto, usar qualquer um dos dois.",
        "Quando liga, perguntam-lhe de que serviço precisa — police, fire, ambulance ou coastguard (guarda costeira).",
      ] },
      { h: "Casos não urgentes: 101 e NHS 111", blocks: [
        "Se a situação não for urgente, há números próprios a usar em vez do 999:",
        { ul: [
          "101 — número da polícia para assuntos não urgentes, por exemplo para comunicar um crime menor ou um objeto perdido.",
          "NHS 111 — aconselhamento de saúde em situações não urgentes. Recebe orientação sobre os sintomas e é encaminhado para o nível de cuidados adequado.",
        ] },
        "Usar o número certo ajuda o serviço de emergência 999 a dar prioridade às verdadeiras emergências. Mais sobre o funcionamento do sistema de saúde britânico no guia sobre [saúde e NHS no Reino Unido](/pt/saude-nhs-ghic/).",
      ] },
      { h: "Como decorre uma chamada de emergência", blocks: [
        "Quando liga para o 999 ou o 112, é atendido por um operador que pergunta de que serviço precisa e onde se encontra. Tente descrever da forma mais clara possível o local e o que aconteceu.",
        "Para quem tem dificuldade em ouvir ou falar existem soluções específicas, como enviar uma SMS para o 999 através do serviço com registo prévio emergencySMS, ou a chamada «silent solution» (premir 55 depois de a chamada ser atendida) se não puder falar à vontade. As condições destes serviços são descritas em pormenor pelas fontes oficiais.",
      ] },
      { h: "Conselhos gerais de segurança para viajantes", blocks: [
        "Como em muitos destinos, convém estar atento a carteiristas e a esticões em locais turísticos, nos transportes públicos e em sítios com muita gente. Alguns conselhos habituais:",
        { ul: [
          "Mantenha os objetos de valor junto ao corpo e não deixe malas sem vigilância.",
          "Evite exibir o telemóvel, a carteira e objetos caros no meio da multidão.",
          "Comunique objetos perdidos ou crimes menores à polícia pelo 101 ou na esquadra mais próxima.",
        ] },
        "Também pode ser sensato levar um seguro de viagem. Se pensa conduzir, veja as regras de trânsito britânicas no guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
      { h: "Perdeu o passaporte: contacte a embaixada", blocks: [
        "Se perder o passaporte durante a viagem, dirija-se à embaixada ou ao consulado do seu país para obter ajuda com um documento de viagem temporário. Em caso de roubo, convém também apresentar queixa à polícia. Para a entrada precisa ainda de uma [UK ETA](/pt/como-pedir/) válida — o estado do pedido pode ser visto na página de [consulta do estado da ETA](/pt/consultar-estado/).",
      ] },
    ],
    faq: [
      { q: "Para que número se liga numa emergência no Reino Unido?", a: "Ligue 999 numa emergência que exija polícia, bombeiros ou ambulância. O 112 funciona da mesma forma e liga para o mesmo serviço. Ambos são gratuitos e podem ser marcados a partir de qualquer telefone." },
      { q: "O que faço se não for urgente?", a: "Para assuntos de polícia não urgentes, ligue 101. Se precisar de aconselhamento de saúde não urgente, ligue NHS 111, que dá orientação sobre sintomas e encaminha para os cuidados adequados." },
      { q: "Como me protejo dos carteiristas?", a: "Mantenha os objetos de valor junto ao corpo, evite exibir o telemóvel e a carteira no meio da multidão e esteja atento em locais turísticos e nos transportes públicos. Se for roubado, pode contactar a polícia pelo 101 ou dirigir-se à esquadra mais próxima." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "feriados-bank-holidays-2026",
    group: "travel",
    title: "Bank holidays no Reino Unido 2026: feriados oficiais",
    description:
      "Bank holidays de 2026 em Inglaterra e no País de Gales (GOV.UK): bancos fechados, lojas com horário reduzido, menos transportes. No Natal quase tudo fecha.",
    h1: "Bank holidays no Reino Unido em 2026",
    lead: "Num bank holiday os bancos estão fechados, muitas lojas têm horário reduzido e os transportes públicos podem ser menos frequentes. Estes são os feriados oficiais de 2026 em Inglaterra e no País de Gales segundo o GOV.UK — e o que significam para a sua viagem.",
    card: "Os 8 feriados de 2026 em Inglaterra e no País de Gales e o que fecha.",
    sections: [
      { h: "Bank holidays em Inglaterra e no País de Gales em 2026", blocks: [
        "Segundo o GOV.UK, os bank holidays oficiais em Inglaterra e no País de Gales em 2026 são os seguintes. A Escócia e a Irlanda do Norte têm, em parte, datas diferentes.",
        { table: { head: ["Data", "Feriado"], rows: [
          ["1 de janeiro", "Dia de Ano Novo (New Year's Day)"],
          ["3 de abril", "Sexta-feira Santa (Good Friday)"],
          ["6 de abril", "Segunda-feira de Páscoa (Easter Monday)"],
          ["4 de maio", "Early May bank holiday"],
          ["25 de maio", "Spring bank holiday"],
          ["31 de agosto", "Summer bank holiday"],
          ["25 de dezembro", "Dia de Natal (Christmas Day)"],
          ["28 de dezembro", "Dia de substituição do dia 26 de dezembro (Boxing Day)"],
        ] } },
      ] },
      { h: "O que está aberto — e o que é afetado?", blocks: [
        "Num bank holiday os bancos estão fechados. Muitas lojas e atrações estão abertas, mas muitas vezes com horário reduzido. Os transportes públicos podem ter menor frequência, por exemplo com horário de domingo.",
        "Confirme com antecedência os horários de abertura e os horários dos transportes para o dia em causa, porque variam de local para local e de serviço para serviço.",
      ] },
      { h: "Dia de Natal: quase tudo fecha", blocks: [
        "O dia de Natal (25 de dezembro) é especial: quase tudo está fechado e a maior parte dos transportes públicos é suprimida. Se viajar no período do Natal, planeie os dias com margem e não conte com o serviço regular de transportes.",
      ] },
      { h: "Dias de substituição quando o feriado calha ao fim de semana", blocks: [
        "Se um bank holiday calhar a um sábado ou domingo, o dia de descanso passa normalmente para o dia útil seguinte (o chamado dia de substituição). É por isso que algumas datas da tabela acima caem num dia útil a seguir a um fim de semana.",
      ] },
      { h: "Antes de viajar para o Reino Unido", blocks: [
        "Para a entrada precisa de uma [UK ETA](/pt/como-pedir/) válida e pode acompanhar o pedido na página de [consulta do estado da ETA](/pt/consultar-estado/). À chegada passa pelo controlo de passaportes e pelas eGates. Se vai conduzir durante a viagem, leia o guia sobre [conduzir no Reino Unido](/pt/conduzir-no-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "Quando são os bank holidays no Reino Unido em 2026?", a: "Em Inglaterra e no País de Gales, os bank holidays oficiais de 2026 segundo o GOV.UK são: 1 de janeiro (Ano Novo), 3 de abril (Sexta-feira Santa), 6 de abril (Segunda-feira de Páscoa), 4 de maio (Early May), 25 de maio (Spring), 31 de agosto (Summer), 25 de dezembro (Natal) e 28 de dezembro (dia de substituição do Boxing Day). A Escócia e a Irlanda do Norte têm, em parte, datas diferentes." },
      { q: "As lojas estão abertas nos bank holidays?", a: "Os bancos estão fechados. Muitas lojas e atrações estão abertas, mas muitas vezes com horário reduzido. No dia de Natal (25 de dezembro) quase tudo está fechado." },
      { q: "Como são afetados os transportes públicos nos feriados?", a: "Os transportes públicos podem ter menor frequência, por exemplo com horário de domingo. No dia de Natal a maior parte dos transportes é suprimida, por isso planeie os dias de viagem com margem." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
