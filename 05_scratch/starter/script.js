// const btn = document.querySelector('.btn');
// const container = document.querySelector('.container')

// // btn.addEventListener('click', outBgColor);
// btn.addEventListener('click', inBgColor);
// let originColor = container.style.backgroundColor
// nbClick = 0

// function inBgColor(){
//     if(nbClick>1) nbClick=0
//     if(nbClick===0){
//         container.style.backgroundColor = 'Black'
//         btn.style.color = 'black'
//         btn.style.backgroundColor = 'white'
//     }
//     if(nbClick===1){
//         container.style.backgroundColor = originColor
//         btn.style.color = 'white'
//         btn.style.backgroundColor = 'black'
//     }
// nbClick++
// }

// Correction

// const btn = document.querySelector('.btn');
// const container = document.querySelector('.container')
// const mainContainer = document.querySelector('.main-container')

// const newDiv = document.createElement("div");
// newDiv.classList.add('new-div')
// mainContainer.appendChild(newDiv);

// btn.addEventListener('click', onBtnClick);

// let changeColor = true

// function onBtnClick(){
//     if(changeColor===true){
//         container.style.backgroundColor='white'
//     } else {
//         container.style.backgroundColor='black'
//     }
//     changeColor = !changeColor
// }

// ------------------------------------------------------------------------------


// const btn = document.querySelector(".btn");
// const container = document.querySelector(".container");

// const mainContainer = document.querySelector(".main-container");


// btn.addEventListener("click", youpi);


// function youpi(){
//     for (i = 0; i < 10; i++) {
//         for (j = 0; j < 10; j++) {
//           const newDiv = document.createElement("div");
//           newDiv.classList.add("new-div");
//           mainContainer.appendChild(newDiv);
//           newDiv.style.position = "absolute"
//           newDiv.style.left = `${i*10}vw`
//           newDiv.style.top = `${j*10}vh`
//           newDiv.style.backgroundColor = `rgb(${Math.random()*200},${Math.random()*100},${Math.random()*255}`
//         }
//       }
// }
// let table = []
// for(i=0;i<4;i++){
//   table[i] = []
//   for(j=0;j<4;j++){
//     table[i][j]=[]
//     table[i][j].push(i)
//     table[i][j].push(j)
//   }
// }

// matricePosition = [
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [],
// ];

// function youpi() {
//   if (
//     matricePosition[0] != matricePosition[2] &&
//     matricePosition[1] != matricePosition[2]
//   ) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("new-div");
//     mainContainer.appendChild(newDiv);
//     newDiv.style.position = "absolute";
//     newDiv.style.left = `${
//       matricePosition[0][(Math.random() * 10).toFixed(0)] * 9
//     }vw`;
//     newDiv.style.top = `${
//       matricePosition[1][(Math.random() * 10).toFixed(0)] * 9
//     }vh`;
//     newDiv.style.backgroundColor = `rgb(${Math.random() * 200},${
//       Math.random() * 100
//     },${Math.random() * 255}`;
//   } else {
//     youpi();
//   }
// }



// ------------------------------------------------------------------------------------------


// const container = document.querySelector(".container");

// const mainContainer = document.querySelector(".main-container");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", youpi);

// let colors = ["yellow", "red"];
// let yellowColor = true;

// function youpi() {
//   for (i = 0; i < 10; i++) {
//     for (j = 0; j < 10; j++) {
//       const newDiv = document.createElement("div");
//       newDiv.classList.add("new-div");
//       mainContainer.appendChild(newDiv);
//       newDiv.style.position = "absolute";
//       newDiv.style.left = `${i * 10}vw`;
//       newDiv.style.top = `${j * 10}vh`;
//       newDiv.style.backgroundColor = colors[(i + j)%2];
//   }
// }
// }

// --------------------------------------------------------------------
