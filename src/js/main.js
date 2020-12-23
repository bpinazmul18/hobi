(function($) {
    "use strict";
    // your code here
    animate();


    //Isotop
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })

// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });




})(jQuery);
//ANIMATED PROGRESS BAR
function animate() {
    var delay = 500;
    $(".progress-bar").each(function(i){
        $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: delay,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+'%');
            }
        });
    });
}