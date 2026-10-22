import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { servicesIntro, workProcess } from '@/data/company-content';
import { generatePageMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios',
  description:
    'SERVITEK ofrece electromecánica integral: diseño, montaje, automatización, mantenimiento y provisión de materiales certificados.',
  path: '/servicios',
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Nuestros servicios"
        subtitle="Cinco unidades de negocio que cubren toda la cadena electromecánica: del diagnóstico y el montaje al mantenimiento y la provisión de materiales certificados."
      />

      <section className="section pt-8 md:pt-12">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeading
              eyebrow={servicesIntro.eyebrow}
              title={servicesIntro.title}
              description={servicesIntro.body}
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.id}
                delay={(index % 2) * 90}
                fullHeight
                // Cinco en dos columnas: el último ocupa la fila entera.
                className={cn(index === services.length - 1 && 'md:col-span-2')}
              >
                <ServiceCard service={service} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section overflow-hidden border-y border-line bg-ink-2/60">
        <div className="grid-lines" aria-hidden="true" />
        <div className="container-site relative">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Proceso"
              title="Nuestro proceso de trabajo"
              description="Cada proyecto sigue un proceso estructurado que garantiza resultados confiables."
            />
          </ScrollReveal>

          {/* Los cuatro pasos cuelgan de un mismo conductor: se leen como una
              secuencia y no como bloques sueltos. */}
          <div className="relative mt-16 lg:mt-20">
            <div
              className="conductor absolute inset-x-0 top-[1.375rem] hidden lg:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {workProcess.map((item, index) => (
                <li key={item.step}>
                  <ScrollReveal delay={index * 110}>
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-ink font-mono text-sm text-chrome">
                      {item.step}
                    </span>
                    <h3 className="mt-8 text-h3 font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-chrome-muted">{item.description}</p>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
