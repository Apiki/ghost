module.exports = {
	target: {
		options: {
			domainPath: '/languages',
			type: 'wp-theme',
			exclude: ['vendor/.*'],
			potHeaders: {
				poedit: true
			}
		}
	}
};
