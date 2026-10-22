import { Metadata } from 'next';
import { company } from '@/data/company';
import { imageCredits } from '@/data/image-credits';
import { PageHero } from '@/components/ui/PageHero';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de SERVITEK E.A.S.',
  path: '/terminos-y-condiciones',
  // PENDIENTE (empresa): texto legal sin redactar. No indexar hasta publicarlo.
  noIndex: true,
});

export default function TerminosYCondiciones() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Términos y Condiciones" />

      {/* max-w-[68ch]: medida de lectura cómoda para texto corrido. Sin
          límite, en 1440 px las líneas superaban los 120 caracteres. */}
      <div className="section pt-8 md:pt-12">
        <div className="container-site">
          <div className="max-w-[68ch]">
            <h2 className="mt-14 text-h3 font-semibold first:mt-0">Titular del sitio</h2>
            <p className="mt-4 leading-relaxed text-chrome-2">
              <strong className="font-medium text-chrome">{company.legalName}</strong>
              <br />
              RUC: {company.ruc}
              <br />
              {company.contact.address}
              <br />
              <a
                href={`mailto:${company.contact.email}`}
                className="link-u text-volt-text transition-colors duration-fast hover:text-chrome"
              >
                {company.contact.email}
              </a>
              <br />
              <a
                href={`tel:${company.contact.phone}`}
                className="link-u text-volt-text transition-colors duration-fast hover:text-chrome"
              >
                {company.contact.phoneFormatted}
              </a>
            </p>

            <h2 className="mt-14 text-h3 font-semibold first:mt-0">Objeto del sitio</h2>
            <p className="mt-4 leading-relaxed text-chrome-2">
              Este sitio web tiene carácter informativo. Presenta los servicios electromecánicos de{' '}
              {company.name} y facilita el contacto con la empresa. No se comercializan productos ni
              servicios a través del sitio, y su contenido no constituye una oferta contractual:
              cualquier trabajo se rige por el presupuesto y las condiciones que se acuerden por
              escrito en cada caso.
            </p>

            <h2 className="mt-14 text-h3 font-semibold first:mt-0">Propiedad intelectual</h2>
            <p className="mt-4 leading-relaxed text-chrome-2">
              Los logotipos, marcas y contenidos de este sitio pertenecen a {company.legalName} o a
              sus respectivos titulares, y no pueden reproducirse sin autorización previa.
            </p>

            <h2 id="creditos" className="mt-14 scroll-mt-28 text-h3 font-semibold">
              Créditos fotográficos
            </h2>
            <p className="mt-4 leading-relaxed text-chrome-2">
              Las fotografías de servicios y sectores son ilustrativas y proceden de Wikimedia
              Commons. Se han recortado y ajustado de color; cada una conserva su licencia original.
            </p>
            <ul className="mt-6 border-t border-line text-sm">
              {imageCredits.map((c) => (
                <li
                  key={c.file}
                  className="border-b border-line py-4 leading-relaxed text-chrome-muted"
                >
                  <a
                    href={c.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-u text-chrome-2 hover:text-chrome"
                  >
                    {c.title}
                  </a>{' '}
                  · {c.author} ·{' '}
                  <a
                    href={c.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer license"
                    className="link-u font-mono hover:text-chrome"
                  >
                    {c.license}
                  </a>
                </li>
              ))}
            </ul>

            <div className="panel mt-16 p-7">
              <p className="eyebrow mb-4">EN REVISIÓN</p>
              <p className="text-sm leading-relaxed text-chrome-2">
                Documento en revisión. La versión definitiva se publicará antes de la puesta en
                marcha del sitio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
