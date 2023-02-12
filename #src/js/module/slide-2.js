const slideWrap = document.querySelector('.main-slide__box');
const slides = document.querySelectorAll('.slide-card__item');
const btnPrev = document.querySelector('.main-slide__prev');
const btnNext = document.querySelector('.main-slide__next');
const slideItemWidth = slides[0].offsetWidth;
const trackWidth = slideWrap.offsetWidth * slides.length;
let counterSlide = 0;
// -----------------------------------------------------------------------------
setInterval(() => slideNext.call(slides, 1), 3000);

slideNext = () => {
	if (counterSlide < slides.length - 1) {
		counterSlide++;
	}
	else {
		counterSlide = 0;
	}
	slideWrap.style.transform = 'translateX(' + (-counterSlide * slideItemWidth) + 'px)';
	dotsActive();
};
// -----------------------------------------------------------------------------
btnPrev.addEventListener('click', () => {
	if (counterSlide > 0) {
		counterSlide--;
	}
	else {
		counterSlide = slides.length - 1;
	}
	slideWrap.style.transform = 'translateX(' + (-counterSlide * slideItemWidth) + 'px)';
	dotsActive();
});

btnNext.addEventListener('click', () => {
	if (counterSlide < slides.length - 1) {
		counterSlide++;
	}
	else {
		counterSlide = 0;
	}
	slideWrap.style.transform = 'translateX(' + (-counterSlide * slideItemWidth) + 'px)';
	dotsActive();
});
// -----------------------------------------------------------------------------
dotsActive = () => {
	const dots = document.querySelectorAll('.main-slide__dot');
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('_active');
	}
	dots[counterSlide].classList.add('_active');
};
dotsActive();

dotsClick = () => {
	const dots = document.querySelectorAll('.main-slide__dot');
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', () => {
			counterSlide = i;
			slideWrap.style.transform = 'translateX(' + (-counterSlide * slideItemWidth) + 'px)';
			dotsActive();
		});
	}
};
dotsClick();