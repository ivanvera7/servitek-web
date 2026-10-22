import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href: string;
  /** Flecha final que se desplaza en hover. */
  arrow?: boolean;
}

/** Primario: placa cromada. Secundario: contorno sobre cristal. */
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'btn btn-chrome',
  ghost: 'btn btn-ghost',
};

const sizeStyles: Record<ButtonSize, string> = {
  md: '',
  lg: 'min-h-14 px-9',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  arrow = true,
}: ButtonProps) {
  /* `.btn` no es una utilidad de Tailwind: va fuera de twMerge para que no
     la descarte al combinarla con `className`. */
  const classes = `${variantStyles[variant]} ${cn(sizeStyles[size], className)}`;

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow && <ArrowRight className="btn-icon" aria-hidden="true" />}
    </Link>
  );
}
