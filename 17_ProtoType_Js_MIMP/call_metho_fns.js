function setUsername(username) {
  this.username = username;
  console.log("called");
}
// function createUser(username, email, pass) {
//   setUsername(username);
//   this.email = email;
//   this.pass = pass;
// }

// jb below is run tthen the setusername is called and refrence bhi ho jayega but stack se entry hat tai hi remove ho gayeaa
// let chai  = new createUser("chai" , "chai@google.com" , "123");
// console.log(chai);

function createUser(username, email, pass) {
  setUsername.call(this, username); // ap apna current context rakhne ki bjay mera current context rakhe
  
  this.email = email;
  this.pass = pass;
}

let chai = new createUser("chai", "chai@google.com", "123");
console.log(chai);
