// const arr = [];

const arr = [];

arr[0] = "123";
arr[1] = "string";

arr[4] = true;

console.log(arr);

let users = [];
// push, unshift

users.unshift("user0");
users.unshift("user00");

users.push("user1");
users.push("user2");
users.push("user3");

console.log(users);

// pop, shift

// users.pop();
// users.shift();

// delete users[2];

// splice

console.log(users.indexOf("user00"));
users.splice(users.indexOf("user00"), 1);

console.log(users);

// slice
let slicedValue = users.slice(0, 1);
console.log(slicedValue);
