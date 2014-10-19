
/*----------------- prettyPhoto Image Gallery -----------------*/
jQuery(document).ready(function($) {
  "use strict";

  jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({social_tools:false});

  // menu toggle
    $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
    $(".toggle_nav_button").click(
      function(){
        var link = $(this);
        $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
          if ($(this).is(':visible')){
            link.text('-');
          } else {
            link.text('+');
          }
        });
      });
    
});


jQuery('#main-menu .navbar-nav > li > ul').removeClass("children");
jQuery('#main-menu .navbar-nav > li > ul').addClass("sub-menu");
jQuery('#main-menu .navbar-nav>li > ul > li > ul').removeClass("children");
jQuery('#main-menu .navbar-nav>li > ul > li > ul').addClass("sub-menu");


jQuery(window).on('scroll', function (){
  // if (jQuery(window).scrollTop() > 500){
  //   jQuery('#main-menu').addClass('navbar-small').removeClass('topnavbar').slideDown(500);
  //   jQuery('#page-top').addClass('bodytopmargin').removeClass('bodynomargin');
  // } else {
  //   jQuery('#main-menu').removeClass('navbar-small').addClass('topnavbar').slideDown(500);
  //   jQuery('#page-top').removeClass('bodytopmargin').addClass('bodynomargin');
  // }
});


  
/*------------------- Parallax ------------------*/
jQuery(window).load(function(){
  jQuery("#quality").parallax("50%", 0.5);
  jQuery("#wouter-stokkel").parallax("50%", 0.5);
  jQuery("#review-count").parallax("50%", 0.5);
  jQuery("#blog-header").parallax("50%", 0.5);
});


/*------------ Testimonial slider - OWL carousel --------------*/
jQuery(document).ready(function($) {
  "use strict";

  var owl = $("#client-slider");
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter

    owl.owlCarousel({
        items : 2, //2 items above 1024px browser width
        itemsDesktop : [1024,1], //1 items between 1000px and 901px
        itemsDesktopSmall : [950,1], // betweem 768px and 601px
        itemsTablet: [480,1], //1 items between 480 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        autoPlay : false,
        stopOnHover: true
      });

    // Custom Navigation Events
    $(".client-next").click(function(){
      owl.trigger('owl.next');
    });
    $(".client-prev").click(function(){
      owl.trigger('owl.prev');
    });

  });


/*-------- Recent Blog Post Slider - owl carousel -------------*/
jQuery(document).ready(function($) {
  "use strict";

  var owl = $("#recent-post-slider");
  owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter

  owl.owlCarousel({
      items : 3, //3 items above 1000px browser width
      lazyLoad : true,
      itemsDesktop : [1000,3], //3 items between 1000px and 901px
      itemsDesktopSmall : [800,2], // betweem 768px and 601px
      itemsTablet: [480,1], //1 items between 480 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      autoPlay : false,
      stopOnHover: true
    });

  // Custom Navigation Events
  $(".post-next").click(function(){
    owl.trigger('owl.next');
  });
  $(".post-prev").click(function(){
    owl.trigger('owl.prev');
  });
  
});


/*------------- Team Member Slider - owl carousel-------------*/
jQuery(document).ready(function($) {
  "use strict";

  var owl = $("#team-member-slider");
  owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter

  owl.owlCarousel({
      items : 4, //4 items above 1100px browser width
      itemsDesktop : [1100,3], //3 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // between 900px and 601px
      itemsTablet: [600,1], //1 items between 600px and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      autoPlay : false,
      stopOnHover: true
    });

  // Custom Navigation Events
  $(".team-next").click(function(){
    owl.trigger('owl.next');
  });
  $(".team-prev").click(function(){
    owl.trigger('owl.prev');
  });
  
});



/*--------------------- Portfolio Item Filter-----------------*/
jQuery(document).ready(function($) {
  "use strict";

  var $container = $('.portfolio-item'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 1,
    columnWidth = 0;
    if (w > 960) {
      columnNum  = 3;
    }  else if (w > 475) {
      columnNum  = 2;
    }
    columnWidth = Math.floor(w/columnNum);
    $container.find('.item').each(function() {
      var $item = $(this),
      multiplier_w = $item.attr('class').match(/item-w(\d)/),
      multiplier_h = $item.attr('class').match(/item-h(\d)/),
      width = multiplier_w ? columnWidth*multiplier_w[1]-10 : columnWidth-10,
      height = multiplier_h ? columnWidth*multiplier_h[1]*0.7-10 : columnWidth*0.7-10;
      $item.css({
        width: width,
        height: height
      });
    });
    return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope();
  $(window).smartresize(isotope);

  $('.portfolioFilter a').click(function(){
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 
});



/*---------------- Preloader Animated Loader -----------------*/
// jQuery(document).ready(function($) {
//   "use strict";

//   $(window).load(function() {
//     $('#status').fadeOut(); 
//     $('#preloader').delay(350).fadeOut('slow'); 
//     $('body').delay(350).css({'overflow':'visible'});
//   });

// });



/*------------------------- Scroll to Top-----------------------*/
jQuery(document).ready(function($) {
"use strict";

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
     $('#scroll-to-top').fadeIn('slow');
   } else {
    $('#scroll-to-top').fadeOut('slow');
  }

}); 

  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});



/*------------------------------ Counter ----------------------------*/
jQuery('.counter').counterUp({
  delay: 10,
  time: 1000
});


/*-------------------- Elements Fading --------------------*/
 //Elements Fading
 jQuery(document).ready(function($) {
  $('.element-from-top').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,top:"0px"},1000);
    }); 
  });
  
  $('.element-from-bottom').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
    }); 
  });
  
  
  $('.element-from-left').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,left:"0px"},1000);
    }); 
  });
  
  
  $('.element-from-right').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,right:"0px"},1000);
    }); 
  });
});

/*------------------------- Scroll to Top-----------------------*/




