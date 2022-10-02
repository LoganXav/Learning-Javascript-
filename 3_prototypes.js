// PROTOTYPES
// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
// prototypes
// Get Summary
// storing our functions in the prototype helps us prevent every object...
// ...instatiated with the constructor from having the same functions()
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
    ${this.author} in ${this.year}`; 
  };

// Get Age
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old `;
};

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// we have this constructor and can now create books from the constructor
// Instatiate an object: different instances that use the same constructor
const book1 = new Book('Book One' , 'John Doe' , '2013'); 
const book2 = new Book('Book Two' , 'Jane Doe' , '2016');

console.log(book2.getSummary());
console.log(book2);
console.log(book2.getAge());
book2.revise('2018');
console.log(book2);