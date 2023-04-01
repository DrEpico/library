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

const HPDH = new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 607, false);
console.log(HPDH.info()); // Output: "Harry Potter and the Deathly Hallows by J. K. Rowling, 607 pages, not read yet"