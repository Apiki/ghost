;(function(context, $) {

    'use strict';

    // Build a new module with the correct attributes and methods.
    function build() {
        var Constructor, Instance;

        Constructor = function() {
            // Initialize a new instance, which won't do nothing but
            // inheriting the prototype.
            var instance = new Instance();

            // Apply the initializer on the given instance.
            instance.initialize.apply(instance, arguments);

            return instance;
        };

        // Define the function that will be used to
        // initialize the instance.
        Instance = function() {};
        Instance.prototype = Constructor.prototype;

        // Save some typing and make an alias to the prototype.
        Constructor.fn = Constructor.prototype;

        // Define a noop initializer.
        Constructor.fn.initialize = function() {};

        return Constructor;
    }

    var Module = function(namespace, callback, object, isGlobalScope) {
        var components = namespace.split(/[.:]+/)
          , scope      = context
          , component
          , last
        ;

        if ( !isGlobalScope ) {
            scope = scope[Module.setup.namespace] = ( scope[Module.setup.namespace] || {} );
        }

        if ( typeof callback !== 'function' ) {
            object   = callback;
            callback = null;
        }

        object = object || build();

        // Process all components but the last, which will store the
        // specified object attribute.
        for ( var i = 0, count = components.length; i < count; i++ ) {
            last = ( i == count - 1 );
            scope[components[i]] = ( last ? object : ( scope[components[i]] || {} ) );
            scope = scope[components[i]];
        }

        if ( callback ) {
            callback.call( scope, scope, Module.utils, $ );
        }

        return scope;
    };

    Module.Wrapper = function(namespace, initializer) {
        return Module(namespace, function(definition) {
            definition.fn.initialize = function(namespace, callback) {
                initializer.apply( definition, arguments );
            };

            return definition;
        }, null, true );
    };

    context.Module = Module;

})( window, jQuery );
;;(function(context) {

    'use strict';

    Module.setup = {
        namespace : 'MONKEY'
    };

    context[Module.setup.namespace] = {
        Components : {},
        Ajax       : {}
    };

})( window );
;;(function(context, $) {

    'use strict';

    Module.utils = {
        toTitleCase : function(text) {
            text = text.replace(/(?:^|-)\w/g, function(match) {
                return match.toUpperCase();
            });

            return text.replace(/-/g, '');
        },

        toCamelCase : function(text) {
            text = text.replace(/(?:^|-)\w/g, function(match, index) {
                return ( !index ) ? match : match.toUpperCase();
            });

            return text.replace(/-/g, '');
        }
    };

})( window, jQuery );
;;(function(context, $) {

    'use strict';

    var components = ( context[Module.setup.namespace].Components || {} );

    //define plugin js is exist
    $.fn.isExist = function(selector, callback) {
        var element = this.find( selector );

        if ( element.length && typeof callback == 'function' ) {
            callback.call( null, element, this );
        }

        return element.length;
    };

    Module.factory = {
        create : function(container) {
            container.isExist( '[data-component]', this.constructor.bind( this ) );
        },

        constructor : function(elements) {
            elements.each( this.each.bind( this ) );
        },

        extend : function(name, reflection) {
            var mirror
              , method
            ;

            if ( typeof components[name] != 'function' ) {
                return;
            }

            mirror = components[name].fn;

            for ( method in mirror ) {
                if ( !~( reflection.overrides || [] ).indexOf( method ) ) {
                    reflection.fn[method] = mirror[method];
                }
            }
        },

        each : function(index, target) {
            var $el    = $( target )
              , extend = $el.data( 'extend' )
              , name   = Module.utils.toTitleCase( $el.data( 'component' ) )
              , instance
            ;

            if ( typeof components[name] != 'function' ) {
                return;
            }

            if ( extend ) {
                this.extend( Module.utils.toTitleCase( extend ), components[name] );
            }

            instance = components[name].call( null, $el );
            $el.data( '_component', instance );
        }
    };

})( window, jQuery );
;Module.Wrapper( 'Module.ComponentWrapper', function(namespace, callback) {

    'use strict';

    Module( ['Components', namespace].join( '.' ), function(Model, utils, $) {
        Model.fn.initialize = function(container) {
            this.$el      = container;
            this.elements = {};
            this.on       = null;
            this.fire     = null;

            //start component
            this.loadDefaultMethods();
            this.init();
        };

        Model.fn.loadDefaultMethods = function() {
            this.setAttrs();
            this.setElements();
            this.emitter();
        };

        Model.fn.setElements = function() {
            this.$el
                .find( '[data-element]' )
                    .each( this._assignEachElements.bind( this ) )
            ;
        };

        Model.fn._assignEachElements = function(index, element) {
            var target = $( element )
              , name   = target.data( 'element' )
            ;

            this._insertElement( target, name );
        };

        Model.fn._insertElement = function(target, name) {
            name = utils.toCamelCase( name );

            //ser flag for captured element
            target.attr( 'data-eobj', true );

            //case is exist element
            if ( this.elements[name] ) {
                this.elements[name] = this.elements[name].add( target );
                return;
            }

            //set attr in object elements
            this.elements[name] = target;
        };

        Model.fn.reloadElements = function() {
            this.$el
                .find( '[data-element]:not([data-eobj])' )
                    .each( this._assignEachElements.bind( this ) )
            ;
        };

        Model.fn.getElement = function(name) {
            var target = this.$el.find( '[data-element="' + name + '"]' );

            if ( !target.length ) {
                return false;
            }

            this._insertElement( target, name );
            return target;
        };

        Model.fn.setAttrs = function() {
            var attrs = this.$el.data();

            for ( var name in attrs ) {
                this[name] = attrs[name];
            }
        };

        Model.fn.emitter = function() {
            this.on   = $.proxy( this.$el, 'on' );
            this.fire = $.proxy( this.$el, 'trigger' );
        };

        Model.fn.addEvent = function(event, action) {
            var handle = utils.toCamelCase( [ '_on', event, action ].join( '-' ) );

            this.on(
                  event
                , '[data-action="' + action + '"]'
                , ( this[handle] || $.noop ).bind( this )
            );
        };

        Model.fn.init = function() {

        };

        callback( Model, utils, $ );
    });

});