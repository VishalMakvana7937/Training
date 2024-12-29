// // class
// class Human {
//     // Properties
//     age = 13; // public property
//     #w = 60; // private property
//     h = 1.7;

//     // behaviour
//     walking() {
//         console.log('I am walking');

//     }

//     running() {
//         console.log('I am running');

//     }

//     get fethweight() {
//         return this.#w
//     }

//     set weight(value) {
//         this.#w = value;
//     }
// }

// let obj = new Human();
// console.log('Age..', obj.age);
// obj.walking();
// obj.running();




// class
// using constructor
class Human {
    // Properties
    age; // public property
    #w = 60; // private property
    h = 1.7;

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.h = newHeight;
        this.#w = newWeight;
    }

    // behaviour
    walking() {
        console.log('I am walking');
    }

    running() {
        console.log('I am running');
    }

    get fethweight() {
        return this.#w;
    }

    set weight(value) {
        this.#w = value;
    }
}

let obj = new Human(50, 60, 70);
console.log('Age..', obj.age);
console.log(obj.fethweight);

obj.walking();
obj.running();


// default parameter function
function sayName(myname = 'vishal') {
    console.log('My name is: ', myname);

}
sayName();

// default parameter function with object
function solve(myname = { name: 'vishal', age: 25 }) {
    console.log('Object.. ', myname);
}
solve();

// default parameter function with array
function solves(myname = ['vishal', 25]) {
    console.log('Array.. ', myname);
}
solves();

// default parameter function pass function
function getAge() {
    return 21;
}

function utility(name = 'john', age = getAge()) {
    console.log('Name: ', name);
    console.log('Age: ', age);
}
utility();



