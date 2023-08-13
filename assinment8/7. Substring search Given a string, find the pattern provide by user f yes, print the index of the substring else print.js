function Search_fun(str, sub_str) {
    let indices = [];
    for (let i = 0; i <= str.length - sub_str.length; i++) {
      let j = 0;
      while (j < sub_str.length) {
        if (str[i + j] !== sub_str[j]) {
          break;
        }
        j++;
      }
      if (j === sub_str.length) {
        indices.push(i);
      }
    }
    return indices;
  }
  let str = "Hello good morning"
  let sub_str = "god"
  let outp = Search_fun(str,sub_str)
  console.log(outp);