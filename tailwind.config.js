/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Pure white & deep charcoal for minimalist palette */
        charcoal: '#1A1A1A',
        /* Navy Blue accent for CTAs */
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#152a47',
          light: '#2d5a8a',
        },
        /* Gold accent alternative */
        gold: {
          DEFAULT: '#c9a227',
          light: '#e5c76b',
          dark: '#9a7b1a',
        },
      },
      fontFamily: {
        /* Premium serif for academic feel */
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        /* Elegant sans-serif for taglines & body */
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
