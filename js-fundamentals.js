// this worksheet was generated from the 'Javascript Language Fundamentals' section of Brad Traversy's Modern Javascript Udemy course

// Variables **********************************************************************

// name 3 keywords for initializing and declaring a variable?

// which 2 JS variable keywords are block scoped?

// declare a variable but don't initialize a value.

// assign the initialized variable a value.

// which type of JS variable must be both declared and initialized at the same time?

// JS variables can contain what?

// JS variables connot start with what?

// Multi-word-vars. Give an example of Comel case, Underscore, and Pascal case.  which should you in JS?

// when using const in JS, are mutatable data structures such as arrays and abjects, still mutatable?

// Data-Types ************************************************************************

// Name the six primitive data types in JS

// (true or false) Null is an intentional empty value?

// (true or false) Undefined is variable that has not been assigned a value?

// (true or false) arrays, Object Literals, Functions, and Dates are considered Reference Data Types?

// what can be used to find out a variable's type?

// Type conversion *******************************************************************

// Use the String function to convert a number, boolean, date, and an array to a string

// Use the toString method to convert a number to a string

// Use the Number function to convert a string-number, both booleans, and a word string to a number

// (true or false) NaN is a value that means not a number?

// (true or false) NaN is what is output when a value can't be converted to a number?

// besides the Number() function, show 2 more ways to convert to a number, using the functions parseInt() and parseFloat()

// (true or false) the toFixed method can be used to add decimal places to a number?

// Type coersion *******************************************************************

// (true or false) type coersion is when JS automatically does type conversion on a value. this can be unwanted, so you need to be alert to this possibility when coding?

// The Math Object *****************************************************************

// use the following methods on the Math object to generate results.

// Math.round()
// Math.ceil()
// Math.floor()
// Math.sqrt()
// Math.abs()
// Math.pow()
// Math.min()
// Math.max()
// Math.random()

// String methods & Concatenation ******************************************************

// give an example of string concatenation

// append 2 string variables using the += (addition assignment operator) which means x = x + y

// give an example of escaping characters

// use the following methods and properties on strings

// length
// concat()
// toUpperCase()
// toLowerCase()
// get character using []
// indexOf()
// lastIndexof()  (this comes from the end of the string)
// charAt()
// Get last character of a string by using charAt(string.length -1)
// substring(0, 4)
// slice(0, 4)  slice works with strings and arrays... with slice you can use negative numbers and it will begin at the back of the string or array
// split() split will turn the string into an array. you can split on any character including spaces.
// replace()
// includes()  check if the string or char exists inside of a string. returns true or false

// Template Literals *****************************************************************

// take the following data and input it as an unordered list in html (do this using string concatenation and template literals)

// name: John
// age: 30
// job: Web Developer
// city: Miami

// output an expression using template literals
// output an function using template literals
// output conditional or 'if statement' using template literals. You must use ternary operator syntax or wrap the 'if statement in a called anonymous function

// ex. ternary-operator: `${age > 30 ? 'Over 30' : 'Under 30'}

// ex. invoked anon function if-statement:
// const age = 30
// let html = `<div>
//     ${
//       (age => {
//         if(age > 30) {
//           return 'Over 30'
//         } else {
//           return 'Under 30'
//         }
//       })()
//     }
//   </div>`
// document.body.innerHTML = html

// Arrays and Array Methods *************************************************************

/* ~~~~~~~~~~~~ examples
ex. const numbers = [43,56,13,81,61]
ex. const numbers2 = new Array(22,45,33,17,12)
ex. numbers.length
ex. Array.isArray(numbers)
ex. numbers[3]
ex. numbers[2] = 100
ex numbers.indexOf(61)
ex. numbers.push(250)
ex. numbers.unshift(120)
ex. numbers.pop()
ex. numbers.shift()
ex. numbers.splice(1,1)
ex. numbers.reverse()
ex. numbers.concat(numbers2)
ex. fruit.sort()
ex. numbers.sort()
ex. numbers.sort(function (x, y){
  return x - y
})
ex. numbers.sort(function (x, y){
  return y - x
})
ex. finds the 1st number under 50
function under50(num) {
  return num < 50
}
numbers.find(under50)
ex. finds the 1st number over 50
function overr50(num) {
  return num > 50
}
numbers.find(over50)
~~~~~~~~~~~~~~~~~~~~~~~~~ */

// create an array using an array literal:

// create an array using an array constructor:

// Create some arrays with numbers, strings, mixed data types:

// Get array length:

// Check if is array:

// Get single value:

// Insert into array:

// Find index of value:

// ------MUTATING ARRAYS----------

// Add onto to end:

// Add onto the front:

// Take off from end:

// Take off from front:

// Splice values:

// Reverse:

// Concatenate array:

// ------Sorting arrays------

// string array, sorts by alpha:

// num array, sorts by first number:

// use the "compare function" for least to greatest:

// use the "compare function" for least to greatest:

// Find: find the 1st number under 50

// Find: find the 1st number over 50

// Object Literals *****************************************************************

// Create an object literal containing the following property-types: string, number, array, abject, function

// Get a specific value from each property using dot-notation. give an example of bracket-notation:

// Create a method on the object that uses the this keyword:

// Create an array of object literals:

// Dates and Times ******************************************************************

// If Statements and Comparison operators *******************************************

// Create example if, if/else, and else if statements with the following...
// Equal To: ==
// Not Equal To: !=
// Equal to value and Type: ===
// Not Equal to value and Type: !==
// Check to see if variable undefined: typeof varName !== 'undefined'
// Greater or Less than:

// Else if:

// Logical Operators:
// AND &&
// OR ||

// Shorthand:
// TERNARY OPERATOR: ? (if), : (else)

// if/else Without Braces:

// Switch Statements ******************************************************************

// Create a switch statement with several cases:

// Functions, function Declarations and function Expressions **************************

// Function Declarations example:

// function with parameters & multiple parameters:

// default values for parameters example:

// function expression example:

// named function expression:

// Immediately Invoked Function Expressions - IIFEs:

// IIFE with params:

// TRUE or False, in modules, IIFEs can provide private methods and properties, by keeping everything scoped to that module?

// Property Methods... Create a method within an object:

// Create a method on an object from outside the object:

// General Loops ************************************************************************

// create a general for loop:

// for loop with a condition inside that uses the continue keyword:

// for loop with a condition inside that uses the break keyword:

// create a while loop:

// true or false, a do-while loop will run it's first iteration regardless of the conditional?

// create a do while loop:

// use a for loop to iterate through an array: hint: array.length

// use forEach() to loop through an array:

// use forEach() to loop through an array, using the index & array keywork as a parameter in the callback:

// use map() to loop through an existing array of objects, and create an new array from one of the properties of that object:

// create a for in loop on an object literal (print out both the key and value):
