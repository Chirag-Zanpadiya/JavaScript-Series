// let user = {
//   name: "chirag",
//   id: "149",
//   age: 220,

//   greeting: function () {
//     console.log(`name of the user is : ${this.name}`);
//     // console.log(`name of the user is : ${name}`);
//   },
// };

// console.log(user.greeting());
// console.log(user["id"]);
// console.log(this); // node environment ke andar {} // browers ke andar widow obj hota hia

// function userDetails(user_name, department, Salary) {
//   this.user_name = user_name;
//   this.department = department;
//   this.Salary = Salary;
//   this.greeting = function () {
//     console.log(`Welcome to : ${this.user_name}`);
//   };
//   return this;
// }

// let userOne = new userDetails("chirag", "Software Development", "500K$");
// let userTwo = new userDetails("Prashant", "Software Development", "900K$");
// console.log(userOne); // new keyword create the new instance every times
// console.log(userTwo); // new keyword create the new instance every times

// class Student {
//   name;
//   id;
//   age;
//   constructor(name, id, age) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hellow : ${this.name}`);

//   }
// }

// let Stu1 = new Student("chirag" , "149" , 20);
// console.log(Stu1.name);
// console.log(Stu1.id);
// console.log(Stu1.age);
// console.log(Stu1.sayHello());



// MIMP Topics this
// class Vehicle {
//   name;
//   model;

//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }

//   suspenssionType() {
//     console.log(`Wellie Now`);
//   }
// }

// class car extends Vehicle {
//   noOfDoors;
//   noOftyres;
//   constructor( name ,model, noOfDoors , noOftyres){
//     super(name , model)
//     this.noOfDoors = noOfDoors;
//     this.noOftyres = noOftyres;
//   }
//   is4x4Car(){
//     console.log("YES");
    
//   }
// }


// let auto = new car("auto" , "2008" , "4" , "4");
// console.log(auto.name);
// console.log(auto.model);
// console.log(auto.noOfDoors);
// console.log(auto.noOftyres);
