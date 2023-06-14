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
// Exo 3
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
// Exo 4

const text1 = document.querySelector(".input-4a");
const text2 = document.querySelector(".input-4b");
const valid = document.querySelector(".btn-4");
const newResult = document.querySelector(".result-4");
const form = document.querySelector(".form-4");

valid.addEventListener("click", concat);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function concat() {
  const addText = document.createElement("p");
  addText.classList.add("choose");
  newResult.appendChild(addText);
  addText.textContent = text1.value + " " + text2.value;
}

// ------------------------------------------------------
// Exo 5

// const range = document.querySelector(".input-5");
// const resultRange = document.querySelector(".result-5");

// resultRange.addEventListener("input", value);

// function value(event) {
//   resultRange.innerHTML = event.target.value;
// }


const range = document.querySelector(".input-5");
const resultRange = document.querySelector(".result-5");

resultRange.innerHTML = range.value;

range.addEventListener('input', (event)=>{
    resultRange.innerHTML = event.target.value
})
