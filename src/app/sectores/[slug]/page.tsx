import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { sectors } from '@/data/sectors';
import { services } from '@/data/services';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

interface SectorPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const sector = sectors.find((s) => s.slug === params.slug);
  if (!sector) return {};

  return generatePageMetadata({
    title: sector.shortTitle,
    description: sector.description,
    path: `/sectores/${sector.slug}`,
  });
}

export default function SectorPage({ params }: SectorPageProps) {
  const sector = sectors.find((s) => s.slug === params.slug);
  if (!sector) notFound();

  const index = sectors.findIndex((s) => s.id === sector.id);
  const relatedServices = services.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Sector ${String(index + 1).padStart(2, '0')}`}
        title={sector.shortTitle}
        subtitle={sector.description}
        breadcrumbs={[
          { label: 'Sectores', href: '/sectores' },
          { label: sector.shortTitle, href: `/sectores/${sector.slug}` },
        ]}
      />

      <section className="section pt-8 md:pt-12">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="text-h2 font-semibold">Problemas comunes en este sector</h2>
              <ol className="mt-10 border-t border-line">
                {sector.problems.map((problem, i) => (
                  <li
                    key={problem}
                    className="flex gap-5 border-b border-line py-6 text-lead text-chrome-2"
                  >
                    <span className="number-index mt-1.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {problem}
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <Button href="/contacto" size="lg">
                  Solicitar evaluación
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={120} className="lg:sticky lg:top-28">
              <div className="panel p-8 sm:p-10">
                <h3 className="text-xl font-semibold">Soluciones SERVITEK para este sector</h3>
                <ul className="mt-7 space-y-4">
                  {sector.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3 text-chrome-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-volt-text" aria-hidden="true" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="container-site mt-24">
          <ScrollReveal>
            <h2 className="text-h2 font-semibold">Servicios relacionados</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <ScrollReveal key={service.id} delay={services.indexOf(service) * 90} fullHeight>
                <ServiceCard service={service} index={services.indexOf(service)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
