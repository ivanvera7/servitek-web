import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  /** Posición en la lista: alimenta la numeración 01, 02, 03... */
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="panel panel-hover group flex h-full flex-col overflow-hidden"
    >
      {/* Marcador gráfico hasta tener la fotografía real (src/data/projects.ts). */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl bg-ink-4">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-3 to-transparent" />
        <span className="number-index absolute left-6 top-6">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute bottom-5 left-6 font-mono text-eyebrow uppercase text-chrome-2">
          {project.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-h3 font-semibold">{project.title}</h3>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-chrome-muted">
          {project.location} · {project.year}
        </p>
        <p className="mt-5 flex-1 leading-relaxed text-chrome-muted">{project.description}</p>
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
        <span className="mt-8 inline-flex items-center gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-chrome-2 transition-colors duration-base group-hover:text-chrome">
          Ver proyecto
          <ArrowRight
            className="h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
