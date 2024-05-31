const users = {
    _email: 'pika@google.com',
    _password: "acdre",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}



const ac = Object.create(users)
console.log(ac.email)