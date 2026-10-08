/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        none: '0', sm: '4px', DEFAULT: '8px', md: '10px', lg: '12px', xl: '16px', '2xl': '20px', '3xl': '24px', full: '9999px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0E1117',
        muted: '#6B7280',
        line: '#E5E7EB',
        surface: '#F9FAFB',
        'surface-2': '#F3F4F6',
        accent: { DEFAULT: '#6366F1', dark: '#4F46E5', light: '#818CF8' },
        good: '#10B981',
        bad: '#EF4444',
        warning: '#F59E0B',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px 0 rgba(0,0,0,0.08)',
        'dashboard': '0 25px 50px -12px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
