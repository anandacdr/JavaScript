const arr = [0, 23, 2, 4, 5, 6, 7, 44];
const hero = ["Pikachu", "Groot"];
const arr2 = new Array(1, 3, 5, 6, 9);

// Methods of Array

// Adding elements to the end of the array
arr.push(34);
// console.log(arr); // Outputs: [0, 23, 2, 4, 5, 6, 7, 44, 34]

// Adding another element to the end of the array
arr.push(453);
// console.log(arr); // Outputs: [0, 23, 2, 4, 5, 6, 7, 44, 34, 453]

// Removing the last element from the array
arr.pop();
// console.log(arr); // Outputs: [0, 23, 2, 4, 5, 6, 7, 44, 34]

// Adding elements to the beginning of the array
arr.unshift(8);
// console.log(arr); // Outputs: [8, 0, 23, 2, 4, 5, 6, 7, 44, 34]

// Removing the first element from the array
arr.shift();
// console.log(arr); // Outputs: [0, 23, 2, 4, 5, 6, 7, 44, 34]

// Checking if the array includes a specific value
// console.log(arr.includes(8)); // Outputs: false
// console.log(arr.includes(2)); // Outputs: true

// Finding the index of a specific value in the array
// console.log(arr.indexOf(2)); // Outputs: 2

// Converting the array to a string
const newArr2 = arr.join();
// console.log(newArr2); // Outputs: "0,23,2,4,5,6,7,44,34"

// Slice, Splice

// Creating a new array by extracting a portion of an existing array
const myNew = arr2.slice(1, 4);
// console.log(myNew); // Outputs: [3, 5, 6]

// PART 2 - Arrays

const HinduHeros = ["Hanuman", "RAM", "Krishna", "Bishnu"];
const marvelHeros = ["Ironman", "Thor", "Spiderman"];

// Merging two arrays
const allHeros = HinduHeros.concat(marvelHeros);
// console.log(allHeros); // Outputs: ["Hanuman", "RAM", "Krishna", "Bishnu", "Ironman", "Thor", "Spiderman"]

// Using spread operator to merge arrays
const allNewHeros = [...HinduHeros, ...marvelHeros];
// console.log(allNewHeros); // Outputs: ["Hanuman", "RAM", "Krishna", "Bishnu", "Ironman", "Thor", "Spiderman"]

// Flattening a nested array
const anotherArray = [1, 2, 4, [5, 6, 7], 8, 9, [34, 54, 66, 98, [99, 88]]];
const realArray = anotherArray.flat(Infinity);
// console.log(realArray); // Outputs: [1, 2, 4, 5, 6, 7, 8, 9, 34, 54, 66, 98, 99, 88]

// Checking if a value is an array
// console.log(Array.isArray("ANANDA")); // Outputs: false
// console.log(Array.isArray(arr)); // Outputs: true

// Creating an array from a string
// console.log(Array.from("ANANDA")); // Outputs: ["A", "N", "A", "N", "D", "A"]

// Creating an array from an object
// console.log(Array.from({ myName: "Ananda" })); // Outputs: []

// Creating an array with a variable number of arguments
let score1 = 99;
let score2 = 999;
let score3 = 9999;
console.log(Array.of(score1, score2, score3)); // Outputs: [99, 999, 9999]
