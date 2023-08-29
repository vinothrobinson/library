let myLibrary = []
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

// Takes the user input and creates a book and adds it to the library
function addBookToLibrary() {
    const form = document.querySelector("#new-book-form");
    form.style.display = "none";
    isHidden = true;
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
    form.reset(); // Clears the form contents
    let newBook = new Book(title, author, pages, read);
    console.log(newBook)
    myLibrary = getLibrary()
    myLibrary.push(newBook);
    storeLists(myLibrary);
    displayLibrary();
}

function displayLibrary() {
    myLibrary = getLists()
    console.log(myLibrary)
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
    storeLists(myLibrary)
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

// This function stores the contents of the library to localStorage
function storeLists(myLibrary) {
    let library = JSON.stringify(myLibrary);
    localStorage.setItem("library", library);
}

// This function retrieves the contents of the library from localStorage
function getLists() {
    let libraryString = localStorage.getItem("library");
    myLibrary = getLibrary();
    myLibrary = JSON.parse(libraryString);
    return myLibrary;
}

function getLibrary() {
    return myLibrary
}


// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

  /*
if (document.cookie.indexOf('mycookie')!==1) {
    // The cookie doesn't exist. Create it now
    document.cookie = 'mycookie=1';
    // Array that stores all books
    storeLists(myLibrary);
    // console.log(myLibrary)
    displayLibrary()
}
else {
    // Not the first visit, so alert
    getLists()
    displayLibrary()
}
*/

window.onbeforeunload = function() {
    storeLists(myLibrary);
    // console.log(myLibrary)
    displayLibrary()
}

window.onload = function() {
    getLists()
    displayLibrary()
}