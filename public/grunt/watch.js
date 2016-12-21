module.exports =  {
	styles: {
		files: ['<%= paths.style %>/**/*.scss'],
		tasks: ['sass:dev']
	},
	tagsGhost: {
		files: '<%= riot.ghost.src %>',
		tasks: ['riot:ghost']
	},
	tagsTheme: {
		files: '<%= riot.theme.src %>',
		tasks: ['riot:theme']
	},
	scripts: {
		files: '<%= concat.dev.src %>',
		tasks: ['jshint', 'concat:dev']
	}
};
