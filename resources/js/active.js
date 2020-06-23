/*==================================
Template Name: TrendNews 
Description: TrendNews is a Multipurpose News Magazine Template.
Version: 1.0
====================================*/    
(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/*==============================
			Mobile Nav
		================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			label: 'nav',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
	 
		/*====================================
			TrendNews Click JS
		======================================*/ 	
		$('.icon.search').on( "click", function(){
			$('.search-form, .side-icon').toggleClass('active');
		});	
	
		$('.icon.latest').on( "click", function(){
			$('.icon.latest').toggleClass('active');
			$('.icon.trending').removeClass('active');
		});
		$('.icon.trending').on( "click", function(){
			$('.icon.trending').toggleClass('active');
			$('.icon.latest').removeClass('active');
		});
		$('.latest-trending .latest').on( "click", function(){
			$('.menu-post.latest').toggleClass('active');
			$('.menu-post.trending').removeClass('active');
		});
		$('.latest-trending .trending').on( "click", function(){
			$('.menu-post.trending').toggleClass('active');
			$('.menu-post.latest').removeClass('active');
		});
		$('nav,section').on('click',function(){
			$('.menu-post.trending').removeClass('active');
			$('.menu-post.latest').removeClass('active');
			$('.icon.latest').removeClass('active');
			$('.icon.trending').removeClass('active');
		});
	
		
		/*===============================
			Hero Slider
		=================================*/ 
		$(".hero-slider-active").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:false,
			navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
			dots:true,
			items:1,
		});
		/*===============================
			Hero SLider Two
		=================================*/ 
		$(".hero-slider-two").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
			dots:false,
			items:1,
		});
		/*===============================
			Hero Slider Three
		=================================*/ 
		$(".hero-slider-three").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
			dots:false,
			items:1,
		});
		
		/*===============================
			Popular List Slider
		=================================*/ 
		$(".popular-list-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:false,
            autoplayTimeout: 2000,
			dots:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			items:1,
		});			
		
		/*===============================
			Top Featured Slider
		=================================*/ 
		$(".top-feature-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:true,
			items:1,
		});
		
		/*===============================
			Post Thumbnail Slider
		=================================*/ 
		$(".post-thumbnail-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:false,
            autoplayTimeout: 2000,
			dots:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			items:1,
		});			
		
		/*===============================
			News Grid Slider
		=================================*/ 
		$(".news-grid-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			margin:30,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items:3,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Top News Slider
		=================================*/ 
		$(".top-slider-news-active").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items:1,
		});
		
		
		/*===============================
			Trending Post Slider
		=================================*/ 
		$(".trending-post-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items:5,
		});
	
		/*===============================
			Blog Slider News
		=================================*/ 
		$(".blog-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:false,
			dots:true,
			items:1,
		});
		/*===============================
			Blog Slider News
		=================================*/ 
		$(".b-news-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items:1,
		});
		/*===============================
			Blog Slider News
		=================================*/ 
		$(".category-inner").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items:1,
		});
		
		/*=====================================
			Video Popup
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*====================================
			Scrool Up
		======================================*/ 	
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-angle-double-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 5344           // Z-Index for the overlay
		});
		
	});	
		/*====================================
			Preloader JS
		======================================*/
		$(window).on('load', function() {
			// Preloader
			$('.popup-adver').delay(2000).fadeOut('slow');

		});
		
		$('body').addClass('boxed-bg');

		// Added code for layouts
		$('.blog-sidebar .widget_categories').addClass('category-list');
		$('.blog-sidebar .widget_meta').addClass('category-list');
		$('.blog-sidebar .widget_archive').addClass('category-list');
		$('.blog-sidebar .widget_recent_entries').addClass('category-list');
		$('.blog-sidebar .widget_recent_comments').addClass('category-list');
		$('.blog-sidebar .widget_search').addClass('blog-search');
		$('.blog-sidebar .search-submit').addClass('button');
		$('.comments-body .comment').addClass('single-comment');
		$('footer .widget_categories').addClass('single-footer f-link');

		$('#menu-right-search-form .fa-search').on('click',function(){
			$('#menu-right-search-form').submit();
		});
})(jQuery);

// Sidenav JS

(function ($) {
  'use strict';
  // Sidenav focus Javascript
  $('.sidebar-menu').hide();
  window.lastTabbable = '';
  var findInsiders = function(elem) {
    
    var tabbable = elem.find('input, button, a').filter(':visible');
    
    var firstTabbable = tabbable.first();

    if(tabbable.last().next().children().length  == 0){
       lastTabbable  = tabbable.last();
    }
    else{
      tabbable.last().focus(function(){
        // alert('test');
        $(this).addClass('show');
        tabbable.last().next().addClass('show');
      })

      tabbable.last().next().children().last().focusout(function(){
        tabbable.last().removeClass('show');
        tabbable.last().next().removeClass('show');
      });
      lastTabbable  = tabbable.last().next().children().last();     
    }

    
    /*set focus on first input*/
    firstTabbable.focus();

    /*redirect last tab to first input*/
    lastTabbable.on('keydown', function (e) {
      if ((e.which === 9 && !e.shiftKey)) {
        e.preventDefault();
        firstTabbable.focus();
      }
    });

    /*redirect first shift+tab to last input*/
    firstTabbable.on('keydown', function (e) {
      if ((e.which === 9 && e.shiftKey)) {
        e.preventDefault();
        lastTabbable.focus();
      }
    });

  };
  
  
  $('.icon.bars').click(function(e){
    e.preventDefault(); 
    $('.sidebar-menu').addClass('active');
    $('.sidebar-menu').show();
    findInsiders($('.sidebar-menu'));
  });
  
  $('.cross').on( "click", function(e){
    e.preventDefault();
    $('.sidebar-menu').removeClass('active');
    $('.sidebar-menu').hide();
    $(".icon.bars").focus();
  });
 

})(window.jQuery);