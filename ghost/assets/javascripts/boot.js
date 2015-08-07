jQuery(function() {
    var context = jQuery( 'body' )
      , route   = context.data( 'route' )
    ;

    MONKEY.vars = {
        body  : context,
        route : route
    };

    //set route in application
    Dispatcher( MONKEY.Application, route, [context] );
});
