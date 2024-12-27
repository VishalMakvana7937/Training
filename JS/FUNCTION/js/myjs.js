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