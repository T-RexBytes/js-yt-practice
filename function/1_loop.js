const map = new Map()
map.set('IND' ,"India")
map.set('USA' , "United States Of America")
map.set('UK' , "United Kindom")
map.set('JPN' , "Japan")

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);       
}

const myObject = {
    IND : "India",
    JPN : "Japan",
    PAK : "Pakisthan",
    USA : "United States Of America"
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} is short of ${myObject[key]}`)
}

const myArr = [10, 20, 30, 40];
for (const element of myArr) {
    // console.log(element);
}

for (const element in myArr) {
    // console.log(element);
    // console.log(myArr[element]);
    
}


const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function(item){
//     console.log(item);
// })

// arr.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// arr.forEach(printme)

// arr.forEach( (a, b, c) => {
//     console.log(a, b, c);
// })

const program = [
    {
        language_name : "Javascript",
        file_extension : "js"
    },
    {
        language_name : "Python",
        file_extension : "py"
    },
    {
        language_name : "C++",
        file_extension : "cpp"
    }
]

program.forEach( (item) => {
    // console.log(item.language_name);
    // console.log(item.file_extension);
    // console.log(`language name is ${item.language_name} and it's extension is ${item.file_extension}`);
    
})