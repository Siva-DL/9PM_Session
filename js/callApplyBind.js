// call Apply and Bind
// JS - COnstructor

const str = new String();

const obj = {
  $name: "",
  age: 12,
  demo() {
    console.log(this.name);
  },
};

console.log(obj);

function UserInfo(userName, age) {
  this.userName = userName;
  this.age = age;
  this.userDetails = function () {
    return `${this.userName} is years ${this.age} old`;
  };
}

function Employees(userName, age) {
  this.userName = userName;
  this.age = age;
  //   this.empId = empId;
}

const person1 = new UserInfo("Xyz", 20);
const person2 = new UserInfo("abc", 30);

console.log(person1.userName);
console.log(person1.userDetails());
console.log(person2.age);

// Employees.call(UserInfo);

// const Demo1 = new Employees.call(person1, "abcs");

// console.log(Demo1.userDetails());

// console.log(userInfo("x", 12));

// Employees.call(UserInfo);

// console.log(person2.userDetails.call(Demo1));

//

const abc = {
  uname: "dummy",
};

const def = {
  uname: "dummy12222",
};

function demo123(lName) {
  return this.uname + "------" + lName;
}

console.log(demo123.call(abc, "json"));
console.log(demo123.apply(def, ["json"]));

const copyOfBind = demo123.bind(abc, "json");

console.log(copyOfBind());
