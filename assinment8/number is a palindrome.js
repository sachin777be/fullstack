function Check_Pali(A) {
    let s = 0;
    let e = A.length - 1;
    let isPalindrome = true;
  
    while (s < e) {
      if (A[s] !== A[e]) {
        isPalindrome = false;
        break;
      }
      s++;
      e--;
    }
  
    if (isPalindrome) {
      console.log("A is Palindrome");
    } 
    else {
      console.log("Not a Palindrome");

    }

  }
  let A = ['g', 'a', 'd', 'e', 'g'];
Check_Pali(A); 