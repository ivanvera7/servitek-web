import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { StatCard } from '@/components/ui/StatCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/data/company';
import { aboutContent } from '@/data/company-content';
import { FounderCard } from '@/components/about/FounderCard';
import { WhyServitek } from '@/components/sections/WhyServitek';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros',
  description:
    'Conozca a SERVITEK E.A.S., empresa paraguaya de electromecánica industrial y servicios eléctricos de alta exigencia.',
  path: '/nosotros',
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title={aboutContent.title} subtitle={aboutContent.subtitle} />

      {/* Solo datos verificables: la empresa aún no facilitó años de
          experiencia ni número de proyectos. */}
      <section className="pb-8">
        <div className="container-site grid gap-8 sm:grid-cols-2">
          {aboutContent.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 90}>
              <StatCard index={index} value={stat.value} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-5 lg:grid-cols-2">
          {[
            { label: 'Misión', text: company.mission },
            { label: 'Visión', text: company.vision },
          ].map((block, i) => (
            <ScrollReveal
              key={block.label}
              direction={i === 0 ? 'left' : 'right'}
              delay={i * 120}
              fullHeight
            >
              <article className="panel h-full p-8 sm:p-12">
                <span className="number-index">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="mt-6 text-h2 font-semibold">{block.label}</h2>
                <p className="mt-6 text-lead text-chrome-2">{block.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section border-y border-line bg-ink-2/60">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeading eyebrow="Quién lidera SERVITEK" title="Dirección" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-16">
              <FounderCard />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Valores"
              title="Nuestros valores"
              description="Los principios que guían cada proyecto y cada relación comercial."
            />
          </ScrollReveal>

          <ol className="mt-16 border-t border-line">
            {company.values.map((value, index) => (
              <li key={value.title}>
                <ScrollReveal delay={index * 70}>
                  <div className="group grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                    <span className="number-index md:col-span-1 md:mt-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-h3 font-semibold transition-colors duration-base md:col-span-5">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-chrome-muted md:col-span-6 md:mt-1">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WhyServitek eyebrow="Pilares" />

      <div className="pt-24 md:pt-32" />
      <CTASection />
    </>
  );
}
