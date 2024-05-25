let heros = ["Pikachu", "Doremon", "Groot", "Bheem"];


// heros.forEach( function (item) {
//     console.log(item)
// })


// heros.forEach( (character) => {
//     console.log(character)
// })

// function printMe(item) {
//     console.log(item)
// }


// heros.forEach(printMe)


// heros.forEach( (item, index, arr) => {
//     console.log(item, index, arr)

// })


const coding = [
    {
        programmingName: "JavaScript",
        fileName: 'js'
    },
    {
        programmingName: "C++",
        fileName: 'cpp'
    },
    {
        programmingName: "Python",
        fileName: 'py'
    },
]

coding.forEach( (item) => {

    console.log(item.programmingName , "and Filename is", item.fileName);
})