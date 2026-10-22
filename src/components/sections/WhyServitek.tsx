import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyServitek } from '@/data/company-content';

/** Cinco pilares como ficha técnica: número grande, nombre y descripción. */
export function WhyServitek({ eyebrow = '¿Por qué SERVITEK?' }: { eyebrow?: string }) {
  return (
    <section className="section overflow-hidden border-y border-line bg-ink-2/60">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container-site relative">
        <ScrollReveal>
          <SectionHeading eyebrow={eyebrow} title={whyServitek.title} />
        </ScrollReveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {whyServitek.pillars.map((pillar, index) => (
            // El quinto ocupa la fila entera en la rejilla de dos columnas: si no,
            // quedaría un hueco con el color del separador.
            <li key={pillar.number} className="bg-ink-2 sm:last:col-span-2 lg:last:col-span-1">
              <ScrollReveal delay={index * 80} fullHeight>
                <article className="group relative flex h-full flex-col overflow-hidden p-7 transition-colors duration-base hover:bg-ink-3 lg:min-h-[22rem] lg:p-8">
                  <span
                    aria-hidden="true"
                    className="rule-tricolor absolute inset-x-0 top-0 origin-left scale-x-0 transition-transform duration-slow ease-out-expo group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden="true"
                    className="text-outline font-display text-7xl font-extrabold leading-none transition-[-webkit-text-stroke-color] duration-slow [font-stretch:125%] group-hover:[-webkit-text-stroke-color:rgb(255_90_102_/_0.6)]"
                  >
                    {pillar.number}
                  </span>
                  <h3 className="mt-auto pt-12 font-mono text-sm font-medium uppercase tracking-[0.16em] text-chrome [font-stretch:100%]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-chrome-muted">
                    {pillar.description}
                  </p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
