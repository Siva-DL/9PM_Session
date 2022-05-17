var today = new Date();

var days = ["Sunday", "Monday", "Tuesday"];

console.log(today.getMonth() + 1);
console.log(days[today.getDay()]);
console.log(today.getDate());
console.log(today.getFullYear());

console.log(
  today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear()
);
