import Image from 'next/image';
import { ArrowUpRight, FileText } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { distributors } from '@/data/distributors';

/**
 * Distribuidor oficial. Las certificaciones salen tal cual del catálogo del
 * fabricante: es la prueba de confianza que SERVITEK puede respaldar hoy.
 */
export function OfficialDistributor() {
  return (
    <section className="section">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Distribuidor oficial"
            title="Respaldados por fabricantes líderes del sector"
            description="Somos distribuidores oficiales de marcas reconocidas en iluminación industrial, lo que garantiza productos certificados y soporte técnico directo del fabricante."
          />
        </ScrollReveal>

        <div className="mt-16 space-y-6">
          {distributors.map((brand) => (
            <ScrollReveal key={brand.name}>
              <article className="panel grid overflow-hidden lg:grid-cols-12">
                <div className="p-8 sm:p-12 lg:col-span-7">
                  <Image
                    src={brand.logo}
                    alt={`Logotipo de ${brand.name}`}
                    width={brand.logoWidth}
                    height={brand.logoHeight}
                    className="h-9 w-auto md:h-11"
                  />
                  <p className="mt-10 max-w-xl text-lead text-chrome-2">{brand.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {brand.categories.map((category) => (
                      <li
                        key={category}
                        className="rounded-full border border-line px-3.5 py-1.5 text-sm text-chrome-muted"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex flex-col justify-between gap-10 border-t border-line bg-ink-2/60 p-8 sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
                  <div className="grid-lines" aria-hidden="true" />
                  <div className="relative">
                    <p className="font-mono text-eyebrow uppercase text-chrome-muted">
                      Grado de protección
                    </p>
                    <ul className="mt-6 grid grid-cols-3 gap-3">
                      {brand.certifications.map((cert) => (
                        <li
                          key={cert}
                          className="rounded-xl border border-line-strong bg-ink-3 py-5 text-center font-display text-xl font-bold text-chrome [font-stretch:125%]"
                        >
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a
                      href={brand.catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-chrome"
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      Ver catálogo
                    </a>
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      {brand.website.replace('https://', '')}
                      <ArrowUpRight className="btn-icon" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
