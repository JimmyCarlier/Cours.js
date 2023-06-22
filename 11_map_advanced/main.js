const users = getUsers();

async function getUsers() {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?nat=fr&results=50"
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Fetch Data issue");
    }
    lastElement(data);
    oldestAge(data);
    sortMaleFemel(data);
    identity(data);
    isAdult(data);
    messageTable(data);
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
}

// a. afficher le dernier élément du tableau
function lastElement(e) {
  console.log(e.results[e.results.length - 1]);
}
// b. afficher l'age le plus élevé

function oldestAge(e) {
  let res = e.results.sort((a, b) => a.dob.age - b.dob.age);
  console.log(res[res.length - 1]);
}
// c. afficher le nombre d'homme et le nombre de femmes

function sortMaleFemel(e) {
  let res1 = e.results.filter((myFilter) => myFilter.gender === "male");
  let res2 = e.results.filter((myFilter) => myFilter.gender != "male");
  console.log(
    `Le nombre d'homme est égal à ${res1.length} et le nombre de femme est égal à ${res2.length}`
  );
}

// let malCount = 0
// let femelCount = 0

// function count(e){
//     e.forEach(element => {
//         e.gender === "female" ? femelCount++ : malCount++
//     });
// }

// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}

function identity(e) {
  let myObject = e.results.map((element) => {
    let name = {};
    name.firstname = `${element.name.first} ${element.name.last} `;
    name.age = `${element.dob.age}`;
    return name;
  });
  console.log(myObject);
}

// 2. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}

function isAdult(e) {
  let test = e.results.map((element) => {
    let resultAdult = {};
    resultAdult.name = `${element.name.first} + ${element.name.last}`;
    resultAdult.adult = `${element.dob.age < 30}`;
    return resultAdult;
  });
  console.log(test);
}

// 4. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}

function messageTable(e) {
  let messTab = e.results.map((element) => {
    let obj = {};
    obj.mail = `${element.email}`;
    obj.message = `Bonjour ${element.name.first}, votre adresse au ${element.location.street.number} ${element.location.street.name} ${element.location.postcode} ${element.location.state}`;
    return obj;
  });
  console.log(messTab);
}
