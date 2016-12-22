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
		dest: '../built.js',
	}
};
