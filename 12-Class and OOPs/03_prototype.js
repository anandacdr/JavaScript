let meroName = "Ananda                   Chaudhary"


// console.log(meroName.length)

// console.log(meroName.trim().length) // Not Recommend to write

// console.log(meroName.trueLength)


let myHeros = ["Pikachu", "Doremon", "Bheem"]

let herosPower = {
    Pikachu: "Eletricity",
    Doremon: "Gadgets",
    Bheem: "Strong bcz of Laddu",



    getPikachuPower: function(){
        console.log(`Pikachu Power is ${this.Pikachu}`)
    }
}

Object.prototype.ananda = function (){
    console.log(`Ananda is present in all objects`)

}


Array.prototype.heyAnanda = function() {
    console.log(`Hey, Ananda :)`)
}

// herosPower.ananda()


// myHeros.ananda()

// myHeros.heyAnanda()
// herosPower.heyAnanda()


// Inheritance 

const user = {
    name: "Ananda",
    email: "ananda@gmail.com"
}
const Teacher = {
    makeVide: true

}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssisgnment: "Python Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user


// MODERN Syntax

Object.setPrototypeOf(teachingSupport, Teacher)


let anotherUsername = "Pikachu           "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True lenght is: ${this.trim().length}`)

}


anotherUsername.trueLength()

"Ananda".trueLength()
"Groot".trueLength()