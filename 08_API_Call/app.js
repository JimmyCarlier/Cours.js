const btn = document.querySelector("button");
const errorM = document.querySelector(".errorMsg");
const placeNames = document.querySelectorAll(".place-name");
const frecentation = document.querySelectorAll(".place-infos");
const visitors = document.querySelectorAll(".visitors");

btn.addEventListener("click", onBtnClick);

async function fetchData() {
  btnChange("fetching");
  try {
    const response = await fetch(
      `https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=bor_frequentation_piscine_tr&q=`
    );

    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    const data = await response.json();
    btnChange("reset");
    const orderData = triSelect(data);
    displayData(orderData);
    frecentationData(orderData);
    visitorCapacity(orderData);
    // console.log(data);
  } catch (error) {
    btnChange("reset");
    errorM.textContent = `${error}`;
  }
}

function onBtnClick() {
  btnChange();
  fetchData();
}

function btnChange(element) {
  if (element === "fetching") {
    btn.textContent = "...";
  }
  if (element === "reset") {
    btn.textContent = "Refresh";
  }
}

function displayData(records) {
  placeNames.forEach((element, index) => {
    element.textContent = records[index].fields.etablissement_etalib;
  });
  // frecentationData();
}

function frecentationData(records) {
  frecentation.forEach((element, index) => {
    let visit = records[index].fields.fmicourante;
    let max = records[index].fields.fmizonmax;
    element.textContent = `${visit} / ${max}`;
  });
}

function visitorCapacity(records) {
  visitors.forEach((element, index) => {
    visitors[index].style.transform = `scaleX(${
      records[index].fields.fmicourante / records[index].fields.fmizonmax
    })`;
  });
}

function triSelect(data) {
  data.records.sort((a, b) => {
    if (a.fields.fmicourante < b.fields.fmicourante) {
      return 1;
    }
    if (a.fields.fmicourante > b.fields.fmicourante) {
      return -1;
    }
    return 0;
  });
  return data.records;
}
