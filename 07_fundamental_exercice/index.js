import games from "./games.json" assert { type: "json" };

init();

function init() {
  console.log("commencons !");
}

// a. Logger le premier element du tableau games
console.log(games[0]);
// b. Logger l'annee du 3eme element du tableau games
console.log(games[2].year);
// c. Logger le titre du dernier element du tableau
console.log(games[games.length - 1].title);
// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)

const returnT = (e) => {
  let table = [];
  e.forEach((element) => {
    table.push(element.title);
  });
  return table;
};
console.log(returnT(games));

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

const gamesByDate = (tab, year) => {
  let tableT = [];
  tab.forEach((element) => {
    if (element.year === year) {
      tableT.push(element.title);
    }
  });
  return tableT;
};
console.log(gamesByDate(games, 2020));

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

// const gamesMostPopular = (e) => {
//     let tablePopular = []
//     e.forEach(element => {
//         if(element.rate >= 8) tablePopular.push(element.title)
//     });
//     return tablePopular
// }
// console.log(gamesMostPopular(games))

const gamesMostPopular = (arr) => {
  let tablePopular = [];
  tablePopular = arr.filter((e) => {
    return e.rate >= 8;
  });

  return tablePopular;
};
console.log(gamesMostPopular(games));

// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

const gamesByConsole = (e, ele) => {
  let tableConsole = [];

  // En ciblant un mot clé
  e.forEach((element) => {
    for (let i = 0; i < element.devices.length; i++) {
      const res = element.devices[i];
      if (res.includes(ele)) {
        tableConsole.push(element.title);
        break
      }
    }
  });
  return tableConsole;
};

console.log(gamesByConsole(games, "play"));

// const gamesByConsole = (e, ele) => {
//   let tableConsole = [];
//   e.forEach((element) => {
//     element.devices.forEach((secondElement) => {
//       if (secondElement.includes(ele)) tableConsole.push(element);
//     });
//   });
//   return tableConsole;
// };
// console.log(gamesByConsole(games, "PC"));
