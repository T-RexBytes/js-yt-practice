const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumber = number.filter( (item) => {
//     return item > 4 && item < 9
// });

const newNumber = [];
number.forEach( (item) => {
    if(item > 4 && item < 9) newNumber.push(item);
})
// console.log(newNumber);


const books = [
  {
    name: "To Kill a Mockingbird",
    publish: 1990,
    genre: "English"
  },
  {
    name: "1984",
    publish: 1995,
    genre: "Science"
  },
  {
    name: "The Great Gatsby",
    publish: 2001,
    genre: "History"
  },
  {
    name: "Moby Dick",
    publish: 1988,
    genre: "English"
  },
  {
    name: "Pride and Prejudice",
    publish: 2005,
    genre: "History"
  },
  {
    name: "The Catcher in the Rye",
    publish: 1999,
    genre: "English"
  },
  {
    name: "The Hobbit",
    publish: 2003,
    genre: "Science"
  },
  {
    name: "War and Peace",
    publish: 1987,
    genre: "History"
  },
  {
    name: "The Lord of the Rings",
    publish: 2007,
    genre: "English"
  },
  {
    name: "Crime and Punishment",
    publish: 1992,
    genre: "Science"
  }
];

let userbook = books.filter( (bk) => {
    return bk.genre === "History" && bk.publish > 2000
})
console.log(userbook);


