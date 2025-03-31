/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ], // Vão os arquivos que usam as classes
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "#ef8307",
        "secondary-color": "#2859ff",
      },
      spacing: {
        200: "200px",
        400: "400px",
      },
      screens: {
        tablet: "640px",
        desktop: "1024px",
      },
    },
  }, // Personalizar o tailwindcss, atráves de temas e design
  plugins: [], // Extensões e funcionalidades adicionais
};
