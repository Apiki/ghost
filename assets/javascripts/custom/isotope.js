jQuery(function($) {
	$( '.gh-components' ).isotope({
		itemSelector: '.gh-box',
		percentPosition: true,
		masonry: {
			gutter: '.gh-gutter',
		}
	});
});