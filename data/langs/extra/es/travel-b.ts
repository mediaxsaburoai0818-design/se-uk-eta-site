import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（es・travel-b）2026-11-15。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "transport-oyster": {
    slug: "transporte-londres-oyster",
    group: "travel",
    title: "Transporte en Londres: Oyster o pago sin contacto (2026)",
    description:
      "En el metro, autobuses y trenes de Londres pagas con tarjeta sin contacto, móvil u Oyster: mismo precio y topes diarios y semanales. Consulta importes en TfL.",
    h1: "Cómo pagar el transporte en Londres: Oyster y pago sin contacto",
    lead: "En el metro, los autobuses y los trenes de Londres lo más sencillo es acercar una tarjeta sin contacto, el móvil o una tarjeta Oyster al lector. Sin contacto y Oyster cuestan lo mismo, y existen topes diarios y semanales de gasto.",
    card: "Sin contacto u Oyster: mismo precio, topes diarios y sin efectivo en el autobús.",
    sections: [
      { h: "Sin contacto u Oyster: así se paga", blocks: [
        "El transporte público de Londres —metro (Tube), autobuses y trenes— funciona con el sistema «pay as you go»: acercas una tarjeta bancaria sin contacto, el móvil con pago o una tarjeta Oyster al lector amarillo y pagas por trayecto.",
        "El pago sin contacto y Oyster tienen el mismo precio. Si ya tienes una tarjeta sin contacto o un móvil con pago, puedes viajar con la misma tarifa sin comprar una Oyster. Para visitantes ocasionales, el pago sin contacto suele ser lo más cómodo. La Visitor Oyster, en cambio, se pide antes del viaje.",
      ] },
      { h: "Topes de gasto (capping): no pagas sin límite", blocks: [
        "Existen topes de gasto diarios y semanales. Cuando la suma de tus trayectos alcanza el tope, no se te cobra nada más por los viajes restantes de ese periodo. Los topes varían según las zonas por las que viajes. Los importes cambian con el tiempo, así que consulta las cifras actuales en TfL en lugar de fiarte de un importe fijo.",
      ] },
      { h: "Metro y tren: valida al entrar y al salir", blocks: [
        "En el metro y el tren tienes que validar tanto al entrar como al salir; si no, se te puede cobrar una tarifa incorrecta. En autobuses y tranvías (tram) solo validas al subir; no hace falta validar a la salida.",
        { ul: [
          "Tube / tren: valida al empezar y al terminar el trayecto.",
          "Autobús / tranvía: valida solo al subir.",
        ] },
      ] },
      { h: "Los autobuses no aceptan efectivo", blocks: [
        "Los autobuses de Londres no aceptan efectivo. Solo puedes pagar con tarjeta sin contacto, móvil o tarjeta Oyster. Asegúrate de llevar un medio de pago sin contacto que funcione antes de subir.",
      ] },
      { h: "Usa siempre la misma tarjeta", blocks: [
        "Valida siempre con la misma tarjeta o dispositivo en cada trayecto. No compartas una misma tarjeta sin contacto entre varios viajeros: para que los topes se calculen bien, cada persona debe validar con su propio medio de pago.",
      ] },
      { h: "Antes de viajar al Reino Unido", blocks: [
        "El transporte público lo usarás después de llegar; para entrar en el país necesitas una [UK ETA](/es/como-solicitarla/) válida, y puedes seguir tu solicitud en la página para [consultar el estado de la ETA](/es/consultar-estado/). A la llegada pasarás el control de pasaportes y las eGates. Si prefieres moverte en coche, lee la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Necesito una tarjeta Oyster en Londres?", a: "No necesariamente. Si tienes una tarjeta bancaria sin contacto o un móvil con pago, puedes viajar directamente al mismo precio que con Oyster. Sin contacto y Oyster cuestan lo mismo, así que a los visitantes normalmente les basta con una tarjeta sin contacto." },
      { q: "¿Se puede pagar en efectivo en el autobús en Londres?", a: "No. Los autobuses de Londres no aceptan efectivo. Pagas con tarjeta sin contacto, móvil o tarjeta Oyster acercándola al lector al subir." },
      { q: "¿Qué pasa si hago muchos trayectos en un día?", a: "Hay topes de gasto (capping) diarios y semanales. Cuando alcanzas el tope, no se te cobra más por los trayectos siguientes. Los importes varían según la zona y cambian con el tiempo: consulta los importes actuales en Transport for London (TfL)." },
    ],
    sources: [
      { label: "Transport for London – Best ways for visitors to pay", url: "https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/best-ways-for-visitors-to-pay" },
      { label: "Transport for London – Capping", url: "https://tfl.gov.uk/fares/find-fares/capping" },
    ],
  },

  "driving-in-uk": {
    slug: "conducir-en-reino-unido",
    group: "travel",
    title: "Conducir en el Reino Unido con carné extranjero (2026)",
    description:
      "Si vives fuera del Reino Unido, conduce con tu carné válido hasta 12 meses desde la entrada. Edad mínima 17 años, por la izquierda y con seguro obligatorio.",
    h1: "¿Se puede conducir en el Reino Unido con un carné extranjero?",
    lead: "Sí: si resides fuera del Reino Unido puedes conducir con un permiso válido de tu país, por ejemplo el español, durante un máximo de 12 meses desde la entrada. La edad mínima para conducir un turismo es de 17 años, se circula por la izquierda y el seguro es obligatorio.",
    card: "Carné de tu país hasta 12 meses, conducción por la izquierda y seguro obligatorio.",
    sections: [
      { h: "La regla de los 12 meses: conducir con el carné de tu país", blocks: [
        "Si resides fuera del Reino Unido, puedes conducir con un permiso de conducir válido de tu país durante un máximo de 12 meses, contados desde el día en que entraste en el país. El derecho se aplica a:",
        { ul: [
          "Turismos (hasta 3 500 kg y con plazas para un máximo de ocho pasajeros).",
          "Motocicletas.",
        ] },
        "El permiso debe estar vigente durante toda la estancia. El plazo de 12 meses se cuenta desde la fecha de entrada, no desde la fecha de expedición del carné.",
      ] },
      { h: "Permiso internacional (IDP) y traducción", blocks: [
        "Puedes conducir con un permiso válido de tu país. Si el carné no está expedido en inglés, se recomienda llevar una traducción oficial o un permiso internacional de conducir (IDP), para que las autoridades y las empresas de alquiler puedan leer los datos con facilidad.",
        "Los requisitos varían según el país que haya expedido el permiso. Comprueba tu situación en GOV.UK antes del viaje: las normas pueden ser distintas según tu país de origen.",
      ] },
      { h: "Conducción por la izquierda, edad mínima y seguro", blocks: [
        { ul: [
          "Por la izquierda: en el Reino Unido se conduce por el lado izquierdo de la calzada.",
          "Edad mínima: 17 años para conducir un turismo.",
          "Seguro: es obligatorio tener un seguro de coche válido para conducir en el Reino Unido.",
        ] },
        "Comprueba que tu seguro cubre el Reino Unido antes de conducir. Si alquilas un coche, el seguro suele estar incluido en el contrato; lee bien las condiciones.",
      ] },
      { h: "Vehículos grandes: autobuses y camiones", blocks: [
        "Para vehículos grandes, como autobuses y camiones, se aplican normas distintas a las de los turismos y las motocicletas. Si piensas conducir uno de ellos, comprueba los requisitos específicos en GOV.UK antes del viaje.",
      ] },
      { h: "ETA y permiso de conducir: dos cosas distintas", blocks: [
        "La UK ETA es una autorización para entrar en el Reino Unido: no determina si puedes conducir. El derecho a conducir se rige por normas aparte sobre el permiso, la edad, el seguro y el tipo de vehículo.",
        "Para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida; el estado de tu solicitud puedes verlo en [consultar el estado de la ETA](/es/consultar-estado/). Las normas generales de entrada, lo que puedes llevar en el equipaje según las normas de aduana y cómo funcionan el control de pasaportes y las eGates se explican en las guías de entrada al Reino Unido.",
      ] },
    ],
    faq: [
      { q: "¿Puedo conducir en el Reino Unido con mi carné de mi país?", a: "Sí. Los visitantes que residen fuera del Reino Unido pueden conducir turismos y motocicletas con un permiso válido de su país durante un máximo de 12 meses contados desde el día de entrada." },
      { q: "¿Necesito un permiso internacional (IDP) o una traducción?", a: "Puedes conducir con un permiso válido de tu país. Si el carné no está en inglés, se recomienda una traducción oficial o un permiso internacional de conducir (IDP). Las normas varían según el país: comprueba tu caso en gov.uk/driving-nongb-licence." },
      { q: "¿A qué edad se puede conducir en Inglaterra?", a: "La edad mínima para conducir un turismo en Inglaterra (y en el resto del Reino Unido) es de 17 años; a esa edad la mayoría empieza las prácticas de conducción. En el Reino Unido se circula por la izquierda y es obligatorio tener un seguro de coche válido." },
    ],
    sources: [
      { label: "GOV.UK – Driving in Great Britain on a non-GB licence", url: "https://www.gov.uk/driving-nongb-licence" },
    ],
  },

  "money-currency": {
    slug: "moneda-libra-esterlina",
    group: "travel",
    title: "Moneda en Inglaterra y Escocia 2026: libra esterlina (GBP)",
    description:
      "La moneda de Inglaterra, Escocia y Londres es la libra esterlina (GBP, £) también en 2026. ¿Hace falta efectivo? Casi nunca. Desde £10 000 hay que declararlo.",
    h1: "Moneda en Inglaterra y Escocia: libra esterlina, efectivo y propinas",
    lead: "La moneda de Inglaterra, Escocia, Gales e Irlanda del Norte es la libra esterlina (GBP, £), también en 2026. Aquí tienes cuánto efectivo puedes llevar sin declarar, dónde cambiar dinero y qué conviene saber sobre tarjetas y propinas.",
    card: "Libra esterlina (GBP), tarjeta casi en todas partes y declaración desde £10 000.",
    sections: [
      { h: "¿Qué moneda se usa en Inglaterra y Escocia? La libra esterlina (GBP, £)", blocks: [
        "La moneda del Reino Unido es la libra esterlina (GBP, £). El euro y otras monedas en general no se aceptan en las tiendas, así que necesitas tarjeta o libras en efectivo para tus gastos allí. En Escocia la moneda también es la libra. Allí el Bank of Scotland, el Clydesdale Bank y The Royal Bank of Scotland emiten sus propios billetes, mientras que en Inglaterra y Gales los billetes los emite el Bank of England (fuente: Bank of England).",
      ] },
      { h: "Efectivo: obligación de declarar desde £10 000", blocks: [
        "Si entras en Gran Bretaña (GB) con £10 000 o más en efectivo —incluido el importe equivalente en otras monedas—, estás obligado a declarar la cantidad. La declaración se hace en línea con antelación o en el canal rojo a la llegada. No declararla puede suponer la incautación de todo el importe y una multa de hasta £5 000.",
      ] },
      { h: "¿Hace falta efectivo en Londres e Inglaterra? Tarjeta o efectivo", blocks: [
        "Las tarjetas, sobre todo el pago sin contacto, están muy extendidas en el Reino Unido. En muchas situaciones puedes arreglártelas sin efectivo, desde el transporte público y las cafeterías hasta las tiendas grandes. El transporte público de Londres (TfL) se paga con tarjeta sin contacto u Oyster (fuente: TfL).",
        { ul: [
          "Aun así, puede ser práctico llevar algo de efectivo para tiendas pequeñas, mercados y propinas.",
          "Antes del viaje, consulta con tu banco las comisiones por pagos con tarjeta en el extranjero.",
        ] },
      ] },
      { h: "¿Dónde cambiar dinero?", blocks: [
        "Puedes cambiar dinero en bancos, casas de cambio y aeropuertos. Ten en cuenta que en los aeropuertos el tipo de cambio suele ser menos favorable. Compara tipos antes de cambiar cantidades grandes.",
      ] },
      { h: "Propinas: costumbre, no obligación", blocks: [
        "En el Reino Unido la propina es una costumbre y no una obligación legal. Las pautas varían según la situación:",
        { ul: [
          "Restaurantes: a veces se añade a la cuenta un «service charge» del 10-12,5 %; revisa el desglose. Si no se añade ningún cargo, alrededor del 10 % es una pauta habitual.",
          "Pub: si pides en la barra, normalmente no se espera propina.",
          "Taxi: es habitual redondear al alza.",
        ] },
      ] },
      { h: "Antes de entrar en el país", blocks: [
        "El efectivo, si procede, se declara en la aduana, que está después del control de pasaportes. Para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida, y puedes seguir la solicitud en [consultar el estado de la ETA](/es/consultar-estado/). Si piensas alquilar un coche, lee la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Qué moneda se usa en Inglaterra y Escocia en 2026?", a: "La libra esterlina (GBP, £) en todo el Reino Unido. En Escocia tres bancos emiten sus propios billetes, pero la moneda es la misma." },
      { q: "¿Hace falta efectivo en Londres?", a: "Casi nunca: las tarjetas, sobre todo el pago sin contacto, están muy extendidas, y el transporte público (TfL) se paga con tarjeta sin contacto u Oyster. Algo de efectivo puede venir bien para tiendas pequeñas, mercados y propinas." },
      { q: "¿A partir de qué cantidad hay que declarar el efectivo al entrar en el Reino Unido?", a: "Si entras en Gran Bretaña (GB) con £10 000 o más en efectivo (incluido el equivalente en otras monedas), estás obligado a declararlo. Se hace en línea con antelación o en el canal rojo a la llegada. No declararlo puede suponer la incautación de todo el importe y una multa de hasta £5 000." },
      { q: "¿Basta con la tarjeta en el Reino Unido?", a: "Las tarjetas, incluido el pago sin contacto, están muy extendidas y se aceptan en la mayoría de situaciones. En muchos casos te bastará con la tarjeta. Aun así, puede ser práctico llevar algo de efectivo para tiendas pequeñas o propinas." },
      { q: "¿Es obligatoria la propina en el Reino Unido?", a: "No, la propina es una costumbre y no una obligación legal. En los restaurantes a veces se añade a la cuenta un «service charge» del 10-12,5 %; revisa el desglose. Si no se añade ningún cargo, alrededor del 10 % es una pauta habitual." },
    ],
    sources: [
      { label: "GOV.UK – Taking cash in and out of Great Britain", url: "https://www.gov.uk/bringing-cash-into-uk" },
    ],
  },

  "vat-refund": {
    slug: "devolucion-iva-compras",
    group: "travel",
    title: "Devolución del IVA (VAT refund) en el Reino Unido (2026)",
    description:
      "Desde el 1 de enero de 2021, por regla general no se devuelve el IVA de lo que te llevas de Gran Bretaña. Si la tienda lo envía fuera, puede ir sin IVA.",
    h1: "Devolución del IVA (VAT refund) en compras en el Reino Unido",
    lead: "Es un error frecuente: desde 2021, en Gran Bretaña por regla general ya no se devuelve el IVA de lo que los viajeros se llevan a casa. Aquí verás qué se aplica realmente, la excepción cuando la tienda envía el artículo al extranjero y por qué Irlanda del Norte es un caso aparte.",
    card: "Desde 2021 no hay devolución del IVA en el equipaje de mano en Gran Bretaña.",
    sections: [
      { h: "Lo esencial: sin devolución del IVA en el equipaje de mano desde 2021", blocks: [
        "Este es el punto que más se malinterpreta. Desde el 1 de enero de 2021, en Gran Bretaña (Inglaterra, Escocia y Gales) por regla general ya no se devuelve el IVA (VAT) de los artículos que los viajeros compran y se llevan en el equipaje de mano.",
        "El sistema de devolución del IVA a la exportación minorista (VAT Retail Export Scheme) se suprimió en esa fecha. Eso significa que normalmente no puedes recuperar el IVA de lo que sacas del país contigo.",
      ] },
      { h: "La excepción: cuando la tienda envía el artículo directamente al extranjero", blocks: [
        "Si una tienda envía el artículo directamente a una dirección en el extranjero, en algunos casos la compra puede hacerse sin IVA. Esto depende de los procedimientos de la tienda y de las condiciones aplicables, así que pregunta en cada tienda qué es posible antes de comprar.",
      ] },
      { h: "Irlanda del Norte es un caso aparte", blocks: [
        "Irlanda del Norte tiene en parte normas distintas. Para viajeros que no residen en la UE puede seguir existiendo cierta devolución del IVA allí, vinculada al Protocolo de Irlanda del Norte. Las condiciones pueden cambiar, así que comprueba qué se aplica en el momento de tu viaje.",
      ] },
      { h: "Conviene saberlo en el aeropuerto", blocks: [
        "Aunque veas carteles de «Tax Free» o antiguos mostradores de devolución, ten en cuenta que el IVA de los artículos que llevas en el equipaje de mano por regla general no se devuelve en Inglaterra, Escocia ni Gales. No des por hecho que habrá devolución y, si tienes dudas, consulta las normas vigentes.",
      ] },
      { h: "Más información para tu viaje", blocks: [
        "Lo que puedes entrar y sacar del país se explica en la guía de aduanas, y cómo es la llegada, en la de control de pasaportes y eGates; también hay una guía para viajar con niños. Para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida; el estado lo ves en [consultar el estado de la ETA](/es/consultar-estado/).",
      ] },
    ],
    faq: [
      { q: "¿Se puede recuperar el IVA (VAT) de las compras en el Reino Unido?", a: "En Gran Bretaña (Inglaterra, Escocia y Gales), por regla general ya no se devuelve el IVA de los artículos que los viajeros se llevan a casa en el equipaje de mano. El VAT Retail Export Scheme se suprimió allí el 1 de enero de 2021. Esto es distinto de cómo funcionaba antes y de lo que se aplica en algunos otros países." },
      { q: "¿Hay alguna forma de comprar sin IVA en el Reino Unido?", a: "Si una tienda envía el artículo directamente a una dirección en el extranjero, en algunos casos la compra puede hacerse sin IVA. Depende de los procedimientos de la tienda y de las condiciones aplicables. Pregunta en cada tienda qué es posible." },
      { q: "¿Se aplican las mismas normas en Irlanda del Norte?", a: "Irlanda del Norte se trata por separado y tiene en parte normas distintas. Para viajeros que no residen en la UE puede seguir existiendo allí cierta devolución del IVA, vinculada al Protocolo de Irlanda del Norte. Comprueba las condiciones vigentes antes de contar con una devolución." },
    ],
    sources: [
      { label: "GOV.UK – Tax-free shopping", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping" },
    ],
  },

  "sim-mobile": {
    slug: "tarjeta-sim-internet-movil",
    group: "travel",
    title: "Tarjeta SIM, eSIM e internet móvil en el Reino Unido (2026)",
    description:
      "Los grandes operadores del Reino Unido son EE, O2, Vodafone y Three. SIM prepago, eSIM, móvil libre y roaming tras el Brexit: cómo estar conectado en tu viaje.",
    h1: "Tarjeta SIM, eSIM e internet móvil en el Reino Unido",
    lead: "Las principales redes móviles del Reino Unido son EE, O2, Vodafone y Three. Como visitante puedes elegir entre una SIM prepago y una eSIM, siempre que tu móvil esté libre; y si usas tu línea de la UE, consulta antes el roaming con tu operador.",
    card: "EE, O2, Vodafone y Three; SIM prepago o eSIM con móvil libre y roaming a revisar.",
    sections: [
      { h: "Operadores móviles en el Reino Unido", blocks: [
        "Las mayores redes móviles del Reino Unido son EE, O2, Vodafone y Three. Además hay varios operadores virtuales (OMV) que usan esas mismas redes, por ejemplo giffgaff, Lebara y Lyca.",
        { note: "En este ámbito hay pocas normas oficiales uniformes, y los precios y tarifas cambian a menudo. Toma la información siguiente como una orientación general y consulta las condiciones vigentes con el operador." },
      ] },
      { h: "Opciones para visitantes: SIM prepago o eSIM", blocks: [
        { ul: [
          "SIM prepago / SIM para turistas: se compra en aeropuertos, tiendas de telefonía y supermercados.",
          "eSIM: se compra en línea y se activa al momento si tu móvil la admite, sin cambiar la SIM física.",
        ] },
      ] },
      { h: "El móvil tiene que estar libre", blocks: [
        "Para usar una SIM o eSIM local, tu móvil debe estar libre (desbloqueado de operador). Compruébalo con tu operador actual con tiempo antes del viaje.",
      ] },
      { h: "Roaming después del Brexit", blocks: [
        "Los visitantes de la UE deben prestar atención a los cargos por roaming. Tras el Brexit, algunos operadores pueden cobrar por el roaming en el Reino Unido y otros no. Las condiciones varían: consulta con tu operador antes de viajar para evitar gastos inesperados.",
      ] },
      { h: "Cobertura y wifi gratis", blocks: [
        "La cobertura suele ser buena en las ciudades, mientras que en zonas rurales puede variar según el operador. Puedes comprobarla en el mapa de cobertura de Ofcom.",
        "El wifi gratuito es habitual en cafeterías, en el transporte público y en muchos lugares públicos, lo que puede complementar tu conexión móvil.",
      ] },
      { h: "Antes de entrar en el país", blocks: [
        "Para entrar en el Reino Unido necesitas una [UK ETA](/es/como-solicitarla/) válida; el estado de tu solicitud lo ves en [consultar el estado de la ETA](/es/consultar-estado/). Si piensas alquilar un coche, lee la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Necesito una SIM local en el Reino Unido?", a: "Depende de tu operador actual. Una SIM prepago local o una eSIM puede ser práctica para evitar cargos de roaming y tener datos móviles allí. La eSIM se compra en línea y se activa al momento si tu móvil la admite." },
      { q: "¿Puedo usar una eSIM en el Reino Unido?", a: "Sí, si tu móvil admite eSIM y está libre, puedes comprar una eSIM en línea y activarla sin cambiar la SIM física. Comprueba antes que tu dispositivo es compatible y está desbloqueado de operador." },
      { q: "¿Puedo usar mi móvil de la UE como siempre en el Reino Unido?", a: "Tras el Brexit, algunos operadores cobran por el roaming en el Reino Unido y otros no. Las condiciones varían según el operador y la tarifa: consulta con tu operador antes de viajar." },
    ],
    sources: [
      { label: "Ofcom – regulador de las comunicaciones del Reino Unido", url: "https://www.ofcom.org.uk/" },
    ],
  },

  "power-plug": {
    slug: "enchufes-reino-unido",
    group: "travel",
    title: "Enchufes en el Reino Unido y Londres: tipo G, 230 V (2026)",
    description:
      "Los enchufes del Reino Unido y Londres son de tipo G (BS 1363, tres clavijas rectangulares), 230 V y 50 Hz. Con INPUT 100-240 V basta un adaptador.",
    h1: "Enchufes en el Reino Unido y Londres",
    lead: "Los enchufes del Reino Unido, en Londres igual que en el resto del país, son de tipo G, con tres clavijas rectangulares, y la tensión es de 230 V. Si necesitas solo un adaptador o también un transformador lo decide la etiqueta de cada aparato.",
    card: "Enchufe tipo G, 230 V y 50 Hz: con INPUT 100-240 V basta un adaptador.",
    sections: [
      { h: "¿Qué enchufes hay en el Reino Unido y Londres?", blocks: [
        "Los enchufes del Reino Unido son de tipo G: la clavija tiene tres patas rectangulares. La tensión es de 230 V y la frecuencia de 50 Hz. Para conectar aparatos con otro tipo de clavija necesitas un adaptador de viaje para tipo G.",
      ] },
      { h: "¿Tu cargador indica 100-240 V? Entonces basta un adaptador", blocks: [
        "Los aparatos de países con tensión más baja —como Japón (100 V) o Norteamérica (120 V)— funcionan en el Reino Unido si la etiqueta INPUT del aparato indica «100-240 V» (lo que se llama doble tensión o dual voltage). En ese caso solo necesitas un adaptador para tipo G.",
        "Los cargadores de móviles, portátiles y cámaras indican 100-240 V en la mayoría de los casos. Aunque suele ser así, lee siempre la etiqueta (INPUT) de tu aparato concreto.",
      ] },
      { h: "¿Cuándo puede hacer falta un transformador?", blocks: [
        "Los aparatos cuya etiqueta INPUT indica solo la tensión de su país —a menudo aparatos de alta potencia, como algunos secadores de pelo y planchas de pelo— pueden necesitar un transformador (convertidor de tensión). Comprueba la etiqueta antes de enchufar nada; si tienes dudas, lo más seguro es dejar el aparato en casa.",
      ] },
      { h: "Tomas USB y consejos prácticos", blocks: [
        "Algunos alojamientos tienen tomas USB, pero lo más seguro es llevar tu propio adaptador de viaje para tipo G. Así podrás cargar tus dispositivos sea cual sea el equipamiento de la habitación.",
      ] },
      { h: "Lista de comprobación antes de viajar", blocks: [
        { ul: [
          "Lee la etiqueta INPUT de cada cargador y aparato.",
          "¿Indica 100-240 V? Entonces basta un adaptador para tipo G.",
          "¿Solo la tensión de tu país en un aparato de alta potencia? Entonces puede hacer falta un transformador.",
          "Lleva tu propio adaptador en lugar de confiar en las tomas USB de la habitación.",
        ] },
      ] },
      { h: "Antes de viajar al Reino Unido", blocks: [
        "Para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida, y puedes seguir la solicitud en [consultar el estado de la ETA](/es/consultar-estado/). A la llegada pasarás el control de pasaportes y las eGates. Si piensas conducir, lee la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/).",
      ] },
      { h: "Referencia oficial y técnica", blocks: [
        "La norma británica para clavijas y tomas de 13 A es la BS 1363 (tipo G; Plugs and Sockets etc. (Safety) Regulations 1994). Los 230 V y 50 Hz se establecen en las Electricity Safety, Quality and Continuity Regulations 2002, reg. 27.",
      ] },
    ],
    faq: [
      { q: "¿Funcionará mi cargador en el Reino Unido?", a: "Si el cargador indica INPUT 100-240 V (dual voltage), funciona en el Reino Unido: solo necesitas un adaptador para tipo G. La mayoría de los cargadores de móviles, portátiles y cámaras lo indican. Comprueba siempre la etiqueta del aparato." },
      { q: "¿Necesito un transformador?", a: "Un transformador (convertidor de tensión) puede hacer falta para aparatos de alta potencia fabricados solo para la tensión de su país, como algunos secadores y planchas de pelo. Comprueba la etiqueta (INPUT): si solo indica la tensión de tu país, puede hacer falta un transformador." },
      { q: "¿Qué enchufes hay en el Reino Unido y en Londres?", a: "Los enchufes británicos, en Londres igual que en el resto del Reino Unido, son de tipo G, con tres clavijas rectangulares (BS 1363, 13 A). La tensión es de 230 V y la frecuencia de 50 Hz." },
    ],
    sources: [
      { label: "legislation.gov.uk – ESQCR 2002, reg. 27 (230 V, 50 Hz)", url: "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made" },
    ],
  },

  "healthcare-nhs": {
    slug: "sanidad-nhs-tarjeta-sanitaria",
    group: "travel",
    title: "Sanidad, NHS y GHIC para visitantes en el Reino Unido (2026)",
    description:
      "Urgencias (A&E) y médico de cabecera (GP) son gratuitos en el NHS. Qué cubre la EHIC/GHIC, por qué conviene un seguro de viaje y los números 999 y NHS 111.",
    h1: "Sanidad, NHS y GHIC para visitantes en el Reino Unido",
    lead: "En el NHS, urgencias (A&E) y la consulta del médico de cabecera (GP) son gratuitas para todos. Con una EHIC/GHIC válida, los visitantes de la UE, la AELC y Suiza reciben la atención médicamente necesaria, pero se recomienda encarecidamente un seguro de viaje.",
    card: "Urgencias y GP gratis, EHIC/GHIC para la UE y seguro de viaje muy recomendable.",
    sections: [
      { h: "Urgencias y médico de cabecera, gratuitos", blocks: [
        "En el NHS, urgencias (A&E) y la consulta del médico de cabecera (GP) son gratuitas para todos, sea cual sea tu situación de residencia o aunque no lleves documentos. Esto se aplica a la primera atención urgente.",
      ] },
      { h: "Visitantes de la UE, la AELC y Suiza: EHIC/GHIC", blocks: [
        "Con una EHIC/GHIC válida expedida en su país, los visitantes de la UE, la AELC (EFTA) y Suiza pueden recibir la atención que resulte médicamente necesaria durante una estancia temporal.",
        { note: "La EHIC/GHIC no cubre todos los gastos y no sustituye a un seguro de viaje." },
      ] },
      { h: "Visitantes sin EHIC/GHIC", blocks: [
        "A los visitantes sin EHIC/GHIC se les puede cobrar la atención hospitalaria que vaya más allá del tratamiento urgente (según se indica, el 150 % de la tarifa estándar del NHS). Aun así, la atención urgente que no puede esperar se presta siempre, y el pago se gestiona después.",
      ] },
      { h: "Seguro de viaje: muy recomendable", blocks: [
        "Se recomienda encarecidamente un seguro de viaje. La EHIC/GHIC no lo cubre todo: por ejemplo, normalmente no incluye la repatriación. El seguro es, por tanto, un complemento importante y no puede sustituirse por una GHIC.",
      ] },
      { h: "Números de emergencia y consulta sanitaria", blocks: [
        { ul: [
          "999 (o 112): número de emergencias para situaciones urgentes.",
          "NHS 111: consulta médica no urgente.",
          "Los medicamentos con receta pueden tener un cargo por receta (en Inglaterra).",
        ] },
      ] },
      { h: "Antes de entrar en el país", blocks: [
        "Para entrar en el Reino Unido necesitas una [UK ETA](/es/como-solicitarla/) válida; el estado de tu solicitud lo ves en [consultar el estado de la ETA](/es/consultar-estado/). Si piensas alquilar un coche, lee la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/), y para emergencias consulta la guía de [números de emergencia y seguridad](/es/emergencias-seguridad-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Cuesta dinero la atención de urgencias en el Reino Unido?", a: "Urgencias (A&E) y la consulta del médico de cabecera (GP) son gratuitas en el NHS para todos, sea cual sea la situación de residencia o la documentación. En cambio, la atención hospitalaria más allá del tratamiento urgente puede tener coste para los visitantes sin EHIC/GHIC." },
      { q: "¿Puedo usar la EHIC o la GHIC en el Reino Unido?", a: "Los visitantes de la UE, la AELC y Suiza con una EHIC/GHIC válida expedida en su país pueden recibir la atención médicamente necesaria durante una estancia temporal. Sin embargo, la EHIC/GHIC no cubre todos los gastos y no sustituye a un seguro de viaje." },
      { q: "¿Necesito un seguro de viaje para el Reino Unido?", a: "Se recomienda encarecidamente. La EHIC/GHIC no lo cubre todo; por ejemplo, normalmente no incluye la repatriación. El seguro de viaje es un complemento importante y no se puede sustituir por la GHIC." },
    ],
    sources: [
      { label: "NHS – Accessing NHS services when visiting from abroad", url: "https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/how-to-access-nhs-services-in-england-if-you-are-visiting-from-abroad/" },
      { label: "GOV.UK – Healthcare for EU and EFTA citizens visiting the UK", url: "https://www.gov.uk/guidance/healthcare-for-eu-and-efta-citizens-visiting-the-uk" },
    ],
  },

  "safety-emergency": {
    slug: "emergencias-seguridad-reino-unido",
    group: "travel",
    title: "Emergencias en el Reino Unido: llama al 999, NHS 111 (2026)",
    description:
      "En una emergencia llama al 999 (o 112): policía, bomberos y ambulancia, gratis. El 101, para asuntos policiales no urgentes, y NHS 111, para consultas de salud.",
    h1: "Números de emergencia y seguridad en el Reino Unido",
    lead: "Lo primero: en una emergencia llama al 999 (o al 112). Aquí verás la diferencia entre el 999 y el 101, la línea sanitaria NHS 111, cómo es una llamada a emergencias y algunos consejos generales de seguridad para el viaje.",
    card: "999 o 112 en emergencias, 101 para la policía no urgente y NHS 111 para salud.",
    sections: [
      { h: "Números de emergencia: 999 y 112", blocks: [
        "En una emergencia —cuando necesitas policía, bomberos o ambulancia— llama al 999. La llamada es gratuita y puede hacerse desde cualquier teléfono, incluso sin cobertura de tu propio operador.",
        "El 112, el número de emergencias europeo, también funciona en el Reino Unido y conecta con el mismo servicio que el 999. Puedes usar cualquiera de los dos.",
        "Al llamar te preguntarán qué servicio necesitas: police, fire, ambulance o coastguard (guardacostas).",
      ] },
      { h: "Asuntos no urgentes: 101 y NHS 111", blocks: [
        "Si la situación no es urgente, hay números específicos que usar en lugar del 999:",
        { ul: [
          "101: número de la policía para asuntos no urgentes, por ejemplo para denunciar un delito menor o la pérdida de un objeto.",
          "NHS 111: consulta sanitaria no urgente. Te aconsejan sobre los síntomas y te derivan al nivel de atención adecuado.",
        ] },
        "Usar el número correcto ayuda a que el servicio del 999 pueda dar prioridad a las verdaderas emergencias. Cómo funciona la sanidad británica lo explica la guía sobre [sanidad y NHS en el Reino Unido](/es/sanidad-nhs-tarjeta-sanitaria/).",
      ] },
      { h: "Cómo es una llamada a emergencias", blocks: [
        "Al llamar al 999 o al 112 te atiende un operador que te pregunta qué servicio necesitas y dónde estás. Intenta describir con la mayor claridad posible el lugar y lo que ha pasado.",
        "Para personas con dificultades para oír o hablar existen soluciones especiales, como enviar un SMS al 999 mediante el servicio emergencySMS, con registro previo, o la llamada «silent solution» (pulsar 55 cuando la llamada se ha conectado) si no puedes hablar con libertad. Las condiciones de estos servicios se detallan en las fuentes oficiales.",
      ] },
      { h: "Consejos generales de seguridad para viajeros", blocks: [
        "Como en muchos destinos, conviene estar atento a los carteristas y a los tirones de bolso en lugares turísticos, en el transporte público y en sitios concurridos. Algunos consejos habituales:",
        { ul: [
          "Lleva los objetos de valor pegados al cuerpo y no dejes bolsas sin vigilancia.",
          "Evita mostrar el móvil, la cartera y objetos caros entre la multitud.",
          "Denuncia los objetos perdidos o los delitos menores a la policía en el 101 o en la comisaría más cercana.",
        ] },
        "También es sensato viajar con un seguro de viaje. Si piensas conducir, consulta las normas de tráfico británicas en la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/).",
      ] },
      { h: "Pasaporte perdido: contacta con tu embajada", blocks: [
        "Si pierdes el pasaporte durante el viaje, dirígete a la embajada o el consulado de tu país para que te ayuden con un documento de viaje provisional. Si se trata de un robo, también conviene denunciarlo a la policía. Para entrar necesitas además una [UK ETA](/es/como-solicitarla/) válida; el estado de tu solicitud lo ves en [consultar el estado de la ETA](/es/consultar-estado/).",
      ] },
    ],
    faq: [
      { q: "¿A qué número se llama en una emergencia en el Reino Unido?", a: "Llama al 999 en una emergencia que requiera policía, bomberos o ambulancia. El 112 funciona igual y conecta con el mismo servicio. Ambos son gratuitos y se pueden marcar desde cualquier teléfono." },
      { q: "¿Qué hago si no es urgente?", a: "Para asuntos policiales no urgentes llama al 101. Si necesitas una consulta sanitaria no urgente, llama al NHS 111, que te aconseja sobre los síntomas y te deriva a la atención adecuada." },
      { q: "¿Cómo me protejo de los carteristas?", a: "Lleva los objetos de valor pegados al cuerpo, evita mostrar el móvil y la cartera entre la multitud y presta atención en lugares turísticos y en el transporte público. Si te roban, puedes contactar con la policía en el 101 o acudir a la comisaría más cercana." },
    ],
    sources: [
      { label: "GOV.UK – When you should dial 999", url: "https://www.gov.uk/dial-999-when-you-need-to" },
      { label: "police.uk – Contacting the police on 101", url: "https://www.police.uk/contact/101/" },
      { label: "NHS 111", url: "https://111.nhs.uk/" },
    ],
  },

  "bank-holidays": {
    slug: "festivos-bank-holidays",
    group: "travel",
    title: "Bank holidays en el Reino Unido 2026: días festivos",
    description:
      "Bank holidays 2026 en Inglaterra y Gales según GOV.UK: bancos cerrados, tiendas con horario reducido y menos transporte. El día de Navidad casi todo cierra.",
    h1: "Bank holidays en el Reino Unido en 2026",
    lead: "En un bank holiday los bancos cierran, muchas tiendas reducen su horario y el transporte público puede pasar con menos frecuencia. Estos son los festivos oficiales de Inglaterra y Gales en 2026 según GOV.UK y lo que suponen para tu viaje.",
    card: "Festivos de 2026 en Inglaterra y Gales y qué cierra cada día.",
    sections: [
      { h: "Bank holidays en Inglaterra y Gales en 2026", blocks: [
        "Según GOV.UK, estos son los bank holidays oficiales de Inglaterra y Gales en 2026. Escocia e Irlanda del Norte tienen en parte fechas distintas.",
        { table: { head: ["Fecha", "Festivo"], rows: [
          ["1 de enero", "Año Nuevo (New Year's Day)"],
          ["3 de abril", "Viernes Santo (Good Friday)"],
          ["6 de abril", "Lunes de Pascua (Easter Monday)"],
          ["4 de mayo", "Early May bank holiday"],
          ["25 de mayo", "Spring bank holiday"],
          ["31 de agosto", "Summer bank holiday"],
          ["25 de diciembre", "Navidad (Christmas Day)"],
          ["28 de diciembre", "Día sustitutorio del 26 de diciembre (Boxing Day)"],
        ] } },
      ] },
      { h: "¿Qué abre y qué se ve afectado?", blocks: [
        "En un bank holiday los bancos cierran. Muchas tiendas y atracciones abren, pero a menudo con horario reducido. El transporte público puede tener menos frecuencia, por ejemplo con horario de domingo.",
        "Comprueba con antelación los horarios de apertura y de transporte del día concreto que tengas previsto, porque varían según la localidad y el establecimiento.",
      ] },
      { h: "Día de Navidad: casi todo cerrado", blocks: [
        "El día de Navidad (25 de diciembre) es especial: casi todo cierra y se suspende la mayor parte del transporte público. Si viajas en esas fechas, planifica los días con margen y no cuentes con el servicio habitual.",
      ] },
      { h: "Días sustitutorios cuando el festivo cae en fin de semana", blocks: [
        "Si un bank holiday cae en sábado o domingo, el día libre se traslada normalmente al siguiente día laborable (el llamado día sustitutorio). Por eso algunas fechas de la tabla caen en un día laborable después de un fin de semana.",
      ] },
      { h: "Antes de viajar al Reino Unido", blocks: [
        "Para entrar necesitas una [UK ETA](/es/como-solicitarla/) válida, y puedes seguir la solicitud en [consultar el estado de la ETA](/es/consultar-estado/). A la llegada pasarás el control de pasaportes y las eGates. Si vas a conducir durante el viaje, lee la guía sobre [conducir en el Reino Unido](/es/conducir-en-reino-unido/).",
      ] },
    ],
    faq: [
      { q: "¿Cuándo son los bank holidays en el Reino Unido en 2026?", a: "En Inglaterra y Gales, los bank holidays oficiales de 2026 según GOV.UK son: 1 de enero (Año Nuevo), 3 de abril (Viernes Santo), 6 de abril (Lunes de Pascua), 4 de mayo (Early May), 25 de mayo (Spring), 31 de agosto (Summer), 25 de diciembre (Navidad) y 28 de diciembre (día sustitutorio del Boxing Day). Escocia e Irlanda del Norte tienen en parte fechas distintas." },
      { q: "¿Abren las tiendas en los bank holidays?", a: "Los bancos cierran. Muchas tiendas y atracciones abren, pero a menudo con horario reducido. El día de Navidad (25 de diciembre) casi todo está cerrado." },
      { q: "¿Cómo afectan los festivos al transporte público?", a: "El transporte público puede tener menos frecuencia, por ejemplo con horario de domingo. El día de Navidad se suspende la mayor parte del servicio, así que planifica los días de viaje con margen." },
    ],
    sources: [
      { label: "GOV.UK – UK bank holidays", url: "https://www.gov.uk/bank-holidays" },
    ],
  },
};
export default pages;
