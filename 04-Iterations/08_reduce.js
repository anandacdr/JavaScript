const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (accom, currVal) {
//     console.log(`acc: ${accom} and CurrVal: ${currVal}`)
//     return accom + currVal
// }, 2)


// Write in arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 2)

// console.log(myTotal)

const shopCart = [
    {
        itemName: "Python Course",
        price: 9999
    },
    
    {
        itemName: "AI Course",
        price: 20000
    },
    {
        itemName: "ML Course",
        price: 15999
    },
    {
        itemName: "Web Development Course",
        price: 12000
    }

]

const toPay = shopCart.reduce((acc, item) => { return acc + item.price },0)

console.log(toPay)