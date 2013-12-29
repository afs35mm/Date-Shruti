/*
* SimpleSlider, made by Andrew Schorr
* afs35mm.com, afs35mm@gmail.com
* Bootstrapped from http://jqueryboilerplate.com Made by Zeno Rocha
*/
;(function ( $, window, document, undefined ) {

    var pluginName = "simpleSlider",
        defaults = {
        propertyName: "value",
        say: 'hello!',
    };

    function Slider ( element, options ) {
        this.$ele = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Slider.prototype = {
        
        bindDomEvents: function () {
            this.$ele.siblings('.dir_btn').on('click',function(e){
                e.preventDefault();
                //console.log( e );
                e.preventDefault();
            });    
        },
        init: function () {
            this.bindDomEvents();
        }
        
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Slider( this, options ) );
            }
        });
    };

})( jQuery, window, document );