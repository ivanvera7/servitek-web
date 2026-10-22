# SERVITEK — Guía de Edición de Contenido

## Resumen

Esta guía explica dónde y cómo modificar el contenido del sitio web sin tocar código de componentes.

**Regla general:** Todo el contenido está en `/src/data/`. Solo edita archivos `.ts` en esa carpeta.

---

## 1. Información de la Empresa

**Archivo:** `src/data/company.ts`

### Cambiar nombre, eslogan o descripción

```typescript
export const company = {
  name: "SERVITEK",
  slogan: "ELECTROMECÁNICA, MATERIALES ELÉCTRICOS",
  description: "Soluciones de ingeniería eléctrica...",
  // ...
}
```

### Cambiar misión, visión, valores

```typescript
export const company = {
  mission: "Proveer soluciones integrales...",
  vision: "Ser la empresa referente...",
  values: [
    { title: "Confiabilidad", description: "..." },
    // ...
  ]
}
```

### Cambiar teléfono

```typescript
export const company = {
  contact: {
    phone: "+595XXXXXXXX",
    phoneFormatted: "(021) XXX-XXXX",
    // ...
  }
}
```

### Cambiar WhatsApp

```typescript
export const company = {
  contact: {
    whatsapp: "+595XXXXXXXX",
    whatsappMessage: "Hola, me interesa información sobre sus servicios.",
    // ...
  }
}
```

**NOTA:** El número de WhatsApp solo se cambia AQUÍ. No tocar `src/lib/whatsapp.ts`.

### Cambiar email

```typescript
export const company = {
  contact: {
    email: "info@servitek.com.py",
    // ...
  }
}
```

### Cambiar dirección

```typescript
export const company = {
  contact: {
    address: "Asunción, Paraguay",
    // ...
  }
}
```

### Cambiar redes sociales

```typescript
export const company = {
  social: {
    facebook: "https://facebook.com/servitek",
    instagram: "https://instagram.com/servitek",
    linkedin: "https://linkedin.com/company/servitek",
    // ...
  }
}
```

---

## 2. Navegación

**Archivo:** `src/data/navigation.ts`

### Cambiar orden del menú

```typescript
export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  // Reordenar, agregar o eliminar items
]
```

### Cambiar texto del CTA

```typescript
export const navigation = [
  // ...
  {
    label: "SOLICITAR PRESUPUESTO",
    href: "/contacto",
    isCta: true
  }
]
```

---

## 3. Servicios

**Archivo:** `src/data/services.ts`

### Cambiar un servicio existente

```typescript
export const services = [
  {
    id: "iluminacion",
    title: "ILUMINACIÓN INDUSTRIAL",
    slug: "iluminacion-e-ingenieria-ex",
    description: "Diseño, cálculo lumínico...",
    icon: "Lightbulb",
    solutions: [
      "Iluminación de plantas industriales",
      // Editar, agregar o eliminar soluciones
    ],
    image: "/images/services/iluminacion.webp",
    // ...
  }
]
```

### Agregar un nuevo servicio

Agregar un nuevo objeto al array `services`:

```typescript
{
  id: "nuevo-servicio",
  title: "NUEVO SERVICIO",
  slug: "nuevo-servicio",
  description: "Descripción del servicio...",
  icon: "IconName", // Ver lucide-react para iconos
  solutions: ["Solución 1", "Solución 2"],
  image: "/images/services/nuevo-servicio.webp",
  cta: "Conocer servicio",
  clients: ["Cliente 1", "Cliente 2"]
}
```

### Cambiar iconos

Los iconos son de Lucide React. Verificar nombres en: https://lucide.dev/icons/

Ejemplos: `Lightbulb`, `Zap`, `Wrench`, `Cog`, `Battery`, `Plug`

---

## 4. Sectores

**Archivo:** `src/data/sectors.ts`

### Cambiar un sector

```typescript
export const sectors = [
  {
    id: "agroindustria",
    title: "AGROINDUSTRIA Y SILOS",
    slug: "agroindustria-y-silos",
    description: "Soluciones eléctricas...",
    problems: ["Problema 1", "Problema 2"],
    solutions: ["Solución SERVITEK 1", "Solución SERVITEK 2"],
    // ...
  }
]
```

Los sectores ya no llevan campo `image`: sus tarjetas y cabeceras no tienen
fondo propio y se ven sobre el fondo ambiental del sitio. No hace falta
tocar ni subir nada al agregar o reordenar sectores.

### Agregar un sector

Agregar un nuevo objeto al array `sectors`:

```typescript
{
  id: "nuevo-sector",
  title: "NUEVO SECTOR",
  slug: "nuevo-sector",
  description: "Descripción del sector...",
  problems: ["Problema común 1", "Problema común 2"],
  solutions: ["Solución SERVITEK 1", "Solución SERVITEK 2"],
  cta: "Conocer soluciones"
}
```

---

## 5. Proyectos

**Archivo:** `src/data/projects.ts`

### Agregar un proyecto real

```typescript
export const projects = [
  {
    id: "proyecto-1",
    title: "Nombre del Proyecto",
    sector: "Frigoríficos",
    location: "Asunción, Paraguay",
    year: "2024",
    services: ["Auditoría y Automatización"],
    description: "Descripción del proyecto ejecutado...",
    images: ["/images/projects/proyecto-1.webp"],
    featured: true
  }
]
```

### Proyectos demo (placeholders)

Los proyectos actuales son DEMO. Cada uno ya tiene una imagen de portada
generada (ilustración técnica sobre fondo oscuro) en `/public/images/projects/`,
referenciada desde el campo `image` de cada proyecto — se usa como fondo en
la tarjeta de proyecto y en la cabecera de su página de detalle. Cuando tengas
proyectos reales:

1. Eliminar o modificar los objetos existentes en `projects.ts`
2. Agregar los datos reales
3. Subir la fotografía real del proyecto a `/public/images/projects/` y
   actualizar el campo `image` (formato recomendado: WebP, 800×600px)

**IMPORTANTE:** No afirmar que los proyectos demo son proyectos reales de SERVITEK.

---

## 6. Datos de Contacto

**Archivo:** `src/data/contact.ts`

### Cambiar opciones del formulario

```typescript
export const serviceOptions = [
  "Iluminación e Ingeniería Ex",
  "Auditoría y Automatización",
  "Motores, Bombas y HVAC",
  "Infraestructura Eléctrica y Respaldo",
  "Otro"
]
```

### Cambiar mensaje de WhatsApp generado

El formulario genera un mensaje de WhatsApp con los datos introducidos. Para modificar el formato del mensaje, editar en `src/data/contact.ts`:

```typescript
export const whatsappMessageTemplate = (data: FormData) => {
  return `Hola, soy ${data.name} de ${data.company}...`;
}
```

---

## 7. Imágenes

### Estructura de carpetas

```
/public/images/
├── brand/       # Logotipo y emblema de SERVITEK
├── hero/        # Fotografía de planta de la portada (2 tamaños)
├── services/    # Imágenes por servicio (referenciadas en services.ts)
├── projects/    # Marcadores de proyecto (sustituir por fotos reales)
├── brands/      # Logotipos de fabricantes representados
└── equipo/      # Foto del fundador (ver LEEME.txt)
```

### Cambiar la fotografía de la portada

Sustituir `public/images/hero/planta-industrial.webp` (1600–1800 px de ancho,
< 200 kB) y su versión móvil `planta-industrial-960.webp` (960 px) por otras
con el mismo nombre. Se usa en `src/components/sections/ValueProposition.tsx`.

### Formatos recomendados

- WebP para fotografías
- PNG solo para logos con transparencia

---

## 8. Logos

Los archivos de origen de la marca son dos SVG (`serviteek_eas_premium.svg`,
logotipo horizontal, y `serviteek_emblema_s_premium.svg`, emblema "S"). Cada
uno solo envuelve un PNG de ~1 MB, así que el sitio no los usa directamente:
de ellos se generaron versiones recortadas y comprimidas.

| Archivo | Uso |
|---------|-----|
| `images/brand/servitek-logo.webp` | Cabecera y pie (componente `Logo`) |
| `images/brand/servitek-logo.png` | Logo del JSON-LD de Organization |
| `images/brand/servitek-emblema.webp` | Emblema "S" (componente `Emblem`): portada, cierres, cabeceras, carga |
| `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` | Pestaña del navegador |
| `apple-touch-icon.png`, `icon-192x192.png`, `icon-512x512.png` | iOS y manifest |
| `og-image.jpg` | Vista previa al compartir en WhatsApp, LinkedIn, etc. |

Los dos componentes viven en `src/components/ui/Brand.tsx`. Ambas piezas
están diseñadas para fondo oscuro: el texto del logotipo es plateado.

Si llega una versión vectorial real del logo, basta con sustituir estos
archivos manteniendo los nombres (y las proporciones de ancho/alto que
declara `Brand.tsx`).

---

## 9. Colores y tipografía

La paleta, la tipografía y las piezas reutilizables están documentadas en el
README, sección "Sistema de diseño". Los colores viven solo en
`tailwind.config.ts`; las fuentes se cargan en `src/app/layout.tsx` con
`next/font` (Archivo, IBM Plex Sans, IBM Plex Mono).

---

## 10. Estilos Generales

### Cambiar border radius global

**Archivo:** `tailwind.config.ts`

```typescript
borderRadius: {
  'sm': '0.25rem',
  'md': '0.5rem',
  'lg': '0.75rem',
  // ...
}
```

### Cambiar sombras

**Archivo:** `tailwind.config.ts`

```typescript
boxShadow: {
  'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  // ...
}
```

---

## 11. SEO

### Cambiar título del sitio

**Archivo:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "SERVITEK | Soluciones Eléctricas...",
  // ...
}
```

### Cambiar meta description

**Archivo:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  description: "SERVITEK ofrece soluciones...",
  // ...
}
```

### Cambiar palabras clave

**Archivo:** `src/app/layout.tsx`

```typescript
keywords: ["empresa eléctrica Paraguay", ...],
```

---

## 12. Formulario de Contacto

### Cambiar campos del formulario

**Archivo:** `src/components/contact/ContactForm.tsx`

Los campos están definidos como componentes. Para agregar un campo:

1. Agregar el campo al tipo `FormData` en `src/types/`
2. Agregar el campo al formulario JSX
3. Agregar el campo al manejo de envío

### Cambiar destino del formulario

Actualmente envía por WhatsApp. Para cambiar a email/API:

1. Modificar la función `handleSubmit` en `ContactForm.tsx`
2. Implementar la integración deseada

---

## 13. WhatsApp

### Cambiar número

**Solo cambiar en:** `src/data/company.ts`

```typescript
contact: {
  whatsapp: "+595XXXXXXXX",  // ← Cambiar aquí
}
```

No es necesario tocar ningún otro archivo.

### Cambiar mensaje predeterminado

**Archivo:** `src/data/company.ts`

```typescript
contact: {
  whatsappMessage: "Hola, me interesa información sobre sus servicios industriales.",
}
```

---

## 14. Páginas Internas

### Modificar contenido de una página

Cada página está en `src/app/[pagina]/page.tsx`.

Para modificar el contenido específico de una página:

1. Buscar el componente de la página
2. Modificar los textos directamente O
3. Mover los textos a `src/data/` para mantener consistencia

### Agregar una nueva página

1. Crear carpeta en `src/app/nueva-pagina/`
2. Crear `page.tsx` dentro
3. Agregar enlace en `src/data/navigation.ts`

---

## 15. Errores Comunes

### "No encuentro dónde cambiar el texto X"

1. Buscar el texto en `src/data/`
2. Si no está ahí, buscar en el componente específico
3. Si es un componente de UI, puede estar hardcodeado

### "La imagen no aparece"

1. Verificar que esté en `/public/images/...`
2. Verificar la ruta en el archivo de datos correspondiente
3. Verificar el formato (webp, jpg, png)

### "El WhatsApp no funciona"

1. Verificar que el número esté en `src/data/company.ts`
2. Verificar que el formato sea correcto: `+595XXXXXXXX`
3. Verificar que `src/lib/whatsapp.ts` esté importado correctamente

---

## Checklist de Cambios

Antes de cada cambio:

- [ ] Identificar el archivo a modificar en `src/data/`
- [ ] No tocar componentes de UI
- [ ] Verificar que las imágenes existan
- [ ] Probar en móvil y desktop
- [ ] Verificar que los links funcionen
- [ ] No inventar información no confirmada

---

## 16. Contenido de Páginas Internas

### Página Nosotros

**Archivo:** `src/data/company-content.ts`

Contiene:
- Título y subtítulo de la página
- Estadísticas de confianza
- Diferenciales de la empresa
- Propuesta de valor
- Pilares "Por qué SERVITEK"

```typescript
export const aboutContent = {
  title: "Ingeniería para operaciones que exigen confiabilidad.",
  subtitle: "...",
  stats: [...],
  differentials: [...]
};

export const valueProposition = {
  headline: "Continuidad operativa.\nEficiencia energética.\nSeguridad crítica.",
  description: "..."
};

export const whyServitek = {
  title: "Cuando tu operación no puede parar, la ingeniería importa.",
  pillars: [...]
};
```

### Política de Privacidad

**Archivo:** `src/app/politica-de-privacidad/page.tsx`

Contenido pendiente de redacción por el cliente.

### Términos y Condiciones

**Archivo:** `src/app/terminos-y-condiciones/page.tsx`

Contenido pendiente de redacción por el cliente.

---

## 17. Contactos de la Empresa

Los datos de contacto actualizados son:

| Campo | Valor |
|-------|-------|
| Razón social | SERVITEK E.A.S. |
| RUC | 80176311-8 |
| Teléfono | 0981 118743 |
| WhatsApp | +595981118743 |
| Email | servitek.py@gmail.com |
| Ubicación | Asunción, Paraguay |

Para cambiar estos datos, editar `src/data/company.ts`.

---

## 18. Navegación del Footer

**Archivo:** `src/data/navigation.ts`

El footer tiene su propia navegación con enlaces legales:

```typescript
export const footerNavigation: NavigationItem[] = [
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones" }
];
```

Para agregar más enlaces al footer, agregar objetos al array `footerNavigation`.
