import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { GlassCard, GlassGrid } from '@/components/ui/GlassCard';
import { SectorCard } from '@/components/sectors/SectorCard';
import { sectors } from '@/data/sectors';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

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
          <GlassGrid>
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.id} delay={i * 70} fullHeight>
                <SectorCard sector={sector} />
              </ScrollReveal>
            ))}
            <ScrollReveal delay={sectors.length * 70} fullHeight>
              <GlassCard
                href="/contacto"
                title="¿Su industria no aparece?"
                description="Cuéntenos cómo es su operación y evaluamos la solución adecuada."
                cta="Solicitar presupuesto"
              />
            </ScrollReveal>
          </GlassGrid>
        </div>
      </section>

      <CTASection />
    </>
  );
}
