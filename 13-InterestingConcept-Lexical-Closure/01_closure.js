// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  
// function outer(){
//   let username = "Ananda"
//   console.log("Outer", secret);

//   function inner(){
//     let secret = "SecretKey321@"
//     console.log("Inner", username)
//   }

//   function innerTwo(){
//     console.log("Inner Two", username)
//     console.log(secret)
//   }
//   inner()
//   innerTwo()
// }


// outer()
// console.log("Too Outer", username)




// NextCode
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

