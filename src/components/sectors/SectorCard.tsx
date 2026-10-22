import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Sector } from '@/types/sector';

interface SectorCardProps {
  sector: Sector;
  /** Posición en la lista: alimenta la numeración 01, 02, 03... */
  index?: number;
  /** Versión corta, sin la lista de problemas (portada). */
  compact?: boolean;
}

export function SectorCard({ sector, index = 0, compact = false }: SectorCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="panel panel-hover group flex h-full flex-col overflow-hidden p-7 sm:p-9"
    >
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-2 -top-6 font-display text-[8rem] font-extrabold leading-none [font-stretch:125%]"
      >
        {number}
      </span>

      <span className="number-index relative">SECTOR {number}</span>

      <div className="relative mt-10 min-w-0 flex-1">
        <h3 className="text-h3 font-semibold">{sector.shortTitle}</h3>
        <p className="mt-4 leading-relaxed text-chrome-muted">{sector.description}</p>

        {!compact && (
          <div className="mt-8">
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
        )}
      </div>

      <span className="relative mt-10 inline-flex items-center gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-chrome-2 transition-colors duration-base group-hover:text-chrome">
        {sector.cta}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
