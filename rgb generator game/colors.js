var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listener
    squares[i].addEventListener('click', function() {
      //grab color of clicked
      var clickedColor = this.style.background;
      //compare
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new color
  pickedColor = pickColor();
  //change color display
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener('click', function() {
  reset();
});

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change color to match
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    //get random color and push to array
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green
  var g = Math.floor(Math.random() * 256);
  //pick a blue
  var b = Math.floor(Math.random() * 256);
  //return string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
