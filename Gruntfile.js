module.exports = function( grunt ) {

	grunt.initConfig({

		sass_globbing: {
		    your_target: {
		        options: {
		            useSingleQuotes: false
		        },
		        files: {
		            'assets/stylesheets/elements/_elements.scss': 'assets/stylesheets/elements/**/*.scss',
		            'assets/stylesheets/components/_components.scss': 'assets/stylesheets/components/**/*.scss'
		        }
		    }
		},

		sass: {
		    develop: {
		        files: {
		            'style.css': 'assets/stylesheets/style.scss'
		        }
		    }
		},

		watch: {
			test: {
				files: 'assets/stylesheets/**/**/*.scss',
				tasks: ['sass_globbing']
			},
			sass: {
				files: 'assets/stylesheets/**/**/*.scss',
				tasks: ['sass']
			}
		}
  	});

	grunt.loadNpmTasks( 'grunt-sass-globbing' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
};