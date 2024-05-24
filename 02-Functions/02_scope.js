
// var c = 234 // Not Recommended, I am not going to use var.
let a = 456

if (true) {
    let a = 10
    const b = 23
    // var c = 45 // Not Recommended, I am not going to use var.
    // console.log("Block/Inner Scope:", a)

}

// console.log("Global Scope:", a)
// console.log(b)
// console.log(c)



// ***** NESTED SCOPE ********//

function one (){
    const username = "Ananda"

    function two (){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()




if (true) {
    const username = "Ananda"
    if (username === "Ananda") {
        const website = " Github"
        // console.log(username + website)
    }

    // console.log(website)

}


// console.log(username)


// *********** INTERESTING CONCEPTS ***************//

function addOne(num) {
    return num + 1
}
addOne(34)

// variable, to create function
const addTwo = function(num){
    return num + 2

}

// addTwo(59)
console.log(addTwo(59))