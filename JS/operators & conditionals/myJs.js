console.log("Operators & Conditionals");

// Arithmetic Operators
let a = 2;
let b = 5;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus (remainder)
console.log("a ** b =", a ** b); // Exponentiation (a raised to the power of b)

// Postfix and Prefix Increment/Decrement
console.log("Postfix Increment (a++):", a++); // Post-increment: uses the value of a, then increments
console.log("a after postfix increment:", a); // a is now 3

console.log("Prefix Increment (++a):", ++a); // Pre-increment: increments the value of a, then uses it
console.log("a after prefix increment:", a); // a is now 4

console.log("Postfix Decrement (a--):", a--); // Post-decrement: uses the value of a, then decrements
console.log("a after postfix decrement:", a); // a is now 3

console.log("Prefix Decrement (--a):", --a); // Pre-decrement: decrements the value of a, then uses it
console.log("a after prefix decrement:", a); // a is now 2

// Assignment Operators
let x = 10;
console.log("\nAssignment Operators:");
x += 5;  // x = x + 5
console.log("x += 5:", x);  // x is now 15
x -= 3;  // x = x - 3
console.log("x -= 3:", x);  // x is now 12
x *= 2;  // x = x * 2
console.log("x *= 2:", x);  // x is now 24
x /= 4;  // x = x / 4
console.log("x /= 4:", x);  // x is now 6
x %= 5;  // x = x % 5 (remainder)
console.log("x %= 5:", x);  // x is now 1

// Comparison Operators
let num1 = 10;
let num2 = 20;
console.log("\nComparison Operators:");
console.log("num1 == num2:", num1 == num2); // Equal to
console.log("num1 != num2:", num1 != num2); // Not equal to
console.log("num1 === num2:", num1 === num2); // Strict equal (checks type and value)
console.log("num1 !== num2:", num1 !== num2); // Strict not equal (checks type and value)
console.log("num1 > num2:", num1 > num2); // Greater than
console.log("num1 < num2:", num1 < num2); // Less than
console.log("num1 >= num2:", num1 >= num2); // Greater than or equal to
console.log("num1 <= num2:", num1 <= num2); // Less than or equal to

// Logical Operators
console.log("\nLogical Operators:");
let isTrue = true;
let isFalse = false;

console.log("isTrue && isFalse:", isTrue && isFalse); // AND (returns true only if both are true)
console.log("isTrue || isFalse:", isTrue || isFalse); // OR (returns true if at least one is true)
console.log("!isTrue:", !isTrue); // NOT (returns true if the operand is false)

let age = 18;
console.log("\nLogical AND with condition:");
console.log(age >= 18 && age <= 65); // true: age is between 18 and 65

console.log("\nLogical OR with condition:");
console.log(age < 18 || age > 65); // false: age is not less than 18 nor greater than 65

// Ternary Operator (Conditional Operator)
console.log("\nTernary Operator:");
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log(canVote);

// typeof Operator (for checking types)
console.log("\ntypeof Operator:");
console.log("typeof a:", typeof a); // Number
console.log("typeof 'hello':", typeof 'hello'); // String
console.log("typeof true:", typeof true); // Boolean
console.log("typeof {}:", typeof {}); // Object
console.log("typeof []:", typeof []); // Object (arrays are objects in JS)

// Instanceof Operator
console.log("\nInstanceof Operator:");
console.log([] instanceof Array); // true: [] is an instance of Array
console.log({} instanceof Object); // true: {} is an instance of Object

// Bitwise Operators
let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary

console.log("\nBitwise Operators:");
console.log("bit1 & bit2:", bit1 & bit2); // AND: 0101 & 0011 = 0001 (1 in decimal)
console.log("bit1 | bit2:", bit1 | bit2); // OR: 0101 | 0011 = 0111 (7 in decimal)
console.log("bit1 ^ bit2:", bit1 ^ bit2); // XOR: 0101 ^ 0011 = 0110 (6 in decimal)
console.log("~bit1:", ~bit1); // NOT: Inverts all the bits (inverts 0101 to 1010)
console.log("bit1 << 1:", bit1 << 1); // Left shift: 0101 << 1 = 1010 (10 in decimal)
console.log("bit1 >> 1:", bit1 >> 1); // Right shift: 0101 >> 1 = 0010 (2 in decimal)

// Conditional (if-else)
console.log("\nConditional (if-else):");
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Switch Statement
console.log("\nSwitch Statement:");
let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
