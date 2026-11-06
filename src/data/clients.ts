import { Client } from '@/types/client';

/**
 * Empresas que confían en SERVITEK (lista facilitada por la empresa).
 *
 * Los logotipos se tomaron de las webs públicas de cada cliente (Biox: bioxsa.com). Copavic,
 * Piro'y y Elevare no publican un logotipo descargable: se muestran como marca
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
    logo: '/images/clients/biox.webp',
    logoWidth: 480,
    logoHeight: 332,
    logoClass: 'h-16 md:h-[4.5rem]',
    logoTone: 'color',
  },
  { name: 'Copavic Ltda.' },
  { name: "Piro'y S.A." },
  { name: 'Elevare EAS' },
];
