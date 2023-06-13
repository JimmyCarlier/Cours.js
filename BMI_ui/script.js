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

const firstInput = document.querySelector('input');
const firstSend  = document.querySelector('.send');
const mainContainer = document.querySelector(".main-container");

firstSend.addEventListener('click', chooseColor)

function chooseColor(){
    mainContainer.style.backgroundColor = firstInput.value
}