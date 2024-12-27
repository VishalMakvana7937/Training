// javascript variables
// 1. let
// 2. const
// 3. var

// var
var age = 85;

if (true) {
    console.log(age);
}

function solve() {
    var age = 25;
    console.log(age);
}

solve();

// let
{
    let a = 5;
    console.log(a);
}

// const
const xyz = 40;
console.log(xyz);

// JavaScript has 8 Datatypes

// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Object
// 7. Symbol
// 8. BigInt

var num = 10;
console.log('Number..', num);

var str = "Hello, World!"
console.log('String..', str);

var bool = true;
console.log('Boolean..', bool);

var nullVar = null;
console.log('Null..', nullVar);

var undefVar;
console.log('Undefined..', undefVar);

var obj = { name: "John", age: 30 };
console.log('Object..', obj);

var sym = Symbol("Hello");
console.log('Symbol..', sym);

var bigInt = 10n;
console.log('BigInt..', bigInt);