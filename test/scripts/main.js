$(document).ready(function() {

    /* ======= Header Background Slideshow - Flexslider ======= */
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */

    $('#bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
    });


    /* ======= Toggle between Signup & Login & ResetPass Modals ======= */
    $('#signup-link').on('click', function(e) {
        $('#login-modal').modal('toggle');
        $('#signup-modal').modal();

        e.preventDefault();
    });

    $('#login-link').on('click', function(e) {
        $('#signup-modal').modal('toggle');
        $('#login-modal').modal();

        e.preventDefault();
    });

    $('#back-to-login-link').on('click', function(e) {
        $('#resetpass-modal').modal('toggle');
        $('#login-modal').modal();

        e.preventDefault();
    });

    $('#resetpass-link').on('click', function(e) {
        $('#login-modal').modal('hide');
        e.preventDefault();
    });


});