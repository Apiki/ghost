module.exports = {
	options: {
		optimizationLevel: 7
	},
	dynamic: {
		files: [{
			expand: true,
			cwd: 'assets/images',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'assets/images'
		}]
	}
};