import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto',
  description:
    'Contacte con SERVITEK para solicitar presupuesto o consultas sobre servicios electromecánicos industriales.',
  path: '/contacto',
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="¿Necesita una solución técnica?"
        subtitle="Cuéntenos qué necesita su operación y nuestro equipo podrá evaluar la solución adecuada."
      />

      <section className="section pt-8 md:pt-12">
        {/* 7/5: el formulario pesa más que la ficha de contacto. */}
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="eyebrow">Formulario</span>
              <h2 className="mt-6 text-h2 font-semibold">Solicitar presupuesto</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-chrome-2">
                Complete los datos y se abrirá WhatsApp con su consulta ya redactada. Los campos
                marcados con asterisco son obligatorios.
              </p>
            </ScrollReveal>
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* fullHeight: sin él la ficha no tiene recorrido para quedarse fija. */}
            <ScrollReveal direction="right" delay={120} fullHeight>
              <ContactInfo />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
