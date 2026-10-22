import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Proyectos',
  description: 'Conozca los proyectos ejecutados por SERVITEK en la industria paraguaya.',
  path: '/proyectos',
  // PENDIENTE (empresa): portafolio de ejemplo. No indexar hasta tener obra real.
  noIndex: projects.some((p) => p.isDemo),
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Nuestros proyectos"
        subtitle="Soluciones ejecutadas para la industria paraguaya."
      />

      <section className="section pt-8 md:pt-12">
        <div className="container-site">
          <h2 className="sr-only">Listado de proyectos</h2>
          {/* Nota sobre proyectos demo */}
          <div className="panel mb-8 p-6">
            <p className="text-sm text-chrome-muted">
              <strong className="font-medium text-chrome-2">Nota:</strong> Los proyectos mostrados
              son de ejemplo. SERVITEK está preparando su portafolio de proyectos reales.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 90} fullHeight>
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
