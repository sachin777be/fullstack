let str = "ABCGAG"
let str = "GAB"
let cg = 0
let cp = 0
for(let i = str.length-1; i >= 0; i--)
{
  if(str[i] == 'G')
  {
    cg++
  }
  if(str[i] == 'A')
  {
    cp+=cg
  }
}
console.log(cp)