// let promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Promise Task");
//     resolve();
//   }, 100);
// });
// promiseOne.then(() => {
//   console.log("Promise consumed Success ");
// }).catch((err)=>{
// console.log("Error : 404 Pages Not Found ::");

// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Promise Task");
//     resolve();
//   }, 100);
// })
//   .then(() => {
//     console.log("Promise consumed Success ");
//   })
//   .catch((err) => {
//     console.log("Error : 404 Pages Not Found ::");
//   });

// let promiseThree = new Promise(function (resolve, reject) {
//   let error = true;
//   if (error == false) {
//     setTimeout(function () {
//       resolve({ username: "chirag123@gmail.com", password: "048913223" });
//     }, 1000);
//   } else {
//     reject("404 Page Not Found");
//   }
// });
// promiseThree
//   .then(function (userdata) {
//     return userdata.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Ye to Execute to Hona hi Hona hai ");
//   });

// async function getUserDetails() {
//   try {
//     let request = await fetch("https://api.github.com/users/Chirag-Zanpadiya");
//     let data = await request.json();
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(data);
// }
// getUserDetails();

