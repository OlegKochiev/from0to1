$(function () {
	$('.comments__list').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false
	})

	$('.header__btn').on('click', function () {
		$('.header__list').toggleClass('header__list--active');
		$('.burger__btn-line').toggleClass('burger__btn-line--active');
		$('body').toggleClass('hidden');
	});

	$('.header__link').on('click', function () {
		$('.header__list').toggleClass('header__list--active');
		$('.burger__btn-line').toggleClass('burger__btn-line--active');
		$('body').toggleClass('hidden');
	});


	var mixer = mixitup('.works__list');
})