var colors = [
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[2];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.backgroundColor = colors[i];
    // click event listeners
    squares[i].addEventListener("click", function() {
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        var message = document.getElementById("guess");
        
        if (clickedColor === pickedColor) {
            for(var i=0; i < squares.length; i++) {
                squares[i].style.backgroundColor = clickedColor;
            }
            message.style.visibility = "visible";
            message.style.color = clickedColor;
            message.textContent = "Correct Answer!";
        }
        else {
            message.style.visibility = "visible";
            message.style.color = clickedColor;
            message.textContent = "Wrong Answer!";
        }
    });
}