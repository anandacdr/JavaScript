function multiply(num){
    // this.num = num
    return num*5
}

// is function is also a object?
multiply.power = 2


console.log(multiply(5))

console.log(multiply.power)
console.log(multiply.prototype)

function createUser (username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++
}

createUser.prototype.printMe = function (){
    console.log(`Price is ${this.score}`)

}

const coffee = new createUser("Coffee", 100)
const tea = new createUser("Tea", 50)

// Not need to write Prototype always. just write
coffee.printMe()
tea.printMe()
