;(function($) {

	$.fn.isValEmpty = function() {
		return !( $.trim( this.val() ) );
	};

	$.fn.valInt = function() {
		return parseInt( this.val(), 10 );
	};

	$.fn.addClassReFlow = function(name) {
		this.css( 'display', 'block' );
		//force reflow
		this[0].offsetWidth;
		this.addClass( name );
	};

	$.fn.removeSiblingsClass = function(name) {
		return this.siblings( '.' + name ).removeClass( name );
	};

	$.fn.removeFindClass = function(name) {
		return this.find( '.' + name ).removeClass( name );
	};

})( jQuery );