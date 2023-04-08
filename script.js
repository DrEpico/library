const mylibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    const readStatus = this.read ? "has been read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };

  Book.prototype.toggleRead = () => {
    this.read = !this.read;
  };
}

const tempbook1 = new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 607, true);
const tempbook2 = new Book("Spare", "Prince Harry", 416, false);
// const tempbook3 = new Book("It Starts with Us", "Colleen Hoover", 336, false);
// console.log(HPDH.info()); // Output: "Harry Potter and the Deathly Hallows by J. K. Rowling, 607 pages, not read yet"
mylibrary.push(tempbook1);
mylibrary.push(tempbook2);

const inputField = document.querySelector("input");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
function addBookToLibrary(){
    const authorInput = author.value;
    const titleInput = title.value;
    const pagesInput = pages.value;
    const readStatus = read ? "has been read" : "not read yet";

    const newBook = new Book(titleInput, authorInput, pagesInput, readStatus);
    mylibrary.push(newBook)
}

function displayBooks() {
  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Read</th>
    </tr>
  `;

  for (let i = 0; i < mylibrary.length; i++) {
    const book = mylibrary[i];
    
    const row = table.insertRow();

    const titleCell = row.insertCell();
    titleCell.textContent = book.title;

    const authorCell = row.insertCell();
    authorCell.textContent = book.author;

    const pagesCell = row.insertCell();
    pagesCell.textContent = book.pages;

    const readCell = row.insertCell();
    readCell.textContent = book.read ? "Read" : "Not read yet";

    const deleteCell = row.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      mylibrary.splice(i, 1);
      row.remove();
    });
    deleteCell.appendChild(deleteBtn);
  }
  
  document.body.appendChild(table);
}
    
const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
    displayBooks();
});