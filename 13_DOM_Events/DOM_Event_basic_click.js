// document.getElementById("owl").onclick = () => {
//   alert("Owl Was Clicked");
// };

// // this is not used very well
// document.getElementById("owl").onclick = function () {
//   alert("Owl Was Clicked");
// };

// 2

// let owl = document.querySelector("#owl");
// owl.addEventListener('click' , function(event){
//     // alert("owl again clicked");
//     console.log(event);

// });

// 3

// // let img  = document.querySelector("#images");
// img.addEventListener('keypress' ,  (event)=>{
//     // console.log(`event type : ${event.type}`);
//     // console.log(event.timeStamp);
//     // console.log(event.target);
//     console.log(event.toElement);
//     console.log(event.currentTarget);
//     console.log(event.srcElement);
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log(event.screenX);
//     console.log(event.screenY);
//     console.log(`key : alt  ${event.altKey}`);
//     console.log(`key : ctrl  ${event.ctrlKey}`);
//     console.log(`key : shift  ${event.shiftKey}`);
//     console.log(`key : code  ${event.keyCode}`); // chagnge the #images to body

//     // console.log(event);

// });

// // 4 Events Bubbling

// let parentul = document.querySelector("#images");
// // let parentul = document.querySelectorAll("li");
// let childimg = document.querySelector("#owl");

// parentul.addEventListener("click", (event) => {

//   console.log(`Ulordered Listed is called`);
// } , false);

// childimg.addEventListener("click", (event) => {
//   console.log("Owl Was Clicked");
//   // event.stopPropagation();
// }, false);   // TODO  //if here is "true" then top-bottom propogastions

// // select the google ahref
// let google = document.querySelector("#google");
// google.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log(`Google was clicked`);
// });

// // 5 Select the imges remove  it from li

// let img = document.querySelector("#images");
// img.addEventListener("click", (event) => {
//   // console.log(event);

//   console.log(event.target.nodeName);
//   if (event.target.nodeName == "IMG") {
//     let removeit = event.target.parentNode;
//     removeit.remove();
//   }
// });
