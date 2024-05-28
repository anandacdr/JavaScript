function SetUserName (username){
    // Complex DB Calls
    this.username = username
    console.log("Called, Technically !")
}

function createUser (username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password

}


const sandbox = new createUser("Sandbox", "sandbox@google.gom", "12345")

console.log(sandbox)


