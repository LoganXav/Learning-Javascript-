// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
      return `${this.title} was written by 
      ${this.author} in ${this.year}`; 
    };
}
// we have this constructor and can now create books from the constructor
const book1 = new Book('Book One' , 'John Doe' , '2013'); // Instatiate an object: different instances that use the same constructor
const book2 = new Book('Book Two' , 'Jane Doe' , '2016');

 console.log(book1.getSummary);