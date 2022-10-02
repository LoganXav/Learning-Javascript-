const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach- it's a nicer way to loop through data
// filter- helps to filter things out in an array
// map- helps to map out new arrays from a current array
// sort
// reduce

// ITERATE THROUGH COMPANIES

// standard for loop
for(let i = 0; i < companies.length; i++){
//  console.log(companies[i]);
}

// forEach
companies.forEach(function(company){
// console.log(company.name);
});

// with arrow functions (es6)
//companies.forEach(company => console.log(company.name));

// GET 21 AND OLDER

// standard for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//  if(ages[i] >= 21){
// canDrink.push(ages[i]);
//  }
// }
// console.log(canDrink);

// filter
//const canDrink = ages.filter(function(age){
// if (age >= 21){
//  return true;
//  }
//});
//console.log(canDrink);

// with arrow function (es6)
const canDrink = ages.filter(age => age >= 21);  // you don't need another line of code for return and condition
console.log(canDrink);

// FILTER RETAIL COMPANIES

const retailCompanies = companies.filter(company => company.category === 'Retail');  // companies.filter(paremeter => condition);
console.log(retailCompanies);

// COMPANIES THAT STARTED IN THE EIGHTIES

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

//COMPANIES THAT LASTED 10 YEARS OR MORE
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

// map
// Create array of comapany names

// const companyNames = companies.map(function(company){
//  return `${company.name} [${company.start} - ${company.end}]`   // note that you use grace accents ``
// });
// console.log(companyNames);

// using arrow functions
const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`   // note that you use grace accents ``
);

// some map math
const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesSquare);
console.log(agesTimesTwo);

const ageMap = ages
   .map(age => Math.sqrt(age))
   .map(age => age * 2);

console.log(ageMap);

// sort
/* const sortCompanies = companies.sort(function(a , b){
  if(a.start > b.start){
    return 1;
  } else {
    return -1
  }
});
console.log(sortCompanies); */

const sortCompanies = companies.sort((a , b) => (a.start > b.start ? 1 : -1));  // we use this cos it's a range type array
console.log(sortCompanies);       // ? (ternary operator) if the condition is true, return 1 : (else) -1
const sortAges = ages.sort((a , b) => a - b);  // simple array
console.log(sortAges);

// reduce
// standard for loop
/* let ageSum = 0;
for(i = 0; i < ages.length; i++){
  ageSum += ages [i];
}
console.log(ageSum);  */

/* const ageSum = ages.reduce(function(total, age){
  return total + age;
}, 0);
console.log(ageSum);   */

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);