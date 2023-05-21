/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          white: '#FFFFFF',
          text: '#222222',
          primary: '#6666FF',
        },
        boxShadow: {
          navbar: '0px 4px 83px rgba(0, 0, 0, 0.16)',
        },
    },
  },
  plugins: [],
}

