import type { Config } from 'tailwindcss';

/**
 * Sistema visual SERVITEK — "cromo y corriente".
 *
 * Sale directamente del emblema: una S de metal pulido con la mitad superior
 * roja, el trazo central cromado y la mitad inferior azul, sobre negro.
 *
 * Regla: ningún color se escribe a mano en los componentes. Si hace falta un
 * tono nuevo se añade aquí.
 *
 * Contraste verificado (WCAG 2.1) sobre ink #07090D y sobre ink-3 #10141C:
 *   chrome        16,7:1 / 15,4:1   texto principal
 *   chrome-2      11,2:1 / 10,4:1   texto secundario
 *   chrome-muted   6,4:1 /  6,0:1   texto terciario, rótulos
 *   signal-text    6,6:1 /  6,1:1   texto rojo
 *   volt-text      8,3:1 /  7,7:1   enlaces y texto azul
 *   ink sobre chrome (botón primario) 16,7:1
 *   blanco sobre volt-solid (botón azul) 5,8:1
 *   chrome-dim, signal y volt: SOLO decorativos (filetes, puntos, halos).
 */
const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#07090D', // fondo base
          2: '#0B0E14', // secciones alternas
          3: '#10141C', // tarjetas
          4: '#171C26', // tarjeta elevada, campos
        },
        chrome: {
          DEFAULT: '#E8EBF0',
          2: '#BCC3CF',
          muted: '#8A93A3',
          dim: '#4A5262',
        },
        signal: {
          DEFAULT: '#E5202E', // rojo del emblema
          text: '#FF5A66',
        },
        volt: {
          DEFAULT: '#2A6BFF', // azul del emblema
          solid: '#1F5BE0',
          text: '#7AA6FF',
        },
        line: {
          DEFAULT: 'rgb(255 255 255 / 0.08)',
          strong: 'rgb(255 255 255 / 0.14)',
        },
        danger: '#FF8A80',
        success: '#7BE49B',
        whatsapp: {
          DEFAULT: '#128C4A',
          hover: '#0E7A40',
          ring: '#25D366',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      /**
       * Escala fluida con clamp(). Los mínimos dejan que "INFRAESTRUCTURA"
       * (la palabra más larga del contenido) quepa a 320 px en el ancho
       * expandido de Archivo.
       */
      fontSize: {
        mega: [
          'clamp(2.25rem, 0.9rem + 6vw, 6.25rem)',
          { lineHeight: '0.94', letterSpacing: '-0.02em' },
        ],
        display: [
          'clamp(2rem, 1.1rem + 3.9vw, 4.5rem)',
          { lineHeight: '1', letterSpacing: '-0.02em' },
        ],
        h1: [
          'clamp(1.875rem, 1.2rem + 2.8vw, 3.5rem)',
          { lineHeight: '1.04', letterSpacing: '-0.018em' },
        ],
        h2: [
          'clamp(1.625rem, 1.15rem + 2vw, 2.75rem)',
          { lineHeight: '1.08', letterSpacing: '-0.015em' },
        ],
        h3: [
          'clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)',
          { lineHeight: '1.2', letterSpacing: '-0.01em' },
        ],
        lead: ['clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)', { lineHeight: '1.6' }],
        eyebrow: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.2em' }],
      },
      spacing: {
        header: '4.5rem',
      },
      maxWidth: {
        site: '84rem',
      },
      transitionDuration: {
        fast: '160ms',
        base: '280ms',
        slow: '600ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        rise: 'rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1000ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'emblem-in': 'emblemIn 1400ms cubic-bezier(0.16, 1, 0.3, 1) both',
        unveil: 'unveil 1400ms cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 80s linear infinite',
        'spin-slower': 'spin 140s linear infinite reverse',
        marquee: 'marquee 48s linear infinite',
        blink: 'blink 2.4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        progress: 'progress 1.3s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translate3d(0, 28px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        emblemIn: {
          from: { opacity: '0', transform: 'scale(0.86) rotate(-6deg)', filter: 'blur(12px)' },
          to: { opacity: '1', transform: 'none', filter: 'blur(0)' },
        },
        // Foto que se abre como un obturador.
        unveil: {
          from: { opacity: '0', clipPath: 'inset(8% 6% round 24px)', transform: 'scale(1.04)' },
          to: { opacity: '1', clipPath: 'inset(0% 0% round 24px)', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, -6px, 0)' },
          '50%': { transform: 'translate3d(0, 8px, 0)' },
        },
        marquee: {
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        // Piloto de "sistema en marcha": nunca se apaga del todo.
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.35' } },
        pulseRing: {
          from: { transform: 'scale(1)', opacity: '0.55' },
          to: { transform: 'scale(1.7)', opacity: '0' },
        },
        progress: {
          from: { transform: 'translateX(-110%)' },
          to: { transform: 'translateX(410%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
