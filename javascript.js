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
        const book = document.createElement('div');
        book.classList.add("book");
        book.style.backgroundColor = "#d6d3d1"
        book.innerHTML = myLibrary[i].info();
        shelf.appendChild(book);
        console.log("This worked?")
    }
}


const newBook = new Book("JJK", "Gege Akutami", "360", true)
console.log(newBook.info())
newBook.addBookToLibrary();

const newBook2 = new Book("Black Clover", "Yuki Tabata", "360", true)
console.log(newBook2.info())
newBook2.addBookToLibrary();

const newBook3 = new Book("MHA", "Kohei Horikoshi", "370", false)
console.log(newBook3.info())
newBook3.addBookToLibrary();