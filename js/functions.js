// functions

// Basic
function test() {
  //   console.log("Demo...!");
  var employee1 = {
    contact: 9121212,
    empId: 1214,
    email: "somez@gmail.com",
    name: "somez",
    "last Name": "somez",
    phone: "phone1",
  };
  //   console.log(employee1);
  return employee1;
}

var demoFn = function () {
  console.log("Demo Fn...!");
  var employee1 = {
    contact: 9121212,
    empId: 1214,
    email: "somez@gmail.com",
    name: "somez",
    "last Name": "somez",
    phone: "phone1",
  };
  return employee1;
};

// Self Invoking Function

(function () {
  console.log("Self Invoking...!");
})();

// Arrow Function,

var arrowFn = () => {
  console.log("arrowFn Fn...!");
  var employee1 = {
    contact: 9121212,
    empId: 1214,
    email: "somez@gmail.com",
    name: "somez",
    "last Name": "somez",
    phone: "phone1",
  };
  return employee1;
};

// Invoke, Calling
console.log(test());
test();
test();
test();
// demoFn();
// demoFn();
// demoFn();
// demoFn();
// arrowFn();
