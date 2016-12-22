module.exports =  {
	styles: {
		files: ['<%= paths.style %>/**/*.scss'],
		tasks: ['sass_globbing', 'sass:dev', 'postcss']
	},
	templates: {
		files: '<%= riot.dist.src %>',
		tasks: ['riot']
	},
	scripts: {
		files: '<%= concat.dev.src %>',
		tasks: ['jshint', 'concat:dev']
	},
	assemble: {
		files: 'components/**/*.html',
		tasks: ['assemble']
	}
};
