/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			eerie: {
				100: '#1C2324',
				200: '#2C383A',
				300: '#354346'
			},
			red: {
				100: '#FFADC0',
				200: '#FF85A1',
				300: '#FF5C82',
				400: '#FF3363',
				500: '#FF0A43',
				600: '#B63A3A',
				700: '#B8002B',
				800: '#8F0021',
				900: '#660018'
			},
			mindaro: {
				500: '#C5D86D'
			},
			zinc: colors.zinc,
			amber: colors.amber,
			white: colors.white
		},
		fontFamily: {
			display: 'Public Sans'
		},
		extend: {}
	},
	plugins: []
};
