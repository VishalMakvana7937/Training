// Object Example
const obj = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello, ' + this.name);
    }
};

// Logging object and calling the method
console.log(obj);
obj.greet(); // Output: Hello, John
console.log(typeof obj); // Output: object

// Array Example
const arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Array Constructor
const arr2 = new Array(1, 'xyz', 3, 'abc', 5);
console.log(arr2); // Output: [1, 'xyz', 3, 'abc', 5]

// Accessing array elements
console.log(arr2[1]); // Output: xyz

// Pushing elements to array
arr2.push(6);
console.log(arr2); // Output: [1, 'xyz', 3, 'abc', 5, 6]

// Pop method (removes the last element)
arr2.pop();
console.log(arr2); // Output: [1, 'xyz', 3, 'abc', 5]

// Shift method (removes the first element)
arr2.shift();
console.log(arr2); // Output: ['xyz', 3, 'abc', 5]

// Unshift method (adds an element at the beginning)
arr2.unshift('sos');
console.log(arr2); // Output: ['sos', 'xyz', 3, 'abc', 5]

// Slice method (returns a shallow copy of a portion of an array)
console.log(arr2.slice(1, 3)); // Output: ['xyz', 3]

// Splice method (inserts, deletes, or replaces elements)
arr2.splice(1, 2, 'xyz');
console.log(arr2); // Output: ['sos', 'xyz', 'xyz', 5]

// Map method (creates a new array with the results of calling a provided function on every element in the array)
let arrs = [10, 20, 30, 40, 50];
const ansArray = arrs.map((num) => num * num);
console.log(ansArray); // Output: [100, 400, 900, 1600, 2500]

// Filter method (creates a new array with all elements that pass the test implemented by the provided function)
const arr3 = [1, 2, 3, 4, 5];
const evenodd = arr3.filter((num) => num % 2 === 0);
console.log(evenodd); // Output: [2, 4]

// Reduce method (applies a function against an accumulator and each element in the array to reduce it to a single value)
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15

// Sort method (sorts the elements of an array)
const arr5 = [1, 7, 6, 10, 2];
const sorted = arr5.sort((a, b) => a - b);
console.log(sorted); // Output: [1, 2, 6, 7, 10]

// IndexOf method (returns the first index at which a given element can be found)
const arr6 = [1, 2, 3, 4, 5];
const index = arr6.indexOf(3);
console.log(index); // Output: 2

// FindIndex method (returns the index of the first element in the array that satisfies the provided test function)
const arr7 = [1, 2, 3, 4, 5];
const index1 = arr7.findIndex((num) => num === 4);
console.log(index1); // Output: 3

// ForEach method (executes a provided function once for each array element)
const arr8 = [1, 2, 3, 4, 5];
arr8.forEach((num) => console.log(num)); // Output: 1 2 3 4 5 (printed on separate lines)

// For...in method (iterates over the keys of an object)
const object = {
    "name": "John",
    "age": 30,
    "city": "New York"
};
for (let key in object) {
    console.log(key, object[key]); // Output: name John, age 30, city New York (on separate lines)
}

// For...of method (iterates over iterable objects like arrays or strings)
const array = "Babber";
for (let val of array) {
    console.log(val); // Output: B a b b e r (printed on separate lines)
}

// Array with function - Calculating Sum of Array Elements
const arr9 = [1, 2, 3, 4, 5];
function getSum(arr9) {
    let len = arr9.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum = sum + arr9[i];
    }
    return sum;
}

let totalSum = getSum(arr9);
console.log(totalSum); // Output: 15
