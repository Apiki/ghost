MONKEY.ComponentWrapper( 'Messages', function(Model, utils, $) {

	Model.fn.init = function() {
		this.createElements();
	};

	Model.fn.createElements = function() {
		this.$el.append( '<div class="gh-message">' );
	};

} );

