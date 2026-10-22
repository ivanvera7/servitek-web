import { Sector } from '@/types/sector';

/**
 * SECTORES INDUSTRIALES
 *
 * Descripciones y "problemas comunes" de los sectores 1 a 4 redactados por
 * SERVITEK. Las listas de soluciones se mantienen alineadas con las cuatro
 * unidades de negocio técnicas.
 *
 * PENDIENTE (empresa):
 * - Sector 2 (cárnicas): el texto recibido llegó cortado en el primer punto.
 *   Los tres problemas actuales son una redacción provisional coherente con
 *   el sector; hay que validarlos o sustituirlos por el texto original.
 * - Sector 5 (alcoholeras): aparecía en la referencia visual enviada por la
 *   empresa pero no en el listado de sectores posterior. Confirmar si se
 *   mantiene como sector propio.
 */
export const sectors: Sector[] = [
  {
    id: "agroindustria",
    title: "AGROINDUSTRIA Y COMPLEJOS DE SILOS",
    shortTitle: "Agroindustria y Complejos de Silos",
    slug: "agroindustria-y-silos",
    description: "Soluciones eléctricas y mecánicas de alta confiabilidad para plantas de procesamiento de granos, aceiteras, molinos y terminales portuarias que exigen máxima disponibilidad operativa en periodos críticos de zafra.",
    problems: [
      "Costosas paradas imprevistas en líneas de recepción y transporte durante la zafra",
      "Riesgo crítico de siniestros por uso de luminarias e instalaciones no aptas para ambientes con polvo combustible (atmósferas explosivas)",
      "Desgaste prematuro y fallas mecánicas en motores de gran potencia (elevadores y redlers)"
    ],
    solutions: [
      "Luminarias y tableros certificados para áreas clasificadas",
      "Mantenimiento predictivo de elevadores, redlers y motores de gran potencia",
      "Automatización de líneas de recepción y transporte",
      "Auditoría y modernización de tableros de potencia",
      "Respaldo energético para campaña de zafra"
    ],
    image: "/images/sectors/agroindustria.webp",
    cta: "Ver soluciones"
  },
  {
    id: "frigorificos",
    title: "INDUSTRIAS CÁRNICAS Y CADENA DE FRÍO",
    shortTitle: "Industrias Cárnicas y Cadena de Frío",
    slug: "frigorificos-y-cadena-de-frio",
    description: "Infraestructura eléctrica y térmica crítica para plantas frigoríficas de exportación, industrias lácteas y centros de distribución logística donde la continuidad de la temperatura controlada es innegociable.",
    problems: [
      // PENDIENTE (empresa): redacción provisional, el texto original llegó cortado.
      "Riesgo de pérdida de producción por falla en compresores y sistemas de refrigeración",
      "Rotura de la cadena de frío ante cortes de energía sin transferencia automática",
      "Corrosión y humedad permanente degradando tableros, motores y canalizaciones"
    ],
    solutions: [
      "Mantenimiento de compresores, motores y equipos de frío",
      "Sistemas de transferencia automática (ATS) y grupos electrógenos",
      "Termografía y monitoreo de puntos calientes",
      "Tableros y canalizaciones aptas para ambientes húmedos y corrosivos",
      "Corrección del factor de potencia"
    ],
    image: "/images/sectors/frigorificos.webp",
    cta: "Ver soluciones"
  },
  {
    id: "maquilas",
    title: "COMPLEJOS INDUSTRIALES Y MAQUILADORAS",
    shortTitle: "Complejos Industriales y Maquiladoras",
    slug: "complejos-industriales-y-maquiladoras",
    description: "Soluciones integrales de potencia, montaje y automatización para plantas manufactureras de procesos continuos que demandan altos índices de OEE (Eficiencia General de los Equipos).",
    problems: [
      "Líneas de producción detenidas por componentes electrónicos obsoletos en tableros principales",
      "Cuellos de botella operativos debido a la falta de automatización y control (PLC/HMI) en maquinaria antigua",
      "Ineficiencia energética y puntos calientes ocultos en las redes de distribución de potencia"
    ],
    solutions: [
      "Reconversión y armado de tableros principales",
      "Automatización con PLC, HMI y variadores de frecuencia",
      "Termografía y auditoría de redes de distribución",
      "Mantenimiento de motores, bombas y reductores",
      "Alineación láser y balanceo dinámico"
    ],
    image: "/images/sectors/maquilas.webp",
    cta: "Ver soluciones"
  },
  {
    id: "edificios",
    title: "INFRAESTRUCTURA COMERCIAL, SANATORIOS Y DATA CENTERS",
    shortTitle: "Infraestructura Comercial, Sanatorios y Data Centers",
    slug: "infraestructura-comercial-sanatorios-data-centers",
    description: "Electromecánica especializada para edificios corporativos, centros médicos y espacios críticos que requieren sistemas redundantes, seguros y alineados a normativas de bioseguridad.",
    problems: [
      "Riesgo de daños en equipamiento médico o servidores sensibles por falta de sistemas de Puesta a Tierra (PAT) certificados",
      "Fallas de climatización y renovación de aire (HVAC) que afectan el confort térmico o las condiciones estériles",
      "Instalaciones y tableros antiguos fuera de la norma técnica de seguridad"
    ],
    solutions: [
      "Sistemas de puesta a tierra certificados y medición de resistencia",
      "Mantenimiento de HVAC, chillers y unidades manejadoras de aire",
      "Actualización de tableros a norma técnica vigente",
      "Respaldo energético redundante y transferencia automática",
      "Iluminación de emergencia y señalización"
    ],
    image: "/images/sectors/edificios.webp",
    cta: "Ver soluciones"
  },
  {
    // PENDIENTE (empresa): confirmar si este sector se mantiene. Apareció en la
    // referencia visual enviada como "ALCOOLERA" pero no en el listado posterior.
    id: "alcoholeras",
    title: "ALCOHOLERAS Y DESTILERÍAS",
    shortTitle: "Alcoholeras y Destilerías",
    slug: "alcoholeras-y-destilerias",
    description: "Electromecánica para plantas de alcohol y etanol, donde conviven atmósferas explosivas, operación continua de zafra y equipos de proceso que no admiten parada.",
    problems: [
      "Áreas clasificadas por vapores de alcohol sin instalaciones certificadas",
      "Paradas en plena zafra con pérdida directa de producción",
      "Corrosión y humedad degradando tableros y motores"
    ],
    solutions: [
      "Iluminación y equipamiento para áreas clasificadas",
      "Automatización de procesos con PLC y variadores",
      "Mantenimiento de bombas, centrífugas y motores de proceso",
      "Tableros para ambientes corrosivos y húmedos",
      "Respaldo energético y transferencia automática"
    ],
    image: "/images/sectors/alcoholeras.webp",
    cta: "Ver soluciones"
  }
];
