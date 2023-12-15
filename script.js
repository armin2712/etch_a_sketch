const container = document.querySelector(".container");
const board = document.querySelector(".board");
const element = document.querySelector(".square");
const button = document.querySelector(".btn");

function addSquare(x, elementChild, elementParent) {
  for (i = 0; i < x; i++) {
    elementParent.appendChild(elementChild.cloneNode(true));
  }
}

function changeColor(x) {
  x.addEventListener("mouseover", () => {
    let redColor = Math.floor(Math.random() * 255);
    let yellowColor = Math.floor(Math.random() * 255);
    let blueColor = Math.floor(Math.random() * 255);
    x.style.backgroundColor = `rgb(${redColor},${blueColor},${yellowColor})`;
  });
}

let count = 30;
count--;
addSquare(count, element, container);
addSquare(count, container, board);

button.addEventListener("click", () => {
  count = Number(prompt("Please input the number of squares")) - 1;
  console.log(count);
  if (count <= 100) {
    board.innerHTML = "";
    container.innerHTML = "";
    addSquare(count, element, container);
    addSquare(count, container, board);
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => changeColor(square));
  } else {
    alert("Too manu squares");
  }
});

let allSquares = document.querySelectorAll(".square");

allSquares.forEach((square) => changeColor(square));
