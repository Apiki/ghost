module.exports = {
	dist: {
		options: {
			style: 'compressed'
		},
		files: {
			'public/ghost.css': '<%= paths.style %>/style.scss'
		}
	},
	dev: {
		options: {
			style: 'expanded'
		},
		files: {
			'public/ghost.css': '<%= paths.style %>/style.scss'
		}
	},
};
