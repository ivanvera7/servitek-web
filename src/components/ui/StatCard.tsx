import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Lectura de instrumento: valor grande y rótulo. Los valores no son
 * todos numéricos ("Paraguay"), así que el tamaño crece con el
 * viewport en vez de fijarse: a 320 px "Paraguay" tiene que caber.
 */
export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn('relative flex flex-col gap-3 border-t border-line pt-5', className)}>
      <span aria-hidden="true" className="absolute left-0 top-[-1px] h-px w-8 bg-signal" />
      <span className="text-metal font-display text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-bold leading-none [font-stretch:125%]">
        {value}
      </span>
      <span className="font-mono text-eyebrow uppercase text-chrome-muted">{label}</span>
    </div>
  );
}
