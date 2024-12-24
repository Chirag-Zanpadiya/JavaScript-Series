class Student {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  get password() {
    return this._password.toUpperCase(); // password encrtpt kar diya
  } // without setter gettter not work
  set password(value) {
    this._password = value;
  } // yaha pe ctor and set password ke bich competion hoga kon set karega password but maximum call stack exceed kar jayega

  get username() {
    return `${this._username}fasd4safF^$%$%`;
  }
  set username(value) {
    this._username = value;
  }
}

const S1 = new Student("Chirag@0405ai.com", "sadfasdf%#$#");
console.log(S1.password);
console.log(S1.username);
