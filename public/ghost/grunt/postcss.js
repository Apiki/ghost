module.exports = {
	options: {
		map: true,
		processors: [
			require( 'autoprefixer' ),
		]
	},
	dist: {
		src: '../style.css'
	}
};
