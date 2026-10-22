import { trustSignals } from '@/data/company-content';
import { services } from '@/data/services';

/**
 * Banda continua con los sellos de la empresa y sus unidades de negocio.
 * Solo datos facilitados por SERVITEK: nada de logotipos de cliente ni cifras
 * inventadas. La segunda copia existe solo para cerrar el bucle y va oculta
 * a lectores de pantalla. Se detiene al pasar el ratón.
 */
export function TrustBar() {
  const items = trustSignals.flatMap((signal, i) =>
    services[i] ? [signal.text, services[i].shortTitle] : [signal.text]
  );

  const Row = ({ hidden }: { hidden?: boolean }) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((text, i) => (
        <li
          key={`${text}-${i}`}
          className="flex items-center gap-10 whitespace-nowrap pr-10 font-mono text-sm uppercase tracking-[0.16em] text-chrome-muted"
        >
          <span className={i % 2 === 0 ? 'text-chrome' : undefined}>{text}</span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-signal via-chrome to-volt"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="Sellos y unidades de negocio"
      className="border-y border-line bg-ink-2/70 py-6"
    >
      <div className="marquee-mask group flex overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
