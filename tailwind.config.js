/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      bg: '#ffffff',
      main: '#FD9745',
      mainAccent: '#ffd43b', // not needed for shadcn
      greenSoft: '#daf5f0',
      greenAccent: '#63e6be',
      violetAccent: '#c4a1ff',
      yellowSoft: '#FEF2E8',
      yellowAccent: '#FFDC58',
      violetSoft: '#e3dff2',
      magentaAccent: '#bd52eb',
      redSoft: '#fcd7d7',
      redAccent: '#ff6b6b',
    },
    fontFamily: {
      display: 'Public Sans',
    },
    extend: {},
  },
  plugins: [],
}

