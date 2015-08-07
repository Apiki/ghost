Module.ComponentWrapper( 'Icons', function(Icons, Utils, $) {

    Icons.fn.init = function() {
        $.getJSON( '../assets/fonts/selection.json', function(data) {
            this.render( data );
        }.bind( this ) );
    };

    Icons.fn.render = function(data) {
        this.elements.list.html( MONKEY.Templates.icons( data ) );
    };

});
