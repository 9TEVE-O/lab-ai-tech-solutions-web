import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070a',
        panel: '#0d1117',
        line: '#1d2633',
        paper: '#f4efe4',
        muted: '#9aa8b8',
        teal: '#37d7c2',
        blue: '#6ba8ff',
        archive: '#ff9f43'
      }
    }
  },
  plugins: []
};

export default config;
