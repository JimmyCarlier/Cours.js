import movie from "./movie.json" assert { type: "json" };

// a. Logger le premier element du tableau movies
console.log(movie[1]);
// b. Logger l'annee du 4eme element du tableau movies
console.log(movie[4].year);
// c. Logger le titre du dernier element du tableau movies
console.log(movie[movie.length - 1].title);
// d. Logger le titre du film qui a la meilleure note

// let result = movie[0];

// for (let i = 0; i < movie.length; i++) {
//   if (movie[i].rate > result.rate) result = movie[i];
// }

// console.log(result.title);

function sortBy() {
  movie.sort((a, b) => {
    if (a.rate < b.rate) {
      return 1;
    } else if (a.rate > b.rate) {
      return -1;
    }
    return 0;
  });
  return movie[0].title;
}
let result = sortBy();
console.log(result);

// e. Logger le titre du film le plus ancien

// function yearSort() {
//   movie.sort((a, b) => {
//     if (a.year < b.year) {
//       return 1;
//     } else if (a.year > b.year) {
//       return -1;
//     }
//     return 0;
//   });
//   return movie[movie.length - 1].title;
// }
// let titleYear = yearSort();
// console.log(titleYear);

let oldestMovie = movie[0];

movie.forEach((element) => {
  if (element.year < oldestMovie.year) {
    oldestMovie = element;
  }
});

console.log(oldestMovie.title);

// f. Logger tous les titres de film qui ont au moins 3 acteurs

let resultActors = [];

for (let i = 0; i < movie.length; i++) {
  if (movie[i].actors.length > 2) {
    resultActors.push(movie[i]);
  }
}
console.log(resultActors);

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

// function allMovie(element) {
//   let resultOfAll = [];

//   element.forEach((e) => {
//     resultOfAll.push(e.title);
//   });
//   return resultOfAll;
// }

// console.log(allMovie(movie));

let test = movie.map((obj) => {
  let firstTry = [];
  firstTry = obj.title;
  return firstTry;
});

console.log(test);

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

function movieForYear(table, myYear) {
  let resultOfYear = [];

  table.forEach((element) => {
    if (myYear === element.year) {
      resultOfYear.push(element.title);
    }
  });
  return resultOfYear;
}

console.log(movieForYear(movie, 1994));

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

function movieByReal(real, table) {
  let resultOfReal = [];
  table.forEach((element) => {
    if (real === element.director) {
      resultOfReal.push(element.title);
    }
  });
  return resultOfReal;
}

console.log(movieByReal("Quentin Tarantino", movie));

let arr = [1, 3, 8, 2, 5];

let total = 0;

arr.forEach((currentNumber) => {
  total += currentNumber;
  return total;
});

console.log(total);
