/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"brand-dark": "#5C5754",
				"brand-brown": "#AB9995"
			},
			fontFamily: {
				heading: ["Komika Axis", "sans-serif"],
				primary: ["Montserrat", "sans-serif"]
			}
		}
	},
	plugins: []
}
