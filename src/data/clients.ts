import { Client } from '@/types/client';

/**
 * Empresas que confían en SERVITEK (lista facilitada por la empresa).
 *
 * Los logotipos se tomaron de las webs públicas de cada cliente. Copavic,
 * Piroy y Elevare no publican un logotipo descargable: se muestran como marca
 * tipográfica hasta que la empresa facilite el archivo oficial. Para añadirlo,
 * copiarlo en public/images/clients/ y completar `logo`, `logoWidth` y
 * `logoHeight`.
 *
 * PENDIENTE (empresa): confirmar con cada cliente el permiso para mostrar su
 * marca en el sitio.
 */
export const clients: Client[] = [
  {
    name: 'Farmacias Catedral S.A.',
    logo: '/images/clients/farmacia-catedral.svg',
    logoWidth: 168,
    logoHeight: 55,
    logoClass: 'h-11 md:h-12',
  },
  {
    name: 'Cervepar S.A.',
    logo: '/images/clients/cervepar.png',
    logoWidth: 162,
    logoHeight: 31,
    logoClass: 'h-7 md:h-8',
  },
  {
    name: 'Biox S.A.',
    logo: '/images/clients/biox.svg',
    logoWidth: 126,
    logoHeight: 42,
    logoClass: 'h-10 md:h-11',
  },
  { name: 'Copavic Ltda.' },
  { name: 'Piroy S.A.' },
  { name: 'Elevare EAS' },
];
