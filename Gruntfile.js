module.exports = function(grunt) {
	var config = {
		package : grunt.file.readJSON( 'package.json' ),

		concat : {
		    options : {
				separator : ';'
		    },
		    site : {
				src : [
					'<%= package.devroot %>/javascripts/libs/*.js',
					'<%= package.devroot %>/javascripts/templates/*.js',
					'<%= package.devroot %>/javascripts/vendor/*.js',
					'<%= package.devroot %>/javascripts/app/*.js',
					'<%= package.devroot %>/javascripts/boot.js'
				],
				dest : '<%= package.devroot %>/javascripts/built.js',
		    },
  		},

  		jshint: {
			options: {
				jshintrc : true
			},
    		beforeconcat : '<%= concat.site.src %>'
  		},

  		uglify : {
			site : {
				files : {
					'<%= concat.site.dest %>' : '<%= concat.site.dest %>'
				}
			}
    	},

		handlebars: {
			options: {
				namespace: 'MONKEY.Templates',
				processName: function(filePath) {
			        var text = filePath.replace(/^ghost\/handlebars\//, '').replace(/\.hbs$/, '');
			        text = text.replace(/(?:^|-)\w/g, function(match, index) {
		                return ( !index ) ? match : match.toUpperCase();
		            });
		            return text.replace(/-/g, '');
			    }
			},
			all: {
				files: {
					"<%= package.devroot %>/javascripts/templates/templates.js": ["ghost/handlebars/**/*.hbs"]
				}
			}
		},

    	sass: {
			dev: {
				options: {
					style: 'expanded',
				},
				files: {
					'style.css': '<%= package.webroot %>/stylesheets/style.scss',
					'ghost.css': 'ghost/ghost.scss'
				}
			},
		},

		watch: {
			css : {
				files : ['assets/stylesheets/**/*.scss', 'ghost/**/*.scss'],
				tasks : ['sass:dev']
			},
		    templates : {
				files: ['ghost/handlebars/**/*.hbs'],
				tasks: ['handlebars']
		    },
		    script : {
		    	files : '<%= concat.site.src %>',
		    	tasks : ['jshint', 'concat']
		    }
  		}
	};

	grunt.initConfig( config );

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-handlebars' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );

	grunt.registerTask( 'js', ['jshint', 'concat'] );
	grunt.registerTask( 'jsmin', ['jshint', 'concat', 'uglify'] );
	grunt.registerTask( 'deploy', ['jsmin', 'sass:site'] );
};