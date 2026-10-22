import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { navigation } from '@/data/navigation';

/**
 * 404 con el mismo lenguaje que el resto del sitio: rótulo monoespaciado,
 * numeración, filete rojo y rejilla técnica. Además ofrece salida — el enlace
 * a Inicio y el índice de secciones — en lugar de dejar al visitante en un
 * callejón sin más botón que "volver".
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="grid-lines" aria-hidden="true" />

      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow animate-rise">Error 404</span>

            <h1
              className="mt-6 animate-rise text-display font-semibold"
              style={{ animationDelay: '80ms' }}
            >
              Esta ruta no existe
            </h1>

            <p
              className="mt-6 max-w-lg animate-rise text-lead text-chrome-2"
              style={{ animationDelay: '180ms' }}
            >
              La página que buscaba no está disponible o ha cambiado de dirección. Desde aquí puede
              volver al inicio o ir directamente a la sección que necesita.
            </p>

            <div
              className="mt-10 flex animate-rise flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '280ms' }}
            >
              <Link href="/" className="btn btn-chrome">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver al inicio
              </Link>
              <Link href="/contacto" className="btn btn-ghost">
                Contactar
                <ArrowRight className="btn-icon" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Índice de secciones, numerado como el menú móvil. */}
          <nav
            className="animate-rise lg:col-span-5"
            style={{ animationDelay: '380ms' }}
            aria-label="Secciones del sitio"
          >
            <p className="eyebrow">Ir a una sección</p>
            <ul className="mt-5 border-t border-line">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 border-b border-line py-4 text-chrome-2 transition-colors duration-fast hover:text-chrome"
                  >
                    <span
                      aria-hidden="true"
                      className="number-index text-chrome-dim transition-colors duration-base group-hover:text-signal-text"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight
                      className="ml-auto h-4 w-4 -translate-x-1 opacity-0 transition-[opacity,transform] duration-base ease-out-expo group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
