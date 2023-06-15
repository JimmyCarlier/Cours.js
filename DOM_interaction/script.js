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

const range = document.querySelector(".input-5");
const resultRange = document.querySelector(".result-5");

range.addEventListener("input", value);

function value(event) {
  resultRange.textContent = event.target.value;
}

// const range = document.querySelector(".input-5");
// const resultRange = document.querySelector(".result-5");

// resultRange.innerHTML = range.value;

// range.addEventListener('input', (event)=>{
//     resultRange.innerHTML = event.target.value
// })

// ---------------------------------------------------------
// Exo 6
const select = document.querySelector("#language-select");
const resultOfOption = document.querySelector(".result-6");

select.addEventListener("change", valu);

const associations = {
  js: "coucou js",
  python: "coucou python",
  php: "coucou php",
};

function valu(e) {
  // resultOfOption.textContent = select.value
  resultOfOption.textContent = associations[e.currentTarget.value];
  console.log(e);
}
// ----------------------------------------------------------------------
// exo 7

const color = document.querySelector(".input-7");
const colorResult = document.querySelector(".result-7");

color.addEventListener("input", funColor);

function funColor() {
  colorResult.style.backgroundColor = color.value;
}
// ---------------------------------------------------------------------
// exo 8
const btn8 = document.querySelectorAll(".btn-8");
const resultColor = document.querySelector(".result-8");

btn8.forEach((e) => {
  e.addEventListener("click", zizi);
});

function zizi(e) {
  resultColor.style.backgroundColor = e.target.getAttribute("data-color");
}
// -----------------------------------------------------------------------
// exo 9

const devMusic = document.querySelectorAll(".checkbox-9");
const resultCheck = document.querySelector(".result-9");

let table = [];

devMusic.forEach((e) => {
  e.addEventListener("click", test);
});

initValue = resultCheck.textContent;
function test(e) {

  // if (e.target.checked) {
  //   resultCheck.textContent = "";
  //   table.push(e.target.value);
  //   resultCheck.textContent = table;
  // } else {
  //   table.pop(e.target.value);
  //   resultCheck.textContent = table;
  // }

  let myStr = ""
  if(devMusic[0].checked){
    myStr += devMusic[0].value
  }

  if(devMusic[1].checked){
    if(myStr) myStr += "-"
    myStr += devMusic[1].value
  }

  resultCheck.textContent = myStr
}
