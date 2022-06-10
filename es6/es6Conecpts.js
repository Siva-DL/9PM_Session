// arrow function

// const demo = () => {
//   return 10;
// };

const demo = (abc = "test", def = 10) => {
  return { name: abc, age: def };
};

console.log(demo("demo...", "test"));

// destructuring, spread and rest;

const obj = { _name: "test", age: 30 };

// let _name = obj.name;
// let _age = obj.age;

const { _name, age } = obj;

console.log(_name);
console.log(age);

const arr = [12, 3];
const [x, y] = arr;

console.log(x);
console.log(y);

// Spread

const person = { ...obj, _name: "demo123", salary: "30$" };

// person._name = "demo123";

console.log(person);
console.log(obj);

const colors = ["red", "green"];
const newColors = [...colors];
console.log(newColors);

function tester(a, b, c) {
  console.log("sum of", a + b + c);
}

const arrValue = [1, 2, 3];

tester(...arrValue);

// Classes:

// function Person1(name) {
//   this.name = name;
// this.fullName = function () {
//   return this.name;
// };
// }
// const p1 = new Person1("letter");
// console.log(p1.name);

class Employee {
  constructor(name, salary) {
    this.salary = salary;
    this.name = name;
  }
  getSalary() {
    return `salary of ${this.name} is ${this.salary}`;
  }
}

class Person2 extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.name = name;
    this.salary = salary;
  }

  fullName() {
    return `from class ${this.name}`;
  }
}

const p1 = new Person2("user123", "30$");
console.log(p1.fullName());
console.log(p1.getSalary());

let DataInfo = "";
function getProducts() {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => {
      DataInfo = data;
      console.log(DataInfo);
    })
    .then(function (error) {
      console.log(error);
    });
}

getProducts();
