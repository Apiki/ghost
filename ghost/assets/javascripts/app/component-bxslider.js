Module.ComponentWrapper( 'Bxslider', function(Bxslider) {

    Bxslider.fn.init = function() {
        this.$el.bxSlider( this.attr || {} );
    };

});
