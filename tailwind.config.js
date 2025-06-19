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
          DEFAULT: '#A9A9A9', // Cinza-prata (substituindo o amarelo)
          light: '#C9C9C9',
          dark: '#898989',
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