let arr = [-7, 1, 5, 2, -4, 3, 0];
//let arr = [1, 2, 3];
let cum = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  cum.push(sum);
}
console.log(cum);
let count = 0;
for (let i = 0; i < cum.length; i++) {
  let l_side = cum[i - 1]||0;
  let r_side = cum[cum.length - 1] - cum[i];
  if (l_side === r_side) {
    console.log(i)
    count++;
  }
}
if(count > 0){
    console.log(count);
}
else{
    console.log(-1)
}