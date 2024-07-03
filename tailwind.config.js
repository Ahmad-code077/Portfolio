/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arrow: ['Preahvihear'],
        nav: ['Plus Jakarta Sans'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        customEgg: '87% 13% 86% 14% / 85% 15% 85% 15%',
      },
      backgroundImage: {
        customGradient:
          'linear-gradient(to right, #130428 0%, #251043 20%, #38126D 40%, #261045 60%, #190634 80%)',
        firstBox: 'linear-gradient(270deg, #8D819D 0%, #1e1232 26%)',
        secondBox: 'linear-gradient(90deg, #8D819D 0%, #1e1232 26%)',
      },
    },
  },
  plugins: [],
};
