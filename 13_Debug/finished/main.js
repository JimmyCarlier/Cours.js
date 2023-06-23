const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]

const btns = document.querySelectorAll(".slider-btn")
const frame = document.querySelector(".slider-frame")
const title = document.querySelector(".slider-title")
const legend = document.querySelector(".slider-legend")
const slides = document.querySelectorAll(".slider-img")

let slideIndex = 0;
let imgWidth = 76.4;


resetSlider();
setListeners();

function resetSlider() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.style.left = imgWidth * i + 'vw';
    }
    btns[0].style.opacity = '0.5';
}

function setListeners() {
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];

        btn.addEventListener("click", (e) => {
            let step = e.currentTarget.classList.contains('slider-btn-right') ? 1 : -1
            slideIndex += step;

            if (slideIndex < 0) {
                slideIndex = 0;
            } else if (slideIndex > slides.length - 1) {
                slideIndex = slides.length - 1;
            }

            btns[0].style.opacity = "1";
            btns[1].style.opacity = "1";

            if (slideIndex < 1) {
                btns[0].style.opacity = "0.5";
            } else if (slideIndex > slides.length - 2) {
                btns[1].style.opacity = "0.5";
            }

            for (let j = 0; j < slides.length; j++) {
                const slide = slides[j];
                slide.style.left = imgWidth * (j - slideIndex) + 'vw';
            }

            title.textContent = slidesData[slideIndex].title
            legend.textContent = slidesData[slideIndex].description
        })
    }
}
