// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// // Op of the above code is below here we can see that the writable property set to false

// // {
// //     value: 3.141592653589793,
// //     writable: false,
// //     enumerable: false,
// //     configurable: false
// //  }

let myObj = {
  name: "Chirag Zanpadiya",
  age: 20,
  isAvailable: true,

  isPassed: function () {
    console.log("no Passed in the exam");
  },
};

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// {
//     value: 'Chirag Zanpadiya',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(myObj, "name", {
  // isko karte hi myObj ka  enumerable properties false ho jayegi menads myObj.name ko iterate nahi kar shkate
  //   writable: false,
  //   enumerable: false,
});

console.log(`After Set the Enumarable PRoperty to false on the name :`);

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

console.log(
  `if We try to Iterate over the name after set the enumarable property to : False `
);

for (const [key, value] of Object.entries(myObj)) {

  // isko karte hai jisti value 'function' hogi wo iterable nahi

  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
  // below karte hi fns ki puri body a rahi hai
}

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

let myObj = {
  name: "Chirag Zanpadiya",
  id: 149,
  enrollment_NO: "220130107149",
  isAvailable: function () {
    console.log(`Now Not!`);
  },
};
console.log(Object.getOwnPropertyDescriptor(myObj, "name"));
Object.defineProperty(myObj, "id", {
    enumerable: false,
    writable :false
});
myObj.name = "chirag"; // here we change the name of the myObj but we set the property to writable to false to we cannot ressigle this
for (const [key, value] of Object.entries(myObj)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}
