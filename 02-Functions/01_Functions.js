// console.log("A")
// console.log("N")
// console.log("A")
// console.log("N")
// console.log("D")



function SayMyName() {
    console.log("A")
    console.log("N")
    console.log("A")
    console.log("N")
    console.log("D")
    console.log("A")
}

// SayMyName() // Execution



// Add two numbers
// function addTwoNum(n1, n2) {
//     console.log((n1 + n2))
// }

// instead of console log, we can use.
function addTwoNum(n1, n2) {
    // let result = n1 + n2
    // return result

    return n1+n2
}


const sumResult = addTwoNum(34,6)
// addTwoNum(34,"6")
// addTwoNum(34,"A")
// addTwoNum(34, null)

// console.log("Sum:",sumResult)




function loginUserMessage(username) {
    if (!username){
        console.log("Please, Enter a username.")
        return
    }

    return `${username}, Just Logged In.`
}


// console.log(loginUserMessage("Ananda"))
// console.log(loginUserMessage())


//

// Rest Operator for, multiple values
function calculatePrice(...n1){
    return n1
}

// console.log(calculatePrice(34, 35, 65, 78))



const user = {
    username: "Ananda",
    price: 99
}

function handleObj(anyobject) {
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
}

handleObj(user)

handleObj({
    username: "Pikachu",
    price: 1000
})


const newArr = [122, 233, 344, 456, 6999]


function returnSecondVal (getArray) {
    return getArray[2]
}


console.log(returnSecondVal(newArr()))