// const useremail = " "
// if(useremail) console.log("got email");
// else console.log("no email found");

// const gotarray = [];
// if(gotarray.length === 0) console.log("array is empty");
// else console.log("array is there");

const obj = {};
// if(Object.keys(obj).length === 0) console.log("the object is empty");

// Nullish Coalescing Operator (??) : Null identifier 

let val1;
// val1 = 5;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
// val1 = null ?? 10 ?? 20;
val1 = null ?? undefined ?? 10;
console.log(val1);