const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // class, 'media' or boolean
	// REMEMBER: Be sure to restart react-server if you change above setting.
	// FYI: You don't need to add `dark` to any parent element coz the useDarkMode hooks does that automatically for us. See the code for the hook in its file. Yikes! Tailwind rocks!
	// media? Ans. Tailwind looks for `prefers-color-scheme` from the broser to check if the system-specific dark mode is enabled in the user's system.
	// class? Ans.This looks for any`dark` named element in markup and will apply `dark:` variant properties give to child elements of that!
	theme: {
		extend: {
			colors: {
				primary: '#202225',
				secondary: '#5865f2',
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
			},
		},
	},
	plugins: [],
}
