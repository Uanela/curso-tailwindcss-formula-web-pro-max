/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ], // Vão os arquivos que usam as classes tailwind
  theme: {}, // Personalizar o tailwindcss, atráves de temas e design
  plugins: [], // Extensões e funcionalidades adicionais
};
