'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Origen del revelado. `up` es el comportamiento histórico y sigue siendo el
 * predeterminado: se usa en la inmensa mayoría de rejillas. Los demás existen
 * para romper la monotonía en bloques de dos columnas (`left`/`right`) y en
 * piezas centradas (`scale`), no para aplicarlos en todas partes.
 */
type RevealDirection = 'up' | 'left' | 'right' | 'scale' | 'clip';

const hiddenTransform: Record<RevealDirection, string> = {
  up: 'translate-y-6',
  left: '-translate-x-8',
  right: 'translate-x-8',
  scale: 'scale-[0.96]',
  // Imágenes: la pieza se abre desde dentro como un obturador.
  clip: '[clip-path:inset(10%_10%_10%_10%_round_24px)] scale-[1.04]',
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  /**
   * El wrapper pasa a ocupar toda la altura de su celda de grid. Necesario
   * cuando el hijo usa `h-full`: sin esto resuelve contra el wrapper, que
   * mide lo que su contenido, y las tarjetas de una fila quedan desiguales.
   */
  fullHeight?: boolean;
}

/**
 * Revelado al hacer scroll.
 *
 * El contenido se renderiza VISIBLE por defecto y solo se oculta una vez que
 * el JavaScript ha arrancado. Antes empezaba en opacity-0 y dependía de JS
 * para mostrarse: si el script fallaba o no llegaba a ejecutarse, secciones
 * enteras quedaban invisibles.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  fullHeight = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Se activa tras el montaje, así el HTML servido siempre es visible.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const element = ref.current;
    if (!element) return;

    // Si ya está en pantalla al cargar, no se oculta: evita el parpadeo del
    // contenido que da el LCP.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(element);

    // Red de seguridad: si el observer no llega a dispararse (pestaña en
    // segundo plano, captura de página completa, navegador raro), el
    // contenido se muestra igualmente. Nunca debe quedarse oculto.
    const fallback = window.setTimeout(() => setShown(true), 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform,clip-path] ease-out-expo motion-reduce:transition-none',
        direction === 'clip' ? 'duration-[1200ms]' : 'duration-slow',
        fullHeight && 'h-full',
        hidden
          ? `${hiddenTransform[direction]} opacity-0`
          : 'translate-x-0 translate-y-0 scale-100 opacity-100',
        direction === 'clip' && !hidden && '[clip-path:inset(0_0_0_0_round_24px)]',
        className
      )}
      style={hidden ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
