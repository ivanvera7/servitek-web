import { Sector } from '@/types/sector';
import { GlassCard } from '@/components/ui/GlassCard';
import { cardImage } from '@/lib/utils';

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <GlassCard
      href={`/sectores/${sector.slug}`}
      image={cardImage(sector.image)}
      title={sector.shortTitle}
      description={sector.description}
      cta={sector.cta}
    />
  );
}
