/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		letterSpacing: {
			widest: '.28em',
		},
		extend: {
			colors: {
				desaturatedRed: 'hsl(0, 36%, 70%)',
				softRed: 'hsl(0, 93%, 68%)',
				darkGrayishRed: 'hsl(0, 6%, 24%)',
			},
			backgroundImage: {
				desktop: 'url("/images/bg-pattern-desktop.svg")',
				mobile: 'linear-gradient(150.03deg, #FFFFFF 0%, #FFF4F4 84.51%)',
				btn: 'linear-gradient(135deg, #F8BFBF 0%, #EE8B8B 100%)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
