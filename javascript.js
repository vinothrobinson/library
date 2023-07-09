// Array that stores all books
let myLibrary = [];

// Constructor for Books
class Book
{
    constructor(title, author, pages, read) {
        this.title = title;
	    this.author = author;
	    this.pages = pages;
	    this.read = read;
    }
}
/*
function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
*/

// Takes the user input and creates a book and adds it to the library
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = true;
    if (document.querySelector("#read").checked) {
        read = true;
    }
    else {
        read = false;
    }
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary()
}

function displayLibrary() {
    const shelf = document.querySelector(".book-display")
    shelf.replaceChildren();
    for (let i = 0; i < myLibrary.length; i++) {
        // Overall container for book information
        const book = document.createElement('div');
        book.classList.add("book");
        book.style.backgroundColor = "#d6d3d1"
        // Adding the elements of the book to the book element
        book.innerHTML = `
            <button class="remove" onclick="removeBook(${i})">-</button>
            <div class="title">${myLibrary[i].title}</div>
            <div class="author">${myLibrary[i].author}</div>
            <div class="pages">${myLibrary[i].pages} pages</div>
            <button class="read" onclick="toggleReadStatus(${i})">${myLibrary[i].read ? "Read" : "Not Read"}</button>
        `
        shelf.appendChild(book);
    }
}

function toggleReadStatus(index) {
    let readDiv = myLibrary[index];
    if (readDiv.read) {
        readDiv.read = false;
        // readDiv.style.backgroundColor = "#ef4444"
    }
    else {
        readDiv.read = true;
        // readDiv.style.backgroundColor = "#22c55e"
    }
    displayLibrary();
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    displayLibrary()
}

const newBookBtn = document.querySelector("#new-book-btn");
let isHidden = true;
newBookBtn.addEventListener("click", function() {
    if (isHidden) {
        const newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "flex";
        isHidden = false;
    }
    else {
        const newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "none";
        isHidden = true;
    }
})

// This allows for the user inputted information to be sent from the form and to the library
document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})

// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

