module.exports = function (grunt, options) {
	var opts = {
		proxy: 'localhost/ghost/public/ghost/',
		files: ['../style.css', '<%= paths.js %>/built.js', '../**/*.php'],
		watchTask: true,
		logConnections: true,
		notify: true,
		port: 8080
	};

	return {
		dev: {
			options: Object.assign( opts, grunt.file.readJSON( 'browserSync.json' ) )
		}
	}
};
