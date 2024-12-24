// let programming = [
//   "Java",
//   "JavaScript",
//   "Ruby",
//   "HTML",
//   "CSS",
//   "C++",
//   "c",
//   "SQL",
// ];

// // //this code iterate over the each element present in the arr and
// // let new_lang = programming.forEach((items) => {
// //   console.log(items);

// //   //   return items;
// // });
// // console.log(new_lang);

// // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // nums.forEach((items , index) => {
// //   nums[index] = items + 10;
// // });
// // console.log(`ORigional Arr is :`);

// // console.log(nums)
// // let new_nums = [];
// // nums.forEach((num) => {
// //   if (num >= 4) {
// //     // return num;
// //     new_nums.push(num);
// //   }
// });

// console.log(new_nums);

//filter methods

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let new_Arr = nums.filter((val) => {
//   return (val&1) != 0;
// });

// console.log(new_Arr);

// // let new_nums = nums.filter((num) => {
// //   return num >= 4;
// // });
// let new_nums = nums.filter((num) => num >= 4);
// console.log(new_nums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];



//   give me history book objects

let his_book = books.filter((each_book_obj) => {
  return each_book_obj.genre === "History";
});
// console.log(his_book);

// //give me book who;s genre is "History and edition is  >=2000"
// console.log("Books");



// let his_book_2000 = books.filter(
//   (obj) => obj.genre === "History" && obj.edition >= 2000
// );
// console.log(his_book_2000);
