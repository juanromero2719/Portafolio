// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      colors: {
        translucentWhite: 'hsla(0, 0%, 100%, 0.3)', // Define el color
      },

      fontFamily: {
        Acorn: ['Acorn', 'sans-serif'],
        LightAcorn: ['Acorn-Light', 'sans-serif'],
        RegularAcorn: ['Acorn-Regular', 'sans-serif'],
        ThinAcorn: ['Acorn-Thin', 'sans-serif'],
        Gt: ['GT', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-animated': 'linear-gradient(270deg, #FFCDD2, #C8E6C9, #FFF9C4)', // Rojo pastel, verde pastel, azul pastel, amarillo pastel
      },
      animation: {
        'gradient-move': 'gradient 10s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
