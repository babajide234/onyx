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
          text_2: '#444444',
          primary: '#6666FF',
          secondary: '#0E0B0B',
        },
        backgroundImage: {
          'text-gradient': 'linear-gradient(269.36deg, #6666FF 42.46%, #CACAFF 117.73%)',
          'about-bg': 'linear-gradient(180deg, rgba(0, 0, 0, 0.006) 0%, rgba(71, 71, 177, 0.140885) 57.6%, rgba(102, 102, 255, 0.126) 87.93%), #000000'
        },
        boxShadow: {
          navbar: '0px 4px 83px rgba(0, 0, 0, 0.16)',
          servicard:'0px 4px 66px rgba(159, 159, 159, 0.04)',
          servicard_hover: '0px 4px 66px 0px #6666FF57'
        },
        animation: {
          text: 'text 2s ease infinite',
        },
        keyframes: {
          text: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
        },
    },
  },
  plugins: [],
}

