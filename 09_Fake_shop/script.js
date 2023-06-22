const errorM = document.querySelector(".errorM");
const row = document.querySelector(".row");
const checks = document.querySelectorAll(".btn-check");
const triSelect = document.querySelector(".tri-modif");

checks.forEach((element) => {
  element.addEventListener("change", myFunction);
});
triSelect.addEventListener("change", triByOrder);

fetchData();
let data;

async function fetchData() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);

    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    errorM.textContent = `${error}`;
  }
}

function displayData(data, table = []) {
  row.textContent = "";

  data.forEach((element) => {
    if (table.length != 0 && !table.includes(element.category)) return;

    const card = document.createElement("div");
    card.classList.add("divMy");
    card.innerHTML = ` <div class="card p-3 m-1 myDiv">
                <div class="d-flex flex-row mb-3"><img class="" src="${element.image}" width="70">
                    <div class="d-flex flex-column ml-2"><div class="custom-margin"><h5>${element.title}</h5><span class="text-black-50">${element.category}</span><div class="ratings mt-1"></div></div></div>
                </div>
                <div class="myClass">${element.description}...</div>
                <div class="d-flex justify-content-between install mt-3"><h6>${element.price}$</h6><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>`;

    row.appendChild(card);
  });
}

function myFunction() {
  let table = [];

  checks.forEach((element) => {
    if (element.checked) {
      table.push(element.value);
    }
  });

  displayData(data, table);
}

function triByOrder(e) {
  if (triSelect.value === 1) e.sort((a, b) => a.price - b.price);
  if (triSelect.value === 2) e.sort((a, b) => b.price - a.price);
}
