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
// ----------------------------------------------------------------



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
//   //             myObject.poid / Math.pow((myObject.taille/100), 2)
//   if (
//     !myObject.poid ||
//     !myObject.taille ||
//     myObject.poid <= 0 ||
//     myObject.taille <= 0
//   ) {
//     hundleError();
//     return
//   }
//   score.textContent = myObject.IMC.toFixed(2);
//   resultForCalculator();
// }

// function resultForCalculator() {
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

// function hundleError() {
//   alert("La valeur saisie n'est pas correcte");
//   score.textContent = 0;
//   score.style.color = 'black'
//   result.textContent = `En attente de resultat...`
// }

// Correction

// const BMIData = [
//   { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
//   { name: "Bonne santé", color: "green", range: [18.5, 25] },
//   { name: "Surpoids", color: "lightcoral", range: [25, 30] },
//   { name: "Obésité modérée", color: "orange", range: [30, 35] },
//   { name: "Obésité sévère", color: "crimson", range: [35, 40] },
//   { name: "Obésité morbide", color: "purple", range: 40 },
// ];

// // IMC = poids en kg / taille² en m

// const formBtn = document.querySelector('.form-btn')
// const displayBMI = document.querySelector('.bmi-value')
// const description = document.querySelector('.description')
// const inputs = document.querySelectorAll('input');

// formBtn.addEventListener('click', onFormSubmit)

// function onFormSubmit(e) {
//   e.preventDefault();
//   const height = inputs[0]
//   const weight = inputs[1]

//   // Validation du formulaire
//   // falsy : 0 '' undefined null
//   if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
//     handleError()
//     return
//   }

//   // calcul BMI
//   const bmi = (weight.value / Math.pow((height.value / 100), 2)).toFixed(1)
//   showResult(bmi)
// }

// function showResult(bmi) {
//   let rank;
//   for (let i = 0; i < BMIData.length; i++) {
//     const data = BMIData[i];
//     if (bmi > data.range[0] && bmi <= data.range[1]) {
//       rank = data
//       break
//     } else if (typeof data.range === 'number' && data.range >= 40) {
//       rank = data;
//     }
//   }

//   displayBMI.textContent = bmi;
//   displayBMI.style.color = rank.color;
//   description.textContent = rank.name;
// }

// function handleError() {
//   displayBMI.textContent = "Echec"
//   description.textContent = "Remplissez correctement le formulaire"
// }
// ---------------------------------------------------------------
