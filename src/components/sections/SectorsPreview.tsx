import { SectorCard } from '@/components/sectors/SectorCard';
import { GlassCard, GlassGrid } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { sectors } from '@/data/sectors';

/** Los cinco sectores en la misma rejilla de 3 × 2 que los servicios. */
export function SectorsPreview() {
  return (
    <section className="section">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Sectores"
            title="Sectores que atendemos"
            description="Soluciones especializadas para los sectores industriales más exigentes de Paraguay."
          />
        </ScrollReveal>

        <GlassGrid className="mt-16 md:mt-20">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.id} delay={i * 70} fullHeight>
              <SectorCard sector={sector} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={sectors.length * 70} fullHeight>
            <GlassCard
              href="/sectores"
              title="Todos los sectores"
              description="Problemas habituales de cada industria y cómo los resolvemos."
              cta="Ver sectores"
            />
          </ScrollReveal>
        </GlassGrid>
      </div>
    </section>
  );
}
