//* slider
const slides = document.getElementsByClassName('slide-card__item');
//: Этот выбор является живой коллекцией; любые изменения в DOM обновляются в переменной в отличие от querySelectorsquerySelectors
const btnLeft = document.querySelector(`.main-slide__prev`);
const btnRight = document.querySelector(`.main-slide__next`);

let currentSlideIndex = 0;
let lastSlideIndex = slides.length - 1;
// setInterval(() => shiftSlides.call(slides, 1), 1000);



//: Перейти к слайду;;
goToSlide = (slideIndex) => {
	[...slides].forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - slideIndex)}%)`;
	});
	currentSlideIndex = slideIndex;
	// console.log(currentSlideIndex);
};
goToSlide(currentSlideIndex);

//: Подготоваем следующий слайд, если текущий слайд является первым или последним
readyNextSlide = () => {
	//: если текущий слайд является последним слайдом, сдвиньте первый слайд в конец
	if (currentSlideIndex === lastSlideIndex) {
		slides[lastSlideIndex].insertAdjacentElement('afterend', slides[0]);
		slides[lastSlideIndex].style.transform = `translateX(${100}%)`;
		currentSlideIndex--; //: Это потому, что текущий слайд теперь является предпоследним слайдом

		console.log(lastSlideIndex);
	}
	//: Если текущий слайд является первым, сдвигаем последний слайд на начало
	if (currentSlideIndex === 0) {
		slides[0].insertAdjacentElement('beforebegin', slides[lastSlideIndex]);
		slides[0].style.transform = `translateX(-${100}%)`;
		currentSlideIndex++; //: Это потому, что текущий слайд теперь является вторым слайдом
	}
};

// Помещаем последний слайд в начало; (условие 'если' не является обязательным, но предоставление условия 'если' является доказательством в будущем, если пользователь установит, что начальный слайд будет показан в качестве последнего слайда)
if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();

//: Сдвигаем все слайды влево или вправо в зависимости от указанного направления
shiftSlides = (direction) => {
	direction ? currentSlideIndex++ : currentSlideIndex--;
	if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();
	dotsActive();
	goToSlide(currentSlideIndex);
};

//: button click events
btnRight.addEventListener('click', shiftSlides.bind(null, 1));
btnLeft.addEventListener('click', shiftSlides.bind(null, 0));
// -----------------------------------------------------------------------------


const dots = document.getElementsByClassName('main-slide__dot');
dotsActive = () => {
	console.log(dots);
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i];
		dot.addEventListener('click', () => {
			dot.classList.add('_active');
			console.log(dot);
		});
	}


};
dotsActive();

// dotsClick = () => {
// 	const dots = document.querySelectorAll('.main-slide__dot');
// 	for (let i = 0; i < dots.length; i++) {
// 		dots[i].addEventListener('click', () => {
// 			currentSlideIndex = i;
// 			goToSlide(currentSlideIndex);
// 			// dotsActive();
// 		});
// 	}
// };
// dotsClick();

