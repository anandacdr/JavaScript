class users {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email (){
        return `${this._email}`.toUpperCase()
    }
    set email (value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Ananda@123`
    }

    set password(notExist){
        this._password = notExist.toUpperCase()
    }
}





const ananda = new users ("ananda@google.ai", "acs123@#")
console.log(ananda.email)
console.log(ananda.password)