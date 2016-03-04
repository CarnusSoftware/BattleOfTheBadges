// JavaScript Document
$(document).ready(function () {

    /* This is basic - uses default settings */

    $("a.fancybox").fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    /* Using custom settings */

    $("a#inline").fancybox({
        'hideOnContentClick': true
    });

    /* Apply fancybox to multiple items */

    $("a.group").fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        },
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
        'hideOnContentClick': true
    });

});
