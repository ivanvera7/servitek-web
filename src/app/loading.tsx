import { Emblem } from '@/components/ui/Brand';

/**
 * Pantalla de carga. En un export estático casi nunca llega a verse: solo
 * usa el emblema, que ya está en caché desde la portada.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex w-full max-w-[12rem] animate-fade-in flex-col items-center gap-8">
        <Emblem sizes="6rem" className="w-20 animate-float" />
        <div
          className="relative h-px w-full overflow-hidden bg-line-strong"
          role="progressbar"
          aria-label="Cargando"
        >
          <span
            aria-hidden="true"
            className="rule-tricolor absolute inset-y-0 left-0 w-1/4 animate-progress"
          />
        </div>
      </div>
    </div>
  );
}
