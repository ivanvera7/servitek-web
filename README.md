<div align="center">

<img src=".github/assets/banner.png" alt="SERVITEK — Electromecánica industrial" width="720">

# Sitio web corporativo de SERVITEK

**SERVITEK E.A.S.** — Electromecánica industrial y servicios eléctricos de alta exigencia en Paraguay.

[![CI](https://github.com/ivanvera7/servitek-web/actions/workflows/ci.yml/badge.svg)](https://github.com/ivanvera7/servitek-web/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

</div>

---

Sitio estático generado con Next.js App Router y desplegado en Cloudflare Pages.
Sin servidor, sin base de datos y sin endpoints: `next build` produce HTML plano
en `out/` que el CDN sirve tal cual.

> [!IMPORTANT]
> **El sitio todavía no está publicado.** No hay dominio contratado y la
> indexación está desactivada a propósito (`NEXT_PUBLIC_ALLOW_INDEXING=false`).
> Parte del contenido es provisional y está marcado en el código con
> `PENDIENTE (empresa)`. Ver [Contenido pendiente](#contenido-pendiente).

## Índice

- [Estado del proyecto](#estado-del-proyecto)
- [Stack](#stack)
- [Puesta en marcha](#puesta-en-marcha)
- [Scripts](#scripts)
- [Estructura](#estructura)
- [Rutas](#rutas)
- [Editar el contenido](#editar-el-contenido)
- [Sistema de diseño](#sistema-de-diseño)
- [Variables de entorno](#variables-de-entorno)
- [Calidad y pruebas](#calidad-y-pruebas)
- [Despliegue en Cloudflare Pages](#despliegue-en-cloudflare-pages)
- [Conectar el dominio](#conectar-el-dominio)
- [Contenido pendiente](#contenido-pendiente)
- [Decisiones de arquitectura](#decisiones-de-arquitectura)
- [Limitaciones conocidas](#limitaciones-conocidas)

## Estado del proyecto

| Área | Estado | Nota |
|---|:--:|---|
| Build estático | ✅ | 23 páginas HTML, sin errores ni avisos |
| TypeScript | ✅ | Modo `strict`, sin ningún `any` |
| ESLint | ✅ | Sin avisos |
| Pruebas | ✅ | 25 pruebas sobre datos, rutas y SEO |
| Contraste WCAG 2.1 AA | ✅ | 0 combinaciones por debajo del mínimo |
| Responsive 320–1920 px | ✅ | Sin desbordamiento horizontal |
| Navegación por teclado | ✅ | Foco atrapado en el menú, sin paradas fuera de pantalla |
| Enlaces internos | ✅ | 22 comprobados, 0 rotos |
| Cabeceras de seguridad | ✅ | CSP, Referrer-Policy, Permissions-Policy |
| Contenido real de la empresa | 🟡 | Ver [Contenido pendiente](#contenido-pendiente) |
| Textos legales | 🟡 | Sin redactar; las páginas van con `noindex` |
| Dominio propio | ⬜ | Sin contratar |

**Peso de la portada:** 109 kB de JavaScript inicial más 178 kB de imagen del
hero. `public/` completo ocupa 1,1 MB.

## Stack

| | |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) — App Router, `output: 'export'` |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) en modo `strict` |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) con tokens propios |
| **Iconos** | [Lucide](https://lucide.dev/) |
| **Formularios** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **SEO** | [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) + JSON-LD Schema.org |
| **Pruebas** | [Vitest](https://vitest.dev/) |
| **Alojamiento** | [Cloudflare Pages](https://pages.cloudflare.com/) |

Requiere **Node.js 20 o superior**.

## Puesta en marcha

```bash
git clone https://github.com/ivanvera7/servitek-web.git
cd servitek-web
npm ci
npm run dev
```

Abrir <http://localhost:3000>.

Para revisar el sitio tal y como se publicará:

```bash
npm run build          # genera out/ y, después, sitemap.xml y robots.txt
npx serve out          # sirve el resultado estático
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Build estático en `out/`. El `postbuild` genera sitemap y robots |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint con la configuración de Next |
| `npm test` | Pruebas con Vitest |
| `npm run test:watch` | Pruebas en modo observación |
| `npm run check` | typecheck + lint + test. **Lo mismo que ejecuta el CI** |
| `npm run format` | Prettier sobre `src/` |

Antes de subir cambios, `npm run check`.

## Estructura

```
.
├── .github/workflows/ci.yml    Integración continua
├── public/
│   ├── _headers                Cabeceras de seguridad y caché (Cloudflare)
│   ├── images/                 Assets servidos tal cual (sin optimización on-demand)
│   │   ├── equipo/             Fotos del equipo — ver LEEME.txt
│   │   ├── hero/               Imagen principal
│   │   ├── logo/               Logotipos
│   │   ├── services/           Una imagen por unidad de negocio (fondo de tarjeta y cabecera)
│   │   └── projects/           Una imagen de portada por proyecto (fondo de tarjeta y cabecera)
│   └── favicon.ico, og-image.jpg, site.webmanifest
├── src/
│   ├── app/                    Rutas (App Router). Un directorio por página
│   ├── components/
│   │   ├── about/              Ficha del fundador
│   │   ├── contact/            Formulario e información de contacto
│   │   ├── hero/               Hero de la portada
│   │   ├── layout/             Navbar, Footer, Analytics, Providers
│   │   ├── projects/           Tarjeta de proyecto
│   │   ├── sections/           Bloques de la portada
│   │   ├── sectors/            Tarjeta de sector
│   │   ├── services/           Tarjeta de servicio
│   │   └── ui/                 Botón, migas, revelado al hacer scroll, etc.
│   ├── data/                   ⭐ TODO EL CONTENIDO EDITABLE
│   ├── lib/                    URL del sitio, SEO, Schema.org, iconos, WhatsApp
│   ├── styles/globals.css      Capa base y componentes de Tailwind
│   └── types/                  Interfaces de los datos
├── tests/                      Pruebas de datos y SEO
├── site.config.js              URL e indexación compartidas con next-sitemap
├── next-sitemap.config.js      Sitemap y robots.txt
└── tailwind.config.ts          Tokens de color, tipografía y sombras
```

Documentación complementaria: [`ARCHITECTURE.md`](ARCHITECTURE.md) (decisiones
técnicas en detalle) y [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md) (guía de edición
para quien no toca código).

## Rutas

Las 23 páginas se generan en tiempo de build. Las dinámicas salen de
`generateStaticParams()` leyendo `src/data/`.

| Ruta | Origen | Indexable |
|---|---|:--:|
| `/` | `src/app/page.tsx` | Sí |
| `/servicios` | `src/data/services.ts` | Sí |
| `/servicios/[slug]` | 5 unidades de negocio | Sí |
| `/sectores` | `src/data/sectors.ts` | Sí |
| `/sectores/[slug]` | 5 sectores | Sí |
| `/nosotros` | `src/data/company.ts` + `company-content.ts` | Sí |
| `/proyectos` | `src/data/projects.ts` | **No** — proyectos de ejemplo |
| `/proyectos/[slug]` | 4 proyectos de ejemplo | **No** |
| `/contacto` | `src/data/contact.ts` | Sí |
| `/politica-de-privacidad` | — | **No** — sin redactar |
| `/terminos-y-condiciones` | — | **No** — sin redactar |
| `404` | `src/app/not-found.tsx` | — |

> La columna «Indexable» describe la intención. Mientras
> `NEXT_PUBLIC_ALLOW_INDEXING` no valga `true`, **ninguna** página se indexa y
> `robots.txt` bloquea el rastreo completo.

## Editar el contenido

Todo el texto vive en `src/data/`. **No hace falta tocar los componentes.**

| Qué cambiar | Fichero |
|---|---|
| Nombre, RUC, misión, visión, valores, teléfono, email | `src/data/company.ts` |
| Cifras, textos de portada, fundador, horario, proceso | `src/data/company-content.ts` |
| Unidades de negocio | `src/data/services.ts` |
| Sectores industriales | `src/data/sectors.ts` |
| Proyectos | `src/data/projects.ts` |
| Menú y enlaces del pie | `src/data/navigation.ts` |
| Opciones del formulario | `src/data/contact.ts` |

<details>
<summary><b>Cambiar el teléfono o el WhatsApp</b></summary>

Un único sitio, `src/data/company.ts`. El resto de la web lo lee de ahí.

```ts
contact: {
  phone: "+595981118743",              // enlaces tel:
  phoneFormatted: "0981 118743",       // formato local visible
  phoneInternational: "+595-981-118-743", // formato internacional visible
  whatsapp: "+595981118743",           // enlace wa.me
  email: "servitek.py@gmail.com",
}
```

Hay una prueba que falla si el número de WhatsApp o el formato internacional
dejan de coincidir con el teléfono.
</details>

<details>
<summary><b>Añadir una unidad de negocio</b></summary>

1. Añadir el objeto en `src/data/services.ts`. El campo `icon` debe ser uno de
   los registrados en `src/lib/icons.tsx`; para uno nuevo, añadirlo allí.
2. Guardar la imagen en `public/images/services/` y apuntarla desde `image`.
3. Añadir la opción correspondiente en `serviceOptions` de `src/data/contact.ts`.

La ruta `/servicios/[slug]` se genera sola. `npm test` avisa si el slug está
repetido o si la imagen no existe.
</details>

<details>
<summary><b>Poner la foto del fundador</b></summary>

1. Guardar la imagen como `public/images/equipo/walter-vera.webp`
   (recorte vertical 3:4, mínimo 900 × 1200 px, menos de 150 kB).
2. En `src/data/company-content.ts`, dentro de `founder`, cambiar
   `photo: ""` por `photo: "/images/equipo/walter-vera.webp"`.

El espacio ya está reservado con la proporción final: el diseño no se moverá.
Instrucciones ampliadas en `public/images/equipo/LEEME.txt`.
</details>

<details>
<summary><b>Reemplazar imágenes</b></summary>

Cloudflare Pages no optimiza imágenes bajo demanda, así que **se optimizan a
mano antes de subirlas**:

| Uso | Formato | Tamaño | Peso objetivo |
|---|---|---|---|
| Hero | WebP | 1600 px de ancho | < 200 kB |
| Servicios y proyectos | WebP | 800 × 600 | < 80 kB |
| Fundador | WebP | 900 × 1200 (3:4) | < 150 kB |
| Compartir en redes | JPEG | 1200 × 630 | < 150 kB |

Las imágenes de servicios y proyectos que no son fotografías son marcadores
generados: ilustraciones técnicas sobre fondo navy, pensadas para sustituirse
por fotos reales de SERVITEK. Se usan como fondo de las tarjetas
(`ServiceCard`, `ProjectCard` y las tarjetas de portada) y de la cabecera
(`PageHero`) de cada ficha de detalle. Para reemplazar una, solo hace falta
subir la foto real con el mismo nombre de archivo (o cambiar la ruta en
`image` dentro de `services.ts` o `projects.ts`) — ningún componente
necesita tocarse.

Los sectores no llevan foto ni marcador de imagen: sus tarjetas y cabeceras
van sin fondo propio, sobre el fondo ambiental del sitio (`Aurora`, ver
`src/components/layout/Providers.tsx`). Así no suman peso de imagen y dejan
ver el fondo, igual que el resto de las páginas internas.
</details>

## Sistema de diseño

Los colores viven **solo** en `tailwind.config.ts`. No se escribe ningún color
a mano en los componentes.

| Token | Uso |
|---|---|
| `navy`, `navy-deep`, `navy-dark`, `navy-light`, `navy-lighter` | Fondos |
| `surface`, `surface-card`, `surface-muted` | Superficies y tarjetas |
| `blue` | Marca. **Solo decorativo**: líneas, puntos, fondos translúcidos |
| `blue-solid` / `blue-solid-hover` | Relleno de botón con texto blanco encima |
| `blue-text` | Texto e iconos azules sobre fondo oscuro |
| `line`, `line-strong` | Bordes |
| `danger`, `success`, `whatsapp` | Estados |

**Reglas de contraste** (verificadas sobre los fondos reales del sitio):

- `blue-solid` con texto blanco encima → **5,07:1**
- `blue-text` sobre navy → **6,53:1**
- El texto blanco **nunca baja del 55 %** de opacidad: por debajo no llega a 4,5:1
- `blue` no vale para texto ni como relleno de botón (solo alcanza 4,15:1)

## Variables de entorno

Copiar `.env.example` a `.env.local` para desarrollo, o definirlas en el panel
de Cloudflare Pages.

| Variable | Por defecto | Para qué sirve |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://servitek.pages.dev` | URL canónica. Alimenta canonical, Open Graph, sitemap y JSON-LD |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` | Con `true`, el sitio se indexa. Activar solo con el dominio definitivo conectado |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | *(vacío)* | Google Analytics 4. Opcional |

> [!WARNING]
> Activar Google Analytics instala cookies de terceros. Eso obliga a publicar
> una política de cookies y un banner de consentimiento, y a ampliar la
> `Content-Security-Policy` de `public/_headers`. **Hoy el sitio no instala
> ninguna cookie.**

El dominio no se escribe a mano en ningún fichero: se lee desde
`src/lib/site.ts` (aplicación) y `site.config.js` (next-sitemap), que comparten
las mismas variables.

## Calidad y pruebas

```bash
npm run check      # typecheck + lint + test
```

Las 25 pruebas cubren lo que el compilador no ve:

- Que toda ruta de imagen declarada en `src/data/` exista en `public/`
- Que no haya slugs repetidos ni con caracteres inválidos
- Que no queden marcadores de contenido pendiente visibles (`+XX`, `TODO:`, …)
- Que teléfono, WhatsApp y formato internacional sean el mismo número
- Que cada página emita `canonical` y que coincida con `og:url`
- Que `noIndex` bloquee de verdad la indexación
- Que `Organization` y `LocalBusiness` queden enlazados por `@id`
- Que no vuelvan a publicarse coordenadas geográficas inventadas

El [workflow de CI](.github/workflows/ci.yml) ejecuta typecheck, lint, pruebas y
build en cada push a `main` y en cada pull request, verifica que el export
genere `sitemap.xml`, `robots.txt` y `_headers`, y falla si el build modifica
ficheros versionados.

## Despliegue en Cloudflare Pages

Se eligió Cloudflare Pages porque el plan gratuito de Vercel (Hobby) y GitHub
Pages **restringen en sus términos el alojamiento de sitios comerciales**.
Cloudflare Pages sí permite uso comercial, con ancho de banda ilimitado.

### Configuración

| Ajuste | Valor |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Variable `NODE_VERSION` | `20` |

Añadir además las variables de entorno de la sección anterior.

Cada push despliega automáticamente. Las pull requests generan una vista previa.

### Comprobaciones tras el primer despliegue

- [ ] Las 23 páginas cargan y no hay enlaces rotos
- [ ] `/_headers` se aplica de verdad (inspeccionar las cabeceras de respuesta)
- [ ] `robots.txt` bloquea el rastreo mientras no haya dominio
- [ ] Medir Lighthouse sobre el despliegue real
- [ ] Probar el formulario de contacto en un iPhone real

> [!NOTE]
> **Cloudflare Pages Functions está incluido en el plan gratuito**
> (100.000 peticiones/día). Hoy no se usa ninguna, pero es la vía recomendada si
> en algún momento el formulario debe enviar por email en lugar de abrir
> WhatsApp.

## Conectar el dominio

Nada de esto está hecho: es la lista para cuando se contrate el dominio.

1. Añadir el dominio a Cloudflare y apuntar los *nameservers* en el registrador.
2. En Pages, **Custom domains**: añadir el dominio raíz y `www`.
3. Elegir la versión canónica (`www` o sin `www`) y crear una redirección **301**
   permanente desde la otra.
4. SSL/TLS en modo **Full (strict)**; activar **Always Use HTTPS**.
5. Actualizar `NEXT_PUBLIC_SITE_URL` y poner `NEXT_PUBLIC_ALLOW_INDEXING=true`.
   Volver a desplegar.
6. Comprobar que `canonical`, `og:url` y el sitemap usan ya el dominio nuevo.
7. Dar de alta la propiedad en **Google Search Console**, verificarla por DNS y
   enviar el sitemap.
8. Validar el JSON-LD con la herramienta de resultados enriquecidos de Google.
9. Crear la ficha de **Google Business Profile** y poner las coordenadas reales
   en `src/lib/schema.ts`.
10. Si se usa email corporativo, configurar los registros `MX`, `SPF`, `DKIM` y
    `DMARC`.
11. Activar HSTS descomentando el bloque de `public/_headers` — **solo cuando
    HTTPS lleve funcionando de forma estable.**

## Contenido pendiente

Marcado en el código con `PENDIENTE (empresa)`. Buscarlo con:

```bash
grep -rn "PENDIENTE (empresa)" src/
```

| Pendiente | Dónde | Bloquea publicar |
|---|---|:--:|
| Fotografías reales de obra, equipo e instalaciones | `public/images/` | Sí |
| Política de privacidad y términos, redactados | `src/app/*/page.tsx` | Sí |
| Dirección completa y coordenadas reales | `company.ts`, `lib/schema.ts` | Sí |
| Email corporativo propio (hoy hay un Gmail) | `src/data/company.ts` | Sí |
| Foto y biografía del fundador | `company-content.ts` | No |
| Proyectos reales con autorización del cliente | `src/data/projects.ts` | No |
| Cifras verificables (años, proyectos, equipo) | `company-content.ts` | No |
| Sector cárnicas: el texto original llegó cortado | `src/data/sectors.ts` | No |
| Confirmar si el sector *Alcoholeras* se mantiene | `src/data/sectors.ts` | No |
| Marcas representadas en la unidad de materiales | `src/data/services.ts` | No |
| URLs reales de redes sociales | `src/data/company.ts` | No |
| Certificaciones de la empresa y del personal | — | No |

## Decisiones de arquitectura

<details>
<summary><b>Por qué export estático y no SSR</b></summary>

Es una web corporativa informativa: el contenido cambia pocas veces al año y no
hay usuarios, sesiones ni datos dinámicos. El export estático da el mejor TTFB
posible (HTML servido desde el CDN), coste cero de servidor y una superficie de
ataque mínima. Como contrapartida, no hay optimización de imágenes bajo demanda:
se optimizan a mano antes de subirlas.
</details>

<details>
<summary><b>Por qué el formulario abre WhatsApp</b></summary>

Es el canal que la empresa usa de verdad, y encaja con el mercado paraguayo.
El formulario valida, compone el mensaje y abre WhatsApp con los datos ya
escritos; **el usuario debe pulsar enviar allí**. Si el navegador bloquea la
ventana emergente, se navega en la misma pestaña como respaldo, y siempre hay
un enlace de correo visible como alternativa.

Esto no deja registro en el servidor de las consultas. Para tenerlo hará falta
un servicio de formularios externo o una Cloudflare Pages Function.
</details>

<details>
<summary><b>Por qué el sitemap se genera en `out/` y no en `public/`</b></summary>

`next build` con `output: 'export'` copia `public/` a `out/` **antes** de que se
ejecute el `postbuild`. Con la configuración por defecto de next-sitemap, el
sitemap se escribía en `public/` cuando `out/` ya estaba generado, así que el
sitemap desplegado iba siempre un build por detrás. Por eso
`next-sitemap.config.js` fija `outDir: 'out'`, y `sitemap*.xml` y `robots.txt`
están en `.gitignore`.
</details>

<details>
<summary><b>Por qué se distingue <code>blue</code> de <code>blue-solid</code> y <code>blue-text</code></b></summary>

El azul de marca `#0878F9` no sirve para todo. Con texto blanco encima alcanza
4,15:1, por debajo del mínimo AA de 4,5:1; y como texto sobre el fondo navy se
queda en 4,48:1. Un solo token no puede cumplir en ambos papeles, así que hay
tres: uno decorativo, uno más oscuro para rellenos y uno más claro para texto.
</details>

## Limitaciones conocidas

- **Dependencias con avisos de seguridad.** `npm audit` reporta vulnerabilidades
  de severidad alta en Next.js y en dependencias de desarrollo. Todas requieren
  subir a Next 16 (cambio mayor con roturas) y **ninguna afecta a un export
  estático**: corresponden a Image Optimizer, Server Actions, middleware y SSR,
  que este sitio no ejecuta. Es riesgo del entorno de build, no de producción.
  Pendiente de planificar como tarea propia.
- **Sin variantes de imagen por ancho.** Con `images.unoptimized` no se genera
  `srcset`. El hero se sirve a 1600 px también en móvil. Aceptable con el peso
  actual (178 kB), mejorable con `<picture>` y variantes generadas a mano.
- **Core Web Vitals sin medir.** Las cifras de peso están medidas; LCP, INP y CLS
  reales solo pueden comprobarse sobre el despliegue en Cloudflare.
- **Probado en Chromium.** Falta verificación en Safari y Firefox reales.

---

<div align="center">
<sub>SERVITEK E.A.S. · RUC 80176311-8 · Asunción, Paraguay</sub>
</div>
