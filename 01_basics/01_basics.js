const MySym = Symbol("key0")
const JsUser = {
    [MySym] : "MyKey1",
    name : "Sourish Panda",
    "Active" : true,
    age : 18,
    email : "sourishpanda@email.com",
    location : "kolkata",
    isLoggedOn : false,
    lastLoggedOn : ["monday","friday"]
}
// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["Active"])
// console.log(JsUser[MySym])
// console.log(JsUser["email"])
// Object.freeze(JsUser)
// JsUser.email = "sourish@gpt.com"
JsUser.greetings = function(){
    console.log("Hello");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello ${this.name} to our program..`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());