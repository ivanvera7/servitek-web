'use client';

import { useEffect, useRef } from 'react';
import { Emblem } from '@/components/ui/Brand';

const RING_TEXT =
  'ELECTROMECÁNICA · AUTOMATIZACIÓN · MANTENIMIENTO · INFRAESTRUCTURA · RESPALDO ENERGÉTICO · ';

/**
 * El emblema montado como un instrumento: anillo graduado, rótulo circular y
 * dos arcos rojo/azul que se dibujan al cargar. Con ratón, la S se inclina
 * levemente siguiendo el puntero. En táctil o con movimiento reducido no hay
 * listener: la pieza queda quieta.
 */
export function EmblemStage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * 16).toFixed(2)}deg`);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX / window.innerWidth - 0.5;
      y = e.clientY / window.innerHeight - 0.5;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="relative aspect-square w-full [perspective:1400px]">
      {/* Halos con los dos colores del emblema. */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[6%] h-1/2 w-1/2 animate-fade-in rounded-full bg-signal/25 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[6%] left-[8%] h-1/2 w-1/2 animate-fade-in rounded-full bg-volt/30 blur-[90px]"
      />

      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-fade-in"
      >
        <defs>
          <path id="ring-text" d="M200,200 m-168,0 a168,168 0 1,1 336,0 a168,168 0 1,1 -336,0" />
        </defs>
        <circle cx="200" cy="200" r="197" fill="none" stroke="rgb(255 255 255 / 0.07)" />
        {/* Anillo graduado: 120 marcas, una cada 3°. */}
        <g className="origin-center animate-spin-slow">
          <circle
            cx="200"
            cy="200"
            r="186"
            fill="none"
            stroke="rgb(255 255 255 / 0.22)"
            strokeWidth="7"
            strokeDasharray="0.9 8.84"
          />
        </g>
        <g className="origin-center animate-spin-slower">
          <text className="fill-chrome-muted font-mono text-[9px] tracking-[0.2em]">
            <textPath href="#ring-text" textLength="1040" lengthAdjust="spacing">
              {RING_TEXT}
            </textPath>
          </text>
        </g>
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(255 255 255 / 0.06)" />
        {/* Arcos rojo (arriba) y azul (abajo): se trazan una vez. */}
        <path
          d="M 94 94 A 150 150 0 0 1 306 94"
          fill="none"
          stroke="#E5202E"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="100"
          strokeDashoffset="100"
          style={{ animation: 'draw 1.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' }}
        />
        <path
          d="M 306 306 A 150 150 0 0 1 94 306"
          fill="none"
          stroke="#2A6BFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="100"
          strokeDashoffset="100"
          style={{ animation: 'draw 1.8s cubic-bezier(0.16,1,0.3,1) 0.7s forwards' }}
        />
        {/* Retícula en los cuatro puntos cardinales. */}
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="6"
            x2="200"
            y2="20"
            stroke="rgb(255 255 255 / 0.35)"
            transform={`rotate(${deg} 200 200)`}
          />
        ))}
      </svg>

      <div
        className="absolute inset-[19%] transition-transform duration-slow ease-out-expo [transform-style:preserve-3d]"
        style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
      >
        <div className="h-full animate-float">
          <div className="h-full animate-emblem-in" style={{ animationDelay: '150ms' }}>
            <Emblem
              priority
              sizes="(min-width: 1024px) 26rem, 60vw"
              className="mx-auto h-full drop-shadow-[0_30px_60px_rgb(0_0_0_/_0.7)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
