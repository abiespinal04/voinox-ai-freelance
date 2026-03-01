/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#4338ca',
          light: '#6366f1',
          dark: '#3730a3',
        },
        charcoal: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'section': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'subheading': ['1.25rem', { lineHeight: '1.4' }],
        'subheading-lg': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'meta': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 60px -12px rgba(67, 56, 202, 0.35)',
        'glow-subtle': '0 0 80px -20px rgba(67, 56, 202, 0.2)',
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(67, 56, 202, 0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(99, 102, 241, 0.1), transparent 55%), radial-gradient(ellipse 50% 30% at 20% 60%, rgba(67, 56, 202, 0.06), transparent 50%)',
        'gradient-page': 'linear-gradient(180deg, #f8fafc 0%, #ffffff 25%, #ffffff 100%)',
        'gradient-section': 'linear-gradient(to bottom, transparent, rgba(248, 250, 252, 0.8))',
        'gradient-divider': 'linear-gradient(to right, transparent, rgba(148, 163, 184, 0.3), transparent)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
