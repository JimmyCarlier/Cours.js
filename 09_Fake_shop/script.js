const errorM = document.querySelector(".errorM");
const row = document.querySelector(".row");

fetchData();

async function fetchData() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);

    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    const data = await response.json();
    displayData(data);
    // console.log(data);
  } catch (error) {
    errorM.textContent = `${error}`;
  }
}

function displayData(data) {
  row.textContent = "";

  data.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="col-4">
            <div class="card design-card">
                <h2>${element.title}</h2>
                <img src="${element.image}" alt="">
                <p></p>
                <div class="row row-cols-2 text-center align-content-center">
                    <button class="design">View</button>
                    <p></p>
                </div>
            </div>
        </div>`;

    row.appendChild(card);
  });
}
