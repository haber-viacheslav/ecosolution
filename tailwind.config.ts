import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '360px', max: '479px' },
      md: '768px',
      lg: '1280px',
    },
    spacing: {
      logo: '269px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'stone-300': '#BCBCBC',
      'slate-100': '#F3F5FA',
      'slate-200': '#EAEDF1',
      'gray-800': '#173D33',
      'green-300': '#97D28B',
      'neutral-200': '#DCEFD8',
      'zinc-500': '#828382',
      'zinc-800': '#292D32',
      'backdrop-bg': '#FFFFFFBF',
      'burger-bg': '#173D33BF',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '1.2' }],
      sm: ['14px', { lineHeight: '1.28' }],
      base: ['16px', { lineHeight: '1.5' }],
      lg: ['18px', { lineHeight: '1.2' }],
      xl: ['24px', { lineHeight: '1.2' }],
      '2xl': ['28px', { lineHeight: '1' }],
      '4xl': ['36px', { lineHeight: '1' }],
      '5xl': ['48px', { lineHeight: '1' }],
      '6xl': ['64px', { lineHeight: '1' }],
    },
    fontFamily: {
      'Fira Sans': ['Fira Sans', 'sans-serif'],
      Oswald: ['Oswald', 'sans-serif'],
    },
    extend: {
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
