var squares = document.querySelector('#myGrid');

var setColor = function (color) {
  brushColor = color;
};

var brushColor = "blue";

var changeColor = function () {
  if (event.target !== event.currentTarget){
    console.log(event.target);
    event.target.setAttribute("style" , "background-color:" + brushColor);
  }
};

squares.addEventListener('click', changeColor, false);

var red = document.querySelector("#red");
// console.log(red);
//
// red.addEventListener('click', function() {
//   console.log("red");
//   event.target.setAttribute('style' , "background-color:red");
// });


// blue.addEventListener('click', function() {
//   console.log("blue");
//   event.target.setAttribute('style' , "background-color:blue");
// })

// var blue = document.querySelector("blue");
// console.log(blue);
//   if(event.target === blue) {
//     event.target.setAttribute("style" , "background-color:blue");
//   }

//

var blue = document.querySelector("#blue");

blue.addEventListener('click', function() {
  console.log("blue");
  setColor("blue");
});


// var changeColor = function () {
//   if (event.target !== event.currentTarget){
//     console.log(event.target);
//     event.target.setAttribute("style" , "background-color:blue");
//   }
// };
