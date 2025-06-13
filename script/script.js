const form = document.querySelector(".form-div");
const mainForm = document.querySelector("form");
const addBookButton = document.querySelector(".button");
const cancelButton = document.querySelector(".cancel-button");
const addButton = document.querySelector(".add-button");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#pages");
const divContainer = document.querySelector(".book-container");
let titleValue;
let authorValue;
let pageValue;

const myLibrary = [];

addBookButton.addEventListener("click", toggleClass);
cancelButton.addEventListener("click", function () {
  mainForm.reset();
  toggleClass();
});
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  toggleClass();
  titleValue = titleInput.value;
  authorValue = authorInput.value;
  pageValue = pageInput.value;
  console.log(pageValue);
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
  displayBooks(book);
}

function displayBooks() {
  divContainer.textContent = "";
  for (let book of myLibrary) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    div.setAttribute("class", "book-children");
    h1.textContent = book.title;
    p1.textContent = book.author;
    p2.textContent = book.page;
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2);
    divContainer.appendChild(div);
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
