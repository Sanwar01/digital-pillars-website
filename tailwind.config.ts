import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020b1d',
          900: '#031533',
          800: '#041a3a',
        },
        pillar: {
          blue: '#0b6bff',
          cyan: '#12c8ff',
          green: '#19b985',
          purple: '#6b4df5',
          orange: '#ff9f45',
          ink: '#06142f',
          text: '#24324a',
          muted: '#65738a',
          soft: '#f5f8fd',
          line: '#dce5f2',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(6, 20, 47, 0.08)',
        lift: '0 18px 55px rgba(6, 20, 47, 0.12)',
        blue: '0 16px 32px rgba(11, 107, 255, 0.28)',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Outfit',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: ['Cabinet Grotesk', 'var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
