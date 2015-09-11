Module.ComponentWrapper( 'Navigation', function(Navigation) {

    Navigation.fn.init = function() {
        this.$el.find( '.menu-item-has-children' )
                .prepend( '<span class="btn-more-menu"></span>' )
        ;

        this.$el.find( '.btn-more-menu' ).on( 'click', function() {

            jQuery( this ).toggleClass( 'btn-more-menu-active' );
            jQuery( this ).siblings( '.sub-menu' ).slideToggle();
        });
    };
});