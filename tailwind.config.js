/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        navy: { 950: '#070B1A', 900: '#0B1226', 800: '#111A36', 700: '#1B2547' },
        brand: { DEFAULT: '#5B6CFF', soft: '#7C8BFF', violet: '#8B5CF6' },
        teal: { accent: '#2DD4BF' },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 8px 24px -8px rgba(15,23,42,.10)',
        glow: '0 0 60px -10px rgba(91,108,255,.55)',
      },
    },
  },
  plugins: [],
}
