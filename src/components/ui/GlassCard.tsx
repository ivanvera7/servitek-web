'use client';

import type { PointerEvent, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Emblem } from '@/components/ui/Brand';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  href: string;
  title: string;
  description: string;
  cta: string;
  /** Foto de fondo (versión -card). Sin foto, fondo de marca con el emblema. */
  image?: string;
  /** Icono en la placa de vidrio (unidades de negocio). */
  icon?: ReactNode;
  /** Nivel del título según la sección donde vive la tarjeta. */
  headingLevel?: 'h2' | 'h3';
}

/**
 * Tarjeta de foto completa con una placa de vidrio abajo (ver `.glass` en
 * globals.css). Con ratón, un foco de luz sigue al cursor: la posición se
 * escribe como variable CSS en el propio elemento, sin estado de React, así
 * mover el ratón no re-renderiza nada.
 */
export function GlassCard({
  href,
  title,
  description,
  cta,
  image,
  icon,
  headingLevel: Heading = 'h3',
}: GlassCardProps) {
  const track = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Link href={href} onPointerMove={track} className="glass-card group">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="glass-card-media object-cover"
        />
      ) : (
        <div aria-hidden="true" className="glass-card-media absolute inset-0">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-signal/25 blur-[90px]" />
          <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-volt/30 blur-[90px]" />
          <div className="absolute right-[-12%] top-[6%] w-[70%] opacity-80">
            <Emblem shine={false} sizes="20rem" />
          </div>
        </div>
      )}

      {/* Velo inferior: el vidrio necesita algo oscuro detrás para leerse. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
      />
      <span aria-hidden="true" className="glass-card-spot" />

      <div className="glass glass-card-plate">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-volt-text">
              {icon}
            </span>
          )}
          <Heading className="min-w-0 text-[1.0625rem] sm:min-h-[2.75em] sm:text-[1.1875rem] font-semibold leading-snug [font-stretch:108%]">
            {title}
          </Heading>
        </div>
        <p className="mt-3 line-clamp-2 min-h-[3.25em] text-[0.9375rem] leading-relaxed text-chrome-2">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-chrome">
          {cta}
          <ArrowUpRight className="glass-card-arrow h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/** Rejilla de 3 × 2 (2 × 3 en tableta, 1 columna en móvil) para seis tarjetas. */
export function GlassGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5', className)}>
      {children}
    </div>
  );
}
