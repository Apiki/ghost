module.exports = {
	options: {
		concat: true
	},
	dist: {
		src: 'tags/**/*.tag',
		dest: '<%= paths.js %>/templates/tags.js'
	}
}
