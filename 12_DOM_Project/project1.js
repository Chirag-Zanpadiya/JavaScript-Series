let btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");
// console.log(btns);

btns.forEach((each_btn) => {
  console.log(each_btn);

  each_btn.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target.id);
    if (event.target.id === "grey") {
      body.style.backgroundColor = "#212121";
    } else if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }

    // console.log(each_btn);
  });
});
