function SwapNum(a,b) {
    let temp = a
    a = b
    b = temp

    return [a,b]
}
let a = 43;
let b = 65;
console.log(SwapNum(a,b)) 