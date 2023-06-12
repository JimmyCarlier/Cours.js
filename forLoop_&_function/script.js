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

// const myNumbers = [4, 6, 13, 3, 9, 12, 11];
// const result = sumElements(myNumbers);

// console.log(result);

// function sumElements(arr) {
//     let myResult=0;
//     for(i=0;i<arr.length;i++){
//         myResult += arr[i]
//     }
//     return myResult;

// En récupérant uniquement les chiffres pair

// function sumElements(arr) {
//     let myResult = 0;
//     for(i=0;i<arr.length;i++){
//         if (arr[i]%2===0)
//         myResult += arr[i]
//     }
//     return myResult
// }
// }

// -------------------------------------------------------------------

// const table = [1,4,5,25,47,85,63,21,45,98,52,36,41];
// const result = strangeNum(table);

// console.log(result)

// function strangeNum (arr){
//     let sum = 0;
//     for (i=0;i<arr.length;i++){
//         if (i%3!==0){
//     // if (i%3===0) continue
//             sum += arr[i]
//         }
//     }
//     return sum
// }

// ---------------------------------------------------------------

// let table = [10, 20, 5, 6, 8, 41, 63, 56, 89];

// const resultMin = min(table);
// const resultMax = max(table);
// const moyenTab = moyenne(table);

// console.log(resultMin);
// console.log(resultMax);
// console.log(moyenTab);

// // Fonction qui retourne la valeur minium d'un tableau

// function min(arr1) {
//   let min = arr1[0];

//   for (i = 1; i < arr1.length; i++) if (arr1[i] < min) min = arr1[i];

//   return min;
// }

// // fonction qui retourne la valeur maximum d'un tableau

// function max(arr2) {
//   let max = arr2[0];

//   for (i = arr2.length - 1; i > 0; i--) {
//     if (arr2[i] > max) max = arr2[i];
//   }
//   return max;
// }

// Fonction qui permet de retourné un tableau de nombres, tous supérieurs à la moyenne des éléments d'un tableau en argument

// function moyenne(arr) {
//   let myTable = [];
//   let moyenne = 0;
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   moyenne = sum / arr.length;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > moyenne) {
//       myTable.push(arr[i]);
//     }
//   }

//   return myTable;
// }

// ----------------------------------------------------------------------------------

// let words = ["Etienne", "Marc", "Antoine", "Sirylle", "Lowrien"];

// words.push("Bom Dia"); // Ajoute le dernier élément du tableau
// const myVar = words.pop(); // La variable contient le dernier élément du tableau supprimer
// words.pop(); // Enlève le dernier élément du tableau
// words.shift(); // retire le premier élément du tableau
// words.unshift(); // ajoute un premier élément au tableau

// -------------------------------------------------------------------------------------

const pizzas = [
  {
    name: "Margherita",
    price: 11.5,
    ingredients: ["mozzarella", "tomate", "basilic ", "huile d'olive"],
    baseTomate: true,
  },
  {
    name: "Regina",
    price: 12,
    ingredients: ["mozzarella", "tomate", "origan", "jambon", "champignons"],
    baseTomate: true,
  },
  {
    name: "4 saisons",
    price: 15,
    ingredients: [
      "artichaut",
      "courgette",
      "poivron",
      "mozzarella",
      "oignon rouge",
    ],
    baseTomate: true,
  },
  {
    name: "Napolitaine",
    price: 14,
    ingredients: ["tomate", "mozzarella", "anchois", "olives noires", "origan"],
    baseTomate: true,
  },
  {
    name: "4 fromages",
    price: 16,
    ingredients: ["tomate", "mozzarella", "emmental", "comté", "roquefort"],
    baseTomate: true,
  },
  {
    name: "Montagnarde",
    price: 19,
    ingredients: ["mozzarella", "reblochon", "gruyère", "oignon", "champignon"],
    baseTomate: false,
  },
  {
    name: "Chèvre-miel",
    price: 18,
    ingredients: ["mozzarella", "chèvre", "miel"],
    baseTomate: false,
  },
  {
    name: "Hawaïenne",
    price: 17,
    ingredients: ["mozzarella", "tomate", "jambon", "ananas"],
    baseTomate: true,
  },
];

let result = pizzasName(pizzas);
let pizzasPrice = pizzasMoyenne(pizzas);


console.log(pizzasPrice);
console.log(result);



function pizzasName(arr) {
  let table = [];
  for (i = 0; i < arr.length; i++) {
    table.push(arr[i].name);
  }
  return table;
}

function pizzasMoyenne(arr) {
  let price = 0;
  let moyenne = 0;
  for (i = 0; i < arr.length; i++) {
    price += arr[i].price;
  }
  moyenne = price / arr.length;

  return moyenne;
}
