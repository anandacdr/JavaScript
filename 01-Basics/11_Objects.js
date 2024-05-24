// Singleton  // Construcotr 

// Object Literals

const mySymbol = Symbol("Keys34")

const user = {
    name: "Ananda",
    "Full Name": "Ananda Chaudhary",
    [mySymbol]: "myKeys",
    age: 20,
    location: "Lalitpur",
    email: "ananda@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Saturday"]
};

// console.log(user.email) // Normal way to access values

// console.log(user["email"]) // more efficient way to access data.

// console.log(user.Full Name)  // can't access using .

// console.log(user["Full Name"]) // that's why we use this method to access

// console.log(user["mySymbol"])
// console.log( typeof (user[mySymbol]))


user.email = "anandachaudhary@google.com"
// console.log(user["email"])
// Object.freeze(user)
// user.email = "anandachaudhary@microsoft.com"
// console.log(user["email"])


// console.log(user)




// Functions


user.greeting = function() {
    // console.log("Namaste, JS Family")
};


user.greeting2 = function() {
    // console.log(`Namaste, JS Family. My Name is ${this["Full Name"]}`)
};

// console.log(user.greeting)
// console.log(user.greeting())


// console.log(user.greeting2)
// console.log(user.greeting2())