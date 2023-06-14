// Exercice 1
const allButtons = document.querySelectorAll(".btn-1");
const circle = document.querySelector(".result");

allButtons.forEach((element) => {
  element.addEventListener("click", changeColor);
});

let tableColor = ["red", "green", "blue"];

function changeColor(event) {
  circle.style.backgroundColor = event.target.textContent;
}
// -----------------------------------------------------------
// Exercice 2

const enterText = document.querySelector(".input-2");
const resultText = document.querySelector(".result-2");

enterText.addEventListener("input", getThis);

function getThis() {
  resultText.textContent = enterText.value;
}

// -----------------------------------------------------------

const addText = document.querySelector(".btn-3");
const remove = document.querySelector(".btn-3bis");
const input = document.querySelector(".input-3");
const result = document.querySelector(".container-3");
const supp = document.querySelectorAll(".some-text");

addText.addEventListener("click", add);
remove.addEventListener("click", deletee);

function add() {
  const newText = document.createElement("p");
  newText.classList.add("some-text");
  result.appendChild(newText);
  newText.textContent = input.value;
}

function deletee() {
  result.removeChild(result.lastChild);
}

// ----------------------------------------------------------