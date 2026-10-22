import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { generatePageMetadata } from '@/lib/seo';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};

  return generatePageMetadata({
    title: project.title,
    description: project.description,
    path: `/proyectos/${project.id}`,
    // PENDIENTE (empresa): proyectos de ejemplo. No indexar hasta tener obra real.
    noIndex: project.isDemo,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);
  const details = [
    { label: 'Sector', value: project.sector },
    { label: 'Ubicación', value: project.location },
    { label: 'Año', value: project.year },
  ];

  return (
    <>
      <PageHero
        eyebrow="Proyecto"
        title={project.title}
        subtitle={`${project.sector} — ${project.location}`}
        breadcrumbs={[
          { label: 'Proyectos', href: '/proyectos' },
          { label: project.title, href: `/proyectos/${project.id}` },
        ]}
      />

      <section className="section pt-8 md:pt-12">
        <div className="container-site">
          {project.isDemo && (
            <div className="panel mb-10 p-6">
              <p className="text-sm text-chrome-muted">
                <strong className="font-medium text-chrome-2">Nota:</strong> Este es un proyecto de
                ejemplo. SERVITEK está preparando su portafolio de proyectos reales.
              </p>
            </div>
          )}

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <h2 className="text-h2 font-semibold">Alcance del proyecto</h2>
                <p className="mt-6 text-lead text-chrome-2">{project.description}</p>
              </ScrollReveal>
              <ScrollReveal direction="clip">
                {/* Marcador gráfico hasta tener la fotografía real (src/data/projects.ts). */}
                <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-ink-4">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4">
              <ScrollReveal delay={150} className="lg:sticky lg:top-28">
                <div className="panel p-8">
                  <h3 className="text-xl font-semibold">Detalles del proyecto</h3>
                  <dl className="mt-6">
                    {details.map((d) => (
                      <div
                        key={d.label}
                        className="flex justify-between gap-4 border-b border-line py-4 text-sm"
                      >
                        <dt className="font-mono uppercase tracking-[0.12em] text-chrome-muted">
                          {d.label}
                        </dt>
                        <dd className="text-right text-chrome-2">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-chrome-muted"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contacto" className="mt-8 w-full">
                    Solicitar evaluación
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {others.length > 0 && (
            <div className="mt-24">
              <ScrollReveal>
                <h2 className="text-h2 font-semibold">Otros proyectos</h2>
              </ScrollReveal>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {others.map((p) => (
                  <ScrollReveal key={p.id} delay={projects.indexOf(p) * 80} fullHeight>
                    <ProjectCard project={p} index={projects.indexOf(p)} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
