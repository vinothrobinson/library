// Array that stores all books
let myLibrary = [];

// Constructor for Books
function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		let readMessage = "";
		if (this.read) {
			readMessage = "has been read"
		}
		if (!this.read) {
			readMessage = "not read yet"
		}
		const infoString = `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`
		return infoString
    }
    this.addBookToLibrary = function() {
        myLibrary.push(this);
        console.log(myLibrary)
        displayLibrary() ;
    }
}

function displayLibrary() {
    const shelf = document.querySelector(".book-display")
    shelf.replaceChildren();
    for (let i = 0; i < myLibrary.length; i++) {
        // Overall container for book information
        const book = document.createElement('div');
        book.classList.add("book");
        book.style.backgroundColor = "#d6d3d1"
        // Individual divs for each section of a book
        const title = document.createElement('div')
        title.classList.add("title");
        title.innerHTML = myLibrary[i].title
        const author = document.createElement('div')
        author.classList.add("author");
        author.innerHTML = myLibrary[i].author
        const pages = document.createElement('div')
        pages.classList.add("pages");
        pages.innerHTML = `${myLibrary[i].pages} pages`

        // Adding the individual divs to the book container
        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        /*
        const read = document.createElement('div')
        read.classList.add("read")
        book.innerHTML = myLibrary[i].info();
        */
        shelf.appendChild(book);
    }
}


const newBook = new Book("JJK", "Gege Akutami", "325", true)
console.log(newBook.info())
newBook.addBookToLibrary();

const newBook2 = new Book("Black Clover", "Yuki Tabata", "360", true)
console.log(newBook2.info())
newBook2.addBookToLibrary();

const newBook3 = new Book("MHA", "Kohei Horikoshi", "370", false)
console.log(newBook3.info())
newBook3.addBookToLibrary();

const newBook4 = new Book("Monster", "Naoki Urasawa", "100", true)
console.log(newBook4.info())
newBook4.addBookToLibrary();

const newBook5 = new Book("Full Metal Alchemist", "Hiromu Arakawa", "200", true)
console.log(newBook5.info())
newBook5.addBookToLibrary();

const newBook6 = new Book("Naruto", "Kishimoto", "700", false)
console.log(newBook6.info())
newBook6.addBookToLibrary();