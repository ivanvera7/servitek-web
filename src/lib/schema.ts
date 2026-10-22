import { company } from '@/data/company';
import { businessHours } from '@/data/company-content';
import { absoluteUrl, SITE_URL } from '@/lib/site';

const ORG_ID = `${SITE_URL}/#organization`;

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: company.legalName || company.name,
    alternateName: company.name,
    description: company.description,
    url: SITE_URL,
    logo: absoluteUrl('/images/brand/servitek-logo.png'),
    image: absoluteUrl('/og-image.jpg'),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'RUC',
      value: company.ruc,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.contact.phone,
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    email: company.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
    // PENDIENTE (empresa): añadir aquí las URLs reales de redes sociales.
    // Se omite el campo mientras no estén confirmadas.
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    parentOrganization: { '@id': ORG_ID },
    name: company.legalName || company.name,
    description: company.description,
    url: SITE_URL,
    telephone: company.contact.phone,
    email: company.contact.email,
    image: absoluteUrl('/og-image.jpg'),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'RUC',
      value: company.ruc,
    },
    // PENDIENTE (empresa): falta streetAddress real.
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
    // PENDIENTE (empresa): no se declaran coordenadas hasta conocer la
    // ubicación real. Publicar un "geo" inventado perjudica el SEO local.
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: businessHours.weekdays.opens,
      closes: businessHours.weekdays.closes,
    },
  };
}

export function generateServiceSchema(
  services: Array<{ name: string; description: string; url: string }>
) {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.url),
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'Country',
      name: 'Paraguay',
    },
  }));
}
