const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter)

// console.log(Math.PI)

// Math.PI = 34

// console.log(Math.PI)

const myNewObj = Object.create(null);

// console.log(myNewObj)

const coffee = {
  name: "Black Coffee",
  price: 250,
  isAvailable: true,

  orderCoffee: function () {
    console.log("Code Broke");
  },
};

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"))

// Make Changes
Object.defineProperty(coffee, "name", {
//   writable: false,
  enumerable: true,
});
// console.log(Object.getOwnPropertyDescriptor(coffee, "name"))

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
