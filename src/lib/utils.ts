import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Combina clases de Tailwind resolviendo conflictos. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Versión de 800 px de una foto de servicio o sector (tarjetas y paneles). */
export const cardImage = (src: string) => src.replace(/\.webp$/, '-card.webp');
