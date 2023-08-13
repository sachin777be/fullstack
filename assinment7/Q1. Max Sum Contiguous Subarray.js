function MaxSumSub_arry(array) {
    let cum = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      cum.push(sum);
    }
    console.log(cum);
    let max = cum[0]
    for(let i = 1; i < cum.length; i++){
        if(cum[i] > max){
            max = cum[i]
        }
    }
    return max
    }
    let array = [1, 2, 3, 4, -10] 
    console.log(MaxSumSub_arry(array))