import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /**
   * Rótulo monoespaciado superior. Opcional y escaso: como mucho uno de cada
   * tres encabezados de una misma página, o deja de distinguir nada.
   */
  eyebrow?: string;
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
      {eyebrow && <span className={cn('eyebrow', center && 'eyebrow-center')}>{eyebrow}</span>}
      <h2
        id={id}
        className={cn(eyebrow && 'mt-6', 'font-semibold', center ? 'text-display' : 'text-h2')}
      >
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
