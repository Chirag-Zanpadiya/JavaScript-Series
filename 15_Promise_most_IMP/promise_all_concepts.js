let promiseOne = new Promise(function (resolve, reject) {
  // async task
  // DB calls , crytograpy
  setTimeout(function () {
    console.log(`Async Task-1 Completed`);
    resolve();
  }, 1000);
});

//without resolve 'then' block not executed
promiseOne.then(function () {
  console.log(`Promise-1 Consumed`);
});

// console.log(`.........Promise - 2........`);

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async Task-2 completed`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Promise-2 To Consumed`);
});

// console.log(`.........Promise - 3........`);

let promiseOneThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chiragzanpadiya", pass: "chirag$54564" });
  }, 1000);
});

promiseOneThree.then(function (user_obj) {
  console.log(user_obj);
});

// console.log(`.........Promise - 4........`);

let promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // let error = true;
    if (error) {
      reject(`Error : 404 Page not Found`);
    } else {
      resolve({ username: "chiragzanpadiya", pass: "chirag$54564" });
    }
  }, 1000);
});

promiseFour
  .then(function (user_obj) {
    console.log(user_obj);
    return user_obj.username;
  })
  .then((username) => {
    console.log(`name : ${username}`);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log(`finally kaheta hai ki me to execute hoga hi hoga`);
  });

// console.log(`.........Promise - 5........`);

let promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true; // jb yaha pe errors = 'true' hoga tab promiseFiveConsumed() kaise handle karega without try-catch block
    let error = false;
    if (error) {
      reject(`Error : 404 Page not Found for Js `);
    } else {
      resolve({ username: "JavaScript", pass: "Js@&*^&_" });
    }
  }, 1000);
});
async function promiseFiveConsumed() {
  try {
    let response = await promiseFive;
    console.log(response);
    console.log(response.username);
  } catch (error) {
    console.log(error);
  }
}

promiseFiveConsumed();

// console.log(`.........Promise - 5........`);

async function getAlluser() {
  try {
    let response = await fetch("https://api.github.com/users/Chirag-Zanpadiya");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`404 Page Not Found`);
  }
}
getAlluser();

// console.log(`.........Promise - 5........`);

fetch("https://api.github.com/users/Chirag-Zanpadiya").then(function (
  response
) {
  let data = response.json();
  console.log(response);
  return data;
}).then(function(data){
    console.log(`Name of the user is :  ${data.login}`);
    
}).catch((err)=>{
    console.log(err);
    
});


let a = new String();
let b = new Array();
