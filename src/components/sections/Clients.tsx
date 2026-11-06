import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { clients } from '@/data/clients';
import { cn } from '@/lib/utils';

/** "Copavic Ltda." → ["Copavic", "Ltda."]: la razón social va aparte, en pequeño. */
const LEGAL_SUFFIX = /\s+(S\.A\.?|Ltda\.?|EAS|E\.A\.S\.?)$/i;
const brandName = (name: string) => name.replace(LEGAL_SUFFIX, '');

/**
 * Clientes. Todos los logotipos se pintan en cromo monocromo para que la
 * pared se lea como una sola pieza sobre el fondo oscuro; al pasar el cursor
 * se encienden. Los clientes sin logotipo usan una marca tipográfica con la
 * misma presencia. El nombre legal va como texto real al pie de cada placa,
 * así el lector de pantalla oye cada cliente una sola vez.
 */
export function Clients({ className }: { className?: string }) {
  return (
    <section className={cn('section', className)} aria-labelledby="clientes-titulo">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading
            align="center"
            id="clientes-titulo"
            eyebrow="Clientes"
            title="Empresas que confían en SERVITEK"
            description="Industrias y empresas líderes del Paraguay que mantienen su operación en marcha con nuestro equipo técnico."
          />
        </ScrollReveal>

        <ul className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-4">
          {clients.map((client, i) => (
            <li key={client.name}>
              <ScrollReveal delay={(i % 3) * 90} fullHeight>
                <div className="client-tile group">
                  <div className="flex flex-1 items-center justify-center px-4">
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt=""
                        width={client.logoWidth}
                        height={client.logoHeight}
                        className={cn(
                          'w-auto max-w-full object-contain transition-opacity duration-base ease-out-expo group-hover:opacity-100',
                          client.logoTone === 'color'
                            ? 'opacity-90'
                            : 'opacity-70 brightness-0 invert',
                          client.logoClass
                        )}
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        translate="no"
                        className="font-display text-[clamp(1.25rem,0.9rem+1.4vw,1.875rem)] font-bold uppercase leading-none tracking-[0.04em] text-chrome/70 transition-colors duration-base ease-out-expo [font-stretch:125%] group-hover:text-chrome"
                      >
                        {brandName(client.name)}
                      </span>
                    )}
                  </div>
                  <p
                    translate="no"
                    className="relative text-center font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-chrome-muted"
                  >
                    {client.name}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
