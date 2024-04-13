/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      bg: '#fff4e0',
      main: '#FD9745',
      mainAccent: '#fc7303', // not needed for shadcn
    },
    fontFamily: {
      display: 'Public Sans',
    },
    extend: {},
  },
  plugins: [],
}

