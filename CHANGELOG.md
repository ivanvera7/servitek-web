# Changelog

Todos los cambios relevantes del sitio web de SERVITEK.

## [1.0.2] - 2026-11-06

### Cambiado
- Servicios y sectores con una presentación nueva y simétrica: rejilla de
  3 × 2 (2 × 3 en tableta, una columna en móvil) con tarjetas de foto completa
  y una placa de vidrio líquido abajo (icono, título, descripción y enlace).
  La sexta tarjeta cierra la rejilla: en la portada lleva al catálogo
  completo y en /servicios y /sectores a pedir presupuesto.
- Animaciones: entrada escalonada de 70 ms, zoom suave de la foto, la placa
  sube 4 px y un foco de luz sigue al cursor (solo con ratón; con movimiento
  reducido no hay desplazamientos). Con transparencia reducida o sin
  `backdrop-filter`, la placa pasa a ser opaca.
- Componente compartido `GlassCard` / `GlassGrid` (components/ui/GlassCard);
  `ServiceCard` y `SectorCard` lo envuelven. La portada deja el índice con
  panel lateral de las unidades de negocio.

## [1.0.1] - 2026-11-06

### Corregido
- Logo correcto de Biox (bioxsa.com) y nombre Piro'y en Clientes.
- Auditoría de Web Interface Guidelines (Vercel): textos de ejemplo del
  formulario, foco de teclado en los canales del hero, menú móvil sin arrastre
  de scroll, botón de pausa en la banda de sellos, `touch-action`,
  `translate="no"` en marcas y año del pie actualizado en el navegador.

### Cambiado
- Pulido de acabado premium: en la portada solo tres secciones conservan el
  rótulo superior (antes ocho), se quitan los puntos de estado decorativos y
  los índices 01/02 de las cifras, el titular del hero se acorta a
  «Electromecánica para plantas que no paran.» (3 líneas en escritorio) y los
  mensajes de error del formulario aparecen con una transición breve.
- Sin rayas largas en textos visibles ni en etiquetas accesibles.
- El mismo pulido en todas las páginas (Servicios, Sectores, Nosotros,
  Contacto, Proyectos, legales y 404): rótulos superiores limitados a uno de
  cada tres encabezados, sin rótulos numerados en las fichas de detalle (las
  migas ya dan contexto), sin pastillas «Unidad 01» / «Sector 01» sobre las
  fotos y sin índices 01, 02… en listas sin orden.
- Titular de Nosotros acortado a «Electromecánica para operaciones
  exigentes» (2 líneas en escritorio, antes 4).
- Radios unificados: tarjetas a 24 px, iconos a 16 px.

## [1.0.0] — 2026-11-05

Primera versión estable del sitio.

### Añadido
- Sección **Clientes** en la portada y en Nosotros: Farmacias Catedral S.A.,
  Cervepar S.A., Biox S.A., Copavic Ltda., Piro'y S.A. y Elevare EAS. Logotipos
  en cromo monocromo que se encienden al pasar el cursor; los clientes sin
  logotipo disponible se muestran como marca tipográfica.
- Datos de clientes en `src/data/clients.ts` y pruebas que verifican que cada
  logotipo existe.
- `SectionHeading` admite `align="center"` para titulares de escaparate.

### Cambiado
- Acabado más sobrio y de mayor presencia, estilo escaparate: titulares más
  grandes en la portada y en las páginas internas, más aire entre secciones,
  tarjetas con esquinas más amplias y cabecera de vidrio más translúcida.
  La identidad «cromo y corriente» (paleta, tipografías y emblema) se mantiene.

### Anterior a 1.0.0
- Rediseño visual con la nueva identidad de marca, fotografías por servicio y
  sector, distribuidor oficial Conexled y canales de contacto directo.
