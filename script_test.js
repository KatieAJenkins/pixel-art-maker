var colorPalette = document.getElementById('#colorPalette');
console.log(colorPalette)

var brushColor = colorPalette.children;

var currentColor;

for (var i = 0; i &lt; swatches.length; i++) {
    var swatch = swatches[i];
    if (i == 0) {
        currentSwatch = swatch;
    }

    // when we click on a swatch...
    swatch.addEventListener("click",function (evt) {

        this.className = "active"; // give the swatch a class of "active", which will trigger the CSS border.
        currentSwatch.className = ""; // remove the "active" class from the previously selected swatch
        currentSwatch = this; // set this to the current swatch so next time we'll take "active" off of this.

        context.strokeStyle = this.style.backgroundColor; // set the background color for the canvas.
    });
}
