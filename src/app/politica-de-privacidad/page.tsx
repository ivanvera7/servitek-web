import { Metadata } from 'next';
import { company } from '@/data/company';
import { PageHero } from '@/components/ui/PageHero';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de SERVITEK E.A.S.',
  path: '/politica-de-privacidad',
  // PENDIENTE (empresa): texto legal sin redactar. No indexar hasta publicarlo.
  noIndex: true,
});

export default function PoliticaDePrivacidad() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de Privacidad" />

      {/* max-w-[68ch]: medida de lectura cómoda para texto corrido. Sin
          límite, en 1440 px las líneas superaban los 120 caracteres. */}
      <div className="section pt-8 md:pt-12">
        <div className="container-site">
          <div className="max-w-[68ch]">
            <h2 className="mt-14 text-h3 font-semibold first:mt-0">Responsable del tratamiento</h2>
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

            <h2 className="mt-14 text-h3 font-semibold first:mt-0">Datos que tratamos</h2>
            <p className="mt-4 leading-relaxed text-chrome-2">
              Este sitio web no instala cookies propias ni de terceros, no utiliza herramientas de
              analítica y no almacena datos de navegación.
            </p>
            <p className="mt-4 leading-relaxed text-chrome-2">
              El formulario de contacto no envía información a ningún servidor de SERVITEK: al
              enviarlo se abre WhatsApp en su propio dispositivo con los datos que usted haya
              escrito, y es usted quien decide si completa el envío. En ese caso, la comunicación se
              rige además por las condiciones de WhatsApp.
            </p>

            <h2 className="mt-14 text-h3 font-semibold first:mt-0">Finalidad y conservación</h2>
            <p className="mt-4 leading-relaxed text-chrome-2">
              Los datos que nos haga llegar se utilizan únicamente para atender su consulta y
              elaborar, en su caso, la propuesta técnica solicitada. Puede solicitar en cualquier
              momento el acceso, la rectificación o la eliminación de sus datos escribiendo a la
              dirección de correo indicada más arriba.
            </p>

            <div className="panel mt-16 p-7">
              <p className="eyebrow mb-4">EN REVISIÓN</p>
              <p className="text-sm leading-relaxed text-chrome-2">
                Documento en revisión. La versión definitiva, redactada conforme a la normativa
                paraguaya aplicable en materia de protección de datos personales, se publicará antes
                de la puesta en marcha del sitio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
