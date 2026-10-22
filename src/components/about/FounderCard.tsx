import Image from 'next/image';
import { founder } from '@/data/company-content';
import { Emblem } from '@/components/ui/Brand';

/**
 * Ficha del fundador.
 *
 * Para poner la fotografía real basta con guardarla en
 * public/images/equipo/walter-vera.webp (3:4, mínimo 800×1067 px, < 150 KB)
 * y poner esa ruta en `founder.photo` (src/data/company-content.ts).
 *
 * Mientras no haya foto se muestra el emblema en un marco con la proporción
 * final ya reservada: el diseño no se mueve al sustituirlo.
 */
export function FounderCard() {
  return (
    <div className="grid items-center gap-12 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
      <div className="relative mx-auto w-full max-w-[22rem]">
        <span
          aria-hidden="true"
          className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-signal"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-volt"
        />
        <div className="panel relative aspect-[3/4] overflow-hidden">
          {founder.photo ? (
            <Image
              src={founder.photo}
              alt={founder.photoAlt}
              fill
              sizes="(max-width: 768px) 80vw, 352px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-6 p-10">
              <div className="grid-lines" aria-hidden="true" />
              <Emblem sizes="12rem" className="relative w-2/5 opacity-80" />
              <span className="relative font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-chrome-muted">
                Fotografía pendiente
              </span>
            </div>
          )}
        </div>
      </div>

      <div>
        <span className="eyebrow">Fundador</span>
        <h3 className="mt-6 text-h2 font-semibold">{founder.name}</h3>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-chrome-muted">
          {founder.role}
        </p>

        <div className="mt-8 space-y-5">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-chrome-2">
              {paragraph}
            </p>
          ))}
        </div>

        {founder.quote && (
          <figure className="mt-12 border-l border-signal pl-7">
            <blockquote className="font-display text-xl font-medium leading-snug text-chrome [font-stretch:105%] md:text-2xl">
              «{founder.quote}»
            </blockquote>
            <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-chrome-muted">
              {founder.name}
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}
