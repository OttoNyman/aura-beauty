/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				ivory: "#FFFFF0", // Слоновая кость
				"light-sage": "#B2AC88", // Светлый шалфей
				"muted-olive": "#808000", // Приглушенный оливковый
				terracotta: "#E2725B", // Терракотовый (для CTA)
				"dark-gray": "#36454F", // Графитовый (для текста)
			},
			fontFamily: {
				playfair: ['"Playfair Display"', "serif"],
				roboto: ['"Roboto"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
