import { SectorCard } from '@/components/sectors/SectorCard';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { sectors } from '@/data/sectors';
import { cn } from '@/lib/utils';

/** Rejilla asimétrica: dos sectores anchos arriba, tres abajo. */
export function SectorsPreview() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Sectores"
              title="Sectores que atendemos"
              description="Soluciones especializadas para los sectores industriales más exigentes de Paraguay."
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <Button href="/sectores" variant="ghost" className="shrink-0">
              Ver sectores
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {sectors.map((sector, index) => (
            <ScrollReveal
              key={sector.id}
              delay={(index % 3) * 90}
              fullHeight
              className={cn(
                index < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
                // Con cinco en dos columnas, el último ocupa la fila entera.
                index === sectors.length - 1 && 'md:col-span-2 lg:col-span-2'
              )}
            >
              <SectorCard sector={sector} index={index} compact />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
