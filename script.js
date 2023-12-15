const container = document.querySelector(".container");
const board = document.querySelector(".board");
const element = document.querySelector(".square");
const button = document.querySelector(".grid-change");
const input = document.querySelector(".input");
const textBox = document.querySelector(".grid-text");
const rainbowBtn = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");

// Toggle for rainbow color
let rainbowActivation = false;

rainbowBtn.addEventListener("click", () => {
  if (rainbowActivation === false) {
    rainbowActivation = true;
    rainbowBtn.innerHTML = "Classic";
  } else {
    rainbowActivation = false;
    rainbowBtn.innerHTML = "GO Rainbow";
  }
});

//display input range on page loading
textBox.innerHTML = `Grid ${input.value}x${input.value}`;

//display input range on change
input.addEventListener(
  "change",
  () => (textBox.innerHTML = `Grid ${input.value}x${input.value}`)
);

//adding x amount of child elements to parent
function addSquare(x, elementChild, elementParent) {
  for (i = 0; i < x; i++) {
    elementParent.appendChild(elementChild.cloneNode(true));
  }
}

//color change on mouseover, color depends on rainbow acivation
function changeColor(x) {
  x.addEventListener("mouseover", () => {
    if (rainbowActivation === false) {
      x.style.backgroundColor = `rgb(80,80,80)`;
    } else {
      let redColor = Math.floor(Math.random() * 255);
      let yellowColor = Math.floor(Math.random() * 255);
      let blueColor = Math.floor(Math.random() * 255);
      x.style.backgroundColor = `rgb(${redColor},${blueColor},${yellowColor})`;
    }
  });
}

//"erasing" aka setting x element to default color of square
function eraseSquare(x) {
  x.style.backgroundColor = `rgba(169, 169, 169, 0.8)`;
}

//getting the grid value from user
let count = input.value;

//adding squares in row
addSquare(count, element, container);
//adding squares in column
addSquare(count, container, board);

//change grid to user defined
button.addEventListener("click", () => {
  count = input.value;
  board.innerHTML = "";
  container.innerHTML = "";
  addSquare(count, element, container);
  addSquare(count, container, board);
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => changeColor(square));
});

//change color of all squares
let allSquares = document.querySelectorAll(".square");
allSquares.forEach((square) => changeColor(square));

//erasing aka setting all squares to default color
erase.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((s) => eraseSquare(s));
});
