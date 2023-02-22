/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFC9E5',
          100: '#FFB4DB',
          200: '#FF8BC7',
          300: '#FF63B3',
          400: '#FF3AA0',
          500: '#FF118C',
          600: '#D80070',
          700: '#A00053',
          800: '#680036',
          900: '#300019',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
