module.exports = {
	dist: {
		cwd: 'public/',
		src: ['public/**/*'],
		dest: 'ghost_v<%= package.version %>.zip'
	}
};