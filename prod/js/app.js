$(document).ready(function () {
  'use strict'

  $('#fullpage').fullpage({
    scrollHorizontally: false
    , fixedElements: 'header'
    , scrollBar: true
//    ,verticalCentered: false
    , onLeave: function (index, nextIndex) {
        if (nextIndex == 1) {
          $('.burger_menu').removeClass('other');
        } else {
          $('.burger_menu').addClass('other');
        }
    }
  });
  
  $('.anchor').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });
  
  //testimonials slider
  
  $('.testimonials_slider').slick({
    dots: true
    , slidesToShow: 3
    , slidesToScroll: 3
    , autoplay: true
    , autoplaySpeed: 8000
    , variableWidth: true
  });
  
//   steps_slider
  
  var swiper = new Swiper('.swiper-container', {
//    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
  
})