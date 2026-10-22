import { Hero } from '@/components/hero/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { BusinessUnits } from '@/components/sections/BusinessUnits';
import { WhyServitek } from '@/components/sections/WhyServitek';
import { SectorsPreview } from '@/components/sections/SectorsPreview';
import { OfficialDistributor } from '@/components/sections/OfficialDistributor';
import { CTASection } from '@/components/sections/CTASection';

// PENDIENTE (empresa): cuando haya proyectos reales, añadir aquí un avance de
// /proyectos con <ProjectCard /> (la página y la tarjeta ya existen).
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProposition />
      <BusinessUnits />
      <WhyServitek />
      <SectorsPreview />
      <OfficialDistributor />
      <CTASection />
    </>
  );
}
