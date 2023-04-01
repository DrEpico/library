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

const HPDH = new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 607, true);
const Spare = new Book("Spare", "Prince Harry", 416, false);
const ItStartsWithUs = new Book("It Starts with Us", "Colleen Hoover", 336, false);
// console.log(HPDH.info()); // Output: "Harry Potter and the Deathly Hallows by J. K. Rowling, 607 pages, not read yet"


function addBookToLibrary(){
    const title = prompt("Enter book title:");
    const author = prompt("Enter book  author:")
    const pages = prompt("Enter number of pages:");
    const read = confirm("Have you read this book?");

    const newBook = new Book(title, author, pages, read);
    mylibrary.push(newBook)
}

addBookToLibrary()