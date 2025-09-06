function One(){
    const name = "sourish";
    function Two(){
        const age = 18
        // console.log(name);
    }
    Two();
}
One();

if (true){
    const username = "Sourish";
    if(username === "Sourish"){
        const age = 18;
        // console.log(username);
    }
    // console.log(age);
}
// console.log(username);
console.log(func1(5));
function func1(num){
    return num + 1;
}
const holder = function(num){
    return num + 2;
}
console.log(holder(5));