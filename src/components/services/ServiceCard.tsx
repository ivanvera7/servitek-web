import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';
import { ServiceIcon } from '@/lib/icons';

interface ServiceCardProps {
  service: Service;
  /** Posición en la lista: alimenta la numeración 01, 02, 03... */
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="panel panel-hover group flex h-full flex-col overflow-hidden p-7 sm:p-9"
    >
      <div className="flex items-start justify-between gap-6">
        <span className="number-index">UNIDAD {String(index + 1).padStart(2, '0')}</span>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line-strong bg-ink-4 text-volt-text transition-[background-color,color,border-color] duration-base ease-out-expo group-hover:border-chrome group-hover:bg-chrome group-hover:text-ink">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
      </div>

      {/* min-w-0: "INFRAESTRUCTURA" no debe desbordar a 320 px. */}
      <div className="mt-10 min-w-0 flex-1">
        <h3 className="text-h3 font-semibold">{service.shortTitle}</h3>
        <p className="mt-4 leading-relaxed text-chrome-muted">{service.description}</p>
      </div>

      <span className="mt-10 inline-flex items-center gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-chrome-2 transition-colors duration-base group-hover:text-chrome">
        {service.cta}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
