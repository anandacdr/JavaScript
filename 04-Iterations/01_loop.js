// for Loop

// for (let a = 1; a <= 10; a++) {
//     const element = a;
//     if (element == 5) {
//         console.log("5 is the best number")
//     }
//     console.log(element)
// }



// for (let a = 1; a <= 10; a++) {
//     console.log(`Multiplication Table ${a}`)
//     for (let b = 1; b <= 10; b++){
        // console.log(`Inner Loop ${b} and, inner ${a}`);
        // console.log(a + 'X' + b + ' = ' + a*b)
//         console.log(`${a} X ${b} = ${a*b}`);
//     }
    
// }



// let arr = ["Groot", "Pikachu", "Rocket"]
// console.log(arr.length)

// for (let index = 0; index < arr.length; index++){
//     const element = arr[index]
//     console.log(element)
// }



// Break and Continue

// for (let index = 1; index < 20; index++){
//     if (index == 5){
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`Value : ${index}`);
// }


for (let index = 1; index < 20; index++){
    if (index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value : ${index}`);
}
