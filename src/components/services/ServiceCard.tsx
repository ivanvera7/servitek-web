import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';
import { ServiceIcon } from '@/lib/icons';
import { cardImage } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  /** Posición en la lista: alimenta la numeración 01, 02, 03... */
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="panel panel-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-ink-4">
        <Image
          src={cardImage(service.image)}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-3 via-ink-3/25 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-ink/70 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-chrome backdrop-blur-md">
          Unidad {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* min-w-0: "INFRAESTRUCTURA" no debe desbordar a 320 px. */}
      <div className="relative flex min-w-0 flex-1 flex-col px-7 pb-7 sm:px-9 sm:pb-9">
        <span className="-mt-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line-strong bg-ink-4 text-volt-text shadow-[0_10px_30px_-10px_rgb(0_0_0_/_0.8)] transition-[background-color,color,border-color] duration-base ease-out-expo group-hover:border-chrome group-hover:bg-chrome group-hover:text-ink">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-7 text-h3 font-semibold">{service.shortTitle}</h3>
        <p className="mt-4 flex-1 leading-relaxed text-chrome-muted">{service.description}</p>

        <span className="mt-8 inline-flex items-center gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-chrome-2 transition-colors duration-base group-hover:text-chrome">
          {service.cta}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
