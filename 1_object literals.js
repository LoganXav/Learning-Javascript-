/* const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');
console.log(typeof s2); */

console.log(window);
// window.alert();  // same as alert() since there's nothing above window in the dom 
/* console.log(navigator.appVersion); */

// Object Literals
 const book1 ={
    title : 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`; // you can call a function in a object
    }
}
const book2 ={
    title : 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`; // you can call a function in a object
    }
}
console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1)); 

// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// const book1 = new Book(); // Instasiate an object
// const book2 = new Book();