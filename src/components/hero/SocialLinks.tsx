import { Instagram, Mail } from 'lucide-react';
import { company } from '@/data/company';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

/**
 * Canales de contacto directo del hero.
 *
 * Cada icono descubre su dato real al pasar por encima (el usuario, el correo
 * o el teléfono), así la fila ocupa poco y sigue siendo útil: no hay que
 * abrir el enlace para saber a dónde lleva.
 *
 * Los colores de hover salen de la paleta del proyecto —rojo de acento, azul
 * de marca y el verde de WhatsApp, que ya es un token— en vez de los colores
 * corporativos de cada red: tailwind.config.ts pide que no se escriba ningún
 * color a mano en los componentes.
 *
 * Las clases de color van completas en cada entrada, sin interpolar: Tailwind
 * solo genera las que encuentra literales en el código.
 */
const CHANNELS = [
  {
    id: 'instagram',
    label: 'servitek.py',
    href: company.social.instagram,
    external: true,
    Icon: Instagram,
    accent: 'group-hover:border-signal group-hover:bg-signal',
    ring: 'focus-visible:ring-signal-text',
  },
  {
    id: 'email',
    label: company.contact.email,
    href: `mailto:${company.contact.email}`,
    external: false,
    Icon: Mail,
    accent: 'group-hover:border-volt-solid group-hover:bg-volt-solid',
    ring: 'focus-visible:ring-volt-text',
  },
  {
    id: 'whatsapp',
    label: company.contact.phoneFormatted,
    href: generateWhatsAppUrl(),
    external: true,
    Icon: WhatsAppIcon,
    accent: 'group-hover:border-whatsapp group-hover:bg-whatsapp',
    ring: 'focus-visible:ring-whatsapp-ring',
  },
] as const;

/** Mismo trazo que el botón flotante: lucide no trae la marca de WhatsApp. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      {CHANNELS.map(({ id, label, href, external, Icon, accent, ring }) => (
        <li key={id} className="group relative">
          <a
            href={href}
            aria-label={external ? `${label} (se abre en una pestaña nueva)` : label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink-3 text-chrome-2 transition-[transform,background-color,border-color,color] duration-base ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink group-hover:-translate-y-1 group-hover:text-white ${accent} ${ring}`}
          >
            <Icon className="h-6 w-6" />
          </a>

          {/* Globo con el dato real. Se ancla a la izquierda del icono, no
              centrado: la fila arranca en el margen del contenedor y un globo
              centrado sobre el primer icono se salía por la izquierda.
              `pointer-events-none` para que no se interponga entre el cursor
              y el icono al aparecer. */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-full left-0 z-10 mb-3 translate-y-1 whitespace-nowrap rounded-md border border-line bg-ink-4 px-3 py-1.5 font-mono text-xs text-white opacity-0 transition-[opacity,transform,background-color,border-color] duration-base ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 ${accent}`}
          >
            {label}
            {/* Punta del globo, alineada con el centro del icono (48 px). */}
            <span
              className={`absolute -bottom-[5px] left-6 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-line bg-ink-4 transition-[background-color,border-color] duration-base ease-out-expo ${accent}`}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
