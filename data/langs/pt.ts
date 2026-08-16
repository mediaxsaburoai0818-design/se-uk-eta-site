import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// ポルトガル語（ポルトガル向け・pt-PT）。渡航者約80万人だが競合3で最も薄い。
// ⚠️ ブラジル(pt-BR)とは表記が異なるため、code は pt-PT を明示する。
const pt: LangContent = {
  code: "pt-PT",
  label: "Português",
  siteName: "Guia UK ETA",
  tagline: "A autorização de viagem para o Reino Unido, passo a passo",
  homeTitle: `UK ETA: ${F.fee} e resposta normalmente em 1 dia | Guia em português 2026`,
  homeDescription:
    `Guia em português sobre a UK ETA: custa ${F.fee}, é válida ${F.validYears} anos e permite estadias até ${F.staySixMonths} meses por entrada. Como pedi-la no site oficial GOV.UK.`,
  homeLead:
    `Para viajar para o Reino Unido precisa de uma UK ETA. O pedido custa ${F.fee} no site oficial, a decisão chega normalmente em 1 dia e a autorização serve para várias entradas durante ${F.validYears} anos.`,
  nav: { info: "Sobre a ETA", entry: "Entrada no Reino Unido", faq: "Perguntas frequentes" },
  officialLinkLabel: "Pedir no site oficial GOV.UK",
  updatedLabel: "Atualizado",
  pages: {
    "what-is-eta": {
      slug: "o-que-e-a-eta",
      title: "O que é a UK ETA: autorização prévia obrigatória, não é visto | 2026",
      description: `A UK ETA é uma autorização eletrónica que tem de obter antes de viajar para o Reino Unido. Não é um visto: pede-se online, custa ${F.fee} e fica associada ao passaporte.`,
      h1: "O que é a UK ETA",
      lead: "A UK ETA (Electronic Travel Authorisation) é uma autorização pedida antes da viagem. Não substitui o passaporte nem equivale a um visto.",
      sections: [
        { h: "Não é um visto", p: [
          "A ETA é uma autorização prévia para quem não precisa de visto para entrar no Reino Unido. É verificada antes do embarque, pelo que sem ela a companhia aérea pode recusar o embarque.",
          "Ao contrário de um visto, não exige marcação nem entrevista: todo o processo é online." ] },
        { h: "Fica associada ao passaporte", p: [
          `A autorização fica ligada ao passaporte com que a pede. Se renovar o passaporte, precisa de uma ETA nova mesmo que os ${F.validYears} anos ainda não tenham terminado.`,
          "Não há nada para imprimir: na fronteira basta o mesmo passaporte." ] },
        { h: "Quem precisa", p: [
          "Os viajantes de países isentos de visto, incluindo Portugal, para turismo, visitas a familiares, negócios ou trânsito.",
          "As crianças e os bebés também precisam da sua própria ETA." ] },
      ],
    },
    application: {
      slug: "como-pedir",
      title: "Como pedir a UK ETA: online e em poucos minutos | Guia 2026",
      description: `Passos para pedir a UK ETA no site ou na aplicação oficial GOV.UK: passaporte, fotografia do rosto, contactos e pagamento de ${F.fee}.`,
      h1: "Como pedir a UK ETA",
      lead: "O pedido é feito inteiramente online, no site oficial GOV.UK ou na aplicação oficial. Não é preciso deslocar-se a nenhum balcão.",
      sections: [
        { h: "O que deve ter à mão", p: [
          "O passaporte com que vai viajar, uma fotografia do rosto (pode tirá-la com o telemóvel), um endereço de email e um cartão de pagamento.",
          "Os dados têm de coincidir exatamente com o passaporte: um nome escrito de forma diferente é o motivo de recusa mais comum." ] },
        { h: "Os passos", p: [
          `Aceda ao site oficial GOV.UK ou instale a aplicação oficial, digitalize a página de dados do passaporte, tire a fotografia, responda às perguntas sobre antecedentes e pague ${F.fee}.`,
          `Depois é esperar pela decisão, que chega normalmente em 1 dia, embora convenha contar com até ${F.decisionDays} dias úteis.` ] },
        { h: "Antes de enviar, confirme", p: [
          "Se o número e a validade do passaporte estão bem copiados, se a fotografia mostra o rosto descoberto e se o email está correto: é por aí que chega a decisão.",
          "Peça com antecedência e não no próprio dia do voo." ] },
      ],
    },
    fee: {
      slug: "preco",
      title: `Preço da UK ETA: ${F.fee} no site oficial | Cuidado com intermediários`,
      description: `A UK ETA custa ${F.fee} no GOV.UK. É um pagamento único que cobre ${F.validYears} anos e várias entradas. Como reconhecer sites que cobram acréscimo.`,
      h1: "Quanto custa a UK ETA",
      lead: `O preço oficial é ${F.fee} e paga-se uma só vez. Com esse valor a autorização serve durante ${F.validYears} anos e para várias entradas.`,
      sections: [
        { h: "Um único pagamento", p: [
          `Não há quotas anuais nem renovações intermédias: paga ${F.fee} ao pedir e a autorização fica válida ${F.validYears} anos ou até o passaporte caducar.`,
          "O valor é cobrado mesmo que o pedido seja recusado, porque cobre a análise." ] },
        { h: "Sites que cobram mais", p: [
          "Há sites de intermediários que acrescentam a sua própria comissão ao valor oficial. Não estão autorizados pelo Governo britânico e fazem o mesmo que o próprio requerente faria.",
          `Se um site pede claramente mais do que ${F.fee}, a diferença é a comissão dele.` ] },
        { h: "Como reconhecer o site oficial", p: [
          "O endereço oficial pertence ao domínio GOV.UK. Desconfie de páginas que se apresentem como «parceiro oficial» ou «agente autorizado»: o Governo britânico não autoriza terceiros a submeter pedidos.",
        ] },
      ],
    },
    "status-check": {
      slug: "consultar-estado",
      title: "Consultar o estado da UK ETA: onde e o que precisa | 2026",
      description: "Como confirmar se a UK ETA foi aprovada: o aviso chega por email e o estado consulta-se com o número do passaporte.",
      h1: "Como consultar o estado da UK ETA",
      lead: "A decisão é comunicada por email. Se não chegou, pode consultar o estado com os dados do passaporte usado no pedido.",
      sections: [
        { h: "Verifique primeiro o email", p: [
          "O aviso de aprovação é enviado para o endereço indicado no pedido. Veja também a pasta de spam antes de dar o pedido como perdido.",
          "Não é emitido nenhum documento para imprimir: a autorização fica registada junto do passaporte." ] },
        { h: "O que precisa para consultar", p: [
          "O número do passaporte usado no pedido e os dados pessoais tal como os introduziu.",
          "Se pediu a ETA com outro passaporte, a consulta não a encontra." ] },
        { h: "Se demorar mais do que o previsto", p: [
          `A maioria das decisões chega em 1 dia, mas convém contar com até ${F.decisionDays} dias úteis. Se ultrapassar esse prazo e tiver o voo próximo, contacte pelos canais oficiais.`,
        ] },
      ],
    },
    validity: {
      slug: "validade",
      title: `UK ETA: válida ${F.validYears} anos ou até o passaporte caducar | 2026`,
      description: `A UK ETA é válida ${F.validYears} anos desde a aprovação e permite várias entradas. Se renovar o passaporte tem de pedir de novo.`,
      h1: "Quanto tempo dura a UK ETA",
      lead: `A autorização é válida ${F.validYears} anos, ou até à data de validade do passaporte se esta for anterior.`,
      sections: [
        { h: "Várias entradas incluídas", p: [
          `Durante esses ${F.validYears} anos pode entrar no Reino Unido as vezes que quiser, desde que cada estadia não ultrapasse ${F.staySixMonths} meses.`,
          "Não é preciso pedir uma autorização nova para cada viagem." ] },
        { h: "Se mudar de passaporte", p: [
          "A autorização está ligada ao passaporte concreto com que foi pedida. Ao renová-lo, é preciso pedir uma ETA nova mesmo que ainda haja validade.",
        ] },
        { h: "Como confirmar a data", p: [
          "A data consta do email de aprovação. Se não o guardou, consulte o estado com os dados do passaporte.",
        ] },
      ],
    },
    "processing-time": {
      slug: "prazo-de-decisao",
      title: `UK ETA: resposta normalmente em 1 dia (até ${F.decisionDays} dias úteis) | 2026`,
      description: `A decisão sobre a UK ETA chega na maioria dos casos em 1 dia, mas convém prever até ${F.decisionDays} dias úteis. Quando pedir para não ficar em cima da hora.`,
      h1: "Quanto tempo demora a UK ETA",
      lead: `Na maioria dos casos a resposta chega em 1 dia. Ainda assim, a recomendação oficial é contar com até ${F.decisionDays} dias úteis.`,
      sections: [
        { h: "Quando pedir", p: [
          "O prudente é pedir assim que tiver o voo, e não no dia anterior à viagem. Se o pedido exigir verificações adicionais, o prazo alarga-se.",
          "Sem a autorização aprovada a companhia aérea pode recusar o embarque." ] },
        { h: "Porque às vezes demora mais", p: [
          "Os casos que precisam de análise manual (por exemplo, respostas afirmativas nas perguntas sobre antecedentes) demoram mais do que os automáticos.",
        ] },
        { h: "O que fazer se não chegar", p: [
          "Verifique a pasta de spam e confirme que o email indicado está correto. Depois consulte o estado com os dados do passaporte.",
        ] },
      ],
    },
    "required-documents": {
      slug: "documentos-necessarios",
      title: "Documentos para a UK ETA: passaporte, fotografia e cartão | 2026",
      description: "O que precisa para pedir a UK ETA: o passaporte de viagem, uma fotografia do rosto, email e meio de pagamento.",
      h1: "Que documentos precisa",
      lead: "O pedido é simples: passaporte, uma fotografia e um meio de pagamento. Não são pedidos certificados nem comprovativos de viagem.",
      sections: [
        { h: "Passaporte", p: ["Tem de ser o mesmo com que vai viajar e estar válido. Os dados devem ser copiados exatamente como aparecem."] },
        { h: "Fotografia do rosto", p: ["Pode ser tirada com o telemóvel durante o pedido. O rosto deve estar descoberto, sem óculos de sol nem nada que o tape, com fundo uniforme."] },
        { h: "Email e pagamento", p: [`A decisão é enviada por email, por isso tem de estar bem escrito. O pagamento de ${F.fee} é feito com cartão no fim do processo.`] },
      ],
    },
    "stay-duration": {
      slug: "duracao-da-estadia",
      title: `Com a UK ETA pode ficar até ${F.staySixMonths} meses por entrada | 2026`,
      description: `A UK ETA permite estadias até ${F.staySixMonths} meses por entrada, para turismo, visitas ou negócios. O que não permite fazer.`,
      h1: "Quanto tempo pode ficar",
      lead: `Cada entrada permite permanecer no Reino Unido até ${F.staySixMonths} meses. A autorização serve para turismo, visitas a familiares, negócios e trânsito.`,
      sections: [
        { h: "O que pode fazer", p: ["Turismo, visitar familiares ou amigos, reuniões e atividades de negócio pontuais, e fazer trânsito pelo Reino Unido."] },
        { h: "O que não permite", p: [
          "Não autoriza a trabalhar para um empregador britânico nem a fixar residência. Para isso existem outras vias.",
          "Estudos de longa duração também não estão abrangidos: a ETA cobre estadias curtas." ] },
        { h: "Entradas repetidas", p: [
          `Pode entrar várias vezes enquanto a autorização estiver válida, mas cada estadia está limitada a ${F.staySixMonths} meses e não podem ser encadeadas indefinidamente.`,
        ] },
      ],
    },
    faq: {
      slug: "perguntas-frequentes",
      title: "UK ETA: respostas rápidas a preço, validade e prazos | FAQ 2026",
      description: `Perguntas frequentes sobre a UK ETA: quanto custa (${F.fee}), quanto dura (${F.validYears} anos), quanto demora e o que fazer se for recusada.`,
      h1: "Perguntas frequentes sobre a UK ETA",
      lead: "Respostas breves às dúvidas mais comuns. Cada ponto remete para a explicação completa.",
      sections: [
        { h: `Quanto custa? ${F.fee}`, p: [`O preço oficial no GOV.UK é ${F.fee}, num pagamento único que cobre ${F.validYears} anos.`] },
        { h: `Quanto dura? ${F.validYears} anos`, p: ["Ou até o passaporte caducar, se essa data for anterior. Permite várias entradas."] },
        { h: "Quanto demora? Normalmente 1 dia", p: [`Convém prever até ${F.decisionDays} dias úteis e não deixar para o último momento.`] },
        { h: "E se for recusada?", p: ["Não existe recurso: nesse caso seria preciso pedir um visto adequado ao motivo da viagem."] },
        { h: "As crianças também precisam?", p: ["Sim. Cada pessoa, incluindo bebés e crianças, precisa da sua própria autorização."] },
      ],
    },
    about: {
      slug: "sobre-este-guia",
      title: "Sobre este guia da UK ETA | Quem somos e como trabalhamos",
      description: "Quem publica este guia em português sobre a UK ETA, de onde vêm os dados e como tratamos correções.",
      h1: "Sobre este guia",
      lead: "Este guia explica em português o processo da UK ETA. Não é uma página oficial do Governo britânico e não tratamos pedidos.",
      sections: [
        { h: "Não somos um site oficial", p: ["Não estamos associados ao Governo do Reino Unido. O pedido deve ser feito sempre no site oficial GOV.UK ou na sua aplicação."] },
        { h: "De onde vêm os dados", p: ["Valores, prazos e condições são retirados da informação publicada pelo GOV.UK. Quando um número pode mudar, indicamos a data de atualização."] },
        { h: "Correções", p: ["Se detetar um dado desatualizado ou incorreto, agradecemos o aviso e corrigimos."] },
      ],
    },
    privacy: {
      slug: "privacidade",
      title: "Política de privacidade | Guia UK ETA",
      description: "Que dados são recolhidos neste site e com que finalidade.",
      h1: "Política de privacidade",
      lead: "Esta página explica o tratamento de dados neste site.",
      sections: [
        { h: "Dados recolhidos", p: ["Não pedimos dados pessoais para consultar o guia. Não tratamos pedidos de ETA, pelo que não recebemos dados de passaporte nem de pagamento."] },
        { h: "Estatísticas", p: ["Usamos estatísticas agregadas de utilização para melhorar os conteúdos. Não servem para identificar pessoas concretas."] },
      ],
    },
    terms: {
      slug: "aviso-legal",
      title: "Aviso legal | Guia UK ETA",
      description: "Condições de utilização deste guia informativo sobre a UK ETA.",
      h1: "Aviso legal",
      lead: "Condições de utilização dos conteúdos deste site.",
      sections: [
        { h: "Caráter informativo", p: ["Os conteúdos têm finalidade informativa. As condições oficiais podem mudar, pelo que convém confirmá-las no GOV.UK antes de pedir a autorização."] },
        { h: "Responsabilidade", p: ["Não respondemos por decisões tomadas apenas com base neste guia. A decisão sobre cada pedido cabe às autoridades britânicas."] },
      ],
    },
  },
};

export default pt;
