(function($) {
    "use strict";
    // your code here
    //SLIDER-BG
    $("[data-background]").each(function (){
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    //MAGNIFIC POPUP
    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    //ANIMATED PROGRESS BAR
    animate();

    //MAP INITIATE
    myMaps();

// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // COUNTER UP
    $('.counter').countUp();

    //OWL CAROUSEL
    $('.testimonial-carousel').each(function () {
        var owl = $(this).owlCarousel({
            autoplay: true,
            loop:true,
            margin:15,
            nav:false,
            dots: true,
        });

        var prevBtnId = $(this).data('prev-btn-id');
        var nextBtnId = $(this).data('next-btn-id');

        $('#'+prevBtnId).click(function(e) {
            e.preventDefault();
            owl.trigger('prev.owl.carousel');
        })

        $('#'+nextBtnId).click(function(e) {
            e.preventDefault();
            owl.trigger('next.owl.carousel');
        })
    });
    var togglerBtn = $('.toggler-btn-right');
    var hamburgerMenu = $('.hamburger-menu');
    var closeBtn = $('.hamburger-menu, .closebtn, .nav-link');
    var toggleBtnSelector = $("#myNav");

    togglerBtn.click(function (e){
        e.preventDefault();
        toggleBtnSelector.css("width", "40%");
    });
    togglerBtn.click(function(e) {
        e.preventDefault();
        hamburgerMenu.addClass('active');
    });
    closeBtn.click(function(e){
        e.preventDefault();
        hamburgerMenu.removeClass('active');
        toggleBtnSelector.css("width", "0%");
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


//LEAFLET JS MAPS
function myMaps() {
    var location = [51.505, -0.09];
    var mapInit = L.map('map', {zoomControl: false}).setView(location, 13);
    var markerIcon = L.icon({
        iconUrl: "./img/marker_logo.png",
        iconSize: [100, 80],
    });
    var marker = L.marker(location, {icon: markerIcon}).addTo(mapInit);
    marker.bindPopup("<h3>Adrress:</h3> <p>450 Strand, Charing Cross, London WC2R 0RG, UK </p><h3>Phone:</h3>+44 20 7930 8205  ||  +44 20 7839 2323");

    L.tileLayer('https://api.mapbox.com/styles/v1/devnazmul20/ckj2jxo0k065619pbedx62e5r/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2bmF6bXVsMjAiLCJhIjoiY2tqMmRob29jMDJmZzJzazNpanVuZnk5ZiJ9.mywcRlchbp6szcofExXdtA', {
        attribution: 'Hobi &copy; <a href="https://www.openstreetmap.org/copyright"></a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mapInit);
}