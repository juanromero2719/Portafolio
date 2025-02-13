// tailwind.config.mjs
module.exports = {
  darkMode: "class", // Habilita el modo oscuro basado en clases
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      colors: {
        translucentWhite: 'hsla(0, 0%, 100%, 0.3)', 
        backdrop: 'hsla(158, 23%, 18%, 0.7)',
        baseBackground: '#233831',
      },

      fontFamily: {
        Acorn: ['Acorn', 'sans-serif'],
        LightAcorn: ['Acorn-Light', 'sans-serif'],
        RegularAcorn: ['Acorn-Regular', 'sans-serif'],
        ThinAcorn: ['Acorn-Thin', 'sans-serif'],
        Gt: ['GT', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-animated': 'linear-gradient(270deg, #FFCDD2, #C8E6C9, #FFF9C4)',
        'gradient-dark': 'linear-gradient(270deg, #243A31, #2F5248, #3B6D4F, #376E32)',
        'custom-dark': 'linear-gradient(var(--color-backdrop), var(--color-backdrop)), #233831',
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
