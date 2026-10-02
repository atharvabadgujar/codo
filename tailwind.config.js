/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    borderRadius: { none: '0', sm: '2px', DEFAULT: '4px', md: '4px', lg: '6px', full: '9999px' },
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#0E1A2B',
        muted: '#566170',
        line: '#DCE0E6',
        surface: '#F5F6F8',
        accent: { DEFAULT: '#1D4ED8', dark: '#1E40AF' },
        good: '#15803D',
        bad: '#B91C1C',
      },
    },
  },
  plugins: [],
}
