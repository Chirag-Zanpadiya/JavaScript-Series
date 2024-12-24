// // function createUser(name, pass) {
// //   this.name = name;
// //   this.pass = pass;
// // }

// // createUser.prototype.passUppercase = function(){
// //     return this.pass.toUpperCase();
// // }

// // let user1 = new createUser("chirag" , "sdafjskdlrjeo");
// // console.log(user1.name);
// // console.log(user1.pass);
// // let newpass = user1.passUppercase();
// // console.log(newpass);

// let name = "chirag         ";

// String.prototype.trueLen = function () {
//   console.log(this.trim().length);
// };

// name.trueLen();

function setUsername(username) {
  this.username = username;
}
function createUSer(username, email, pass) {
  setUsername.call(this, username);
  this.email = email;
  this.pass = pass;
}

let user1 = new createUSer("chai", "$", "4564");
console.log(user1);
