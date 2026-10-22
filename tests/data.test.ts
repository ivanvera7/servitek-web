import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { services } from '@/data/services';
import { sectors } from '@/data/sectors';
import { projects } from '@/data/projects';
import { navigation, footerNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { serviceOptions } from '@/data/contact';

const PUBLIC = path.resolve(__dirname, '../public');
const slugify = (s: string) => s.toLowerCase();

/**
 * Estas pruebas cubren los fallos que la auditoría encontró en los datos y que
 * el compilador no detecta: rutas de imagen que no existen, slugs duplicados y
 * datos de contacto incoherentes entre sí.
 */
describe('rutas de imagen', () => {
  const rutas = [
    ...services.map((s) => s.image),
    ...projects.flatMap((p) => p.images),
  ].filter(Boolean);

  it('todas apuntan a un fichero que existe en public/', () => {
    const faltan = rutas.filter((r) => !existsSync(path.join(PUBLIC, r)));
    expect(faltan).toEqual([]);
  });
});

describe('recursos de marca', () => {
  // Rutas escritas en Brand.tsx, layout.tsx, schema.ts y el manifest.
  const marca = [
    'images/brand/servitek-logo.webp',
    'images/brand/servitek-logo.png',
    'images/brand/servitek-emblema.webp',
    'images/hero/planta-industrial.webp',
    'images/hero/planta-industrial-960.webp',
    'favicon.ico',
    'apple-touch-icon.png',
    'icon-192x192.png',
    'icon-512x512.png',
    'og-image.jpg',
  ];

  it('existen en public/', () => {
    const faltan = marca.filter((r) => !existsSync(path.join(PUBLIC, r)));
    expect(faltan).toEqual([]);
  });
});

describe('slugs', () => {
  it('no hay slugs de servicio repetidos', () => {
    const slugs = services.map((s) => slugify(s.slug));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('no hay slugs de sector repetidos', () => {
    const slugs = sectors.map((s) => slugify(s.slug));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('los slugs solo usan minúsculas, números y guiones', () => {
    const todos = [...services.map((s) => s.slug), ...sectors.map((s) => s.slug)];
    const malos = todos.filter((s) => !/^[a-z0-9-]+$/.test(s));
    expect(malos).toEqual([]);
  });

  it('los identificadores de proyecto son únicos', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('contenido obligatorio', () => {
  it('cada servicio tiene título corto, descripción, icono y soluciones', () => {
    for (const s of services) {
      expect(s.shortTitle, `servicio ${s.id}`).toBeTruthy();
      expect(s.description.length, `servicio ${s.id}`).toBeGreaterThan(30);
      expect(s.icon, `servicio ${s.id}`).toBeTruthy();
      expect(s.solutions.length, `servicio ${s.id}`).toBeGreaterThan(0);
    }
  });

  it('cada sector tiene título corto, descripción, problemas y soluciones', () => {
    for (const s of sectors) {
      expect(s.shortTitle, `sector ${s.id}`).toBeTruthy();
      expect(s.description.length, `sector ${s.id}`).toBeGreaterThan(30);
      expect(s.problems.length, `sector ${s.id}`).toBeGreaterThan(0);
      expect(s.solutions.length, `sector ${s.id}`).toBeGreaterThan(0);
    }
  });

  it('no queda ningún marcador de contenido pendiente visible', () => {
    const textos = JSON.stringify({ services, sectors, projects, company });
    for (const marcador of ['+XX', 'XXXX', 'Lorem ipsum', 'TODO:', 'PLACEHOLDER']) {
      expect(textos, `marcador "${marcador}"`).not.toContain(marcador);
    }
  });
});

describe('proyectos de ejemplo', () => {
  it('están marcados como demo para que no se indexen', () => {
    // Mientras no haya obra real, todos deben llevar isDemo.
    expect(projects.every((p) => p.isDemo)).toBe(true);
  });
});

describe('datos de contacto', () => {
  it('el teléfono internacional corresponde al mismo número', () => {
    const soloDigitos = (s: string) => s.replace(/\D/g, '');
    expect(soloDigitos(company.contact.phoneInternational)).toBe(
      soloDigitos(company.contact.phone)
    );
  });

  it('WhatsApp y teléfono son el mismo número', () => {
    const soloDigitos = (s: string) => s.replace(/\D/g, '');
    expect(soloDigitos(company.contact.whatsapp)).toBe(soloDigitos(company.contact.phone));
  });

  it('el email tiene forma válida', () => {
    expect(company.contact.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it('el selector del formulario cubre todas las unidades de negocio', () => {
    // Cada servicio debe poder elegirse al pedir presupuesto.
    expect(serviceOptions.length).toBeGreaterThanOrEqual(services.length);
    expect(serviceOptions).toContain('Otro');
  });
});

describe('navegación', () => {
  it('todos los destinos son rutas internas', () => {
    for (const item of [...navigation, ...footerNavigation]) {
      expect(item.href, item.label).toMatch(/^\//);
    }
  });

  it('no hay destinos repetidos', () => {
    const hrefs = navigation.map((n) => n.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
