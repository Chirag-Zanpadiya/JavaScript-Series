let arr = [2, 4, 6, 8 , 7];

let ans = arr.every((val) => {
  return (val & 1) == 0;
});

console.log(ans);
