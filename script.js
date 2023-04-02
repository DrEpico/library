const mylibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    // eslint-disable-next-line func-names
    this.info = function() {
        const readStatus = this.read ? "has been read" : "not read yet";
        return `${title  } by ${  author  }, ${  pages  } pages, ${  readStatus}`;
    }
}

const tempbook1 = new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 607, true);
const tempbook2 = new Book("Spare", "Prince Harry", 416, false);
// const tempbook3 = new Book("It Starts with Us", "Colleen Hoover", 336, false);
// console.log(HPDH.info()); // Output: "Harry Potter and the Deathly Hallows by J. K. Rowling, 607 pages, not read yet"
mylibrary.push(tempbook1);
mylibrary.push(tempbook2);

function addBookToLibrary(){
    const title = prompt("Enter book title:");
    const author = prompt("Enter book  author:")
    const pages = prompt("Enter number of pages:");
    const read = confirm("Have you read this book?");

    const newBook = new Book(title, author, pages, read);
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
      }
    
      document.body.appendChild(table);
    }
    
const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
    displayBooks();
});