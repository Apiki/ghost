Module( 'Application', function(Application) {

    Application.init = function(container) {
        MONKEY.Helpers.create();
        Module.factory.create( container );
    };

}, {} );
