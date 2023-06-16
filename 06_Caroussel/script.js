const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]

const slideContainer = document.querySelector('.slide-container');
const right= document.querySelector('Ellipse_17')
const left = document.querySelector('Ellipse_20')

right.addEventListener('click', swipRight)
left.addEventListener('click', swipLeft)

function swipRight(){
    slideContainer.style.left = -100%
}