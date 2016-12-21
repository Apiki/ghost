module.exports = {
	dist: [
		'jshint', 'concat:dist', 'sass:dist', 'riot'
	],
	dev: [
		'jshint', 'concat:dev', 'sass:dev', 'riot'
	]
};
