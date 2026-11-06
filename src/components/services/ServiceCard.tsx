import { Service } from '@/types/service';
import { GlassCard } from '@/components/ui/GlassCard';
import { ServiceIcon } from '@/lib/icons';
import { cardImage } from '@/lib/utils';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <GlassCard
      href={`/servicios/${service.slug}`}
      image={cardImage(service.image)}
      icon={<ServiceIcon name={service.icon} className="h-5 w-5" />}
      title={service.shortTitle}
      description={service.description}
      cta={service.cta}
    />
  );
}
