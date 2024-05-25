const arr = [1,3,4,5,6,7,8,56]

// for (const num of arr) {
//  console.log(num)   
// }

// let heros = ["Pikachu", "Doremon", "Groot", "Bheem"];

// for (const cartoons of heros) {
//  console.log(heros)   
// }



// Maps

const newMap = new Map()
newMap.set('NP', 'Nepal')
newMap.set('USA', 'USA')
newMap.set('De', 'Germany')

console.log(newMap)


for (const [key, Value] of newMap) {
    console.log(key, ':', Value)
}


// On Object

// const myObj = {
//     'Field': 'AI',
//     'Field2': "ML"
// }

// for (const [key, value] of myObj){
//     console.log(key, ':', vlaue)
// }

// ********* Object is not iterable :()