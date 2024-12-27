// Object
const obj = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello, ' + this.name);

    }
};
console.log(obj);
obj.greet();
console.log(typeof (obj));

// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Array constructor
const arr2 = new Array(1, 'xyz', 3, 'abc', 5);
// Accessing array elements
console.log(arr2[1]);

// Puss ing elements to array
arr2.push(6);
// pop method
arr2.pop();
// shift method
arr2.shift();
// unshift method
arr2.unshift('sos');
// splice method
console.log(arr2.slice(1, 3));
// splice method
// insert ,delet and replace elements
arr2.splice(1, 2, 'xyz');
console.log(arr2);

// map  method
let arrs = [10, 20, 30, 40, 50];
const ansArray = arr.map((num) => {
    return num * num;
})
console.log(ansArray);

// filter 
const arr3 = [1, 2, 3, 4, 5];
const evenodd = arr3.filter((num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
})
console.log(evenodd);

// reduce method
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((acc, current) => {
    return acc + current;
}, 0);
console.log(sum);

// sort method
const arr5 = [1, 7, 6, 10, 2];
const sorted = arr5.sort((a, b) => {
    return a - b;
});
console.log(sorted);

// index of method
const arr6 = [1, 2, 3, 4, 5];
const index = arr6.indexOf(3);
console.log(index);

// find index of method
const arr7 = [1, 2, 3, 4, 5];
const index1 = arr7.findIndex((num) => {
    return num === 1;
});
console.log(index1);

