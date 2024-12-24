let new_syb = Symbol("issymbol");

let Jsuser = {
  name: "chirag",
  "full name": "zanpadiya chirag",
  // new_syb: "dosha", // print this obh
  [new_syb]: "dosha", // print this obj after adding the []
  // dosha: [new_syb],
  age: 20,
  email: "chirag@google.com",
  isLastLogged: ["sat", "mod"],
};

// console.log(Jsuser);

// console.log(Jsuser);
// console.log(`Accessing full name : ${Jsuser."full name"}`); // this how the err

// console.log(`jsuser age : ${Jsuser.age}`);
// console.log(`jsuser age : ${Jsuser["age"]}`);
// console.log(`islastlogged  : ${Jsuser["isLastLogged"]}`);

// console.log(` type of new_syb : ${typeof Jsuser["new_syb"]}`); // ye to string  dikha raha hai hame to Symbol chahiye
// console.log(Jsuser);

// Jsuser.email = "chirag@meta.com";
// console.log(`After changing the email :`);
// console.log(Jsuser);

// Object.freeze(Jsuser); //after this we cannot modify the value of the object

// Jsuser.age = 28;
// console.log(`After Freezing the email :`);
// console.log(Jsuser.age);

// console.log(Jsuser);

// Jsuser.greeting = function () {
//   console.log(`Namaste Dunia ${this["full name"]}`);
// };
// // console.log(Jsuser.greeting);
// console.log(Jsuser.greeting());

/////////////////////////////////////////////******************************************************/////////////////////////////////////////////

// let obj = {
//   0: "a",
//   1: "b",
//   google: "goolge",
//   null: "c",
//   true: "d",
//   undefined: "e",
// };

// console.log(obj[1]);
// // console.log(obj["undefined"]);
// console.log(obj["true"]);
// // console.log(obj.null);

// console.log(obj["google"]);

// let min = 5;
// let max = 10;
// let num_rand = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(num_rand);


// console.log( Math.floor(Math.random()*(200-100+1) + 100) );

console.log( Math.floor(Math.random()*(500-100+1) + 100) );
