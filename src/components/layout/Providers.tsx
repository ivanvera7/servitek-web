import { Analytics } from './Analytics';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

/** Elementos comunes a todas las páginas que van fuera del flujo principal. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
      <WhatsAppButton />
    </>
  );
}
