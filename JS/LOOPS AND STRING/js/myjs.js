// LOOPS IN JAVASCRIPT
// 1. FOR LOOP
// 2. WHILE LOOP
// 3. DO WHILE LOOP


// STRINGS IN JAVASCRIPT
let fname = "vishal";
let lname = 'Makvana';
console.log(typeof (fname));
let namein = `My 
name    
is
vishal`;

console.log(namein);

let xyz = new String("XYZ");
console.log(xyz);

let op1 = "English";
let op2 = "Hindi";

let ans = op1 + " " + op2;
console.log(ans);

// CONCATENATION
let finalans = `${op1} ${op2}`;
console.log(finalans);

// lENGTH
console.log(op2.length);

// UPPERCASE AND LOWERCASE
let op3 = "English";
let op4 = "HINDI";
console.log(op3.toUpperCase());
console.log(op4.toLowerCase());

// SUBSTRING
let subStr = "Hello how are you?";
console.log(subStr.substring(2));
console.log(subStr.substring(2, 8));

// SPLIT
let words = subStr.split(" ");
console.log(words);
console.log(words.join(','));