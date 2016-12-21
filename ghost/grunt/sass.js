module.exports = {
	dist: {
		options: {
			style: 'compressed'
		},
		files: {
			'../style.css': '<%= paths.style %>/style.scss'
		}
	},
	dev: {
		options: {
			style: 'expanded'
		},
		files: {
			'../style.css': '<%= paths.style %>/style.scss'
		}
	},
};
