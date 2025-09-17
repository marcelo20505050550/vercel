/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EAB308', // Amarelo principal
          light: '#FDE047',
          dark: '#CA8A04',
        },
        secondary: '#333333', // Cinza escuro
        text: {
          DEFAULT: '#000000', // Preto para escrita
          light: '#1F1F1F',
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#CCCCCC', // Cinza para elementos secundários
          dark: '#666666',
        },
        yellow: {
          50: '#FEFCE8',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 