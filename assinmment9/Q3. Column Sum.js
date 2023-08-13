function MatColSum(matx) {
    let sum = 0
    let result = []
    for(let j = 0; j < matx[0].length; j++){
        col_sum = 0
        for(let i = 0; i < matx.length; i++){
            col_sum += matx[i][j]
        }
        sum += col_sum
        result.push(col_sum)
    }
    return result
    }
    
    let matx =[ [2, 3, 4, 2],
                [3, 5, 6, 1],
                [1, 8, 9, 0] ]
    console.log(MatColSum(matx))