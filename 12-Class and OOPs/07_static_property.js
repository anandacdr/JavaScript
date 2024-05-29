class user {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username: ${this.username}`)

    }
    static createId(){
        return `234`
    }
}

// 
const ananda = new user ("Ananda")
// console.log(ananda.createId())

class Teacher extends user {
    constructor (username, email){
        super (username)
        this.email = email


    }
}

const linux = new Teacher ("Linux", "linux@linux.com")
// linux.logMe()

console.log(linux.createId())