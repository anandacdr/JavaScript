// ES6
// Basic Constructor
class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encrptPassword() {
    return `${this.password}sandy`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const sandybox = new user("Pikachu", "pikachu@google.com", "12345");

console.log(sandybox.encrptPassword());

console.log(sandybox.changeUsername());

// Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}


user.prototype.encrptPassword = function (){
    return `${this.password}hero`
}
user.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

console.log(sandybox.encrptPassword());
console.log(sandybox.changeUsername());