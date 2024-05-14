// ==================================================
// Project Name   :  Cafenod - HTML5 Template
// File           :  CSS Base
// Version        :  1.0.0
// Last change    :  27 March 2021
// Author         :  Xpressrow
// ==================================================

(function($) {
  "use strict";

  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // back to top - end
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader - end
  // --------------------------------------------------

  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  // sticky header - end
  // --------------------------------------------------

  // wow js - start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // wow js - end
  // --------------------------------------------------

})(jQuery);