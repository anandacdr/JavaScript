programming = ["JS", "Python", "C++", "Java"];

// const values = programming.forEach( (item) =>{
// console.log(item)
// return item
// })

// console.log(values)

const num = [1, 23, 4, 55, 6, 7, 8, 39];

// const newNum = num.filter( (num) => num > 10)

// console.log(newNum)

// const newNum = num.filter( (num) =>  {
//     return num > 10
// })

// const newnums = []

// num.forEach( (myNum) => {
//     if (myNum > 10) {
//         newNums.push(myNum)
//     }
// })

// console.log(newNums)

// Let's explore

const userBooks = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: "1st",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: "1st",
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: "1st",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: 1951,
    edition: "1st",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: "1st",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "1st",
  },
  {
    title: "Moby-Dick",
    genre: "Adventure",
    publish: 1851,
    edition: "1st",
  },
  {
    title: "War and Peace",
    genre: "Historical",
    publish: 1869,
    edition: "1st",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    publish: 1954,
    edition: "1st",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: "1st",
  },
];

// give me book whose genre is Fantasy
// const books = userBooks.filter( (bk) => bk.genre === "Fantasy")
// console.log(books);


// publish > 1950
// const publishDate = userBooks.filter( (pubDate) => { return pubDate.publish >= 1950})
// console.log(publishDate)


// publish > 1950 and, Fiction
const publishDate = userBooks.filter( (pubDate) => { return pubDate.publish >= 1950 && pubDate.genre === "Fiction"})
console.log(publishDate)
