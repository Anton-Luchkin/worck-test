
const slider = document.querySelector('.slider-wrapper');
const btnFirstSlide = document.querySelector('.first-btn');
const btnSecondSlide = document.querySelector('.second-btn');
const btnThirdSlide = document.querySelector('.third-btn');

btnFirstSlide.addEventListener('click', onFirstSlide)
btnSecondSlide.addEventListener('click', onSecondSlide);
btnThirdSlide.addEventListener('click', onThirdSlide);

function onFirstSlide() {
   slider.scroll({
      left: 0,
      behavior: 'smooth',
   });
}

function onSecondSlide() {
   slider.scroll({
      left: 450,
      behavior: 'smooth',
   });
}

function onThirdSlide() {
   slider.scroll({
      left: 900,
      behavior: 'smooth',
   });
}

