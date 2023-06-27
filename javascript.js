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
        const title = document.createElement('div')
        title.classList.add("title");
        title.innerHTML = myLibrary[i].title
        const author = document.createElement('div')
        author.classList.add("author");
        author.innerHTML = myLibrary[i].author
        const pages = document.createElement('div')
        pages.classList.add("pages");
        pages.innerHTML = `${myLibrary[i].pages} pages`
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

        // Adding the individual divs to the book container
        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(read)
        /*
        const read = document.createElement('div')
        read.classList.add("read")
        book.innerHTML = myLibrary[i].info();
        */
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

document.querySelector("#new-book-form").addEventListener("submit", function() {
    event.preventDefault();
    addBookToLibrary();
})



// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

