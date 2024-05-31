function user (email, password){
    this._email = email;
    this._password = password;


    //
    Object.defineProperty(this, 'email', {
        get: function (){
            return this._email.toUpperCase()
        },
        set: function (value){
            this.email = value
        }
    })


    Object.defineProperty(this, 'password', {
        get: function (){
            return this.password.toUpperCase()
        },
        set: function (value){
            this.password = value
        }
    })
}




const coffee = new user ("pika@google.com", "@123pika")

console.log(coffee)