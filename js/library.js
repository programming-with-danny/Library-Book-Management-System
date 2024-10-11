// You are tasked with creating a library management system that allows users to add, search for, 
// and borrow books. The system should store information about books and manage their availability.

// Requirements:

// Book Data:
// Store each book’s information (title, author, availability) in an array of objects. 
// Each object should contain title (a string), author (a string), and 
// isAvailable (a boolean indicating if the book is available).

// Functionalities to Implement:

// Add a book:
// Create a function addBook that takes the title and author as input and adds the book to the array. 
// The isAvailable status should be set to true initially.

// Search for a book:
// Create a function searchBook that takes the title of the book as input, 
// converts the input to lowercase, and checks if the book exists in the 
// array (ignore case sensitivity). If the book exists, display its title, author, 
// and availability status. If not, display a message saying the book is not found.

// Borrow a book:
// Create a function borrowBook that takes the title of a book as input. 
// If the book is available (isAvailable: true), change its status to false and 
// display a message that the book has been borrowed. If it’s already borrowed, 
// display a message that the book is not available.

// Display available books:
// Create a function listAvailableBooks that lists all books that are 
// available to borrow (i.e., isAvailable: true).


// Book Data:
// Store each book’s information (title, author, availability) in an array of objects. 
// Each object should contain title (a string), author (a string), and 
// isAvailable (a boolean indicating if the book is available).
let books = [
    {
        bookName: 'Things Fall Apart',
        author: 'Chinua Achebe',
        isAvailable: true,
    },
    {
        bookName: 'Arrow of God',
        author: 'Chinua Achebe',
        isAvailable: true,
    },
    {
        bookName: 'The Famished Road',
        author: 'Ben Okri',
        isAvailable: false,
    },
    {
        bookName: 'Lagoon',
        author: 'Nawa Ali Ahmed',
        isAvailable: true,
    },
    {
        bookName: 'Purple Hibiscus',
        author: 'Chimamanda Ngozi Adichie',
        isAvailable: false,
    },
    {
        bookName: 'Half of a Yellow Sun',
        author: 'Chimamanda Ngozi Adichie',
        isAvailable: true,
    },
    {
        bookName: 'Every Day Is for the Thief',
        author: 'Teju Cole',
        isAvailable: true,
    },
    {
        bookName: 'The Secret Lives of Baba Segi’s Wives',
        author: 'Lola Shoneyin',
        isAvailable: true,
    },
    {
        bookName: 'The Carnivorous City',
        author: 'Teju Cole',
        isAvailable: true,
    },
    {
        bookName: 'Lightseekers',
        author: 'Femi Fadugba',
        isAvailable: true,
    }
]

// Add a book:
// Create a function addBook that takes the title and author as input and adds the book to the array. 
// The isAvailable status should be set to true initially.

function addBook(bookName,author){
    let newBook = {bookName, author, isAvailable: true};
    books.push(newBook)
    return 'new book added successfully'
}
console.log(addBook('Americanah','Chimamanda Ngozi Adichie'));
console.log(books);

// Search for a book:
// Create a function searchBook that takes the title of the book as input, 
// converts the input to lowercase, and checks if the book exists in the 
// array (ignore case sensitivity). If the book exists, display its title, author, 
// and availability status. If not, display a message saying the book is not found.

function searchBook(title){
    let bookSearch = books.find((book) => title.toLowerCase() == book.bookName.toLowerCase());
    if (bookSearch) {
        return `Book: ${title} by ${bookSearch.author} is available`
    }
    return `Book: ${title} is not available`
}
console.log(searchBook('Half of a Yellow Sun'));
console.log(searchBook('The Carnivorous City'));
console.log(searchBook('The Carnivorous'));


// Borrow a book:
// Create a function borrowBook that takes the title of a book as input. 
// If the book is available (isAvailable: true), change its status to false and 
// display a message that the book has been borrowed. If it’s already borrowed, 
// display a message that the book is not available.

function borrowBook(title){
    let book = books.find((found)=> found.bookName.toLowerCase() == title.toLowerCase());
    if (book.isAvailable == true) {
        book.isAvailable = false;
        return `the Book ${title} by ${book.author} has been borrowed successfully`
    }
    return `The Book ${title} is not available, probably already borrowed or not in the library`
}

console.log(borrowBook('Americanah'));
console.log(borrowBook('Every Day Is for the Thief'));
console.log(borrowBook('Every Day Is for the Thief'));

// console.log(books);

// Display available books:
// Create a function listAvailableBooks that lists all books that are 
// available to borrow (i.e., isAvailable: true).

function listAvailableBooks() {
    let availableBooks = books.filter(book => book.isAvailable);
    let foundBook = '';
    if (availableBooks.length > 0) {
        availableBooks.forEach((m)=>{
           foundBook += `<ul>
            <li>Title: ${m.bookName} |  Author: ${m.author} </li>
            </ul>`;
            
        })
        document.getElementById('display-book').innerHTML = foundBook;
    }
}