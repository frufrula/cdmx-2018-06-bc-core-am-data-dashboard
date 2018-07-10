//MANIPULACION DEL DOM

const cardSelector = document.getElementById("card-form");
let card = document.getElementById("card-link");

card.addEventListener("click", (toggleCard) => {
  if (cardSelector.style.display === "none") {
    cardSelector.style.display = "block"
  } else {
    cardSelector.style.display = "none"
  }
});