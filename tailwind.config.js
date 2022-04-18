const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		fontFamily: {
			'Pacifico': 'Pacifico',
			'Dongle': 'Dongle'
		},
		gridTemplateColumns: {
			// Simple 4 column grid
			'4': '3fr 1fr 1fr 1fr'
		  },
		spacing: {
			'0.5': '.5rem',
			'0.7': '.7rem'
		},
		width: {
			'270': '270px',
		},
		fontWeight: {
			hairline: 100,
			'extra-light': 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			'extra-bold': 800,
			black: 900,
		  }
	},
  },
  plugins: [
    require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
			addUtilities({
				".content-auto": {
					"content-visibility": "auto",
				},
				".content-hidden": {
					"content-visibility": "hidden",
				},
				".content-visible": {
					"content-visibility": "visible",
				},
			});
		}),
  ],
}
