module.exports = {
	options: {
		separator: ';'
	},
	dev: {
		src: [
			'<%= paths.js %>/templates/*.js',
			'<%= paths.js %>/custom/*.js',
			'<%= paths.js %>/boot.js'
		],
		dest: 'public/ghost/ghost.js',
	},
	dist: {
		src: [
			'<%= paths.js %>/templates/*.js',
			'<%= paths.js %>/custom/*.js',
			'<%= paths.js %>/boot.js'
		],
		dest: 'public/ghost/ghost.js',
	}
};
