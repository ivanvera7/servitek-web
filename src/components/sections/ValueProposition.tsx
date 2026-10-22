import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { valueProposition } from '@/data/company-content';

/**
 * Los tres compromisos de la empresa, numerados, junto a una fotografía de
 * planta que se abre como un obturador al entrar en pantalla.
 */
export function ValueProposition() {
  const lines = valueProposition.headline.split('\n');

  return (
    <section className="section overflow-hidden">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <ScrollReveal>
            <span className="eyebrow">Propuesta de valor</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-8 font-semibold">
              {lines.map((line, i) => (
                <span
                  key={line}
                  className="flex items-baseline gap-5 border-b border-line py-5 text-[clamp(1.5rem,1rem+2.2vw,2.75rem)] leading-tight"
                >
                  <span aria-hidden="true" className="number-index w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-metal">{line}</span>
                </span>
              ))}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <p className="mt-8 max-w-xl text-lead text-chrome-2">{valueProposition.description}</p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6">
          <ScrollReveal direction="clip">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line sm:aspect-[16/11] lg:aspect-[4/5]">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/images/hero/planta-industrial-960.webp"
                />
                {/* <picture> con dos tamaños: en export estático next/image no genera srcset. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/planta-industrial.webp"
                  alt="Técnico revisando tableros eléctricos y motores en una planta industrial"
                  width={1717}
                  height={916}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[68%_50%] saturate-[0.85]"
                />
              </picture>
              {/* Viraje a la paleta: sombras tinta, luces con un velo azul. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-volt/10"
              />
              {/* Escuadras de encuadre técnico. */}
              <span
                aria-hidden="true"
                className="absolute left-5 top-5 h-8 w-8 border-l border-t border-chrome/50"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-chrome/50"
              />
              <figcaption className="absolute bottom-6 left-6 right-16 font-mono text-xs uppercase tracking-[0.16em] text-chrome-2">
                Diagnóstico · Montaje · Mantenimiento
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
