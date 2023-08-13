

let num = 5;
let value = "";

for (let i = 1; i <=num; i++) {
  for ( let j = 1; j<=num-i; j++) {
    value +=" ";
  }
for (let k = 0; k < 2*i-1; k++){
  value += "*";
}
value +="\n";
}
console.log(value);