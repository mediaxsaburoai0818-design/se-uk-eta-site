import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// スペイン語（スペイン居住者向け）。渡航者約180万人・競合4。
// ⚠️ 中南米SERPと混在するため、表記は「スペインから渡航する人」を前提にする。
const es: LangContent = {
  code: "es",
  label: "Español",
  siteName: "Guía UK ETA",
  tagline: "La autorización de viaje para el Reino Unido, explicada paso a paso",
  homeTitle: `UK ETA: ${F.fee} y respuesta normalmente en 1 día | Guía en español 2026`,
  homeDescription:
    `Guía en español de la UK ETA: cuesta ${F.fee}, es válida ${F.validYears} años y permite estancias de hasta ${F.staySixMonths} meses por entrada. Cómo solicitarla en la web oficial de GOV.UK y qué necesitas tener a mano.`,
  homeLead:
    `Si viajas al Reino Unido desde España necesitas una UK ETA (autorización electrónica de viaje). Cuesta ${F.fee} en la web oficial, la decisión llega normalmente en 1 día y sirve para varias entradas durante ${F.validYears} años.`,
  nav: { info: "Sobre la ETA", entry: "Entrada al Reino Unido", faq: "Preguntas frecuentes" },
  officialLinkLabel: "Solicitar en la web oficial de GOV.UK",
  updatedLabel: "Actualizado",
  pages: {
    "what-is-eta": {
      slug: "que-es-la-eta",
      title: "Qué es la UK ETA: autorización previa obligatoria, no un visado | 2026",
      description:
        "La UK ETA es una autorización electrónica que debes obtener antes de viajar al Reino Unido. No es un visado: se solicita en línea, cuesta " + F.fee + " y se vincula a tu pasaporte.",
      h1: "Qué es la UK ETA",
      lead: "La UK ETA (Electronic Travel Authorisation) es una autorización que se pide antes de viajar. No sustituye al pasaporte ni equivale a un visado.",
      sections: [
        { h: "No es un visado", p: [
          "La ETA es una autorización previa al viaje para personas que no necesitan visado para entrar al Reino Unido. Se comprueba antes del embarque, por lo que sin ella la aerolínea puede denegarte la subida al avión.",
          "A diferencia de un visado, no requiere cita ni entrevista: todo el trámite es en línea." ] },
        { h: "Se vincula al pasaporte", p: [
          `La autorización queda asociada al pasaporte con el que la solicitas. Si renuevas el pasaporte, necesitas una ETA nueva aunque los ${F.validYears} años no hayan terminado.`,
          "No se imprime nada: en la frontera basta con el mismo pasaporte." ] },
        { h: "Quién la necesita", p: [
          "La necesitan los viajeros de países exentos de visado, incluida España, para turismo, visitas familiares, negocios o tránsito.",
          "Los menores y los bebés también necesitan su propia ETA." ] },
      ],
    },
    application: {
      slug: "como-solicitarla",
      title: "Cómo solicitar la UK ETA: en línea y en unos minutos | Guía 2026",
      description:
        "Pasos para solicitar la UK ETA en la web o la app oficial de GOV.UK: pasaporte, foto del rostro, datos de contacto y pago de " + F.fee + ". Qué revisar antes de enviar.",
      h1: "Cómo solicitar la UK ETA",
      lead: "La solicitud se hace íntegramente en línea, en la web oficial de GOV.UK o en la aplicación oficial. No hace falta acudir a ninguna oficina.",
      sections: [
        { h: "Qué necesitas tener a mano", p: [
          "El pasaporte con el que vas a viajar, una fotografía de tu rostro (puedes hacerla con el móvil), una dirección de correo electrónico y una tarjeta de pago.",
          "Los datos deben coincidir exactamente con el pasaporte: un nombre escrito de forma distinta es el motivo de rechazo más habitual." ] },
        { h: "Pasos", p: [
          "Accede a la web oficial de GOV.UK o descarga la aplicación oficial, escanea la página de datos del pasaporte, hazte la fotografía, responde a las preguntas sobre antecedentes y paga " + F.fee + ".",
          `Después solo queda esperar la decisión, que normalmente llega en 1 día, aunque conviene contar con hasta ${F.decisionDays} días laborables.` ] },
        { h: "Antes de enviar, comprueba", p: [
          "Que el número de pasaporte y la fecha de caducidad estén bien copiados, que la foto muestre el rostro despejado y que el correo electrónico sea correcto: la decisión llega por ahí.",
          "Solicítala con antelación y no el mismo día del vuelo." ] },
      ],
    },
    fee: {
      slug: "precio",
      title: `Precio de la UK ETA: ${F.fee} en la web oficial | Cuidado con los intermediarios`,
      description:
        `La UK ETA cuesta ${F.fee} en GOV.UK. Es un pago único que cubre ${F.validYears} años y varias entradas. Cómo reconocer las páginas que cobran un recargo.`,
      h1: `Cuánto cuesta la UK ETA`,
      lead: `El precio oficial es de ${F.fee} y se paga una sola vez. Con esa cantidad la autorización sirve durante ${F.validYears} años y para varias entradas.`,
      sections: [
        { h: "Un único pago", p: [
          `No hay cuotas anuales ni renovaciones intermedias: se paga ${F.fee} al solicitarla y la autorización queda válida ${F.validYears} años o hasta que caduque el pasaporte.`,
          "El importe se cobra también si la solicitud es denegada, porque cubre la tramitación." ] },
        { h: "Páginas que cobran más", p: [
          "Existen webs de intermediarios que añaden su propia comisión al importe oficial. No están autorizadas por el Gobierno británico y el trámite es el mismo que harías tú.",
          `Si una página te pide claramente más de ${F.fee}, la diferencia es su comisión.` ] },
        { h: "Cómo reconocer la web oficial", p: [
          "La dirección oficial pertenece al dominio GOV.UK. Desconfía de páginas que se presenten como «socio oficial» o «agente autorizado»: el Gobierno británico no autoriza a terceros a presentar solicitudes.",
        ] },
      ],
    },
    "status-check": {
      slug: "consultar-estado",
      title: "Consultar el estado de la UK ETA: dónde y qué necesitas | 2026",
      description:
        "Cómo comprobar si tu UK ETA está aprobada: el aviso llega por correo electrónico y el estado se consulta con el número de pasaporte. Qué hacer si no recibes respuesta.",
      h1: "Cómo consultar el estado de tu UK ETA",
      lead: "La decisión se comunica por correo electrónico. Si no te ha llegado, puedes comprobar el estado con los datos del pasaporte con el que solicitaste la autorización.",
      sections: [
        { h: "Primero revisa el correo", p: [
          "El aviso de aprobación se envía a la dirección que indicaste al solicitarla. Revisa también la carpeta de spam antes de dar por perdida la solicitud.",
          "No se emite ningún documento para imprimir: la autorización queda registrada junto al pasaporte." ] },
        { h: "Qué necesitas para consultar", p: [
          "El número del pasaporte con el que hiciste la solicitud y los datos personales tal y como los introdujiste.",
          "Si solicitaste la ETA con otro pasaporte, la consulta no la encontrará." ] },
        { h: "Si tarda más de lo previsto", p: [
          `La mayoría de decisiones llegan en 1 día, pero conviene contar con hasta ${F.decisionDays} días laborables. Si se supera ese plazo y tienes el vuelo cerca, contacta por los canales oficiales.`,
        ] },
      ],
    },
    validity: {
      slug: "validez",
      title: `UK ETA: válida ${F.validYears} años o hasta que caduque el pasaporte | 2026`,
      description:
        `La UK ETA es válida ${F.validYears} años desde su aprobación y permite varias entradas. Si renuevas el pasaporte necesitas solicitarla de nuevo.`,
      h1: "Cuánto dura la UK ETA",
      lead: `La autorización es válida ${F.validYears} años, o hasta la fecha de caducidad del pasaporte si esta llega antes.`,
      sections: [
        { h: "Varias entradas incluidas", p: [
          `Durante esos ${F.validYears} años puedes entrar al Reino Unido tantas veces como quieras, siempre que cada estancia no supere los ${F.staySixMonths} meses.`,
          "No hace falta pedir una autorización nueva para cada viaje." ] },
        { h: "Si cambias de pasaporte", p: [
          "La autorización va unida al pasaporte concreto con el que se solicitó. Al renovarlo, hay que pedir una ETA nueva aunque quede tiempo de validez.",
        ] },
        { h: "Cómo comprobar la fecha", p: [
          "La fecha figura en el correo de aprobación. Si no lo conservas, consulta el estado con los datos del pasaporte.",
        ] },
      ],
    },
    "processing-time": {
      slug: "tiempo-de-tramitacion",
      title: `UK ETA: respuesta normalmente en 1 día (hasta ${F.decisionDays} días laborables) | 2026`,
      description:
        `La decisión sobre la UK ETA llega en la mayoría de casos en 1 día, pero conviene prever hasta ${F.decisionDays} días laborables. Cuándo solicitarla para no ir justo.`,
      h1: "Cuánto tarda la UK ETA",
      lead: `En la mayoría de los casos la respuesta llega en 1 día. Aun así, la recomendación oficial es contar con hasta ${F.decisionDays} días laborables.`,
      sections: [
        { h: "Cuándo solicitarla", p: [
          "Lo prudente es pedirla en cuanto tengas el vuelo, y no el día antes de viajar. Si la solicitud requiere comprobaciones adicionales, el plazo se alarga.",
          "Sin la autorización aprobada la aerolínea puede denegarte el embarque." ] },
        { h: "Por qué a veces tarda más", p: [
          "Los casos que necesitan revisión manual (por ejemplo, respuestas afirmativas en las preguntas sobre antecedentes) tardan más que los automáticos.",
        ] },
        { h: "Qué hacer si no llega", p: [
          "Revisa la carpeta de spam y confirma que el correo que indicaste es correcto. Después, consulta el estado con los datos del pasaporte.",
        ] },
      ],
    },
    "required-documents": {
      slug: "documentos-necesarios",
      title: "Documentos para la UK ETA: pasaporte, foto y tarjeta | 2026",
      description:
        "Qué necesitas para solicitar la UK ETA: el pasaporte de viaje, una fotografía del rostro, correo electrónico y medio de pago. Requisitos de la foto.",
      h1: "Qué documentos necesitas",
      lead: "La solicitud es sencilla: pasaporte, una fotografía y un medio de pago. No se piden certificados ni justificantes de viaje.",
      sections: [
        { h: "Pasaporte", p: [
          "Debe ser el mismo con el que vas a viajar, y estar en vigor. Los datos han de copiarse exactamente como aparecen.",
        ] },
        { h: "Fotografía del rostro", p: [
          "Puede hacerse con el móvil durante la solicitud. El rostro debe verse despejado, sin gafas de sol ni nada que lo cubra, y con fondo uniforme.",
        ] },
        { h: "Correo electrónico y pago", p: [
          `La decisión se envía por correo electrónico, así que debe estar bien escrito. El pago de ${F.fee} se hace con tarjeta al final del proceso.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "duracion-de-la-estancia",
      title: `Con la UK ETA puedes estar hasta ${F.staySixMonths} meses por entrada | 2026`,
      description:
        `La UK ETA permite estancias de hasta ${F.staySixMonths} meses por entrada, para turismo, visitas o negocios. Qué no permite hacer.`,
      h1: "Cuánto tiempo puedes quedarte",
      lead: `Cada entrada permite permanecer en el Reino Unido hasta ${F.staySixMonths} meses. La autorización sirve para turismo, visitas familiares, negocios y tránsito.`,
      sections: [
        { h: "Qué puedes hacer", p: [
          "Turismo, visitar a familiares o amigos, reuniones y actividades de negocio puntuales, y hacer tránsito por el Reino Unido.",
        ] },
        { h: "Qué no permite", p: [
          "No autoriza a trabajar para un empleador británico ni a establecer residencia. Para eso hacen falta otras vías de entrada.",
          "Los estudios de larga duración tampoco entran: la ETA cubre estancias cortas." ] },
        { h: "Entradas repetidas", p: [
          `Puedes entrar varias veces mientras la autorización esté vigente, pero cada estancia está limitada a ${F.staySixMonths} meses y no se pueden encadenar de forma indefinida.`,
        ] },
      ],
    },
    faq: {
      slug: "preguntas-frecuentes",
      title: "UK ETA: respuestas rápidas a precio, duración y plazos | FAQ 2026",
      description:
        `Preguntas frecuentes sobre la UK ETA: cuánto cuesta (${F.fee}), cuánto dura (${F.validYears} años), cuánto tarda y qué hacer si la deniegan.`,
      h1: "Preguntas frecuentes sobre la UK ETA",
      lead: "Respuestas breves a las dudas más habituales. Cada apartado enlaza con la explicación completa.",
      sections: [
        { h: `¿Cuánto cuesta? ${F.fee}`, p: [
          `El precio oficial en GOV.UK es de ${F.fee}, en un pago único que cubre ${F.validYears} años.`,
        ] },
        { h: `¿Cuánto dura? ${F.validYears} años`, p: [
          "O hasta que caduque el pasaporte, si esa fecha llega antes. Permite varias entradas.",
        ] },
        { h: "¿Cuánto tarda? Normalmente 1 día", p: [
          `Conviene prever hasta ${F.decisionDays} días laborables y no dejarlo para el último momento.`,
        ] },
        { h: "¿Y si me la deniegan?", p: [
          "No existe un recurso: en ese caso habría que solicitar un visado por la vía que corresponda al motivo del viaje.",
        ] },
        { h: "¿La necesitan los niños?", p: [
          "Sí. Cada persona, incluidos bebés y menores, necesita su propia autorización.",
        ] },
      ],
    },
    about: {
      slug: "sobre-esta-guia",
      title: "Sobre esta guía de la UK ETA | Quiénes somos y cómo trabajamos",
      description: "Quién publica esta guía en español sobre la UK ETA, de dónde salen los datos y cómo tratamos las correcciones.",
      h1: "Sobre esta guía",
      lead: "Esta guía explica en español el trámite de la UK ETA. No es una página oficial del Gobierno británico ni tramitamos solicitudes.",
      sections: [
        { h: "No somos una web oficial", p: [
          "No estamos afiliados al Gobierno del Reino Unido. La solicitud debe hacerse siempre en la web oficial de GOV.UK o en su aplicación.",
        ] },
        { h: "De dónde salen los datos", p: [
          "Importes, plazos y condiciones se toman de la información publicada por GOV.UK. Cuando una cifra puede cambiar, indicamos la fecha de actualización.",
        ] },
        { h: "Correcciones", p: [
          "Si detectas un dato desactualizado o incorrecto, agradecemos el aviso y lo corregimos.",
        ] },
      ],
    },
    privacy: {
      slug: "privacidad",
      title: "Política de privacidad | Guía UK ETA",
      description: "Qué datos se recogen en esta web y con qué finalidad.",
      h1: "Política de privacidad",
      lead: "Esta página explica el tratamiento de datos en este sitio.",
      sections: [
        { h: "Datos que se recogen", p: [
          "No solicitamos datos personales para consultar la guía. No tramitamos solicitudes de ETA, por lo que no recibimos datos de pasaporte ni de pago.",
        ] },
        { h: "Analítica", p: [
          "Utilizamos estadísticas agregadas de uso para mejorar los contenidos. No se emplean para identificar a personas concretas.",
        ] },
      ],
    },
    terms: {
      slug: "aviso-legal",
      title: "Aviso legal | Guía UK ETA",
      description: "Condiciones de uso de esta guía informativa sobre la UK ETA.",
      h1: "Aviso legal",
      lead: "Condiciones de uso de los contenidos de este sitio.",
      sections: [
        { h: "Carácter informativo", p: [
          "Los contenidos tienen finalidad informativa. Las condiciones oficiales pueden cambiar, por lo que conviene confirmarlas en GOV.UK antes de solicitar la autorización.",
        ] },
        { h: "Responsabilidad", p: [
          "No respondemos de decisiones tomadas únicamente a partir de esta guía. La resolución de cada solicitud corresponde a las autoridades británicas.",
        ] },
      ],
    },
  },
};

export default es;
