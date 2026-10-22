import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Rótulo monoespaciado superior (SECTORES, PROCESO, ...). */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

/** Encabezado de sección: rótulo técnico, titular expandido y bajada. */
export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 text-h2 font-semibold">{title}</h2>
      {description && <p className="mt-6 max-w-2xl text-lead text-chrome-2">{description}</p>}
    </div>
  );
}
