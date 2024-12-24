function mulByFive(num) {
  this.num = num; // jis ne bhi bulaya uska num = num set kardo
  return num * 5;
}
console.log(mulByFive(10));
console.log(mulByFive(5));
mulByFive.power = 2;
console.log(mulByFive.power);

// ................................................. InterViwer for the new keyword .......................................................................

function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.incrementScore = function () {
  this.score++;
};
createUser.prototype.printScore = function () {
  console.log(`The Price Of the Current Obj(${this.name}) is : ${this.score}`);
};

// jb ye leke print karo ge tab "createUser" nahi pata ki kya addtional chiz add karni hai

// // let chai = createUser("chai" , 25);
// chai.incrementScore()
// chai.printScore()

let chai = new createUser("chai", 25);
let tea = new createUser("tea", 15);
chai.incrementScore();
chai.printScore();
tea.incrementScore();
tea.printScore();

// ................................................................................................................

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
                                                                                         