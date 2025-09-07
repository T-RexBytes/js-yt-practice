// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map( (num) => num * 10);
// const newNums = myNums.map( (num) => num * 10).map( (num) => num +1).filter( (num) => num >= 41);
// console.log(newNums);

// const myTotal = myNums.reduce( function (acc, currval){
//     return acc + currval;
// }, 0)

// const myTotal = myNums.reduce( (acc, Currval) => {
//     return acc + Currval;
// }, 0)
// console.log(myTotal);


const shopping = [
    {
        name : "book",
        price : 500
    },
    {
        name : "pen",
        price : 100
    },
    {
        name : "waterbottle",
        price : 200
    },
    {
        name : "bag",
        price : 500
    },
    {
        name : "shirt",
        price : 1000
    },
]

const pricetoPay = shopping.reduce ( (acc , item) => acc + item.price, 0)
console.log(pricetoPay);

