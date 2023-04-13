const button = document.querySelector('[data-js="click"]');
const body = document.querySelector('[data-js="body"]');
let counter = 0;

button.addEventListener("click", () => {
  body.classList.toggle("black");
  counter += 1;
  document.getElementById("likes").innerHTML = counter;
});

const peekaboo = document.querySelector('[data-js="peekaboo"]');
const magic = document.querySelector('[data-js="magic"]');
// const ernst = document.querySelector('[data-js="ernst"]');

magic.addEventListener("click", () => {
  // peekaboo.classList.toggle("peekabo");
  peekaboo.innerHTML = document
    .querySelector('[data-js="ernst"]')
    .setAttribute("src", "ernst");
});
