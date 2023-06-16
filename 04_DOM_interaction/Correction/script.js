const result3 = document.querySelector(".text-to-display-4");
const inputs4 = document.querySelectorAll(".input-4");

for (let i = 0; i < inputs4.length; i++) {
  inputs4[i].addEventListener("input", onInput3);
}

function onInput3() {
  let result = getDifferenceBetweenDates(inputs4[1].value, inputs4[0].value);
  result3.textContent = `Le séjour durera ${result} jours.`
}

function getDifferenceBetweenDates(date2, date1) {
  let d2 = new Date(date2);
  let d1 = new Date(date1);
  let diffTime = d2 - d1;
  return (diffTime / (1000 * 60 * 60 * 24))
}
