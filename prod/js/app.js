$(document).ready(function () {
  'use strict'

  $('#fullpage').fullpage({
    scrollHorizontally: false
    , fixedElements: 'header'
    , scrollBar: true
    , responsiveWidth: 768
    , responsiveHeight: 768
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
  
  $('.anchor_application').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(7);
  });
  
  $('.to_advantages').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(2);
  });
  
  $('.to_testimonials').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(3);
  });
  
  $('.to_steps').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(4);
  });
  
  $('.to_gallery').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(5);
  });
  
  $('.to_team').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(6);
  });
  
  $('.to_form').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(7);
  });
  
  
  
  //testimonials slider
  
  $('.testimonials_slider').slick({
    dots: true
    , arrows: false
    , slidesToShow: 1
    , slidesToScroll: 1
    , autoplay: true
    , autoplaySpeed: 8000
//    , variableWidth: true
  });
  
//   steps_slider
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
//    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
  
  // select
  
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });
  
  // popup
  
  $('.burger_menu').click(function(e) {
    e.preventDefault();
  if($('.burger_menu').hasClass('opened')){
    
      
      $('.popup_nav').fadeOut(100);
      $('body').css('overflow', 'auto'); 
      $('.burger_menu').removeClass('opened');
	
  }else{
    $(this).toggleClass('opened');
        $('.popup_nav').fadeIn(300);
        $('body').css('overflow', 'hidden');   
    }
  });
  
  	$('.popup_close, .popup_nav a').click(function (e) {
         e.preventDefault();
           $('.popup_nav').fadeOut(100);
           $('body').css('overflow', 'auto'); 
      $('.burger_menu').removeClass('opened');
    });
    
  
  $('.js-popup').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).fadeIn(300);
        	$('body').css('overflow', 'hidden');   
        }
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
            $(this).fadeOut(100);
            $('body').css('overflow', 'auto'); 
        }
    });
	$('.popup_close').click(function (e) {
         e.preventDefault();
           $(this).parents('.popup').fadeOut(100);
           $('body').css('overflow', 'auto'); 
    });
    $('.popup_content').click(function(e) {
		e.stopPropagation();
	});
  
  $('.question_btn').on('click', function (e) {
    $('.popup .subtitle').text('Задать вопрос');
    $('.popup .btn').text('Задать вопрос');
  });
  $('.application_btn').on('click', function (e) {
    $('.popup .subtitle').text('Оставить заявку');
    $('.popup .btn').text('Оставить заявку');
  });
  
  // custom scroll
  
  $('.popup.overlay.text .popup_content .content').perfectScrollbar();
  
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
		e.preventDefault();	$(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
      });
    });
  });
  

  
  
})