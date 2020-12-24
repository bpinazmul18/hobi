(function($) {
    "use strict";
    // your code here
    animate();
    //MAP INITIATE
    myMaps();


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


    // COUNTER UP
    $('.counter').countUp();

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


//LEAFLET JS MAPS
function myMaps() {
    var L = window.L;
    var mymap = L.map('map',{ zoomControl: false }).setView([51.509865, -0.118092], 13);
    var markerIcon = L.icon({
        iconUrl: './img/marker_logo.png',
        iconSize: [60, 60],
    });
    var marker = L.marker([51.509865, -0.118092], { icon: markerIcon }).addTo(mymap);
    marker.bindPopup("<h3>Adrress:</h3> <p>450 Strand, Charing Cross, London WC2R 0RG, UK </p><h3>Phone:</h3>+44 20 7930 8205  ||  +44 20 7839 2323");

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=4s5tSx5WUxHw28DRO8fi', {
        attribution: '<a href="https://api.mapbox.com/styles/v1/devnazmul20/ckj2e1tph1ivs19mwgxmz3pc5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2bmF6bXVsMjAiLCJhIjoiY2tqMmRob29jMDJmZzJzazNpanVuZnk5ZiJ9.mywcRlchbp6szcofExXdtA" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank"></a>',
        minZoom: 3,
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(mymap);
}