/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso diz: procure em qualquer pasta dentro de 'src' com essas extensões
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}