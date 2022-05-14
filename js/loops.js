// for, for-in, for-off, while, forEach,

// FOR

// 0 - 0 < 10 -
// 1 - 1 < 10
// 2 - 2 < 10
// // .
// // .
// // .

// 10 < 10
for (let index = 0; index < jsonUsers.length; index++) {
  //   const element = index;
  console.log(
    `<h1>${jsonUsers[index].name}</h1> <p>${jsonUsers[index].email}</p>`
  );
}

// while

// var j = 0;
// while (j < jsonUsers.length) {
//   console.log(jsonUsers[j].phone);
//   j++;
// }

// for-in
// for (let i in jsonUsers) {
//   console.log(jsonUsers[i].name);
// }

// for-off
// let lat = "";
// for (let user of jsonUsers) {
//   console.log(user.address.geo.lat);
//   lat += user.address.geo.lat;
// }

// console.log(lat);

jsonUsers.forEach(function (v, i) {
  console.log(v.email);
});
