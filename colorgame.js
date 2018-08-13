var colors = randomColors(6);
var squares = document.querySelectorAll(".square")
var target = colors[Math.floor(Math.random() * colors.length)];
var circle = document.querySelector(".circle");
var loader = document.querySelector(".loader");
var loader1 = loader.querySelector(".loader1");
var loader2 = loader.querySelector(".loader2");
var loader3 = loader.querySelector(".loader3");
var targetDisplay = document.querySelector("#targetDisplay");
var endDisplay = document.querySelector(".endDisplay");
var gameWonBool = false;
var tryAgain = document.querySelector(".restartBtn");

loadAnimation();
circle.addEventListener("click", function() {
  restart();
})
tryAgain.addEventListener("click", restart);

function restart() {
  colors = randomColors(6);
  target = colors[Math.floor(Math.random() * colors.length)];
  targetDisplay.innerHTML = target;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  loadAnimation();
  circle.classList.remove("circlegrow");
  endDisplay.classList.remove("showEndDisplay");
  gameWonBool = false;

}

function loadAnimation() {
  loader.classList.add("loadergo");
  loader1.classList.add("loader1go");
  loader2.classList.add("loader2go");
  loader3.classList.add("loader3go");
  setTimeout(removeLoad, 1600);
}

function removeLoad() {
  loader.classList.remove("loadergo");
  loader1.classList.remove("loader1go");
  loader2.classList.remove("loader2go");
  loader3.classList.remove("loader3go");
}

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    if (this.style.backgroundColor === target && !gameWonBool) {
      gameWon();
      gameWonBool = true;
    } else if (!gameWonBool) {
      this.style.backgroundColor = "#434343"
    }
  })
}
targetDisplay.innerHTML = target;


function randomColors(numColors) {
  var colorArray = [];
  for (var i = 0; i < numColors; i++) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function gameWon() {
  // document.body.style.backgroundColor = target;
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = target;
  // }
  circle.style.background = target;
  circle.classList.add("circlegrow");
  endDisplay.classList.add("showEndDisplay");

}
