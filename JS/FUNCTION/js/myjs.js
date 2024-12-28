// function

// without perimeter function
// function definition
function funname() {
    console.log('My name is funname');

}
// function use - function call
funname();

function count() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);

    }
}
count();

// with perimeter function
function sendnumber(num) {
    console.log("Printing number..!", num);

}
sendnumber(10);

// return value function
function getNum(a, b, c) {
    let sum = a + b + c;
    return sum;
}
let ans = getNum(1, 2, 3);
console.log("Ans..!", ans);

// function with parameter and return value
// with var keyword
const s = function (a, b) {
    let sum = a * b;
    return sum;
}
let getans = s(1, 2);
console.log("Mul Ans..!", getans);

// Arrow function
const add = (a, b) => {
    let sum = a + b;
    return sum;
}
let ansrs = add(1, 2);
console.log("Add Ans..!", ansrs);





// variable scoping
// 1. Global scope
// 3. Block scope
// 4. Function scope

// globel scope
var age = 15;
console.log(age);

{
    console.log(age);
}

if (true) {
    console.log(age);
}

for (let i = 0; i < 2; i++) {
    console.log(age);
}

function sayHello() {
    console.log("Hi", age);
}
sayHello();

// function scope
// log is not a function outer work 
function sayHello() {
    var name = "India"
    console.log(" Helloo Dunia", name);
}
sayHello();

// example function scope
// function sayHello() {
//     var fname = "India"
//     console.log(" Helloo Dunia", fname);
// }
// console.log(fname);
// sayHello();

// Block scope
{
    var height = 180;
}
console.log(height);


// temporal dead zone
// let and const are block scope
// let and const are hoisted but not initialized
// let and const are not function scope
// let and const are not global scope
// let and const are block scope
// let and const are hoisted but not initialized