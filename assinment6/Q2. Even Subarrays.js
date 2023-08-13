function evenSubarraysPossible(A) {
    let countEven = A.reduce((count, num) => count + (num % 2 === 0 ? 1 : 0), 0);
  
    if (countEven < 2) {
      return "NO";
    } else if (countEven % 2 === 1) {
      return "YES";
    } else {
      return "NO";
    }
  }

console.log(evenSubarraysPossible([2, 4, 8, 6]));  // Output: "YES"
//console.log(evenSubarraysPossible([2, 4, 8, 7, 6]));  // Output: "NO"