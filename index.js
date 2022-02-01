'use strict';

const slides = document.getElementsByClassName('carousel-item');
console.log(slides);
let slidePosition = 0;
const totalSlides = slides.length;
const previousButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next" );

previousButton.addEventListener('click', moveToPreviousSlide); 

nextButton.addEventListener('click',  moveToNextSlide);

function moveToNextSlide(){
  if(slidePosition === totalSlides - 1){
    slidePosition = 0;
  }else{
    slidePosition++;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToPreviousSlide(){

}