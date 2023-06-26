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
}

/*
const newBook = new Book("JJK", "Gege Akutami", "360", true)
console.log(newBook.info())
*/