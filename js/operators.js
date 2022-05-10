// Operators: + , - , *, /
// increment: ++
// decrement: --
// reusing the var += or -=

var num = 0;

// increment
// console.log(num++); // 0
// console.log(num++); // 1
// console.log(num++); // 2
// console.log(num--); // 3
// console.log(num--); // 2
// console.log(num--); // 1

num = num + 10;
num += 30; //11

num = num - 20; // 31
num -= 20; // 31

console.log(num);

// concatination:

var _name = "prasad";
var contact = 123123;
console.log("Hello my Name is " + _name); //ab
console.log(`Hello my Name is ${_name} and my contact number is ${contact}`); //ab

console.log("10" * 20 + 10); // 102010

var num123 = "10";
// convert number by adding + before string based number
console.log(+num123 + +num123 + 10); // 102010

// True/False

// &&, ||

// true && true - all other are false
// false || false - all other are true

console.log(10 >= 10 && 10 <= 2);
// console.log(10 > 2);

// typeof

console.log(typeof "0.12312");
console.log(typeof 1);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof true); // boolean
console.log(typeof undefined);
console.log(typeof null); // object

// ==, ===

var userName = "shiva";

console.log(userName == "shiva"); // true
console.log(1 === "1"); // false
