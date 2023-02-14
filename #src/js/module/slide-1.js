let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide-card__thumb");
	let dots = document.getElementsByClassName("main-slide__dot");
	if (n > slides.length) { slideIndex = 1; }
	if (n < 1) { slideIndex = slides.length; }
	for (i = 0; i < slides.length; i++) {
		// slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" _active", "");
		// slides[i].className = slides[i].className.replace(" _activ", "");
	}
	// slides[slideIndex - 1].style.display = "block";
	// slides[slideIndex - 1].className += " _activ";
	dots[slideIndex - 1].className += " _active";
}

// const mainSlides = document.querySelectorAll('.slide-card__item');
// for (let i = 0; i < mainSlides.length; i++) {
// 	const mainSlide = mainSlide[i];
// 	mainSlide.addEventListener('click', () => {
// 		mainSlide.className.toggle('_active');
// 	});
// }