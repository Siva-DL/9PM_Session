const str =
  "Lorem ipsum dolor sit amet consectetur dolor adipisicing elit. Similique, culpa!";

// str.indexOf
// str.lastIndexOf
// search

console.log(str.indexOf("dolor", 40));
console.log(str.lastIndexOf("dolor", 11));
console.log(str.search("dolor"));

// subString()
// slice()
var _start = str.indexOf("dolor");
var _end = _start + "dolor".length;
console.log(str.substring(_start, _end));
console.log(str.slice(_start, _end));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

var arr = [1, 2, 3];
console.log(typeof arr);
console.log(arr.toString().split(","));

console.log(str.split(" "));
console.log(arr.join("|"));

console.log(str.includes("dolor")); // true

var email = "test@gmail.com";
console.log(email.startsWith("test")); // true
console.log(email.endsWith(".com")); // true

if (email.startsWith("test")) {
  alert();
}
