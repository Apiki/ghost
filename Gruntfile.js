module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var options = {
		data: {
			paths: {
				style: 'assets/stylesheets',
				js: 'assets/javascripts'
			}
		}
	};

	require('load-grunt-config')(grunt, options);

	grunt.registerTask('default', ['riot', 'jshint', 'concurrent:dev']);
	grunt.registerTask('deploy', ['riot', 'jshint', 'concurrent:dist', 'uglify', 'zip']);
};
