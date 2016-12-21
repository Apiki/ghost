module.exports = {
	options: {
		concat: true
	},
	ghost: {
		src: 'tags-ghost/**/*.tag',
		dest: '<%= paths.js %>/templates/tags-ghost.js'
	},
	theme: {
		src: 'tags-theme/**/*.tag',
		dest: '<%= paths.js %>/templates/tags-theme.js'
	}
}
