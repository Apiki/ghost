module.exports =  {
	styles: {
		files: ['<%= paths.style %>/**/*.scss'],
		tasks: ['sass:dev']
	},
	templates: {
		files: '<%= riot.dist.src %>',
		tasks: ['riot']
	},
	scripts: {
		files: '<%= concat.dev.src %>',
		tasks: ['jshint', 'concat:dev']
	}
};
