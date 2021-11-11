$(function () {
	var mixer = mixitup('.portfolio__content');
	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt="Стрелка влево"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt="Стрелка вправо"></button>'
	})
});