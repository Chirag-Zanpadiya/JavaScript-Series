// setTimeout(function () {
//   console.log("chirag");
// }, 2000);

let changename = function () {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Prashant Zanpadiya";
  h1.style.backgroundColor = "red";
  console.log("namechaged succesfully");
};

let change_name_timeout = setTimeout(changename, 1000);

let btn = document.querySelector("#stop");

btn.addEventListener("click", () => {
  // console.log("btn ");
  console.log("btn clicked does change the name ");

  clearTimeout(change_name_timeout);
});
