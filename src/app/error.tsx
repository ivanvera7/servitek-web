'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="grid-lines" aria-hidden="true" />

      <div className="container-site relative max-w-2xl">
        <span className="eyebrow animate-rise">Fallo inesperado</span>

        <h1 className="mt-6 animate-rise text-h1 font-semibold" style={{ animationDelay: '80ms' }}>
          Algo ha salido mal
        </h1>

        <p
          className="mt-5 animate-rise text-lead text-chrome-2"
          style={{ animationDelay: '180ms' }}
        >
          No hemos podido cargar esta parte del sitio. Vuelva a intentarlo; si el problema persiste,
          escríbanos y lo revisamos.
        </p>

        <div className="mt-10 animate-rise" style={{ animationDelay: '280ms' }}>
          <button type="button" onClick={() => reset()} className="btn btn-chrome">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Intentar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
}
