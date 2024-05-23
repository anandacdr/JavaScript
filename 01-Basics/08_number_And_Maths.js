const score = 345;
console.log(score);  // Outputs: 345

const balance = new Number(10000);
console.log(balance);  // Outputs: [Number: 10000]

console.log(balance.toString);  // Outputs: [Function: toString]

console.log(typeof (balance.toString()));  // Outputs: string

console.log(balance.toString().length);  // Outputs: 5

const otherNumber = 34.1234;
console.log(otherNumber.toPrecision(1));  // Outputs: 3e+1 (Scientific notation for 30)

const hund = 10000000;
console.log(hund.toLocaleString('en-NP'));  // Outputs: 10,000,000 (Formatted according to 'en-NP' locale)


// ********* MATHS ********************* //

console.log(Math);  // Outputs: [Math object with various methods and properties]

console.log(Math.abs(-34));  // Outputs: 34

console.log(Math.round(4.51));  // Outputs: 5

console.log(Math.floor(4.5));  // Outputs: 4

console.log(Math.sqrt(100));  // Outputs: 10

console.log(Math.max(12, 34, 453, 65, 4, 6, 45, 64, 66, 321, 12));  // Outputs: 453

console.log(Math.random());  // Outputs: A random number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random() * 10) + 1);  // Outputs: A random number between 1 (inclusive) and 11 (exclusive)

console.log(Math.floor(Math.random() * 10) + 1);  // Outputs: A random integer between 1 and 10 (inclusive)

const min = 10;
const max = 34;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Outputs: A random integer between 10 and 34 (inclusive)
