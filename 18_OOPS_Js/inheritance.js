class User {
  constructor(username) {
    this.username = username;
  }
  isLoggedIn() {
    console.log(`User Logged name is : ${this.username}`);
  }
}
class userInfo extends User {
  constructor(username, email, pass) {
    super(username); // this is samw as the call() in the js 
    this.email = email;
    this.pass = pass;
  }

  getUserEmail(){
    return `${this.email}`
  }
 static getPass(){
    return `${this.pass}`
  } // same as private not accessible by the obj
}

let userOne = new User("chirag");
console.log(userOne.isLoggedIn());

let useroneInfo =new userInfo("prashant" , "p@gmail.com" , 4564564);
console.log(useroneInfo.username);
// console.log(useroneInfo.email);
console.log(useroneInfo.getUserEmail());
console.log(useroneInfo.isLoggedIn()); // child ke pass parent ka access hota hai 



// console.log(userOne.getUserEmail()); // parent ke pass child ka access nahi hota hai 



