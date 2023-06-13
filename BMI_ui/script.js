// const mainBtn = document.querySelector(".main-btn")
// const mainContainer = document.querySelector('.main-container');

// const colors = ['#01253e','#212831','#542243'];

// mainBtn.addEventListener("click", onClick);

// let nbClick = 0;

// function onClick(){
//     if(nbClick>=colors.length) nbClick = 0
//     mainContainer.style.backgroundColor = colors[nbClick]
//     nbClick++;
// }

// -----------------------------------------------------------------

// const mainBtns = document.querySelectorAll(".main-btn");
// const mainContainer = document.querySelector(".main-container");

// for (i=0;i<mainBtns.length;i++){
//     mainBtns[i].addEventListener("click", onClick);
// }

// const colors = ["red", "green", "blue"];

// function onClick(event) {
//     mainContainer.style.backgroundColor = event.target.textContent
//     // mainContainer.style.backgroundColor = event.target.getAttribute("data-color")
// }
// ---------------------------------------------------------------------

// const firstInput = document.querySelector('input');
// const firstSend  = document.querySelector('.send');
// const mainContainer = document.querySelector(".main-container");

// firstSend.addEventListener('click', chooseColor)

// function chooseColor(){
//     mainContainer.style.backgroundColor = firstInput.value
// }
// ---------------------------------------------------------------------

// const chooseWeight = document.querySelector(".weight");
// const chooseHeight = document.querySelector(".height");
// const calculImc = document.querySelector(".send");
// const score = document.querySelector(".score");
// const result = document.querySelector(".result");

// calculImc.addEventListener("click", calculator);

// // function calculator(){
// //     score.textContent = 0
// //     score.textContent = chooseWeight.value / ((chooseHeight.value/100) ** 2);
// // }

// let myObject = {
//   taille: 0,
//   poid: 0,
//   IMC: 0,
// };

// const BMIData = [
//   { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
//   { name: "Bonne santé", color: "green", range: [18.5, 25] },
//   { name: "Surpoids", color: "lightcoral", range: [25, 30] },
//   { name: "Obésité modérée", color: "orange", range: [30, 35] },
//   { name: "Obésité sévère", color: "crimson", range: [35, 40] },
//   { name: "Obésité morbide", color: "purple", range: 40 },
// ];

// function calculator() {
//   myObject.taille = chooseHeight.value;
//   myObject.poid = chooseWeight.value;
//   myObject.IMC = myObject.poid / (myObject.taille / 100) ** 2;
//   score.textContent = myObject.IMC.toFixed(2);
//   for (i = 0; i < BMIData.length; i++) {
//     if (
//       myObject.IMC > BMIData[i].range[0] &&
//       myObject.IMC <= BMIData[i].range[1]
//     ) {
//       result.textContent = BMIData[i].name;
//       score.style.color = BMIData[i].color;
//       break;
//     } else if (myObject.IMC > BMIData[i].range) {
//       result.textContent = BMIData[i].name;
//       score.style.color = BMIData[i].color;
//       break;
//     }
//   }
// }
// ---------------------------------------------------------------
const allButtons = document.querySelectorAll(".main-btn");
const sendColor = document.querySelector(".send");
const myContainer = document.querySelector(".main-container");

let color = ["red", "blue", "green"];

// for (i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", myFunction);
// }
allButtons.forEach((ele) => {
  ele.addEventListener("click", myFunction);
});
function myFunction(event) {
  myContainer.style.backgroundColor = event.target.getAttribute("data-color");
}
