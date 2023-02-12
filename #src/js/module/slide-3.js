document.addEventListener("DOMContentLoaded", function () {
	const slideWrap = document.querySelector('.main-slide__box');
	const slickSlice = document.querySelectorAll('.slide-card__item');
	const slides = document.querySelectorAll('.slide-card__item');

	const boxLeft = document.querySelector('.main-slide__prev');
	const boxRight = document.querySelector('.main-slide__next');

	const slideDots = document.querySelectorAll('.main-slide__dots li');
	// var btn = document.querySelectorAll('.main-slide__dots li');

	const trackWidth = slideWrap.offsetWidth * slides.length;
	let eleIsClicked = 0;

	var size = slickSlice[0].clientWidth;
	var count = 1, time = 25000;
	var stateTab = true;
	var stateTranslateOfSlideWrap = true;
	var v_interval = "";
	let counterSlide = 0;




	var hidden, visibilityChange;
	if (typeof document.hidden !== "undefined") {
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	}

	function handleVisibilityChange() {
		stateTab = (document[hidden]) ? false : true;
		if (stateTab) {
			run_setInterval();
		} else {
			run_clearInterval();
		}
	}

	document.addEventListener(visibilityChange, handleVisibilityChange, false);

	// Khi click vào arrow left
	boxLeft.addEventListener("click", function (e) {
		if (stateTranslateOfSlideWrap) {
			run_clearInterval();
			commonFuncBothArrows(true, false, e);
			run_setInterval();
		}
	});

	// Khi click vào arrow right;
	boxRight.addEventListener("click", function (e) {
		if (stateTranslateOfSlideWrap) {
			run_clearInterval();
			commonFuncBothArrows(false, true, e);
			run_setInterval();
		}
	});

	function commonFuncBothArrows(arrowL, arrowR, e) {
		e.preventDefault();
		stateTranslateOfSlideWrap = false;
		if (arrowL) {
			if (count <= 0) { return; }
		} else {
			if (arrowR) {
				if (count >= slickSlice.length - 1) { return; }
			}
		}
		slideDots[count - 1].classList.remove('_active');
		slideWrap.style.transition = `transform 0.5s ease-in-out`;
		count = arrowL ? --count : ++count;
		console.log('count - ' + count);
		slideWrap.style.transform = `translate3d(${-size * count}px,0px,0px)`;
		eleIsClicked = count - 1;
		switch (count) {
			case 0:
				slideDots[slideDots.length - 1].classList.add('_active');
				break;
			case slickSlice.length - 1:
				slideDots[0].classList.add('_active');
				break;
			default:
				slideDots[count - 1].classList.add('_active');
				break;
		}
	}

	// btn.forEach((elem) => {
	// 	elem.addEventListener('click', () => {
	// 		if (stateTranslateOfSlideWrap) {
	// 			run_clearInterval();
	// 			slideWrap.style.transition = `transform 0.5s ease-in-out`;
	// 			count = Number(elem.textContent);
	// 			slideDots[eleIsClicked].classList.remove('_active');
	// 			slideDots[count - 1].classList.add('_active');
	// 			slideWrap.style.transform = `translate3d(${-size * count}px,0px,0px)`;
	// 			eleIsClicked = count - 1;
	// 			run_setInterval();
	// 		}
	// 	});
	// });
	// --------------------------------------------------------------------------
	const slideItemWidth = slides[0].offsetWidth;
	// let counterSlide = 0;
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
	// --------------------------------------------------------------------------
	run_setInterval();
	function run_setInterval() {
		v_interval = setInterval(() => {
			slideDots[count - 1].classList.remove('_active');
			slideWrap.style.transition = "transform 0.5s ease-in-out";
			slideWrap.style.transform = `translate3d(${-size * (++count)}px,0px,0px)`;
			console.log('count - ' + (count));
			eleIsClicked = count - 1;
			if (count === slickSlice.length - 1) {
				slideDots[0].classList.add('_active');
			} else {
				slideDots[count - 1].classList.add('_active');
			}
		}, time);
	}

	function run_clearInterval() {
		clearInterval(v_interval);
	}

	slideWrap.addEventListener('transitionend', () => {
		stateTranslateOfSlideWrap = true;
		let nameClassSlickSlide = slickSlice[count].id;
		if (nameClassSlickSlide === 'lastClone' || nameClassSlickSlide === 'firstClone') {
			slideWrap.style.transition = `none`;
			count = (nameClassSlickSlide === 'lastClone') ? slickSlice.length - 2 : (nameClassSlickSlide === 'firstClone') ? 1 : count;
			eleIsClicked = count - 1;
			slideWrap.style.transform = `translateX(-${size * count}px)`;
		}
	});
}, false);
// -----------------------------------------------------------------------------
