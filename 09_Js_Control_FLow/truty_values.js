// falsy values

// let num = 0;
// let num = -0;
// let num = -0;
// let num = false;
// let bigIntValue = BigInt(30); // Correct way

// if (null) {
//   console.log(`inside the if`);
// } else {
//   console.log(`inside the else`);
// }

// truthy values

// let str = "true";
// // let str = []; // empty arr return the true
// // let str = {}; // empty obj return the true
// // let str =function name() {}; // empty fns return the true

// if (str) {
//   console.log(`inside the if`);
// } else {
//   console.log(`inside the else`);
// }

let stu = {
  getInfo1:function(){
    setTimeout(()=>{
      console.log(this);
      
    },1000);
  }
};
console.log(stu.getInfo1());


