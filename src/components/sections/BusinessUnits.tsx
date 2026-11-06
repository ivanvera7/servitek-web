import { services } from '@/data/services';
import { ServiceCard } from '@/components/services/ServiceCard';
import { GlassCard, GlassGrid } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Las cinco unidades de negocio en una rejilla simétrica de 3 × 2. La sexta
 * placa lleva al catálogo completo y cierra la rejilla sin huecos.
 */
export function BusinessUnits() {
  return (
    <section className="section">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading
            align="center"
            title="Cinco unidades de negocio"
            description="Del diagnóstico y el montaje al mantenimiento y la provisión de materiales certificados."
          />
        </ScrollReveal>

        <GlassGrid className="mt-16 md:mt-20">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 70} fullHeight>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={services.length * 70} fullHeight>
            <GlassCard
              href="/servicios"
              title="Todos los servicios"
              description="Soluciones, alcance técnico y problemas que resuelve cada unidad."
              cta="Ver servicios"
            />
          </ScrollReveal>
        </GlassGrid>
      </div>
    </section>
  );
}
