module.exports = {
	dist: {
		options: {
			useSingleQuotes: false
		},
		files: {
			'<%= paths.style %>/base/base.scss'				: '<%= paths.style %>/base/**/*.scss',
			'<%= paths.style %>/elements/elements.scss'		: '<%= paths.style %>/elements/**/*.scss',
			'<%= paths.style %>/components/components.scss'	: '<%= paths.style %>/components/**/*.scss',
			'<%= paths.style %>/pages/pages.scss'			: '<%= paths.style %>/pages/*.scss',
			'<%= paths.style %>/layouts/layouts.scss'		: '<%= paths.style %>/layouts/*.scss',
			'<%= paths.style %>/templates/templates.scss'	: '<%= paths.style %>/templates/*.scss'
		}
	}
};