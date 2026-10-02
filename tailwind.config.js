/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      red: {
        300: '#ff8a9a',
        400: '#ff4560',
        500: '#FF1638',
        600: '#e0002f',
        700: '#bf0000',
        800: '#8f0000',
        900: '#660000',
      },
      slate: {
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
      },
    },
    extend: {},
  },
  plugins: [],
};
