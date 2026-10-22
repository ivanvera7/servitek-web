import Image from 'next/image';
import { Emblem } from '@/components/ui/Brand';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /** Rótulo monoespaciado sobre el título (SERVICIOS, SECTOR 03...). */
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Fotografía 16:9 a todo el ancho bajo el titular (fichas de detalle). */
  image?: string;
  className?: string;
}

/**
 * Cabecera de las páginas internas. Misma coreografía que la portada en
 * versión corta: ruta, rótulo, titular y bajada entran escalonados, y el
 * emblema asoma recortado a la derecha como marca de agua.
 */
export function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  image,
  className,
}: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20', className)}>
      <div className="grid-lines" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-[0.13] md:block lg:-right-10"
      >
        {/* La animación va en una capa interior: su fotograma final
            (opacity 1) anularía la opacidad de la marca de agua. */}
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Emblem shine={false} sizes="34rem" />
        </div>
      </div>

      <div className="container-site relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-10 animate-rise md:mb-14" />}

        {eyebrow && (
          <span className="eyebrow animate-rise" style={{ animationDelay: '60ms' }}>
            {eyebrow}
          </span>
        )}

        <h1
          className="mt-6 max-w-4xl animate-rise text-h1 font-semibold"
          style={{ animationDelay: '120ms' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-7 max-w-2xl animate-rise text-lead text-chrome-2"
            style={{ animationDelay: '200ms' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="container-site relative mt-14 md:mt-20">
        {image ? (
          <figure
            className="relative aspect-[4/3] animate-unveil overflow-hidden rounded-3xl border border-line bg-ink-4 sm:aspect-[16/9] lg:aspect-[21/9]"
            style={{ animationDelay: '260ms' }}
          >
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1344px) 1344px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
            <span
              aria-hidden="true"
              className="absolute left-5 top-5 h-8 w-8 border-l border-t border-chrome/50"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-chrome/50"
            />
          </figure>
        ) : (
          <div className="conductor" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
