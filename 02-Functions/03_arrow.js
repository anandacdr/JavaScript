const user = {
    username : "Ananda",
    price: 999,


    welcomeMsg: function (){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMsg()

// user.username = "Pikachu"
// user.welcomeMsg()


// console.log(this)


function one() {
    let username = "Ananda"
    console.log(this.username)

}
// one()




// More,
const two = () => {
    let username = "Ananda"
    console.log(this)
    console.log(this.username)
}
// two()


// Arrow Function

// const arrowFunction = (n1, n2) => {
//     return n1 + n2
// }
// console.log(arrowFunction(34,6))

// Implicit Return
const implicitReturn = (n1, n2) => (n1 + n2)
// console.log(implicitReturn(34,6))

const returnObject = (obj,ob2) => ({username: "Ananda"})

console.log(returnObject)


