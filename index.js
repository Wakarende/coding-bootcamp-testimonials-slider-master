'use strict';

const slides = document.getElementsByClassName('.carousel-item');
let slidePosition = 0;
const totalSlides = 2;
const previousButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next" );

previousButton.addEventListener('click', function(){
  console.log('prev button clicked');
}); 

nextButton.addEventListener('click', function(){
  console.log('next button clicked');
})