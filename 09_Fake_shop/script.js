const errorM = document.querySelector(".errorM");
const row = document.querySelector(".row");
const checks = document.querySelectorAll(".btn-check");
const triSelect = document.querySelector(".tri-modif");

checks.forEach((element) => {
  element.addEventListener("change", myFunction);
});

triSelect.addEventListener("change", callFunction);

fetchData();
let data;

async function fetchData() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);

    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    data = await response.json();
    displayData();
  } catch (error) {
    errorM.textContent = `${error}`;
  }
}

function displayData(table = []) {
  row.textContent = "";
  triByOrder();

  data.forEach((element) => {
    if (table.length != 0 && !table.includes(element.category)) return;

    const card = document.createElement("div");
    card.classList.add("divMy");
    let rateStars = "";
    for (i = 0; i < Math.round(element.rating.rate); i++) {
      rateStars += `<i class="fa-solid fa-star"></i>`;
    }
    for (i = 0; i < 5 - Math.round(element.rating.rate); i++) {
      rateStars += `<i class="fa-regular fa-star"></i>`;
    }
    card.innerHTML = ` <div class="card p-3 m-1 myDiv">
                <div class="d-flex flex-row mb-3"><img class="" src="${
                  element.image
                }" width="70">
                    <div class="d-flex flex-column ml-2"><div class="custom-margin"><h5>${
                      element.title
                    }</h5><span class="text-black-50">${
      element.category
    }</span><div class="ratings mt-1">${rateStars}</div></div></div>
                </div>
                <div class="myClass">${element.description.slice(
                  0,
                  120
                )}...</div>
                <div class="d-flex justify-content-between install mt-3"><h6>${
                  element.price
                }$</h6><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
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

  displayData(table);
}

function triByOrder() {
  if (triSelect.value === "1") data.sort((a, b) => a.price - b.price);
  if (triSelect.value === "2") data.sort((a, b) => b.price - a.price);
  if (triSelect.value === "3")
    data.sort((a, b) => a.rating.rate - b.rating.rate);
  if (triSelect.value === "4")
    data.sort((a, b) => b.rating.rate - a.rating.rate);
}

function callFunction() {
  triByOrder();
  displayData();
}
