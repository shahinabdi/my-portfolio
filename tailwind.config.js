/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#ececf1',
          200: '#dcddea',
          300: '#c0c2d9',
          400: '#9699cc',
          500: '#7578b7',
          600: '#585b98',
          700: '#494c7d',
          800: '#2d2f4a',
          900: '#1f2037',
          950: '#14151f',
        },
      },
    },
  },
  plugins: [],
};