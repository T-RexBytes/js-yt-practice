function islog(){
    console.log("person is logged in");
}
// islog();
function addtwonum(num1, num2){
    return num1+ num2;
}
let sum = addtwonum(3,5);
// console.log(sum);
function bank(username){
    if(!username){
        console.log("Please Enter A Name..");
        return
    }
    return `${username} just logged in`;
}
// let d = bank();
// console.log(d);


function calculatecartnumber(...num){
    return num;
}
// console.log(calculatecartnumber(200,300,400,500));
const user = {
    name : "Sourish",
    age : 18
}
const user2 = {
    name : "something",
    age : 19
}
function objecthandler(anyobject){
    console.log(`Hello ${anyobject.name} your age is ${anyobject.age}`);
}
// objecthandler(user);
// objecthandler(user2);
// objecthandler({name:"alex",age:20});

const newArray = [100,200,300,400];
// console.log(newArray);
function ArrayPrinter(getArray){
    return getArray[0];
}
// console.log(ArrayPrinter(newArray));
console.log(ArrayPrinter([500,600,700,800]));