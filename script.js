'use strict';

var squares = document.querySelector('#myGrid');
var red = document.querySelector('#red');
// console.log(red);
var blue = document.querySelector('#blue');
// console.log(blue);
var purple = document.querySelector('#purple');
// console.log(blue);

var brushColor = "red";

//set square background to brushColor
var changeColor = function () {
  if (event.target !== event.currentTarget){
    // console.log(event.target);
    event.target.setAttribute("style" , "background-color:" + brushColor);
    // console.log(brushColor);
  }
};

//event listener on entire grid
squares.addEventListener('click', changeColor, false);

//event listeners on colorPalette
red.addEventListener('click', function() {
  brushColor = "red";
  console.log('red');
});

blue.addEventListener('click' , function(){
  brushColor = "blue";
  console.log('blue');
});

purple.addEventListener('click' , function(){
  brushColor = "purple";
  console.log('purple');
});
