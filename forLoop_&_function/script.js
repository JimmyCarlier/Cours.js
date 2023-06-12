// logMessage(`Salut`)
// logMessage(`tout`)
// logMessage(`le monde`)

// function logMessage(arg) {
//     console.log(arg);
// }

// ------------------------------------------------------

// const numb1 = 156854;
// const numb2 = 178964;

// let valeurRetournee = sum2args(numb1,numb2);

// valeurRetournee += " !"
// console.log(valeurRetournee)

// function sum2args(arg1, arg2) {
//   const result = `La somme de ${arg1} avec ${arg2} est égale à ${arg1 + arg2}`;
//   return result;
// }

// --------------------------------------------------------------------------------

// let resultAddition = sum2arg(15, 45);
// let resultSubstraction = substract2arg (resultAddition, 360)
// let finalCalcul = result(resultSubstraction);

// console.log(finalCalcul)

// function result(arg){
//     const log = `Le résultat des 2 fonctions précédents est ${arg}`;
//     return log;
// }

// function sum2arg(arg1, arg2){
//     const resultAddition = arg1 + arg2
//     return resultAddition
// }

// function substract2arg (arg1, arg2){
//     const resultSubstraction =  arg1 - arg2;
//     return resultSubstraction;
// }

// ----------------------------------------------------------------------------------

const myNumbers = [4, 6, 13, 3, 9, 12, 11];
const result = sumElements(myNumbers);

console.log(result);

function sumElements(arr) {
    let myResult = 0;
    for(i=0;i<arr.length;i++){
        if (arr[i]%2===0)
        myResult += arr[i]
    }
    return myResult
}
