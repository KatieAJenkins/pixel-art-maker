'use strict';

//local storage testing
// localStorage.setItem('username', 'John');
// console.log("username " + localStorage.getItem("username"));


var saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function(){
console.log('local storage ', localStorage);

var localStorageObject = {};
localStorageObject.brushColor = brushColor;

console.log(localStorageObject);

var localStorageObjectStringify = JSON.stringify(localStorageObject);
console.log(localStorageObjectStringify);

localStorage.setItem('firstPaint' , localStorageObjectStringify);
console.log(localStorage);

});

//restore
var getButton = document.getElementById('restoreButton');

getButton.addEventListener('click', function() {
  // console.log('working');
  var painting = JSON.parse(localStorage.getItem('firstPaint'));
  console.log(painting);

  var paintingBrushColor = painting.brushColor;
  // console.log(paintingBrushColor);

  brushColor = paintingBrushColor;
  console.log(brushColor);

// console.log(squares);
var squaresLocal = document.getElementsByClassName('square');

// function mapSquares(){
//   // let squareColorArray = [];
//   // for(var i = 0; i < squaresLocal.length; i++){
//   //   var squareColor = squaresLocal[i].style.backgroundColor;
//   //   squareColorArray.push(squareColor);
//   //   console.log(squareColorArray);
//     // document.getElement
//     // localStorage.setItem('squareColorArray' , squareColorArray);
//     // console.log(localStorage);
//   }
// }

// mapSquares();

// console.log(squaresLocal);
  // console.log('squares ', squares.children());
});
console.log(getButton);

var squares = document.querySelector('#myGrid');
console.log(squares);

var red = document.querySelector('#red');
// console.log(red);
var blue = document.querySelector('#blue');
// console.log(blue);
var purple = document.querySelector('#purple');
// console.log(blue);

var brushColor = "";

function changeColor () {
  // console.log("working");

  if (event.target !== event.currentTarget){
    // console.log(event.target);
    //set square background to brushColor
    event.target.setAttribute("style" , "background-color:" + brushColor);
    // console.log(brushColor);
  }
}

//event listener on entire grid
squares.addEventListener('click', changeColor, false);
squares.addEventListener('mousedown', changeColor);
squares.addEventListener('mouseup', changeColor);

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

green.addEventListener('click' , function(){
  brushColor = "green";
  console.log('green');
});

yellow.addEventListener('click' , function(){
  brushColor = "yellow";
  console.log('yellow');
});

orange.addEventListener('click' , function(){
  brushColor = "orange";
  console.log('orange');
});
