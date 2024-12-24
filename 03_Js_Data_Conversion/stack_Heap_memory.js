// Primitive datatypes --> stack memory store hote hai
let name_stu = "chirag";
let nikname = name_stu;
nikname = "zanpadiya";

console.log(`Nikname : ${nikname}`);
console.log(`name_stu : ${name_stu}`);

//non primitive Datatypes --> Heap memory me sotre hote hai

let userOne = {
  name: "chirag",
};

let userTwo = userOne;
userTwo.name = "xy";
console.log(userOne.name);
console.log(userTwo.name);

