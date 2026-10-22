import { Button } from '@/components/ui/Button';
import { StatCard } from '@/components/ui/StatCard';
import { EmblemStage } from './EmblemStage';
import { SocialLinks } from './SocialLinks';
import { company } from '@/data/company';
import { aboutContent } from '@/data/company-content';

/** Retardos de la entrada escalonada, en un solo sitio. */
const STEP = {
  status: '0ms',
  headline: '90ms',
  description: '220ms',
  ctas: '320ms',
  contact: '420ms',
  stats: '520ms',
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-10 pb-14 pt-6 md:pt-10 lg:min-h-[calc(100svh-4.5rem-9rem)] lg:grid-cols-12 lg:gap-8 lg:pb-16">
        <div className="lg:col-span-7">
          <p
            className="inline-flex animate-rise items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-chrome-muted"
            style={{ animationDelay: STEP.status }}
          >
            <span className="status-dot" aria-hidden="true" />
            {company.legalName} · {company.contact.address}
          </p>

          <h1
            className="mt-8 animate-rise text-[clamp(1.875rem,0.9rem+4vw,4.25rem)] font-semibold leading-[0.98] [font-stretch:115%]"
            style={{ animationDelay: STEP.headline }}
          >
            <span className="text-metal">Electromecánica industrial</span>{' '}
            <span className="text-chrome-2">para plantas que no pueden parar.</span>
          </h1>

          <p
            className="mt-8 max-w-xl animate-rise text-lead text-chrome-2"
            style={{ animationDelay: STEP.description }}
          >
            Automatización, mantenimiento, infraestructura y respaldo energético para la industria
            paraguaya.
          </p>

          <div
            className="mt-10 flex animate-rise flex-col gap-3 sm:flex-row"
            style={{ animationDelay: STEP.ctas }}
          >
            <Button href="/contacto" size="lg">
              Solicitar presupuesto
            </Button>
            <Button href="/servicios" variant="ghost" size="lg">
              Ver servicios
            </Button>
          </div>

          <div className="mt-12 animate-rise" style={{ animationDelay: STEP.contact }}>
            <SocialLinks />
          </div>
        </div>

        <div className="order-first mx-auto w-full max-w-[17rem] sm:max-w-sm lg:order-none lg:col-span-5 lg:max-w-none">
          <EmblemStage />
        </div>
      </div>

      <div className="container-site relative pb-16 md:pb-24">
        <div
          className="grid animate-rise grid-cols-1 gap-8 sm:grid-cols-2"
          style={{ animationDelay: STEP.stats }}
        >
          {aboutContent.stats.map((stat, index) => (
            <StatCard key={stat.label} index={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
