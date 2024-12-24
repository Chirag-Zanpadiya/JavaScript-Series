let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

  let height = parseInt(document.querySelector("#height").value);
  // console.log(height);
  let weight = parseInt(document.querySelector("#weight").value);
  // console.log(weight);
  let results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Errors  height: ${height} this is in valid`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Errors weight : ${weight} this is in valid`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let guide;
    if (bmi < 18.6) {
      guide = "Under Weight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      guide = "Normal Range";
    } else if (bmi >= 24.9) {
      guide = "Over Weight";
    }
    console.log(guide);

    results.innerHTML = ` <span> ${bmi} </span> & ${guide}`;
  }
});
