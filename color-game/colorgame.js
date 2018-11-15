// Code working perfectly without any bugs!
var numcolors = 6;
var status = "medium";
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("guess");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var btn = document.getElementsByTagName("button");
var modebtn = document.querySelectorAll(".mode");
var modeclr = document.getElementsByClassName("selected");

colorDisplay.textContent = pickedColor;
message.style.fontSize = "inherit";
message.style.fontWeight = "bold";

for(var i=0; i<modebtn.length; i++) {
    modebtn[i].addEventListener("click", function() {
        modebtn[0].classList.remove("selected");
        modebtn[1].classList.remove("selected");
        modebtn[2].classList.remove("selected");
        this.classList.add("selected");
    })
}

easy.addEventListener("click", function() {
    numcolors = 3;
    colors = generateRandomColor(numcolors);
    modechange();
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    //display new colors
    for (var i = 0; i < numcolors; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    if(status == "medium" || status == "hard") {
        for (var i=numcolors; i<9; i++) {
            squares[i].style.visibility = "hidden";
        }
    }
    status = "easy";
});

medium.addEventListener("click", function() {
    numcolors = 6;
    colors = generateRandomColor(numcolors);
    modechange();
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    //display new colors
    for (var i = 0; i < numcolors; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    if(status == "hard") {
        for (var i=numcolors; i<9; i++) {
            squares[i].style.visibility = "hidden";
        }
    }
    if(status == "easy") {
        for (var i=3; i<numcolors; i++) {
            squares[i].style.visibility = "visible";
        }
    }
    status="medium";
});

hard.addEventListener("click", function() {
    numcolors = 9;
    colors = generateRandomColor(numcolors);
    modechange();
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    //display new colors
    for (var i = 0; i < numcolors; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    if(status == "easy") {
        for (var i=3; i<numcolors; i++) {
            squares[i].style.visibility = "visible";
        }
    }
    if(status == "medium") {
        for (var i=6; i<numcolors; i++) {
            squares[i].style.visibility = "visible";
        }
    }
    status="hard";
});

resetButton.addEventListener("click", function() {
    //reset h1 background
    if(resetButton.textContent == "Want to Play Again?") {
        h1.style.backgroundColor = "darkolivegreen";
        message.style.visibility = "hidden";
    }
    //change to new colors
    resetButton.textContent = "Try with New Colors";
    colors = generateRandomColor(numcolors);
    //setting color solution
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    //display new colors
    for (var i = 0; i < numcolors; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

for (var i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.backgroundColor = colors[i];
    // click event listeners
    squares[i].addEventListener("click", function() {
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            correctColor(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            wrongColor(clickedColor);
        }
    });
}

function correctColor(clr) {
    for(var i=0; i < numcolors; i++) {
        squares[i].style.backgroundColor = clr;
    }
    message.style.visibility = "visible";
    message.style.color = clr;
    message.textContent = "Correct Answer!";
    h1.style.backgroundColor = clr;
    resetButton.textContent = "Want to Play Again?";
}

function wrongColor(clr) {
    message.style.visibility = "visible";
    message.style.color = clr;
    message.textContent = "Try Again!";
}

function pickRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var colorset = []
    for(var i=0; i<num; i++) {
        colorset.push(randomColor());
    }
    return colorset;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var result = "rgb(" +r+ ", " +g+ ", " +b+")";
    return result;
}

function modechange() {
    message.style.visibility = "hidden";
    resetButton.textContent = "Try with New Colors";
    h1.style.backgroundColor = "darkolivegreen";
}