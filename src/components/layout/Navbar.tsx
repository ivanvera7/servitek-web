'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { navigation, ctaNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { Logo } from '@/components/ui/Brand';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    // Un único listener para el estado de la cabecera y la barra de progreso;
    // el trabajo va en requestAnimationFrame y solo escribe `transform`.
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setIsScrolled(y > 24);
      const bar = progressRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    const focusables = () =>
      Array.from(menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      // El foco no sale del menú mientras está abierto; el botón de cierre
      // (el mismo conmutador) cuenta como primer elemento.
      if (e.key !== 'Tab') return;
      const items = [toggle, ...focusables()].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    focusables()[0]?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      toggle?.focus();
    };
  }, [open]);

  // Cerrar al navegar.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[70] transition-[background-color,border-color,backdrop-filter] duration-slow ease-out-expo',
          isScrolled && !open
            ? 'border-b border-line bg-ink/75 backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6 md:h-header">
          <Link href="/" className="relative z-10 shrink-0" aria-label="SERVITEK — Inicio">
            <Logo
              priority
              className="h-9 transition-[filter] duration-base hover:brightness-110 md:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-fast',
                    active ? 'text-chrome' : 'text-chrome-muted hover:text-chrome'
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-signal transition-[opacity,transform] duration-base ease-out-expo',
                      active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href={ctaNavigation.href} className="btn btn-chrome min-h-11 px-5 text-xs">
              {ctaNavigation.label}
              <ArrowRight className="btn-icon h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Conmutador: dos trazos que giran hasta formar una X. */}
          <button
            ref={toggleRef}
            type="button"
            className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-chrome lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={cn(
                  'absolute left-0 block h-[1.5px] w-6 bg-current transition-[transform,top] duration-base ease-out-expo',
                  open ? 'top-1/2 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-[1.5px] bg-current transition-[transform,top,width] duration-base ease-out-expo',
                  open ? 'top-1/2 w-6 -rotate-45' : 'top-full w-4'
                )}
              />
            </span>
          </button>
        </div>

        {/* Progreso de lectura en el canto inferior. */}
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-x-0 -bottom-px h-px transition-opacity duration-slow',
            isScrolled && !open ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div
            ref={progressRef}
            className="rule-tricolor h-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </header>

      {/* Menú móvil a pantalla completa. Cerrado queda `invisible`: así sale
          del orden de tabulación sin desmontarse y la salida se anima. */}
      <div
        ref={menuRef}
        id="menu-movil"
        role={open ? 'dialog' : undefined}
        aria-modal={open ? true : undefined}
        aria-label="Menú de navegación"
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-[65] flex flex-col bg-ink/95 backdrop-blur-2xl lg:hidden',
          'transition-[opacity,visibility] duration-base ease-out-expo',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div className="grid-lines" aria-hidden="true" />
        <nav
          className="container-site relative flex-1 overflow-y-auto pt-24"
          aria-label="Navegación móvil"
        >
          <ul>
            {navigation.map((item, index) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.href}
                  className={cn(
                    'border-b border-line transition-[opacity,transform] ease-out-expo',
                    open
                      ? 'translate-y-0 opacity-100 duration-slow'
                      : 'translate-y-4 opacity-0 duration-fast'
                  )}
                  style={{ transitionDelay: open ? `${80 + index * 60}ms` : '0ms' }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 py-5"
                  >
                    <span
                      aria-hidden="true"
                      className={cn('number-index', !active && 'text-chrome-dim')}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'font-display text-3xl font-semibold [font-stretch:118%]',
                        active ? 'text-chrome' : 'text-chrome-2'
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={cn(
            'container-site relative space-y-5 pb-8 pt-6 transition-[opacity,transform] ease-out-expo',
            open
              ? 'translate-y-0 opacity-100 duration-slow'
              : 'translate-y-4 opacity-0 duration-fast'
          )}
          style={{ transitionDelay: open ? `${80 + navigation.length * 60}ms` : '0ms' }}
        >
          <Link
            href={ctaNavigation.href}
            onClick={() => setOpen(false)}
            className="btn btn-chrome w-full"
          >
            {ctaNavigation.label}
            <ArrowRight className="btn-icon" aria-hidden="true" />
          </Link>
          <p className="flex flex-wrap justify-between gap-2 font-mono text-xs uppercase tracking-[0.14em] text-chrome-muted">
            <a href={`tel:${company.contact.phone}`} className="py-2">
              {company.contact.phoneFormatted}
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="break-all py-2 normal-case tracking-normal"
            >
              {company.contact.email}
            </a>
          </p>
        </div>
      </div>

      {/* Reserva el alto de la cabecera fija (no cambia: sin CLS). */}
      <div className="h-16 md:h-header" aria-hidden="true" />
    </>
  );
}
