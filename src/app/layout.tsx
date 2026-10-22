import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL, IS_INDEXABLE } from '@/lib/site';
import { Providers } from '@/components/layout/Providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

// Archivo con eje de anchura: los titulares van expandidos, como las
// letras del logotipo.
const display = Archivo({
  subsets: ['latin'],
  display: 'swap',
  axes: ['wdth'],
  variable: '--font-display',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'SERVITEK | Electromecánica Industrial y Servicios Eléctricos en Paraguay',
    template: '%s | SERVITEK',
  },
  description:
    'SERVITEK ofrece electromecánica industrial, automatización, mantenimiento, infraestructura y respaldo energético para plantas industriales en Paraguay.',
  keywords: [
    'empresa eléctrica Paraguay',
    'electromecánica industrial Paraguay',
    'mantenimiento industrial Paraguay',
    'automatización industrial Paraguay',
    'electromecánica Paraguay',
    'tableros eléctricos Paraguay',
    'grupos electrógenos Paraguay',
    'mantenimiento de motores Paraguay',
    'infraestructura eléctrica Paraguay',
    'HVAC industrial Paraguay',
  ],
  authors: [{ name: 'SERVITEK' }],
  creator: 'SERVITEK',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: SITE_URL,
    siteName: 'SERVITEK',
    title: 'SERVITEK | Electromecánica Industrial y Servicios Eléctricos en Paraguay',
    description:
      'Electromecánica industrial, automatización, mantenimiento, infraestructura y respaldo energético para plantas industriales en Paraguay.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SERVITEK E.A.S. — Electromecánica industrial en Paraguay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SERVITEK | Electromecánica Industrial y Servicios Eléctricos en Paraguay',
    description:
      'Electromecánica industrial, automatización, mantenimiento, infraestructura y respaldo energético para plantas industriales en Paraguay.',
    images: ['/og-image.jpg'],
  },
  // Mientras no haya dominio propio el sitio no debe indexarse (ver lib/site.ts).
  robots: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
    googleBot: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="es" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <meta name="theme-color" content="#07090D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen">
        <div className="ambient" aria-hidden="true" />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-chrome focus:px-5 focus:py-3 focus:font-medium focus:text-ink"
        >
          Saltar al contenido
        </a>
        <Providers>
          <Navbar />
          <main id="contenido">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
