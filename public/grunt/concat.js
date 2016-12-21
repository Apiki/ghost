module.exports = {
	options: {
		separator: ';'
	},
	dev: {
		src: [
			'<%= paths.js %>/libs/*.js',
			'<%= paths.js %>/vendor/*.js',
			'<%= paths.js %>/templates/tags-theme.js',
			'<%= paths.js %>/custom/*.js',
			'<%= paths.js %>/boot.js'
		],
		dest: '<%= paths.js %>/built.js',
	}
};
