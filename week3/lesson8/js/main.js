$(function () {

	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt="Стрелка влево"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt="Стрелка вправо"></button>',
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false
			}
		}]
	})

	$(".go-top").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 700);
	});

	$(".menu a").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 700);
	});

	$('.menu__btn, .menu a').on('click', function () {
		$('.header__top-inner').toggleClass('header__top-inner--active');
	});

	var mixer = mixitup('.portfolio__content');

});