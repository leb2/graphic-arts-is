
/*global $:false, skrollr:false */
'use strict';
(function() {

    skrollr.init({smoothScrolling: false, forceHeight: false});

    $('.filter').each(function() {
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        $(this).children('.triangle').css({
            'border-left-width': width,
            'border-bottom-width': height
        });
    });
})();
