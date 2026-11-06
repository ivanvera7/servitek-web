'use client';

import { useEffect, useState } from 'react';

/**
 * Año en curso. El sitio es estático: el HTML lleva el año de la compilación
 * (`buildYear`, calculado en el servidor) y el navegador lo corrige tras
 * hidratar, así el © no queda desfasado y no hay desajuste de hidratación.
 */
export function CurrentYear({ buildYear }: { buildYear: number }) {
  const [year, setYear] = useState(buildYear);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
