function adddMatrix(A,B) {
    if(A.length != B.length || A[0].length != B[0].length) {
        console.log("ERROR")
    }
    let m = A.length;
    let n = A[0].length;
    let result = [];

    for (let i = 0; i < m; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = A[i][j] + B[i][j];
      }
    }
  
    return result;
  }
let A = [[1,2,3],[4,5,6],[7,8,9]];
let B = [[1,2,3],[4,5,6],[7,8,9]];
console.log(adddMatrix(A,B))