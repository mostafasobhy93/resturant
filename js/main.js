/*global $, jQuery, alert*/
/*global console*/
$(document).ready(function () {
    'use strict';
    var header = $('header'),
        mainSection = $('.main-section');
    header.find('.nav-btn').click(function () {
        $(this).parent().toggleClass('active');
        $(this).hide();
        $('.close').css('display', 'inline-block');
    });
    
    $('.close').click(function() {
        $(this).hide();
        $('.nav-btn').show();
        $('nav').removeClass('active');
    });
    


    $(window).scroll(function () {
        if ($(window).scrollTop() >= mainSection.height() + 100) {
            header.addClass('sticky');
          }
        else {
            header.removeClass('sticky');
        }
        
       if ($(window).scrollTop() > 0 && $(window).scrollTop() < mainSection.height() + 80) {
            header.fadeOut();
        } else {
            header.show();
        }
    });
    
    
    
    
    // Menu Slider 
	function menuSlider() {
		var $sliderContainer = $('.menu-slider');
		var $slider = $sliderContainer.find('.slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsLength = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');

		var slidesToShow = 3;

		var activeSlides = slidesToShow;

		function responsiveSlides() {
			activeSlides -= slidesToShow;
			if($(window).width() <= 991 && $(window).width() > 550) {
				slidesToShow = 2;
			}else if ($(window).width() <= 550){
				slidesToShow = 1;
			}else{
				slidesToShow = 3;
			}
			activeSlides += slidesToShow;
			console.log('work');
		}responsiveSlides();

		$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
		var itemWidth;
		var itemsWidth;
		function fixWidth(){
			itemWidth = $('.menu-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsLength;
			$sliderBanner.width(itemsWidth);
		}fixWidth();

		function leftCalc(){
			return itemWidth * itemMove;
		}


		$(window).resize(function(){


			responsiveSlides();

			$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
			fixWidth();
			
			$sliderBanner.css('left', -leftCalc());



		});

		var left = 0;
		var itemMove = 0;
		
		var clicked = false;

		function checkStatus(){
			if(activeSlides == itemsLength){
				$nextBtn.addClass('disabled');
			} else {
				$nextBtn.removeClass('disabled');
			}

			if (activeSlides == slidesToShow) {
				$prevBtn.addClass('disabled');
			} else {
				$prevBtn.removeClass('disabled');
			}

		} checkStatus();

		

		$nextBtn.click(function() {
			if(!clicked){
				if(activeSlides != itemsLength){
					clicked = true;
					itemMove++;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function(){
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});


		$prevBtn.click(function(){
			if(!clicked){
				if(activeSlides > slidesToShow){
					clicked = true;
					itemMove--;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides--;
					setTimeout(function(){
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

	} menuSlider();

    
/* chief slider */
	function chiefSlider() {
		var $sliderContainer = $('.chief-slider');
		var $slider = $sliderContainer.find('.slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsLength = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');

		var slidesToShow = 1;

		var activeSlides = slidesToShow;
		$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
		var itemWidth;
		var itemsWidth;
		function fixWidth(){
			itemWidth = $('.chief-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsLength;
			$sliderBanner.width(itemsWidth);
		}fixWidth();

		function leftCalc(){
			return itemWidth * itemMove;
		}

		$(window).resize(function(){

			$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
			fixWidth();
			
			$sliderBanner.css('left', -leftCalc());

		});
        
        
		var left = 0;
		var itemMove = 0;
		
		var clicked = false;

		function checkStatus(){
			if(activeSlides == itemsLength){
				$nextBtn.addClass('disabled');
			} else {
				$nextBtn.removeClass('disabled');
			}

			if (activeSlides == slidesToShow) {
				$prevBtn.addClass('disabled');
			} else {
				$prevBtn.removeClass('disabled');
			}

		} checkStatus();

		

		$nextBtn.click(function() {
			if(!clicked){
				if(activeSlides != itemsLength){
					clicked = true;
					itemMove++;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function(){
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});


		$prevBtn.click(function(){
			if(!clicked){
				if(activeSlides > slidesToShow){
					clicked = true;
					itemMove--;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides--;
					setTimeout(function(){
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

	} chiefSlider();
    
    
//    scroll-btn
//    console.log($(window).scrollTop)
    $(window).scroll(function () {
        if($(this).scrollTop() > 600) {
            $('.scroll-btn').show();
        } else {
            $('.scroll-btn').hide();
        }
    });
    $('.scroll-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

});















