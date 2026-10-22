import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { SectorCard } from '@/components/sectors/SectorCard';
import { sectors } from '@/data/sectors';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sectores',
  description:
    'SERVITEK atiende los sectores industriales más exigentes de Paraguay con soluciones electromecánicas de alta confiabilidad.',
  path: '/sectores',
});

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Sectores industriales"
        subtitle="Soluciones especializadas para los sectores más exigentes de la industria paraguaya."
      />

      <section className="section pt-8 md:pt-12">
        <div className="container-site">
          <h2 className="sr-only">Sectores que atendemos</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {sectors.map((sector, index) => (
              <ScrollReveal
                key={sector.id}
                delay={(index % 2) * 90}
                fullHeight
                className={cn(index === sectors.length - 1 && 'md:col-span-2')}
              >
                <SectorCard sector={sector} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
