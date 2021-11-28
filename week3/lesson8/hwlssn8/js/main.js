$(function () {
	$('.comments__list').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: false
			}
		}]
	})

	$('.header__burger').on('click', function () {
		$('.header__list').toggleClass('header__list--active');
		$('.burger__line').toggleClass('burger__line--active');
		$('body').toggleClass('hidden');
	});

	$('.header__link').on('click', function () {
		if ($(window).width() <= 992) {
			$('.header__list').toggleClass('header__list--active');
			$('.burger__line').toggleClass('burger__line--active');
			$('body').toggleClass('hidden');
		}
	});

	$(window).scroll(() => {
		console.log($(window).scrollTop())
		if ($(window).scrollTop() > 0) {
			$('.header__top').addClass('header__top--scrolled');
		} else if ($(window).scrollTop() < 100) {
			$('.header__top').removeClass('header__top--scrolled');
		}
	})

	$(".header__link, .logo, .header__link-bottom").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});





	var mixer = mixitup('.works__list');
})