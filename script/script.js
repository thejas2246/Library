const form = document.querySelector(".form-div");
const addButton = document.querySelector(".button");
const cancelButton = document.querySelector(".cancel-button");

function toggleClass() {
  form.classList.toggle("show");
}

addButton.addEventListener("click", toggleClass);

cancelButton.addEventListener("click", toggleClass);
