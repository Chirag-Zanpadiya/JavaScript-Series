// let startinterval;
// let btnstart = document.querySelector("#start");
// let clock = document.querySelector("#clock");
// btnstart.addEventListener("click", function () {
//   startinterval = setInterval(() => {
//     let time = new Date();
//     console.log(`Chirag At :  ${time.toLocaleTimeString()} `);
//     clock.innerHTML = `${time.toLocaleTimeString()}`;
//   }, 1000);
// });
// let stopinterval = document.querySelector("#stop");
// stopinterval.addEventListener("click", function () {
//   clearTimeout(startinterval);
//   clock.innerHTML = ``;
// });

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let btn = document.querySelector("#clock");

let startinterval;
start.addEventListener("click", (event) => {
  if (startinterval == null) {
    startinterval = setInterval(function () {
      let time = new Date();
      let clock = time.toLocaleTimeString();
      btn.innerHTML = `${clock}`;
    }, 1000);
  }
});

stop.addEventListener("click", (e) => {
  btn.innerHTML = ``;
  clearInterval(startinterval);
  startinterval = null;
});
