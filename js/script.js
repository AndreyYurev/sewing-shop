/*инициализация на jQuery */
$(document).ready(function () {
	//включение слайдера
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		//autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		draggable: true,
		swipe: true,
	});
})

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list').click(function (event) {
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});






/*
let hamburger = document.querySelector('.menu__icon');
let menu = document.querySelector('.header__menu');
let link = document.querySelector('.menu__link');

const toggleMenu = () => {
	menu.classList.toggle('menu--open');
	hamburger.classList.toggle('menu__icon--open');
}
hamburger.addEventListener('mouseup', e => {
	e.stopPropagation();
	toggleMenu();
});

// Не доделал скрипт закрытия меню при нажатии на ссылку
const closeMenu = () => {
	menu.classList.remove('menu--open');
	hamburger.classList.remove('menu__icon--open');
}
link.addEventListener('click', e => {
	closeMenu();
});


document.addEventListener('mouseup', e => {
	let target = e.target;
	let its_menu = target == menu || menu.contains(target);
	let its_hamburger = target == hamburger;
	let menu_is_active = menu.classList.contains('menu--open');

	if (!its_menu && !its_hamburger && menu_is_active) {
		toggleMenu();
	}
})
*/