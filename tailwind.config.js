/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 25px 25px 0px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        c_light_gray: '#D5E1EF',
        c_blue: '#2C7DFA',
        c_dark_navy: '#1F314F',
        c_gray: '#7D889E',
        c_blue_shade: '#3685FF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

