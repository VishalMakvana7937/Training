// Closures function in JavaScript
// Closures are functions that have access to their outer scope, even when the outer function has returned

function outerFunction() {
    let name = "vishal";
    function innerFunction() {
        console.log('My name us ', name);

    }
    innerFunction();
}
outerFunction();

function outerFun() {
    let name = "rohit";
    function innerFun() {
        console.log('My name us ', name);
    }
    return innerFun;
}
let inner = outerFun();
inner();