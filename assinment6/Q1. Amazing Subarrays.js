function AmazingSubstrings(S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
      if (
        S[i] === 'A' ||
        S[i] === 'E' ||
        S[i] === 'I' ||
        S[i] === 'O' ||
        S[i] === 'U' ||
        S[i] === 'a' ||
        S[i] === 'e' ||
        S[i] === 'i' ||
        S[i] === 'o' ||
        S[i] === 'u'
      ) {
        count = (count + (S.length - i))
      }
    }
    return count;
  }
  
let s = "AEBEC";
console.log(AmazingSubstrings(s))