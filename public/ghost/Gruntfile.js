module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	require('shelljs/global');

	var options = {
		data: {
			paths: {
				style: 'assets/stylesheets',
				js: 'assets/javascripts'
			}
		}
	};

	require('load-grunt-config')(grunt, options);

	grunt.registerTask('default', ['riot', 'jshint', 'concurrent:dev', 'sass_globbing', 'sass', 'postcss']);
	grunt.registerTask('deploy', ['riot', 'jshint', 'concurrent:dist', 'uglify', 'sass_globbing', 'sass', 'postcss', 'cmq', 'cssmin']);
	grunt.registerTask('dev', ['browserSync', 'watch']);
};
