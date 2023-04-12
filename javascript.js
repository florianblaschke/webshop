const button = document.querySelector('[data-js="click"]');
const body = document.querySelector('[data-js="body"]');

button.addEventListener("click", () => {
  body.classList.toggle("black");
});
