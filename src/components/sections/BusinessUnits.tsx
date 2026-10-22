'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import { ServiceIcon } from '@/lib/icons';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cardImage, cn } from '@/lib/utils';

/**
 * Índice de las cinco unidades. Cada fila es un enlace normal; en escritorio,
 * pasar por encima o tabular a una fila cambia el panel fijo de la derecha,
 * que resume sus soluciones. Sin JavaScript se ve la primera unidad.
 */
export function BusinessUnits() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="section">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Áreas de servicio"
              title="Cinco unidades de negocio"
              description="Del diagnóstico y el montaje al mantenimiento y la provisión de materiales certificados."
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <Button href="/servicios" variant="ghost" className="shrink-0">
              Todos los servicios
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ol className="border-t border-line lg:col-span-7">
            {services.map((service, index) => {
              const isActive = index === active;
              return (
                <li key={service.id}>
                  <ScrollReveal delay={index * 70}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="group relative flex items-start gap-5 overflow-hidden border-b border-line px-1 py-7 md:gap-8 md:px-4 md:py-9"
                    >
                      {/* Barrido de fondo de la fila activa. */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-0 origin-left bg-gradient-to-r from-ink-3 to-transparent transition-transform duration-slow ease-out-expo',
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute left-0 top-0 h-full w-px origin-top bg-signal transition-transform duration-slow ease-out-expo',
                          isActive ? 'scale-y-100' : 'scale-y-0'
                        )}
                      />
                      <span className="number-index relative mt-2 w-7 shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="relative min-w-0 flex-1">
                        <span
                          className={cn(
                            'block font-display text-h3 font-semibold transition-colors duration-base [font-stretch:112%]',
                            isActive ? 'text-chrome' : 'text-chrome-2'
                          )}
                        >
                          {service.shortTitle}
                        </span>
                        <span className="mt-3 block max-w-xl text-[0.9375rem] leading-relaxed text-chrome-muted">
                          {service.description}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'relative mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-base ease-out-expo sm:flex',
                          isActive
                            ? 'rotate-45 border-chrome bg-chrome text-ink'
                            : 'border-line-strong text-chrome-muted'
                        )}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </ScrollReveal>
                </li>
              );
            })}
          </ol>

          <aside
            className="hidden lg:col-span-5 lg:block"
            aria-label="Resumen de la unidad seleccionada"
          >
            <div className="panel sticky top-28 overflow-hidden p-10">
              {/* Las cinco fotos van apiladas y se funden entre sí: así no
                  hay espera de carga al cambiar de unidad. */}
              <div className="relative -mx-10 -mt-10 mb-10 aspect-[16/9] overflow-hidden rounded-t-2xl bg-ink-4">
                {services.map((service, index) => (
                  <Image
                    key={service.id}
                    src={cardImage(service.image)}
                    alt=""
                    fill
                    sizes="40vw"
                    className={cn(
                      'object-cover transition-[opacity,transform] duration-slow ease-out-expo',
                      index === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    )}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-3 via-ink-3/20 to-transparent" />
              </div>
              <div key={current.id} className="relative animate-rise">
                <div className="flex items-center justify-between">
                  <span className="number-index">UNIDAD {String(active + 1).padStart(2, '0')}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong bg-ink-4 text-volt-text">
                    <ServiceIcon name={current.icon} className="h-6 w-6" />
                  </span>
                </div>
                <p className="mt-8 font-display text-2xl font-semibold leading-tight text-chrome [font-stretch:112%]">
                  {current.shortTitle}
                </p>
                <ul className="mt-8 space-y-3">
                  {current.solutions.slice(0, 6).map((solution) => (
                    <li
                      key={solution}
                      className="flex items-start gap-3 text-[0.9375rem] text-chrome-2"
                    >
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-volt" />
                      {solution}
                    </li>
                  ))}
                </ul>
                {current.clients && (
                  <ul className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
                    {current.clients.map((client) => (
                      <li
                        key={client}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-chrome-muted"
                      >
                        {client}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
