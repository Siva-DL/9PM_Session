var abc = "test111";

switch (abc) {
  case "test":
    console.log(`this is ${abc}`);
    break;
  case "test1":
    console.log(`this is ${abc}`);
    break;
  case "test2":
    console.log(`this is ${abc}`);
    break;
  default:
    console.log("this is default");
    break;
}

// Ternary
// condition? true block : false block

var _name = "programmer";

const result =
  _name === "tester"
    ? true
      ? console.log("Hello Tester")
      : console.log("Hello Developer")
    : console.log(false);
result;
