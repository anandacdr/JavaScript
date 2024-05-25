const nums = [23,32,5,6,87,4,2,34,5,6,7,8,9,34]


const newNums = nums.map ( (n) => {return n + 10})

// console.log(newNums)



/// CHAINING

const nNums = nums.map( (num) => {return num*10}).map( (num) => {return num+1}).filter( (num) => {return num >= 100})

console.log(nNums)