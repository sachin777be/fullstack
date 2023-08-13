/*1. You are given an array A of integers of size N.
Your task is to find the equilibrium index of the given array
The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.
Note:
Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.
constraints:
1 <= N <= 10^5
-10^5 <= A[i] <= 10^5*/
let arr = [-7, 1, 5, 2, -4, 3, 0];
let arr = [1, 2, 3];
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