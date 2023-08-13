function leader(aray) {
    max = aray[aray.length-1]
    cp = 1
    op = []
    op.push(max)
    for(let i = aray.length-1; i >= 0; i-- ){
      if(aray[i] > max){
        max = aray[i]
        op.push(aray[i])
        cp++
      }
    }
    console.log(op)
    return cp
    }
    aray = [16, 17, 4, 3, 5, 2]
    console.log(leader(aray)) 