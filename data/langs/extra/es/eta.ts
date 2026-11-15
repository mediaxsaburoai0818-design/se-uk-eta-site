import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（es・eta）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const CHECK_VISA = "Si tienes otra nacionalidad (por ejemplo, de un país de Latinoamérica), comprueba qué te corresponde con la herramienta oficial [GOV.UK: Check if you need a UK visa](https://www.gov.uk/check-uk-visa).";

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "quien-necesita-la-eta",
    group: "eta",
    title: "¿Quién necesita la UK ETA? Nacionalidades y excepciones 2026",
    description: "Quién necesita la UK ETA y quién está exento: ciudadanos británicos e irlandeses, residentes con permiso en el Reino Unido y tránsito airside.",
    h1: "¿Quién necesita una UK ETA?",
    lead: "La UK ETA es obligatoria para los ciudadanos de países exentos de visado que viajan al Reino Unido para estancias cortas (turismo, negocios, estudios de corta duración). Cada viajero, incluidos los bebés y los niños, necesita su propia ETA.",
    card: "Quién debe pedir la ETA, quién está exento y qué hacer si tu nacionalidad requiere visado",
    sections: [
      { h: "Quién necesita la ETA", blocks: [
        "La ETA es para los nacionales de países exentos de visado que viajan al Reino Unido para estancias cortas: turismo, negocios o estudios de corta duración. Si viajas con pasaporte español, como el resto de ciudadanos de la UE, necesitas una ETA.",
        CHECK_VISA,
      ] },
      { h: "Quién está exento de la ETA", blocks: [
        { ul: [
          "Ciudadanos británicos e irlandeses (con pasaporte británico o irlandés)",
          "Personas con permiso para vivir, trabajar o estudiar en el Reino Unido (por ejemplo, con visado o con settled/pre-settled status)",
          "Titulares de pasaporte de British Overseas Territories Citizen o de British National (Overseas)",
          "Residentes en Irlanda que viajan desde Irlanda, Guernsey, Jersey o la Isla de Man",
          "Pasajeros en tránsito airside que no pasan el control fronterizo",
          "Personas que están a la espera de la resolución de una solicitud al EU Settlement Scheme",
        ] },
      ] },
      { h: "Lo que conviene saber", blocks: [
        { ul: [
          "Las personas con nacionalidad británica o irlandesa no pueden obtener una ETA y viajan con el documento de esa nacionalidad.",
          "Si tu nacionalidad no está exenta de visado, puede que necesites un visado: compruébalo con la herramienta oficial de GOV.UK.",
          "Los bebés y los niños también necesitan su propia ETA.",
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
    slug: "eta-o-visado",
    group: "eta",
    title: "UK ETA o visado: ¿en qué se diferencian? 2026",
    description: `Diferencia entre la UK ETA y un visado: la ETA permite estancias de hasta ${F.staySixMonths} meses para turismo, negocios y estudios cortos, pero no trabajar ni residir.`,
    h1: "UK ETA o visado: la diferencia",
    lead: "La UK ETA no es un visado, sino una autorización de viaje para nacionales de países exentos de visado. No garantiza la entrada: la decisión final la toman los agentes de fronteras.",
    card: "Qué puedes hacer con la ETA, qué no y cuándo necesitas un visado",
    sections: [
      { h: "La ETA no es un visado", blocks: [
        "La ETA es una autorización de viaje para nacionales de países exentos de visado. No garantiza la entrada en el Reino Unido: la decisión la toman los agentes de fronteras.",
        CHECK_VISA,
      ] },
      { h: `Qué puedes hacer con la ETA (máximo ${F.staySixMonths} meses)`, blocks: [
        { ul: [
          "Turismo y visitas a familiares y amigos",
          "Viajes de negocios (business)",
          "Estudios de corta duración (short-term study)",
          "Tránsito con paso por el control fronterizo",
          "Permitted paid engagement; actividades de hasta 3 meses con la Creative Worker concession",
        ] },
      ] },
      { h: "Qué NO puedes hacer con la ETA", blocks: [
        { ul: [
          `Estancias de más de ${F.staySixMonths} meses`,
          "Trabajo remunerado o no remunerado para una empresa británica o como autónomo (salvo las excepciones anteriores)",
          "Recibir fondos públicos (public funds)",
          "Residir de hecho en el Reino Unido mediante visitas frecuentes y sucesivas",
          "Celebrar o registrar un matrimonio o una unión civil (requiere el Marriage Visitor visa)",
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
    slug: "visado-de-visitante-estandar",
    group: "eta",
    title: "Standard Visitor visa del Reino Unido: cuando la ETA no basta",
    description: "Si te deniegan la UK ETA (sin recurso) o tu nacionalidad requiere visado, necesitas el Standard Visitor visa: £135, decisión en unas 3 semanas.",
    h1: "Standard Visitor visa del Reino Unido: cuando la ETA no basta",
    lead: "Si te deniegan la UK ETA (no se puede recurrir) o tu nacionalidad requiere visado, para viajar al Reino Unido tienes que solicitar un Standard Visitor visa. A continuación, los datos según GOV.UK.",
    card: "Precio, plazos y pasos del visado de visitante cuando no puedes viajar con ETA",
    sections: [
      { h: "Quién necesita un visado en lugar de la ETA", blocks: [
        { ul: [
          "Las personas cuya nacionalidad requiere visado para el Reino Unido (no pueden obtener la ETA).",
          "Las personas a las que se les ha denegado la solicitud de ETA: no se puede entrar en el Reino Unido con ETA y se necesita un visado.",
          "Comprueba qué visado necesitas con la herramienta «Check if you need a UK visa» de GOV.UK.",
        ] },
        CHECK_VISA,
      ] },
      { h: "Tasas (GOV.UK)", blocks: [
        { table: { head: ["Tipo de visado", "Tasa"], rows: [
          [`Standard Visitor (hasta ${F.staySixMonths} meses)`, "£135"],
          ["Larga duración — 2 años", "£506"],
          ["Larga duración — 5 años", "£903"],
          ["Larga duración — 10 años", "£1128"],
          ["Visado de tránsito", "£74,50"],
        ] } },
        `Los visados de larga duración permiten varias entradas, pero cada estancia está limitada a ${F.staySixMonths} meses. Importes según GOV.UK; pueden cambiar.`,
      ] },
      { h: "Plazos, validez y estancia", blocks: [
        { ul: [
          "Decisión: normalmente en un plazo de 3 semanas tras la cita en el centro de solicitud de visados.",
          `Estancia: como máximo ${F.staySixMonths} meses por visita.`,
          "Cuándo solicitarlo: como pronto, 3 meses antes del viaje.",
        ] },
      ] },
      { h: "Cómo solicitarlo (GOV.UK)", blocks: [
        { ul: [
          "1. Solicítalo en línea (puedes guardar la solicitud y terminarla más tarde).",
          "2. Pide cita en un centro de solicitud de visados.",
          "3. Acude a la cita para acreditar tu identidad, facilitar los datos biométricos (huellas dactilares y fotografía) y entregar los documentos.",
          "4. Recibirás la decisión por correo electrónico; el pasaporte se devuelve en el centro.",
        ] },
        "Prepara, entre otras cosas:",
        { ul: [
          "Pasaporte válido (durante toda la estancia)",
          "Fechas del viaje, alojamiento y coste estimado",
          "Dirección actual y tiempo que llevas viviendo en ella",
          "Ingresos anuales (si procede) y datos de la empresa en la que trabajas (si procede)",
          "Posibles antecedentes penales o de inmigración",
          "Traducciones certificadas de los documentos que no estén en inglés ni en galés",
        ] },
        { note: "Esta es una guía informativa independiente, no una web oficial. Los datos y las tasas pueden cambiar: consulta siempre la información oficial de GOV.UK antes de presentar la solicitud." },
      ] },
    ],
    faq: [
      { q: "¿Cuándo necesito un Standard Visitor visa en lugar de la ETA?", a: "Cuando tu nacionalidad requiere visado para el Reino Unido o cuando te han denegado la ETA. La denegación de la ETA no se puede recurrir: para viajar, tienes que solicitar el visado que corresponda." },
      { q: "¿Cuánto cuesta el Standard Visitor visa?", a: `Según GOV.UK, el visado de hasta ${F.staySixMonths} meses cuesta £135. Los de larga duración: £506 (2 años), £903 (5 años) y £1128 (10 años). El visado de tránsito cuesta £74,50.` },
      { q: "¿Cuánto tarda la tramitación?", a: "Normalmente recibes la decisión en un plazo de 3 semanas tras la cita en el centro de solicitud de visados." },
      { q: "¿Cuánto tiempo puedo quedarme en el Reino Unido?", a: `La estancia estándar es de ${F.staySixMonths} meses como máximo por visita.` },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "expiration": {
    slug: "caducidad-y-renovacion",
    group: "eta",
    title: "¿Cuándo caduca la UK ETA y cuándo pedir una nueva? 2026",
    description: `La UK ETA caduca a los ${F.validYears} años o con el pasaporte, lo que ocurra antes. Con pasaporte nuevo o cambio de nombre hay que pedir otra y pagar ${F.fee} de nuevo.`,
    h1: "Caducidad de la UK ETA: cuándo vence y cuándo volver a solicitarla",
    lead: `La UK ETA vale ${F.validYears} años desde su emisión o hasta que caduque el pasaporte, lo que ocurra primero. Necesitas una nueva si pasan esos ${F.validYears} años, si cambias de pasaporte o de nombre, o si cambian tus circunstancias.`,
    card: "Cuándo vence la ETA, cuándo pedir una nueva y qué pasa al renovar el pasaporte",
    sections: [
      { h: "Cuándo caduca la ETA", blocks: [
        { ul: [
          `Es válida durante ${F.validYears} años desde la fecha de emisión`,
          "Caduca junto con el pasaporte (si este vence antes)",
          "Permite varias entradas en el Reino Unido durante su validez",
          `Cada estancia no puede superar los ${F.staySixMonths} meses`,
          "La ETA está vinculada a un pasaporte concreto",
        ] },
        "Tienes el resumen de la validez en [cuánto dura la ETA](/es/validez/).",
      ] },
      { h: "¿Cuándo tienes que presentar una nueva solicitud?", blocks: [
        "Debes solicitar una nueva UK ETA en estos casos:",
        { ul: [
          `Cuando hayan pasado ${F.validYears} años desde la emisión de la ETA`,
          "Cuando tengas un pasaporte nuevo",
          "Si cambias de nombre",
          "Si cambian circunstancias que afectan a tu derecho a obtenerla",
        ] },
      ] },
      { h: "¿Puedo viajar con una ETA a punto de caducar?", blocks: [
        "La UK ETA tiene que ser válida en el momento de entrar en el Reino Unido. No hace falta que siga vigente durante toda la estancia: lo importante es que sea válida el día de llegada. Aun así, se recomienda solicitar la nueva con tiempo.",
      ] },
      { h: "¿Cómo compruebo la fecha de caducidad?", blocks: [
        "Según GOV.UK, puedes consultarlo en línea en gov.uk/eta (Check your ETA): allí ves si tienes una ETA y cuándo caduca.",
      ] },
      { h: "¿Qué pasa si cambio de pasaporte con la ETA en vigor?", blocks: [
        `La ETA está vinculada a un pasaporte concreto. Si obtienes un pasaporte nuevo (por ejemplo, porque el anterior ha caducado o por un cambio de nombre), tienes que presentar una nueva solicitud de ETA y volver a pagar la tasa de ${F.fee}. La ETA anterior deja de ser válida.`,
        { note: `Consejo: se recomienda presentar la solicitud de la UK ETA al menos ${F.decisionDays} días laborables antes del viaje previsto, para dejar margen a la tramitación.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "children-family": {
    slug: "eta-para-ninos-y-familias",
    group: "eta",
    title: "UK ETA para niños y familias: ¿los bebés la necesitan? 2026",
    description: "Los bebés y los niños también necesitan su propia UK ETA. Puedes solicitarla por otra persona con la foto de su pasaporte y de su rostro.",
    h1: "UK ETA para niños y familias",
    lead: "Cada viajero, incluidos los bebés y los niños, necesita su propia UK ETA. Puedes presentar la solicitud en nombre de otra persona.",
    card: "Cada miembro de la familia necesita su ETA, también los bebés",
    sections: [
      { h: "La solicitud para la familia", blocks: [
        { ul: [
          "Cada viajero necesita su propia ETA, incluidos los niños y los bebés",
          "Puedes solicitarla por otra persona: con la app si esa persona está presente y, si no, en línea (se necesitan la foto del pasaporte y la del rostro)",
          "Los niños incluidos en el formulario France-UK school trip travel information form no necesitan ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "eta-denegada",
    group: "eta",
    title: "¿Te han denegado la UK ETA? Qué hacer y alternativas 2026",
    description: "Si te deniegan la UK ETA, no se puede recurrir. Para viajar al Reino Unido tienes que solicitar un visado. Alternativas explicadas, 2026.",
    h1: "UK ETA denegada: ¿y ahora qué?",
    lead: "Si te deniegan la solicitud de UK ETA, no se puede recurrir (appeal). Si aun así quieres viajar al Reino Unido, tienes que solicitar un visado.",
    card: "La denegación no se recurre: el camino es solicitar un visado",
    sections: [
      { h: "Qué hacer si te deniegan la ETA", blocks: [
        { ul: [
          "No existe un procedimiento de recurso contra la denegación de la ETA",
          "Para viajar al Reino Unido hay que solicitar el visado adecuado",
          "Consulta en GOV.UK qué visado corresponde al motivo de tu viaje",
        ] },
      ] },
      { h: "Siguiente paso: el Standard Visitor visa", blocks: [
        "Tras una denegación de la ETA, el visado es la única vía para viajar al Reino Unido. Consulta el precio (£135), los plazos y el proceso en la [guía del Standard Visitor visa](/es/visado-de-visitante-estandar/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (abril de 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "errores-frecuentes",
    group: "eta",
    title: "Errores frecuentes al solicitar la UK ETA y la app oficial 2026",
    description: "Errores habituales en la UK ETA: datos que no coinciden con el pasaporte, fotos, pago y webs falsas. Usa la app oficial UK ETA o GOV.UK.",
    h1: "Errores frecuentes y la app UK ETA",
    lead: "Muchos problemas se deben a datos que no coinciden con el pasaporte. Usa siempre la app oficial «UK ETA» y revisa los datos antes de enviar la solicitud.",
    card: "Datos mal copiados, fotos, pago y webs falsas: qué evitar al solicitar",
    sections: [
      { h: "Errores que debes evitar", blocks: [
        { ul: [
          "Los datos deben coincidir exactamente con el pasaporte: las discrepancias provocan retrasos o denegaciones",
          "Fotos necesarias: el rostro y todas las páginas del pasaporte, nítidas y correctas",
          `Pago (${F.fee}): Apple Pay, Google Pay o tarjeta (Amex, JCB, Mastercard, Visa); puede pedirse la autenticación 3D Secure`,
          "Se necesita un pasaporte biométrico (con el símbolo ePassport) para leer el chip",
          "Cuidado con las webs falsas que imitan al Gobierno y cobran tasas más altas: usa solo GOV.UK",
        ] },
        "Cómo funciona la app paso a paso: [app oficial UK ETA](/es/app-oficial-uk-eta/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "web-oficial-gov-uk",
    group: "eta",
    title: "Web oficial GOV.UK de la UK ETA: cómo detectar webs falsas",
    description: `Solo GOV.UK es la fuente oficial para solicitar la UK ETA. Cómo reconocer las webs falsas y evitar fraudes que cobran más de ${F.fee}.`,
    h1: "La web oficial GOV.UK para solicitar la UK ETA",
    lead: "La UK ETA se solicita en la web oficial del Gobierno británico o en la app móvil oficial.",
    card: "Dirección oficial, señales de alerta de las webs falsas y la app oficial",
    sections: [
      { h: "Dirección oficial", blocks: [
        "Página oficial de la UK ETA: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta).",
        "El dominio .gov.uk indica que se trata de una web oficial del Gobierno británico.",
      ] },
      { h: "¿Cómo reconocer la web oficial?", blocks: [
        { ul: [
          "La dirección contiene gov.uk (dominio del Gobierno británico)",
          "La gestiona el Home Office",
          `La tasa es exactamente ${F.fee}`,
          "Tiene el diseño característico en blanco y negro de GOV.UK",
          "No cobra nada por una tramitación «más rápida»",
        ] },
      ] },
      { h: "¿Cómo reconocer una web falsa?", blocks: [
        { note: "Señales de alerta: la dirección no contiene gov.uk; la tasa es bastante superior a " + F.fee + "; promete una «aprobación garantizada»; ofrece una «tramitación más rápida»; publicidad agresiva o ventanas emergentes insistentes; no aparece el logotipo de GOV.UK." },
      ] },
      { h: "App móvil oficial", blocks: [
        "La solicitud de la UK ETA también puede presentarse con la app móvil oficial «UK ETA»:",
        { ul: [
          "iOS: busca «UK ETA» en la App Store (editor: Home Office)",
          "Android: busca «UK ETA» en Google Play (editor: Home Office)",
        ] },
      ] },
      { h: "Otras páginas oficiales útiles", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) — comprobar si necesitas visado para el Reino Unido",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) — información sobre el visado de visitante",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
    ],
  },

  "mobile-app": {
    slug: "app-oficial-uk-eta",
    group: "eta",
    title: "App oficial UK ETA: pídela desde el móvil | iOS y Android 2026",
    description: "Con la app oficial UK ETA solicitas la autorización desde el móvil: cómo descargarla, qué necesitas (pasaporte y foto) y cómo es el proceso.",
    h1: "La app móvil UK ETA",
    lead: "El Gobierno británico ofrece la app móvil oficial «UK ETA», que permite presentar la solicitud directamente desde el smartphone.",
    card: "Descarga, requisitos del móvil, escaneo NFC del pasaporte y pasos en la app",
    sections: [
      { h: "Sobre la app UK ETA", blocks: [
        "La app UK ETA es la herramienta oficial del Home Office para solicitar la autorización electrónica de viaje. Es la forma recomendada de hacerlo, porque permite escanear el pasaporte por NFC y rellenar los datos automáticamente.",
      ] },
      { h: "Disponibilidad", blocks: [
        { ul: [
          "iOS (App Store): para dispositivos Apple (iPhone). Requiere iOS 16 o posterior.",
          "Android (Google Play): para dispositivos Android. Requiere Android 12 o posterior y NFC.",
        ] },
        "Busca la app con el nombre «UK ETA», editor: Home Office.",
      ] },
      { h: "Funciones de la app", blocks: [
        { ul: [
          "Presentar una nueva solicitud de UK ETA",
          "Escanear el pasaporte biométrico (NFC + OCR)",
          "Hacerte una foto del rostro (selfi) para la verificación",
          "Consultar el estado de una solicitud ya presentada",
          "Pagar con tarjeta, Apple Pay o Google Pay",
          "Notificaciones push cuando cambia el estado",
        ] },
      ] },
      { h: "¿Cómo se solicita con la app?", blocks: [
        { ul: [
          "1. Descarga la app «UK ETA» desde la App Store o Google Play",
          "2. Crea una cuenta (correo electrónico y contraseña)",
          "3. Escanea el pasaporte biométrico (acerca el teléfono al pasaporte)",
          "4. Hazte una foto del rostro (selfi)",
          "5. Responde a las preguntas del formulario",
          `6. Paga ${F.fee}`,
          "7. Envía la solicitud y espera la decisión",
        ] },
      ] },
      { h: "Escaneo del pasaporte (NFC)", blocks: [
        "La app utiliza la tecnología NFC (Near Field Communication) para leer los datos del chip biométrico del pasaporte. Para escanearlo:",
        { ul: [
          "Abre el pasaporte por la página de la fotografía",
          "Apoya la parte trasera del teléfono sobre el pasaporte abierto",
          "Mantenlo quieto durante 5-10 segundos",
          "Espera a que la app confirme que ha leído los datos",
        ] },
      ] },
      { h: "Ventajas de la app", blocks: [
        { ul: [
          "Escaneo del pasaporte por NFC: los datos se rellenan automáticamente",
          "Solicitud más rápida que en la web",
          "Notificaciones push sobre el estado de la solicitud",
          "Seguridad biométrica (Face ID / Touch ID)",
        ] },
        { note: "Atención: asegúrate de descargar la app oficial. Busca el editor «Home Office» en la tienda de aplicaciones. Las apps falsas pueden robar tus datos personales." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "transito-por-el-reino-unido",
    group: "eta",
    title: "Tránsito por el Reino Unido: ¿necesitas la UK ETA? 2026",
    description: "¿Necesitas la UK ETA en tránsito? Sí, si pasas el control fronterizo (landside); no, si te quedas en la zona de tránsito (airside). Reglas y excepciones.",
    h1: "Tránsito por el Reino Unido: ¿necesito la UK ETA?",
    lead: "Solo necesitas la UK ETA para un tránsito si pasas el control fronterizo de un aeropuerto británico antes de continuar el viaje (landside). Si cambias de vuelo sin pasar el control (airside), no necesitas ETA. Si tienes dudas, pregunta a tu aerolínea.",
    card: "Airside o landside: cuándo hace falta la ETA en una escala en el Reino Unido",
    sections: [
      { h: "Reglas de tránsito", blocks: [
        "Desde el 2 de abril de 2025, los ciudadanos de la UE (incluidos los españoles) necesitan la UK ETA para hacer tránsito por el Reino Unido si pasan el control fronterizo del aeropuerto (landside transit). Para un tránsito sin pasar el control fronterizo (airside transit) no se necesita ETA. Si tienes dudas, pregunta a tu aerolínea.",
      ] },
      { h: "Tránsito: cuándo se exige la ETA", blocks: [
        { ul: [
          "Tránsito landside (pasas el control fronterizo): se exige ETA",
          "Tránsito airside (sin control de pasaportes): no se exige ETA",
          "Según la ficha informativa oficial (factsheet), los pasajeros en tránsito en Heathrow o Manchester que no pasan el control de pasaportes británico no necesitan ETA por ahora",
          "Confirma siempre el tipo de tránsito con tu aerolínea",
        ] },
      ] },
      { h: "Tipos de tránsito", blocks: [
        { table: { head: ["Tipo", "Qué significa", "¿ETA?"], rows: [
          ["Tránsito airside (Airside Transit)", "Cambio de vuelo en el aeropuerto sin pasar el control fronterizo. Si no sabes si pasarás el control, pregunta a tu aerolínea.", "No"],
          ["Tránsito landside (Landside Transit)", "Pasas el control fronterizo antes de continuar, por ejemplo para recoger el equipaje o dormir en un hotel. Entras formalmente en el Reino Unido.", "Sí"],
        ] } },
        "Necesitas la UK ETA si pasas el control fronterizo de un aeropuerto británico, por corta que sea la escala. Si cambias de vuelo sin pasar el control (airside), no necesitas ETA.",
      ] },
      { h: "Excepciones a la ETA en tránsito", blocks: [
        "Hay pocas excepciones a la obligación de tener ETA en tránsito:",
        { ul: [
          "Ciudadanos irlandeses (Zona Común de Viaje, CTA)",
          "Titulares de un visado británico válido",
          "Titulares de residencia permanente en el Reino Unido (settled/pre-settled status)",
        ] },
      ] },
      { h: "¿Cómo evitar necesitar la ETA para un tránsito?", blocks: [
        "Si no quieres solicitar la UK ETA, puedes elegir rutas que no pasen por el Reino Unido. Por ejemplo:",
        { ul: [
          "Vuelos directos a tu destino",
          "Escalas en países de la UE (Ámsterdam, Fráncfort, París)",
          "Escala en Dublín (Irlanda; no exige ETA)",
        ] },
        { note: `Consejo: si tu vuelo tiene escala en Londres, solicita la UK ETA al menos ${F.decisionDays} días laborables antes de salir. Si no la tienes, pueden denegarte el embarque.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (abril de 2026)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "noticias-uk-eta",
    group: "eta",
    title: `Noticias UK ETA 2026: tasa de ${F.fee} y obligatoria desde febrero`,
    description: `Novedades de la UK ETA: tasa de ${F.fee} desde el 8 de abril de 2026, obligatoria del todo desde el 25 de febrero de 2026, UE desde 2025 y nuevas tasas.`,
    h1: "Noticias sobre la UK ETA y los viajes al Reino Unido",
    lead: `Lo más reciente: desde el 8 de abril de 2026 la UK ETA cuesta ${F.fee} (antes £16) y desde el 25 de febrero de 2026 se aplica en su totalidad. Solo datos de 2025-2026 según GOV.UK y el Home Office.`,
    card: "Subida de la tasa, obligatoriedad plena, UE desde 2025 y consejos de seguridad",
    sections: [
      { h: `8 de abril de 2026: la tasa de la UK ETA sube a ${F.fee}`, blocks: [
        `Desde el 8 de abril de 2026, la UK ETA cuesta ${F.fee} en lugar de los £16 anteriores (un aumento del 25 %). Lo que cuenta es la fecha de la solicitud.`,
        `El Home Office ha confirmado la subida de la tasa de la UK ETA (Electronic Travel Authorisation) de £16 a ${F.fee}. La nueva tarifa se aplica desde el 8 de abril de 2026.`,
        `El importe depende de la fecha de la solicitud: quien la presentó antes del 8 de abril de 2026 pagó £16, y las solicitudes presentadas el 8 de abril o después cuestan ${F.fee}.`,
        `Es una subida más en la historia del sistema: la ETA empezó con una tasa de £10, después subió a £16 y ahora ha llegado a ${F.fee}. La autorización sigue siendo válida durante ${F.validYears} años y permite varias entradas (cada estancia de hasta ${F.staySixMonths} meses).`,
        "La subida afecta a los ciudadanos de más de 50 países que necesitan la UK ETA para entrar en el Reino Unido.",
        "Fuente: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "25 de febrero de 2026: la UK ETA, plenamente obligatoria", blocks: [
        "Desde el 25 de febrero de 2026, la UK ETA se aplica en su totalidad: las aerolíneas no dejan embarcar a ningún pasajero sin una autorización válida.",
        "El 25 de febrero de 2026 terminó el periodo de transición de la UK ETA. Desde esa fecha, el requisito se aplica plenamente.",
        "En la práctica, los transportistas (aerolíneas, ferris, Eurostar) no permiten embarcar a los viajeros que necesitan ETA y no la tienen. Los transportistas se exponen a multas por llevar a un pasajero sin autorización válida.",
        `Por eso conviene obtener la ETA antes del viaje, con al menos ${F.decisionDays} días laborables de antelación, ya que un pequeño número de solicitudes puede requerir una revisión adicional.`,
        "Fuente: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2 de abril de 2025: los ciudadanos de la UE necesitan la UK ETA", blocks: [
        "Desde el 2 de abril de 2025, los ciudadanos de la UE, del EEE y de Suiza tienen que obtener la UK ETA antes de viajar al Reino Unido.",
        "Desde el 2 de abril de 2025, el sistema de la UK ETA incluye a los ciudadanos de la Unión Europea, del Espacio Económico Europeo y de Suiza.",
        "La ETA se exige para viajes de turismo y de negocios, visitas a familiares y tránsitos en los que hay que pasar el control fronterizo. También se aplica a niños y bebés: cada persona presenta su propia solicitud.",
        `La autorización queda vinculada electrónicamente al pasaporte utilizado en la solicitud y permite varias entradas durante ${F.validYears} años.`,
        "Fuente: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "8 de abril de 2026: suben las tasas de inmigración del Reino Unido", blocks: [
        "Junto con la ETA, desde el 8 de abril de 2026 también subieron otras tasas del Home Office, entre ellas las de los visados de entrada, la residencia (settlement) y la nacionalidad.",
        `El 8 de abril de 2026, el Home Office actualizó su tabla oficial de tasas. Además de la subida de la ETA a ${F.fee}, aumentaron la mayoría de las demás tasas de inmigración y nacionalidad.`,
        "Afecta, entre otras, al visado de visita (visit visa), a las tasas de residencia (settlement) y a las solicitudes de nacionalidad británica.",
        "Si planeas una estancia más larga o un tipo de visado distinto de la ETA, consulta la tasa vigente en la página oficial de GOV.UK antes de presentar la solicitud.",
        "Fuente: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "1 de marzo de 2026: seguridad en tu viaje al Reino Unido", blocks: [
        "Antes de salir, conviene consultar los avisos de seguridad vigentes y asegurarse de que el pasaporte y la ETA son válidos.",
        "El Reino Unido es un destino popular y, en general, seguro, pero antes de cada viaje conviene consultar los avisos oficiales actualizados.",
        "Antes de viajar, asegúrate de que el pasaporte es válido durante toda la estancia, de que tienes una UK ETA válida vinculada a ese pasaporte y de que cuentas con un seguro de viaje.",
        "La información actualizada sobre la situación y el nivel de amenaza la publican fuentes oficiales: el Gobierno británico (GOV.UK) y las representaciones diplomáticas correspondientes. En caso de emergencia en el Reino Unido, el número es el 999.",
        "Fuente: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
