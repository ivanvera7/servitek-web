import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Emblem } from '@/components/ui/Brand';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { company } from '@/data/company';

/**
 * Cierre de conversión, al final de casi todas las páginas. Va en una placa
 * propia con el emblema gigante asomando: se lee como un bloque aparte.
 */
export function CTASection() {
  return (
    <section className="pb-24 pt-8 md:pb-32">
      <div className="container-site">
        <ScrollReveal direction="scale">
          <div className="panel relative isolate overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 md:py-24 lg:px-20">
            <div className="grid-lines" aria-hidden="true" />
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 -z-10 h-96 w-96 rounded-full bg-signal/20 blur-[110px]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-32 right-40 -z-10 h-96 w-96 rounded-full bg-volt/25 blur-[110px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-6 hidden w-[28rem] opacity-90 lg:block xl:w-[32rem]"
            >
              <Emblem sizes="30rem" className="animate-float" />
            </div>

            <div className="relative max-w-2xl">
              <span className="eyebrow">Contacto</span>
              <h2 className="mt-7 text-display font-semibold">
                <span className="text-metal">¿Necesita una solución técnica?</span>
              </h2>
              <p className="mt-7 max-w-xl text-lead text-chrome-2">
                Cuéntenos qué necesita su operación y nuestro equipo podrá evaluar la solución
                adecuada. Respuesta garantizada en menos de 24 horas.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn btn-chrome min-h-14 px-9">
                  Solicitar presupuesto
                  <ArrowRight className="btn-icon" aria-hidden="true" />
                </Link>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp min-h-14 px-9"
                >
                  Escribir por WhatsApp
                </a>
              </div>

              <p className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-chrome-muted">
                <a href={`tel:${company.contact.phone}`} className="link-u py-1 hover:text-chrome">
                  {company.contact.phoneFormatted}
                </a>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="link-u break-all py-1 hover:text-chrome"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
