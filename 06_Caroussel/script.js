const slidesData = [
  { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
  { title: "VIGNE", description: "Consectetur adipiscing elit" },
  { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

const btns = document.querySelectorAll(".slider-btn");
const sliderIMG = document.querySelectorAll(".slider-img");
const sliderTitle = document.querySelector(".slider-title");
const sliderLegend = document.querySelector(".slider-legend");
const circle = document.querySelectorAll(".circle-bottom");

init();


circle.forEach((element) => {
  element.addEventListener("click", onCircleClick);
});


btns.forEach((e, index) => {
  e.indexBtn = index;
  e.addEventListener("click", onClickBtn);
});


let slideIndex = 0;


function onCircleClick(e) {
  // slideIndex
  if (e.currentTarget.classList.contains("dot-1")) {
    slideIndex = 0;
  }
  if (e.currentTarget.classList.contains("dot-2")) {
    slideIndex = 1;
  }
  if (e.currentTarget.classList.contains("dot-3")) {
    slideIndex = 2;
  }
  resitrction()
  playTransition(slideIndex);
  text();
  opacity();
}


function onClickBtn(e) {
  if (e.currentTarget.indexBtn === 0) {
    slideIndex--;
  } else {
    slideIndex++;
  }
  resitrction()
  playTransition(slideIndex);
  opacity()
  text();
}


function init() {
  btns[0].style.opacity = 0.5;
  circle[1].style.opacity = 0.5;
  circle[2].style.opacity = 0.5;
}


function playTransition(slideI) {
  for (i = 0; i < sliderIMG.length; i++) {
    sliderIMG[i].style.transform = `translateX(${100 * (i - slideI)}%)`;
    sliderIMG[i].style.transition = "transform 1s ease-in-out"
    circle[i].style.opacity = 0.5;
  }
}

function text() {
  sliderTitle.textContent = slidesData[slideIndex].title;
  sliderLegend.textContent = slidesData[slideIndex].description;
}
function opacity(){
  btns[0].style.opacity = btns[1].style.opacity = 1;
  if (slideIndex <= 0) {
    btns[0].style.opacity = 0.5;
  } else if (slideIndex >= sliderIMG.length - 1) {
    btns[1].style.opacity = 0.5;
  }
  circle[slideIndex].style.opacity = 1;
  
}

function resitrction(){
  if (slideIndex <= 0) {
    slideIndex = 0;
  } else if (slideIndex >= sliderIMG.length - 1) {
    slideIndex = slidesData.length - 1;
  }
  if (slideIndex > sliderIMG.length - 1) {
    slideIndex = sliderIMG.length - 1;
  }
}