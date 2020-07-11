
const slider = document.querySelector('.slider-wrapper');
const sliderGG = document.querySelector('.slider');
const btnFirstSlide = document.querySelector('.first-btn');
const btnSecondSlide = document.querySelector('.second-btn');
const btnThirdSlide = document.querySelector('.third-btn');

btnFirstSlide.addEventListener('click', onFirstSlide);
btnSecondSlide.addEventListener('click', onSecondSlide);
btnThirdSlide.addEventListener('click', onThirdSlide);

function onFirstSlide() {
   sliderGG.classList.remove('midle');
   sliderGG.classList.remove('right');
}

function onSecondSlide() {
   sliderGG.classList.add('midle');
   sliderGG.classList.remove('right');

}

function onThirdSlide() {
   sliderGG.classList.add('right');
   sliderGG.classList.remove('midle');
}

