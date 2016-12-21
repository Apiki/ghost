MONKEY.ComponentWrapper( 'DataJson', function(Model, utils, $) {

	Model.fn.init = function() {
		this.render();
	};

	Model.fn.render = function() {
		var data = this.$el.sassToJs( { pseudoEl: ':before', cssProperty: 'content' } );
		this.$el.html( MONKEY.Templates[this.template]( data ) );
	};

} );