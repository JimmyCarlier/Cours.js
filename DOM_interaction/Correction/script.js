// Exo 1
// Exo 2
const input = document.querySelector('.input-3')
const text = document.querySelector('.text-to-display-3')

input.addEventListener('input', copy)
let start = text.textContent

function copy(){
    if(!input.value){
        text.textContent = start
    } else {
    text.textContent = input.value
    }
}
// ------------------------------------------------------