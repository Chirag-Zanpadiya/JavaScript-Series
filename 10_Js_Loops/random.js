// let myScore = {
//   phy: 88,
//   maths: 90,
//   chem: 90,
//   getAvg() {
//     // let avg = ((this.phy + this.maths + this.chem) / 300)*100;
//     let avg = ((phy + maths + chem) / 300) * 100;
//     console.log(avg);
//   },
// };

// console.log(myScore.getAvg());

// //
// 1. forEach Loop
// Usage: Iterates over arrays.
// Syntax: array.forEach(callback(element, index, array))
// Description: It calls a provided function once for each element in an array, in order.
// Return Value: forEach does not return anything. It’s intended for performing actions on each array element.
// Limitations: Does not support break or continue (you can't exit early).

// javascript
// Copy code
// const arr = [1, 2, 3];
// arr.forEach((element) => {
//   console.log(element);
// });

// 2. for...in Loop
// Usage: Iterates over object properties or array indexes.
// Syntax: for (key in object)
// Description: It iterates over the enumerable properties of an object, including inherited properties.
// Return Value: Returns the property names (keys) as strings.
// Limitations: Can pick up unwanted inherited properties if not used carefully. Generally avoided for arrays, as it may not guarantee order and includes properties added to the prototype chain.
// javascript

// Copy code

// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// 3. for...of Loop
// Usage: Works with iterable objects like arrays, strings, Maps, Sets, and more.
// Syntax: for (element of iterable)
// Description: Iterates over the values of an iterable, making it useful for arrays and other iterable types.
// Return Value: Returns values of the elements directly.
// Limitations: Can’t be used with objects unless they implement the iterable protocol.
// javascript
// Copy code
// const arr = [1, 2, 3];
// for (const value of arr) {
//   console.log(value);
// }
// Summary

// forEach: Array-only, operates on each element in order, lacks break and continue.
// for...in: Object properties and array indices, gives keys, not suitable for arrays due to potential prototype interference.
// for...of: Iterable objects, returns values, works well for arrays, strings, Maps, Sets.
// //

let Stu = {
  getInfo: function () {
    setTimeout(function (){
      console.log(this);
    }, 1000);
  },
};


Stu.getInfo()