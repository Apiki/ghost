MONKEY.ComponentWrapper( 'GridInfo', function(Model, utils, $) {

	Model.fn.init = function() {
		this.innerHeight = null;
		this.top         = null;

		this.addEventListener();
	};

	Model.fn.addEventListener = function() {
		MONKEY.vars.win.on( 'load', this._onLoad.bind( this ) );
	};

	Model.fn._onLoad = function() {
		this.innerHeight = this.$el.innerHeight();
		this.top         = this.$el.offset().top;

		this.elements.gridContainer.width( this.$el.width() );
		MONKEY.vars.win.on( 'scroll', this._onScroll.bind( this ) );
	};

	Model.fn._onScroll = function() {
		if ( MONKEY.vars.win.scrollTop() >= this.top ) {
			this.$el.height( this.innerHeight );
			this.$el.addClass( 'grid-fixed' );
			return;
		} 

		this.$el.removeClass( 'grid-fixed' );
	};

} );