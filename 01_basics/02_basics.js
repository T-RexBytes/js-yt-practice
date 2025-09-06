// const tinder = new Object();
const tinderuser = {}
tinderuser.name = "Alex Palm";
tinderuser.email = "Alex@mail.com";
// console.log(tinderuser)
const userer = {
    fullname : {
        userfullname : {
            firstname : "Alex",
            lastname : "Palm"
        }
    },
    isActive : false
}
// console.log(user.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {... obj1, ...obj2};
// console.log(obj3);

const user = [
    {
        id : 1,
    email : "abcd@mail.com"    
    },
     {
        id : 2,
        email : "abcd@mail.com "
    },
     {
        id : 3,
        email : "abcd@mail.com"
    },
]
// user[2].email;
// console.log(user[2].email);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('age'));


const course = {
    name : "Yt course",
    price : "999",
    courseinstructor : "Hitesh"
}
const {courseinstructor : instuct} = course;
console.log(instuct);