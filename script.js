const container = document.querySelector(".container");
const board = document.querySelector(".board");
const element = document.querySelector(".square");
const button = document.querySelector(".grid-change");
const input = document.querySelector(".input");
const textBox = document.querySelector(".grid-text");
const rainbowBtn = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");

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

textBox.innerHTML = `Grid ${input.value}x${input.value}`;
input.addEventListener(
  "change",
  () => (textBox.innerHTML = `Grid ${input.value}x${input.value}`)
);

function addSquare(x, elementChild, elementParent) {
  for (i = 0; i < x; i++) {
    elementParent.appendChild(elementChild.cloneNode(true));
  }
}

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

function eraseSquare(x) {
  x.style.backgroundColor = `rgba(169, 169, 169, 0.8)`;
}

let count = input.value;

addSquare(count, element, container);
addSquare(count, container, board);

button.addEventListener("click", () => {
  count = input.value;
  board.innerHTML = "";
  container.innerHTML = "";
  addSquare(count, element, container);
  addSquare(count, container, board);
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => changeColor(square));
});

let allSquares = document.querySelectorAll(".square");
allSquares.forEach((square) => changeColor(square));

erase.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((s) => eraseSquare(s));
});
