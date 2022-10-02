// INHERITANCE
// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
// Prototypes
// getSummary
// storing our functions in the prototype helps us prevent every object...
// ...instatiated with the constructor from having the same functions()
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
    ${this.author} in ${this.year}`; 
};
// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);  // calls the methods belonging to the Book object 

    this.month = month;
}


// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instatiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');


console.log(mag1.getSummary());  