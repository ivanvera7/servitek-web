/**
 * Encabezado de la página de Servicios. Texto facilitado por SERVITEK.
 *
 * NOTA: el original está redactado en segunda persona ("tu industria"). Se ha
 * adaptado a "usted" para no romper el tratamiento del resto del sitio. Si la
 * empresa prefiere el tuteo, hay que cambiarlo en toda la web, no solo aquí.
 */
export const servicesIntro = {
  eyebrow: "ENFOQUE TÉCNICO",
  title: "Electromecánica integral para la continuidad de su industria",
  body: "En SERVITEK transformamos y protegemos la infraestructura operativa de su planta. Nos especializamos en el diseño, montaje, automatización y mantenimiento de sistemas industriales, garantizando la máxima eficiencia y evitando paradas imprevistas. Conectamos tecnología avanzada y mano de obra calificada para mantener su producción en movimiento."
};

/**
 * Equipo directivo.
 *
 * PENDIENTE (empresa): la biografía es una redacción provisional. Sustituir
 * por el texto que redacte el propio Walter Miguel Vera Román, y reemplazar
 * la fotografía cuando esté disponible (ver components/about/FounderCard).
 */
export const founder = {
  name: "Walter Miguel Vera Román",
  role: "Fundador y Director General",
  photo: "",
  photoAlt: "Walter Miguel Vera Román, fundador y director general de SERVITEK",
  bio: [
    "Walter Miguel Vera Román fundó SERVITEK con una convicción simple: en la industria, una parada no planificada cuesta mucho más que el mantenimiento que la habría evitado.",
    "Desde la dirección de la empresa impulsa un modelo de trabajo basado en el diagnóstico técnico riguroso, la selección de materiales certificados y la formación continua del equipo, con especial énfasis en la seguridad en atmósferas explosivas e infraestructura crítica."
  ],
  quote: "Nuestro compromiso no es vender un servicio: es que la planta del cliente no se detenga."
};

export const aboutContent = {
  title: "SERVITEK: electromecánica para operaciones que exigen confiabilidad",
  subtitle: "SERVITEK E.A.S. es una empresa paraguaya especializada en electromecánica industrial y servicios eléctricos de alta exigencia.",

  /**
   * PENDIENTE (empresa): faltan cifras verificables. Cuando SERVITEK las
   * facilite, sustituir por datos reales — años de experiencia, proyectos
   * ejecutados, clientes atendidos, tamaño del equipo técnico.
   *
   * Hasta entonces solo se muestran los datos que sí son ciertos hoy. No se
   * inventan cifras ni se dejan marcadores visibles al público.
   */
  stats: [
    { value: "5", label: "Unidades de negocio" },
    { value: "Paraguay", label: "Cobertura nacional" }
  ],

  differentials: [
    {
      title: "Diagnóstico preciso",
      description: "Utilizamos tecnología de vanguardia para identificar puntos críticos en su infraestructura eléctrica."
    },
    {
      title: "Respuesta técnica",
      description: "Equipo especializado disponible para emergencias y proyectos programados."
    },
    {
      title: "Continuidad operativa",
      description: "Nuestro objetivo es minimizar los tiempos de parada y maximizar la disponibilidad de sus equipos."
    }
  ]
};

export const valueProposition = {
  headline: "Continuidad operativa.\nEficiencia energética.\nSeguridad crítica.",
  description: "El crecimiento industrial del país exige infraestructuras eléctricas modernas y de alta confiabilidad que minimicen los tiempos de parada y optimicen el consumo energético."
};

export const whyServitek = {
  title: "Cuando su operación no puede parar, la electromecánica importa.",
  pillars: [
    {
      number: "01",
      title: "CONFIABILIDAD",
      description: "Sistemas diseñados para operar sin interrupciones. Soluciones robustas que garantizan la disponibilidad continua."
    },
    {
      number: "02",
      title: "SEGURIDAD",
      description: "Cumplimiento estricto de normativas eléctricas. Protección de personas y equipos en cada instalación."
    },
    {
      number: "03",
      title: "EFICIENCIA",
      description: "Optimización del consumo energético. Reducción de costos operativos mediante soluciones técnicas inteligentes."
    },
    {
      number: "04",
      title: "EXCELENCIA TÉCNICA",
      description: "Equipo altamente calificado. Tecnología de vanguardia aplicada a cada proyecto."
    },
    {
      number: "05",
      title: "COMPROMISO",
      description: "Relación comercial transparente. Compromiso con los resultados y la satisfacción del cliente."
    }
  ]
};

/** Sellos de la barra de confianza de la portada. */
export const trustSignals = [
  { icon: "CheckCircle", text: "CALIDAD GARANTIZADA" },
  { icon: "Target", text: "EXPERIENCIA" },
  { icon: "Settings", text: "COMPROMISO" },
  { icon: "Clock", text: "ENTREGA OPORTUNA" },
  { icon: "Users", text: "ALIANZAS" }
];

/** Método de trabajo, mostrado en la página de Servicios. */
export const workProcess = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Análisis técnico completo de su infraestructura eléctrica y necesidades operativas."
  },
  {
    step: "02",
    title: "Propuesta",
    description: "Diseño de solución técnica con alcance, cronograma y presupuesto detallado."
  },
  {
    step: "03",
    title: "Ejecución",
    description: "Implementación por equipo especializado con protocolos de seguridad y calidad."
  },
  {
    step: "04",
    title: "Seguimiento",
    description: "Puesta en marcha, pruebas y soporte técnico continuo para garantizar la operación."
  }
];

/**
 * Horario de atención. Un único origen para la web y para el JSON-LD:
 * antes vivía escrito a mano en ContactInfo y en lib/schema.ts, y ambos
 * se contradecían.
 */
export const businessHours = {
  weekdays: { label: "Lunes a viernes", value: "08:00 - 17:00", opens: "08:00", closes: "17:00" }
};
