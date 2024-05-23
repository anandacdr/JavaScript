// Dates in JavaScript


let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof (myDate))



let newDate = new Date(2024, 4, 23)

// console.log(newDate.toDateString())


let createdDate = new Date("2024-05-23")

// console.log(createdDate.toLocaleString())



// TimeStamp
let myTimeStamp = Date.now()

// console.log(createdDate.getTime());




// console.log(Math.floor(Date.now()/1000))


let nDate = new Date()

// console.log(nDate)
// console.log(nDate.getFullYear())




const currentDate = new Date();

// Correct usage of toLocaleString with valid options
const formattedDate = currentDate.toLocaleString('en-NP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
});

console.log(formattedDate); // Outputs: "May 22, 2024, 1:23:45 PM EDT" (example output)
