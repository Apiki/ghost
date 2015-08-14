Module.ComponentWrapper( 'Gallery', function(Gallery) {

    Gallery.fn.init = function() {
        this.elements.image.featherlightGallery( this.attr || {} );
    };

});