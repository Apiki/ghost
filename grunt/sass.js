module.exports = {
	dist: {
		options: {
			style: 'compressed'
		},
		files: {
			'ghost/ghost.css': '<%= paths.style %>/style.scss'
		}
	},
	dev: {
		options: {
			style: 'expanded'
		},
		files: {
			'ghost/ghost.css': '<%= paths.style %>/style.scss'
		}
	},
};
