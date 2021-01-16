module.exports = {
	purge: {
		enabled: false,
		content: [
			"./views/*.pug",
			"./public/**/tailwind.css"
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			borderStyle: ["focus"]
		},
	},
	plugins: []
};