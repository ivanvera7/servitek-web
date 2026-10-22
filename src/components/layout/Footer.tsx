import Link from 'next/link';
import { navigation, footerNavigation } from '@/data/navigation';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { businessHours } from '@/data/company-content';
import { Logo } from '@/components/ui/Brand';

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-eyebrow font-normal uppercase text-chrome-muted [font-stretch:100%]">
        {title}
      </h2>
      <ul className="mt-6 space-y-3 text-[0.9375rem]">{children}</ul>
    </div>
  );
}

const linkClass = 'link-u py-1 text-chrome-2 transition-colors duration-fast hover:text-chrome';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2/80">
      <div className="rule-tricolor absolute inset-x-0 top-0 opacity-60" aria-hidden="true" />

      {/* pb-28 en móvil: hueco para el botón flotante de WhatsApp. */}
      <div className="container-site relative pb-28 pt-20 md:pb-12 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="SERVITEK — Inicio" className="inline-block">
              <Logo className="h-12" />
            </Link>
            <p className="mt-7 max-w-sm leading-relaxed text-chrome-muted">{company.description}</p>
            <p className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-chrome-muted">
              <span className="status-dot" aria-hidden="true" />
              {businessHours.weekdays.label} {businessHours.weekdays.value}
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8">
            <Column title="Sitio">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Servicios">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/servicios/${s.slug}`} className={linkClass}>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Contacto">
              <li>
                <a href={`tel:${company.contact.phone}`} className={`${linkClass} font-mono`}>
                  {company.contact.phoneFormatted}
                </a>
                <span className="mt-1 block font-mono text-sm text-chrome-muted">
                  {company.contact.phoneInternational}
                </span>
              </li>
              <li>
                <a href={`mailto:${company.contact.email}`} className={`${linkClass} break-all`}>
                  {company.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Instagram @servitek.py
                </a>
              </li>
              <li className="text-chrome-muted">{company.contact.address}</li>
            </Column>
          </div>
        </div>

        {/* Firma: el nombre a todo el ancho, en contorno. */}
        <p
          aria-hidden="true"
          className="text-outline mt-20 select-none whitespace-nowrap text-center font-display text-[13.5vw] font-extrabold leading-[0.8] [font-stretch:125%] lg:text-[11.5rem]"
        >
          SERVITEK
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 font-mono text-xs uppercase tracking-[0.12em] text-chrome-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName} · RUC {company.ruc}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-u py-2 hover:text-chrome">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
