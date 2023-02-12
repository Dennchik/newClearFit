// slider
const slides = document.getElementsByClassName("slide-card__item");
// этот выбор является живой коллекцией; любые изменения в DOM обновляются в переменной в отличие от querySelectorsquerySelectors
const btnLeft = document.querySelector(`.main-slide__prev`);
const btnRight = document.querySelector(`.main-slide__next`);

let currentSlideIndex = 0;
let lastSlideIndex = slides.length - 1;

// go to a slide;
function goToSlide(slideIndex) {
	[...slides].forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - slideIndex)}%)`;
	});
	currentSlideIndex = slideIndex;
}
goToSlide(currentSlideIndex);

// Подготоваем следующий слайд, если текущий слайд является первым или последним
function readyNextSlide() {
	// если текущий слайд является последним слайдом, сдвиньте первый слайд в конец
	if (currentSlideIndex === lastSlideIndex) {
		slides[lastSlideIndex].insertAdjacentElement("afterend", slides[0]);
		slides[lastSlideIndex].style.transform = `translateX(${100}%)`;
		currentSlideIndex--; //this is because current slide is now the second last slide
	}
	// Если текущий слайд является первым, сдвигаем последний слайд на начало
	if (currentSlideIndex === 0) {
		slides[0].insertAdjacentElement("beforebegin", slides[lastSlideIndex]);
		slides[0].style.transform = `translateX(-${100}%)`;
		currentSlideIndex++; //this is because current slide is now the second slide
	}
}

// Помещаем последний слайд в начало; (условие "если" не является обязательным, но предоставление условия "если" является доказательством в будущем, если пользователь установит, что начальный слайд будет показан в качестве последнего слайда)
if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();

// Сдвигаем все слайды влево или вправо в зависимости от указанного направления
function shiftSlides(direction) {
	direction ? currentSlideIndex++ : currentSlideIndex--;
	if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();
	goToSlide(currentSlideIndex);
}

//button click events
btnRight.addEventListener("click", shiftSlides.bind(null, 1));
btnLeft.addEventListener("click", shiftSlides.bind(null, 0));