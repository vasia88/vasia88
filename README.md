// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;




// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
 firstLetterOfLastName = lastName[0]; // Change this line


// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line



// Only change code below this line
const myArray = [[myArray]];

const myArray = [50, 60, 70];
var myData = myArray[0];


const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);


// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this l
const removedFromMyArray = myArray.pop([1]);


// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

const myList = [["Milk", 3], ["Candy", 13], ["Chicken", 2], ["Mango", 5], ["Orange", 7]];

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);



function myLocalScope() {
  // Only change code below this line
const myVar = 'inside myLocalScope';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log(myVar);
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line

let a = 5;
let b = 1;
a++;
// Only change code below this line

let sumAB = a + 1;
console.log(a);


let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
