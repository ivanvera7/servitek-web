import { Phone, Mail, Instagram, MapPin, Clock, type LucideIcon } from 'lucide-react';
import { company } from '@/data/company';
import { businessHours } from '@/data/company-content';

/** Fila de la ficha: icono, rótulo monoespaciado y contenido. */
function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-5 border-t border-line py-6 first:border-t-0 first:pt-0">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-ink-4 text-volt-text">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-eyebrow uppercase text-chrome-muted">{label}</p>
        <div className="mt-2 text-chrome-2">{children}</div>
      </div>
    </li>
  );
}

const linkClass = 'link-u transition-colors duration-base hover:text-chrome';

export function ContactInfo() {
  return (
    <div className="panel overflow-hidden p-8 sm:p-10 lg:sticky lg:top-28">
      <div className="rule-tricolor absolute inset-x-0 top-0" aria-hidden="true" />

      <span className="eyebrow">Datos directos</span>
      <h2 className="mt-6 text-h3 font-semibold">Información de contacto</h2>

      <ul className="mt-10">
        <InfoRow icon={Phone} label="Teléfono">
          <a
            href={`tel:${company.contact.phone}`}
            className={`${linkClass} font-mono text-lg text-chrome`}
          >
            {company.contact.phoneFormatted}
          </a>
          <p className="mt-1.5 text-sm text-chrome-muted">
            Desde el exterior:{' '}
            <a href={`tel:${company.contact.phone}`} className={`${linkClass} font-mono`}>
              {company.contact.phoneInternational}
            </a>
          </p>
        </InfoRow>

        <InfoRow icon={Mail} label="Email">
          <a href={`mailto:${company.contact.email}`} className={`${linkClass} break-all`}>
            {company.contact.email}
          </a>
        </InfoRow>

        <InfoRow icon={Instagram} label="Instagram">
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            @servitek.py
          </a>
        </InfoRow>

        <InfoRow icon={MapPin} label="Ubicación">
          {company.contact.address}
        </InfoRow>

        <InfoRow icon={Clock} label="Horario">
          <dl className="space-y-1 text-sm">
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-chrome-muted">{businessHours.weekdays.label}:</dt>
              <dd className="font-mono">{businessHours.weekdays.value}</dd>
            </div>
          </dl>
        </InfoRow>
      </ul>

      <p className="mt-4 border-t border-line pt-6 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-chrome-muted">
        {company.legalName} · RUC {company.ruc}
      </p>
    </div>
  );
}
