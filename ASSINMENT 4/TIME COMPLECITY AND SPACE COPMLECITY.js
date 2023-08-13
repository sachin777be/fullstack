/* 1. function solve(int n){
    for(let i = 0; i < n; i++){
        for(int j=0; j < i / 2; j++){
            // O(1) operation
        }
    }
}
Ans: TC = O(n^2) and SC = O(1) */


/* 2. What is the time complexity of following code:
 let a = 0, let i = N; 
while (i > 0) { 
    a += i; 
    i /= 2; 
}
Ans: TC = O(log N) and SC = O(1) */


/* 3. If an algorithm has a time complexity of O(1), then the complexity of it is ?
a) constant
b) polynomial
c) exponential
Ans: a) constant */


/* 4.
function solve(n)
{
  let i = n
  while(i>0)
  {
    if(i%2 == 0)
    {
      for(let j = 1; j <= n*n; j+=2)
      {
        statements
      }
    }
    i /=2
  }
}
Ans: TC = O(n^2 log n) and SC = O(1) */

/* 5.
function solve(n)
{
  let i = 1
  while(i < n)
  {
    let x = i
    while(x--)
    {
      o(1)
    }
    i++
  }
}
Ans: TC = O(n^2) and SC = O(1) */