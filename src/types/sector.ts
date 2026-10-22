export interface Sector {
  id: string;
  title: string;
  /** Título corto en caja normal: metadatos y breadcrumbs. */
  shortTitle: string;
  slug: string;
  description: string;
  fullDescription?: string;
  problems: string[];
  solutions: string[];
  /** Fotografía 16:9 (1600 px). La versión de tarjeta lleva el sufijo -card. */
  image: string;
  cta: string;
}
