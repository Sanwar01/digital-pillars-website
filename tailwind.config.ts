import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#55CCFF',
          blue: '#2B59FF',
          navy: '#0A1424',
          'navy-light': '#111D33',
        },
        navy: {
          950: '#0A1424',
          900: '#0F1D35',
          800: '#152847',
        },
        pillar: {
          blue: '#2B59FF',
          cyan: '#55CCFF',
          green: '#19b985',
          purple: '#6b4df5',
          orange: '#ff9f45',
          ink: '#0A1424',
          text: '#24324a',
          muted: '#65738a',
          soft: '#f5f8fd',
          line: '#dce5f2',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #55CCFF 0%, #2B59FF 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(10, 20, 36, 0.08)',
        lift: '0 18px 55px rgba(10, 20, 36, 0.12)',
        blue: '0 16px 32px rgba(43, 89, 255, 0.28)',
        'brand-glow': '0 0 40px rgba(43, 89, 255, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-cabinet)', 'sans-serif'],
        display: ['var(--font-cabinet)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
