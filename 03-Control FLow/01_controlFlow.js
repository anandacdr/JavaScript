// If Statement

const isUserLoggedIn = true
const tempr = 35

// if (isUserLoggedIn) {
//     console.log("Logged In.")
// }

// if (23 != "22"){
//     console.log("Executed.")
// }


// if (tempr <= 30){
//     console.log("Temperature is less than or equal to 30")
// } 
// else {
//     console.log("Temperature is greater than 30")
 
// }


const score = 200

// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);


const isUserLoggedInCheck = true
const debitCard = true

if (isUserLoggedInCheck && debitCard == true) {
    console.log("Allow to buy course")
}

if (isUserLoggedInCheck || debitCard == true) {
    console.log("Allow to buy course")
}