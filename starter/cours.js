// Permet de changer le contenu de la div 'container'
// const container = document.querySelector('.main-container');

// const firstName = `Jimmy`
// let firstPart = `je m'appelle `
// const age = 55
// const brotherAge = 20
// let result = ""

// ${} permet de rajouter une variable a une chaîne de caractère uniquement avec une backtick

// result += `Bonjour, ${firstPart} ${firstName} et j'ai ${age} ans`;

// result += firstPart + firstName
// firstName = `Je m'appelle Pierre`


// Opérateur de comparaison

// if(brotherAge > age){
//     result = `Mon frère est plus âgée de ${brotherAge% age} ans`
// }  else if (brotherAge < age) {
//     result = `Mon frère est moin âgée de ${age%brotherAge} ans`
// } else {
//     result = `Mon frère est moi avons le même âge`
// }

// if (brotherAge === age){
//     result = `Mon frère et moi avons le même age : ${age} ans`
// }

// if (brotherAge%2===0){
//     result = `L' âge de mon frère est paire : ${brotherAge}`
// } else {
//     result = `L'âge de mon frère est impaire : ${brotherAge}`
// }

// container.textContent = result;

// ---------------------------------------------------

// Les booleans

// const boolean = document.querySelector('.boolean-container')

// let myBoolean = true;
// let myResult = ""

// if (myBoolean){
//     myResult = `true`
// } else {
//     myResult = `false`
// }

// boolean.textContent = myResult;
// -----------------------------------------------------
// tester une variable pour savoir si elle est vraie ou fausse
// let test = 1
// let test1 = 2
// // let compare = !(test<test1) --> n'est pas égale
// let compare = (test < test1);
// console.log(compare)
// ----------------------------------------------
// Tableaux et objet

const myArray = ['Paul', 'Pierre', 'Jacques','Jimmy'];
// recupérer le dernier élément du tableau avec un parcours de tableau
// boolean.textContent = myArray[myArray.length-1]

// -----------------------------------------------------
const myObject = {
    Personne : `Jimmy`,
    Age : 10,
    Size : 1.71,
    weight : 84,
    Voiture : `Renault`,
    Carburant : `Diesel`,
    Assurance : `Matmut`,
    ville : {name : 'Bordeaux', population : 350000, superficie : 20}
}

const buffon = {
    Personne : `Cyril`,
    Age : 20,
    Size : 1.75,
    weight : 75,
    Voiture : `Trotinette`,
    Carburant : `Transpiration`,
    Assurance : `Aucune`,
    ville : {name : 'Mongolie', population : 1000000, superficie : 50},
}

const damso = {
    Personne : `Damien`,
    Age : 30,
    Size : 178,
    weight : 80,
    Voiture : `Trotinette`,
    Carburant : `Transpiration`,
    Assurance : `Aucune`,
    ville : {name : 'States', population : 1005000, superficie : 10},
}

// ----------------------------------------------------

// let grandeIMC;
// let faibleIMC;

// function calculIMC(pers){
//     const imc = pers.weight / (pers.Size ** 2);
//     return imc
// }
// myObject.IMC = calculIMC(myObject);
// buffon.IMC = calculIMC(buffon); 

// if (myObject.IMC > buffon.IMC){
//     faibleIMC = buffon;
//     grandeIMC = myObject;
// } else {
//     faibleIMC = myObject;
//     grandeIMC = buffon;
// }

// boolean.textContent = `C'est ${grandeIMC.Personne} qui a l'IMC la plus élevée il a ${calculIMC(buffon)}` 

// ----------------------------------------------------------

// let nomPersonne;
// let nomVille;
// let petiteVille;

// if (myObject.ville.population > buffon.ville.population){
//     nomPersonne = myObject.Personne
//     nomVille = myObject.ville.name
//     petiteVille = buffon.ville.name
// } else {
//     nomPersonne = buffon.Personne
//     nomVille = buffon.ville.name
//     petiteVille = myObject.ville.name
// }

// boolean.textContent = `M. ${nomPersonne} habite ${nomVille} qui est plus grande que ${petiteVille}`

// -----------------------------------------------------

// let older, younger = ""

// if (myObject.Age > buffon.Age){
//     older = myObject
//     younger= buffon
// } else {
//     older = buffon
//     younger = myObject

// boolean.textContent = `M.${older.Personne} est le plus âgé car il a ${older.Age - younger.Age}ans de moins`

// ------------------------------------------------------

// }
// let Taller;
// let Smaller;
// let resultSize;

// if (myObject.Size > buffon.Size){
//  Taller =  myObject
//     Smaller = buffon
// } else {
//  Taller = buffon
//     Smaller = myObject
// }


// boolean.textContent = `Mr ${Taller.Personne} est le plus grand. Il mesure ${Taller.Size - Smaller.Size} centimètres de plus que M. ${Smaller.Personne}`

// --------------------------------------------------
function density(incomeFunction){
    return income = incomeFunction.ville.population / incomeFunction.ville.superficie;
    // incomeFunction.density = incomeFunction.ville.superficie / incomeFunction.ville.population;
}

myObject.density = density(myObject);
buffon.density = density(buffon);
let personInDensedCity;
let personInSpreadCity;

if (myObject.density > buffon.density){
    personInSpreadCity = myObject;
    personInDensedCity = buffon
} else {
    personInSpreadCity = buffon;
    personInDensedCity = myObject;
}

boolean.textContent = `La ville de ${personInSpreadCity.Personne} à un densité de ${personInSpreadCity.density} pers/km²`

// ---------------------------------------------------

