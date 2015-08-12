Module.ComponentWrapper( 'Components', function(Components, Utils, $) {

    Components.fn.init = function() {
        this.registerHelpers();

        $.getJSON( 'components.json', function(data) {
            this.render( data );
        }.bind( this ) );
    };

    Components.fn.render = function(data) {
        this.$el.html( MONKEY.Templates.components( data ) );
        Module.factory.create( this.$el );
    };

    Components.fn.registerHelpers = function() {
        Handlebars.registerHelper('getContent', function(template, data, element) {
            return this.renderData( template, data, element );
        }.bind( this ));

        Handlebars.registerHelper('toLowerCase', function(str) {
          return str.toLowerCase();
        });
    };

    Components.fn.renderData = function(template, data, element) {
        if ( typeof data === 'string' && data.match(/json$/) ) {
            $.getJSON( data, function(response) {
                $( '#' + element.toLowerCase() ).html( MONKEY.Templates[template]( response ) );
            });

            return '';
        }

        return new Handlebars.SafeString( MONKEY.Templates[template]( data ) );
    };

});