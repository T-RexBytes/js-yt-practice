let a = 10; // global declaration
const b = 20; // global declaration
var c = 30; // global declaration
if(1===1){
    let a = 100;
    const b = 20;
    // var c = 300; // as var this changes in some inner scope
    console.log("inner value = ", a);
}
console.log(a);
console.log(b);
console.log(c);