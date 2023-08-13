function Cal_Vo_Co(S) {
    let count_vo = 0;
    let count_co = 0;
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
        count_vo += 1
      }
      else {
        count_co += 1
      }
    }
    return [count_vo, count_co];
  }
  
let S = "Good Morning";
console.log(Cal_Vo_Co(S))