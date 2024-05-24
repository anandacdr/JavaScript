// const userBox = new Object() // singleton

const userBox = {} // non-singleton

// console.log(userBox)



userBox.id = "123ac"
userBox.name = "Pikachu"
userBox.isLoggedIn = false

// console.log(userBox)

const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ananda",
            lastName: "Chaudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName?.userFullName) // ? => if user fullName is not present

const obj1 = {1: "A", 2: "C"}
const obj2 = {3: "P", 4: "K"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2)  // target, source

const obj3 = {...obj1, ...obj2}



// console.log(obj3)



// Data from database

const users = [
    {
        id: 1,
        email: "user@gmail.com"
    }
]

// users[1].email



console.log(Object.keys(userBox));
console.log(Object.values(userBox));
console.log(Object.entries(userBox));


console.log(userBox.hasOwnProperty('isLoggedIn')) // Check property is available or not?    


