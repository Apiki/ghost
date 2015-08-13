Module.ComponentWrapper( 'Wrapper', function(Wrapper) {

    Wrapper.fn.init = function() {
        this.addEventListeners();
    };

    Wrapper.fn.addEventListeners = function() {
        this.addEvent( 'click', 'open-menu' );
    };

    Wrapper.fn._onClickOpenMenu = function() {
        this.$el.toggleClass( 'active' );
    };

});
