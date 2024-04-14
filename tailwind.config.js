/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      bg: '#fff4e0',
      main: '#FD9745',
      mainAccent: '#fc7303', // not needed for shadcn
      greenSoft: '#daf5f0',
      greenAccent: '#7fbc8c',
      violetAccent: '#c4a1ff',
      yellowSoft: '#FEF2E8',
      yellowAccent: '#FFDC58',
      violetSoft: '#e3dff2',
      magentaAccent: '#bd52eb',
    },
    fontFamily: {
      display: 'Public Sans',
    },
    extend: {},
  },
  plugins: [],
}

