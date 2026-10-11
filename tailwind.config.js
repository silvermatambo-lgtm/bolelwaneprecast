/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand gold (from the Bolelwane poster) – replaces Tailwind's default amber
        amber: {
          50:  '#fff9e6',
          100: '#ffefbd',
          200: '#ffe28c',
          300: '#ffd25a',
          400: '#f7c12f',
          500: '#eab01e',
          600: '#c9920f',
          700: '#a1730d',
          800: '#7a570f',
          900: '#5a410f',
        },
        gold: {
          50:  '#fff9e6',
          100: '#ffefbd',
          200: '#ffe28c',
          300: '#ffd25a',
          400: '#f7c12f',
          500: '#eab01e',
          600: '#c9920f',
          700: '#a1730d',
          800: '#7a570f',
          900: '#5a410f',
        },
        // Brand navy – replaces Tailwind's default stone (all neutrals become navy-tinted)
        stone: {
          50:  '#f3f6fc',
          100: '#e7edf8',
          200: '#d0daee',
          300: '#aabbd9',
          400: '#8095bf',
          500: '#566b99',
          600: '#40537f',
          700: '#2b3d68',
          800: '#14265a',
          900: '#0a1a45',
        },
      },
    },
  },
  plugins: [],
};
