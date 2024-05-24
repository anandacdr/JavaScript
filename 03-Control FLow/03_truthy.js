const userEmail = "ananda@gmail.com"

// if (userEmail) {
//     console.log("Email Received.")
// }
// else {
//     console.log("Not Received Email.")
// }


// **** Falsy Values : 
// false, 0, -0, BigInt 0n, "" , null, undefined, NaN => Falsy Values

// **** Truthy Values : 
// true, "0", "false", ' ', [], {}, fuction(){} => Truthy

// if (userEmail.length === 0) {
//     console.log("Array is Empty")

// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty")
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 34 ?? 10
// val1 = null ?? 233
// val1 = undefined ?? 99

val1 = null ?? undefined ?? 345

// console.log(val1)




// ***** TERNINARY OPERATOR

// condition ? true : false

const icecreamPrice = 80

icecreamPrice < 60 ? console.log("Less than 60") : console.log("More than 60")

