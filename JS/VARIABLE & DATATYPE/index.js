// 1. Variables in JavaScript

// var (function-scoped, can be re-declared and updated)
var age = 85;

if (true) {
    console.log('Using var inside block:', age); // Outputs 85
}

// Function demonstrating variable scope with var
function solve() {
    var age = 25; // This is a different variable from the outer age
    console.log('Age inside solve function (using var):', age); // Outputs 25
}
solve();

// let (block-scoped, cannot be re-declared within the same scope)
{
    let a = 5;
    console.log('Using let inside block:', a); // Outputs 5
}

// const (block-scoped, cannot be re-declared and must be initialized at declaration)
const xyz = 40;
console.log('Using const:', xyz); // Outputs 40

// Uncommenting the line below will cause an error because xyz cannot be reassigned
// xyz = 50; // TypeError: Assignment to constant variable

// 2. JavaScript Data Types

// 1. Number
var num = 10;
console.log('Number:', num); // Outputs 10

// 2. String
var str = "Hello, World!";
console.log('String:', str); // Outputs Hello, World!

// 3. Boolean
var bool = true;
console.log('Boolean:', bool); // Outputs true

// 4. Null
var nullVar = null;
console.log('Null:', nullVar); // Outputs null

// 5. Undefined
var undefVar;
console.log('Undefined:', undefVar); // Outputs undefined

// 6. Object
var obj = { name: "John", age: 30 };
console.log('Object:', obj); // Outputs { name: "John", age: 30 }

// 7. Symbol
var sym = Symbol("Hello");
console.log('Symbol:', sym); // Outputs Symbol(Hello)

// 8. BigInt (used for large numbers beyond the safe integer limit)
var bigInt = 10n;
console.log('BigInt:', bigInt); // Outputs 10n

// Example of operations with BigInt
var anotherBigInt = 20n;
console.log('BigInt Addition:', bigInt + anotherBigInt); // Outputs 30n
