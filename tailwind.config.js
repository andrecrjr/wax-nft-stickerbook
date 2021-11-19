module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === "prd" ? true : false,
		content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gradientColorStops: (theme) => ({
				mainPrimary: theme("colors.mainGreen"),
				mainSecondary: theme("colors.mainYellow"),
				danger: "#FFD700",
			}),
			colors: {
				mainYellow: "#FCDD11",
				mainGreen: "#488f36",
				mainBackgroundColor: "#2a292e",
			},
		},
	},
	plugins: [],
};
