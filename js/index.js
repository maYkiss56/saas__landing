const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

if (window.matchMedia ("(max-width: 400px").matches){
	burger.addEventListener('click', () => {
		if (menu.classList.contains('d-none') == true){
			menu.classList.remove('d-none');
		} else {
			menu.classList.add('d-none');
		}
	})
}

const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach(headerLink => {
	headerLink.addEventListener('click', () => {
		document.querySelector('.active')?.classList.remove('active');
		headerLink.classList.add('active');
	})
});

const swiper = new Swiper(".review__swiper", {
	pagination: {
		speed: 40,
		el: ".swiper-pagination",
		clickable: true,
	},
});