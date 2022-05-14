// true / false
console.log(jsonUsers);
for (let i = 0; i < jsonUsers.length; i++) {
  if (jsonUsers[i].address.geo.lat === "-71.4197") {
    console.log(jsonUsers[i]);
  } else if (jsonUsers[i].address.geo.lat === "24.8918") {
    console.log(jsonUsers[i]);
  } else {
    console.log("err: this is not marching with data...");
  }
}

// if a user is minor - throw err (18)
// if user is major - aadhar - print user (>18)

// ---------

function user(name) {
  return name;
}
var user = "x ";
console.log(user("x") + " id: 1");

user("y");
user("y");
