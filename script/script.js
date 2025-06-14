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
  createBook(titleValue, authorValue, pageValue);
  mainForm.reset();
});

function Book(title, author, page, uId, didRead) {
  if (!new.target) {
    throw new Error("Use new keyword to call the function!");
  }
  this.title = title;
  this.author = author;
  this.page = page;
  this.uId = uId;
  this.didRead = didRead;
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
    const p3 = document.createElement("p");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");
    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.appendChild(checkBox);
    checkBoxContainer.appendChild(label);
    label.textContent = "Not Read";
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "check");
    checkBoxContainer.setAttribute("class", "check-box-container");
    p3.setAttribute("class", "x-mark");
    div.setAttribute("class", "book-children");
    h1.textContent = book.title;
    p1.textContent = book.author;
    p2.textContent = book.page;
    p3.textContent = "x";
    label.textContent = book.didRead ? "Read" : "Not Read";
    checkBox.checked = book.didRead;
    p3.addEventListener("click", (e) => {
      removeBook(book.uId);
    });
    checkBox.addEventListener("click", function () {
      book.didRead = checkBox.checked;
      changeLabelOfCheckbox(book, label);
    });
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(checkBoxContainer);

    divContainer.appendChild(div);
  }
}
function removeBook(uId) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].uId == uId) {
      myLibrary.splice(i, 1);
      break;
    }
  }
  displayBooks();
}
function toggleClass() {
  form.classList.toggle("show");
}

function changeLabelOfCheckbox(book, label) {
  if (book.didRead) {
    label.textContent = "Read";
  } else {
    label.textContent = "Not Read";
  }
}
