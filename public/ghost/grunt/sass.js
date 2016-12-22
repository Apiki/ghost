module.exports = {
	dev: {
		options: {
			style: 'expanded'
		},
		files: {
			'../style.css': '<%= paths.style %>/style.scss'
		}
	},
};
