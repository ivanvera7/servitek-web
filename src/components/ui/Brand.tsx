import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Logotipo y emblema de SERVITEK.
 *
 * Los SVG originales de la marca solo envuelven un PNG de ~1 MB cada uno.
 * De ellos se sacaron versiones recortadas y comprimidas en
 * public/images/brand/ (logo 54 KB, emblema 109 KB). Ambos están pensados
 * para fondo oscuro: el texto del logotipo es plateado.
 */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/images/brand/servitek-logo.webp"
      alt="SERVITEK E.A.S."
      width={960}
      height={248}
      priority={priority}
      className={cn('h-auto w-auto', className)}
    />
  );
}

/**
 * La "S" metálica. Lleva encima un brillo especular que la recorre cada pocos
 * segundos; el brillo usa la propia imagen como máscara, así solo toca metal.
 */
export function Emblem({
  className,
  priority,
  sizes = '(min-width: 1024px) 40vw, 80vw',
  shine = true,
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
  shine?: boolean;
}) {
  return (
    <div className={cn('relative aspect-[801/880]', className)}>
      <Image
        src="/images/brand/servitek-emblema.webp"
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
      {shine && <span className="emblem-shine" aria-hidden="true" />}
    </div>
  );
}
