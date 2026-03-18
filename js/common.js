$(document).ready(function () {

	//прилипающие меню
	var $menu = $(".header");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
			$menu.removeClass("default").addClass("fixed");
		} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});

	if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
		$menu.removeClass("default").addClass("fixed");
	} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}


	$('.video-main').click(function () {
		var videoURL = $(this).find("iframe").prop('src');
		videoURL += "&autoplay=1";
		$(this).find("iframe").prop('src', videoURL);
		$(this).addClass("active");
	});

		/*input file*/
	$("input[type='file']").change(function () {
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});


	 //datatime
$.datetimepicker.setLocale('ru');

$('.item-form--date').each(function() {
    var $parent = $(this);
    
    var $startDate = $parent.find('.data-start');
    var $endDate = $parent.find('.data-end');

    $startDate.datetimepicker({
        dayOfWeekStart: 1,
        format: 'd.m.Y',
        formatDate: 'd.m.Y',
        timepicker: false,
        closeOnDateSelect: true,
        scrollMonth: false,
        scrollInput: false,
        onSelectDate: function(currentDateTime) {
            $endDate.datetimepicker({
                minDate: currentDateTime
            });
        }
    });

    $endDate.datetimepicker({
        dayOfWeekStart: 1,
        format: 'd.m.Y',
        formatDate: 'd.m.Y',
        timepicker: false,
        closeOnDateSelect: true,
        scrollMonth: false,
        scrollInput: false,
        minDate: 0 
    });
});


	//billbord items animation
	$(".billbord__bottom").addClass("active");
	setTimeout(() => {
		$(".billbord__bottom").addClass("completed");
	}, 3000);

	//кнопка sandwich
	$(".sandwich--mobile").click(function () {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich--mobile").addClass("active");
			$("body").addClass("body--menu");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich--mobile").removeClass("active");
			$("body").removeClass("body--menu");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function () {
		$(".menu-mobile").slideUp(200);
		$(".sandwich--mobile").removeClass("active");
		$("body").removeClass("body--menu");
		$(".menu-overlay").fadeOut(200);
	});

	//desktop menu
	$(".sandwich--menu").click(function () {
		if ($(".menu-dropdown").is(":hidden")) {
			$(".menu-dropdown").slideDown(200);
			$(".sandwich--menu").addClass("active");
		} else {
			$(".menu-dropdown").slideUp(200);
			$(".sandwich--menu").removeClass("active");
		}
	});

$(document).mouseup(function (e) {
    var container = $(".menu-dropdown");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.slideUp(200);
        $(".sandwich--menu").removeClass("active");
    }
});

	{
		if ($(window).width() < 992) {
			//footer
			$(".footer__title").click(function () {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});

			$(".menu__haschild i").on('click', function (e) {
			$(this).parent().siblings().find("ul").slideUp(0);
			$(this).parent().siblings().removeClass("active");
			$(this).siblings("ul").slideToggle(200);
			$(this).parent().toggleClass("active");
		});

		$(".item-information__top").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-information").removeClass("active");
		$(this).parent().siblings(".item-information").find(".item-information__content").slideUp(200);
	});
		}
	}


	//switcher tabs
	$(".switcher").click(function () {
		$(this).toggleClass("switcher--map");
		if ($(this).hasClass("switcher--map")) {
			$(".switcher-tab--list").slideUp(0);
			$(".switcher-tab--map").slideDown(200);
		} else {
			$(".switcher-tab--list").slideDown(200);
			$(".switcher-tab--map").slideUp(0);
		}
	});

	//text category
	$(".about-category__button .btn-main").click(function (e) {
		e.preventDefault();
		if ($(".about-category__hidden").is(":hidden")) {
			$(".about-category__hidden").slideDown(200);
			$(this).html("Скрыть текст");
		} else {
			$(".about-category__hidden").slideUp(200);
			$(this).html("Показать весь текст");
		}
	});

	//text deducation
	$(".about-deduction .btn-main").click(function (e) {
		e.preventDefault();
		if ($(".about-deduction__hidden").is(":hidden")) {
			$(".about-deduction__hidden").slideDown(200);
			$(this).html("Скрыть текст");
		} else {
			$(".about-deduction__hidden").slideUp(200);
			$(this).html("Показать весь текст");
		}
	});

	//слайдер

	$('.slider-four').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-three').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-two').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});


	$('.slider-documents').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			}
		]
	});

	$('.slider-advantages').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
	});

	$('.slider-doctors').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
				}
			}
		]
	});

	$('.item-portfolio').each(function () {

		const $this = $(this);
		const $sliderFor = $this.find('.slider-for-portfolio');
		const $sliderNav = $this.find('.slider-nav-portfolio');

		$sliderFor.slick({
			arrows: false,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			swipe: false,
			asNavFor: $sliderNav,
			slidesToShow: 1,
			slidesToScroll: 1,
		});

		$sliderNav.slick({
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			focusOnSelect: true,
			swipe: false,
			asNavFor: $sliderFor,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i></div>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i></div>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});

	});

	$('.slider-marquee').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.32752 9.41077L7.16085 3.57743C7.31802 3.42563 7.52852 3.34164 7.74702 3.34354C7.96552 3.34544 8.17453 3.43308 8.32903 3.58758C8.48354 3.74209 8.57118 3.9511 8.57308 4.1696C8.57498 4.3881 8.49098 4.5986 8.33919 4.75577L3.92835 9.1666H18.5834C18.8044 9.1666 19.0163 9.2544 19.1726 9.41068C19.3289 9.56696 19.4167 9.77892 19.4167 9.99993C19.4167 10.2209 19.3289 10.4329 19.1726 10.5892C19.0163 10.7455 18.8044 10.8333 18.5834 10.8333H3.92835L8.33919 15.2441C8.41878 15.321 8.48226 15.4129 8.52594 15.5146C8.56961 15.6163 8.5926 15.7256 8.59356 15.8363C8.59452 15.9469 8.57344 16.0566 8.53154 16.1591C8.48964 16.2615 8.42776 16.3545 8.34951 16.4328C8.27127 16.511 8.17823 16.5729 8.07582 16.6148C7.9734 16.6567 7.86367 16.6778 7.75302 16.6768C7.64237 16.6758 7.53302 16.6529 7.43135 16.6092C7.32968 16.5655 7.23773 16.502 7.16085 16.4224L1.32752 10.5891C1.17129 10.4328 1.08353 10.2209 1.08353 9.99993C1.08353 9.77896 1.17129 9.56704 1.32752 9.41077Z" fill="white"/></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1725 9.41077L13.3391 3.57743C13.182 3.42563 12.9715 3.34164 12.753 3.34354C12.5345 3.34544 12.3255 3.43308 12.171 3.58758C12.0165 3.74209 11.9288 3.9511 11.9269 4.1696C11.925 4.3881 12.009 4.5986 12.1608 4.75577L16.5716 9.1666H1.91665C1.69563 9.1666 1.48367 9.2544 1.32739 9.41068C1.17111 9.56696 1.08331 9.77892 1.08331 9.99993C1.08331 10.2209 1.17111 10.4329 1.32739 10.5892C1.48367 10.7455 1.69563 10.8333 1.91665 10.8333H16.5716L12.1608 15.2441C12.0812 15.321 12.0177 15.4129 11.9741 15.5146C11.9304 15.6163 11.9074 15.7256 11.9064 15.8363C11.9055 15.9469 11.9266 16.0566 11.9685 16.1591C12.0104 16.2615 12.0722 16.3545 12.1505 16.4328C12.2287 16.511 12.3218 16.5729 12.4242 16.6148C12.5266 16.6567 12.6363 16.6778 12.747 16.6768C12.8576 16.6758 12.967 16.6529 13.0687 16.6092C13.1703 16.5655 13.2623 16.502 13.3391 16.4224L19.1725 10.5891C19.3287 10.4328 19.4165 10.2209 19.4165 9.99993C19.4165 9.77896 19.3287 9.56704 19.1725 9.41077Z" fill="white"/></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: "unslick"
			}
		]
	});

	$('.slider-vertical').slick({
		arrows: false,
		dots: false,
		infinite: true,
		vertical: true,
		swipe: false,
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></div>',
	});

	$('.unit-interior').each(function () {

		const $this = $(this);
		const $sliderFor = $this.find('.slider-for-tabs');
		const $sliderNav = $this.find('.slider-nav-tabs');

		$sliderFor.slick({
			arrows: false,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			swipe: false,
			asNavFor: $sliderNav,
			slidesToShow: 1,
			slidesToScroll: 1,
		});

		$sliderNav.slick({
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			focusOnSelect: true,
			swipe: false,
			asNavFor: $sliderFor,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i></div>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i></div>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});

	});


	$('.tabs li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$('.tabs-page li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents("section").find(".tab-pane-page").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$(this).parents("section").find(".tab-pane-page").find(".slider-three").slick('setPosition');
		$(this).parents("section").find(".tab-pane-page").find(".slider-four").slick('setPosition');
		$(this).parents("section").find(".tab-pane-page").find(".slider-for-portfolio").slick('setPosition');
		$(this).parents("section").find(".tab-pane-page").find(".slider-nav-portfolio").slick('setPosition');
		var slider = $(selectTab).find('.slider-vertical');

		if (slider.hasClass('slick-initialized')) {
			slider.slick('unslick');
		}

		slider.slick({
			arrows: false,
			dots: false,
			infinite: true,
			vertical: true,
			swipe: false,
			speed: 10000,
			autoplay: true,
			autoplaySpeed: 0,
			cssEase: 'linear',
			slidesToShow: 2
		});
	});

	//sidebar nav
	$(".sidebar-nav__title").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".sidebar-nav__item").removeClass("active");
		$(this).parent().siblings(".sidebar-nav__item").find(".sidebar-nav__dropdown").slideUp(200);
	});

	//questions
	$(".item-question__head").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});

	$(".coordinator__info-head").click(function () {
		var $currentInfo = $(this).closest('.coordinator__info');
		var $row = $(this).closest('.coordinator');
		var $allInfosInRow = $row.find('.coordinator__info');

		$allInfosInRow.not($currentInfo).removeClass('active')
			.find('.coordinator__info-content').slideUp(200);

		$currentInfo.toggleClass('active');
		$currentInfo.find('.coordinator__info-content').slideToggle(200);
	});


	$(".item-location__head").click(function () {
		var $currentInfo = $(this).closest('.item-location');
		var $row = $(this).closest('.row');
		var $allInfosInRow = $row.find('.item-location');

		$allInfosInRow.not($currentInfo).removeClass('active')
			.find('.item-location__content').slideUp(200);

		$currentInfo.toggleClass('active');
		$currentInfo.find('.item-location__content').slideToggle(200);
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	// плавный скролл
$('.nav-page li a').on('click', function(e) {
  e.preventDefault();
  
  var targetId = $(this).attr('href');
  var headerHeight = $('.header').outerHeight();
  
  $('html, body').animate({
      scrollTop: $(targetId).offset().top - headerHeight
  }, 800); 
});

	//animation steps
const $wrapper = $('.steps__wrapper');
    
    if (!$wrapper.length) return;

    let started = false;

    function isInViewport(element) {
        const elementTop = $(element).offset().top;
        const elementBottom = elementTop + $(element).outerHeight();

        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    function startSteps() {
        const items = $wrapper.find('.item-step');
        const lastIndex = items.length - 1;

        items.each(function (index) {
            const $self = $(this); 
            setTimeout(() => {
                $self.addClass('active');

                if (index === lastIndex) {
                    setTimeout(() => {
                        $wrapper.addClass('complited'); //
                    }, 1000);
                }
            }, index * 2000);
        });
    }

    $(window).on('scroll', function () {
        if (!started && isInViewport($wrapper)) {
            started = true;
            startSteps();
        }
    });

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});

});
