import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Sector } from '@/types/sector';
import { cardImage } from '@/lib/utils';

interface SectorCardProps {
  sector: Sector;
  /**
   * Versión de portada: la foto ocupa toda la tarjeta y el texto va encima,
   * sin la lista de problemas.
   */
  compact?: boolean;
}

export function SectorCard({ sector, compact = false }: SectorCardProps) {
  if (compact) {
    return (
      <Link
        href={`/sectores/${sector.slug}`}
        className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl border border-line bg-ink-4 p-7 transition-[border-color] duration-base hover:border-line-strong sm:p-9 lg:min-h-[26rem]"
      >
        <Image
          src={cardImage(sector.image)}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.06]"
        />
        {/* Velo para que el texto blanco mantenga el contraste sobre la foto. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-10% via-ink/60 via-45% to-ink/0" />
        <div className="relative min-w-0">
          <h3 className="text-h3 font-semibold">{sector.shortTitle}</h3>
          <p className="mt-3 line-clamp-2 max-w-xl leading-relaxed text-chrome-2">
            {sector.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-chrome">
            {sector.cta}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="panel panel-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-ink-4">
        <Image
          src={cardImage(sector.image)}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-3 via-ink-3/25 to-transparent" />
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col px-7 pb-7 pt-2 sm:px-9 sm:pb-9">
        <h3 className="text-h3 font-semibold">{sector.shortTitle}</h3>
        <p className="mt-4 leading-relaxed text-chrome-muted">{sector.description}</p>

        <div className="mt-8 flex-1">
          <p className="font-mono text-eyebrow uppercase text-chrome-muted">Problemas comunes</p>
          <ul className="mt-4 space-y-3">
            {sector.problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3 text-[0.9375rem] text-chrome-2">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-signal" />
                {problem}
              </li>
            ))}
          </ul>
        </div>

        <span className="mt-10 inline-flex items-center gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-chrome-2 transition-colors duration-base group-hover:text-chrome">
          {sector.cta}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
