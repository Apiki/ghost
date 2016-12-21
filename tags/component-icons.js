MONKEY.ComponentWrapper( 'Icons', function(Model, utils, $) {

	Model.fn.init = function() {
		this.message = $( '.gh-message-wrap' );		
		this.addEventListener();
	};

	Model.fn.render = function(data) {
		this.$el.html( MONKEY.Templates.icons( data ) );
	};

	Model.fn.addEventListener = function() {
		$.getJSON( '../assets/fonts/selection.json', this.render.bind( this ) );
		this.addEvent( 'click', 'info' );
	};

	Model.fn.setName = function(target) {
		$( '.gh-message' ).text( target.attr( 'class' ) );
	};

	Model.fn._onClickInfo = function(event) {
		var target = $( event.target );

		if ( !target.hasClass( 'active' ) ) {			
			$( '.gh-icons i' ).removeClass( 'active' );
			this.setName( target );
			this.message.addClass( 'active' );
			target.addClass( 'active' );
			return;
		}

		target.removeClass( 'active' );
		this.message.removeClass( 'active' );
	};

} );