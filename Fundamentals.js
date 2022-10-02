console.log('hello');

//alert('hello this is segun');

var b = 'smoothie'
console.log(b);

// manipulate DOM with Javascript
/*...It's just a fancy way of saying change HTML with Javascript*/


//var age = prompt('What is your age?');

//document.getElementById('someText').innerHTML = age;
var num1 = 5.7;

console.log(num1 / 2);

//this also works as increments
num1 +=10;
console.log (num1);

/*Functions
1. Create a Function
2. Call the functon
*/

function fun(){
console.log('this is a function');

}

//call
fun();

/*Lets create a function that takes in a name 
and says hello followed by your name

For Example
Name: "Segun"
Return: "Hello Segun"
*/
/*
function greeting(yourName) {
var result = 'Hello'+ ' '  + yourName;  //String Concatenation the ' ' worked like a spacebar
console.log(result);
}*/
// var name = prompt('What is your name?');
 // greeting(name);

// How do arguments work in functions?
// How do we add two numbers together in a function?
/*
function sumNumbers(num1, num2){
var result= num1 + num2;
console.log (result);
}

sumNumbers(10, 10);*/

// While loops
/*
var num = 0
while(num < 5); {
num += 1;
console.log(num);
}
*/

//For loop
/*
for (let num = 0; num <= 10; num++); {
     console.log(num);

} 
*/
//Data Types
let yourAge = 18;// number
let yourName = 'Bob';// string
let name = {first: 'Jane', last: 'Doe'};// object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                    // undefined
let nothing = null;                            // value null

//Strings in Javascript (common methods)
let fruit = 'banana, apple, orange, pineapples';
let moreFruits = 'banana\napple';             //new line (\n)

console.log(fruit.length);                    //how many characters
console.log(fruit.indexOf('na'));   //how many characters can be found
console.log(fruit.slice(2, 4));      // slice a word into chracters
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit.split(','));            //split by a comma

//Arrays
let fruits = ['banana','apple', 'orange', 'pineapple'];
fruits = new Array('banana','apple', 'orange', 'pineapple'); //same array but with parenthesis

console.log(fruits[2]);  //access value at index 3rd [0,1,2,3...]

fruits[0] = 'pear'
console.log(fruits);

for (let i = 0; i < fruits.length; i++){    // for loop
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('*'));       //turns an array into a string and seperates with '*'
console.log(fruits.pop(), fruits);   // removes last item
console.log(fruits.push('blackberries'), fruits); // appends
fruits[fruits.length] = 'new fruits';  //same as push
console.log (fruits);
fruits.shift();    //removes first item from an array
console.log(fruits);
fruits.unshift('kiwi');    //adds first item to an array
console.log(fruits);

let vegetables = ['asparagus','tomoto', 'broccoli'];
let allGroceries = fruits.concat(vegetables);   //combine arrays
console.log(allGroceries)
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());     //sort an array

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function (a, b) {return a-b}));  //sorted in ascending order
console.log(someNumbers.sort(function (a, b) {return b-a}));   //descending

// for loops in an array
let emptyArray = new Array()
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
    
}
console.log(emptyArray);

let list = new Array()
for (let i = 0; i < 3; i++ ){
 //list [i]= prompt('Add something to array', "oya type");
}
//console.log(list[0] + list[1]+ list[2]);

//Objects in Javascript

function person(name, age){
    this.name = name; this.age = age;
  }
  var bucky = new person ("Bucky", 24);
  var taylor = new person ("Taylor", 22);
  console.log(taylor.age);

// Adding Methods to Objects
function people (name, age){            //all these people have 2 properties
    this.name = name;             //setting the objects name to whatever we pass it for name
    this.age = age;              //setting the objects age to whatever we pass it for age
    this.yearsUntilRetire = yearsLeft;    //you'll set it to the name of a function. don;t use parens
}
function yearsLeft(){
    var numYears = 65 - this.age;
    return numYears                       //whenever you calculate something, return gives it back
}
   var natalie = new people ("Natalie Portman", 28);   // making an object called natalie and set it equal to a new object from the perople bluebrint
   console.log (natalie.yearsUntilRetire());            //Don't forget to use the parens here



// Object initializers
let student = {
first: 'Logan',
last: 'Xavier', 
age: 22,
height: 6,
studentInfo: function(){
return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student.first);
console.log(student.last);
//student.first = 'notLogan';   // Change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 is my target demographic

let age = 45;
if((age >= 18) && (age <= 25)) {
    status = 'target demo'
    console.log(status);
    } else {
        status = 'not my audience'
    }
  
     //Switch Statements
    // differentiate between weekday vs weekend
    /*day-0 Sunday--> weekend
    day-1 Monday--> weekday
    day-2 Tuesday--> weekday
    day-3 Wednesday--> weekday
    day-4 Thursday--> weekday
    day-5 Friday--> weekend
    day-6 Saturday--> weekend*/
    switch (3) {
        case 0:
            text = 'weekend';
            break;
        case 5:
            text = 'weekend';
            break;
        case 6:
            text = 'weekend';
            break;
        default:
            text = 'weekday';
    }
      console.log(text);


      //Math Objects in Javascript
      console.log(Math.PI);    //value of pie

      //let n = prompt ('Enter a number' + "");
      //let answer = Math.sqrt (n);
      //alert ('The square root of' + ' ' + n + ' ' + "is"  + ' ' + 'answer' );


       //Date Objects
      /*function printTime () {
      let now = new Date();       
      let hours = now.getHours();    //saves hours in now
      let mins = now.getMinutes();     //saves minutes in now
      let seconds = now.getSeconds();    //saves seconds in now
      console.log(hours+':'+mins+':'+seconds+'</br>');    //prints the date

      }
      setInterval('printTime()', 1000);    //every 1000ms it called the function printTime
      */

     /*let alertMessage = function(message) {
        alert("The message is:" + message);
        }
    for(let i = 0; i < 10; i++){
        alertMessage("Iteration #:" + i);
    }
    */
    /*
    var num1 = prompt('Enter a number here');
    var num2 = prompt('Enter another number here');

    num1 = parseInt(num1);   //without this the numbers act like strings. Use parseFloat for decimals
    num2 = parseInt(num2);
    
    var num3 = num1 + num2;
    console.log(num3);
    */


    //Accessing HTML Elements
/*  const head = document.querySelector('#header');    
    header.innerHTML = "Logan's incredible new H1";     //I used this to replace the h1 in the html
    header.style.color = "red";               //you can modify the style
    header.style.backgroundColor = "black";
    console.log(header.innerHTML);

    //stuff with links
    const link = document.querySelector('a');
    link.setAttribute ('href', 'http://www.cartoonnetwork.com');    //the advantage of setAttribute is it creates the attribute even if it doesn't exixt in your HTML

    //another way of doing the same thing
    const link = document.getElementById('link');
    link.href = 'http://google.com';
*/
    //Event Listeners
   /* function handleClick(){
        alert('you clicked');   //this is used when an onClick='handleClick()' has been placed in the HTML
    }*/

   /* function handleClick(element){
        element.innerHTML='Clicked';  //this changes the text on the HTML button by passing it a new text onClick='handleClick(this)'
    }*/

    

   
    