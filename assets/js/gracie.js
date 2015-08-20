//bizwrap v1.1

/* ==============================================
 Sticky Navbar
 =============================================== */

$(function() {
    $(".navbar").sticky({topSpacing: 0});
});


/*=========================*/
/*====main navigation hover dropdown====*/
/*==========================*/
$(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});


$(function() {
  /*====flex  slider for main slider or testimonials====
  $('.main-flex-slider,.testimonials').flexslider({
      slideshowSpeed: 5000,
      directionNav: false,
      animation: "fade"
  });*/
});

/*========flex-gallery slide====*/
$(function() {
    $('.flexslider').flexslider({
        directionNav: false,
        slideshowSpeed: 3000,
        animation: "fade"
    });
});


/*========portfolio mix====*/
$('#grid').mixitup();

/*========tooltip and popovers====*/

$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();


/*=========================*/
 /*========Animation on scroll with wow.js====*/
 /*==========================*/
 
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    mobile:       true
  }
);
wow.init();