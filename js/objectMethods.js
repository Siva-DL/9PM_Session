// Objects

var users = [];
var obj = {};

obj.name = "test";
console.log(obj.name);

const user = {
  name: "shiva",
  age: 30,
  email: "test@gmail.com",
  isDev: true,
  favColors: ["red", "green"],
  certifications: {
    aws: "cloud",
    aws: "apn",
  },
  demoFn() {
    console.log(this.name);
  },
};

// user.demoFn();

users.push(user);

console.log(users);

console.log(this);

// call, apply  and bind
