Module( 'Helpers', function(Helpers) {

	Helpers.create = function() {
        this.registerHelpers();
	};

    Helpers.registerHelpers = function() {
        Handlebars.registerHelper('toLowerCase', function(str) {
            return str.toLowerCase();
        });
    };

}, {} );