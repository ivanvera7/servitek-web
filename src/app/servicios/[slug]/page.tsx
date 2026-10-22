import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/services';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';
import { generateServiceSchema } from '@/lib/schema';
import { ServiceIcon } from '@/lib/icons';

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return generatePageMetadata({
    title: service.shortTitle,
    description: service.description,
    path: `/servicios/${service.slug}`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.id === service.id);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  const serviceSchema = generateServiceSchema([
    {
      name: service.shortTitle,
      description: service.fullDescription || service.description,
      url: `/servicios/${service.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow={`Unidad ${String(index + 1).padStart(2, '0')}`}
        title={service.shortTitle}
        subtitle={service.description}
        image={service.image}
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: service.shortTitle, href: `/servicios/${service.slug}` },
        ]}
      />

      <section className="section pt-8 md:pt-12">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-strong bg-ink-3 text-volt-text">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="mt-10 text-h2 font-semibold">En qué consiste</h2>
              {service.fullDescription && (
                <p className="mt-6 text-lead text-chrome-2">{service.fullDescription}</p>
              )}
            </ScrollReveal>

            {service.problemsSolved && service.problemsSolved.length > 0 && (
              <ScrollReveal>
                <h3 className="mt-16 font-mono text-eyebrow font-normal uppercase text-chrome-muted [font-stretch:100%]">
                  Problemas que resolvemos
                </h3>
                <ol className="mt-6 border-t border-line">
                  {service.problemsSolved.map((problem, i) => (
                    <li
                      key={problem}
                      className="flex gap-5 border-b border-line py-5 text-chrome-2"
                    >
                      <span className="number-index mt-1 w-6 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {problem}
                    </li>
                  ))}
                </ol>
              </ScrollReveal>
            )}

            {service.clients && service.clients.length > 0 && (
              <ScrollReveal>
                <h3 className="mt-16 font-mono text-eyebrow font-normal uppercase text-chrome-muted [font-stretch:100%]">
                  Sectores que atendemos
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.clients.map((client) => (
                    <li
                      key={client}
                      className="rounded-full border border-line px-4 py-2 text-sm text-chrome-2"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <div className="mt-14">
                <Button href="/contacto" size="lg">
                  Solicitar presupuesto
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-5 lg:sticky lg:top-28">
              <ScrollReveal delay={120}>
                <div className="panel p-8 sm:p-10">
                  <h3 className="text-xl font-semibold">Soluciones que ofrecemos</h3>
                  <ul className="mt-7 space-y-4">
                    {service.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3 text-chrome-2">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-volt-text"
                          aria-hidden="true"
                        />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {service.technicalScope && service.technicalScope.length > 0 && (
                <ScrollReveal delay={200}>
                  <div className="panel bg-ink-2/80 p-8 sm:p-10">
                    <h3 className="text-xl font-semibold">Alcance técnico</h3>
                    <ol className="mt-7 space-y-3">
                      {service.technicalScope.map((item, i) => (
                        <li key={item} className="flex gap-4 text-[0.9375rem] text-chrome-muted">
                          <span className="font-mono text-xs text-chrome-dim">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>

        {/* Navegación entre unidades. */}
        <nav aria-label="Otras unidades de negocio" className="container-site mt-24">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            <Link
              href={`/servicios/${prev.slug}`}
              className="group flex flex-col gap-3 bg-ink-2 p-7 transition-colors duration-base hover:bg-ink-3"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-chrome-muted">
                <ArrowLeft
                  className="h-4 w-4 transition-transform duration-base group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Unidad anterior
              </span>
              <span className="font-display text-lg font-semibold text-chrome [font-stretch:112%]">
                {prev.shortTitle}
              </span>
            </Link>
            <Link
              href={`/servicios/${next.slug}`}
              className="group flex flex-col items-end gap-3 bg-ink-2 p-7 text-right transition-colors duration-base hover:bg-ink-3"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-chrome-muted">
                Siguiente unidad
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-base group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              <span className="font-display text-lg font-semibold text-chrome [font-stretch:112%]">
                {next.shortTitle}
              </span>
            </Link>
          </div>
        </nav>
      </section>

      <CTASection />
    </>
  );
}
