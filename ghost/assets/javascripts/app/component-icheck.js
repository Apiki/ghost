Module.ComponentWrapper( 'Icheck', function(Icheck) {

    Icheck.fn.init = function() {
        this.$el.iCheck( this.attr || {} );
    };

});
