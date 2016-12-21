module.exports = {
	options: {
		separator: ';'
	},
	dev: {
		src: [
			'<%= paths.js %>/libs/*.js',
			'<%= paths.js %>/vendor/*.js',
			'<%= paths.js %>/templates/*.js',
			'<%= paths.js %>/custom/*.js',
			'<%= paths.js %>/boot.js'
		],
		dest: 'ghost/ghost.js',
	},
	dist: {
		src: [
			'<%= paths.js %>/vendor/*.js',
			'<%= paths.js %>/templates/*.js',
			'<%= paths.js %>/custom/*.js',
			'<%= paths.js %>/boot.js'
		],
		dest: 'ghost/ghost.js',
	}
};
