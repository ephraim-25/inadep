/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['"Inter Tight"', 'sans-serif'],
          display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
          inadep: {
              base: '#fefbff',
              plum: '#481a54',
              'plum-dark': '#32103c',
              'plum-light': '#5d236d',
              aubergine: '#611f69',
              iris: '#730394',
              violet: '#ba01ff',
              lilac: '#f9f0ff',
              border: '#eac8fe',
              emerald: '#059669',
              'emerald-dark': '#047857',
              'emerald-light': '#10b981',
              'emerald-bg': '#ecfdf5',
              text: '#1c1320',
              muted: '#6b5e72'
          }
      },
      borderRadius: {
          'btn': '4px',
          'card': '16px'
      },
      boxShadow: {
          'ambient': '0 20px 40px -15px rgba(72, 26, 84, 0.12)',
          'card-hover': '0 25px 50px -12px rgba(97, 31, 105, 0.25)',
          'glow': '0 0 25px rgba(186, 1, 255, 0.25)'
      }
    },
  },
  plugins: [],
}
