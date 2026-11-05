import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Rótulo monoespaciado superior (SECTORES, PROCESO, ...). */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  /** `center`: titular de escaparate, centrado y más grande. */
  align?: 'left' | 'center';
  /** Para enlazar la sección con `aria-labelledby`. */
  id?: string;
}

/** Encabezado de sección: rótulo técnico, titular expandido y bajada. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
  id,
}: SectionHeadingProps) {
  const center = align === 'center';
  return (
    <div className={cn(center ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl', className)}>
      <span className={cn('eyebrow', center && 'eyebrow-center')}>{eyebrow}</span>
      <h2 id={id} className={cn('mt-6 font-semibold', center ? 'text-display' : 'text-h2')}>
        {center ? <span className="text-metal">{title}</span> : title}
      </h2>
      {description && (
        <p className={cn('mt-6 max-w-2xl text-lead text-chrome-2', center && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
