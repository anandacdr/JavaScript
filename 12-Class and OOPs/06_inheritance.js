class user {
    constructor (username) {
        this.username = username

    }

    logMe (){
        console.log(`USERNAME is ${this.username}`)

    }
}

class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A New course is added by ${this.username}`);
    }
}



// Make a object
const pikachu = new Teacher("Pikachu", "pikachu@google.com", "12334")

pikachu.addCourse()

// Make another user
const dora = new user ("Dora")
dora.logMe()

console.log(pikachu === dora)
console.log(pikachu === Teacher)
console.log(pikachu instanceof Teacher)
console.log(pikachu instanceof user)


