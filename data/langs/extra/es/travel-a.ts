import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（es・travel-a）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "entry-and-visa": {
    slug: "entrada-y-visado",
    group: "travel",
    hub: true,
    title: "Entrada al Reino Unido y visado: guía 2026",
    description: `Normas para entrar al Reino Unido: UK ETA para estancias de hasta ${F.staySixMonths} meses, cuándo hace falta visado, control fronterizo (eGates), documentos y viajes con niños.`,
    h1: "Entrada al Reino Unido y visado",
    lead: "Guía completa de las normas de entrada al Reino Unido: cuándo basta con una UK ETA, cuándo necesitas visado, cómo funciona el control fronterizo y qué documentos conviene preparar.",
    card: "ETA o visado, control fronterizo, documentos y viajes con menores",
    sections: [
      { h: `¿ETA o visado? Estancias de hasta ${F.staySixMonths} meses`, blocks: [
        `Para turismo, negocios, visitas familiares o tránsito, en estancias de hasta ${F.staySixMonths} meses, los ciudadanos de la UE —también los españoles— no necesitan visado: basta con una UK ETA (Electronic Travel Authorisation). La solicitud se hace en línea y la mayoría recibe una decisión automática en pocos minutos, pero conviene solicitarla al menos ${F.decisionDays} días laborables antes del viaje, porque algunas solicitudes pueden requerir una revisión adicional.`,
        `Una ETA cuesta ${F.fee}, es válida ${F.validYears} años y permite varias entradas. Más información en [Qué es la UK ETA](/es/que-es-la-eta/).`,
        "Si tienes otra nacionalidad (por ejemplo, de un país de América Latina), comprueba si necesitas ETA o visado con la herramienta oficial [GOV.UK: Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
      ] },
      { h: "Cuándo necesitas visado", blocks: [
        `Necesitas un visado británico para estancias de más de ${F.staySixMonths} meses y para viajes de estudios de larga duración, trabajo o residencia. Los tipos más habituales son:`,
        { ul: [
          "Visado de estudiante: estudios de larga duración (normalmente de 2 a 5 años, según la formación).",
          "Visado de trabajo: para trabajar en el Reino Unido; el tipo depende de la oferta y de tu cualificación.",
          "Visado familiar: para reunirte con un familiar que vive en el Reino Unido.",
          "Youth Mobility Scheme: para jóvenes de determinados países (estancia de hasta 2 años).",
        ] },
      ] },
      { h: "Control fronterizo: eGates y control manual", blocks: [
        "En los aeropuertos británicos, el control fronterizo se hace en las puertas automáticas eGate (con pasaporte biométrico) o en un mostrador atendido por un agente de fronteras. Las eGates agilizan el control de pasaportes; si surgen dudas sobre el motivo del viaje, puede que tengas que hablar con un agente. Quién puede usar las puertas automáticas y cómo se pasan, paso a paso, lo explicamos en [Control de pasaportes y eGates](/es/control-de-pasaportes-egates/).",
        "Después del control de pasaportes viene la aduana: qué alimentos y productos puedes llevar se explica en [Aduana y franquicias](/es/aduana-reino-unido/).",
      ] },
      { h: "Documentos necesarios", blocks: [
        { ul: [
          "Pasaporte válido durante toda la estancia (el documento nacional de identidad no se acepta desde octubre de 2021).",
          "UK ETA vinculada a ese pasaporte (o el visado correspondiente si la estancia es más larga).",
          "Documentación de apoyo: pueden comprobar la reserva de alojamiento, el billete de vuelta y los medios económicos para la estancia.",
        ] },
      ] },
      { h: "Viajar con menores (menores de 18 años)", blocks: [
        "Cada persona necesita su propia UK ETA, sea cual sea su edad, también los bebés y los niños. A los menores que viajan sin uno o sin ninguno de sus padres pueden pedirles un documento que acredite el consentimiento de quien tiene la custodia para el viaje. Es recomendable llevar el certificado de nacimiento o una autorización por escrito (en inglés). Más detalles en [Viajar con niños al Reino Unido](/es/viajar-con-ninos/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "passport-requirements": {
    slug: "requisitos-del-pasaporte",
    group: "travel",
    title: "Pasaporte para el Reino Unido 2026: válido toda la estancia",
    description: "Para ir al Reino Unido, los españoles y demás ciudadanos de la UE necesitan un pasaporte válido toda la estancia. El DNI solo sirve en casos concretos.",
    h1: "Pasaporte para viajar al Reino Unido: validez y ETA",
    lead: `Para viajar a Inglaterra y al resto del Reino Unido, como español u otro ciudadano de la UE necesitas un pasaporte válido durante toda la estancia. El documento nacional de identidad solo sirve en casos concretos, por ejemplo si tienes settled o pre-settled status. Además, el pasaporte está vinculado a tu ETA (${F.fee}).`,
    card: "Validez del pasaporte, vínculo con la ETA y pasaporte propio para cada viajero",
    sections: [
      { h: "Pasaporte válido durante toda la estancia", blocks: [
        "Para visitar el Reino Unido necesitas un pasaporte válido que, por regla general, debe estar en vigor durante toda tu estancia.",
        "Para muchas nacionalidades no suele exigirse ningún margen adicional, como que el pasaporte siga siendo válido seis meses después de la entrada. Aun así, los requisitos pueden variar según la nacionalidad, así que comprueba los de tu país en GOV.UK antes de viajar, por ejemplo con la herramienta [GOV.UK: Check if you need a UK visa](https://www.gov.uk/check-uk-visa).",
      ] },
      { h: "La ETA está vinculada al pasaporte", blocks: [
        "La ETA queda vinculada al pasaporte que usaste al solicitarla, y debes viajar con ese mismo pasaporte.",
        "Si renuevas o cambias de pasaporte, por regla general tendrás que solicitar una ETA nueva para el pasaporte nuevo. Por eso conviene revisar la validez del pasaporte con tiempo antes de pedir la ETA.",
      ] },
      { h: "Cada viajero necesita su propio pasaporte, también los bebés", blocks: [
        "Cada viajero, también los bebés y los niños, necesita por regla general su propio pasaporte para viajar al Reino Unido, además de su propia ETA. Más información en [Viajar con niños al Reino Unido](/es/viajar-con-ninos/). Como tramitar el pasaporte de un menor puede llevar tiempo, es mejor empezar con antelación.",
      ] },
      { h: "Varios pasaportes o doble nacionalidad", blocks: [
        "Si tienes doble nacionalidad o varios pasaportes, por regla general entras con el pasaporte al que está vinculada tu ETA. Asegúrate de que la ETA esté asociada al pasaporte con el que realmente vas a viajar.",
      ] },
      { h: "Próximos pasos antes del viaje", blocks: [
        "Con el pasaporte en regla, puedes [solicitar tu UK ETA](/es/como-solicitarla/) y seguir la tramitación en [Consultar el estado de la ETA](/es/consultar-estado/). A la llegada pasarás por el [control de pasaportes y las eGates](/es/control-de-pasaportes-egates/), y lo que puedes llevar contigo se explica en la guía de la [aduana del Reino Unido](/es/aduana-reino-unido/). Las normas generales de entrada están en [Entrada al Reino Unido y visado](/es/entrada-y-visado/); si haces escala, consulta también las normas de tránsito por el Reino Unido.",
      ] },
    ],
    faq: [
      { q: "¿Cuánto tiempo debe ser válido el pasaporte para viajar al Reino Unido?", a: "Para visitar el Reino Unido necesitas, por regla general, un pasaporte válido durante toda tu estancia. Para muchas nacionalidades no suele exigirse un margen adicional, como seis meses de validez después de la entrada, pero los requisitos pueden variar. Comprueba los de tu país en GOV.UK antes de viajar." },
      { q: "¿A qué pasaporte está vinculada la ETA?", a: "La ETA está vinculada al pasaporte que usaste al solicitarla, y viajas con ese mismo pasaporte. Si lo renuevas o lo cambias, por regla general debes solicitar una ETA nueva para el pasaporte nuevo. Si tienes doble nacionalidad y varios pasaportes, entras con el pasaporte al que está vinculada la ETA." },
      { q: "¿Necesitan los niños su propio pasaporte para ir al Reino Unido?", a: "Todos los viajeros, también los bebés, necesitan por regla general su propio pasaporte para viajar al Reino Unido, y cada uno necesita además su propia ETA. Revisa los requisitos con tiempo, porque tramitar el pasaporte de un menor puede llevar un tiempo." },
    ],
    sources: [
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "uk-border-egates": {
    slug: "control-de-pasaportes-egates",
    group: "travel",
    title: "Control de pasaportes en el Reino Unido: eGates en Londres (2026)",
    description: "Con pasaporte de la UE y una UK ETA válida puedes usar las eGates: sin preguntas ni sello. Desde el 8 de julio de 2026, también los niños a partir de 8 años.",
    h1: "Control de pasaportes en el Reino Unido y eGates",
    lead: "Quién puede usar las puertas automáticas eGate en los aeropuertos de Londres, cómo se pasan paso a paso, qué puede preguntarte el agente de fronteras en el mostrador y qué cambia para las familias desde el 8 de julio de 2026.",
    card: "Quién puede usar las eGates, cómo funcionan y qué cambia para los niños",
    sections: [
      { h: "Novedad desde el 8 de julio de 2026: eGates a partir de 8 años", blocks: [
        "Desde el 8 de julio de 2026, los niños de 8 años o más pueden usar las eGates; antes el límite era de 10 años. Se aplican dos condiciones: el niño debe medir al menos 120 cm, y los menores de entre 8 y 17 años deben viajar acompañados de un adulto.",
        "Para muchas familias, esto significa que todo el grupo puede pasar ya por las puertas automáticas, sin hacer cola en el mostrador del agente de fronteras.",
      ] },
      { h: "Quién puede usar las eGates", blocks: [
        "Las eGates están abiertas a los titulares de pasaportes de:",
        { ul: [
          "todos los países de la UE (incluida España),",
          "Islandia, Liechtenstein, Noruega y Suiza,",
          "Australia, Canadá, Japón, Nueva Zelanda, Singapur, Corea del Sur y Estados Unidos.",
        ] },
        "La condición es tener una autorización de viaje válida; para los viajeros españoles, eso significa en la práctica una UK ETA válida (o un eVisa). Si aún no la tienes, consulta [cómo solicitar la UK ETA](/es/como-solicitarla/).",
        "En el Reino Unido hay más de 290 eGates en 15 aeropuertos y terminales de tren, entre ellos los [aeropuertos de Londres](/es/aeropuertos-de-londres/) como Heathrow.",
      ] },
      { h: "Cómo funciona una eGate: sin preguntas ni sello", blocks: [
        { ul: [
          "Coloca tu pasaporte biométrico, abierto por la página de la foto, sobre el lector.",
          "Mira a la cámara: el sistema compara tu cara con la foto del pasaporte.",
          "La puerta se abre y pasas, sin hablar con ningún agente y sin sello de entrada en el pasaporte.",
        ] },
        "Si la puerta no te reconoce (por ejemplo, porque el pasaporte está desgastado), simplemente te remiten al mostrador del agente de fronteras.",
      ] },
      { h: "Control manual: las 5 preguntas posibles", blocks: [
        "Si pasas por el control de un agente de fronteras, pueden preguntarte por:",
        { ul: [
          "El motivo del viaje: turismo, negocios, visita a familiares.",
          "La duración de la estancia: cuántos días te quedas.",
          "El alojamiento: la dirección del hotel o de quien te aloja.",
          "El viaje de vuelta: fecha y reserva del regreso.",
          "Los medios económicos: dinero suficiente para la estancia.",
        ] },
      ] },
      { h: "Documentos necesarios", blocks: [
        { ul: [
          "Pasaporte biométrico válido durante toda la estancia.",
          "UK ETA válida: está vinculada electrónicamente al pasaporte y no hace falta imprimirla; aun así, conviene guardar el correo de aprobación.",
        ] },
        "Si tienes dudas sobre tu solicitud, consulta cómo [comprobar el estado de la ETA](/es/consultar-estado/). Para las escalas en el Reino Unido se aplican normas específicas de tránsito.",
      ] },
      { h: "Familias con niños: lo que debes saber", blocks: [
        { ul: [
          "Los niños a partir de 8 años (y de al menos 120 cm) usan las eGates; los de entre 8 y 17 años, siempre acompañados de un adulto.",
          "Los menores de 8 años pasan por el mostrador del agente de fronteras junto con sus padres.",
          "Cada niño, también los bebés, necesita su propia UK ETA.",
          "Las normas generales de entrada están en [Entrada al Reino Unido y visado](/es/entrada-y-visado/).",
        ] },
      ] },
      { h: "Después del control de pasaportes: la aduana", blocks: [
        "Tras el control de pasaportes llega el control de aduanas. Ten en cuenta que está prohibido llevar al Reino Unido carne y productos lácteos procedentes de la UE. Más información en [Aduana y franquicias](/es/aduana-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Puedo usar las eGates con pasaporte español?", a: "Sí. Las eGates están abiertas a los titulares de pasaportes de todos los países de la UE (además de Islandia, Liechtenstein, Noruega y Suiza, y de Australia, Canadá, Japón, Nueva Zelanda, Singapur, Corea del Sur y Estados Unidos), siempre que tengas una autorización de viaje válida, como la UK ETA o un eVisa." },
      { q: "¿A partir de qué edad pueden los niños usar las eGates?", a: "Desde el 8 de julio de 2026, los niños a partir de 8 años pueden usar las eGates (antes, a partir de 10). El niño debe medir al menos 120 cm, y los menores de entre 8 y 17 años deben ir acompañados de un adulto." },
      { q: "¿Me sellan el pasaporte al pasar por una eGate?", a: "No. Al pasar por una eGate ningún agente te hace preguntas y no se pone sello de entrada en el pasaporte. Tu UK ETA está vinculada electrónicamente a tu pasaporte." },
    ],
    sources: [
      { label: "GOV.UK – Faster travel through the UK border", url: "https://www.gov.uk/government/publications/getting-through-the-uk-border-faster/faster-travel-through-the-uk-border" },
    ],
  },

  "uk-customs-rules": {
    slug: "aduana-reino-unido",
    group: "travel",
    title: "Qué puedes llevar al Reino Unido: aduana y franquicias (2026)",
    description: "Al Reino Unido sin impuestos: 4 l de licor, 18 l de vino, 42 l de cerveza, 200 cigarrillos. Desde la UE, ni carne ni lácteos. Efectivo: declarar desde £10 000.",
    h1: "Qué puedes llevar al Reino Unido: la aduana británica",
    lead: "La regla más importante: desde la UE no puedes llevar carne ni productos lácteos al Reino Unido. Aquí verás qué alimentos están permitidos, la excepción para la alimentación infantil, las franquicias de alcohol y tabaco y cuándo hay que declarar el efectivo.",
    card: "Carne y lácteos prohibidos desde la UE, franquicias de alcohol y tabaco, efectivo",
    sections: [
      { h: "Regla n.º 1: nada de carne ni lácteos desde la UE", blocks: [
        "Desde la UE está prohibido llevar carne y productos lácteos al Reino Unido (Inglaterra, Escocia, Gales). La prohibición incluye:",
        { ul: [
          "Productos lácteos: queso, leche, mantequilla, yogur.",
          "Carne: de cerdo, vacuno, ovino, caprino y caza, y los productos elaborados con ella, incluidos salami, embutidos, jamón y bocadillos con carne o queso.",
        ] },
        "La norma se aplica también a pequeñas cantidades en el equipaje de mano: un bocadillo de jamón comprado en el aeropuerto debe comerse o tirarse antes del control.",
      ] },
      { h: "La excepción: alimentación infantil (hasta 2 kg)", blocks: [
        "La leche de fórmula, la alimentación infantil y los alimentos especiales para uso médico están permitidos hasta 2 kg por persona, siempre que estén en su envase de marca sin abrir y no necesiten refrigeración antes de consumirse.",
      ] },
      { h: "Alimentos que puedes llevar sin problema", blocks: [
        { ul: [
          "Pan (pero no bocadillos con carne o lácteos).",
          "Pasteles sin nata fresca, galletas y chocolate.",
          "Pasta y sopas envasadas.",
          "Pescado, huevos y miel: permitidos para consumo propio.",
        ] },
        "Si tienes dudas, comprueba el producto concreto en GOV.UK antes de salir: las normas varían según la categoría de alimento.",
      ] },
      { h: "Alcohol y tabaco: franquicias libres de impuestos al llegar al Reino Unido", blocks: [
        { table: {
          head: ["Categoría", "Franquicia libre de impuestos"],
          rows: [
            ["Cerveza", "42 litros"],
            ["Vino sin gas", "18 litros"],
            ["Bebidas espirituosas (más de 22 %)", "4 litros o 9 litros de bebidas de hasta 22 %"],
            ["Cigarrillos", "200 unidades (o 50 puros o 250 g de tabaco)"],
            ["Otros productos (regalos, recuerdos)", "hasta £390 (£270 si llegas en avión o barco privado)"],
          ],
        } },
        "Todo lo que supere las franquicias debe declararse y pagar los impuestos correspondientes. Estas son las franquicias del Reino Unido a la llegada; para la vuelta a casa se aplican las normas de aduanas de tu país.",
      ] },
      { h: "Efectivo: obligación de declarar desde £10 000", blocks: [
        "Si llevas £10 000 o más (en efectivo, incluida la cantidad equivalente en otras monedas), estás obligado a declararlo: en línea antes del viaje o en el canal rojo a la llegada. No declararlo puede suponer el decomiso de toda la cantidad y una multa de hasta £5 000.",
      ] },
      { h: "Sanciones y cómo es el control", blocks: [
        "Los alimentos prohibidos pueden ser decomisados en la frontera y, si superas sin declarar las franquicias de alcohol y tabaco, los productos pueden retenerse y pueden imponerse sanciones. Lo más seguro es usar el canal rojo si tienes algo que declarar.",
        "El control de aduanas viene después del control de pasaportes: consulta cómo funcionan el [control de pasaportes y las eGates](/es/control-de-pasaportes-egates/). Y recuerda que para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida; puedes ver el estado de tu solicitud en [Consultar el estado de la ETA](/es/consultar-estado/). Las normas generales de entrada están en [Entrada al Reino Unido y visado](/es/entrada-y-visado/), y para las escalas se aplican las normas de tránsito por el Reino Unido.",
      ] },
    ],
    faq: [
      { q: "¿Puedo llevar queso o embutidos desde España al Reino Unido?", a: "No. Desde la UE está prohibido llevar al Reino Unido carne (de cerdo, vacuno, ovino, caprino y caza) y productos cárnicos, así como productos lácteos (queso, leche, mantequilla, yogur). Los productos pueden ser decomisados en la frontera." },
      { q: "¿Cuánto tabaco y alcohol puedo llevar sin impuestos al Reino Unido?", a: "200 cigarrillos (o 50 puros o 250 g de tabaco), 42 litros de cerveza, 18 litros de vino sin gas y 4 litros de bebidas espirituosas de más de 22 % o 9 litros de bebidas alcohólicas de hasta 22 %." },
      { q: "¿Tengo que declarar el efectivo al entrar en el Reino Unido?", a: "Sí, si llevas £10 000 o más. La declaración se hace en línea con antelación o en el canal rojo a la llegada. No declararlo puede suponer el decomiso de toda la cantidad y una multa de hasta £5 000." },
    ],
    sources: [
      { label: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-into-great-britain" },
      { label: "GOV.UK – Bringing goods into the UK", url: "https://www.gov.uk/bringing-goods-into-uk-personal-use/arriving-in-Great-Britain" },
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "bringing-medicines": {
    slug: "llevar-medicamentos",
    group: "travel",
    title: "Llevar medicamentos al Reino Unido: normas y justificantes (2026)",
    description: "Lleva al Reino Unido hasta tres meses de tus medicamentos y prueba de que te los recetaron. Los que tienen sustancias controladas pueden requerir licencia.",
    h1: "Llevar medicamentos al Reino Unido",
    lead: "Puedes llevar tus propios medicamentos al Reino Unido —hasta la cantidad para tres meses— siempre que puedas demostrar que te los han recetado a ti. Aquí verás cuánto puedes llevar, qué justificantes necesitas, qué ocurre con los medicamentos con sustancias controladas y las normas de líquidos en el equipaje de mano.",
    card: "Hasta tres meses de tratamiento, receta o informe médico y sustancias controladas",
    sections: [
      { h: "Hasta tres meses de tratamiento", blocks: [
        "Puedes llevar al Reino Unido la cantidad de tus propios medicamentos para un máximo de tres meses, para uso personal. Conviene que puedas acreditar que te los han recetado a ti.",
        "Guarda los medicamentos en su envase original siempre que sea posible. Así es más fácil demostrar qué son y que son tuyos si te preguntan en la frontera.",
      ] },
      { h: "Informe médico y receta", blocks: [
        "Lleva un informe médico o una receta como prueba de que el medicamento se te ha prescrito a ti. El documento debería incluir:",
        { ul: [
          "El nombre del medicamento.",
          "La dosis y la concentración.",
          "Con qué frecuencia lo tomas.",
          "La firma o el número de colegiado del médico que lo receta.",
        ] },
        "Mantén los medicamentos en su envase original cuando sea posible, para que los datos del envase coincidan con el informe.",
      ] },
      { h: "Medicamentos con sustancias controladas (controlled drugs)", blocks: [
        "Algunos medicamentos contienen sustancias controladas (controlled drugs) y están sujetos a normas adicionales. Pregunta a tu médico o farmacéutico si es el caso de tus medicamentos.",
        "Si es así, puede que necesites una licencia personal (personal licence). En ese caso, debes contactar con el Home Office británico (Drug and Firearms Licensing Unit) al menos 15 días laborables antes del viaje.",
        "Los medicamentos clasificados en la Schedule 1 no pueden introducirse sin licencia.",
      ] },
      { h: "Líquidos y jeringuillas en el equipaje de mano", blocks: [
        "Los líquidos y las jeringuillas en el equipaje de mano están sujetos a las normas de seguridad habituales de los aeropuertos. Si llevas medicamentos líquidos o material de inyección, conviene tener el informe a mano también en el control de seguridad. Más información en nuestra guía sobre [líquidos y control de seguridad en el aeropuerto](/es/liquidos-equipaje-de-mano/).",
      ] },
      { h: "Atención médica en el Reino Unido", blocks: [
        "Si durante tu estancia necesitas atención médica o nuevos medicamentos, te será útil saber cómo funciona la sanidad pública británica (NHS).",
      ] },
    ],
    faq: [
      { q: "¿Puedo llevar mis medicamentos al Reino Unido?", a: "Sí, puedes llevar la cantidad de tus propios medicamentos para un máximo de tres meses, para uso personal. Lleva una prueba de que te los han recetado y, a ser posible, guárdalos en su envase original." },
      { q: "¿Qué documentos necesito para llevar medicamentos?", a: "Lleva un informe médico o una receta con el nombre del medicamento, la dosis y la concentración, la frecuencia con que lo tomas y la firma o el número de colegiado del médico que lo receta. Mantén los medicamentos en su envase original cuando sea posible." },
      { q: "¿Qué ocurre con los medicamentos que contienen sustancias controladas?", a: "Algunos medicamentos contienen sustancias controladas (controlled drugs) y están sujetos a normas adicionales. Pregunta a tu médico o farmacéutico si afecta a los tuyos. Si es así, puede que necesites una licencia personal y debes contactar con el Home Office británico al menos 15 días laborables antes del viaje." },
    ],
    sources: [
      { label: "GOV.UK – Take medicine in or out of the UK", url: "https://www.gov.uk/take-medicine-in-or-out-uk" },
      { label: "GOV.UK – Bringing medicine containing a controlled drug into the UK", url: "https://www.gov.uk/travelling-controlled-drugs" },
    ],
  },

  "airport-security-liquids": {
    slug: "liquidos-equipaje-de-mano",
    group: "travel",
    title: "Líquidos en el equipaje de mano en el Reino Unido: 100 ml (2026)",
    description: "Muchos aeropuertos británicos admiten 100 ml por envase en cabina (bolsa de 1 litro); algunos, hasta 2 litros gracias a escáneres CT. Revisa tu aeropuerto.",
    h1: "Líquidos en el equipaje de mano y control de seguridad en aeropuertos británicos",
    lead: "En muchos aeropuertos británicos se aplica a menudo un límite de 100 ml por envase para los líquidos del equipaje de mano. Algunos aeropuertos ya permiten cantidades mayores gracias a nuevos escáneres, pero las normas varían: aquí verás lo que suele aplicarse y por qué conviene comprobar tu aeropuerto de salida.",
    card: "Regla de los 100 ml, escáneres CT, alimentación infantil y medicamentos",
    sections: [
      { h: "La regla de los 100 ml y la bolsa transparente", blocks: [
        "En muchos aeropuertos británicos se aplica a menudo que los líquidos del equipaje de mano vayan en envases de 100 ml como máximo cada uno. Un envase con capacidad para más de 100 ml no suele aceptarse aunque no esté lleno.",
        { ul: [
          "Los envases suelen tener que ir en una bolsa transparente y con cierre reutilizable de 1 litro como máximo.",
          "La norma suele ser una bolsa por persona.",
          "También suelen contar como líquidos los geles, pastas, cremas, aerosoles y productos similares.",
        ] },
        "Como los detalles pueden variar entre aeropuertos, conviene comprobar las normas vigentes en tu aeropuerto de salida antes del viaje.",
      ] },
      { h: "Nuevos escáneres CT: en algunos aeropuertos el límite puede ser mayor", blocks: [
        "Algunos aeropuertos británicos han instalado nuevos escáneres CT y, con ello, pueden permitir líquidos en envases de hasta 2 litros. Sin embargo, la implantación avanza a ritmos distintos y la situación varía de un aeropuerto a otro.",
        "Incluso a mediados de 2026, el límite de 100 ml sigue aplicándose en muchos aeropuertos. Por eso, no des por hecho que rige el límite mayor: comprueba siempre las normas más recientes del aeropuerto desde el que sales y, si puedes, también las del aeropuerto de vuelta.",
      ] },
      { h: "Excepciones: alimentación infantil, leche materna y medicamentos", blocks: [
        "La alimentación infantil, la leche de fórmula y los medicamentos imprescindibles pueden llevarse en algunos casos en cantidades superiores al límite habitual de líquidos. Normalmente, eso sí, tendrás que declararlos al personal del control.",
        "Las cantidades y condiciones pueden variar entre aeropuertos. Conviene tener a mano la receta u otra documentación y comprobar con antelación qué se aplica en tu aeropuerto. Si viajas con niños, consulta también nuestra guía sobre [viajar con niños al Reino Unido](/es/viajar-con-ninos/).",
      ] },
      { h: "Dispositivos electrónicos y objetos grandes", blocks: [
        "Los dispositivos electrónicos grandes, como los portátiles, pueden tener que sacarse de la maleta y colocarse aparte en la bandeja, según indique el personal. Esto también puede variar según el aeropuerto y el equipo que use el control, así que sigue las instrucciones que te den allí.",
      ] },
      { h: "Cómo prepararte para el control", blocks: [
        "Para que el control sea más ágil, ayuda meter los líquidos en la bolsa transparente ya desde casa, llevar la alimentación infantil y los medicamentos a mano para poder declararlos y comprobar con antelación las normas vigentes en tu aeropuerto.",
        "El control de seguridad se hace antes del control de pasaportes: consulta cómo funcionan el [control de pasaportes y las eGates](/es/control-de-pasaportes-egates/) y qué puedes llevar al pasar por la [aduana del Reino Unido](/es/aduana-reino-unido/). No olvides que para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida; el estado lo ves en [Consultar el estado de la ETA](/es/consultar-estado/). Las normas generales de entrada están en [Entrada al Reino Unido y visado](/es/entrada-y-visado/), y para las escalas se aplican las normas de tránsito por el Reino Unido.",
      ] },
    ],
    faq: [
      { q: "¿Cuánto líquido se puede llevar en el equipaje de mano en un aeropuerto británico?", a: "En muchos aeropuertos británicos se aplica a menudo un límite de 100 ml por envase, todos dentro de una bolsa transparente y con cierre reutilizable de 1 litro como máximo, una bolsa por persona. Algunos aeropuertos han instalado nuevos escáneres CT y pueden permitir hasta 2 litros, pero la implantación varía entre aeropuertos. Comprueba siempre las normas vigentes en tu aeropuerto de salida antes del viaje." },
      { q: "¿Se puede pasar agua por el control de seguridad?", a: "El agua y otras bebidas compradas después del control de seguridad suelen poder llevarse a bordo. En cambio, las bebidas que llevas antes del control suelen estar sujetas a las normas de líquidos y puede que tengas que tirarlas si superan el límite. Las normas pueden variar entre aeropuertos, así que comprueba qué se aplica en el tuyo." },
      { q: "¿Se puede pasar leche infantil y medicamentos por el control?", a: "La alimentación infantil, la leche de fórmula y los medicamentos imprescindibles pueden llevarse en algunos casos en cantidades superiores al límite habitual de líquidos, siempre que los declares al personal del control. Las cantidades y condiciones pueden variar, así que consulta antes con tu aeropuerto y ten a mano la receta o la documentación que corresponda." },
    ],
    sources: [
      { label: "GOV.UK – Hand luggage restrictions: liquids", url: "https://www.gov.uk/hand-luggage-restrictions/liquids" },
      { label: "GOV.UK – Hand luggage restrictions at UK airports", url: "https://www.gov.uk/hand-luggage-restrictions" },
    ],
  },

  "smoking-alcohol-rules": {
    slug: "alcohol-y-tabaco",
    group: "travel",
    title: "Edad para el alcohol en Inglaterra: 18 años; tabaco y normas 2026",
    description: "En Inglaterra hay que tener 18 años para comprar alcohol o beber en un pub. Con 16 o 17 años y con un adulto, puedes tomar cerveza, vino o sidra en una comida.",
    h1: "Edad para beber alcohol en Inglaterra: tabaco y normas",
    lead: "En Inglaterra tienes que tener 18 años para comprar alcohol o beberlo en un pub o restaurante. Si tienes 16 o 17 años y vas acompañado de un adulto, puedes beber (pero no comprar) cerveza, vino o sidra con una comida (GOV.UK). En el Reino Unido la edad mínima para comprar alcohol y tabaco es de 18 años, y está prohibido fumar en espacios públicos cerrados.",
    card: "18 años para alcohol y tabaco, prohibición de fumar en interiores y vapeo",
    sections: [
      { h: "¿Cuál es la edad mínima para el alcohol en Inglaterra? 18 años para alcohol y tabaco", blocks: [
        "En el Reino Unido debes tener al menos 18 años para comprar alcohol y tabaco. El límite de edad se aplica en tiendas, bares, restaurantes y otros puntos de venta.",
        "Las tiendas y los locales pueden pedirte un documento que acredite tu edad, aunque parezcas mayor. Por eso conviene llevar un documento de identidad válido si piensas comprar alcohol o tabaco.",
      ] },
      { h: "Prohibido fumar en espacios públicos cerrados", blocks: [
        "Desde que se aprobó la ley antitabaco de 2007 (Smoke-free law), está prohibido fumar en todos los espacios públicos cerrados, en los lugares de trabajo y en el transporte público.",
        "Esto significa que los pubs, restaurantes y estaciones son espacios sin humo en su interior. Solo se puede fumar en zonas exteriores habilitadas para ello.",
        { ul: [
          "Interiores: prohibido fumar en espacios públicos cerrados y lugares de trabajo.",
          "Transporte público: sin humo.",
          "Permitido: solo en zonas exteriores habilitadas.",
        ] },
      ] },
      { h: "Vapeo y cigarrillos electrónicos", blocks: [
        "Las normas sobre vapeo y cigarrillos electrónicos varían según el lugar. En muchos sitios no está permitido en interiores, pero puede cambiar de un local o establecimiento a otro. Sigue siempre la señalización y las indicaciones del personal del lugar donde estés.",
      ] },
      { h: "Alcohol al volante y alcohol en la vía pública", blocks: [
        "Conducir bajo los efectos del alcohol se persigue con rigor en el Reino Unido, con límites y sanciones establecidos. Si piensas conducir, conviene que conozcas las normas de conducción en el Reino Unido.",
        "Además, algunas autoridades locales han establecido zonas con restricciones para beber alcohol en la vía pública. Presta atención a la señalización local que indique estas limitaciones.",
      ] },
      { h: "Entrada de alcohol y tabaco en el país", blocks: [
        "Para la cantidad de alcohol y tabaco que puedes introducir en el país se aplican franquicias aduaneras específicas (libres de impuestos). Las explicamos en detalle en nuestra guía de [aduana y franquicias](/es/aduana-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Cuál es la edad mínima para beber alcohol en Inglaterra?", a: "En Inglaterra tienes que tener 18 años para comprar alcohol o beberlo en un pub o restaurante. Si tienes 16 o 17 años y vas acompañado de un adulto, puedes beber (pero no comprar) cerveza, vino o sidra con una comida (GOV.UK)." },
      { q: "¿Qué edad hay que tener para comprar alcohol y tabaco en el Reino Unido?", a: "Debes tener al menos 18 años para comprar alcohol y tabaco en el Reino Unido. Las tiendas y los bares pueden pedirte un documento que acredite tu edad." },
      { q: "¿Se puede fumar en pubs y tiendas?", a: "No. Está prohibido fumar en todos los espacios públicos cerrados, en los lugares de trabajo y en el transporte público. Los pubs, restaurantes y estaciones son espacios sin humo en su interior: solo se puede fumar en zonas exteriores habilitadas." },
      { q: "¿Puedo usar cigarrillo electrónico (vapear)?", a: "Las normas sobre cigarrillos electrónicos y vapeo varían según el lugar. A menudo no está permitido en interiores. Sigue siempre la señalización y las indicaciones del personal." },
    ],
    sources: [
      { label: "GOV.UK", url: "https://www.gov.uk/" },
    ],
  },

  "travelling-with-children": {
    slug: "viajar-con-ninos",
    group: "travel",
    title: "Viajar con niños al Reino Unido: ETA y pasaporte (2026)",
    description: "Todos, también los bebés, necesitan su propia ETA y su propio pasaporte para el Reino Unido. Border Force puede pedir prueba del parentesco: cómo prepararlo.",
    h1: "Viajar con niños al Reino Unido",
    lead: "Por qué cada niño necesita su propia ETA y su propio pasaporte, cuándo puede Border Force pedirte una prueba del parentesco y qué documentos conviene llevar para entrar sin contratiempos con niños.",
    card: "Una ETA y un pasaporte por niño, y pruebas de parentesco en la frontera",
    sections: [
      { h: "Cada viajero necesita su propia ETA y su propio pasaporte", blocks: [
        "Todos los viajeros, incluidos los bebés, necesitan su propia ETA y su propio pasaporte. Un niño no puede viajar con la ETA de uno de sus padres: se aplica una ETA por persona.",
      ] },
      { h: "Border Force puede pedir una prueba del parentesco", blocks: [
        "Cuando viajas con niños, Border Force (el control fronterizo) puede pedirte una prueba de vuestra relación, sobre todo si tenéis apellidos distintos o si no eres el padre o la madre del niño. Son pruebas válidas:",
        { ul: [
          "El certificado de nacimiento o de adopción.",
          "El certificado de matrimonio o de divorcio (si eres el padre o la madre pero tienes otro apellido).",
          "Una carta de consentimiento (consent letter) del padre o la madre (si no eres el progenitor del niño).",
        ] },
      ] },
      { h: "Lleva los documentos contigo", blocks: [
        "También en viajes futuros conviene llevar estas pruebas del parentesco. Así la entrada será más ágil si te las piden en el control fronterizo.",
      ] },
      { h: "Antes de la entrada, ten en cuenta", blocks: [
        "Solicita una [UK ETA](/es/como-solicitarla/) para cada miembro de la familia y sigue la solicitud en [Consultar el estado de la ETA](/es/consultar-estado/). Las normas generales de entrada están en [Entrada al Reino Unido y visado](/es/entrada-y-visado/) y lo que puedes llevar contigo, en [Aduana y franquicias](/es/aduana-reino-unido/). Si piensas alquilar un coche, consulta las normas de conducción en el Reino Unido, y si haces escala, las normas de tránsito.",
      ] },
    ],
    faq: [
      { q: "¿Los niños también necesitan una ETA para ir al Reino Unido?", a: "Sí. Todos los viajeros, incluidos los bebés, necesitan su propia ETA. Un niño no puede viajar con la ETA de uno de sus padres: se aplica una ETA por persona." },
      { q: "¿Puede un niño viajar con el pasaporte o la ETA de sus padres?", a: "No. Cada viajero necesita su propio pasaporte y su propia ETA, sea cual sea su edad. No se puede entrar con el pasaporte o la ETA de otra persona." },
      { q: "¿Qué pasa si viajo con un niño que tiene otro apellido?", a: "Border Force puede pedir una prueba del parentesco, sobre todo si tenéis apellidos distintos o si no eres el padre o la madre del niño. Son pruebas válidas el certificado de nacimiento o de adopción, el certificado de matrimonio o de divorcio, o una carta de consentimiento (consent letter) del padre o la madre." },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Children travelling to the UK", url: "https://www.gov.uk/government/publications/children-travelling-to-the-uk/children-travelling-to-the-uk-accessible" },
    ],
  },

  "london-airports": {
    slug: "aeropuertos-de-londres",
    group: "travel",
    title: "Gatwick, el segundo aeropuerto de Inglaterra: los 5 de Londres",
    description: "El segundo aeropuerto de Inglaterra y del Reino Unido es Londres-Gatwick (42,8 millones de pasajeros en 2025, según la CAA), tras Heathrow. Los 5 de Londres.",
    h1: "Los 5 principales aeropuertos de Londres",
    lead: "El segundo aeropuerto de Inglaterra —y del Reino Unido— es Londres-Gatwick, con 42,8 millones de pasajeros en 2025, por detrás de Heathrow (84,5 millones). El tercero es Mánchester (32,1 millones), según la autoridad británica de aviación civil (CAA).",
    card: "Heathrow, Gatwick, Stansted, Luton y London City: cómo llegar al centro",
    sections: [
      { h: "Cinco aeropuertos para una ciudad", blocks: [
        "Londres cuenta con cinco grandes aeropuertos. La elección influye en la ruta, el tiempo y el coste de llegar al centro. A continuación tienes una breve descripción de cada uno.",
      ] },
      { h: "Heathrow (LHR) — oeste de Londres", blocks: [
        "El mayor aeropuerto del Reino Unido y su principal centro de conexiones internacionales (terminales 2-5).",
        "Cómo llegar: Heathrow Express ~15 min, Elizabeth Line ~30 min, metro ~50 min. Más detalles en la guía del [aeropuerto de Heathrow](/es/aeropuerto-heathrow/).",
      ] },
      { h: "Gatwick (LGW) — sur de Londres", blocks: [
        "El segundo aeropuerto de Inglaterra y del Reino Unido (después de Heathrow); opera tanto aerolíneas tradicionales como de bajo coste (terminales norte y sur).",
        "Cómo llegar: Gatwick Express ~30 min, Thameslink ~30-45 min.",
      ] },
      { h: "Stansted (STN) — noreste de Londres", blocks: [
        "Base de Ryanair, con muchas conexiones europeas; una sola terminal, fácil de recorrer.",
        "Cómo llegar: Stansted Express ~50 min, autobús ~60-90 min.",
      ] },
      { h: "Luton (LTN) — norte de Londres", blocks: [
        "Base de easyJet y Wizz Air; una sola terminal, con lanzadera hasta la estación.",
        "Cómo llegar: Luton Airport Express ~30 min, Thameslink ~30 min.",
      ] },
      { h: "London City (LCY) — centro de Londres (el más cercano)", blocks: [
        "El más próximo al centro; muy utilizado por quienes viajan por negocios.",
        "Cómo llegar: DLR ~15-25 min hasta el centro.",
        { note: "Los tiempos de viaje son aproximados y dependen del destino en Londres y de la hora del día." },
      ] },
    ],
    // ルート（/uk-entry/lotniska-londynu/）に公式出典リンクが無い（CAA の旅客数も URL なし）ので、出典を足さない
    sources: [],
  },

  "heathrow": {
    slug: "aeropuerto-heathrow",
    group: "travel",
    title: "Heathrow (LHR): terminales, control y cómo llegar a Londres",
    description: "Aeropuerto de Heathrow: terminales 2-5, control fronterizo (eGates) y cómo llegar al centro de Londres en Heathrow Express, Elizabeth Line, metro o autobús.",
    h1: "Aeropuerto de Heathrow (LHR)",
    lead: "Heathrow es el mayor aeropuerto del Reino Unido y la principal puerta de entrada a Londres. Aquí tienes sus terminales, cómo funciona el control fronterizo y cómo llegar al centro.",
    card: "Terminales 2-5, control fronterizo y tiempos de viaje al centro de Londres",
    sections: [
      { h: "Ubicación y terminales", blocks: [
        "Heathrow (código IATA: LHR) está en el oeste de Londres. Es el aeropuerto más grande y con más tráfico del Reino Unido, con conexiones a todo el mundo. Están en funcionamiento las terminales 2, 3, 4 y 5: comprueba el número de terminal en tu billete, porque influye tanto en el trayecto como en la facturación.",
      ] },
      { h: "Control fronterizo a la llegada", blocks: [
        `Al llegar, pasas el control fronterizo por las puertas automáticas eGate (con pasaporte biométrico) o en un mostrador atendido por un agente. Recuerda que para entrar necesitas un pasaporte válido y una [UK ETA](/es/que-es-la-eta/) válida vinculada a ese pasaporte (para estancias de hasta ${F.staySixMonths} meses).`,
      ] },
      { h: "Cómo llegar al centro de Londres", blocks: [
        { table: {
          head: ["Medio de transporte", "Tiempo aproximado"],
          rows: [
            ["Heathrow Express (tren rápido)", "unos 15 minutos"],
            ["Elizabeth Line", "unos 30 minutos"],
            ["Metro (Piccadilly line)", "unos 50 minutos"],
            ["Autobús / autocar", "unos 60-90 minutos"],
          ],
        } },
        { note: "Los tiempos de viaje son aproximados y dependen de la terminal, la hora del día y el destino en Londres." },
        "Más sobre los aeropuertos de la ciudad: [Los 5 principales aeropuertos de Londres](/es/aeropuertos-de-londres/).",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },
};
export default pages;
