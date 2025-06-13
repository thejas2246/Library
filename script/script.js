const form = document.querySelector(".form-div");
const addButton = document.querySelector(".button");
const cancelButton = document.querySelector(".cancel-button");

addButton.addEventListener("click", toggleClass);
cancelButton.addEventListener("click", toggleClass);

const myLibrary = [];

function Book(title, author, page, uId) {
  if (!new.target) {
    throw new Error("Use new keyword to call the function!");
  }
  this.title = title;
  this.author = author;
  this.page = page;
  this.uId = uId;
}

function toggleClass() {
  form.classList.toggle("show");
}
