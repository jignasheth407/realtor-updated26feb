(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.acr-preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
	-------------------------------------------------------------------------------*/
  $(".aside-trigger").on('click', function() {
    $(".main-aside").toggleClass('open');
    $("body").toggleClass('aside-open');
  });
  $(".main-aside .menu-item-has-children > a").on('click', function(e) {

    e.preventDefault();

    var submenu = $(this).next(".submenu");

    if($(this).parent().hasClass('active')){
      submenu.slideUp(200);
      $(this).parent().siblings().find('.submenu').slideUp(200);
      $(this).parent().removeClass('active');
    }else{
      $(this).closest('ul').find(".menu-item-has-children").find('.submenu').slideUp(200);
      $(this).closest('ul').find(".menu-item-has-children").removeClass('active');
      $(this).parent().addClass('active');
      submenu.slideDown(200);
    }

  });

  /*-------------------------------------------------------------------------------
  Sticky Header
	-------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();

  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();


  /*-------------------------------------------------------------------------------
  Filters Scroll
  -------------------------------------------------------------------------------*/
  $('.listing-main-wrapper').niceScroll({
    cursorcolor:"#dcdcdc",
    cursorwidth:"5px"
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home v1)
  -------------------------------------------------------------------------------*/
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    prevArrow: $('.banner .slider-prev'),
    nextArrow: $('.banner .slider-next'),
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home v1)
  -------------------------------------------------------------------------------*/
  $(".listing-banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('.listing-banner-inner .slider-prev'),
    nextArrow: $('.listing-banner-inner .slider-next'),
  });

  /*-------------------------------------------------------------------------------
  Banner featured slider (Home v2)
  -------------------------------------------------------------------------------*/
  $(".banner-featured-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Listing Slider
  -------------------------------------------------------------------------------*/
  $(".listings-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.listings .slider-prev'),
    nextArrow: $('.listings .slider-next'),
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Top Listings Slider (Home v1)
  -------------------------------------------------------------------------------*/
  $(".top-listings-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $('.top-listings .slider-prev'),
    nextArrow: $('.top-listings .slider-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  /*-------------------------------------------------------------------------------
  Clients Slider
  -------------------------------------------------------------------------------*/
  $(".clients-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  /*-------------------------------------------------------------------------------
  Agents Slider
  -------------------------------------------------------------------------------*/
  $(".agents-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.agents .slider-prev'),
    nextArrow: $('.agents .slider-next'),
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  /*-------------------------------------------------------------------------------
  Coming Soon & Login Sliders
  -------------------------------------------------------------------------------*/
  $(".acr-cs-bg-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
  });

  /*-------------------------------------------------------------------------------
  Listing Gallery Sliders (Listing details v2)
  -------------------------------------------------------------------------------*/
  $('.listing-thumbnail-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.listing-thumbnail-slider-nav'
  });
  $('.listing-thumbnail-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.listing-thumbnail-slider-main',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  /*-------------------------------------------------------------------------------
  Sidebar filter collapse (Listing grid and list)
  -------------------------------------------------------------------------------*/
  $(".acr-collapse-trigger").on('click', function(){
    $(this).next().slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
  Trigger advanced Search
  -------------------------------------------------------------------------------*/
  $(".advanced-search-trigger").on('click', function(){
    $(".advanced-search").slideToggle(200);
    $(this).toggleClass('active');
  });

  /*-------------------------------------------------------------------------------
  Trigger listing filter
  -------------------------------------------------------------------------------*/
  $(".filter-trigger").on('click', function(){
    $(".acr-filter-form").slideToggle(300);
  });

  /*-------------------------------------------------------------------------------
  Select2
  -------------------------------------------------------------------------------*/
  $('.acr-select2').select2({
    allowClear: false
  });

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /*-------------------------------------------------------------------------------
  Load More Features (Listing Details)
  -------------------------------------------------------------------------------*/
  $(".load-more-features").on('click', function(){
    $(this).hide(0);
    $(".hidden-listing-features").slideDown();
  });

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.popup-vimeo').magnificPopup({
    type: 'iframe'
  });
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({
      itemSelector: '.masonry-item',
    });
  });

  /*-------------------------------------------------------------------------------
  Submit listing Gallery Upload
  -------------------------------------------------------------------------------*/
  if($("#acrListingGallery").length){
    // This prevents using the class 'dropzone' which will conflict with new instances of DropZone created programatically
    // Set this to true, or delete if you want to create an instance of Dropzone without having to write any code:
    // More info here: https://www.dropzonejs.com/#configuration
    Dropzone.autoDiscover = false;
    $("#acrListingGallery").dropzone({
      url: "https://androthemes.com/scripts/silence.php",
      paramName: "file",
      maxFiles: 5,
      maxFilesize: 5,
      addRemoveLinks: true,
      acceptedFiles: "image/*,application/pdf,.psd",
    });
  }

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();

  });

})(jQuery);
'use strict';

/*-------------------------------------------------------------------------------
  Map Initialization
-------------------------------------------------------------------------------*/
$(function(){
  if($('div').is('#map')){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'; // <---- YOUR MAPBOX API KEY GOES HERE
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-77.04, 38.907],
      zoom: 11.5,
      pitch: 45,
      container: 'map',
      antialias: true 
    });
    


/*-------------------------------------------------------------------------------
  Add Markers to map (Data coming from assets/js/mapdata.js)
-------------------------------------------------------------------------------*/
mapData.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<img src="'+marker.properties.thumbnail+'" alt="'+marker.properties.title+'"/> '+
             '<div class="acr-listing-popup-body"><h5><a href="#" title="'+marker.properties.title+'">' + marker.properties.title + '</a></h5> <span class="listing-price">'+marker.properties.price+'</span>'+
              '<p><i class="fas fa-map-signs"></i> ' + marker.properties.description + '</p> <div class="location-popup-meta"> <span><i class="fas fa-bed"></i>'+marker.properties.bed+'</span>'+
              '<span><i class="fas fa-bath"></i>'+marker.properties.bath+'</span><span><i class="fas fa-ruler-combined"></i>'+marker.properties.size+'</span> </div></div>'))
    .addTo(map);
});

/*-------------------------------------------------------------------------------
  Fly to Location
-------------------------------------------------------------------------------*/
$(".fly-to-location").on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
  map.flyTo({
    zoom: 18.5,
    center: [ $this.data('lat'), $this.data('lng') ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

/*-------------------------------------------------------------------------------
  Map Building Generation
-------------------------------------------------------------------------------*/
// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
      }
    },
    labelLayerId
  );
});
}
});