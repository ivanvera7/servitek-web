import Link from 'next/link';
import { absoluteUrl } from '@/lib/site';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

/** Ruta de navegación con su BreadcrumbList para los buscadores. */
export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  const trail = [{ label: 'Inicio', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-chrome-muted">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden="true" className="h-px w-4 bg-chrome-dim" />}
              {isLast ? (
                <span className="text-chrome-2" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="link-u py-1 transition-colors duration-fast hover:text-chrome"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
