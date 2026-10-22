# SERVITEK — Arquitectura del Proyecto

## Resumen

Sitio web corporativo profesional para SERVITEK, empresa paraguaya de ingeniería eléctrica, electromecánica y servicios industriales.

---

## Stack Tecnológico

| Tecnología | Propósito |
|------------|-----------|
| Next.js 14 | Framework React con App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first CSS |
| Lucide React | Iconografía |
| Zod | Validación de esquemas |
| React Hook Form | Manejo de formularios |
| next-sitemap | Generación dinámica de sitemap |
| ESLint | Linting |
| Prettier | Formato de código |

---

## Estructura de Carpetas

```
servitek-web/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── layout.tsx          # Layout raíz
│   │   ├── page.tsx            # Home
│   │   ├── servicios/
│   │   │   ├── page.tsx        # Servicios (lista)
│   │   │   ├── iluminacion-e-ingenieria-ex/page.tsx
│   │   │   ├── auditoria-y-automatizacion/page.tsx
│   │   │   ├── motores-bombas-hvac/page.tsx
│   │   │   └── infraestructura-electrica-respaldo/page.tsx
│   │   ├── sectores/page.tsx
│   │   ├── nosotros/page.tsx
│   │   ├── proyectos/page.tsx
│   │   ├── contacto/page.tsx
│   │   ├── politica-de-privacidad/page.tsx
│   │   ├── loading.tsx         # Loading global
│   │   ├── error.tsx           # Error boundary global
│   │   └── not-found.tsx       # 404 personalizada
│   │
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── navigation/         # Menú móvil, breadcrumbs
│   │   ├── hero/               # Hero sections
│   │   ├── sections/           # Secciones reutilizables
│   │   ├── services/           # ServiceCard, ServiceGrid
│   │   ├── sectors/            # SectorCard
│   │   ├── projects/           # ProjectCard
│   │   ├── contact/            # ContactForm
│   │   └── ui/                 # Botones, badges, headers
│   │
│   ├── data/                   # CONTENIDO CENTRALIZADO
│   │   ├── company.ts          # Datos de la empresa
│   │   ├── navigation.ts       # Menú de navegación
│   │   ├── services.ts         # Servicios
│   │   ├── sectors.ts          # Sectores
│   │   ├── projects.ts         # Proyectos
│   │   └── contact.ts          # Datos de contacto
│   │
│   ├── lib/                    # Utilidades
│   │   ├── utils.ts            # Helpers generales
│   │   ├── whatsapp.ts         # Lógica de WhatsApp
│   │   └── schema.ts           # JSON-LD Schema.org
│   │
│   ├── types/                  # Definiciones TypeScript
│   │   ├── company.ts
│   │   ├── service.ts
│   │   ├── project.ts
│   │   ├── sector.ts
│   │   └── contact.ts
│   │
│   └── styles/                 # Estilos globales
│       └── globals.css
│
├── public/
│   ├── images/
│   │   ├── logo/               # Variantes del logo
│   │   ├── hero/               # Imágenes del hero
│   │   ├── services/           # Imágenes de servicios
│   │   ├── projects/           # Imágenes de proyectos
│   │   └── company/            # Imágenes institucionales
│   │   # Sectores: sin imágenes — tarjetas y cabeceras sin fondo propio
│   ├── favicon.ico
│   ├── apple-touch-icon.png    # 180x180
│   ├── icon-192x192.png        # PWA 192x192
│   ├── icon-512x512.png        # PWA 512x512
│   ├── site.webmanifest        # PWA manifest
│   ├── robots.txt
│   └── sitemap.xml
│
├── ARCHITECTURE.md             # Este archivo
├── CONTENT_GUIDE.md            # Guía de edición de contenido
├── README.md                   # Documentación del proyecto
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── .env.example
```

---

## Sistema de Diseño (Design Tokens)

### Colores y tipografía

La fuente de verdad es `tailwind.config.ts` y la sección "Identidad visual y sistema de diseño"
del README. Resumen: fondo `ink` (#07090D), texto `chrome` en tres niveles,
rojo `signal` y azul `volt` tomados del emblema. Titulares en Archivo
expandida, texto en IBM Plex Sans y rótulos en IBM Plex Mono.

### Espaciado

| Token | Valor |
|-------|-------|
| `space-xs` | 0.25rem (4px) |
| `space-sm` | 0.5rem (8px) |
| `space-md` | 1rem (16px) |
| `space-lg` | 1.5rem (24px) |
| `space-xl` | 2rem (32px) |
| `space-2xl` | 3rem (48px) |
| `space-3xl` | 4rem (64px) |
| `space-4xl` | 6rem (96px) |

### Breakpoints

| Nombre | Valor |
|--------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

### Border Radius

| Token | Valor |
|-------|-------|
| `radius-sm` | 0.25rem (4px) |
| `radius-md` | 0.5rem (8px) |
| `radius-lg` | 0.75rem (12px) |
| `radius-full` | 9999px |

### Sombras

| Token | Uso |
|-------|-----|
| `shadow-sm` | Cards sutiles |
| `shadow-md` | Navbar sticky |
| `shadow-lg` | Modales, dropdowns |

---

## Páginas y URLs

| URL | Página | Descripción |
|-----|--------|-------------|
| `/` | Home | Página principal |
| `/servicios` | Servicios | Lista de servicios |
| `/servicios/iluminacion-e-ingenieria-ex` | Servicio 1 | Iluminación Industrial |
| `/servicios/auditoria-y-automatizacion` | Servicio 2 | Auditoría y Automatización |
| `/servicios/motores-bombas-hvac` | Servicio 3 | Motores, Bombas y HVAC |
| `/servicios/infraestructura-electrica-respaldo` | Servicio 4 | Infraestructura y Respaldo |
| `/sectores` | Sectores | Sectores industriales |
| `/sectores/[slug]` | Sector individual | Detalle de sector: problemas, soluciones y servicios relacionados |
| `/nosotros` | Nosotros | Página institucional |
| `/proyectos` | Proyectos | Portafolio de proyectos |
| `/proyectos/[slug]` | Proyecto individual | Detalle de proyecto con sidebar de información |
| `/contacto` | Contacto | Formulario de contacto |
| `/politica-de-privacidad` | Política de Privacidad | Política de privacidad y datos |

---

## Componentes Principales

### Layout

| Componente | Descripción |
|------------|-------------|
| `Navbar` | Navegación sticky con logo, menú, CTA |
| `Footer` | Footer corporativo completo |
| `MobileMenu` | Menú hamburguesa móvil |

### Sections (Home)

| Componente | Descripción |
|------------|-------------|
| `Hero` | Titular, contactos directos y emblema montado como instrumento (`EmblemStage`) |
| `TrustBar` | Banda continua con sellos y unidades de negocio |
| `ValueProposition` | Propuesta de valor |
| `BusinessUnits` | Índice interactivo de las 5 unidades de negocio |
| `WhyServitek` | Sección "Por qué SERVITEK" |
| `SectorsPreview` | Preview de sectores |
| `CTASection` | Call-to-action final |

### UI

| Componente | Descripción |
|------------|-------------|
| `Button` | Botón reutilizable (primary, secondary, ghost) |
| `SectionHeader` | Título + subtítulo de sección |
| `StatCard` | Tarjeta de estadística |
| `Badge` | Etiqueta/badge |
| `PageHero` | Hero para páginas internas |

### Services

| Componente | Descripción |
|------------|-------------|
| `ServiceCard` | Tarjeta de servicio individual |
| `ServiceGrid` | Grid de servicios |
| `ServiceDetail` | Detalle de servicio (página interna) |

### Sectors

| Componente | Descripción |
|------------|-------------|
| `SectorCard` | Tarjeta de sector |
| `SectorDetail` | Detalle de sector |

### Projects

| Componente | Descripción |
|------------|-------------|
| `ProjectCard` | Tarjeta de proyecto |
| `ProjectGrid` | Grid de proyectos |

### Contact

| Componente | Descripción |
|------------|-------------|
| `ContactForm` | Formulario de contacto |
| `ContactInfo` | Información de contacto |
| `WhatsAppButton` | Botón flotante de WhatsApp |

---

## Sistema de Contenido

El contenido está centralizado en `/src/data/`. Para modificar textos, servicios o contactos, solo se editan estos archivos:

| Archivo | Contenido |
|---------|-----------|
| `company.ts` | Nombre, eslogan, misión, visión, valores, contacto |
| `navigation.ts` | Menú de navegación |
| `services.ts` | Los 4 servicios principales |
| `sectors.ts` | Sectores industriales |
| `projects.ts` | Proyectos (placeholders inicialmente) |
| `contact.ts` | Datos de contacto, opciones de formulario |

---

## Estrategia Responsive

### Mobile First

Todos los estilos se escriben para móvil primero y se escalan con breakpoints:

- **320px - 767px**: Mobile
- **768px - 1023px**: Tablet
- **1024px - 1279px**: Desktop
- **1280px+**: Desktop grande

### Comportamiento por componente

| Componente | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| Navbar | Hamburguesa | Hamburguesa | Horizontal |
| Hero | stacked | stacked | side by side |
| ServiceCards | 1 columna | 2 columnas | 2-4 columnas |
| SectorCards | 1 columna | 2 columnas | 3-4 columnas |
| Footer | stacked | 2 columnas | 4 columnas |

---

## Estrategia SEO

### Metadata

```typescript
{
  title: "SERVITEK | Soluciones Eléctricas y Electromecánicas en Paraguay",
  description: "SERVITEK ofrece soluciones de ingeniería eléctrica, electromecánica, automatización, mantenimiento, infraestructura y respaldo energético para industrias en Paraguay.",
  keywords: ["empresa eléctrica Paraguay", "ingeniería eléctrica", "automatización industrial", ...],
  openGraph: { ... },
  twitter: { ... }
}
```

### Estructura SEO

- URLs amigables y descriptivas
- Canonical en cada página
- Sitemap.xml generado dinámicamente con `next-sitemap`
- Robots.txt configurado
- Schema.org (Organization, LocalBusiness, Service)
- Imágenes con alt text descriptivo
- Headings jerárquicos (h1 → h2 → h3)

### Sitemap

El sitemap se genera dinámicamente con `next-sitemap`. Configuración en `next-sitemap.config.js`:

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://servitek.com.py',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};
```

Archivos generados: `sitemap.xml` y `robots.txt` en `public/`

---

## Estrategia de Imágenes

### Formato

- WebP preferido
- Fallback a JPG/PNG
- Optimización automática con Next.js Image

### Nomenclatura

```
planta-industrial.webp
service-iluminacion.webp
sector-agroindustria.webp
project-frigorifico-01.webp
```

### Alt Text

Siempre descriptivo y relevante para SEO:

```html
<img alt="Tablero eléctrico industrial SERVITEK - mantenimiento preventivo" />
```

---

## WhatsApp

### Configuración

El número de WhatsApp se define en un solo lugar:

```typescript
// src/data/company.ts
export const company = {
  contact: {
    whatsapp: "+595XXXXXXXX",
    whatsappMessage: "Hola, me interesa..."
  }
}
```

### Uso

```typescript
import { generateWhatsAppUrl } from '@/lib/whatsapp';

const url = generateWhatsAppUrl(); // Usa datos de company
const urlCustom = generateWhatsAppUrl("Mensaje personalizado");
```

---

## Accesibilidad (WCAG 2.1 AA)

- Todos los inputs tienen `<label>` asociado
- Imágenes tienen `alt` text
- Colores con contraste suficiente (4.5:1 minimum)
- Navegación por teclado funcional
- Focus states visibles
- `aria-label` donde es necesario
- Menú accesible con Escape para cerrar

---

## Performance

### Optimizaciones

- Next.js Image para imágenes optimizadas
- Lazy loading de imágenes below-the-fold
- Fuentes con `display: swap`
- CSS/TSC combinados y minificados
- Componentes lazy-loaded cuando sea necesario
- Sin dependencias innecesarias

### Meta Objectives

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

---

## Despliegue

### GitHub

- Repositorio en GitHub
- `.gitignore` correcto
- README completo

### Vercel

- Deploy automático desde GitHub
- Variables de entorno en Vercel
- Dominio personalizado (opcional)

---

## Escalabilidad Futura

La arquitectura está preparada para añadir:

- Blog / Noticias
- Casos de éxito
- Galería de proyectos
- Catálogo de materiales
- Sistema de cotización
- CMS headless
- Multiidioma (ES/EN/PT)
- Panel administrativo

---

## Decisiones de Arquitectura

| Decisión | Justificación |
|----------|---------------|
| App Router (Next.js 14) | RSC, layouts anidados, mejor performance |
| TypeScript | Type safety, mejor DX, mantenibilidad |
| Tailwind CSS | Consistencia, rapididad, sin CSS custom innecesario |
| Data files centralizados | Fácil mantenimiento sin tocar componentes |
| Componentes pequeños | Reutilizabilidad, testeo, mantenimiento |
| Mobile first | 60%+ tráfico mobile esperado |
| Zod + React Hook Form | Validación type-safe, performance óptima |
| next-sitemap | Sitemap dinámico compatible con ISR |

---

## Formularios

### Validación

Se utiliza **Zod** + **React Hook Form** para validación de formularios:

```typescript
// src/components/contact/schemas.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  company: z.string().min(2, 'Empresa requerida'),
  phone: z.string().min(8, 'Teléfono requerido'),
  city: z.string().min(2, 'Ciudad requerida'),
  serviceType: z.string().min(1, 'Seleccione un servicio'),
  message: z.string().min(10, 'Mensaje requerido'),
  honeypot: z.string().max(0, 'Campo honeypot detectado'), // Anti-spam
});
```

### Anti-Spam

Mecanismo implementado:

1. **Honeypot field**: Campo oculto `website` que debe estar vacío
2. **Timestamp validation**: Verificar que el formulario no se envíe antes de 3 segundos
3. **CSRF protection**: Token de CSRF en formularios (si se integra backend)

El honeypot field es invisible para usuarios humanos pero los bots lo rellenan automáticamente.

### Integración

El formulario está preparado para integrarse con:
- **WhatsApp** (implementado por defecto)
- **Email** (SMTP/API)
- **CRM** (API webhook)
- **Google Sheets** (API)

---

## Tracking y Analytics

### Google Analytics 4 / GTM

Configuración mediante variables de entorno:

```env
# .env.local / Vercel Environment Variables
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Implementación

```typescript
// src/components/layout/Analytics.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, pageview } from '@/lib/analytics';
```

Se inyecta en `src/app/layout.tsx` condicionalmente:

```typescript
{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <Analytics />}
```

### Eventos Trackeados

| Evento | Descripción |触发 |
|--------|-------------|------|
| `page_view` | Vista de página | Automático |
| `whatsapp_click` | Clic en botón WhatsApp | `WhatsAppButton` |
| `form_submit` | Envío de formulario | `ContactForm` |
| `service_view` | Vista de servicio | `ServiceDetail` |
| `cta_click` | Clic en CTA | Cualquier botón CTA |

### Tracking de WhatsApp

```typescript
// src/lib/analytics.ts
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'contact_whatsapp',
    });
  }
};
```

---

## JSON-LD Schema.org

### Implementación

El JSON-LD se define en `src/lib/schema.ts` y se inyecta en el `<head>` desde `src/app/layout.tsx`.

### Schema Organization

```typescript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SERVITEK E.A.S.",
  "alternateName": "SERVITEK",
  "description": "...",
  "url": "https://servitek.com.py",
  "logo": "https://servitek.com.py/images/brand/servitek-logo.png",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "RUC",
    "value": "80176311-8"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+595981118743",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "email": "servitek.py@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Asunción",
    "addressCountry": "PY"
  },
  "sameAs": [...]
}
```

### Schema LocalBusiness

```typescript
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SERVITEK E.A.S.",
  "telephone": "+595981118743",
  "email": "servitek.py@gmail.com",
  "address": {...},
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.2637,
    "longitude": -57.5759
  },
  "openingHoursSpecification": {...}
}
```

### Inyección

```typescript
// src/app/layout.tsx
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Loading y Error States

### Loading Global

`src/app/loading.tsx` - Se muestra mientras carga cualquier página:

```typescript
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}
```

### Error Global

`src/app/error.tsx` - Error boundary para toda la app:

```typescript
'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>Algo salió mal</h2>
      <button onClick={() => reset()}>Intentar de nuevo</button>
    </div>
  );
}
```

### Loading por Subruta

Para subrutas específicas (servicios, sectores), crear archivos `loading.tsx` y `error.tsx` en cada carpeta:

```
src/app/servicios/
├── page.tsx
├── loading.tsx    # Loading específico de servicios
└── error.tsx      # Error boundary de servicios
```

Esto permite mostrar loaders específicos por sección sin afectar al resto de la app.

---

## Assets y PWA

### Archivos requeridos

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `favicon.ico` | 32x32, 16x16 | Navegador |
| `apple-touch-icon.png` | 180x180 | iOS Safari |
| `icon-192x192.png` | 192x192 | Android PWA |
| `icon-512x512.png` | 512x512 | Android PWA splash |
| `site.webmanifest` | - | Configuración PWA |

### site.webmanifest

```json
{
  "name": "SERVITEK",
  "short_name": "SERVITEK",
  "description": "Soluciones de ingeniería eléctrica y electromecánica",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0B2342",
  "background_color": "#FFFFFF",
  "display": "standalone",
  "scope": "/",
  "start_url": "/"
}
```

### Layout head

```typescript
// src/app/layout.tsx
<head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#0B2342" />
</head>
```

---

## Despliegue en Cloudflare Pages

### Decisión de arquitectura

**Cloudflare Pages** en vez de Vercel o GitHub Pages.

**Motivo:** Tanto el plan gratuito de Vercel (Hobby) como GitHub Pages restringen en sus propios términos de uso el alojamiento de sitios comerciales/de empresa. Vercel Hobby es "solo proyectos personales no comerciales" y GitHub Pages dice explícitamente que no está permitido para alojar el sitio de un negocio. Cloudflare Pages sí permite uso comercial en su plan gratuito, con ancho de banda ilimitado.

### Configuración técnica

- **output: 'export'** en `next.config.js` — genera el sitio 100% estático en build
- **images: { unoptimized: true }** — Cloudflare Pages free no tiene servicio de optimización on-demand
- **CERO route handlers** — con export estático no funcionan endpoints de servidor
- **generateStaticParams()** — páginas de detalle generadas en build time

### Checklist de despliegue

- [x] Output estático (`output: 'export'`)
- [x] Imágenes sin optimización on-demand
- [x] Sin endpoints de servidor (sin carpetas `src/app/api/`)
- [x] `generateStaticParams()` en páginas dinámicas
- [x] Variables de entorno `NEXT_PUBLIC_*`
- [x] Formulario 100% cliente (WhatsApp)
- [x] Sitemap generado con next-sitemap (compatible)

### Instrucciones de despliegue

1. Conectar repositorio de GitHub en el dashboard de Cloudflare Pages
2. Configurar build:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** 18+
3. Variables de entorno en Cloudflare Dashboard:

```env
# Vacía mientras no haya dominio propio: se usa el valor por defecto.
NEXT_PUBLIC_SITE_URL=
# Mantener en false hasta conectar el dominio definitivo.
NEXT_PUBLIC_ALLOW_INDEXING=false
# Opcional. Activarlo instala cookies: exige banner de consentimiento.
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Dominio personalizado vía Cloudflare DNS (recomendado si el dominio ya está en Cloudflare)

### Limitaciones del plan gratuito

- Ancho de banda: **ilimitado**
- Builds: 500 por mes
- Functions: **sí** disponibles en el plan gratuito (100.000 peticiones/día). Hoy no se usan, pero son la vía recomendada si el formulario debe enviar por email.
- Imágenes: Sin optimización on-demand (optimizar manualmente antes de subir)
