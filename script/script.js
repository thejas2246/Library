const form = document.querySelector(".form-div");
const mainForm = document.querySelector("form");
const addBookButton = document.querySelector(".button");
const cancelButton = document.querySelector(".cancel-button");
const addButton = document.querySelector(".add-button");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#pages");
let titleValue;
let authorValue;
let pageValue;

const myLibrary = [];

addBookButton.addEventListener("click", toggleClass);
cancelButton.addEventListener("click", toggleClass);
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  toggleClass();
  titleValue = titleInput.value;
  authorValue = authorInput.value;
  pageValue = pageInput.value;
  createBook(titleValue, authorValue, pageValue);
  mainForm.reset();
});

function Book(title, author, page, uId) {
  if (!new.target) {
    throw new Error("Use new keyword to call the function!");
  }
  this.title = title;
  this.author = author;
  this.page = page;
  this.uId = uId;
}

function createBook(title, author, page) {
  const uId = crypto.randomUUID();
  const book = new Book(title, author, page, uId);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  for (let book of myLibrary) {
    console.log(book);
  }
}
function removeBook(uId) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].uId == uId) {
      myLibrary.splice(i, 1);
    }
  }
}
function toggleClass() {
  form.classList.toggle("show");
}
