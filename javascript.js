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
    console.log(myLibrary)
    const shelf = document.querySelector(".book-display")
    shelf.replaceChildren();
    for (let i = 0; i < myLibrary.length; i++) {
        // Overall container for book information
        const book = document.createElement('div');
        book.classList.add("book");
        book.style.backgroundColor = "#d6d3d1"
        // Individual divs for each section of a book
        // Adds the book title to the display
        const title = document.createElement('div')
        title.classList.add("title");
        title.innerHTML = myLibrary[i].title
        // Adds the book's author to the display
        const author = document.createElement('div')
        author.classList.add("author");
        author.innerHTML = myLibrary[i].author
        // Adds the number of pages in the book to the display
        const pages = document.createElement('div')
        pages.classList.add("pages");
        pages.innerHTML = `${myLibrary[i].pages} pages`
        // Adds a Read / Not Read button to the display
        const read = document.createElement('button');
        read.classList.add("read")
        if (myLibrary[i].read) {
            read.innerHTML = "Read"
            read.style.backgroundColor = "#22c55e"
        }
        if (!myLibrary[i].read) {
            read.innerHTML = "Not Read"
            read.style.backgroundColor = "#ef4444"
        }
        read.addEventListener("click", toggleReadStatus)
        // Adds a button to remove a book from the library
        const remove = document.createElement('button');
        remove.classList.add("remove");
        remove.style.backgroundColor = "#3b82f6"
        remove.innerHTML = "-"
        remove.addEventListener("click", removeBook)
        // Adding the individual divs to the book container
        book.appendChild(remove);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        // Append the book to the library
        shelf.appendChild(book);
    }
}

function toggleReadStatus() {
    let readDiv = document.querySelector(".read");
    if (this.innerHTML === "Read") {
        readDiv.innerHTML = "Not Read"
        readDiv.style.backgroundColor = "#ef4444"
    }
    else {
        readDiv.innerHTML = "Read"
        readDiv.style.backgroundColor = "#22c55e"
    }
}

function removeBook() {
    let bookTitle = document.querySelector(".title").innerHTML
    console.log(bookTitle)
    for (let i = 0; i < myLibrary.length; i++) {
        if (bookTitle === myLibrary[i].title) {
            myLibrary.splice(i, 1);
            break;
        }
    }
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

