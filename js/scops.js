var abc = 10; //global scope.
var email;
// Hoisting

var _name;
console.log(_name); // undefined;
_name = "test";
console.log(_name);

console.log(abc);

function demoFn() {
  _age = 22; // global scope
  var def = 20; // local scope
  console.log(abc, def);
}

demoFn();
// console.log(def);
console.log(_age);

email = "test@gmail.com";
console.log(email);

email = "test1@gmail.com";
console.log(email);

// var, let, const;
{
  let abcd = 10;
}

let abcd = 20;
abcd = "test";
abcd = true;

const userName = "admin";
