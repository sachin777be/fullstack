function RevArr(A) {
    let s = 0;
    let e = A.length - 1;
    
    while (s < e) {
      let temp = A[s];
      A[s] = A[e];
      A[e] = temp;
      
      s++
      e--
    }
    return A;
    }
    let A = [3,4,5,5,6,8];
    console.log(RevArr(A))