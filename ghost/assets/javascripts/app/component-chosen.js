Module.ComponentWrapper( 'Chosen', function(Chosen) {

    Chosen.fn.init = function() {
        this.$el.chosen( this.attr || {} );
    };

});
