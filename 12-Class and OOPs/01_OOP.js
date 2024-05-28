const user = {
    username: "Ananda",
    loginCount : 10,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user Detail from the database")


        // console.log(`username; ${this.username}`)
        // console.log(this) // He knows everything
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// ****  Constructor ***

// const promise1 = new Promise()
// const date = new Date() // constructor function


function users (username, loginCount, isLoggedIn){
    this.username = username
    // variable = parameter value

    this.loginCount = loginCount

    this.isLoggedIn = isLoggedIn

    this.greeting = function (){
        console.log(`Welcome, ${this.username}`)
    }

    // what if, we don't do return this

    return this


}

// new keyword create a empty instance i.e. object.
// second step, constructor function call, because of ney keyword
// this keyboard, <= inject all
// show


const userOne = new users ("Ananda", 10, true) 
const userTwo = new users ("Pikachu", 15, false)     


// console.log(userOne)
console.log(userOne.constructor) // reference of itself
// console.log(userTwo)


