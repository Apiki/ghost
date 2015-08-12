Module.ComponentWrapper( 'Menu', function(Menu, Utils, $) {

    Menu.fn.init = function() {
        $.getJSON( 'components.json', function(data) {
            this.render( data );
        }.bind( this ) );
    };

    Menu.fn.render = function(data) {
        this.$el.html( MONKEY.Templates.menu( data ) );
    };

});