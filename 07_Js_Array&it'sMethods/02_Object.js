//let tinder_user  = new Object(); // -- single ton obj create hoga

// let obj1 = {
//   first_name: "chirag",
//   last_name: "zanpadiya",
//   id: 149,
//   occupation: { start_year: "2022", expected_end_year: "2026" },
// };

// console.log(obj1["occupation"]["start_year"]);
// console.log(obj1["occupation"]["expected_end_year"]);


let tinder_user = {
  id: 149,
  name: "chirag",
  isLogged: true,
};
// console.log(`Priting the tinder_user OBJ :`);
// console.log(tinder_user);

// let nested_obj = {
//   email: "chirag@facebook.com",
//   full_name: {
//     first_name: "chirag",
//     last_name: "zanpadiya",
//   },
// };
// console.log(`Accessing Nested_obj name :`);
// console.log(nested_obj.full_name.first_name);
// console.log(nested_obj.full_name.last_name);

// //concat more then one obj

// let obj1 = { 1: "a", 2: "b" };
// let obj2 = { 3: "c", 4: "d" };
// let obj3 = { 5: "e", 6: "f" };
// let obj4 = { 7: "g", 8: "h" };

// let concat_obj = { ...obj1, ...obj2, ...obj3, ...obj4 };
// console.log(`Concating Obj :`);

// console.log(concat_obj);

// //array of obj

let arr_obj = [
  {
    id: 149,
    name: "chirag",
  },
  {
    id: 149,
    name: "chirag",
  },
  {
    id: 149,
    name: "chirag",
  },
  {
    id: 149,
    name: "chirag",
  },
];

console.log(`printing objs all keys return formate is arrr : `);

// console.log(Object.keys(tinder_user));
// console.log(Object.values(tinder_user));
// console.log(Object.keys(arr_obj));
// console.log(Object.values(arr_obj));


console.log(`hasOwnProperty mathods`);

// console.log(tinder_user.hasOwnProperty("id2"));
console.log(tinder_user.hasOwnProperty('id'));

delete tinder_user.id;
delete tinder_user.isLogged;
delete tinder_user.name;
console.log(tinder_user);
