let ar = [1, 3, 2]
//let ar = [2, 6, 1, 6, 9]
let max = ar[0];
let min = ar[0];
for (let i = 0; i < ar.length; i++) {
  if (ar[i] > max) {
    max = ar[i];
  }
  if (ar[i] < min) {
    min = ar[i];
  }
}
console.log(max);
console.log(min);
let mini = -1;
let maxi = -1;
let min_length = Number.MAX_VALUE;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === max) {
    maxi = i;
  }
  if (ar[i] === min) {
    mini = i;
  }
  if (maxi !== -1 && mini !== -1) {
    min_length = Math.min(min_length, Math.abs(maxi - mini) + 1);
  }
}
console.log(min_length);
