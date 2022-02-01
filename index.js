'use strict';

const slides = document.getElementsByClassName('carousel-item');
console.log(slides);
let slidePosition = 0;
const totalSlides = slides.length;
const previousButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next" );

previousButton.addEventListener('click', moveToPreviousSlide); 

nextButton.addEventListener('click',  moveToNextSlide);

function hideAllSlides(){
  for(let slide of slides){
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}


function moveToNextSlide(){
  hideAllSlides();

  if(slidePosition === totalSlides - 1){
    slidePosition = 0;
  }else{
    slidePosition++;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToPreviousSlide(){
  hideAllSlides();

  if(slidePosition === 0){
    slidePosition++;
  }else{
    slidePosition = 0;
  }

  slides[slidePosition].classList.add('carousel-item-visible');

}