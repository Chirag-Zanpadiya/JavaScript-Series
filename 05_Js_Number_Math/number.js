let score = new Number(100.54);

// let score = 100;
console.log(score);

let str_score = score.toString();
console.log(` Type of str_score :  ${typeof str_score}`);
console.log(`str_score Len  :  ${str_score.length}`);

let score_fixed = score.toFixed(2);
console.log(`score_fixed :  ${score_fixed}`);

let rupeees = 1000000000;

let score_locat_str = rupeees.toLocaleString('en-IN');
// let score_locat_str = rupeees.toLocaleString();
console.log(`score_locat_str : ${score_locat_str}`);


let amt = 2;
// console.log(`Presicion is : ${amt.toPrecision(5)}`);
// console.log(`Presicion is : ${amt.toPrecision(10)}`);
console.log(`Presicion is : ${amt.toExponential(5)}`);


