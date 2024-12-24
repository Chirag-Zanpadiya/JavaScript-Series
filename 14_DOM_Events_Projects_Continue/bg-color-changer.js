let body = document.querySelector("body");
function random_color() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let opacity = Math.random();
  //   body.style.backgroundColor = `rgba(${red} , ${green} , ${blue} , ${opacity})`;
  return `rgba(${red} , ${green} , ${blue} , ${opacity})`;
  //   return `rgb(${red} , ${green} , ${blue})`;
  //   console.log(`${red} ${green}  ${blue}`);
}
// console.log(bg_color_changer);
let clear_interval;
let start = document.querySelector("#start");
start.addEventListener("click", (e) => {
  if (clear_interval == null) {
    // this is the edge case of the to save the space
    clear_interval = setInterval(() => {
      // console.log("btn ");
      // console.log(bg_color_changer.value);

      body.style.backgroundColor = random_color(); // this will execute the fns
      console.log(body.style.backgroundColor);
    }, 200);
  }
});

let stop = document.querySelector("#stop");

stop.addEventListener("click", (e) => {
  clearInterval(clear_interval);
  clear_interval = null;
});
