class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
// Get Summary
    getSummary() {
        return `${this.title} was written by 
    ${this.author} in ${this.year}`; 
    }
// Get Age
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old `;
    }
// Revise
    revise(newYear) {
    this.year = newYear;
    this.revised = true;        
    }

    static topBookStore() {     // you don't have to instantiate
        return 'Barnes & Noble';
        console.log('a');
    }
}


// Instatiate Object
const book1 = new Book('Book One', 'John Doe', '2013');

/* console.log(book1);
book1.revise('2018');
console.log(book1);
 */

console.log(Book.topBookStore());