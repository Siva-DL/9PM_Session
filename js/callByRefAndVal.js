var a = 10;
var b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

var user = { name: "test" };

var user1 = user;

user1.name = "developer";

console.log(user1);
console.log(user);
