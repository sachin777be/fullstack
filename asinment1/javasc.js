// 1.construct a pyramid
let n = 5
count = 1
for (let i = 0; i < 5; i++) {
  pattern = ""
  spaces = " "
  sp = spaces.repeat(4 - i)
  for (j = 0; j < count; j++) {
    pattern += "*"
  }
  console.log(sp + pattern)
  count += 2
}
