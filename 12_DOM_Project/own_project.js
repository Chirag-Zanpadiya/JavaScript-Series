let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);
  let cel = parseInt(document.querySelector("#cel").value);
  let res = document.querySelector("#res");
  let fahrenheit = (cel * 9) / 5 + 32;
  // console.log(cel);
  if (isNaN(cel)) {
    res.innerHTML = `Invalid number:`;
  } else {
    res.innerHTML = `${fahrenheit}°F`;
  }
});
